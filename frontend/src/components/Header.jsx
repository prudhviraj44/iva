import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { companyInfo } from '../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled ? 'backdrop-blur-xl bg-black/80' : 'bg-transparent'
      }`}
      style={{
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.25)' : 'none',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-[7.6923%] py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold tracking-tight" style={{ color: '#00FFD1' }}>
            {companyInfo.name}
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-[18px] font-normal transition-colors duration-300"
            style={{ color: '#4D4D4D' }}
            onMouseEnter={(e) => (e.target.style.color = '#FFFFFF')}
            onMouseLeave={(e) => (e.target.style.color = '#4D4D4D')}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('products')}
            className="text-[18px] font-normal transition-colors duration-300"
            style={{ color: '#4D4D4D' }}
            onMouseEnter={(e) => (e.target.style.color = '#FFFFFF')}
            onMouseLeave={(e) => (e.target.style.color = '#4D4D4D')}
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection('technology')}
            className="text-[18px] font-normal transition-colors duration-300"
            style={{ color: '#4D4D4D' }}
            onMouseEnter={(e) => (e.target.style.color = '#FFFFFF')}
            onMouseLeave={(e) => (e.target.style.color = '#4D4D4D')}
          >
            Technology
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden backdrop-blur-xl bg-black/95 border-t border-white/25">
          <nav className="flex flex-col px-[7.6923%] py-6 gap-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-[18px] font-normal py-2"
              style={{ color: '#FFFFFF' }}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-left text-[18px] font-normal py-2"
              style={{ color: '#FFFFFF' }}
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('technology')}
              className="text-left text-[18px] font-normal py-2"
              style={{ color: '#FFFFFF' }}
            >
              Technology
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary w-full mt-2"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
