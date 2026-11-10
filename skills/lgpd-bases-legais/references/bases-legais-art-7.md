> Fontes: ver skills/lgpd/references/fontes.md — siglas usadas: [LGPD], [Agenda], [Res23], [Res31], [Enun1], [GuiaCookies]

# Princípios e bases legais: LGPD, arts. 6º e 7º

Paráfrase, não texto oficial. Situação conferida em 09/11/2026. "Base legal" e "hipótese legal" são a mesma coisa: os casos em que a LGPD permite tratar dado pessoal.

## 1. Boa-fé e os 10 princípios (art. 6º)

Todo tratamento observa a boa-fé (art. 6º, caput) e os 10 princípios abaixo, seja qual for a base. Uma base válida não salva tratamento que fere um princípio.

| Inciso | Princípio | O que exige |
|---|---|---|
| I | finalidade | propósitos legítimos, específicos, explícitos e informados ao titular; nada de tratamento posterior incompatível com eles |
| II | adequação | tratamento compatível com as finalidades informadas, no contexto em que ocorre |
| III | necessidade | o mínimo necessário para a finalidade: dados pertinentes, proporcionais e não excessivos |
| IV | livre acesso | consulta facilitada e gratuita sobre a forma e a duração do tratamento e sobre a integralidade dos dados |
| V | qualidade dos dados | dados exatos, claros, relevantes e atualizados, conforme a necessidade da finalidade |
| VI | transparência | informações claras, precisas e facilmente acessíveis sobre o tratamento e os agentes, observados os segredos comercial e industrial |
| VII | segurança | medidas técnicas e administrativas contra acesso não autorizado e contra destruição, perda, alteração, comunicação ou difusão, acidentais ou ilícitas |
| VIII | prevenção | medidas para evitar danos decorrentes do tratamento |
| IX | não discriminação | nenhum tratamento para fins discriminatórios ilícitos ou abusivos |
| X | responsabilização e prestação de contas | o agente demonstra que adotou medidas eficazes para cumprir as normas, e a eficácia delas |

## 2. As 10 bases (art. 7º, I a X)

O tratamento só pode ocorrer nas hipóteses do art. 7º (caput). Dado sensível segue outra lista, a do art. 11: ver `dados-sensiveis-art-11.md`.

| Inciso | Base | Quando serve | Cuidado |
|---|---|---|---|
| I | consentimento do titular | o titular escolhe de fato, e a finalidade pode parar se ele recusar ou revogar | regras do art. 8º e do art. 9º, §§ 1º e 2º: ver `consentimento-art-8-e-9.md`; a revogação encerra o tratamento baseado nele (art. 8º, § 5º; art. 15, III) |
| II | cumprimento de obrigação legal ou regulatória pelo controlador | uma lei ou um regulamento obriga o próprio controlador a tratar aquele dado | sem a norma e o artigo que impõem a obrigação, lidos na fonte, não é esta base |
| III | administração pública, para políticas públicas previstas em leis e regulamentos ou respaldadas em contratos, convênios ou instrumentos congêneres | tratamento e uso compartilhado pelo próprio poder público, observado o Capítulo IV da lei | empresa que trata dados em nome de órgão público é, em regra, operadora: ver `lgpd-aplicacao-e-papeis` |
| IV | estudos por órgão de pesquisa | órgão ou entidade da administração pública, ou pessoa jurídica de direito privado sem fins lucrativos constituída no Brasil, com sede e foro no País, que tenha na missão ou no objeto social a pesquisa básica ou aplicada de caráter histórico, científico, tecnológico ou estatístico (art. 5º, XVIII) | empresa com fins lucrativos não é órgão de pesquisa; anonimizar sempre que possível |
| V | execução de contrato, ou de procedimentos preliminares a ele, do qual o titular seja parte, a pedido do titular | o que é necessário para cumprir o contrato com o próprio titular (entregar, cobrar, prestar o serviço) | o que não é necessário ao contrato, como enviar ofertas, precisa de outra base; o art. 11 não tem esta base para dado sensível |
| VI | exercício regular de direitos em processo judicial, administrativo ou arbitral | guardar ou usar dados para se defender ou agir em processo | para dado sensível, a alínea "d" do art. 11, II, é mais ampla: inclui "em contrato" |
| VII | proteção da vida ou da incolumidade física do titular ou de terceiro | emergência, risco à integridade física | cobre vida e integridade física, não patrimônio |
| VIII | tutela da saúde, exclusivamente, em procedimento realizado por profissionais de saúde, serviços de saúde ou autoridade sanitária | atendimento de saúde por quem presta o serviço | o fornecedor de software que trata em nome da clínica é operador e segue a base dela (art. 39) |
| IX | legítimo interesse do controlador ou de terceiro, salvo quando prevalecerem direitos e liberdades fundamentais do titular que exijam a proteção dos dados | finalidade legítima a partir de situação concreta, com só o estritamente necessário (art. 10) | ver `legitimo-interesse.md`; não existe para dado sensível |
| X | proteção do crédito, inclusive quanto à legislação pertinente | análise e proteção de crédito | não regulamentado pela ANPD até 09/11/2026 (Agenda 2025-2026, item 19, não iniciada) |

