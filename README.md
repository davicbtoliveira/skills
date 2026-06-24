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
| `diagnose` | Disciplined diagnosis loop for bugs and performance regressions |
| `find-skills` | Discover and install skills from the skills ecosystem |
| `git-skill` | Conventional commit message generation with intelligent staging |
| `improve-codebase-architecture` | Find deepening opportunities, present visual reports |
| `mcp-builder` | Build MCP servers for LLM tool integration |
| `prototype` | Build throwaway prototypes to flesh out designs |
| `setup-matt-pocock-skills` | Configure issue tracker, triage labels, and domain docs |
| `skill-creator` | Create, edit, and evaluate agent skills |
| `tdd` | Red-green-refactor test-driven development |
| `to-issues` | Break plans into independently-grabbable issues |
| `to-prd` | Turn conversation context into a PRD |
| `triage` | Issue triage through a state machine |
| `webapp-testing` | Test local web apps with Playwright |
| `web-artifacts-builder` | Build complex HTML artifacts with React/ Tailwind/shadcn |
| `write-a-skill` | Create new skills with proper structure |

### Productivity

| Skill | Description |
|-------|-------------|
| `caveman` | Ultra-compressed communication mode |
| `doc-coauthoring` | Structured workflow for co-authoring docs |
| `grill-me` | Relentless interview on a plan until resolution |
| `grill-with-docs` | Grilling session that builds domain model and ADRs |
| `handoff` | Compact conversation into a handoff document |
| `zoom-out` | Get broader context and higher-level perspective |

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
| `omarchy` | Linux desktop and system configuration |
| `plannotator-annotate` | Open Plannotator annotation UI for plans |
| `plannotator-compound` | Analyze plan archives and generate dashboards |
| `plannotator-last` | Open Plannotator on the latest message |
| `plannotator-review` | Open Plannotator code review UI |

## Usage

After installation, invoke a skill in OpenCode by typing its name in the prompt, e.g. `/grill-me` or `/tdd`. Skills with model-invoked roles are automatically activated by OpenCode when relevant.

## License

MIT — each skill may include its own LICENSE.txt.
