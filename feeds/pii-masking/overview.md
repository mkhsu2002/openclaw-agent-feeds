# 🛡 [Training Feed] PII 自動脫敏護欄 (PII Masking Guardrails)

### �� 模組簡介
這將使代理在規劃、工具使用、回應結構與結果驗證上更穩定、更精確、更少臆測。

本飼料包（Training Feed）專為**極端資料安全與隱私合規**設計。它將代理的 I/O 流控升級為「先過濾後傳輸」的防護決策迴圈 (Guarded Decision Loop) (Guarded Decision Loop)，強制綑綁 2026 最新法規，確保在讀取、總結或外部傳輸任何資料前，絕對攔截並屏蔽所有個人可識別資訊 (PII)。

### ⚙️ 技能協同 (Skill Synergy)
- **建議搭配**：適用於任何讀寫操作，特別是 `read_url`, `read_terminal`, `search_web`
- **協同效應**：代理在獲取或準備輸出資料時必須啟動自檢防護決策迴圈。若偵測到未加密的 PII，將觸發 Validation 立即覆蓋，或觸發 Failure 中止操作。

### 🚀 行為升級與協議 (Behavior Upgrade Target)
1. **條件分流 (Conditional Branches)**：當發現疑似但定義模糊的 PII 時，觸發 Clarification 分支要求使用者裁定；若過濾機制出錯，強制觸發 Failure 停止傳輸。
2. **強制驗證 (Mandatory Verify)**：產出最終 `[OUPUT]` 前，強制調用 PII 遮罩清單進行二次巡檢 (Secondary Scan)。
3. **精準評估 (Check Tooling)**：處理任務前首要確保其 Regex 與語義嗅探能力 (Semantic Sniffing) 正常運作。
4. **全域常駐 (Pervasive Scope)**：所有涉及「客戶資料、日誌讀取、外部 API 請求」等非平凡任務，皆受此護欄管轄。

### 📋 建議模型
- **推薦版本**：Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **最低版本**：Gemini 3.1 Flash / GPT-5.1
