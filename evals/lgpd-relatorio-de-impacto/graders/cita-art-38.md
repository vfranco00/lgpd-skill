---
type: regex
pattern: '\bart(?:igo|\.)?\s*38\b|\b(?:arts\.|artigos)\s[^.\n]{0,40}?\be\s+38\b|\b(?:arts\.|artigos)\s*38\b'
flags: i
---

A resposta cita o art. 38 da LGPD, que permite à ANPD determinar o relatório de impacto ao controlador e traz o conteúdo mínimo (parágrafo único). O padrão aceita "art. 38", "art 38", "art.38", "artigo 38" e as listas "arts. 5º, XVII, e 38" e "arts. 38 e 55-J, XIII", mas não "art. 380", "arts. 380 e 381" nem "art. 3º".
