# 🦅 APEX Oracle Plugin for ElizaOS

### *Advanced Risk & PnL-Window Intelligence for Solana Agents*

This integration allows your **ElizaOS** agents to utilize the **APEX Oracle v0.5.0** engine. It moves beyond basic security checks, providing agents with deep-market metrics like **Organic Absorption Ratio (OAR)** and **Sybil DNA** to calculate the real PnL window of any Solana token.

---

## 🚀 Overview

The plugin enables an agent to:
1.  **Analyze any Mint Address** in real-time.
2.  **Evaluate Liquidity Quality** (OAR metric).
3.  **Detect Sybil Clusters** and developer wash-trading.
4.  **Predict Lifespan** based on insider velocity and pressure.

---

## 📦 Installation

From your ElizaOS project root:

```bash
cd integrations/eliza-plugin
npm install
```
---

## ⚙️ Configuration
Add the following credentials to your agent's .env file:
```
APEX_API_KEY=your_secret_key
APEX_API_URL=https://ai-score-agent.onrender.com
```
---

## 🛠 Integration
To activate the plugin, import it into your character.json or character definition file:
```
{
  "name": "ApexPredatorAgent",
  "plugins": ["@apex-oracle/eliza-plugin"],
  "settings": {
    "secrets": {
      "APEX_API_KEY": "your_key_here"
    }
  }
}
```
---

## 🤖 Actions & Commands
**APEX_TOKEN_SCAN**
The primary action. Triggered when the agent detects a request to scan or evaluate a token.

**Examples:**
- "Check this contract: Dt7rNPRfpmf4P8QvWQgyh5S7pnp4nQWYUmUwrarwpump"
- "Is it safe to trade [Mint Address]?"
- "Run APEX scan on $TICKER"

---

## 📂 File Structure
The logic is organized as follows:
- ```src/index.ts```: Main entry point and plugin definition.
- ```src/actions/analyzeToken.ts```: Core logic for API interaction and data parsing.
- ```package.json```: Dependencies and build scripts.

---

## 📊 Tiered Data Access
| Metric | Basic Tier | Predator Tier |
|--------|------------|---------------|
| Opportunity Score | ✅ | ✅ |
| RugCheck Integration | ✅ | ✅ |
| OAR (Organic Absorption) | ❌ | ✅ |
| Sybil DNA Clustering | ❌ | ✅ |
| Jito/MEV Toxicity | ❌ | ✅ |

To upgrade your API key, contact vltnovem@gmail.com

---

## 📨 Support 

- **email:** vltnovem@gmail.com
- **Telegram:** https://t.me/rd9analytics
- **Developer Docs:** https://apex-oracle.com/docs
- **Twitter:** https://x.com/9rd_analytics

*"Give your agents eyes. Stop being the exit liquidity."*
