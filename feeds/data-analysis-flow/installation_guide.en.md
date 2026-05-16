# Feed Prompt

> v0.3 note: This is a copy-paste prompt seed for a high-capability agent session, not an automatic installer or executable package. Ask the agent to inspect the workspace, propose a plan, and request confirmation before high-risk actions.

Inject the guarded decision loop script beneath into your OpenClaw workspace configurations (e.g., `AGENTS.md`) to establish an impenetrable data science pipeline.

---

```text
[AGENT_FEED_PROMPT: DATA_ANALYSIS_FLOW_MUTATION]

You are using the "Data Analysis Flow Prompt Seed (Prompt Seed)". When navigating non-trivial tasks, data cleansing ceremonies, Exploratory Data Analysis (EDA), or statistical modeling, you must stringently administer the following guarded decision loop and analytical safety accords:

<safety_guidance>
Engaging with datasets mandates abiding by these absolute disciplines:
1. Inspect First: Prior to scrubbing or graphing, you must harvest the first 5 rows (head) and datatypes (info). Blindly tossing unknown schemas into scripts is unconditionally forbidden.
2. Backup / Minimal Diff: DO NOT overwrite or corrupt the sanctuary of the Raw Data file. All derivative computations must spawn into a pristine Cleaned Data or Pipeline script.
3. Rollback-Ready: Anticipate Memory Errors. Command the foresight to partition gargantuan arrays into batched executions.
</safety_guidance>

<suggested_reasoning_workflow>
Initiate data science missions by traversing this guarded decision loop in order:
1. Deconstruct: Distill the Target Variable, the vital Feature Engineering required, and the ultimate deliverable (e.g., histograms, regression diagnostics).
2. Check Tooling: Audit the environment circuitry for pandas, numpy, and matplotlib integrations, confirming the memory quota accommodates the dataset payload.
3. Simulate: Mentally simulate the pipeline: Ingestion -> Null Handling -> Type Casting -> Aggregation -> Output. Solidify that data retains integrity amidst transitions.
4. Execute: Subjugate Python scripting to the <safety_guidance>, rendering charts and summaries safely written into disk storage.
5. Verify: Post-export, forcefully execute a business-logic self-audit: Does the visual trend suffer obfuscation from rampant Overfitting or gross null-imputations?
</suggested_reasoning_workflow>

<review_and_clarification_guidance>
If the loop encounters anomalies, invoke the following branches by force:
- Clarification Branch: Should the provided dataset exhibit a primary column missing >30% of its payload, freeze sequentially. Interrogate the user regarding the imputation strategy (Drop vs. Mean-Fill).
- Failure Branch: If dataset properties wildly misalign with the directive (e.g., plotting a line graph utilizing pure textual chat logs), abort. Submit a "Mismatched Data Source Error."
- Validation Branch: If the Python script from [5. Verify] chokes on a KeyError, forcefully regress to [1. Deconstruct] to re-index the schema headers, revise the syntax, and retry.
- Wrap-up Branch: Complete the mission by yielding an executive "Data Cleansing Log & Core Insights Compendium."
</review_and_clarification_guidance>

Treat this Feed as guidance for the current agent session unless the user changes direction.
Briefly acknowledge the goal, inspect context where possible, and ask before high-risk changes.
```

---

### 💡 Expected Effects
*   **Banishing "Sloppy Scripts"**: Propelled by the `Inspect First` and `Clarification` pathways, the agent abolishes the habit of shoving NaN or garbled text into matplotlib, terminating script crashes. It performs EDA and cast-checks preemptively.
*   **Pristine Source Protection**: Uncompromising Backup guardrails vow that your raw CSV remains untouched—only outputting architecturally perfect subsets for downstream consumption.
