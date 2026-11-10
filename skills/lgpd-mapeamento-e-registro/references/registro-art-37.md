> Fontes: ver skills/lgpd/references/fontes.md — siglas usadas: [LGPD], [Res1], [Res2], [Res15], [ModeloRegistro], [GuiaAgentes], [GuiaSeguranca], [GuiaLegitimoInteresse], [Regulamentacoes], [Agenda]

# Registro das operações de tratamento (LGPD, art. 37)

Paráfrase, não texto oficial. Situação conferida em 09/11/2026. "Guia" é o Guia orientativo para definições dos agentes de tratamento de dados pessoais e do encarregado, da ANPD, versão 2.0 (abril de 2022), citado pelo número do item; é orientação, não norma. Os artigos citados da Res. CD/ANPD nº 1/2021 e da Res. CD/ANPD nº 15/2024 são dos regulamentos anexos a elas.

## 1. O que a lei manda

- **Quem e o quê.** O controlador e o operador mantêm registro das operações de tratamento de dados pessoais que realizam, sobretudo quando a base legal é o legítimo interesse (LGPD, art. 37). O artigo tem só o caput.
- **Dever dos dois.** Pelo Guia, com o art. 37 controlador e operador partilham a obrigação e a responsabilidade de manter o registro das operações de tratamento (item 61).
- **Manter.** O registro acompanha o tratamento enquanto ele existe: operação nova, mudança e fim de operação entram nele. A lei não fixa periodicidade de revisão.
- **Conteúdo.** A LGPD não diz o que o registro deve conter. A ANPD regulou só a forma simplificada do pequeno porte e publicou o modelo dela (seções 3 e 4). Para os demais agentes, o conteúdo do registro: não regulamentado pela ANPD até 09/11/2026; nenhuma resolução da lista oficial trata dele [Regulamentacoes], e a Agenda 2025-2026 não tem item sobre ele [Agenda]. No tratamento com base no legítimo interesse, o guia da ANPD sobre essa base orienta que a documentação pode trazer o teste de balanceamento [GuiaLegitimoInteresse]; o teste fica com a skill `lgpd-bases-legais`. A forma completa da seção 5 é escolha da `lgpd-skill`, não regra da lei.

## 2. Controlador e operador: o que cada um registra

- **O papel se fixa por operação.** A mesma organização pode ser controladora numa operação e operadora em outra (Guia, item 8). Cada operação entra no registro com o papel que a equipe tem nela. Papel em dúvida: skill `lgpd-aplicacao-e-papeis`, que grava `.lgpd/papeis.md`.
- **Controlador.** Registra as operações que decide, inclusive as que um operador realiza em nome dele, já que o tratamento não precisa ser feito diretamente pelo controlador (Guia, item 35); a entrada diz quem é esse operador. Finalidade e base legal são dele (Guia, item 37), assim como a natureza dos dados e a duração do tratamento, com o prazo de eliminação (item 38).
- **Operador.** Registra as operações que realiza em nome de cada controlador (LGPD, art. 5º, VII; art. 37). A skill organiza o registro em uma entrada por operação e por controlador; é escolha dela, porque o art. 37 não diz como organizar. Clientes com as mesmas instruções podem dividir a entrada: o mesmo contrato padrão, com a mesma finalidade, os mesmos dados, a mesma base legal informada, o mesmo prazo e os mesmos suboperadores autorizados. A entrada do grupo leva um rótulo e diz onde está a lista dos clientes (os contratos), sem os nomes deles no registro.
  - Trata segundo as instruções do controlador (LGPD, art. 39) e só para a finalidade que ele fixou (Guia, item 53). Por isso finalidade, base legal, natureza dos dados e prazo de eliminação entram como o controlador informou, com a fonte (contrato, instrução escrita, data). Sem a informação, a entrada diz "a confirmar com o controlador"; o operador não preenche por ele.
  - O operador pode decidir elementos não essenciais, como softwares, equipamentos e o detalhe das medidas de segurança (Guia, itens 36 e 57): esses ele registra como decisão própria.
  - Suboperador: o Guia recomenda que o operador obtenha do controlador autorização formal, genérica ou específica, para contratá-lo (item 67). A entrada diz o suboperador e a autorização. Contrato e diligência: skill `lgpd-operador-e-contratos`.
  - O registro ajuda a provar as excludentes da LGPD, art. 43, I e II: que a equipe não fez o tratamento que lhe atribuem, ou que o fez sem violar a lei. Sair das instruções lícitas leva à responsabilidade solidária e à equiparação ao controlador (art. 42, § 1º, I).
