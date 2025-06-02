'use client';
import { useEffect, useState } from 'react';
import DarkComponent from './DarkComponent'; // Assurez-vous que le chemin est correct

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full h-20 z-50 border-b border-[var(--color-border)] transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--color-bg)]/70 backdrop-blur-md shadow-sm'
          : 'bg-[var(--color-bg)]'
      }`}
    >
      <nav className="max-w-6xl mx-auto h-full flex items-center justify-between px-4">
        {/* LOGO + TEXTE */}
        <div className="flex items-center space-x-2">
          <img
            src="/Logotest.png"
            alt="Logo"
            className="h-32 w-auto"
          />
          <span className="text-cyan-700 dark:text-cyan-300 text-xl font-bold tracking-tight">
            AetherIa
          </span>
        </div>

        {/* NAVIGATION avec boutons */}
        <ul className="flex space-x-6 text-sm font-medium">
          {[
            ['#accueil', 'Accueil'],
            ['#a-propos', 'À propos'],
            ['#services', 'Services'],
            ['#contact', 'Contact'],
          ].map(([href, label]) => (
            <li key={label}>
              <button
                onClick={() => {
                  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="button"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        <DarkComponent />
      </nav>
    </header>
  );
}