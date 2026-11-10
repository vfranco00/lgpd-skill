> Fontes: ver skills/lgpd/references/fontes.md — siglas usadas: [LGPD], [GuiaSeguranca], [Res15], [L12965], [D8771], [D12975], [Agenda], [Res23], [Res31].

# Criptografia, chaves, registros de auditoria e pseudonimização

Paráfrase das regras, não texto oficial, com as práticas desta skill marcadas como tal. Sem outra indicação, o artigo é da LGPD (Lei nº 13.709/2018). Situação conferida em 09/11/2026. A LGPD não manda usar nenhuma técnica: exige medidas aptas (art. 46) e que o agente demonstre que elas funcionam (art. 6º, X). O que vem marcado como "prática desta skill" é um jeito de cumprir e de provar esse dever, a ajustar ao risco (`seguranca-art-46-a-49.md`, seção 5).

## 1. Criptografia

- **O que a lei diz.** Nenhuma técnica nomeada (art. 46). A cifra conta no incidente: a comunicação indica as medidas técnicas e de segurança usadas (art. 48, § 1º, III), e a prova de que os dados afetados ficaram ininteligíveis para terceiros não autorizados pesa no juízo de gravidade (art. 48, § 3º; skill `lgpd-incidentes`).
- **O que o guia da ANPD sugere** [GuiaSeguranca]: conexões cifradas (TLS/HTTPS) ou criptografia de ponta a ponta (item 53); pseudonimização do dado sensível, com a criptografia como exemplo (item 46); dados cifrados na mídia externa (item 48).
- **Prática desta skill, para API e banco de dados:**
  - em trânsito: TLS em toda conexão, inclusive entre serviços internos e com o banco, sem versões nem cifras obsoletas;
  - em repouso: disco e banco cifrados e, para o identificador que mais expõe o titular (como o CPF), cifra por campo, tokenização ou pseudônimo com chave (seção 4), para que o acesso ao banco ou a uma cópia não entregue o dado em claro;
  - cópias de segurança e exportações cifradas, com chave própria;
  - prova: o que está cifrado, com o quê e onde está a chave, no bloco "Dados guardados" do checklist.

## 2. Chaves

- **O que a lei diz.** Nada específico sobre chaves. Na pseudonimização, o que permite ligar o dado de volta ao titular fica guardado à parte pelo controlador, num ambiente controlado e seguro (art. 13, § 4º): a chave cumpre esse papel. O dever continua depois do término (art. 47), então a chave de uma cópia antiga também se protege.
- **Prática desta skill:**
  - chave fora do dado: num serviço de gerência de chaves (KMS), num módulo de segurança (HSM) ou num cofre de segredos; nunca no código, no repositório, num log ou no mesmo banco que ela protege;
  - acesso à chave pelo menor privilégio, separado do acesso ao dado, com registro de cada uso;
  - rotação periódica, num prazo que a equipe define e anota, e imediata quando houver suspeita de vazamento ou quando sair alguém que tinha acesso. A chave antiga deixa de cifrar, mas continua a decifrar enquanto houver cópia, exportação ou registro cifrado com ela dentro do prazo de guarda; destruí-la é eliminação (skill `lgpd-retencao-e-eliminacao`). Trocar a chave do HMAC (seção 4) pede recalcular o índice;
  - inventário: cada chave, o que protege, quem acessa e a data da última rotação;
  - cópia de segurança da chave, com o mesmo cuidado: chave perdida é dado perdido, e perda é uma das situações do art. 46.
- Eliminar dados pela destruição da chave é tema de eliminação e de prazo de guarda: skill `lgpd-retencao-e-eliminacao`.

## 3. Registros de auditoria sem o dado do titular

