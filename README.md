# OpenClaw Agent Feeds (龍蝦升級飼料包) V2.0

🔥 **Fully Optimized for OpenClaw v3.24 / 全面支援 OpenClaw v3.24 架構** 🔥

歡迎來到 OpenClaw AI Agents 升級模組庫

- **[繁體中文介紹 (Traditional Chinese)](README.zh-TW.md)**
- **[English Version](README.en.md)**
- **標準化升級**：將複雜的執行邏輯封裝成易於解讀的指令。
- **即時部署**：複製、貼上、發送，即可讓 AI 代理獲得新的能力。
- **技術規範**：為 AI 提供確定性框架，減少幻覺，提升執行精準度。

本專案旨在提供一個高品質的「飼料 Buffet」，讓開發者與系統架構師能根據需求，為他們的 AI 代理挑選最合適的技術增強系統。

### 🎯 這個專案適合誰？ (Who is this for?)
- **OpenClaw 新手**：想要立即獲得更穩定、更專業的 AI 回覆，而不需要從頭學習完整的 Skill/Plugin 開發技術棧。
- **進階使用者與架構師**：尋求可重複使用的 Feed 系統設計模式，快速部署多代理協作架構。
- **開源貢獻者**：對 Prompt Engineering 系統化、Agent 工作流、以及安全變異層協議 (Safe Mutation Protocols) 深感興趣的開發者。

### 🌟 範例成果 (Before / After Example)
如果您還在猶豫是否需要安裝 Feed，請看看以下的差異：
- **❌ Without Feed (未使用)**: AI 產出含糊、冗長且充滿免責聲明的廢話，甚至隨意猜測（幻覺）。
- **✅ With Universal Core L0 (使用通用核心飼料)**: AI 輸出結構化、經過交叉查證的精準結論，並在執行高危操作前主動攔截風險。

### 📐 設計公理 (What makes a good feed?)
我們不是普通的提示詞倉庫，這是一個「方法論」等級的 Repo。優秀的 Feed 必須具備以下特點：
1. **Improves behavior, not just tone** (改變行為邏輯，而不只是改變語氣)
2. **Reduces hallucination and guesswork** (大幅減少幻覺與瞎猜)
3. **Encourages safe, minimal changes** (鼓勵最少權限與最安全的修改)
4. **Works with OpenClaw skills/plugins** (與原生套件完美協同，而非取代它們)
5. **Stays readable and reusable** (專注於人類工程師也能看懂的高可讀性結構)

Lobster Feeds are high-level prompt templates designed for OpenClaw, aimed at enhancing AI Agent capabilities with ease of use through instant messaging.

### 🛒 Lobster Feed Library (主廚推薦飼料庫)

### 🔹 核心代理升級
- **龍蝦通用核心飼料 (L0)** `[入門]` [NEW] - [概覽](feeds/universal-core/overview.md) | [安裝指令](feeds/universal-core/installation_guide.md)
- **龍蝦確定性代理框架** `[專家]` - [概覽](feeds/deterministic-framework/overview.md) | [安裝指令](feeds/deterministic-framework/installation_guide.md)
- **反幻覺邏輯護欄** `[入門]` - [概覽](feeds/hallucination-guardrails/overview.md) | [安裝指令](feeds/hallucination-guardrails/installation_guide.md)
- **工具驅動狀態機** `[入門]` - [概覽](feeds/tool-driven-state/overview.md) | [安裝指令](feeds/tool-driven-state/installation_guide.md)
- **多代理協作調度員** `[專家]` - [概覽](feeds/multi-agent-coord/overview.md) | [安裝指令](feeds/multi-agent-coord/installation_guide.md)
- **語義記憶增強器** `[入門]` - [概覽](feeds/semantic-memory-boost/overview.md) | [安裝指令](feeds/semantic-memory-boost/installation_guide.md)
- **系統協議執行官** `[專家]` - [概覽](feeds/protocol-enforcer/overview.md) | [安裝指令](feeds/protocol-enforcer/installation_guide.md)
- **意圖深度釐清器** `[進階]` [NEW] - [概覽](feeds/intent-clarifier/overview.md) | [安裝指令](feeds/intent-clarifier/installation_guide.md)

### 🔹 多模態與安全性 [NEW]
- **視覺內容審計代理** `[進階]` - [概覽](feeds/visual-auditor/overview.md) | [安裝指令](feeds/visual-auditor/installation_guide.md)
- **語音指令邏輯提取器** `[入門]` - [概覽](feeds/voice-to-logic/overview.md) | [安裝指令](feeds/voice-to-logic/installation_guide.md)
- **PII 自動脫敏護欄** `[專家]` - [概覽](feeds/pii-masking/overview.md) | [安裝指令](feeds/pii-masking/installation_guide.md)
- **跨國合規執行包裹器** `[專家]` - [概覽](feeds/global-compliance/overview.md) | [安裝指令](feeds/global-compliance/installation_guide.md)

