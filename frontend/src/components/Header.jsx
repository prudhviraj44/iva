import React, { useState, useEffect } from 'react';
import { Menu, X, LogOut, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { companyInfo } from '../data/mock';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { currentUser, isAuthenticated, logout } = useAuth();

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

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-400 ${isScrolled ? 'backdrop-blur-xl bg-black/80' : 'bg-transparent'
        }`}
      style={{
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.25)' : 'none',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-[7.6923%] py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
          <img
            src="/logo.png"
            alt="IVA Robotics Logo"
            className="h-10 w-auto object-contain"
          />
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
            className="text-[18px] font-normal transition-colors duration-300"
            style={{ color: '#4D4D4D' }}
            onMouseEnter={(e) => (e.target.style.color = '#FFFFFF')}
            onMouseLeave={(e) => (e.target.style.color = '#4D4D4D')}
          >
            Contact
          </button>

          {/* Auth Buttons */}
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-[16px]" style={{ color: '#00FFD1' }}>
                <User size={18} />
                <span>{currentUser?.firstName} {currentUser?.lastName}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-[16px] font-normal transition-colors duration-300 px-4 py-2 rounded-lg"
                style={{ color: '#FFFFFF', border: '1px solid #00FFD1' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#00FFD1';
                  e.target.style.color = '#000000';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#FFFFFF';
                }}
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/login')}
                className="text-[16px] font-normal transition-colors duration-300 px-4 py-2"
                style={{ color: '#FFFFFF' }}
                onMouseEnter={(e) => (e.target.style.color = '#00FFD1')}
                onMouseLeave={(e) => (e.target.style.color = '#FFFFFF')}
              >
                Login
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="text-[16px] font-semibold transition-transform duration-300 px-6 py-2 rounded-lg"
                style={{ backgroundColor: '#00FFD1', color: '#000000' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#00e5bc';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#00FFD1';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Sign Up
              </button>
            </div>
          )}
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
              className="text-left text-[18px] font-normal py-2"
              style={{ color: '#FFFFFF' }}
            >
              Contact
            </button>

            {/* Mobile Auth Buttons */}
            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-2 py-2 text-[16px]" style={{ color: '#00FFD1' }}>
                  <User size={18} />
                  <span>{currentUser?.firstName} {currentUser?.lastName}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-2 text-[16px] font-normal py-3 px-4 rounded-lg w-full"
                  style={{ color: '#FFFFFF', border: '1px solid #00FFD1' }}
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    navigate('/login');
                    setMobileMenuOpen(false);
                  }}
                  className="text-[16px] font-normal py-3 px-4 rounded-lg w-full"
                  style={{ color: '#FFFFFF', border: '1px solid #333' }}
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    navigate('/signup');
                    setMobileMenuOpen(false);
                  }}
                  className="text-[16px] font-semibold py-3 px-4 rounded-lg w-full"
                  style={{ backgroundColor: '#00FFD1', color: '#000000' }}
                >
                  Sign Up
                </button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
