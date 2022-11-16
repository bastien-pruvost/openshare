import { Providers } from 'components-providers';

import '@/assets/styles/globals.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
