import type { Metadata } from 'next';
import {
  Bitter,
  Source_Serif_4,
  Alegreya_SC,
  JetBrains_Mono,
} from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

const bitter = Bitter({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600', '700', '800'],
});

const sourceSerif = Source_Serif_4({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const alegreyaSc = Alegreya_SC({
  variable: '--font-accent',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
});

const jetbrains = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Restore Britain',
  description:
    'Restore Britain is a national political party. A serious programme of national restoration — immigration, economy, welfare, culture, and more.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bitter.variable} ${sourceSerif.variable} ${alegreyaSc.variable} ${jetbrains.variable}`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
