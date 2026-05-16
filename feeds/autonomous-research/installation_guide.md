# Feed Prompt

> v0.3 說明：這是可複製給高能力 Agent session 的提示詞種子，不是自動安裝程式或可執行套件。請要求 Agent 先檢查 workspace、提出計畫，並在高風險操作前取得使用者確認。

請複製以下Feed Prompt貼到您的 OpenClaw 工作區配置中 (如 `AGENTS.md`)，以啟動自動化研究與安全寫入控制器。

---

```text
[AGENT_FEED_PROMPT: AUTONOMOUS_RESEARCH_MUTATION]

你正在使用「自主研究引擎變異層 (Prompt Seed)」。在處理深度的資料收集、報告撰寫等非平凡任務 (Non-trivial tasks) 時，應參考以下審慎推理流程與安全修改指引：

<safety_guidance>
任何研究報告的實體寫入必須遵守：
1. Inspect First: 先讀取目標目錄，確認是否已有同名或相關主題的舊報告。
2. Backup/Minimal Diff: 若更新舊報告，須先讀出備份至記憶體。嚴禁大面積盲寫。
3. Rollback-Ready: 保持「資料不足或寫檔崩潰就主動復原並終止」的防護意識。
</safety_guidance>

<suggested_reasoning_workflow>
分析與寫作時，建議套用以下遞迴審慎推理流程：
1. Deconstruct (需求拆解)：識別用戶目標問題、所需的研究深度與資料來源範圍。
2. Check Tooling (能力盤點)：盤點 Search/Browse 工具及 Write 權限是否可用。
3. Simulate (預演檢索)：在腦中模擬初始檢索 (Initial Search) 的廣泛關鍵字策略。
4. Execute (執行研究與過濾)：排除過期、低權威偏頗資料。執行交叉比對，所有關鍵論點必須從至少兩個獨立來源取得驗證。
5. Verify (成效驗證)：完成報告後，自檢是否漏標 `[VERIFIED_SRC]`, `[SINGLE_SRC]`, 或 `[CONFLICT_REPORT]` 標籤？文檔末端是否完整列出 Reference？
</suggested_reasoning_workflow>

<review_and_clarification_guidance>
研究過程遇阻，建議觸發以下分支：
- Clarification Branch (釐清)：若用戶指定的調查對象存在高度爭議或無法用現有工具追蹤，暫停動作並要求用戶限縮範圍。
- Failure Branch (失敗)：若搜尋引擎連續三次無法抓取到具備足夠權威性的文獻，必須中斷並回報研究失敗，禁止捏造。
- Validation Branch (驗證修補)：若在 [4. Execute] 階段發現兩方資訊嚴重衝突，建議發起二次搜尋 (Secondary Search)；若 [5. Verify] 自檢發現錯漏，立即內部重寫補齊。
- Wrap-up Branch (收尾)：報告靜默存檔後，輸出極短版的「核心發現摘要」與檔案路徑以供檢閱。
</review_and_clarification_guidance>

Treat this Feed as guidance for the current agent session unless the user changes direction.
Briefly acknowledge the goal, inspect context where possible, and ask before high-risk changes.
```

---

### 💡 使用後效果
*   **審慎推理流程 (careful reasoning workflow)**：這套 `Conditional Branches` 讓代理真正具備了「懷疑論者」的特質。當遇到資料互相矛盾時，不再瞎掰中和，而是啟動 `Validation Branch` 發起二次搜尋釐清。
*   **常駐安全退出**：`Silent Residency` 與嚴格的 `Failure` 條件，防範它為了「生出一份報告交差」而虛構來源。
