
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Brain, TrendingUp, Users, Globe, Zap, Shield } from 'lucide-react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ResearchClaims from '@/components/ResearchClaims';
import CEOImperative from '@/components/CEOImperative';
import AIAssessment from '@/components/AIAssessment';
import IndustryShowcase from '@/components/IndustryShowcase';
import AITrends from '@/components/AITrends';
import GCCRegional from '@/components/GCCRegional';
import KalymPlatform from '@/components/KalymPlatform';

const Index = () => {
  const [activeSection, setActiveSection] = useState('research');

  const showSection = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation activeSection={activeSection} onSectionChange={showSection} />
      
      <main className="pt-20">
        {activeSection === 'research' && (
          <>
            <HeroSection />
            <ResearchClaims />
          </>
        )}
        
        {activeSection === 'ceo-imperative' && <CEOImperative />}
        
        {activeSection === 'assessment' && <AIAssessment />}
        
        {activeSection === 'industries' && <IndustryShowcase />}
        
        {activeSection === 'trends' && <AITrends />}
        
        {activeSection === 'regional' && <GCCRegional />}
        
        {activeSection === 'kalym' && <KalymPlatform />}
      </main>
      
      <footer className="bg-slate-900 text-white py-12 mt-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg mb-4">AI Evolution Research Platform</p>
          <p className="text-slate-400">Research-backed insights from leading global institutions</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
