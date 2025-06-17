
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SandboxSolutionCard = () => {
  const sandboxSolutions = [
    "Secure, locally hosted, sovereign data storage and processing",
    "Proven AI use cases with enterprise-grade models and built-in safeguards", 
    "Continuous monitoring and transparency with explainable outputs",
    "Quantifiable business impact tracking and ROI measurement"
  ];

  return (
    <div>
      <h3 className="text-3xl font-light text-black mb-12">The CIO's AI Adoption Dilemma</h3>
      <Card className="bg-blue-600 border-0 p-8 mb-8">
        <CardHeader className="pb-6">
          <CardTitle className="text-2xl font-light text-white mb-6">
            KALYM's Sandbox Solution
          </CardTitle>
          <p className="text-blue-100 font-light leading-relaxed">
            Addressing Critical Barriers Through the Sandbox Framework
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sandboxSolutions.map((solution, index) => (
              <div key={index} className="flex items-start text-blue-100">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span className="font-light text-sm leading-relaxed">{solution}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SandboxSolutionCard;
