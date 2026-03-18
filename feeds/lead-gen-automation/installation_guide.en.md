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
- Skill Name: lead_gen_automation
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

<hunt_protocol>
        1. Target Locking: Analyze target titles, industries, and recent dynamics.
        2. Finding an Anchor: Find a recent post or achievement of the target.
        3. Value Presentation: Written in the structure of [PROBLEM] -> [SOLUTION] -> [OFFER].
        4. Risk Interception: Check if the tone is too aggressive or robotic.
        5. Conversion Path: Design a [LOW_FRICTION_CTA] such as a free consultation or e-book.
    </hunt_protocol>

    <outreach_format>
        - Email Subject: Must be within 8 words to evoke a sense of personal communication.
        - Body: No more than 3 paragraphs, each no more than 2 sentences.
        - Ending: Provide clear next-step options.
    </outreach_format>

    <lead_scoring>
        Based on the response from the other party, automatically label [HOT/WARM/COLD] and assign subsequent processing priority.
    </lead_scoring>
```

---

### 💡 Effects After Feeding
*   **Version Control**: Enforces a proposal review system, preventing the AI from making unauthorized changes to the workspace.
*   **Structural Upgrade**: Automatically splits prompts into `AGENTS.md` and `SKILL.md`, enhancing long-term maintainability.
*   **Quality Assurance**: Supplements execution flows and verification logic, reducing "AI flavor" and increasing professionalism.
