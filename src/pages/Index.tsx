
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
import WhitePapers from '@/components/WhitePapers';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      
      <main>
        <KalymHome />
        <KalymHero />
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

        {/* White Papers Section */}
        <section id="white-papers">
          <WhitePapers />
        </section>
      </main>
      
      <footer className="bg-white border-t border-gray-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded-full"></div>
            </div>
            <div className="text-3xl font-light text-black tracking-tight">
              KALYM.org
            </div>
          </div>
          <p className="text-gray-600 font-light text-lg mb-2">AI Orchestration Platform for the GCC Region</p>
          <p className="text-gray-500 text-sm font-light">Powered by elite data scientists and proven research</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
