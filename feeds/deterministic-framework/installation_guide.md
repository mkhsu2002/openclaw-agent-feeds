# Installation Guide: Deterministic Framework

## Prerequisites
- OpenClaw Core Engine v2.4.0 or higher.
- `openclaw-logic-engine` library.
- JSON runtime for schema validation.

## Integration Steps
1. **Module Injection**: Place the `deterministic-framework` directory into your `/upgrades` folder.
2. **Bootstrap Update**: Modify `config.yaml` to include:
   ```yaml
   upgrades:
     - path: ./upgrades/deterministic-framework
       enforce_strict_logic: true
   ```
3. **Engine Restart**: Re-initialize the OpenClaw service to apply the new execution policy.
4. **Validation**: Run the sanity check script `check_logic.sh` included in the pack.
