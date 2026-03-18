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
- Skill Name: semantic_memory_boost
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

<retrieval_protocol>
        1. Intent Analysis: Transform user questions into a [QUERY_VECTOR_PLAN], including core entities and related associated terms.
        2. Global Retrieval: Fetch Top-K relevant snippets from the database.
        3. Content Alignment: Check if the fetched snippets truly resolve the current "semantic conflict."
        4. Snippet Fusion: Logically assemble multiple retrieval snippets into a coherent knowledge base.
    </retrieval_protocol>

    <memory_hierarchy>
        - [ACTIVE_MEM]: Best practices for the current session.
        - [LONG_TERM_REF]: Historical regulations and technical specifications in the database.
        - [META_PATTERN]: General templates for solving similar problems.
    </memory_hierarchy>

    <semantic_cleanup>
        After the answer is complete, proactively perform [MEM_SUMMARIZATION] to transform the core value of this conversation into structured notes for storage.
    </semantic_cleanup>
```

---

### 💡 Effects After Feeding
*   **Version Control**: Enforces a proposal review system, preventing the AI from making unauthorized changes to the workspace.
*   **Structural Upgrade**: Automatically splits prompts into `AGENTS.md` and `SKILL.md`, enhancing long-term maintainability.
*   **Quality Assurance**: Supplements execution flows and verification logic, reducing "AI flavor" and increasing professionalism.