- **Por quê.** A auditoria é a parte do controle de acesso que registra o que cada usuário fez (guia, item 34) [GuiaSeguranca]. Ela ajuda a demonstrar as medidas (art. 6º, X) e a reconstituir um incidente (`lgpd-incidentes`). A LGPD não dá formato nem prazo para esse registro.
- **O que registrar (prática desta skill):** quem agiu (identificador interno da conta ou do serviço), o que fez, sobre qual registro (pelo identificador interno, não pelo conteúdo), quando, de onde e com que resultado. A leitura de CPF e endereço também se registra, não só a alteração.
- **O que não registrar:** o dado do titular (CPF, endereço, telefone, conteúdo do pedido ou da resposta), senha, token, chave, cabeçalho de autorização e corpo inteiro da requisição. Para localizar o titular, use o identificador interno ou um pseudônimo com chave (seção 4). Base: necessidade (art. 6º, III) e segurança (art. 46); o registro com o dado em claro é mais uma cópia a proteger.
- **O registro também é dado pessoal:** de quem agiu (conta, endereço IP) e, pelo identificador interno, também do titular. Por isso, acesso restrito, proteção contra alteração e prazo de guarda definido (skill `lgpd-retencao-e-eliminacao`; o prazo é ponto de parada).
- **Quatro registros que não se confundem:**

| Registro | O que é e qual regra | Skill |
|---|---|---|
| Registro de auditoria | quem fez o quê no sistema; medida de segurança, sem formato ou prazo na LGPD | esta |
| Registro das operações de tratamento | o controlador e o operador mantêm o registro das operações que fazem (art. 37) | `lgpd-mapeamento-e-registro` |
| Registro de incidentes | todo incidente, comunicado ou não, com conteúdo mínimo, guardado por pelo menos cinco anos (Res. CD/ANPD nº 15/2024, art. 10) | `lgpd-incidentes` |
| Registros de acesso a aplicações de internet | data, hora e endereço IP do uso da aplicação (Lei nº 12.965/2014, art. 5º, VIII), com a porta lógica de origem sempre que necessária para identificar sem dúvida o terminal de origem (Decreto nº 8.771/2016, art. 15-A, incluído pelo Decreto nº 12.975/2026); o provedor de aplicações pessoa jurídica, organizado, profissional e com fins econômicos os guarda por 6 meses, sob sigilo, em ambiente controlado e de segurança (Lei nº 12.965/2014, art. 15) | `lgpd-retencao-e-eliminacao` |

- **Provedor de conexão ou de aplicações de internet.** Na guarda, no armazenamento e no tratamento de dados pessoais e de comunicações privadas, o Decreto nº 8.771/2016, art. 13, dá diretrizes de segurança: controle estrito de acesso, com responsabilidades e privilégios definidos (I); autenticação de quem acessa os registros, por exemplo dupla, que individualize o responsável (II); inventário detalhado dos acessos aos registros de conexão e de acesso a aplicações, com momento, duração, quem acessou e o arquivo acessado (III); e, na gestão dos registros, técnicas que garantam a inviolabilidade dos dados, como encriptação (IV). O § 2º pede reter o mínimo de dados e de registros.

## 4. Pseudonimização

- **Definição.** O dado deixa de poder ser ligado, direta ou indiretamente, a uma pessoa, salvo com uma informação adicional que o controlador guarda à parte, num ambiente controlado e seguro (art. 13, § 4º). A lei dá a definição para os efeitos do art. 13 (estudos em saúde pública), e é a única definição de pseudonimização na LGPD.
- **Continua dado pessoal.** Quem guarda a informação adicional pode refazer a associação, então o dado pseudonimizado segue com todas as obrigações; pseudonimizar reduz o risco, não tira o dado da lei (art. 12, caput; leitura completa na skill `lgpd-bases-legais`, `references/anonimizacao-art-12-e-13.md`).
- **Prática desta skill:**
  - para buscar pelo CPF sem guardá-lo em claro no índice: código de autenticação com chave secreta (HMAC), com a chave guardada como na seção 2; hash simples de CPF, sem chave, se reverte por força bruta, porque o número tem poucas combinações;
  - tokenização: o sistema guarda um token, e a tabela que liga token e CPF fica em ambiente separado, com acesso próprio;
  - mascarar o CPF e o endereço na resposta da API e na tela quando quem consome não precisa do dado inteiro (art. 6º, III);
  - ambiente de teste sem dados reais, ou com dados pseudonimizados.
- **Sem regulamento.** Padrões e técnicas de anonimização e de pseudonimização: não regulamentado pela ANPD até 09/11/2026 (Agenda 2025-2026, item 9 [Agenda]; Res. CD/ANPD nº 23/2024, alterada pela Res. CD/ANPD nº 31/2025).
