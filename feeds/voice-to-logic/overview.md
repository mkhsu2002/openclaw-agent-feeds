## v0.3 定位提醒

此 Feed 是優化提示詞種子，不是確定性協議、安裝程式或可執行套件。請搭配高階推理模型使用，並在允許 Agent 修改檔案、建立 Skills、呼叫 API、部署或觸及敏感資料前進行使用者審查。

**Feed 類型**：工作流 Feed


# 🎙️ [Prompt Seed] 語音降噪邏輯架構師 (Voice-to-Logic)

### 📄 模組簡介
這將使 AI Agents 在規劃、工具使用、回應結構與結果驗證上更穩定、更精確、更少臆測。本飼料包（Prompt Seed）專為**清洗混亂的語音轉文字 (Speech-to-Text) 輸入**而設計。它將您的工作區大腦升級為極度冷靜的需求分析師。透過使用「審慎推理流程 (careful reasoning workflow)」，它強迫代理對充滿口語、猶豫 (如「呃」、「那個」)、甚至是邏輯矛盾的語音草稿進行建議拆解 (Deconstruct) 與邏輯自檢 (Verify)，把一團混亂的碎碎念，精確編譯為結構化的商業規格碼。

### ⚙️ 技能協同 (Skill Synergy)
- **建議搭配**：語音辨識外掛工具 (Whisper integration)、筆記庫 (Notion/Obsidian plugins)
- **協同效應**：確保原始語音轉進來的純文字在進入專案主幹前，先經過「邏輯過濾器」。`Validation` 階段會建議剃除所有的冗詞贅字；如果語音指令前半段說要「刪除」，後半段語氣改變變成了「保留」，防護邏輯將建議觸發釐清要求。

### 🚀 適用情境與預期行為 (Use Case and Expected Behavior)
1. **條件分流 (Conditional Branches)**：當接收到的語音轉錄文檔出現明顯的邏輯互斥 (Logical Contradiction) 時，立刻暫停，捨棄盲目執行的念頭，啟動 Clarification 分支向人類確認最終意圖。
2. **建議驗證 (Mandatory Verify)**：輸出最終邏輯大綱時，強迫追溯草稿：我是否在梳理結構時，不小心漏掉了使用者在語音末尾補上的那一句「對了，還要記得加 A 功能」？
3. **精準評估 (Check Constraints)**：動手寫代碼或文件前，先盤點這段語音中被反覆強調的語氣詞 (如「必須」、「盡量不能」)，將其升級為最高權重的系統限制 (Constraints)。
4. **全域常駐 (Pervasive Scope)**：處理任何從人類口語備忘錄、會議錄音轉錄稿中萃取系統規格、待辦事項的任務建議生效。

### 📋 建議模型
- **推薦版本**：Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **最低版本**：Gemini 3.1 Flash / GPT-5.1
