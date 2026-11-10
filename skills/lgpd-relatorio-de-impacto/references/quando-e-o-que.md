> Fontes: ver skills/lgpd/references/fontes.md — siglas usadas: [LGPD], [L15352], [Res2], [Res15], [Res18], [Res23], [Res31], [Agenda], [Regulamentacoes], [GuiaLegitimoInteresse], [L15211], [D12622], [D12880], [PerguntasRIPD]

# Relatório de impacto: quando fazer e o que pôr

Paráfrase, não texto oficial. Base normativa: 09/11/2026. Artigo sem norma indicada é da LGPD (Lei nº 13.709/2018). A ANPD é a Agência Nacional de Proteção de Dados (art. 55-A, na redação da Lei nº 15.352/2026). A página de perguntas e respostas da ANPD sobre o relatório [PerguntasRIPD] e os guias da ANPD são orientação, não norma.

## 1. O que é e de quem é

- **Definição** (art. 5º, XVII): documentação do controlador com a descrição dos processos de tratamento de dados pessoais que podem gerar riscos às liberdades civis e aos direitos fundamentais, e com as medidas, as salvaguardas e os mecanismos de mitigação de risco.
- **De quem é:** do controlador (art. 5º, XVII; art. 38). Onde a equipe é operadora, ela não faz o relatório em nome próprio sobre os dados do cliente: entrega as informações que o controlador pedir, nas instruções dele (art. 39), como prevê o acordo de operador (`lgpd-operador-e-contratos`).
- **Um por processo:** a ANPD orienta um relatório para cada projeto ou processo com operações de tratamento voltadas à mesma finalidade; operações parecidas em natureza, finalidade e riscos podem ficar num relatório só. Controladores diferentes na mesma plataforma podem responder cada um pelo seu, porque as finalidades podem ser distintas [PerguntasRIPD].

## 2. Quando a lei o exige ou a ANPD o pede

| Situação | O que diz a norma | Quem age |
|---|---|---|
| Determinação da ANPD | a ANPD pode determinar ao controlador que elabore relatório de impacto sobre as suas operações de tratamento, inclusive de dados sensíveis, nos termos de regulamento, observados os segredos comercial e industrial (art. 38, caput) | controlador |
| Legítimo interesse | a ANPD pode solicitar o relatório ao controlador quando o tratamento se fundamentar no legítimo interesse dele, observados os segredos comercial e industrial (art. 10, § 3º) | controlador; base legal em `lgpd-bases-legais` |
| Incidente de segurança | a ANPD pode, a qualquer tempo, pedir ao controlador informações adicionais sobre o incidente, inclusive o relatório de impacto, com prazo para o envio (Res. CD/ANPD nº 15/2024, art. 8º) | controlador; ver `lgpd-incidentes` |
| Dados de crianças e adolescentes em produto ou serviço de tecnologia da informação direcionado a eles ou de acesso provável por eles | o controlador que trata dados de crianças e de adolescentes, sobretudo para fins além dos estritamente necessários à operação do produto ou serviço, mapeia os riscos e elabora relatório de impacto, de monitoramento e de avaliação da proteção de dados, compartilhado quando a autoridade do ECA Digital o requisitar, na forma de regulamento (Lei nº 15.211/2025, art. 16, parágrafo único); essa autoridade é a ANPD (Decreto nº 12.622/2025, art. 2º). O Decreto nº 12.880/2026, art. 47, pede ao fornecedor avaliação de impacto à segurança e à saúde de crianças e publicidade de uma versão resumida do relatório | controlador; ver `lgpd-criancas-e-adolescentes` |
| Poder Público e segurança pública (só referência) | a ANPD pode pedir a agentes do Poder Público a publicação de relatórios de impacto (art. 32) e deve pedi-los aos responsáveis pelos tratamentos das exceções do art. 4º, III (art. 4º, § 3º) | o órgão; ver `lgpd-aplicacao-e-papeis` |

