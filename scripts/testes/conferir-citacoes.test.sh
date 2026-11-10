#!/usr/bin/env bash
# Testa o conferir-citacoes.sh numa cópia temporária, com skills e tabelas de fontes de teste: cada caso monta
# a sua árvore, roda o script e confere o código de saída e as linhas da saída. Nada é gravado no repositório.
# Uso: bash scripts/testes/conferir-citacoes.test.sh (de qualquer diretório). Última linha: TESTE OK.
set -eu
raiz=$(cd "$(dirname "$0")/../.." && pwd)
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT

falhas=0
falhou() { echo "FALHOU $caso: $1"; falhas=$((falhas + 1)); }
nbsp=$'\302\240' # espaço não separável (U+00A0)

# Tabela de fontes de todos os casos. A Lei 13.853/2019 só aparece na coluna Situação.
fontes='| Sigla | Norma | Número e data | Situação em 09/11/2026 | URL oficial | Conferida em |
|---|---|---|---|---|---|
| [A] | Norma A | Lei 13.709/2018 | em vigor; alterada pela Lei 13.853/2019 | https://a.invalid/ | 09/11/2026 |
| [B] | Norma B | Res. CD/ANPD 15/2024 | em vigor | https://b.invalid/ | 09/11/2026 |
| [C] | Norma C | Res. CD/ANPD 2/2022 | em vigor | https://c.invalid/ | 09/11/2026 |
| [D] | Norma D | Res. CD/ANPD 18/2024 | em vigor | https://d.invalid/ | 09/11/2026 |
| [E] | Norma E | Lei Complementar 128/2008 | em vigor | https://e.invalid/ | 09/11/2026 |
| [F] | Norma F | Lei 13.787/2018 | em vigor | https://f.invalid/ | 09/11/2026 |
| [G] | Norma G | Decreto 8.771/2016 | em vigor | https://g.invalid/ | 09/11/2026 |
| [H] | Norma H | Enunciado CD/ANPD 1/2023 | em vigor | https://h.invalid/ | 09/11/2026 |
| [I] | Norma I | Decreto-Lei 5.452/1943 | em vigor | https://i.invalid/ | 09/11/2026 |
| [J] | Norma J | Res. CFM nº 1.821/2007 | em vigor | https://j.invalid/ | 09/11/2026 |'

# preparo: função opcional que acrescenta arquivos à árvore do próximo caso (recebe a pasta da árvore).
preparo=""

# caso <nome> <texto da SKILL.md> <código esperado> [linha...]: cada linha precisa estar na saída;
# "!<texto>" pede que nenhuma linha da saída contenha <texto>.
caso() {
  caso=$1 texto=$2 esperado=$3
  shift 3
  arvore="$tmp/$caso"
  mkdir -p "$arvore/scripts" "$arvore/skills/lgpd/references" "$arvore/skills/teste"
  cp "$raiz/scripts/conferir-citacoes.sh" "$arvore/scripts/"
  printf '%s\n' "$fontes" > "$arvore/skills/lgpd/references/fontes.md"
  printf -- '---\nname: teste\n---\n%s\n' "$texto" > "$arvore/skills/teste/SKILL.md"
  [ -z "$preparo" ] || "$preparo" "$arvore"
  preparo=""
  codigo=0
  saida=$(bash "$arvore/scripts/conferir-citacoes.sh" 2>&1) || codigo=$?
  [ "$codigo" -eq "$esperado" ] || falhou "saiu com $codigo (esperado: $esperado); saída: $(printf '%s' "$saida" | tr '\n' '|')"
  for linha in "$@"; do
    case $linha in
      !*) if printf '%s\n' "$saida" | grep -qF -- "${linha#!}"; then falhou "a saída não pode ter: ${linha#!}"; fi ;;
      *) printf '%s\n' "$saida" | grep -qxF -- "$linha" || falhou "falta a linha: $linha" ;;
    esac
  done
}

