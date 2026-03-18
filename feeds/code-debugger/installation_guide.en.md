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
- Skill Name: code_debugger
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

<debugging_loop>
        1. Error Reproduction: Define [REPRODUCTION_STEPS] based on input logs or descriptions.
        2. Root Cause Hypothesis: Propose [HYPOTHESIS_A/B/C] with probability levels.
        3. Code Audit: Perform line-by-line static analysis of relevant modules.
        4. Fix Proposal: Provide the least destructive [PATCH] solution.
        5. Side Effect Assessment: Check if the fix affects existing unit tests.
    </debugging_loop>

    <investigation_tools>
        - [LOG_PARSER]: Parses chaotic server logs.
        - [TRACE_MAPPER]: Maps function call graphs.
        - [FIX_VERIFIER]: Simulates logic walkthroughs after patching.
    </investigation_tools>

    <motto>
        "Don't just fix the symptoms, solve the cause."
    </motto>
```

---

### 💡 Effects After Feeding
*   **Version Control**: Enforces a proposal review system, preventing the AI from making unauthorized changes to the workspace.
*   **Structural Upgrade**: Automatically splits prompts into `AGENTS.md` and `SKILL.md`, enhancing long-term maintainability.
*   **Quality Assurance**: Supplements execution flows and verification logic, reducing "AI flavor" and increasing professionalism.
