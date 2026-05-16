# Feed Prompt

> v0.3 說明：這是可複製給高能力 Agent session 的提示詞種子，不是自動安裝程式或可執行套件。請要求 Agent 先檢查 workspace、提出計畫，並在高風險操作前取得使用者確認。

請將以下決策迴圈腳本使用您的 OpenClaw 工作區配置中 (如 `AGENTS.md`)，以啟動精確無誤的自動化文檔防護層。

---

```text
[AGENT_FEED_PROMPT: DOC_GENERATOR_MUTATION]

你正在使用「文檔自動生成器變異層 (Prompt Seed)」。在處理所有非平凡任務 (Non-trivial tasks)、生成 API 文件、系統架構圖或 README 檔案時，應參考以下審慎推理流程與文件編譯指引：

<safety_guidance>
任何觸及專案文件的新增與寫作，必須以此鐵律為前提：
1. Inspect First: 先使用列表與讀取指令掃描專案目錄與原始程式碼，盡量禁止在不看實作碼的情況下「通靈」規格。
2. Backup / Minimal Diff: 若要更新現有 README，確保在記憶體備留舊版，僅替換或新增變更的章節。
3. Rollback-Ready: 必須維持「排版錯亂或遺失舊區塊就主動復原」的防備心態。
</safety_guidance>

<suggested_reasoning_workflow>
執行任何文檔生成，按順序流轉以下審慎推理流程：
1. Deconstruct (需求拆解)：拆解用戶需要的文件類型 (如 JSDoc, OpenAPI Schema, 還是用戶指南)，以及目標讀者群 (Developer vs User)。
2. Check Tooling (能力盤點)：盤點目前的讀取工具是否足以遍歷所有相關的依賴樹與模組化檔案。
3. Simulate (預演結構)：在腦中模擬最終文件的 Markdown 目錄骨架 (Table of Contents)。
4. Execute (執行產出)：遵守 <safety_guidance>，從源碼中逆向提取真實的簽章與註解，寫入結構化的文檔模版中。
5. Verify (成效驗證)：完成後，建議執行查核：所有 [參數型別] 與 [回傳值] 是否 高度貼合 [4. Execute] 階段抓取到的原始碼？
</suggested_reasoning_workflow>

<review_and_clarification_guidance>
決策迴圈遇到異常時，建議觸發以下分支：
- Clarification Branch (釐清)：若發現多個模組功能重疊或架構極度混沌，立刻暫停並請求開發者提供 Business Logic 背景。
- Failure Branch (失敗)：若檔案系統權限不足導致無法讀取核心模組，停止生成並回報 "Access Denied / Insufficient Context Error"。
- Validation Branch (驗證修復)：若 [5. Verify] 自檢出文件中遺落了任何 public API，建議退回 [4. Execute] 將缺漏補齊。
- Wrap-up Branch (收尾)：文檔保存後，輸出簡短的「已覆蓋 API 端點/模組清單」。
</review_and_clarification_guidance>

Treat this Feed as guidance for the current agent session unless the user changes direction.
Briefly acknowledge the goal, inspect context where possible, and ask before high-risk changes.
```

---

### 💡 使用後效果
*   **消滅「看圖說故事」**：引入了極其嚴苛的 `Inspect First` 與 `Verify` 迴圈，代理不會再自己發明其實不存在的 API 參數。
*   **高品質交付**：透過 `Simulate` 預演目錄與 `Validation Branch` 的防護，產生的 Markdown 文件會非常工整且無遺漏，宛如資深 Technical Writer 撰寫。
