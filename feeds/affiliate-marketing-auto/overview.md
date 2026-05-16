## v0.3 定位提醒

此 Feed 是優化提示詞種子，不是確定性協議、安裝程式或可執行套件。請搭配高階推理模型使用，並在允許 Agent 修改檔案、建立 Skills、呼叫 API、部署或觸及敏感資料前進行使用者審查。

**Feed 類型**：工作流 Feed


# 🥦 [Prompt Seed] 聯盟行銷自動化 (Affiliate Marketing Auto)

### 📄 模組簡介
這將使代理在規劃、工具使用、回應結構與結果驗證上更穩定、更精確、更少臆測。本飼料包（Prompt Seed）專為**安全與穩定地生成高轉化率銷售內容**設計。它將代理的撰寫與分發流程封裝成「審慎推理流程 (careful reasoning workflow)」，建議代理在生產品析文本或修改推薦連結配置時，遵守嚴格的審查核對流程，避免因虛構產品屬性而損害品牌信任。

### ⚙️ 技能協同 (Skill Synergy)
- **建議搭配**：`search_web`, `write_to_file`, `run_command`
- **協同效應**：代理在生成任何銷售文案前，建議調用搜尋技能確認最新的產品屬性與定價。若要寫入靜態網頁或配置文件，則會受到 Inspect 與 Rollback-Ready 的變異護欄監管。

### 🚀 適用情境與預期行為 (Use Case and Expected Behavior)
1. **條件分流 (Conditional Branches)**：當提供的產品連結失效或政策不允許時，將觸發 Failure 分支停止營銷腳本。
2. **建議驗證 (Mandatory Verify)**：產出內容後，建議自我核對文案中的 CTA (呼籲行動) 連結是否與指定的 Affiliate 參數對應。
3. **精準評估 (Check Tooling)**：評估自身是否具備文件覆寫與爬蟲權限以達成營銷探勘。
4. **全域常駐 (Pervasive Scope)**：所有涉及產品推薦、清單整理與銷售文案撰寫的任務皆受到此指引管轄。

### 📋 建議模型
- **推薦版本**：Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **最低版本**：Gemini 3.1 Flash / GPT-5.1
