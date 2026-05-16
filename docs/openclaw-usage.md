# OpenClaw Usage / OpenClaw 使用方式

> v0.3 note: This document reflects the Cross-Agent Prompt Seed Update.
> v0.3 說明：本文對應 Cross-Agent Prompt Seed Update。

OpenClaw is the primary target environment for OpenClaw Agent Feeds.

OpenClaw 是 OpenClaw Agent Feeds 的主要目標環境。

## Architecture Alignment / 架構對齊

Public OpenClaw documentation describes OpenClaw as an open-source, self-hosted AI agent platform with many channel integrations, a skill ecosystem, ClawHub discovery and install flows, plugins, model flexibility, and security review around skill permissions.

公開 OpenClaw 文件將 OpenClaw 描述為開源、自架的 AI Agent platform，包含多種 channel integrations、Skill 生態系、ClawHub 搜尋與安裝流程、plugins、模型彈性，以及 Skills 權限與安全審查。

Feeds fit this ecosystem as prompt-based setup seeds. They can guide a capable OpenClaw session to inspect workspace state, propose Skill or instruction updates, generate checklists, and refine agent behavior. They do not replace Skills or ClawHub.

Feeds 在這個生態系中的定位是 prompt-based setup seeds。它們可以引導高能力 OpenClaw session 檢查 workspace state、提出 Skill 或指令更新、生成檢查清單並改善 Agent 行為。Feeds 不取代 Skills 或 ClawHub。

## How to Use a Feed in OpenClaw

1. Start a high-capability OpenClaw session.
2. Paste the Feed.
3. Ask OpenClaw to inspect the current workspace.
4. Ask OpenClaw to propose a plan before editing.
5. Review the proposed Skill or instruction changes.
6. Approve safe changes only.
7. Test the generated Skill or workflow.
8. Commit changes with a clear changelog entry.

## 如何在 OpenClaw 使用 Feed

1. 啟動高階推理模型的 OpenClaw session。
2. 貼上 Feed。
3. 要求 OpenClaw 檢查目前 workspace。
4. 要求 OpenClaw 在改檔前提出計畫。
5. 審查提議的 Skill 或指令變更。
6. 只批准安全且明確的變更。
7. 測試生成的 Skill 或 workflow。
8. 用清楚的 changelog entry commit 變更。

## When to Use a High-Capability Model / 何時使用高階推理模型

Use a strong reasoning model when the Feed asks the agent to:

- inspect unfamiliar workspace structure
- create or update Skills
- design workflows
- edit files
- call APIs
- reason about security, billing, legal, medical, or deployment risks
- convert a Feed into stable workspace instructions

當 Feed 要求 Agent 檢查陌生 workspace、建立或更新 Skills、設計 workflows、改檔、呼叫 APIs、推理 security / billing / legal / medical / deployment 風險，或把 Feed 轉成穩定 workspace instructions 時，請使用強推理模型。

## Feed to Skill Guidance / Feed 到 Skill 的指引

A Feed can guide OpenClaw to create or update Skills, but the generated Skill must be reviewed before use.

Feed 可以引導 OpenClaw 建立或更新 Skills，但生成的 Skill 在使用前必須審查。

Review:

- `SKILL.md` instructions
- scripts or supporting files
- required permissions
- external API access
- shell commands
- network or filesystem behavior
- install and update metadata
- ClawHub packaging assumptions, if publishing is intended

## ClawHub Relationship / 與 ClawHub 的關係

ClawHub is a registry and discovery surface for OpenClaw Skills and plugins. Feeds can help an agent draft a ClawHub-oriented Skill package, changelog, or review checklist, but a Feed is not a ClawHub package.

ClawHub 是 OpenClaw Skills 與 plugins 的 registry / discovery surface。Feed 可以幫助 Agent 草擬面向 ClawHub 的 Skill package、changelog 或 review checklist，但 Feed 不是 ClawHub package。

## Stop and Ask for Confirmation / 何時停止並詢問確認

The agent should stop and ask before:

- deleting or moving files
- installing dependencies
- running shell commands with side effects
- modifying credentials or environment variables
- changing security settings
- deploying to production
- publishing to ClawHub or any package registry
- touching billing, payment, quota, or user data systems

Agent 在上述行為前應停止並詢問使用者確認。

## Sources / 參考

- [OpenClaw docs](https://openclawdoc.com/)
- [OpenClaw ClawHub docs](https://docs.openclaw.ai/tools/clawhub)

