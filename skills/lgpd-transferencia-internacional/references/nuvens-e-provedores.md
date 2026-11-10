> Fontes: ver skills/lgpd/references/fontes.md — siglas usadas: [LGPD], [Res19], [Res32], [Regulamentacoes]. Documentos de provedores: skills/lgpd/references/fontes-fornecedores.md.

# Nuvens e provedores: onde está o adendo brasileiro

Fatos só dos documentos listados na skill `lgpd`, em `references/fontes-fornecedores.md`, lidos em 09/11/2026, com a data de cada versão quando o documento a traz. O provedor pode mudar o texto a qualquer momento: antes de decidir, abra o documento de novo e anote a data. Prazos de incidente, subprocessadores e fim do contrato estão na diligência da skill `lgpd-operador-e-contratos` (`references/diligencia-de-fornecedores.md`). Os artigos da Res. CD/ANPD nº 19/2024 dizem o anexo.

## 1. Como ler o documento do provedor

1. **Quem assina e onde.** Qual entidade do provedor é parte do contrato e em que país ela fica? Isso define quem é exportador e quem é importador (Res. CD/ANPD nº 19/2024, Anexo I, art. 3º, I e II). A entidade costuma estar no contrato principal, não no acordo de tratamento.
2. **Onde e quem.** Onde os dados ficam e são processados, de onde são acessados (suporte, subprocessadores) e em que casos saem da região escolhida.
3. **Que cláusulas.** O documento traz as cláusulas-padrão da ANPD (Anexo II) ou só as da UE? Cláusula da UE não é cláusula da ANPD, e não há equivalência reconhecida em 09/11/2026 (Anexo I, arts. 16, 18 e 20).
4. **Que opções.** Com as cláusulas da ANPD: qual opção da cláusula 3 (transferências posteriores) e da cláusula 4 (A, com Parte Designada; B, entre operadores, com Terceiro Controlador)? O texto traz só os itens da opção marcada (no Anexo II, a Opção A da cláusula 4 tem só os itens 4.1 e 4.2)? Quem publica o documento do art. 17 e atende os titulares?
5. **Retificação.** A cláusula 15.4, alínea b, remete ao item 15.3, como manda a retificação de 18/08/2025?
6. **Data.** Versão do documento e data da leitura, no registro (`assets/transferencias.md`).

## 2. Por provedor

### Google Cloud: Cloud Data Processing Addendum (última modificação em 30/10/2026) e cláusulas brasileiras (21/08/2025)

- **Adendo brasileiro: sim.** O DPA tem seção própria para o Brasil. Ali, "país adequado" é o Brasil ou o país ou organismo reconhecido pela ANPD (seção Brasil, item 1), e as partes reconhecem que a LGPD não exige cláusulas para tratar dados num país adequado ou transferi-los a ele (item 3.1).
- **Qual texto vale.** Para os demais países, se o Google não tiver adotado outra solução de transferência: se o endereço do Google estiver em país adequado, aplicam-se as cláusulas brasileiras operador→operador com o Google como exportador, nas transferências do Google aos subprocessadores; se não estiver, aplicam-se, entre o Google e o cliente, as cláusulas controlador→operador ou operador→operador, conforme o papel do cliente (seção Brasil, item 3.1, b). Se o Google adotar outra solução, ele informa o cliente (item 3.1, a).
- **Papéis nas cláusulas.** Nas cláusulas controlador→operador, o cliente é o exportador e controlador, o Google é o importador e operador, transferências posteriores ficam na Opção A da cláusula 3, e o cliente é a Parte Designada que publica o documento da cláusula 14, atende os titulares e comunica incidentes (cláusula 4). Nas operador→operador, as duas partes são operadoras e vale a Opção B da cláusula 4, com o Terceiro Controlador identificado no contrato do cliente com ele.
- **Cliente operador.** Repassa ao controlador, sem demora, os avisos sobre as cláusulas, responde perante o Google pela transparência do controlador prevista nelas e entrega os dados de identificação do controlador quando o Google pedir (seção Brasil, item 3.3).
- **Retificação.** Nas três cláusulas brasileiras, tanto na versão em português que o DPA indica (`https://cloud.google.com/sccs/br-c2p?hl=pt-br` e as páginas `br-p2p` e `br-p2p-intra-group` com `?hl=pt-br`) quanto na versão em inglês, datadas de 21/08/2025, a cláusula 15.4, alínea b, ainda remete ao item 15.2, redação anterior à retificação de 18/08/2025. O texto difere do Anexo II retificado nesse ponto.
- **Cláusula 4.** Nas cláusulas controlador→operador, em inglês e em português (21/08/2025), a cláusula 4 marca a Opção A e, depois dos itens 4.1 e 4.2, traz os itens 4.3 a 4.8, que no Anexo II só existem na Opção B (equiparação do exportador, Partes como operadoras, Terceiro Controlador, pedidos de titular e registro de incidentes). No Anexo II, a Opção A tem só os itens 4.1 e 4.2. É a segunda diferença do texto do Google para o Anexo II: registre as duas e leve-as à revisão jurídica, que decide se pede a correção ao Google.

