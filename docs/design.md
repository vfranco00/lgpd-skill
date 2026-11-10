# Desenho: `lgpd-skill`

Data: 09/11/2026. Autor do desenho: Claude, a pedido do dono do repositório. Este documento registra o que foi decidido antes da construção; o estado atual está no README, na matriz de cobertura e no CHANGELOG.

## 1. Metas

1. **Cobertura completa.** As 92 exigências aparecem em `docs/matriz-de-cobertura.md` com a skill e o arquivo que as atendem. Exceção declarada: o Capítulo IV (Poder Público, arts. 23–32) entra só como referência para operadores que atendem órgãos públicos.
2. **Citação certa ou nenhuma.** Toda afirmação jurídica traz artigo, parágrafo e norma; toda norma tem entrada em `references/fontes.md` com URL oficial (planalto.gov.br, gov.br/anpd, in.gov.br) e a data em que foi conferida. Onde a ANPD ainda não regulou (direitos do titular, padrões mínimos de segurança, IA), a skill diz "não regulamentado" em vez de inventar. Citação que nenhuma conferência confirmou sai.
3. **Os dois papéis.** Controlador e operador têm roteiros próprios. O operador é o papel de quase toda software house.
4. **Atual em 09/11/2026**, com data de referência normativa no README e rotina de atualização (CHANGELOG e roteiro de revisão a cada norma nova da ANPD).
5. **Artefatos vivos e versionáveis** em `.lgpd/` no projeto do usuário, com pontos de parada que exigem revisão de advogado ou do encarregado antes de publicar.
6. **Qualidade comprovada**, não declarada: `claude plugin validate --strict`, `skills-ref validate`, evals com casos por skill e uma segunda conferência independente de todas as citações antes de qualquer versão pública.
7. **Instalável em qualquer agente**: plugin do Claude Code (marketplace no próprio repositório), Gemini CLI, e manifestos para Codex e Cursor; cópia simples da pasta `skills/` para os demais.

## 2. Não metas e antimetas

Não metas (v1):
- Não dá parecer jurídico nem substitui advogado ou encarregado; marca os pontos em que a revisão humana é obrigatória.
- Não cobre o GDPR nem mapeia LGPD × GDPR (candidato a referência futura).
- Não edita código do projeto sem pedido explícito; propõe, mostra e espera.
- Não cobre o Capítulo IV por inteiro (ver meta 1).
- Não traz integração com ferramentas pagas nem com serviços de terceiros.
- Não inclui plugin do OpenCode (exige código JavaScript).

Antimetas (o que faria o trabalho falhar mesmo "funcionando"):
- Inventar exigência (ex.: um número mínimo de titulares que a norma não fixa), parágrafo inexistente ou instituto que a lei não tem (ex.: uma consulta à ANPD antes de tratar os dados).
- Prazo ou nome vencido sem data (ex.: "Autoridade" em vez de "Agência Nacional de Proteção de Dados").
- Tratar quem usa a skill sempre como controlador.
- SKILL.md inchado: mais de 500 linhas ou explicação do que o agente já sabe.
- Qualquer empresa, produto, cliente ou pessoa real como exemplo; os exemplos são genéricos (uma clínica, um e-commerce, um SaaS B2B).

## 3. Restrições

- Formato: especificação aberta Agent Skills (`SKILL.md` com `name` igual ao nome da pasta, minúsculas e hífens, até 64 caracteres; `description` até 1024; `license`; `metadata`; `references/`, `assets/`, `scripts/` a um nível de profundidade; SKILL.md abaixo de 500 linhas).
- Empacotamento: `.claude-plugin/plugin.json` e `.claude-plugin/marketplace.json` na raiz do repositório, skills em `skills/`; nomes sem os prefixos reservados (`claude-`, `anthropic-`); a versão do plugin vai nos manifestos, no `metadata` das skills e no marcador da maestra, e o marketplace não a repete (a lista está no `CONTRIBUTING.md`).
- Idioma: português do Brasil no corpo das skills e dos artefatos; `description` com palavras-chave também em inglês para a descoberta; README em português com resumo em inglês.
- Licença MIT. Autoria: o dono do repositório (`vfranco00`).
- **Neutralidade**: nenhuma empresa, produto, cliente ou pessoa real como exemplo. **Provedores públicos podem ser nomeados** (AWS, Google Cloud, Microsoft, Vercel, Supabase, OpenAI, Anthropic e outros) quando o fato vem de documento oficial deles (DPA, adendo de cláusulas brasileiras, página de privacidade), listado em `references/fontes-fornecedores.md` com URL e data de conferência.
- Fontes: só texto oficial para afirmação jurídica; guias e enunciados da ANPD como orientação, sempre identificados como tal; fonte secundária (escritório, imprensa) nunca sustenta uma regra sozinha.

