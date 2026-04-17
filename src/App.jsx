import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WelcomePopup from './components/WelcomePopup';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import UnitsPage from './components/UnitsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import BlogPage from './components/BlogPage';
import ScrollToTop from './components/ScrollToTop';

const pageVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit:    { opacity: 0, x: -20 },
};

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <ScrollToTop />
      <Navbar />
      <WelcomePopup />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <Routes location={location}>
              <Route path="/"         element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/units"    element={<UnitsPage />} />
              <Route path="/about"    element={<AboutPage />} />
              <Route path="/contact"  element={<ContactPage />} />
              <Route path="/blog"     element={<BlogPage />} />
              {/* Catch-all: redirect unknown URLs to home */}
              <Route path="*"         element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}