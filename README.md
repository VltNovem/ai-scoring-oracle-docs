# 🛡️ Crypto Project Scoring Oracle (v4.2)
### *A Real-Time Security & Risk Intelligence Layer for AI Trading Agents*

The **Crypto Project Scoring Oracle** is a specialized API designed for the **Agent-to-Agent (A2A) economy**. It provides autonomous trading agents with a machine-readable "Veto Filter" to detect rugpulls, honeypots, and insider dumps before they execute a trade. 

Unlike generic LLMs or standard auditors, version **v4.2 (Full Insight)** never aborts early. It provides complete market data, price points, and security flags even for high-risk tokens, enabling agents to maintain full situational awareness.

---

## 🚀 Key Features for Agent Developers

- **Zero API Lag:** Uses search-based indexing to see new token liquidity the second it hits the market (optimized for Solana & Base).
- **is_tradeable Flag:** A boolean logic trigger designed for instant agent execution (True only if Risk < 40 and Liquidity > $10k).
- **Hard-Security Audits:** Integrated safety flags from **RugCheck** (Solana) and **GoPlus** (EVM).
- **Insider Insight:** Automated detection of top-holder clusters, supply concentration, and potential Sybil bot farms.
- **Machine-Ready:** Strictly JSON output, designed for seamless integration with **ElizaOS**, **Virtuals**, and **ai16z** frameworks.

---

## 🛠 Integration Guide

### 1. Endpoint & Authentication
The API is currently in **Beta**. Access requires an `X-API-KEY`.

*   **Base URL:** `https://ai-score-agent.onrender.com`
*   **Method:** `GET`
*   **Header:** `X-API-KEY: YOUR_SECRET_KEY`

### 2. Request Patterns

#### **Mode A: Discovery (Ticker Search)**
Find the most liquid contract for a specific ticker.
`GET /analyze/PEPE`

#### **Mode B: Deep Scan (Contract Audit)**
Perform a full security audit on a specific contract.
`GET /analyze/0xad1da118f884df08b00fa6fe7b41a52912c17fbf`

---

## 💻 Code Example (Python)

```python
import requests

API_URL = "https://ai-score-agent.onrender.com/analyze/"
CONTRACT_ADDRESS = "Dt7rNPRfpmf4P8QvWQgyh5S7pnp4nQWYUmUwrarwpump"
HEADERS = {"X-API-KEY": "your_test_key_here"}

try:
    response = requests.get(f"{API_URL}{CONTRACT_ADDRESS}", headers=HEADERS)
    data = response.json()

    # The 'is_tradeable' flag is the primary signal for autonomous execution
    if data.get("is_tradeable"):
        print(f"🚀 Execution Authorized: {data['project_name']}")
        print(f"Price: {data['data']['price_usd']} | Risk Score: {data['risk_score']}")
    else:
        print(f"🛑 Veto Triggered. Verdict: {data['verdict']}")
        print(f"Primary Reason: {data['warnings']}")

except Exception as e:
    print(f"Oracle Connection Error: {e}")
```
## 📊 Understanding the Output

| Field            | Type   | Description |
|------------------|--------|-------------|
| `is_tradeable`   | bool   | **Global Trigger.** True if the project passes all security and liquidity thresholds. |
| `risk_score`     | float  | **0 to 100.** Weighted risk assessment (Security 55%, Liquidity 20%, Sentiment 15%, Structure 10%). |
| `security_check` | object | **On-Chain Audit.** Includes `rugcheck_score`, `is_honeypot`, `is_mintable`. |
| `market_structure` | object | **Ownership Data.** Top 10 holder concentration % and Sybil detection flags. |
| `warnings`       | list   | **Risk Context.** Human-readable alerts (e.g., *"High Insider Concentration"*). |

## 📉 Case Study: Predictive Accuracy (Feb 2026)

Our **v4.2 stress-test** on trending Solana pairs demonstrated the Oracle’s ability to detect **Slow Rugs** and **Exit Scams** while they were still active.

### Case 1: "DARKTRUMP" Prediction

**Time T=0 (Price: $0.003438)**  
Oracle issued a **Risk Score of 59.3**  
⚠️ High Insider Warning

**Time T+2h (Price: $0.0000015)**  
Token collapsed by **99.95%**

**Conclusion:**  
The Oracle correctly identified concentrated holder structure as a precursor to the dump.

---

### Case 2: "NVIDIA" Exit Scam

**Status at T=0:**  
Liquidity was **$50,000+**

Oracle detected anomalous **REMOVE LIQUIDITY** signatures.

**Within 120 minutes:**  
Risk Score jumped from **32 → 100** as the creator drained the pool.

**Result:**  
Agents using the `is_tradeable` flag successfully avoided execution.

---

## 📊 Beta Usage Guidelines

To ensure maximum precision for all testers, the following limits apply:

- **Daily Quota:** 100 deep-scan requests per 24 hours  
- **Rate Limit:** 1 request per 10 seconds  
- **Network Support:** Solana and EVM (Ethereum, Base, BNB Chain, Polygon, Arbitrum and other L2)

---

## 📨 Get a Test API Key

We are looking for active agent developers to stress-test our Oracle.

To get your free **Master API Key**, please reach out:

- **Email:** `vlt.novem@gmail.com`