- **Por iniciativa própria:** fora do dever do ECA Digital, a LGPD não manda fazer o relatório por iniciativa própria. A ANPD recomenda, como regra geral, elaborá-lo sempre que as operações puderem gerar alto risco aos princípios da LGPD e às liberdades civis e aos direitos fundamentais do titular, o que o próprio agente avalia; liga essa recomendação ao princípio da responsabilização e prestação de contas (art. 6º, X) e lembra que o programa de governança em privacidade, com avaliação sistemática de impactos e riscos (art. 50, § 2º, I, d), pode incluir o relatório [PerguntasRIPD]. No alto risco, a skill recomenda tê-lo pronto (seção 3).
- **Legítimo interesse com alto risco:** o guia da ANPD trata o relatório como documento relevante quando o tratamento envolve alto risco e diz que ele pode incorporar o teste de balanceamento ([GuiaLegitimoInteresse], p. 26). No tratamento de dados de crianças e de adolescentes com base no legítimo interesse, o guia vai além: o controlador deverá elaborar o relatório, independentemente do teste de balanceamento, se identificar alto risco no caso concreto (p. 14; repetido na p. 40). O guia é orientação, não norma; a skill trata esse caso como "fazer".
- **Regulamento:** cabe à ANPD editar regulamento sobre relatório de impacto para os casos em que o tratamento representar alto risco à garantia dos princípios gerais da LGPD (art. 55-J, XIII), e o art. 38 remete a ele. É o item 2 da Agenda Regulatória 2025-2026 (Res. CD/ANPD nº 23/2024, alterada pela Res. CD/ANPD nº 31/2025), em andamento e em elaboração interna, sem consulta à sociedade, na tabela de 20/10/2026 [Agenda]; não está na lista oficial de regulamentações [Regulamentacoes]. Não regulamentado pela ANPD até 09/11/2026. Enquanto isso, o controlador escolhe estrutura e formato, observado o conteúdo mínimo do art. 38, parágrafo único [PerguntasRIPD].
- **Sem consulta prévia e sem envio:** a LGPD não prevê consulta à ANPD antes do tratamento nem determina, como regra geral, o envio do relatório. Ele fica com o controlador e vai à ANPD quando ela o requisitar, na fiscalização ou nas hipóteses da lei; quem não atende ao pedido fica sujeito a medidas de fiscalização. A ANPD não responde a consulta jurídica em tese nem diz quais salvaguardas e medidas um caso concreto pede [PerguntasRIPD].

## 3. Alto risco, como referência

- **De onde vêm os critérios:** a Res. CD/ANPD nº 2/2022, art. 4º, define alto risco para fins desse regulamento, o de pequeno porte. Enquanto não houver regulamento do relatório, a ANPD orienta que os controladores podem, no que couber, adotar esse conceito como parâmetro, e diz que, para o relatório, os critérios não são exaustivos: o controlador pode achar alto risco em outras situações [PerguntasRIPD]. A skill usa os critérios como referência para todos os agentes.
- **Quem faz o teste:** a skill `lgpd-aplicacao-e-papeis`, que grava o resultado na seção Alto risco de `.lgpd/papeis.md`. Esta skill lê o resultado e, se ele faltar, chama aquela skill antes de seguir.
- **Regra** (Res. CD/ANPD nº 2/2022, art. 4º, caput): ao menos 1 critério geral e 1 específico, cumulativamente.
  - Gerais (Res. CD/ANPD nº 2/2022, art. 4º, I): tratamento em larga escala; tratamento que possa afetar significativamente interesses e direitos fundamentais dos titulares.
  - Específicos (Res. CD/ANPD nº 2/2022, art. 4º, II): tecnologias emergentes ou inovadoras; vigilância ou controle de zonas acessíveis ao público; decisões tomadas unicamente com base em tratamento automatizado, inclusive as que definem o perfil pessoal, profissional, de saúde, de consumo e de crédito ou aspectos da personalidade do titular; dados sensíveis ou de crianças, de adolescentes ou de idosos.
