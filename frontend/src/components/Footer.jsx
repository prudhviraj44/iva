import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { companyInfo } from '../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="contact"
      className="py-16 md:py-24 relative"
      style={{
        background: '#0D2440',
        borderTop: '1px solid rgba(255, 255, 255, 0.25)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-[7.6923%]">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3
              className="text-2xl font-semibold tracking-tight"
              style={{ color: '#00FFD1' }}
            >
              {companyInfo.name}
            </h3>
            <p
              className="text-[16px] font-normal leading-[1.5]"
              style={{ color: 'rgba(255, 255, 255, 0.85)' }}
            >
              {companyInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4
              className="text-[18px] font-semibold"
              style={{ color: '#FFFFFF' }}
            >
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={scrollToTop}
                className="text-left text-[16px] font-normal transition-colors duration-300"
                style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                onMouseEnter={(e) => (e.target.style.color = '#00FFD1')}
                onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.85)')}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-[16px] font-normal transition-colors duration-300"
                style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                onMouseEnter={(e) => (e.target.style.color = '#00FFD1')}
                onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.85)')}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-left text-[16px] font-normal transition-colors duration-300"
                style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                onMouseEnter={(e) => (e.target.style.color = '#00FFD1')}
                onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.85)')}
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('technology')}
                className="text-left text-[16px] font-normal transition-colors duration-300"
                style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                onMouseEnter={(e) => (e.target.style.color = '#00FFD1')}
                onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.85)')}
              >
                Technology
              </button>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4
              className="text-[18px] font-semibold"
              style={{ color: '#FFFFFF' }}
            >
              Get In Touch
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${companyInfo.contact.email}`}
                className="flex items-center gap-2 text-[16px] font-normal transition-colors duration-300"
                style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                onMouseEnter={(e) => (e.target.style.color = '#00FFD1')}
                onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.85)')}
              >
                <Mail size={18} />
                {companyInfo.contact.email}
              </a>

              {/* Social Links */}
              <div className="flex gap-4 pt-2">
                <a
                  href={companyInfo.contact.social.twitter}
                  className="p-2 transition-all duration-300"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    borderRadius: '0px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 255, 209, 0.1)';
                    e.currentTarget.style.borderColor = '#00FFD1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                  }}
                >
                  <Twitter size={18} style={{ color: '#FFFFFF' }} />
                </a>
                <a
                  href={companyInfo.contact.social.linkedin}
                  className="p-2 transition-all duration-300"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    borderRadius: '0px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 255, 209, 0.1)';
                    e.currentTarget.style.borderColor = '#00FFD1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                  }}
                >
                  <Linkedin size={18} style={{ color: '#FFFFFF' }} />
                </a>
                <a
                  href={companyInfo.contact.social.github}
                  className="p-2 transition-all duration-300"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    borderRadius: '0px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 255, 209, 0.1)';
                    e.currentTarget.style.borderColor = '#00FFD1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                  }}
                >
                  <Github size={18} style={{ color: '#FFFFFF' }} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t"
          style={{ borderColor: 'rgba(255, 255, 255, 0.25)' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-[16px] font-normal text-center md:text-left"
              style={{ color: 'rgba(255, 255, 255, 0.85)' }}
            >
              © 2026 {companyInfo.name}. All rights reserved.
            </p>
            <p
              className="text-[16px] font-normal"
              style={{ color: '#4D4D4D' }}
            >
              Engineered with precision
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
