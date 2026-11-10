---
type: regex
pattern: 'n[ãa]o\s+(?:(?:est[áa]|é|foi|foram|est[ãa]o|h[áa]|existe|tem|teve|saiu|editou|publicou)\s+)?(?:ainda\s+)?regul(?:ament|a[çc][ãa]o|ou\b|ad[oa]s?\b)|n[ãa]o\s+h[áa][^.\n;]{0,30}?\bregul(?:ament|a[çc][ãa]o|ou\b|ad[oa]s?\b)|\b(?:sem|inexist\w*)\s+(?:ainda\s+)?regul(?:ament|a[çc][ãa]o|ou\b|ad[oa]s?\b)|(?:pendente|aguarda(?:ndo)?|falta)\s+(?:de\s+|a\s+)?regul(?:ament|a[çc][ãa]o|ou\b|ad[oa]s?\b)|regul(?:ament|a[çc])\S*[^\n;]{0,60}?\b(?:n[ãa]o\s+(?:saiu|existe|foi\s+(?:editad|publicad))|(?:ainda\s+)?(?:est[áa]\s+)?pendente)'
flags: i
---

A resposta diz que a ANPD não regulamentou o art. 20 nem o uso de IA (não regulamentado pela ANPD até 09/11/2026; Agenda Regulatória 2025-2026, item 6). Aceita "não regulamentado", "não está regulamentado", "ainda não regulamentou", "não regulou", "não há regulamento", "não há regulação", "não há, até hoje, regulamento", "sem regulamentação", "sem regulação", "inexiste regulamentação", "pendente de regulamentação", "a regulamentação está pendente", "não editou regulamento" e "o regulamento do art. 20 ainda não saiu". Não casa "a ANPD tem a regulamentação na Agenda" nem "a ANPD já regulamentou o art. 20". Não confere prazo: só exige que a resposta diga que não há regulamento.
