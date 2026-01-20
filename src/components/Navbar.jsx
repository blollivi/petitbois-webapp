import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary/95 backdrop-blur-sm sticky top-0 z-50 border-b border-primary/20 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold font-serif tracking-wider">Domaine du Petit Bois</Link>
        <div className="space-x-6">
          <Link to="/" className="font-sans uppercase text-sm tracking-widest hover:text-accent transition-colors">Accueil</Link>
          <a href="#contact" className="font-sans uppercase text-sm tracking-widest hover:text-accent transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
