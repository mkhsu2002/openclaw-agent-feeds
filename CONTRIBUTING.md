# Contributing to OpenClaw Agent Feeds

Thank you for considering contributing to OpenClaw Agent Feeds. v0.3 positions Feeds as optimized prompt seeds for high-capability AI agents.

## Have an idea or found a bug?
Have an idea for a new feed, refinement, or category? **[Open an issue first](https://github.com/mkhsu2002/openclaw-agent-feeds/issues)**. 
We love discussing ideas before anyone writes too much code or documentation.

## What kind of Feeds will be accepted?
We are building a practical prompt seed library, not a random prompt collection. A Feed must follow these design principles:
1. It **improves behavior**, not just tone.
2. It **reduces hallucination** and guesswork natively.
3. It **encourages safe, minimal changes**.
4. It **works with OpenClaw skills/plugins** instead of replacing them.
5. It **stays readable and reusable**.
6. It is honest about model-dependent behavior.
7. It does not claim to be deterministic, executable, or self-installing.

If your Feed is simply "Act like a pirate" or "Write a poem," it belongs elsewhere. If it helps an agent understand intent, inspect a workspace, propose safe changes, and generate useful Skills, instructions, checklists, or workflows, it belongs here.

## Feed Directory Structure
When contributing a new feed, please place it under `feeds/your-feed-name/`. A standard feed directory requires core files:
- `README.md` (bilingual summary and Feed type)
- `feed.md` (the v0.3 recommended Feed prompt structure)
- `overview.md` (Traditional Chinese overview)
- `overview.en.md` (English overview)
- `installation_guide.md` (Traditional Chinese copy-paste Feed prompt)
- `installation_guide.en.md` (English copy-paste Feed prompt)

## Structure & Naming Conventions
- **Directory names**: `kebab-case` (e.g., `semantic-memory-boost`)
- **Feed Title**: Specify its type, such as `[Baseline Feed]`, `[Skill-Building Feed]`, `[Workspace Bootstrapping Feed]`, `[Workflow Feed]`, `[Domain Expert Feed]`, `[Safety Feed]`, or `[Cross-Agent Feed]`.
- **Prompt Seed Format**: Follow `docs/feed-format.md` where practical. Use sections such as Purpose, Recommended Agent / Model Level, User Intent, Expected Agent Behavior, Workspace Inspection Guidance, Skill-Building Guidance, Safety Guidance, Suggested Output, and Feed Prompt.

## PR Pre-Checklist
Before submitting a Pull Request, please self-audit:
- [ ] Does your Feed clearly describe the user intent?
- [ ] Does it explain what the agent should inspect before making changes?
- [ ] Does it clarify when to create or update Skills, instructions, checklists, or workflows?
- [ ] Does it include safety guidance and user review points?
- [ ] Does it avoid deterministic, installer, runtime, or executable-package claims?
- [ ] Are English and Traditional Chinese documents synchronized?
- [ ] Are Markdown headers and styles consistent with the rest of the repository?

Thank you for helping make AI agent work more practical, honest, and safe.
