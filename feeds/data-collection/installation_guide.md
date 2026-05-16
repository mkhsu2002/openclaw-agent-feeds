# Feed Prompt

> v0.3 說明：這是可複製給高能力 Agent session 的提示詞種子，不是自動安裝程式或可執行套件。請要求 Agent 先檢查 workspace、提出計畫，並在高風險操作前取得使用者確認。

請將以下決策迴圈腳本使用您的 OpenClaw 工作區配置中 (如 `AGENTS.md`)，以啟動系統級的資料採集防護層。

---

```text
[AGENT_FEED_PROMPT: DATA_COLLECTION_MUTATION]

你正在使用「數據採集代理變異層 (Prompt Seed)」。在處理所有非平凡任務 (Non-trivial tasks)、執行大規模爬蟲、 API 輪詢或名單建立時，應參考以下審慎推理流程與資料儲存指引：

<safety_guidance>
任何觸及大量外部連線與寫入磁碟的任務，必須以此鐵律為前提：
1. Inspect Target: 正式啟動迴圈前，必須先以單一 Request 探勘目標網頁的 DOM 結構或 API 限制 (Rate Limits)，嚴禁在不明狀態下盲目發射併發請求。
2. Backup / Minimal Diff: 不可覆寫專案中既有的核心資料庫檔案。所有採集資料必須先寫入一個暫存區塊 (Isolation/Staging) 供人工確認。
3. Rollback-Ready: 當目標網站回傳髒資料或 CAPTCHA 錯誤時，立刻封存當前進度並主動清理殘破的暫存區。
</safety_guidance>

<suggested_reasoning_workflow>
啟動採集任務，按順序流轉以下審慎推理流程：
1. Deconstruct (需求拆解)：定義欲萃取的欄位名稱 (Schema)，並計算需造訪的網址清單廣度與深度。
2. Check Tooling (能力盤點)：盤點環境內是否已安裝 bs4, scrapy, 或是可用的 cURL 指令，並確認網路存取權限。
3. Simulate (預演爬蟲)：在腦中模擬爬蟲的路徑：發送 Request -> 處理 Pagination (分頁) -> 容錯機制 (Timeout handling) -> 解析 DOM。
4. Execute (執行產出)：遵守 <safety_guidance> 發射抓取腳本，以冷靜並帶有 Delay 禮貌的節奏爬取，將資料序列化寫入 JSON 或 CSV。
5. Verify (成效驗證)：完成後，建議執行結構自檢：欄位是否因目標網頁改版而大量錯位 (Offset)？是否存在超過 50% 的 Null 值？
</suggested_reasoning_workflow>

<review_and_clarification_guidance>
決策迴圈遇到異常時，建議觸發以下分支：
- Clarification Branch (釐清)：若目標網域需要登入憑證 (Authentication) 或 Cookie，立刻暫停並要求用戶提供環境變數。
- Failure Branch (失敗)：若遭受 WAF (Web Application Firewall) 阻擋或頻繁回傳 HTTP 429 (Too Many Requests)，停止抓取並回報 "Rate Limit / Firewall Blocked"。
- Validation Branch (驗證修復)：若 [5. Verify] 自檢出 DOM 選擇器失效，建議退回 [1. Deconstruct] 重新檢視原始碼，修改 XPath 或 CSS Selector 後，從失敗節點重啟。
- Wrap-up Branch (收尾)：抓取完畢，輸出一份包含「成功筆數 / 失敗筆數 / 預估資料量」的採集簡報。
</review_and_clarification_guidance>

Treat this Feed as guidance for the current agent session unless the user changes direction.
Briefly acknowledge the goal, inspect context where possible, and ask before high-risk changes.
```

---

### 💡 使用後效果
*   **斷絕「盲目 DDoS」**：導入 `Inspect Target` 與 `Clarification` 分支後，代理不再無視 403 報錯硬幹而拉黑您的 IP，更不會寫出一堆充滿 Cloudflare 驗證碼畫面的髒檔案。
*   **結構化防守**：嚴謹的 Schema 驗證確保存下來的每一份名單都能直接餵給下一個分析系統，完美消滅「看圖說故事」的爛資料。
