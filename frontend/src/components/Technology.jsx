import React from 'react';
import { Navigation, Eye, Truck, Mic, Database, Shield } from 'lucide-react';
import { techFeatures } from '../data/mock';

const iconMap = {
  Navigation: Navigation,
  Eye: Eye,
  Truck: Truck,
  Mic: Mic,
  Database: Database,
  Shield: Shield,
};

const Technology = () => {
  return (
    <section
      id="technology"
      className="py-24 md:py-32 relative"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #0D2440 50%, #000000 100%)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-[7.6923%]">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2
            className="text-4xl md:text-[48px] font-semibold leading-[1.1] tracking-[-0.02em]"
            style={{ color: '#FFFFFF' }}
          >
            Advanced Technology
          </h2>
          <p
            className="text-lg md:text-[20px] font-medium leading-[1.5] max-w-3xl mx-auto"
            style={{ color: 'rgba(255, 255, 255, 0.85)' }}
          >
            Powered by cutting-edge AI, sensors, and autonomous systems
          </p>
        </div>

        {/* Tech Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techFeatures.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div
                key={feature.id}
                className="group p-8 transition-all duration-500 hover:scale-[1.05] animate-fade-in relative"
                style={{
                  background: 'rgba(13, 36, 64, 0.3)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '2px solid rgba(0, 255, 209, 0.15)',
                  borderRadius: '0px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  animationDelay: `${index * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 255, 209, 0.5)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 209, 0.3), 0 8px 32px rgba(0, 0, 0, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 255, 209, 0.15)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
                }}
              >
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00FFD1]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00FFD1]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FFD1]/0 via-transparent to-[#2E5E99]/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  {/* Icon */}
                  <div
                    className="inline-flex p-4 transition-all duration-500 group-hover:scale-110 relative"
                    style={{
                      background: 'rgba(0, 255, 209, 0.1)',
                      border: '2px solid rgba(0, 255, 209, 0.3)',
                      borderRadius: '0px',
                      boxShadow: '0 0 20px rgba(0, 255, 209, 0.2)',
                    }}
                  >
                    <IconComponent 
                      size={32} 
                      style={{ 
                        color: '#00FFD1',
                        filter: 'drop-shadow(0 0 8px rgba(0, 255, 209, 0.5))'
                      }} 
                    />
                    
                    {/* Icon glow effect on hover */}
                    <div className="absolute inset-0 bg-[#00FFD1]/0 group-hover:bg-[#00FFD1]/20 transition-all duration-500 rounded-none" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3
                      className="text-[20px] font-semibold leading-[1.4] transition-colors duration-300 group-hover:text-[#00FFD1]"
                      style={{ color: '#FFFFFF' }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-[16px] font-normal leading-[1.5]"
                      style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technology;
