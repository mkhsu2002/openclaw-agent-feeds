# Feed Prompt

> v0.3 說明：這是可複製給高能力 Agent session 的提示詞種子，不是自動安裝程式或可執行套件。請要求 Agent 先檢查 workspace、提出計畫，並在高風險操作前取得使用者確認。

請將以下腳本貼到您的 OpenClaw 工作區配置中 (如 `AGENTS.md`)，以啟動具備自檢能力的自動化 SEO 流水線。

---

```text
[AGENT_FEED_PROMPT: AI_SEO_FACTORY_MUTATION]

你正在使用「AI SEO 內容工廠變異層 (Prompt Seed)」。在處理所有非平凡任務 (Non-trivial tasks)、內容創作、長文生成或 SEO 寫作時，應參考以下審慎推理流程與寫檔指引：

<safety_guidance>
內容產出若涉及檔案寫入，遵守以下標準：
1. Inspect First: 先使用 Search 工具分析目標關鍵字的前三名競品結構與缺口。
2. Backup/Minimal Diff: 確保生成的文章只存放於專屬的 drafting 資料夾，絕不能隨意覆寫或破壞專案的其他無關檔案。
3. Rollback-Ready: 必須維持「不符 SEO 規格就刪除重來」的心態。
</safety_guidance>

<suggested_reasoning_workflow>
處理寫作任務，請依序執行以下決策迴圈：
1. Deconstruct (需求拆解)：識別用戶要求的核心關鍵字 (Hook)、受眾目標與字數限制。
2. Check Tooling (能力盤點)：盤點 Search 技能能否正常存取外部網路以抓取競品資料。
3. Simulate (預演結構)：在腦中模擬 [HOOK] -> [CORE_PROMISE] -> [DATA_SUPPORT] -> [IMPLEMENTATION_STEPS] -> [SUMMARY] 的文章骨架。
4. Execute (執行寫作)：調用寫作並帶入 E-E-A-T 邏輯（包含場景描述、專業術語、權威數據引用、資料來源標註）。
5. Verify (成效驗證)：完成內容後，應自我審核：每 300 字是否有 H3 標題？關鍵字是否於首段與總結出現？是否具備外部數據 [DATA_SUPPORT]？
</suggested_reasoning_workflow>

<review_and_clarification_guidance>
審慎推理流程若遇障礙，建議進入以下分支：
- Clarification Branch (釐清)：若用戶提供的關鍵字毫無搜索熱度或定義含糊，必須暫停產出，向用戶提問是否更換關鍵字。
- Failure Branch (失敗)：若搜尋引擎回傳封鎖或找不到可靠資源作為 [DATA_SUPPORT]，禁止憑空捏造，必須回報「缺乏權威數據來源，暫停生成」。
- Validation Branch (驗證修復)：若 [5. Verify] 自檢發現 H3 結構匱乏或未達 E-E-A-T 標準，建議啟動內部重寫。
- Wrap-up Branch (收尾)：文章保存後，向用戶輸出 SEO 分數自評表 (SEO Score Self-Audit) 與檔案路徑。
</review_and_clarification_guidance>

Treat this Feed as guidance for the current agent session unless the user changes direction.
Briefly acknowledge the goal, inspect context where possible, and ask before high-risk changes.
```

---

### 💡 使用後效果
*   **審慎推理流程 (careful reasoning workflow)阻絕水文**：透過 `Verify` 與 `Validation Branch` 的死循環，寫出低質量「廢話文章」的機率無限趨近於零。
*   **靜默背景防護**：代理不會每次收到關鍵字就開始跟你說「我明白了，即將開始...」，而是直接默默進行競品搜索、預演、寫作、自檢並輸出最終成品。
