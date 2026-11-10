# lgpd-skill

## O que é

Conformidade com a LGPD (Lei 13.709/2018) e a regulação da ANPD para equipes de software: diagnóstico, bases legais, direitos do titular, incidentes, transferência internacional, operador e contratos, encarregado, IA, crianças e adolescentes, com cada citação conferida na fonte oficial.

Plugin de skills no formato aberto [Agent Skills](https://github.com/agentskills/agentskills): cada pasta de `skills/` traz um `SKILL.md` com as instruções e, em `references/`, o material de apoio com as fontes. Tudo em português do Brasil, só com ferramentas gratuitas, para o Claude Code e para outros agentes que leem o formato.

## Instalação

| Agente | Como instalar | Situação |
|---|---|---|
| Claude Code | marketplace deste repositório | testado |
| Gemini CLI | extensão (`gemini-extension.json`) | testado |
| Codex | manifesto `.codex-plugin/plugin.json` | não testado |
| Cursor | manifesto `.cursor-plugin/plugin.json` | não testado |

### Claude Code

Dentro do Claude Code:

```text
/plugin install lgpd-skill --marketplace vfranco00/lgpd-skill
```

Ou pelo terminal:

```bash
claude plugin marketplace add vfranco00/lgpd-skill
claude plugin install lgpd-skill@lgpd-skill
```

### Gemini CLI

```bash
gemini extensions install https://github.com/vfranco00/lgpd-skill
```

### Codex e Cursor

Pelo manifesto de cada agente: `.codex-plugin/plugin.json` (Codex) e `.cursor-plugin/plugin.json` (Cursor). Formato pela documentação oficial; não testado.

### Manual

Copie as pastas de `skills/` para a pasta de skills do seu agente (no Claude Code, `~/.claude/skills/`).

## Como usar

Peça em linguagem natural. O agente lê a `description` de cada skill e carrega a que combina com o pedido. No Claude Code, também dá para chamar uma skill pelo nome: `/lgpd-skill:<skill>`.

## Skills

A `lgpd` é a porta de entrada e encadeia as outras 14 em ordem.

| Skill | Para quê |
|---|---|
| `lgpd` | Ponto de partida: fixa o papel por atividade (controlador, operador ou ambos), a situação, o porte e o alto risco, encadeia as demais skills, guarda o estado em `.lgpd/STATUS.md` e marca os pontos de parada para advogado ou encarregado; traz a Agenda Regulatória 2025-2026 e o Mapa de Temas Prioritários 2026-2027 da ANPD. |
| `lgpd-aplicacao-e-papeis` | Se a LGPD se aplica (arts. 1º a 5º), quem é controlador, operador, suboperador ou controlador conjunto em cada atividade, se a empresa é agente de tratamento de pequeno porte e se há tratamento de alto risco; regras do Poder Público para quem é operador de órgão público. |
| `lgpd-bases-legais` | Base legal de cada finalidade (arts. 6º a 13): as 10 bases do art. 7º, dado sensível, consentimento, teste de legítimo interesse, dado público, anonimização e pseudonimização; grava `.lgpd/bases-legais.md`. |
| `lgpd-criancas-e-adolescentes` | Dados de crianças e adolescentes na LGPD (art. 14) e no ECA Digital (Lei nº 15.211/2025): base legal, consentimento dos pais, acesso provável, verificação de idade a cada acesso só para conteúdo impróprio, inadequado ou proibido para menores de 18 anos e aferição proporcional ao risco nos demais, supervisão parental, perfilamento, publicidade e sanções. |
| `lgpd-direitos-do-titular` | Atendimento dos direitos do titular (arts. 17 a 22), para controlador e operador: confirmação e acesso, correção, eliminação, portabilidade, revogação do consentimento, oposição e revisão de decisão automatizada; canal, registro, rotas e prazos. |
| `lgpd-mapeamento-e-registro` | Mapa de dados por atividade e registro das operações de tratamento (art. 37), para controlador e operador; registro simplificado do agente de pequeno porte sem tratamento de alto risco, pelo modelo da ANPD. |
| `lgpd-relatorio-de-impacto` | Relatório de impacto à proteção de dados pessoais (art. 38): quando fazer, o que pôr e quem decide; grava cada versão em `.lgpd/relatorios-de-impacto/`. |
| `lgpd-operador-e-contratos` | Operador e contratos (arts. 39 e 42 a 45), nos dois sentidos: acordo de operador, suboperador, aviso de incidente ao controlador, devolução e eliminação no fim do contrato, responsabilidade e diligência de fornecedores de nuvem e de IA. |
| `lgpd-encarregado-e-governanca` | Encarregado (art. 41; Res. CD/ANPD nº 18/2024), programa de governança (art. 50), política simplificada de segurança do pequeno porte, fiscalização, sanções e dosimetria (arts. 52 a 54; Res. CD/ANPD nº 4/2023). |
| `lgpd-medidas-de-seguranca` | Medidas de segurança (arts. 46 a 49) e o guia de segurança da ANPD para pequeno porte: criptografia e chaves, registros de auditoria sem dado pessoal, pseudonimização e segurança desde a concepção; grava `.lgpd/medidas-de-seguranca.md`. |
| `lgpd-incidentes` | Incidente de segurança (art. 48; Res. CD/ANPD nº 15/2024): se há risco relevante, os prazos (3 dias úteis, ou 6 no pequeno porte), a comunicação à ANPD, o aviso ao titular, o registro guardado por, no mínimo, 5 anos e o roteiro do operador. |
| `lgpd-retencao-e-eliminacao` | Término do tratamento e eliminação (arts. 15 e 16): tabela de guarda legal com a norma de cada prazo e a eliminação técnica (backups, logs, destruição de chave); grava `.lgpd/retencao.md`. |
| `lgpd-transferencia-internacional` | Transferência internacional (arts. 33 a 36; Res. CD/ANPD nº 19/2024; Res. CD/ANPD nº 32/2026): mecanismo de cada destino, cláusulas-padrão, contratos dos provedores, aviso no site e íntegra das cláusulas em 15 dias; grava `.lgpd/transferencias.md` e `.lgpd/politicas/aviso-de-transferencia-v<N>.md`. |
| `lgpd-transparencia-e-politicas` | Transparência ao titular (art. 9º) e cookies (guia da ANPD de 2022): política de privacidade, aviso e banner de cookies, versionados, ligados ao aviso de transferência, à transparência do ECA Digital e ao contato do encarregado; grava `.lgpd/politicas/`. |
| `lgpd-ia-e-decisoes-automatizadas` | IA e decisões automatizadas (arts. 6º e 20): treino de modelo com dados pessoais, termos dos provedores de modelo sobre treino e retenção, revisão de decisão automatizada, transparência de agentes de IA e o que ainda não está regulamentado; grava `.lgpd/ia.md`. |

## Fontes

As fontes de todas as skills ficam nas tabelas da `lgpd`, a maestra: `skills/lgpd/references/fontes.md` (normas, guias, decisões e páginas oficiais) e `skills/lgpd/references/fontes-fornecedores.md` (documentos públicos dos provedores), com a URL oficial e a data da conferência. Os scripts de conferência aceitam também tabelas com esses nomes, e com o nome `fontes-pendentes.md`, na pasta `references/` de outra skill (ver `CONTRIBUTING.md`), mas as fontes deste plugin estão todas na maestra. Fontes conferidas em 09/11/2026.

## Testes e validação

```bash
bash scripts/lint-skills.sh         # frontmatter, name, tamanho e termos proibidos
bash scripts/conferir-citacoes.sh   # toda norma citada tem linha numa tabela de fontes
bash scripts/conferir-matriz.sh     # cada exigência da matriz aponta uma skill e um arquivo que existem
bash scripts/verificar-fontes.sh    # toda URL das fontes responde
for t in scripts/testes/*.test.sh; do bash "$t"; done       # testes dos próprios scripts
for t in scripts/testes/graders/*.mjs; do node "$t"; done   # padrões dos graders dos evals
claude plugin validate --strict .   # manifesto e skills
```

URL oficial que recusa robôs entra em `scripts/fontes-ignorar.txt`, com a justificativa. O CI (`.github/workflows/validar.yml`) roda esses passos, o `shellcheck` dos scripts e o `skills-ref validate` de cada skill a cada push e pull request. Os casos de avaliação ficam em `evals/` (ver `evals/README.md`).

## Contribuindo

Ver [CONTRIBUTING.md](CONTRIBUTING.md).

## Licença

MIT. Ver [LICENSE](LICENSE).

## English summary

`lgpd-skill` is a free, MIT-licensed plugin of Agent Skills written in Brazilian Portuguese (keywords: `["lgpd","privacidade","privacy","anpd","protecao-de-dados","data-protection","compliance","brasil","eca-digital","operador","dpa","ripd"]`). Install it in Claude Code with `claude plugin marketplace add vfranco00/lgpd-skill` and `claude plugin install lgpd-skill@lgpd-skill`, in Gemini CLI with `gemini extensions install https://github.com/vfranco00/lgpd-skill`, or copy the folders in `skills/` to your agent's skills folder. The Codex and Cursor manifests follow the official documentation and have not been tested yet. Description (in Portuguese): Conformidade com a LGPD (Lei 13.709/2018) e a regulação da ANPD para equipes de software: diagnóstico, bases legais, direitos do titular, incidentes, transferência internacional, operador e contratos, encarregado, IA, crianças e adolescentes, com cada citação conferida na fonte oficial.
