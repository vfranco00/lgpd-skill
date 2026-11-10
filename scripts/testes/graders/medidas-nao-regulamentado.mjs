#!/usr/bin/env node
// Monta os padrões de dois graders de evals/lgpd-medidas-de-seguranca/graders/ e testa as frases abaixo
// no motor de regex do JavaScript:
//   nao-regulamentado.md: a resposta diz que os padrões técnicos mínimos do art. 46, § 1º, da LGPD ainda não foram
//     definidos pela ANPD, com o tema e a negação na mesma oração;
//   cita-art-46.md: a resposta cita o art. 46 da LGPD, também em listas com incisos e parágrafos.
// Confere também que cada arquivo de grader traz exatamente o padrão montado aqui.
// Uso: node scripts/testes/graders/medidas-nao-regulamentado.mjs (de qualquer diretório). Última linha: TESTE OK.
//      Com --nao-regulamentado ou --art-46, só imprime o padrão montado, para copiar no grader.
// Sai com 1 se uma frase der errado ou se um grader divergir do padrão montado.
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..');
const pastaGraders = join(raiz, 'evals', 'lgpd-medidas-de-seguranca', 'graders');

// ---- Partes do padrão nao-regulamentado ----

const W = '[\\wÀ-ÿ]';
const L = '[a-zà-ÿ]';
const B0 = `(?<!${W})`; // começo de palavra (inclui letras acentuadas)
const B1 = `(?!${W})`; // fim de palavra
// Caractere da mesma frase: não atravessa fim de frase (". " + letra), ";", "!", "?" nem quebra de linha.
// Atravessa ":", "|" (linha de tabela) e o ponto de "art. 46".
const OR = `(?:(?!\\.\\s+${L})[^;!?\\n])`;
// A oração termina também em adversativa e em ", e", nas duas ordens.
const ADV = `${B0}(?:mas|por[ée]m|contudo|entretanto|todavia|embora)${B1}`;
const CORTE = `(?:${ADV}|,\\s*e${B1})`;
const CL = `(?:(?!${CORTE})${OR})`;

// O tema: os padrões técnicos mínimos do art. 46, § 1º, ou o item 5 da Agenda Regulatória.
const TEMA = `${B0}(?:padr(?:[ãa]o|[õo]es)\\s+(?:t[ée]cnicos?|m[íi]nimos?)${B1}|§\\s*1\\s*[º°o]?${B1}|item\\s+5${B1})`;

// A negação ligada à regulamentação, de três jeitos:
// 1. um negador e, até 3 palavras depois, a raiz de um verbo de regular ou "norma", "resolução", "ato"; no meio não
//    entra verbo de necessidade ("não precisa de regulamento" não conta); "fez" só no fim da oração ou antes de
//    "até" e "ainda" ("ainda não o fez");
const NEGADOR = `${B0}(?:n[ãa]o|nunca|nem|sem|nenhum[a]?|nada|faltam?(?!\\s+de${B1}))${B1}`;
const MEIO = `(?:\\s+(?!(?:precis|necessit|dev|cab|deix|import|exig|obrig)${L}*${B1})[^\\s;:!?.]+){0,3}?`;
const REG = `${B0}(?:regul|defin|fix|estabelec|edit|baix|exped|public|divulg|aprov|cri[ao]|normatiz|disciplin|conclu|termin|finaliz|exerc|us(?:ou|ad|ar)|sa[íi](?:u|ram|r)${B1}|resolu|norma|ato${B1}|fez(?=\\s*[.;:,)|]|\\s*$|\\s+(?:at[ée]|ainda)${B1}))`;
// 2. "não há", "não existe", "não tem" seguidos de norma ou do tema (até 3 palavras depois) ou no fim da oração;
const EXISTE = `${B0}(?:n[ãa]o|nunca)\\s+(?:\\S+\\s+)?(?:h[áa]|houve|havia|existem?|existia|tem|t[êe]m|tinha)${B1}(?=\\s*,?\\s*(?:[^\\s;:!?.]+,?\\s+){0,3}?(?:regul|norma|resolu|ato${B1}|padr|§)|\\s*[.,;:)|]|\\s*$)`;
// 3. uma forma de pendência: "pendente", "aguarda", "inexiste", "indefinido", "futura", "faltam os padrões",
//    "nenhum padrão", "à espera de", "em elaboração", "em andamento", "em aberto", "por vir", "depende de ato",
//    "ainda estuda", "ainda vai" ou "ainda não" (salvo depois de "quem", "se" ou "que"; "o que ainda não" vale).
const PENDENTE = `${B0}(?:pendentes?|aguard${L}*|inexist${L}*|indefinid${L}*|futur[oa]s?|faltam?\\s+(?:ainda\\s+)?(?:(?:os|as|o|a)\\s+)?padr${L}*|nenhum[a]?\\s+padr${L}*|(?:[àa]\\s+)?espera\\s+d[ae]|em\\s+(?:fase\\s+de\\s+)?(?:elabora${L}*|andamento|aberto|discuss${L}*|estudo|prepara${L}*)|por\\s+(?:vir|definir|fixar|regulamentar|editar)|depend${L}*\\s+(?:ainda\\s+)?de\\s+(?:regul|ato|norma|resolu)${L}*|ainda\\s+(?:estuda|discute|prepara|elabora|vai))${B1}|(?<!${B0}(?:quem|se)\\s+)(?<!(?<!${B0}o\\s+)${B0}que\\s+)${B0}ainda\\s+n[ãa]o${B1}`;
const NEG = `(?:${NEGADOR}${MEIO}\\s+${REG}|${EXISTE}|${PENDENTE})`;

// O padrão: o tema e a negação na mesma oração, em qualquer ordem; ou o tema antes de uma adversativa com a negação
// logo depois ("pode fixar padrões técnicos mínimos, mas ainda não o fez"); ou o tema numa pergunta com "não" ou
// "ainda não" logo na resposta ("Padrões mínimos? Ainda não há.").
const INICIO = `(?:^|(?<=[;!?\\n]|\\.\\s)|${CORTE})`;
const NEG_MAS = `(?:${NEGADOR}${MEIO}\\s+${REG}|${B0}ainda\\s+n[ãa]o${B1})`;
const NAO_REGULAMENTADO =
  `${INICIO}(?=${CL}*?${NEG})${CL}*?${TEMA}` +
  `|${TEMA}${OR}{0,120}?${ADV}${OR}{0,40}?${NEG_MAS}` +
  `|${TEMA}[^.!?\\n]{0,80}\\?\\s*(?:ainda\\s+)?n[ãa]o${B1}`;

