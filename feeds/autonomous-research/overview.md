# 🧪 [Mutation Feed] 自主研究引擎 (Autonomous Research Engine)

### �� 模組簡介
這將使代理在規劃、工具使用、回應結構與結果驗證上更穩定、更精確、更少臆測。

本飼料包（Mutation Feed）專為**深度資料挖掘與安全報告寫入**設計。它將代理升級為具備「交叉驗證防護決策迴圈」的研究員。遇不一致資訊時，防護決策迴圈會主動介入進行二次查核，並遵循寫檔協議安全地產出研究報告。

### ⚙️ 技能協同 (Skill Synergy)
- **建議搭配**：`search_web`, `read_url`, `write_to_file`, `list_dir`
- **協同效應**：將檢索工具無縫嵌入 Verify 狀態中，確保只有拿到雙重驗證的黃金資訊 `[VERIFIED_SRC]` 才能進入 Execute 報告環節，且絕不干擾專案核心代碼。

### 🚀 行為升級與協議 (Behavior Upgrade Target)
1. **條件分流 (Conditional Branches)**：當出現互相矛盾的報表數據時，觸發 Clarification/Validation 分支以解決衝突。
2. **強制驗證 (Mandatory Verify)**：每匯入一項關鍵數據，都必須自查第二消息來源；寫檔完畢後也需驗證參考清單是否存在。
3. **精準評估 (Check Tooling)**：強制先檢查本地是否已有舊報告 (`Inspect First`) 以及聯網技能。
4. **全域常駐 (Pervasive Scope)**：處理任何非平凡的情報收集、資料分析或長篇研究報告時生效。

### 📋 建議模型
- **推薦版本**：Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **最低版本**：Gemini 3.1 Flash / GPT-5.1
