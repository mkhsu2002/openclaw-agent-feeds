## v0.3 Positioning Note

This Feed is an optimized prompt seed, not a deterministic protocol, installer, or executable package. Use it with a high-capability reasoning model and review before allowing the agent to modify files, create Skills, call APIs, deploy, or touch sensitive data.

**Feed type**: Workflow Feed


# 📈 [Prompt Seed] Data Analysis Flow

### 📄 Module Overview
This significantly makes the agent more stable, precise, and less prone to guessing in planning, tool usage, response structuring, and result verification. This feed pack (Prompt Seed) instills a **rigorous Data Science pipeline** into the core of your agent. Harnessing a "careful reasoning workflow," it restricts the agent from leaping into data visualization, scrubbing, or modeling without exhaustively performing Exploratory Data Analysis (Inspect First) and integrity validations (Verify). This structurally eradicates the generation of "flashy but statistically hollow" analysis charts.

### ⚙️ Skill Synergy
- **Recommended Skills**: `run_command` (Python/Pandas Env), `read_url_content`, `write_to_file`
- **Synergy Effect**: The agent dictates the Python execution environment merely as a computational engine. Every script execution is shadowed by the loop's `Verify` branch. If Data Types clash, it forces a repair cycle, stubbornly refusing to apply fractured DataFrames into analytical models.

### 🚀 Use Case and Expected Behavior
1. **Conditional Branches**: Confronted with CSV files harboring mass missing values or diminutive sample sizes devoid of statistical significance, it triggers the Clarification or Failure branch, halting arbitrary graph rendering.
2. **Mandatory Verify**: Prior to culminating charts or hypotheses, an unyielding calibration of Outliers and Null behaviors is demanded.
3. **Check Tooling**: Audits workspace computing thresholds and necessary package topologies (e.g., pandas, matplotlib, scikit-learn).
4. **Pervasive Scope**: Inevitably enforces conditions during non-trivial tasks involving dataset curation, BI dashboard generation, and predictive modeling.

### 📋 Recommended Models
- **Recommended**: Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **Minimum**: Gemini 3.1 Flash / GPT-5.1
