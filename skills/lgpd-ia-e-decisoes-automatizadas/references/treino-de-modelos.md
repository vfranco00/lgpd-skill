> Fontes: ver skills/lgpd/references/fontes.md — siglas usadas: [LGPD], [Enun1], [Res1], [Res23], [Res31], [Res30], [Agenda], [PL2338], [D12880], [DD20-2024], [DD24-2024], [DD33-2024]. Documentos de provedores: skills/lgpd/references/fontes-fornecedores.md.

# Treino de modelos com dados pessoais

Paráfrase, não texto oficial. Base normativa: 09/11/2026. Treinar, ajustar (fine-tuning), avaliar ou melhorar um modelo com dados pessoais é tratamento, porque tratamento é toda operação com dado pessoal, inclusive coleta, classificação, utilização, processamento e armazenamento (LGPD, art. 5º, X). Artigo sem norma ao lado é da Lei nº 13.709/2018 (LGPD). "Voto nº 11", "Voto nº 19" e "Voto nº 23" são os votos de 2024 que fundamentam as decisões da seção 2, citados pelo item.

## 1. Não há lei de IA

- **O projeto não é lei.** O PL nº 2.338/2023, que dispõe sobre o desenvolvimento, o fomento e o uso ético e responsável da inteligência artificial, veio do Senado Federal e está na Câmara dos Deputados. Em 09/11/2026, a ficha de tramitação da Câmara mostra "Aguardando Parecer do(a) Relator(a) na Comissão Especial sobre Inteligência Artificial", em regime de prioridade e sujeito ao Plenário; o último registro da API de dados abertos é de 27/10/2026, com a situação "Aguardando Parecer" [PL2338]. Não há lei geral de IA: o texto do projeto não cria obrigação e não serve de regra.
- **Vale a LGPD.** Treino e uso de IA com dados pessoais seguem a lei inteira: princípios (art. 6º), bases legais (arts. 7º e 11), crianças e adolescentes (art. 14), direitos (arts. 18 e 20), segurança (art. 46) e relatório de impacto (art. 38).
- **A ANPD não regulamentou o tema.** O item 6 da Agenda Regulatória 2025-2026, "Inteligência Artificial", prevê parâmetros para o art. 20 e, no treino e no uso de sistemas de IA, trata de direitos dos titulares, princípios, hipóteses legais e boas práticas e governança (Res. CD/ANPD nº 23/2024, alterada pela Res. CD/ANPD nº 31/2025). Situação na página da Agenda: em andamento, depois da tomada de subsídios de novembro de 2024 a janeiro de 2025 [Agenda]. Não regulamentado pela ANPD até 09/11/2026.
- **A ANPD fiscaliza.** O Tema 4 do Mapa de Temas Prioritários 2026-2027 prevê 20 atividades de fiscalização sobre tratamento de dados pessoais, inclusive de crianças e adolescentes, em sistemas de IA e tecnologias emergentes: metade até o 1º semestre de 2027 e metade até o 2º semestre de 2027 (Res. CD/ANPD nº 30/2025, anexo).
- **Data de hoje posterior a 09/11/2026:** antes de repetir esta seção, confira a ficha do PL [PL2338], a página da Agenda [Agenda] e a lista oficial de regulamentações.

## 2. As decisões públicas da ANPD de 2024

Em 2024, o Conselho Diretor da ANPD decidiu três vezes sobre o uso, pela Meta, de dados pessoais compartilhados nas plataformas dela, inclusive de não usuários, para treinar IA generativa. São decisões de caso concreto e de natureza preventiva, tomadas em avaliação preliminar e não exauriente (Voto nº 11, item 4.10; Voto nº 23, item 4.10). Mostram como a ANPD lê a LGPD no treino de modelos; não são regulamento. Alcance: o plano aprovado e o teste de balanceamento cobriam só dados que usuários adultos tornaram públicos nas plataformas (Voto nº 23, itens 4.24, I, 4.40 e 4.51; [DD33-2024]: "dados públicos de contas de usuários"). Conversas privadas, como as de um chatbot de atendimento, não estavam no que foi aprovado; o Voto nº 11, item 4.17, apontou como preocupação que conversas com empresas ou com sistemas de IA pudessem ser coletadas.

