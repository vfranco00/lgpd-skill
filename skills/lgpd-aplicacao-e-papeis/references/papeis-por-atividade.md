> Fontes: ver skills/lgpd/references/fontes.md — siglas usadas: [LGPD], [GuiaAgentes], [Res2], [Res15], [Res18]

# Papéis por atividade: controlador, operador, controlador conjunto e suboperador

Paráfrase, não texto oficial. "Guia" é o Guia orientativo para definições dos agentes de tratamento de dados pessoais e do encarregado da ANPD, versão 2.0, de abril de 2022 [GuiaAgentes]; "item" é o parágrafo numerado do guia. O guia é orientação, não norma: ele mesmo diz que traz diretrizes não vinculantes (item 3). Situação conferida em 09/11/2026.

## 1. Definições (LGPD, art. 5º)

| Termo | Definição (paráfrase) | Inciso |
|---|---|---|
| Dado pessoal | informação relacionada a pessoa natural identificada ou identificável | I |
| Dado pessoal sensível | dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural | II |
| Dado anonimizado | dado de titular que não possa ser identificado, considerando os meios técnicos razoáveis e disponíveis na ocasião do tratamento | III |
| Titular | pessoa natural a quem se referem os dados pessoais tratados | V |
| Controlador | pessoa natural ou jurídica, de direito público ou privado, a quem competem as decisões referentes ao tratamento de dados pessoais | VI |
| Operador | pessoa natural ou jurídica, de direito público ou privado, que realiza o tratamento de dados pessoais em nome do controlador | VII |
| Encarregado | pessoa indicada pelo controlador e pelo operador para atuar como canal de comunicação entre o controlador, os titulares e a ANPD | VIII |
| Agentes de tratamento | o controlador e o operador | IX |
| Tratamento | toda operação com dados pessoais: coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle, modificação, comunicação, transferência, difusão ou extração | X |
| Anonimização | uso de meios técnicos razoáveis e disponíveis no momento do tratamento pelos quais o dado perde a possibilidade de associação, direta ou indireta, a um indivíduo | XI |

O encarregado não é agente de tratamento: a lei só lista o controlador e o operador (art. 5º, IX).

## 2. O papel é da atividade, e o agente é a organização

- **Por operação de tratamento.** O agente é definido para cada operação; a mesma organização pode ser controladora numa e operadora noutra (Guia, item 8). Por isso o resultado é uma tabela com uma linha por atividade, nunca um rótulo para a empresa inteira.
- **A organização, não as pessoas dela.** Numa pessoa jurídica, o agente é a organização (item 7). Funcionários, servidores, sócios, administradores e equipes atuam sob o poder diretivo dela e não são controladores nem operadores (itens 6, 10, 19 e 60). Uma área interna que recebe a tarefa de escolher os meios continua sendo parte do controlador (Guia, exemplo 10).
- **Pessoa natural pode ser agente.** Quem decide em nome próprio, como o empresário individual ou o profissional liberal, é controlador (itens 32 e 33); a pessoa natural contratada como prestadora de serviço para uma finalidade específica pode ser operadora (item 58).
- **Empresas do mesmo grupo** têm personalidade jurídica própria: cada uma tem o seu papel em cada operação (Guia, exemplo 7).
- **Operador é sempre outra pessoa**, distinta do controlador, que não atua como subordinado dele nem como membro dos seus órgãos (itens 9 e 60).

## 3. Controlador ou operador: o critério

**Quem decide a finalidade e os elementos essenciais é o controlador** (LGPD, art. 5º, VI; Guia, itens 13 e 34 a 38):

- O controlador toma as principais decisões e define a finalidade; isso inclui as instruções dadas aos operadores (item 13). Ele não precisa tratar os dados com as próprias mãos: o que o distingue é o poder de decisão (item 35).
- Ele não precisa tomar todas as decisões. Basta manter sob seu controle as relativas aos **elementos essenciais** (item 36):
  - a **finalidade**, sempre definida pelo controlador, com a base legal (item 37);
  - a **natureza dos dados** tratados (quais dados, de quais titulares) (item 38);
  - a **duração** do tratamento, inclusive o prazo para eliminar os dados (item 38);
  - outros elementos podem ser essenciais conforme o caso concreto (item 38).
- **Elementos não essenciais** podem ficar com o operador sem mudar o papel dele: escolha de software e de equipamentos, detalhamento das medidas de prevenção e de segurança e outras medidas técnicas (itens 36 e 57).

**Quem trata em nome do controlador, dentro da finalidade que ele definiu, é o operador** (LGPD, art. 5º, VII, e art. 39; Guia, itens 51 a 57):

- O operador só pode tratar para a finalidade estabelecida pelo controlador; a diferença entre os dois é o poder de decisão (item 53).
- Obrigações do operador apontadas pelo guia: seguir as instruções do controlador; firmar contrato que fixe o regime de atividades e de responsabilidades; dar ciência ao controlador quando contratar suboperador (item 54).
- A LGPD não exige expressamente contrato entre controlador e operador, mas o guia o recomenda como boa prática (item 55), com objeto, duração, natureza e finalidade do tratamento, tipos de dados e direitos, obrigações e responsabilidades (item 56). O conteúdo do contrato é da skill `lgpd-operador-e-contratos`.

