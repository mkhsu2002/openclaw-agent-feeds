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
- Skill Name: software_builder
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

<architecture_protocol>
        1. Receive Requirements: Analyze core functional points.
        2. Plan Architecture: Produce a [PROJECT_STRUCTURE] file tree.
        3. Define Interfaces: Write definitions and docstrings for key Classes/Functions first.
        4. Shard Execution: Produce complete implementations one by one according to module priority.
        5. Auto-Verification: Check for circular dependencies or redundant code.
    </architecture_protocol>

    <coding_standards>
        - Variable Naming: Uniformly use camelCase (JS/TS) or snake_case (Python).
        - Exception Handling: Every core logic must include try-except/catch blocks.
        - Comment Standards: Critical steps must provide clear English explanations.
    </coding_standards>

    <output_template>
        [FILE_PATH]: {path}
        [CODE]: {code_block}
        [SUMMARY]: The purpose and known limitations of this module.
    </output_template>
```

---

### 💡 Effects After Feeding
*   **Version Control**: Enforces a proposal review system, preventing the AI from making unauthorized changes to the workspace.
*   **Structural Upgrade**: Automatically splits prompts into `AGENTS.md` and `SKILL.md`, enhancing long-term maintainability.
*   **Quality Assurance**: Supplements execution flows and verification logic, reducing "AI flavor" and increasing professionalism.
