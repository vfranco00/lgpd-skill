> Revisão jurídica: pendente · Gerado pela lgpd-skill em {{data}}

# Exemplo de rotas de direitos do titular

Um exemplo só, em TypeScript com Express 5 e Zod 3, para adaptar ao sistema. Cobre confirmação, acesso, declaração completa, correção, portabilidade e eliminação, com autenticação do titular e registro de cada pedido. A portabilidade sai como cópia: um download para o próprio titular, a cópia integral do art. 19, § 3º, registrada como "cópia". A transmissão direta a outro fornecedor (art. 18, V) não está coberta; a portabilidade segue sem regra da ANPD (não regulamentado pela ANPD até 09/11/2026). Titular sem conta, revogação do consentimento, oposição e revisão de decisão automatizada seguem `references/fluxo-de-atendimento.md`, pelo canal do encarregado.

- **Montagem:** `app.use(direitos)`. A autenticação e o CSRF ficam presos ao caminho `/titular`, então o resto do app (página inicial, login) não passa por eles.
- **Autenticação:** o titular usa a mesma sessão do login; não peça documento a quem já está autenticado (LGPD, art. 6º, III; art. 46).
- **Segurança das rotas** (art. 46):
  - toda rota que cria pedido é POST ou PATCH e exige o token antifalsificação (CSRF) da sessão num cabeçalho próprio, que outro site não consegue enviar; GET e HEAD ficam só para leitura; use também cookie de sessão `SameSite`;
  - a correção aceita só os campos de uma lista, validados por schema, para o titular não trocar papel, plano ou outro campo do cadastro;
  - a eliminação, que não tem volta, exige confirmação explícita no corpo e reautenticação recente;
  - depois da exclusão, a sessão é encerrada.
- **Registro:** o pedido entra no registro na chegada, com protocolo, a data do requerimento (de onde corre o prazo do art. 19, II) e a situação "aberto", nos termos de `assets/registro-de-pedidos.md`. Ele só muda de situação depois que a ação der certo. Se a ação falhar, continua aberto e segue para a resposta do art. 18, § 4º. O registro prova o atendimento (art. 6º, X), guarda só o necessário e não é usado contra o titular (art. 6º, III; art. 21).
- **Prazos:** formato simplificado na hora (art. 19, I); declaração completa em até 15 dias, 30 no pequeno porte (art. 19, II; Res. CD/ANPD nº 2/2022, art. 14, III); os demais pedidos sem prazo em lei (art. 18, § 5º).
- **Operador:** com `PAPEL=operador`, toda rota registra o pedido, encaminha ao controlador (art. 39) e só então o marca como "encaminhado". Se o contrato mandar o operador atender em nome do controlador, registre essa instrução e desligue o encaminhamento só nas rotas que ela cobre.
- **Eliminação:** o que fica guardado volta ao titular com a hipótese do art. 16 e a data (art. 18, § 4º, II); quem recebeu os dados é avisado (art. 18, § 6º).

A skill não altera o código do projeto sem pedido explícito: proponha a mudança, mostre e espere a aprovação.

