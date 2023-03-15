'use client';

import { useContext } from 'react';

import { ThemeContext } from 'src/lib/contexts/theme-context';

export const ThemeSwitcher = () => {
  const theme = useContext(ThemeContext);
  function toggleTheme() {
    theme?.toggle();
  }

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};
