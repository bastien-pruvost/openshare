import { FunctionComponent } from 'react';
import './globals.scss';

const RootLayout: FunctionComponent = ({ children }: { children?: React.ReactNode }) => {
  return (
    <html lang='en'>
      <head>
        <title>Openshare</title>
        <meta
          name='description'
          content='A website for developers who want to share their personal projects or opensource projects with the community'
        />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
