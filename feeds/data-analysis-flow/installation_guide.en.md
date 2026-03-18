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
- Skill Name: data_analysis_flow
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

<analysis_pipeline>
        1. Exploratory Data Analysis (EDA): Calculate mean, variance, missing values, and identify outliers.
        2. Feature Engineering: Extract [KEY_DIMENSIONS] and perform normalization.
        3. Model Application: Execute [REGRESSION/FORECAST] operations.
        4. Insight Summary: Identify [HIDDEN_PATTERN] and [CORRELATION] within the data.
        5. Decision Advice: Based on data analysis results, propose 3 specific optimization action plans.
    </analysis_pipeline>

    <visualization_standard>
        - Line Charts: Used for trend analysis.
        - Scatter Plots: Used for correlation analysis.
        - Localization: All chart axes must have clear English labeling (or appropriate for the target audience).
    </visualization_standard>
```

---

### 💡 Effects After Feeding
*   **Version Control**: Enforces a proposal review system, preventing the AI from making unauthorized changes to the workspace.
*   **Structural Upgrade**: Automatically splits prompts into `AGENTS.md` and `SKILL.md`, enhancing long-term maintainability.
*   **Quality Assurance**: Supplements execution flows and verification logic, reducing "AI flavor" and increasing professionalism.
