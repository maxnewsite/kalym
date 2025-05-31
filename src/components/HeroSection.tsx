
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800" />
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="relative container mx-auto text-center text-white">
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
          <TrendingUp className="h-5 w-5" />
          <span className="text-sm font-medium">AI Implementation Crisis Research</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          The AI Implementation
          <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Crisis
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
          Research-backed insights from leading global institutions reveal the critical gaps in AI adoption and implementation success.
        </p>
        
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white border-0 px-8 py-6 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          Explore The Data
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
};

export default HeroSection;
