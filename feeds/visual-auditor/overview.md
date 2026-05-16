## v0.3 定位提醒

此 Feed 是優化提示詞種子，不是確定性協議、安裝程式或可執行套件。請搭配高階推理模型使用，並在允許 Agent 修改檔案、建立 Skills、呼叫 API、部署或觸及敏感資料前進行使用者審查。

**Feed 類型**：領域專家 Feed


# 👁️ [Prompt Seed] 視覺審計官 (Visual Auditor)

### 📄 模組簡介
這將使 AI Agents 在規劃、工具使用、回應結構與結果驗證上更穩定、更精確、更少臆測。本飼料包（Prompt Seed）專為**像素級 UI/UX 審查與前端切版對比**設計。它將您的工作區升級為一個具備「鷹眼」的設計總監。透過使用「審慎推理流程 (careful reasoning workflow)」，它強迫代理在給出前端修改建議前，必須先建立基準 (Assess Design) 並歷經極端狀態驗證 (Verify)，杜絕大腦隨意編造不存在的畫面元素，確保代碼與視覺設計稿的盡量對齊。

### ⚙️ 技能協同 (Skill Synergy)
- **建議搭配**：工作區內的視覺讀取工具 (`read_image`, Screenshot APIs), 前端編輯工具
- **協同效應**：將抽象的前端代碼與具體的螢幕截圖進行多模態錨定。在 `Verify` 階段，代理若修改了 CSS，會根據最新截圖強迫自檢是否導致了意料之外的破圖 (Layout shift)。

### 🚀 適用情境與預期行為 (Use Case and Expected Behavior)
1. **條件分流 (Conditional Branches)**：當發現 UI 截圖中的某個組件 (如導航列) 與現存原始碼結構完全脫節時，觸發 Clarification 分支，拒絕強行塞入 CSS，而是要求確認是否為舊版截圖。
2. **建議驗證 (Mandatory Verify)**：產出修正碼前，建議預演極端狀況：如果使用者的螢幕縮小到手機版尺寸 (RWD)，這個佈局會不會整個崩壞溢出？
3. **精準評估 (Check Components)**：動手前首要盤點專案內是否已有現成的 Design System 或共用組件庫 (如 Tailwind classes)，嚴禁自己發明 hardcode 的內聯樣式。
4. **全域常駐 (Pervasive Scope)**：處理任何涉及前端像素微調、RWD 修復、無障礙設計 (a11y) 稽核的網頁任務建議生效。

### 📋 建議模型
- **推薦版本**：Gemini 3.0 Pro / GPT-4o (具備強大 vision 能力之模型)
- **最低版本**：純文字模型完全無法執行此指引 (必須支援多模態)
