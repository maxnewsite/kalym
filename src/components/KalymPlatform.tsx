
import React from 'react';
import CoreCapabilitiesSection from './platform/CoreCapabilitiesSection';
import SandboxSolutionCard from './platform/SandboxSolutionCard';
import UseCaseSubmissionForm from './platform/UseCaseSubmissionForm';
import PlatformModelsSection from './platform/PlatformModelsSection';

const KalymPlatform = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-extralight mb-8 text-black">
            Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            KALYM's 2025-2026 Offering focuses on eight core AI capabilities with quantified ROI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <CoreCapabilitiesSection />

          <div>
            <SandboxSolutionCard />
            <UseCaseSubmissionForm />
          </div>
        </div>

        <PlatformModelsSection />
      </div>
    </section>
  );
};

export default KalymPlatform;