# Formas aceitas de nº, de órgão e de tipo.
caso n-ponto-o 'A Lei n.º 13.709/2018 vale.' 0 'OK Lei 13.709/2018'
caso n-grau 'A Lei n° 13.709/2018 vale.' 0 'OK Lei 13.709/2018'
caso n-maiusculo 'A Lei Nº 13.709/2018 vale.' 0 'OK Lei 13.709/2018'
caso res-n-maiusculo 'A Res. CD/ANPD Nº 15/2024 vale.' 0 'OK Resolução 15/2024'
caso resolucao-n-ponto-o 'A Resolução CD/ANPD n.º 2/2022 vale.' 0 'OK Resolução 2/2022'
caso resolucao-anpd 'A Resolução ANPD nº 18/2024 vale.' 0 'OK Resolução 18/2024'
caso decreto-n-ponto-o 'O Decreto n.º 8.771/2016 vale.' 0 'OK Decreto 8.771/2016'
caso enunciado-n-maiusculo 'O Enunciado CD/ANPD Nº 1/2023 vale.' 0 'OK Enunciado 1/2023'
caso lc 'A LC 128/2008 vale.' 0 'OK Lei Complementar 128/2008'
caso minuscula 'A lei 13.787/2018 vale.' 0 'OK Lei 13.787/2018'
caso decreto-lei 'O Decreto-Lei nº 5.452/1943 vale.' 0 'OK Decreto-Lei 5.452/1943' '!OK Lei 5.452/1943'
caso ponto-final 'Vale a Lei 13.709/2018. E vale de novo (Lei nº 13.709/2018).' 0 'OK Lei 13.709/2018' '!FORMA NÃO RECONHECIDA'
caso fim-de-palavra 'Avisa os controladores. 2 dias depois, os operadores. 3 vezes.' 0 'nenhuma citação'
caso lc-n 'A LC nº 128/2008 vale.' 0 'OK Lei Complementar 128/2008'
caso nbsp "A Lei${nbsp}nº 99.999/2099 vale." 1 'SEM FONTE Lei 99.999/2099 (skills/teste/SKILL.md)'
caso nbsp-complementar "A Lei${nbsp}Complementar${nbsp}nº 128/2008 vale." 0 'OK Lei Complementar 128/2008'
caso sinal-numero 'A Lei № 99.999/2099 vale.' 1 'SEM FONTE Lei 99.999/2099 (skills/teste/SKILL.md)'
caso caixa-alta 'A LEI Nº 99.999/2099 vale.' 1 'SEM FONTE Lei 99.999/2099 (skills/teste/SKILL.md)'
caso caixa-alta-resolucao 'A RESOLUÇÃO CD/ANPD Nº 15/2024 vale.' 0 'OK Resolução 15/2024'

# Siglas entre colchetes não são citação: todas as de fontes.md, como no cabeçalho dos references.
siglas=$(grep -o -E '^\| \[[^]]+\]' "$raiz/skills/lgpd/references/fontes.md" | sed 's/^| //' | paste -sd ',' - | sed 's/,/, /g')
caso=siglas
[ "$(printf '%s\n' "$siglas" | tr ',' '\n' | grep -c '\[')" -ge 30 ] || falhou "fontes.md tem menos de 30 siglas"
caso siglas "> Fontes: ver skills/lgpd/references/fontes.md — siglas usadas: $siglas." 0 'nenhuma citação'

# Prosa: "resolução" em minúscula seguida de "no" ou de número não é citação; com maiúscula, "no" não é nº.
caso prosa-resolucao 'A resolução no 1º contato vale. A tela tem resolução 1920 por 1080.' 0 'nenhuma citação'
caso prosa-maiuscula 'Resolução no 1º contato vale.' 0 'nenhuma citação'
# Com número e ano, "no" no lugar de nº reprova, como em "Lei no 13.709/2018".
caso res-no-com-ano 'A Res. no 15/2024 vale.' 1 'FORMA NÃO RECONHECIDA Res. no 15/2024 (skills/teste/SKILL.md)'
caso resolucao-no-com-ano 'A Resolução no 99.999/2099 vale.' 1 'FORMA NÃO RECONHECIDA Resolução no 99.999/2099 (skills/teste/SKILL.md)'

