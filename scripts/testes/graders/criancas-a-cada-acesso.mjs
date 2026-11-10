#!/usr/bin/env node
// Monta os padrões de dois graders de evals/lgpd-criancas-e-adolescentes/graders/ e testa as frases abaixo
// no motor de regex do JavaScript:
//   sem-a-cada-acesso-para-todos.md: a resposta não pode dizer que o app tem de verificar a idade a cada acesso
//     (match: not_contains);
//   liga-ao-conteudo-restrito.md: a resposta nomeia o conteúdo restrito do art. 9º da Lei nº 15.211/2025.
// Confere também que cada arquivo de grader traz exatamente o padrão montado aqui.
// Uso: node scripts/testes/graders/criancas-a-cada-acesso.mjs (de qualquer diretório). Última linha: TESTE OK.
//      Com --negacao ou --positivo, só imprime o padrão montado, para copiar no grader.
// Sai com 1 se uma frase der errado ou se um grader divergir do padrão montado.
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..');
const pastaGraders = join(raiz, 'evals', 'lgpd-criancas-e-adolescentes', 'graders');

// ---- Partes do padrão ----

const W = '[\\wÀ-ÿ]';
const B0 = `(?<!${W})`; // começo de palavra (inclui letras acentuadas)
const B1 = `(?!${W})`; // fim de palavra
// Caractere da mesma oração: não atravessa fim de frase (". " + letra), ";", ":", "!", "?", "|" nem quebra de linha.
const CL = `(?:(?!\\.\\s+[a-zà-ÿ])[^;:!?|\\n])`;
// Caractere da mesma frase: atravessa ";" e ":", não atravessa fim de frase nem quebra de linha.
const FR = `(?:(?!\\.\\s+[a-zà-ÿ])[^!?|\\n])`;

// O núcleo: "a cada acesso", "em cada acesso", "a todo acesso", "em todo acesso", também com "login".
const NUCLEO = `${B0}(?:a|em)\\s+(?:cada|todo)\\s+(?:acesso|login)${B1}`;

// Conteúdo restrito nomeado: torna a frase certa na negação e é o que o grader positivo procura.
// "adulto" só conta preso ao conteúdo ("conteúdo adulto", "sites para adultos", "restrito a adultos"),
// para não casar os "adultos" com quem a criança conversa (art. 18, III).
const CONTEUDO = [
  'impr[óo]pri', 'inadequad', 'pornogr',
  `(?:conte[úu]do|site|servi[çc]o|material|produto|plataforma)s?\\s+(?:para\\s+|de\\s+)?adult`,
  'restrit[oa]s?\\s+a\\s+adult',
  'maiores\\s+de\\s+(?:18|dezoito)', '\\+\\s?18', '18\\s?\\+',
  'apostas?', 'bebidas?\\s+alco[óo]lic', 'jogos?\\s+de\\s+azar',
  `(?:proibid|vedad)[oa]s?\\s+(?:para|a|aos?)\\s+(?:menores|crian|adolescentes)`,
].join('|');

// Condição e alcance: também tornam a frase certa quando aparecem perto.
const RESTRITO = `${CONTEUDO}|de\\s+que\\s+trata\\s+o\\s+caput`;
const SE_COND = `${B0}(?:se|caso|quando)\\s+(?:\\S+\\s+){0,2}(?:tiver|tenha|oferec|ofert|disponibiliz|vend|houver|exib|distribu)`;
const QUEM = `${B0}(?:de|para|a)\\s+quem${B1}|${B0}quem\\s+(?:\\S+\\s+)?(?:oferec|ofert|vend|disponibiliz|tem|tenha|explor|exib|distribu)`;
const SO_COND = `${B0}(?:s[óo]|somente|apenas|exclusivamente)\\s+(?:se|quando|para|no\\s+caso|de\\s+quem|a\\s+quem)${B1}`;
const NAO_APLICA = `${B0}n[ãa]o\\s+(?:se\\s+aplica|[ée]\\s+o\\s+caso|vale\\s+para\\s+voc|[ée]\\s+para\\s+(?:voc|o\\s+app|um\\s+app))`;
const RESTRICAO_DEPOIS = `(?:${RESTRITO}|${SE_COND}|${QUEM}|${SO_COND}|${NAO_APLICA})`;
const RESTRICAO_ANTES = `(?:${RESTRITO}|${SE_COND})`;

