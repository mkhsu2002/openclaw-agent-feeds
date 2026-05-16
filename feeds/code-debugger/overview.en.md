## v0.3 Positioning Note

This Feed is an optimized prompt seed, not a deterministic protocol, installer, or executable package. Use it with a high-capability reasoning model and review before allowing the agent to modify files, create Skills, call APIs, deploy, or touch sensitive data.

**Feed type**: Workflow Feed


# 🐛 [Prompt Seed] Code Debugger Agent

### 📄 Module Overview
This significantly makes the agent more stable, precise, and less prone to guessing in planning, tool usage, response structuring, and result verification. This feed pack (Prompt Seed) arms your agent with the **systematic debugging mindset** of a senior software engineer. By interweaving a "careful reasoning workflow," it compels the agent to adhere to rigorous tracing, backup, and Minimal Diff disciplines BEFORE altering any broken code, neutralizing the "fixing one bug to create another" chain reaction.

### ⚙️ Skill Synergy
- **Recommended Skills**: `run_command`, `replace_file_content`, `grep_search`
- **Synergy Effect**: Seamlessly meshes file alteration scripts with terminal-based testing tools. Every `replace_file_content` action is stringently guarded by the `Verify` (running debug routines) and `Rollback` branches of the decision loop.

### 🚀 Use Case and Expected Behavior
1. **Conditional Branches**: When errors are unreproducible, forcefully activates the Clarification Branch to exact full logs; invokes retry and reversion cycles should a patch fail validation.
2. **Mandatory Verify**: Immediately following code insertion, forcibly executes (or requests execution of) a Linter or Unit Test to secure absolute confirmation that the error was excised.
3. **Check Tooling**: Primarily audits the environment for Search and Read/Write authority; intervening is denied if permissions fall short.
4. **Pervasive Scope**: Assumes authority over all non-trivial tasks involving debugging, architectural patches, and systemic error resolutions.

### 📋 Recommended Models
- **Recommended**: Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **Minimum**: Gemini 3.1 Flash / GPT-5.1
