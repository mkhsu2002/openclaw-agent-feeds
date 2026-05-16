# Safety and Review / 安全與審查

> v0.3 note: This document reflects the Cross-Agent Prompt Seed Update.
> v0.3 說明：本文對應 Cross-Agent Prompt Seed Update。

Feeds may cause high-capability agents to propose or perform significant changes.

Feeds 可能讓高能力 Agent 提出或執行重大變更。

## Review Before / 執行前請先審查

Users should review before:

- deleting files
- rewriting architecture
- installing dependencies
- running shell commands
- accessing credentials
- calling external APIs
- writing to databases
- deploying to production
- publishing packages
- pushing to main branch
- modifying security settings
- modifying billing or payment systems

使用者應在以下行為前審查：

- 刪除檔案
- 重寫架構
- 安裝 dependencies
- 執行 shell commands
- 存取 credentials
- 呼叫 external APIs
- 寫入 databases
- 部署 production
- 發布 packages
- push 到 main branch
- 修改 security settings
- 修改 billing 或 payment systems

## Recommended Safety Behavior / 建議安全行為

- inspect first
- plan before edit
- show changed files
- explain risks
- ask confirmation for high-risk operations
- provide rollback guidance
- avoid hidden mutations
- do not fabricate tool results
- do not claim changes were made unless verified

---

- 先檢查
- 改檔前先規劃
- 顯示變更檔案
- 說明風險
- 高風險操作前詢問確認
- 提供 rollback guidance
- 避免 hidden mutations
- 不捏造工具結果
- 未驗證前不宣稱已完成變更

## Skill Review / Skill 審查

Before accepting generated Skills, inspect:

- purpose and trigger conditions
- permissions and tool assumptions
- scripts and commands
- API calls and network access
- credential handling
- filesystem access
- test plan
- rollback plan
- documentation and changelog

接受生成 Skills 前，請檢查目的與觸發條件、權限與工具假設、scripts / commands、API calls / network access、credential handling、filesystem access、test plan、rollback plan、文件與 changelog。

