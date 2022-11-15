'use client';

import { createContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

type ThemeContextValue = {
  dark: boolean;
  toggle(): void;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  function defaultThemeIsDark() {
    if (typeof window !== 'undefined') {
      const isDarkThemeSaved = window?.localStorage?.getItem('dark-theme');
      const isPrefersDark = window?.matchMedia('(prefers-color-scheme: dark)').matches;
      if (isDarkThemeSaved) {
        return isDarkThemeSaved === 'true';
      }
      return isPrefersDark;
    } else return;
  }

  const [isDarkTheme, setIsDarkTheme] = useState(defaultThemeIsDark());

  const themeContextValue: ThemeContextValue = {
    dark: false,
    toggle: () => {
      setIsDarkTheme((isDarkTheme) => {
        if (typeof window !== 'undefined') {
          window?.localStorage?.setItem('dark-theme', (!isDarkTheme).toString());
        }
        return !isDarkTheme;
      });
    },
  };

  useEffect(() => {
    const rootElement = document.querySelector('body');
    if (rootElement) {
      rootElement.className = isDarkTheme ? 'dark' : 'light';
    }
  }, [isDarkTheme]);

  return <ThemeContext.Provider value={themeContextValue}>{children}</ThemeContext.Provider>;
}
