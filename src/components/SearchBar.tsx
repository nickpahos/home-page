'use client';

import { useState } from 'react';
import { Paper, TextInput, Button, Group } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

export function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query.trim())}`;
      window.open(searchUrl, '_blank', 'noopener,noreferrer');
      setQuery('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (query.trim()) {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query.trim())}`;
        window.open(searchUrl, '_blank', 'noopener,noreferrer');
        setQuery('');
      }
    }
  };

  return (
    <Paper p="md" bg="transparent">
      <form onSubmit={handleSearch}>
        <Group gap="xs">
          <TextInput
            placeholder="Search the web..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{ flex: 1, border: '1px solid rgba(128,128,128,0.7)', borderRadius: '10px' }}
            variant="light"
            rightSection={
              <Button
                type="submit"
                leftSection={<IconSearch size={16} />}
                className="retro-button"
                disabled={!query.trim()}
                bg="transparent"
                style={{ padding: '0 12px' }}
              >
                Search
              </Button>
            }
          />
        </Group>
      </form>
    </Paper>
  );
}
