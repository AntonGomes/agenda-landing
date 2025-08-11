import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary-700">
              Agenda
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              How it Works
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              Pricing
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              Sign In
            </button>
            <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
                How it Works
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
                Pricing
              </a>
              <a href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
                Contact
              </a>
              <div className="pt-4 border-t border-gray-200">
                <button className="w-full text-left text-gray-600 hover:text-primary-600 font-medium transition-colors mb-2">
                  Sign In
                </button>
                <button className="w-full bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;