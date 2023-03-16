export const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://127.0.0.1:3000';
export const localAppUrl = process.env.NEXT_PUBLIC_LOCAL_APP_URL || 'http://127.0.0.1:3000';

export const siteConfig = {
  name: 'Openshare',
  locale: 'en_US',
  lang: 'en',
  title: 'Openshare | Share your open-source web projects with the community',
  description:
    'With Openshare, you can share all your open-source web apps with the community, in order to get feedback and contributions',
  creator: 'Bastien Pruvost',
};

export const metadataConfig = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  creator: siteConfig.creator,
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    title: siteConfig.title,
    description: siteConfig.description,
    url: appUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: `${appUrl}/og.jpeg`,
        width: 1200,
        height: 600,
        alt: siteConfig.title,
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
