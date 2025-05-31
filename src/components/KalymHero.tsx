
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react';

const KalymHero = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10 pt-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="text-black">
              AI Evolution
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Orchestrated
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the 12% who achieve AI success. KALYM.ai delivers 15-20% operational improvements 
            through elite data science and proven GCC market activation.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
              Submit Your AI Use Case
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:text-blue-600 hover:border-blue-600 px-8 py-4 text-lg rounded-full">
              Explore Research
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Elite AI Factory</h3>
              <p className="text-gray-600">80-100 data scientists evaluate your solution's technical viability and market readiness</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">KYC & Due Diligence</h3>
              <p className="text-gray-600">Professional vetting with regulatory compliance aligned to GCC standards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">GCC Acceleration</h3>
              <p className="text-gray-600">Regional expertise across UAE, Saudi Arabia, and Qatar markets</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KalymHero;
