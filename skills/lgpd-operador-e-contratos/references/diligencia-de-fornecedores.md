> Fontes: ver skills/lgpd/references/fontes.md — siglas usadas: [LGPD], [Res19], [GuiaAgentes], [Regulamentacoes]. Documentos de provedores: skills/lgpd/references/fontes-fornecedores.md.

# Diligência de fornecedores

Paráfrase, não texto oficial. Os fatos sobre provedores vêm só dos documentos listados na skill `lgpd`, em `references/fontes-fornecedores.md`, lidos em 09/11/2026. O provedor pode mudar o texto a qualquer momento: antes de decidir, abra o documento de novo e anote a data. Provedor fora da lista: peça o acordo de tratamento, a lista de subprocessadores e a regra de aviso de incidentes, e aplique o mesmo checklist. Os artigos citados da Res. CD/ANPD nº 19/2024 dizem se são do Anexo I (o regulamento) ou do Anexo II (as cláusulas-padrão). "Guia" é o Guia de Agentes de Tratamento da ANPD, versão 2.0, citado pelo item.

A LGPD não regula a diligência de fornecedor, e a ANPD não a regulamentou: não regulamentado pela ANPD até 09/11/2026 (nada sobre o tema na lista oficial de regulamentações). A diligência serve ao que a lei já exige: o controlador verifica o cumprimento das instruções e das normas (LGPD, art. 39); todo agente demonstra que adotou medidas eficazes (art. 6º, X); e o operador que põe um suboperador no tratamento sem a autorização do controlador pode ser visto como quem saiu das instruções (Guia, item 67; LGPD, art. 42, § 1º, I).

## 1. Checklist

| # | Pergunta | Por quê |
|---|---|---|
| 1 | Qual o papel do fornecedor: operador, suboperador, ou controlador de algum dado (ex.: usa os dados para fim próprio)? | LGPD, art. 5º, VI e VII; Guia, itens 53 e 65 |
| 2 | Que dados e titulares chegam a ele, e para quê? Dá para mandar menos? | LGPD, art. 6º, III |
| 3 | Há acordo de tratamento? Ele cobre as cláusulas mínimas? | `acordo-de-operador.md`, seção 2 |
| 4 | Subprocessadores: há lista pública? Com quanto tempo de aviso entra um novo? Dá para se opor? Ele responde por eles? | Guia, itens 67 e 69 |
| 5 | Incidente: em que prazo e com que conteúdo o fornecedor avisa? Cabe no prazo prometido ao controlador? | `acordo-de-operador.md`, seção 3 |
| 6 | Segurança: que medidas, certificações e relatórios de auditoria independente ele mostra, e em que condições? | LGPD, arts. 39, 46 e 47 |
| 7 | Onde os dados ficam e são processados? Quem os acessa do exterior? Que mecanismo de transferência o documento usa para a LGPD? | LGPD, art. 33; Res. CD/ANPD nº 19/2024 |
| 8 | No fim do contrato: devolve? Em quanto tempo elimina, inclusive cópias e subprocessadores? | LGPD, arts. 15 e 16 |
| 9 | IA: usa entradas e saídas para treinar modelo? Por quanto tempo guarda, e por quê? Há retenção zero, e em que condições? | LGPD, art. 6º, I; art. 39 |
| 10 | Avisa quando não puder cumprir uma instrução, ou quando entender que ela viola a lei? | LGPD, art. 39; art. 42, § 1º, I |
| 11 | Avisa de pedido de autoridade sobre os dados? | prática; Res. CD/ANPD nº 19/2024, Anexo II, cláusula 19 |
| 12 | Em que data cada documento foi lido, e quando reler? | `fontes-fornecedores.md` |

## 2. O que dizem os documentos dos provedores públicos

Fatos dos documentos listados em `fontes-fornecedores.md`, lidos em 09/11/2026. Os números entre parênteses são as seções de cada documento. Nenhum deles foi escrito para o contrato da equipe: vale a versão que ela aceitar.

