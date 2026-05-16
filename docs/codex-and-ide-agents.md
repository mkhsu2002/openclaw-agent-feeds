# Codex and IDE Agents / Codex 與 IDE Agents

> v0.3 note: This document reflects the Cross-Agent Prompt Seed Update.
> v0.3 說明：本文對應 Cross-Agent Prompt Seed Update。

Feeds can be useful for Codex and other IDE agents, but they must be adapted to each agent's instruction model.

Feeds 對 Codex 與其他 IDE agents 可能有用，但需要依照各 Agent 的指令模型調整。

## Codex

Codex can use `AGENTS.md` for repo-level guidance. OpenAI's Codex documentation describes how Codex discovers global and project instructions, merges them by scope, and applies closer directory guidance later in the instruction chain.

Codex 可以使用 `AGENTS.md` 作為 repo-level guidance。OpenAI Codex 文件說明 Codex 如何發現 global / project instructions、依 scope 合併，並讓較接近目前目錄的指令在 instruction chain 中較晚出現。

Feeds can be adapted into:

- `AGENTS.md` sections
- setup prompts
- task kickoff prompts
- skill or instruction generation prompts
- safety and review checklists

Feeds are not the same as `AGENTS.md`. A Feed is usually a prompt seed used to generate, update, or refine persistent guidance.

Feeds 不等同於 `AGENTS.md`。Feed 通常是用來生成、更新或改善 persistent guidance 的 prompt seed。

## IDE Agent Adaptation

For IDE agents, Feeds should usually be converted into:

- `AGENTS.md`
- `CONTRIBUTING.md`
- task templates
- checklists
- local instructions
- project-specific operating rules

IDE agents may include:

- Cursor
- Claude Code
- Windsurf
- GitHub Copilot coding agents
- Gemini CLI
- Devin or other autonomous coding agents

Compatibility should be evaluated per agent. Do not overclaim native support.

## Practical Guidance / 實務建議

- Keep persistent instructions short enough for the agent to load reliably.
- Place repo-wide guidance at the root.
- Place specialized instructions close to the directory they govern.
- Use Feeds for kickoff and conversion, then keep stable instructions concise.
- Review generated files before letting agents run commands or modify production systems.

---

- persistent instructions 應保持精簡，確保 Agent 能可靠載入。
- repo-wide guidance 放在 repo root。
- specialized instructions 放在它管轄的目錄附近。
- Feed 適合用於任務啟動與轉換；穩定後的長期指令應保持精簡。
- 允許 Agent 執行 commands 或修改 production systems 前，先審查生成檔案。

## Source / 參考

- [Codex AGENTS.md guide](https://developers.openai.com/codex/guides/agents-md)