// ---- Partes do padrão cita-art-46 ----
// "art. 46", "artigo 46", e listas: "arts. 46 a 49", "arts. 6º, VII, e 46", "arts. 44, parágrafo único, e 46".

const ITEM = `(?:\\d+\\s*[º°o]?|[ivxl]+${B1}|caput|par[áa]grafo\\s+[úu]nico|§+\\s*\\d+\\s*[º°o]?|inc(?:iso|\\.)\\s*[ivxl]+${B1})`;
const SEP = '(?:\\s*,\\s*(?:e\\s+|a\\s+)?|\\s+(?:e|a)\\s+)';
const ART_46 = `${B0}art(?:igos?|s?\\.?)\\s*(?:${ITEM}${SEP})*46(?!\\d)`;

if (process.argv[2] === '--nao-regulamentado') { process.stdout.write(NAO_REGULAMENTADO + '\n'); process.exit(0); }
if (process.argv[2] === '--art-46') { process.stdout.write(ART_46 + '\n'); process.exit(0); }

// ---- Frases do nao-regulamentado ----
// As certas têm de casar; as erradas, não. Os grupos H1 a H7 foram escritos para as versões anteriores do padrão
// (v1 a v6); o padrão atual acerta todas as frases deles. Os conjuntos inéditos C e D não serviram para ajustá-lo.

