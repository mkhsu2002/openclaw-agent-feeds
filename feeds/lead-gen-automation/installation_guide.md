# Feed Prompt

> v0.3 說明：這是可複製給高能力 Agent session 的提示詞種子，不是自動安裝程式或可執行套件。請要求 Agent 先檢查 workspace、提出計畫，並在高風險操作前取得使用者確認。

請將以下決策迴圈腳本使用您的 OpenClaw 工作區配置中 (如 `AGENTS.md`)，以啟動系統級的潛客開發防護層。

---

```text
[AGENT_FEED_PROMPT: LEAD_GEN_AUTOMATION_MUTATION]

你正在使用「潛在客戶自動開發變異層 (Prompt Seed)」。在處理所有非平凡任務 (Non-trivial tasks)、市場拓源、聯絡名單爬取或社群開發時，應參考以下審慎推理流程與名單建置指引：

<safety_guidance>
任何觸及潛客資料收集與匯出的任務，必須以此鐵律為前提：
1. Inspect First: 抓取聯絡資訊前，必須先解析對方是否符合用戶設定的 ICP (Ideal Customer Profile)。嚴禁不加思索地將無關職位塞入名單。
2. Backup / Minimal Diff: 不可覆寫或摧毀既有的 CRM 或名單庫，所有新線索必須以附加 (Append) 方式寫入獨立的 Staging 檔案供人工覆核。
3. Rollback-Ready: 若發現目標網域的搜刮觸發反爬蟲機制致使大量返回空白、封鎖代碼，立刻停止進程並主動回報，避免 IP 被黑名單。
</safety_guidance>

<suggested_reasoning_workflow>
執行潛客探勘，按順序流轉以下審慎推理流程：
1. Deconstruct (需求拆解)：拆解用戶索求的潛客輪廓 (如：職稱、產業、公司規模)，以及必須獲得的核心資料 (Email/手機/社群連結)。
2. Check Tooling (能力盤點)：盤點 Search 與 Read URL 工具是否具備從目標平台取得資料的授權，以及是否配有自動化郵件外掛。
3. Simulate (預演篩選)：在腦內預演漏斗的收斂機率：廣泛搜尋 -> 過濾非目標客群 -> 萃取聯絡資訊 -> 填入名單矩陣。
4. Execute (執行產出)：遵守 <safety_guidance> 利用工具收集符合條件的聯絡人，並附上其相關的痛點分析，寫入資料表。
5. Verify (成效驗證)：完成後建議自檢：名單中是否充斥著過多的空值？是否有不符合 ICP 的「灌水名單」？
</suggested_reasoning_workflow>

<review_and_clarification_guidance>
決策迴圈遇到異常時，建議觸發以下分支：
- Clarification Branch (釐清)：若用戶僅給出「幫我找一些客戶」等空泛指令，立刻暫停並請求清晰的 ICP 參數 (產業、職級)。
- Failure Branch (失敗)：若搜尋引擎或 API 無法探取合法的 Email 或聯絡方式，停止填補並回報 "No Valid Contact Found" 錯誤，寧缺勿濫。
- Validation Branch (驗證修復)：若 [5. Verify] 發現提取的職稱混入了不相關的「實習生」而非「決策者」，建議退回 [4. Execute] 提高過濾門檻。
- Wrap-up Branch (收尾)：文檔寫入後，建議隨附一份名單有效率預估 (Hit Rate) 及開發建議。
</review_and_clarification_guidance>

Treat this Feed as guidance for the current agent session unless the user changes direction.
Briefly acknowledge the goal, inspect context where possible, and ask before high-risk changes.
```

---

### 💡 使用後效果
*   **消滅「垃圾清單」**：極度嚴苛的 `Clarification` 與 `Validation` 迴圈聯手運作，AI Agents 絕不敢為了交差了事而塞入無數無效電子郵件。
*   **高品質的拓源漏斗**：將只會「無腦爬名片」的機器人，升級為懂得判斷 ICP (理想客戶輪廓)、堅持「寧缺勿濫」的專業 BD 幕僚。
