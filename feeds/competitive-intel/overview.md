## v0.3 定位提醒

此 Feed 是優化提示詞種子，不是確定性協議、安裝程式或可執行套件。請搭配高階推理模型使用，並在允許 Agent 修改檔案、建立 Skills、呼叫 API、部署或觸及敏感資料前進行使用者審查。

**Feed 類型**：領域專家 Feed


# 📊 [Prompt Seed] 競爭情報代理 (Competitive Intel Agent)

### 📄 模組簡介
這將使代理在規劃、工具使用、回應結構與結果驗證上更穩定、更精確、更少臆測。本飼料包（Prompt Seed）專為**客觀且系統化產出商業情報決策**設計。它將您的代理升級為頂尖的策略分析師。透過使用「審慎推理流程 (careful reasoning workflow)」，強迫代理在收集競品資料與輸出報告前，必須經過交叉驗證與客觀性查核，徹底杜絕因資訊不全導致的「報喜不報憂」或戰略幻覺。

### ⚙️ 技能協同 (Skill Synergy)
- **建議搭配**：`search_web`, `read_url_content`, `write_to_file`
- **協同效應**：將網頁爬取工具與深入的商業邏輯框架結合。所有情報彙整與檔案寫出皆受到審慎推理流程的 `Inspect First` (檢視多方來源) 與 `Verify` (客觀性自檢) 分支嚴密看守。

### 🚀 適用情境與預期行為 (Use Case and Expected Behavior)
1. **條件分流 (Conditional Branches)**：當無法取得足夠的對手定價或規格時，建議進入 Failure 分支回報空白，嚴禁用猜測填補圖表。
2. **建議驗證 (Mandatory Verify)**：產出最終比較矩陣前，建議要求驗證文中是否包含過度主觀的修辭 (例如：我們盡量完勝)，建議將其轉換為客觀的機率與數據支撐。
3. **精準評估 (Check Tooling)**：動手前首要確認搜尋與爬蟲技能是否能突破對手官網的阻擋。
4. **全域常駐 (Pervasive Scope)**：所有涉及商業情報、SWOT 分析、定價策略與對手差距分析的任務皆受此管轄。

### 📋 建議模型
- **推薦版本**：Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **最低版本**：Gemini 3.1 Flash / GPT-5.1
