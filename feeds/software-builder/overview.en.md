## v0.3 Positioning Note

This Feed is an optimized prompt seed, not a deterministic protocol, installer, or executable package. Use it with a high-capability reasoning model and review before allowing the agent to modify files, create Skills, call APIs, deploy, or touch sensitive data.

**Feed type**: Skill-Building Feed


# 🏗 [Prompt Seed] Software Project Architect

### 📄 Module Overview
This significantly makes the agent more stable, precise, and less prone to guessing in planning, tool usage, response structuring, and result verification.

This feed pack (Prompt Seed) is designed specifically for **safely generating and modifying project architecture**. It upgrades your agent into a senior engineer equipped with a "fool-proof decision loop." Before writing any code, it must pass through extremely rigorous Assess, Backup, Minimal Diff, and Validation flows, completely eliminating the tragedy of breaking standard projects.

### ⚙️ Skill Synergy
- **Recommended Skills**: `run_command`, `replace_file_content`, `list_dir`
- **Synergy Effect**: Integrates file modification tools with a strict vetting decision loop. All `write`/`replace` actions are tightly monitored by the `Verify` and `Rollback` branches of the decision loop.

### 🚀 Use Case and Expected Behavior
1. **Validation Loop**: After finalizing modifications, it must summon Linters or compile tests. Failure directly triggers the Rollback-Ready mechanism.
2. **Conditional Branches**: Triggers the Clarification Branch to suspend actions upon discovering vague package dependencies or unclear project structures.
3. **Check Capability**: Strictly assesses whether it holds sufficient contextual understanding before executing a Minimal Diff.
4. **Pervasive Scope**: Applicable to all non-trivial tasks involving file creation, modification, or code writing.

### 📋 Recommended Models
- **Recommended**: Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **Minimum**: Gemini 3.1 Flash / GPT-5.1
