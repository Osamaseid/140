import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons from react-icons
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Company Logo" className="h-10" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-cyan-900 font-medium px-2 py-1 border-b-2 border-cyan-900">Home</a>
            <a href="/gallery" className="text-gray-600 hover:text-cyan-900 font-medium px-2 py-1 border-b-2 border-transparent hover:border-teal-800 transition-colors">Gallery</a>
            <a href="/about" className="text-gray-600 hover:text-cyan-900 font-medium px-2 py-1 border-b-2 border-transparent hover:border-cyan-900 transition-colors">About</a>
          </nav>

          {/* Contact Button */}
          <button
            onClick={handleContactClick}
            className="hidden md:block bg-cyan-900 text-white px-6 py-2 rounded-md hover:bg-cyan-950 transition-colors"
          >
            Contact Us
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-cyan-900" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          <nav className="flex flex-col items-center space-y-4">
            <a href="/" className="text-cyan-900 font-medium">Home</a>
            <a href="/gallery" className="text-gray-600 hover:text-cyan-900">Gallery</a>
            <a href="/about" className="text-gray-600 hover:text-cyan-900">About</a>
            <button
              onClick={handleContactClick}
              className="bg-cyan-900 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition-colors"
            >
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
