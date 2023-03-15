'use client';

import { ReactNode, useEffect, useState } from 'react';

import { ThemeContext } from 'src/lib/contexts/theme-context';

export function ThemeProvider({ children }: { children: ReactNode }) {
  function isDefaultThemeDark() {
    if (typeof window !== 'undefined') {
      const isDarkThemeSaved = window?.localStorage?.getItem('dark-theme');
      const isPrefersDark = window?.matchMedia('(prefers-color-scheme: dark)').matches;
      if (isDarkThemeSaved) {
        return isDarkThemeSaved === 'true';
      }
      return isPrefersDark;
    }
    return false;
  }

  const [isDarkTheme, setIsDarkTheme] = useState(isDefaultThemeDark());

  function toggleTheme() {
    setIsDarkTheme((isDarkTheme) => {
      if (typeof window !== 'undefined') {
        window?.localStorage?.setItem('dark-theme', (!isDarkTheme).toString());
      }
      return !isDarkTheme;
    });
  }

  const themeContext: ThemeContext = {
    dark: false,
    toggle: toggleTheme,
  };

  useEffect(() => {
    const rootElement = document.querySelector('body');
    if (rootElement) {
      rootElement.className = isDarkTheme ? 'dark' : 'light';
    }
  }, [isDarkTheme]);

  return <ThemeContext.Provider value={themeContext}>{children}</ThemeContext.Provider>;
}
