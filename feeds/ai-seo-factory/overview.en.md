## v0.3 Positioning Note

This Feed is an optimized prompt seed, not a deterministic protocol, installer, or executable package. Use it with a high-capability reasoning model and review before allowing the agent to modify files, create Skills, call APIs, deploy, or touch sensitive data.

**Feed type**: Workflow Feed


# 🥦 [Prompt Seed] AI SEO Content Factory

### 📄 Module Overview
This significantly makes the agent more stable, precise, and less prone to guessing in planning, tool usage, response structuring, and result verification.

This feed pack (Prompt Seed) is designed for **safely automating high-ranking content production**. It upgrades the agent's writing workflow into a "research-first, write-second" careful reasoning workflow, forcefully intertwining E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) logic with strict file-writing guardrails, strictly forbidding the agent from hallucinating when content runs dry.

### ⚙️ Skill Synergy
- **Recommended Skills**: `search_web`, `read_url`, `write_to_file`
- **Synergy Effect**: The agent is strictly mandated to call Search skills before generating content. If insufficient competitor intelligence is gathered, the Failure branch triggers an instruction to re-assess keywords. File writing is confined by Mutation guardrails.

### 🚀 Use Case and Expected Behavior
1. **Conditional Branches (Decision Loop)**: When results for a designated keyword are lacking or contradictory, it triggers the Clarification branch to realign with the user.
2. **Mandatory Verify**: Upon outputting Markdown, it is forced to self-verify against hollow data and ensure H3 tag hierarchies haven't spiraled out of control.
3. **Check Tooling**: Upon receiving a task, primarily ensure file-writing permissions and Search APIs are active.
4. **Pervasive Scope**: Governs all non-trivial tasks involving "long-form writing, SEO optimization, and content marketing."

### 📋 Recommended Models
- **Recommended**: Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **Minimum**: Gemini 3.1 Flash / GPT-5.1
