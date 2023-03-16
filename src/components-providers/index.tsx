import { ThemeProvider } from './theme-provider';

import type { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
};
