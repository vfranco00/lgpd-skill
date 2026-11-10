> Fontes: ver skills/lgpd/references/fontes.md — siglas usadas: [LGPD], [Res2], [Res15], [Res18], [L15211], [D12880], [GuiaAgentes], [ModeloRegistro].

# Roteiro: a ordem das skills por situação

A ordem nasce de quatro respostas: o papel em cada atividade (seção 1), a situação do projeto (seções 2 e 3), o porte e o alto risco (seção 4). Depois entram os ajustes de tema (seção 5). A ordem é sugestão: etapas independentes podem andar juntas, e incidente em curso ou pedido de titular com prazo correndo passa à frente.

## 1. Papel por atividade

- Controlador é a pessoa, natural ou jurídica, a quem competem as decisões sobre o tratamento; operador é quem trata em nome do controlador (LGPD, art. 5º, VI e VII). Os dois são os agentes de tratamento (art. 5º, IX).
- O papel é da atividade, não da empresa. Uma software house costuma ser operadora dos dados que os clientes dela tratam no sistema e controladora dos dados próprios: equipe, contatos e cobrança dos clientes, site e marketing.
- Para separar, pergunte quem decide (art. 5º, VI): para que os dados servem, quais entram, por quanto tempo ficam e com quem são compartilhados. Quem decide é o controlador; quem executa a decisão de outro é o operador.
- A equipe que usa o dado do cliente para fim próprio (métrica de produto, treino de modelo, marketing) decide sobre esse tratamento e é controladora dele. O operador que não segue as instruções lícitas do controlador, ou descumpre a lei, responde solidariamente pelos danos e se equipara ao controlador (art. 42, § 1º, I).
- Controlador conjunto, suboperador, cadeia de fornecedores e os critérios do Guia de Agentes de Tratamento da ANPD [GuiaAgentes]: `lgpd-aplicacao-e-papeis`.
- Resultado: `controlador`, `operador` ou `ambos`. Com `ambos`, as duas trilhas correm, cada uma para as suas atividades, num só STATUS.

Exemplo, um SaaS B2B mantido por uma software house:

| Atividade | Papel da equipe | Controlador |
|---|---|---|
| Dados que cada cliente cadastra no sistema (os clientes dos clientes) | operador | o cliente |
| Contas, contratos e cobrança dos clientes | controlador | a equipe |
| Equipe, candidatos, site e marketing | controlador | a equipe |
| Uso dos dados dos clientes para fim próprio | controlador dessa finalidade: precisa de base legal própria (LGPD, art. 7º) e não pode contrariar as instruções do cliente (art. 42, § 1º, I) | a equipe |

## 2. Trilha do controlador

### Projeto novo

As medidas de segurança devem ser observadas desde a concepção do produto ou do serviço (LGPD, art. 46, § 2º). Esta trilha leva também a transparência e o atendimento ao titular para o desenho, antes do lançamento.

1. `lgpd-aplicacao-e-papeis`, se papel, porte ou alto risco estiverem em dúvida.
2. `lgpd-mapeamento-e-registro`: o que será coletado, de quem e para quê.
3. `lgpd-bases-legais`: a base de cada finalidade.
4. `lgpd-medidas-de-seguranca`: as medidas no desenho.
5. `lgpd-direitos-do-titular`: as funções de atendimento no produto.
6. `lgpd-retencao-e-eliminacao`: o prazo de cada dado.
7. `lgpd-transparencia-e-politicas`: o aviso pronto antes do lançamento.
8. `lgpd-operador-e-contratos` e `lgpd-transferencia-internacional`: os fornecedores que tratarão os dados.
9. `lgpd-incidentes`: o plano de resposta antes do primeiro incidente.
10. `lgpd-encarregado-e-governanca`: encarregado (LGPD, art. 41) e governança.
11. `lgpd-relatorio-de-impacto`, se houver alto risco (seção 4).

### Projeto em produção

