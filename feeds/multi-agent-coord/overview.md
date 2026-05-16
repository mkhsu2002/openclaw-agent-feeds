## v0.3 定位提醒

此 Feed 是優化提示詞種子，不是確定性協議、安裝程式或可執行套件。請搭配高階推理模型使用，並在允許 Agent 修改檔案、建立 Skills、呼叫 API、部署或觸及敏感資料前進行使用者審查。

**Feed 類型**：工作流 Feed


# 🛸 [Prompt Seed] 多代理協作調度員 (Multi-Agent Orchestrator)

### 📄 模組簡介
這將使代理在規劃、工具使用、回應結構與結果驗證上更穩定、更精確、更少臆測。本飼料包（Prompt Seed）專為**複雜工作流的階層化管理**而設計。它將您的父節點 (Parent Agent) 升級為精通分工的調度指揮官。透過使用「審慎推理流程 (careful reasoning workflow)」，它強迫代理在親自下海幹活前，必須先評估任務的原子級複雜度 (Inspect Complexity)，並具備**發包、監管、與驗證子代理回傳值 (Verify sub-outputs)** 的盡量能力，從而杜絕大腦過載導致的執行崩潰。

### ⚙️ 技能協同 (Skill Synergy)
- **建議搭配**：工作區內具備子代理的配置 (如 `software-builder`, `data-collection` 等專職 Agents)、`run_command`
- **協同效應**：將單一代理的孤軍奮戰轉為「公司級」的協同作戰。所有的子任務下達皆被審慎推理流程的 `Validation` 關卡看守；若子代理回傳了錯誤的格式，調度員不會盲目拼湊，而是退回要求子代理重做。

### 🚀 適用情境與預期行為 (Use Case and Expected Behavior)
1. **條件分流 (Conditional Branches)**：當評估任務過於龐大且缺乏依賴關係時，建議啟動 Deconstruct 分支，將巨石任務拆解為平行且獨立運作的原子任務池供派發。
2. **建議驗證 (Mandatory Verify)**：在總結所有子代理的回報前，建議檢驗「資料拼圖」是否完整？子層級交辦的 `Output Schema` 是否與最初設定一致？
3. **精準評估 (Check Tooling/Skills)**：動手前首要盤點當下工作區內已配置哪些具備領域知識的專職代理 (如前端工程師、資料科學家代理)。
4. **全域常駐 (Pervasive Scope)**：所有涉及巨型架構遷移、橫跨多個程式庫重構、與跨領域長線專案的控制中樞建議生效。

### 📋 建議模型
- **推薦版本**：Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **最低版本**：拒絕使用 Flash / 輕量模型執行核心調度