### AWS: AWS Data Processing Addendum (sem data no documento), página Brazil Data Privacy e lista de subprocessadores (atualizada em 30/10/2026)

- **Adendo brasileiro: não, nos documentos listados.** O DPA não cita LGPD, ANPD nem Brasil. As cláusulas-padrão da UE de 2021 valem só para dados sujeitos ao GDPR (seção 12.2).
- **Página Brazil Data Privacy.** Diz que a AWS oferece aos clientes um acordo de tratamento de dados que atende aos requisitos da LGPD, mas não fala de mecanismo de transferência nem de cláusulas da ANPD.
- **Regiões.** O cliente escolhe as Regiões, e a AWS não tira os dados delas, salvo o necessário para prestar o serviço pedido ou cumprir a lei ou ordem de autoridade (DPA, seção 12.1; página Brazil Data Privacy). A lista de subprocessadores mostra uma entidade no Brasil para a Região South America (Sao Paulo). Com Região nos EUA, os dados vão para os EUA: é transferência internacional (LGPD, art. 5º, XV).

### Microsoft: Products and Services Data Protection Addendum (01/11/2026)

- **Adendo brasileiro: não.** O adendo não cita LGPD, ANPD nem Brasil.
- **O que usa.** O cliente autoriza a transferência para os EUA e para qualquer país onde a Microsoft ou os subprocessadores dela atuem. As saídas da UE, do EEE, do Reino Unido e da Suíça seguem as cláusulas-padrão da UE de 2021 (e, do Reino Unido, o adendo britânico), e a Microsoft é certificada nos Data Privacy Frameworks UE–EUA e Suíça–EUA e na extensão britânica.

### Vercel: Data Processing Addendum (atualizado em 17/03/2026)

- **Adendo brasileiro: não.** O adendo não cita LGPD, ANPD nem Brasil.
- **O que usa.** Processamento principal nos EUA, com possível transferência para qualquer lugar onde a Vercel ou os subprocessadores atuem; o anexo de mecanismos de transferência cobre EEE, Reino Unido e Suíça, com as cláusulas-padrão da UE de 2021 e o adendo britânico.

### Supabase: Data Processing Addendum (versão 1, de 01/08/2026)

- **Adendo brasileiro: não no texto, com uma previsão.** O adendo não cita LGPD, ANPD nem Brasil. As cláusulas-padrão da UE de 2021 se aplicam quando o GDPR ou a lei suíça se aplicam, ou quando a lei do exportador exige mecanismo e a autoridade dele não adotou cláusulas próprias, aceitou as da UE ou o mercado as usa (seção 12.1).
- **Previsão.** Se a lei do exportador aprovar mecanismo diferente das cláusulas da UE, as partes firmam sem demora um acordo complementar com as cláusulas ou o mecanismo adotados pela autoridade do país do exportador (Anexo 2, item 4.4). A ANPD adotou as cláusulas dela (Res. CD/ANPD nº 19/2024, Anexo II): peça esse acordo complementar e registre a resposta.
- **Região.** Escolhida a região, os dados ficam e são processados principalmente nela, com exceções (seção 6.1).

