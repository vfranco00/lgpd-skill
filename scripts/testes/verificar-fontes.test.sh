#!/usr/bin/env bash
# Testa, numa cópia temporária e sem acesso à rede, que o verificar-fontes.sh lê as URLs da tabela padrão, a da
# maestra (skills/lgpd/references/fontes.md e fontes-fornecedores.md), e, se existirem, as de fontes.md e
# fontes-pendentes.md de outra skill, e não as de outro arquivo cujo nome começa com "fontes".
# As URLs de teste usam o domínio reservado .invalid e ficam na lista de ignoradas; a de fontes-antigas.md não.
# Um byte nulo faz o grep tratar o arquivo como binário; a URL desse arquivo precisa ser lida mesmo assim.
# Uso: bash scripts/testes/verificar-fontes.test.sh (de qualquer diretório). Última linha: TESTE OK.
set -eu
raiz=$(cd "$(dirname "$0")/../.." && pwd)
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT

falhou() { echo "TESTE FALHOU: $1" >&2; exit 1; }

mkdir -p "$tmp/scripts" "$tmp/skills/lgpd/references" "$tmp/skills/outra/references"
cp "$raiz/scripts/verificar-fontes.sh" "$tmp/scripts/"
printf '%s\t%s\n' https://fontes.invalid/ teste https://fornecedores.invalid/ teste https://pendentes.invalid/ teste \
  https://nulo.invalid/ teste > "$tmp/scripts/fontes-ignorar.txt"
echo '| [A] | Norma | Lei 1.111/2001 | em vigor | https://fontes.invalid/ | 09/11/2026 |' > "$tmp/skills/lgpd/references/fontes.md"
echo '| X | Documento | operador | https://fornecedores.invalid/ | 09/11/2026 |' > "$tmp/skills/lgpd/references/fontes-fornecedores.md"
# Outra skill: fontes-pendentes.md e fontes.md, se existirem, também são lidos; fontes-antigas.md, não.
echo '| [B] | Norma | Lei 2.222/2002 | em vigor | https://pendentes.invalid/ | 09/11/2026 |' > "$tmp/skills/outra/references/fontes-pendentes.md"
echo '| [C] | Norma | Lei 3.333/2003 | em vigor | https://antiga.invalid/ | 09/11/2026 |' > "$tmp/skills/outra/references/fontes-antigas.md"
printf '| [D] | Norma com nulo:\000 aqui | Lei 4.444/2004 | em vigor | https://nulo.invalid/ | 09/11/2026 |\n' \
  > "$tmp/skills/outra/references/fontes.md"

codigo=0
saida=$(bash "$tmp/scripts/verificar-fontes.sh" 2>&1) || codigo=$?
printf '%s\n' "$saida"

[ "$codigo" -eq 0 ] || falhou "o script saiu com $codigo (esperado: 0)"
for url in https://fontes.invalid/ https://fornecedores.invalid/ https://pendentes.invalid/ https://nulo.invalid/; do
  printf '%s\n' "$saida" | grep -qxF "AVISO pulada $url: teste" || falhou "não leu $url"
done
if printf '%s\n' "$saida" | grep -qF antiga.invalid; then falhou "leu a URL de fontes-antigas.md"; fi
echo "TESTE OK"
