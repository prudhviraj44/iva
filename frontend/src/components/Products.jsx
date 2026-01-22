import React, { useEffect, useState } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import { products as MOCK_PRODUCTS } from '../data/mock';
import api from '../services/api';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Try to fetch from API
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (error) {
        // Fallback to mock data if backend unavailable
        console.warn('Backend unavailable, using mock data');
        setProducts(MOCK_PRODUCTS);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (loading) return;

    const cards = document.querySelectorAll('[data-scroll-reveal]');

    if (!cards.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [loading]);

  const handleViewDetails = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (loading) {
    return <div className="py-32 text-center text-white">Loading products...</div>;
  }

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
              className="group relative overflow-hidden product-card"
              data-scroll-reveal
              style={{ '--scroll-delay': `${index * 120}ms` }}
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
                <button
                  onClick={handleViewDetails}
                  className="btn-primary w-full group/btn relative overflow-hidden"
                >
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

      {/* Coming Soon Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative bg-gradient-to-br from-[#1a1a1a] to-[#000] border-2 border-[#00FFD1] rounded-2xl p-8 max-w-md mx-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ boxShadow: '0 0 50px rgba(0, 255, 209, 0.3)' }}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-[#00FFD1] transition-colors duration-300"
            >
              <X size={24} />
            </button>

            <div className="text-center space-y-4">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-3xl font-bold" style={{ color: '#00FFD1' }}>
                Coming Soon
              </h3>
              <p className="text-lg" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                Product details page is currently under development. Stay tuned for more information about our innovative robotics solutions!
              </p>
              <button
                onClick={closeModal}
                className="mt-6 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                style={{
                  backgroundColor: '#00FFD1',
                  color: '#000',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#00e5bc';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#00FFD1';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
