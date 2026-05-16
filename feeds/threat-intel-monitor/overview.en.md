## v0.3 Positioning Note

This Feed is an optimized prompt seed, not a deterministic protocol, installer, or executable package. Use it with a high-capability reasoning model and review before allowing the agent to modify files, create Skills, call APIs, deploy, or touch sensitive data.

**Feed type**: Safety Feed


# 🛡️ [Prompt Seed] Threat Intel Monitor

### 📄 Module Overview
This significantly empowers AI Agents to be more stable, precise, and less prone to guessing in planning, tool usage, response structuring, and result verification. This feed pack (Prompt Seed) is crafted expressly for **defensive security telemetry and vulnerability hunting**. It retrofits your workspace into a Zero-Trust analysis outpost. Dominated by a "careful reasoning workflow," it forcefully prohibits the agent from deploying panic alerts. Agents must marshal cross-verification (Inspect First) and False-Positive filtration (Verify) prior to flagging vulnerabilities—obliterating the disastrous "Alert Fatigue" caused by ignorant scanners howling at nonexistent threats.

### ⚙️ Skill Synergy
- **Recommended Skills**: Within-workspace terminal execution (`run_command`), Retrieval utilities (`search_web` targeting CVE registries).
- **Synergy Effect**: Fuses local terminal topological sweeps (e.g., `npm audit`) with remote CVE threat logic. If a breach vector is detected during `Execute`, the `Validation` branch violently forces the agent to cross-check the official CVE domains to discern if a verified patch exists or if the notification is a ghost anomaly.

### 🚀 Use Case and Expected Behavior
1. **Conditional Branches**: Confronting a Critical-Tier vulnerability, it triggers the Clarification Branch to calculate logistics: Is this a mundane version-bump operation, or a catastrophic architectural flaw requiring server downtime?
2. **Mandatory Verify**: Prior to generating the audit dossier, it mechanically cross-references local logs against authoritative NVD repositories, purging all phantom alerts devoid of an actual Exploit Path in your environment.
3. **Check Tooling**: Surveys the pre-installed security topography to confirm scanner virus dictionaries are violently up-to-date, refusing to hunt using fossilized definitions.
4. **Pervasive Scope**: Perpetually imposes jurisdiction over dependency infusions, server firewall configurations, and architectural safety audits.

### 📋 Recommended Models
- **Recommended**: Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **Minimum**: STRICTLY BANS Flash or lightweight models for cybersecurity auditing.
