## v0.3 定位提醒

此 Feed 是優化提示詞種子，不是確定性協議、安裝程式或可執行套件。請搭配高階推理模型使用，並在允許 Agent 修改檔案、建立 Skills、呼叫 API、部署或觸及敏感資料前進行使用者審查。

**Feed 類型**：工作流 Feed


# 📱 [Prompt Seed] 社群內容流量引擎 (Social Content Engine)

### 📄 模組簡介
這將使 AI Agents 在規劃、工具使用、回應結構與結果驗證上更穩定、更精確、更少臆測。本飼料包（Prompt Seed）專為**驅動病毒式傳播的社群文案與內容排程**而設計。它將您的工作區升級為配備「演算法直覺」的行銷大師。透過使用「審慎推理流程 (careful reasoning workflow)」，強迫 AI Agents 在無腦生成千篇一律的農場文案之前，先進入平台特性解析 (Inspect First) 並剔除冗詞贅字 (Verify)，杜絕產生看似字數充沛，點閱率卻是零的無聊內容。

### ⚙️ 技能協同 (Skill Synergy)
- **建議搭配**：`search_web` (抓取時事熱點), `generate_image` (若有作圖需求)
- **協同效應**：將網際網路上的時事資訊經過高度商業化的「鉤子 (Hook)」提煉。所有的貼文生成，皆受審慎推理流程的 `Validation` 把關；如果首三行沒有足夠的爆點，代理將建議將文案全部重寫。

### 🚀 適用情境與預期行為 (Use Case and Expected Behavior)
1. **條件分流 (Conditional Branches)**：當要求針對不符平台調性 (例如：用 LinkedIn 的生硬風格寫 TikTok 腳本) 的指令時，觸發 Clarification 分支要求轉向。
2. **建議驗證 (Mandatory Verify)**：輸出最終文案排版前，建議算字數與分段，校驗是否包含強大的「注意力掛鉤 (Hook)」與明確的「行動呼籲 (CTA)」。
3. **精準評估 (Check Tooling)**：動手前評估是否有最新的競爭者平台趨勢資料可以作為拆解的參考目標。
4. **全域常駐 (Pervasive Scope)**：所有涉及社群貼文、短影音腳本、電子報及病毒行銷圖文的任務建議生效。

### 📋 建議模型
- **推薦版本**：Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **最低版本**：Gemini 3.1 Flash / GPT-5.1
