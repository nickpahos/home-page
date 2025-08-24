'use client';

import { useEffect, useState } from 'react';
import { Card, Title, Text, Group, Stack, Grid } from '@mantine/core';
import { MarketItem } from '@/types';
import { fetchMarketData } from '@/lib/marketData';
import { getConfig } from '@/lib/config';

export function MarketWatch() {
  const [marketData, setMarketData] = useState<{
    stocks: MarketItem[];
    crypto: MarketItem[];
  }>({ stocks: [], crypto: [] });
  const [loading, setLoading] = useState(true);

  const config = getConfig();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchMarketData(config.watchlist.stocks, config.watchlist.crypto);
        setMarketData(data);
      } catch (error) {
        console.error('Error fetching market data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [config.watchlist.stocks, config.watchlist.crypto]);

  const formatPrice = (price: number, type: 'stock' | 'crypto'): string => {
    if (type === 'crypto') {
      return price >= 1 ? `$${price.toFixed(2)}` : `$${price.toFixed(4)}`;
    }
    return `$${price.toFixed(2)}`;
  };

  const formatChange = (change: number): string => {
    const sign = change >= 0 ? '+' : '';
    return `${sign}${change.toFixed(2)}`;
  };

  const MarketItemCard = ({ item }: { item: MarketItem }) => (
    <Card p="sm" className="scanline-overlay">
      <Group justify="space-between" align="center">
        <div>
          <Text size="sm" fw={600} className="text-glow">
            {item.symbol}
          </Text>
          <Text size="xs" c="dimmed">
            {item.name}
          </Text>
        </div>
        <div style={{ textAlign: 'right' }}>
          <Text size="sm" fw={600} className="text-glow">
            {formatPrice(item.price, item.type)}
          </Text>
          <Text 
            size="xs" 
            c={item.change >= 0 ? 'green' : 'red'}
            className="text-glow"
          >
            {formatChange(item.change)} ({item.changePercent.toFixed(2)}%)
          </Text>
        </div>
      </Group>
    </Card>
  );

  if (loading) {
    return (
      <Card p="md" className="scanline-overlay">
        <Title order={3} size="h4" mb="md">
          📈 Market Watch
        </Title>
        <Text size="sm" c="dimmed">
          Loading market data...
        </Text>
      </Card>
    );
  }

  return (
    <Card p="md" className="scanline-overlay">
      <Title order={3} size="h4" mb="md">
        📈 Market Watch
      </Title>
      
      <Stack gap="md">
        {marketData.stocks.length > 0 && (
          <div>
            <Text size="sm" fw={600} mb="xs" c="blue">
              STOCKS
            </Text>
            <Grid gutter="xs">
              {marketData.stocks.map((item) => (
                <Grid.Col key={item.symbol} span={{ base: 12, sm: 6, md: 4 }}>
                  <MarketItemCard item={item} />
                </Grid.Col>
              ))}
            </Grid>
          </div>
        )}
        
        {marketData.crypto.length > 0 && (
          <div>
            <Text size="sm" fw={600} mb="xs" c="yellow">
              CRYPTO
            </Text>
            <Grid gutter="xs">
              {marketData.crypto.map((item) => (
                <Grid.Col key={item.symbol} span={{ base: 12, sm: 6, md: 4 }}>
                  <MarketItemCard item={item} />
                </Grid.Col>
              ))}
            </Grid>
          </div>
        )}
      </Stack>
    </Card>
  );
}
