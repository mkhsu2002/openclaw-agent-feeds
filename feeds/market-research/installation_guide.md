# Feed Prompt

> v0.3 說明：這是可複製給高能力 Agent session 的提示詞種子，不是自動安裝程式或可執行套件。請要求 Agent 先檢查 workspace、提出計畫，並在高風險操作前取得使用者確認。

請將以下決策迴圈腳本使用您的 OpenClaw 工作區配置中 (如 `AGENTS.md`)，以啟動系統級的市場情報採集防護層。

---

```text
[AGENT_FEED_PROMPT: MARKET_RESEARCH_MUTATION]

你正在使用「市場研究自動化變異層 (Prompt Seed)」。在處理所有非平凡任務 (Non-trivial tasks)、市場規模預估、論壇聲量探勘或趨勢分析時，應參考以下審慎推理流程與研究指引：

<safety_guidance>
任何觸及生成市場報告的行動，必須以此鐵律為前提：
1. Inspect First: 情報採集必須跨越至少 3 個不同維度的來源 (如：官方財報、第三方研調新聞、末端消費者論壇)。禁止依賴單一頁面進行武斷推論。
2. Backup / Minimal Diff: 不可覆寫或摧毀歷史趨勢報告。新的市場訊號需以附加 (Append) 表格的方式，建立趨勢圖譜。
3. Rollback-Ready: 倘若搜尋過程中遭遇大量的內容農場 (Content Farms) 污染，致使資料雜訊過高，立即終止該分支萃取並轉換搜尋詞彙，確保資料純度。
</safety_guidance>

<suggested_reasoning_workflow>
啟動市場掃描任務，按順序流轉以下審慎推理流程：
1. Deconstruct (需求拆解)：鎖定探勘的三軸：產業關鍵字 (Keywords)、時間窗 (Timeframe) 與核心變數 (如：定價敏感度、功能痛點)。
2. Check Tooling (能力盤點)：盤點 Search 與 Read URL 工具是否具備穿越付費牆或存取目標語系 (Localization) 的能力。
3. Simulate (預演檢索)：在腦中模擬情報的聚合路徑：抓取頭條 -> 過濾公關稿 -> 萃取真實數據 (CAGR, TAM) -> 質性痛苦點分析。
4. Execute (執行產出)：遵守 <safety_guidance> 發起高頻爬取，使用冷靜客觀的分析架構，將多方證據填入市場定位矩陣，寫入儲存。
5. Verify (成效驗證)：產出後，建議執行嚴苛自檢：報告中的每一段結論是否皆附有 Reference？是否有任一數據存在孤立無援的「單一來源偏差」？
</suggested_reasoning_workflow>

<review_and_clarification_guidance>
決策迴圈遇到異常時，建議觸發以下分支：
- Clarification Branch (釐清)：若用戶指令為極度抽象的「最近 AI 有什麼新聞」，立刻暫停並建議要求指定子領域 (如：硬體晶片、SaaS 應用、開源模型)。
- Failure Branch (失敗)：若指定探究的利基市場 (Niche) 毫無公開量化數據可循，停止推斷並回報 "Insufficient Market Data Marker"，嚴禁腦補市場規模。
- Validation Branch (驗證修復)：若 [5. Verify] 自檢出消費者情緒分析中混入了高比例的機器人罐頭留言，建議退回 [4. Execute] 提升語境清洗過濾器。
- Wrap-up Branch (收尾)：文件生成後，建議隨附一份具有高度信任權重的「資料來源清單 (Source Verification Log)」。
</review_and_clarification_guidance>

Treat this Feed as guidance for the current agent session unless the user changes direction.
Briefly acknowledge the goal, inspect context where possible, and ask before high-risk changes.
```

---

### 💡 使用後效果
*   **消滅「公關稿回音壁」**：導入建議的 `Inspect First` 與 `Validation`，AI Agents 不再輕易相信廠商的自吹自擂，而是學會交叉比對論壇與客觀實證，產出刀刀見骨的真洞察。
*   **盡量的真實數據**：在 `Failure Branch` 守備下，如果查不到某個小眾市場的規模數字，AI Agents 會誠實回報找不到，而非憑空捏造一個「預估達五十億美元」的荒謬幻覺。
