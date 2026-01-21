import React from 'react';
import { companyInfo } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative" style={{ background: '#000000' }}>
      <div className="max-w-[1400px] mx-auto px-[7.6923%]">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Company info */}
          <div className="space-y-6">
            <h2
              className="text-4xl md:text-[48px] font-semibold leading-[1.1] tracking-[-0.02em]"
              style={{ color: '#FFFFFF' }}
            >
              About IVAROBOTICS
            </h2>
            <p
              className="text-lg md:text-[18px] font-normal leading-[1.5]"
              style={{ color: 'rgba(255, 255, 255, 0.85)' }}
            >
              {companyInfo.about}
            </p>
          </div>

          {/* Right side - Glass card with stats */}
          <div
            className="relative p-8 md:p-12 rounded-none"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
            }}
          >
            <div className="space-y-8">
              <div className="space-y-2">
                <h3
                  className="text-[32px] font-semibold leading-[1.25] tracking-[-0.01em]"
                  style={{ color: '#00FFD1' }}
                >
                  Our Mission
                </h3>
                <p
                  className="text-[18px] font-normal leading-[1.5]"
                  style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                >
                  Delivering autonomous intelligence that transforms how humans interact with robotics technology.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div
                    className="text-[48px] font-semibold leading-[1.1]"
                    style={{ color: '#00FFD1' }}
                  >
                    2+
                  </div>
                  <div
                    className="text-[16px] font-normal"
                    style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                  >
                    Product Lines
                  </div>
                </div>

                <div className="space-y-2">
                  <div
                    className="text-[48px] font-semibold leading-[1.1]"
                    style={{ color: '#00FFD1' }}
                  >
                    AI
                  </div>
                  <div
                    className="text-[16px] font-normal"
                    style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                  >
                    Powered Systems
                  </div>
                </div>

                <div className="space-y-2">
                  <div
                    className="text-[48px] font-semibold leading-[1.1]"
                    style={{ color: '#00FFD1' }}
                  >
                    24/7
                  </div>
                  <div
                    className="text-[16px] font-normal"
                    style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                  >
                    Operation
                  </div>
                </div>

                <div className="space-y-2">
                  <div
                    className="text-[48px] font-semibold leading-[1.1]"
                    style={{ color: '#00FFD1' }}
                  >
                    100%
                  </div>
                  <div
                    className="text-[16px] font-normal"
                    style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                  >
                    Autonomous
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
