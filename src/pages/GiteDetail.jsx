import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { siteData } from '../data/mockData';
import { getAssetUrl } from '../utils/assets';
import { ArrowLeft, Users, Tag, Check } from 'lucide-react';
import Gallery from '../components/Gallery';
import { useModal } from '../context/ModalContext';

const GiteDetail = () => {
  const { slug } = useParams();
  const { openModal } = useModal();
  const gite = siteData.gites.find((g) => g.slug === slug);

  if (!gite) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Gîte non trouvé</h2>
        <Link to="/" className="text-accent hover:underline">Retour à l'accueil</Link>
      </div>
    );
  }

  return (
    <div className="pb-20">
      {/* Header Banner */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img 
          src={getAssetUrl(gite.image)} 
          alt={gite.nom} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-6xl md:text-7xl font-serif text-white italic drop-shadow-lg">{gite.nom}</h1>
        </div>
        <Link to="/" className="absolute top-28 left-8 inline-flex items-center text-white hover:text-accent transition-colors z-20 bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
          <ArrowLeft className="mr-2" size={20} />
          Retour
        </Link>
      </div>

      <div className="max-w-5xl mx-auto -mt-20 relative z-10 bg-white p-8 md:p-12 rounded-xl shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Description & Amenities */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg font-sans leading-relaxed text-stone-600 mb-12">
              {gite.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>

            <div className="border-t border-stone-100 pt-8">
              <h2 className="text-2xl font-serif text-primary mb-6">Équipements</h2>
              <div className="grid grid-cols-2 gap-4">
                {gite.amenities?.map((amenity, index) => (
                  <div key={index} className="flex items-center text-stone-600">
                    <Check className="mr-3 text-accent" size={18} />
                    <span className="font-sans">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-stone-50 p-6 rounded-lg border border-stone-200">
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-stone-700">
                  <Users className="mr-3 text-accent" size={20} />
                  <span className="font-sans">{gite.capacity} personnes</span>
                </div>
              </div>

              <button 
                onClick={openModal}
                className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-emerald-800 transition-colors shadow-lg"
              >
                Contactez-nous
              </button>
              
              <p className="text-center text-stone-400 text-sm mt-4 font-sans">
                Paiement sécurisé & confirmation immédiate
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-stone-100">
          <Gallery images={gite.gallery} />
        </div>
      </div>
    </div>
  );
};

export default GiteDetail;
