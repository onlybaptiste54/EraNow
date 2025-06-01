import { BarFlowDemo } from "./BarFlow";

export default function Audit() {
  return (
   <section
  id="a-propos"
  className="min-h-screen bg-[--color-bg] text-[--color-text] flex flex-col-reverse md:flex-row items-center justify-center border-t border-black px-4 py-20"
>
  {/* Image à gauche */}
  <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0">
    <img
      src="/VisualDataHome.svg" // Remplace avec ton image
      alt="Suivi et audit"
      className="w-full h-auto animate-floating"
    />
  </div>

  {/* Contenu à droite */}
  <div className="w-full md:w-1/2 text-left md:pl-12">
    <h1 className="text-3xl md:text-5xl font-bold mb-6 text-cyan-700">
      Suivi & Audit
    </h1>
    <p className="text-lg text-gray-700 mb-6 max-w-xl">
      Nous vous accompagnons à chaque étape du processus pour assurer un suivi optimal et une mise en place efficace de votre automatisation.
    </p>
    <ul className="list-disc pl-6 space-y-3 text-gray-800 text-base">
      <li>📌 Analyse des besoins spécifiques</li>
      <li>🧩 Définition des processus automatisables</li>
      <li>⚙️ Mise en place technique (No-Code / Low-Code / API)</li>
      <li>🔍 Phase de test & validation</li>
      <li>📈 Suivi, ajustements & maintenance continue</li>
    </ul>
  </div>
</section>

  );
}
