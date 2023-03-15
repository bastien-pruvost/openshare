import { createContext } from 'react';

export type ThemeContext = {
  dark: boolean;
  toggle(): void;
};

export const ThemeContext = createContext<ThemeContext | null>(null);
