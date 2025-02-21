import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
 
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = () => {
    navigate('/gallery'); 
  };
return (
<section className="relative bg-white">
<div className="container mx-auto px-4 py-16">
<div className="grid grid-cols-12 gap-4">
{/* Text Content - Left Side */}
<div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
<h2 className="text-5xl font-bold mb-6 leading-tight text-gray-900">
Elevate Every Space with Unmatched Quality and Endless Variety
</h2>
<p className="text-lg text-gray-600 mb-8">
Discover premium aluminum and glass solutions crafted to perfection—where durability meets design, and every choice reflects your unique vision.
</p>
<button 
onClick={ handleClick } 
className="bg-teal-950 text-white px-8 py-3 rounded-none flex items-center hover:bg-teal-900 transition-colors w-fit">
Browse Our Catalog
</button>
</div>

      {/* Image Grid - Right Side */}
      <div className="col-span-12 lg:col-span-7 grid grid-cols-6 gap-4 mt-8 lg:mt-0">
        {/* Top Row */}
        <div className="col-span-3">
          <img 
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=600&h=400"
            alt="Modern glass building"
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="col-span-3">
          <img 
            src="https://images.unsplash.com/photo-1481026469463-66327c86e544?auto=format&fit=crop&q=80&w=600&h=400"
            alt="Glass facade detail"
            className="w-full h-48 object-cover"
          />
        </div>
        {/* Middle Row */}
        <div className="col-span-4">
          <img 
            src="https://images.unsplash.com/photo-1545486332-9e0999c535b2?auto=format&fit=crop&q=80&w=800&h=400"
            alt="Modern architecture"
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="col-span-2">
          <img 
            src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=400&h=400"
            alt="Glass detail"
            className="w-full h-48 object-cover"
          />
        </div>
        {/* Bottom Row */}
        <div className="col-span-6">
          <img 
            src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&q=80&w=1200&h=400"
            alt="Modern building exterior"
            className="w-full h-48 object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>
);
};

export default Hero; 