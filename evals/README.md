# Avaliações (evals)

Um caso por skill, no formato do `claude plugin eval`:

```text
evals/<skill>/prompt.md      # o prompt, com max_turns e allowed_tools no cabeçalho
evals/<skill>/graders/*.md   # um grader por arquivo
```

Graders só dos tipos `tool_used` (por exemplo, `tool_used: Skill`) e `regex` (presença do que é certo, ausência do que é errado). Nada de grader `llm`. Quando um padrão é montado por um script, o script e as frases de teste ficam em `scripts/testes/graders/`, e o CI confere que o grader traz o padrão montado.

Os casos ficam escritos e com a sintaxe conferida, mas não foram executados pelo autor, porque rodá-los custa. Quem instalar o plugin pode rodá-los por conta própria.

## Como rodar

Na raiz do repositório:

```bash
claude plugin eval .
```

Os resultados vão para `evals/results/`, que o git ignora. `--case <glob>` roda só os casos cujo nome casa com o padrão, e `--runs <n>` muda o número de rodadas de cada caso.

Por padrão, o relatório em HTML é publicado no claude.ai, quando a conta permite. Para mantê-lo só na sua máquina:

```bash
claude plugin eval . --no-publish
```

## Custo

Cada rodada é uma sessão completa do agente, com até 10 turnos, cobrada na credencial de quem roda. Sem opções, cada caso roda 3 vezes com o plugin, e o comando acrescenta rodadas sem o plugin, para comparar com a linha de base. Para gastar menos, use `--case`, `--runs 1`, `--ablation none` (sem a linha de base) e `--max-cost-usd <valor>` (teto de custo).
