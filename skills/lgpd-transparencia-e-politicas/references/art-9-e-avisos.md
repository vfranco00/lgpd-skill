> Fontes: ver skills/lgpd/references/fontes.md — siglas usadas: [LGPD], [L12965], [L15211], [Res2], [Res18], [Res19], [Res23], [Res31], [Agenda], [GuiaCookies], [GuiaFornecedoresECA].

# Art. 9º e avisos ao titular

O que a LGPD (Lei nº 13.709/2018) e as normas ligadas a ela pedem do aviso ao titular, que o mercado chama de política de privacidade. Para esta skill, política de privacidade, aviso de privacidade e documento equivalente são o mesmo instrumento: a declaração pública do controlador sobre o tratamento, como o Guia de cookies da ANPD a descreve (p. 29). Regras internas de segurança e de governança são de outras skills.

## 1. As 7 informações (LGPD, art. 9º)

O titular tem direito a acesso facilitado às informações sobre o tratamento dos dados dele, postas de forma clara, adequada e ostensiva (art. 9º, caput). O caput admite outras características fixadas em regulamento, para atender ao livre acesso: não regulamentado pela ANPD até 09/11/2026 (Agenda Regulatória 2025-2026, item 1, que trata em especial dos arts. 9º, 18, 19 e 20; Res. CD/ANPD nº 23/2024, alterada pela Res. CD/ANPD nº 31/2025).

| Inciso | O que a lei pede | Como entra na política | De onde vem |
|---|---|---|---|
| I | finalidade específica do tratamento | uma linha por finalidade, dizendo o que se faz e para quê; "melhorar a experiência" sem dizer o quê não é específico | `.lgpd/mapa-de-dados.md`, `.lgpd/registro-de-operacoes.md` |
| II | a forma e a duração do tratamento, ressalvados os segredos comercial e industrial | como os dados chegam (do titular, de terceiro, por cookie), onde ficam, quem os acessa e por quanto tempo, em prazo ou critério | duração: `.lgpd/retencao.md` (ponto de parada 5) |
| III | identificação do controlador | nome empresarial, CNPJ e endereço; havendo mais de um controlador, o de cada atividade | `.lgpd/papeis.md` |
| IV | informações de contato do controlador | o canal para falar com ele | STATUS; `.lgpd/encarregado.md` |
| V | o uso compartilhado que o controlador faz e a sua finalidade | com quem (nome ou categoria) e para quê; o uso compartilhado inclui a transferência internacional (art. 5º, XVI) | `.lgpd/mapa-de-dados.md`, `.lgpd/transferencias.md` |
| VI | as responsabilidades dos agentes que farão o tratamento | quem trata os dados e o que cabe a cada um (abaixo) | `.lgpd/papeis.md`, `.lgpd/contratos/` |
| VII | os direitos do titular, citando de forma explícita os do art. 18 | os 9 incisos do art. 18, a oposição, a petição, o canal e os prazos da lei (seção 8) | `.lgpd/direitos/registro-de-pedidos.md` |

**Inciso VI, responsabilidades dos agentes.** A lei não detalha o conteúdo. A skill o preenche, por atividade, com o que a LGPD atribui a cada papel (o papel vem de `lgpd-aplicacao-e-papeis`):

- controlador: a quem competem as decisões sobre o tratamento (art. 5º, VI); o titular obtém dele o que o art. 18 garante (art. 18, caput); comunica à ANPD e ao titular o incidente de segurança que possa acarretar risco ou dano relevante (art. 48);
- operador: trata em nome do controlador (art. 5º, VII), segundo as instruções dele (art. 39); a política o nomeia ou dá a categoria (nuvem, pagamento, envio de e-mail);
- mais de um controlador na mesma atividade, como plataforma, vendedor e meio de pagamento num marketplace: quem atende o titular, quem o informa e quem comunica incidente, conforme `.lgpd/papeis.md`.

