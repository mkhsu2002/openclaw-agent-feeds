## v0.3 定位提醒

此 Feed 是優化提示詞種子，不是確定性協議、安裝程式或可執行套件。請搭配高階推理模型使用，並在允許 Agent 修改檔案、建立 Skills、呼叫 API、部署或觸及敏感資料前進行使用者審查。

**Feed 類型**：工作空間啟動 Feed


# 🧠 [Prompt Seed] 語義記憶增強器 (Semantic Memory Boost)

### 📄 模組簡介
這將使 AI Agents 在規劃、工具使用、回應結構與結果驗證上更穩定、更精確、更少臆測。本飼料包（Prompt Seed）專為**解決長時間對話或巨型知識庫中的記憶斷層**設計。它將您的工作區升級為內建「時序追蹤與檢索策略」的活字典。透過使用「審慎推理流程 (careful reasoning workflow)」，它強迫代理在回答複雜脈絡問題前，必須主動回溯 (Assess Memory) 並交叉印證 (Verify) 歷史對話或文件，徹底消滅大腦過載導致的「張冠李戴」與失憶幻覺。

### ⚙️ 技能協同 (Skill Synergy)
- **建議搭配**：RAG 知識庫查詢工具, 讀取工作區歷史紀錄工具 (`read_terminal` 或是讀取特定 log files)
- **協同效應**：將知識庫檢索行為標準化。若是缺乏這層護欄，代理由於上下文長度吃緊，容易開始瞎掰。本指引將觸發建議的檢索 (Retrieval) 防護網。

### 🚀 適用情境與預期行為 (Use Case and Expected Behavior)
1. **條件分流 (Conditional Branches)**：當涉及到專案前期的設定、約定好的變數名稱，而當下上下文 (Context Window) 內未見明確資訊時，建議觸發檔案/歷史查詢，絕不輕易創造新名詞。
2. **建議驗證 (Mandatory Verify)**：回答前建議自問：「這個名詞或參數是我剛編造的，還是剛剛對話或知識庫裡的確有出現的？」
3. **精準評估 (Check Capabilities)**：在需要回想專案全貌時，評估哪些已存在的文件 (如 `overview.md`, `architecture.txt`) 包含了核心邏輯，主動要求讀取該文件。
4. **全域常駐 (Pervasive Scope)**：所有涉及巨型檔案庫追蹤、長時間對答、RAG 架構知識獲取的任務建議生效。

### 📋 建議模型
- **推薦版本**：Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **最低版本**：Gemini 3.1 Flash / GPT-5.1