// Negação ou restrição colada antes do verbo (na mesma oração).
const NEG = `${B0}(?:n[ãa]o|nem|nunca|s[óo]|somente|apenas)${B1}`;
// Palavra que não pode estar entre o sujeito e o verbo, nem entre o verbo e o núcleo.
const GAP_PROIBIDO = `${B0}(?:n[ãa]o|nem|nunca|s[óo]|somente|apenas|se|caso|quando|exceto|salvo)${B1}`;
const gap = (n) => `(?:(?!${GAP_PROIBIDO})${CL}){0,${n}}?`;

// Forma A: sujeito (vocês, o app) + obrigação + núcleo, na mesma oração.
const SUJEITO = `${B0}(?:voc[êe]s|o\\s+(?:seu\\s+|nosso\\s+)?(?:app|aplicativo)|a\\s+(?:sua\\s+|nossa\\s+)?plataforma)${B1}`;
const OBRIG_SUJ = `${B0}(?:(?:v[ãa]o|vai)\\s+(?:precisar|ter\\s+(?:de|que))|precis(?:a|am|ar[ãa]o|ar[áa])|dev(?:e|em|er[ãa]o|er[áa])|ter[ãa]o\\s+(?:de|que)|ter[áa]\\s+(?:de|que)|t[êe]m\\s+(?:de|que)|(?:s[ãa]o|est[ãa]o|ser[ãa]o)\\s+obrigad[oa]s|[ée]\\s+obrigad[oa])${B1}`;
// Antes do sujeito, só a negação perto conta ("Isso não significa que vocês..."); "só" e "apenas" ali não afastam a afirmação.
const NEG_SUJ = `${B0}(?:n[ãa]o|nem|nunca)${B1}`;
const FORMA_A =
  `(?<!${NEG_SUJ}\\s+(?:\\S+\\s+){0,3})(?<!${B0}(?:se|caso|quando)\\s+)` +
  `${SUJEITO}${gap(40)}${OBRIG_SUJ}${gap(80)}${NUCLEO}`;

// Forma B: núcleo + afirmação dirigida a quem pergunta ("vale para vocês", "se aplica ao app", "não é opcional").
const ALVO = `(?:ao\\s+(?:seu\\s+|nosso\\s+)?(?:app|aplicativo)|(?:a|para|ao|aos|de)\\s+(?:voc[êe]s|n[óo]s|o\\s+(?:seu\\s+|nosso\\s+)?(?:app|aplicativo)|seu\\s+app|nosso\\s+app))${B1}`;
const AFIRMA =
  `(?<!${NEG}\\s+(?:\\S+\\s+)?)(?:se\\s+aplica|aplica-se|vale|(?:[ée]|ser[áa]|seria)\\s+(?:obrigat[óo]ri|exigid|necess[áa]ri)[a-zà-ÿ]*)\\s+(?:tamb[ée]m\\s+)?${ALVO}` +
  `|${B0}n[ãa]o\\s+[ée]\\s+(?:opcional|facultativ[oa])`;
const FORMA_B = `${NUCLEO}${gap(60)}(?:${AFIRMA})`;

// Forma C: obrigação impessoal antes do núcleo ("a lei exige", "será necessário", "obriga o app a",
// "a idade deve ser verificada").
const OBRIG_IMP = `${B0}(?:(?:dev(?:e|em|er[áa]|er[ãa]o)|precisa(?:m|r[áa])?)\\s+ser\\s+(?:verificad|checad|conferid|aferid)[oa]s?|exig[a-zà-ÿ]*|obrig[a-zà-ÿ]*|ser[áa]\\s+(?:necess[áa]ri[oa]|preciso|obrigat[óo]ri[oa])|[ée]\\s+(?:necess[áa]ri[oa]|preciso|obrigat[óo]ri[oa])|dever[ãa]o\\s+ser\\s+adotad[oa]s|dev(?:e|em)\\s+ser\\s+adotad[oa]s)${B1}`;
const FORMA_C = `(?<!${NEG}\\s+(?:\\S+\\s+){0,2})${OBRIG_IMP}${gap(80)}${NUCLEO}`;

