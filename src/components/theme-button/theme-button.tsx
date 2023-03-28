'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

type ThemeButtonProps = {
  className?: string;
};

export const ThemeButton = ({ className }: ThemeButtonProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};
