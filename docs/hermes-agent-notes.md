# Hermes Agent Notes / Hermes Agent 備註

> v0.3 note: This document reflects the Cross-Agent Prompt Seed Update.
> v0.3 說明：本文對應 Cross-Agent Prompt Seed Update。

Hermes Agent compatibility is exploratory unless verified in a real Hermes environment.

Hermes Agent 相容性目前屬探索性，除非已在實際 Hermes 環境驗證。

## Current Evaluation / 目前評估

Hermes Agent public materials describe a learning loop that can observe repeated task patterns, distill them into `SKILL.md` documents, reuse them, refine them, and maintain persistent skill memory. This direction makes Hermes conceptually suitable for Feed-style prompts.

Hermes Agent 公開資料描述 learning loop：觀察重複任務模式，將其萃取成 `SKILL.md` 文件，重複使用並逐步改善，並保留 persistent skill memory。這個方向讓 Hermes 在概念上適合 Feed-style prompts。

## How Feeds May Help / Feeds 可能如何幫助

Feeds may serve as:

- goal seeds
- learning seeds
- skill-building seeds
- memory-shaping prompts
- workflow bootstrapping prompts

Feeds 可以作為 goal seeds、learning seeds、skill-building seeds、memory-shaping prompts 與 workflow bootstrapping prompts。

## Limits / 限制

- Do not claim official Hermes support unless verified.
- Do not assume Hermes will preserve every Feed instruction across sessions.
- Do not treat Feeds as Hermes-native packages.
- Review any generated Skills before allowing tool use, file edits, API calls, or long-running work.

## Future Work / 後續工作

- test feeds in Hermes Agent
- create Hermes-specific feed examples
- evaluate whether Hermes can convert feeds into reusable skills or persistent behavior
- document limitations
- create examples for durable workflows or Kanban-style long-running work if verified

## Source / 參考

- [Hermes Agent learning loop](https://hermes-agent.ai/features/learning-loop)