## 4. O que foi decidido (como se constrói)

### 4.1 Repositório `vfranco00/lgpd-skill`

```
lgpd-skill/
  .claude-plugin/plugin.json          # name lgpd-skill, version, license MIT, keywords
  .claude-plugin/marketplace.json     # name lgpd-skill, owner vfranco00, plugins[lgpd-skill] source ./
  .codex-plugin/plugin.json, .cursor-plugin/plugin.json, gemini-extension.json   # mesmos metadados
  skills/<name>/SKILL.md (+ references/, assets/, scripts/)
  docs/matriz-de-cobertura.md         # as 92 exigências → skill e arquivo
  docs/design.md                      # este documento
  evals/<caso>/case.yaml (+ prompt.md, graders/)   # previsto; a forma final está em evals/README.md
  scripts/verificar-fontes.sh         # confere que toda URL de references/fontes*.md responde
  .github/workflows/validar.yml       # claude plugin validate --strict, skills-ref validate, verificar-fontes
  README.md, LICENSE, CONTRIBUTING.md, CHANGELOG.md, SECURITY.md, .gitignore (evals/results/)
```

Instalação: `claude plugin marketplace add vfranco00/lgpd-skill` e `claude plugin install lgpd-skill@lgpd-skill`; nos outros agentes, pelo manifesto ou copiando `skills/` para a pasta de skills do agente. Testados de verdade antes da 1.0.0: Claude Code e Gemini CLI. Codex e Cursor: manifestos escritos pela documentação oficial de cada um e marcados no README como "não testados" até alguém confirmar.

### 4.2 As skills

Uma maestra e catorze especializadas. Cada uma fica abaixo de 500 linhas; o texto legal e os modelos vão para `references/` e `assets/`.