**Base legal.** O art. 9º não põe a base legal entre as 7 informações. A skill recomenda escrevê-la ao lado de cada finalidade (de `.lgpd/bases-legais.md`), porque a lei a liga a direitos e deveres que o titular só usa se souber qual é: o legítimo interesse pede medidas de transparência (art. 10, § 2º); a oposição cabe contra tratamento feito sem consentimento, em caso de descumprimento da lei (art. 18, § 2º); a revogação vale para o que se faz com consentimento (art. 8º, § 5º; art. 18, IX); e o titular tem direito de saber que pode não consentir e o que acontece se recusar (art. 18, VIII).

## 2. Forma: clara, adequada, ostensiva

- **Clara e acessível.** Clara, adequada e ostensiva (art. 9º, caput); clara, precisa e facilmente acessível, sobre o tratamento e sobre os agentes (art. 6º, VI). A skill lê "ostensiva" como à vista: link no rodapé de toda página, no cadastro e no aplicativo, e não só no fim dos termos de uso.
- **Em camadas.** Resumo curto no topo, detalhe depois. Para cookies, a ANPD aceita a política como seção do aviso de privacidade, em página separada ou nas camadas do banner (Guia de cookies, p. 29).
- **Em português.** O documento de transferência internacional é em português por regra (Res. CD/ANPD nº 19/2024, Anexo I, art. 17, § 2º), e a ANPD desaconselha informação sobre cookies só em língua estrangeira (Guia de cookies, p. 33). Para o resto do aviso, é como a skill lê "clara e adequada" para titulares no Brasil.
- **Condição do serviço.** Se o tratamento é condição para fornecer o produto ou o serviço, ou para exercer um direito, o titular é informado disso com destaque, e dos meios de exercer os direitos do art. 18 (art. 9º, § 3º).
- **A política informa; ela não colhe consentimento.** Consentimento é manifestação livre, informada e inequívoca para finalidade determinada (art. 5º, XII), e autorização genérica é nula (art. 8º, § 4º): "ao usar o site, você concorda com esta política" não serve de base. Quando o consentimento é a base, informação enganosa ou abusiva, ou não apresentada antes com transparência, o anula (art. 9º, § 1º). Como pedir e provar o consentimento: `lgpd-bases-legais`.

## 3. Mudanças e versões

- **Mudança nos incisos I, II, III ou V do art. 9º** (finalidade, forma ou duração, controlador, uso compartilhado): o controlador informa o titular, destacando de forma específica o que mudou; quando o consentimento é exigido, o titular pode revogá-lo se discordar (art. 8º, § 6º). A skill recomenda avisar pelo canal que o titular usa (e-mail, aviso no aplicativo), não só trocar a página.
- **Mudança de finalidade com consentimento.** Finalidade nova incompatível com o consentimento original se informa antes, e o titular pode revogar (art. 9º, § 2º). Tratamento posterior incompatível com as finalidades informadas não cabe (art. 6º, I): finalidade nova pede base própria (`lgpd-bases-legais`).
- **"Podemos alterar a qualquer momento; consulte esta página"** não cumpre o art. 8º, § 6º: a lei manda informar o titular, com destaque do teor da mudança.
- **Versões.** Regra da skill: cada versão é um arquivo próprio, que não se regrava; a mudança vira versão nova, em arquivo novo, com selo pendente, e a única mudança numa versão que já existe é a troca do selo depois da revisão. A versão anterior, sobretudo a publicada, é a prova do que foi prometido ao titular: o agente demonstra o cumprimento das normas (art. 6º, X), e o controlador prova que o consentimento foi obtido conforme a lei (art. 8º, § 2º).
- **Política publicada contra a prática.** Compare cada seção com o mapeamento (`.lgpd/mapa-de-dados.md`) e liste as divergências; cada uma vira mudança da política ou da prática, decidida pelo controlador.

## 4. Para quem é o aviso: consumidor, cliente empresarial e operador

**Consumidor.** Produto vendido ao consumidor:

- o titular pode peticionar contra o controlador perante a ANPD (art. 18, § 1º) e também perante os organismos de defesa do consumidor (art. 18, § 8º): os dois entram na lista de direitos;
- violação de direito do titular em relação de consumo segue as regras de responsabilidade da legislação de consumo (art. 45);
- site e aplicativo são aplicações de internet: o usuário tem direito a informações claras e completas sobre coleta, uso, armazenamento, tratamento e proteção dos dados, que só servem às finalidades que justificam a coleta, não são vedadas e estão especificadas no contrato ou nos termos de uso (Lei nº 12.965/2014, art. 7º, VIII), e à publicidade e clareza das políticas de uso (art. 7º, XI).