const certas = [
  // conjunto A: 16 certas
  'Os padrões técnicos mínimos (art. 46, § 1º): não regulamentado pela ANPD até 09/11/2026.',
  'A ANPD ainda não definiu os padrões técnicos mínimos do art. 46, § 1º.',
  'A ANPD ainda não fixou os padrões mínimos de segurança previstos no art. 46, § 1º.',
  'A ANPD não estabeleceu, até hoje, os padrões técnicos mínimos do art. 46, § 1º.',
  'Ainda não existem padrões técnicos mínimos fixados pela ANPD (art. 46, § 1º).',
  'Ainda não há padrões mínimos definidos pela ANPD para o art. 46, § 1º.',
  'O regulamento dos padrões mínimos do art. 46, § 1º, ainda não saiu: está no item 5 da Agenda Regulatória 2025-2026, em elaboração.',
  'Os padrões mínimos do art. 46, § 1º, estão em elaboração na ANPD (Agenda Regulatória 2025-2026, item 5).',
  'A ANPD pode fixar padrões técnicos mínimos (art. 46, § 1º), mas ainda não o fez.',
  'A ANPD ainda não regulamentou o art. 46, § 1º.',
  'Os padrões mínimos do § 1º não foram publicados.',
  'Até agora a ANPD não publicou o regulamento dos padrões mínimos.',
  'Não há resolução da ANPD sobre padrões mínimos de segurança.',
  'O § 1º segue sem regulamentação.',
  'O tema está pendente de regulamentação na Agenda Regulatória (item 5).',
  'A ANPD ainda não editou a norma do art. 46, § 1º.',
  // conjunto A: 3 certas de refutação, que citam o erro para afastá-lo
  'Não é verdade que a ANPD já definiu os padrões mínimos: não regulamentado pela ANPD até 09/11/2026.',
  'Erro comum: tratar o guia de 2021 como se fosse o padrão mínimo do § 1º; os padrões técnicos mínimos ainda não foram regulamentados.',
  'O guia de 2021 não é o padrão mínimo; os padrões mínimos do § 1º ainda não foram fixados.',
  // conjunto B: 15 certas (as outras 3 viraram limites, abaixo)
  'Padrões técnicos mínimos: não regulamentado pela ANPD até 09/11/2026 (Agenda, item 5).',
  'Os padrões técnicos mínimos do art. 46, § 1º, ainda não foram regulamentados.',
  'A ANPD ainda não regulamentou o § 1º do art. 46.',
  'A ANPD ainda não publicou os padrões técnicos mínimos.',
  'Os padrões mínimos não foram publicados até hoje.',
  'Ainda não há regulamento da ANPD com padrões mínimos.',
  'Não há regulamentação específica dos padrões mínimos.',
  'Não existe regulamentação dos padrões técnicos mínimos.',
  'Seguem sem regulamento da ANPD os padrões do § 1º.',
  'Tema pendente de regulamentação (Agenda, item 5).',
  'O § 1º aguarda regulamentação da ANPD.',
  'Os padrões mínimos ainda não foram definidos pela ANPD.',
  'A ANPD ainda não editou o regulamento do art. 46, § 1º.',
  'Ainda não há norma da ANPD sobre os padrões mínimos.',
  'Não existe resolução da ANPD sobre padrões técnicos mínimos.',
  // H1: 16 certas escritas antes deste padrão e usadas para ajustá-lo (adversativa, "faltam", "inexiste",
  // "dependem de regulamentação", "não tinha baixado")
  'Hoje não existe norma da ANPD com os padrões técnicos mínimos de segurança que o art. 46, § 1º, prevê.',
  'Os padrões mínimos de segurança ainda dependem de regulamentação da ANPD.',
  'Quanto aos padrões técnicos mínimos, a ANPD ainda não os definiu.',
  'O art. 46, § 1º, deixa à ANPD fixar padrões técnicos mínimos, o que ela ainda não fez até 09/11/2026.',
  '| Padrões técnicos mínimos (art. 46, § 1º) | não regulamentado pela ANPD até 09/11/2026 (Agenda, item 5) |',
  'A regulamentação dos padrões mínimos de segurança ainda está em andamento na ANPD.',
  'Não há, por enquanto, padrões técnicos mínimos obrigatórios editados pela ANPD.',
  'Padrões mínimos do § 1º: a ANPD ainda não regulamentou.',
  'Até a data de referência, a ANPD não tinha baixado os padrões técnicos mínimos de que trata o art. 46, § 1º.',
  'A norma com os padrões técnicos mínimos ainda não foi publicada pela ANPD; o tema é o item 5 da Agenda Regulatória.',
  'Por ora, faltam os padrões técnicos mínimos que a ANPD pode fixar (art. 46, § 1º).',
  'Os padrões técnicos mínimos ainda não estão definidos; o item 5 da Agenda está em elaboração interna.',
  'O item 5 da Agenda Regulatória 2025-2026, sobre medidas de segurança e padrões mínimos, segue em andamento, sem norma publicada.',
  'A ANPD não regulamentou os padrões mínimos de segurança até hoje.',
  'Ainda inexiste regulamento da ANPD sobre os padrões técnicos mínimos.',
  'O guia de 2021 não é o padrão mínimo do § 1º, que continua sem regulamento.',
  // H2: 14 certas inéditas que reprovaram 8 no padrão v1 e levaram ao v2 (nunca, normatizou, por definir, pendente, sem definição)
  'Os padrões técnicos mínimos do art. 46, § 1º, nunca foram regulamentados pela ANPD.',
  'A ANPD ainda prepara a norma com os padrões mínimos de segurança.',
  'Sobre os padrões mínimos, a regulamentação segue pendente na ANPD.',
  'Continua sem definição oficial o padrão técnico mínimo previsto no § 1º.',
  'Até o momento, a ANPD não editou nenhum ato fixando padrões técnicos mínimos.',
  'Os padrões mínimos seguem indefinidos: a ANPD ainda não concluiu o item 5 da Agenda.',
  'A ANPD ainda não normatizou os padrões técnicos mínimos de segurança.',
  'O regulamento do § 1º ainda não existe.',
  'Não foram fixados, até 09/11/2026, os padrões técnicos mínimos do art. 46, § 1º.',
  'A ANPD não tem, até agora, regulamento sobre padrões mínimos de segurança.',
  'Os padrões técnicos mínimos ainda estão por definir.',
  'No item 5 da Agenda Regulatória, a ANPD trata dos padrões mínimos, ainda sem norma publicada.',
  'Padrão técnico mínimo da ANPD: ainda não há.',
  'Como a ANPD não definiu padrões mínimos, vale o dever geral do art. 46.',
  // H3: 14 certas inéditas que reprovaram 6 no padrão v2 e levaram ao v3 (negador + raiz do verbo, futura regulamentação, em discussão)
  'Os padrões técnicos mínimos do § 1º ainda não foram expedidos pela ANPD.',
  'A ANPD ainda não se pronunciou sobre os padrões mínimos de segurança.',
  'Lacuna: a ANPD ainda não fixou padrão técnico mínimo algum.',
  'Os padrões mínimos de segurança continuam pendentes de regulamentação.',
  'Ainda não saíram os padrões técnicos mínimos da ANPD.',
  'Não foi editado, até hoje, o regulamento dos padrões técnicos mínimos.',
  'Quanto ao § 1º, nada foi regulamentado até agora.',
  'A definição dos padrões mínimos ainda está a cargo de futura regulamentação da ANPD.',
  'A ANPD segue sem publicar os padrões técnicos mínimos.',
  'Os padrões técnicos mínimos ainda não estão em vigor porque a ANPD não os editou.',
  'Item 5 da Agenda: ainda sem resolução.',
  'A ANPD não chegou a definir os padrões mínimos.',
  'Não há, até 09/11/2026, padrão técnico mínimo editado pela ANPD.',
  'O regulamento previsto no § 1º do art. 46 é tema ainda em discussão na ANPD.',
  // H4: 14 certas inéditas que reprovaram 6 no padrão v3 e levaram ao v4 ("ainda não", "nenhum padrão",
  // "aguardam definição", "ainda estuda")
  'Os padrões técnicos mínimos ainda não foram objeto de resolução da ANPD.',
  'A ANPD ainda estuda como fixar os padrões mínimos de segurança.',
  'Nenhum padrão técnico mínimo foi baixado pela ANPD até agora.',
  'Os padrões mínimos do art. 46 seguem sem regulamentação própria.',
  'Padrões técnicos mínimos: ainda não regulamentados.',
  'A ANPD não divulgou até agora os padrões técnicos mínimos do § 1º.',
  'O § 1º, que prevê padrões mínimos, ainda não ganhou regulamento.',
  'Ainda não temos os padrões técnicos mínimos da ANPD.',
  'Os padrões técnicos mínimos ainda aguardam definição da ANPD.',
  'Como ainda não existem padrões mínimos oficiais, siga o guia como referência.',
  'A regulamentação do art. 46, § 1º, não foi concluída.',
  'Os padrões técnicos mínimos ainda não estão prontos.',
  'Sobre o item 5 da Agenda, a ANPD não publicou nada até 09/11/2026.',
  'Os padrões mínimos do § 1º não saíram do papel.',
  // H5: 15 certas inéditas que reprovaram 4 no padrão v4 e levaram ao v5 ("não o exerceu", pergunta e resposta,
  // "regulamentação futura", "nenhuma resolução")
  'Os padrões técnicos mínimos de segurança ainda não foram criados pela ANPD.',
  'Até 09/11/2026 não havia resolução sobre os padrões mínimos do art. 46, § 1º.',
  'A ANPD tem o poder de fixar padrões mínimos, mas não o exerceu até agora.',
  'Não saiu, até agora, o regulamento dos padrões técnicos mínimos.',
  'Padrões mínimos de segurança da ANPD? Ainda não há.',
  'A previsão do § 1º continua no papel: a ANPD não regulamentou o tema.',
  'Os padrões técnicos mínimos ficaram para regulamentação futura da ANPD.',
  'A ANPD ainda não deu os padrões técnicos mínimos do art. 46.',
  'Faltam ainda os padrões técnicos mínimos que o § 1º permite à ANPD fixar.',
  'O regulamento com os padrões mínimos está em fase de elaboração interna na ANPD.',
  'Quanto aos padrões técnicos mínimos, nada foi publicado pela ANPD.',
  'Os padrões técnicos mínimos do § 1º não constam de nenhuma resolução da ANPD.',
  'Não existe, até hoje, padrão mínimo de segurança fixado pela ANPD.',
  'A ANPD não regulou os padrões mínimos previstos no art. 46, § 1º.',
  'Os padrões técnicos mínimos continuam sem norma da ANPD.',
  // H6: 14 certas inéditas que reprovaram 6 no padrão v5 e levaram ao v6 ("à espera de regulamentação",
  // "o que ainda não aconteceu", "ainda falta a ANPD definir", "não existem como norma", "não terminou", "ainda vai fixar")
  'A ANPD ainda não editou os padrões técnicos mínimos de que fala o art. 46, § 1º.',
  'Os padrões mínimos de segurança do § 1º estão à espera de regulamentação.',
  'Até o fechamento desta base, a ANPD não tinha padrões técnicos mínimos aprovados.',
  'Não houve, até agora, regulamentação dos padrões técnicos mínimos pela ANPD.',
  'Os padrões técnicos mínimos ainda não viraram norma.',
  'O § 1º permite à ANPD fixar padrões mínimos, o que ainda não aconteceu.',
  'Padrões técnicos mínimos (art. 46, § 1º): sem regulamento da ANPD até 09/11/2026.',
  'A regulamentação dos padrões técnicos mínimos ainda não começou a valer, porque não foi editada.',
  'Ainda falta a ANPD definir os padrões mínimos de segurança.',
  'Os padrões técnicos mínimos não existem como norma da ANPD.',
  'O item 5 da Agenda Regulatória, que trata dos padrões mínimos, não terminou.',
  'Sobre os padrões técnicos mínimos, a ANPD não baixou nenhuma resolução.',
  'A ANPD ainda vai fixar os padrões técnicos mínimos do § 1º.',
  'Os padrões técnicos mínimos seguem sem definição da ANPD.',
  // H7: validação final do v6, sem ajuste depois: 13 de 14 certas inéditas aprovadas (a 14ª está nos limites)
  'Os padrões técnicos mínimos ainda não foram estabelecidos em resolução.',
  'A ANPD ainda não exerceu a competência de fixar padrões mínimos de segurança.',
  'O regulamento dos padrões mínimos do § 1º não foi aprovado.',
  'Os padrões técnicos mínimos que o art. 46 prevê ainda não estão regulados.',
  'A ANPD não publicou nenhuma norma com padrões técnicos mínimos.',
  'Os padrões mínimos de segurança continuam pendentes na ANPD.',
  'Até hoje, nenhum padrão técnico mínimo saiu da ANPD.',
  'Os padrões técnicos mínimos aguardam norma da ANPD.',
  'Quanto ao § 1º, a ANPD ainda não editou o regulamento.',
  'A norma dos padrões técnicos mínimos ainda vai ser editada pela ANPD.',
  'Os padrões técnicos mínimos ainda não foram fixados, e o guia de 2021 não os substitui.',
  'O item 5 da Agenda, dos padrões mínimos de segurança, segue sem conclusão.',
  'Falta a ANPD regulamentar os padrões técnicos mínimos do art. 46, § 1º.',
  // limite de uma versão anterior que o padrão atual acerta
  'Padrões técnicos mínimos da ANPD: não há, até a data-base de 09/11/2026.',
  // conjunto inédito C: 23 de 26 certas aprovadas pelo padrão atual (as outras 3 estão nos limites)
  'Sobre os padrões técnicos mínimos do art. 46, § 1º: a ANPD ainda não os estabeleceu (item 5 da Agenda Regulatória 2025-2026).',
  'A LGPD autoriza a ANPD a fixar padrões técnicos mínimos, mas essa regulamentação não saiu até 09/11/2026.',
  'Até hoje não foram publicados pela ANPD os padrões técnicos mínimos de segurança.',
  'Não há, até a presente data, norma da ANPD com padrões técnicos mínimos de segurança.',
  'Os padrões técnicos mínimos de segurança estão previstos na lei, mas não foram regulamentados.',
  'Padrões técnicos mínimos: tema ainda não regulamentado pela ANPD (Agenda 2025-2026, item 5).',
  'A ANPD não editou, até o momento, os padrões técnicos mínimos a que se refere o § 1º.',
  'Os padrões mínimos do § 1º do art. 46 permanecem sem regulamentação.',
  'Ainda não foram definidos pela ANPD os padrões técnicos mínimos de segurança.',
  'A regulamentação dos padrões técnicos mínimos (art. 46, § 1º) é um item em andamento na Agenda Regulatória.',
  'Os padrões técnicos mínimos ainda não têm regulamento próprio.',
  'Nenhum regulamento da ANPD define, até agora, os padrões técnicos mínimos.',
  'O art. 46, § 1º, ainda não foi regulamentado; os padrões técnicos mínimos seguem indefinidos.',
  'Os padrões técnicos mínimos que a lei prevê ainda não saíram do papel.',
  'Não existem padrões técnicos mínimos oficiais da ANPD por enquanto.',
  'Os padrões técnicos mínimos (LGPD, art. 46, § 1º) continuam aguardando regulamentação da ANPD.',
  'Quanto ao § 1º, a ANPD não regulamentou nada até agora.',
  'A ANPD ainda não definiu, por resolução, os padrões técnicos mínimos.',
  'Atenção: os padrões técnicos mínimos do art. 46, § 1º, não foram regulamentados pela ANPD até 09/11/2026.',
  'Os padrões técnicos mínimos não estão regulamentados: a ANPD ainda não editou a resolução.',
  'Até 09/11/2026, os padrões técnicos mínimos não haviam sido regulamentados pela ANPD.',
  '| Padrões técnicos mínimos | Não regulamentados pela ANPD até 09/11/2026 |',
  'Os padrões técnicos mínimos ainda não foram estabelecidos; a ANPD só publicou um guia orientativo, sem efeito vinculante.',
  // conjunto inédito D: 6 de 8 respostas certas que citam o erro para refutá-lo (as outras 2 estão nos limites)
  'Muita gente acha que os padrões técnicos mínimos estão no guia de 2021, mas não estão: a ANPD ainda não os regulamentou.',
  'Cuidado com a afirmação de que o guia é o padrão mínimo do § 1º: os padrões técnicos mínimos ainda não foram regulamentados.',
  'Erro comum: "a ANPD já definiu os padrões mínimos". Correção: os padrões técnicos mínimos não foram regulamentados pela ANPD até 09/11/2026.',
  'Não é correto dizer que os padrões técnicos mínimos são os do guia: eles ainda não foram regulamentados.',
  'O guia de 2021 não é o regulamento do § 1º; os padrões técnicos mínimos seguem sem regulamentação.',
  'Há quem diga que a ANPD fixou os padrões técnicos mínimos no guia, o que não é verdade: o tema segue no item 5 da Agenda, em elaboração.',
];

