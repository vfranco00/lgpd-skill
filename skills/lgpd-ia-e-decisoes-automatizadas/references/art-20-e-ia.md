> Fontes: ver skills/lgpd/references/fontes.md — siglas usadas: [LGPD], [Res2], [Res23], [Res31], [Res30], [Agenda], [D12880], [Regulamentacoes], [DD20-2024], [DD33-2024], [L12414].

# Decisões automatizadas, princípios e transparência de agentes de IA

Paráfrase, não texto oficial. Base normativa: 09/11/2026. Artigo sem norma ao lado é da Lei nº 13.709/2018 (LGPD). "Voto nº 11" e "Voto nº 23" são os votos que fundamentam as decisões da ANPD de 2024 sobre treino de IA (`treino-de-modelos.md`, seção 2), citados pelo item.

## 1. Onde a LGPD entra

- **Toda operação conta.** Coletar as conversas de um agente de IA, guardá-las, mandá-las a um provedor de modelo, treinar com elas e usar o modelo para responder ou decidir são tratamento (art. 5º, X). Vale a lei inteira, com o papel fixado por uso (controlador ou operador: art. 5º, VI e VII).
- **A regra própria é o art. 20.** A LGPD não tem capítulo de IA; o art. 20 trata da decisão automatizada, e o resto vem dos princípios (art. 6º), das bases (arts. 7º e 11), da transparência (art. 9º) e do relatório de impacto (art. 38).
- **Sem regulamento e sem lei de IA.** A ANPD não regulamentou o art. 20 nem o uso de IA: não regulamentado pela ANPD até 09/11/2026 (Agenda Regulatória 2025-2026, item 6). Não há lei geral de IA (`treino-de-modelos.md`, seção 1).

## 2. Art. 20, caput: o direito de pedir revisão

- **O texto.** O titular pode pedir a revisão de decisões tomadas unicamente com base em tratamento automatizado de dados pessoais que afetem os interesses dele, inclusive as que definem o perfil pessoal, profissional, de consumo e de crédito ou aspectos da personalidade (art. 20, caput).
- **Os elementos.** Uma decisão; tomada unicamente por tratamento automatizado; que afete interesses do titular. Negar crédito automaticamente tem os três, e o próprio texto cita o perfil de crédito.
- **"Unicamente".** O que conta como decisão unicamente automatizada (por exemplo, quando uma pessoa só confirma o resultado do modelo) não está regulamentado pela ANPD até 09/11/2026; a Agenda prevê parâmetros interpretativos para o art. 20 (item 6). Prática da skill: na dúvida, trate como unicamente automatizada e registre o motivo.
- **Quem revisa.** A LGPD não exige revisão por pessoa natural: a redação original do caput falava em revisão "por pessoa natural", a redação atual não fala, e o § 3º, incluído em 2019, foi vetado (art. 20, caput e § 3º). Norma do setor ou contrato podem trazer regra própria, inclusive a revisão por pessoa: confira antes de desenhar o fluxo (no crédito, ver "Crédito com o cadastro positivo", abaixo). Prática: registre quem revisa, com que poder de mudar a decisão, e como o resultado chega ao titular.
- **Prazo.** O art. 20 não fixa prazo, e os 15 dias da LGPD são só da declaração completa de confirmação e acesso (art. 19, II). O prazo da revisão não está regulamentado pela ANPD até 09/11/2026: a Agenda Regulatória 2025-2026 trata dos direitos dos arts. 18 a 20 no item 1 e dos parâmetros do art. 20 no item 6. Prazo interno é escolha da empresa e se registra como tal.
- **Crédito com o cadastro positivo.** A Lei nº 12.414/2011 disciplina a formação e a consulta a bancos de dados com informações de adimplemento, para formação de histórico de crédito (art. 1º). Entre os direitos do cadastrado estão conhecer os principais elementos e critérios considerados para a análise de risco, resguardado o segredo empresarial (art. 5º, IV), e solicitar ao consulente, quem acessa informações nesses bancos de dados (art. 2º, V), a revisão de decisão realizada exclusivamente por meios automatizados (art. 5º, VI); o prazo para disponibilizar as informações dos incisos II e IV é de 10 dias (art. 5º, § 3º). Na nota ou pontuação de crédito de pessoa cadastrada não entram informações não vinculadas à análise de risco de crédito, nem as relacionadas à origem social e étnica, à saúde, à informação genética, ao sexo e às convicções políticas, religiosas e filosóficas; nem as de pessoas sem relação de parentesco de primeiro grau ou de dependência econômica com o cadastrado; nem as do exercício do direito de acesso do art. 5º, II (art. 7º-A, I a III). O art. 5º, VI, não diz quem faz a revisão. Se a IA de crédito usa esses bancos de dados ou essa nota, essas regras se somam às da LGPD, cujos direitos e princípios não excluem outros previstos no ordenamento jurídico (LGPD, art. 64).
- **O pedido.** Recebimento, identificação, registro e resposta seguem a skill `lgpd-direitos-do-titular`; esta skill prepara o conteúdo (critérios, procedimentos e o fluxo de revisão).
- **Sem retaliação.** Os dados do exercício de direitos não podem ser usados em prejuízo do titular (art. 21): o pedido de revisão não pesa em decisão futura.