# Minúscula na forma larga: "decreto" sempre; "res.", "resolução(ões)" e "enunciado(s)" antes de órgão ou de nº.
caso decreto-minusculo 'O decreto nº 12.880, de 18 de março de 2026, vale.' 1 'FORMA NÃO RECONHECIDA decreto nº 12.880 (skills/teste/SKILL.md)'
caso resolucao-minuscula 'A resolução CD/ANPD nº 2, de 27 de janeiro de 2022, vale.' 1 \
  'FORMA NÃO RECONHECIDA resolução CD/ANPD nº 2 (skills/teste/SKILL.md)'
caso res-minusculo 'A res. nº 15, de 24 de abril de 2024, vale.' 1 'FORMA NÃO RECONHECIDA res. nº 15 (skills/teste/SKILL.md)'
caso enunciados-minusculo 'Os enunciados CD/ANPD nº 1/2023 e 2/2024 valem.' 1 \
  'FORMA NÃO RECONHECIDA enunciados CD/ANPD nº 1/2023 e 2/2024 (skills/teste/SKILL.md)'

# Resolução de outro órgão: a sigla do órgão entra na chave da conferência.
caso outro-orgao 'A Res. CFM nº 1.821/2007 vale.' 0 'OK Resolução CFM 1.821/2007'
caso outro-orgao-sem-fonte 'A Resolução CMN nº 4.893/2021 vale.' 1 'SEM FONTE Resolução CMN 4.893/2021 (skills/teste/SKILL.md)'
caso outro-orgao-mesmo-numero 'A Res. CFM nº 15/2024 vale.' 1 'SEM FONTE Resolução CFM 15/2024 (skills/teste/SKILL.md)' \
  '!OK Resolução 15/2024'
caso outro-orgao-por-extenso 'A Resolução CFM nº 1.821, de 11 de julho de 2007, vale.' 1 \
  'FORMA NÃO RECONHECIDA Resolução CFM nº 1.821 (skills/teste/SKILL.md)'
# A sigla vem logo depois do tipo; depois do número, a citação não seria conferida contra a resolução certa.
caso orgao-depois-do-numero 'A Resolução nº 15/2024 do CFM vale.' 1 \
  'FORMA NÃO RECONHECIDA Resolução nº 15/2024 do CFM (skills/teste/SKILL.md)' '!OK Resolução 15/2024'

# Medida provisória sem conversão: citada como MP, fora da conferência (CONTRIBUTING.md, regra 1).
caso mp-sem-conversao 'A MP nº 2.200-2/2001 vale.' 0 'nenhuma citação'

# Formas fora de Tipo nº N/AAAA.
caso lei-por-extenso 'A Lei nº 12.345, de 14 de agosto de 2018, vale.' 1 'FORMA NÃO RECONHECIDA Lei nº 12.345 (skills/teste/SKILL.md)'
caso decreto-por-extenso 'O Decreto nº 12.880, de 18 de março de 2026, vale.' 1 'FORMA NÃO RECONHECIDA Decreto nº 12.880 (skills/teste/SKILL.md)'
caso resolucao-por-extenso 'A Resolução CD/ANPD nº 2, de 27 de janeiro de 2022, vale.' 1 'FORMA NÃO RECONHECIDA Resolução CD/ANPD nº 2 (skills/teste/SKILL.md)'
caso lc-por-extenso 'A LC 128, de 19 de dezembro de 2008, vale.' 1 'FORMA NÃO RECONHECIDA LC 128 (skills/teste/SKILL.md)'
caso plural 'As Resoluções CD/ANPD nº 79/2021 e 80/2023 valem.' 1 'FORMA NÃO RECONHECIDA Resoluções CD/ANPD nº 79/2021 e 80/2023 (skills/teste/SKILL.md)'
caso segundo-numero 'A Lei nº 13.709/2018 e 99.999/2099 valem.' 1 'FORMA NÃO RECONHECIDA Lei nº 13.709/2018 e 99.999/2099 (skills/teste/SKILL.md)' '!OK Lei 13.709/2018'
caso segundo-numero-com-n 'A Lei nº 13.709/2018 e nº 99.999/2099 valem.' 1 \
  'FORMA NÃO RECONHECIDA Lei nº 13.709/2018 e nº 99.999/2099 (skills/teste/SKILL.md)' '!OK Lei 13.709/2018'
