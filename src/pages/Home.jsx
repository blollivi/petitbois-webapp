import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteData } from '../data/mockData';
import { getAssetUrl } from '../utils/assets';
import {
  Trees,
  Wind,
  Coffee,
  ChevronDown,
  Star,
  MapPin,
  Wifi,
  Users,
  Calendar,
  Heart,
  Sparkles
} from 'lucide-react';

const Home = () => {
  const location = useLocation();

  const ICON_MAP = {
    Trees: Trees,
    Wind: Wind,
    Coffee: Coffee,
    MapPin: MapPin,
    Wifi: Wifi,
    Users: Users,
    Calendar: Calendar,
    Heart: Heart,
    Sparkles: Sparkles
  };

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="relative">
      <div className="grain-overlay"></div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={getAssetUrl(siteData.general.images.hero)}
            alt="Domaine Hero"
            className="w-full h-full object-cover scale-105 animate-float"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-primary/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl animate-fade-in">
          <img 
            src={getAssetUrl(siteData.general.images.logo)} 
            alt="Logo Domaine" 
            className="h-24 md:h-32 w-auto mx-auto mb-6 drop-shadow-lg animate-fade-in"
          />
          <span className="inline-block text-accent-light font-semibold tracking-widest uppercase mb-4 text-sm animate-slide-up">Bienvenue au</span>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-serif text-white drop-shadow-2xl animate-slide-up [animation-delay:200ms]">
            {siteData.general.title}
          </h1>
          <p className="text-xl md:text-2xl text-stone-100 font-light mb-10 text-balance animate-slide-up [animation-delay:400ms]">
            {siteData.general.introText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up [animation-delay:600ms]">
            <a href="#gites" className="bg-accent hover:bg-accent-dark text-white px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-accent/40 font-semibold text-lg">
              Découvrir nos gîtes
            </a>
            <a href="#presentation" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full transition-all duration-300 font-semibold text-lg">
              En savoir plus
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="text-white/70 w-8 h-8" />
        </div>
      </section>

      {/* Presentation Section */}
      <section id="presentation" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-wider text-sm">
                <Sparkles className="w-4 h-4" />
                <span>L'Art de Vivre à la Campagne</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                Un havre de paix au cœur de la Saintonge
              </h2>
              <div className="prose prose-lg text-stone-600 leading-relaxed space-y-4">
                {siteData.general.fullDescription.split('\n\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                {siteData.general.features?.map((feature, index) => {
                  const Icon = ICON_MAP[feature.icon];
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 bg-stone-100 rounded-2xl text-primary">
                        {Icon && <Icon className="w-6 h-6" />}
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-900">{feature.title}</h4>
                        <p className="text-sm text-stone-500">{feature.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                <img
                  src={getAssetUrl(siteData.general.images.presentation)}
                  alt="Domaine View"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 glass-card p-8 rounded-2xl max-w-xs hidden md:block">
                <div className="flex gap-1 text-accent mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-stone-700 italic font-medium">
                  "Un lieu magique où le temps semble s'arrêter. La rénovation est sublime."
                </p>
                <p className="text-stone-400 text-sm mt-4">— Client satisfait</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gites Grid */}
      <section id="gites" className="py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Nos Gîtes de Charme</h2>
            <p className="text-stone-600 text-lg">
              Chaque gîte a été rénové avec passion pour vous offrir une expérience unique mêlant authenticité et modernité, calme et confort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {siteData.gites.map((gite) => (
              <div key={gite.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-200/50">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={getAssetUrl(gite.image)}
                    alt={gite.nom}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-bold text-primary">{gite.nom}</h3>
                    <div className="flex items-center gap-1 text-stone-500 text-sm">
                      <Users className="w-4 h-4" />
                      <span>{gite.capacity} pers.</span>
                    </div>
                  </div>
                  <p className="text-stone-600 mb-8 line-clamp-2">{gite.description_courte}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {gite.amenities.slice(0, 3).map((amenity, idx) => (
                      <span key={idx} className="text-[10px] uppercase tracking-widest font-bold bg-stone-100 text-stone-500 px-3 py-1 rounded-full">
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/gite/${gite.slug}`}
                    className="flex items-center justify-center w-full py-4 rounded-2xl bg-primary text-white font-semibold hover:bg-primary-light transition-colors group/btn"
                  >
                    Découvrir ce gîte
                    <ChevronDown className="w-4 h-4 ml-2 -rotate-90 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stone-wall.png')]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-12 h-12 text-accent mx-auto mb-8 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">{siteData.general.history.title}</h2>
            <div className="space-y-6 text-stone-200 text-lg leading-relaxed italic">
              {siteData.general.history.text.split('\n\n').map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-12 pt-12 border-t border-white/10">
              <p className="text-accent font-serif text-2xl">— {siteData.general.history.author}</p>
              <p className="text-stone-400 uppercase tracking-widest text-sm mt-2">Vos hôtes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Paroles de Voyageurs</h2>
              <p className="text-stone-600 text-lg">
                Ce sont nos clients qui en parlent le mieux. Découvrez leurs expériences au Domaine du Petit Bois.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="p-4 rounded-full border border-stone-200 text-stone-400 hover:text-primary hover:border-primary transition-colors cursor-pointer">
                <ChevronDown className="w-6 h-6 rotate-90" />
              </div>
              <div className="p-4 rounded-full border border-stone-200 text-stone-400 hover:text-primary hover:border-primary transition-colors cursor-pointer">
                <ChevronDown className="w-6 h-6 -rotate-90" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteData.testimonials.map((t) => (
              <div key={t.id} className="bg-stone-50 p-10 rounded-3xl relative">
                <div className="absolute top-10 right-10 opacity-10">
                  <svg width="60" height="45" viewBox="0 0 60 45" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3333 45L0 31.6667V0H26.6667V31.6667H13.3333L13.3333 45ZM46.6667 45L33.3333 31.6667V0H60V31.6667H46.6667L46.6667 45Z" />
                  </svg>
                </div>
                <div className="flex gap-1 text-accent mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-xl text-stone-700 leading-relaxed mb-8 relative z-10">
                  {t.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-stone-900">{t.author}</p>
                    <p className="text-stone-400 text-sm">Séjour au Domaine</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
