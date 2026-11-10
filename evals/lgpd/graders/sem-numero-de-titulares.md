---
type: regex
pattern: '(?<![\d.,])(?<!R\$ )(?<!R\$)\b(?:(?:2|dois)\s*milh(?![\wãõ]*\s+de\s+reais)|2\.000\.000(?![\d,]|\s+de\s+reais))'
flags: i
match: not_contains
---

A resposta não usa número de titulares para larga escala: a Res. CD/ANPD nº 2/2022, art. 4º, § 1º, não fixa número. O padrão pega "2 milhões", "dois milhões" e "2.000.000" (de titulares, de usuários ou soltos), mas não valores em reais que podem aparecer numa resposta certa sobre o teto de receita, como R$ 12 milhões, R$ 1,2 milhão, R$ 2 milhões, 2 milhões de reais ou R$ 2.000.000,00.
