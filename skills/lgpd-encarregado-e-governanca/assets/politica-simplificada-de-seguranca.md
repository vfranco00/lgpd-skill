> Revisão jurídica: pendente · Gerado pela lgpd-skill em {{data}}

# Política simplificada de segurança da informação: {{empresa}}

Modelo da `lgpd-skill` para o agente de tratamento de pequeno porte (Res. CD/ANPD nº 2/2022, art. 13), montado a partir do guia orientativo da ANPD sobre segurança da informação para agentes de pequeno porte (versão 1.0, outubro de 2021) e da lista de verificação que o acompanha. As medidas essenciais são dever (art. 12); a política é faculdade, e a ANPD considera a existência dela na prestação de contas e na dosimetria (art. 13, § 2º). Ajuste cada regra ao custo, à estrutura, à escala e ao volume das operações (art. 13, § 1º). As medidas em detalhe são da skill `lgpd-medidas-de-seguranca`.

## 1. Objetivo e alcance

- **Objetivo:** proteger os dados pessoais tratados pela empresa de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito.
- **Vale para:** {{sistemas, computadores, celulares, serviços em nuvem, documentos em papel}} e para {{sócios, funcionários, estagiários, prestadores}}.
- **Responsável pela política:** {{nome e função}}. Encarregado ou canal com o titular: ver `.lgpd/encarregado.md`.

## 2. Regras

Cada regra tem um responsável e um jeito de conferir. Apague a que não se aplica e diga por quê.

| # | Regra | Responsável | Como se confere |
|---|---|---|---|
| **Acesso** (guia, itens 34 a 42) | | | |
| 1 | Cada pessoa tem conta própria; é proibido compartilhar conta ou senha | | |
| 2 | Cada pessoa acessa só o que precisa para o trabalho; conta de administrador só para quem precisa dela | | |
| 3 | Senhas fortes, sem reutilização; as senhas padrão de fábrica são trocadas | | |
| 4 | Autenticação em dois fatores nos sistemas, bancos de dados e serviços em nuvem com dados pessoais | | |
| 5 | Contas criadas, revistas e removidas em {{quando; por exemplo, no desligamento}} | | |
| **Dados guardados** (itens 43 a 51) | | | |
| 6 | Coletar e guardar só os dados necessários para a finalidade | | |
| 7 | Dados sensíveis cifrados ou pseudonimizados | | |
| 8 | Nada de dados pessoais em pendrive ou disco externo; se for inevitável, inventariar, cifrar e guardar em local seguro | | |
| 9 | Cópias de segurança completas a cada {{período}}, fora do ambiente principal e sem sincronização em tempo real | | |
| 10 | Mídia formatada e sobrescrita antes do descarte, ou destruída; papel destruído; descarte por terceiro com registro da destruição em contrato | | |
| **Comunicações** (itens 52 a 55) | | | |
| 11 | Conexões cifradas (TLS/HTTPS) e aplicativos com criptografia de ponta a ponta | | |
| 12 | E-mail com antispam, filtros e antivírus; anexo com dado sensível vai cifrado | | |
| 13 | Firewall na rede; firewall de aplicação web nos serviços web | | |
| 14 | Nenhum dado pessoal exposto sem necessidade em página pública | | |
| **Atualizações e antivírus** (itens 56 a 58) | | | |
| 15 | Sistemas e aplicativos atualizados, com as correções de segurança instaladas em até {{prazo}} | | |
| 16 | Antivírus ou antimalware atualizado, com varredura periódica, que o usuário não consegue desligar | | |
| **Celulares e notebooks** (itens 59 a 62) | | | |
| 17 | Autenticação em dois fatores; uso pessoal separado do institucional quando possível; apagamento remoto em perda ou roubo | | |
| **Nuvem e fornecedores** (itens 31 a 33 e 63 a 68) | | | |
| 18 | Contrato com acordo de nível de serviço que cubra a segurança dos dados; o serviço atende a esta política; acesso com dois fatores | | |
| 19 | Contratos com cláusulas de segurança e proteção de dados: regras para fornecedores e parceiros, compartilhamento, relação entre controlador e operador e proibição de tratar fora das instruções (skill `lgpd-operador-e-contratos`) | | |
| **Pessoas** (itens 25 a 30) | | | |
| 20 | Termo de confidencialidade assinado pelos funcionários | | |
| 21 | Treinamento e campanhas a cada {{período}}: controles do dia a dia, golpes por e-mail e vírus, papéis guardados, senha não se compartilha, tela bloqueada ao sair, esta política | | |
| 22 | Quem perceber incidente ou vulnerabilidade avisa {{canal interno}}, e a empresa incentiva esse aviso, de funcionários e de clientes | | |

## 3. Incidentes

Incidente com dados pessoais vai para {{responsável}} na hora. O plano, a avaliação de risco e os prazos de comunicação estão na skill `lgpd-incidentes`.

## 4. Revisão

- A política é revista a cada {{período}} (guia, item 24) e também depois de incidente ou de mudança nos sistemas ou nos fornecedores.
- Última revisão: {{data}}. Aprovada por: {{nome e função}}.
