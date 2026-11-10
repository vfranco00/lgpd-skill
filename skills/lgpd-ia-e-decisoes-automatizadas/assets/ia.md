> Revisão jurídica: pendente · Gerado pela lgpd-skill em {{data}}

# IA e decisões automatizadas: {{projeto}}

Modelo de `.lgpd/ia.md`, preenchido pela skill `lgpd-ia-e-decisoes-automatizadas` (base normativa de 09/11/2026). Uma linha por uso de IA. Quando algo mudar, atualize a linha do uso e acrescente uma linha ao Histórico; não regrave o arquivo a partir do modelo. O que ficar sem resposta vira "a confirmar". Artigo sem norma ao lado é da Lei nº 13.709/2018 (LGPD).

## 1. Usos de IA

| # | Sistema ou uso | Finalidade | Papel da equipe | Dados de entrada e titulares | Sensível, criança ou adolescente? | Provedor do modelo | Treina modelo? | Decisão unicamente automatizada? | Alto risco? |
|---|---|---|---|---|---|---|---|---|---|
| {{IA-01}} | {{ex.: chatbot de atendimento}} | {{finalidade específica (art. 6º, I)}} | {{controlador}} ou {{operador de <controlador>}} | {{dados; clientes, usuários}} | {{não}} ou {{sim: qual (art. 5º, II; art. 11, § 1º; art. 14)}} | {{nome, documento e data da leitura}} | {{não}} ou {{sim: seção 2}} | {{não}} ou {{sim: seção 3}} | {{sim, não ou a confirmar: seção 5}} |

## 2. Treino de modelo

| Item | Resposta | Base |
|---|---|---|
| Uso (#) e modelo treinado ou ajustado | {{}} | |
| Origem dos dados e finalidade da coleta | {{ex.: conversas do atendimento desde AAAA-MM}} | art. 6º, I e II |
| Quem decide o treino | {{controlador}}; se a equipe é operadora, a instrução escrita dele | art. 39; art. 42, § 1º, I |
| Base legal do treino | {{inciso do art. 7º ou hipótese do art. 11}}; teste de balanceamento em {{.lgpd/lia/<finalidade>.md}}, pela `lgpd-bases-legais` | arts. 7º, 10 e 11 |
| Dado sensível no conjunto | {{filtrado antes do treino}} ou {{tratado pela hipótese do art. 11: qual}} | art. 11 e § 1º |
| Minimização | {{filtros, anonimização ou pseudonimização; resultado do teste de reidentificação, com data}} | art. 6º, III; arts. 12 e 13, § 4º |
| Aviso ao titular antes do início | {{texto, canais e data}}; publicação pela `lgpd-transparencia-e-politicas` (ponto de parada 1) | art. 6º, VI; art. 9º |
| Canal de oposição | {{onde e desde quando}}; aberto antes do início; pedidos atendidos antes de cada treino | art. 18, § 2º |
| Crianças e adolescentes | {{fora do treino}} ou {{análise do melhor interesse em .lgpd/criancas-e-adolescentes.md}} | art. 14; Enunciado CD/ANPD nº 1/2023 |
| Provedor do treino | {{documento de treino e retenção, versão e data da leitura}}; contrato pela `lgpd-operador-e-contratos` | art. 39 |
| Guarda do conjunto de treino | {{prazo, ou "a definir" (ponto de parada 5, `lgpd-retencao-e-eliminacao`)}} | arts. 15 e 16 |
| Decisão do controlador e revisão jurídica | {{quem decidiu, quando; quem revisou}} | |

## 3. Decisões automatizadas

| Item | Resposta | Base |
|---|---|---|
| Uso (#) e o que o sistema decide | {{ex.: aprovar ou negar crédito}} | art. 20, caput |
| É tomada unicamente por tratamento automatizado? Por quê? | {{}} | art. 20, caput |
| Afeta interesses do titular (crédito, preço, acesso, cadastro)? | {{}} | art. 20, caput |
| Critérios e procedimentos, no texto entregue a quem pedir | {{dados usados e de onde vêm; critérios e em que sentido pesam; etapas e versão do modelo}} | art. 20, § 1º; art. 19, II |
| O que é segredo comercial ou industrial, e por quê | {{}} | art. 20, §§ 1º e 2º |
| Canal de revisão e registro dos pedidos | {{canal}}; pedidos em `.lgpd/direitos/`, pela `lgpd-direitos-do-titular` | art. 20, caput |
| Quem revisa e com que poder de mudar a decisão | {{}} (a LGPD não exige pessoa natural) | art. 20, § 3º, vetado |
| Norma do setor ou contrato com regra própria (revisão, critérios, dados vedados) | {{nenhuma}} ou {{qual, conferida no texto oficial; no crédito com banco de dados de adimplemento, Lei nº 12.414/2011, art. 5º, IV e VI, e art. 7º-A}} | |
| Prazo interno de resposta | {{prazo interno, registrado como escolha}}; não regulamentado pela ANPD até 09/11/2026 | Agenda Regulatória 2025-2026, itens 1 e 6 |
| Registro de cada decisão | {{entradas, versão, resultado, motivo; onde fica e por quanto tempo}} | art. 6º, X |
| Testes de discriminação | {{data, método, resultado}} | art. 6º, IX; art. 20, § 2º |

## 4. Transparência dos agentes de IA

| Item | Resposta | Base |
|---|---|---|
| O que o aviso diz sobre o agente (guarda, prazo, provedores, treino, decisão, direitos) | {{texto do aviso sobre o agente, aqui; a lgpd-transparencia-e-politicas o leva à próxima versão de .lgpd/politicas/politica-de-privacidade-v<N>.md}} | art. 9º, I a VII |
| O agente diz que é um sistema automatizado? Onde? | {{}} | prática; Decreto nº 12.880/2026, art. 11, I, se houver público infantil ou adolescente |
| Mudança na finalidade, na forma ou duração, no controlador ou no uso compartilhado avisada ao titular com destaque do que mudou, qualquer que seja a base; com consentimento, finalidade incompatível avisada antes | {{canal e data}} | art. 8º, § 6º; art. 9º, § 2º |

## 5. Alto risco e relatório de impacto

| Uso (#) | Critério geral (Res. CD/ANPD nº 2/2022, art. 4º, I) | Critério específico (art. 4º, II) | Alto risco | Relatório de impacto |
|---|---|---|---|---|
| {{IA-nn}} | {{larga escala; pode impedir direito ou serviço}} | {{a, tecnologia emergente; c, decisão unicamente automatizada; d, sensível ou criança}} | {{sim, não ou a confirmar}} | {{.lgpd/relatorios-de-impacto/<processo>-v<N>.md, a versão mais recente}} ou {{não}} (ponto de parada 4) |

## 6. Pendências

- {{o que ficou "a confirmar" e com quem}}
- Não regulamentado pela ANPD até 09/11/2026: art. 20 e uso de IA (Agenda Regulatória 2025-2026, item 6); relatório de impacto (item 2); anonimização e pseudonimização (item 9).
- Não há lei geral de IA: o PL nº 2.338/2023 está em tramitação (conferir a situação na data de hoje).

## 7. Histórico

| Data | O que mudou | Quem |
|---|---|---|
| {{data}} | {{criação ou alteração}} | {{nome}} |
