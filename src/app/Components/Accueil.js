import React from "react";
import { TextChange } from "./TextChange";
import Image from "next/image";

export default function Accueil() {
  return (
    <section
      id="accueil"
      className="min-h-screen bg-white flex items-center justify-center text-neutral-700 border-t border-black z-10 relative overflow-hidden px-4"
    >
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Texte à gauche */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Bienvenue chez{" "}
            <span className="bg-gradient-to-r from-cyan-700 to-cyan-200 bg-clip-text text-transparent ">
              AetherIa
            </span>
          </h1>

          <h2 className="text-2xl text-gray-500 italic mb-6">
            Spécialistes en <span><TextChange  /></span>
          </h2>

       <p className="text-lg text-neutral-700 md:text-xl max-w-2xl mb-8 animate-fade-in-delay">
  Réinventez votre <span className="text-cyan-700 font-semibold">productivité</span> grâce à l'intelligence artificielle.
  Optimisez vos processus avec une automatisation intelligente, conçue spécialement pour vous.
</p>

        
          <div className="mt-10">
            <a href="#contact" className="button">
              Prendre rendez-vous
            </a>
          </div>
        </div>

        {/* Image à droite */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <Image
  src="/machine2.svg"
  alt="Illustration automatisation"
  width={500}
  height={500}
  className="max-w-full h-auto animate-floating"
  priority
/>

        </div>

      </div>
    </section>
  );
}