### 🔹 垂直專業領域 [NEW]
- **法律條文精算師** `[專家]` - [概覽](feeds/legal-precision/overview.md) | [安裝指令](feeds/legal-precision/installation_guide.md)
- **醫學文獻與藥理綜述助手** `[專家]` - [概覽](feeds/medical-research/overview.md) | [安裝指令](feeds/medical-research/installation_guide.md)

### 🔹 自動化擴展包
- **自主 research 代理** `[進階]` - [概覽](feeds/autonomous-research/overview.md) | [安裝指令](feeds/autonomous-research/installation_guide.md)
- **AI SEO 內容工廠** `[進階]` - [概覽](feeds/ai-seo-factory/overview.md) | [安裝指令](feeds/ai-seo-factory/installation_guide.md)
- **聯盟行銷自動化** `[入門]` - [概覽](feeds/affiliate-marketing-auto/overview.md) | [安裝指令](feeds/affiliate-marketing-auto/installation_guide.md)
- **潛在客戶自動開發** `[入門]` - [概覽](feeds/lead-gen-automation/overview.md) | [安裝指令](feeds/lead-gen-automation/installation_guide.md)
- **社群內容流量引擎** `[入門]` - [概覽](feeds/social-content-engine/overview.md) | [安裝指令](feeds/social-content-engine/installation_guide.md)

### 🔹 開發者工具包
- **軟體專案架構代理** `[入門]` - [概覽](feeds/software-builder/overview.md) | [安裝指令](feeds/software-builder/installation_guide.md)
- **代碼除錯代理** `[入門]` - [概覽](feeds/code-debugger/overview.md) | [安裝指令](feeds/code-debugger/installation_guide.md)
- **文檔自動生成器** `[入門]` - [概覽](feeds/doc-generator/overview.md) | [安裝指令](feeds/doc-generator/installation_guide.md)
- **測試套件架構師** `[入門]` - [概覽](feeds/test-suite-architect/overview.md) | [安裝指令](feeds/test-suite-architect/installation_guide.md)

### 🔹 商業智能包
- **市場研究自動化** `[進階]` - [概覽](feeds/market-research/overview.md) | [安裝指令](feeds/market-research/installation_guide.md)
- **競爭情報代理** `[進階]` - [概覽](feeds/competitive-intel/overview.md) | [安裝指令](feeds/competitive-intel/installation_guide.md)
- **數據採集代理** `[入門]` - [概覽](feeds/data-collection/overview.md) | [安裝指令](feeds/data-collection/installation_guide.md)
- **數據分析工作流** `[進階]` - [概覽](feeds/data-analysis-flow/overview.md) | [安裝指令](feeds/data-analysis-flow/installation_guide.md)
- **威脅情報監控員** `[進階]` - [概覽](feeds/threat-intel-monitor/overview.md) | [安裝指令](feeds/threat-intel-monitor/installation_guide.md)

---

## 🗺️ 公開開發藍圖 (Roadmap)
加強 Feed 生態系，我們未來的重點將放在：
- 統一所有 feeds 到最新的 V2.0 防護協議架構 (Unify all feeds under the new protocol structure)
- 將 feeds 清晰拆分為培訓與變異兩大類 (Split feeds into Training vs Mutation)
- 為最熱門的中文 Feed 補齊英文版本 (Add English parity for top feeds)
- 持續優化新手的安裝與上手體驗 (Improve beginner onboarding)
- 為 Feed 補充執行前後的真實對比案例 (Add example before/after outputs)

## 🤝 如何參與貢獻 (How to Contribute)
這是一個完全開源的社群專案，我們非常歡迎任何形式的貢獻！您可以透過以下方式幫助我們：
- 🐛 **Report a bug** (回報執行錯誤或幻覺災情)
- 💡 **Suggest a new feed** (提議一個全新的專業領域 Feed)
- 📝 **Improve wording / docs** (幫忙潤飾文件或修復錯字)
- 🛠️ **Submit a pull request** (為現有的 Feed 提交 PR 進行強化)

👉 詳細指引請見：[CONTRIBUTING.md](CONTRIBUTING.md)

### 🐣 給新手的貢獻提案 (Good First Contribution Ideas)
不知道從哪裡開始嗎？試試看這些小任務：
- Translate one feed (幫忙翻譯某一個 Feed 到英文)
- Improve one installation guide (優化任一個安裝指南的排版)
- Rewrite one feed to match the new protocol style (將舊版的 Feed 改寫成 V2.0 架構)
- Add model compatibility notes (為 Feed 增加特定模型的相容性標記)
- Improve one example screenshot (為 Repo 提供清晰的執行截圖)

**💬 Have an idea for a new feed, refinement, or category? [Open an issue first!](https://github.com/mkhsu2002/openclaw-agent-feeds/issues)**

---

### 🚀 官方網站：[https://openclawfeeds.icareu.tw/](https://openclawfeeds.icareu.tw/)

**[授權條款 (MIT License)](LICENSE)**

### ☕️ 支持此專案 / Support

如果您覺得這個專案對您有幫助，歡迎請我喝杯咖啡支持持續開發！
If you find this project helpful, feel free to buy me a coffee!

<a href="https://buymeacoffee.com/mkhsu2002w" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

---

&copy; 2026 FlyPig AI 開源專案. All rights reserved.
