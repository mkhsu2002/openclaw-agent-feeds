# Recommended Feed Format / 建議 Feed 格式

This document defines a lightweight format for OpenClaw Agent Feeds v0.3. It is a recommendation, not a rigid schema.

本文件定義 OpenClaw Agent Feeds v0.3 的輕量格式。這是建議格式，不是剛性 schema。

## What Feeds Are Not

Feeds are not deterministic protocols.
Feeds are not automatic installers.
Feeds are not replacements for OpenClaw Skills.
Feeds are not guaranteed to produce identical results across different models.
Feeds are not meant to bypass user review.

A Feed is an optimized prompt seed. It works best when interpreted by a capable reasoning model inside an agent environment with appropriate tools and context.

## Feeds 不是什麼

Feeds 不是確定性協議。
Feeds 不是自動安裝程式。
Feeds 不是 OpenClaw Skills 的替代品。
Feeds 不保證在不同模型上產生完全一致的結果。
Feeds 不應跳過使用者審查。

Feed 是一種優化提示詞種子，最適合由具備高階推理能力的模型，在具有適當工具與上下文的 Agent 環境中解讀與執行。

## Template / 範本

```markdown
# Feed Name

## Purpose / 目的
What this Feed helps the agent build, understand, or improve.

此 Feed 幫助 Agent 建置、理解或改善什麼。

## Recommended Agent / Model Level / 建議 Agent 與模型等級
The model capability level recommended for this Feed.

此 Feed 建議使用的模型推理能力等級。

## User Intent / 使用者意圖
What human intent this Feed communicates.

此 Feed 想傳達的人類意圖。

## Best Used With / 最適合搭配
Suggested agent environments or tools:
- OpenClaw
- Hermes Agent
- Codex
- IDE agents
- specific skills if relevant

建議搭配的 Agent 環境或工具。

## Expected Agent Behavior / 預期 Agent 行為
How the agent should respond after receiving this Feed.

Agent 收到此 Feed 後應如何回應。

## Workspace Inspection Guidance / 工作空間檢查指引
What the agent should inspect before making changes.

Agent 在變更前應檢查什麼。

## Skill-Building Guidance / Skill 建置指引
When and how the agent may create or update Skills.

Agent 何時、如何建立或更新 Skills。

## Safety Guidance / 安全指引
What requires user confirmation.

哪些行為需要使用者確認。

## Suggested Output / 建議輸出
The expected structure of the agent's response.

Agent 回應的建議結構。

## Feed Prompt / Feed 提示詞
The actual copy-paste prompt.

可直接複製貼上的 Feed prompt。
```

## Writing Guidance / 撰寫指引

- Keep the Feed practical and readable.
- Explain what the agent should inspect before acting.
- Prefer "propose", "review", "generate", "update", and "ask for confirmation" over absolute claims.
- Avoid implying deterministic behavior.
- Avoid implying the Feed installs itself.
- Include model requirements and safety review notes.

---

- 保持 Feed 實用且易讀。
- 說明 Agent 行動前應檢查什麼。
- 優先使用「提出」、「審查」、「生成」、「更新」、「請求確認」等語氣，而不是絕對化承諾。
- 避免暗示確定性行為。
- 避免暗示 Feed 會自動安裝自己。
- 加入模型需求與安全審查提醒。

