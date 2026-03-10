
# 🦅 APEX Oracle: The Execution Playbook
*Strategic implementation guide for autonomous trading agents.*

This document provides a rigid logic framework for integrating APEX Oracle verdicts into your agent's execution code.

## 1. Entry Filter (Key: `verdict`)
Your agent must prioritize the `verdict` field. Do not attempt to calculate entry if the Oracle flags a token as restricted.

*   🔴 **`ZONE_CLOSED`**: **HARD SKIP.** The asset is terminally ill (Rug, Cascade Dump, 100% Sybil). 
*   🟢 **`HUNTING_ALLOWED` / `OPPORTUNITY_MAX`**: **PROCEED.** The asset has passed organic absorption filters.
*   🟡 **`SPECULATIVE_HUNT`**: **MOMENTUM PLAY.** The asset is high-risk but currently flooded with retail capital. Proceed only with strict Time-Stops.

## 2. Timing the Exit (Key: `expected_lifespan`)
Solana assets are not "investments"; they are "rented" windows of opportunity. Use this field to set your agent's exit timers.

*   ⏱️ **`Terminal (5-15 mins)`**: Mandatory for `SPECULATIVE_HUNT`. Program your agent to sell 100% of the position exactly **10 minutes** after entry, regardless of price action.
*   ⏱️ **`Short (Aggressive)`**: Typical window: 30 mins to 2 hours. Activate aggressive Trailing Stop-Loss (e.g., 15% trail).
*   ⏱️ **`Medium`**: Window: 2 to 6 hours. Suitable for standard position management.

## 3. Position Sizing (Key: `slippage_grid_usd`)
Never use fixed SOL amounts without checking the order book depth. APEX provides a non-linear slippage matrix.

**Implementation Logic:**
1. Determine your target entry (e.g., $500).
2. Check `data['extraction_window']['slippage_grid_usd']['500']`.
3. If value is **> 12%**, reduce your entry size to the next tier (e.g., $100).
4. If value is **> 20%**, skip the trade. High slippage on entry + exit will drain your PnL even if the price goes up.

## 4. Audit & Verification (Key: `config_hash`)
APEX is a dynamic system. For every trade your agent makes, log the `config_hash` provided in the response. 
*   If an agent's performance deviates, the hash allows us to audit the exact math model used during that specific microsecond.

---
*Follow the math. Preserve the capital. Hunt the edge.*
