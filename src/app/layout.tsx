import type { Metadata } from 'next';
import { MantineProvider } from '@mantine/core';
import { theme } from '@/lib/theme';
import '@mantine/core/styles.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Home Hub - PS1 Era Information Dashboard',
  description: 'A personalized information hub with nostalgic PS1-era aesthetic and LoFi vibes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark" forceColorScheme="dark">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}