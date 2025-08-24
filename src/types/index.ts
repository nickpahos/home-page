export interface LinkItem {
  id: string;
  title: string;
  url: string;
  description?: string;
  icon?: string;
}

export interface LinkCategory {
  id: string;
  title: string;
  links: LinkItem[];
  color: string;
}

export interface MarketItem {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  type: 'stock' | 'crypto';
}

export interface AppConfig {
  links: {
    reddit: LinkItem[];
    steam: LinkItem[];
    work: LinkItem[];
    github: LinkItem[];
    personal: LinkItem[];
  };
  watchlist: {
    stocks: string[];
    crypto: string[];
  };
  theme: {
    primaryColor: string;
    backgroundColor: string;
  };
}

export interface ClockData {
  time: string;
  date: string;
  dayOfWeek: string;
}
