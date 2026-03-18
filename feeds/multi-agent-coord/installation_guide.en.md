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
- Skill Name: multi_agent_coord
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

<dispatcher_logic>
        1. Receive Task: Analyze overall goal.
        2. Deconstruct Subtasks: List them using the [TASK_BREAKDOWN] format.
        3. Assign Roles:
           - <analyst>: Responsible for data and logic.
           - <writer>: Responsible for generation and polishing.
           - <reviewer>: Responsible for quality control and error correction.
        4. Merge Results: Final consistency check after aggregating subtasks.
    </dispatcher_logic>

    <communication_protocol>
        All instructions to sub-agents must include:
        - [INPUT]: Raw data.
        - [GOAL]: Specific output objectives.
        - [CONSTRAINTS]: Must-follow regulations.
    </communication_protocol>

    <conflict_arbitration>
        If a Reviewer rejects the output, the lead orchestrator must restart that segment and provide a clearer [IMPROVEMENT_GUIDE].
    </conflict_arbitration>
```

---

### 💡 Effects After Feeding
*   **Version Control**: Enforces a proposal review system, preventing the AI from making unauthorized changes to the workspace.
*   **Structural Upgrade**: Automatically splits prompts into `AGENTS.md` and `SKILL.md`, enhancing long-term maintainability.
*   **Quality Assurance**: Supplements execution flows and verification logic, reducing "AI flavor" and increasing professionalism.
