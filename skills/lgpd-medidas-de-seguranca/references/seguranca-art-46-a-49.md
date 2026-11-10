> Fontes: ver skills/lgpd/references/fontes.md — siglas usadas: [LGPD], [Agenda], [Res23], [Res31], [Regulamentacoes], [Res2], [GuiaSeguranca].

# Segurança na LGPD: arts. 46 a 49

Paráfrase, não texto oficial. Sem outra indicação, o artigo é da LGPD (Lei nº 13.709/2018). Situação conferida em 09/11/2026. O art. 48 (comunicação de incidente) é da skill `lgpd-incidentes`; aqui entra só o que ele diz sobre as medidas.

## 1. O dever (art. 46, caput)

- Os agentes de tratamento, isto é, o controlador e o operador (art. 5º, IX), adotam medidas técnicas e administrativas de segurança capazes de proteger os dados pessoais contra acesso não autorizado e contra situações, acidentais ou ilícitas, que levem à destruição, à perda, à alteração, à comunicação ou a qualquer forma de tratamento inadequado ou ilícito.
- Os princípios dizem o mesmo por outro ângulo: segurança, com a mesma proteção, mas com "difusão" no fim da lista (art. 6º, VII); prevenção, medidas para evitar danos (art. 6º, VIII); responsabilização e prestação de contas, o agente demonstra que adotou medidas eficazes e que elas funcionam (art. 6º, X).
- A lei não nomeia técnica, ferramenta, protocolo, versão nem certificação. "Aptas" se mede pelo risco do tratamento (seção 5). Criptografia, autenticação multifator e registro de auditoria são meios de cumprir e de demonstrar o dever, não exigências literais da lei.

## 2. Padrões técnicos mínimos (art. 46, § 1º): não regulamentado

- A ANPD pode dispor sobre padrões técnicos mínimos que tornem o caput aplicável, levando em conta a natureza das informações, as particularidades do tratamento e o que a tecnologia oferece hoje, com atenção especial ao dado sensível, e os princípios do art. 6º.
- Situação: não regulamentado pela ANPD até 09/11/2026. O tema é o item 5 da Agenda Regulatória 2025-2026 (Res. CD/ANPD nº 23/2024, alterada pela Res. CD/ANPD nº 31/2025), na fase 1. Na tabela da ANPD atualizada em 20/10/2026, o item está "em andamento", em elaboração interna, sem participação social realizada [Agenda]. A lista oficial de regulamentações não traz resolução sobre o tema [Regulamentacoes].
- Enquanto isso, vale o dever geral do caput. O guia de segurança da ANPD para agentes de pequeno porte [GuiaSeguranca] é orientação: ele mesmo diz que não tem efeito normativo vinculante (item 72). Ver `guia-anpd-pequeno-porte.md`.
- Se a data de hoje for posterior a 09/11/2026, confira a lista oficial e a página da Agenda antes de repetir que o tema continua sem regulamento (skill `lgpd`, `references/agenda-e-prioridades.md`, seção 1).

## 3. Desde a concepção e depois do término (art. 46, § 2º, e art. 47)

- **Desde a concepção (art. 46, § 2º).** As medidas valem do momento em que o produto ou serviço é concebido até a execução. Leitura desta skill: cada funcionalidade nova que toca dado pessoal passa pelo checklist antes de ir ao ar, inclusive quando quem constrói o sistema é o operador.
- **Quem intervém e depois do término (art. 47).** Os agentes de tratamento e qualquer outra pessoa que atue em alguma fase do tratamento ficam obrigados a garantir a segurança da informação sobre os dados pessoais, também depois que o tratamento termina. Na prática:
  - cópias de segurança, exportações, registros e ambientes de teste que ainda guardam os dados;
  - contas, acessos e chaves de quem saiu da equipe ou do fornecedor;
  - o fornecedor no fim do contrato: devolução ou eliminação, com `lgpd-operador-e-contratos` e `lgpd-retencao-e-eliminacao`;
  - o sigilo de funcionários e prestadores, por termo de confidencialidade: o guia o recomenda para os funcionários (item 30), e o prestador também intervém no tratamento (art. 47).

