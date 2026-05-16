## v0.3 定位提醒

此 Feed 是優化提示詞種子，不是確定性協議、安裝程式或可執行套件。請搭配高階推理模型使用，並在允許 Agent 修改檔案、建立 Skills、呼叫 API、部署或觸及敏感資料前進行使用者審查。

**Feed 類型**：基線 Feed


# 🧠 [Prompt Seed] 意圖深度釐清器 (Deep Intent Clarifier)

### 📄 模組簡介
這將使代理在規劃、工具使用、回應結構與結果驗證上更穩定、更精確、更少臆測。本飼料包（Prompt Seed）專為**消滅溝通斷層與無效產出**而設計。它將您的代理升級為一位懂得「核對需求」的頂尖專案經理。藉由建議植入「審慎推理流程 (careful reasoning workflow)」，當代理接收到含糊不清或缺乏具體參數的指令時，它將盡量拒絕「瞎猜盲幹」，轉而啟動釐清分支 (Clarification Branch)，主動引導使用者收斂意圖。

### ⚙️ 技能協同 (Skill Synergy)
- **建議搭配**：適用於任何依賴精確 Prompt 的任務 (如寫程式、文案生成、資料查詢)。
- **協同效應**：將「釐清」視為所有工具調用前的最前置關卡。若 `Assess` 階段發現資訊熵過高 (太過模糊)，代理會切斷後續的 Search 或 Write 動作，直到收集足夠的約束條件。

### 🚀 適用情境與預期行為 (Use Case and Expected Behavior)
1. **條件分流 (Conditional Branches)**：將任何包含「隨便寫」、「幫我弄一下」的主觀指令，建議轉向 Clarification 分支，給出 2-3 個明確的選擇題供用戶確認。
2. **建議驗證 (Mandatory Verify)**：產出最終結果前，建議比對「最終交付物」是否與「釐清後的需求」完全咬合，不容許半點偏差。
3. **精準評估 (Check Capability)**：在啟動任何運算前，評估用戶提問中是否具備「Who (受眾)、What (格式)、Why (目的)」三大指標。
4. **全域常駐 (Pervasive Scope)**：處理任何非平凡任務、開放式提問或缺乏約束條件的請託時建議生效。

### 📋 建議模型
- **推薦版本**：Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **最低版本**：Gemini 3.1 Flash / GPT-5.1
