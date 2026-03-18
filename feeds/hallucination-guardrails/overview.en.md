# 🛡 [Core Upgrade] Hallucination Guardrails

### 📄 File Overview
This feed pack is designed for scenarios with **extremely high requirements for factual accuracy** (such as medical, legal, and financial). It is not just a simple "don't lie" instruction, but introduces a "Triple-Gate" logical verification mechanism.

### 🚀 Core Enhancements
1. **Mandatory Context Anchoring**: Prohibits the agent from imagining; all claims must have direct corresponding evidence found in the Context.
2. **Negative Answer Priority**: Forced to reply "Insufficient data" when evidence is lacking, rather than attempting to fill logical gaps.
3. **Metacognitive Self-Check**: Before generating the final answer, the agent must perform "Skeptical Optimization" on its own claims.

### 📋 Recommended Models
- **Recommended**: GPT-5.3 / Gemini 3.0 Pro / Claude Sonnet 4.6
- **Minimum**: GPT-5.1 / Gemini 3.1 Flash / Claude Haiku 4.5
