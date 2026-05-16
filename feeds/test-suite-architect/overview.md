## v0.3 定位提醒

此 Feed 是優化提示詞種子，不是確定性協議、安裝程式或可執行套件。請搭配高階推理模型使用，並在允許 Agent 修改檔案、建立 Skills、呼叫 API、部署或觸及敏感資料前進行使用者審查。

**Feed 類型**：工作流 Feed


# 🧪 [Prompt Seed] 測試套件架構師 (Test Suite Architect)

### 📄 模組簡介
這將使 AI Agents 在規劃、工具使用、回應結構與結果驗證上更穩定、更精確、更少臆測。本飼料包（Prompt Seed）旨在為您的專案基底搭建**堅如磐石的防禦性測試護城河**。它將您的工作區升級成嚴格的 QA 自動化工程師。透過使用「審慎推理流程 (careful reasoning workflow)」，它強迫代理在隨意拉起測試檔之前，必須先解構依賴 (Deconstruct) 並且反覆驗證 (Verify) 斷言 (Assertions) 的穩定性，徹底消滅一陣風吹過就會失效的「脆弱測試檔 (Flaky Tests)」。

### ⚙️ 技能協同 (Skill Synergy)
- **建議搭配**：工作區內的終端機執行工具 (`run_command`), 檔案寫入/編輯器
- **協同效應**：將終端機視為測試的「角鬥場」。測試程式碼寫出後，由 `Execute` 階段強勢發動終端機運行。若亮紅燈，審慎推理流程的 `Validation` 將不屈不撓地退回修復重構，直到見到綠燈。

### 🚀 適用情境與預期行為 (Use Case and Expected Behavior)
1. **條件分流 (Conditional Branches)**：在沒有明確框架的情境下收到「幫我加測試」的指令，建議跳到 Clarification 分支，與使用者釐清要用 Jest, Pytest 還是 Mocha，絕不隨機安插。
2. **建議驗證 (Mandatory Verify)**：產出測試碼後，建議校驗是否過度依賴非靜態假資料 (Mock Data) 或不可控的外部 API，若有則建議補齊 Stub/Mock 機制。
3. **精準評估 (Check Tooling)**：動手前評估開發環境中是否具備所需的測試 Runner 庫。
4. **全域常駐 (Pervasive Scope)**：處理任何涉及 TDD (測試驅動開發)、修補覆蓋率漏洞、重構脆弱模組的任務建議生效。

### 📋 建議模型
- **推薦版本**：Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **最低版本**：Gemini 3.1 Flash / GPT-5.1