**Cliente empresarial (B2B).** A LGPD protege a pessoa natural (art. 1º; art. 5º, V): a empresa cliente não é titular, mas os representantes, funcionários e contatos dela são. Os dados deles (cadastro, acesso à conta, cobrança, suporte) recebem as mesmas 7 informações, na política ou num aviso curto no cadastro ou no contrato. Num marketplace, o vendedor pessoa jurídica é cliente empresarial, e quem o representa é titular; o vendedor pessoa natural é titular.

**Operador.** Quando a equipe é operadora dos dados que o cliente trata no sistema, as informações aos titulares desses dados identificam o controlador e são dele (art. 9º, III e IV): a equipe entrega ao cliente o que ele precisar para informar, segundo as instruções dele (art. 39), e escreve só o aviso dos dados de que é controladora (site, contas e cobrança dos clientes, marketing).

**Mais de um controlador.** Quem decide sobre o tratamento é o controlador (art. 5º, VI), e numa plataforma de dois lados pode haver mais de um: a plataforma no que ela decide para o próprio serviço, o vendedor que recebe os dados para entregar o pedido, o meio de pagamento. A política diz quem é o controlador de cada atividade, o contato de cada um e as responsabilidades de cada um (art. 9º, III, IV e VI). Quem decide o papel: `lgpd-aplicacao-e-papeis`.

## 5. Aviso de transferência internacional

- O uso compartilhado inclui a transferência internacional (art. 5º, XVI), que aparece no inciso V da política.
- Quem transfere por cláusulas-padrão publica no site um documento em português, em linguagem simples, clara, precisa e acessível, com 6 itens: forma, duração e finalidade específica da transferência; país de destino; identificação e contatos do controlador; uso compartilhado e finalidade; responsabilidades dos agentes e medidas de segurança; direitos, meios de exercê-los, canal de fácil acesso e petição à ANPD. A íntegra das cláusulas vai a quem pedir, em 15 dias (Res. CD/ANPD nº 19/2024, Anexo I, art. 17, caput e §§ 1º e 2º).
- O documento fica em página própria ou integrado, destacado e de fácil acesso, à política de privacidade (art. 17, § 3º).
- O aviso é da skill `lgpd-transferencia-internacional`, uma versão por arquivo, em `.lgpd/politicas/aviso-de-transferencia-v<N>.md`. Esta skill não grava nesses arquivos: a política aponta para a página do aviso ou o reproduz como seção destacada, na versão revisada que aquela skill entregou.

## 6. Crianças e adolescentes: LGPD, art. 14, e ECA Digital

Quem decide se há dado de criança ou de adolescente e se o ECA Digital (Lei nº 15.211/2025) se aplica é a skill `lgpd-criancas-e-adolescentes`, que grava `.lgpd/criancas-e-adolescentes.md`. Aqui entra só o que vai para o aviso.

- **"Não é destinado a menores de 18 anos" não resolve.** A lei vale para produto direcionado a crianças e adolescentes ou de acesso provável por eles (Lei nº 15.211/2025, art. 1º e parágrafo único), e a incidência não depende só da declaração do fornecedor (Guia de fornecedores do ECA Digital, p. 32).
- **Dado de criança com o consentimento dos pais.** O controlador deixa público quais tipos de dados coleta, como os usa e como se exercem os direitos do art. 18 (LGPD, art. 14, § 2º).
- **Linguagem.** A informação sobre o tratamento de dados de crianças é simples, clara e acessível, considera as características do usuário, usa recursos audiovisuais quando adequado e serve aos pais e ao entendimento da criança (LGPD, art. 14, § 6º).
- **Produto no alcance do ECA Digital.** Pais, responsáveis, crianças e adolescentes recebem informação sobre os riscos e sobre as medidas de segurança que o produto adota para eles, inclusive de privacidade e proteção de dados, e o acesso a ela não depende de comprar o produto (Lei nº 15.211/2025, art. 16, caput); e informação clara, acessível e adequada para escolher uma configuração menos protetiva que a padrão (art. 7º, § 1º).
- **Supervisão parental.** No mesmo produto, os pais ou responsáveis recebem, em local de fácil acesso, informação sobre as ferramentas de supervisão parental que existem (Lei nº 15.211/2025, art. 17, II), clara e apropriada às diferentes idades, sem estimular que as salvaguardas sejam desligadas ou enfraquecidas (art. 18, § 1º). Os textos vêm de `.lgpd/criancas-e-adolescentes.md` (seção 3, linha "Supervisão parental").
- **Publicidade.** No mesmo produto, sem perfilamento para publicidade a crianças e adolescentes, nem com consentimento (Lei nº 15.211/2025, arts. 22 e 26): a política e o aviso de cookies não oferecem anúncio por perfil a esse público (`cookies.md`, seção 8).

