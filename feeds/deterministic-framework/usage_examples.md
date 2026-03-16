# Usage Examples: Deterministic Framework

## Scenario A: Financial Audit Loop
**Input**: "Validate the quarterly expense report against the budget (budget.json)."
**Agent Action**:
- Loads `budget.json`.
- Traverses expense entries.
- Checks if `actual <= budget`.
- Outputs binary `COMPLIANT` or `NON-COMPLIANT` per entry with zero deviation.

## Scenario B: Code Integrity Check
**Requirement**: "Verify that all exported functions have JSDoc documentation."
**Logic**:
- Scans `src/` directory.
- Matches exported symbols.
- Checks for preceding documentation blocks.
- Fails execution if a single undocumented export is found (Deterministic failure).
