import { Code, Settings, Briefcase } from 'lucide-react';

const icons = {
  'Développement Web': <Code className="h-8 w-8 text-white" />,
  'Automatisation': <Settings className="h-8 w-8 text-white" />,
  'Consulting': <Briefcase className="h-8 w-8 text-white" />,
};

export default function Card({ title, description }) {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-all duration-300 border border-gray-700">
      <div className="flex items-center justify-center w-12 h-12 mb-4 bg-black rounded-full">
        {icons[title]}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
}
