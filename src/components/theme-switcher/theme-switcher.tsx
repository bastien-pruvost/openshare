'use client';

import { useContext } from 'react';

import { ThemeContext } from '@/lib/contexts/theme-context';

export const ThemeSwitcher = () => {
  const theme = useContext(ThemeContext);
  const toggleTheme = () => {
    theme?.toggle();
  };

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};
