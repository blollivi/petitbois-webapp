import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactModal from './ContactModal';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ContactModal />
    </div>
  );
};

export default Layout;
