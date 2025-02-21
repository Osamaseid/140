import Header from "../Components/Header";
import { AiFillStar } from "react-icons/ai";
import hiltonLogo from '../assets/partenerslogo/Hilton Logo.png';
import regencyLogo from '../assets/partenerslogo/Hyatt Regency Logo.png';
import legacyLogo from '../assets/partenerslogo/Legacy Real estate Logo.png';
import marriottLogo from '../assets/partenerslogo/Marriott Logo.png';
import sunlightLogo from '../assets/partenerslogo/Tsehay Real Estate Logo.png';
import greenLogo from '../assets/partenerslogo/Gift Real Estate Logo.png';
import React from 'react';
import Footer from "../Components/Footer";


const About: React.FC = () => {

  const partnerLogos = [
    { src: hiltonLogo, alt: 'Hilton Logo' },
    { src: regencyLogo, alt: 'Regency Logo' },
    { src: legacyLogo, alt: 'Legacy Logo' },
    { src: marriottLogo, alt: 'Marriott Logo' },
    { src: sunlightLogo, alt: 'Sunlight Logo' },
    { src: greenLogo, alt: 'Green Logo' },
  ];

  return (
    <>
    <Header />
    <div>
      {/* Hero Banner */}
      <div className=" w-full h-48">
        <img
          src= "https://images.unsplash.com/photo-1654105727849-1b9d39357f16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2xhc3MlMjBmYWNhZGV8ZW58MHx8MHx8fDA%3D"
          className=" w-full h-full px-24 py-4 object-cover"
        />
      </div>

      {/* About Us Section */}
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <p className="text-gray-600 max-w-3xl">
          We're committed to making a real difference in people's lives through our services and community engagement. Our values drive us to create positive change and deliver excellence in everything we do. With a focus on innovation and sustainability, we continue to grow and evolve while maintaining our core commitment to quality and service.
        </p>
      </div>

      {/* Partners Logos */}
      <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partnerLogos.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <img 
                src={partner.src} 
                alt={partner.alt} 
                className="h-16 object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>

      {/* We are known for Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-12">We are known for</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-gray-600">
              Providing innovative solutions that transform businesses and enhance customer experiences. Our commitment to excellence and continuous improvement has made us a trusted partner for organizations worldwide.
            </p>
            <p className="text-gray-600">
              Building lasting relationships with our clients and delivering results that exceed expectations. We take pride in our ability to understand unique challenges and create tailored solutions that drive success.
            </p>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
              alt="Business Success"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

<div className="bg-gray-50 py-20">
  <div className="container mx-auto px-6">
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-left">
        Testimonial
      </h2>
      <p className="text-lg text-gray-600 text-left">
        We take pride in our work, but don't just take our word for it here's what our clients have to say!
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {[
        {
          name: "Thomas",
          testimonial:
            "This company completely transformed our business. Their expertise was invaluable, and we saw immediate results!",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300",
          rating: 5,
        },
        {
          name: "Sarah",
          testimonial:
            "Exceptional service and outstanding support. They truly care about their clients, and it shows!",
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300",
          rating: 4,
        },
        {
          name: "Beki",
          testimonial:
            "A seamless experience from start to finish! I highly recommend their services to anyone looking for real results.",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300",
          rating: 5,
        },
      ].map((testimonial) => (
        <div
          key={testimonial.name}
          className="bg-white p-6 rounded-2xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          {/* Small Circular Image */}
          <div className="flex items-center gap-4 mb-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-gray-300"
            />
            <h3 className="font-bold text-lg text-gray-800">{testimonial.name}</h3>
          </div>

          {/* Star Rating */}
          <div className="flex items-center mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <AiFillStar
                key={i}
                size={20}
                className={`transition-transform duration-200 ${
                  i < testimonial.rating ? "text-yellow-500 scale-110" : "text-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-gray-600 italic leading-relaxed">"{testimonial.testimonial}"</p>
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
    <Footer />
    </>
  );
};

export default About;