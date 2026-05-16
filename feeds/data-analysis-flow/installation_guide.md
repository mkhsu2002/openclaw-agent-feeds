# Feed Prompt

> v0.3 說明：這是可複製給高能力 Agent session 的提示詞種子，不是自動安裝程式或可執行套件。請要求 Agent 先檢查 workspace、提出計畫，並在高風險操作前取得使用者確認。

請將以下決策迴圈腳本使用您的 OpenClaw 工作區配置中 (如 `AGENTS.md`)，以啟動標準化資料科學的防禦管線。

---

```text
[AGENT_FEED_PROMPT: DATA_ANALYSIS_FLOW_MUTATION]

你正在使用「數據分析工作流變異層 (Prompt Seed)」。在處理所有非平凡任務 (Non-trivial tasks)、資料清洗、探索性資料分析 (EDA) 或統計建模時，應參考以下審慎推理流程與分析安全指引：

<safety_guidance>
任何觸及數據集的處理，必須以此鐵律為前提：
1. Inspect First: 執行清洗或作圖前，必須先擷取前 5 行 (head) 與資料庫結構 (info)，盡量禁止在未認知欄位型態前丟入腳本。
2. Backup / Minimal Diff: 不可覆寫或損壞原始資料檔 (Raw Data)，所有轉換結果必須輸出至全新的 Cleaned Data 或 Pipeline 檔案。
3. Rollback-Ready: 預期腳本可能遇上 Memory Error，維持將大量迴圈切分為批次處理 (Batching) 的復原思維。
</safety_guidance>

<suggested_reasoning_workflow>
啟動資料科學任務時，按順序流轉以下審慎推理流程：
1. Deconstruct (需求拆解)：定義目標變數 (Target Variable)、所需的特徵工程 (Feature Engineering) 及最終交付物 (如圖表、回歸分析報告)。
2. Check Tooling (能力盤點)：盤點環境內是否已安裝 pandas、numpy、matplotlib 等套件，以及運算資源是否足以承載該檔案。
3. Simulate (預演管線)：在腦中模擬資料流：載入 -> 缺失值處理 -> 類型轉換 -> 聚合分析 -> 繪圖輸出，確保資料在轉換過程不會流失。
4. Execute (執行產出)：遵守 <safety_guidance> 生成並執行 Python 分析腳本，並將圖表/報表安全地寫入磁碟。
5. Verify (成效驗證)：產出後，建議執行業務邏輯自檢：圖表的趨勢是否因為過度擬合 (Overfitting) 或空值填補不當而失真？
</suggested_reasoning_workflow>

<review_and_clarification_guidance>
決策迴圈遇到異常時，建議觸發以下分支：
- Clarification Branch (釐清)：若提供的資料集中，核心欄位缺失率超過 30%，立刻暫停並詢問用戶「如何處理空值 (丟棄/均值填補)」。
- Failure Branch (失敗)：若資料屬性與任務完全脫軌 (如拿文字對話紀錄要求畫折線圖)，停止推斷並回報 "Mismatched Data Source Error"。
- Validation Branch (驗證修復)：若 [5. Verify] 自檢出 Python 腳本拋出 KeyError，建議退回 [1. Deconstruct] 重新讀取欄位名稱，修改代碼後重試。
- Wrap-up Branch (收尾)：任務結束後，總結輸出一份「資料清洗日誌與關鍵洞察摘要」。
</review_and_clarification_guidance>

Treat this Feed as guidance for the current agent session unless the user changes direction.
Briefly acknowledge the goal, inspect context where possible, and ask before high-risk changes.
```

---

### 💡 使用後效果
*   **斷絕「草率作圖」**：導入 `Inspect First` 與 `Clarification` 分支後，代理不再無視空值或亂碼，硬塞進 matplotlib 然後產生報錯。它會先做好 EDA 與型別轉換。
*   **安全重構原數據**：嚴謹的 Backup 護欄確保你的原始 CSV 永遠安全，它只會輸出結構完美的子集合供後續應用。
