---
type: regex
pattern: 'encarregad[\s\S]{0,200}?(?:nome\s+(?:completo|empresarial)|identidade)|(?:nome\s+(?:completo|empresarial)|identidade)[\s\S]{0,200}?encarregad|encarregad[^\n]{0,80}?\{\{\s*nome'
flags: i
---

A resposta dá a identidade do encarregado, e não só um e-mail: o nome completo, se pessoa natural, ou o nome empresarial com o nome completo da pessoa responsável, se pessoa jurídica (LGPD, art. 41, § 1º; Res. CD/ANPD nº 18/2024, art. 9º, § 1º). Casa "encarregado" a até 200 caracteres de "nome completo", "nome empresarial" ou "identidade", em qualquer ordem, ou o espaço marcado `{{nome}}` na mesma linha do encarregado. A resposta que põe só "Encarregado (DPO): e-mail" falha aqui.
