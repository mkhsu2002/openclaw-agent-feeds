## v0.3 定位提醒

此 Feed 是優化提示詞種子，不是確定性協議、安裝程式或可執行套件。請搭配高階推理模型使用，並在允許 Agent 修改檔案、建立 Skills、呼叫 API、部署或觸及敏感資料前進行使用者審查。

**Feed 類型**：基線 Feed


# 🛡 [Prompt Seed] 龍蝦高一致性代理框架 (High-Precision Reasoning Feed)

### 📄 模組簡介
這使代理在規劃、工具使用、回應結構與結果驗證上更穩定、更精確、更少臆測。本飼料包（Prompt Seed）專為要求**極端執行精確度**的場景設計。它透過將代理流程硬化為「審慎推理流程 (careful reasoning workflow)」，強勢消除 LLM 生成時的「即興發揮」與隨機性，確保相同的情境永遠產出一致的可審查的報告與決策。

### ⚙️ 技能協同 (Skill Synergy)
- **建議搭配**：適用於任何知識檢索與邏輯分析模組。
- **協同效應**：代理在 Execute 各個工具前，必須先套用嚴苛的樹狀推論。若中途工具超時或報錯，代理將精準觸發防呆機制，而非胡亂臆測填補漏洞。

### 🚀 適用情境與預期行為 (Use Case and Expected Behavior)
1. **條件分流 (Conditional Branches)**：將「也許可以這樣」的含糊推論升級為明確的 IF-THEN-ELSE 失敗及釐清分支。
2. **建議驗證 (Mandatory Verify)**：產出結果前，建議比對「輸入變數」與「輸出結果」是否具備嚴謹的邏輯推演因果關係。
3. **精準評估 (Check Capability)**：任務啟動時，盤點當下資訊是否達成執行條件。未達門檻時嚴禁動手。
4. **全域常駐 (Pervasive Scope)**：處理任何非平凡任務、數學運算、數據審計等關鍵決策時生效。

### 📋 建議模型
- **推薦版本**：Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **最低版本**：Gemini 3.1 Flash / GPT-5.1