1. `lgpd-mapeamento-e-registro`: o inventário do que já existe; o registro das operações é dever do controlador e do operador (LGPD, art. 37).
2. `lgpd-bases-legais`: a base de cada atividade em curso.
3. `lgpd-encarregado-e-governanca`: encarregado e canal com o titular (art. 41).
4. `lgpd-incidentes`: o prazo de comunicação conta do conhecimento, pelo controlador, de que o incidente afetou dados pessoais (Res. CD/ANPD nº 15/2024, art. 6º, § 1º), então o plano vem antes do próximo incidente.
5. `lgpd-medidas-de-seguranca`.
6. `lgpd-direitos-do-titular`.
7. `lgpd-transparencia-e-politicas`: a política publicada contra a prática encontrada no mapeamento.
8. `lgpd-retencao-e-eliminacao`: o dado guardado depois do fim da finalidade (arts. 15 e 16).
9. `lgpd-operador-e-contratos` e `lgpd-transferencia-internacional`.
10. `lgpd-relatorio-de-impacto`, se houver alto risco.

## 3. Trilha do operador

O operador trata segundo as instruções do controlador, que verifica se elas e as normas são cumpridas (LGPD, art. 39). As decisões sobre o dado são do controlador (art. 5º, VI): base legal, aviso e resposta ao titular, comunicação de incidente, prazo de guarda. A trilha do operador entrega o que é dele e prepara o que o controlador pedir.

O que cada skill entrega ao operador:

- `lgpd-aplicacao-e-papeis`: o papel por cliente e por atividade; os suboperadores.
- `lgpd-operador-e-contratos`: o acordo com cada controlador (instruções, finalidade, segurança, suboperadores, aviso de incidente, apoio nos pedidos de titular, devolução e eliminação ao fim) e a diligência dos próprios fornecedores.
- `lgpd-criancas-e-adolescentes`, se houver dado de criança ou de adolescente, ou produto direcionado a eles ou de acesso provável por eles: a base legal do dado é do controlador. Os deveres de fornecedor do ECA Digital (por exemplo, Lei nº 15.211/2025, arts. 6º, 14, 16, caput, e 17) valem para quem fornece o produto, seja qual for o papel na LGPD; o mapeamento de riscos e o relatório do art. 16, parágrafo único, da mesma lei são do controlador (LGPD, art. 5º, VI). A equipe que fornece o produto pode ser fornecedora; quem diz se é, é essa skill.
- `lgpd-medidas-de-seguranca`: dever de todo agente de tratamento e de quem intervém no tratamento, mesmo depois do término (arts. 46 e 47). As medidas devem ser observadas desde a concepção do produto ou do serviço (art. 46, § 2º), também pelo operador que constrói o sistema.
- `lgpd-mapeamento-e-registro`: o operador também mantém registro das operações que realiza (art. 37).
- `lgpd-incidentes`: o roteiro do operador. Quem comunica a ANPD e os titulares, em 3 dias úteis, é o controlador (Res. CD/ANPD nº 15/2024, arts. 6º e 9º); o operador o avisa a tempo.
- `lgpd-direitos-do-titular`: o titular obtém do controlador o que o art. 18 garante. O pedido pode chegar a qualquer agente de tratamento (art. 18, § 3º); o que chega ao operador segue para o controlador, e o operador executa o que ele instruir (art. 18, caput; art. 39).
- `lgpd-transferencia-internacional`: nuvem ou suboperador fora do Brasil (arts. 33 a 36).
- `lgpd-retencao-e-eliminacao`: os prazos que o controlador definir; devolução e eliminação ao fim do contrato.
- `lgpd-encarregado-e-governanca`: para o operador, indicar encarregado é facultativo e conta como boa prática (Res. CD/ANPD nº 18/2024, art. 6º). Se a equipe também é controladora (dados próprios), vale o dever do controlador (LGPD, art. 41), salvo a dispensa do pequeno porte, com canal para o titular (Res. CD/ANPD nº 2/2022, art. 11).
- `lgpd-ia-e-decisoes-automatizadas`, se houver IA, treino de modelo ou decisão automatizada. Usar dado do cliente para fim próprio, como treinar modelo, faz da equipe controladora dessa finalidade (seção 1).
- `lgpd-transparencia-e-politicas`: só o aviso dos dados de que a equipe é controladora; as informações ao titular dos dados do cliente identificam o controlador e são dele (LGPD, art. 9º, III e IV).

