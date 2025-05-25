import Accueil from './Components/Accueil';
import APropos from './Components/APropos';
import Services from './Components/Services';
import Contact from './Components/Contact';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`${inter.className}`}>
      <Accueil />
      <APropos />
      <Services />
      <Contact />
    </div>
  );
}