### Google Cloud: Cloud Data Processing Addendum (última modificação em 30/10/2026), cláusulas brasileiras e lista de subprocessadores

- **Brasil.** O adendo tem seção própria para o Brasil. Para transferência a país que a ANPD não reconheceu como adequado, se o Google não tiver adotado outra solução de transferência, aplicam-se as cláusulas-padrão brasileiras aprovadas pela ANPD: controlador→operador ou operador→operador, conforme o papel do cliente, ou operador→operador com o Google como exportador (seção Brasil, itens 1 e 3.1).
- **Cliente operador.** O cliente que é operador repassa ao controlador, sem demora, os avisos sobre as cláusulas, responde perante o Google pela transparência do controlador prevista nelas e entrega os dados de identificação do controlador quando o Google pedir (seção Brasil, item 3.3).
- **Instruções.** O Google avisa de imediato se entender que a lei brasileira o impede de cumprir uma instrução, que a instrução não cumpre a LGPD ou que não consegue cumpri-la; o cliente operador repassa o aviso ao controlador (seção Brasil, item 2).
- **Subprocessadores.** Autorização específica dos atuais e geral dos novos; aviso de novo subprocessador ao menos 30 dias antes de ele tratar os dados; objeção por rescisão em até 90 dias do aviso; o Google responde integralmente pelos subprocessadores (seção 11).
- **Incidente.** Aviso prontamente e sem demora indevida, com a natureza do incidente, os recursos afetados, as medidas e um contato (seção 7.2).
- **Fim.** Eliminação dos dados restantes depois de um período de recuperação de até 30 dias, em no máximo 180 dias, salvo lei que exija guarda (seção 6.2).
- **Verificação.** Certificado ISO 27001 e relatórios SOC 2 e SOC 3 anuais (seção 7.4); o cliente operador pode pedir acesso aos relatórios SOC para o controlador (seção 7.5.1).

### AWS: AWS Data Processing Addendum, página Brazil Data Privacy e lista de subprocessadores

- **Transferência.** O adendo não cita LGPD nem ANPD; as cláusulas-padrão da UE de 2021 valem só para dados sujeitos ao GDPR (seção 12.2). A página Brazil Data Privacy diz que a AWS oferece um acordo de tratamento de dados que atende aos requisitos da LGPD.
- **Regiões.** O cliente escolhe as Regiões, e a AWS não tira os dados delas, salvo o necessário para prestar o serviço pedido ou cumprir a lei (adendo, seção 12.1; página Brazil Data Privacy). A lista de subprocessadores mostra uma entidade no Brasil para a Região South America (Sao Paulo).
- **Subprocessadores.** Autorização geral; ao menos 30 dias antes de um novo, a AWS atualiza o site e oferece meio de receber o aviso; objeção por rescisão, por deixar de usar o serviço ou por mudar os dados para outra Região (seção 6.1). A AWS limita o acesso do subprocessador ao necessário para o serviço, passa as mesmas obrigações contratuais só ao subprocessador que presta o mesmo serviço de tratamento e responde pelos atos dele que façam a AWS descumprir o adendo (adendo, seção 6.2, lido em 09/11/2026).
- **Incidente.** Aviso sem demora indevida depois de saber do incidente (seção 9.1).
- **Fim.** Devolução ou eliminação até 90 dias depois do término, pelos controles do serviço (seção 14).
- **Verificação.** Certificados ISO 27001, 27017, 27018 e 27701 e relatórios SOC 1, 2 e 3, mediante acordo de confidencialidade (seção 10.1); a auditoria do cliente se faz pela auditoria anual da seção 10 (seção 11).

### Microsoft: Products and Services Data Protection Addendum (01/11/2026)

