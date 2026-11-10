---
type: regex
pattern: 'n[ãa]o\s+(?:somos|sou|[ée]|s[ãa]o)\s+(?:[oa]s?\s+)?agente|art\.?\s*18,?\s*§+\s*4(?![º°o]?,?\s*(?:inc(?:iso|\.)\s*)?II\b)'
flags: i
---

A resposta diz que, sobre os dados de que a empresa não é agente de tratamento, ela responde que não é o agente e indica quem é, sempre que possível (LGPD, art. 18, § 4º, I). Aceita "não somos o agente", "não sou o agente", "não é o agente", "não são os agentes" e a citação do art. 18, § 4º, mas não a do § 4º, II, que é a das razões de fato ou de direito (grader `razoes-de-fato-ou-de-direito`). Limite de um grader de presença: aceita a expressão em qualquer contexto.
