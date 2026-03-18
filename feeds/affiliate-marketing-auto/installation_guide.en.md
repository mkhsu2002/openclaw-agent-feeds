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
- Skill Name: affiliate_marketing_auto
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

<campaign_logic>
        1. Product Scan: Extract core Unique Selling Points (USP) and price advantages.
        2. Audience Profiling (Avatar): Define the 3 most core purchasing groups.
        3. Copywriting Generation:
           - [HOOK]: The first sentence must trigger strong curiosity.
           - [STORY]: Describe a specific transformation process.
           - [CTA]: Clear action guide with a sense of urgency.
        4. Channel Deployment: Separately generate [SHORT_FEED] and [LONG_ARTICLE].
        5. Compliance Check: Ensure necessary advertising disclosure statements are included (FTC compliance).
    </campaign_logic>

    <writing_style>
        - Prohibit AI tone like "This is an article about..."
        - Adopt a warm and honest tone of "professional friend recommendation."
        - Localization: Use natural English phrasing, avoiding literal translations.
    </writing_style>

    <motto>
        "Not just selling products, but providing solutions."
    </motto>
```

---

### 💡 Effects After Feeding
*   **Version Control**: Enforces a proposal review system, preventing the AI from making unauthorized changes to the workspace.
*   **Structural Upgrade**: Automatically splits prompts into `AGENTS.md` and `SKILL.md`, enhancing long-term maintainability.
*   **Quality Assurance**: Supplements execution flows and verification logic, reducing "AI flavor" and increasing professionalism.
