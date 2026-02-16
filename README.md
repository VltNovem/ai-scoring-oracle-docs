# ai-scoring-oracle-docs
🛡️ Real-time Security &amp; Risk Intelligence API for AI Trading Agents. Machine-readable scoring (0-100) for Solana and EVM. Detect rugpulls, honeypots, and insider dumps before your agent trades. Optimized for the A2A economy (ElizaOS, ai16z). Live on-chain audits + insider concentration analysis. Machine-ready JSON for autonomous DAOs.


# 🛡️ Crypto Project Scoring Oracle (v4.1)
A Real-Time Security & Risk Intelligence Layer for AI Trading Agents

The Crypto Project Scoring Oracle is a specialized API designed for the Agent-to-Agent (A2A) economy. It provides autonomous trading agents with a machine-readable "Veto Filter" to detect rugpulls, honeypots, and insider dumps before they execute a trade.

Unlike generic LLMs, this oracle combines live on-chain security audits with real-time liquidity tracking and insider concentration analysis.

## 🚀 Key Features for Agent Developers

**Zero API Lag:** Uses search-based indexing to see new token liquidity the second it hits the market.

**Multi-Chain Support:** Integrated safety flags for Solana (via RugCheck) and EVM (via GoPlus).

**Insider Insight:** Automated detection of top-holder clusters and potential Sybil farms.

**Scoring Engine:** A weighted 0–100 risk score optimized for high-frequency scalping.

**Machine-Ready:** Strictly JSON output, designed for easy integration with frameworks like ElizaOS, Virtuals, and ai16z.

## 🛠 Integration Guide
### 1. Endpoint & Authentication

The API is currently in Beta. Access requires an X-API-KEY.

Base URL: https://ai-score-agent.onrender.com

Method: GET

Header: X-API-KEY: YOUR_SECRET_KEY

### 2. Request Patterns
Mode A: Discovery (Ticker Search)

Find the most liquid contract for a specific ticker.
GET /analyze/PEPE

Mode B: Deep Scan (Contract Audit)

Perform a full security audit on a specific contract.
GET /analyze/0xad1da118f884df08b00fa6fe7b41a52912c17fbf

## 💻 Code Example (Python)

```python
import requests

# The API endpoint for project analysis
API_URL = "https://ai-score-agent.onrender.com/analyze/"
# Target token contract address
CONTRACT_ADDRESS = "Dt7rNPRfpmf4P8QvWQgyh5S7pnp4nQWYUmUwrarwpump"
# Your secret beta key
HEADERS = {"X-API-KEY": "your_test_key_here"}

try:
    response = requests.get(f"{API_URL}{CONTRACT_ADDRESS}", headers=HEADERS)
    data = response.json()

    if data.get("risk_score", 100) < 30:
        print(f"✅ Safe to trade: {data.get('project_name')}")
    else:
        print(f"⚠️ High Risk! Verdict: {data.get('verdict')}")
        print(f"Warnings: {data.get('warnings')}")

except Exception as e:
    print(f"Error connecting to Oracle: {e}")
```

## 📊 Understanding the Output

| Field | Description |
| :--- | :--- |
| `risk_score` | **0 (Safe) to 100 (Critical)**. A weighted assessment of contract safety, liquidity depth, and reputation. |
| `security_check` | **Hard-Security Flags**. Detailed audit results: `is_honeypot`, `is_mintable`, and `rugcheck_score`. |
| `market_structure` | **Ownership Analysis**. Tracks Top 10 holder concentration and detects potential Sybil bot farms. |
| `warnings` | **Risk Context**. Human-readable alerts for quick decision-making (e.g., *"High Insider Concentration"*). |

## ⚠️ Beta Limitations & Resources

Rate Limits: During Beta, each key is limited to X requests per day.

Tavily Search: Deep sentiment analysis is limited by search credits.

Uptime: Free-tier hosting may have a "cold start" delay of ~30 seconds.

## 📨 Get a Test API Key

We are looking for 5 active developers to stress-test our Oracle.
To get your free Master API Key, please reach out:

email: vlt.novem@gmail.com
