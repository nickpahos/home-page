'use client';

import { useEffect, useState } from 'react';
import { Container, Grid, Stack, Title, Group, Badge, Text, ActionIcon, Tooltip } from '@mantine/core';
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
    // Update config when localStorage changes
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
    <Container size="xl" py="xl" style={{ minHeight: '100vh' }}>
      {/* Header */}
      <Stack align="center" mb="xl" pos="relative">
        <Title order={1} size="4rem" className="text-glow" ta="center">
          HOME HUB
        </Title>
        <Group gap="xs">
          <Badge variant="outline" color="violet" size="lg">
            PS1 ERA
          </Badge>
          <Badge variant="outline" color="blue" size="lg">
            LOFI VIBES
          </Badge>
          <Badge variant="outline" color="green" size="lg">
            RETRO
          </Badge>
        </Group>
        
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

      {/* Clock and Search */}
      <Grid mb="xl">
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Clock />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <SearchBar />
        </Grid.Col>
      </Grid>

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

      {/* Footer */}
      <Stack align="center" mt="xl" mb="md">
        <Text size="sm" c="dimmed" ta="center">
          Your personalized information hub with a nostalgic PS1-era aesthetic
        </Text>
        <Text size="xs" c="dimmed" ta="center">
          Built with Next.js, Mantine, and retro love
        </Text>
      </Stack>

      {/* Configuration Editor */}
      <ConfigEditor
        opened={configEditorOpened}
        onClose={() => setConfigEditorOpened(false)}
        onConfigChange={handleConfigChange}
      />
    </Container>
  );
}
