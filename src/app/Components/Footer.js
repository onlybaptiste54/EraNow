import { Mail, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg)] text-[var(--color-text)] border-t border-[var(--color-border)] py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-0">

        {/* Phrase / Slogan */}
        <p className="text-sm text-gray-600 dark:text-gray-300 text-center sm:text-left">
          Boostez votre productivité avec <strong>AetherIa</strong> — automatisation intelligente et IA.
        </p>

        {/* Liens sociaux */}
        <div className="flex justify-center sm:justify-start space-x-6">
          <a
            href="mailto:contact@aetheria.com"
            className="text-gray-600 dark:text-gray-300 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
            aria-label="Envoyer un email"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
            aria-label="Page Facebook"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
            aria-label="Page Twitter"
          >
            <Twitter className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400 select-none">
        &copy; {new Date().getFullYear()} AetherIa. Tous droits réservés.
      </p>
    </footer>
  );
}
