import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FlaskRound as Flask, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isInCategoryPage = location.pathname.startsWith('/category/');
  const isInProjectPage = location.pathname.startsWith('/project/');
  const isInCategories = location.pathname === '/categories';
  const isInAbout = location.pathname === '/about';
  const isInContact = location.pathname === '/contact';
  const shouldUseTransparentBg = !isInCategoryPage && !isInProjectPage && !isInCategories && !isInAbout && !isInContact;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldUseTransparentBg
          ? isScrolled || isMenuOpen
            ? 'bg-primary-600/95 backdrop-blur-sm shadow-lg py-2' 
            : 'bg-transparent py-4'
          : isScrolled || isMenuOpen
            ? 'bg-primary-600/95 backdrop-blur-sm shadow-lg py-2'
            : 'bg-primary-600 py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <Flask 
              size={28} 
              className="text-white transition-transform duration-300 group-hover:scale-110" 
            />
            <span className="font-display font-bold text-xl text-white transition-colors duration-300">
              Mini Bilim
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {[
              { path: '/', label: 'Ana Sayfa' },
              { path: '/categories', label: 'Kategoriler' },
              { path: '/about', label: 'Hakkında' },
              { path: '/contact', label: 'İletişim' }
            ].map(({ path, label }) => {
              const isActive = location.pathname === path;
              
              return (
                <Link 
                  key={path}
                  to={path}
                  className={`relative font-medium text-sm transition-all duration-300 px-3 py-1.5 rounded-full ${
                    isActive 
                      ? 'text-white bg-white/20' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full text-white hover:bg-white/10 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary-700/95 backdrop-blur-sm border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-2">
                {[
                  { path: '/', label: 'Ana Sayfa' },
                  { path: '/categories', label: 'Kategoriler' },
                  { path: '/about', label: 'Hakkında' },
                  { path: '/contact', label: 'İletişim' }
                ].map(({ path, label }) => {
                  const isActive = location.pathname === path;
                  
                  return (
                    <Link 
                      key={path}
                      to={path}
                      className={`py-2 px-4 rounded-lg transition-all duration-200 ${
                        isActive 
                          ? 'bg-white/20 text-white' 
                          : 'text-white/90 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};