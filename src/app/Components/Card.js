import { Code, Settings, Briefcase } from 'lucide-react';



export default function Card({ title, description, icon }) {
  return (
    <div className="bg-gradient-to-br from-white/60 to-cyan-700/30 backdrop-blur-md border border-white/30 shadow-xl text-black p-6 rounded-2xl hover:scale-[1.03] transition-all duration-300">
      <div className="flex items-center justify-center w-12 h-12 mb-4 bg-white/70 backdrop-blur rounded-full shadow-md">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-800">{description}</p>
    </div>
  );
}