### OpenAI e Anthropic

Os documentos listados (controles de dados da plataforma da OpenAI; páginas de retenção e de treino da Anthropic) tratam de retenção e treino de modelo e não citam LGPD, ANPD nem cláusulas de transferência. Peça o acordo de tratamento e o mecanismo de transferência e registre na diligência.

### WhatsApp (Meta): aviso de privacidade para o Brasil (em vigor desde 24/07/2025)

É aviso ao usuário, não acordo de operador. Diz que o WhatsApp transfere dados com mecanismos como as cláusulas-padrão aprovadas pela ANPD e que o usuário pode pedir cópia das cláusulas aplicáveis: um exemplo de controlador que publica a transferência e oferece a íntegra das cláusulas.

## 3. Resumo

| Provedor | Cláusulas da ANPD no documento listado | O que o documento usa para transferir |
|---|---|---|
| Google Cloud | sim, com duas diferenças do Anexo II: a cláusula 15.4, b, anterior à retificação, e os itens 4.3 a 4.8 da Opção B na cláusula 4 das controlador→operador | cláusulas brasileiras, salvo outra solução adotada pelo Google |
| AWS | não | cláusulas da UE de 2021, só para dados sujeitos ao GDPR; regiões escolhidas pelo cliente |
| Microsoft | não | cláusulas da UE de 2021 e Data Privacy Frameworks |
| Vercel | não | cláusulas da UE de 2021, para EEE, Reino Unido e Suíça |
| Supabase | não no texto; prevê acordo complementar com as cláusulas da autoridade do país do exportador | cláusulas da UE de 2021, nas condições da seção 12.1 |
| OpenAI e Anthropic | não tratam | documentos de retenção e treino |
| WhatsApp (Meta) | o aviso diz que usa as cláusulas da ANPD e entrega cópia | é aviso ao usuário |

## 4. Nuvem nos EUA sem as cláusulas da ANPD

- **Precisa de mecanismo.** Os EUA não têm adequação reconhecida pela ANPD: a única decisão é a Res. CD/ANPD nº 32/2026, que reconhece a UE e autoriza transferências também para Islândia, Liechtenstein e Noruega. A transferência precisa de um caso do art. 33 da LGPD.
- **As cláusulas da UE não bastam.** Com cláusulas-padrão, valem as do Anexo II, por inteiro e sem alteração (Res. CD/ANPD nº 19/2024, Anexo I, art. 16).
- **Opções**, que são decisão do controlador com revisão jurídica:
  - pedir ao provedor as cláusulas da ANPD, num contrato próprio ou num termo aditivo (Anexo I, art. 16, § 1º);
  - usar outro caso do art. 33, com os limites do caso (`arts-33-a-36.md`, seção 2);
  - manter os dados e os acessos no Brasil, quando o provedor oferecer e o documento garantir, conferindo as exceções de saída;
  - trocar de provedor.
- **Enquanto a decisão não vem**, registre a lacuna, quem decide e até quando (`assets/transferencias.md`).

## 5. Fornecedor na União Europeia ou no EEE

- A transferência para um Estado membro da UE, a Islândia, Liechtenstein ou a Noruega usa a adequação (LGPD, art. 33, I; Res. CD/ANPD nº 32/2026, art. 1º, parágrafo único): não precisa de cláusulas-padrão.
- Continuam: base legal e finalidade informada (Res. CD/ANPD nº 19/2024, Anexo I, art. 9º), acordo de operador (`lgpd-operador-e-contratos`) e a pergunta sobre onde o fornecedor guarda, processa e repassa os dados (`adequacao-res-32-2026.md`, seção 2).
