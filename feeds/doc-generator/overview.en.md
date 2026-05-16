## v0.3 Positioning Note

This Feed is an optimized prompt seed, not a deterministic protocol, installer, or executable package. Use it with a high-capability reasoning model and review before allowing the agent to modify files, create Skills, call APIs, deploy, or touch sensitive data.

**Feed type**: Workflow Feed


# 📚 [Prompt Seed] Doc Generator

### 📄 Module Overview
This significantly makes the agent more stable, precise, and less prone to guessing in planning, tool usage, response structuring, and result verification. This feed pack (Prompt Seed) serves exclusively to **safely and accurately reverse-engineer documentation**. It upgrades your agent into a meticulous Technical Writer. By interlacing a "careful reasoning workflow," it compels the agent to perform an exhaustive source-code scan and structural rehearsal prior to generating APIs or READMEs, thoroughly annihilating common "documentation hallucinations."

### ⚙️ Skill Synergy
- **Recommended Skills**: `list_dir`, `view_file`, `write_to_file`
- **Synergy Effect**: Closely binds file-reading tools with text-generation logic. Every write operation is watched with a hawk's eye by the loop's `Inspect First` and `Verify` branches—refusing to permit blind guesses regarding class or method parameters.

### 🚀 Use Case and Expected Behavior
1. **Conditional Branches**: Confronted with obfuscated code or absent pivotal comments, it forces the Clarification Branch to interrogate the developer rather than fabricating spurious variable titles.
2. **Mandatory Verify**: Prior to generating the Markdown, it dictates a rigorous regression securing that every documented function signature aligns closely with the raw source files.
3. **Check Tooling**: As a preliminary strike, it audits whether its faculties can successfully traverse the codebase's AST (Abstract Syntax Tree) and absorb the localized Domain Knowledge.
4. **Pervasive Scope**: Perpetually maintains dominance when addressing non-trivial tasks spanning standardizations, API manual compositions, or Changelog distributions.

### 📋 Recommended Models
- **Recommended**: Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **Minimum**: Gemini 3.1 Flash / GPT-5.1
