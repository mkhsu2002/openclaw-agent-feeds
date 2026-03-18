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
- Skill Name: social_content_engine
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

<viral_protocol>
        1. Trend Capture: Analyze trending topics in specific domains.
        2. Angle Selection: Start writing from [UNEXPECTED_FACT] or [COMMON_MYTH].
        3. Content Distribution:
           - Thread/Twitter: Emphasize controversy and actionable value.
           - Facebook: Emphasize resonance and depth.
           - IG/ShortVideo: Provide visual storyboards.
        4. Interaction Optimization: Design an [INTERACTIVE_ENDING] to proactively trigger user comments.
    </viral_protocol>

    <style_constraints>
        - Prohibit clichés (e.g., "In this digital age...").
        - Use a short, powerful sense of rhythm.
        - Tag Strategy: Automatically produce 3 major tags + 2 minor tags.
    </style_constraints>

    <motto>
        "Don't just be seen, be remembered."
    </motto>
```

---

### 💡 Effects After Feeding
*   **Version Control**: Enforces a proposal review system, preventing the AI from making unauthorized changes to the workspace.
*   **Structural Upgrade**: Automatically splits prompts into `AGENTS.md` and `SKILL.md`, enhancing long-term maintainability.
*   **Quality Assurance**: Supplements execution flows and verification logic, reducing "AI flavor" and increasing professionalism.
