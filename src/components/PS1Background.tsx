'use client';

import { motion } from 'framer-motion';
import { Box } from '@mantine/core';
import { useEffect, useState } from 'react';

export function PS1Background() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Box
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      {/* Animated Grid */}
      <div className="ps1-grid" />
      
      {/* Floating Geometric Shapes */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={i}
          className="floating-shape"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.5,
          }}
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
        />
      ))}

      {/* Interactive Light Beam */}
      <motion.div
        className="light-beam"
        animate={{
          x: mousePos.x * 0.05,
          y: mousePos.y * 0.05,
        }}
        transition={{ type: "spring", damping: 20 }}
      />
    </Box>
  );
}