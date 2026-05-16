# OpenClaw Agent Feeds

用於建置更好 AI Agent Skills、指令與工作流的優化提示詞種子。

Optimized prompt seeds for building better AI agent skills, instructions, and workflows.

目前版本 / Current version: **v0.3**

OpenClaw Skills 教 Agent「能做什麼」。
Agent Feeds 幫助使用者告訴 Agent「應該理解什麼、考慮什麼、建置什麼，以及避免什麼」。

OpenClaw Skills teach agents what they can do.
Agent Feeds help users explain what they want the agent to understand, consider, build, and avoid.

Feed 是一種為高階 AI Agent session 設計的優化提示詞種子。它能幫助 Agent 解讀使用者意圖、檢查目前 workspace、推理最安全且最有用的建置方式，並在適當時生成或更新 Skills、指令、設定、檢查清單或工作流。

A Feed is a carefully designed prompt seed intended for high-capability AI agent sessions. It helps the agent interpret user intent, inspect the current workspace, reason about the safest and most useful implementation path, and generate or update Skills, instructions, settings, checklists, or workflows when appropriate.

Feeds 不是協議、安裝程式，也不是可執行套件。Feeds 是人類意圖與 Agent 執行能力之間的提示詞溝通種子。

Feeds are not protocols, installers, or executable packages. They are prompt-based communication seeds between human intent and agent execution.

