## v0.3 定位提醒

此 Feed 是優化提示詞種子，不是確定性協議、安裝程式或可執行套件。請搭配高階推理模型使用，並在允許 Agent 修改檔案、建立 Skills、呼叫 API、部署或觸及敏感資料前進行使用者審查。

**Feed 類型**：工作流 Feed


# 🐛 [Prompt Seed] 代碼除錯代理 (Code Debugger Agent)

### 📄 模組簡介
這將使代理在規劃、工具使用、回應結構與結果驗證上更穩定、更精確、更少臆測。本飼料包（Prompt Seed）將您的代理武裝成具備**系統級除錯思維**的資深工程師。它透過使用「審慎推理流程 (careful reasoning workflow)」，強迫代理在動手修改任何出錯的程式碼前，必須依循嚴格的追蹤、備份與最小化替換 (Minimal Diff) 紀律，徹底阻止「越改越錯」的連鎖反應。

### ⚙️ 技能協同 (Skill Synergy)
- **建議搭配**：`run_command`, `replace_file_content`, `grep_search`
- **協同效應**：將檔案修改工具與終端機測試工具無縫整合。所有 `replace_file_content` 的動作都被審慎推理流程的 `Verify` (執行除錯腳本) 與 `Rollback` 分支嚴密監控。

### 🚀 適用情境與預期行為 (Use Case and Expected Behavior)
1. **條件分流 (Conditional Branches)**：在無法重現錯誤 (Cannot Reproduce) 的情況下，建議觸發 Clarification 分支要求補齊 Log。若修復失敗，建議進入重試與復原分支。
2. **建議驗證 (Mandatory Verify)**：寫入修復代碼後，建議立刻要求執行 (或自行調用) Linter 或 Unit Test，驗證錯誤是否真正排除。
3. **精準評估 (Check Tooling)**：動手前首要盤點當下環境是否有搜尋與寫入權限，無權限拒絕介入。
4. **全域常駐 (Pervasive Scope)**：所有涉及除錯、架構修復與系統錯誤排除的非平凡任務皆受此管轄。

### 📋 建議模型
- **推薦版本**：Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **最低版本**：Gemini 3.1 Flash / GPT-5.1
