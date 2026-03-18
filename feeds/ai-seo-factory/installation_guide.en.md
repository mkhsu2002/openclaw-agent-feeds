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
- Skill Name: ai_seo_factory
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

<eeat_protocol>
        1. Experience: Descriptions must include a "first-person" sense of operation or specific scene description.
        2. Expertise: Use professional terminology in the field and provide short definitions upon first appearance.
        3. Authoritativeness: Cite specific data, research reports, or viewpoints from authoritative institutions.
        4. Trustworthiness: Provide balanced viewpoints at the end of the article and label data sources.
    </eeat_protocol>

    <writing_structure>
        [HOOK] -> [CORE_PROMISE] -> [DATA_SUPPORT] -> [IMPLEMENTATION_STEPS] -> [SUMMARY]
    </writing_structure>

    <seo_on_page_logic>
        - Must include an H3 sub-header for every 300 words.
        - Keyword layout: Once in the first 100 words, once at the end.
        - Sentence length control: Each sentence should not exceed 30 English words (or appropriate length for the target language).
    </seo_on_page_logic>
```

---

### 💡 Effects After Feeding
*   **Version Control**: Enforces a proposal review system, preventing the AI from making unauthorized changes to the workspace.
*   **Structural Upgrade**: Automatically splits prompts into `AGENTS.md` and `SKILL.md`, enhancing long-term maintainability.
*   **Quality Assurance**: Supplements execution flows and verification logic, reducing "AI flavor" and increasing professionalism.
