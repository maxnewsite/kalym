
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Target, Crown, TrendingUp, MapPin } from 'lucide-react';

const KalymHome = () => {
  const kalymPillars = [
    {
      icon: <Sparkles className="h-17 w-17 text-blue-600" />,
      letter: "K",
      title: "Knowledge",
      description: "Our selected AI Technology providers transform raw data into actionable intelligence & value through AI"
    },
    {
      icon: <Target className="h-17 w-17 text-blue-600" />,
      letter: "A", 
      title: "Alignment",
      description: "We unite AI development, business consulting, and market activation into one convergent approach"
    },
    {
      icon: <Crown className="h-17 w-17 text-blue-600" />,
      letter: "L",
      title: "Leadership", 
      description: "We support GCC organizations through complex AI transformations with a straightforward business model"
    },
    {
      icon: <TrendingUp className="h-17 w-17 text-blue-600" />,
      letter: "Y",
      title: "Yield",
      description: "Every AI investment delivers measurable returns through efficiency, growth, or competitive advantage"
    },
    {
      icon: <MapPin className="h-17 w-17 text-blue-600" />,
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
    <section id="home" className="py-44 px-9 bg-blue-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-29">
          <h2 className="text-9xl md:text-10xl font-light mb-8 text-blue-600 tracking-tight">
            KALYM
          </h2>
          <h3 className="text-7xl md:text-8xl font-extralight mb-12 text-gray-700 tracking-tight leading-tight">
            AI Evolution Orchestrated
          </h3>
          <p className="text-2xl text-gray-600 max-w-5xl mx-auto font-light leading-relaxed">
            An Abu Dhabi-based AI Agency positioned at the center of the region's AI transformation. 
            We source, select, and deliver top tech providers, specializing in high-demand AI use cases tailored specifically for the GCC market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-44">
          {kalymPillars.map((pillar, index) => (
            <Card key={index} className="bg-white border border-blue-200 hover:shadow-2xl hover:border-blue-400 transition-all duration-500 text-center p-12 group">
              <CardHeader className="pb-10">
                <div className="w-29 h-29 mx-auto mb-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                  {pillar.icon}
                </div>
                <div className="text-9xl font-extralight text-blue-600 mb-8 tracking-tight">
                  {pillar.letter}
                </div>
                <CardTitle className="text-2xl font-medium text-black leading-tight">
                  {pillar.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed font-light">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-24">
          {businessLines.map((line, index) => (
            <Card key={index} className="bg-white border border-blue-200 p-20 hover:bg-blue-50 hover:border-blue-300 transition-colors duration-300">
              <CardHeader className="text-center pb-12">
                <div className="text-4xl mb-8">🚀</div>
                <CardTitle className="text-5xl font-light text-blue-600 mb-8 leading-tight">
                  <span className="font-semibold text-black">Business Line {index + 1}:</span> {line.title}
                </CardTitle>
                <p className="text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
                  {line.subtitle}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {line.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start text-gray-700">
                      <span className="w-4 h-4 bg-blue-600 rounded-full mt-2 mr-8 flex-shrink-0"></span>
                      <span className="font-light leading-relaxed text-xl">{feature}</span>
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
