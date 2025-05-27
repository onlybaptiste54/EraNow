'use client';

import { useEffect, useState } from 'react';

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
      className={`fixed top-0 w-full h-20 z-50 border-b border-black transition-all duration-300 ${
        scrolled ? 'bg-white/70 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
    >
      <nav className="max-w-6xl mx-auto h-full flex items-center justify-between px-4">
        <div className="text-xl font-bold tracking-tight">EraNow</div>
        <ul className="flex space-x-6 text-sm font-medium">
          {[
            ['#accueil', 'Accueil'],
            ['#a-propos', 'À propos'],
            ['#services', 'Services'],
            ['#contact', 'Contact'],
          ].map(([href, label]) => (
            <li key={label}>
              <a
                href={href}
                className="group relative transition-colors"
              >
                <span className="text-black group-hover:text-gray-700 transition-colors">
                  {label}
                </span>
                <span
                  className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"
                ></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
