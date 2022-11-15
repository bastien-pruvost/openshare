import '@/assets/styles/globals.scss';

import { ThemeProvider } from '@/lib/contexts/theme-context';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
