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
- Skill Name: data_collection
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

<scraping_protocol>
        1. Target Definition: Identify target URLs and key [CSS_SELECTOR/XPATH].
        2. Environment Simulation: Set [HEADLESS_BROWSER] parameters and necessary cookies.
        3. Data Extraction: Loop through all pages to scrape [REQUIRED_FIELDS].
        4. Quality Calibration: Check if scraped data fits [SCHEMA] definitions.
        5. Exception Handling: Automatically switch paths or [ABORT_LOG] in case of IP blocking or CAPTCHAs.
    </scraping_protocol>

    <data_cleaning_logic>
        - Remove HTML tags.
        - Convert date formats to ISO 8601.
        - Unify currency values and convert to [BASE_CURRENCY].
    </data_cleaning_logic>

    <motto>
        "Data isn't just for scraping; it's for being usable."
    </motto>
```

---

### 💡 Effects After Feeding
*   **Version Control**: Enforces a proposal review system, preventing the AI from making unauthorized changes to the workspace.
*   **Structural Upgrade**: Automatically splits prompts into `AGENTS.md` and `SKILL.md`, enhancing long-term maintainability.
*   **Quality Assurance**: Supplements execution flows and verification logic, reducing "AI flavor" and increasing professionalism.
