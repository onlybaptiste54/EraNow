import { AiOutlineRobot } from 'react-icons/ai';
import { FaNetworkWired } from 'react-icons/fa';
import { BiGitBranch } from 'react-icons/bi';
import Card from './Card';
import { FaCogs, FaRobot, FaPlug } from 'react-icons/fa';
import Image from 'next/image';
export default function Services() {


const services = [
  {
    title: 'Automatisation',
    description: 'Tâches répétitives automatisées avec n8n ou Python.',
    icon: <FaCogs className="h-8 w-8 text-black" />,
  },
  {
    title: 'Agents IA',
    description: 'Bots intelligents pour WhatsApp, LinkedIn, agendas.',
    icon: (
      <img
        src="/chatbot.png"
        alt="Icone Chatbot"
        className="h-8 w-8"
      />
    ),
  },
  {
    title: 'Intégrations',
    description: 'Connexion de vos outils via API ou no-code.',
    icon: (
      <img
        src="/integration.png"
        alt="Icone Intégration"
        className="h-8 w-8"
      />
    ),
  },
];



  return (
    <>
      <div className="section-divider" />
      <section
        id="services"
        className="min-h-screen flex flex-col items-center justify-center bg-[--background] text-[--foreground] py-12 sm:py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 md:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-8 sm:mb-12">
            Nos services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
