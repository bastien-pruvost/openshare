import { ThemeProvider } from './theme-provider';

import type { PropsWithChildren } from 'react';

type ProvidersProps = PropsWithChildren;

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
}
