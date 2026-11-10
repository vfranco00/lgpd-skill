> Fontes: ver skills/lgpd/references/fontes.md — siglas usadas: [LGPD], [L12965], [D8771], [D12975], [L13787], [GuiaSeguranca], [Regulamentacoes], [Agenda]

# Eliminação técnica

Como cumprir nos sistemas a eliminação do art. 16 da LGPD. A lei define o resultado, não a técnica: eliminação é a exclusão de dado ou de conjunto de dados armazenados em banco de dados, qualquer que seja o procedimento empregado (LGPD, art. 5º, XIV). Padrões técnicos de eliminação: não regulamentado pela ANPD até 09/11/2026 (lista oficial de regulamentações). Artigo sem norma ao lado é da LGPD.

## 1. Três saídas no fim do tratamento

| Saída | O que é | Quando usar |
|---|---|---|
| Eliminação | exclusão do dado armazenado em banco de dados (art. 5º, XIV) | a regra no término (art. 16, caput) |
| Anonimização | o dado perde, por meios técnicos razoáveis e disponíveis, a possibilidade de associação, direta ou indireta, a uma pessoa (art. 5º, XI); deixa de ser dado pessoal se a anonimização não tiver sido revertida com meios próprios nem puder ser revertida com esforço razoável (art. 12) | uso exclusivo do controlador, sem acesso de terceiro (art. 16, IV), como estatística de uso |
| Bloqueio | suspensão temporária de qualquer operação de tratamento, com a guarda do dado (art. 5º, XIII) | enquanto corre um dever de guarda: o dado fica, mas sai do uso comum |

Pseudonimizar (trocar o identificador por um código, com a informação que o desfaz guardada à parte) não elimina nem anonimiza: o dado continua pessoal (art. 13, § 4º; art. 12). Hash de identificador sem chave secreta se reverte por força bruta quando o número tem poucas combinações, como o CPF. Padrões de anonimização: não regulamentado pela ANPD até 09/11/2026 (Agenda 2025-2026, item 9).

## 2. Soft delete e hard delete

- **Soft delete não é eliminação.** Marcar o registro como apagado (por exemplo, uma coluna `deleted_at`) mantém o dado no banco, e armazenar ainda é tratamento (art. 5º, X).
- **Use soft delete só como etapa curta e com prazo**, escrito na tabela de retenção: a janela para desfazer um erro, ou o bloqueio enquanto corre um dever de guarda. Uma rotina programada conclui a eliminação ou a anonimização quando a janela acaba.
- **Hard delete alcança todas as cópias que o sistema controla:** tabelas relacionadas, arquivos em armazenamento de objetos, índices de busca, caches, réplicas, bases de análise, exportações, filas e anexos de e-mail gerados pelo sistema.
- **Separe o que tem dever de guarda.** Quando parte dos dados de um titular tem dever de guarda (o prontuário) e parte não (as preferências de comunicação), elimine a segunda e bloqueie a primeira, com acesso restrito a quem cumpre o dever (art. 6º, III; art. 46).

## 3. Backups

- A lei manda eliminar no âmbito e nos limites técnicos das atividades (art. 16, caput). Como apagar um registro dentro de cada cópia de segurança costuma não ser viável, a prática que esta skill recomenda é:
  - prazo de retenção curto e fixo para os backups, escrito na tabela de retenção;
  - o dado eliminado no sistema sai de vez quando expira a última cópia que o contém;
  - até lá, a cópia fica cifrada, com acesso restrito, e não é usada para outra finalidade (art. 46);
  - ao restaurar uma cópia, reaplique as eliminações feitas depois da data dela, a partir de uma lista com o mínimo para achar o que eliminar.