### Projeto novo

1. `lgpd-aplicacao-e-papeis`.
2. `lgpd-operador-e-contratos`: o acordo, antes de tratar o primeiro dado.
3. `lgpd-criancas-e-adolescentes`, se houver dado de criança ou de adolescente, ou produto direcionado a eles ou de acesso provável por eles.
4. `lgpd-medidas-de-seguranca`: as medidas no desenho (art. 46, § 2º).
5. `lgpd-mapeamento-e-registro`.
6. `lgpd-direitos-do-titular`: as funções que o controlador instruir para atender os pedidos.
7. `lgpd-incidentes`: o roteiro do operador, antes da entrada em produção.
8. `lgpd-transferencia-internacional`.
9. `lgpd-retencao-e-eliminacao`.
10. `lgpd-encarregado-e-governanca`.
11. `lgpd-ia-e-decisoes-automatizadas`, se houver IA, treino de modelo ou decisão automatizada.
12. `lgpd-transparencia-e-politicas`.

### Projeto em produção

1. `lgpd-aplicacao-e-papeis`.
2. `lgpd-operador-e-contratos`: os acordos em vigor, cliente por cliente.
3. `lgpd-criancas-e-adolescentes`, se houver dado de criança ou de adolescente, ou produto direcionado a eles ou de acesso provável por eles.
4. `lgpd-mapeamento-e-registro`: o registro das operações que já realiza.
5. `lgpd-incidentes`: o roteiro do operador, antes do próximo incidente.
6. `lgpd-medidas-de-seguranca`.
7. `lgpd-direitos-do-titular`: o repasse dos pedidos ao controlador.
8. `lgpd-transferencia-internacional`.
9. `lgpd-retencao-e-eliminacao`: o dado guardado além do prazo do controlador ou depois do fim do contrato.
10. `lgpd-encarregado-e-governanca`.
11. `lgpd-ia-e-decisoes-automatizadas`, se houver IA, treino de modelo ou decisão automatizada.
12. `lgpd-transparencia-e-politicas`.

## 4. Porte e alto risco

### Pequeno porte (Res. CD/ANPD nº 2/2022)

- Quem é: microempresas, empresas de pequeno porte, startups, pessoas jurídicas de direito privado, inclusive sem fins lucrativos, pessoas naturais e entes privados despersonalizados que tratam dados como controlador ou como operador (art. 2º, I).
- Quem fica fora do regime diferenciado: quem faz tratamento de alto risco, salvo para o art. 8º; quem passa do limite de receita bruta referido no art. 3º, II; e quem pertence a grupo econômico cuja receita global passa desse limite (art. 3º, I a III). A ANPD pode pedir a comprovação do enquadramento, a entregar em até 15 dias (art. 5º).
- O que muda no roteiro:
  - registro simplificado das operações (art. 9º), pelo modelo da ANPD de 14/06/2023 [ModeloRegistro]: `lgpd-mapeamento-e-registro`;
  - encarregado dispensado, com canal de comunicação com o titular (art. 11 e § 1º); indicá-lo mesmo assim conta como boa prática (art. 11, § 2º): `lgpd-encarregado-e-governanca`;
  - política simplificada de segurança da informação (art. 13): `lgpd-encarregado-e-governanca` e `lgpd-medidas-de-seguranca`;
  - prazo em dobro (art. 14), com `lgpd-incidentes` e `lgpd-direitos-do-titular`:
    - para os pedidos de titular, nos termos de regulamento (art. 14, I), que não existe: não regulamentado pela ANPD até 09/11/2026 (Agenda, item 1);
    - para a comunicação de incidente (art. 14, II; Res. CD/ANPD nº 15/2024, art. 6º, § 8º, e art. 9º, § 6º);
    - para a declaração completa do art. 19, II, da LGPD (art. 14, III);
  - declaração simplificada em até 15 dias (art. 15): `lgpd-direitos-do-titular`.
