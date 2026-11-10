> Fontes: ver skills/lgpd/references/fontes.md — siglas usadas: [GuiaCookies], [LGPD], [L15211], [D12880], [GuiaFornecedoresECA], [Res23], [Res30], [Res31], [Agenda].

# Cookies e proteção de dados pessoais

Paráfrase do Guia orientativo da ANPD "Cookies e proteção de dados pessoais" (versão 1.0, outubro de 2022), lido no PDF oficial em 09/11/2026, com as páginas do PDF entre parênteses. O guia é orientação, não norma: a norma é a LGPD (Lei nº 13.709/2018). Ele se apresenta como guia de boas práticas, aberto a atualização e a regulação futura (p. 7 e 37), e vale também, de forma geral e observadas as peculiaridades de cada contexto, para tecnologias de rastreamento parecidas, inclusive em celulares e tablets (p. 6). A skill trata pixel, SDK de terceiro e identificador de dispositivo como essas tecnologias. Regulamento da ANPD sobre cookies: não regulamentado pela ANPD até 09/11/2026.

## 1. Quando o cookie trata dado pessoal (p. 8 e 9)

- Cookie é arquivo instalado no dispositivo do usuário que permite coletar informações, às vezes dados pessoais, para várias finalidades: login, idioma, carrinho de compras, medição de audiência, anúncios personalizados (p. 8).
- A informação pode se referir diretamente a uma pessoa natural ou permitir identificá-la por inferência e cruzamento com outras informações, e o guia lembra que o perfil comportamental associado a uma pessoa pode ser dado pessoal (p. 8 e 9). Informação relacionada a pessoa natural identificada ou identificável é dado pessoal (LGPD, art. 5º, I), e o tratamento dela segue a LGPD.

## 2. Categorias (p. 9 a 12)

Um mesmo cookie pode estar em mais de uma categoria (p. 9).

| Critério | Categorias |
|---|---|
| Quem gerencia | próprio, ou primário: definido pelo site ou aplicativo visitado; de terceiro: criado por outro domínio, por funcionalidade incorporada à página, como a exibição de anúncios (p. 9) |
| Necessidade | necessário: sem ele o usuário não faz as atividades principais do site; restrito ao essencial para prestar o serviço que o titular pediu, sem finalidades que atendam a outros interesses do controlador; não necessário: desabilitá-lo não impede o uso, como os que rastreiam comportamento, medem desempenho ou exibem anúncios (p. 10) |
| Finalidade | analítico ou de desempenho: como o site é usado, páginas mais vistas, erros; de funcionalidade: preferências como nome de usuário, região e idioma; de publicidade: hábitos de navegação para identificar, montar perfil e exibir anúncio personalizado (p. 10 e 11) |
| Retenção | de sessão: em geral descartado ao fechar o navegador; persistente: fica pelo período que o controlador define, de minutos a anos. Avalie se o persistente é mesmo necessário e limite a duração ao que a finalidade pede (p. 11 e 12) |

A distinção entre necessário e não necessário é especialmente relevante para a definição da base legal (p. 10; seção 4).

## 3. O que a LGPD pede de quem usa cookies (p. 13 a 17)

- **Finalidade, necessidade e adequação** (LGPD, art. 6º, I a III): finalidade específica e informada para cada categoria; finalidade genérica, como o aceite de termos e condições gerais, não serve; o dado colhido para medir audiência não pode virar perfil para anúncios (p. 14 e 15).
- **Livre acesso e transparência** (art. 6º, IV e VI): informar a forma do tratamento, o período de retenção, as finalidades, o compartilhamento com terceiros e os direitos, entre os demais pontos do art. 9º (p. 15).
- **O navegador é complemento.** Explicar como apagar ou bloquear cookies no navegador é boa prática, mas não dispensa um mecanismo direto e próprio para gerenciar os cookies e exercer os direitos (p. 15).
- **Direitos** (art. 18): acesso, eliminação, revogação do consentimento e oposição, por procedimento gratuito e facilitado; o guia recomenda um mecanismo de gerenciamento de cookies em que o titular reveja as permissões dadas (p. 16).
- **Retenção** (arts. 15 e 16): o tempo de vida do cookie acompanha a finalidade; prazo indeterminado, excessivo ou desproporcional à finalidade não é compatível com a LGPD (p. 16 e 17).
- **Base legal** (arts. 7º e 11): o controlador identifica a hipótese legal de cada uso de cookie que trate dado pessoal (p. 17; seção 4).

