'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://ta-vm-kvm/n8n/webhook/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Formulaire envoyé !');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus("Erreur lors de l’envoi.");
      }
    } catch (error) {
      setStatus("Erreur lors de l’envoi.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="section-divider" />
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center bg-[--color-bg] text-[--color-text] px-4 py-20"
      >
        <div className="w-full max-w-2xl p-8 rounded-2xl shadow-xl border border-gray-200 bg-gradient-to-br from-white via-gray-100 to-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-[--gray-dark] mb-2">Contactez-nous</h2>
            <p className="text-gray-600">
              Une idée, un projet ? Envoyez-nous un message, nous vous répondrons rapidement.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1 text-[--gray-dark]">Nom</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black shadow-sm focus:ring-2 focus:ring-[--color-border] focus:outline-none transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-[--gray-dark]">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Votre email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black shadow-sm focus:ring-2 focus:ring-[--color-border] focus:outline-none transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-[--gray-dark]">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black shadow-sm focus:ring-2 focus:ring-[--color-border] focus:outline-none transition resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[--color-text] text-white font-semibold hover:bg-[--color-hover] transition-colors"
            >
              Envoyer
            </button>

            {status && (
              <p className={`text-center text-sm mt-2 ${status.includes('Erreur') ? 'text-red-500' : 'text-green-600'}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
