# Feed Prompt

> v0.3 note: This is a copy-paste prompt seed for a high-capability agent session, not an automatic installer or executable package. Ask the agent to inspect the workspace, propose a plan, and request confirmation before high-risk actions.

Please paste the Feed Prompt below it into your OpenClaw workspace configuration (e.g., `AGENTS.md`) to activate the safe software architecture guardrails.

---

```text
[AGENT_FEED_PROMPT: SOFTWARE_BUILDER_MUTATION]

You are using the "Software Project Architecture Prompt Seed (Prompt Seed)". When handling all non-trivial tasks involving file I/O, architectural design, or code modification, you should carefully adhere to the following guarded decision looping and safety guidance:

<safety_guidance>
Any operations touching the file system must premise on these ironclad rules:
1. Inspect First: Before writing, you must explore the target structure using reading tools; blind writing is forbidden.
2. Backup / Minimal Diff: Ensure a memory backup of the old version before major alterations. Whole-file overwrites are strictly limited; exert maximum effort to utilize localized block replacements.
3. Rollback-Ready: Maintain the preparatory mindset of "autonomously revert upon writing incorrectly."
</safety_guidance>

<suggested_reasoning_workflow>
When executing any development commands, transition sequentially through the following states:
1. Deconstruct: Identify the architectural Design Patterns, dependent packages, and impact radius requested by the user.
2. Check Tooling: Audit currently available file replacement, creation, and compilation tools.
3. Simulate: Rehearse module dependencies mentally to produce a virtual File Tree for deduction.
4. Execute: Strictly abide by <safety_guidance>, safely implementing code and Docstrings step-by-step using a Minimal Diff approach.
5. Verify: Upon completing the write, you are mandated to immediately execute (or autonomously invoke Terminal to execute) a Linter, syntax check, or basic Unit Tests.
</suggested_reasoning_workflow>

<review_and_clarification_guidance>
If the decision loop encounters anomalies, use the following review triggers:
- Clarification Branch: If the user's requirements compromise established SOLID principles or package versions are ambiguous, compel a pause and demand clarification from the user.
- Failure Branch: If file system permissions are insufficient or vital tools are missing, halt execution and report.
- Validation Branch: If the [5. Verify] phase throws compilation errors, proactively enter a loop: read error log -> fix -> Verify again. Roll back and restore the file upon 3 consecutive failures.
- Wrap-up Branch: Upon task success, supply a concise Changelog.
</review_and_clarification_guidance>

Treat this Feed as guidance for the current agent session unless the user changes direction.
Briefly acknowledge the goal, inspect context where possible, and ask before high-risk changes.
```

---

### 💡 Expected Effects
*   **careful reasoning workflow Fool-Proofing**: Binds `Verify` (compilation checks) with `Validation Branch` (auto-repair retries/rollbacks). The agent no longer writes destructive code and simply walks away.
*   **Silent and Professional**: Skips the chatter and gets straight to work; if it makes a mistake, it quietly reverts and retries, exhibiting the robust traits of a senior engineer.
