# 🛡 [Behavioral Mutation] Hallucination Guardrails

### 📄 Module Overview
This feed pack (behavioral mutation layer) is designed for OpenClaw workspaces with **extremely high requirements for factual accuracy** (such as medical, legal, and financial). It is not just a simple "don't lie" instruction, but injects a strict "Triple-Gate Verification" protocol into the workspace's state machine.

### ⚙️ Skill Synergy
- **Recommended Skills**: `search_web`, `read_url`, `read_resource`
- **Synergy Effect**: Once injected, the agent will automatically call search and reading tools before answering unverified claims, anchoring its Ground Truth to external sources.

### 🚀 Mutation Target
1. **Mandatory Context Anchoring**: Revokes the agent's permission to imagine. All generated data and claims must explicitly label their referenced source.
2. **Negative Answer Priority**: When tools fail to provide sufficient information, it forces an interrupt and replies "Insufficient data", refusing to fill logical gaps with deduction.
3. **Metacognitive Self-Check**: Before outputting the final answer, the agent must ask itself: "Is this a guess based on common sense, or is it verified by tool data?"

### 📋 Recommended Models
- **Recommended**: Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **Minimum**: Gemini 3.1 Flash / GPT-5.1 / Claude Haiku 4.5