// Restrição antes (na mesma oração) e depois (na mesma frase), uma vez só, em volta das três formas.
const NEGACAO = `(?<!${RESTRICAO_ANTES}${CL}{0,150})(?:${FORMA_A}|${FORMA_B}|${FORMA_C})(?!${FR}{0,200}?${RESTRICAO_DEPOIS})`;
const POSITIVO = CONTEUDO;

if (process.argv[2] === '--negacao') { process.stdout.write(NEGACAO + '\n'); process.exit(0); }
if (process.argv[2] === '--positivo') { process.stdout.write(POSITIVO + '\n'); process.exit(0); }

// ---- Frases ----
// A negação não pode casar as certas e tem de casar as erradas.

const certas = [
  // conjunto A: 12 certas
  'Vocês precisam de mecanismos de experiência adequada à idade; a verificação a cada acesso é exigida de quem tem conteúdo adulto.',
  'A lei exige verificação confiável a cada acesso, vedada a autodeclaração, de quem disponibiliza pornografia, apostas ou bebidas alcoólicas. Não é o caso de vocês.',
  'Essa exigência (verificar a idade a cada acesso) é do art. 9º, § 1º, e alcança quem oferece conteúdo para maiores de 18 anos; não é o caso de vocês.',
  'Vocês devem receber o sinal de idade das lojas; a regra de verificar a cada acesso mira serviços para adultos, como pornografia e apostas.',
  'Não. A regra que manda verificar a idade a cada acesso vale para conteúdo restrito a maiores de 18 anos.',
  'A verificação a cada acesso não se aplica a vocês.',
  'Vocês não precisam verificar a idade a cada acesso.',
  'A verificação de idade a cada acesso é obrigatória para sites adultos, não para um app educacional.',
  'Vocês terão de adotar aferição proporcional ao risco. A exigência de verificar a cada acesso fica para pornografia, apostas e bebidas.',
  'O ECA Digital obriga a verificar a idade a cada acesso quem vende bebida, aposta ou pornografia; o app de vocês segue os arts. 10 e 14.',
  'Resposta: a verificação a cada acesso (art. 9º, § 1º) mira conteúdo para maiores; para vocês, é preciso receber o sinal de idade (art. 14).',
  'Não: o art. 9º exige verificação a cada acesso de quem disponibiliza conteúdo impróprio, inadequado ou proibido para menores de 18 anos.',
  // conjunto B: 22 certas
  'Não. A verificação de idade a cada acesso, vedada a autodeclaração (Lei nº 15.211/2025, art. 9º, § 1º), vale só para quem oferta conteúdo, produto ou serviço impróprio, inadequado ou proibido para menores de 18 anos.',
  'Vocês não precisam verificar a idade a cada acesso: isso é só para conteúdo impróprio.',
  'O ECA Digital só exige verificação de idade a cada acesso de quem disponibiliza conteúdo impróprio ou proibido para menores de 18.',
  'A exigência de verificação a cada acesso não se aplica ao app de vocês.',
  'O ECA Digital exige aferição de idade proporcional ao risco (arts. 10 e 14); a verificação a cada acesso, vedada a autodeclaração, é só para conteúdo impróprio.',
  '| Verificação de idade a cada acesso, sem autodeclaração | não se aplica (art. 9º, § 1º: só conteúdo impróprio, inadequado ou proibido para menores de 18) |',
  'A regra da verificação a cada acesso vale apenas para conteúdo impróprio.',
  'Vocês não estão obrigados à verificação a cada acesso.',
  'Se vocês tiverem conteúdo impróprio para menores de 18, aí sim precisam de verificação a cada acesso, sem autodeclaração.',
  'Isso não vale para vocês: precisam de verificação a cada acesso só os fornecedores de conteúdo impróprio.',
  'Para vocês, o que vale é a aferição proporcional (arts. 10 e 14). Verificação a cada acesso: não.',
  'Não há obrigação de verificar a idade a cada acesso.',
  'O art. 9º, § 1º, que exige verificação a cada acesso, vale só para conteúdo impróprio.',
  'A verificação de idade a cada acesso (sem autodeclaração) é exigida apenas de quem oferta conteúdo impróprio.',
  'Vocês precisam, sim, de aferição de idade proporcional; a verificação a cada acesso é para quem oferta conteúdo impróprio.',
  'Vocês precisam de aferição proporcional, não da verificação a cada acesso.',
  'Isso não significa que vocês precisem verificar a idade a cada acesso.',
  'Quanto à verificação de idade: o ECA Digital exige "mecanismos confiáveis de verificação de idade a cada acesso", mas só para conteúdo impróprio.',
  'A verificação "a cada acesso, vedada a autodeclaração" não se aplica a vocês.',
  '**Verificação de idade a cada acesso: não se aplica.** O art. 9º, § 1º, da Lei nº 15.211/2025 exige a verificação só de quem disponibiliza conteúdo impróprio.',
  'Deverão ser adotados mecanismos confiáveis de verificação de idade a cada acesso do usuário ao conteúdo, produto ou serviço de que trata o caput, isto é, conteúdo impróprio.',
  'Se o app oferecer algum conteúdo proibido para menores, aí a verificação a cada acesso é obrigatória para vocês naquele conteúdo.',
  // conjunto C: 3 certas
  'Vocês só precisam verificar a idade a cada acesso se tiverem conteúdo impróprio.',
  'Vocês precisariam verificar a idade a cada acesso se oferecessem conteúdo para maiores de 18 anos.',
  'Vocês precisam verificar a idade a cada acesso só se oferecerem conteúdo impróprio.',
  // conjunto D: 6 certas
  'A verificação a cada acesso é para sites de apostas e bebidas; vocês precisam de aferição proporcional.',
  'Vocês precisam verificar a idade a cada acesso apenas no caso de oferecerem conteúdo adulto.',
  'Quem vende bebida alcoólica precisa verificar a idade a cada acesso; vocês, não.',
  'Não, vocês não precisam: a verificação a cada acesso vale para quem oferece pornografia.',
  'A lei exige verificação a cada acesso só de quem oferece conteúdo restrito a maiores de 18 anos.',
  'Vocês devem verificar a idade a cada acesso somente se exibirem conteúdo impróprio.',
  // conjunto E: 12 certas, que não foram usadas para ajustar o padrão
  'Quanto à verificação de idade: o ECA Digital só exige a checagem a cada acesso, sem autodeclaração, para serviços com pornografia, apostas ou outros conteúdos proibidos a menores.',
  'Para um app educacional sem conteúdo adulto, vocês não estão sujeitos à verificação a cada acesso; o dever é de experiência adequada à idade (art. 10).',
  'A verificação a cada acesso (art. 9º, § 1º) é a regra para conteúdo +18. No caso de vocês, bastam mecanismos proporcionais ao risco.',
  '| Verificação de idade a cada acesso | Não, salvo conteúdo impróprio |',
  'Vocês precisam, sim, aferir a idade de forma proporcional — mas a verificação a cada acesso fica restrita a quem oferta conteúdo impróprio.',
  'Atenção: a obrigação de verificar a idade a cada acesso, vedada a autodeclaração, recai sobre fornecedores de conteúdo inadequado para menores de 18 anos, o que não parece ser o caso do app.',
  'O art. 9º manda verificar a idade a cada acesso apenas quando o conteúdo é proibido para menores; o app de vocês segue os arts. 10 e 14.',
  'Em resumo: verificação a cada acesso não; experiência adequada à idade e sinal de idade, sim.',
  'Vocês não terão de verificar a idade a cada acesso, a menos que ofereçam conteúdo restrito a adultos.',
  'A exigência de checar a idade em todo acesso existe para sites de apostas e pornografia; para vocês, vale a aferição proporcional ao risco.',
  'Se no futuro o app tiver uma área com conteúdo para maiores de 18, aí sim terão de verificar a idade a cada acesso a essa área.',
  'A lei não obriga o app de vocês a verificar a idade a cada acesso.',
];

