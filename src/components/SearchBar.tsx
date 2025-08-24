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
    <Paper p="md" className="scanline-overlay">
      <form onSubmit={handleSearch}>
        <Group gap="xs">
          <TextInput
            placeholder="Search the web..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{ flex: 1 }}
            styles={{
              input: {
                fontFamily: 'Share Tech Mono, monospace',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                border: '2px solid #7c3aed',
                color: '#e0e0e0',
                '&:focus': {
                  borderColor: '#a855f7',
                  boxShadow: '0 0 15px rgba(124, 58, 237, 0.5)',
                },
                '&::placeholder': {
                  color: '#6b7280',
                },
              },
            }}
          />
          <Button
            type="submit"
            leftSection={<IconSearch size={16} />}
            className="retro-button"
            disabled={!query.trim()}
          >
            Search
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
