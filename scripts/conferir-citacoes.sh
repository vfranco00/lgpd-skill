#!/usr/bin/env bash
# Confere que toda lei, decreto, resolução ou enunciado citado nas skills tem linha numa tabela de fontes.
# Lê as citações de skills/*/SKILL.md, skills/*/references/*.md e skills/*/assets/*.md e procura cada uma nas
# colunas Norma e Número e data das tabelas de fontes. A tabela padrão é a da maestra
# (skills/lgpd/references/fontes.md e fontes-fornecedores.md); fontes.md, fontes-fornecedores.md e
# fontes-pendentes.md de outra skill também contam, se existirem.
# A forma de citar é Tipo nº N/AAAA (ex.: Lei nº 13.709/2018), uma norma por citação; o nº pode faltar ou vir
# como n.º, n°, Nº ou №, e o tipo pode vir em caixa alta ou seguido de espaço não separável. Resolução ou
# enunciado de outro órgão leva a sigla dele logo depois do tipo (ex.: Res. CFM nº 1.821/2007), e a sigla entra na
# conferência; com a sigla depois do número ("Resolução nº 15/2024 do CFM"), a citação reprova, e com o artigo
# antes da sigla ("Resolução do CFM nº …"), o script não a vê.
# Imprime OK <citação>, SEM FONTE <citação> (<arquivo>) ou, quando um tipo vem seguido de número fora dessa
# forma, FORMA NÃO RECONHECIDA <trecho> (<arquivo>); sai com 1 se houver SEM FONTE ou FORMA NÃO RECONHECIDA.
set -euo pipefail
cd "$(dirname "$0")/.."
shopt -s nullglob
# Tudo em bytes: o resultado não depende do locale de quem roda, e UTF-8 inválido não interrompe a leitura.
export LC_ALL=C

# Forma aceita, com o tipo em qualquer caixa. Os sinais de vários bytes (º, °, №, ç, ã e o espaço não separável)
# vão em alternância, e não entre colchetes, porque no locale C cada um tem mais de um byte.
nbsp=$(printf '\302\240')
e="( |$nbsp)"
sinal="([Nn]\.?(º|°)|№)"
n="($sinal\.?$e?)?"
lei='[Ll][Ee][Ii]'
decreto='[Dd][Ee][Cc][Rr][Ee][Tt][Oo]'
complementar='[Cc][Oo][Mm][Pp][Ll][Ee][Mm][Ee][Nn][Tt][Aa][Rr]'
resolucao='[Rr][Ee][Ss]([Oo][Ll][Uu](ção|ÇÃO)|\.)'
enunciado='[Ee][Nn][Uu][Nn][Cc][Ii][Aa][Dd][Oo]'
# Órgão da resolução ou do enunciado: a sigla, como CD/ANPD, ANPD, CFM ou CMN.
orgao='[A-Z]+(/[A-Z]+)*'
estrito="($decreto-$lei$e|$lei$e($complementar$e)?|LC$e|$decreto$e)${n}[0-9.]+/[0-9]{4}|($resolucao|$enunciado)$e($orgao$e)?${n}[0-9.]+/[0-9]{4}"
# Forma larga: um tipo, no singular ou no plural, seguido de número em qualquer formato, inclusive de uma lista
# ("…/2018 e 99.999/2099" ou "…/2018 e nº 99.999/2099"). Lei e decreto valem em qualquer caixa, e LC também colada
# ao número com ano ("LC128/2008"; a sigla "[LC128]" não conta). Resolução e enunciado valem em qualquer caixa antes
# de órgão ou de nº, e com maiúscula também antes do número; "no" só conta como nº antes de número com ano
# ("Res. no 15/2024"): "a resolução no 1º contato" é prosa. Sigla de órgão depois do número também reprova.
numero="[0-9]+([./][0-9]+)*((,?$e([Ee]|[Oo][Uu])|,)$e${n}[0-9.]+/[0-9]{4})*"
n_largo="(([Nn][^0-9 ]{0,4}|№)$e?)?"
res="[Rr][Ee][Ss]([Oo][Ll][Uu](ção|ções|ÇÃO|ÇÕES)|\.)|[Ee][Nn][Uu][Nn][Cc][Ii][Aa][Dd][Oo][Ss]?"
res_maiuscula="R[Ee][Ss]([Oo][Ll][Uu](ção|ções|ÇÃO|ÇÕES)|\.)|E[Nn][Uu][Nn][Cc][Ii][Aa][Dd][Oo][Ss]?"
largo="(${lei}[Ss]?|${decreto}[Ss]?(-${lei}[Ss]?)?|LC$e)($e$complementar([Ee][Ss])?)*$e*$n_largo$numero|LC[0-9.]+/[0-9]+|($res)(($e$orgao)+$e*$n_largo|$e*$sinal\.?$e?)$numero|($res_maiuscula)$e*$numero|($res)$e*[Nn][Oo]$e+[0-9.]+/[0-9]{4}|($res)$e*${n_largo}[0-9.]+/[0-9]{4}$e+[Dd][OoAa][Ss]?$e+[A-Z][A-Z/]+"
# O tipo começa no início da linha ou depois de um caractere que não é letra ("operadores. 2" não conta).
busca="(^|[^A-Za-z])(($estrito)|($largo))"

