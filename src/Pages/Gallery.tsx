import React from 'react';
import Header from '../Components/Header';

interface GalleryProps {
  largeImages: { src: string; alt: string }[];
  smallImages: { src: string; alt: string }[];
}

const Gallery: React.FC<GalleryProps> = ({ largeImages, smallImages }) => {
  return (
    <>
      <Header />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Latest Works and Projects</h2>

            <div className="grid grid-cols-12 gap-6">
              {/* Large Images */}
              {largeImages.map((image, index) => (
                <div key={index} className="col-span-12 md:col-span-6">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-80 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                  />
                </div>
              ))}

              {/* Small Images */}
              {smallImages.map((image, index) => (
                <div key={index} className="col-span-12 md:col-span-4">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
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
    </>
  );
};

export default Gallery;
