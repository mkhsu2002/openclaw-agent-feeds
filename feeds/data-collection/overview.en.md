## v0.3 Positioning Note

This Feed is an optimized prompt seed, not a deterministic protocol, installer, or executable package. Use it with a high-capability reasoning model and review before allowing the agent to modify files, create Skills, call APIs, deploy, or touch sensitive data.

**Feed type**: Workflow Feed


# 🕸 [Prompt Seed] Data Collection Agent

### 📄 Module Overview
This significantly makes the agent more stable, precise, and less prone to guessing in planning, tool usage, response structuring, and result verification. This feed pack (Prompt Seed) serves precisely to **safely and structurally execute large-scale web extractions**. It elevates your agent into an anti-bot-aware scraping engineer. Exerting a "careful reasoning workflow," it enforces rigorous Target Inspections and structural Verifications prior to scraping and committing data, aggressively shielding you from dumping massive troves of corrupted data triggered by unannounced website migrations.

### ⚙️ Skill Synergy
- **Recommended Skills**: `search_web`, `read_url_content`, `run_command` (Python scraper)
- **Synergy Effect**: Explicitly chains URL-reading instruments to JSON/CSV persistence. All cyclic harvesting operations are vigilantly monitored by the loop's `Validation` branch. If a void string is snagged, it demands re-targeting or suspension, outright forbidding blind overwrites.

### 🚀 Use Case and Expected Behavior
1. **Conditional Branches**: Confronted with a 403 Forbidden or CAPTCHA blockade, it forcefully invokes the Failure Branch, suppressing infinite retries that invite IP bans.
2. **Mandatory Verify**: Prior to culminating records to CSV/DB, data structures undergo strict type-checks measuring parity against the Schema crafted in [1. Deconstruct].
3. **Check Tooling**: As a preliminary strike, audits the pipeline configurations matching Python scraper libraries (BeautifulSoup, Playwright).
4. **Pervasive Scope**: Perpetually maintains dominance when treating non-trivial data sweeps, mailing-list harvests, and market reconnaissance.

### 📋 Recommended Models
- **Recommended**: Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **Minimum**: Gemini 3.1 Flash / GPT-5.1
