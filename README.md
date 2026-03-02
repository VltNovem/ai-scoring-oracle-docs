# 🦅 APEX ORACLE (v0.5.0 "Gambler Edition")
### *Edge-Oriented Scoring & Pressure Engine for Solana Trading Agents*

**Stop looking for "safe" projects. They don't exist.** 
In a market where 99% of tokens are engineered to fail, **APEX Oracle** shifts the paradigm from *Security Auditing* to *PnL-Window Estimation*. We don't tell you if a token is a scam — we tell you how much "meat" (organic liquidity) is in the room and how much time you have before the "predators" (devs) pull the trigger.

---

## ⚡ The Predator's Edge: Key Metrics

Unlike generic scanners, APEX v0.5.0 analyzes the **micro-structure of the kill zone**:

*   **OAR (Organic Absorption Ratio):** The ultimate filter. It calculates the ratio of real external liquidity vs. circular wash-trading. If OAR < 40%, you are the exit liquidity.
*   **Funding DNA:** Traces the "ancestor wallets" of top holders. If 8 out of 10 whales were funded by the same CEX sub-wallet within a 3-minute window, it’s a Sybil cluster.
*   **Insider Velocity Layer:** Tracks the real-time shift in supply concentration between blocks. We see the dump before it hits the chart.
*   **Jito/MEV Toxicity:** Analyzes the last 15-50 transactions for Jito bundles and sandwich-bot density to determine if the pool is a "Toxic Battle Zone".

---

## 🛠 Machine-to-Machine Integration

APEX is built for the **A2A (Agent-to-Agent) economy**. Our JSON output is optimized for instant decision-making by autonomous trading frameworks (ElizaOS, ai16z, custom Jito-bots).

### 1. Endpoint
*   **Base URL:** `https://ai-score-agent.onrender.com`
*   **Method:** `GET`
*   **Auth:** `X-API-KEY: <YOUR_API_KEY>`

### 2. Request Example (Python)
```python
import requests

# Direct access to the Scoring Engine
ORACLE_URL = "https://ai-score-agent.onrender.com/analyze/TOKEN_ADDRESS"
HEADERS = {"X-API-KEY": "YOUR_API_KEY"}

response = requests.get(ORACLE_URL, headers=HEADERS)
data = response.json()

# The 'opportunity_score' is your primary PnL-edge indicator
if data['opportunity_score'] > 80:
    print(f"🚀 VERDICT: {data['verdict']} | Window is OPEN.")
    print(f"OAR: {data['oar_score']}% | Sybil Risk: {data['sybil_index']}")
else:
    print(f"🛑 VERDICT: {data['verdict']} | Reason: {data['warnings'][0]}")
```
## 📊 Logic & Verdicts
| Verdict | Score | Description |
|---------|-------|-------------|
| OPPORTUNITY_MAX | 80 - 100 | Low Sybil density + High OAR. High probability of an organic run. |
| HUNTING_ALLOWED | 60 - 80 | Professional "Gambler" zone. High risk, but clear PnL-window exists. |
| TOXIC_BATTLE_ZONE | MEV > 70% | High Jito/MEV activity. You will be sandwiched or frontrun. |
| CAUTION_REQUIRED | 40 - 60 | Developing Sybil clusters. Dev is likely preparing the exit. |
| ZONE_CLOSED | < 40 | OAR is dead. The pool is 90% "wash". Immediate exit recommended. |

## 📉 Case Study: Lifespan Prediction (Feb 2026)
* **Token: $CLAUDEGATE**
* **Generic Scanners:** "Liquidity Locked, No Mint, 100% Safe."
* **APEX Oracle:** Detected **OAR of 12%** and a **Funding DNA** match across 14 "whale" wallets.
* **Verdict:** ZONE_CLOSED (Score: 28).
* **Result:** Dev drained $140k via slow-sell from Sybil wallets 45 minutes later. Chart stayed "green" while liquidity vanished.

## ⚡Tiered Access (B2B API)
- **Tier 1: Basic (Free)** - 100 requests/day. Standard RugCheck integration.
- **Tier 2: Predator** - 5,000 requests/day. Full OAR + Sybil DNA + Jito Toxicity.
- **Tier 3: Apex Engine** - Unlimited. WebSocket stream + Early Lifespan Prediction Heuristics.

## 📨 Secure Your Access
We are currently onboarding professional bot developers and fund managers for the **v0.5.0 Beta**.
- **Telegram:** [https://t.me/rd9analytics]
- **Email:** vlt.novem@gmail.com
- **X (Twitter):** [https://x.com/9rd_analytics]

*"In the Solana jungle, you are either the Predator or the Meat. Choose your Oracle wisely."*
