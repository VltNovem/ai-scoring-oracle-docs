# 🦅 APEX ORACLE (v0.8.7 "Window Hunter Edition")
### *Decisional Intelligence Layer for Solana AI Agents*

**Stop looking for "safe" projects. They don't exist.** 
APEX Oracle v0.8.7 is the first engine designed to detect **PnL Windows** in toxic environments. We don't just audit code; we calculate the time remaining before liquidity extraction using advanced Momentum & Pressure analytics.

---

## ⚡ Core Capabilities (The Decisional Edge)

APEX analyzes the **micro-structure of the kill zone** across dimensions that generic scanners ignore:

*   **SPECULATIVE_HUNT (Momentum Bypass):** Identifies high-momentum "rug-traps" where retail FOMO temporarily overrides insider sell pressure, creating 5-15 minute profit windows.
*   **OAR (Organic Absorption Ratio):** Measures real retail buy-in vs. orchestrated wash-trading.
*   **Insider Exit Velocity:** Tracks supply concentration shifts in real-time. We see the dump starting before it hits the chart.
*   **Dynamic Slippage Matrix:** Non-linear price impact calculations for different order sizes ($100 to $5000), allowing agents to size positions scientifically.
*   **Config Integrity Hash:** Every verdict is signed with a unique `config_hash`, ensuring full transparency and traceability of the scoring model used.

---

## 🛠 Integration Specs

APEX is built for the **A2A (Agent-to-Agent) economy**. JSON output is strictly standardized for non-blocking decision-making by autonomous trading frameworks (ElizaOS, custom bots).

### Endpoint
*   **URL:** `https://ai-score-agent.onrender.com/analyze/{token_address}`
*   **Method:** `GET`
*   **Auth:** `x-api-key: <YOUR_API_KEY>`

### Response Architecture (v0.8.7)
```json
{
  "version": "0.8.7",
  "config_hash": "af8d3aecde0c",
  "verdict": "SPECULATIVE_HUNT",
  "opportunity_score": 45.2,
  "extraction_window": {
    "expected_lifespan": "Terminal (5-15 mins)",
    "slippage_grid_usd": {
      "100": 1.2,
      "500": 5.8,
      "1000": 12.4,
      "5000": 45.0
    }
  }
}
```

---

## 📊 Logic & Verdicts

| Verdict | Strategy | Engine Assessment |
|---------|:---:|-------------|
| **OPPORTUNITY_MAX** | **Aggressive Buy** | High organic demand, low Sybil density. Solid window. |
| **HUNTING_ALLOWED** | **Tactical Entry** | Measurable PnL-window exists. Trailing stop mandatory. |
| **SPECULATIVE_HUNT** | **High-Speed Scalp** | Toxic asset with extreme momentum. Exit in <15 mins. |
| **ZONE_CLOSED** | **Hard Skip** | Terminal risk. Dump in progress or "Paper Castle" detected. |
| **TOXIC_BATTLE_ZONE** | **Hard Skip** | Critical MEV/Sandwich bot density. Avoid. |

---

## 📚 Documentation
*   [Execution Playbook](./EXECUTION_PLAYBOOK.md) — Implementation guide for bot developers.

## 📨 Secure Your Access (Closed Beta)
We are onboarding a limited number of professional developers for stress-testing.
- **Telegram:** https://t.me/rd9analytics
- **X (Twitter):** https://x.com/9rd_analytics
- **email:** vlt.novem@gmail.com
