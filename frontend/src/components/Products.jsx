import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { products } from '../data/mock';

const Products = () => {
  return (
    <section id="products" className="py-24 md:py-32 relative" style={{ background: '#000000' }}>
      <div className="max-w-[1400px] mx-auto px-[7.6923%]">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2
            className="text-4xl md:text-[48px] font-semibold leading-[1.1] tracking-[-0.02em]"
            style={{ color: '#FFFFFF' }}
          >
            Our Product Lineup
          </h2>
          <p
            className="text-lg md:text-[20px] font-medium leading-[1.5] max-w-3xl mx-auto"
            style={{ color: 'rgba(255, 255, 255, 0.85)' }}
          >
            Advanced autonomous rover systems designed for intelligent navigation and seamless interaction
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] animate-fade-in"
              style={{
                background: 'rgba(13, 36, 64, 0.4)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '2px solid rgba(0, 255, 209, 0.2)',
                borderRadius: '0px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                animationDelay: `${index * 0.2}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 255, 209, 0.6)';
                e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 255, 209, 0.4), 0 8px 32px rgba(0, 0, 0, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 255, 209, 0.2)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FFD1]/0 via-transparent to-[#2E5E99]/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
              
              {/* Top accent line */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00FFD1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Product Image */}
              <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.9) 100%)',
                  }}
                />
                
                {/* Image glow effect on hover */}
                <div className="absolute inset-0 bg-[#00FFD1]/0 group-hover:bg-[#00FFD1]/10 transition-all duration-500 mix-blend-overlay" />
              </div>

              {/* Product Info */}
              <div className="p-8 space-y-6 relative">
                <div className="space-y-2">
                  <h3
                    className="text-2xl md:text-[28px] font-semibold leading-[1.2] transition-colors duration-300"
                    style={{ color: '#FFFFFF' }}
                  >
                    {product.name}
                  </h3>
                  <p
                    className="text-[18px] font-medium transition-all duration-300"
                    style={{ color: '#00FFD1', textShadow: '0 0 20px rgba(0, 255, 209, 0.3)' }}
                  >
                    {product.tagline}
                  </p>
                </div>

                <p
                  className="text-[16px] font-normal leading-[1.5]"
                  style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                >
                  {product.description}
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  {product.features.slice(0, 4).map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2 group/item transition-transform duration-300 hover:translate-x-2"
                    >
                      <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#00FFD1]/20 group-hover/item:bg-[#00FFD1]/30 transition-colors duration-300">
                        <Check size={14} style={{ color: '#00FFD1' }} />
                      </div>
                      <span
                        className="text-[16px] font-normal"
                        style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="btn-primary w-full group/btn relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    View Details
                    <ArrowRight
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                      size={20}
                    />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                </button>
              </div>
              
              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[#00FFD1]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
