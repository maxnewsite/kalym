
import React from 'react';
import Navigation from '@/components/Navigation';
import KalymHero from '@/components/KalymHero';
import KalymHome from '@/components/KalymHome';
import Manifesto from '@/components/Manifesto';
import KalymPlatform from '@/components/KalymPlatform';
import CEOImperative from '@/components/CEOImperative';
import CIOGuide from '@/components/CIOGuide';
import StateOfAI from '@/components/StateOfAI';
import Team from '@/components/Team';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      
      <main>
        <KalymHero />
        <KalymHome />
        <Manifesto />
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

        {/* Team Section */}
        <section id="team">
          <Team />
        </section>
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            KALYM.dev
          </div>
          <p className="text-gray-600">AI Orchestration Platform for the GCC Region</p>
          <p className="text-gray-500 text-sm mt-2">Powered by elite data scientists and proven research</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
