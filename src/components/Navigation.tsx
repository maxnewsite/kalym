
import React from 'react';
import { Button } from "@/components/ui/button";
import { Brain } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-xl z-50 border-b border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <Brain className="h-8 w-8 text-emerald-400" />
            <span className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              KALYM.ai
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#research" className="text-gray-300 hover:text-emerald-400 transition-colors">Research</a>
            <a href="#platform" className="text-gray-300 hover:text-emerald-400 transition-colors">Platform</a>
            <a href="#ceo-imperative" className="text-gray-300 hover:text-emerald-400 transition-colors">CEO Guide</a>
            <a href="#cio-guide" className="text-gray-300 hover:text-emerald-400 transition-colors">CIO Guide</a>
            <a href="#state-of-ai" className="text-gray-300 hover:text-emerald-400 transition-colors">State of AI</a>
            <a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact</a>
            <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-6 py-2 rounded-full">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
