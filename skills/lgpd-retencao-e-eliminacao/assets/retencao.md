> Revisão jurídica: pendente · Gerado pela lgpd-skill em {{data}}

# Tabela de retenção e eliminação

Mantida pela skill `lgpd-retencao-e-eliminacao` (base normativa de 09/11/2026). Uma linha por categoria de dado e finalidade, com o código da atividade no mapa de dados (`.lgpd/mapa-de-dados.md`). O tratamento termina numa das hipóteses do art. 15 da LGPD; depois, o dado é eliminado, salvo uma das 4 hipóteses de conservação do art. 16, com a norma e o artigo. Prazo sem norma lida fica "a confirmar", com quem confirma. Definir prazo de retenção é ponto de parada: os prazos valem como política só depois da revisão jurídica. Quando a equipe é operadora, o prazo é o que o controlador instruiu (LGPD, art. 39), com a fonte.

## Prazos

| Código | Categoria de dado e finalidade | Onde fica (sistema, tabela, arquivos, logs, backups, operadores) | Papel | Fim do tratamento (LGPD, art. 15) | Conservação depois do fim (LGPD, art. 16) | Norma e artigo do prazo | Prazo e marco inicial | No fim | Revisado por, em |
|---|---|---|---|---|---|---|---|---|---|
| {{RET-01}} | {{categoria; finalidade; ATV-nn}} | {{onde estão o dado e as cópias}} | {{controlador}} ou {{operador: prazo instruído pelo controlador em data}} | {{evento e inciso, ex.: fim do contrato, inciso I}} | {{não há: elimina no término}} ou {{inciso e motivo}} | {{ex.: Lei nº 13.787/2018, art. 6º}} ou {{a confirmar com quem}} | {{prazo; a partir de quê}} | {{elimina}}, {{anonimiza}} ou {{devolve}} | {{nome ou função, data}} |

## Riscos de prescrição (não são dever de guarda)

| Categoria | Prescrição e norma | Guardar para defesa? Quais dados e até quando | Base (LGPD, art. 7º, VI, ou art. 11, II, "d") | Revisado por, em |
|---|---|---|---|---|
| {{RET-nn}} | {{ex.: CDC, art. 27: 5 anos do conhecimento do dano e da autoria}} | {{não}} ou {{sim: só ...; até ...}} | {{...}} | {{nome ou função, data}} |

## Eliminação

| Onde | Como elimina (hard delete, anonimização, bloqueio, destruição de chave) | Rotina e frequência | Backups: retenção e reaplicação na restauração | Operadores instruídos e destinatários avisados (LGPD, arts. 39 e 18, § 6º) | Prova da eliminação |
|---|---|---|---|---|---|
| {{banco, arquivos, índices, logs, backups, fornecedor}} | {{...}} | {{...}} | {{prazo de expiração; lista de eliminações a reaplicar}} | {{quem, quando, confirmação}} | {{registro: categoria, quantidade, data, rotina}} |

## Pedidos de exclusão

As fichas dos pedidos ficam em `.lgpd/direitos/registro-de-pedidos.md` (skill `lgpd-direitos-do-titular`). Aqui entra só o que um pedido mudar nesta tabela.

## Pendências

- {{o que ficou "a confirmar", com quem e até quando}}
- Não regulamentado pela ANPD até 09/11/2026: tempo de guarda dos registros (LGPD, art. 40); padrões de eliminação e de anonimização.

## Histórico

| Data | O que mudou | Quem |
|---|---|---|
| {{data}} | {{criação ou alteração}} | {{nome}} |
