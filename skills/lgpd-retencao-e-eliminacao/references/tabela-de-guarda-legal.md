> Fontes: ver skills/lgpd/references/fontes.md — siglas usadas: [L12965], [D8771], [D12975], [L15211], [L13787], [L8212], [LC128], [CDC], [LGPD], [Res15], [CTN], [CLT], [L11941], [ResCFM1821]

# Tabela de guarda legal

Paráfrase, não texto oficial, conferida nos textos oficiais em 09/11/2026. Só entra prazo lido na norma. Cada linha é de um destes três tipos:

- **Dever de guarda:** a norma manda guardar. É obrigação legal ou regulatória e permite conservar o dado depois do término (LGPD, art. 16, I).
- **Prescrição:** a norma só diz até quando alguém pode cobrar ou processar. É risco, não dever de guarda (`termino-art-15-e-16.md`, seção 2).
- **Regra de conselho profissional ou de contrato:** não é lei. Se conta como obrigação regulatória do art. 16, I, é ponto de revisão jurídica.

Prazo que não está aqui, ou que vem de lei estadual ou municipal, entra na tabela de `.lgpd/retencao.md` como "a confirmar", com quem confirma (advogado ou contador). Nenhum prazo desta tabela dispensa o ponto de parada 5 (definir prazo de retenção).

## Resumo

| Dado | Prazo | Conta a partir de | Tipo | Norma |
|---|---|---|---|---|
| Registros de acesso a aplicações de internet (data, hora e IP de uso, com a porta lógica de origem quando necessária) | 6 meses | cada registro | dever de guarda do provedor de aplicações pessoa jurídica que exerce a atividade de forma organizada, profissional e com fins econômicos | Lei nº 12.965/2014, art. 15; Decreto nº 8.771/2016, art. 15-A |
| Registros de conexão | 1 ano | cada registro | dever de guarda do administrador do sistema autônomo, na provisão de conexão | Lei nº 12.965/2014, art. 13 |
| Informações de cada anúncio ou impulsionamento pago e do anunciante | 1 ano | fim da veiculação | dever de guarda de quem vende a ferramenta de anúncio ou impulsionamento | Decreto nº 8.771/2016, art. 16-M |
| Prontuário do paciente, em qualquer suporte | no mínimo 20 anos | último registro | dever de guarda | Lei nº 13.787/2018, art. 6º |
| Livros fiscais e comprovantes dos lançamentos, como as notas fiscais | até a prescrição dos créditos tributários | as operações a que se referem (prazos dos arts. 150, § 4º, 173 e 174) | dever de guarda | CTN (Lei nº 5.172/1966), art. 195, parágrafo único |
| Documentos das obrigações previdenciárias da empresa | até a prescrição dos créditos | as operações a que se referem | dever de guarda | Lei nº 8.212/1991, art. 32, § 11 |
| Registro de incidentes de segurança | no mínimo 5 anos | data do registro | dever de guarda | Res. CD/ANPD nº 15/2024, art. 10 |
| Créditos da relação de trabalho | 5 anos, até 2 anos depois do fim do contrato | — | prescrição | CLT (Decreto-Lei nº 5.452/1943), art. 11 |
| Reparação de dano por fato do produto ou do serviço | 5 anos | conhecimento do dano e da autoria | prescrição | CDC (Lei nº 8.078/1990), art. 27 |
| Prontuário arquivado eletronicamente, para o médico | guarda permanente | — | regra de conselho profissional | Res. CFM nº 1.821/2007, art. 7º |

## 1. Marco Civil e regulamento: registros de acesso e de conexão

- **O que é cada registro.** Registro de conexão: data e hora de início e de fim de uma conexão, a duração e o IP do terminal (Lei nº 12.965/2014, art. 5º, VI). Registro de acesso a aplicações: data e hora de uso de uma aplicação a partir de um IP (art. 5º, VIII).
- **Aplicações: 6 meses.** O provedor de aplicações de internet constituído como pessoa jurídica, que exerce essa atividade de forma organizada, profissional e com fins econômicos, guarda os registros de acesso à sua aplicação por 6 meses, sob sigilo, em ambiente controlado e de segurança (Lei nº 12.965/2014, art. 15, caput).
  - Ordem judicial pode obrigar outro provedor de aplicações a guardar, por tempo certo, registros de fatos específicos de um período (§ 1º).
  - A autoridade policial ou administrativa ou o Ministério Público pode pedir, como cautela, a qualquer provedor de aplicações que guarde os registros, inclusive por mais de 6 meses (§ 2º). O provedor mantém o pedido em sigilo, e o pedido perde o efeito se a autorização judicial for negada ou não for pedida em 60 dias (§ 2º, com o art. 13, §§ 3º e 4º).
  - Entregar os registros a quem pediu depende sempre de autorização judicial (§ 3º; art. 10, § 1º).
