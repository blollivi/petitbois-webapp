import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactModal from './ContactModal';
import PhotoCarouselModal from './PhotoCarouselModal';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ContactModal />
      <PhotoCarouselModal />
    </div>
  );
};

export default Layout;
