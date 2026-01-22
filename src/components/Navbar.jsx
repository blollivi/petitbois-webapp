import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteData } from '../data/mockData';
import { getAssetUrl } from '../utils/assets';
import { useModal } from '../context/ModalContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAccueilClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
      ? 'bg-primary/90 backdrop-blur-md py-4 shadow-lg border-b border-white/10'
      : 'bg-transparent py-6'
      }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to="/"
          onClick={handleAccueilClick}
          className="flex items-center text-2xl md:text-3xl font-bold font-serif tracking-tight text-white group"
        >
          <img
            src={getAssetUrl(siteData.general.images.logo)}
            alt="Logo Petit Bois"
            className="h-10 w-auto mr-3"
          />
          <span className="italic text-accent group-hover:text-accent-light transition-colors">Domaine</span> du Petit Bois
        </Link>
        <div className="hidden md:flex items-center space-x-10">
          <Link
            to="/"
            onClick={handleAccueilClick}
            className="font-sans uppercase text-xs tracking-[0.2em] font-bold text-white hover:text-accent transition-colors"
          >
            Accueil
          </Link>
          <a href="#gites" className="font-sans uppercase text-xs tracking-[0.2em] font-bold text-white hover:text-accent transition-colors">Nos Gîtes</a>
          <a href="#presentation" className="font-sans uppercase text-xs tracking-[0.2em] font-bold text-white hover:text-accent transition-colors">Le Domaine</a>
          <button
            onClick={openModal}
            className="bg-accent hover:bg-accent-dark text-white px-6 py-2.5 rounded-full font-sans uppercase text-xs tracking-[0.2em] font-bold transition-all shadow-lg hover:shadow-accent/40"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Toggle (simplified) */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
