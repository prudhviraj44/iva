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
              className="group relative overflow-hidden transition-all duration-400 hover:scale-[1.02]"
              style={{
                background:
                  product.category === 'home'
                    ? 'rgba(231, 240, 250, 0.05)'
                    : 'rgba(13, 36, 64, 0.8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                borderRadius: '0px',
              }}
            >
              {/* Product Image */}
              <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.8) 100%)',
                  }}
                />
              </div>

              {/* Product Info */}
              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3
                    className="text-2xl md:text-[28px] font-semibold leading-[1.2]"
                    style={{ color: '#FFFFFF' }}
                  >
                    {product.name}
                  </h3>
                  <p
                    className="text-[18px] font-medium"
                    style={{ color: '#00FFD1' }}
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
                    <div key={idx} className="flex items-center gap-2">
                      <Check size={16} style={{ color: '#00FFD1' }} />
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
                <button className="btn-primary w-full group/btn">
                  View Details
                  <ArrowRight
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    size={20}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
