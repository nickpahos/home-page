'use client';

import { useEffect, useState } from 'react';
import { Container, Grid, Stack, Title, Group, Badge, Text, ActionIcon, Tooltip, SimpleGrid } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';
import { Clock } from '@/components/Clock';
import { SearchBar } from '@/components/SearchBar';
import { MarketWatch } from '@/components/MarketWatch';
import { LinkSection } from '@/components/LinkSection';
import { ConfigEditor } from '@/components/ConfigEditor';
import { getConfig, AppConfig } from '@/lib/config';

export default function HomePage() {
  const [config, setConfig] = useState<AppConfig>(getConfig());
  const [configEditorOpened, setConfigEditorOpened] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      setConfig(getConfig());
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleConfigChange = (newConfig: AppConfig) => {
    setConfig(newConfig);
  };

  const linkCategories = [
    {
      id: 'reddit',
      title: 'Reddit',
      links: config.links.reddit,
      color: 'red',
      icon: '📱',
    },
    {
      id: 'steam',
      title: 'Steam',
      links: config.links.steam,
      color: 'blue',
      icon: '🎮',
    },
    {
      id: 'work',
      title: 'Work',
      links: config.links.work,
      color: 'green',
      icon: '💼',
    },
    {
      id: 'github',
      title: 'GitHub',
      links: config.links.github,
      color: 'gray',
      icon: '🐙',
    },
    {
      id: 'personal',
      title: 'Personal',
      links: config.links.personal,
      color: 'violet',
      icon: '⭐',
    },
  ];

  return (
    <Container size="xl" py="xl" style={{ minHeight: '100vh', border: 'none' }} bg="transparent">
      {/* Header */}
      <Stack align="center" mb="xl" pos="relative">
        {/* Clock and Search */}
        <Grid mb="xl" gutter="xl">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Clock />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <SearchBar />
          </Grid.Col>
        </Grid>
        {/* Settings Button */}
        <Tooltip label="Customize your dashboard" position="bottom">
          <ActionIcon
            size="lg"
            variant="light"
            color="violet"
            onClick={() => setConfigEditorOpened(true)}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
            }}
            className="retro-button"
          >
            <IconSettings size={20} />
          </ActionIcon>
        </Tooltip>
      </Stack>



      {/* Market Watch */}
      <Grid mb="xl">
        <Grid.Col span={12}>
          <MarketWatch />
        </Grid.Col>
      </Grid>

      {/* Link Sections */}
      <Grid gutter="lg">
        {linkCategories.map((category) => (
          <Grid.Col key={category.id} span={{ base: 12, sm: 6, lg: 4 }}>
            <LinkSection
              title={category.title}
              links={category.links}
              color={category.color}
              icon={category.icon}
            />
          </Grid.Col>
        ))}
      </Grid>

      {/* Configuration Editor */}
      <ConfigEditor
        opened={configEditorOpened}
        onClose={() => setConfigEditorOpened(false)}
        onConfigChange={handleConfigChange}
      />
    </Container>
  );
}
