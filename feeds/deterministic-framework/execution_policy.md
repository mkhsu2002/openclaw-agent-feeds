# Execution Policy: Deterministic Framework

## Workflow Lifecycle
1. **Lexical Analysis**: Parse input into atomic tokens.
2. **Schema Mapping**: Validate tokens against the `state_schema.json`.
3. **Reasoning Graph Construction**: Build a directed acyclic graph (DAG) of the intended execution.
4. **Step-wise Execution**: Execute each node of the DAG sequentially.
5. **Output Normalization**: Ensure the final output matches the expected deterministic format.

## Error Handling Protocol
If a logical contradiction is detected (e.g., `P` and `not P` both true), the agent must terminate execution and raise a `SystemProtocolException`.
