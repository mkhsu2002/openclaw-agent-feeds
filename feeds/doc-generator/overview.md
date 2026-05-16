## v0.3 定位提醒

此 Feed 是優化提示詞種子，不是確定性協議、安裝程式或可執行套件。請搭配高階推理模型使用，並在允許 Agent 修改檔案、建立 Skills、呼叫 API、部署或觸及敏感資料前進行使用者審查。

**Feed 類型**：工作流 Feed


# 📚 [Prompt Seed] 文檔自動生成器 (Doc Generator)

### 📄 模組簡介
這將使代理在規劃、工具使用、回應結構與結果驗證上更穩定、更精確、更少臆測。本飼料包（Prompt Seed）專為**安全且精準地逆向工程文檔**而設計。它將您的代理升級為專業的 Technical Writer。透過使用「審慎推理流程 (careful reasoning workflow)」，強迫代理在生成 API 文件或 README 之前，必須經過徹底的源碼探勘與結構化預演，徹底消滅常見的「看圖說故事」與「文檔幻覺」。

### ⚙️ 技能協同 (Skill Synergy)
- **建議搭配**：`list_dir`, `view_file`, `write_to_file`
- **協同效應**：將檔案讀取工具與文檔生成邏輯嚴密結合。所有寫入動作皆被審慎推理流程的 `Inspect First` 與 `Verify` 分支緊緊看守，不容許憑空猜測類別參數。

### 🚀 適用情境與預期行為 (Use Case and Expected Behavior)
1. **條件分流 (Conditional Branches)**：當遇到混淆過的程式碼或缺失必要註解時，建議觸發 Clarification 分支詢問開發者，而非自行發明變數名稱。
2. **建議驗證 (Mandatory Verify)**：輸出 Markdown 前，建議回測文檔中的所有的 function signatures 是否 高度吻合原始檔案。
3. **精準評估 (Check Tooling)**：動手寫文檔前，首先確認自身是否有遍歷該語系 AST (抽象語法樹) 或深入理解其 Domain Knowledge 的能力。
4. **全域常駐 (Pervasive Scope)**：處理任何非平凡任務、建立規範、撰寫 API 手冊或發布版本日誌時皆受管轄。

### 📋 建議模型
- **推薦版本**：Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **最低版本**：Gemini 3.1 Flash / GPT-5.1
