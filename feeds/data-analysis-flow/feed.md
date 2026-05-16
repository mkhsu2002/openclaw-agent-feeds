# Data Analysis Flow

> Version / 版本: v0.3

## Purpose / 目的

Data analysis workflow prompt seed for data inspection, assumptions, analysis, and output validation.

資料分析工作流提示詞種子，幫助 Agent 檢查資料、說明假設、產生分析與驗證輸出。

## Recommended Agent / Model Level / 建議 Agent 與模型等級

Use a high-capability reasoning model when interpreting this Feed, especially if it may lead to file changes, Skill creation, API calls, or external service access. Lower-cost or local models are better used after the Feed has been converted into reviewed instructions, checklists, or Skills.

解讀此 Feed 時建議使用高階推理模型，尤其當它可能導致檔案修改、Skill 建立、API 呼叫或外部服務存取。低成本或本地模型較適合在 Feed 已轉成經審查的指令、檢查清單或 Skills 後使用。

## User Intent / 使用者意圖

Help the agent understand what the user wants to build, improve, inspect, avoid, or turn into reusable guidance.

幫助 Agent 理解使用者想建置、改善、檢查、避免什麼，或想將什麼轉成可重複使用的指引。

## Best Used With / 最適合搭配

- OpenClaw
- Codex / IDE agents
- Hermes Agent experiments
- Existing Skills or workspace instructions when relevant

## Expected Agent Behavior / 預期 Agent 行為

The agent should acknowledge the goal briefly, inspect available workspace context, identify relevant capabilities, propose a plan, ask for confirmation on high-risk actions, and only then generate or update Skills, instructions, checklists, workflows, or files.

Agent 應簡短確認目標、檢查可用 workspace context、辨識相關能力、提出計畫，對高風險行為先詢問確認，然後才生成或更新 Skills、指令、檢查清單、工作流或檔案。

## Workspace Inspection Guidance / 工作空間檢查指引

Inspect relevant files, existing Skills, instructions, configuration, dependencies, scripts, tests, and deployment context before proposing changes.

在提出變更前，檢查相關檔案、既有 Skills、指令、設定、dependencies、scripts、tests 與 deployment context。

## Skill-Building Guidance / Skill 建置指引

If a reusable capability is useful, propose a Skill or instruction update first. Explain scope, trigger conditions, required tools, safety limits, and test steps before writing files.

若可重複使用能力有價值，先提出 Skill 或指令更新。寫檔前說明 scope、trigger conditions、required tools、safety limits 與 test steps。

## Safety Guidance / 安全指引

Ask for confirmation before destructive changes, credential access, shell commands with side effects, external API calls, database writes, deployments, package publishing, or billing/security changes.

破壞性變更、credential access、有副作用的 shell commands、external API calls、database writes、deployments、package publishing 或 billing/security changes 前，請先詢問確認。

## Suggested Output / 建議輸出

1. Goal summary
2. Workspace findings
3. Proposed plan
4. Risks and required confirmations
5. Suggested Skill/instruction/checklist/workflow changes
6. Verification steps

## Feed Prompt / Feed 提示詞

See the copy-paste prompts in [installation_guide.md](installation_guide.md) and [installation_guide.en.md](installation_guide.en.md).
