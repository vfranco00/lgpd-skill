> Revisão jurídica: pendente · Gerado pela lgpd-skill em {{data}}

# Registro das operações de tratamento: {{agente}}

Base: LGPD, art. 37. Controlador e operador mantêm registro das operações de tratamento que realizam. Mantido pela skill `lgpd-mapeamento-e-registro` (base normativa de 09/11/2026); cada entrada sai da linha de mesmo código em `.lgpd/mapa-de-dados.md`.

Este arquivo só recebe entradas. Cada operação entra como uma seção nova no fim, com o código da atividade no mapa; nenhuma entrada é mudada nem apagada, e o arquivo nunca é regravado inteiro. Mudança ou fim de uma operação entra também no fim, numa seção `## <código> · atualização em <data>`; o estado atual de cada operação é a última seção com o código dela. Prazo de guarda deste registro: não regulamentado pela ANPD até 09/11/2026 (LGPD, art. 40).

- **Forma:** {{simplificada, pelo modelo da ANPD de 14/06/2023 (Res. CD/ANPD nº 2/2022, art. 9º), porque a empresa é agente de pequeno porte sem tratamento de alto risco, conforme .lgpd/papeis.md}} ou {{completa, escolha da lgpd-skill; o conteúdo do registro completo é não regulamentado pela ANPD até 09/11/2026}}. Mudança de forma entra como atualização no fim.
- **Papel da equipe:** {{controlador / operador / ambos}}. Nas entradas de operador, finalidade, base legal, dados e prazo são os que o controlador informou (LGPD, art. 39); sem a informação, "a confirmar com o controlador".

Os modelos de entrada e de atualização ficam só em `assets/registro-de-operacoes.md`, da skill. Aqui entram só entradas preenchidas, a primeira já na criação do arquivo.

---

**Modelos de entrada.** Esta parte fica só em `assets/`: ao criar `.lgpd/registro-de-operacoes.md`, copie o que vem antes da linha acima e acrescente a 1ª entrada já preenchida. Cada entrada nova segue o modelo da forma escolhida, no fim do registro.

## {{ATV-01}} · forma simplificada · {{data}}

Os 8 campos do modelo da ANPD de 14/06/2023, como estão no formulário. É escolha da skill, para o registro continuar reconhecível como o modelo; quem precisa de mais campos usa a forma completa. Só tipos de dado, nunca valores.

| Campo | Preenchimento |
|---|---|
| Informações de contato | Organização: {{nome da empresa}} · CNPJ: {{CNPJ}} · Endereço: {{endereço}} · Principal atividade: {{da empresa}} · Gestor responsável: {{cargo ou função, com contato funcional}} · E-mail: {{e-mail de contato da empresa}} · Telefone: {{telefone da empresa}} · Data do registro: {{data do preenchimento}} |
| Categorias de titulares | ( ) Titulares em geral · ( ) Crianças e adolescentes · ( ) Idosos |
| Dados pessoais | ( ) Nome · ( ) Endereço · ( ) RG · ( ) E-mail · ( ) CPF · ( ) Telefone · Outros: {{tipos}} |
| Compartilhamento | {{fluxo para fora da organização e nome dos terceiros que receberam os dados / não há}} |
| Medidas de segurança | {{medidas que protegem os dados}} |
| Período de armazenamento | {{tempo de guarda na base; se operador, o instruído pelo controlador}} |
| Processo, finalidade e hipótese legal | Processo: {{processo interno}} · Finalidade: {{motivo do tratamento}} · Hipótese legal: {{inciso do art. 7º ou do art. 11 da LGPD; se operador, a informada pelo controlador}} |
| Observações | {{encarregado, operadores, transferências internacionais. Se a equipe é operadora: o controlador (nome e contato) ou, na entrada de grupo, o rótulo e onde está a lista (os contratos), sem os nomes dos clientes; e a fonte das instruções (contrato ou instrução escrita, com a data), por escolha da skill}} |

## {{ATV-01}} · forma completa · {{data}}

Escolha da `lgpd-skill`: os 8 campos do modelo da ANPD, com detalhe livre dentro deles, e os acréscimos marcados com (+). Só tipos de dado, nunca valores.

| Campo | Preenchimento |
|---|---|
| Papel da equipe (+) | {{controlador / operador}} |
| Controlador e instruções (+) | {{se operador: nome e contato do controlador ou, na entrada de grupo, o rótulo e onde está a lista (os contratos), sem os nomes dos clientes; contrato ou instrução escrita, com a data}} |
| Informações de contato | Organização: {{nome da empresa}} · CNPJ: {{CNPJ}} · Endereço: {{endereço}} · Principal atividade: {{da empresa}} · Gestor responsável: {{cargo ou função, com contato funcional}} · E-mail: {{e-mail de contato da empresa}} · Telefone: {{telefone da empresa}} · Data do registro: {{data do preenchimento}} |
| Categorias de titulares | ( ) Titulares em geral · ( ) Crianças e adolescentes · ( ) Idosos · {{quais, ex.: empregados, dependentes, candidatos}} |
| Dados pessoais | ( ) Nome · ( ) Endereço · ( ) RG · ( ) E-mail · ( ) CPF · ( ) Telefone · Outros: {{tipos; sensíveis marcados (LGPD, art. 5º, II)}} |
| Origem (+) | {{titular / controlador / outro agente / fonte pública}} (LGPD, art. 19, II) |
| Compartilhamento | {{fluxo para fora da organização e nome dos terceiros que receberam os dados, e para quê / não há}} |
| Operadores ou suboperadores (+) | {{quem, o que faz e onde; suboperador: autorização do controlador, genérica ou específica (Guia de Agentes, item 67)}} |
| Transferência internacional (+) | {{país e hipótese do art. 33 da LGPD, pela skill lgpd-transferencia-internacional / não há}} |
| Medidas de segurança | {{medidas que protegem os dados}} |
| Período de armazenamento | {{prazo, pela skill lgpd-retencao-e-eliminacao; se operador, o instruído pelo controlador}} |
| Processo, finalidade e hipótese legal | Processo: {{processo interno}} · Finalidade: {{motivo do tratamento}} · Hipótese legal: {{inciso do art. 7º ou do art. 11; com legítimo interesse, onde está o teste da skill lgpd-bases-legais; se operador, a informada pelo controlador}} |
| Observações | {{encarregado e outras informações}} |

## {{ATV-01}} · atualização em {{data}}

- **O que mudou:** {{dados, finalidade, operador, país, prazo, forma do registro}}
- **Situação:** {{ativa / encerrada em data}}
- **Quem informou:** {{quem; se operador, a instrução do controlador}}
