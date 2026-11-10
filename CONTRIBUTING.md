# Como contribuir

Toda mudança segue quatro regras.

1. **Nenhuma citação sem a linha em `fontes.md`.** Toda lei, norma, guia ou documento citado numa skill tem uma linha na tabela de fontes da maestra: `skills/lgpd/references/fontes.md` ou, para documento de provedor, `skills/lgpd/references/fontes-fornecedores.md`, com a URL oficial e a data da conferência. Os scripts de conferência aceitam também `fontes.md`, `fontes-fornecedores.md` e `fontes-pendentes.md` na pasta `references/` de outra skill, e o `verificar-fontes.sh`, que vem de um esqueleto comum a outros repositórios de skills, lê ainda `controles-*.md`; neste repositório, as linhas vão para as tabelas da maestra. Cite a norma na forma `Tipo nº N/AAAA` (ex.: `Lei nº 13.709/2018`, `Res. CD/ANPD nº 15/2024`; resolução de outro órgão com a sigla dele logo depois do tipo, como `Res. CFM nº 1.821/2007`, e não "Resolução nº 1.821/2007 do CFM"), uma norma por citação; `bash scripts/conferir-citacoes.sh` aponta a citação sem fonte e a forma que ele não reconhece, como a data por extenso, o plural ou a lista de números. Para medida provisória (MP), cite a lei de conversão, quando houver; a MP que segue em vigor sem conversão (ex.: MP nº 2.200-2/2001) é citada como MP, com a linha na tabela de fontes, e o `conferir-citacoes.sh` não a confere.
2. **Rode os comandos de "Testes e validação" do README antes do PR**: lint, citações, matriz, testes dos scripts e, se mexeu em fontes, `bash scripts/verificar-fontes.sh`. O CI roda todos.
3. **Português do Brasil** no texto das skills e da documentação. A `description` pode trazer palavras-chave também em inglês.
4. **Neutralidade.** Nenhuma empresa, produto, cliente ou pessoa real como exemplo; provedor público só com documento oficial dele listado nas fontes.

Para propor, abra uma issue ou um pull request pequeno, com uma mudança por vez.

## Nova versão

A versão aparece em vários lugares, e todos mudam juntos:

- `version` em `.claude-plugin/plugin.json`, `.codex-plugin/plugin.json`, `.cursor-plugin/plugin.json` e `gemini-extension.json` (o `marketplace.json` não traz versão);
- `metadata.version` no frontmatter de cada `skills/*/SKILL.md`;
- na maestra (`skills/lgpd/SKILL.md`, passo 1), a 1ª linha do modelo do marcador (`lgpd-skill <versão>`) e a versão com que o marcador lido é comparado;
- uma entrada nova no `CHANGELOG.md`.

Depois, crie a tag com `claude plugin tag`. Ao tornar o repositório público, ligue o reporte privado de vulnerabilidades do GitHub (Settings, Code security, Private vulnerability reporting) e confira se a aba **Security** mostra **Report a vulnerability** (ver `SECURITY.md`).
