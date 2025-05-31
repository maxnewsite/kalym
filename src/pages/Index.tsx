
import React from 'react';
import Navigation from '@/components/Navigation';
import KalymHero from '@/components/KalymHero';
import KalymResearch from '@/components/KalymResearch';
import KalymPlatform from '@/components/KalymPlatform';
import CEOImperative from '@/components/CEOImperative';
import CIOGuide from '@/components/CIOGuide';
import StateOfAI from '@/components/StateOfAI';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main>
        <KalymHero />
        <KalymResearch />
        <KalymPlatform />
        
        {/* Additional Research Sections */}
        <section id="ceo-imperative">
          <CEOImperative />
        </section>
        
        <section id="cio-guide">
          <CIOGuide />
        </section>
        
        <section id="state-of-ai">
          <StateOfAI />
        </section>
      </main>
      
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            KALYM.ai
          </div>
          <p className="text-gray-400">AI Orchestration Platform for the GCC Region</p>
          <p className="text-gray-500 text-sm mt-2">Powered by elite data scientists and proven research</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
