---
type: regex
pattern: 'Res(?:olu[çc][ãa]o|\.)\s+(?:(?:da\s+|CD/)?ANPD\s+)?(?:n[º°.]*\s*)?19\b|cl[áa]usulas?(?:[\s-]+contratua(?:l|is))?[\s-]+padr[ãa]o(?:\s+contratua(?:l|is))?\s+(?:brasileiras?|da\s+ANPD|aprovadas?\s+pela\s+ANPD)|SCCs?\s+(?:brasileiras?|da\s+ANPD)|cl[áa]usulas\s+(?:brasileiras|da\s+ANPD)|\bBR\s+SCCs?\b'
flags: i
---

A resposta trata a transferência para a nuvem nos EUA pelas cláusulas-padrão da ANPD (Res. CD/ANPD nº 19/2024, Anexo II, adotadas por inteiro e sem alteração), e não só por "cláusulas-padrão" sem dizer quais. Aceita a citação da resolução nas formas usuais, com ou sem o ano e com "CD/ANPD", "da ANPD" ou nada antes do número; "cláusulas-padrão" ou "cláusulas contratuais padrão" da ANPD, aprovadas pela ANPD ou brasileiras; as formas curtas "cláusulas da ANPD" e "cláusulas brasileiras", que a própria skill usa; e "SCCs brasileiras", "SCCs da ANPD" ou "BR SCCs", a forma do DPA do Google. Reprova "cláusulas-padrão da UE" e "cláusulas da UE".
