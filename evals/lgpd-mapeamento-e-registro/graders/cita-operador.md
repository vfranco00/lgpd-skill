---
type: regex
pattern: '\bcontrolador(?:es)?\s+e\s+(?:o\s+|os\s+)?operador(?:es)?\b[^.;\n]{0,40}?\b(?:mant|registr|dev|precis|obrigad|t[eê]m)|\boperador(?:es)?\s+tamb[eé]m\b(?!\s+n[ãa]o\b)|\btamb[eé]m\s+(?:o\s+|os\s+|ao\s+|aos\s+)?operador(?:es)?\b(?![^.;\n]{0,15}\bn[ãa]o\b)|(?<!n[ãa]o\s)\b(?:obriga|exige|manda|vale\s+para|se\s+aplica\s+a)\s+(?:o\s+|ao\s+|os\s+|aos\s+)?operador|\boperador(?:es)?\b,?\s+(?:voc[eê]s\s+)?(?:tamb[eé]m\s+)?(?:precisa[mn]?|deve[mn]?|t[eê]m\s+(?:de|que)|mant[eêé]m|mantenham|registra[mn]?|s[ãa]o\s+obrigad[oa]s?|[ée]\s+obrigad[oa])[^.;\n]{0,40}?\bregistr'
flags: i
---

A resposta diz que o operador também mantém o registro das operações que realiza (LGPD, art. 37). Aceita "controlador e operador devem manter", "o controlador e o operador mantêm", "o operador também", "também o operador", "vale para o operador", "o art. 37 obriga o operador", "o operador precisa registrar" e "o operador é obrigado a manter o registro". Não conta "o operador também não", "também o operador não precisa" nem "não obriga o operador". Limite de um grader de presença: não lê o resto da frase.