**Fato vale mais que rótulo.** O papel pode constar de lei, regulamento ou contrato, mas a atividade efetiva pode se afastar do papel escrito; é preciso verificar quem, de fato, toma as principais decisões (Guia, item 17).

### Roteiro de decisão (paráfrase do apêndice do guia)

1. Há outro agente de tratamento envolvido nesta operação? Se não, a organização é a única controladora.
2. Se há: é a organização quem define os elementos essenciais (objetivos e base legal; natureza dos dados; período do tratamento, com o prazo de eliminação)? Se sim, ela é controladora nesta operação; siga ao passo 3. Se não, siga ao passo 4.
3. Como ela decide com o outro agente?
   - decidem juntos as finalidades e os elementos essenciais: controladores conjuntos;
   - decidem juntos alguns elementos essenciais e outros separadamente: controladores conjuntos só nessas etapas;
   - decidem separadamente: controladores singulares.
4. Ela atua segundo os interesses e as finalidades definidos por outra pessoa e decide só elementos não essenciais, como as medidas técnicas? Se sim, é operadora.
5. Se não: quem decide atua como profissional subordinado ou membro da organização que toma as decisões? Se sim, não é agente de tratamento.

### Perguntas que decidem, por atividade

| Pergunta | Se a resposta é "nós" | Se é "o cliente" (ou outro) |
|---|---|---|
| Quem decidiu tratar esses dados e para quê? | controlador | operador, se tratamos por conta dele |
| Quem decide quais dados e de quais titulares entram? | indício de controlador | indício de operador |
| Quem decide por quanto tempo ficam e quando são eliminados? | indício de controlador | indício de operador |
| Usamos esses dados para algum fim nosso (métrica de produto, treino de modelo, marketing, prevenção a fraude em proveito próprio)? | controlador dessa finalidade | — |
| Escolhemos só a ferramenta, a infraestrutura e as medidas de segurança? | não muda o papel (itens 36 e 57) | — |

O operador que usa o dado para finalidade própria, fora das instruções lícitas do controlador, responde solidariamente pelos danos e se equipara ao controlador (LGPD, art. 42, § 1º, I). A finalidade própria precisa de base legal própria (art. 7º) e não pode contrariar as instruções do controlador (art. 39).

## 4. Controladoria conjunta (Guia, itens 40 a 50)

- A LGPD não define a controladoria conjunta, mas a prevê de forma implícita: quando mais de um controlador está diretamente envolvido no tratamento que causou dano ao titular, eles respondem solidariamente, salvo as exclusões do art. 43 (LGPD, art. 42, § 1º, II; Guia, itens 40 e 41).
- **Conceito do guia** (item 48): a determinação conjunta, comum ou convergente, por dois ou mais controladores, das finalidades e dos elementos essenciais do tratamento, por meio de acordo que fixe as responsabilidades de cada um quanto ao cumprimento da LGPD.
- **Decisões comuns**: as partes têm intenção comum sobre finalidades e meios e decidem juntas. **Decisões convergentes**: as decisões são distintas, mas se complementam de modo que o tratamento não seria possível sem a participação de ambas (item 44).
- **Os três critérios, todos obrigatórios** (itens 49 e 50):
  1. mais de um controlador tem poder de decisão sobre o tratamento;
  2. há interesse mútuo de dois ou mais controladores, com base em finalidades próprias, sobre um mesmo tratamento;
  3. dois ou mais controladores tomam decisões comuns ou convergentes sobre as finalidades e os elementos essenciais.
- **Mesma base, finalidades distintas, não é conjunta.** Organizações que tratam o mesmo conjunto de dados, cada uma para a sua finalidade, sem finalidade comum, convergente ou complementar, são controladoras singulares; a solidariedade do art. 42, § 1º, II, não se aplica a elas (item 45).
- Nenhum controlador precisa decidir todos os elementos para haver controladoria conjunta (item 46). A identificação depende do caso concreto; configurada, a responsabilidade é solidária (item 47).
- **O que registrar:** os três critérios, um a um, e quem responde ao titular, quem informa o titular e quem comunica incidente. A redação do acordo entre os controladores é ponto de parada para advogado.

## 5. Suboperador (Guia, itens 63 a 69)

- A LGPD só define controlador e operador; o suboperador não existe na lei, mas serve de parâmetro para cadeias mais complexas (itens 63 e 64).
- **Suboperador** é quem o operador contrata para ajudá-lo a tratar dados em nome do controlador. A relação direta dele é com o operador, não com o controlador; operador e suboperador podem, conforme o caso, exercer a função de operador e responder perante a ANPD (item 65).
- **Autorização do controlador.** O guia recomenda que o operador obtenha autorização formal do controlador, genérica (ex.: qualquer subcontratação de serviço técnico, como armazenamento em nuvem) ou específica (uma organização determinada, para finalidade determinada), que pode constar do próprio contrato (item 67 e nota 17). Sem ela, a subcontratação pode ser vista como descumprimento das instruções, o que atrai para o operador responsabilidades que normalmente são só do controlador (item 67; LGPD, art. 42, § 1º, I).
- O suboperador pode ser equiparado ao operador nas atividades para as quais foi contratado, o que estende a cadeia de responsabilidade solidária do art. 42, § 1º, I (item 69).
- **Contratado pelo controlador não é suboperador.** O fornecedor que o próprio controlador contrata é operador dele, ainda que use dados guardados por outro operador (Guia, exemplo 13).

