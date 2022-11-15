'use client';

import { ThemeContext } from '@/lib/contexts/theme-context';
import { useContext } from 'react';

const ThemeSwitcher = () => {
  const theme = useContext(ThemeContext);
  function toggleTheme() {
    theme?.toggle();
  }

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ThemeSwitcher;
