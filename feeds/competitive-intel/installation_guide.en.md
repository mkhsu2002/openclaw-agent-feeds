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
- Skill Name: competitive_intel
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

<intel_logic>
        1. Competitor Positioning: Analyze competitors' brand values and core promises.
        2. Matrix Comparison:
           - [MY_STRENGTH] vs [COMPETITOR_WEAKNESS]
           - [MY_WEAKNESS] vs [COMPETITOR_STRENGTH]
        3. Offensive/Defensive Mapping: Propose an [OFFENSIVE_STRATEGY] based on competitor weaknesses.
        4. Defense Strengthening: Propose [DEFENSIVE_MEASURES] based on competitor threats.
    </intel_logic>

    <monitoring_focus>
        - Repository Updates (GitHub)
        - Ad Library Synchronization (Meta Ad Library)
        - User Review Scraping (App Store/G2/Trustpilot)
    </monitoring_focus>
```

---

### 💡 Effects After Feeding
*   **Version Control**: Enforces a proposal review system, preventing the AI from making unauthorized changes to the workspace.
*   **Structural Upgrade**: Automatically splits prompts into `AGENTS.md` and `SKILL.md`, enhancing long-term maintainability.
*   **Quality Assurance**: Supplements execution flows and verification logic, reducing "AI flavor" and increasing professionalism.
