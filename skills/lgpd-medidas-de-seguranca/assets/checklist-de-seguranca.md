> Revisão jurídica: pendente · Gerado pela lgpd-skill em {{data}}

# Medidas de segurança: {{sistema ou atividade}}

Modelo da `lgpd-skill` para `.lgpd/medidas-de-seguranca.md`. Uma linha por medida, com o estado, a prova e quem responde. As medidas são escolhas para cumprir e demonstrar o dever da LGPD, arts. 46, 47 e 49 (art. 6º, X); a lei não traz lista de técnicas, e os padrões técnicos mínimos do art. 46, § 1º, estão sem regulamento: não regulamentado pela ANPD até 09/11/2026 (Agenda 2025-2026, item 5). "Guia" é o guia de segurança da ANPD para agentes de pequeno porte (versão 1.0, outubro de 2021), citado pelo número do item; é orientação, não norma. "Prática da skill" marca o que vai além da lei e do guia. Não apague linha: marque `não se aplica` e diga por quê.

## Escopo

- Sistema ou atividade: {{}}
- Papel da equipe: {{controlador / operador de {{controlador}}}}
- Agente de pequeno porte (Res. CD/ANPD nº 2/2022, arts. 2º e 3º): {{sim / não / a confirmar}}
- Dados e titulares: {{ex.: CPF e endereço de clientes}}; dado sensível (LGPD, art. 5º, II): {{sim / não}}; dado de criança, de adolescente ou de idoso: {{sim / não}}
- Quantos titulares, quem acessa e onde roda: {{}}
- Fase: {{desenho / desenvolvimento / produção / encerramento}}

## Risco

- Se os dados vazarem, forem alterados ou ficarem indisponíveis, o que acontece ao titular: {{}}
- Nível adotado e por quê (LGPD, art. 46, § 1º; art. 44): {{baixo / médio / alto}}
- Alto risco pela Res. CD/ANPD nº 2/2022, art. 4º: {{sim / não / a confirmar com `lgpd-aplicacao-e-papeis`}}

## Medidas

Estado: `feito`, `parcial`, `a fazer` ou `não se aplica` (com o motivo).