- **Larga escala** (Res. CD/ANPD nº 2/2022, art. 4º, § 1º): número significativo de titulares, considerados também o volume de dados, a duração, a frequência e a extensão geográfica do tratamento. A Res. CD/ANPD nº 15/2024 usa fórmula quase igual para o incidente com dados em larga escala, terminada em "extensão geográfica de localização dos titulares" (Res. CD/ANPD nº 15/2024, art. 5º, § 2º). Nenhuma das duas fixa número: registre os cinco fatores e a conclusão, nunca um número de corte, nem para negar um número que circula. O item 7 da Agenda (alto risco) foi encerrado sem guia final, só com documentos preliminares [Agenda].
- **Afetar significativamente** (Res. CD/ANPD nº 2/2022, art. 4º, § 2º): entre outras situações, quando o tratamento pode impedir o exercício de direitos ou o uso de um serviço, ou causar danos materiais ou morais, como discriminação, violação à integridade física, ao direito à imagem e à reputação, fraudes financeiras ou roubo de identidade.
- **Exemplos da ANPD** de quando elaborar o relatório: número significativo de titulares com dados sensíveis; decisão unicamente automatizada da qual possa resultar a negativa de um direito ou de um serviço [PerguntasRIPD].
- **Dado que revela dado sensível:** localização e histórico de compras não estão no rol de dado sensível (art. 5º, II), mas o tratamento que revela dado sensível e pode causar dano ao titular segue o art. 11 (art. 11, § 1º). Se o cruzamento permitir inferir saúde, convicção religiosa, vida sexual ou outro dado do rol, registre isso no relatório e leve a base legal a `lgpd-bases-legais`.
- **Pequeno porte:** quem faz tratamento de alto risco sai do regime de pequeno porte (Res. CD/ANPD nº 2/2022, art. 3º, I), salvo a faculdade da Res. CD/ANPD nº 2/2022, art. 8º. Para quem continua no regime, os prazos fixados nos normativos próprios para apresentar informações, documentos, relatórios e registros que a ANPD pedir são contados em dobro (Res. CD/ANPD nº 2/2022, art. 14, IV), e a ANPD pode exigir as obrigações dispensadas (Res. CD/ANPD nº 2/2022, art. 16). O enquadramento está na seção Porte de `.lgpd/papeis.md`.

## 4. O que pôr

**Conteúdo mínimo** (art. 38, parágrafo único), que nenhum formato dispensa:

1. a descrição dos tipos de dados coletados;
2. a metodologia usada para a coleta e para a garantia da segurança das informações;
3. a análise do controlador sobre as medidas, as salvaguardas e os mecanismos de mitigação de risco adotados.

A metodologia do item 2 é a da coleta e a da segurança, não o método de análise de risco; o método de risco também entra no relatório (seção 5).

**O que a ANPD recomenda reunir** [PerguntasRIPD], na ordem do modelo `assets/relatorio-de-impacto.md`:

- identificação dos agentes de tratamento e do encarregado; outras partes envolvidas, se foram consultadas e o que disseram;
- por que o relatório foi feito: alto risco, pedido da ANPD, gestão de riscos ou outro motivo;
- o projeto ou processo e os sistemas de informação ligados a ele;
- o tratamento, da coleta à eliminação: todos os dados pessoais e todos os dados sensíveis; categorias de titulares; crianças, adolescentes, idosos ou outros vulneráveis; volume de dados e número de titulares; fonte da coleta; finalidade de cada dado; compartilhamentos internos e externos, inclusive transferência internacional; prazos de guarda e forma de descarte;
- a hipótese legal de cada finalidade, com a justificativa;
- a análise dos princípios da LGPD (art. 6º), com a necessidade e a proporcionalidade das operações;
- os riscos ao titular, o resultado pela metodologia escolhida e as medidas, salvaguardas e mecanismos de mitigação;
- comentários e aprovações.

O relatório deve ser detalhado o bastante para a ANPD e o próprio controlador entenderem como o tratamento acontece e que riscos ele traz [PerguntasRIPD]. O número de titulares entra como fato do tratamento, não como corte de alto risco.

## 5. Riscos e metodologia

- **Quem escolhe o método:** o controlador. A ANPD recomenda metodologias reconhecidas como boas práticas pela comunidade técnica de segurança, privacidade e proteção de dados [PerguntasRIPD]. Escreva no relatório qual foi e por quê.
- **Como a ANPD descreve a análise** [PerguntasRIPD]: identificar o maior número possível de fatores de risco, sobretudo os mais relevantes; para cada um, estimar a probabilidade de o risco se materializar e o impacto, que depende dos danos aos titulares, em especial aos direitos e liberdades; examinar como fatores diferentes interagem e elevam o risco; documentar e justificar as escolhas.
- **Consequências a considerar** [PerguntasRIPD]: perda de confidencialidade, integridade ou disponibilidade; reversão da anonimização ou da pseudonimização; uso para fins incompatíveis; violação de liberdades e direitos; qualquer tratamento inadequado ou ilícito. Os danos da Res. CD/ANPD nº 2/2022, art. 4º, § 2º (discriminação, impedimento de usar um serviço, fraude, roubo de identidade), servem de lista de partida.
- **Vocabulário da lei:** as regras de boas práticas consideram a probabilidade e a gravidade dos riscos e dos benefícios (art. 50, § 1º). Uma matriz de probabilidade e gravidade conversa com esse vocabulário; nenhuma norma a impõe ao relatório.
- **Depois da análise:** o controlador decide se segue com o tratamento, se muda a forma dele ou se não o faz, e aplica as medidas, salvaguardas e mecanismos que o relatório recomendar [PerguntasRIPD].

