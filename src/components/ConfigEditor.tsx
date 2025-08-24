'use client';

import { useState } from 'react';
import { Modal, Button, TextInput, Textarea, Group, Stack, Title, Text, ActionIcon } from '@mantine/core';
import { IconEdit, IconPlus, IconTrash } from '@tabler/icons-react';
import { AppConfig, LinkItem } from '@/types';
import { getConfig, saveConfig } from '@/lib/config';

interface ConfigEditorProps {
  opened: boolean;
  onClose: () => void;
  onConfigChange: (config: AppConfig) => void;
}

export function ConfigEditor({ opened, onClose, onConfigChange }: ConfigEditorProps) {
  const [config, setConfig] = useState<AppConfig>(getConfig());
  const [editingLink, setEditingLink] = useState<LinkItem | null>(null);
  const [editingCategory, setEditingCategory] = useState<string>('');

  const handleSaveConfig = () => {
    saveConfig(config);
    onConfigChange(config);
    onClose();
  };

  const addLink = (category: keyof AppConfig['links']) => {
    const newLink: LinkItem = {
      id: Date.now().toString(),
      title: 'New Link',
      url: 'https://',
      description: '',
    };

    setConfig(prev => ({
      ...prev,
      links: {
        ...prev.links,
        [category]: [...prev.links[category], newLink],
      },
    }));

    setEditingLink(newLink);
    setEditingCategory(category);
  };

  const updateLink = (category: keyof AppConfig['links'], linkId: string, updates: Partial<LinkItem>) => {
    setConfig(prev => ({
      ...prev,
      links: {
        ...prev.links,
        [category]: prev.links[category].map(link =>
          link.id === linkId ? { ...link, ...updates } : link
        ),
      },
    }));
  };

  const deleteLink = (category: keyof AppConfig['links'], linkId: string) => {
    setConfig(prev => ({
      ...prev,
      links: {
        ...prev.links,
        [category]: prev.links[category].filter(link => link.id !== linkId),
      },
    }));
  };

  const updateWatchlist = (type: 'stocks' | 'crypto', symbols: string[]) => {
    setConfig(prev => ({
      ...prev,
      watchlist: {
        ...prev.watchlist,
        [type]: symbols,
      },
    }));
  };

  const LinkEditor = ({ link, category }: { link: LinkItem; category: keyof AppConfig['links'] }) => (
    <Modal
      opened={!!editingLink}
      onClose={() => setEditingLink(null)}
      title="Edit Link"
      size="md"
    >
      <Stack gap="md">
        <TextInput
          label="Title"
          value={link.title}
          onChange={(e) => updateLink(category, link.id, { title: e.target.value })}
          placeholder="Link title"
        />
        <TextInput
          label="URL"
          value={link.url}
          onChange={(e) => updateLink(category, link.id, { url: e.target.value })}
          placeholder="https://example.com"
        />
        <Textarea
          label="Description"
          value={link.description || ''}
          onChange={(e) => updateLink(category, link.id, { description: e.target.value })}
          placeholder="Optional description"
          rows={2}
        />
        <Group justify="flex-end">
          <Button variant="outline" onClick={() => setEditingLink(null)}>
            Cancel
          </Button>
          <Button onClick={() => setEditingLink(null)}>
            Save
          </Button>
        </Group>
      </Stack>
    </Modal>
  );

  const categoryLabels = {
    reddit: 'Reddit',
    steam: 'Steam',
    work: 'Work',
    github: 'GitHub',
    personal: 'Personal',
  };

  return (
    <>
      <Modal opened={opened} onClose={onClose} title="Configuration Editor" size="xl">
        <Stack gap="lg">
          <Title order={3}>Link Categories</Title>
          
          {Object.entries(config.links).map(([category, links]) => (
            <div key={category}>
              <Group justify="space-between" align="center" mb="sm">
                <Title order={4}>{categoryLabels[category as keyof AppConfig['links']]}</Title>
                <Button
                  size="xs"
                  leftSection={<IconPlus size={14} />}
                  onClick={() => addLink(category as keyof AppConfig['links'])}
                >
                  Add Link
                </Button>
              </Group>
              
              <Stack gap="xs">
                {links.map((link) => (
                  <Group key={link.id} justify="space-between" align="center">
                    <div style={{ flex: 1 }}>
                      <Text size="sm" fw={600}>{link.title}</Text>
                      <Text size="xs" c="dimmed">{link.url}</Text>
                    </div>
                    <Group gap="xs">
                      <ActionIcon
                        size="sm"
                        variant="light"
                        onClick={() => setEditingLink(link)}
                      >
                        <IconEdit size={14} />
                      </ActionIcon>
                      <ActionIcon
                        size="sm"
                        variant="light"
                        color="red"
                        onClick={() => deleteLink(category as keyof AppConfig['links'], link.id)}
                      >
                        <IconTrash size={14} />
                      </ActionIcon>
                    </Group>
                  </Group>
                ))}
              </Stack>
            </div>
          ))}

          <Title order={3}>Watchlist</Title>
          
          <div>
            <Text size="sm" fw={600} mb="xs">Stocks (comma-separated)</Text>
            <TextInput
              value={config.watchlist.stocks.join(', ')}
              onChange={(e) => updateWatchlist('stocks', e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
              placeholder="AAPL, MSFT, TSLA"
            />
          </div>
          
          <div>
            <Text size="sm" fw={600} mb="xs">Crypto (comma-separated)</Text>
            <TextInput
              value={config.watchlist.crypto.join(', ')}
              onChange={(e) => updateWatchlist('crypto', e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
              placeholder="BTC, ETH, SOL"
            />
          </div>

          <Group justify="flex-end" mt="lg">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSaveConfig}>
              Save Configuration
            </Button>
          </Group>
        </Stack>
      </Modal>

      {editingLink && (
        <LinkEditor 
          link={editingLink} 
          category={editingCategory as keyof AppConfig['links']} 
        />
      )}
    </>
  );
}
