# 🛡 [Training Feed] 龍蝦通用核心飼料 (Universal Core L0)

### 📄 模組簡介
本飼料包（Training Feed）是所有 OpenClaw 代理的基礎出廠變異層。它旨在為任何工作區注入「真實狀態機 (True State Machine)」邏輯，不僅提供標準操作流程，更包含失敗、釐清與驗證的分支防禦機制。它定義了代理在非平凡任務中的全域行為護欄，而不涉及對工作區檔案的破壞性修改。

### ⚙️ 技能協同 (Skill Synergy)
- **建議搭配**：適用於任何 Skills/Plugins 生態。
- **協同效應**：作為底層護欄，本協議不干預具體工具的執行，但強制要求在任何調用 (Tooling、修改、外部呼叫) 前後，代理必須通過「能力盤點 (Assess)」與「成效驗證 (Verify)」的循環，避免盲目執行與臆測。

### 🚀 變異目標與協議 (Mutation Target)
1. **條件分流狀態機 (Conditional Branches)**：跳脫直線思考，注入包含釐清、驗證與失敗重試的完整決策樹。
2. **全域常駐 (Pervasive Scope)**：要求在所有非平凡任務中嚴格遵守，不限於複雜問題。
3. **強制驗證 (Mandatory Verify)**：在輸出或行動後強制加上自查 (Self-Check) 的環節。
4. **靜默運行 (Silent Residency)**：協議載入後靜默生效，不產生無意義的對話確認，維持高度專業性。

### 📋 建議模型
- **推薦版本**：Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **最低版本**：Gemini 3.1 Flash / GPT-5.1
