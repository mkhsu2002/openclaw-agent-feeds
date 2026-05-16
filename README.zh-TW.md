# OpenClaw Agent Feeds

用於建置更好 AI Agent Skills、指令與工作流的優化提示詞種子。

OpenClaw Skills 教 Agent「能做什麼」。
Agent Feeds 幫助使用者告訴 Agent「應該理解什麼、考慮什麼、建置什麼，以及避免什麼」。

Feed 是一種為高階 AI Agent session 設計的優化提示詞種子。它能幫助 Agent 解讀使用者意圖、檢查目前 workspace、推理最安全且最有用的建置方式，並在適當時生成或更新 Skills、指令、設定、檢查清單或工作流。

Feeds 不是協議、安裝程式，也不是可執行套件。Feeds 是人類意圖與 Agent 執行能力之間的提示詞溝通種子。

目前版本：**v0.3**

官方網站：[https://openclawfeeds.icareu.tw/](https://openclawfeeds.icareu.tw/)

## What is a Feed?

Feed 是為高能力 AI Agent 設計的優化提示詞種子。它會提供使用者目標、限制條件、偏好的工作流、安全期待與 Skill 建置意圖，讓 Agent 能用更完整的上下文開始工作。

Feeds 可以幫助 Agent：

- 在提出修改前檢查 workspace
- 判斷是否應使用現有 Skill、指令檔、檢查清單或工作流
- 提議建立新 Skill 或更新既有 Skill
- 將模糊目標轉成具體計畫
- 記錄假設、風險與審查步驟
- 為 agentic work 建立更安全的任務啟動提示詞

Feeds 本身仍然是提示詞。實際效果取決於模型、工具、workspace 上下文與使用者審查。

## Feeds 不是什麼

Feeds 不是確定性協議。
Feeds 不是自動安裝程式。
Feeds 不是 OpenClaw Skills 的替代品。
Feeds 不保證在不同模型上產生完全一致的結果。
Feeds 不應跳過使用者審查。

Feed 是一種優化提示詞種子，最適合由具備高階推理能力的模型，在具有適當工具與上下文的 Agent 環境中解讀與執行。

## Why Feeds Matter Even When Skills Exist

Skills 是能力套件。
Feeds 是幫助 Agent 判斷如何建立、更新、組合或使用能力的提示詞種子。

Skills 回答：
**Agent 能做什麼？**

Feeds 回答：
**Agent 應如何理解這個任務、檢查環境、判斷需要哪些能力，並安全地建立或使用它們？**

Feed 可能引導 Agent 產生：

- 新 Skills
- 更新既有 Skills
- `AGENTS.md` 指令
- workspace rules
- setup checklists
- safety checklists
- task templates
- recurring workflows
- 文件更新

但 Feeds 本身仍然是提示詞。

## Recommended Model Level

Feeds 最適合搭配高階推理模型。

Feed 不是確定性機制。不同 LLM 對同一個 Feed 可能有不同反應。

最佳做法：

- 解讀或套用 Feed 時使用強推理模型
- 生成或修改 Skills 時使用強推理模型
- 只有在 Feed 已轉成穩定指令、檢查清單或 Skills 後，才考慮改用低成本或本地模型
- 在允許生成的 Skills 執行命令、修改檔案、呼叫 API 或存取外部服務前，一律先審查

不要承諾每個模型都能同樣良好地遵循 Feed。請把模型差異視為正常現象，並仔細審查重要輸出。

## OpenClaw Usage

OpenClaw 是本 repo 的主要目標環境。公開文件顯示 OpenClaw 目前以 workspace、Skills、ClawHub skill discovery/install flow、plugins、channels，以及 Skills / tools 的安全審查為核心。

建議流程：

1. 啟動高階推理模型的 OpenClaw session。
2. 貼上 Feed。
3. 要求 OpenClaw 檢查目前 workspace。
4. 要求 OpenClaw 在改檔前提出計畫。
5. 審查提議的 Skill、指令、檢查清單或工作流變更。
6. 只批准安全且清楚的變更。
7. 測試生成的 Skill 或 workflow。
8. 用清楚的 changelog entry commit 變更。

詳見 [OpenClaw 使用方式](docs/openclaw-usage.md)。

## Hermes Agent Usage

Hermes Agent 相容性目前屬於探索性與概念性，除非已在實際 Hermes 環境驗證。

Hermes 的公開資料強調 learning loop、memory、從經驗建立 Skills，以及 long-running agent behavior。Feed-style prompts 可能適合作為 goal seeds、self-improvement seeds、skill-building prompts 或 workflow bootstrapping prompts。

未測試前，不應宣稱任何 Feed 具有 Hermes 原生支援。詳見 [Hermes Agent notes](docs/hermes-agent-notes.md)。

## Codex and IDE Agent Usage

Codex 可以使用 `AGENTS.md` 作為 repo-level guidance。Feeds 可以改寫成 `AGENTS.md` 區塊、setup prompts、task kickoff prompts 或 review checklists，但 Feeds 不等同於 `AGENTS.md`。

對 Codex、Claude Code、Cursor、Windsurf、Devin、GitHub Copilot coding agents、Gemini CLI 以及類似 IDE agents 而言，相容性取決於 workspace 存取能力、指令載入方式、工具支援與模型推理品質。

詳見 [Codex and IDE agents](docs/codex-and-ide-agents.md)。

## Feed Types

- **Baseline Feed**：一般行為調整、安全與推理紀律
- **Skill-Building Feed**：幫助 Agent 建立或改善 Skills
- **Workspace Bootstrapping Feed**：幫助 Agent 檢查並準備 workspace
- **Workflow Feed**：幫助建立可重複工作流
- **Domain Expert Feed**：傳達特定領域操作假設
- **Safety Feed**：加入審查、確認、rollback 與風險控制
- **Cross-Agent Feed**：設計給多種 Agent 環境使用

## Recommended Feed Format

每個 Feed 應保持輕量且實用：

- Purpose
- Recommended Agent / Model Level
- User Intent
- Best Used With
- Expected Agent Behavior
- Workspace Inspection Guidance
- Skill-Building Guidance
- Safety Guidance
- Suggested Output
- Feed Prompt

詳見 [Feed 格式](docs/feed-format.md)。

## Safety and Review

Feeds 可能讓高能力 Agent 提出或執行重大變更。刪除檔案、重寫架構、安裝依賴、執行 shell commands、存取 credentials、呼叫 external APIs、寫入 databases、部署 production、發布 packages、push 到 main branch、修改 security settings、修改 billing 或 payment systems 前，都應由使用者審查。

建議行為：先檢查、改檔前先規劃、列出變更檔案、說明風險、高風險操作先詢問確認、提供 rollback guidance、避免 hidden mutations、不捏造工具結果、未驗證前不宣稱已完成變更。

詳見 [Safety and review](docs/safety-and-review.md)。

## Repository Structure

```text
.
├── index.html
├── assets/
│   ├── css/style.css
│   └── js/main.js
├── feeds/
│   ├── packs.json
│   └── <feed-id>/
│       ├── README.md
│       ├── feed.md
│       ├── overview.md
│       ├── overview.en.md
│       ├── installation_guide.md
│       └── installation_guide.en.md
├── docs/
│   ├── feed-format.md
│   ├── openclaw-usage.md
│   ├── agent-compatibility.md
│   ├── hermes-agent-notes.md
│   ├── codex-and-ide-agents.md
│   ├── safety-and-review.md
│   └── roadmap.md
└── CHANGELOG.md
```

## Roadmap

詳見 [Roadmap](docs/roadmap.md)。

## Version v0.3 Notes

v0.3 將 OpenClaw Agent Feeds 重新定位為給高能力 AI Agents 使用的優化提示詞種子。本次更新釐清 Feeds 與 Skills 的關係、加入模型能力需求、擴展 OpenClaw、Hermes Agent、Codex 與 IDE agents 的相容性說明，並同步英文與繁體中文文件。

## v0.3 對齊參考

- [OpenClaw docs](https://openclawdoc.com/)
- [OpenClaw ClawHub docs](https://docs.openclaw.ai/tools/clawhub)
- [Hermes Agent learning loop](https://hermes-agent.ai/features/learning-loop)
- [Codex AGENTS.md guide](https://developers.openai.com/codex/guides/agents-md)

[English](README.en.md) | [MIT License](LICENSE)
