## v0.3 Positioning Note

This Feed is an optimized prompt seed, not a deterministic protocol, installer, or executable package. Use it with a high-capability reasoning model and review before allowing the agent to modify files, create Skills, call APIs, deploy, or touch sensitive data.

**Feed type**: Baseline Feed


# 🛡 [Prompt Seed] Universal Core Feed (L0)

### 📄 Module Overview
This significantly makes the agent more stable, precise, and less prone to guessing in planning, tool usage, response structuring, and result verification.

This feed pack (Prompt Seed) serves as the baseline operating layer for all OpenClaw agents. It adds a "careful reasoning workflow" logic into any workspace, providing not just standard operations, but critical defense mechanisms including Failure, Clarification, and Validation branches. It sets the global behavioral guardrails for all non-trivial tasks without causing destructive modifications to workspace files.

### ⚙️ Skill Synergy
- **Recommended Skills**: Universally applicable to any Skills/Plugins ecosystem.
- **Synergy Effect**: Acting as a baseline guardrail, this guidance doesn't interfere with specific tools. However, it mandates that before and after any execution (tooling, modification, or external calls), the agent must pass through the loop of "Assess" and "Verify", strictly avoiding blind execution.

### 🚀 Use Case and Expected Behavior
1. **Conditional Branches (Decision Loop)**: Breaks free from linear thinking by adding a complete decision tree including clarification, validation, and failure-retries.
2. **Pervasive Scope**: Mandated to be strictly observed in all non-trivial tasks, not merely "complex problems."
3. **Mandatory Verify**: A forced self-check (Verify) phase must be executed before/after outputting or acting.
4. **Silent Residency**: Once loaded, it operates silently without triggering meaningless conversational confirmations, maintaining high professionalism.

### 📋 Recommended Models
- **Recommended**: Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **Minimum**: Gemini 3.1 Flash / GPT-5.1
