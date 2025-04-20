'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Name */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              AIEdu
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              How it Works
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Testimonials
            </button>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
              Sign In
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-blue-600 transition-colors">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
