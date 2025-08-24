import { AppConfig } from '@/types';

export type { AppConfig };

export const defaultConfig: AppConfig = {
  links: {
    reddit: [
      { id: '1', title: 'r/gamedeals', url: 'https://reddit.com/r/gamedeals', description: 'Game deals and sales' },
      { id: '2', title: 'r/webdev', url: 'https://reddit.com/r/webdev', description: 'Web development discussions' },
      { id: '3', title: 'r/news', url: 'https://reddit.com/r/news', description: 'Breaking news' },
      { id: '4', title: 'r/technology', url: 'https://reddit.com/r/technology', description: 'Tech news and discussions' },
    ],
    steam: [
      { id: '1', title: 'Steam Deals', url: 'https://store.steampowered.com/specials/', description: 'Steam special offers' },
      { id: '2', title: 'New Releases', url: 'https://store.steampowered.com/explore/new/', description: 'Latest game releases' },
      { id: '3', title: 'Wishlist', url: 'https://store.steampowered.com/wishlist/', description: 'Your Steam wishlist' },
    ],
    work: [
      { id: '1', title: 'Jira', url: 'https://your-company.atlassian.net', description: 'Project management' },
      { id: '2', title: 'Notion', url: 'https://notion.so', description: 'Knowledge base' },
      { id: '3', title: 'Slack', url: 'https://slack.com', description: 'Team communication' },
      { id: '4', title: 'GitHub', url: 'https://github.com', description: 'Code repository' },
    ],
    github: [
      { id: '1', title: 'Profile', url: 'https://github.com/yourusername', description: 'Your GitHub profile' },
      { id: '2', title: 'Starred', url: 'https://github.com/stars', description: 'Starred repositories' },
      { id: '3', title: 'Trending', url: 'https://github.com/trending', description: 'Trending repositories' },
    ],
    personal: [
      { id: '1', title: 'Personal Blog', url: 'https://yourblog.com', description: 'Your personal blog' },
      { id: '2', title: 'Portfolio', url: 'https://yourportfolio.com', description: 'Your portfolio' },
      { id: '3', title: 'Email', url: 'https://mail.google.com', description: 'Gmail' },
    ],
  },
  watchlist: {
    stocks: ['AAPL', 'MSFT', 'TSLA', 'GOOGL', 'AMZN'],
    crypto: ['BTC', 'ETH', 'SOL', 'ADA', 'DOT'],
  },
  theme: {
    primaryColor: 'violet',
    backgroundColor: 'dark',
  },
};

export const getConfig = (): AppConfig => {
  if (typeof window === 'undefined') return defaultConfig;
  
  const saved = localStorage.getItem('home-hub-config');
  if (saved) {
    try {
      return { ...defaultConfig, ...JSON.parse(saved) };
    } catch {
      return defaultConfig;
    }
  }
  
  return defaultConfig;
};

export const saveConfig = (config: AppConfig): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('home-hub-config', JSON.stringify(config));
};
