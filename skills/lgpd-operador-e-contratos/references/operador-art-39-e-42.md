> Fontes: ver skills/lgpd/references/fontes.md — siglas usadas: [LGPD], [CDC], [Res15], [GuiaAgentes]

# Operador: instruções (art. 39) e responsabilidade (arts. 42 a 45)

Paráfrase, não texto oficial. Situação conferida em 09/11/2026. "Guia" é o Guia orientativo para definições dos agentes de tratamento de dados pessoais e do encarregado, da ANPD, versão 2.0 (abril de 2022), citado pelo número do item; é orientação, não norma. Os artigos citados da Res. CD/ANPD nº 15/2024 são do regulamento anexo a ela.

## 1. Controlador, operador e suboperador

- **Definições.** Controlador é quem toma as decisões sobre o tratamento de dados pessoais (LGPD, art. 5º, VI). Operador é quem trata dados pessoais em nome do controlador (art. 5º, VII). Os dois são os agentes de tratamento (art. 5º, IX).
- **O papel se fixa por operação.** A mesma organização pode ser controladora numa operação e operadora em outra (Guia, item 8). Empregados, sócios e equipes internas não são operadores: agem pela organização (Guia, itens 6, 10 e 60).
- **O que fica com o controlador.** A finalidade, a natureza dos dados e a duração do tratamento, inclusive o prazo para eliminar os dados, são elementos essenciais e ficam com o controlador (Guia, itens 37 e 38). O operador pode decidir elementos não essenciais, como softwares, equipamentos e o detalhe das medidas de segurança (Guia, itens 36 e 57).
- **Suboperador.** A LGPD define só controlador e operador; o termo suboperador não está na lei (Guia, itens 63 e 64). O Guia chama de suboperador quem o operador contrata para ajudá-lo a tratar os dados em nome do controlador. A relação direta do suboperador é com o operador, e os dois podem, conforme o caso, exercer a função de operador e responder perante a ANPD (item 65). A nuvem que o operador contrata para guardar os dados do cliente é o exemplo do próprio Guia (exemplos 5, 11 e 12).
- **Controladores conjuntos.** O Guia reconhece a controladoria conjunta quando três critérios se somam: mais de um controlador com poder de decisão sobre o tratamento; interesse de cada um, com finalidade própria, no mesmo tratamento; e decisões comuns ou convergentes sobre a finalidade e os elementos essenciais (itens 49 e 50). Nesse caso vale a LGPD, art. 42, § 1º, II. Papel em dúvida: skill `lgpd-aplicacao-e-papeis`.

## 2. Art. 39: o operador segue as instruções; o controlador verifica

- **O que diz.** O operador trata os dados conforme as instruções do controlador, e o controlador verifica se as próprias instruções e as normas sobre o tema estão sendo cumpridas (LGPD, art. 39). O artigo tem só o caput, sem parágrafos.
- **O que o Guia tira dele.**
  - O operador só trata os dados para a finalidade que o controlador fixou; o poder de decisão é a diferença entre os dois papéis (item 53).
  - Deveres do operador apontados pelo Guia: seguir as instruções; firmar contrato que defina o regime das atividades e as responsabilidades com o controlador; e dar ciência ao controlador quando contratar suboperador (item 54).
  - A LGPD não manda expressamente fazer contrato entre controlador e operador. O Guia o trata como boa prática, porque limita a atuação do operador, distribui as responsabilidades e reduz incertezas (item 55). O contrato pode fixar objeto, duração, natureza e finalidade do tratamento, tipos de dados e os direitos, obrigações e responsabilidades das partes (item 56).
  - O Guia recomenda que o operador obtenha do controlador autorização formal para contratar suboperador, genérica (ex.: qualquer serviço de armazenamento em nuvem) ou específica (uma empresa determinada, para um fim determinado), e diz que ela pode constar do próprio contrato. Sem ela, a contratação pode ser vista como descumprimento das instruções e atrair a responsabilidade da LGPD, art. 42, § 1º, I (item 67 e nota 17).
- **Deveres do operador em outros artigos.**
  - Manter registro das operações de tratamento que realiza (LGPD, art. 37). Roteiro: skill `lgpd-mapeamento-e-registro`.
  - Adotar medidas de segurança técnicas e administrativas (LGPD, art. 46) e garantir a segurança da informação mesmo depois do fim do tratamento (LGPD, art. 47). Roteiro: skill `lgpd-medidas-de-seguranca`.
  - Pedido do titular: o titular obtém do controlador o que o art. 18 da LGPD garante (LGPD, art. 18, caput); o requerimento pode chegar a qualquer agente de tratamento (LGPD, art. 18, § 3º), e o operador o repassa ao controlador e segue as instruções dele (LGPD, art. 39). Roteiro: skill `lgpd-direitos-do-titular`.
  - Incidente: quem comunica à ANPD e aos titulares o incidente que possa acarretar risco ou dano relevante aos titulares é o controlador (LGPD, art. 48, caput; Res. CD/ANPD nº 15/2024, arts. 4º e 5º). O aviso do operador ao controlador vem do contrato; a prática é cobrir todo incidente com os dados do controlador, porque quem avalia o risco é ele (`acordo-de-operador.md`, seção 3). Roteiro: skill `lgpd-incidentes`.
- **Instrução que parece ilícita.** A equiparação da LGPD, art. 42, § 1º, I, fala em instruções lícitas. Boa prática, não regra da lei: o contrato prevê que o operador aponte por escrito, antes de executar, a instrução que lhe pareça contrária à lei ou que ele não consiga cumprir.