## 4. Base legal por categoria (p. 17 a 27)

O guia trata das duas bases mais usuais, consentimento e legítimo interesse, sem excluir outras (p. 17), e afirma que não há hierarquia entre as bases (p. 20). A escolha é do controlador, com a skill `lgpd-bases-legais`, que também faz o teste de legítimo interesse.

| Cookie | O que o guia diz | Condições |
|---|---|---|
| Necessário | o consentimento não é a base apropriada, porque não há escolha real entre aceitar e recusar (p. 20); o legítimo interesse pode ser, como apoio às atividades do controlador e serviço que beneficia o titular (p. 24; LGPD, art. 10, I e II) | só o essencial ao serviço pedido, informado no banner e na política; ponderação no caso concreto (p. 24; exemplo 3, p. 25 e 26) |
| Analítico, de medição de audiência | o guia admite o legítimo interesse em certos contextos, com riscos menores quando a medição serve só para identificar padrões e tendências, com dados agregados, sem combinar com outros rastreadores e sem perfil de usuário (p. 24) | a skill recomenda o legítimo interesse só nesse caso e, fora dele, o consentimento, que o guia diz ser o mais apropriado para os não necessários (p. 20). Com legítimo interesse, a categoria fica ativa, e o banner e a política informam finalidade e retenção e dão a oposição por mecanismo próprio (exemplo 4, p. 26 e 27; p. 33) |
| Publicidade | o legítimo interesse dificilmente é o mais apropriado, em especial com cookie de terceiro, perfil comportamental ou rastreamento entre sites; o consentimento tende a ser o mais apropriado (p. 25) | consentimento por finalidade, desativado por padrão (seção 7). No produto direcionado a crianças e adolescentes ou de acesso provável por eles, sem perfilamento para publicidade a esse público, nem com consentimento (seção 8) |
| Outros não necessários | o consentimento é o mais apropriado, porque dá para oferecer escolha genuína (p. 20) | consentimento por finalidade, desativado por padrão |

Dado sensível colhido por cookie com base no consentimento: consentimento específico e destacado (p. 19; LGPD, art. 11, I).

## 5. Consentimento para cookies (p. 17 a 22)

- **Livre:** o titular pode de fato aceitar ou recusar, sem consequência negativa; o consentimento "forçado", condicionado ao aceite integral sem opções efetivas, não é compatível com a LGPD. A regularidade se verifica no caso concreto, olhando se há alternativa real e satisfatória (p. 17 e 18).
- **Informado:** antes da escolha, tudo o que é preciso para decidir (finalidades, forma, retenção e os demais pontos do art. 9º). Mudou a premissa do consentimento? Novo consentimento, ou outra base (p. 18).
- **Inequívoco:** manifestação clara e positiva; o guia não recomenda opção pré-selecionada nem consentimento tácito, como presumir que quem continua navegando aceitou (p. 18 e 19).
- **Revogação:** procedimento simplificado e gratuito, parecido com o usado para obter o consentimento (p. 19; LGPD, art. 8º, § 5º).
- **Prova:** é do controlador (LGPD, art. 8º, § 2º); o guia recomenda registrar e documentar cada requisito do consentimento (p. 19).
- **Exemplos do guia:** banner com uma única opção, "Estou de acordo", não dá consentimento livre nem informado (exemplo 1, p. 21); banner com aceitar, rejeitar e gerenciar no mesmo formato e destaque, segundo nível com finalidades e retenção e não necessários desativados por padrão, só falha por não ter revogação simples (exemplo 2, p. 21 e 22).

## 6. Política de cookies (p. 28, 29 e 36)

- **Conteúdo:** as finalidades específicas, o período de retenção, se há compartilhamento com terceiros e os demais pontos do art. 9º (p. 28).
- **Banner não é política:** o banner informa em resumo e dá o controle; a política detalha (p. 28).
- **Onde:** seção do aviso de privacidade, página separada ou dentro das camadas do banner; as três formas valem se as informações essenciais estiverem lá (p. 29).
- **Só na política de privacidade pode não bastar:** a seção sobre cookies deve ter acesso fácil (aba, barra lateral ou sumário), e, como o titular nem sempre abre a política, o guia recomenda mostrar a informação ao entrar na plataforma, por exemplo no banner de segundo nível (exemplo 7, p. 36).

## 7. Banner (p. 30 a 33)

**Primeiro nível**
- botão para rejeitar todos os cookies não necessários, fácil de ver, no primeiro e no segundo nível (p. 30);
- link fácil para o titular exercer os direitos: saber como os dados são usados e por quanto tempo, pedir a eliminação, opor-se, revogar o consentimento (p. 31).

