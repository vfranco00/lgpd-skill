> Fontes: ver skills/lgpd/references/fontes.md — siglas usadas: [LGPD], [L12965], [L13787], [Res15], [GuiaAgentes], [GuiaSeguranca], [Regulamentacoes], [Agenda], [CTN]

# Término do tratamento e eliminação (LGPD, arts. 15 e 16)

Paráfrase, não texto oficial. Artigo sem norma ao lado é da LGPD (Lei nº 13.709/2018). Situação conferida em 09/11/2026.

## 1. Quando o tratamento termina (art. 15)

O tratamento termina em quatro hipóteses:

- **I. Finalidade alcançada ou dado desnecessário.** Verifica-se que a finalidade foi atingida, ou que os dados deixaram de ser necessários ou pertinentes para a finalidade específica.
- **II. Fim do período de tratamento.** O período que o controlador fixou; a forma e a duração do tratamento estão entre as informações a que o titular tem acesso (art. 9º, II).
- **III. Comunicação do titular**, inclusive quando ele revoga o consentimento (art. 8º, § 5º), resguardado o interesse público.
- **IV. Determinação da ANPD**, quando houver violação da lei. A eliminação dos dados a que se refere a infração também é sanção (art. 52, VI).

Para cada categoria de dado, anote o evento que encerra a finalidade: fim do contrato, encerramento da conta, fim do atendimento, fim do período informado ao titular. Sem evento definido, o dado fica sem fim, contra a necessidade (art. 6º, III). Para a ANPD, coletar e guardar dado sem utilidade imediata e concreta, só porque um dia pode servir, não é prática adequada (guia de segurança da ANPD para pequeno porte, v1.0, outubro de 2021, item 45).

## 2. Depois do término: eliminar, salvo 4 hipóteses (art. 16)

Terminado o tratamento, os dados são eliminados, no âmbito e nos limites técnicos das atividades. A conservação só é autorizada para estas finalidades:

| Inciso | Hipótese | O que exige |
|---|---|---|
| I | cumprimento de obrigação legal ou regulatória pelo controlador | a norma e o artigo que mandam guardar, com o prazo dela (`tabela-de-guarda-legal.md`) |
| II | estudo por órgão de pesquisa | órgão de pesquisa no sentido do art. 5º, XVIII; anonimização sempre que possível |
| III | transferência a terceiro | os requisitos de tratamento da LGPD, a começar pela base legal da transferência |
| IV | uso exclusivo do controlador | dados anonimizados e sem acesso de terceiro |

Não estão na lista: prazo de contrato, prazo de prescrição, "pode ser útil", pedido de outra área da empresa. Nenhum deles justifica, por si, guardar depois do término:

- **Contrato.** O prazo do contrato pode marcar o fim do período de tratamento (art. 15, II); depois dele, só as hipóteses do art. 16. Entre controlador e operador, o prazo e o destino dos dados no fim são instruções do controlador (art. 39).
- **Prescrição.** Prescrição é o prazo para alguém cobrar ou processar, não um dever de guardar (`tabela-de-guarda-legal.md`, seções 6 e 7). Guardar para se defender enquanto ela corre é uma finalidade própria, com base no art. 7º, VI (exercício regular de direitos em processo judicial, administrativo ou arbitral), ou no art. 11, II, "d", para dado sensível, e só com os dados necessários à defesa (art. 6º, III). Se essa base cobre processo que ainda não começou é ponto de revisão jurídica.
- **Anonimizar em vez de eliminar.** Dado anonimizado não é dado pessoal, salvo se a anonimização tiver sido revertida com meios próprios ou puder ser revertida com esforço razoável (art. 12, caput e § 1º); o inciso IV exige ainda uso exclusivo e nenhum acesso de terceiro. Dado pseudonimizado continua pessoal (art. 13, § 4º). Padrões de anonimização: não regulamentado pela ANPD até 09/11/2026 (Agenda 2025-2026, item 9).

## 3. Quem decide e como se documenta

