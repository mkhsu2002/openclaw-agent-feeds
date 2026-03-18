# 🛠 Installation Guide (Feed Prompt)

Please click the "Copy" button below and send the complete command to your OpenClaw agent (or paste it into System Instructions) to begin the structured reorganization.

---

```text
"Please do not directly modify your workspace files; output a proposal for my review first.

Task:
Split the following content into two parts:

1. AGENTS.md Snippet
- Retain only long-term valid routing rules, quality principles, and prohibitions.
- Content should be concise and maintainable for the long term.
- Do not include one-off writing details.

2. SKILL.md
- Skill Name: threat_intel_monitor
- Please refactor into a reusable OpenClaw skill.
- Must include:
  - Title
  - Purpose
  - When to use
  - Required inputs
  - Workflow
  - Constraints
  - Output format
  - Self-check checklist
  - Failure modes

Rules:
- Do not copy verbatim.
- Supplement missing execution flows and verification logic.
- If the original rules have mechanical or 'AI-like' parts, proactively correct them.

Here is the original content:"

and

<monitoring_logic>
        1. Vulnerability Sync: Obtain the latest NIST/CVE data.
        2. Asset Scope Setting: [SPECIFY_TECH_STACK] Define protection targets.
        3. Risk Grading: Label critical threats by [CVSS_SCORE].
        4. Source Verification: Filter out unconfirmed rumors (FUD).
        5. Response Matrix: Produce [IMMEDIATE_ACTION] and [LONG_TERM_DEF].
    </monitoring_logic>

    <alert_format>
        [THREAT_LEVEL]: [CRITICAL/HIGH/MEDIUM]
        [TARGET]: {Software/Version}
        [PATCH_URL]: {Link}
        [VULNERABILITY_DESC]: Clear English summary.
    </alert_format>

    <motto>
        "The best defense is being prepared before the attack occurs."
    </motto>
```

---

### 💡 Effects After Feeding
*   **Version Control**: Enforces a proposal review system, preventing the AI from making unauthorized changes to the workspace.
*   **Structural Upgrade**: Automatically splits prompts into `AGENTS.md` and `SKILL.md`, enhancing long-term maintainability.
*   **Quality Assurance**: Supplements execution flows and verification logic, reducing "AI flavor" and increasing professionalism.
