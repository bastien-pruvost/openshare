import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr'>
      <head>
        <title>Openshare</title>
        <meta name='description' content='Website to share your ' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>{children}</body>
    </html>
  )
}
