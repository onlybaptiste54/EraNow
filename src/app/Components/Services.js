import Card from './Card';

export default function Services() {
  const services = [
    {
      title: 'Développement Web',
      description: 'Sites modernes et épurés, conçus avec Next.js pour une performance optimale.',
    },
    {
      title: 'Automatisation',
      description: 'Solutions sur mesure avec n8n pour simplifier vos workflows.',
    },
    {
      title: 'Consulting',
      description: 'Accompagnement stratégique pour digitaliser votre entreprise.',
    },
  ];

  return (
    <>
      <div className="section-divider" />

      <section
        id="services"
        className="min-h-screen flex items-center justify-center bg-[--background] text-[--foreground] py-20"
      >
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-12">
            Nos services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
