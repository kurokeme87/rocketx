import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Define the Coin interface
export interface Coin {
    id: string;
    name: string;
    symbol: string;
    image?: string;
}

// Function to fetch coins
const fetchCoins = async (): Promise<Coin[]> => {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
            vs_currency: 'usd',     
            order: 'market_cap_desc',
            sparkline: false
        }
    });
    
    return response.data;
};

// Fetch coin details by ID with only required fields
const fetchCoinsByID = async (id: string): Promise<Coin> => {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
    const { id: coinId, name, symbol, image } = response.data;
    
    return {
        id: coinId,
        name,
        symbol,
        image: image?.large || '', // Use the large image, fallback to an empty string if not available
    };
};

// Function to fetch exchange rate
interface ExchangeRateResponse {
    [key: string]: {
        usd: number;
    };
}

// Function to fetch exchange rate
const fetchExchangeRate = async (fromId: string, toId: string): Promise<ExchangeRateResponse> => {
    const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${fromId},${toId}&vs_currencies=usd`);
    return response.data;
};

// Custom hook to get coins
export const useGetCoins = () => {
    return useQuery<Coin[], Error>({
        queryKey: ['coins'],
        queryFn: fetchCoins,
        staleTime: 1000 * 60 * 5,
    });
};

// Custom hook to get coin details by ID
export const useGetCoinByID = (id: string) => {
    return useQuery<Coin, Error>({
        queryKey: ['coin', id],
        queryFn: () => fetchCoinsByID(id),
        enabled: !!id,
    });
};

// Custom hook to get exchange rate
export const useGetExchangeRate = (fromId: string, toId: string) => {
    return useQuery<ExchangeRateResponse, Error>({
        queryKey: ['exchangeRate', fromId, toId],
        queryFn: () => fetchExchangeRate(fromId, toId),
        enabled: !!fromId && !!toId,
    });
};
