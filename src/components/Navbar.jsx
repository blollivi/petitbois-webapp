import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/mockData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-primary/90 backdrop-blur-md py-4 shadow-lg border-b border-white/10'
        : 'bg-transparent py-6'
      }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl md:text-3xl font-bold font-serif tracking-tight text-white group">
          <span className="italic text-accent group-hover:text-accent-light transition-colors">Domaine</span> du Petit Bois
        </Link>
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/" className="font-sans uppercase text-xs tracking-[0.2em] font-bold text-white hover:text-accent transition-colors">Accueil</Link>
          <a href="#gites" className="font-sans uppercase text-xs tracking-[0.2em] font-bold text-white hover:text-accent transition-colors">Nos Gîtes</a>
          <a href="#presentation" className="font-sans uppercase text-xs tracking-[0.2em] font-bold text-white hover:text-accent transition-colors">Le Domaine</a>
          <a href="#contact" className="bg-accent hover:bg-accent-dark text-white px-6 py-2.5 rounded-full font-sans uppercase text-xs tracking-[0.2em] font-bold transition-all shadow-lg hover:shadow-accent/40">
            Contact
          </a>
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