const erradas = [
  // conjunto A: 8 erradas
  'A ANPD publicou o Guia de Segurança (2021), que serve de referência para esses padrões mínimos.',
  'A ANPD já definiu os padrões mínimos de segurança no Guia de 2021.',
  'O Guia de Segurança da ANPD é o padrão mínimo do art. 46, § 1º. Não há norma que obrigue ISO 27001.',
  'Os padrões mínimos estão no Guia da ANPD de 2021. Não existe regulamentação específica para APIs.',
  'O guia de 2021 traz os padrões mínimos obrigatórios. A LGPD não é regulamentada em detalhes técnicos de criptografia.',
  'Siga o guia da ANPD, que fixa os padrões técnicos mínimos; o CPF não é publicado na resposta da API.',
  'O guia da ANPD é o padrão mínimo; o uso de TLS 1.3 não foi regulamentado, mas é boa prática.',
  'A ANPD regulamentou os padrões mínimos no Guia de 2021; sem regulamento próprio para APIs, use a ISO 27001.',
  // conjunto B: 7 erradas
  'A ANPD já publicou os padrões técnicos mínimos na Resolução CD/ANPD nº 2/2022.',
  'Os padrões mínimos são os do guia de segurança da ANPD, que todos devem seguir.',
  'A LGPD não exige criptografia; os padrões mínimos estão definidos no guia da ANPD.',
  'A ANPD publicou o Guia Orientativo de Segurança (2021), que serve de referência para esses padrões.',
  'Quem não adota as medidas responde; CPF e endereço não são sensíveis; logs sem CPF.',
  'O operador não publicou o aviso e o controlador não definiu o prazo.',
  'O guia não é norma, mas define os padrões mínimos que todos seguem.',
  // H1: 10 erradas escritas antes deste padrão e usadas para ajustá-lo
  'Os padrões técnicos mínimos da ANPD estão no guia de 2021, e a LGPD não exige nada além deles.',
  'A ANPD fixou os padrões mínimos de segurança em 2021, no guia para agentes de pequeno porte.',
  'Não há lei que obrigue o uso de AES-256 em APIs.',
  'A criptografia não foi regulamentada como obrigatória, mas os padrões mínimos do guia valem para todos.',
  'Não existe certificação oficial de LGPD para APIs.',
  'A ANPD definiu padrões mínimos no guia orientativo de segurança, que vale como regulamento do art. 46, § 1º.',
  'Os logs não são regulamentados pela LGPD.',
  'Sem norma específica para APIs, siga a ISO 27001.',
  'O padrão mínimo exigido pela ANPD é o checklist do guia de 2021.',
  'Ainda não há decisão da ANPD contra empresas por falta de criptografia.',
  // H2: 10 erradas inéditas; a única aprovada no v1 levou a bloquear ", e" entre a negação e o tema
  'Os padrões técnicos mínimos foram fixados pela ANPD no guia de 2021 e valem para qualquer API.',
  'Não há dúvida de que o guia de 2021 traz os padrões mínimos exigidos.',
  'O § 1º do art. 46 já está regulamentado pelo guia orientativo de segurança.',
  'A ANPD não aceita senhas fracas, e os padrões mínimos do guia proíbem isso.',
  'Não existe obrigação de pentest, mas os padrões técnicos mínimos do guia são obrigatórios.',
  'Os padrões mínimos estão definidos pela ANPD desde 2021.',
  'Para a ANPD, o padrão mínimo é o checklist; quem não o segue é multado.',
  'A LGPD não fixou prazos para logs, e o padrão mínimo de retenção é de 6 meses.',
  'O item 5 da Agenda já foi concluído com a publicação dos padrões mínimos.',
  'Não é preciso esperar regulamento: os padrões técnicos mínimos já estão no guia.',
  // H3: 10 erradas inéditas; a única aprovada no v2 levou a excluir "não há como" e afins
  'Os padrões mínimos da ANPD exigem MFA e TLS em toda API.',
  'Não há como fugir: os padrões técnicos mínimos do guia são obrigatórios.',
  'Os padrões técnicos mínimos não deixam margem: cifra AES-256 é obrigatória.',
  'A ANPD nunca deixou de exigir os padrões mínimos do guia.',
  'O § 1º não precisa de regulamento, porque o guia já fixa os padrões.',
  'Sem dúvida, os padrões técnicos mínimos são os do guia de 2021.',
  'A ANPD não demorou: os padrões mínimos saíram no guia de 2021.',
  'Ninguém precisa esperar a ANPD, pois os padrões mínimos já estão no guia.',
  'O padrão técnico mínimo não é opcional desde 2021.',
  'Os padrões técnicos mínimos foram publicados no guia, sem nenhuma pendência.',
  // H4: 10 erradas inéditas, todas reprovadas no padrão v3
  'Os padrões técnicos mínimos da ANPD estão em vigor desde a publicação do guia.',
  'A ANPD não deixa dúvida: os padrões mínimos são os do guia.',
  'Não precisa de regulamento novo; os padrões mínimos já estão no guia.',
  'Os padrões técnicos mínimos não admitem senha fraca.',
  'Nenhuma API fica fora dos padrões mínimos do guia.',
  'A ANPD não multou ninguém por descumprir os padrões mínimos, mas eles valem.',
  'Os padrões técnicos mínimos foram definidos no checklist e não mudaram desde 2021.',
  'O guia é o regulamento do § 1º, sem tirar nem pôr.',
  'Não existe API segura sem os padrões mínimos do guia de 2021.',
  'A ANPD já não precisa regulamentar o § 1º, porque o guia basta.',
  // H5: 10 erradas inéditas; as 2 aprovadas no v4 levaram a excluir "não há exceção" e "não fez segredo"
  'Os padrões técnicos mínimos fixados pela ANPD exigem cifra AES-256.',
  'Não restam dúvidas: os padrões mínimos estão no guia de 2021.',
  'A ANPD não esconde que os padrões mínimos são os do guia.',
  'Os padrões técnicos mínimos do guia não são opcionais para APIs.',
  'Nenhum agente está livre dos padrões técnicos mínimos do guia.',
  'Não há exceção: o padrão mínimo do § 1º é o checklist da ANPD.',
  'A ANPD não fez segredo: publicou os padrões mínimos em 2021.',
  'Os padrões mínimos foram atualizados pela ANPD e não mudaram o essencial.',
  'Quem ainda não segue os padrões técnicos mínimos do guia está irregular.',
  'Os padrões mínimos do guia não admitem exceções, e a ANPD os fiscaliza.',
  // H6: 10 erradas inéditas, todas reprovadas no padrão v5
  'Os padrões técnicos mínimos da ANPD estão no anexo do guia de 2021.',
  'Não se esqueça de que os padrões mínimos do guia são lei.',
  'A ANPD não abre mão dos padrões técnicos mínimos do guia.',
  'Os padrões mínimos de segurança não deixam de valer para operadores.',
  'Nada impede aplicar os padrões técnicos mínimos do guia, que são obrigatórios.',
  'Ainda que o guia seja de 2021, os padrões mínimos dele são obrigatórios.',
  'O § 1º já foi regulamentado, e os padrões mínimos estão no guia.',
  'Os padrões técnicos mínimos não foram revogados e valem desde 2021.',
  'A ANPD não precisou publicar outra norma, porque os padrões mínimos estão no guia.',
  'Sem exceção, os padrões técnicos mínimos do guia valem para todas as APIs.',
  // H7: validação final do v6, sem ajuste depois: 9 de 10 erradas inéditas reprovadas (a 10ª está nos limites)
  'Os padrões técnicos mínimos do guia de 2021 valem como norma para todos.',
  'A ANPD não cansa de lembrar que os padrões mínimos do guia são obrigatórios.',
  'Os padrões mínimos não são novidade: estão no guia desde 2021.',
  'Nada mudou nos padrões técnicos mínimos do guia, que seguem obrigatórios.',
  'Os padrões técnicos mínimos do guia não admitem senha de quatro dígitos.',
  'Não falta clareza: os padrões técnicos mínimos são os do checklist.',
  'A ANPD não poupa quem descumpre os padrões mínimos do guia.',
  'O § 1º não deixa dúvida: os padrões são os do guia orientativo.',
  'Os padrões técnicos mínimos do guia não foram questionados por ninguém.',
  // limite de uma versão anterior que o padrão atual acerta
  'Os padrões mínimos estão no guia, e a revisão do guia está em andamento.',
  // conjunto inédito C: 20 de 22 erradas reprovadas pelo padrão atual (as outras 2 estão nos limites)
  'O padrão técnico mínimo da ANPD para APIs é o checklist do guia de segurança.',
  'A ANPD já fixou os padrões técnicos mínimos, e eles estão no guia de 2021.',
  'Os padrões técnicos mínimos foram estabelecidos pela ANPD em 2021, por meio do guia orientativo.',
  'Siga os padrões técnicos mínimos que a ANPD publicou no guia de pequeno porte.',
  'Os padrões técnicos mínimos do art. 46, § 1º, constam do guia orientativo da ANPD.',
  'A ANPD definiu padrões técnicos mínimos no guia; não há outra regulamentação necessária.',
  'Os padrões técnicos mínimos exigem MFA e TLS 1.2 ou superior.',
  'Os padrões técnicos mínimos vigentes estão no guia da ANPD, que não tem força de lei mas deve ser seguido.',
  'O item 5 da Agenda Regulatória já foi cumprido com o guia de segurança.',
  'Pelo § 1º do art. 46, a ANPD fixou padrões técnicos mínimos no guia de 2021.',
  'Os padrões técnicos mínimos não mudaram desde que a ANPD os publicou no guia.',
  'A ANPD regulamentou o art. 46, § 1º, com o guia orientativo de 2021.',
  'Não existe dúvida de que os padrões técnicos mínimos estão no guia.',
  'A LGPD não traz lista de controles; os padrões técnicos mínimos ficam a cargo do guia da ANPD.',
  'Os padrões técnicos mínimos do guia de segurança devem ser seguidos por qualquer API.',
  'A ANPD não deixou lacuna: os padrões técnicos mínimos estão no guia de 2021.',
  'Os padrões técnicos mínimos da ANPD não permitem guardar CPF sem criptografia.',
  'Os padrões técnicos mínimos, definidos pela ANPD em 2021, não foram alterados desde então.',
  'Sem os padrões técnicos mínimos do guia, a API fica irregular.',
  'Nenhuma empresa pode ignorar os padrões técnicos mínimos que a ANPD fixou em 2021.',
];

