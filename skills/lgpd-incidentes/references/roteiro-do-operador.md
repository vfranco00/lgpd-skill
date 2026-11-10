> Fontes: ver skills/lgpd/references/fontes.md — siglas usadas: [LGPD], [Res15]

# Roteiro do operador em incidente de segurança

Paráfrase, não texto oficial. Os artigos citados da Res. CD/ANPD nº 15/2024 são do regulamento anexo à resolução. Situação conferida em 09/11/2026.

## 1. Quando este roteiro vale

- Operador é quem trata dados pessoais em nome do controlador (LGPD, art. 5º, VII). O papel se fixa por atividade: a mesma empresa pode ser operadora dos dados que trata para um cliente e controladora dos próprios dados (ex.: o cadastro dos seus funcionários ou dos seus clientes diretos).
- Se os dados afetados são de uma atividade em que a equipe é **controladora**, este roteiro não vale: siga o `SKILL.md` desde o passo 2.
- Se o incidente atingiu dados de **vários clientes**, cada cliente é o controlador dos seus dados e recebe o seu próprio aviso.

## 2. O que a norma diz

- **Quem comunica a ANPD e os titulares é o controlador** (LGPD, art. 48, caput; Res. CD/ANPD nº 15/2024, arts. 4º, 6º, caput, e 9º, caput).
- **O operador segue as instruções do controlador**, que verifica se elas e as normas estão sendo cumpridas (LGPD, art. 39).
- **O operador também responde pela segurança.** Ele adota medidas de segurança técnicas e administrativas (LGPD, art. 46), garante a segurança da informação mesmo depois do fim do tratamento (LGPD, art. 47) e responde pelo dano que causar ao deixar de adotar essas medidas (LGPD, art. 44, parágrafo único). Responde solidariamente com o controlador quando descumpre a legislação de proteção de dados ou não segue as instruções lícitas dele, caso em que se equipara ao controlador, salvo as exclusões da LGPD, art. 43 (LGPD, art. 42, § 1º, I).
- **A comunicação à ANPD identifica o operador**, quando houver (Res. CD/ANPD nº 15/2024, art. 6º, § 2º, X).
- **O prazo do controlador corre do conhecimento dele** de que o incidente afetou dados pessoais: 3 dias úteis, ou 6 dias úteis se o controlador for agente de pequeno porte (Res. CD/ANPD nº 15/2024, art. 6º, §§ 1º e 8º; art. 9º, caput e § 6º). O porte que conta é o do controlador.
- **O prazo do aviso do operador ao controlador** não está na LGPD nem na Res. CD/ANPD nº 15/2024: não regulamentado pela ANPD até 09/11/2026. Vale o que o contrato (acordo de operador) fixar; a cláusula é tratada na skill `lgpd-operador-e-contratos`.

## 3. Passos

1. **Confirmar o papel e os controladores atingidos.** Pergunte: de quais clientes são os dados afetados e o que o contrato de cada um diz sobre incidente (canal, prazo, conteúdo do aviso).
2. **Avisar cada controlador pelo canal e no prazo do contrato.** Se o contrato não fixar prazo, avise assim que souber que dados pessoais do controlador foram afetados, sem esperar o fim da investigação: o controlador precisa de tempo para avaliar o risco dentro do prazo dele. O que ainda não se sabe vai no aviso como "em apuração" e segue depois.
3. **Mandar no aviso o que o controlador precisa para as 12 informações** (Res. CD/ANPD nº 15/2024, art. 6º, § 2º): descrição do incidente e causa principal, se conhecida; data em que ocorreu e data em que o operador soube; natureza e categoria dos dados; número de titulares afetados e total de titulares nas atividades atingidas, separando crianças, adolescentes e idosos quando houver; medidas de segurança antes e depois; riscos que o operador enxerga; medidas tomadas e a tomar; identificação do operador e um contato técnico.
4. **Conter dentro das instruções.** Tome as medidas urgentes que o contrato ou as instruções do controlador permitem (LGPD, art. 39) e preserve registros e evidências: o controlador pode precisar deles para o relatório de tratamento do incidente que a ANPD pode pedir (Res. CD/ANPD nº 15/2024, art. 8º; art. 3º, XIX).
5. **Não comunicar a ANPD nem os titulares por conta própria.** O dever é do controlador. Se ele quiser que o operador envie em nome dele, o envio exige instrumento com poderes de representação perante a ANPD (Res. CD/ANPD nº 15/2024, art. 6º, § 5º); peça também a instrução por escrito.
6. **Apoiar o controlador até o fim.** Responder às perguntas dele, fornecer o que faltar para o complemento em 20 dias úteis (40 dias úteis se ele for de pequeno porte) (Res. CD/ANPD nº 15/2024, art. 6º, §§ 3º e 8º), para os pedidos da ANPD (Res. CD/ANPD nº 15/2024, art. 8º) e para o aviso aos titulares (Res. CD/ANPD nº 15/2024, art. 9º), e aplicar as medidas de mitigação que ele instruir.
7. **Suboperador.** Se o incidente ocorreu num fornecedor contratado pelo operador, o aviso sobe pela cadeia: fornecedor → operador → controlador, nos prazos dos contratos. A cadeia não está regulada pela ANPD: não regulamentado pela ANPD até 09/11/2026.

## 4. O que gravar em `.lgpd/`

- Grave pelo protocolo do marcador do `SKILL.md` (Roteiro, "Como gravar em `.lgpd/`"). Com o marcador, acrescente ao fim do registro (`.lgpd/incidentes/registro.md`, ou `.lgpd/incidentes/registro-lgpd-skill.md` se o registro for alheio) uma entrada com o papel "operador", a data em que o operador soube, a data e o canal de cada aviso ao controlador, o que foi enviado e as instruções recebidas; nunca regrave o arquivo nem mude entrada anterior. Sem o marcador, não grave nada: o aviso ao controlador não espera; mostre a entrada na resposta e diga para rodar a skill `lgpd` passado o momento crítico.
- O registro do art. 10 da Res. CD/ANPD nº 15/2024 é dever do controlador; a entrada do operador é boa prática e serve de prova de que ele avisou e quando.
