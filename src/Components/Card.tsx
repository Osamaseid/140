import React from 'react';

interface Product {
  imageSrc: string;
  title: string;
  description: string;
}

interface ProductCatalogProps {
  products: Product[];
  featuredProduct: {
    imageSrc: string;
    title: string;
    material: string;
    dimensions: string;
    price: string;
  };
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({ products, featuredProduct }) => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Catalog</h2>
          <p className="text-gray-600 mb-8">
            Discover premium aluminum and glass solutions crafted to perfection—
            where durability meets design, and every choice reflects your unique vision.
          </p>
          
          <div className="grid grid-cols-12 gap-8">
            {/* Product List - Left Side */}
            <div className="col-span-12 md:col-span-4 space-y-4">
              {products.map((product, index) => (
                <div key={index} className="bg-white p-4 flex items-center space-x-4">
                  <div className="w-24 h-24 flex-shrink-0">
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

            {/* Featured Product Image - Right Side */}
            <div className="col-span-12 md:col-span-8">
              <div className="bg-white p-8">
                <img 
                  src={featuredProduct.imageSrc}
                  alt={featuredProduct.title}
                  className="w-full h-[500px] object-cover"
                />
                <div className="mt-6">
                  <table className="w-full max-w-md">
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 text-gray-600">Product</td>
                        <td className="py-2 text-right text-gray-900">{featuredProduct.title}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 text-gray-600">Material</td>
                        <td className="py-2 text-right text-gray-900">{featuredProduct.material}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 text-gray-600">Dimensions</td>
                        <td className="py-2 text-right text-gray-900">{featuredProduct.dimensions}</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-gray-600">Price</td>
                        <td className="py-2 text-right text-gray-900">{featuredProduct.price}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;