| DOU | Decisão | O que decidiu |
|---|---|---|
| 02/07/2024 | Despacho Decisório nº 20/2024/PR/ANPD, com o Voto nº 11 [DD20-2024] | medida preventiva: suspensão imediata, no Brasil, da parte da nova política de privacidade sobre treino de IA generativa e do tratamento para essa finalidade em todos os produtos da empresa, inclusive de não usuários, com multa diária de R$ 50.000,00 por descumprimento |
| 10/07/2024 | Despacho Decisório nº 24/2024/PR/ANPD, com o Voto nº 19 [DD24-2024] | mantém a medida depois do pedido de reconsideração; mais 5 dias úteis para provar a suspensão; o efeito suspensivo fica para depois de um plano de conformidade com prazos concretos (Res. CD/ANPD nº 1/2021, art. 36); o teste de balanceamento do legítimo interesse em até 10 dias úteis |
| 30/08/2024 | Despacho Decisório nº 33/2024/PR/ANPD, com o Voto nº 23 [DD33-2024] | aprova o plano de conformidade atualizado e suspende a medida, com cumprimento integral do plano; no mínimo 30 dias entre a notificação aos titulares e o início do tratamento; formulário de oposição de não usuários sem campos extras obrigatórios; a fiscalização segue e acompanha o plano e o lançamento do sistema de IA |

**Os quatro pontos da medida de julho** (Voto nº 11, item 4.8, retomados no Voto nº 23, item 4.12): hipótese legal inadequada (legítimo interesse, art. 7º, IX), com dado sensível, sem respeito às legítimas expectativas e sem atender à finalidade e à necessidade; falta de transparência (art. 6º, VI); limitações excessivas aos direitos dos titulares (art. 18); dados de crianças e adolescentes sem salvaguardas (art. 14). Cada um tem seção abaixo.

**O que a aprovação de agosto não quer dizer.** Aprovar o plano e suspender a medida não é anuência irrestrita ao legítimo interesse naquele tratamento nem em todo treino de IA com dados pessoais (Voto nº 23, item 4.17), e não leva necessariamente à legitimação conclusiva dessa hipótese para treinar IA generativa (item 4.60). A eficácia das salvaguardas continuaria a ser analisada no processo de fiscalização (itens 4.14 e 4.59).

**Por que a ANPD agiu antes.** Continuar o treino poderia criar fato consumado, porque tirar dados pessoais já usados no treino de um modelo pode ser tecnicamente complexo (Voto nº 11, item 4.64). Prática: resolva aviso, oposição e filtros antes do primeiro treino.

## 3. Base legal

- **Treinar é finalidade.** O propósito precisa ser legítimo, específico, explícito e informado ao titular, sem tratamento posterior incompatível (art. 6º, I), compatível com o que foi informado no contexto da coleta (art. 6º, II) e limitado ao mínimo necessário (art. 6º, III). A ANPD viu indício de finalidade genérica e ampla em "treinamento de sistemas de IA generativa" e questionou a compatibilidade com o propósito original e a coleta ampla e indiscriminada (Voto nº 11, item 4.31). Na política, o termo "desenvolver e melhorar" foi aceito com leitura restritiva: nova finalidade pede atualização da política, hipótese legal própria e os princípios do art. 6º (Voto nº 23, item 4.35).
- **Hipótese.** Dado comum, uma das bases do art. 7º; dado sensível, uma hipótese do art. 11. A escolha e o teste de balanceamento ficam com a skill `lgpd-bases-legais`; aqui entram só os pontos que o treino muda.
- **Legítimo interesse.** Só para finalidade legítima, a partir de situação concreta, respeitadas as legítimas expectativas do titular (art. 10, caput e II); só os dados estritamente necessários (§ 1º); medidas de transparência (§ 2º); a ANPD pode pedir o relatório de impacto (§ 3º). Nas decisões de 2024:
  - não cabe para dado sensível, que só se trata pelas hipóteses do art. 11 (Voto nº 11, itens 4.25 e 4.32; Voto nº 23, item 4.54);
  - em análise preliminar, quem compartilhou dados para outro fim, às vezes anos antes, não tinha a expectativa de que eles treinassem IA; o interesse se apoia em situação concreta, não abstrata ou especulativa (Voto nº 11, item 4.28). O caso tratava de dados tornados públicos; para conversas privadas de atendimento, avalie a expectativa dos titulares do chatbot sem supor que o precedente a resolve (seção 2, alcance);
  - a ANPD pediu o teste de balanceamento e o analisou antes de suspender a medida [DD24-2024]; Voto nº 23, itens 4.51 e 4.52.
