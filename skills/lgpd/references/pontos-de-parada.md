> Fontes: ver skills/lgpd/references/fontes.md — siglas usadas: [LGPD], [Res15], [Res18].

# Pontos de parada

Nos cinco pontos abaixo a skill prepara o material e para. Só segue naquela linha quando o usuário disser quem revisou (nome ou função) e em que data. A skill nunca marca a revisão sozinha. As etapas independentes continuam enquanto isso.

A decisão é sempre do agente de tratamento, que responde pela conformidade (Res. CD/ANPD nº 18/2024, art. 11). O encarregado presta assistência no registro e na comunicação de incidente, no relatório de impacto e nos contratos (art. 16, I, III e VII), sem responder perante a ANPD pela conformidade do controlador (art. 17).

| # | Ponto | Por que para | Quem revisa | Skill que prepara | Artefato em `.lgpd/` |
|---|---|---|---|---|---|
| 1 | Publicar política de privacidade ou aviso ao titular | as informações ao titular devem ser claras, adequadas e ostensivas (LGPD, art. 9º), e informação enganosa ou abusiva anula o consentimento (art. 9º, § 1º) | advogado e encarregado | `lgpd-transparencia-e-politicas` | `politicas/` |
| 2 | Assinar acordo de operador, como contratante ou como contratado | o acordo fixa as instruções que o operador segue (art. 39), e sair delas leva à responsabilidade solidária pelos danos (art. 42, § 1º, I) | advogado | `lgpd-operador-e-contratos` | `contratos/` |
| 3 | Comunicar incidente à ANPD e aos titulares | a comunicação é do controlador, em 3 dias úteis contados do conhecimento, por ele, de que o incidente afetou dados pessoais (Res. CD/ANPD nº 15/2024, art. 6º, caput e § 1º; art. 9º, caput); a feita à ANPD vai por meio do encarregado ou de representante constituído (art. 6º, § 5º) | encarregado e direção do controlador, com advogado | `lgpd-incidentes` | `incidentes/registro.md` |
| 4 | Aprovar relatório de impacto | é documentação do controlador (LGPD, art. 5º, XVII) que a ANPD pode determinar (art. 38) | encarregado e direção do controlador | `lgpd-relatorio-de-impacto` | `relatorios-de-impacto/` |
| 5 | Definir prazo de retenção | o prazo marca o término do tratamento e o que se conserva, por exemplo, por obrigação legal ou regulatória (arts. 15 e 16) | advogado e a área responsável pelo dado | `lgpd-retencao-e-eliminacao` | `retencao.md` |

## Regras

- **Ponto 3 tem prazo correndo.** Parar não é esperar: entregue o rascunho da comunicação na hora e diga quanto falta do prazo. Para agente de pequeno porte, o prazo é contado em dobro (Res. CD/ANPD nº 15/2024, art. 6º, § 8º, e art. 9º, § 6º).
- **Operador.** Nos pontos 1, 3, 4 e 5, sobre dados de cliente, quem decide é o controlador: a equipe prepara o que ele pedir, avisa o incidente a ele e não publica nem comunica em nome dele (LGPD, art. 39). No ponto 2 a equipe assina como contratada, depois da revisão do advogado dela.
- **Artefato.** A 1ª linha do arquivo diz `> Revisão jurídica: pendente · Gerado pela lgpd-skill em <data>` até o usuário informar a revisão; então passa a `> Revisão jurídica: feita por <nome ou função> em <data> · Gerado pela lgpd-skill em <data>`. O "Gerado pela lgpd-skill" fica, porque é por ele que o protocolo do marcador (SKILL.md, passo 1) reconhece o arquivo como da `lgpd-skill`.
- **Registro.** Cada ponto vira uma linha na seção `Pontos de parada` do STATUS (`.lgpd/STATUS.md`, ou `.lgpd/STATUS-lgpd-skill.md` quando `STATUS.md` está em `alheios`):

  | Ponto | Artefato | Quem revisa | Estado |
  |---|---|---|---|
  | 2. Acordo de operador | `.lgpd/contratos/acordo-<parte>-v<N>.md` | advogado | pendente desde AAAA-MM-DD |

  O estado muda para `revisado por <nome ou função> em <data>` só quando o usuário informar.
