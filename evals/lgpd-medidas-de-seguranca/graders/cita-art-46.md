---
type: regex
pattern: '(?<![\wÀ-ÿ])art(?:igos?|s?\.?)\s*(?:(?:\d+\s*[º°o]?|[ivxl]+(?![\wÀ-ÿ])|caput|par[áa]grafo\s+[úu]nico|§+\s*\d+\s*[º°o]?|inc(?:iso|\.)\s*[ivxl]+(?![\wÀ-ÿ]))(?:\s*,\s*(?:e\s+|a\s+)?|\s+(?:e|a)\s+))*46(?!\d)'
flags: i
---

A resposta apoia as medidas no art. 46 da LGPD (medidas de segurança, técnicas e administrativas, aptas a proteger os dados). Aceita "art. 46", "art.46", "artigo 46" e listas como "arts. 46 a 49", "arts. 6º e 46", "arts. 6º, VII, e 46" e "arts. 44, parágrafo único, e 46", sem casar o art. 146 nem o art. 460. As frases de teste estão em scripts/testes/graders/medidas-nao-regulamentado.mjs.
