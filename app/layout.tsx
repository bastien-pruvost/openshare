import '@/assets/styles/fonts.scss';
import '@/assets/styles/variables.scss';
import '@/assets/styles/globals.scss';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='dark'>
      <head />
      <body>{children}</body>
    </html>
  );
}