- **Transferência.** O cliente autoriza a transferência para os EUA e para qualquer país onde a Microsoft ou seus subprocessadores atuem. As saídas da UE, do EEE, do Reino Unido e da Suíça seguem as cláusulas-padrão da UE de 2021, e a Microsoft é certificada nos Data Privacy Frameworks. O adendo não cita LGPD nem ANPD.
- **Subprocessadores.** Aviso de novo subprocessador pelo menos 6 meses antes do acesso a Customer Data; para os de inteligência artificial, 30 dias, com a opção de desligar o uso dele até pelo menos 6 meses depois do aviso; e pelo menos 30 dias antes do acesso a Professional Services Data ou a dado pessoal fora do Customer Data. Objeção por rescisão sem multa dentro do prazo do aviso. A Microsoft responde pelo cumprimento dos subprocessadores.
- **Incidente.** Aviso prontamente e sem demora indevida; no anexo de medidas de segurança, em qualquer caso em até 72 horas.
- **Fim.** Os dados ficam 90 dias numa conta de função limitada depois do término e são eliminados nos 90 dias seguintes.
- **Verificação.** Medidas que seguem as normas ISO 27001, 27002 e 27018; auditorias ao menos anuais por auditores independentes, com relatório disponibilizado pela Microsoft.

### Vercel: Data Processing Addendum (atualizado em 17/03/2026) e Trust Center

- **Papel.** O adendo trata a Vercel como operadora dos dados de clientes dos planos Enterprise ou Pro; dos dados gerados pelo serviço e dos dados de contato, ela é controladora (adendo, seção 4, lido em 09/11/2026). O adendo não diz como fica outro plano: confira no documento atual antes de tratar a Vercel como operadora.
- **Transferência.** Processamento principal nos EUA, com possível transferência para qualquer lugar onde a Vercel ou seus subprocessadores atuem (seção 13); cláusulas-padrão da UE de 2021 para dados do EEE, do Reino Unido e da Suíça; o adendo não cita LGPD nem ANPD.
- **Subprocessadores.** Autorização geral; lista no Trust Center; aviso só para quem se inscreve por e-mail; objeção em 5 dias corridos do aviso e, sem acordo, rescisão sem reembolso (seção 7).
- **Incidente.** Aviso sem demora indevida depois de confirmado o incidente, na medida exigida pela lei aplicável; atraso pedido pela polícia ou necessário para investigar não conta como demora indevida (seção 8).
- **Fim.** O término vale como instrução de eliminar os dados em prazo comercialmente razoável; a Vercel pode guardar o que a lei exigir (seção 12).
- **Verificação.** Auditoria anual por terceiros (ex.: SOC 2 Tipo 2) e cópia do relatório mais recente sob pedido (seção 9).

### Supabase: Data Processing Addendum e lista de subprocessadores (atualizada em 12/10/2026)

- **Transferência.** Trata os dados onde ela ou os subprocessadores tenham instalações; se o cliente escolhe uma região, guarda e processa os dados principalmente nela, com exceções (seção 6.1). Aplica as cláusulas-padrão da UE de 2021 quando o GDPR ou a lei suíça se aplicam, ou quando a lei do exportador exige mecanismo e a autoridade dele não adotou cláusulas próprias, aceitou as da UE ou o mercado as usa (seção 12.1). O adendo não cita LGPD nem ANPD, mas prevê que, se a lei do exportador aprovar mecanismo diferente das cláusulas da UE, as partes firmam sem demora um acordo complementar com as cláusulas ou o mecanismo adotados pela autoridade do país do exportador (Anexo 2, item 4.4).
- **Subprocessadores.** Autorização geral, ou a do controlador do cliente; aviso de 30 dias para quem se inscreve; objeção em 5 dias do aviso; sem solução em até 30 dias, rescisão da parte afetada (seções 6.2 e 6.3).
- **Incidente.** Aviso sem demora indevida e, quando viável, em até 48 horas (seção 10).
- **Fim.** Cópia dos dados, se pedida em até 30 dias do término; depois, eliminação de todas as cópias, inclusive nos subprocessadores (seção 11.2).

### OpenAI: Data controls in the OpenAI platform

