> Fontes: ver skills/lgpd/references/fontes.md — siglas usadas: [LGPD], [Res4], [Res18], [Res2], [Agenda], [GuiaEncarregado].

# Boas práticas e governança (LGPD, arts. 50 e 51)

Paráfrase, não texto oficial. Sem outra indicação, o artigo citado é da LGPD. Situação conferida em 09/11/2026.

## 1. Regras de boas práticas e de governança (art. 50, caput, § 1º e § 3º)

- **Quem:** controladores e operadores, cada um no âmbito das suas competências, sozinhos ou por meio de associações. É faculdade: a lei diz que eles "poderão" formular essas regras (art. 50, caput).
- **O que as regras podem estabelecer** (caput):
  - as condições de organização e o regime de funcionamento;
  - os procedimentos, inclusive para reclamações e petições de titulares;
  - as normas de segurança e os padrões técnicos;
  - as obrigações específicas de cada envolvido no tratamento;
  - as ações educativas;
  - os mecanismos internos de supervisão e de mitigação de riscos;
  - outros aspectos do tratamento.
- **Como dimensionar:** levar em conta, em relação ao tratamento e aos dados, a natureza, o escopo, a finalidade e a probabilidade e a gravidade dos riscos e dos benefícios para o titular (§ 1º).
- **Publicidade:** as regras são publicadas e atualizadas periodicamente, e a ANPD pode reconhecê-las e divulgá-las (§ 3º).

## 2. Programa de governança em privacidade (art. 50, § 2º)

- **Quem:** o controlador, ao aplicar os princípios da segurança e da prevenção (art. 6º, VII e VIII), considerando a estrutura, a escala e o volume das operações, a sensibilidade dos dados e a probabilidade e a gravidade dos danos. Também é faculdade ("poderá").
- **Requisitos mínimos** (§ 2º, I). A coluna "Evidência" é sugestão desta skill, com os artefatos das outras skills `lgpd-*`. Arquivo listado em `alheios` se lê pelo nome com o sufixo `-lgpd-skill`, que é o da `lgpd-skill`.

| Alínea | O programa, no mínimo | Evidência sugerida |
|---|---|---|
| a | demonstra o compromisso do controlador com processos e políticas internas que assegurem o cumprimento abrangente das normas e das boas práticas de proteção de dados | política aprovada pela direção; ato de designação do encarregado |
| b | vale para todo o conjunto de dados pessoais sob controle dele, seja qual for o modo da coleta | `.lgpd/mapa-de-dados.md` e registro das operações |
| c | é adaptado à estrutura, à escala e ao volume das operações e à sensibilidade dos dados | `.lgpd/papeis.md` (porte e alto risco) |
| d | estabelece políticas e salvaguardas a partir de avaliação sistemática de impactos e riscos à privacidade | `.lgpd/medidas-de-seguranca.md`; `.lgpd/relatorios-de-impacto/` |
| e | busca relação de confiança com o titular, com atuação transparente e mecanismos de participação dele | `.lgpd/politicas/`; canal do encarregado; `.lgpd/direitos/` |
| f | integra a estrutura geral de governança e estabelece e aplica mecanismos de supervisão internos e externos | quem aprova, quem revisa, auditoria interna ou externa |
| g | conta com planos de resposta a incidentes e remediação | `.lgpd/incidentes/registro.md` e o plano da skill `lgpd-incidentes` |
| h | é atualizado constantemente, com base em monitoramento contínuo e avaliações periódicas | calendário de revisão e histórico do programa |

- **Demonstrar a efetividade** do programa quando apropriado, em especial a pedido da ANPD ou de outra entidade que promova, de forma independente, o cumprimento de boas práticas ou códigos de conduta (§ 2º, II).
- **Operador:** o § 2º fala do controlador. Nos dados que trata como operadora, a equipe pode formular as regras de boas práticas do caput. Na dosimetria, "política de boas práticas e de governança" abrange tanto as regras do art. 50, caput e § 1º, quanto o programa do § 2º (Res. CD/ANPD nº 4/2023, art. 2º, VI).
- **Encarregado:** presta assistência na elaboração das regras e do programa (Res. CD/ANPD nº 18/2024, art. 16, IX). O Guia de atuação do encarregado sugere que ele coordene o programa, com documento de monitoramento e indicadores para auditoria (p. 32).

## 3. Por que vale a pena

- **Critério da sanção:** a adoção de política de boas práticas e governança é um dos critérios de aplicação das sanções (art. 52, § 1º, IX; Res. CD/ANPD nº 4/2023, art. 7º, X), ao lado da adoção reiterada e demonstrada de mecanismos e procedimentos internos para minimizar o dano (art. 52, § 1º, VIII).
- **Atenuante de 20%** na multa simples para quem implementa política de boas práticas e de governança, ou mecanismos internos que minimizem os danos, até a decisão de primeira instância do processo sancionador (Res. CD/ANPD nº 4/2023, art. 13, II).
- **Contam como boa prática:** o encarregado indicado pelo operador (Res. CD/ANPD nº 18/2024, art. 6º) e pelo agente de pequeno porte dispensado (Res. CD/ANPD nº 2/2022, art. 11, § 2º); e a política simplificada de segurança do pequeno porte é considerada para a prestação de contas e para a dosimetria (Res. CD/ANPD nº 2/2022, art. 13, § 2º).
- **Prestação de contas:** o agente precisa demonstrar a adoção de medidas eficazes e a eficácia delas (art. 6º, X). O programa organiza essa prova.

## 4. O que não está regulamentado

- Regras de boas práticas e de governança, inclusive o reconhecimento e a divulgação delas pela ANPD (§ 3º): não regulamentado pela ANPD até 09/11/2026 (Agenda 2025-2026, item 17, em andamento, em elaboração interna [Agenda]). Vale o texto do art. 50. Não prometa selo nem certificação da ANPD.

## 5. Art. 51

A ANPD estimulará a adoção de padrões técnicos que facilitem o controle dos titulares sobre os próprios dados (art. 51). O dever é da ANPD; o artigo não cria obrigação para o agente.
