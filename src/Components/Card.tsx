import React from "react";

interface Product {
  imageSrc: string;
  title: string;
  description: string;
}

interface ProductCatalogProps {
  products: Product[];
  featuredProducts: Product[];   
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  featuredProducts,
  
}) => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Product Catalog
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Discover premium aluminum and glass solutions crafted to perfection—
            where durability meets design, and every choice reflects your unique vision.
          </p>

          <div className="grid grid-cols-12 gap-8">
            {/* Product List - Left Side */}
            <div className="col-span-12 md:col-span-4 space-y-6">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white p-4 flex items-center space-x-4 rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-lg cursor-pointer"
                >
                  <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                    <img
                      src={product.imageSrc}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{product.title}</h3>
                    <p className="text-sm text-gray-600">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Products - Right Side */}
            <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProducts.map((featuredProduct, index) => (
                <div
                  key={index}
                  className="relative bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden"
                >
                  <img
                    src={featuredProduct.imageSrc}
                    alt={featuredProduct.title}
                    className="w-full h-[250px] object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold transition-opacity duration-300">
                    Explore More
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