| Skill | Cobre | Exigências da matriz |
|---|---|---|
| `lgpd` | Entrada única: diagnóstico do projeto (novo ou em produção, controlador ou operador, pequeno porte ou não, alto risco ou não), roteiro em ordem, estado em `.lgpd/STATUS.md`, pontos de parada jurídica; dona de `references/fontes.md` e `fontes-fornecedores.md`, da data de referência normativa e da agenda e prioridades da ANPD; ao achar um `.lgpd/` criado por outra ferramenta, avisa e não toca em arquivo existente | roteamento, 69, 70, 85 |
| `lgpd-aplicacao-e-papeis` | arts. 1º a 5º; teste de aplicação territorial (arts. 3º e 4º); papel por atividade (controlador, operador, suboperador, controlador conjunto) com o Guia de Agentes de Tratamento; teste de agente de pequeno porte (Res. 2/2022, arts. 2º e 3º) e de alto risco (art. 4º, sem número de titulares); Capítulo IV como referência para quem atende órgão público | 1, 2, 29, 39, 66, 67, 73 |
| `lgpd-bases-legais` | arts. 7º a 13, com todos os parágrafos: 10 bases; consentimento (art. 8º inteiro); informações ao titular e condições do serviço (art. 9º, §§ 1º a 3º); legítimo interesse com LIA e o Guia da ANPD (2024); dado sensível (art. 11, inclusive §§ 3º a 5º, saúde); anonimização e pseudonimização (arts. 12 e 13), registrando que não há guia final da ANPD | 3–13, 75, 78 |
| `lgpd-criancas-e-adolescentes` | art. 14 completo; Enunciado CD/ANPD 1/2023 (qualquer base legal, melhor interesse); ECA Digital (Lei 15.211/2025: verificação de idade a cada acesso, vedada a autodeclaração, só para conteúdo impróprio, inadequado ou proibido para menores de 18 anos, art. 9º, § 1º; nos demais produtos direcionados a crianças e adolescentes ou de acesso provável por eles, experiência adequada à idade e recebimento do sinal de idade, arts. 10, 12 e 14; art. 16; arts. 17 a 35); Decreto 12.880/2026 (aferição proporcional ao risco do serviço, art. 24, I; sinal de idade; publicidade); Decreto 12.622/2025; guias da ANPD (fornecedores; orientações preliminares de aferição de idade), com as datas conferidas | 14, 71, 79–84, +ECA art. 16 |
| `lgpd-direitos-do-titular` | arts. 17 a 22 inteiros: 9 direitos; petição à ANPD e aos organismos de defesa do consumidor (art. 18, §§ 1º e 8º); oposição (§ 2º); pedido por representante e resposta "não sou o agente" (§§ 3º e 4º); gratuidade (§ 5º); aviso a quem recebeu os dados (§ 6º); portabilidade sem dado anonimizado (§ 7º); art. 19 (simplificado na hora, completo em 15 dias; formatos; cópia integral do § 3º); art. 20 (revisão, critérios, auditoria); art. 21; "regulamento de direitos ainda não publicado" | 17–28 |
| `lgpd-mapeamento-e-registro` | inventário e fluxos de dados; registro das operações (art. 37) para controlador e operador; modelo simplificado da ANPD (14/06/2023) | 36, 77 |
| `lgpd-relatorio-de-impacto` | art. 38; quando a ANPD pode determinar ou pedir o relatório (art. 38; legítimo interesse, art. 10, § 3º; depois de incidente, Res. 15/2024, art. 8º); alto risco da Res. 2/2022, art. 4º, só como referência, e larga escala sem número de corte; a LGPD não manda fazê-lo por iniciativa própria, e o relatório para tratamento de alto risco do art. 55-J, XIII, não está regulamentado pela ANPD até 09/11/2026; conteúdo mínimo; modelo; sem "consulta prévia" | 37 |
| `lgpd-operador-e-contratos` | art. 39 (operador segue instruções; controlador verifica); art. 42 (solidariedade, equiparação do operador, regresso, inversão do ônus); arts. 43 a 45; acordo de operador nos dois sentidos (quando a equipe é contratada e quando contrata); suboperador; devolução e eliminação ao fim; diligência de fornecedor, com os provedores públicos nomeados e seus documentos; aviso do operador ao controlador em incidente | 38, 45–48, 60 |
| `lgpd-encarregado-e-governanca` | art. 41 e Res. 18/2024 inteira (ato formal, divulgação, substituto, operador facultativo, meios e autonomia, atividades, conflito de interesses nos arts. 18 a 21); Guia do Encarregado (dez/2024) com modelo de ato; programa de governança (art. 50, 8 requisitos; art. 51); deveres na fiscalização (Res. 1/2021, arts. 5º e 6º); sanções e dosimetria (arts. 52 a 54; Res. 4/2023), com aviso das consultas de 2026; política simplificada de segurança do pequeno porte (Res. 2/2022, arts. 12 e 13) e demais flexibilizações (arts. 9º, 11, 14 e 15) | 40–44, 62–65, 68, 76, +Res. 2 arts. 12–13 |
| `lgpd-medidas-de-seguranca` | arts. 46, 47 e 49; Guia de Segurança da ANPD para pequeno porte (medidas administrativas e técnicas); criptografia e chaves; registro de auditoria sem dado pessoal; pseudonimização; "padrões mínimos da ANPD ainda não publicados" | 49, 50, 61, 72 |
| `lgpd-incidentes` | art. 48 inteiro (§§ 2º e 3º); Res. 15/2024 inteira: quando comunicar (art. 5º), 3 dias úteis e 12 itens (art. 6º), formulário e envio pelo encarregado ou procurador (§§ 4º a 7º), sigilo (art. 7º), o que a ANPD pode pedir (art. 8º), aviso ao titular e aviso coletivo (art. 9º), declaração em 3 dias úteis (§ 4º), registro por, no mínimo, 5 anos (art. 10), divulgação ampla (art. 19); prazos em dobro para pequeno porte, sem a exceção da redação original do art. 14, II, da Res. 2/2022 (integridade física ou moral dos titulares, segurança nacional), retirada pela Res. 15/2024; roteiro do operador | 51–59 |
| `lgpd-retencao-e-eliminacao` | arts. 15 e 16 com as hipóteses; tabela de guarda legal conferida (Marco Civil, arts. 13 e 15, e o Decreto 12.975/2026; prontuário por no mínimo 20 anos, Lei 13.787/2018, art. 6º; fiscal e previdenciário até a prescrição); prescrição trabalhista e do consumidor como risco, não como dever de guarda; técnicas de eliminação, inclusive em backup | 15, 16, 88–90 |
| `lgpd-transferencia-internacional` | arts. 33 a 36; Res. 19/2024 inteira (coleta direta do exterior, art. 6º; cláusulas sem alteração e a retificação de 18/08/2025; transparência do art. 17 com os 6 itens e a íntegra em 15 dias; cláusulas específicas e normas corporativas globais); Res. 32/2026 (UE adequada, com transferências autorizadas também para Islândia, Liechtenstein e Noruega; reavaliação em 4 anos) e a decisão europeia correspondente, se confirmada; roteiro para nuvens e provedores de modelo nos EUA, por nome, com o documento de cada um | 30–35 |
| `lgpd-transparencia-e-politicas` | art. 9º (7 informações, inclusive responsabilidades dos agentes); aviso de privacidade para consumidor e para B2B; cookies (Guia da ANPD, 2022); aviso de transferência da Res. 19; transparência do ECA Digital; canal do encarregado; versionamento | 7, 74 |
| `lgpd-ia-e-decisoes-automatizadas` | art. 20 aplicado a IA; princípios do art. 6º no treino e no uso; base legal e oposição no treino de modelos (posições da ANPD nos casos de 2024); transparência de agentes de IA; RIPD para IA; Tema 4 do Mapa 2026-2027 (Res. 30/2025); provedores de modelo nomeados, com os termos de cada um sobre treino e retenção; "não há lei de IA" (PL 2.338/2023) | 27, 86, 87 |

