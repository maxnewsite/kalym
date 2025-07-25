
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-2xl font-light text-blue-600 tracking-tight">
              KALYM.me
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors font-light">Home</a>
            <a href="#manifesto" className="text-gray-600 hover:text-blue-600 transition-colors font-light">Manifesto</a>
            <a href="#platform" className="text-gray-600 hover:text-blue-600 transition-colors font-light">Platform</a>
            <Link to="/blog" className="text-gray-600 hover:text-blue-600 transition-colors font-light">Blog</Link>
            <a href="#ceo-imperative" className="text-gray-600 hover:text-blue-600 transition-colors font-light">CEO Guide</a>
            <a href="#cio-guide" className="text-gray-600 hover:text-blue-600 transition-colors font-light">CIO Guide</a>
            <a href="#state-of-ai" className="text-gray-600 hover:text-blue-600 transition-colors font-light">State of AI</a>
            <a href="#team" className="text-gray-600 hover:text-blue-600 transition-colors font-light">Team</a>
            <a href="#white-papers" className="text-gray-600 hover:text-blue-600 transition-colors font-light">White Papers</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors font-light">Your AI Use Case</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
