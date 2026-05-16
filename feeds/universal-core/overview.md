## v0.3 定位提醒

此 Feed 是優化提示詞種子，不是確定性協議、安裝程式或可執行套件。請搭配高階推理模型使用，並在允許 Agent 修改檔案、建立 Skills、呼叫 API、部署或觸及敏感資料前進行使用者審查。

**Feed 類型**：基線 Feed


# 🛡 [Prompt Seed] 龍蝦通用核心飼料 (Universal Core L0)

### 模組簡介
這將使代理在規劃、工具使用、回應結構與結果驗證上更穩定、更精確、更少臆測。

本飼料包（Prompt Seed）是所有 OpenClaw 代理的基礎基底操作層 (Baseline Operating Layer)。它旨在為任何工作區使用「審慎推理流程 (careful reasoning workflow) (careful reasoning workflow)」邏輯，不僅提供標準操作流程，更包含失敗、釐清與驗證的分支防禦機制。它定義了代理在非平凡任務中的全域行為護欄，而不涉及對工作區檔案的破壞性修改。

### ⚙️ 技能協同 (Skill Synergy)
- **建議搭配**：適用於任何 Skills/Plugins 生態。
- **協同效應**：作為底層護欄，本指引不干預具體工具的執行，但建議要求在任何調用 (Tooling、修改、外部呼叫) 前後，代理必須通過「能力盤點 (Assess)」與「成效驗證 (Verify)」的循環，避免盲目執行與臆測。

### 🚀 適用情境與預期行為 (Use Case and Expected Behavior)
1. **條件分流審慎推理流程 (Conditional Branches)**：跳脫直線思考，使用包含釐清、驗證與失敗重試的完整決策樹。
2. **全域常駐 (Pervasive Scope)**：要求在所有非平凡任務中參考，不限於複雜問題。
3. **建議驗證 (Mandatory Verify)**：在輸出或行動後建議加上自查 (Self-Check) 的環節。
4. **靜默運行 (Silent Residency)**：指引載入後靜默生效，不產生無意義的對話確認，維持高度專業性。

### 📋 建議模型
- **推薦版本**：Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **最低版本**：Gemini 3.1 Flash / GPT-5.1