- **Os dois papéis na mesma empresa.** Quem é operador dos dados dos clientes costuma ser controlador dos próprios: equipe, cobrança, contatos comerciais, site. Essas operações entram no registro como de controlador.

## 3. Pequeno porte: o registro simplificado (Res. CD/ANPD nº 2/2022, art. 9º)

- **O que muda.** O agente de tratamento de pequeno porte pode cumprir de forma simplificada o dever de elaborar e manter o registro do art. 37 da LGPD, e a ANPD fornece o modelo (Res. CD/ANPD nº 2/2022, art. 9º e parágrafo único). É forma simplificada do mesmo dever, não dispensa.
- **Quem pode.** Os agentes do art. 2º, I, inclusive quem assume obrigações típicas de operador, desde que fora do art. 3º: não fazer tratamento de alto risco (I), não passar do limite de receita bruta (II) e não pertencer a grupo econômico cuja receita global passe desse limite (III).
- **Alto risco** exige ao menos 1 critério geral e 1 específico (art. 4º, caput). Um dos específicos é usar dado pessoal sensível ou dado de criança, de adolescente ou de idoso (art. 4º, II, d). Sistema que trata dado de saúde, biometria ou filiação a sindicato (LGPD, art. 5º, II), comuns em RH, tem esse critério; com um critério geral (art. 4º, I), o tratamento é de alto risco e o regime de pequeno porte, com o registro simplificado, deixa de valer. Porte e alto risco se decidem em `lgpd-aplicacao-e-papeis` e ficam nas seções Porte e Alto risco de `.lgpd/papeis.md`.
- **A ANPD pode exigir mais.** Ela pode determinar ao agente de pequeno porte o cumprimento das obrigações dispensadas ou flexibilizadas, considerando a natureza ou o volume das operações e os riscos para os titulares (art. 16).
- **Prazo em dobro** para apresentar informações, documentos, relatórios e registros que a ANPD pedir (art. 14, IV).

## 4. O modelo simplificado da ANPD (14/06/2023)

A ANPD publicou o modelo em 14/06/2023, em PDF e em planilha, com uma versão que traz as instruções de preenchimento [ModeloRegistro]. A notícia da publicação diz que ele reúne só os campos essenciais para a fiscalização da ANPD receber, se precisar, as informações básicas do agente. Cada formulário se refere a um processo interno (instrução do campo 7).

Os 8 campos, listados com os nomes e as opções do formulário:

| # | Campo | O que o formulário pede (paráfrase das instruções) |
|---|---|---|
| 1 | Informações de contato | Organização (nome da empresa); CNPJ; Endereço; Principal atividade (da empresa); Gestor responsável; E-mail; Telefone; Data do registro (data do preenchimento). |
| 2 | Categorias de titulares | Marcar: Titulares em geral; Crianças e adolescentes; Idosos. |
| 3 | Dados pessoais | Marcar: Nome; Endereço; RG; E-mail; CPF; Telefone; e Outros, para especificar. Só os tipos de dado: nunca os valores (o número do CPF ou do RG) nem a descrição deles (o nome ou o endereço em si). |
| 4 | Compartilhamento | Descrever o fluxo de compartilhamento para fora da organização e o nome dos terceiros que receberam os dados (o exemplo do formulário diz também para quê). |
| 5 | Medidas de segurança | Listar as medidas que protegem os dados (o formulário cita controle de acesso, antivírus atualizado, cópias de segurança, pseudonimização e firewall) e remete ao checklist do guia de segurança da informação para pequeno porte [GuiaSeguranca]. |
| 6 | Período de armazenamento | Por quanto tempo os dados ficam guardados na base do agente. |
| 7 | Processo, finalidade e hipótese legal | O nome do processo interno a que o registro se refere, a finalidade (o motivo do tratamento) e a hipótese legal que o justifica, pelos arts. 7º e 11 da LGPD. |
| 8 | Observações | Informações opcionais, se houver, como dados de encarregados e de operadores e transferências internacionais. |

