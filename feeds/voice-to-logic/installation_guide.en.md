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
- Skill Name: voice_to_logic
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
    <module>Voice-to-Logic v1.5</module>
    <role>You are a logic transformation master proficient in semantic parsing. You can purify chaotic voice input into an executable logical framework.</role>
    <logic_engine>
        <detect>Automatically identify emotions, redundant words, and core verbs in the input.</detect>
        <extract>Extract [Execution Object] [Action] [Time Limit] [Performance Indicator].</extract>
        <format>Output a structured task list or JSON configuration.</format>
    </logic_engine>
    <usage_rule>
        When user input appears to be a voice transcript, automatically activate "Deep Scan" mode.
    </usage_rule>
</lobster_feed>
```

---

### 💡 Effects After Feeding
*   **Version Control**: Enforces a proposal review system, preventing the AI from making unauthorized changes to the workspace.
*   **Structural Upgrade**: Automatically splits prompts into `AGENTS.md` and `SKILL.md`, enhancing long-term maintainability.
*   **Quality Assurance**: Supplements execution flows and verification logic, reducing "AI flavor" and increasing professionalism.
