
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CoreCapability {
  title: string;
  description: string;
}

const CoreCapabilitiesSection = () => {
  const coreCapabilities: CoreCapability[] = [
    {
      title: "Scheduling & Optimization",
      description: "Asset and resource planning solutions that maximize operational efficiency"
    },
    {
      title: "Dynamic Pricing", 
      description: "Real-time market adjustments to optimize revenue and competitiveness"
    },
    {
      title: "AI-Driven Personalization",
      description: "Behavior-based experiences that increase engagement and conversion"
    },
    {
      title: "Fraud Detection",
      description: "Pattern recognition technology for enhanced financial protection"
    },
    {
      title: "RFP Generation",
      description: "Automated procurement processes that reduce administrative burden"
    },
    {
      title: "Predictive Maintenance", 
      description: "AI-powered equipment monitoring to prevent costly downtime"
    },
    {
      title: "Supply Chain Intelligence",
      description: "End-to-end logistics optimization for improved efficiency"
    },
    {
      title: "Compliance Automation",
      description: "Regulatory monitoring tailored specifically for GCC markets"
    }
  ];

  return (
    <div>
      <h3 className="text-3xl font-light text-black mb-12">Core AI Capabilities</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coreCapabilities.map((capability, index) => (
          <Card key={index} className="bg-gray-50 border-0 p-6 hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-sm font-light">{index + 1}</span>
              </div>
              <CardTitle className="text-lg font-medium text-black">
                {capability.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                {capability.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CoreCapabilitiesSection;