- **Quem se enquadra.** O dever é do próprio provedor de aplicações (art. 15). Quem oferece o sistema pela internet como negócio, por exemplo o fornecedor de um software como serviço, está no perfil do art. 15. Se a empresa que só oferece um portal aos próprios clientes ou pacientes se enquadra é ponto de revisão jurídica; na dúvida, guardar 6 meses e eliminar depois é escolha prudente, registrada como escolha, com finalidade e base legal (`lgpd-bases-legais`). Sem o dever do art. 15, não é obrigação legal do art. 16, I, da LGPD. O papel de cada atividade se fixa em `lgpd-aplicacao-e-papeis`.
- **Conexão: 1 ano.** Na provisão de conexão, o administrador do sistema autônomo guarda os registros de conexão por 1 ano, sob sigilo, em ambiente controlado e de segurança, sem transferir essa responsabilidade a terceiros; a autoridade pode pedir guarda por mais tempo (Lei nº 12.965/2014, art. 13, caput e §§ 1º e 2º). Quem provê a conexão não pode guardar registros de acesso a aplicações (art. 14).
- **Porta lógica de origem.** O dever de guardar o endereço IP, dos provedores de conexão e de aplicações, abrange a porta lógica de origem sempre que ela for necessária para identificar sem dúvida o terminal de origem ou o próximo enlace de rede. Esse dever não depende de requisição e recai sobre cada provedor por conta própria; o fornecimento da porta e dos dados ligados a ela segue os arts. 10 e 22 da Lei nº 12.965/2014 (Decreto nº 8.771/2016, art. 15-A, caput e §§ 1º e 2º, incluído pelo Decreto nº 12.975/2026, que entrou em vigor 60 dias após a publicação no DOU de 21/05/2026, art. 2º).
- **Segurança dos registros.** Na guarda, no armazenamento e no tratamento de dados pessoais e comunicações privadas, os provedores de conexão e de aplicações seguem quatro diretrizes: controle estrito de acesso, com responsabilidades e privilégios definidos; autenticação de quem acessa os registros, por exemplo dupla, que individualize o responsável; inventário dos acessos aos registros (momento, duração, quem acessou e o arquivo); e técnicas que garantam a inviolabilidade, como encriptação (Decreto nº 8.771/2016, art. 13, I a IV). As medidas ficam com `lgpd-medidas-de-seguranca`.
- **Depois do prazo, excluir.** Os provedores retêm a menor quantidade possível de dados pessoais, comunicações privadas e registros, e os excluem assim que a finalidade de uso for atingida ou quando acabar o prazo fixado por obrigação legal (Decreto nº 8.771/2016, art. 13, § 2º). O registro com pedido cautelar ou ordem judicial de guarda fica enquanto eles valerem (Lei nº 12.965/2014, art. 15, §§ 1º e 2º).
- **O que não se guarda.** O provedor de aplicações não pode guardar registros de acesso a outras aplicações sem o consentimento prévio do titular, nem dados pessoais excessivos para a finalidade consentida, salvo nas hipóteses da LGPD (Lei nº 12.965/2014, art. 16, I e II).
- **Log de auditoria não é registro do Marco Civil.** O log que diz quem abriu qual ficha, o que alterou e quando não tem prazo em nenhuma norma desta tabela. O controlador fixa o prazo pela finalidade (segurança, apuração de incidente, defesa), com o motivo, e leva à revisão jurídica. Esse log também é dado pessoal, de quem agiu e do titular da ficha.

## 2. Deveres dos provedores de aplicações no regulamento (Decreto nº 12.975/2026)

O Decreto nº 12.975/2026 deu nova redação ao art. 1º do Decreto nº 8.771/2016, que passou a tratar dos deveres dos provedores de conexão e de aplicações, e incluiu nele os artigos abaixo (texto compilado lido em 09/11/2026). Fora o art. 16-M, não são regras de guarda: quem oferece aplicação na internet confere esses deveres com revisão jurídica.

