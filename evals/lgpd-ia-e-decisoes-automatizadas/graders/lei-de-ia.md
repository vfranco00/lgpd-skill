---
type: regex
pattern: '\blei\s+(?:geral\s+|espec[íi]fica\s+)?(?:de|da|sobre)\s+(?:IA|intelig[êe]ncia\s+artificial)\b|\bmarco\s+(?:legal\s+)?d[ae]\s+(?:IA|intelig[êe]ncia\s+artificial)\b|\b(?:PL|projeto\s+de\s+lei)\s*(?:n\.?\s*[º°o]?\s*\.?\s*)?2\.?338\b'
flags: i
---

A resposta trata da lei de IA ou do PL nº 2.338/2023, em tramitação na Câmara (situação conferida em 09/11/2026). É grader de presença, de propósito: não confere se a resposta diz que a lei não existe ou que o projeto está em tramitação; quem discrimina neste eval são `oposicao` e `nao-regulamentado`. Aceita "lei de IA", "lei geral de inteligência artificial", "marco legal da IA", "PL 2.338", "PL 2338", "PL nº 2.338/2023" e "Projeto de Lei 2.338"; não casa "PL 12.338" nem "PL 2.3380".