- Nada disso dispensa princípios, bases legais e direitos do titular (art. 6º), e a ANPD pode exigir as obrigações dispensadas (art. 16).

### Alto risco (Res. CD/ANPD nº 2/2022, art. 4º)

- O art. 4º define alto risco para fins desse regulamento, o de pequeno porte (art. 4º, caput). Para os demais agentes, a skill usa os mesmos critérios como referência.
- Ao menos 1 critério geral (larga escala; ou tratamento que possa afetar significativamente interesses e direitos fundamentais dos titulares) e 1 específico (tecnologia emergente ou inovadora; vigilância ou controle de zona acessível ao público; decisão tomada unicamente com base em tratamento automatizado, inclusive de perfil; dado sensível ou de criança, adolescente ou idoso) (art. 4º, I e II).
- Larga escala: número significativo de titulares, considerados o volume de dados, a duração, a frequência e a extensão geográfica (art. 4º, § 1º; para incidentes, a mesma fórmula está na Res. CD/ANPD nº 15/2024, art. 5º, § 2º). As duas normas não fixam número. O item 7 da Agenda (alto risco) foi encerrado sem guia final (`agenda-e-prioridades.md`).
- O que muda no roteiro:
  - o regime de pequeno porte deixa de valer (art. 3º, I);
  - `lgpd-relatorio-de-impacto` vem logo depois das bases legais. A LGPD não manda fazer o relatório por conta própria: a ANPD pode determiná-lo ao controlador (LGPD, art. 38) e pedi-lo no legítimo interesse (art. 10, § 3º); no alto risco, a skill recomenda tê-lo pronto. Exceção do ECA Digital: no tratamento de dados de crianças e adolescentes, o controlador deve elaborar relatório de impacto, de monitoramento e de avaliação da proteção de dados pessoais, a ser compartilhado quando a autoridade pedir (Lei nº 15.211/2025, art. 16, parágrafo único, II); e, para fins desse inciso e do art. 31, caput, VI, da Lei nº 15.211/2025, o fornecedor de produto ou serviço direcionado a crianças e adolescentes ou de acesso provável por eles deve fazer avaliação de impacto à segurança e à saúde de crianças e dar publicidade à versão resumida do relatório (Decreto nº 12.880/2026, art. 47, caput e § 1º);
  - `lgpd-medidas-de-seguranca` vem antes das etapas de documentação.

## 5. Ajustes de tema

| Sinal no diagnóstico | Ajuste |
|---|---|
| Incidente em curso | `lgpd-incidentes` antes de tudo |
| Pedido de titular pendente | `lgpd-direitos-do-titular` antes de tudo; o operador repassa ao controlador |
| Dado sensível, inclusive de saúde (LGPD, art. 5º, II; art. 11) | trilha do controlador: `lgpd-bases-legais` logo após o mapeamento (na do operador, a base legal é do controlador); é critério específico de alto risco na Res. CD/ANPD nº 2/2022, art. 4º, II, d, que pede ainda um critério geral (seção 4); Tema 1 do Mapa |
| Dado de criança ou de adolescente, ou produto direcionado a eles ou de acesso provável por eles (LGPD, art. 14; Lei nº 15.211/2025, art. 1º) | trilha do controlador: `lgpd-criancas-e-adolescentes` logo após `lgpd-bases-legais`; trilha do operador: logo após `lgpd-operador-e-contratos`; Tema 2 do Mapa |
| IA, treino de modelo ou decisão automatizada (LGPD, art. 20) | `lgpd-ia-e-decisoes-automatizadas` antes de `lgpd-transparencia-e-politicas`; Tema 4 do Mapa |
| Dado ou fornecedor fora do Brasil (LGPD, art. 33) | `lgpd-transferencia-internacional` junto com `lgpd-operador-e-contratos` |
| Atendimento a órgão público (LGPD, arts. 23 a 32) | `lgpd-aplicacao-e-papeis`, só como referência; Tema 3 do Mapa |

Os temas do Mapa estão em `agenda-e-prioridades.md`, seção 5.
