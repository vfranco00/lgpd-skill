#!/usr/bin/env bash
# Confere a matriz de cobertura: em cada linha de docs/matriz-de-cobertura.md, a skill (skills/<Skill>/SKILL.md)
# e o arquivo da coluna Arquivo precisam existir, e o arquivo precisa ficar dentro de skills/<Skill>/.
# Imprime OK <#>, FALTA <#> <caminho> ou FORA DA SKILL <#> <caminho>; no fim, <n> de 92 linhas atendidas;
# sai com 1 se alguma linha não for atendida.
set -euo pipefail
cd "$(dirname "$0")/.."

matriz=docs/matriz-de-cobertura.md
total=92

# Uma linha por exigência: número, skill e arquivo, sem espaços nem crases.
linhas=$(awk -F '|' '$2 ~ /^ *[0-9]+ *$/ {
  for (i = 2; i <= 6; i++) gsub(/[ `]/, "", $i)
  print $2 "\t" $5 "\t" $6
}' "$matriz")

numeros=$(printf '%s\n' "$linhas" | cut -f 1 | sort -n | tr '\n' ' ')
if [ "$numeros" != "$(seq 1 "$total" | tr '\n' ' ')" ]; then
  echo "ERRO: $matriz precisa das linhas 1 a $total, cada uma uma vez"
  exit 1
fi

atendidas=0
while IFS=$'\t' read -r numero skill arquivo; do
  caminhos=("skills/$skill/SKILL.md")
  [ "$arquivo" = "${caminhos[0]}" ] || caminhos+=("$arquivo")
  completa=1
  case /$arquivo/ in
    */../*) dentro=0 ;;
    "/skills/$skill/"*) dentro=1 ;;
    *) dentro=0 ;;
  esac
  if [ "$dentro" -eq 0 ]; then
    echo "FORA DA SKILL $numero $arquivo"
    completa=0
  fi
  for caminho in "${caminhos[@]}"; do
    if [ ! -f "$caminho" ]; then
      echo "FALTA $numero $caminho"
      completa=0
    fi
  done
  if [ "$completa" -eq 1 ]; then
    echo "OK $numero"
    atendidas=$((atendidas + 1))
  fi
done <<< "$linhas"

echo "$atendidas de $total linhas atendidas"
[ "$atendidas" -eq "$total" ] || exit 1