- **Treino.** Desde 01/03/2023, os dados enviados à API não treinam nem melhoram os modelos da OpenAI, salvo adesão expressa do cliente.
- **Retenção.** Os registros de monitoramento de abuso, que podem conter prompts e respostas, ficam guardados por até 30 dias por padrão, salvo exigência legal ou necessidade de proteger os serviços ou terceiros; a retenção zero e o monitoramento modificado dependem de aprovação prévia da OpenAI. Os 30 dias não valem para tudo: a tabela por endpoint do mesmo documento mostra estado da aplicação guardado até ser apagado ("Until deleted") e fora da retenção zero, por exemplo em `/v1/conversations`, `/v1/assistants`, `/v1/threads`, `/v1/vector_stores`, `/v1/files` e `/v1/batches` (Data controls, lido em 09/11/2026). Confira na tabela os endpoints que a equipe usa.
- **Residência.** Há controle de residência de dados por projeto, sujeito a elegibilidade; os dados de sistema podem ficar fora da região escolhida.
- O documento não cita LGPD nem ANPD e não trata de cláusulas de transferência.

### Anthropic: How long do you store my organization's data? e Is my data used for model training?

- **Retenção na API.** Entradas e saídas apagadas em até 30 dias do recebimento ou da geração, salvo: serviço com retenção sob controle do cliente (ex.: Files API); acordo diferente (ex.: retenção zero); necessidade de fazer valer a política de uso; ou exigência legal. Conversa marcada como violação da política de uso: entradas e saídas por até 2 anos e notas de classificação por até 7 anos. Para os Covered Models, a Anthropic exige retenção e revisão limitadas como parte do trabalho de segurança; quais são esses modelos e o que se guarda está em outra página, não lida aqui: confira no documento atual. Se o contrato permitir, ela pode anonimizar os dados da organização para pesquisa ou estatística e guardá-los por mais tempo (How long do you store my organization's data?, lido em 09/11/2026).
- **Treino.** Por padrão, entradas e saídas dos produtos comerciais, inclusive a API, não treinam os modelos; o feedback que o cliente enviar pode ser usado e fica guardado por até 5 anos.
- Os documentos não citam LGPD nem ANPD e não tratam de cláusulas de transferência.

## 3. Quem traz as cláusulas brasileiras

| Provedor | Cláusulas-padrão da ANPD no documento listado | O que o documento usa para transferência |
|---|---|---|
| Google Cloud | sim | cláusulas brasileiras (controlador→operador, operador→operador, Google exportador), se não houver outra solução adotada |
| AWS | não | cláusulas-padrão da UE de 2021, só para dados sujeitos ao GDPR |
| Microsoft | não | cláusulas-padrão da UE de 2021 e Data Privacy Frameworks |
| Vercel | não | cláusulas-padrão da UE de 2021, para EEE, Reino Unido e Suíça |
| Supabase | não no texto; prevê acordo complementar com as cláusulas adotadas pela autoridade do país do exportador (Anexo 2, item 4.4) | cláusulas-padrão da UE de 2021, nas condições da seção 12.1 |
| OpenAI e Anthropic | não tratam | os documentos listados cuidam de treino e retenção |
| WhatsApp (Meta) | o aviso de privacidade para o Brasil diz que usa mecanismos como as cláusulas aprovadas pela ANPD e entrega cópia delas a quem pedir | é aviso ao usuário, não acordo de operador |

## 4. O que fazer com a lacuna

- Cláusula da UE não é cláusula da ANPD. Com cláusulas-padrão, valem as do Anexo II da Res. CD/ANPD nº 19/2024, inteiras e sem alteração (Anexo I, art. 16); cláusula estrangeira só com equivalência reconhecida pela ANPD (Anexo I, arts. 18 e 20), e a lista oficial de regulamentações não traz nenhuma em 09/11/2026.
- Opções, que são decisão do controlador com a skill `lgpd-transferencia-internacional` e revisão jurídica: pedir ao fornecedor as cláusulas da ANPD; usar outro mecanismo do art. 33 da LGPD; manter dados e acessos no Brasil, quando o fornecedor oferecer e o documento garantir; trocar de fornecedor.
- Enquanto a decisão não vem, registre na diligência a lacuna, quem decide e até quando.
