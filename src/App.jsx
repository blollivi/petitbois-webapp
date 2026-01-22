import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import GiteDetail from './pages/GiteDetail';
import ScrollToTop from './components/ScrollToTop';
import { ModalProvider } from './context/ModalContext';
import './App.css';

function App() {
  return (
    <ModalProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gite/:slug" element={<GiteDetail />} />
          </Routes>
        </Layout>
      </Router>
    </ModalProvider>
  );
}

export default App;
