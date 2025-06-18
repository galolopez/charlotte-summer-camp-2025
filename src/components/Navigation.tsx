import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="font-encode font-bold text-xl sm:text-2xl text-gray-900 hover:text-amber-600 transition-colors"
            >
              Summer Camp 2025
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('lodging')}
                className="font-inter text-base font-medium text-gray-600 hover:text-amber-600 transition-colors"
              >
                Lodging
              </button>
              <Link
                to="/fragrance"
                className="font-inter text-base font-medium text-gray-600 hover:text-amber-600 transition-colors"
              >
                Fragrance
              </Link>
              <button
                onClick={() => scrollToSection('new-song-festival')}
                className="font-inter text-base font-medium text-gray-600 hover:text-amber-600 transition-colors"
              >
                New Song Festival
              </button>
              <button
                onClick={() => scrollToSection('media')}
                className="font-inter text-base font-medium text-gray-600 hover:text-amber-600 transition-colors"
              >
                Media
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="font-inter text-base font-medium text-gray-600 hover:text-amber-600 transition-colors"
              >
                About
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-amber-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={toggleMobileMenu}
        />
        
        {/* Slide-out menu */}
        <div className={`absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-encode font-bold text-xl text-gray-900 hover:text-amber-600 transition-colors"
              >
                Summer Camp 2025
              </Link>
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-amber-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation items */}
            <div className="flex-1 px-6 py-8 space-y-6">
              <button
                onClick={() => scrollToSection('lodging')}
                className="block w-full text-left font-inter text-base font-medium text-gray-600 hover:text-amber-600 transition-colors py-3"
              >
                Lodging
              </button>
              <Link
                to="/fragrance"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left font-inter text-base font-medium text-gray-600 hover:text-amber-600 transition-colors py-3"
              >
                Fragrance
              </Link>
              <button
                onClick={() => scrollToSection('new-song-festival')}
                className="block w-full text-left font-inter text-base font-medium text-gray-600 hover:text-amber-600 transition-colors py-3"
              >
                New Song Festival
              </button>
              <button
                onClick={() => scrollToSection('media')}
                className="block w-full text-left font-inter text-base font-medium text-gray-600 hover:text-amber-600 transition-colors py-3"
              >
                Media
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left font-inter text-base font-medium text-gray-600 hover:text-amber-600 transition-colors py-3"
              >
                About
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