## 7. Encarregado ou canal

Quem indica, quem pode ser e o ato formal: `lgpd-encarregado-e-governanca`, em `.lgpd/encarregado.md`. Na política:

- identidade e contato do encarregado, públicos, claros e objetivos (LGPD, art. 41, § 1º), no site, em local de destaque e de fácil acesso, e mantidos atualizados (Res. CD/ANPD nº 18/2024, arts. 8º e 9º, caput); quem não tem site divulga pelos meios que usa com os titulares (Res. CD/ANPD nº 18/2024, art. 9º, § 3º);
- identidade é, no mínimo, o nome completo, se pessoa natural; se pessoa jurídica, o nome empresarial ou o título do estabelecimento e o nome completo da pessoa natural responsável (Res. CD/ANPD nº 18/2024, art. 9º, § 1º). Só um e-mail não é identidade;
- contato é, no mínimo, o meio que permite ao titular exercer os direitos e à ANPD comunicar-se com o agente (Res. CD/ANPD nº 18/2024, art. 9º, § 2º);
- agente de pequeno porte que não indicou encarregado: o canal de comunicação com o titular (Res. CD/ANPD nº 2/2022, art. 11, § 1º);
- para o operador, indicar encarregado é facultativo (Res. CD/ANPD nº 18/2024, art. 6º).

## 8. Direitos e prazos

Atendimento, prazos e registro: `lgpd-direitos-do-titular`, em `.lgpd/direitos/registro-de-pedidos.md` (seções "Como atendemos" e "Prazos que adotamos"). Na política:

- os 9 direitos do art. 18, com menção explícita (art. 9º, VII): confirmação; acesso; correção; anonimização, bloqueio ou eliminação do desnecessário, excessivo ou irregular; portabilidade; eliminação do tratado com consentimento; informação sobre com quem houve uso compartilhado; informação sobre não consentir e as consequências; revogação do consentimento;
- a oposição (art. 18, § 2º) e, havendo decisão tomada só com base em tratamento automatizado, a revisão dela (art. 20; `lgpd-ia-e-decisoes-automatizadas`);
- atendimento sem custo para o titular (art. 18, § 5º);
- prazos só como a lei os dá: confirmação e acesso em formato simplificado, de imediato, ou por declaração clara e completa em até 15 dias do requerimento (art. 19, I e II); os prazos dos demais pedidos dependem de regulamento (art. 18, § 5º), não regulamentado pela ANPD até 09/11/2026 (Agenda, item 1). Prazo interno se escreve como compromisso da empresa, não como regra da lei.

## 9. O que não está regulamentado pela ANPD até 09/11/2026

| Tema | Onde a lei o deixa aberto (LGPD) | Agenda Regulatória 2025-2026 |
|---|---|---|
| Outras características das informações ao titular | art. 9º, caput | item 1, em andamento |
| Prazos e termos dos pedidos do titular | art. 18, § 5º | item 1, em andamento |
| Consentimento | arts. 8º e 9º | item 18, em andamento |
| Cookies | nenhum artigo próprio; vale a LGPD, e o Guia de cookies é orientação | nenhum item próprio |

Se a data de hoje for posterior a 09/11/2026, confira a lista oficial de regulamentações e a página da Agenda antes de repetir esta tabela.
