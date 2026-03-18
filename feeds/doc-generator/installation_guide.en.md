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
- Skill Name: doc_generator
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

<documentation_protocol>
        1. Code Scan: Extract all Classes, Methods, Functions, and their export relationships.
        2. Logic Analysis: Infer the [CORE_INTENT] of the code.
        3. Architecture Mapping: Produce flowcharts or architecture diagrams in Mermaid format.
        4. API Specification: Describe interfaces according to OpenAPI 3.0 standards.
        5. User Manual: Generate user guides for non-technical personnel.
    </documentation_protocol>

    <formatting_lock>
        - Header Structure: Use standard Markdown H1-H4.
        - Glossary: Automatically generate explanations for key technical terms in the project.
        - Example Code: Must include correct code highlighting and usage examples.
    </formatting_lock>
```

---

### 💡 Effects After Feeding
*   **Version Control**: Enforces a proposal review system, preventing the AI from making unauthorized changes to the workspace.
*   **Structural Upgrade**: Automatically splits prompts into `AGENTS.md` and `SKILL.md`, enhancing long-term maintainability.
*   **Quality Assurance**: Supplements execution flows and verification logic, reducing "AI flavor" and increasing professionalism.
