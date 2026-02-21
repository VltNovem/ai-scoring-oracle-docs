# 🚀 Quickstart: Crypto Project Scoring Oracle (v4.2)

This guide will help you integrate the B2A (Business-to-Agent) Scoring Oracle into your trading bot or AI agent in less than 2 minutes.

## 1. Authentication
All requests must include your personal API Key in the headers.

**Header:** `X-API-KEY: YOUR_BETA_KEY`  
**Base URL:** `https://ai-score-agent.onrender.com`

## 2. API Endpoint

### [POST] /v4/score
Analyze any Solana token for real-time risk and market structure.

**Request Body (JSON):**
```json
{
  "address": "TOKEN_CONTRACT_ADDRESS",
  "chain": "solana"
}
```
## 3. Integration Examples
**Python**
```
import requests

def get_token_score(token_address):
    url = "https://ai-score-agent.onrender.com/v4/score"
    headers = {"X-API-KEY": "YOUR_BETA_KEY"}
    payload = {
        "address": token_address,
        "chain": "solana"
    }
    
    response = requests.post(url, json=payload, headers=headers)
    return response.json()

# Example usage
data = get_token_score("GaGh1vcw8NqArWuuqU2fwfmTUhxmWpnY38QKiZjUZwYM")
if data['is_tradeable']:
    print(f"✅ Safe to trade. Score: {data['score']}")
else:
    print(f"🚨 DANGER: {data['verdict']}. Flags: {data['risk_flags']}")
```
**cURL**
```
curl -X POST https://ai-score-agent.onrender.com/v4/score \
     -H "X-API-KEY: YOUR_BETA_KEY" \
     -H "Content-Type: application/json" \
     -d '{"address": "CONTRACT_ADDRESS", "chain": "solana"}'
```

## 4. Understanding Output
The Oracle returns a machine-readable JSON. Focus on these fields:
## 📊 Understanding the Output

| Field          | Type    | Description |
|----------------|---------|-------------|
| `is_tradeable` | Boolean | **Immediate Action.** `false` means the Oracle suggests aborting the trade. |
| `score`        | Float   | **0 (Safe) to 100 (Critical Risk).** |
| `risk_flags`   | List    | **Reasons for the score.** (e.g., `liquidity_peeling`, `insider_clusters`). |
| `verdict`      | String  | **Human-readable summary** for logs. |

## 5. Support & Feedback
This is a private beta. Please report any Sybil detection anomalies or latency issues directly via DM.
