## v0.3 定位提醒

此 Feed 是優化提示詞種子，不是確定性協議、安裝程式或可執行套件。請搭配高階推理模型使用，並在允許 Agent 修改檔案、建立 Skills、呼叫 API、部署或觸及敏感資料前進行使用者審查。

**Feed 類型**：工作流 Feed


# 📈 [Prompt Seed] 數據分析工作流 (Data Analysis Flow)

### 📄 模組簡介
這將使代理在規劃、工具使用、回應結構與結果驗證上更穩定、更精確、更少臆測。本飼料包（Prompt Seed）旨在為您的代理使用**嚴謹的資料科學管線**。透過套用「審慎推理流程 (careful reasoning workflow)」，它約束代理在進行任何數據作圖、清洗或建模前，應審慎執行資料探勘 (Inspect First) 與完整性驗證 (Verify)，杜絕產生「看似華麗但數據斷層」的分析圖表。

### ⚙️ 技能協同 (Skill Synergy)
- **建議搭配**：`run_command` (Python/Pandas 環境), `read_url_content`, `write_to_file`
- **協同效應**：代理將 Python 執行環境視為單純的運算引擎。每一次的腳本執行都被審慎推理流程的 `Verify` 分支監管，一旦資料類型 (Data Types) 不符，建議觸發修復，不容許把錯誤的 DataFrame 送進模型。

### 🚀 適用情境與預期行為 (Use Case and Expected Behavior)
1. **條件分流 (Conditional Branches)**：當輸入的 CSV 檔案欄位殘缺、或資料量過小不足以建立統計顯著性時，觸發 Clarification 或 Failure 分支，拒絕強行繪製無效圖表。
2. **建議驗證 (Mandatory Verify)**：輸出任何圖表或結論前，建議進行異常值 (Outliers) 與空值 (Nulls) 校驗。
3. **精準評估 (Check Tooling)**：評估工作區內是否具備足夠效能與函式庫 (如 pandas, matplotlib, scikit-learn) 來支撐運算。
4. **全域常駐 (Pervasive Scope)**：所有涉及數據清洗、BI 儀表板生成、預測性建模的非平凡任務皆受此指引約束。

### 📋 建議模型
- **推薦版本**：Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **最低版本**：Gemini 3.1 Flash / GPT-5.1
