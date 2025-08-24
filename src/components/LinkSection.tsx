'use client';

import { Card, Title, Text, Group, Badge, Stack, Divider } from '@mantine/core';
import { LinkItem } from '@/types';

interface LinkSectionProps {
  title: string;
  links: LinkItem[];
  color: string;
  icon?: string;
}

export function LinkSection({ title, links, color, icon }: LinkSectionProps) {
  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card p="md" bg="transparent">
      <Group justify="space-between" align="center" mb="md">
        <Title order={3} size="h4">
          {icon && <span style={{ marginRight: '0.5rem' }}>{icon}</span>}
          {title}
        </Title>
      </Group>
      
      <Stack gap="xs">
        {links.map((link) => (
          <Card
            key={link.id}
            p="sm"
            style={{ cursor: 'pointer' }}
            onClick={() => handleLinkClick(link.url)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleLinkClick(link.url);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`Open ${link.title}`}
            bg="transparent"
          >
            <Group justify="space-between" align="center">
              <div>
                <Text size="sm" fw={600} className="text-glow">
                  {link.title}
                </Text>
                {link.description && (
                  <Text size="xs" c="dimmed" mt={4}>
                    {link.description}
                  </Text>
                )}
              </div>
            </Group>
          </Card>
        ))}
      </Stack>
    </Card>
  );
}
