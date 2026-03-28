# 🛡 [Training Feed] PII Masking Guardrails

### 📄 Module Overview
This significantly makes the agent more stable, precise, and less prone to guessing in planning, tool usage, response structuring, and result verification.

This feed pack (Training Feed) is forged exclusively for **extreme data security and privacy compliance**. It upgrades the agent's I/O flow control into a "filter-first, transmit-second" Guarded Decision Loop, strictly binding it to the 2026 privacy regulations, guaranteeing the absolute occlusion of all Personally Identifiable Information (PII) before reading, summarizing, or externally transmitting any data.

### ⚙️ Skill Synergy
- **Recommended Skills**: Universally applicable across I/O operations, especially `read_url`, `read_terminal`, `search_web`.
- **Synergy Effect**: The agent is impelled to initiate a self-checking decision loop before fetching or finalizing output data. Should unencrypted PII be detected, a Validation cycle triggers immediate obfuscation, or a Failure branch halts operations.

### 🚀 Behavior Upgrade Target
1. **Conditional Branches (Decision Loop)**: Triggers the Clarification branch for user arbitration when encountering vague or borderline PII; should the filtration mechanism falter, a Failure trigger halts transmission.
2. **Mandatory Verify**: Prior to outputting the final `[OUTPUT]`, a Secondary Verification Scan must be enforced via a rigorous PII masking checklist.
3. **Check Capability**: Primordially guarantees its Regex and Semantic Sniffing faculties are operational before tackling the task.
4. **Pervasive Scope**: Assumes jurisdiction over all non-trivial tasks relating to "client data, log analysis, and external API queries."

### 📋 Recommended Models
- **Recommended**: Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **Minimum**: Gemini 3.1 Flash / GPT-5.1