## 6. Quem participa e quem aprova

- **Responsável:** o agente de tratamento responde pela conformidade do tratamento (Res. CD/ANPD nº 18/2024, art. 11); o relatório é do controlador (LGPD, art. 5º, XVII).
- **Encarregado:** o agente deve solicitar a assistência e a orientação do encarregado nas atividades e decisões estratégicas sobre tratamento de dados pessoais (Res. CD/ANPD nº 18/2024, art. 10, II), e o encarregado presta assistência e orientação na elaboração do relatório de impacto (Res. CD/ANPD nº 18/2024, art. 16, III). Isso não lhe dá a responsabilidade, perante a ANPD, pela conformidade do tratamento feito pelo controlador (Res. CD/ANPD nº 18/2024, art. 17). A ANPD considera desejável consultá-lo também na análise das conclusões do relatório [PerguntasRIPD].
- **Pequeno porte sem encarregado** (Res. CD/ANPD nº 2/2022, art. 11): o controlador escolhe quem conduz o relatório. Com alto risco, o regime de pequeno porte não vale (Res. CD/ANPD nº 2/2022, art. 3º, I), nem a dispensa da Res. CD/ANPD nº 2/2022, art. 11; vale o dever do controlador de indicar encarregado (LGPD, art. 41), em `lgpd-encarregado-e-governanca`.
- **Outras vozes:** o controlador pode ouvir outras áreas, os operadores, especialistas e titulares; registrar as opiniões divergentes e a justificativa da opção adotada é boa prática [PerguntasRIPD].
- **Aprovação:** nenhuma norma diz quem aprova o relatório. É escolha de governança do controlador, registrada no relatório; um arranjo comum é a direção decidir com o parecer do encarregado. Na `lgpd-skill`, aprovar o relatório é o ponto de parada 4 (skill `lgpd`, `references/pontos-de-parada.md`). Mudar um relatório já revisado ou aprovado exige o OK do usuário e gera versão nova, pendente, em outro arquivo; a anterior fica como prova, e o ponto 4 se reabre (`SKILL.md`, passos 7 e 8).

## 7. Quando fazer, rever, entregar e publicar

- **Antes de começar:** a ANPD recomenda elaborar o relatório antes de iniciar o tratamento para a finalidade desejada; se não der, assim que se identificar tratamento que possa gerar alto risco. Se a ANPD pedir, o controlador o elabora de todo modo [PerguntasRIPD].
- **Revisão:** contínua, sobretudo diante de fato novo: mudança nas operações, fator de risco novo ou agravado, regulamento ou orientação nova da ANPD [PerguntasRIPD]. Nenhuma norma fixa periodicidade.
- **Entrega:** só quando a ANPD requisitar (seção 2), observados os segredos comercial e industrial (art. 10, § 3º; art. 38).
- **Publicação:** em regra não é obrigatória; publicar pode demonstrar livre acesso, transparência e responsabilização (art. 6º, IV, VI e X), com uma versão pública diferente da interna para resguardar segredos comercial e industrial e outras informações protegidas por lei [PerguntasRIPD]. Exceções: a ANPD pode pedir a publicação a agentes do Poder Público (art. 32), e a página dela orienta o órgão público a publicar o relatório também por conta própria, quando não houver sigilo aplicável ao caso [PerguntasRIPD]; o ECA Digital pede a versão resumida pública (Decreto nº 12.880/2026, art. 47, § 1º).

## 8. Não regulamentado pela ANPD até 09/11/2026

| Tema | Onde a norma o deixa aberto | Situação | Enquanto isso |
|---|---|---|---|
| Regulamento do relatório de impacto, inclusive para tratamento de alto risco | art. 38 ("nos termos de regulamento"); art. 55-J, XIII | Agenda 2025-2026, item 2, em andamento [Agenda] | conteúdo mínimo do art. 38, parágrafo único; estrutura e formato escolhidos pelo controlador [PerguntasRIPD] |
| Guia de alto risco | Res. CD/ANPD nº 2/2022, art. 4º, § 3º | Agenda 2025-2026, item 7, encerrado sem guia final [Agenda] | critérios da Res. CD/ANPD nº 2/2022, art. 4º, como referência (seção 3) |
| Conteúdo mínimo, periodicidade e condições do relatório do ECA Digital | Lei nº 15.211/2025, art. 16, parágrafo único, II; Decreto nº 12.880/2026, art. 47, § 2º | nenhum ato da ANPD na lista oficial [Regulamentacoes] | `lgpd-criancas-e-adolescentes` |
