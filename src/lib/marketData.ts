import { MarketItem } from '@/types';

// Mock data for development - replace with real API calls
const mockStockData: Record<string, MarketItem> = {
  AAPL: { symbol: 'AAPL', name: 'Apple Inc.', price: 175.43, change: 2.15, changePercent: 1.24, type: 'stock' },
  MSFT: { symbol: 'MSFT', name: 'Microsoft Corp.', price: 338.11, change: -1.89, changePercent: -0.56, type: 'stock' },
  TSLA: { symbol: 'TSLA', name: 'Tesla Inc.', price: 242.54, change: 8.76, changePercent: 3.75, type: 'stock' },
  GOOGL: { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.56, change: 0.89, changePercent: 0.63, type: 'stock' },
  AMZN: { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 128.91, change: -2.34, changePercent: -1.78, type: 'stock' },
};

const mockCryptoData: Record<string, MarketItem> = {
  BTC: { symbol: 'BTC', name: 'Bitcoin', price: 43250.67, change: 1250.34, changePercent: 2.98, type: 'crypto' },
  ETH: { symbol: 'ETH', name: 'Ethereum', price: 2650.89, change: -45.67, changePercent: -1.69, type: 'crypto' },
  SOL: { symbol: 'SOL', name: 'Solana', price: 98.45, change: 3.21, changePercent: 3.37, type: 'crypto' },
  ADA: { symbol: 'ADA', name: 'Cardano', price: 0.456, change: 0.023, changePercent: 5.31, type: 'crypto' },
  DOT: { symbol: 'DOT', name: 'Polkadot', price: 6.78, change: -0.12, changePercent: -1.74, type: 'crypto' },
};

export const fetchStockData = async (symbols: string[]): Promise<MarketItem[]> => {
  // In production, replace with real API call
  // Example: Alpha Vantage, Twelve Data, or Yahoo Finance API
  
  return symbols.map(symbol => {
    const data = mockStockData[symbol];
    if (data) {
      // Add some randomness to simulate real-time updates
      const randomChange = (Math.random() - 0.5) * 2;
      return {
        ...data,
        price: Math.round((data.price + randomChange) * 100) / 100,
        change: Math.round((data.change + randomChange) * 100) / 100,
        changePercent: Math.round((data.changePercent + randomChange * 0.1) * 100) / 100,
      };
    }
    return {
      symbol,
      name: symbol,
      price: 0,
      change: 0,
      changePercent: 0,
      type: 'stock' as const,
    };
  });
};

export const fetchCryptoData = async (symbols: string[]): Promise<MarketItem[]> => {
  // In production, replace with CoinGecko or CoinMarketCap API
  
  return symbols.map(symbol => {
    const data = mockCryptoData[symbol];
    if (data) {
      // Add some randomness to simulate real-time updates
      const randomChange = (Math.random() - 0.5) * 100;
      return {
        ...data,
        price: Math.round((data.price + randomChange) * 100) / 100,
        change: Math.round((data.change + randomChange) * 100) / 100,
        changePercent: Math.round((data.changePercent + randomChange * 0.1) * 100) / 100,
      };
    }
    return {
      symbol,
      name: symbol,
      price: 0,
      change: 0,
      changePercent: 0,
      type: 'crypto' as const,
    };
  });
};

export const fetchMarketData = async (stocks: string[], crypto: string[]): Promise<{
  stocks: MarketItem[];
  crypto: MarketItem[];
}> => {
  try {
    const [stockData, cryptoData] = await Promise.all([
      fetchStockData(stocks),
      fetchCryptoData(crypto),
    ]);

    return {
      stocks: stockData,
      crypto: cryptoData,
    };
  } catch (error) {
    console.error('Error fetching market data:', error);
    return {
      stocks: [],
      crypto: [],
    };
  }
};