const erradas = [
  // conjunto A: 12 erradas
  'Sim. Vocês precisam verificar a idade dos alunos a cada acesso, vedada a autodeclaração.',
  'Sim, e não basta checar no cadastro: vocês precisam verificar a idade a cada acesso.',
  'Sim. Vocês precisam verificar a idade a cada acesso e aceitar apenas documentos oficiais.',
  'Sim. Vocês devem verificar a idade a cada acesso; somente a autodeclaração não basta.',
  'A verificação a cada acesso não é opcional: vocês precisam fazê-la.',
  'Sim. A lei exige verificação de idade a cada acesso, sem autodeclaração, e o app de vocês está no alcance.',
  'Sim, se aplica. O app terá de verificar a idade do aluno a cada login, vedada a autodeclaração.',
  'Sim: o ECA Digital obriga o app a verificar a idade em todo acesso, vedada a autodeclaração e proibido o cadastro sem verificação.',
  'Sim. Como o app é só para adolescentes, vocês precisam verificar a idade a cada acesso.',
  'A verificação de idade a cada acesso vale para vocês.',
  'Sim, vocês precisarão implementar verificação de idade a cada acesso.',
  'Sim. Será necessário verificar a idade a cada acesso.',
  // conjunto B: 12 erradas
  'Vocês precisam adotar mecanismos confiáveis de verificação de idade a cada acesso, vedada a autodeclaração;',
  'Sim. O ECA Digital exige verificação de idade a cada acesso, sem autodeclaração.',
  'A verificação de idade a cada acesso é obrigatória para vocês.',
  'Deverão ser adotados mecanismos confiáveis de verificação de idade a cada acesso do usuário, vedada a autodeclaração.',
  'Como o app é de acesso provável por menores, o ECA Digital se aplica e vocês terão de verificar a idade a cada acesso.',
  'Vocês têm de implementar verificação de idade a cada acesso (não pode ser autodeclaração).',
  'A verificação de idade a cada acesso se aplica a vocês.',
  'Para o app de vocês, é necessária a verificação de idade a cada acesso, sem autodeclaração.',
  'Sim: o app deve verificar a idade em cada acesso, vedada a autodeclaração.',
  'O app precisa de verificação de idade confiável a cada acesso porque é direcionado a adolescentes.',
  'Sim, a verificação de idade a cada acesso vale também para vocês.',
  'O ECA Digital obriga todo serviço de acesso provável a verificar a idade a cada acesso.',
  // conjunto C: 1 errada
  'Sim, o app terá de verificar a idade em todo acesso, vedada a autodeclaração.',
  // conjunto D: 5 erradas
  'Não há dúvida de que vocês precisam verificar a idade a cada acesso.',
  'Não é só o cadastro, vocês precisam verificar a idade a cada acesso.',
  'O ECA Digital se aplica, e o app deverá verificar a idade a cada login, sem aceitar autodeclaração.',
  'Pelo art. 9º, § 1º, a verificação de idade a cada acesso é exigida de vocês.',
  'Sim. Vocês são obrigados a verificar a idade a cada acesso.',
  // conjunto E: 10 erradas
  'Sim. Pela Lei nº 15.211/2025, art. 9º, § 1º, vocês devem adotar verificação de idade confiável a cada acesso, vedada a autodeclaração.',
  'Sim: como o app é direcionado a adolescentes, terão que verificar a idade em cada acesso.',
  'Vocês são obrigados a verificar a idade a cada acesso dos alunos, sem aceitar autodeclaração.',
  'Sim. A verificação a cada acesso é obrigatória para vocês, já que o público é de menores.',
  'Sim. O ECA Digital exige verificação de idade a cada acesso de todo app direcionado a adolescentes.',
  'Sim — e não só no cadastro: a idade deve ser verificada a cada acesso.',
  'Vocês vão precisar verificar a idade a cada acesso, vedada a autodeclaração.',
  'O app tem de checar a idade a cada acesso.',
  'Sim, a verificação de idade a cada acesso se aplica ao app de vocês.',
  'É necessário que vocês verifiquem a idade a cada acesso, sem autodeclaração.',
  // frase adversa: "adultos" aqui é de supervisão parental, não conteúdo restrito
  'Sim. Vocês precisam verificar a idade a cada acesso e identificar os adultos com quem os alunos conversam.',
];

