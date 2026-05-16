## v0.3 定位提醒

此 Feed 是優化提示詞種子，不是確定性協議、安裝程式或可執行套件。請搭配高階推理模型使用，並在允許 Agent 修改檔案、建立 Skills、呼叫 API、部署或觸及敏感資料前進行使用者審查。

**Feed 類型**：安全 Feed


# 🚨 [Prompt Seed] 安全審查執行官 (Safety Review Enforcer)

### 📄 模組簡介
這將使 AI Agents 在規劃、工具使用、回應結構與結果驗證上更穩定、更精確、更少臆測。本飼料包（Prompt Seed）專為**最高層級的安全與架構標準監控**而設計。它將您的父節點 (Root Agent) 升級為嚴格的紀律委員。透過使用「審慎推理流程 (careful reasoning workflow)」，強迫 AI Agents 在推行任何可能修改全域設定、覆寫核心檔案或超越權限的操作前，應進入建議覆核 (Mandatory Verify) 流程，徹底阻斷代理因「幻覺」而損壞工作區基礎架構的風險。

### ⚙️ 技能協同 (Skill Synergy)
- **建議搭配**：工作區內的終端機執行工具 (`run_command`), 檔案寫入工具 (`write_to_file`)
- **協同效應**：將「系統安全查核」設立在任何破壞性指令之前。當子代理或用戶下達 `rm -rf`, `DROP TABLE`, 或大規模重構指令時，`Safety Review Enforcer` 會建議攔截並要求解釋。

### 🚀 適用情境與預期行為 (Use Case and Expected Behavior)
1. **條件分流 (Conditional Branches)**：當接收到的操作指令牽涉到 1 級系統層面變更時，建議跳開執行路徑，進入 Clarification 分支要求操作授權。
2. **建議驗證 (Mandatory Verify)**：在放行任何檔案覆寫前，建議驗證該檔案是否被標記為「保護 (Protected)」，若是，則建議生成 Backup 的前置操作。
3. **精準評估 (Check Tooling/Scope)**：評估指令的「破壞半徑 (Blast Radius)」。如果預估影響超過單一模組，便拒絕一次性執行，勒令拆分為安全步驟。
4. **全域常駐 (Pervasive Scope)**：所有涉及系統指令、依賴套件升級、資料庫遷移與多文件重構的任務建議生效。

### 📋 建議模型
- **推薦版本**：Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **最低版本**：拒絕使用 Flash / 輕量模型執行此根權限指引
