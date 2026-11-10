---
type: regex
pattern: 'responsabilidades?\s+(?:d[oa]s?\s+|de\s+(?:cada\s+)?)?(?:agentes?\b|controlador(?:es)?\s+e\s+(?:d[oa]s?\s+)?operador)|\bart(?:igo)?\.?\s*9\s*[º°o]?\s*,\s*(?:inciso\s+)?VI\b|\binciso\s+VI\s+do\s+art(?:igo)?\.?\s*9(?!\d)|cabe\s+a\s+cada\s+agente'
flags: i
---

A resposta inclui a 6ª informação do art. 9º da LGPD, as responsabilidades dos agentes que realizarão o tratamento (inciso VI), que o modelo de política mais comum omite; num marketplace, ela diz quem é controlador, quem é operador e o que cabe a cada um. Aceita "responsabilidades dos agentes", "responsabilidades de agentes de tratamento", "responsabilidade de cada agente", "responsabilidades do controlador e do operador", "art. 9º, VI", "artigo 9º, inciso VI", "inciso VI do art. 9º" e "o que cabe a cada agente"; não casa "art. 9º, VII", "inciso VI do art. 19" nem "responsabilidade civil".