## 3. Art. 20, § 1º: critérios e procedimentos

- **O dever.** O controlador fornece, sempre que pedido, informações claras e adequadas sobre os critérios e os procedimentos usados na decisão automatizada, observados os segredos comercial e industrial (art. 20, § 1º).
- **Também no acesso.** A declaração completa de acesso indica, entre outras coisas, os critérios utilizados e a finalidade do tratamento (art. 19, II).
- **O que preparar** (prática; a forma não está regulamentada pela ANPD até 09/11/2026):
  1. que dados entram e de onde vêm;
  2. quais critérios pesam na decisão e em que sentido, em linguagem que o titular entenda;
  3. o procedimento: etapas, o que é regra fixa e o que é modelo, a versão em uso;
  4. no caso do titular, o resultado e os principais motivos;
  5. como pedir a revisão e como corrigir dado incompleto, inexato ou desatualizado (art. 18, III).
- **Segredo.** O segredo comercial e industrial limita o que se entrega; não apaga o dever. Prática: registre o que foi retido e por quê, porque a recusa baseada no segredo permite à ANPD auditar o tratamento (seção 4).

## 4. Art. 20, § 2º: auditoria da ANPD

- **O texto.** Se as informações do § 1º não forem dadas por causa do segredo comercial e industrial, a ANPD pode auditar o tratamento automatizado para verificar aspectos discriminatórios (art. 20, § 2º).
- **O que ter pronto** (prática): registro de cada decisão (entradas, versão do modelo, resultado e motivo), os testes de discriminação com data e resultado e a documentação do modelo. A base é a não discriminação (art. 6º, IX) e a prestação de contas (art. 6º, X).

## 5. Os princípios do art. 6º no treino e no uso

O tratamento observa a boa-fé e os dez princípios (art. 6º, caput). A última coluna aponta onde o tema aparece nas decisões da ANPD de 2024 sobre treino de IA.

| Princípio (art. 6º) | No treino | No uso (agente, decisão) | Onde aparece em 2024 |
|---|---|---|---|
| I, finalidade | treinar é finalidade própria, específica e informada; sem uso posterior incompatível | cada uso do modelo tem finalidade escrita | Voto nº 11, item 4.31; Voto nº 23, item 4.35 |
| II, adequação | compatível com o que foi informado na coleta | a resposta do agente cabe no contexto informado | |
| III, necessidade | só os dados necessários; filtros antes do treino | só as variáveis necessárias à decisão | Voto nº 11, itens 4.30 e 4.31 |
| IV, livre acesso | o titular consulta, de graça, forma e duração do tratamento | idem, inclusive sobre a decisão | Voto nº 11, item 4.46 |
| V, qualidade dos dados | dados exatos e atualizados no conjunto de treino | decisão com dado errado se corrige (art. 18, III) | |
| VI, transparência | aviso claro, preciso e acessível antes do início | o titular sabe que há decisão automatizada e quem a toma, observados os segredos | Voto nº 11, itens 4.33 a 4.38 |
| VII, segurança | conjunto de treino protegido contra acesso indevido | registros e saídas protegidos | |
| VIII, prevenção | evitar dano antes de treinar: exposição de dado pessoal nas respostas do modelo, conteúdo sintético | testar antes de pôr em produção | Voto nº 11, item 4.56 |
| IX, não discriminação | conjunto e rótulos sem viés ilícito ou abusivo | decisão sem fim discriminatório ilícito ou abusivo; testes | |
| X, responsabilização e prestação de contas | teste de balanceamento, registro e relatório de impacto | registro das decisões e dos testes | Voto nº 23, itens 4.51 e 4.52 |

## 6. Transparência de agentes de IA

