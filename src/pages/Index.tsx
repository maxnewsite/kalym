
import React from 'react';
import Navigation from '@/components/Navigation';
import KalymHome from '@/components/KalymHome';
import KalymHero from '@/components/KalymHero';
import KalymPlatform from '@/components/KalymPlatform';
import CEOImperative from '@/components/CEOImperative';
import CIOGuide from '@/components/CIOGuide';
import StateOfAI from '@/components/StateOfAI';
import Team from '@/components/Team';
import WhitePapers from '@/components/WhitePapers';

const Index = () => {
  console.log('Index component rendering...');
  
  try {
    return (
      <div className="min-h-screen bg-white text-gray-800">
        <Navigation />
        
        <main>
          <KalymHome />
        <KalymHero />
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
      
      <footer className="bg-blue-50 border-t border-blue-200 py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded-full"></div>
            </div>
            <div className="text-3xl font-light text-blue-600 tracking-tight">
              KALYM.me
            </div>
          </div>
          <p className="text-gray-600 font-light text-lg mb-2">AI Orchestration Platform for the GCC Region</p>
          <p className="text-gray-500 text-sm font-light">Powered by elite data scientists and proven research</p>
        </div>
      </footer>
    </div>
  );
  } catch (error) {
    console.error('Error rendering Index component:', error);
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">KALYM.me</h1>
          <p className="text-xl text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }
};

export default Index;