caso ano-curto 'A Lei 8.212/91 vale.' 1 'FORMA NÃO RECONHECIDA Lei 8.212/91 (skills/teste/SKILL.md)'
caso lc-colada 'A LC128/2008 vale.' 1 'FORMA NÃO RECONHECIDA LC128/2008 (skills/teste/SKILL.md)'

# Normalização, tabelas de fontes e código de saída.
caso normalizacao 'A Lei 13709/2018 vale.' 0 'OK Lei 13.709/2018'
caso coluna-situacao 'A Lei nº 13.853/2019 vale.' 1 'SEM FONTE Lei 13.853/2019 (skills/teste/SKILL.md)'
caso sem-citacao 'Texto sem norma citada.' 0 'nenhuma citação'
caso sem-fonte 'A Res. CD/ANPD nº 15/2024 vale. O Decreto nº 99.999/2099 não existe.' 1 \
  'SEM FONTE Decreto 99.999/2099 (skills/teste/SKILL.md)' 'OK Resolução 15/2024'

# A tabela padrão é a da maestra; fontes-pendentes.md de outra skill, se existir, também conta.
pendentes() {
  mkdir -p "$1/skills/outra/references"
  printf '%s\n' '| Sigla | Norma | Número e data | Situação em 09/11/2026 | URL oficial | Conferida em |' '|---|---|---|---|---|---|' \
    '| [L13853] | Norma | Lei 13.853/2019 | em vigor | https://p.invalid/ | 09/11/2026 |' > "$1/skills/outra/references/fontes-pendentes.md"
}
preparo=pendentes
caso fontes-pendentes 'A Lei nº 13.853/2019 vale.' 0 'OK Lei 13.853/2019'

fornecedores() {
  printf '%s\n' '| Provedor | Documento | Para quê (transferência, operador, IA) | URL | Conferida em |' '|---|---|---|---|---|' \
    '| X | Termo que cita a Lei 10.406/2002 | operador | https://x.invalid/ | 09/11/2026 |' > "$1/skills/lgpd/references/fontes-fornecedores.md"
}
preparo=fornecedores
caso fontes-fornecedores 'A Lei nº 10.406/2002 vale.' 0 'OK Lei 10.406/2002'

# Só fontes.md, fontes-fornecedores.md e fontes-pendentes.md contam como tabela de fontes; a padrão é a da maestra.
outro_nome() {
  mkdir -p "$1/skills/teste/references"
  printf '%s\n' '| Sigla | Norma | Número e data | Situação em 09/11/2026 | URL oficial | Conferida em |' '|---|---|---|---|---|---|' \
    '| [X] | Norma | Lei 11.111/2018 | em vigor | https://y.invalid/ | 09/11/2026 |' > "$1/skills/teste/references/fontes-antigas.md"
}
preparo=outro_nome
caso outro-nome 'A Lei nº 11.111/2018 vale.' 1 'SEM FONTE Lei 11.111/2018 (skills/teste/SKILL.md)'

# Um byte nulo faz o grep tratar o arquivo como binário; a citação precisa ser lida mesmo assim.
binario() {
  printf -- '---\nname: teste\n---\nTexto com nulo:\000 aqui.\nO Decreto nº 99.999/2099 não existe.\n' > "$1/skills/teste/SKILL.md"
}
preparo=binario
caso binario 'substituído pelo preparo' 1 'SEM FONTE Decreto 99.999/2099 (skills/teste/SKILL.md)'

# Os modelos de assets/ também são lidos.
modelo() {
  mkdir -p "$1/skills/teste/assets"
  printf '%s\n' 'O Decreto nº 99.999/2099 não existe.' > "$1/skills/teste/assets/modelo.md"
}
preparo=modelo
caso assets 'Texto sem norma citada.' 1 'SEM FONTE Decreto 99.999/2099 (skills/teste/assets/modelo.md)'

if [ "$falhas" -gt 0 ]; then
  echo "TESTE FALHOU: $falhas falha(s)"
  exit 1
fi
echo "TESTE OK"
