
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
import { Separator } from '@/components/ui/separator';
import kalymLogo from '@/assets/kalym-logo.png';

const Index = () => {
  console.log('Index component rendering...');
  
  try {
    return (
      <div className="min-h-screen bg-white text-gray-800">
        <Navigation />
        
        <main className="bg-white">
          <KalymHome />
          
          <Separator className="bg-black h-[3px]" />
          
          <KalymHero />
          
          <Separator className="bg-black h-[3px]" />
          
          <KalymPlatform />
          
          <Separator className="bg-black h-[3px]" />
          
          {/* Additional Research Sections */}
          <section id="ceo-imperative" className="bg-white">
            <CEOImperative />
          </section>
          
          <Separator className="bg-black h-[3px]" />
          
          <section id="cio-guide" className="bg-white">
            <CIOGuide />
          </section>
          
          <Separator className="bg-black h-[3px]" />
          
          <section id="state-of-ai" className="bg-white">
            <StateOfAI />
          </section>

          <Separator className="bg-black h-[3px]" />

          {/* Team Section */}
          <section id="team" className="bg-white">
            <Team />
          </section>

          <Separator className="bg-black h-[3px]" />

          {/* White Papers Section */}
          <section id="white-papers" className="bg-white">
            <WhitePapers />
          </section>
        </main>
        
        <Separator className="bg-black h-[3px]" />
        
        <footer className="bg-white py-20 border-t border-black">
          <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <img src={kalymLogo} alt="KALYM Logo" className="h-32 w-auto" />
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
