> Fontes: ver skills/lgpd/references/fontes.md — siglas usadas: [GuiaSeguranca], [Res2], [LGPD].

# Guia de segurança da ANPD para agentes de pequeno porte (2021)

Paráfrase do guia orientativo sobre segurança da informação para agentes de tratamento de pequeno porte, versão 1.0, outubro de 2021 [GuiaSeguranca], e da lista de verificação que o acompanha como anexo (item 5), publicada na mesma página oficial. Não é texto oficial: os números entre parênteses são os itens do guia. Conferido no PDF oficial em 09/11/2026.

## 1. O que o guia é

- **Orientação, não norma.** O guia não tem efeito normativo vinculante; é um guia de boas práticas que pode ser atualizado (item 72). As medidas são boas práticas, a completar com outras que se mostrarem necessárias (item 20).
- **Para quem.** Agentes de pequeno porte que muitas vezes não têm especialista em segurança, diante dos arts. 46 a 49 da LGPD (item 3). O art. 48, sobre incidentes, fica fora do guia: a nota 3 diz que ele será tratado num guia específico, e o item 15, que a comunicação será tratada em normatização específica.
- **Por que conta.** Para o agente de pequeno porte enquadrado, atender às recomendações e às boas práticas da ANPD, inclusive as dos guias, é considerado observância do art. 52, § 1º, VIII, da LGPD (Res. CD/ANPD nº 2/2022, art. 12, parágrafo único). Leitura desta skill: para os demais agentes, o guia é ponto de partida recomendado, não exigido; o risco do tratamento pode pedir mais (LGPD, art. 46, § 1º; art. 44).
- **O que ele não é.** Não é o regulamento dos padrões técnicos mínimos do art. 46, § 1º, da LGPD, não regulamentado pela ANPD até 09/11/2026 (`seguranca-art-46-a-49.md`, seção 2).
- **Gestão de riscos.** Não é obrigatória, mas o guia indica fazê-la periodicamente (item 8).

## 2. Política de segurança da informação (itens 21 a 24)

- Diretrizes e regras para planejar, implementar e controlar a segurança da informação (item 21). Não é obrigatória; a ANPD a incentiva porque mostra boa-fé e diligência com os dados (item 22).
- Sugestão do guia: quando possível, uma política, mesmo simplificada, revista periodicamente, com regras sobre senhas, cópias de segurança, quem acessa o quê, quando os dados podem ser compartilhados, atualização de software, e-mail e antivírus (item 24).
- Agente de pequeno porte: a política simplificada (Res. CD/ANPD nº 2/2022, art. 13) tem modelo próprio, `assets/politica-simplificada-de-seguranca.md`, da skill `lgpd-encarregado-e-governanca`. Esta skill não escreve outra.

## 3. Pessoas e contratos (itens 25 a 33)

- **Conscientização.** Treinamentos e campanhas sobre as obrigações de cada um no tratamento (item 26), para toda a equipe e em especial para quem lida com os dados (item 27). Temas sugeridos: os controles de segurança do dia a dia, vírus e golpes por e-mail ou por links, papéis com dados guardados na gaveta, login e senha que não se compartilham, computador bloqueado ao sair e a política de segurança (item 28).
- **Avisos.** Um ambiente que estimule funcionários e clientes a informar incidentes e vulnerabilidades (item 29).
- **Confidencialidade.** Termo de confidencialidade assinado pelos funcionários, contra abuso de privilégio (item 30).
- **Contratos.** Gestão de contratos e aquisições com a divisão de funções e responsabilidades (item 31). Com fornecedor de TI, cláusulas de segurança da informação (item 32), por exemplo: regras para fornecedores e parceiros, regras de compartilhamento, a relação entre controlador e operador e a proibição de tratar fora das orientações do controlador (item 33). O acordo é da skill `lgpd-operador-e-contratos`.

## 4. Controle de acesso (itens 34 a 42)

