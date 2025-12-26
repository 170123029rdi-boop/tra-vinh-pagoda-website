import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { DataProvider } from './context/DataContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TempleDetail from './pages/TempleDetail';
import Contact from './pages/Contact';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import './styles/main.css';

function App() {
  return (
    <HelmetProvider>
      <DataProvider>
        <Router>
          <div className="app">
            <Routes>
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/" element={
                <>
                  <Header />
                  <Home />
                  <Footer />
                </>
              } />
              <Route path="/temple/:id" element={
                <>
                  <Header />
                  <TempleDetail />
                  <Footer />
                </>
              } />
              <Route path="/contact" element={
                <>
                  <Header />
                  <Contact />
                  <Footer />
                </>
              } />
            </Routes>
          </div>
        </Router>
      </DataProvider>
    </HelmetProvider>
  );
}

export default App;