- **Dado sensível incidental.** Conversas e conteúdos livres podem revelar saúde, religião, opinião política ou vida sexual. O art. 11 vale também para o tratamento que revele dado sensível e possa causar dano (art. 11, § 1º). Para a ANPD, o dado sensível tratado de forma incidental exige salvaguardas adequadas (Voto nº 23, item 4.55). A área técnica viu nas salvaguardas de pseudonimização, com a desidentificação antes do treino, uma medida concreta que permitiria as hipóteses do art. 7º, e o voto registrou que a eficácia delas ainda seria examinada (itens 4.56 a 4.59).
- **Dado de acesso público.** Continua protegido. O tratamento considera a finalidade, a boa-fé e o interesse público que justificaram a disponibilização (art. 7º, § 3º); o dado tornado manifestamente público pelo titular dispensa o consentimento, mas não os direitos nem os princípios (art. 7º, § 4º); o uso para nova finalidade pede propósitos legítimos e específicos e a preservação dos direitos (art. 7º, § 7º). A ANPD lembrou os §§ 3º e 7º ao tratar do treino (Voto nº 11, item 4.15).
- **Consentimento.** Para finalidade determinada; autorização genérica é nula (art. 8º, § 4º). A revogação é gratuita e facilitada e vale para os treinos seguintes; o que foi feito antes fica ratificado enquanto não houver pedido de eliminação (art. 8º, § 5º).
- **Papel.** Se a equipe é operadora (ex.: mantém o chatbot de um cliente), treinar um modelo para o cliente segue as instruções dele (art. 39). Treinar um modelo próprio da equipe com os dados do cliente é finalidade da equipe, que passa a decidir sobre esse tratamento: fora das instruções lícitas do controlador, o operador responde solidariamente e se equipara a ele (art. 42, § 1º, I). Ver a seção 1 de `references/roteiro.md`, na skill `lgpd`.

## 4. Oposição

- **Na lei.** O titular pode se opor a tratamento feito com base em hipótese que dispensa o consentimento, em caso de descumprimento da LGPD (art. 18, § 2º). Não é direito geral de recusa; o atendimento do pedido segue a skill `lgpd-direitos-do-titular`.
- **Nas decisões de 2024.** A opção de oposição pouco evidente, com muitas etapas e com aparência de padrão obscuro, foi tratada como limitação excessiva aos direitos dos titulares (art. 18) e como descumprimento dos princípios do livre acesso e da transparência (Voto nº 11, itens 4.40, 4.41, 4.46 e 4.47). O titular que discorda da avaliação do controlador pode se opor e pedir o fim da operação e a eliminação dos dados (item 4.29). O plano aprovado em agosto trouxe (Voto nº 23, itens 4.27 e 4.39 a 4.44; [DD33-2024]):
  - aviso no aplicativo e por e-mail cerca de 30 dias antes do início do tratamento, e no mínimo 30 dias pela decisão;
  - formulário simplificado, com o e-mail preenchido e sem campos obrigatórios desnecessários;
  - para usuários, oposição atendida automaticamente, com confirmação por e-mail;
  - para não usuários (ex.: quem aparece em foto postada por outro), formulário próprio, resposta em torno de 15 dias e campos extras só facultativos;
  - oposição antes ou depois do início, com o tratamento interrompido a partir do atendimento.
- **Na prática do chatbot** (prática, a partir dessas decisões): aviso antes do primeiro treino, com prazo para a oposição; canal simples, que peça só o necessário para achar as conversas do titular; pedido atendido antes do próximo ciclo de treino; registro do pedido e do atendimento. O prazo de 30 dias é parâmetro de um caso concreto, não regra geral.

## 5. Crianças e adolescentes

- **Na lei.** O tratamento é feito no melhor interesse da criança e do adolescente (art. 14, caput), e qualquer hipótese dos arts. 7º ou 11 vale desde que observado e prevalecente esse melhor interesse, avaliado no caso concreto (Enunciado CD/ANPD nº 1/2023).
- **Nas decisões de 2024.** Fotos, vídeos e postagens de crianças e adolescentes poderiam ir para o treino sem salvaguardas que mostrassem o melhor interesse (Voto nº 11, itens 4.48 a 4.54 e 4.59). Riscos citados: exposição de informação pessoal nas respostas do modelo, em contexto diferente do original, e conteúdo sintético, como deepfakes (item 4.56), maiores para esse público (item 4.57). O plano aprovado excluiu do treino os dados públicos de contas de menores de 18 anos até decisão posterior da ANPD no processo de fiscalização; o dado de criança ou adolescente coletado de forma incidental (ex.: quem burla a verificação de idade, ou o que os pais compartilham) recebe as mesmas salvaguardas contra identificação e a mesma oposição (Voto nº 23, itens 4.20 e 4.24, I).
- **No chatbot** (prática, a partir do Voto nº 23, itens 4.20 e 4.24, I). Se crianças ou adolescentes podem conversar com o chatbot, ou se o produto é direcionado a eles ou de acesso provável por eles, separe essas conversas do treino até a análise do controlador concluir pelo melhor interesse. Agente conversacional com esse público segue também o Decreto nº 12.880/2026, art. 11 (`art-20-e-ia.md`, seção 6). O resto fica com a skill `lgpd-criancas-e-adolescentes`.

## 6. Minimização, anonimização e pseudonimização