| # | Medida | Base | Estado | Prova | Responsável |
|---|---|---|---|---|---|
| **Administrativas** | | | | | |
| 1 | Política de segurança da informação, revista periodicamente; no pequeno porte, a política simplificada da skill `lgpd-encarregado-e-governanca` | guia, 21 a 24; Res. CD/ANPD nº 2/2022, art. 13 | | | |
| 2 | Treinamento e campanhas para a equipe, em especial para quem lida com os dados | guia, 26 a 28 | | | |
| 3 | Canal para funcionários e clientes avisarem incidente ou vulnerabilidade | guia, 29 | | | |
| 4 | Termo de confidencialidade de funcionários e prestadores, que vale depois do desligamento | guia, 30; LGPD, art. 47 | | | |
| 5 | Cláusulas de segurança nos contratos com fornecedores (skill `lgpd-operador-e-contratos`) | guia, 31 a 33 | | | |
| **Acesso** | | | | | |
| 6 | Conta própria para cada pessoa e cada serviço; nenhuma conta ou senha compartilhada | guia, 38 | | | |
| 7 | Menor privilégio; administrador só para quem precisa; contas revistas e removidas no desligamento | guia, 35 e 39; Decreto nº 8.771/2016, art. 13, I | | | |
| 8 | Senha forte, sem reutilização; senhas padrão trocadas | guia, 36, 37 e 40 | | | |
| 9 | Autenticação multifator nos sistemas, bancos e serviços em nuvem com dados pessoais | guia, 41, 42 e 68; no acesso aos registros de conexão e de acesso a aplicações, Decreto nº 8.771/2016, art. 13, II | | | |
| 10 | API: autenticação de quem chama, autorização por registro (cada conta só alcança o que lhe cabe) e limite de requisições | LGPD, art. 46; guia, 34 | | | |
| 11 | Registro de auditoria de leituras e alterações, sem o dado do titular em claro | guia, 34; LGPD, art. 6º, X; nos acessos aos registros de conexão e de acesso a aplicações, Decreto nº 8.771/2016, art. 13, III | | | |
| **Dados guardados** | | | | | |
| 12 | Só os dados que a finalidade pede; nada guardado porque um dia pode servir | guia, 44 e 45; LGPD, art. 6º, III | | | |
| 13 | Cifra em repouso e, para o identificador mais exposto (como o CPF), cifra por campo, tokenização ou pseudônimo com chave | guia, 46; LGPD, art. 48, § 3º; na gestão dos registros de conexão e de acesso a aplicações, Decreto nº 8.771/2016, art. 13, IV | | | |
| 14 | Chaves fora do dado, com acesso próprio, inventário e rotação anotada | LGPD, art. 46; prática da skill | | | |
| 15 | CPF e endereço mascarados na resposta e na tela quando o dado inteiro não é preciso | LGPD, art. 6º, III | | | |
| 16 | Cópias de segurança completas e regulares, separadas do ambiente principal, sem sincronização em tempo real; restauração testada | guia, 49; teste de restauração: prática da skill | | | |
| 17 | Nenhum dado pessoal em mídia externa; se inevitável, inventariada e cifrada | guia, 48 | | | |
| 18 | Descarte seguro de mídia e papel; registro da destruição quando um terceiro descarta | guia, 50 e 51 | | | |
| 19 | Ambientes de teste e desenvolvimento sem dados reais, ou com dados pseudonimizados | LGPD, art. 6º, III; art. 46 | | | |
| **Comunicações** | | | | | |
| 20 | TLS em toda conexão, inclusive entre serviços e com o banco; e-mail ou anexo cifrado para dados como salários ou prontuários | guia, 53 | | | |
| 21 | Firewall; firewall de aplicação web nos serviços expostos; e-mail com antivírus, antispam e filtros | guia, 54 | | | |
| 22 | Nenhum dado pessoal exposto sem necessidade em página, repositório ou documentação pública | guia, 55 | | | |
| **Vulnerabilidades** | | | | | |
| 23 | Sistemas, aplicativos e dependências atualizados, com as correções de segurança instaladas em até {{prazo}} | guia, 56 | | | |
| 24 | Antivírus ou antimalware ativo e atualizado nos computadores, com varredura periódica | guia, 57 e 58 | | | |
| **Celulares e notebooks** | | | | | |
| 25 | Mesmo controle de acesso, com autenticação multifator; uso pessoal separado; apagamento remoto | guia, 59 a 62 | | | |
| **Nuvem e fornecedores** | | | | | |
| 26 | Acordo de nível de serviço que trate da segurança dos dados; o serviço atende aos requisitos desta lista | guia, 66 e 67 | | | |
| 27 | Fornecedor fora do Brasil avaliado pela skill `lgpd-transferencia-internacional` | LGPD, art. 33 | | | |
| **Desde a concepção e depois do término** | | | | | |
| 28 | Cada funcionalidade nova que toca dado pessoal passa por esta lista antes de ir ao ar | LGPD, art. 46, § 2º; art. 49 | | | |
| 29 | No fim do tratamento, do contrato ou do vínculo: contas removidas, chaves trocadas, cópias e registros com prazo de guarda (skill `lgpd-retencao-e-eliminacao`) | LGPD, art. 47 | | | |
| 30 | Plano de resposta a incidente pronto (skill `lgpd-incidentes`) | LGPD, art. 50, § 2º, I, g; art. 48 | | | |

## Pendências

| # | O que falta | Prazo | Responsável |
|---|---|---|---|
| {{#}} | | | |

## Histórico

| Data | O que mudou | Próximo passo |
|---|---|---|
| {{data}} | Checklist inicial | {{}} |
