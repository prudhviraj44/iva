import React, { Suspense, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/mock';

// Lazy load Spline for better performance
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(0,255,209,0.3) 0%, transparent 70%)',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{
            background: 'radial-gradient(circle, rgba(46,94,153,0.4) 0%, transparent 70%)',
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00FFD1] rounded-full animate-pulse shadow-[0_0_20px_rgba(0,255,209,0.8)]" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#2E5E99] rounded-full animate-pulse shadow-[0_0_15px_rgba(46,94,153,0.8)]" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-[#7BA4D0] rounded-full animate-pulse shadow-[0_0_18px_rgba(123,164,208,0.8)]" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-[#00FFD1] rounded-full animate-pulse shadow-[0_0_12px_rgba(0,255,209,0.8)]" style={{ animationDelay: '1.5s' }} />
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
