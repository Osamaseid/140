import React from 'react';

interface LatestWorksProps {
  largeImages: { src: string; alt: string }[];
  smallImages: { src: string; alt: string }[];
}

const LatestWorks: React.FC<LatestWorksProps> = ({ largeImages, smallImages }) => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Latest Works and Projects</h2>
          
          <div className="grid grid-cols-12 gap-6">
            {/* Large Images */}
            <div className="col-span-12 md:col-span-6">
              <img 
                src={largeImages[0].src}
                alt={largeImages[0].alt}
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <img 
                src={largeImages[1].src}
                alt={largeImages[1].alt}
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Small Images */}
            {smallImages.map((image, index) => (
              <div key={index} className="col-span-12 md:col-span-4">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="bg-cyan-900 text-white px-8 py-3 rounded-none inline-flex items-center hover:bg-teal-900 transition-colors">
              See More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWorks;