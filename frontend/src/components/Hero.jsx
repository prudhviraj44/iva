import React, { Suspense } from 'react';
import { ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/mock';

// Lazy load Spline for better performance
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0D2440 0%, #000000 100%)',
      }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.14] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 1px, transparent 1px, transparent 7.6923%), repeating-linear-gradient(-90deg, #fff, #fff 1px, transparent 1px, transparent 7.6923%)',
          backgroundSize: '100% 100%',
        }}
      />

      {/* Particle effect overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00FFD1] rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#2E5E99] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-[#7BA4D0] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-[1400px] mx-auto px-[7.6923%] w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 pt-20 md:pt-0">
            <div className="space-y-4">
              <h1
                className="text-5xl md:text-[66px] font-semibold leading-[1.1] tracking-[-0.62px]"
                style={{ color: '#FFFFFF' }}
              >
                {companyInfo.tagline}
              </h1>
              <p
                className="text-xl md:text-[20px] font-medium leading-[1.5]"
                style={{ color: 'rgba(255, 255, 255, 0.85)' }}
              >
                {companyInfo.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToProducts} className="btn-primary group">
                Explore Products
                <ArrowRight
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  size={20}
                />
              </button>
              <button
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - 3D Spline Rover */}
          <div className="relative h-[400px] md:h-[700px] flex items-center justify-center">
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-[#00FFD1] text-lg animate-pulse">Loading 3D Model...</div>
                </div>
              }
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  maxWidth: '700px',
                  maxHeight: '700px',
                  overflow: 'visible',
                  position: 'relative',
                }}
              >
                <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
              </div>
            </Suspense>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(0deg, #000000 0%, transparent 100%)',
        }}
      />
    </section>
  );
};

export default Hero;