### 4.3 Artefatos em `.lgpd/` no projeto do usuário

Os caminhos de cada artefato estão na tabela "Artefatos em `.lgpd/`" da skill `lgpd`. Cada arquivo nasce de um modelo em `assets/` e traz, no topo, "revisão jurídica: pendente" até alguém marcar como revisado. A maestra grava um marcador `.lgpd/.lgpd-skill` e nunca sobrescreve arquivo que não tenha criado.

Pontos de parada obrigatórios (a skill produz e para): publicar política ou aviso; assinar acordo de operador; comunicar incidente à ANPD; aprovar relatório de impacto; definir prazo de retenção.

### 4.4 Base normativa e conferência

- `skills/lgpd/references/fontes.md`: uma linha por norma (nome, número, data, situação, URL oficial, data da conferência). `fontes-fornecedores.md`: uma linha por documento de provedor público. As demais skills apontam para elas.
- Regra de contribuição: nenhuma citação entra sem a linha correspondente.
- Antes de qualquer versão pública, uma conferência independente lê cada citação contra o texto oficial.

### 4.5 Testes

- Linha de base antes de escrever cada skill: um agente sem a skill responde ao cenário; o que ele erra vira o alvo da skill.
- `evals/`: ao menos um caso por skill, com graders `tool_used: Skill` e `regex` para citações certas e ausência das erradas (ex.: contém "3 dias úteis"; não contém "2 milhões"); nada de grader `llm`. Os evals ficam escritos e validados na sintaxe, mas **não são executados** pelo autor, porque custam; quem instalar pode rodá-los por conta própria. O teste de comportamento antes da publicação: um agente responde ao cenário sem a skill (linha de base), depois com a skill, e um leitor independente confere cada citação na fonte oficial.
- CI (só ferramentas gratuitas): `claude plugin validate --strict`, `skills-ref validate` em cada skill e `scripts/verificar-fontes.sh` (previsto; a forma final está em `.github/workflows/validar.yml`).

### 4.6 Versões

`0.1.0` na primeira versão, privada. `1.0.0` quando o repositório ficar público, depois da conferência independente. Tags com `claude plugin tag`.

## 5. O que fica a critério da implementação

- A redação de cada SKILL.md e dos modelos, dentro dos limites de tamanho.
- A divisão interna de `references/` (um arquivo por norma ou por tema).
- O exemplo de código dos direitos do titular (um só, em uma linguagem).
- Formato exato dos modelos em `assets/` (Markdown simples).
- Os casos de eval além do mínimo de um por skill.
- Como o Gemini CLI é testado (instalação da pasta `skills/` ou extensão).

## 6. Escolhas do desenho

- Nomes das skills em português com prefixo `lgpd-`; a maestra se chama `lgpd`.
- Pasta de artefatos `.lgpd/` com marcador próprio e sem sobrescrever arquivos alheios.
- Provedores públicos nomeados quando o fato vem do documento oficial deles.
- Autoria `vfranco00`.
- Capítulo IV só como referência.
- Codex e Cursor com manifestos "não testados"; OpenCode fora da v1.
- Primeira versão, `0.1.0`, privada.
