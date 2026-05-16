# OpenClaw Agent Feeds

Optimized prompt seeds for building better AI agent skills, instructions, and workflows.

OpenClaw Skills teach agents what they can do.
Agent Feeds help users explain what they want the agent to understand, consider, build, and avoid.

A Feed is a carefully designed prompt seed intended for high-capability AI agent sessions. It helps the agent interpret user intent, inspect the current workspace, reason about the safest and most useful implementation path, and generate or update Skills, instructions, settings, checklists, or workflows when appropriate.

Feeds are not protocols, installers, or executable packages. They are prompt-based communication seeds between human intent and agent execution.

Current version: **v0.3**

Official site: [https://openclawfeeds.icareu.tw/](https://openclawfeeds.icareu.tw/)

## What is a Feed?

A Feed is an optimized prompt seed for a capable AI agent. It gives the agent structured context about the user's goal, constraints, desired workflow, safety expectations, and skill-building intent.

Feeds can help an agent:

- inspect a workspace before proposing changes
- decide whether an existing Skill, instruction file, checklist, or workflow should be used
- propose new Skills or updates to existing Skills
- convert fuzzy goals into concrete plans
- document assumptions, risks, and review steps
- create safer task kickoff prompts for agentic work

Feeds remain prompts. Their behavior depends on the model, tools, workspace context, and user review.

## What Feeds Are Not

Feeds are not deterministic protocols.
Feeds are not automatic installers.
Feeds are not replacements for OpenClaw Skills.
Feeds are not guaranteed to produce identical results across different models.
Feeds are not meant to bypass user review.

A Feed is an optimized prompt seed. It works best when interpreted by a capable reasoning model inside an agent environment with appropriate tools and context.

## Why Feeds Matter Even When Skills Exist

Skills are capability packages.
Feeds are prompt seeds that help agents decide how to create, update, combine, or use capabilities.

Skills answer:
**What can the agent do?**

Feeds answer:
**How should the agent understand this task, inspect the environment, decide what capabilities are needed, and safely build or use them?**

A Feed may lead to:

- new Skills
- updated Skills
- `AGENTS.md` instructions
- workspace rules
- setup checklists
- safety checklists
- task templates
- recurring workflows
- documentation updates

But Feeds themselves remain prompts.

## Recommended Model Level

Feeds work best with high-capability reasoning models.

A Feed is not deterministic. Different LLMs may react differently to the same Feed.

For best results:

- use a strong reasoning model when installing or interpreting a Feed
- use a strong reasoning model when generating or modifying Skills
- use lower-cost or local models only after the Feed has been converted into stable instructions, checklists, or Skills
- always review generated Skills before allowing them to execute commands, modify files, call APIs, or access external services

Do not assume every model will follow a Feed equally well. Treat model-dependent behavior as normal and review important outputs carefully.

## OpenClaw Usage

OpenClaw is the primary target environment for this repository. Public OpenClaw docs describe a workspace model, Skills, ClawHub skill discovery and install flows, plugins, channels, and security review around skills and tool access.

Recommended flow:

1. Start a high-capability OpenClaw session.
2. Paste the Feed.
3. Ask OpenClaw to inspect the current workspace.
4. Ask OpenClaw to propose a plan before editing.
5. Review proposed Skill, instruction, checklist, or workflow changes.
6. Approve safe changes only.
7. Test the generated Skill or workflow.
8. Commit changes with a clear changelog entry.

See [OpenClaw usage](docs/openclaw-usage.md).

## Hermes Agent Usage

Hermes Agent compatibility is exploratory and conceptual unless verified in a real Hermes environment.

Hermes public materials emphasize learning loops, memory, skill creation from experience, and long-running agent behavior. Feed-style prompts may be useful as goal seeds, self-improvement seeds, skill-building prompts, or workflow bootstrapping prompts.

Do not claim native Hermes support for a Feed until it has been tested. See [Hermes Agent notes](docs/hermes-agent-notes.md).

## Codex and IDE Agent Usage

Codex can use `AGENTS.md` for repo-level guidance. Feeds can be adapted into `AGENTS.md` sections, setup prompts, task kickoff prompts, or review checklists, but they are not the same thing as `AGENTS.md`.

For IDE agents such as Codex, Claude Code, Cursor, Windsurf, Devin, GitHub Copilot coding agents, Gemini CLI, and similar tools, compatibility depends on workspace access, instruction loading, tool support, and model reasoning quality.

See [Codex and IDE agents](docs/codex-and-ide-agents.md).

## Feed Types

- **Baseline Feed**: general behavior tuning, safety, and reasoning discipline
- **Skill-Building Feed**: helps an agent create or improve Skills
- **Workspace Bootstrapping Feed**: helps an agent inspect and prepare a workspace
- **Workflow Feed**: helps create repeatable workflows
- **Domain Expert Feed**: communicates domain-specific operating assumptions
- **Safety Feed**: adds review, confirmation, rollback, and risk controls
- **Cross-Agent Feed**: designed for multiple agent environments

## Recommended Feed Format

Each Feed should be lightweight and practical:

- Purpose
- Recommended Agent / Model Level
- User Intent
- Best Used With
- Expected Agent Behavior
- Workspace Inspection Guidance
- Skill-Building Guidance
- Safety Guidance
- Suggested Output
- Feed Prompt

See [Feed format](docs/feed-format.md).

## Safety and Review

Feeds may cause high-capability agents to propose or perform significant changes. Users should review before deleting files, rewriting architecture, installing dependencies, running shell commands, accessing credentials, calling external APIs, writing to databases, deploying to production, publishing packages, pushing to main, modifying security settings, or modifying billing and payment systems.

Recommended behavior: inspect first, plan before edit, show changed files, explain risks, ask confirmation for high-risk operations, provide rollback guidance, avoid hidden mutations, do not fabricate tool results, and do not claim changes were made unless verified.

See [Safety and review](docs/safety-and-review.md).

## Repository Structure

```text
.
├── index.html
├── assets/
│   ├── css/style.css
│   └── js/main.js
├── feeds/
│   ├── packs.json
│   └── <feed-id>/
│       ├── README.md
│       ├── feed.md
│       ├── overview.md
│       ├── overview.en.md
│       ├── installation_guide.md
│       └── installation_guide.en.md
├── docs/
│   ├── feed-format.md
│   ├── openclaw-usage.md
│   ├── agent-compatibility.md
│   ├── hermes-agent-notes.md
│   ├── codex-and-ide-agents.md
│   ├── safety-and-review.md
│   └── roadmap.md
└── CHANGELOG.md
```

## Roadmap

See [Roadmap](docs/roadmap.md).

## Version v0.3 Notes

v0.3 repositions OpenClaw Agent Feeds as optimized prompt seeds for high-capability AI agents. The update clarifies the relationship between Feeds and Skills, adds model capability guidance, expands compatibility notes for OpenClaw, Hermes Agent, Codex, and IDE agents, and unifies English and Traditional Chinese documentation.

## Sources Used for v0.3 Alignment

- [OpenClaw docs](https://openclawdoc.com/)
- [OpenClaw ClawHub docs](https://docs.openclaw.ai/tools/clawhub)
- [Hermes Agent learning loop](https://hermes-agent.ai/features/learning-loop)
- [Codex AGENTS.md guide](https://developers.openai.com/codex/guides/agents-md)

[繁體中文](README.zh-TW.md) | [MIT License](LICENSE)
