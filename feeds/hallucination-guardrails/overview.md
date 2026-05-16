## v0.3 定位提醒

此 Feed 是優化提示詞種子，不是確定性協議、安裝程式或可執行套件。請搭配高階推理模型使用，並在允許 Agent 修改檔案、建立 Skills、呼叫 API、部署或觸及敏感資料前進行使用者審查。

**Feed 類型**：安全 Feed


# 🛡 [Prompt Seed] 反幻覺邏輯護欄 (Hallucination Guardrails)

### 模組簡介
這將使代理在規劃、工具使用、回應結構與結果驗證上更穩定、更精確、更少臆測。

本飼料包（Prompt Seed）專精於**事實查核與防禦幻覺**。它為您的 OpenClaw 工作區使用了「查證優先」的審慎推理流程 (careful reasoning workflow) (careful reasoning workflow)，建議代理在處理包含具體數據、名詞或歷史事實的任務時，必須進入嚴格的交叉驗證迴圈，絕不憑空捏造。

### ⚙️ 技能協同 (Skill Synergy)
- **建議搭配**：`search_web`, `read_url`
- **協同效應**：代理在 Execute 之前，必須建議調用 Search 技能。若工具不可用，將觸發 Failure Branch 主動告知用戶，而不會嘗試盲目作答。

### 🚀 適用情境與預期行為 (Use Case and Expected Behavior)
1. **條件分流 (Conditional Branches)**：內建完整的查核分支。若搜尋無結果，直接進入失敗回報；若多方資訊衝突，進入釐清分支。
2. **建議驗證 (Mandatory Verify)**：輸出前必須自檢所有「宣稱 (Claims)」是否附有來源標記。
3. **精準評估 (Check Tooling)**：接收任務後首要動作是盤點搜尋工具是否就緒。
4. **靜默運行 (Silent Residency)**：底層常駐不干擾日常對話，默默守護事實底部。

### 📋 建議模型
- **推薦版本**：Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **最低版本**：Gemini 3.1 Flash / GPT-5.1