- **O que o titular recebe.** Informação clara, adequada e ostensiva sobre o tratamento (art. 9º): finalidade específica (I); forma e duração (II); identificação e contato do controlador (III e IV); uso compartilhado, como o envio das conversas a um provedor de modelo, e a finalidade (V); responsabilidades dos agentes (VI); direitos, com menção ao art. 18 (VII). Para o agente de IA, isso inclui: se a conversa é guardada e por quanto tempo; se treina modelo; se o agente decide ou alimenta uma decisão, e como pedir revisão e os critérios (art. 20).
- **Mudança no tratamento.** Pôr o treino como finalidade nova pede comunicação clara, ampla e específica, não só a atualização da política: a expectativa do titular não muda na velocidade da política (Voto nº 11, itens 4.36 a 4.38). O plano aprovado em 2024 levou notificação no aplicativo e por e-mail, avisos em destaque e atualização do aviso de privacidade (Voto nº 23, itens 4.24 e 4.27). Mudou a finalidade, a forma e a duração, o controlador ou o uso compartilhado (art. 9º, I, II, III ou V), o controlador informa o titular com destaque e de forma específica, qualquer que seja a base (art. 8º, § 6º); com consentimento, o titular pode revogá-lo, e a finalidade incompatível com ele pede aviso prévio (art. 9º, § 2º).
- **Avisar que é IA.** A LGPD não traz regra expressa para avisar que o interlocutor é um sistema automatizado. Fornecedor de produto ou serviço direcionado a crianças e adolescentes, ou de acesso provável por eles, que gera conteúdo e conversa em linguagem natural (modelos de linguagem, agentes conversacionais) é transparente com eles sobre o caráter sintético e automatizado, previne manipulação, avalia o risco algorítmico e adota salvaguardas; a ANPD regulamentará e fiscalizará (Decreto nº 12.880/2026, art. 11). Fora desse caso, avisar no início da conversa é prática recomendada pela skill, ligada à transparência (art. 6º, VI).
- **Crianças.** A informação sobre o tratamento de dados de crianças é simples, clara e acessível, adequada ao entendimento da criança (art. 14, § 6º). O resto: `lgpd-criancas-e-adolescentes`.
- **Publicar.** O aviso sai pela skill `lgpd-transparencia-e-politicas`, e publicar é ponto de parada (skill `lgpd`, `references/pontos-de-parada.md`, ponto 1).

## 7. Alto risco, relatório de impacto e registro

- **Critérios.** Alto risco pede ao menos um critério geral e um específico (Res. CD/ANPD nº 2/2022, art. 4º). Gerais: larga escala, sem número fixo (art. 4º, I, a, e § 1º); tratamento que possa afetar significativamente interesses e direitos fundamentais, como o que pode impedir o exercício de direito ou o uso de um serviço ou causar discriminação (art. 4º, I, b, e § 2º). Específicos ligados a IA: tecnologias emergentes ou inovadoras (art. 4º, II, a); decisões tomadas unicamente com base em tratamento automatizado, inclusive as que definem o perfil de crédito (art. 4º, II, c); dados sensíveis ou de crianças, adolescentes e idosos (art. 4º, II, d). Os critérios foram definidos para o regulamento do pequeno porte; para os demais agentes, a skill os usa como referência.
- **Crédito negado automaticamente.** Junta o critério específico da Res. CD/ANPD nº 2/2022, art. 4º, II, c, ao geral do art. 4º, I, b, quando a decisão pode impedir o uso do serviço: alto risco por esses critérios.
- **Relatório de impacto.** A ANPD pode determinar ao controlador que o elabore, com o conteúdo mínimo do art. 38, parágrafo único (art. 38); no legítimo interesse, pode pedi-lo (art. 10, § 3º). O regulamento do relatório não saiu: não regulamentado pela ANPD até 09/11/2026 (Agenda, item 2). No caso de 2024, a empresa entregou relatório de impacto à ANPD (Voto nº 23, item 3.11), e a área técnica tratou o treino como atividade de alto risco (Voto nº 11, item 4.63). No alto risco, a skill recomenda prepará-lo com `lgpd-relatorio-de-impacto`; aprová-lo é ponto de parada (ponto 4).
- **Registro.** Controlador e operador mantêm registro das operações, especialmente com legítimo interesse (art. 37): `lgpd-mapeamento-e-registro`.

## 8. Regulação e fiscalização

- **Agenda.** O item 6, "Inteligência Artificial", está em andamento: tomada de subsídios de novembro de 2024 a janeiro de 2025, consolidação das contribuições e webinário em 2025 [Agenda]. Ele prevê parâmetros interpretativos para o art. 20 e, no treino e no uso de IA, direitos, princípios, hipóteses legais e boas práticas e governança (Res. CD/ANPD nº 23/2024, alterada pela Res. CD/ANPD nº 31/2025). Até sair o regulamento, vale o texto do art. 20 e dos §§ 1º e 2º.
- **Mapa.** IA é o Tema 4 do Mapa de Temas Prioritários 2026-2027: 20 atividades de fiscalização, inclusive sobre dados de crianças e adolescentes, metade até o 1º semestre de 2027 e metade até o 2º semestre de 2027 (Res. CD/ANPD nº 30/2025).
- **Precedente.** As decisões de 2024 sobre treino de IA estão em `treino-de-modelos.md`, seção 2 ([DD20-2024], [DD33-2024]).
- **Data de hoje posterior a 09/11/2026:** confira a lista oficial de regulamentações [Regulamentacoes] e a página da Agenda antes de dizer que o art. 20 continua sem regulamento.
