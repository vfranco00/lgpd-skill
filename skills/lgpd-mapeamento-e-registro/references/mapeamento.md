> Fontes: ver skills/lgpd/references/fontes.md — siglas usadas: [LGPD], [Res2], [ModeloRegistro], [GuiaAgentes]

# Mapeamento: o inventário por atividade

Paráfrase, não texto oficial. Situação conferida em 09/11/2026. "Guia" é o Guia orientativo para definições dos agentes de tratamento de dados pessoais e do encarregado, da ANPD, versão 2.0 (abril de 2022), citado pelo número do item; é orientação, não norma. O mapa é a matéria-prima do registro das operações (`registro-art-37.md`) e das outras skills `lgpd-*`; a lei não fixa o formato dele.

## 1. A unidade: atividade e papel

- **Uma linha por atividade**, isto é, por processo com uma finalidade (ex.: folha de pagamento, recrutamento, cobrança dos clientes), e não por sistema ou por tabela do banco. O modelo da ANPD também se organiza por processo interno [ModeloRegistro].
- **Uma linha por papel.** A mesma organização pode ser controladora numa operação e operadora em outra (Guia, item 8). Num SaaS, os dados que o cliente cadastra costumam ser tratados como operador; os dados dos próprios clientes para cobrança, da equipe e do site, como controlador. O papel de cada atividade vem de `lgpd-aplicacao-e-papeis` (`.lgpd/papeis.md`).
- **Operador: uma linha por controlador.** É a organização da skill; o art. 37 não diz como organizar. Clientes com as mesmas instruções podem dividir a linha: o mesmo contrato padrão, com a mesma finalidade, os mesmos dados, a mesma base legal informada, o mesmo prazo e os mesmos suboperadores autorizados. A linha do grupo leva um rótulo e diz onde está a lista dos clientes (os contratos), sem os nomes deles no mapa.
- **Só tipos de dado**, nunca valores: CPF, e-mail, atestado, e não o número, o endereço ou o atestado de alguém. É a instrução do modelo da ANPD [ModeloRegistro] e segue a necessidade (LGPD, art. 6º, III).
- **Sem abrir dado real.** Deduza os campos pelo código, pela configuração e pelos esquemas, ou pergunte à equipe. Não abra o conteúdo de dumps, cópias de segurança, logs de produção nem anexos de usuários: abrir é acesso, que já é tratamento (LGPD, art. 5º, X), e pode expor dado sensível.

## 2. Onde procurar

No projeto, pelo código, pela configuração e pelos esquemas: banco e migrações; formulários e APIs; integrações, webhooks e importações; configuração de logs, monitoramento e ferramentas de suporte; analytics, cookies e pixels; e-mail, CRM e planilhas (pergunte que colunas elas têm). Cópias de segurança, ambientes de teste com cópia de dados reais e anexos enviados por usuários entram no mapa pela existência e pelo tipo de dado, sem abrir o conteúdo.

Fora do código: pergunte às áreas o que coletam, para quê e com quem compartilham, e confira os contratos com clientes e fornecedores.

## 3. As colunas do mapa

| Coluna | O que anotar | Por que (norma) | Quando a equipe é operadora | Quem completa |
|---|---|---|---|---|
| Atividade | o processo e o sistema onde ocorre | o registro se organiza por operação (LGPD, art. 37) | uma linha por controlador, ou por grupo com as mesmas instruções e a mesma base legal informada | esta skill |
| Papel e controlador | controlador ou operador; quem é o controlador | LGPD, art. 5º, VI e VII; Guia, item 8 | o cliente é o controlador | `lgpd-aplicacao-e-papeis` |
| Titulares | as categorias; marque crianças, adolescentes e idosos | categorias do modelo da ANPD [ModeloRegistro]; critério específico de alto risco (Res. CD/ANPD nº 2/2022, art. 4º, II, d) | os titulares do controlador | `lgpd-criancas-e-adolescentes`, se houver criança ou adolescente |
| Dados | os tipos, marcando o dado sensível | necessidade (LGPD, art. 6º, III); dado sensível (art. 5º, II) | a natureza dos dados é decisão do controlador (Guia, item 38) | esta skill |
| Finalidade | o propósito específico e explícito | finalidade (LGPD, art. 6º, I) | a fixada pelo controlador (art. 39; Guia, itens 37 e 53) | esta skill |
| Base legal | o inciso do art. 7º ou do art. 11 | LGPD, arts. 7º e 11; o art. 37 destaca o legítimo interesse | a que o controlador informou, com a fonte | `lgpd-bases-legais` (`.lgpd/bases-legais.md`) |
| Origem | de onde vem o dado: o próprio titular, o controlador, outro agente, fonte pública | a declaração completa ao titular indica a origem (LGPD, art. 19, II) | em geral, o controlador ou o titular pelo sistema | esta skill |
| Destino | quem recebe o dado fora da organização, sem contar os operadores, e para quê | uso compartilhado (LGPD, art. 9º, V; art. 18, VII); aviso de correção e eliminação a quem recebeu (art. 18, § 6º) | só o que o controlador instruiu | esta skill |
| Retenção | o prazo e o que acontece no fim | término e eliminação (LGPD, arts. 15 e 16) | o prazo de eliminação é decisão do controlador (Guia, item 38) | `lgpd-retencao-e-eliminacao`; definir prazo é ponto de parada |
| Operadores | quem trata em nome da equipe e o que faz; se a equipe é operadora, os suboperadores | LGPD, art. 39; Guia, itens 65 a 67 | com a autorização do controlador (Guia, item 67) | `lgpd-operador-e-contratos` |
| Transferência internacional | o país e a hipótese, ou "não há" | LGPD, art. 5º, XV, e art. 33 | entra a nuvem ou o suboperador fora do Brasil | `lgpd-transferencia-internacional` |

O que não tiver resposta fica "a confirmar", com a pergunta e para quem ela vai. Quando a equipe é operadora, a pergunta sobre finalidade, base legal, dados ou prazo vai para o controlador.

## 4. Do mapa ao registro e às outras skills

- Cada linha recebe um código (ex.: `ATV-01`). A entrada do registro das operações usa o mesmo código, para que mapa e registro se achem.
- Sinais que o mapa levanta:
  - dado sensível ou de criança, adolescente ou idoso: avaliar o alto risco em `lgpd-aplicacao-e-papeis`, porque ele tira o regime de pequeno porte e, com ele, o registro simplificado (Res. CD/ANPD nº 2/2022, arts. 3º, I, e 4º);
  - legítimo interesse: o teste de balanceamento em `lgpd-bases-legais`;
  - fornecedor ou suboperador fora do Brasil: `lgpd-transferencia-internacional`;
  - fornecedor sem acordo, ou suboperador sem autorização do controlador: `lgpd-operador-e-contratos`;
  - prazo de guarda desconhecido: `lgpd-retencao-e-eliminacao`.
