import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'EraNow - Site Vitrine',
  description: 'Solutions numériques sobres avec EraNow.',
  keywords: ['EraNow', 'digitalisation', 'web', 'automatisation'],
  openGraph: {
    title: 'EraNow - Site Vitrine',
    description: 'Découvrez les services de EraNow.',
    url: 'https://eranow.com', // Remplace par ton domaine
    type: 'website',
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-[var(--color-bg)] text-[var(--color-text)] font-sans">
        <header className="fixed top-0 w-full h-20 bg-white text-black z-50 border-b border-black shadow-sm">
          <nav className="max-w-6xl mx-auto h-full flex items-center justify-center px-4">
            <ul className="flex space-x-6 text-sm font-medium">
              <li>
                <a
                  href="#accueil"
                  className="hover:text-gray-700 border-b-2 border-transparent hover:border-black transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#a-propos"
                  className="hover:text-gray-700 border-b-2 border-transparent hover:border-black transition-colors"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-gray-700 border-b-2 border-transparent hover:border-black transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-gray-700 border-b-2 border-transparent hover:border-black transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* 💡 Laisse 5rem de marge haute */}
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
