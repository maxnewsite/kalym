
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Zap, Target, Users, Shield } from 'lucide-react';

const KalymHome = () => {
  const kalymPillars = [
    {
      icon: <Brain className="h-12 w-12 text-black" />,
      letter: "K",
      title: "Knowledge",
      description: "Our selected AI Technology providers transform raw data into actionable intelligence & value through AI"
    },
    {
      icon: <Target className="h-12 w-12 text-black" />,
      letter: "A", 
      title: "Alignment",
      description: "We unite AI development, business consulting, and market activation into one convergent approach"
    },
    {
      icon: <Users className="h-12 w-12 text-black" />,
      letter: "L",
      title: "Leadership", 
      description: "We support GCC organizations through complex AI transformations with a straightforward business model"
    },
    {
      icon: <Zap className="h-12 w-12 text-black" />,
      letter: "Y",
      title: "Yield",
      description: "Every AI investment delivers measurable returns through efficiency, growth, or competitive advantage"
    },
    {
      icon: <Shield className="h-12 w-12 text-black" />,
      letter: "M",
      title: "Middle East",
      description: "Built in the Middle East, for the Middle East. Local context, global-caliber results"
    }
  ];

  const businessLines = [
    {
      title: "AI Tech Provider Marketplace (2025)",
      subtitle: "Source and deliver vetted AI tech providers to consulting firms",
      features: [
        "Ready-to-deploy MVP solutions with proven ROI",
        "Sandbox Framework addressing CIO concerns: data sovereignty, security, transparency",
        "65% value gap - only 35% of companies demonstrate real AI value. KALYM bridges this gap."
      ]
    },
    {
      title: "Full-Stack AI Agentic Solutions (2026+)",
      subtitle: "Develop autonomous AI use cases end-to-end with 8 core capabilities:",
      features: [
        "Fraud Detection, Dynamic Pricing, Predictive Maintenance, Supply Chain Intelligence",
        "RFP Generation, Compliance Automation, Scheduling Optimization, AI-Driven Personalization"
      ]
    }
  ];

  return (
    <section id="home" className="py-32 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-light mb-4 text-black">
            KALYM
          </h2>
          <h3 className="text-4xl md:text-5xl font-extralight mb-8 text-gray-700 tracking-tight">
            AI Evolution Orchestrated
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            An Abu Dhabi-based AI Agency positioned at the center of the region's AI transformation. 
            We source, select, and deliver top tech providers, specializing in high-demand AI use cases tailored specifically for the GCC market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-32">
          {kalymPillars.map((pillar, index) => (
            <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 text-center p-8">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 mx-auto mb-6 bg-gray-50 rounded-full flex items-center justify-center">
                  {pillar.icon}
                </div>
                <div className="text-6xl font-extralight text-black mb-4">
                  {pillar.letter}
                </div>
                <CardTitle className="text-xl font-medium text-black">
                  {pillar.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-16">
          {businessLines.map((line, index) => (
            <Card key={index} className="bg-gray-50 border-0 p-12">
              <CardHeader className="text-center pb-8">
                <div className="text-2xl mb-4">🚀</div>
                <CardTitle className="text-3xl font-light text-black mb-4">
                  Business Line {index + 1}: {line.title}
                </CardTitle>
                <p className="text-lg text-gray-600 font-light">
                  {line.subtitle}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {line.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start text-gray-700">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="font-light leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KalymHome;
