import { ClockData } from '@/types';

export type { ClockData };

export const getCurrentTime = (): ClockData => {
  const now = new Date();
  
  const time = now.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  
  const date = now.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  
  const dayOfWeek = now.toLocaleDateString('en-US', {
    weekday: 'long',
  });
  
  return { time, date, dayOfWeek };
};

export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
