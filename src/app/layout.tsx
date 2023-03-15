import '@/assets/styles/globals.scss';

import { Providers } from '@/components-providers';
import { cn } from '@/lib/utils/classnames';
import { Rubik } from 'next/font/google';

export const metadata = {
  title: 'Openshare | Share your open-source web projects with the community',
  description:
    'With Openshare, you can share all your open-source web apps with the community, in order to get feedback and contributions',
  creator: 'Bastien Pruvost',
  openGraph: {
    locale: 'en-US',
    title: 'Openshare | Share your open-source web projects with the community',
    description:
      'With Openshare, you can share all your open-source web apps with the community, in order to get feedback and contributions',
    url: 'https://www.openshare.dev',
    siteName: 'Openshare | Share your open-source web projects with the community',
    images: [
      {
        url: 'https://www.openshare.dev/og.jpeg',
        width: 1200,
        height: 600,
        alt: 'Openshare | Share your open-source web projects with the community',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

const rubik = Rubik({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={cn(rubik.className)}>
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
