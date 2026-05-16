# Agent Compatibility / Agent 相容性

> v0.3 note: This document reflects the Cross-Agent Prompt Seed Update.
> v0.3 說明：本文對應 Cross-Agent Prompt Seed Update。

Compatibility should be described carefully. Feeds are prompt seeds, not executable packages or native integrations.

相容性應謹慎描述。Feeds 是提示詞種子，不是可執行套件，也不是原生整合。

## OpenClaw

Primary target environment.

Feeds can be pasted into high-capability OpenClaw sessions. They can guide the agent to inspect workspace state, create or update Skills, generate checklists, and refine agent behavior.

OpenClaw-specific outputs may include Skills, workspace instructions, or ClawHub-oriented skill packaging where appropriate.

OpenClaw 是主要目標環境。Feeds 可貼入高階推理模型的 OpenClaw sessions，引導 Agent 檢查 workspace state、建立或更新 Skills、生成檢查清單並改善 Agent 行為。適當時，OpenClaw-specific outputs 可包含 Skills、workspace instructions 或面向 ClawHub 的 Skill packaging。

## Hermes Agent

Experimental / conceptual compatibility.

Hermes Agent appears to emphasize self-improvement, memory, skill creation from experience, and long-running agent behavior. Feeds may be useful as goal seeds, self-improvement seeds, skill creation prompts, or memory/workflow shaping prompts.

Do not claim full native support unless verified. Future work should add Hermes-specific examples and test results.

Hermes Agent 相容性目前屬於實驗性 / 概念性。公開資料顯示 Hermes Agent 強調 self-improvement、memory、從經驗建立 Skills 與 long-running agent behavior。Feeds 可能適合作為 goal seeds、self-improvement seeds、skill creation prompts 或 memory/workflow shaping prompts。

未驗證前，不應宣稱完整原生支援。

## Codex

Conceptual / practical compatibility through `AGENTS.md` and repo-level instructions.

Feeds may be converted into:

- `AGENTS.md` sections
- setup prompts
- task-specific kickoff prompts
- safety and review checklists
- instructions for generating or updating local Skills

Codex should not treat Feeds as executable packages. Feeds should guide planning, constraints, repo inspection, and safe edits.

Codex 可透過 `AGENTS.md` 與 repo-level instructions 形成概念與實務相容性。Feeds 可轉成 `AGENTS.md` 區塊、setup prompts、task-specific kickoff prompts、安全審查清單，或用於生成 / 更新 local Skills 的指令。

Codex 不應把 Feeds 當作可執行套件。

## Other IDE Agents

Potentially adaptable agents include:

- Cursor
- Claude Code
- Windsurf
- GitHub Copilot coding agents
- Gemini CLI
- Devin or other autonomous coding agents

Compatibility depends on:

- whether the agent can read project instructions
- whether it can inspect the workspace
- whether it can modify files
- whether it supports tools
- whether it can create reusable instructions or skills
- model reasoning quality

Use careful labels:

- compatible in concept
- adaptable
- experimental
- requires review
- not guaranteed

其他 IDE agents 的相容性取決於它是否能讀取 project instructions、檢查 workspace、修改檔案、支援 tools、建立 reusable instructions 或 Skills，以及模型推理品質。請使用「概念相容」、「可改寫」、「實驗性」、「需要審查」、「不保證」等謹慎語言。

## Sources / 參考

- [OpenClaw docs](https://openclawdoc.com/)
- [OpenClaw ClawHub docs](https://docs.openclaw.ai/tools/clawhub)
- [Hermes Agent learning loop](https://hermes-agent.ai/features/learning-loop)
- [Codex AGENTS.md guide](https://developers.openai.com/codex/guides/agents-md)

