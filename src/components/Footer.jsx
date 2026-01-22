import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/mockData';
import { Mail, Phone, MapPin, Facebook, Instagram, Heart, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-stone-300 py-20 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-white italic">{siteData.general.title}</h3>
            <p className="text-stone-400 leading-relaxed">
              Des gîtes de charme au cœur de la Saintonge pour des moments inoubliables en famille ou entre amis.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-accent hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-accent hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-accent transition-colors">Accueil</Link></li>
              <li><a href="#gites" className="hover:text-accent transition-colors">Nos Gîtes</a></li>
              <li><a href="#presentation" className="hover:text-accent transition-colors">Présentation</a></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>{siteData.general.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>{siteData.general.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>domainedupetitbois@orange.fr</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/Badge */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Gîtes de France</h4>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-sm text-stone-400 italic mb-4">
                "Classés 3 étoiles et 3 épis Gîtes De France pour votre plus grand confort."
              </p>
              <div className="flex gap-2">
                {[...Array(3)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
          <p>© {new Date().getFullYear()} {siteData.general.title}. Tous droits réservés.</p>
          <p className="flex items-center gap-1">
            Fait avec <Heart className="w-4 h-4 text-accent fill-current" /> en Charente-Maritime
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
