import React from 'react';

interface ProductCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, title, description }) => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-4 flex items-center space-x-6">
            {/* Product Image */}
            <div className="w-32 h-32 flex-shrink-0">
              <img 
                src={imageSrc}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Product Details */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;