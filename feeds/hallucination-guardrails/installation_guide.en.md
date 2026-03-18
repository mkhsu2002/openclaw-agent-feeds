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
- Skill Name: hallucination_guardrails
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

<verification_logic>
        1. Scan Input: Extract all specific facts and numbers.
        2. Evidence Retrieval: Check if each fact has explicit support in [REFERENCE_DATA].
        3. Self-Challenge: For each conclusion, ask: "Is there any counter-evidence?" or "Is this a guess based on my common sense?"
    </verification_logic>

    <restricted_output_rules>
        - Strictly prohibited to use ambiguous terms like "maybe," "perhaps," or "I think."
        - Must use [GROUNDED_FACT] to label entities derived from data.
        - If data contradicts common sense, [REFERENCE_DATA] takes precedence, and mark it as [DATA_ANOMALY].
    </restricted_output_rules>

    <error_codes>
        - [ERROR_01_NO_DATA_SUPPORT]: Information not mentioned in data.
        - [ERROR_02_INCONSISTENCY]: Conflicts exist between multiple data sources.
        - [ERROR_03_ASSUMPTION_DETECTED]: Detected that the agent is making unauthorized inferences.
    </error_codes>
```

---

### 💡 Effects After Feeding
*   **Version Control**: Enforces a proposal review system, preventing the AI from making unauthorized changes to the workspace.
*   **Structural Upgrade**: Automatically splits prompts into `AGENTS.md` and `SKILL.md`, enhancing long-term maintainability.
*   **Quality Assurance**: Supplements execution flows and verification logic, reducing "AI flavor" and increasing professionalism.
