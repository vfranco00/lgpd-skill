> Revisão jurídica: pendente · Gerado pela lgpd-skill em {{data}}

# Relatório de impacto à proteção de dados pessoais: {{projeto ou processo}}

Mantido pela skill `lgpd-relatorio-de-impacto` (base normativa de 09/11/2026). Documentação do controlador (LGPD, art. 5º, XVII; art. 38). O relatório de impacto não foi regulamentado pela ANPD até 09/11/2026 (Agenda Regulatória 2025-2026, item 2): o controlador escolhe o formato, desde que o relatório traga o conteúdo mínimo do art. 38, parágrafo único (seções marcadas com *). Um relatório por projeto ou processo com a mesma finalidade, e um arquivo por versão.

- Versão: {{N}} · Arquivo: `.lgpd/relatorios-de-impacto/{{processo}}-v{{N}}.md` · Data: {{data}}
- Uso: {{interno / versão pública}}. A versão pública pode omitir segredo comercial e industrial e outras informações protegidas por lei.
- Esta versão começa com "Revisão jurídica: pendente" e com a aprovação pendente, mesmo que a anterior tenha sido revisada ou aprovada: o selo e a aprovação de uma versão não passam para a outra. Enquanto ela estiver pendente, as mudanças entram neste arquivo e na seção 10. Depois da revisão, só a 1ª linha e a seção 9 mudam, para registrar a revisão e a aprovação desta versão; qualquer outra mudança, com o OK do usuário, vira a versão seguinte, em outro arquivo, e esta fica como prova.

## 1. Identificação

| Campo | Resposta |
|---|---|
| Controlador | {{nome e contato}} |
| Operadores e suboperadores | {{quem e o que fazem com os dados}} |
| Encarregado | {{nome e contato; no pequeno porte sem encarregado, quem conduz o relatório}} |
| Quem elaborou | {{nomes ou funções}} |
| Partes consultadas e o que disseram | {{áreas, operadores, especialistas, titulares; pareceres}} |

## 2. Por que este relatório

| Motivo | Sim ou não | Norma |
|---|---|---|
| Determinação da ANPD | {{...}} | LGPD, art. 38 |
| Pedido da ANPD, com base em legítimo interesse | {{...}} | LGPD, art. 10, § 3º |
| Pedido da ANPD depois de incidente de segurança | {{...}} | Res. CD/ANPD nº 15/2024, art. 8º |
| Dados de crianças ou adolescentes em produto ou serviço direcionado a eles ou de acesso provável por eles | {{...}} | Lei nº 15.211/2025, art. 16, parágrafo único, II |
| Dados de crianças ou adolescentes com base no legítimo interesse, havendo alto risco | {{...}} | Guia de Legítimo Interesse da ANPD, p. 14 (orientação) |
| Tratamento de alto risco (recomendação da ANPD) | {{...}} | Res. CD/ANPD nº 2/2022, art. 4º, como referência |
| Gestão de riscos, sem os motivos acima | {{...}} | LGPD, art. 6º, X; art. 50, § 2º, I, d |

Alto risco por atividade, copiado de `.lgpd/papeis.md` (ao menos 1 critério geral e 1 específico; larga escala pelos fatores, sem número de corte):

| Atividade | Critério geral (art. 4º, I) | Critério específico (art. 4º, II) | Alto risco |
|---|---|---|---|
| {{atividade}} | {{larga escala: titulares, volume, duração, frequência, extensão geográfica; ou afeta significativamente: como}} | {{qual e por quê}} | {{sim / não / a confirmar}} |

## 3. Descrição do tratamento*

- Projeto ou processo: {{nome e finalidade}}
- Sistemas de informação: {{quais e onde rodam}}
- Da coleta à eliminação: {{coleta, uso, cruzamentos, compartilhamento, guarda, descarte}}

| Dado ou inferência* | Sensível ou revela dado sensível? (LGPD, art. 5º, II; art. 11, § 1º) | Titulares | Fonte | Finalidade | Hipótese legal | Compartilhado com | Prazo de guarda e descarte |
|---|---|---|---|---|---|---|---|
| {{dado}} | {{não / sim: qual}} | {{categoria}} | {{origem}} | {{para quê}} | {{LGPD, art. 7º ou art. 11, com o inciso}} | {{quem; transferência internacional?}} | {{prazo; como}} |

