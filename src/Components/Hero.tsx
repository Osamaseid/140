import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import background from "../assets/background.png";
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const navigateToCard = () => {
    navigate('/card');
  };

  return (
    <section className="relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-40 relative">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-bold mb-6 leading-tight text-gray-900">
            Elevate Every Space with Unmatched Quality and Endless Variety
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover premium aluminum and glass solutions crafted to perfection—where durability meets design, and every choice reflects your unique vision.
          </p>

          {/* Button */}
          <button 
            onClick={navigateToCard}
            className="bg-cyan-900 text-white px-8 py-3 rounded-none flex items-center hover:bg-teal-900 transition-colors w-fit group"
          >
            Browse Our Catalog
            <FaArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
