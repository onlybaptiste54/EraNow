import React from "react";
import { TextChange } from "./TextChange";
export default function Accueil() {
  return (
    <section
      id="accueil"
      className=" min-h-screen bg-white flex items-center justify-center text-black border-t border-black z-10 relative overflow-hidden px-4"
    >
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          Bienvenue chez{" "}
          <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent underline decoration-black decoration-2 underline-offset-4">
            EraNow
          </span>
        </h1>

        <h2 className="text-2xl text-gray-500 italic mb-6">
          Spécialistes en<span>   <TextChange/>
          </span>
        </h2>

        <p className="text-lg text-neutral-700 md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-delay">
          EraNow est votre partenaire pour des solutions numériques innovantes. Depuis 2023, nous aidons les entreprises
          à digitaliser leurs processus avec des sites web modernes et des automatisations sur mesure.
        </p>

        <ul className="text-left text-sm md:text-base max-w-xl mx-auto space-y-2 text-gray-700 animate-fade-in-delay">
          <li>✔ Automatisation de tâches répétitives</li>
          <li>✔ Agents IA pour service client 24/7</li>
          <li>✔ Intégrations no-code / low-code</li>
          <li>✔ Sites web performants & scalables</li>
        </ul>

        <div className="mt-10">
   <a
  href="#contact"
  className="inline-block px-8 py-3 rounded-full font-medium border border-black text-white bg-white transition-colors duration-300 ease-in-outlack "
>
  Contactez-nous
</a>


        </div>
      </div>
    </section>
  );
}