// Limites conhecidos, documentados no grader: não reprovam o teste; são impressos para quem mexer no padrão.
// Certas sem o tema na oração, erradas que juntam o tema a uma negação de regulamentação na mesma oração e as
// falhas do padrão atual nos conjuntos inéditos C e D.
const limites = [
  ['certa sem o tema', 'NÃO REGULAMENTADO PELA ANPD'],
  ['certa sem o tema', 'Até agora não existe nenhum regulamento sobre isso.'],
  ['certa sem o tema', 'Os padrões ainda não estão regulamentados pela ANPD.'],
  ['errada com negação certa', 'Os padrões técnicos mínimos não foram definidos pela LGPD, e sim pelo guia de 2021.'],
  ['errada com negação idiomática', 'A ANPD não demorou a definir os padrões técnicos mínimos, que estão no guia.'],
  // falhas do padrão atual nos conjuntos inéditos C e D
  ['certa com vocabulário que falta', 'A ANPD não emitiu os padrões técnicos mínimos previstos no art. 46, § 1º.'],
  ['certa com vocabulário que falta', 'A ANPD ainda trabalha na regulamentação dos padrões técnicos mínimos (Agenda Regulatória, item 5).'],
  ['certa com o tema na pergunta e o sujeito antes da negação', 'Padrões técnicos mínimos de segurança? A ANPD ainda não os fixou.'],
  ['errada que nega a pendência antes do tema', 'Não é preciso aguardar regulamentação: os padrões técnicos mínimos já estão no guia orientativo.'],
  ['errada que nega a pendência antes do tema', 'Desde 2021 não falta regulamentação: o guia traz os padrões técnicos mínimos.'],
  ['certa que cita o erro para refutá-lo', 'É comum ler que a ANPD já definiu os padrões técnicos mínimos; isso não procede: não regulamentado pela ANPD até 09/11/2026.'],
  ['certa que cita o erro para refutá-lo', 'Diferentemente do que se diz, os padrões técnicos mínimos não estão no guia; a ANPD ainda não os regulamentou.'],
];

