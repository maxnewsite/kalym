
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Search, CheckCircle } from 'lucide-react';

const KalymHero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-blue-50/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-primary/3 rounded-full blur-2xl" />
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-10 pt-32 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8 leading-[0.9] tracking-tight">
            <span className="text-foreground block">
              AI Success.
            </span>
            <span className="bg-gradient-to-r from-primary via-primary to-blue-600 bg-clip-text text-transparent font-normal block">
              Orchestrated.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Join the 12% who achieve AI success. KALYM delivers 15-20% operational improvements 
            through elite data science and proven GCC market expertise.
          </p>

          <div className="flex justify-center mb-16">
            <Button 
              size="lg" 
              className="btn-primary group text-lg px-8 py-6"
              onClick={scrollToContact}
            >
              Submit Your AI Use Case
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* 3-Step Process Section */}
      <div className="bg-gradient-to-b from-blue-50/30 to-white py-24">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your AI Use Case, Market-Ready in 3 Simple Steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <div className="card-elegant p-8 text-center hover-lift group">
              <div className="w-20 h-20 bg-primary mx-auto mb-6 flex items-center justify-center rounded-full shadow-lg shadow-primary/20 transition-all duration-300 group-hover:scale-110">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-4">Submit Your Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Submit your AI Use Case through our streamlined portal. Whether it's predictive maintenance, 
                dynamic pricing, or service automation—share your challenge.
              </p>
            </div>
            
            <div className="card-elegant p-8 text-center hover-lift group">
              <div className="w-20 h-20 bg-primary mx-auto mb-6 flex items-center justify-center rounded-full shadow-lg shadow-primary/20 transition-all duration-300 group-hover:scale-110">
                <Search className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-4">Quick Due Diligence</h3>
              <p className="text-muted-foreground leading-relaxed">
                We'll connect within 72 hours for focused due diligence. Our experts evaluate commercial viability, 
                technical requirements, and GCC market alignment.
              </p>
            </div>
            
            <div className="card-elegant p-8 text-center hover-lift group">
              <div className="w-20 h-20 bg-primary mx-auto mb-6 flex items-center justify-center rounded-full shadow-lg shadow-primary/20 transition-all duration-300 group-hover:scale-110">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-4">Partnership Agreement</h3>
              <p className="text-muted-foreground leading-relaxed">
                If aligned, we'll send our partnership agreement outlining revenue sharing, go-to-market strategy, 
                and implementation timeline for full market orchestration.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to turn your AI idea into GCC market reality?
            </p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-24 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 border-2 border-primary/20 flex items-center justify-center rounded-full bg-primary/5 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-4">Elite AI Factory</h3>
              <p className="text-muted-foreground leading-relaxed">
                80-100 data scientists evaluate your solution's technical viability and market readiness
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 border-2 border-primary/20 flex items-center justify-center rounded-full bg-primary/5 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-4">KYC & Due Diligence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Professional vetting with regulatory compliance aligned to GCC standards
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 border-2 border-primary/20 flex items-center justify-center rounded-full bg-primary/5 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-4">GCC Acceleration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Regional expertise across UAE, Saudi Arabia, and Qatar markets
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KalymHero;
