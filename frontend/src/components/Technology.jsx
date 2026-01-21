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
          {techFeatures.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div
                key={feature.id}
                className="group p-8 transition-all duration-400 hover:scale-[1.05]"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '0px',
                }}
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div
                    className="inline-flex p-4 transition-all duration-400"
                    style={{
                      background: 'rgba(0, 255, 209, 0.1)',
                      border: '1px solid rgba(0, 255, 209, 0.3)',
                      borderRadius: '0px',
                    }}
                  >
                    <IconComponent size={32} style={{ color: '#00FFD1' }} />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3
                      className="text-[20px] font-semibold leading-[1.4]"
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