## 4. Sistemas estruturados (art. 49)

- Os sistemas usados no tratamento se estruturam para atender aos requisitos de segurança, às boas práticas, à governança, aos princípios gerais da LGPD e às demais normas regulamentares.
- Leitura desta skill: a segurança é requisito do sistema (arquitetura, configuração padrão, controle de acesso, registros, cópias), conferido no desenho e a cada mudança, não um documento à parte. As regras de boas práticas e o programa de governança (art. 50) são da skill `lgpd-encarregado-e-governanca`.

## 5. Medir o risco

O que a lei manda considerar:

- a natureza das informações, as particularidades do tratamento e o que a tecnologia oferece hoje, com atenção especial ao dado sensível (art. 46, § 1º);
- o tratamento é irregular quando não dá a segurança que o titular pode esperar, consideradas as circunstâncias relevantes: o modo como é feito, o resultado e os riscos que razoavelmente se esperam dele e as técnicas disponíveis na época (art. 44, I a III);
- nas regras de boas práticas: o que se trata, em que extensão e para quê, e quão prováveis e graves são os riscos e os benefícios para o titular (art. 50, § 1º).

Leitura desta skill:

- CPF e endereço são dados pessoais (art. 5º, I) e não estão na lista de dados sensíveis (art. 5º, II). Juntos, servem para fraude e golpe, e isso pesa na gravidade.
- Elevam o nível: dado sensível, dado de criança, de adolescente ou de idoso, muitos titulares, API exposta na internet, muitas pessoas ou sistemas com acesso, dados fora do Brasil.
- Alto risco no sentido do regulamento de pequeno porte pede um critério geral e um específico, cumulativos (Res. CD/ANPD nº 2/2022, art. 4º); fraude financeira e roubo de identidade são exemplos do critério geral (art. 4º, § 2º), e dado sensível ou de criança, de adolescente ou de idoso é critério específico (art. 4º, II, d). Quem decide é a skill `lgpd-aplicacao-e-papeis`.

## 6. Onde as medidas pesam

| Regra | O que diz | Skill |
|---|---|---|
| Responsabilidade | pelos danos da violação da segurança responde o controlador ou o operador que deu causa a eles por não ter adotado as medidas do art. 46 (art. 44, parágrafo único) | `lgpd-operador-e-contratos` |
| Incidente | a comunicação indica as medidas técnicas e de segurança usadas (art. 48, § 1º, III); a prova de que os dados ficaram ininteligíveis para terceiros não autorizados pesa no juízo de gravidade (art. 48, § 3º) | `lgpd-incidentes` |
| Sanção | são critérios das sanções "a adoção reiterada e demonstrada de mecanismos e procedimentos internos capazes de minimizar o dano, voltados ao tratamento seguro e adequado de dados" (art. 52, § 1º, VIII) e "a adoção de política de boas práticas e governança" (IX) | `lgpd-encarregado-e-governanca` |
| Pequeno porte | medidas administrativas e técnicas essenciais, apoiadas em requisitos mínimos de segurança da informação e ajustadas ao risco e à realidade do agente, são dever; atender às recomendações e aos guias da ANPD é considerado observância do art. 52, § 1º, VIII; a política simplificada é faculdade, considerada para o art. 6º, X, e para o art. 52, § 1º, VIII e IX (Res. CD/ANPD nº 2/2022, arts. 12 e 13) | `lgpd-encarregado-e-governanca` |

## 7. Controlador e operador

- Os dois adotam as medidas (art. 46) e respondem pelo dano se não as adotarem (art. 44, parágrafo único).
- O operador trata segundo as instruções do controlador, que verifica se elas e as normas são cumpridas (art. 39). As medidas que o controlador exige e a forma de verificá-las entram no acordo de operador (`lgpd-operador-e-contratos`).
