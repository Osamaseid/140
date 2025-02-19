import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <div>
              <h1 className="text-2xl font-bold text-teal-800">140</h1>
              <p className="text-sm text-gray-600">Aluminum and Glass</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-teal-800 font-medium px-2 py-1 border-b-2 border-teal-800">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-teal-800 font-medium px-2 py-1 border-b-2 border-transparent hover:border-teal-800 transition-colors">
              Gallery
            </a>
            <a href="#" className="text-gray-600 hover:text-teal-800 font-medium px-2 py-1 border-b-2 border-transparent hover:border-teal-800 transition-colors">
              About
            </a>
          </nav>

          {/* Contact Button */}
          <button className="bg-teal-700 text-white px-6 py-2 rounded-md hover:bg-teal-800 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;