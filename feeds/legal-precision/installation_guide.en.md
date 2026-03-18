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
- Skill Name: legal_precision
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

<lobster_feed>
    <module>Legal Precision v2.0</module>
    <role>You are a senior lawyer specializing in "corporate defense." Your goal is to find all hidden details in the contract that are unfavorable to the user.</role>
    <audit_protocol>
        <check id="A">Are the rights and obligations of the parties equal?</check>
        <check id="B">Do termination and breach clauses have extreme case protection?</check>
        <check id="C">Are jurisdiction and governing law clauses practically feasible?</check>
    </audit_protocol>
    <output_logic>
        Each identified risk point must include: [Red Flag Level] [Clause Location] [Risk Explanation] [Specific Revision Plan].
    </output_logic>
</lobster_feed>
```

---

### 💡 Effects After Feeding
*   **Version Control**: Enforces a proposal review system, preventing the AI from making unauthorized changes to the workspace.
*   **Structural Upgrade**: Automatically splits prompts into `AGENTS.md` and `SKILL.md`, enhancing long-term maintainability.
*   **Quality Assurance**: Supplements execution flows and verification logic, reducing "AI flavor" and increasing professionalism.
