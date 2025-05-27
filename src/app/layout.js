import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './Components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'EraNow - Site Vitrine',
  description: 'Solutions numériques sobres avec EraNow.',
  keywords: ['EraNow', 'digitalisation', 'web', 'automatisation'],
  openGraph: {
    title: 'EraNow - Site Vitrine',
    description: 'Découvrez les services de EraNow.',
    url: 'https://eranow.com',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-[var(--color-bg)] text-[var(--color-text)] font-sans">
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
