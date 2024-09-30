interface CoinData {
    [symbol: string]: string[];
}

export const coinNetwork: CoinData = {
    "ETH": ["ETH", "USDT", "USDC", "RVF(V2)", "ARB", "DAI", "LINK", "AURORA", "BOBA"],
    "BNB": ["BNB", "USDT", "USDC", "DAI"],
    "POL": ["POL", "USDC.E", "USDT", "USDC"],
    "AVAX": ["AVAX", "USDT", "WETH.e", "USDC"],
    "XDAI": ["XDAI", "WXDAI", "WETH", "USDT"],
    "SOL": ["SOL", "USDT", "USDC", "RAY"],
    "FTM": ["FTM", "DAI", "USDC", "fUSDT"],
    "KCS": ["KCS", "USDT", "USDC"],
    "TLOS": ["TLOS"],
    "KLAY": ["KLAY", "USDT", "USDC"],
    "AURORA": ["ETH", "AURORA", "USDT", "USDC"],
    "GLMR": ["GLMR"],
    "ACA": ["ACA"],
    "ETHW": ["ETHW"],
    "BOBA": ["ETH", "BOBA"],
    "ONE": ["ONE"],
    "METIS": ["METIS"],
    "BTC": ["BTC"],
    "OKT": ["OKT", "USDT", "USDC"],
    "HT": ["HT", "HUSD", "USDT", "USDC"],
    "TRX": ["TRX", "JST", "USDC", "USDT"],
    "OSMO": ["OSMO", "ATOM", "FET", "SCRT"],
    "ZK": ["ETH", "USDC", "ZK"]
};