- Categorias de titulares: {{clientes, usuários, funcionários...}}
- Crianças, adolescentes, idosos ou outros vulneráveis: {{não / sim: quais}}
- Volume de dados e número de titulares: {{os fatos do tratamento}}

## 4. Metodologia da coleta e da garantia da segurança*

- Como os dados são coletados: {{formulário, aplicativo, sensor, terceiro, integração...}}
- Como a segurança das informações é garantida: {{medidas técnicas e administrativas; ver `.lgpd/medidas-de-seguranca.md`, se existir}}

## 5. Necessidade, proporcionalidade e princípios (LGPD, art. 6º)

| Princípios | Como o tratamento os atende | Lacuna |
|---|---|---|
| Finalidade, adequação e necessidade (I a III) | {{...}} | {{...}} |
| Livre acesso, qualidade dos dados e transparência (IV a VI) | {{...}} | {{...}} |
| Segurança e prevenção (VII e VIII) | {{...}} | {{...}} |
| Não discriminação (IX) | {{...}} | {{...}} |
| Responsabilização e prestação de contas (X) | {{...}} | {{...}} |

## 6. Riscos aos titulares

Método de análise de risco: {{nome do método e por que o controlador o escolheu}}.

| # | Risco ao titular | Origem (fator de risco) | Probabilidade | Gravidade | Nível | Medidas (seção 7) | Risco residual |
|---|---|---|---|---|---|---|---|
| R1 | {{discriminação, impedimento de usar um serviço, fraude, reidentificação, uso para fim incompatível, acesso indevido...}} | {{...}} | {{...}} | {{...}} | {{...}} | {{M1}} | {{...}} |

## 7. Medidas, salvaguardas e mecanismos de mitigação*

Análise do controlador sobre cada medida adotada ou prevista:

| # | Medida, salvaguarda ou mecanismo | Riscos que trata | Situação | Responsável |
|---|---|---|---|---|
| M1 | {{...}} | {{R1}} | {{adotada / prevista, com data}} | {{quem}} |

## 8. Conclusão

- Decisão do controlador: {{seguir / seguir com as mudanças abaixo / não fazer}}
- Mudanças no tratamento: {{...}}
- Rever quando: {{mudança nas operações, fator de risco novo ou agravado, regulamento ou orientação nova da ANPD}}

## 9. Comentários e aprovação

Nenhuma norma diz quem aprova o relatório: é escolha de governança do controlador. O agente deve pedir a assistência e a orientação do encarregado (Res. CD/ANPD nº 18/2024, art. 10, II), que as presta na elaboração (art. 16, III), e a responsabilidade pela conformidade é do agente de tratamento (art. 11).

| Nome ou função | Papel (elaborou, assistiu, opinou, aprovou) | Data | Parecer ou comentário |
|---|---|---|---|
| {{...}} | {{...}} | {{...}} | {{...}} |

Aprovação desta versão: pendente desde {{data}}. Só muda, depois da revisão desta versão, para "feita por {{nome ou função}} em {{data}}"; a aprovação de outra versão não vale para esta.

## 10. Versões

O que mudou em relação à versão anterior: {{"primeira versão" ou o que mudou}}.

Mudanças nesta versão, enquanto ela está pendente:

| Data | O que mudou | Quem |
|---|---|---|
| {{data}} | {{primeira redação}} | {{quem}} |

Versões anteriores (cada uma é um arquivo próprio; esta tabela só as cita e não muda nenhuma):

| Versão | Arquivo | Selo da 1ª linha e aprovação daquela versão |
|---|---|---|
| {{nenhuma, se esta é a versão 1}} | {{`.lgpd/relatorios-de-impacto/<processo>-v<N-1>.md`}} | {{pendente, ou feita por nome ou função em data; aprovação: pendente, ou feita por nome ou função em data}} |
