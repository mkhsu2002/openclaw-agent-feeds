# 🦞 [Security & Privacy] PII Masking Guardrails

### 📄 File Overview
Under strict global privacy regulations in 2026, the cost of leaking **Personally Identifiable Information (PII)** is extremely high. This feed pack establishes a "security filter membrane" for the agent, automatically performing de-identification before data enters the AI core for processing.

### 🚀 Core Enhancements
1. **Named Entity Recognition (NER)**: Automatically identifies names, phone numbers, ID numbers, credit card numbers, etc.
2. **Dynamic De-identification**: Tokenizes sensitive words (e.g., [USER_01]), restoring them after processing or masking them permanently.
3. **Compliance Logs**: Records de-identification behavior during processing (excluding raw data).

### 📋 Recommended Models
- **Recommended**: GPT-5.3 / Gemini 3.0 Pro / Claude Sonnet 4.6 (High accuracy required to avoid missing PII)
- **Minimum**: GPT-5.1 / Gemini 3.1 Flash / Claude Haiku 4.5 (2026 Gen)
