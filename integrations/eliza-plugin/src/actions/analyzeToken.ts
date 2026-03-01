import {
    Action,
    ActionExample,
    IAgentRuntime,
    Memory,
    State,
    HandlerCallback,
} from "@ai16z/eliza";

export const apexAnalyzeAction: Action = {
    name: "APEX_TOKEN_SCAN",
    similes: [
        "CHECK_TOKEN",
        "ANALYZE_SOLANA_TOKEN",
        "PREDATOR_SCORE",
        "GET_OAR",
        "CHECK_RUG",
        "SCAN_CONTRACT"
    ],
    description: "Deep analysis of a Solana token using APEX Oracle to detect Sybil clusters, OAR, and PnL window.",
    
    validate: async (runtime: IAgentRuntime, _message: Memory) => {
        // Проверка наличия API ключа в настройках агента (.env)
        const apiKey = runtime.getSetting("APEX_API_KEY");
        return !!apiKey;
    },

    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        _state: State,
        _options: any,
        callback: HandlerCallback
    ) => {
        // 1. Извлечение адреса токена (Solana Mint Address)
        const solanaAddressRegex = /[1-9A-HJ-NP-Za-km-z]{32,44}/g;
        const mint = message.content.text.match(solanaAddressRegex)?.[0];

        if (!mint) {
            callback({ text: "Please provide a valid Solana contract address to run the APEX scan." });
            return false;
        }

        const apiKey = runtime.getSetting("APEX_API_KEY");
        const baseUrl = runtime.getSetting("APEX_API_URL") || "https://ai-score-agent.onrender.com";

        try {
            const response = await fetch(`${baseUrl}/analyze/${mint}`, {
                method: "GET",
                headers: { 
                    "X-API-KEY": apiKey,
                    "Accept": "application/json"
                }
            });

            if (!response.ok) {
                if (response.status === 403) throw new Error("Invalid APEX API Key.");
                throw new Error(`APEX API Error: ${response.statusText}`);
            }

            const data = await response.json();

            // 2. Формирование отчета для LLM
            // Мы передаем структурированный текст, чтобы агент мог сделать вывод
            const responseText = `
🦅 **APEX ORACLE REPORT: ${data.token}**
Verdict: **${data.verdict}** (Score: ${data.opportunity_score}/100)

**Micro-Structure Metrics:**
- **Organic Absorption (OAR):** ${data.predator_metrics.organic_absorption_ratio}
- **Sybil Cluster Risk:** ${data.predator_metrics.sybil_cluster_risk}
- **Wash Trading Index:** ${data.predator_metrics.wash_trading_index}
- **MEV Toxicity:** ${data.predator_metrics.mev_toxicity_index}
- **Insider Exit Velocity:** ${data.predator_metrics.insider_exit_velocity}

**Execution Window:**
- **Expected Lifespan:** ${data.extraction_window.expected_lifespan}
- **$500 Slippage Impact:** ${data.extraction_window.slippage_on_500usd}

*Analysis Context: This token has been evaluated using the Predator v0.5.0 model. ${
    data.opportunity_score > 70 
    ? "High PnL potential detected." 
    : "Proceed with extreme caution, liquidity structure is unstable."
}*
            `.trim();

            callback({ text: responseText });
            return true;

        } catch (error: any) {
            console.error("APEX Oracle Action Error:", error.message);
            callback({ text: `I couldn't complete the APEX scan. Error: ${error.message}` });
            return false;
        }
    },

    examples: [
        [
            { 
                user: "{{user1}}", 
                content: { text: "Scan this token Dt7rNPRfpmf4P8QvWQgyh5S7pnp4nQWYUmUwrarwpump" } 
            },
            { 
                user: "{{user2}}", 
                content: { text: "Initiating APEX Predator Scan... results incoming.", action: "APEX_TOKEN_SCAN" } 
            }
        ],
        [
            { 
                user: "{{user1}}", 
                content: { text: "Check $TOKEN address 8vL6p..." } 
            },
            { 
                user: "{{user2}}", 
                content: { text: "Analyzing token micro-structure with APEX Oracle...", action: "APEX_TOKEN_SCAN" } 
            }
        ]
    ] as ActionExample[][],
};
