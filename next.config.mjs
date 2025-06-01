/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Exportation statique
  trailingSlash: true, 
    images: {
    unoptimized: true, // <-- la ligne qui résout le problème
  },// Ajoute un slash aux URL pour compatibilité Netlify
};
export default nextConfig;

