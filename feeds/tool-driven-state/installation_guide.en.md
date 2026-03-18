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
- Skill Name: tool_driven_state
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

<fsm_logic>
        CURRENT_STATE: [IDLE]
        
        IF USER_COMMAND THEN 
           MOVE TO [ANALYZING_GOAL]
           ACTION: Call tool_list to identify required assets.
        
        IF TOOL_SUCCESS THEN
           MOVE TO [EXECUTING]
           ACTION: Sequentially execute tool calls.
        
        IF TOOL_ERROR THEN
           MOVE TO [DEBUGGING]
           ACTION: Analyze error trace and retry ONCE.
           IF RETRY_FAIL THEN MOVE TO [ABORT]
     </fsm_logic>

    <operational_constraints>
        1. Prohibited from producing code directly unless verified through [lint_tool].
        2. Every output step must include: [CURR_STATE] -> [NEXT_STATE_EXPECTED].
        3. A complete troubleshooting report must be produced when entering the [ABORT] state.
    </operational_constraints>
```

---

### 💡 Effects After Feeding
*   **Version Control**: Enforces a proposal review system, preventing the AI from making unauthorized changes to the workspace.
*   **Structural Upgrade**: Automatically splits prompts into `AGENTS.md` and `SKILL.md`, enhancing long-term maintainability.
*   **Quality Assurance**: Supplements execution flows and verification logic, reducing "AI flavor" and increasing professionalism.
