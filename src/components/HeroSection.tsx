
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-white">
      <div className="relative container mx-auto text-center text-foreground">
        <div className="inline-flex items-center space-x-2 bg-gray-100 border border-black px-6 py-3 mb-8">
          <TrendingUp className="h-5 w-5" />
          <span className="text-sm font-medium">AI Implementation Crisis Research</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          The AI Implementation
          <span className="block text-primary">
            Crisis
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-muted-foreground">
          Research-backed insights from leading global institutions reveal the critical gaps in AI adoption and implementation success.
        </p>
        
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Explore The Data
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
