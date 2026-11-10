#!/usr/bin/env bash
# Testa o conferir-matriz.sh numa cópia temporária, com matriz e skills de teste: linhas atendidas, arquivos
# que faltam, arquivo fora da pasta da skill e numeração errada. Nada é gravado no repositório.
# Uso: bash scripts/testes/conferir-matriz.test.sh (de qualquer diretório). Última linha: TESTE OK.
set -eu
raiz=$(cd "$(dirname "$0")/../.." && pwd)
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT

falhas=0
falhou() { echo "FALHOU $caso: $1"; falhas=$((falhas + 1)); }

# linha <#> <skill> <arquivo>: uma linha da tabela da matriz.
linha() { printf '| %s | Exigência %s | Fonte %s | %s | %s |\n' "$1" "$1" "$1" "\`$2\`" "\`$3\`"; }
# linhas <de> <até>: linhas atendidas pela skill alfa.
linhas() { for i in $(seq "$1" "$2"); do linha "$i" alfa skills/alfa/references/a.md; done; }

# montar: função que escreve as linhas da tabela do próximo caso.
montar=""

# caso <nome> <código esperado> [linha...]: cada linha precisa estar na saída;
# "!<texto>" pede que nenhuma linha da saída contenha <texto>.
caso() {
  caso=$1 esperado=$2
  shift 2
  arvore="$tmp/$caso"
  mkdir -p "$arvore/scripts" "$arvore/docs" "$arvore/skills/alfa/references" "$arvore/skills/gama/references"
  cp "$raiz/scripts/conferir-matriz.sh" "$arvore/scripts/"
  touch "$arvore/skills/alfa/SKILL.md" "$arvore/skills/alfa/references/a.md" \
    "$arvore/skills/gama/SKILL.md" "$arvore/skills/gama/references/g.md"
  { printf '%s\n' '# Matriz' '' '| # | Exigência | Fonte legal | Skill | Arquivo |' '|---|---|---|---|---|'; "$montar"; } \
    > "$arvore/docs/matriz-de-cobertura.md"
  codigo=0
  saida=$(bash "$arvore/scripts/conferir-matriz.sh" 2>&1) || codigo=$?
  [ "$codigo" -eq "$esperado" ] || falhou "saiu com $codigo (esperado: $esperado)"
  for item in "$@"; do
    case $item in
      !*) if printf '%s\n' "$saida" | grep -qF -- "${item#!}"; then falhou "a saída não pode ter: ${item#!}"; fi ;;
      *) printf '%s\n' "$saida" | grep -qxF -- "$item" || falhou "falta a linha: $item" ;;
    esac
  done
}

todas() { linhas 1 92; }
montar=todas
caso todas 0 'OK 1' 'OK 92' '92 de 92 linhas atendidas' '!FALTA' '!FORA DA SKILL'

faltam() {
  linhas 1 88
  linha 89 delta skills/delta/SKILL.md
  linha 90 beta skills/beta/references/b.md
  linha 91 alfa skills/alfa/references/nao-existe.md
  linha 92 alfa skills/gama/references/g.md
}
montar=faltam
caso faltam 1 'OK 88' 'FALTA 89 skills/delta/SKILL.md' 'FALTA 90 skills/beta/SKILL.md' \
  'FALTA 90 skills/beta/references/b.md' 'FALTA 91 skills/alfa/references/nao-existe.md' \
  'FORA DA SKILL 92 skills/gama/references/g.md' '!OK 92' '88 de 92 linhas atendidas'

volta_de_pasta() {
  linhas 1 91
  linha 92 alfa skills/alfa/../gama/references/g.md
}
montar=volta_de_pasta
caso volta-de-pasta 1 'FORA DA SKILL 92 skills/alfa/../gama/references/g.md' '!OK 92' '91 de 92 linhas atendidas'

sem_a_ultima() { linhas 1 91; }
montar=sem_a_ultima
caso sem-a-ultima 1 'ERRO: docs/matriz-de-cobertura.md precisa das linhas 1 a 92, cada uma uma vez'

repetida() {
  linhas 1 49
  linha 51 alfa skills/alfa/references/a.md
  linhas 51 92
}
montar=repetida
caso repetida 1 'ERRO: docs/matriz-de-cobertura.md precisa das linhas 1 a 92, cada uma uma vez'

if [ "$falhas" -gt 0 ]; then
  echo "TESTE FALHOU: $falhas falha(s)"
  exit 1
fi
echo "TESTE OK"
