import Header from "../Components/Header";
import hiltonLogo from '../assets/partenerslogo/Hilton Logo.png';
import regencyLogo from '../assets/partenerslogo/Hyatt Regency Logo.png';
import legacyLogo from '../assets/partenerslogo/Legacy Real estate Logo.png';
import marriottLogo from '../assets/partenerslogo/Marriott Logo.png';
import sunlightLogo from '../assets/partenerslogo/Tsehay Real Estate Logo.png';
import greenLogo from '../assets/partenerslogo/Gift Real Estate Logo.png';
import React from 'react';
import almunium from '../assets/almunium.png'


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
      <div className="w-full h-48 bg-yellow-400">
        <img
          src={almunium}
          alt="Corporate Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* About Us Section */}
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <p className="text-gray-600 max-w-3xl">
          We're committed to making a real difference in people's lives through our services and community engagement. Our values drive us to create positive change and deliver excellence in everything we do. With a focus on innovation and sustainability, we continue to grow and evolve while maintaining our core commitment to quality and service.
        </p>
      </div>

      {/* Partner Logos */}
      <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partnerLogos.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
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

      {/* The Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-12">The Team</h2>
          <p className="text-gray-600 mb-12 max-w-3xl">
            Led by visionaries and experts in their respective fields, our team brings together diverse perspectives and extensive experience to drive innovation and excellence.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              {
                name: "Marcus Johnson",
                role: "CEO",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300"
              },
              {
                name: "Sarah Chen",
                role: "CTO",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300"
              },
              {
                name: "David Williams",
                role: "COO",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300"
              },
              {
                name: "Rachel Thompson",
                role: "CMO",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300"
              },
              {
                name: "Michael Foster",
                role: "CFO",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300"
              }
            ].map((member) => (
              <div key={member.name} className="bg-white p-4 rounded-lg shadow-sm">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square rounded-lg object-cover mb-4"
                />
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;