import '@/assets/styles/globals.scss';
import { Rubik } from 'next/font/google';

import { siteConfig, metadataConfig } from '@/config/site';
import { cn } from '@/lib/utils/classnames';
import { Providers } from '@/components-providers';

import type { PropsWithChildren } from 'react';

export const metadata = metadataConfig;

const rubik = Rubik({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap'
});

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang={siteConfig.lang} className={cn(rubik.className)} suppressHydrationWarning>
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
