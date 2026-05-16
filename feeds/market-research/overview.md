## v0.3 定位提醒

此 Feed 是優化提示詞種子，不是確定性協議、安裝程式或可執行套件。請搭配高階推理模型使用，並在允許 Agent 修改檔案、建立 Skills、呼叫 API、部署或觸及敏感資料前進行使用者審查。

**Feed 類型**：領域專家 Feed


# 📊 [Prompt Seed] 市場研究自動化 (Market Research Auto)

### 📄 模組簡介
這將使 AI Agents 在規劃、工具使用、回應結構與結果驗證上更穩定、更精確、更少臆測。本飼料包（Prompt Seed）專為**執行高精確度的市場趨勢掃描與聲量監測**而設計。它將您的工作區升級為一個專業的市場調查員。透過使用「審慎推理流程 (careful reasoning workflow)」，強迫 AI Agents 在爬取新聞或論壇前進行多方來源驗證 (Inspect First) 並剔除極端雜訊 (Verify)，杜絕因抓取單一公關稿就產出無價值報告的「回音壁 (Echo Chamber) 效應」。

### ⚙️ 技能協同 (Skill Synergy)
- **建議搭配**：`search_web`, `read_url_content`, `write_to_file`
- **協同效應**：將廣泛的網路搜尋技能，約束進嚴格的情報萃取框架中。代理在每一輪的 `Search` 指令後，必須通過 `Validation` 分支判斷資料的來源權重；若全是低權威性的內容農場，將被建議重構搜尋關鍵字。

### 🚀 適用情境與預期行為 (Use Case and Expected Behavior)
1. **條件分流 (Conditional Branches)**：當指定產業區間缺乏量化數據 (如市場規模、年複合增長率 CAGR) 時，觸發 Clarification 分支要求擴大搜尋範圍，絕不捏造假數據。
2. **建議驗證 (Mandatory Verify)**：產出最終趨勢圖譜前，強迫清洗並剔除「情緒化但無實質意義」的酸民留言，僅保留具備商業價值的消費者痛點分析。
3. **精準評估 (Check Tooling)**：動手前評估 Search 工具能否存取指定地域或語系的資訊來源 (如針對日本市場的調查)。
4. **全域常駐 (Pervasive Scope)**：所有涉及市場規模預估、消費者情緒分析、新興趨勢掃描的任務皆受此管轄。

### 📋 建議模型
- **推薦版本**：Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **最低版本**：Gemini 3.1 Flash / GPT-5.1