## 3. Como achar a base de uma finalidade

Não há hierarquia nem preferência entre as bases: o Guia de cookies da ANPD (v1.0, outubro de 2022, seção Hipóteses legais) diz isso expressamente. A ordem das perguntas abaixo é prática, não de preferência.

1. Separe as finalidades. Uma linha por finalidade, não por sistema nem por dado (art. 6º, I). O mesmo dado pode ter duas bases em duas finalidades, como o e-mail usado para entregar o pedido (contrato) e para enviar ofertas (outra base).
2. O dado é sensível (art. 5º, II) ou a finalidade revela dado sensível (art. 11, § 1º)? Então a base vem do art. 11.
3. O dado é de criança ou adolescente? Vale qualquer base dos arts. 7º ou 11, desde que observado e prevalecente o melhor interesse, avaliado no caso concreto (Enunciado CD/ANPD nº 1/2023; LGPD, art. 14). Siga em `lgpd-criancas-e-adolescentes`.
4. Uma norma obriga o controlador a tratar o dado? Base II, com a norma citada.
5. O dado é necessário para o contrato com o próprio titular? Base V.
6. Serve para processo judicial, administrativo ou arbitral? Base VI.
7. Poder público executando política pública, órgão de pesquisa, vida ou incolumidade física, tutela da saúde ou crédito? Bases III, IV, VII, VIII ou X.
8. É interesse do controlador ou de terceiro, ligado a situação concreta? Base IX, com o teste de `legitimo-interesse.md`; se o teste concluir que prevalecem os direitos do titular, a base não serve.
9. Sobrou só a escolha do titular? Consentimento (base I), com todas as regras do art. 8º.

## 4. Dado de acesso público e dado tornado manifestamente público (art. 7º, §§ 3º, 4º e 7º)

- **§ 3º.** Dado de acesso público pode ser tratado, mas considerando a finalidade, a boa-fé e o interesse público que justificaram a sua divulgação. Estar público não libera qualquer uso.
- **§ 4º.** Para dado que o próprio titular tornou manifestamente público, fica dispensada a exigência do consentimento, resguardados os direitos do titular e os princípios da lei.
- **§ 7º.** O tratamento posterior desses dados (§§ 3º e 4º) para nova finalidade é possível se houver propósito legítimo e específico para o novo tratamento e se forem preservados os direitos do titular e os fundamentos e princípios da lei.
- Raspagem de dados (scraping) e agregadores: a ANPD pretende orientar as hipóteses legais e os limites do uso de dados públicos e tornados manifestamente públicos; não regulamentado pela ANPD até 09/11/2026 (Agenda 2025-2026, item 11, em andamento, em elaboração interna). Até lá, vale o texto dos §§ 3º, 4º e 7º.

## 5. Repasse a outro controlador do dado obtido por consentimento (art. 7º, § 5º)

Quem obteve o consentimento e precisa comunicar ou compartilhar os dados com outros controladores obtém do titular consentimento específico para isso, salvo nas hipóteses em que a lei dispensa o consentimento.

## 6. Dispensa do consentimento não dispensa o resto (art. 7º, § 6º)

Usar outra base que não o consentimento não libera os agentes das demais obrigações da lei, em especial os princípios do art. 6º e os direitos do titular. O titular pode se opor ao tratamento feito sem consentimento quando houver descumprimento da lei (art. 18, § 2º).

## 7. Parágrafos revogados

Os §§ 1º e 2º do art. 7º estão revogados. Não os cite.

## 8. Não regulamentado pela ANPD até 09/11/2026

Situação na tabela da Agenda Regulatória 2025-2026 (Res. CD/ANPD nº 23/2024, alterada pela Res. CD/ANPD nº 31/2025), atualizada em 20/10/2026:

| Item | Tema | Situação | Enquanto isso |
|---|---|---|---|
| 11 | agregadores de dados pessoais, inclusive os limites ao uso de dados públicos e tornados manifestamente públicos | em andamento; elaboração interna | art. 7º, §§ 3º, 4º e 7º |
| 18 | hipótese legal: consentimento | em andamento; elaboração interna | arts. 8º e 9º |
| 19 | hipótese legal: proteção ao crédito (art. 7º, X) | não iniciada | o texto do art. 7º, X |
