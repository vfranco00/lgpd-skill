---
type: regex
pattern: 'impr[óo]pri|inadequad|pornogr|(?:conte[úu]do|site|servi[çc]o|material|produto|plataforma)s?\s+(?:para\s+|de\s+)?adult|restrit[oa]s?\s+a\s+adult|maiores\s+de\s+(?:18|dezoito)|\+\s?18|18\s?\+|apostas?|bebidas?\s+alco[óo]lic|jogos?\s+de\s+azar|(?:proibid|vedad)[oa]s?\s+(?:para|a|aos?)\s+(?:menores|crian|adolescentes)'
flags: i
---

A resposta liga a verificação de idade estrita ao conteúdo restrito. Ela nomeia o conteúdo, produto ou serviço impróprio, inadequado ou proibido para menores de 18 anos, ou um exemplo dele: pornografia, conteúdo adulto ou restrito a adultos, conteúdo +18 ou para maiores de 18, apostas, bebidas alcoólicas, jogos de azar, algo vedado a menores. É o que fazem a Lei nº 15.211/2025, art. 9º, e o Decreto nº 12.880/2026, art. 15, § 1º. "Adultos" sozinho, como os adultos com quem a criança conversa (art. 18, III), não conta.

A exigência é proposital: a skill manda dizer o alcance do art. 9º. Uma resposta que diga só "não se aplica a vocês", sem nomear o conteúdo restrito, reprova aqui.

O padrão é montado e testado por `scripts/testes/graders/criancas-a-cada-acesso.mjs`; para mudá-lo, mude o script e copie a saída de `--positivo` para cá.
