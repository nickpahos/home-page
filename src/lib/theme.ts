import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  primaryColor: 'violet',
  fontFamily: 'Share Tech Mono, monospace',
  fontFamilyMonospace: 'Share Tech Mono, monospace',
  headings: {
    fontFamily: 'Orbitron, sans-serif',
    fontWeight: '700',
  },
  colors: {
    dark: [
      '#C1C2C5',
      '#A6A7AB',
      '#909296',
      '#5C5F66',
      '#373A40',
      '#2C2E33',
      '#25262B',
      '#1A1B1E',
      '#141517',
      '#101113',
    ],
    violet: [
      '#F3E8FF',
      '#E9D5FF',
      '#D8B4FE',
      '#C084FC',
      '#A855F7',
      '#9333EA',
      '#7C3AED',
      '#6B21A8',
      '#581C87',
      '#3B0764',
    ],
    green: [
      '#F0FDF4',
      '#DCFCE7',
      '#BBF7D0',
      '#86EFAC',
      '#4ADE80',
      '#22C55E',
      '#16A34A',
      '#15803D',
      '#166534',
      '#14532D',
    ],
  },
  components: {
    Text: {
      styles: {
        root: {
          color: '#f3f4f6',
          textShadow: '0 0 5px rgba(255, 255, 255, 0.2)',
        },
      },
    },
    Title: {
      styles: {
        root: {
          color: '#e9d5ff',
          textShadow: '0 0 15px #7c3aed',
          letterSpacing: '0.02em',
        },
      },
    },
    Container: {
      styles: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          borderRadius: '1rem',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
  },
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  radius: {
    xs: '0.25rem',
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
  },
  shadows: {
    xs: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    sm: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
    md: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
    lg: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
    xl: '0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22)',
  },
};