// Limite conhecido, documentado no grader: a errada que cita o conteúdo restrito como finalidade passa.
// Não reprova o teste; é impresso para quem mexer no padrão saber que existe.
const limites = [
  'Sim, se aplica: o app precisa verificar a idade a cada acesso para impedir que crianças vejam conteúdo inadequado.',
];

// O positivo tem de casar quem nomeia o conteúdo restrito e não pode casar o resto.
const nomeiamConteudo = [
  'A verificação a cada acesso (art. 9º, § 1º) é a regra para conteúdo +18. No caso de vocês, bastam mecanismos proporcionais ao risco.',
  'Isso vale para conteúdo 18+, não para um app educacional.',
  'Vocês não terão de verificar a idade a cada acesso, a menos que ofereçam conteúdo restrito a adultos.',
  'A verificação de idade a cada acesso é obrigatória para sites adultos, não para um app educacional.',
  'Para um app educacional sem conteúdo adulto, vocês não estão sujeitos à verificação a cada acesso.',
  'A regra mira serviços para adultos.',
  'A regra vale para conteúdo restrito a maiores de 18 anos.',
  'A lei exige essa verificação de quem disponibiliza pornografia, apostas ou bebidas alcoólicas.',
  'Também jogos de azar ficam de fora para menores.',
  'Só para conteúdo impróprio, inadequado ou proibido para menores de 18 anos.',
  'O que é vedado a menores exige verificação.',
];
const naoNomeiam = [
  'Sim. Vocês precisam verificar a idade a cada acesso e identificar os adultos com quem os alunos conversam.',
  // certas secas: o positivo as reprova de propósito, porque a skill manda dizer o alcance do art. 9º
  'Em resumo: verificação a cada acesso não; experiência adequada à idade e sinal de idade, sim.',
  'A lei não obriga o app de vocês a verificar a idade a cada acesso.',
];

