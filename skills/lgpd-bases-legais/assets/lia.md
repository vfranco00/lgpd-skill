> Revisão jurídica: pendente · Gerado pela lgpd-skill em {{data}}

# Teste de balanceamento: {{finalidade}}

Um teste por finalidade. Método: as três fases do guia de legítimo interesse da ANPD (versão 1.0, fevereiro de 2024), isto é, finalidade, necessidade e balanceamento e salvaguardas, com a transparência em seção própria. O modelo da ANPD não é obrigatório, e este não o copia: segue as mesmas fases. O mesmo modelo serve à prevenção à fraude com dado sensível (art. 11, II, "g"), que o guia orienta avaliar com o mesmo teste. Se a conclusão for de que prevalecem os direitos, as liberdades fundamentais e as legítimas expectativas do titular, a base não pode ser o legítimo interesse nem a alínea "g".

## Identificação

- **Tratamento:** {{o que se faz com os dados}}
- **Finalidade (uma só):** {{específica e explícita}}
- **Base:** {{legítimo interesse, LGPD, art. 7º, IX}} ou {{prevenção à fraude com dado sensível, art. 11, II, "g"}}
- **Interesse de** (só no legítimo interesse): {{controlador}} ou {{terceiro: quem}}
- **Dados:** {{lista}}
- **Titulares:** {{quem; há criança ou adolescente?}}
- **Data do teste:** {{data}} · **Feito por:** {{nome, função}} · **Revisões:** na seção Histórico

## 1. Finalidade

| Pergunta | Resposta |
|---|---|
| Há dado sensível (art. 5º, II) ou dado que o revele (art. 11, § 1º)? | {{não}} ou {{sim: legítimo interesse não serve; se a finalidade for prevenção à fraude na identificação e autenticação de cadastro em sistemas eletrônicos, siga com o art. 11, II, "g", interpretado de forma restritiva; senão, outra hipótese do art. 11, e este teste para aqui}} |
| Há dado de criança ou adolescente? | {{não}} ou {{sim: avaliar o melhor interesse; seguir em lgpd-criancas-e-adolescentes}} |
| Que benefício o tratamento traz, e para quem? | |
| O interesse é compatível com a lei e com os direitos fundamentais? Alguma norma veda esse tratamento? | |
| Qual a situação concreta e atual que o justifica? | |
| A finalidade é legítima, específica e explícita? No legítimo interesse, encaixa-se no art. 10, I (apoio e promoção de atividades do controlador), no art. 10, II (proteção de direitos do titular ou serviço que o beneficie) ou em outra finalidade legítima? Na alínea "g", ela só pode ser a prevenção à fraude e a segurança do titular na identificação e na autenticação de cadastro em sistemas eletrônicos (art. 11, II, "g"), descrita de forma objetiva e o mais detalhada possível. | |

## 2. Necessidade

| Pergunta | Resposta |
|---|---|
| No legítimo interesse, o tratamento é necessário para a finalidade (art. 7º, IX)? Na alínea "g", é indispensável (art. 11, II)? | |
| Há meio razoável e menos intrusivo de chegar a ela? Se há, por que não foi escolhido? | |
| Por quanto tempo os dados ficam guardados, e por quê? | {{proposta}}; o prazo final é ponto de parada (`lgpd-retencao-e-eliminacao`) |

Cada dado, um por linha. No legítimo interesse, só os estritamente necessários (art. 10, § 1º); na alínea "g", só o indispensável (art. 11, II):

| Dado | Por que é necessário (ou indispensável, na alínea "g") | Dá para reduzir (menos campos, menos tempo, pseudonimizar)? |
|---|---|---|
| {{dado}} | {{...}} | {{...}} |

## 3. Balanceamento

| Pergunta | Resposta |
|---|---|
| O titular espera razoavelmente esse tratamento, nesse contexto? No legítimo interesse, art. 10, II; na alínea "g", o guia pede a mesma avaliação | |
| Há relação prévia entre o controlador e o titular? | |
| Como os dados foram obtidos: direto do titular, de terceiro ou de fonte pública? | |
| Quando e em que contexto foram coletados? | |
| A finalidade original da coleta é compatível com esta? | |
| Que efeitos o titular pode sofrer (intimidade, discriminação, liberdade, integridade, prejuízo financeiro)? | |
| Os direitos e as liberdades fundamentais do titular que exigem a proteção dos dados prevalecem (art. 7º, IX, no legítimo interesse; art. 11, II, "g", na prevenção à fraude)? | |

## 4. Salvaguardas

| Medida | Adotada? Como? |
|---|---|
| Descadastro em cada mensagem, quando houver comunicação | |
| Canal de fácil acesso para oposição (art. 18, § 2º), término do tratamento e eliminação | |
| Nenhum repasse a terceiros sem necessidade | |
| Acesso restrito e medidas de segurança (art. 6º, VII) | |
| Prazo de guarda curto | |
| Outras | |

## 5. Transparência (art. 9º)

- **Base:** no legítimo interesse, o art. 10, § 2º, e o art. 9º; na alínea "g", o art. 9º, cujos direitos a própria alínea manda resguardar (art. 11, II, "g").
- **Onde o titular é informado:** {{aviso de privacidade, tela de cadastro, rodapé da mensagem}}
- **O que se informa:** a finalidade específica; a forma e a duração; a identificação e o contato do controlador; o uso compartilhado; os direitos e o canal de oposição e descadastro (art. 9º, I a VII). O aviso se publica pela `lgpd-transparencia-e-politicas` (ponto de parada).
- **Texto curto ao titular,** conforme a base:
  - legítimo interesse: "Usamos seu {{dado}} para {{finalidade}}, com base no legítimo interesse. Para deixar de receber ou se opor, use {{canal}}."
  - prevenção à fraude com dado sensível: "Usamos seu {{dado}} para prevenir fraudes e proteger você na identificação e na autenticação do seu cadastro (LGPD, art. 11, II, "g"). Para saber mais ou exercer seus direitos, use {{canal}}."

## Conclusão

- [ ] Pode usar o legítimo interesse (art. 7º, IX), com as salvaguardas acima.
- [ ] Pode usar a prevenção à fraude com dado sensível (art. 11, II, "g"), com as salvaguardas acima e a finalidade descrita de forma restritiva.
- [ ] Não pode: prevalecem os direitos do titular. Base alternativa: {{...}}
- **Condições:** {{...}}
- **Registro das operações atualizado** (art. 37): {{sim, onde}}
- **Relatório de impacto:** {{não agora; a ANPD pode solicitá-lo no legítimo interesse (art. 10, § 3º) e pode determiná-lo (art. 38)}} ou {{alto risco: seguir em lgpd-relatorio-de-impacto}}
- **Revisado por:** {{advogado ou encarregado}}, em {{data}}
- **Próxima revisão:** {{data, ou quando a finalidade ou os dados mudarem}}

## Histórico

| Data | O que mudou | Quem |
|---|---|---|
| {{data}} | {{criação, revisão ou alteração}} | {{nome}} |
