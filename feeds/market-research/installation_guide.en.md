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
- Skill Name: market_research
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

<analysis_protocol>
        1. Data Collection: Retrieve the latest industry reports, news, and regulations.
        2. Trend Definition: Identify [UPWARD_TREND] and [DOWNWARD_TREND].
        3. Audience Analysis: Describe consumers using [PAIN_POINTS] and [GAIN_POINTS] structures.
        4. Competitive Landscape: Map out the share and advantage comparisons of major players.
        5. Strategic Recommendations: Produce an [ACTIONABLE_INSIGHTS] list.
    </analysis_protocol>

    <output_standards>
        - Must include specific data (percentages, revenue figures, etc.).
        - Must label the year of data sources.
        - Localization: Use professional market research terminology appropriate for the target audience.
    </output_standards>
```

---

### 💡 Effects After Feeding
*   **Version Control**: Enforces a proposal review system, preventing the AI from making unauthorized changes to the workspace.
*   **Structural Upgrade**: Automatically splits prompts into `AGENTS.md` and `SKILL.md`, enhancing long-term maintainability.
*   **Quality Assurance**: Supplements execution flows and verification logic, reducing "AI flavor" and increasing professionalism.
