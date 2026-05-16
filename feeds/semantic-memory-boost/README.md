# 語義記憶增強器 / Semantic Memory Boost

**Feed type / 類型**: Workspace Bootstrapping Feed / 工作空間啟動 Feed
**Version / 版本**: v0.3

## Positioning / 定位

Memory and knowledge-base prompt seed that guides agents to retrieve context before answering or editing.

記憶與知識庫提示詞種子，幫助 Agent 先檢索上下文再回答或修改。

This Feed is an optimized prompt seed for high-capability AI agent sessions. It is not a deterministic protocol, installer, runtime, or executable package. It should help the agent understand intent, inspect context, propose safe next steps, and create or update Skills, instructions, checklists, or workflows only when appropriate.

此 Feed 是為高階 AI Agent session 設計的優化提示詞種子。它不是確定性協議、安裝程式、runtime 或可執行套件。它應協助 Agent 理解意圖、檢查上下文、提出安全下一步，並只在適當時建立或更新 Skills、指令、檢查清單或工作流。

## Best Used With / 最適合搭配

- OpenClaw high-capability sessions
- Codex or IDE agents as task kickoff prompts or AGENTS.md conversion material
- Hermes Agent as exploratory goal, learning, or skill-building seeds

## Safety / 安全

Review before allowing the agent to modify files, create Skills, run shell commands, call APIs, access credentials, write databases, deploy, publish packages, or change billing/security settings.

在允許 Agent 修改檔案、建立 Skills、執行 shell commands、呼叫 APIs、存取 credentials、寫入 databases、部署、發布 packages，或修改 billing/security settings 前，請先審查。

## Files / 檔案

- [Feed prompt](feed.md)
- [Traditional Chinese overview](overview.md)
- [English overview](overview.en.md)
- [Traditional Chinese copy-paste prompt](installation_guide.md)
- [English copy-paste prompt](installation_guide.en.md)
