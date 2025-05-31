
import React from 'react';
import { Brain } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              KALYM.dev
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#manifesto" className="text-gray-700 hover:text-blue-600 transition-colors">Manifesto</a>
            <a href="#platform" className="text-gray-700 hover:text-blue-600 transition-colors">Platform</a>
            <a href="#ceo-imperative" className="text-gray-700 hover:text-blue-600 transition-colors">CEO Guide</a>
            <a href="#cio-guide" className="text-gray-700 hover:text-blue-600 transition-colors">CIO Guide</a>
            <a href="#state-of-ai" className="text-gray-700 hover:text-blue-600 transition-colors">State of AI</a>
            <a href="#team" className="text-gray-700 hover:text-blue-600 transition-colors">Team</a>
            <a href="#white-papers" className="text-gray-700 hover:text-blue-600 transition-colors">White Papers</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Your AI Use Case</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