- **Só o necessário.** Tire do conjunto de treino o que a finalidade não pede (art. 6º, III); no legítimo interesse, só os dados estritamente necessários (art. 10, § 1º).
- **Anonimizado sai da lei, se não der para reverter.** Dado anonimizado não é dado pessoal, salvo se a anonimização for revertida, ou puder ser com esforço razoável, medido por custo, tempo, tecnologia disponível e uso exclusivo de meios próprios (art. 12, caput e § 1º). Dado usado para formar o perfil comportamental de pessoa identificada pode ser considerado pessoal (art. 12, § 2º).
- **Pseudonimizado continua pessoal.** Na pseudonimização, o dado só volta a se associar à pessoa com informação adicional guardada à parte pelo controlador (art. 13, § 4º, definição dada para os estudos em saúde pública). A pessoa continua identificável (art. 5º, I), e só o dado anonimizado sai da lei (art. 12). Nas decisões de 2024, a pseudonimização entrou como salvaguarda, não como saída da lei (seção 3).
- **Texto livre.** Nome, CPF, e-mail e telefone são só parte do problema: endereço, número de pedido, relato de saúde e detalhes do caso também identificam. Prática: filtre antes do treino, teste a reidentificação numa amostra e registre o resultado em `.lgpd/ia.md`, pelo protocolo do marcador do `SKILL.md` (passo 7). Critérios de anonimização: `lgpd-bases-legais` (anonimização e pseudonimização); não regulamentado pela ANPD até 09/11/2026 (Agenda, item 9).

## 7. Provedores: retenção e treino

Fatos só dos documentos listados na skill `lgpd`, em `references/fontes-fornecedores.md`, lidos em 09/11/2026. O provedor pode mudar o texto a qualquer momento: antes de decidir, abra o documento atual e anote a data.

- **OpenAI, Data controls in the OpenAI platform** (lido em 09/11/2026):
  - desde 01/03/2023, os dados enviados à API não treinam nem melhoram os modelos da OpenAI, salvo adesão expressa do cliente;
  - os registros de monitoramento de abuso, que podem conter prompts e respostas, ficam por até 30 dias por padrão, salvo exigência legal ou necessidade de proteger os serviços ou terceiros; retenção zero e monitoramento modificado dependem de aprovação prévia da OpenAI;
  - na tabela por endpoint, o ajuste fino (`/v1/fine_tuning/jobs`) e os arquivos (`/v1/files`) guardam o conteúdo até serem apagados e não entram na retenção zero.
- **Anthropic, Is my data used for model training?** (página de 18/08/2026, lida em 09/11/2026): por padrão, entradas e saídas dos produtos comerciais, inclusive a API, não treinam os modelos; o feedback enviado (ex.: o botão de polegar) pode ser usado para treino, e a conversa relacionada fica guardada por até 5 anos.
- **Anthropic, How long do you store my organization's data?** (página de 01/07/2026, lida em 09/11/2026): na API, entradas e saídas são apagadas em até 30 dias do recebimento ou da geração, salvo serviço com retenção sob controle do cliente (ex.: Files API), acordo diferente (ex.: retenção zero), aplicação da política de uso ou exigência legal; conversa marcada como violação da política de uso fica até 2 anos, e as notas de classificação até 7 anos. Para os Covered Models há retenção e revisão limitadas, descritas em outra página, não lida aqui: confira no documento atual.
- **O que isso não resolve.** O provedor não treinar os modelos dele com os seus dados não torna lícito o treino que a equipe faz: o provedor é operador, e a finalidade, a base e o aviso são do controlador (art. 39). Contrato e diligência: `lgpd-operador-e-contratos`; provedor fora do Brasil: `lgpd-transferencia-internacional`.

## 8. Antes de treinar

Decisão do controlador, com revisão jurídica. Responda a cada linha e grave em `.lgpd/ia.md`, pelo protocolo do marcador do `SKILL.md` (passo 7):

1. Papel: de quem são as conversas e quem decide o treino (seção 3).
2. Finalidade do treino escrita e compatível com a da coleta (art. 6º, I e II).
3. Base legal escolhida pela `lgpd-bases-legais`, com o teste de balanceamento se for legítimo interesse; dado sensível tratado pelo art. 11 ou filtrado antes.
4. Dados mínimos: filtros, anonimização ou pseudonimização e o teste de reidentificação (seção 6).
5. Aviso ao titular antes do início, pela `lgpd-transparencia-e-politicas` (ponto de parada 1 da skill `lgpd`).
6. Canal de oposição aberto antes do início, e oposição atendida antes de cada treino (seção 4).
7. Crianças e adolescentes fora do treino até a análise do melhor interesse (seção 5).
8. Provedor: documento de treino e retenção, com data, e contrato (seção 7).
9. Prazo de guarda do conjunto de treino e eliminação no fim (arts. 15 e 16), pela `lgpd-retencao-e-eliminacao` (ponto de parada 5).
10. Alto risco e relatório de impacto (`art-20-e-ia.md`, seção 7).