**Segundo nível**
- cookies em categorias, descritas pelo uso e pela finalidade, em texto simples, claro e preciso;
- consentimento para cada finalidade, por categoria, quando couber;
- cookies baseados no consentimento desativados por padrão (p. 31);
- categoria com legítimo interesse ativa, com a oposição ali mesmo, por mecanismo próprio (exemplo 4, p. 26; p. 33);
- botão de rejeitar e medição por legítimo interesse: o guia pede um botão para recusar de uma vez tudo o que não é necessário (p. 30), e o cookie que mede o desempenho não é necessário (p. 10). Por isso, na skill, "Rejeitar cookies não necessários" desliga também a medição por legítimo interesse, e o clique vale como oposição a ela; o primeiro nível diz que a medição existe, com que base, e que o botão e as preferências a desligam (exemplo 4, p. 26);
- como bloquear cookies pelo navegador; se um cookie ou rastreador não puder ser desativado pelo navegador, o titular é avisado (p. 32).

**O que evitar** (p. 33)
- um único botão ("concordo", "aceito", "ciente") sem opção de gerenciar, quando a base é o consentimento;
- o botão de aceitar em destaque e os de rejeitar ou configurar difíceis de ver ou de entender;
- impedir ou dificultar a rejeição de todos os não necessários;
- não necessários ativados por padrão, à espera de que o titular os desligue;
- não ter segundo nível;
- não dar mecanismo direto, simples e próprio para revogar o consentimento e para se opor, além do navegador;
- não dar opções separadas para cookies de finalidades diferentes;
- política de cookies só em língua estrangeira;
- lista tão detalhada que cansa e impede a escolha clara;
- com o consentimento como base, amarrar o aceite à aceitação integral das condições, sem opções efetivas.

## 8. Publicidade direcionada: crianças e adolescentes e fiscalização

- **Vedação do ECA Digital.** No produto direcionado a crianças e adolescentes ou de acesso provável por eles (Lei nº 15.211/2025, art. 1º), é vedado usar técnicas de perfilamento para direcionar publicidade comercial a crianças e adolescentes, e também análise emocional e realidade aumentada, estendida ou virtual para esse fim (art. 22); é vedado criar perfis comportamentais deles para publicidade comercial, inclusive a partir dos dados da verificação de idade e de dados grupais e coletivos (art. 26). Quem oferta ou distribui publicidade a esse público impede o uso dessas técnicas (Decreto nº 12.880/2026, art. 33). A lei não abre exceção pelo consentimento: a categoria de publicidade por perfil não alcança esses usuários.
- **No banner.** O banner não oferece anúncio por perfil quando o público inclui crianças ou adolescentes, ou quando a idade não é conhecida e o acesso por eles é provável. Se o produto está no alcance da lei, e como separar esses usuários, decide a skill `lgpd-criancas-e-adolescentes`, em `.lgpd/criancas-e-adolescentes.md` (seção 1, "Conclusão: o ECA Digital se aplica?", e seção 3, linha "Publicidade"). A plataforma de comércio eletrônico que intermedeia a compra e venda de produto ou serviço proibido a crianças e adolescentes, de que trata o Decreto nº 12.880/2026, art. 18, está entre os fornecedores que o ECA Digital e o Decreto já situam no alcance da lei: há presunção legal de acesso provável, que só se afasta de forma motivada (Guia de fornecedores do ECA Digital, p. 31).
- **Fiscalização.** O Mapa de Temas Prioritários 2026-2027 prevê 5 ações de fiscalização sobre o uso secundário de dados pessoais para entregar publicidade comercial direcionada, especialmente por perfilamento, no 1º semestre de 2027 (Res. CD/ANPD nº 30/2025, Tema 1), e tem a proteção de crianças e adolescentes no ambiente digital como Tema 2. Cookie e pixel de publicidade, próprios ou de terceiro, entram nesse foco: confira a base (seção 4), a vedação acima e a informação ao titular antes de publicar.

## 9. O que não está regulamentado

- Cookies: não regulamentado pela ANPD até 09/11/2026; vale a LGPD, e o guia de 2022 é orientação.
- Consentimento: não regulamentado pela ANPD até 09/11/2026 (Agenda Regulatória 2025-2026, item 18, em andamento; Res. CD/ANPD nº 23/2024, alterada pela Res. CD/ANPD nº 31/2025).