官方網站 / Official site: [https://openclawfeeds.icareu.tw/](https://openclawfeeds.icareu.tw/)

## What is a Feed?

Feed is an optimized prompt seed for a capable AI agent. It communicates intent, constraints, preferred workflows, safety expectations, and skill-building goals.

Feed 是為高能力 AI Agent 設計的優化提示詞種子，用來傳達意圖、限制條件、偏好工作流、安全期待與 Skill 建置目標。

## What Feeds Are Not / Feeds 不是什麼

Feeds are not deterministic protocols.
Feeds are not automatic installers.
Feeds are not replacements for OpenClaw Skills.
Feeds are not guaranteed to produce identical results across different models.
Feeds are not meant to bypass user review.

Feeds 不是確定性協議。
Feeds 不是自動安裝程式。
Feeds 不是 OpenClaw Skills 的替代品。
Feeds 不保證在不同模型上產生完全一致的結果。
Feeds 不應跳過使用者審查。

A Feed is an optimized prompt seed. It works best when interpreted by a capable reasoning model inside an agent environment with appropriate tools and context.

Feed 是一種優化提示詞種子，最適合由具備高階推理能力的模型，在具有適當工具與上下文的 Agent 環境中解讀與執行。

## Why Feeds Matter Even When Skills Exist

Skills are capability packages. Feeds are prompt seeds that help agents decide how to create, update, combine, or use capabilities.

Skills answer: **What can the agent do?**
Feeds answer: **How should the agent understand this task, inspect the environment, decide what capabilities are needed, and safely build or use them?**

Skills 是能力套件。Feeds 是幫助 Agent 判斷如何建立、更新、組合或使用能力的提示詞種子。

Skills 回答：**Agent 能做什麼？**
Feeds 回答：**Agent 應如何理解這個任務、檢查環境、判斷需要哪些能力，並安全地建立或使用它們？**

Feeds may lead to new or updated Skills, `AGENTS.md` instructions, workspace rules, setup checklists, safety checklists, task templates, recurring workflows, and documentation updates. But Feeds themselves remain prompts.

Feeds 可能引導 Agent 建立或更新 Skills、`AGENTS.md` 指令、workspace rules、setup checklists、safety checklists、task templates、recurring workflows 與文件。但 Feeds 本身仍然是提示詞。

## Recommended Model Level

Feeds work best with high-capability reasoning models. A Feed is not deterministic. Different LLMs may react differently to the same Feed.

For best results, use a strong reasoning model when interpreting a Feed or generating/modifying Skills. Use lower-cost or local models only after the Feed has been converted into stable instructions, checklists, or Skills. Always review generated Skills before allowing command execution, file modification, API calls, or external service access.

Feeds 最適合搭配高階推理模型。Feed 不是確定性機制，同一個 Feed 在不同 LLM 上可能有不同效果。

## OpenClaw Usage

OpenClaw is the primary target environment. Use Feeds in high-capability OpenClaw sessions to inspect workspace state, create or update Skills, generate workspace instructions, and refine agent behavior. OpenClaw-specific outputs may include Skills, workspace instructions, or ClawHub-oriented skill packaging when appropriate.

OpenClaw 是主要目標環境。建議在高階推理模型的 OpenClaw session 中使用 Feed，先檢查 workspace，再提出計畫，最後才產生或更新 Skill、指令、檢查清單或工作流。

See / 詳見: [docs/openclaw-usage.md](docs/openclaw-usage.md)

## Hermes Agent Usage

Hermes Agent compatibility is exploratory unless verified. Hermes appears to emphasize self-improvement, memory, skill creation from experience, and long-running agent behavior. Feeds may be useful as goal seeds, skill-building seeds, memory-shaping prompts, or workflow bootstrapping prompts.

Hermes Agent 相容性目前屬探索性。Feeds 可作為 goal seeds、learning seeds、skill-building seeds、memory-shaping prompts 或 workflow bootstrapping prompts，但未測試前不應宣稱原生支援。

See / 詳見: [docs/hermes-agent-notes.md](docs/hermes-agent-notes.md)

## Codex and IDE Agent Usage

Codex can use `AGENTS.md` for repo-level guidance. Feeds can be adapted into `AGENTS.md` sections, setup prompts, task kickoff prompts, or safety and review checklists. For Cursor, Claude Code, Windsurf, GitHub Copilot coding agents, Gemini CLI, Devin, and similar IDE agents, compatibility depends on workspace access, instruction loading, tools, and model reasoning quality.

Codex 可使用 `AGENTS.md` 作為 repo-level guidance。Feeds 可改寫成 `AGENTS.md` 區塊、setup prompts、task kickoff prompts 或安全審查清單。其他 IDE agents 的相容性需逐一評估。

See / 詳見: [docs/codex-and-ide-agents.md](docs/codex-and-ide-agents.md)

## Feed Types

- Baseline Feed / 基線 Feed
- Skill-Building Feed / Skill 建置 Feed
- Workspace Bootstrapping Feed / 工作空間啟動 Feed
- Workflow Feed / 工作流 Feed
- Domain Expert Feed / 領域專家 Feed
- Safety Feed / 安全 Feed
- Cross-Agent Feed / 跨 Agent Feed

## Recommended Feed Format

Recommended sections: Purpose, Recommended Agent / Model Level, User Intent, Best Used With, Expected Agent Behavior, Workspace Inspection Guidance, Skill-Building Guidance, Safety Guidance, Suggested Output, and Feed Prompt.

建議欄位：Purpose、Recommended Agent / Model Level、User Intent、Best Used With、Expected Agent Behavior、Workspace Inspection Guidance、Skill-Building Guidance、Safety Guidance、Suggested Output、Feed Prompt。

See / 詳見: [docs/feed-format.md](docs/feed-format.md)

## Safety and Review

Review before deleting files, rewriting architecture, installing dependencies, running shell commands, accessing credentials, calling external APIs, writing to databases, deploying to production, publishing packages, pushing to main, modifying security settings, or modifying billing/payment systems.

刪除檔案、重寫架構、安裝依賴、執行 shell commands、存取 credentials、呼叫 external APIs、寫入 databases、部署 production、發布 packages、push 到 main、修改 security settings、修改 billing/payment systems 前，請先審查。

See / 詳見: [docs/safety-and-review.md](docs/safety-and-review.md)

## Repository Structure

```text
.
├── index.html
├── assets/
├── docs/
├── feeds/
│   ├── packs.json
│   └── <feed-id>/
│       ├── README.md
│       ├── feed.md
│       ├── overview.md
│       ├── overview.en.md
│       ├── installation_guide.md
│       └── installation_guide.en.md
└── CHANGELOG.md
```

## Roadmap

See / 詳見: [docs/roadmap.md](docs/roadmap.md)

## Version v0.3 Notes

v0.3 repositions OpenClaw Agent Feeds as optimized prompt seeds for high-capability AI agents. They help users turn intent into better Skills, instructions, workflows, and safer agent behavior.

v0.3 將 OpenClaw Agent Feeds 重新定位為高能力 AI Agents 的優化提示詞種子，幫助使用者把意圖轉成更好的 Skills、指令、工作流與更安全的 Agent 行為。

## Sources Used for v0.3 Alignment / v0.3 對齊參考

- [OpenClaw docs](https://openclawdoc.com/)
- [OpenClaw ClawHub docs](https://docs.openclaw.ai/tools/clawhub)
- [Hermes Agent learning loop](https://hermes-agent.ai/features/learning-loop)
- [Codex AGENTS.md guide](https://developers.openai.com/codex/guides/agents-md)

[English](README.en.md) | [繁體中文](README.zh-TW.md) | [MIT License](LICENSE)