## 3. Art. 42: quem repara o dano

- **Caput.** O controlador ou o operador que, ao tratar dados pessoais, causar a alguém dano patrimonial, moral, individual ou coletivo, violando a legislação de proteção de dados, é obrigado a repará-lo.
- **§ 1º.** Para garantir a indenização efetiva ao titular:
  - **I, operador:** responde solidariamente pelos danos do tratamento quando descumpre as obrigações da legislação de proteção de dados ou quando não segue as instruções lícitas do controlador; nesses casos, o operador se equipara ao controlador, salvo as exclusões do art. 43.
  - **II, controladores:** os controladores diretamente envolvidos no tratamento do qual decorreram os danos respondem solidariamente, salvo as exclusões do art. 43.
- **§ 2º, ônus da prova.** No processo civil, o juiz pode inverter o ônus da prova a favor do titular quando a alegação for verossímil, quando houver hipossuficiência para produzir a prova ou quando produzi-la for excessivamente oneroso para o titular.
- **§ 3º, dano coletivo.** As ações de reparação por danos coletivos podem ser propostas coletivamente em juízo, conforme a legislação própria.
- **§ 4º, regresso.** Quem reparar o dano ao titular pode cobrar dos demais responsáveis, na medida da participação de cada um no evento.
- **Leitura do Guia.** Controlador e operador têm de reparar o dano que causarem, cada um na sua esfera de atuação (item 61). Em regra, a responsabilidade é do controlador; a solidariedade do operador no § 1º, I, é exceção e, em princípio, a única hipótese em que o operador se equipara ao controlador (item 62). O suboperador pode ser equiparado ao operador quanto às atividades para as quais foi contratado, o que amplia a cadeia de solidariedade do § 1º, I (item 69).
- **Leitura errada.** "O controlador responde solidariamente pelos danos causados pelo operador" não é o texto. O § 1º, I, trata do operador que descumpre a lei ou sai das instruções lícitas; o § 1º, II, dos controladores diretamente envolvidos.
- **O que costuma expor o operador ao § 1º, I:** usar os dados para fim próprio ou não instruído (ex.: treinar modelo, montar base de marketing); contratar suboperador sem autorização; descumprir a segurança combinada ou a exigida pela lei; guardar os dados depois do fim sem instrução; decidir pelo controlador, respondendo ao titular ou comunicando à ANPD por conta própria.

## 4. Art. 43: quando o agente não responde

Os agentes de tratamento só deixam de responder se provarem uma destas situações:

1. não fizeram o tratamento de dados pessoais que lhes é atribuído;
2. fizeram o tratamento, mas sem violar a legislação de proteção de dados; ou
3. o dano decorre de culpa exclusiva do titular ou de terceiro.

A prova é do agente. Para o operador, ajudam a provar: as instruções por escrito, o registro das operações (LGPD, art. 37), a autorização dos suboperadores e o registro das medidas de segurança.

## 5. Art. 44: tratamento irregular

- O tratamento é irregular quando não observa a legislação ou quando não oferece a segurança que o titular pode esperar, consideradas as circunstâncias relevantes, entre elas: o modo como é feito; o resultado e os riscos que razoavelmente se esperam dele; e as técnicas de tratamento disponíveis na época em que foi feito.
- **Parágrafo único.** Responde pelos danos da violação da segurança dos dados o controlador ou o operador que, por deixar de adotar as medidas de segurança da LGPD, art. 46, der causa ao dano. É a regra que alcança o operador pela segurança, ao lado do art. 42 da LGPD.

## 6. Art. 45: relação de consumo

- Quando a violação de direito do titular acontece numa relação de consumo, as regras de responsabilidade continuam sendo as da legislação própria (LGPD, art. 45). A principal é o Código de Defesa do Consumidor (Lei nº 8.078/1990).
- Pontos do CDC que pesam na leitura do contrato:
  - serviço é toda atividade fornecida no mercado de consumo mediante remuneração, inclusive as de natureza bancária, financeira, de crédito e securitária (CDC, art. 3º, § 2º);
  - o fornecedor de serviços responde, independentemente de culpa, pelos danos causados por defeito na prestação do serviço; o serviço é defeituoso quando não oferece a segurança que o consumidor pode esperar (CDC, art. 14, caput e § 1º); o fornecedor só se exime provando que o defeito não existe ou que a culpa é exclusiva do consumidor ou de terceiro (CDC, art. 14, § 3º);
  - havendo mais de um autor da ofensa, ou mais de um responsável pelo dano, todos respondem solidariamente (CDC, art. 7º, parágrafo único, e art. 25, § 1º).
- Exemplos de relação de consumo com o titular: banco e seus clientes; loja virtual e seus compradores. Quem é fornecedor na cadeia e como o operador responde no caso concreto é análise do advogado.

## 7. O que isso muda no contrato

- O contrato é onde ficam as instruções da LGPD, art. 39, e a divisão da responsabilidade entre as partes; as cláusulas mínimas estão em `acordo-de-operador.md`.
- A solidariedade da LGPD, art. 42, § 1º, existe para garantir a indenização efetiva ao titular. O que o contrato reparte entre controlador e operador vale entre eles, por exemplo no regresso do art. 42, § 4º; o efeito perante o titular é análise do advogado.
- Limite de responsabilidade, indenização entre as partes e seguro são negociação, com revisão jurídica. Em relação de consumo, inclua o CDC na conta do risco (LGPD, art. 45).
