
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Database, Zap, CheckCircle } from 'lucide-react';

const CIOGuide = () => {
  const technicalPillars = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Security & Compliance",
      description: "Implement robust AI governance frameworks that ensure data sovereignty and regulatory compliance across GCC markets",
      keyPoints: ["Zero-trust AI architecture", "Data sovereignty controls", "Regulatory compliance automation"]
    },
    {
      icon: <Database className="h-12 w-12 text-blue-600" />,
      title: "Data Architecture",
      description: "Build scalable data foundations that support enterprise AI initiatives with real-time processing capabilities",
      keyPoints: ["Unified data platforms", "Real-time analytics", "Automated data quality"]
    },
    {
      icon: <Zap className="h-12 w-12 text-blue-600" />,
      title: "Integration Strategy",
      description: "Seamlessly integrate AI solutions with existing enterprise systems without disrupting core operations",
      keyPoints: ["API-first architecture", "Legacy system integration", "Gradual deployment strategies"]
    }
  ];

  const implementationSteps = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Evaluate current infrastructure, identify gaps, and create comprehensive AI roadmap",
      duration: "2-4 weeks"
    },
    {
      step: "02",
      title: "Pilot Implementation",
      description: "Deploy initial AI use cases in controlled environments with success metrics",
      duration: "6-12 weeks"
    },
    {
      step: "03",
      title: "Scale & Optimize",
      description: "Expand successful pilots across the organization with continuous optimization",
      duration: "3-6 months"
    }
  ];

  const riskMitigation = [
    { risk: "Data Security Breaches", mitigation: "End-to-end encryption and access controls", priority: "Critical" },
    { risk: "Integration Failures", mitigation: "Comprehensive testing and rollback procedures", priority: "High" },
    { risk: "Performance Degradation", mitigation: "Load balancing and resource optimization", priority: "Medium" },
    { risk: "Compliance Violations", mitigation: "Automated compliance monitoring and reporting", priority: "Critical" }
  ];

  return (
    <div className="py-32 px-6 bg-blue-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-extralight mb-8 text-blue-600">
            CIO Playbook
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            <span className="font-semibold text-black">Technical leadership for enterprise AI transformation.</span> Comprehensive strategies for secure, scalable, and compliant AI implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {technicalPillars.map((pillar, index) => (
            <Card key={index} className="bg-white border border-blue-200 p-8 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 mx-auto mb-6 bg-blue-50 rounded-full flex items-center justify-center">
                  {pillar.icon}
                </div>
                <CardTitle className="text-xl font-medium text-blue-600 mb-4">
                  {pillar.title}
                </CardTitle>
                <p className="text-gray-600 font-light leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {pillar.keyPoints.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-3 flex-shrink-0" />
                      <span className="font-light text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-white border border-blue-200 p-12 mb-16">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl font-light text-blue-600 mb-6">
              Implementation Roadmap
            </CardTitle>
            <p className="text-gray-600 text-lg font-light">
              Proven methodology for enterprise AI deployment
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {implementationSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-extralight text-blue-600 mb-4">{step.step}</div>
                  <h3 className="text-lg font-medium text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed mb-3">{step.description}</p>
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-light rounded">
                    {step.duration}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-600 border-0 p-12 mb-16">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl font-light text-white mb-6">
              Risk Mitigation Framework
            </CardTitle>
            <p className="text-blue-100 text-lg font-light">
              Comprehensive approach to managing AI implementation risks
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {riskMitigation.map((item, index) => (
                <div key={index} className="bg-blue-700 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-medium">{item.risk}</h4>
                    <span className={`px-2 py-1 text-xs rounded ${
                      item.priority === 'Critical' ? 'bg-red-500 text-white' :
                      item.priority === 'High' ? 'bg-orange-500 text-white' :
                      'bg-yellow-500 text-black'
                    }`}>
                      {item.priority}
                    </span>
                  </div>
                  <p className="text-blue-100 font-light text-sm">{item.mitigation}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <h3 className="text-3xl font-light text-blue-600 mb-8">
            Ready to Architect Your AI Future?
          </h3>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Build secure, scalable AI infrastructure with expert technical guidance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CIOGuide;
