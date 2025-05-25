export default function APropos() {
  return (
    <>
      {/* Ligne de séparation entre sections */}
      <div className="section-divider" />

      <section
        id="a-propos"
        className="min-h-screen flex items-center justify-center bg-white text-black px-4"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            À propos de <span className="underline decoration-black decoration-2 underline-offset-4">EraNow</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Fondée en 2023, <strong>EraNow</strong> est une entreprise dédiée à la transformation numérique. Nous créons des <em>solutions web épurées</em> et des <em>automatisations sur mesure</em> pour optimiser vos processus métiers.
            Notre approche privilégie la <strong>simplicité</strong>, l’<strong>efficacité</strong> et l’élégance dans chaque détail.
          </p>
        </div>
      </section>
    </>
  );
}
