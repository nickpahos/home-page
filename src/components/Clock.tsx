'use client';

import { useEffect, useState } from 'react';
import { Paper, Title, Text, Group, Container, Card } from '@mantine/core';
import { getCurrentTime, ClockData } from '@/lib/clock';

export function Clock() {
  const [timeData, setTimeData] = useState<ClockData>(getCurrentTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeData(getCurrentTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Paper bg="transparent">
      <Group justify="center" align="center" gap="xs">
        <Title order={1} size="3rem" className="text-glow">
          {timeData.time}
        </Title>
      </Group>
      <Group justify="center" align="center" gap="xs" mt="xs">
        <Text size="lg" className="text-glow">
          {timeData.date}
        </Text>
        <Text size="lg" className="text-glow">
          {timeData.dayOfWeek}
        </Text>
      </Group>
    </Paper>
  );
}