# normalizar: lê "arquivo:citação" e escreve "Tipo N/AAAA<TAB>arquivo", com o número no formato 12.345; a
# resolução ou o enunciado de outro órgão sai como "Tipo SIGLA N/AAAA" (a ANPD é o padrão, sem sigla).
normalizar() {
  awk '{
    arquivo = $0; sub(/:.*/, "", arquivo)
    citacao = substr($0, length(arquivo) + 2)
    tipo = toupper(citacao)
    if (tipo ~ /^DECRETO-LEI/) tipo = "Decreto-Lei"
    else if (tipo ~ /^(LEI COMPLEMENTAR|LC)/) tipo = "Lei Complementar"
    else if (tipo ~ /^LEI/) tipo = "Lei"
    else if (tipo ~ /^DECRETO/) tipo = "Decreto"
    else if (tipo ~ /^RES/) tipo = "Resolução"
    else tipo = "Enunciado"
    orgao = ""
    if (tipo == "Resolução" || tipo == "Enunciado") {
      resto = citacao; sub(/^[^ ]+ /, "", resto)
      if (match(resto, /^[A-Z]+(\/[A-Z]+)* /)) orgao = substr(resto, 1, RLENGTH - 1)
      if (orgao == "ANPD" || orgao == "CD/ANPD") orgao = ""
      else if (orgao != "") tipo = tipo " " orgao
    }
    match(citacao, /[0-9.]+\/[0-9]+$/)
    numero = substr(citacao, RSTART, RLENGTH); ano = numero
    sub(/\/.*/, "", numero); sub(/.*\//, "", ano); gsub(/\./, "", numero)
    if (numero == "") next
    milhar = ""
    while (length(numero) > 3) {
      milhar = "." substr(numero, length(numero) - 2) milhar
      numero = substr(numero, 1, length(numero) - 3)
    }
    print tipo " " numero milhar "/" ano "\t" arquivo
  }'
}

# Tabela de fontes: só estes três nomes, em qualquer skill (a padrão é a da maestra); o resto é texto a conferir.
fontes=()
textos=()
for arquivo in skills/*/SKILL.md skills/*/references/*.md skills/*/assets/*.md; do
  case ${arquivo##*/} in
    fontes.md | fontes-fornecedores.md | fontes-pendentes.md) fontes+=("$arquivo") ;;
    *) textos+=("$arquivo") ;;
  esac
done

# Cada achado vem como "arquivo:trecho", sem o caractere que separa o tipo da palavra anterior e com o espaço
# não separável trocado por espaço comum.
# grep sai com 1 quando não acha nada, o que aqui não é erro; com 2 (não leu), o pipefail para o script.
achados=$(
  if [ ${#textos[@]} -gt 0 ]; then grep -a -o -H -E "$busca" "${textos[@]}" || [ $? -eq 1 ]; fi |
    sed -E "s/^([^:]*:)[^A-Za-z]/\1/; s/$nbsp/ /g"
)
citacoes=$(printf '%s\n' "$achados" | { grep -E "^[^:]*:($estrito)\$" || [ $? -eq 1 ]; } | normalizar | sort -u)
estranhas=$(printf '%s\n' "$achados" | { grep -v -E -e "^[^:]*:($estrito)\$" -e '^$' || [ $? -eq 1 ]; } | sort -u)
conhecidas=$(
  for arquivo in "${fontes[@]}"; do awk -F '|' '/^\|/ { print $3 " " $4 }' "$arquivo"; done |
    { grep -a -o -E "(^|[^A-Za-z])($estrito)" || [ $? -eq 1 ]; } | sed -E "s/^[^A-Za-z]//; s/$nbsp/ /g; s/^/fontes:/" |
    normalizar | cut -f 1 | sort -u
)

if [ -z "$citacoes" ] && [ -z "$estranhas" ]; then
  echo "nenhuma citação"
  exit 0
fi

erro=0
anterior=""
while IFS=$'\t' read -r citacao arquivo; do
  [ -n "$citacao" ] || continue
  if printf '%s\n' "$conhecidas" | grep -qxF -- "$citacao"; then
    [ "$citacao" = "$anterior" ] || echo "OK $citacao"
  else
    echo "SEM FONTE $citacao ($arquivo)"
    erro=1
  fi
  anterior=$citacao
done <<< "$citacoes"
while IFS=: read -r arquivo trecho; do
  [ -n "$arquivo" ] || continue
  echo "FORMA NÃO RECONHECIDA $trecho ($arquivo)"
  erro=1
done <<< "$estranhas"

exit "$erro"
