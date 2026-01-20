import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import GiteDetail from './pages/GiteDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gite/:slug" element={<GiteDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