```ts
// Express 5 + TypeScript + Zod 3. Rotas do titular autenticado no sistema.
// Controlador atende; operador só encaminha ao controlador (LGPD, art. 39).
// Montagem: app.use(direitos). Autenticação e CSRF valem só sob /titular; o resto do app não passa por elas.
import express, { type NextFunction, type Request, type Response } from "express";
import { randomUUID } from "node:crypto";
import { z } from "zod";

// Direito pedido: confirmação (art. 18, I), acesso (art. 18, II), declaração completa (art. 19, II),
// correção (art. 18, III), cópia (art. 19, § 3º) e eliminação (art. 18, IV e VI).
type Direito = "confirmacao" | "acesso" | "declaracao-completa" | "correcao" | "copia" | "eliminacao";
type Situacao = "aberto" | "respondido" | "encaminhado"; // termos de assets/registro-de-pedidos.md

interface Pedido {
  protocolo: string;
  titularId: string;
  direito: Direito;
  recebidoEm: string; // data do requerimento: dela corre o prazo do art. 19, II
  prazo: string | null; // null: sem prazo em lei (art. 18, § 5º; não regulamentado pela ANPD até 09/11/2026)
  situacao: Situacao;
}

// Correção (art. 18, III): só os campos da lista, validados; campo fora dela é recusado.
const Correcao = z
  .object({
    nome: z.string().trim().min(1).max(200),
    email: z.string().trim().email().max(254),
    telefone: z.string().regex(/^\+?[0-9 ()-]{8,20}$/),
  })
  .partial()
  .strict()
  .refine((campos) => Object.keys(campos).length > 0, "Informe ao menos um campo.");
type Correcao = z.infer<typeof Correcao>;

// Eliminação: confirmação explícita no corpo, além da reautenticação recente.
const ConfirmacaoDeEliminacao = z.object({ confirmo: z.literal("excluir minha conta") }).strict();
const REAUTENTICACAO_MS = 5 * 60 * 1000;

// O que o seu sistema já tem; aqui só as assinaturas.
declare function titularDaSessao(req: Request): string | null; // a mesma autenticação do login
declare function csrfValido(req: Request): boolean; // token da sessão, enviado num cabeçalho próprio
declare function reautenticadoHaMenosDe(req: Request, ms: number): boolean; // senha ou segundo fator pedidos de novo
declare function encerrarSessao(req: Request, res: Response): Promise<void>;
declare const dados: {
  existeTratamento(id: string): Promise<boolean>;
  resumo(id: string): Promise<Record<string, unknown>>; // formato simplificado (art. 19, I)
  exportar(id: string): Promise<Record<string, unknown>>; // sem dado já anonimizado (art. 18, § 7º)
  corrigir(id: string, campos: Correcao): Promise<void>;
  eliminar(id: string): Promise<{ conservados: { dado: string; hipotese: string; ate: string }[] }>; // art. 16
};
declare const destinatarios: { avisar(id: string, providencia: "correção" | "eliminação"): Promise<void> }; // art. 18, § 6º
declare const controlador: { encaminhar(pedido: Pedido, corpo: unknown): Promise<void> }; // canal do contrato
declare const registro: { gravar(pedido: Pedido): Promise<void> }; // grava ou atualiza pelo protocolo

const OPERADOR = process.env.PAPEL === "operador";
const PEQUENO_PORTE = process.env.PEQUENO_PORTE === "sim"; // só quem cumpre a Res. CD/ANPD nº 2/2022, arts. 2º e 3º
const DIA_MS = 24 * 60 * 60 * 1000;

function exigirTitular(req: Request, res: Response, next: NextFunction) {
  res.locals.recebidoEm = new Date();
  const id = titularDaSessao(req);
  if (!id) {
    res.status(401).json({ erro: "Entre na sua conta para fazer o pedido." });
    return;
  }
  res.locals.titularId = id;
  next();
}

// CSRF: GET e HEAD só leem; o resto só passa com o token da sessão num cabeçalho que outro site não consegue enviar.
function exigirCsrf(req: Request, res: Response, next: NextFunction) {
  if (req.method === "GET" || req.method === "HEAD" || csrfValido(req)) return next();
  res.status(403).json({ erro: "Pedido sem o token de segurança da sessão." });
}

function validarCorrecao(req: Request, res: Response, next: NextFunction) {
  const campos = Correcao.safeParse(req.body);
  if (!campos.success) {
    res.status(400).json({ erro: "Só dá para corrigir nome, e-mail e telefone, com valores válidos." });
    return;
  }
  res.locals.correcao = campos.data;
  next();
}

function exigirConfirmacaoDeEliminacao(req: Request, res: Response, next: NextFunction) {
  if (!ConfirmacaoDeEliminacao.safeParse(req.body).success) {
    res.status(400).json({ erro: 'Para excluir a conta, envie { "confirmo": "excluir minha conta" }.' });
    return;
  }
  if (!reautenticadoHaMenosDe(req, REAUTENTICACAO_MS)) {
    res.status(401).json({ erro: "Entre de novo na sua conta para confirmar a exclusão." });
    return;
  }
  next();
}

// Registro na chegada: o pedido existe desde o requerimento (art. 18, § 3º) e fica "aberto" até a ação dar certo.
// Se a ação falhar, ele continua aberto e segue para a resposta do art. 18, § 4º.
function abrirPedido(direito: Direito, prazoEmDias: number | null) {
  return async (_req: Request, res: Response, next: NextFunction) => {
    const recebidoEm: Date = res.locals.recebidoEm;
    const pedido: Pedido = {
      protocolo: randomUUID(),
      titularId: res.locals.titularId,
      direito,
      recebidoEm: recebidoEm.toISOString(),
      prazo: prazoEmDias === null ? null : new Date(recebidoEm.getTime() + prazoEmDias * DIA_MS).toISOString(),
      situacao: "aberto",
    };
    await registro.gravar(pedido); // só o necessário (art. 6º, III); nunca usado contra o titular (art. 21)
    res.locals.pedido = pedido;
    next();
  };
}

// Depois que a ação deu certo: a nova situação entra no registro, que prova o atendimento (art. 6º, X).
async function concluir(res: Response, situacao: Situacao): Promise<Pedido> {
  const pedido: Pedido = { ...res.locals.pedido, situacao };
  await registro.gravar(pedido);
  return pedido;
}

// Operador: não decide o pedido; encaminha e diz ao titular só o que o contrato autoriza.
async function encaminharSeOperador(req: Request, res: Response, next: NextFunction) {
  if (!OPERADOR) return next();
  await controlador.encaminhar(res.locals.pedido, req.body);
  const pedido = await concluir(res, "encaminhado");
  res.status(202).json({
    protocolo: pedido.protocolo,
    mensagem: "Pedido encaminhado ao controlador dos seus dados, que decide e responde.",
  });
}

export const direitos = express.Router();
direitos.use("/titular", express.json(), exigirTitular, exigirCsrf); // nenhuma rota cobra do titular (art. 18, § 5º)

// Confirmação e acesso em formato simplificado: na hora (art. 18, I e II; art. 19, I).
direitos.post("/titular/confirmacao", abrirPedido("confirmacao", 0), encaminharSeOperador, async (_req, res) => {
  const existeTratamento = await dados.existeTratamento(res.locals.titularId);
  const pedido = await concluir(res, "respondido");
  res.json({ protocolo: pedido.protocolo, existeTratamento });
});

direitos.post("/titular/acesso", abrirPedido("acesso", 0), encaminharSeOperador, async (_req, res) => {
  const resumo = await dados.resumo(res.locals.titularId);
  const pedido = await concluir(res, "respondido");
  res.json({ protocolo: pedido.protocolo, dados: resumo });
});

// Declaração clara e completa (origem, inexistência de registro, critérios e finalidade): fica aberta
// até a resposta, em até 15 dias do requerimento; 30 no pequeno porte (art. 19, II; Res. CD/ANPD nº 2/2022, art. 14, III).
direitos.post("/titular/declaracao-completa", abrirPedido("declaracao-completa", PEQUENO_PORTE ? 30 : 15), encaminharSeOperador, (_req, res) => {
  const pedido: Pedido = res.locals.pedido;
  res.status(202).json({ protocolo: pedido.protocolo, prazo: pedido.prazo });
});

// Correção só dos campos validados (art. 18, III), com aviso imediato a quem recebeu os dados (art. 18, § 6º).
direitos.patch("/titular/dados", validarCorrecao, abrirPedido("correcao", null), encaminharSeOperador, async (_req, res) => {
  await dados.corrigir(res.locals.titularId, res.locals.correcao);
  await destinatarios.avisar(res.locals.titularId, "correção");
  const pedido = await concluir(res, "respondido");
  res.json({ protocolo: pedido.protocolo });
});

// Cópia integral para o próprio titular, em formato reutilizável (art. 19, § 3º): a portabilidade possível
// sem regulamento. A transmissão direta a outro fornecedor (art. 18, V) não está aqui.
direitos.post("/titular/copia", abrirPedido("copia", null), encaminharSeOperador, async (_req, res) => {
  const copia = await dados.exportar(res.locals.titularId);
  const pedido = await concluir(res, "respondido");
  res.attachment(`dados-${pedido.protocolo}.json`).json(copia);
});

// Eliminação e exclusão da conta (art. 18, IV e VI), com confirmação e reautenticação recente. O que fica
// guardado volta com a hipótese do art. 16 e a data (art. 18, § 4º, II); quem recebeu os dados é avisado
// (art. 18, § 6º); a sessão acaba junto com a conta.
direitos.post("/titular/eliminacao", exigirConfirmacaoDeEliminacao, abrirPedido("eliminacao", null), encaminharSeOperador, async (req, res) => {
  const { conservados } = await dados.eliminar(res.locals.titularId);
  await destinatarios.avisar(res.locals.titularId, "eliminação");
  const pedido = await concluir(res, "respondido");
  await encerrarSessao(req, res);
  res.json({ protocolo: pedido.protocolo, conservados });
});
```
