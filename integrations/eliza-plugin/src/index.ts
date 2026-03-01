import { Plugin } from "@ai16z/eliza";
import { apexAnalyzeAction } from "./actions/analyzeToken.ts";

export const apexOraclePlugin: Plugin = {
    name: "apex-oracle",
    description: "APEX Oracle Plugin for Solana Token Analysis (OAR & Sybil DNA)",
    actions: [apexAnalyzeAction],
    providers: [],
    evaluators: [],
};

export default apexOraclePlugin;
