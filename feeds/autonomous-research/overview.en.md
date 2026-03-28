# 🧪 [Mutation Feed] Autonomous Research Engine

### 📄 Module Overview
This significantly makes the agent more stable, precise, and less prone to guessing in planning, tool usage, response structuring, and result verification.

This feed pack (Mutation Feed) caters to tasks demanding **deep data mining and safe report writing**. It upgrades the agent into a researcher possessing a "Cross-Validation Decision Loop." Upon encountering inconsistent data, the decision loop proactively intervenes to conduct secondary verifications, safely generating reports while strictly adhering to file-writing protocols.

### ⚙️ Skill Synergy
- **Recommended Skills**: `search_web`, `read_url`, `write_to_file`, `list_dir`
- **Synergy Effect**: Seamlessly embeds retrieval tools within the Verify state, ensuring only double-verified golden information `[VERIFIED_SRC]` permeates into the Execute report phase, averting any interference with core project code.

### 🚀 Behavior Upgrade Target
1. **Conditional Branches (Decision Loop)**: Triggers the Clarification/Validation branch to resolve conflicts when contradictory data points arise.
2. **Mandatory Verify**: A secondary source must be checked for every critical datapoint imported; upon completing the file, the presence of a reference list must be verified.
3. **Check Tooling**: Mandates an initial scan to check if a prior report exists locally (`Inspect First`) and assesses networking skills.
4. **Pervasive Scope**: Activates upon handling any non-trivial intelligence gathering, data analysis, or extensive research reports.

### 📋 Recommended Models
- **Recommended**: Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **Minimum**: Gemini 3.1 Flash / GPT-5.1
