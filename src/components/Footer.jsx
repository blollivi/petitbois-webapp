import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white p-12 mt-auto border-t-4 border-accent">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-serif mb-4">Domaine du Petit Bois</h2>
        <p className="mb-2 font-sans text-stone-300 font-light">123 Route de la Forêt, 44000 Nantes, France</p>
        <p className="font-sans text-stone-300 font-light">&copy; {new Date().getFullYear()} Domaine du Petit Bois. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
