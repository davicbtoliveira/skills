# My agent's skills

Agent skills for [OpenCode](https://opencode.ai), sourced from `~/.agents/skills/`.

## Install

```sh
npx skills@latest add davicbtoliveira/skills
```

The Vercel Skills CLI detects all skills, prompts for selection, and installs them into `~/.agents/skills/`.

## Skills

### Engineering

| Skill | Description |
|-------|-------------|
| `codebase-design` | Shared vocabulary for designing deep modules |
| `design-an-interface` | Generate multiple interface designs via parallel sub-agents |
| `diagnose` | Disciplined diagnosis loop for bugs and performance regressions |
| `diagnosing-bugs` | Diagnosis loop for hard bugs and performance regressions |
| `domain-modeling` | Build and sharpen a project's domain model |
| `find-skills` | Discover and install skills from the ecosystem |
| `git-guardrails-claude-code` | Dangerous git command guardrails for Claude Code |
| `git-skill` | Conventional commit message generation with intelligent staging |
| `implement` | Implement work based on a PRD or set of issues |
| `improve-codebase-architecture` | Find deepening opportunities, present visual reports |
| `mcp-builder` | Build MCP servers for LLM tool integration |
| `migrate-to-shoehorn` | Migrate `as` type assertions to @total-typescript/shoehorn |
| `prototype` | Build throwaway prototypes to flesh out designs |
| `request-refactor-plan` | Create detailed refactor plans with tiny commits |
| `resolving-merge-conflicts` | Resolve in-progress git merge/rebase conflicts |
| `scaffold-exercises` | Create exercise directory structures for courses |
| `setup-matt-pocock-skills` | Configure issue tracker, triage labels, and domain docs |
| `setup-pre-commit` | Set up Husky pre-commit hooks with lint-staged and testing |
| `skill-creator` | Create, edit, and evaluate agent skills |
| `tdd` | Red-green-refactor test-driven development |
| `to-issues` | Break plans into independently-grabbable issues |
| `to-prd` | Turn conversation context into a PRD |
| `triage` | Issue triage through a state machine |
| `ubiquitous-language` | Extract DDD-style glossary from conversation |
| `webapp-testing` | Test local web apps with Playwright |
| `web-artifacts-builder` | Build complex HTML artifacts with React/Tailwind/shadcn |
| `write-a-skill` | Create new skills with proper structure |

### Productivity

| Skill | Description |
|-------|-------------|
| `ask-matt` | Route to the right skill for your situation |
| `caveman` | Ultra-compressed communication mode |
| `decision-mapping` | Turn ideas into sequenced investigation tickets |
| `doc-coauthoring` | Structured workflow for co-authoring docs |
| `edit-article` | Restructure and tighten article prose |
| `grill-me` | Relentless interview on a plan until resolution |
| `grill-with-docs` | Grilling session that builds domain model and ADRs |
| `grilling` | Interview the user relentlessly about a plan or design |
| `handoff` | Compact conversation into a handoff document |
| `qa` | Interactive QA session that files GitHub issues |
| `review` | Review code against standards and spec in parallel |
| `teach` | Teach the user a new skill or concept |
| `zoom-out` | Get broader context and higher-level perspective |
| `writing-beats` | Shape articles as a journey of beats |
| `writing-fragments` | Mine the user for raw material fragments |
| `writing-great-skills` | Reference for writing and editing skills well |
| `writing-shape` | Shape raw material into publishable articles |

### Design & Creative

| Skill | Description |
|-------|-------------|
| `algorithmic-art` | Generative art with p5.js and seeded randomness |
| `brand-guidelines` | Apply official brand colors and typography |
| `canvas-design` | Create visual art in PNG/PDF documents |
| `frontend-design` | Distinctive UI visual design guidance |
| `slack-gif-creator` | Animated GIFs optimized for Slack |
| `theme-factory` | Theme artifacts with 10 preset themes |

### Document & File

| Skill | Description |
|-------|-------------|
| `docx` | Create, edit, and manipulate Word documents |
| `internal-comms` | Internal comms formats (reports, newsletters, FAQs) |
| `pdf` | Read, merge, split, OCR, and convert PDFs |
| `pptx` | Create and edit PowerPoint presentations |
| `xlsx` | Create, read, and edit spreadsheets |

### Other

| Skill | Description |
|-------|-------------|
| `claude-api` | Reference for Claude API / Anthropic SDK |
| `obsidian-vault` | Search, create, and manage Obsidian vault notes |
| `omarchy` | Linux desktop and system configuration |
| `plannotator-annotate` | Open Plannotator annotation UI for plans |
| `plannotator-compound` | Analyze plan archives and generate dashboards |
| `plannotator-last` | Open Plannotator on the latest message |
| `plannotator-review` | Open Plannotator code review UI |

## Usage

After installation, invoke a skill in OpenCode by typing its name in the prompt, e.g. `/grill-me` or `/tdd`. Skills with model-invoked roles are automatically activated by OpenCode when relevant.

## Repository structure

```
skills/
├── engineering/       (27 skills)
├── productivity/      (17 skills)
├── design-creative/   (6 skills)
├── document-file/     (5 skills)
└── other/            (7 skills)
```

## License

MIT — each skill may include its own LICENSE.txt.
