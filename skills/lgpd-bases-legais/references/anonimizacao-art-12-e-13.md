> Fontes: ver skills/lgpd/references/fontes.md — siglas usadas: [LGPD], [Agenda], [Res23], [Res31], [Regulamentacoes]

# Anonimização e pseudonimização: LGPD, arts. 5º, III e XI, 12 e 13

Paráfrase, não texto oficial. Situação conferida em 09/11/2026. Este arquivo diz quando o dado sai da LGPD; não traz receitas técnicas de anonimização.

## 1. Definições

- **Dado anonimizado (art. 5º, III):** dado relativo a titular que não possa ser identificado, considerados os meios técnicos razoáveis e disponíveis na ocasião do tratamento.
- **Anonimização (art. 5º, XI):** uso de meios técnicos razoáveis e disponíveis no momento do tratamento, pelos quais o dado perde a possibilidade de associação, direta ou indireta, a um indivíduo.
- **Pseudonimização (art. 13, § 4º):** tratamento pelo qual o dado perde a possibilidade de associação, direta ou indireta, a um indivíduo, a não ser pelo uso de informação adicional que o controlador mantém separadamente, em ambiente controlado e seguro. A lei dá a definição "para os efeitos" do art. 13 (estudos em saúde pública), e é a única definição de pseudonimização na LGPD.

## 2. Quando o dado anonimizado sai da lei (art. 12)

| Dispositivo | Regra |
|---|---|
| caput | dado anonimizado não é dado pessoal para a LGPD, salvo quando a anonimização for revertida usando exclusivamente meios próprios, ou quando puder ser revertida com esforços razoáveis |
| § 1º | o que é razoável se mede por fatores objetivos, como o custo e o tempo para reverter a anonimização, conforme as tecnologias disponíveis, e o uso exclusivo de meios próprios |
| § 2º | podem ser igualmente considerados pessoais os dados usados para formar o perfil comportamental de determinada pessoa natural, se identificada |
| § 3º | a ANPD pode dispor sobre padrões e técnicas de anonimização e verificar a segurança deles, ouvido o Conselho Nacional de Proteção de Dados Pessoais |

Consequências:

- **Pseudonimizado continua pessoal.** O controlador guarda a informação que refaz a associação, então o dado pode ser revertido com esforço mínimo, usando só meios próprios (art. 12, caput e § 1º; art. 13, § 4º). O dado pseudonimizado precisa de base legal e de todas as demais obrigações; pseudonimizar reduz risco, não tira o dado da lei.
- **Teste do esforço razoável (§ 1º).** Pergunte quanto custaria e quanto tempo levaria refazer a identificação com a tecnologia disponível hoje, e se bastariam meios próprios. Leitura desta skill: faça a mesma pergunta para quem receber o dado. Exemplo desta skill: hash de CPF sem chave secreta não é anonimização, porque são cerca de 1 bilhão de números possíveis (9 dígitos mais 2 verificadores calculados a partir deles), que se testam por força bruta com pouco custo e em pouco tempo.
- **Perfil comportamental (§ 2º).** Base "anonimizada" usada para montar o perfil de uma pessoa identificada, por exemplo para personalizar ofertas, pode ser considerada dado pessoal ("poderão", diz a lei); trate-a como pessoal e dê base legal à finalidade (`legitimo-interesse.md`, seção 8).
- **O teste é na data do tratamento.** As definições falam em meios razoáveis e disponíveis no momento do tratamento (art. 5º, III e XI), e o § 1º, nas tecnologias disponíveis; a tecnologia muda, e o que era anonimizado pode deixar de ser. Prática desta skill: reavaliar quando o conjunto crescer ou for cruzado com outro.

## 3. Estudos em saúde pública (art. 13, caput e §§ 1º a 3º)

- **Caput.** Órgãos de pesquisa podem acessar bases de dados pessoais para estudos em saúde pública; os dados são tratados só dentro do órgão, só para a pesquisa, em ambiente controlado e seguro, conforme práticas de segurança de regulamento específico, com anonimização ou pseudonimização sempre que possível e com padrões éticos.
- **§ 1º.** A divulgação de resultados ou de qualquer trecho do estudo não pode revelar dados pessoais.
- **§ 2º.** O órgão de pesquisa responde pela segurança da informação e não pode transferir os dados a terceiro em circunstância alguma.
- **§ 3º.** O acesso a esses dados será regulamentado pela ANPD e pelas autoridades da área de saúde e sanitárias, cada uma na sua competência. Não regulamentado pela ANPD até 09/11/2026 (a lista oficial de regulamentações não traz resolução sobre o tema).

## 4. Onde mais a anonimização aparece

- Estudos por órgão de pesquisa: anonimizar sempre que possível (art. 7º, IV; art. 11, II, "c").
- Fim do tratamento: conservar para uso exclusivo do controlador, sem acesso de terceiro, só se os dados forem anonimizados (art. 16, IV); para pesquisa, anonimizar sempre que possível (art. 16, II).
- Direitos: o titular pode pedir a anonimização, o bloqueio ou a eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei (art. 18, IV); a portabilidade não inclui dado já anonimizado pelo controlador (art. 18, § 7º).

## 5. Sem guia final da ANPD

Anonimização e pseudonimização são o item 9 da Agenda Regulatória 2025-2026 (Res. CD/ANPD nº 23/2024, alterada pela Res. CD/ANPD nº 31/2025), voltado aos padrões e técnicas do art. 12, § 3º. Na tabela atualizada em 20/10/2026, o item está em andamento; o estudo preliminar passou por consulta à sociedade de janeiro a março de 2024, e a página lista estudos preliminares e técnicos, não guia final nem regulamento. A lista oficial de regulamentações não traz resolução sobre o tema. Escreva: não regulamentado pela ANPD até 09/11/2026. Até lá, valem as definições do art. 5º, III e XI, e as regras dos arts. 12 e 13, § 4º.