// ---- Respostas inteiras: sem a skill (linha de base) e com a skill ----

const semSkill = "1. Sim, como regra. A LGPD exige que o tratamento de dados de menores seja feito com o consentimento específico e em destaque de pelo menos um dos pais ou do responsável legal (art. 14, § 1º), e o controlador deve fazer os esforços razoáveis para verificar que quem consentiu é o responsável (§ 5º). O tratamento sempre deve atender ao melhor interesse da criança e do adolescente (art. 14, caput). Sem consentimento, só para contatar os pais ou para a proteção do menor (§ 3º). Recomendo coletar o consentimento dos responsáveis no cadastro de todos os alunos. 2. Sim. A Lei nº 15.211/2025 se aplica a produtos e serviços digitais direcionados a crianças e adolescentes ou de acesso provável por eles, e o app de vocês é direcionado a adolescentes. Vocês precisam adotar mecanismos confiáveis de verificação de idade a cada acesso, vedada a autodeclaração; vincular as contas dos alunos de até 16 anos à conta de um responsável; oferecer supervisão parental e configurações mais protetivas por padrão; não usar perfilamento para publicidade; e retirar conteúdo que viole direitos de crianças assim que notificados, independentemente de ordem judicial (art. 27). A lei está em vigor desde março de 2026 e prevê multa de até 10% do faturamento ou R$ 50 milhões por infração, aplicada pela ANPD.";
const comSkill = "\n**Resposta curta:** não, vocês não precisam do consentimento dos pais para tudo; e a verificação de idade \"a cada acesso\" do ECA Digital não é para o app, salvo se ele tiver conteúdo impróprio para menores de 18 anos. O ECA Digital se aplica a vocês, mas com outros deveres.\n\n**1. Papel.** Quem decide para que servem os dados dos alunos? Se o app é contratado por escolas, a escola costuma ser a controladora e vocês, operadores: a base legal é decisão dela e vocês seguem as instruções (LGPD, art. 39). Se as famílias contratam direto, vocês são controladores. Os deveres do ECA Digital são de vocês como fornecedores do app, seja qual for o papel na LGPD, salvo mapear os riscos e elaborar o relatório de impacto, de monitoramento e de avaliação, que cabem ao controlador (Lei nº 15.211/2025, art. 16, parágrafo único): se a escola é a controladora, são dela, com o apoio de vocês.\n\n**2. Consentimento dos pais: não para tudo.**\n- Alunos de 12 a 17 anos são adolescentes: criança é quem tem até 12 anos incompletos (Lei nº 8.069/1990, art. 2º; Lei nº 15.211/2025, art. 2º, § 1º). O consentimento específico e em destaque de pelo menos um dos pais ou do responsável legal (LGPD, art. 14, § 1º) fala só de criança.\n- Para crianças e adolescentes vale qualquer hipótese legal dos arts. 7º ou 11 da LGPD, desde que observado e prevalecente o melhor interesse deles, avaliado no caso concreto (Enunciado CD/ANPD nº 1/2023; LGPD, art. 14, caput). Escolham a base por finalidade (skill lgpd-bases-legais) e registrem, para cada uma, por que atende ao melhor interesse (privacidade, segurança, saúde, acesso à informação, participação, bem-estar: Lei nº 15.211/2025, art. 5º, § 2º), os riscos e a mitigação.\n- Se a base de alguma finalidade for o consentimento, quem o manifesta pelo adolescente não está na LGPD: ponto de revisão jurídica.\n- Se houver aluno com menos de 12 anos e a base for o consentimento, vale a forma do § 1º, com esforços razoáveis para verificar que foi o responsável (§ 5º) e informação pública sobre os dados e os direitos (§ 2º).\n\n**3. O ECA Digital se aplica a vocês.** O app é direcionado a adolescentes, então está no alcance da Lei nº 15.211/2025 (art. 1º), em vigor desde 17/03/2026 (art. 41-A, incluído pela Lei nº 15.352/2026, art. 19) e fiscalizada pela ANPD (Decreto nº 12.622/2025, art. 2º). Pelo guia de fornecedores da ANPD (versão 1.0, publicado em 28/10/2026), produto que se declara voltado a esse público dispensa o teste de acesso provável; plataformas de natureza estritamente educativa podem ter tratamento diferenciado, caso a caso (arts. 34, § 2º, e 39).\n\n**4. Verificação de idade.**\n- A verificação confiável a cada acesso, vedada a autodeclaração (Lei nº 15.211/2025, art. 9º, § 1º), vale só para quem disponibiliza conteúdo, produto ou serviço impróprio, inadequado ou proibido para menores de 18 anos (pornografia e o que a lei proíbe a eles: Decreto nº 12.880/2026, art. 15, § 1º). Um app educacional, em regra, não tem esse conteúdo; se tiver alguma parte assim, o regime vale para o acesso àquela parte.\n- O que vale para vocês: mecanismos de experiência adequada à idade (art. 10); receber o sinal de idade das lojas de aplicações e dos sistemas operacionais e ter mecanismos próprios contra conteúdo inadequado à faixa etária (art. 14), com solução proporcional ao risco do serviço (Decreto nº 12.880/2026, art. 24, I). Se a idade aferida por vocês divergir do sinal, vale a alternativa mais protetiva (art. 25, § 4º). Os dados da aferição só servem para isso (Lei nº 15.211/2025, art. 13; Decreto nº 12.880/2026, art. 24, III) e o aluno precisa de meio para contestar a idade aferida (Decreto nº 12.880/2026, art. 27). Registrem o método e por que é proporcional; para a ANPD, autodeclaração isolada tem baixa confiabilidade (orientações preliminares, versão 1.0, março de 2026).\n- Requisitos mínimos de aferição de idade: não regulamentado pela ANPD até 09/11/2026 (Agenda Regulatória 2025-2026, item 15).\n\n**5. Outros deveres do ECA Digital** (conforme as funcionalidades do app):\n- configuração mais protetiva por padrão (art. 7º); gestão de riscos, conteúdo compatível com a classificação indicativa e configurações contra uso compulsivo (art. 8º);\n- informar pais, alunos e responsáveis sobre riscos e medidas de segurança, inclusive privacidade e proteção de dados, com acesso independente da compra (art. 16);\n- supervisão parental (arts. 17 e 18);\n- sem perfilamento para publicidade comercial (arts. 22 e 26; Decreto nº 12.880/2026, art. 33);\n- com chat ou fórum: mecanismo de notificação de violações (art. 28), retirada após notificação, sem ordem judicial (art. 29), e remoção e comunicação às autoridades de exploração, abuso sexual, sequestro e aliciamento (art. 27);\n- vínculo da conta de alunos de até 16 anos a um responsável (art. 24, caput): o artigo está no capítulo das redes sociais e, para o guia, plataforma escolar de acesso restrito com fórum incidental não é rede social; o alcance fora delas é ponto de revisão jurídica;\n- relatório semestral só acima de 1.000.000 de usuários dessa faixa etária registrados (art. 31);\n- dado de adolescente é critério específico de alto risco (Res. CD/ANPD nº 2/2022, art. 4º, II, d): com um critério geral, sigam para o relatório de impacto (skill lgpd-relatorio-de-impacto); e a avaliação de impacto à segurança e à saúde do Decreto nº 12.880/2026, art. 47;\n- sanções: advertência; multa de até 10% do faturamento do grupo econômico no Brasil ou, sem faturamento, de R$ 10 a R$ 1.000 por usuário cadastrado, limitada no total a R$ 50 milhões por infração; suspensão e proibição pelo Judiciário (art. 35); as multas vão por 5 anos ao Fundo Nacional para a Criança e o Adolescente (art. 36-A, incluído pela Lei nº 15.504/2026).\n\n**6. Pontos de parada:** consentimento de adolescente, se for a base; art. 24 fora de rede social; enquadramento de conteúdo impróprio, se houver.\n\n**7. Registro.** Não há `.lgpd/.lgpd-skill` neste projeto: mostro a avaliação aqui (modelo `assets/avaliacao-publico-infantil.md`) e recomendo começar pela skill `lgpd`, que cria a pasta e o STATUS; depois ela vai para `.lgpd/criancas-e-adolescentes.md`.";

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
for (const [arquivo, montado] of [['sem-a-cada-acesso-para-todos.md', NEGACAO], ['liga-ao-conteudo-restrito.md', POSITIVO]]) {
  const noArquivo = padraoDoGrader(arquivo);
  if (noArquivo !== null && noArquivo !== montado) falhou(`${arquivo}: o padrão do arquivo difere do montado por este script`);
}

