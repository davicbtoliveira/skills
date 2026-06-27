# My agent's skills

Agent skills for [OpenCode](https://opencode.ai), sourced from `~/.agents/skills/`.

## Install

```sh
npx skills@latest add davicbtoliveira/skills
```

The Vercel Skills CLI detects all skills, prompts for selection, and installs them into `~/.agents/skills/`.

## Skills

| Skill | Description |
|-------|-------------|
| `caveman` | Ultra-compressed communication mode |
| `diagnose` | Disciplined diagnosis loop for bugs and performance regressions |
| `diagnosing-bugs` | Diagnosis loop for hard bugs and performance regressions |
| `frontend-design` | Guidance for distinctive, intentional visual design |
| `git-skill` | Conventional commit message generation with intelligent staging |
| `grill-me` | Relentless interview to sharpen a plan or design |
| `grill-with-docs` | Grilling session that builds ADRs and a glossary |
| `grilling` | Interview the user relentlessly about a plan or design |
| `handoff` | Compact a conversation into a handoff document |
| `implement` | Implement work based on a PRD or set of issues |
| `improve-codebase-architecture` | Find deepening opportunities and present a visual report |
| `karpathy` | Behavioral guidelines to reduce common LLM coding mistakes |
| `obsidian-vault` | Search, create, and manage notes in the Obsidian vault |
| `omarchy` | Linux desktop and system configuration (Hyprland, waybar, etc.) |
| `plannotator-annotate` | Open Plannotator annotation UI for a plan or file |
| `plannotator-compound` | Analyze Plannotator archives and generate dashboards |
| `plannotator-last` | Open Plannotator on the latest rendered message |
| `plannotator-review` | Open Plannotator code review UI |
| `tdd` | Red-green-refactor test-driven development |
| `to-issues` | Break a plan into independently-grabbable issues |
| `to-prd` | Turn a conversation into a PRD |
| `triage` | Move issues through a triage state machine |
| `web-artifacts-builder` | Build complex HTML artifacts with React/Tailwind/shadcn |

## Repository structure

```
skills/
└── <skill-name>/
    └── SKILL.md
```

Each skill is a flat directory containing `SKILL.md` (required) plus optional scripts, references, and assets.

## License

MIT — each skill may include its own `LICENSE.txt`.