## 6. O que cada papel carrega

| Papel | Deveres principais | Base |
|---|---|---|
| Controlador | escolher a base legal; informar o titular; atender os direitos, que o titular exerce perante o controlador; indicar encarregado; elaborar relatório de impacto quando a ANPD determinar; provar o consentimento; comunicar à ANPD e ao titular o incidente que possa acarretar risco ou dano relevante aos titulares | LGPD, arts. 7º, 9º, 18, caput, 41, 38, 8º, § 2º, e 48; Res. CD/ANPD nº 15/2024, art. 4º; Guia, itens 15 e 16 |
| Operador | tratar segundo as instruções do controlador, que verifica o cumprimento delas e das normas | LGPD, art. 39 |
| Controlador e operador | manter registro das operações de tratamento; adotar medidas de segurança; reparar o dano que causarem | LGPD, arts. 37, 46 e 42, caput; Guia, item 61 |
| Operador que descumpre a lei ou as instruções lícitas | responde solidariamente pelos danos e se equipara ao controlador, salvo as exclusões do art. 43; o guia trata isso como exceção, porque em regra a responsabilidade é do controlador | LGPD, art. 42, § 1º, I; Guia, item 62 |
| Controladores diretamente envolvidos no dano | respondem solidariamente, salvo as exclusões do art. 43 | LGPD, art. 42, § 1º, II |

O incidente que atinge dados de uma atividade em que a equipe é operadora segue o roteiro do operador da skill `lgpd-incidentes`: quem comunica a ANPD e os titulares é o controlador (Res. CD/ANPD nº 15/2024, arts. 4º, 6º, caput, e 9º, caput).

### Encarregado

- O controlador deve indicar encarregado, com identidade e contato divulgados publicamente, de preferência no site; as atividades dele são receber reclamações e comunicações dos titulares, receber comunicações da ANPD, orientar funcionários e contratados e executar as demais atribuições que o controlador ou normas complementares fixarem (LGPD, art. 41, caput e §§ 1º e 2º).
- O guia (2022) já dizia que, como regra, toda organização controladora deve indicar um encarregado, que pode ser funcionário ou agente externo, pessoa física ou jurídica, e recomendava indicá-lo por ato formal (itens 71 e 74). Hoje a atuação do encarregado é regulada pela Res. CD/ANPD nº 18/2024, que exige o ato formal (art. 3º do regulamento anexo) e faz facultativa a indicação pelo operador (art. 6º do regulamento anexo). O agente de pequeno porte não é obrigado a indicar encarregado, mas deve manter canal de comunicação com o titular (Res. CD/ANPD nº 2/2022, art. 11, caput e § 1º). O detalhe está na skill `lgpd-encarregado-e-governanca`.

## 7. Situações comuns em software

O papel sai das perguntas da seção 3, atividade por atividade. As linhas abaixo dizem só onde costuma cair e o que conferir.

| Atividade | Papel que costuma caber | O que conferir |
|---|---|---|
| Dados que o cliente cadastra num sistema oferecido como serviço (os clientes, pacientes ou funcionários do cliente) | operador; o cliente é o controlador | se a equipe usa esses dados para algum fim próprio |
| Contas, contratos, cobrança e suporte dos próprios clientes; equipe; candidatos; site e marketing | controlador | — |
| Uso dos dados de clientes para métrica de produto, treino de modelo ou publicidade | controlador dessa finalidade | base legal própria (LGPD, art. 7º) e se as instruções do cliente não o vedam (art. 39; art. 42, § 1º, I) |
| Plataforma que intermedeia dois lados (quem compra e quem vende, presta ou entrega) | depende da atividade: a plataforma costuma ser controladora do que ela decide para o próprio serviço (cadastro e regras de uso que ela fixa, avaliação, segurança da plataforma); é operadora no que trata só por conta de um parceiro e segundo as instruções dele; pode ser controladora conjunta com o parceiro quando os três critérios da seção 4 estiverem presentes | quem fixou quais dados são exigidos, para quê e por quanto tempo; quem decide usos como avaliação, bloqueio ou análise |
| Nuvem, e-mail transacional, SMS, mapas, análise de uso, atendimento | operadores da equipe, quando ela é controladora; suboperadores, quando ela é operadora do cliente | autorização do controlador para o suboperador (Guia, item 67) |
| Desenvolvimento e manutenção sob encomenda, com acesso aos dados do cliente | operador | se a equipe só executa as instruções do cliente |
