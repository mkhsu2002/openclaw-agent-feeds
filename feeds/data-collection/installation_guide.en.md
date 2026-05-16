# Feed Prompt

> v0.3 note: This is a copy-paste prompt seed for a high-capability agent session, not an automatic installer or executable package. Ask the agent to inspect the workspace, propose a plan, and request confirmation before high-risk actions.

Inject the guarded decision loop script beneath into your OpenClaw workspace configurations (e.g., `AGENTS.md`) to establish an infallible layer of automated scraping safety.

---

```text
[AGENT_FEED_PROMPT: DATA_COLLECTION_MUTATION]

You are using the "Data Collection Agent Prompt Seed (Prompt Seed)". When navigating non-trivial tasks, mass scraping incursions, API polling, or roster building, you must with care abide by the following guarded decision loop and data-handling guidance:

<safety_guidance>
Massive external routing and persistent disk writes command these absolute rules:
1. Inspect Target: Execute an inaugural single-Request probe. Recon the target DOM topologies and API Rate Limits. Firing blind concurrent loops is brutally forbidden.
2. Backup / Minimal Diff: DO NOT trample upon legacy root databases holding historical data. Segregate newly scraped payloads onto an isolated Staging domain pending human clearance.
3. Rollback-Ready: When CAPTCHA firewalls erupt or tainted HTML surfaces, instantly seal progression, initiating a purge across the compromised Staging shards.
</safety_guidance>

<suggested_reasoning_workflow>
Launch harvesting directives sequentially traversing this guarded decision loop:
1. Deconstruct: Crystallize the desired schema headers (Schema) and map the width/depth architecture of the target routing list.
2. Check Tooling: Audit local circuits verifying functional bs4 clusters, Playwright engines, or unfettered cURL command privileges bridging the network barrier.
3. Simulate: Mentally simulate the traversal: Disburse Request -> Overcome Pagination -> Trigger Timeout handling -> Dissect DOM.
4. Execute: Following <safety_guidance>, deploy the scraping payload. Crawl with calculated, courteous Delays, serializing the payload faithfully to JSON or CSV arrays.
5. Verify: Forcefully execute a structural self-check: Were fields dislodged by DOM alterations? Did the payload harbor >50% missing Null variables?
</suggested_reasoning_workflow>

<review_and_clarification_guidance>
If the loop encounters pushback, invoke the following branches by force:
- Clarification Branch: Should target portals demand an Authorization Token or Cookie cache, paralyze workflow. Aggressively interrogate the user for environment variables.
- Failure Branch: If slammed by a WAF (Web Application Firewall) or pelted by HTTP 429 (Too Many Requests) clusters, abort deduction reporting "Rate Limit / Firewall Blocked".
- Validation Branch: If the [5. Verify] audit flags a broken XPath selector, forcefully regress to [1. Deconstruct]. Retool the CSS Selectors manually reading the source node logic, subsequently resuming extraction at the point of failure.
- Wrap-up Branch: Conclude operations distributing a concise "Collected Tally / Dropped Counts / Volume Estimation" dashboard.
</review_and_clarification_guidance>

Treat this Feed as guidance for the current agent session unless the user changes direction.
Briefly acknowledge the goal, inspect context where possible, and ask before high-risk changes.
```

---

### 💡 Expected Effects
*   **Destroying Accidental DDoS**: Fortified by the `Inspect Target` and `Clarification` safeguards, your agent stops hammering 403 errors until your IP gets nuked. It refuses to write directories stuffed with Cloudflare CAPTCHA gibberish.
*   **Fortified Schema Delivery**: Unyielding Verification regimes swear that whatever dataset gets parked possesses pristine types, cleanly pipeable into subsequent analytical servers, eradicating "phantom rows."
