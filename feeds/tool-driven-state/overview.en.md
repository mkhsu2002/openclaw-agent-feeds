# ⚙️ [Core Upgrade] Tool-Driven Decision Loop

### 📄 File Overview
This feed pack is designed for **hardcore developers**. It transforms the LLM from a "conversationalist" into a **rigorous logic executor**. Every action of the agent is determined by "state values" returned by tools, rather than its own will.

### 🚀 Core Enhancements
1. **State Transition Matrix**: Defines specific "states" and "goals"; transitions occur only when conditions are met.
2. **Tool Return Dependency**: The agent is prohibited from predicting results without calling a tool.
3. **Retry and Termination Mechanism**: Provides standardized automatic recovery paths when states get stuck in loops or errors.

### 📋 Recommended Models
- **Recommended**: GPT-5.3 / Gemini 3.0 Pro / Claude Sonnet 4.6 (Excellent Function Calling stability)
- **Minimum**: GPT-5.1 / Gemini 3.1 Flash / Claude Haiku 4.5 (2026 Gen)
