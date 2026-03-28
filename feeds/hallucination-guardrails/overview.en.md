# 🛡 [Training Feed] Hallucination Guardrails

### 📄 Module Overview
This significantly makes the agent more stable, precise, and less prone to guessing in planning, tool usage, response structuring, and result verification.

This feed pack (Training Feed) specializes in **fact-checking and hallucination defense**. It injects an "Evidentiary First" Guarded Decision Loop into your OpenClaw workspace, forcing the agent into strict cross-validation loops when handling tasks involving specific data, proper nouns, or historical facts. Fiction and fabrication are strictly prohibited.

### ⚙️ Skill Synergy
- **Recommended Skills**: `search_web`, `read_url`
- **Synergy Effect**: Before executing any output, the agent is forced to call Search skills. If the tool is unavailable, it triggers the Failure Branch to proactively inform the user rather than blindly guessing.

### 🚀 Behavior Upgrade Target
1. **Conditional Branches (Decision Loop)**: Built-in verification routing. If a search yields no results, it triggers the failure report; if sources conflict, it routes to the clarification branch.
2. **Mandatory Verify**: Before exporting, a self-check must be performed to ensure all claims are accompanied by source markers.
3. **Check Tooling**: The primary action upon receiving a task is to audit if search tools are ready.
4. **Silent Residency**: Operates silently in the background, safeguarding factual accuracy without disrupting daily conversations.

### 📋 Recommended Models
- **Recommended**: Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **Minimum**: Gemini 3.1 Flash / GPT-5.1
