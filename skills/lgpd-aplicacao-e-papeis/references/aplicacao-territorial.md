> Fontes: ver skills/lgpd/references/fontes.md — siglas usadas: [LGPD], [Res2]

# Aplicação da LGPD: quando a lei se aplica e quando não (arts. 1º a 4º)

Paráfrase, não texto oficial. A lei é a Lei nº 13.709/2018 (LGPD), no texto compilado. Situação conferida em 09/11/2026.

## 1. Objeto e fundamentos (arts. 1º e 2º)

- A LGPD trata do tratamento de dados pessoais, inclusive nos meios digitais, feito por pessoa natural ou por pessoa jurídica de direito público ou privado, para proteger os direitos fundamentais de liberdade e de privacidade e o livre desenvolvimento da personalidade da pessoa natural (art. 1º). As normas gerais dela são de interesse nacional e valem para a União, os Estados, o Distrito Federal e os Municípios (art. 1º, parágrafo único).
- Os fundamentos são sete (art. 2º, I a VII): respeito à privacidade; autodeterminação informativa; liberdades de expressão, de informação, de comunicação e de opinião; inviolabilidade da intimidade, da honra e da imagem; desenvolvimento econômico e tecnológico e inovação; livre iniciativa, livre concorrência e defesa do consumidor; direitos humanos, livre desenvolvimento da personalidade, dignidade e exercício da cidadania pelas pessoas naturais.
- Só há LGPD onde há dado pessoal: informação relacionada a pessoa natural identificada ou identificável (art. 5º, I). As demais definições estão em `papeis-por-atividade.md`, seção 1.

## 2. Quando a lei se aplica (art. 3º)

A LGPD se aplica a qualquer operação de tratamento, feita por pessoa natural ou jurídica, de direito público ou privado, **independentemente do meio, do país da sede do agente e do país onde os dados estão**, desde que ocorra pelo menos uma destas três hipóteses (art. 3º, I a III):

| Inciso | Hipótese | Pergunta para o projeto |
|---|---|---|
| I | a operação de tratamento é realizada no território nacional | o tratamento (coleta, armazenamento, processamento, acesso) acontece no Brasil? |
| II | a atividade tem por objetivo ofertar ou fornecer bens ou serviços, ou tratar dados de indivíduos localizados no território nacional | o produto é oferecido a quem está no Brasil, ou trata dados de pessoas que estão no Brasil? |
| III | os dados foram coletados no território nacional | o titular estava no Brasil quando o dado foi coletado? |

- **Coleta no Brasil** é a do dado cujo titular está no território nacional no momento da coleta (art. 3º, § 1º). O que conta é onde a pessoa está (art. 3º, II, e § 1º), não a nacionalidade dela.
- **Sede ou servidor no exterior não afasta a lei.** Uma empresa estrangeira que oferta serviço a quem está no Brasil, ou um sistema que coleta dados de quem está no Brasil e os hospeda fora do país, continua sob a LGPD (art. 3º, caput, II e III). Se o dado sai do Brasil, há também as regras de transferência internacional (arts. 33 a 36): skill `lgpd-transferencia-internacional`.
- **Ressalva do inciso I.** O tratamento do art. 4º, IV (dado vindo do exterior, nas condições da seção 3) não entra na hipótese do inciso I (art. 3º, § 2º).

## 3. Quando a lei não se aplica (art. 4º)

As exceções são estritas: a lei diz "exclusivamente" (incisos I e II) e "fins exclusivos" (inciso III). Tratamento que também sirva a outro fim continua sob a LGPD nesse outro fim.

| Inciso | Exceção | O que ainda vale |
|---|---|---|
| I | tratamento feito por pessoa natural para fins exclusivamente particulares e não econômicos | nada da LGPD; não vale para empresa nem para atividade com fim econômico |
| II, a | fins exclusivamente jornalísticos e artísticos | só para esses fins |
| II, b | fins exclusivamente acadêmicos | aplicam-se os arts. 7º e 11 (bases legais) |
| III | fins exclusivos de segurança pública, defesa nacional, segurança do Estado ou investigação e repressão de infrações penais | legislação específica, com medidas proporcionais e estritamente necessárias, devido processo legal, princípios gerais e direitos do titular da LGPD (§ 1º); regras do § 2º ao § 4º, abaixo |
| IV | dados vindos de fora do território nacional que não são comunicados nem compartilhados com agentes de tratamento brasileiros, nem transferidos a país diferente do de origem, desde que o país de origem tenha grau de proteção de dados adequado ao da LGPD | se o dado for comunicado, compartilhado com agente brasileiro ou transferido a terceiro país, a exceção cai |

Regras do inciso III que pesam para empresa privada (art. 4º, §§ 2º a 4º):

- Pessoa de direito privado não pode fazer esse tratamento, salvo em procedimento sob a tutela de pessoa jurídica de direito público, com informe específico à ANPD e respeitado o § 4º (§ 2º).
- A ANPD emite opiniões técnicas ou recomendações sobre essas exceções e deve solicitar aos responsáveis relatórios de impacto à proteção de dados pessoais (§ 3º).
- Em nenhum caso a totalidade dos dados pessoais de um banco de dados do inciso III pode ser tratada por pessoa de direito privado, salvo a que tenha capital integralmente constituído pelo poder público (§ 4º).
- A empresa que presta serviço a órgão de segurança pública segue também `poder-publico.md`.

O regulamento de pequeno porte também não se aplica às hipóteses do art. 4º da LGPD (Res. CD/ANPD nº 2/2022, art. 1º, parágrafo único).

## 4. Teste, na ordem

1. **Há dado pessoal?** Informação relacionada a pessoa natural identificada ou identificável (art. 5º, I). Dado só de pessoa jurídica (razão social, CNPJ) não é dado pessoal, salvo quando identifica uma pessoa natural (ex.: o nome do empresário individual na razão social); o nome e o e-mail do representante da empresa são.
2. **Alguma hipótese do art. 3º?** Basta uma. Grave qual.
3. **Alguma exceção do art. 4º?** Leia o "exclusivamente" ao pé da letra e separe as finalidades: a exceção cobre só a finalidade que se encaixa nela.
4. **Conclusão por atividade** em `.lgpd/papeis.md`, seção Aplicação. Na dúvida sobre os incisos III ou IV do art. 4º, o caso é de advogado: a skill registra os fatos e para.