const neg = new RegExp(NEGACAO, 'i');
const pos = new RegExp(POSITIVO, 'i');
for (const f of certas) if (neg.test(f)) falhou(`negação casou frase certa: ${f}`);
for (const f of erradas) if (!neg.test(f)) falhou(`negação não casou frase errada: ${f}`);
for (const f of limites) console.log(`limite conhecido (${neg.test(f) ? 'casa' : 'não casa'}): ${f}`);
for (const f of nomeiamConteudo) if (!pos.test(f)) falhou(`positivo não casou: ${f}`);
for (const f of naoNomeiam) if (pos.test(f)) falhou(`positivo casou: ${f}`);
if (!neg.test(semSkill)) falhou('negação não casou a resposta sem a skill');
if (neg.test(comSkill)) falhou('negação casou a resposta com a skill');
if (pos.test(semSkill)) falhou('positivo casou a resposta sem a skill');
if (!pos.test(comSkill)) falhou('positivo não casou a resposta com a skill');

console.log(`negação: ${certas.length} certas, ${erradas.length} erradas, ${limites.length} limite conhecido; positivo: ${nomeiamConteudo.length + naoNomeiam.length} frases; respostas sem e com a skill`);
console.log(`padrões: negação com ${NEGACAO.length} caracteres, positivo com ${POSITIVO.length}`);
if (falhas > 0) { console.log(`${falhas} falha(s)`); process.exit(1); }
console.log('TESTE OK');