- **O controlador decide.** A duração do tratamento e o prazo para eliminar os dados são decisões do controlador (art. 5º, VI; guia de agentes da ANPD, v2.0, abril de 2022, item 38).
- **O operador aplica.** O operador trata segundo as instruções do controlador (art. 39): aplica o prazo instruído e elimina ou devolve os dados no fim, como o contrato mandar (`lgpd-operador-e-contratos`). Sem instrução, pergunta ao controlador; não fixa o prazo por ele.
- **Transparência.** O titular tem direito a informação sobre a forma e a duração do tratamento (art. 9º, II) e a consultá-las de forma facilitada e gratuita (art. 6º, IV).
- **Prestação de contas.** Guarde a tabela de prazos, com a norma de cada linha, e a prova do que foi eliminado (art. 6º, X).
- **ANPD.** A lei permite que a ANPD disponha sobre o tempo de guarda dos registros (art. 40); ela não dispôs: não regulamentado pela ANPD até 09/11/2026 (lista oficial de regulamentações).
- **Ponto de parada.** Definir prazo de retenção passa pelo advogado e pela área responsável pelo dado (skill `lgpd`, `references/pontos-de-parada.md`, ponto 5).

## 4. Quando o titular pede a exclusão

O atendimento do pedido (canal, identidade, prazos, resposta e registro) é da skill `lgpd-direitos-do-titular`. Esta seção diz o que sai e o que fica.

- **O que o pedido alcança.** A eliminação a pedido cobre os dados tratados com o consentimento do titular, exceto nas hipóteses do art. 16 (art. 18, VI). Dado desnecessário, excessivo ou tratado em desconformidade com a lei pode ser anonimizado, bloqueado ou eliminado a pedido (art. 18, IV). A comunicação do titular também é hipótese de término (art. 15, III).
- **Aplicação de internet.** O usuário tem direito à exclusão definitiva dos dados que forneceu à aplicação, a seu pedido, ao fim da relação, ressalvada a guarda obrigatória de registros prevista no Marco Civil e na LGPD (Lei nº 12.965/2014, art. 7º, X).
- **O que fica.** O dado com dever legal de guarda fica até o fim do prazo (art. 16, I) e, nesse tempo, só serve para cumprir esse dever (art. 6º, I e III). A resposta diz o que foi eliminado, o que ficou, por qual hipótese e até quando: são as razões de fato ou de direito do art. 18, § 4º, II.
- **Quem recebeu os dados.** Avise de imediato os agentes com quem houve uso compartilhado, para que repitam a eliminação, salvo se isso for comprovadamente impossível ou exigir esforço desproporcional (art. 18, § 6º); instrua os operadores (art. 39).
- **Exemplo de clínica.** O prontuário fica pelo prazo mínimo da Lei nº 13.787/2018 (art. 6º); as notas fiscais, até a prescrição dos créditos tributários (CTN, art. 195, parágrafo único); os registros de acesso à aplicação, 6 meses, se quem oferece a aplicação for provedor obrigado (Lei nº 12.965/2014, art. 15). O dado de campanha tratado com consentimento sai (art. 18, VI). Detalhes em `tabela-de-guarda-legal.md`.

## 5. Os registros da própria LGPD

| Registro | Prazo | Norma | Skill |
|---|---|---|---|
| Registro de incidentes de segurança, comunicados ou não | no mínimo 5 anos, contados da data do registro, ou mais se outra obrigação exigir | Res. CD/ANPD nº 15/2024, art. 10 | `lgpd-incidentes` |
| Registro das operações de tratamento | não fixado; não regulamentado pela ANPD até 09/11/2026 | LGPD, arts. 37 e 40 | `lgpd-mapeamento-e-registro` |
| Registro dos pedidos de titulares | não fixado na lei; serve à prestação de contas | LGPD, art. 6º, X | `lgpd-direitos-do-titular` |
| Prova do consentimento | não fixado na lei; o ônus da prova é do controlador | LGPD, art. 8º, § 2º | `lgpd-bases-legais` |

Onde não há prazo legal, o controlador fixa um, com o motivo, e leva à revisão jurídica (ponto de parada 5).
