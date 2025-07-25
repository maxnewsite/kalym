
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Target as Search, Target as CheckCircle } from 'lucide-react';

const KalymHero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-white flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center relative z-10 pt-20 max-w-6xl">
        {/* Main Hero Content */}
        <div className="mb-28">
          <h1 className="text-6xl md:text-8xl font-extralight mb-8 leading-tight tracking-tight">
            <span className="text-gray-800">
              KALYM
            </span>
            <br />
            <span className="text-blue-600 font-light">
              AI Evolution Orchestrated
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto font-light leading-relaxed">
            Join the 12% who achieve AI success. KALYM.me delivers 15-20% operational improvements 
            through elite data science and proven GCC market activation.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-lg font-light rounded-none transition-all duration-300"
              onClick={scrollToContact}
            >
              Submit Your AI Use Case
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* 3-Step Process Section */}
        <div className="bg-blue-50 p-12 mb-28 text-left rounded-lg">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-600 mx-auto mb-6 flex items-center justify-center rounded-full">
              <span className="text-white text-2xl">📋</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-800 mb-6 tracking-tight">
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Your AI Use Case, Market-Ready in 3 Simple Steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 mx-auto mb-6 flex items-center justify-center rounded-full">
                <Target className="h-10 w-10 text-white" />
              </div>
              <div className="mb-4">
                <span className="text-2xl">🎯</span>
                <h3 className="text-xl font-medium text-gray-800 mt-3 mb-3">Submit Your Vision</h3>
              </div>
              <p className="text-gray-600 font-light leading-relaxed text-sm">
                Submit your AI Use Case through our streamlined portal. Whether it's predictive maintenance, 
                dynamic pricing optimization, or government service automation—share your challenge for assessment.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 mx-auto mb-6 flex items-center justify-center rounded-full">
                <Search className="h-10 w-10 text-white" />
              </div>
              <div className="mb-4">
                <span className="text-2xl">🔍</span>
                <h3 className="text-xl font-medium text-gray-800 mt-3 mb-3">Quick Due Diligence</h3>
              </div>
              <p className="text-gray-600 font-light leading-relaxed text-sm">
                We'll connect within 72 hours for focused due diligence. Our experts evaluate commercial viability, 
                technical requirements, and GCC market alignment.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 mx-auto mb-6 flex items-center justify-center rounded-full">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <div className="mb-4">
                <span className="text-2xl">✅</span>
                <h3 className="text-xl font-medium text-gray-800 mt-3 mb-3">Partnership Agreement</h3>
              </div>
              <p className="text-gray-600 font-light leading-relaxed text-sm">
                If aligned, we'll send our partnership agreement outlining revenue sharing, go-to-market strategy, 
                and implementation timeline for full market orchestration.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg font-light text-gray-800">
              Ready to turn your AI idea into GCC market reality?
            </p>
          </div>
        </div>
        
        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 border-2 border-blue-200 flex items-center justify-center rounded-full bg-blue-50">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-4">Elite AI Factory</h3>
            <p className="text-gray-600 font-light text-sm leading-relaxed">
              80-100 data scientists evaluate your solution's technical viability and market readiness
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 border-2 border-blue-200 flex items-center justify-center rounded-full bg-blue-50">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-4">KYC & Due Diligence</h3>
            <p className="text-gray-600 font-light text-sm leading-relaxed">
              Professional vetting with regulatory compliance aligned to GCC standards
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 border-2 border-blue-200 flex items-center justify-center rounded-full bg-blue-50">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-4">GCC Acceleration</h3>
            <p className="text-gray-600 font-light text-sm leading-relaxed">
              Regional expertise across UAE, Saudi Arabia, and Qatar markets
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KalymHero;