// ---- Frases do cita-art-46 ----

const citam46 = [
  'art. 46', 'art.46', 'Art 46', 'artigo 46', 'Artigo 46, § 1º', 'artigos 46 e 47', 'arts. 46 a 49',
  'arts. 6º e 46', 'arts. 6º, VII, e 46', 'arts. 6°, VII e 46', 'nos arts. 44, parágrafo único, e 46',
  'LGPD, art. 46, § 1º', 'ART. 46', 'arts. 44 a 46', 'arts. 5º, IX, 6º, X, e 46',
];
const naoCitam46 = ['art. 146', 'art. 460', 'arte 46', 'Startup 46', 'art. 4', 'artigo 64', 'parte 46', 'art. 1º, 2º e 146'];

// ---- Respostas inteiras: sem a skill (linha de base) e com a skill ----

const semSkill = "A LGPD não traz uma lista de controles técnicos obrigatórios. O que ela exige:\n\n1. Dever geral de segurança (art. 46): medidas de segurança, técnicas e administrativas, aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou difusão. O § 2º exige que essas medidas sejam observadas desde a concepção do produto até a execução (privacy by design).\n2. Princípios (art. 6º): segurança (VII), prevenção (VIII), necessidade (III) e responsabilização e prestação de contas (X).\n3. Padrões mínimos: o art. 46, § 1º, permite à ANPD fixar padrões técnicos mínimos. A ANPD publicou o Guia Orientativo de Segurança da Informação para Agentes de Tratamento de Pequeno Porte (2021), que serve de referência para esses padrões.\n4. Incidentes (art. 48 e Res. CD/ANPD nº 15/2024): comunicar à ANPD e aos titulares em 3 dias úteis quando houver risco ou dano relevante.\n5. Responsabilidade (arts. 42 a 44): quem não adota as medidas responde pelos danos.\n\nCPF e endereço são dados pessoais comuns, não sensíveis (art. 5º, II), mas o CPF permite fraude; trate como dado de alto risco.\n\nNa prática, para a API:\n- TLS 1.2+ em trânsito (HSTS); criptografia em repouso (AES-256) e, para o CPF, criptografia em nível de campo, com chaves num KMS e rotação periódica.\n- Autenticação forte (OAuth 2.0/OIDC, tokens de curta duração), autorização por objeto (contra BOLA/IDOR), menor privilégio.\n- Minimização e mascaramento: CPF mascarado nas respostas (***.123.456-**), endereço completo só quando necessário; hash/HMAC do CPF para buscas.\n- Logs de auditoria de quem acessou o quê, sem CPF em claro; guardar os registros de acesso por 6 meses (Marco Civil da Internet, art. 15).\n- Rate limiting, validação de entrada, WAF, proteção contra enumeração.\n- Backups cifrados e testados; gestão de vulnerabilidades (SAST, DAST, dependências) e pentest.\n- Administrativas: política de segurança da informação, treinamento, termo de confidencialidade, contratos com operadores com cláusulas de segurança (art. 39), plano de resposta a incidentes e relatório de impacto se o tratamento for de alto risco (art. 38).\n- Siga a ISO/IEC 27001/27701 e o OWASP API Security Top 10 como referência.";
const comSkill = "(a) O dever legal. A LGPD (Lei nº 13.709/2018) exige que o controlador e o operador adotem medidas técnicas e administrativas de segurança capazes de proteger os dados pessoais contra acesso não autorizado e contra situações, acidentais ou ilícitas, de destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito (art. 46, caput). As medidas valem da concepção da API à execução (art. 46, § 2º); obrigam qualquer pessoa que atue em alguma fase do tratamento, mesmo depois do término (art. 47); e os sistemas se estruturam para atender aos requisitos de segurança, às boas práticas, à governança e aos princípios (art. 49). Vocês precisam demonstrar as medidas e a eficácia delas (art. 6º, X); quem não as adota e dá causa a um dano responde por ele, seja controlador, seja operador (art. 44, parágrafo único).\n\n(b) O que não está regulamentado. A lei não lista técnica, ferramenta nem certificação. Os padrões técnicos mínimos que a ANPD pode fixar (art. 46, § 1º): não regulamentado pela ANPD até 09/11/2026. É o item 5 da Agenda Regulatória 2025-2026 (Res. CD/ANPD nº 23/2024, alterada pela Res. CD/ANPD nº 31/2025), em andamento, em elaboração interna. O guia de segurança da ANPD para agentes de pequeno porte (versão 1.0, outubro de 2021) é orientação sem efeito normativo vinculante (item 72): ponto de partida recomendado, não exigido; o risco pode pedir mais. TLS 1.3, AES-256 ou ISO 27001 não são exigência da LGPD; são escolhas que demonstram o art. 46.\n\n(c) Os dados e o risco. CPF e endereço são dados pessoais (art. 5º, I), não sensíveis (art. 5º, II). Juntos servem para fraude e golpe, o que pesa na gravidade e pede medidas mais fortes; muitos titulares e API aberta na internet também elevam o nível. Alto risco pela Res. CD/ANPD nº 2/2022, art. 4º, pede critério geral e específico cumulativos: fraude e roubo de identidade são exemplos do geral (§ 2º); o específico viria, por exemplo, de dado sensível ou de titulares crianças, adolescentes ou idosos (art. 4º, II, d). Se a API guarda só CPF e endereço de adultos não idosos, falta o específico; a confirmação é da skill lgpd-aplicacao-e-papeis.\n\n(d) As medidas, por bloco do checklist (estado \"a fazer\" até vocês dizerem o que já existe):\n- Acesso: autenticação de quem chama a API; autorização por registro, para que cada conta só alcance o que lhe cabe; limite de requisições; conta própria para cada pessoa e serviço, menor privilégio e autenticação multifator no banco e na nuvem (guia, itens 34 a 42).\n- Registro de auditoria: quem leu ou alterou qual registro, quando, de onde e com que resultado, pelo identificador interno; sem CPF, endereço, token ou corpo da requisição no log (guia, item 34; art. 6º, III e X).\n- Dados guardados: só o que a finalidade pede (art. 6º, III; guia, itens 44 e 45); cifra em repouso e, para o CPF, cifra por campo, tokenização ou HMAC com chave secreta para a busca. Hash simples de CPF se reverte por força bruta, e o dado pseudonimizado continua pessoal (art. 12; art. 13, § 4º). CPF e endereço mascarados na resposta quando o dado inteiro não for preciso; cópias de segurança completas, separadas, sem sincronização em tempo real e com restauração testada (guia, item 49); ambiente de teste sem dados reais.\n- Chaves: fora do dado (KMS, HSM ou cofre de segredos), com acesso separado, inventário, rotação periódica anotada e rotação imediata se houver suspeita de vazamento ou sair quem tinha acesso. A chave antiga deixa de cifrar, mas continua a decifrar enquanto houver cópia cifrada com ela no prazo de guarda; trocar a chave do HMAC pede recalcular o índice.\n- Comunicações: TLS em toda conexão, inclusive entre serviços e com o banco; firewall e WAF nos serviços expostos; nenhum dado pessoal em página ou repositório público (guia, itens 53 a 55).\n- Vulnerabilidades: sistemas e dependências atualizados, com as correções de segurança instaladas num prazo definido (guia, item 56).\n- Administrativas: política de segurança, treinamento, termo de confidencialidade e cláusulas de segurança com fornecedores (guia, itens 21 a 33).\n- Nuvem: acordo de nível de serviço que trate da segurança dos dados e autenticação multifator (guia, itens 66 a 68).\n- Desde a concepção e depois do término: cada funcionalidade nova passa pela lista; contas removidas e chaves trocadas quando alguém sai; cópias e registros com prazo de guarda (art. 46, § 2º; art. 47).\nA cifra conta também no incidente: a comunicação indica as medidas usadas (art. 48, § 1º, III), e dados ininteligíveis para terceiros não autorizados pesam no juízo de gravidade (art. 48, § 3º).\nSobre logs: os 6 meses do Marco Civil são dos registros de acesso a aplicações (data, hora e IP, com a porta lógica de origem quando necessária: Decreto nº 8.771/2016, art. 15-A) do provedor de aplicações pessoa jurídica com fins econômicos (Lei nº 12.965/2014, art. 5º, VIII, e art. 15), não do registro de auditoria; o prazo de guarda é da skill lgpd-retencao-e-eliminacao. Se a API é aplicação de internet, o Decreto nº 8.771/2016, art. 13, dá diretrizes de segurança para dados pessoais e registros: controle estrito de acesso, autenticação dupla nos registros, inventário dos acessos e encriptação.\n\n(e) Pequeno porte. Se a empresa for agente de pequeno porte enquadrado, medidas essenciais com base em requisitos mínimos são dever, seguir os guias da ANPD conta como observância do art. 52, § 1º, VIII, e a política simplificada é faculdade considerada na sanção (Res. CD/ANPD nº 2/2022, arts. 12 e 13); a política é feita pela skill lgpd-encarregado-e-governanca, e a linha 1 do checklist aponta para ela.\n\n(f) Outras skills: plano de resposta e comunicação de incidente, lgpd-incidentes; cláusulas de segurança com operadores e nuvem, lgpd-operador-e-contratos; fornecedor fora do Brasil, lgpd-transferencia-internacional; prazos de guarda de dados, cópias e logs, lgpd-retencao-e-eliminacao.\n\n(g) Sem o marcador .lgpd/.lgpd-skill e sem ferramenta de escrita, mostro o checklist que ficaria em .lgpd/medidas-de-seguranca.md, com a 1ª linha \"Revisão jurídica: pendente · Gerado pela lgpd-skill em 09/11/2026\", o Escopo (API com CPF e endereço; papel e porte a confirmar), o Risco e as 30 medidas como \"a fazer\". Comecem pela skill lgpd, que cria a pasta e o marcador. Revisão jurídica: pendente.";

