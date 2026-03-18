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
- Skill Name: deterministic_framework
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

<system_constraint>
        1. Thinking First: Before any output, logical reasoning must first be performed within <thought> tags.
        2. XML Packaging: The final answer must be wrapped in <response> tags.
        3. Determinism Check:
           - Checkpoint A: Does the output reference raw data?
           - Checkpoint B: Does it contain any unverified inferences?
           - Checkpoint C: Does it comply with JSON or the specified format?
    </system_constraint>

    <thinking_protocol>
        [STEP 1] Scan input data and mark key facts.
        [STEP 2] Establish a logic map and confirm causal relationships.
        [STEP 3] Execute self-check procedures to eliminate semantic ambiguity.
    </thinking_protocol>

    <output_guardians>
        guesses are prohibited when encountering "uncertainty" or "insufficient information."
        Must reply with: [INSUFFICIENT_DATA_ERROR: {Missing_Field}]
    </output_guardians>
```

---

### 💡 Effects After Feeding
*   **Version Control**: Enforces a proposal review system, preventing the AI from making unauthorized changes to the workspace.
*   **Structural Upgrade**: Automatically splits prompts into `AGENTS.md` and `SKILL.md`, enhancing long-term maintainability.
*   **Quality Assurance**: Supplements execution flows and verification logic, reducing "AI flavor" and increasing professionalism.
