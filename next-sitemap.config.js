module.exports = {
  siteUrl: 'https://eranow.com', // Remplace par ton domaine final ou temporaire
  generateRobotsTxt: true,
  additionalPaths: async () => [
    { loc: '/#accueil', priority: 1.0 },
    { loc: '/#a-propos', priority: 0.8 },
    { loc: '/#services', priority: 0.8 },
    { loc: '/#contact', priority: 0.9 },
  ],
};