- **Arts. 16-A a 16-P.** Deveres gerais (art. 16-A): sede e representante legal no País, canal permanente de denúncia, medidas contra redes artificiais de distribuição de conteúdo ilícito e meios para garantir a segurança e a transparência dos serviços. Dever de cuidado com conteúdo criminoso e gestão de riscos sistêmicos (arts. 16-B e 16-C); notificação, análise, indisponibilização e encaminhamento ao Poder Público (arts. 16-D a 16-J); anúncios e impulsionamentos pagos (arts. 16-K a 16-M); publicidade enganosa, abusiva ou fraudulenta (art. 16-N). Os deveres dos arts. 16-B a 16-J não alcançam e-mail, mensageria instantânea nas comunicações interpessoais e reuniões em grupo restrito (art. 16-O); a autoridade competente pode fixar critérios diferenciados, em especial para pequenos provedores (art. 16-P).
- **Guarda do art. 16-M.** Quem vende ferramenta de anúncio ou impulsionamento guarda por 1 ano, contado do fim da veiculação, as informações de cada anúncio ou impulsionamento e dos anunciantes.
- **Art. 19-A.** A ANPD regula, fiscaliza e apura infrações quanto aos direitos dos usuários e aos deveres dos provedores de aplicações, em especial os dos arts. 16-A a 16-P, nos termos da Lei nº 12.965/2014 (em especial os arts. 10 a 12), da LGPD e da Lei nº 15.211/2025.
- **Art. 20-A.** Os provedores de aplicações editam termos de uso e outras formas de autorregulação com sistema de notificações, devido processo e relatórios anuais de transparência, publicados e revistos periodicamente; a autorregulação que vise proteger os direitos dos usuários conta como elemento de boa-fé na apuração de infrações.

## 3. Saúde: prontuário do paciente

- **Lei.** A digitalização e os sistemas informatizados de guarda, armazenamento e manuseio do prontuário seguem a Lei nº 13.787/2018 e a LGPD (Lei nº 13.787/2018, art. 1º). Os meios de armazenamento protegem os documentos digitais de acesso, uso, alteração, reprodução e destruição não autorizados (art. 4º).
- **Prazo.** Decorrido o prazo mínimo de 20 anos a partir do último registro, o prontuário pode ser eliminado (art. 6º, caput). Vale para todo prontuário, qualquer que seja a forma de armazenamento: papel, digitalizado, microfilmado, em meio óptico e o gerado e mantido originalmente em meio eletrônico (art. 6º, § 5º). Cada novo registro move o marco.
- **Depois dos 20 anos.** Regulamento pode fixar prazos diferentes, conforme o uso em estudos e pesquisas ou para fins legais e probatórios (§ 1º). Em vez de eliminar, o prontuário pode ser devolvido ao paciente (§ 2º). A eliminação resguarda a intimidade do paciente e o sigilo e a confidencialidade das informações (§ 3º), e a destinação final é registrada na forma do regulamento (§ 4º). Os 20 anos são mínimo: guardar mais precisa de motivo próprio, decidido com revisão jurídica.
- **Pedido do paciente.** O pedido de exclusão não encurta o prazo: o prontuário fica por obrigação legal (LGPD, art. 16, I), e a resposta diz por quê e até quando (art. 18, § 4º, II).
- **Conselho profissional.** A Res. CFM nº 1.821/2007 fixa, para os médicos, a guarda permanente do prontuário arquivado eletronicamente em meio óptico, microfilmado ou digitalizado (art. 7º) e 20 anos, a partir do último registro, para o prontuário em papel não arquivado eletronicamente (art. 8º). É norma do Conselho Federal de Medicina, não lei; a Lei nº 13.787/2018, posterior, permite eliminar depois de 20 anos também o prontuário eletrônico (art. 6º, § 5º). Qual regra a clínica de médicos segue é ponto de revisão jurídica. Esta skill não leu as normas de outros conselhos profissionais: confirme com o conselho da profissão.

## 4. Fiscal: livros e notas fiscais