**Sem campos novos.** Na forma simplificada, a skill usa os 8 campos como estão, sem acrescentar campos, para o registro continuar reconhecível como o modelo da ANPD. É escolha da skill: nem a resolução nem o modelo proíbem acrescentar informação. Quem precisa de mais campos usa a forma completa (seção 5).

**Operador usando o modelo.** O formulário não tem campo para o controlador em nome de quem o operador trata. A skill anota o controlador (nome e contato) e a fonte das instruções em Observações, campo que o modelo deixa para informações opcionais (escolha da skill). No campo 7, a hipótese legal é a que o controlador informou; no campo 6, o prazo que ele instruiu.

## 5. A forma completa que a skill adota

Para quem não pode usar o modelo simplificado, ou não quer. É escolha da `lgpd-skill`, porque o conteúdo do registro completo é não regulamentado pela ANPD até 09/11/2026. Cada entrada traz:

- os 8 campos do modelo, para que o registro completo tenha ao menos o que a ANPD considera essencial;
- o papel da equipe na operação e, se operadora, o controlador e a fonte das instruções (seção 2);
- a origem dos dados, que a declaração completa ao titular indica (LGPD, art. 19, II);
- os operadores ou, se a equipe é operadora, os suboperadores, com a autorização do controlador (Guia, item 67);
- a transferência internacional: país e hipótese do art. 33 da LGPD, pela skill `lgpd-transferencia-internacional`;
- com legítimo interesse, onde está o teste de balanceamento, pela skill `lgpd-bases-legais`, já que o art. 37 destaca essa base.

Os dados de cada entrada saem da linha da atividade em `.lgpd/mapa-de-dados.md` (`mapeamento.md`).

## 6. Manter, apresentar e guardar

- **Só cresce.** Na `lgpd-skill`, o registro recebe entradas e nunca é regravado inteiro: a mudança ou o fim de uma operação entra no fim, com o mesmo código e a data, e o estado atual da operação é a última entrada dela (regra da `lgpd-skill`).
- **Quem pede.**
  - **Na fiscalização, a ANPD pode exigir o registro do controlador e do operador.** Os dois são agentes de tratamento (LGPD, art. 5º, IX) e, por isso, agentes regulados pela Res. CD/ANPD nº 1/2021 (art. 4º, I). Pela mesma resolução, eles devem fornecer cópia de documentos, dados e informações relevantes para avaliar o tratamento, no prazo, no local e no formato que a ANPD fixar (art. 5º, I), o que alcança o registro das operações. Recusar o atendimento, não enviar ou enviar fora do prazo pode caracterizar obstrução à fiscalização (art. 4º, IV, e art. 6º).
  - A Res. CD/ANPD nº 1/2021 está em revisão (Agenda 2025-2026, item 14). Os deveres na fiscalização estão na skill `lgpd-encarregado-e-governanca`.
  - **No incidente,** a ANPD pode pedir ao controlador, a qualquer tempo, o registro das operações dos dados afetados, com prazo para o envio (Res. CD/ANPD nº 15/2024, art. 8º).
  - **O controlador** costuma pedir ao operador as informações das operações feitas em nome dele; o prazo de entrega vem do acordo de operador (`lgpd-operador-e-contratos`).
  - O art. 37 manda manter o registro, não enviá-lo à ANPD sem pedido.
- **Guarda.** A LGPD não fixa por quanto tempo guardar o registro; o art. 40 permite à ANPD dispor sobre o tempo de guarda dos registros, e para este ela não dispôs: não regulamentado pela ANPD até 09/11/2026. Os 5 anos da Res. CD/ANPD nº 15/2024, art. 10, valem para o registro de incidentes, não para este.
- **Não é o relatório de impacto.** O relatório de impacto é documentação do controlador (LGPD, art. 5º, XVII) que a ANPD pode determinar (art. 38): skill `lgpd-relatorio-de-impacto`.
