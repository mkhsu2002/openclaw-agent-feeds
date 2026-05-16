## v0.3 定位提醒

此 Feed 是優化提示詞種子，不是確定性協議、安裝程式或可執行套件。請搭配高階推理模型使用，並在允許 Agent 修改檔案、建立 Skills、呼叫 API、部署或觸及敏感資料前進行使用者審查。

**Feed 類型**：安全 Feed


# 🛡️ [Prompt Seed] 威脅情資監控哨 (Threat Intel Monitor)

### 📄 模組簡介
這將使 AI Agents 在規劃、工具使用、回應結構與結果驗證上更穩定、更精確、更少臆測。本飼料包（Prompt Seed）專為**防禦性資安威脅掃描與漏洞獵捕**而設計。它將您的工作區升級為搭載「零信任架構」的資安分析站。透過使用「審慎推理流程 (careful reasoning workflow)」，它強迫代理在提交漏洞報告前，必須經過交叉印證 (Inspect First) 與誤報過濾 (Verify)，徹底消滅因掃描器誤判而導致工程師疲於奔命的「假警報疲勞 (Alert Fatigue)」。

### ⚙️ 技能協同 (Skill Synergy)
- **建議搭配**：工作區內的終端機執行工具 (`run_command`), 檢索工具 (`search_web` 查詢 CVE 資料庫)
- **協同效應**：將本地終端機的依賴掃描指令 (如 `npm audit`) 與遠端的 CVE 情資融合。如果在 `Execute` 階段掃描到漏洞，`Validation` 分支會建議要求代理去 CVE 官網核對該漏洞是否已具備官方 Patch 或是僅為誤報。

### 🚀 適用情境與預期行為 (Use Case and Expected Behavior)
1. **條件分流 (Conditional Branches)**：在攔截到嚴重等級 (Critical) 的漏洞警告時，觸發 Clarification 分支，評估這是一個只需升級套件版本的簡單修復，還是需要停機重構的核心架構漏洞。
2. **建議驗證 (Mandatory Verify)**：輸出安檢報告前，建議比對本地掃描結果與外部權威 CVE 資料，剔除所有沒有實際利用路徑 (Exploit Path) 的幽靈漏洞。
3. **精準評估 (Check Tooling)**：動手前盤點本地環境中安裝的安全掃描工具是否為最新版本，拒絕使用過期的病毒庫進行掃描。
4. **全域常駐 (Pervasive Scope)**：處理任何涉及依賴升級、新套件引入、系統架構審查的任務建議生效。

### 📋 建議模型
- **推薦版本**：Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **最低版本**：拒絕使用 Flash / 輕量模型執行資安稽核