- Três partes: a autenticação diz quem acessa, a autorização diz o que essa pessoa pode fazer, e a auditoria registra o que ela fez (item 34). Registro de auditoria sem o dado do titular: `criptografia-e-registros.md`, seção 3.
- Controle de acesso para todos os usuários, com permissões na medida da necessidade e com criação, aprovação, revisão e exclusão de contas (item 35).
- Senhas: o sistema recusa senha fraca (item 36); as senhas padrão de fábrica são trocadas (item 37); ninguém compartilha conta nem senha (item 38); senha não se reutiliza (item 40 e lista de verificação).
- Menor privilégio: cada um com o mínimo de acesso para o trabalho; administrador só quem precisa e pode responder pela função (item 39).
- Autenticação multifator, de preferência, para sistemas e bases com dados pessoais; exemplos do guia: código por SMS ou e-mail, aplicativo autenticador ou token de segurança (itens 41 e 42).

## 5. Dados guardados (itens 43 a 51)

- **Necessidade.** Coletar e tratar só o que a finalidade pede (item 44; LGPD, art. 6º, III). Guardar dado sem uso concreto, só porque um dia pode servir, não é prática adequada (item 45).
- **Dado sensível.** Técnicas que dificultem identificar o titular, como a pseudonimização, com a criptografia como exemplo (item 46). A lista de verificação estende a sugestão aos dados pessoais em geral: pseudonimização, como a criptografia, para cifrá-los.
- **Estações de trabalho.** A equipe não desliga nem ignora as configurações de segurança (item 47).
- **Mídia externa.** Evitar copiar dados pessoais para pendrive ou disco externo; se for inevitável, inventariar os dispositivos, cifrar os dados e guardá-los em local seguro (item 48).
- **Cópias de segurança.** Completas e regulares, em local seguro e separado do armazenamento principal, sem sincronização em tempo real, para não perder tudo num ataque de ransomware (item 49); a lista de verificação fala em cópias fora de linha e periódicas.
- **Descarte.** Formatar a mídia antes de descartar e, quando não der (CD, DVD), destruí-la, o mesmo para papel e mídia portátil (item 50); a lista de verificação pede formatar e sobrescrever. Se um terceiro faz o descarte, o contrato prevê o registro da destruição (item 51).

## 6. Comunicações e vulnerabilidades (itens 52 a 58)

- **Em trânsito.** Conexão cifrada (TLS/HTTPS) ou aplicativo com criptografia de ponta a ponta, inclusive no e-mail; dados como salários ou prontuários vão em e-mail ou arquivo cifrado (item 53).
- **Rede.** Firewall que monitore e bloqueie ameaças e, para serviços web, firewall de aplicação web (WAF); e-mail com antivírus integrado, antispam e filtros (item 54).
- **Exposição.** Retirar dado pessoal disponível sem necessidade em rede pública, como o site da empresa; para dado sensível, um canal de acesso restrito ao cliente (item 55).
- **Atualizações.** Acompanhar as novas versões e instalar as correções de segurança de todos os sistemas e aplicativos (item 56).
- **Antivírus.** Antivírus ou antimalware nos computadores (item 57), ativo, atualizado, com varredura periódica e sem que o usuário possa desligá-lo (item 58).

## 7. Dispositivos móveis e nuvem (itens 59 a 68)

- **Celulares e notebooks** de uso institucional: o mesmo controle de acesso dos outros equipamentos, inclusive autenticação multifator, e guarda em local seguro (item 59); separar o uso pessoal do institucional quando possível (item 60); sem segurança equivalente, aparelho pessoal fora do trabalho (item 61); apagamento remoto em perda ou roubo, para aparelhos da empresa e pessoais (item 62).
- **Nuvem.** Contrato com acordo de nível de serviço que trate da segurança dos dados guardados (item 66); conferir se o serviço atende aos requisitos de segurança definidos pelo agente (item 67); requisitos de acesso a cada serviço e autenticação multifator nos serviços com dados pessoais (item 68). Fornecedor fora do Brasil: skill `lgpd-transferencia-internacional`.