- Se esse caminho basta no caso concreto é ponto de revisão jurídica. Na resposta ao pedido de exclusão, diga ao titular em quanto tempo as cópias de segurança expiram.
- Para o agente de pequeno porte, a ANPD orienta cópias de segurança regulares e completas, guardadas em local seguro e separado dos dispositivos principais e sem sincronização online em tempo real, por causa do ransomware (guia de segurança da ANPD para pequeno porte, v1.0, outubro de 2021, item 49).

## 4. Destruição da chave (crypto-shredding)

- O dado é cifrado com uma chave por titular, ou por conjunto (por cliente, por período). Destruir a chave torna ilegíveis todas as cópias cifradas com ela, inclusive as dos backups.
- Requisitos: as chaves ficam fora dos backups dos dados, num serviço de gestão de chaves; a destruição da chave é registrada; não sobra cópia da chave em exportações, variáveis de ambiente ou logs.
- Se o dado cifrado sem chave conta como eliminado é ponto de revisão jurídica: a definição legal não exige um procedimento específico (art. 5º, XIV), mas também não trata do caso; não regulamentado pela ANPD até 09/11/2026.
- Num incidente, dados tornados ininteligíveis para quem não podia acessá-los pesam no juízo de gravidade (art. 48, § 3º).

## 5. Logs

- **Registros de acesso do Marco Civil.** 6 meses, se a empresa for provedor obrigado (Lei nº 12.965/2014, art. 15), com a porta lógica de origem quando necessária (Decreto nº 8.771/2016, art. 15-A, incluído pelo Decreto nº 12.975/2026). Depois, excluir (Decreto nº 8.771/2016, art. 13, § 2º), salvo pedido cautelar ou ordem judicial de guarda (Lei nº 12.965/2014, art. 15, §§ 1º e 2º). Na guarda, controle de acesso, autenticação, inventário dos acessos e técnicas como encriptação (Decreto nº 8.771/2016, art. 13, I a IV). Ver `tabela-de-guarda-legal.md`, seção 1.
- **Logs de aplicação e de auditoria.** Sem prazo nas normas desta skill: o controlador fixa o prazo pela finalidade, com o motivo, e leva à revisão jurídica.
- **Em todo log:** não grave dado pessoal desnecessário (corpo de requisição, documento, dado de saúde, senha, token) (art. 6º, III); mascare identificadores; programe rotação e expiração no prazo da tabela; o próprio log é eliminado no fim do prazo.

## 6. Fornecedores, papel e mídias

- **Operadores** (nuvem, e-mail, atendimento, gestão de clientes) eliminam conforme as instruções do controlador (art. 39): mande a instrução, peça a confirmação e confira no contrato o prazo de retenção dos backups deles (`lgpd-operador-e-contratos`).
- **Destinatários de uso compartilhado** são avisados de imediato da eliminação, para que a repitam, salvo impossibilidade comprovada ou esforço desproporcional (art. 18, § 6º).
- **Mídias e papel.** Formatar e sobrescrever a mídia antes do descarte; quando não der (CD, DVD), destruição física, que vale também para papel e mídia portátil; descarte feito por terceiro, com contrato que registre a destruição (guia de segurança da ANPD para pequeno porte, itens 50 e 51, e o checklist que o acompanha).
- **Prontuário.** A eliminação resguarda a intimidade do paciente e o sigilo e a confidencialidade das informações, e a destinação final é registrada na forma do regulamento (Lei nº 13.787/2018, art. 6º, §§ 3º e 4º).

## 7. Prova da eliminação

- Registre o que foi eliminado (categoria e quantidade, nunca o conteúdo), de onde, quando, por qual rotina e a pedido de quem (art. 6º, X).
- O registro da eliminação não guarda o dado eliminado. Para reaplicar eliminações depois de uma restauração, guarde só o identificador interno necessário e apague-o quando expirar o último backup.

## 8. Código

Proponha a rotina (expiração programada, hard delete, anonimização, rotação de logs, destruição de chave) no padrão do projeto, mostre e espere a aprovação. Nada roda em produção sem pedido explícito.
