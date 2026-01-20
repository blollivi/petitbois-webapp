import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/mockData';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-primary text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1449156001437-3a1621acbe39?auto=format&fit=crop&q=80&w=2000" 
            alt="Domaine Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif italic">{siteData.general.title}</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto font-sans font-light mb-8">{siteData.general.introText}</p>
          <a href="#gites" className="bg-accent hover:bg-amber-600 text-white px-8 py-3 rounded-full transition-all inline-block">
            Découvrir nos gîtes
          </a>
        </div>
      </section>

      {/* Presentation Section */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center font-serif">Présentation</h2>
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-700">
            {siteData.general.fullDescription.split('\n\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Gites Grid */}
      <section id="gites" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center font-serif">Nos Gîtes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.gites.map((gite) => (
            <div key={gite.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:-translate-y-2 transition-all duration-300 border border-stone-200">
              <div className="overflow-hidden">
                <img src={gite.image} alt={gite.nom} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-2 font-serif">{gite.nom}</h3>
                <p className="text-gray-600 mb-4 font-sans">{gite.description_courte}</p>
                <Link 
                  to={`/gite/${gite.slug}`} 
                  className="text-accent font-semibold hover:underline"
                >
                  En savoir plus →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* History Section */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center font-serif">{siteData.general.history.title}</h2>
          <div className="max-w-3xl mx-auto text-white">
            {siteData.general.history.text.split('\n\n').map((p, i) => (
              <p key={i} className="mb-4">{p}</p>
            ))}
            <p className="mt-4 text-right italic">— {siteData.general.history.author}</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center font-serif">Témoignages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.testimonials.map((t) => (
              <div key={t.id} className="border rounded-lg p-6 shadow-sm">
                <p className="italic text-gray-700 mb-4">{t.text}</p>
                <p className="font-semibold text-sm text-gray-900">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