// ---- Testes ----

let falhas = 0;
const falhou = (msg) => { console.log(`FALHOU ${msg}`); falhas++; };

function padraoDoGrader(arquivo) {
  const texto = readFileSync(join(pastaGraders, arquivo), 'utf8');
  const fm = texto.split(/^---$/m)[1];
  const linha = fm.match(/^pattern:\s*'(.*)'\s*$/m);
  if (!linha) { falhou(`${arquivo}: linha pattern entre aspas simples não encontrada`); return null; }
  return linha[1].replace(/''/g, "'");
}
for (const [arquivo, montado] of [['nao-regulamentado.md', NAO_REGULAMENTADO], ['cita-art-46.md', ART_46]]) {
  const noArquivo = padraoDoGrader(arquivo);
  if (noArquivo !== null && noArquivo !== montado) falhou(`${arquivo}: o padrão do arquivo difere do montado por este script`);
}

const nr = new RegExp(NAO_REGULAMENTADO, 'i');
const a46 = new RegExp(ART_46, 'i');
for (const f of certas) if (!nr.test(f)) falhou(`nao-regulamentado não casou frase certa: ${f}`);
for (const f of erradas) if (nr.test(f)) falhou(`nao-regulamentado casou frase errada: ${f} [${f.match(nr)[0]}]`);
for (const [tipo, f] of limites) console.log(`limite conhecido, ${tipo} (${nr.test(f) ? 'casa' : 'não casa'}): ${f}`);
for (const f of citam46) if (!a46.test(f)) falhou(`cita-art-46 não casou: ${f}`);
for (const f of naoCitam46) if (a46.test(f)) falhou(`cita-art-46 casou: ${f}`);
if (nr.test(semSkill)) falhou('nao-regulamentado casou a resposta sem a skill');
if (!nr.test(comSkill)) falhou('nao-regulamentado não casou a resposta com a skill');
if (!a46.test(semSkill)) falhou('cita-art-46 não casou a resposta sem a skill');
if (!a46.test(comSkill)) falhou('cita-art-46 não casou a resposta com a skill');

console.log(`nao-regulamentado: ${certas.length} certas, ${erradas.length} erradas, ${limites.length} limites conhecidos; cita-art-46: ${citam46.length + naoCitam46.length} frases; respostas sem e com a skill`);
console.log(`padrões: nao-regulamentado com ${NAO_REGULAMENTADO.length} caracteres, cita-art-46 com ${ART_46.length}`);
if (falhas > 0) { console.log(`${falhas} falha(s)`); process.exit(1); }
console.log('TESTE OK');