- **Dever de guarda.** Os livros obrigatórios de escrituração comercial e fiscal e os comprovantes dos lançamentos feitos neles são conservados até a prescrição dos créditos tributários das operações a que se referem (CTN, art. 195, parágrafo único).
- **Decadência.** O direito de a Fazenda constituir o crédito acaba em 5 anos, contados do 1º dia do exercício seguinte àquele em que o lançamento poderia ter sido feito, ou da decisão definitiva que anulou, por vício formal, o lançamento anterior (art. 173, I e II). No tributo de lançamento por homologação, em que o contribuinte apura e paga antes de qualquer exame da autoridade, o prazo de homologação, se a lei não fixar outro, é de 5 anos contados do fato gerador, salvo dolo, fraude ou simulação (art. 150, § 4º).
- **Prescrição.** A cobrança do crédito prescreve em 5 anos, contados da constituição definitiva dele (art. 174, caput), e o prazo se interrompe nas hipóteses de interrupção do art. 174.
- **Na prática.** Os 5 anos são a contagem de cada etapa, não um prazo corrido desde a emissão: com lançamento, discussão ou interrupção, a guarda se alonga. O contador confirma o prazo de cada documento, com as regras do estado e do município.
- **Dados do cliente ou do paciente na nota.** Ficam pelo mesmo prazo, por obrigação legal (LGPD, art. 16, I), e só para essa finalidade.

## 5. Previdenciário

- **Dever de guarda.** A empresa prepara as folhas de pagamento, lança as contribuições na contabilidade, presta informações à Receita Federal e declara a ela e ao Conselho Curador do FGTS os dados dos fatos geradores (Lei nº 8.212/1991, art. 32, I a IV). Os documentos que comprovam o cumprimento dessas obrigações ficam arquivados na empresa até a prescrição dos créditos das operações a que se referem (art. 32, § 11).
- **Os 10 anos não valem mais.** O prazo de 10 anos que ainda circula vinha da redação antiga do próprio art. 32, § 11, da Lei nº 8.212/1991 (documentos arquivados "durante dez anos"), trocada pela Lei nº 11.941/2009, e dos 10 anos de decadência e de prescrição dos arts. 45 e 46 da mesma lei, revogados pela LC nº 128/2008 (art. 13, I, "a"). A contagem da prescrição fica com o contador ou o advogado.

## 6. Trabalhista: prescrição como risco

- **Prescrição.** A pretensão sobre créditos da relação de trabalho prescreve em 5 anos, até o limite de 2 anos depois do fim do contrato (CLT, art. 11, caput). Não é dever de guarda: a empresa decide guardar os documentos do empregado para defesa enquanto o prazo corre, com base no art. 7º, VI, ou no art. 11, II, "d", da LGPD, só com o necessário e com revisão jurídica.
- **Exceção.** Esse prazo não se aplica às ações que pedem anotações para prova junto à Previdência Social (CLT, art. 11, § 1º). Por quanto tempo guardar os documentos que provam o vínculo é ponto de revisão jurídica.
- **Outras normas.** Esta tabela não cobre as demais normas trabalhistas: para cada documento do empregado, confirme com o contador ou o advogado se há prazo próprio.

## 7. Consumidor: prescrição como risco

- **Prescrição.** Prescreve em 5 anos a pretensão de reparar dano causado por fato do produto ou do serviço, contados do conhecimento do dano e de sua autoria (CDC, art. 27). O direito de reclamar de vício aparente caduca em 30 dias, para serviço e produto não duráveis, ou em 90 dias, para serviço e produto duráveis, contados da entrega do produto ou do fim do serviço; no vício oculto, de quando o defeito aparece (art. 26, caput e §§ 1º e 3º).
- **Não é dever de guarda.** O marco do art. 27 depende de quando o consumidor soube do dano, então não há data certa para apagar. Guardar para defesa é escolha do controlador, com base no art. 7º, VI, ou no art. 11, II, "d", da LGPD, só com o que serve à defesa (contrato, comprovante, registro do atendimento), e com revisão jurídica.

## 8. Registros da própria LGPD

- **Incidentes.** O controlador guarda o registro de cada incidente de segurança, comunicado ou não, por no mínimo 5 anos contados da data do registro, ou por mais tempo se outra obrigação exigir (Res. CD/ANPD nº 15/2024, art. 10): skill `lgpd-incidentes`.
- **Demais registros.** Registro das operações, registro dos pedidos de titulares e prova do consentimento não têm prazo na lei; o tempo de guarda dos registros não foi regulamentado (LGPD, art. 40): `termino-art-15-e-16.md`, seção 5.

## 9. Sem dever de guarda nas normas desta tabela

Cadastro de campanha, contatos comerciais, dados de análise de uso, cookies e dados de conta encerrada: nas normas desta tabela, sem dever de guarda; confirme a norma do setor (passo 3). Sem dever de guarda, ficam pelo tempo da finalidade (LGPD, art. 15, I e II), com o mínimo necessário (art. 6º, III). No fim, eliminação ou anonimização (art. 16).
