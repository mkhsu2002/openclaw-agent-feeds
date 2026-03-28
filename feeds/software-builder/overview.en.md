# 🏗 [Mutation Feed] Software Project Architect

### 📄 Module Overview
This significantly makes the agent more stable, precise, and less prone to guessing in planning, tool usage, response structuring, and result verification.

This feed pack (Mutation Feed) is designed specifically for **safely generating and modifying project architecture**. It upgrades your agent into a senior engineer equipped with a "fool-proof decision loop." Before writing any code, it must pass through extremely rigorous Assess, Backup, Minimal Diff, and Validation flows, completely eliminating the tragedy of breaking standard projects.

### ⚙️ Skill Synergy
- **Recommended Skills**: `run_command`, `replace_file_content`, `list_dir`
- **Synergy Effect**: Integrates file modification tools with a strict vetting decision loop. All `write`/`replace` actions are tightly monitored by the `Verify` and `Rollback` branches of the decision loop.

### 🚀 Mutation Protocol
1. **Validation Loop**: After finalizing modifications, it must summon Linters or compile tests. Failure directly triggers the Rollback-Ready mechanism.
2. **Conditional Branches**: Triggers the Clarification Branch to suspend actions upon discovering vague package dependencies or unclear project structures.
3. **Check Capability**: Strictly assesses whether it holds sufficient contextual understanding before executing a Minimal Diff.
4. **Pervasive Scope**: Applicable to all non-trivial tasks involving file creation, modification, or code writing.

### 📋 Recommended Models
- **Recommended**: Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **Minimum**: Gemini 3.1 Flash / GPT-5.1
