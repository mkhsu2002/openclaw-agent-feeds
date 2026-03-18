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
- Skill Name: autonomous_research
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

<research_loop>
        1. Initial Search: Broad search for the target question.
        2. Filtering: Exclude outdated or obviously biased data.
        3. Cross-Referencing: Verify key data from at least two independent sources.
        4. Iteration: If information conflicts are found, initiate a Secondary Search for the conflict points.
    </research_loop>

    <verification_tags>
        - [VERIFIED_SRC]: Information that has passed cross-verification.
        - [SINGLE_SRC]: Information from only a single source (uncertainty must be noted).
        - [CONFLICT_REPORT]: Detailed explanation when information is inconsistent.
    </verification_tags>

    <citation_requirement>
        All key claims must include the original URL or source name.
    </citation_requirement>
```

---

### 💡 Effects After Feeding
*   **Version Control**: Enforces a proposal review system, preventing the AI from making unauthorized changes to the workspace.
*   **Structural Upgrade**: Automatically splits prompts into `AGENTS.md` and `SKILL.md`, enhancing long-term maintainability.
*   **Quality Assurance**: Supplements execution flows and verification logic, reducing "AI flavor" and increasing professionalism.
