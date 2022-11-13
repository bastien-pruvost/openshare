import './globals.scss';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <body>{children}</body>
    </html>
  );
}
