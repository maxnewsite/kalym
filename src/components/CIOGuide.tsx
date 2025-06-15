
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CIOGuide = () => {
  const strategies = [
    {
      number: "01",
      title: "Partner for Cross-Functional AI Adoption",
      description: "Align C-suite and business units on shared AI vision with clear business KPIs",
      metric: "82% of leaders see 2025 as pivotal for AI operations rethink"
    },
    {
      number: "02", 
      title: "Build Solid Data & Governance Foundation",
      description: "Secure, accessible, governed data with proactive security and compliance",
      metric: "Essential before deploying tools like Microsoft 365 Copilot"
    },
    {
      number: "03",
      title: "Enable All Employees with AI",
      description: "Make AI accessible for everyone through secure, enterprise-ready solutions",
      metric: "90% report more opportunities for meaningful work at frontier firms"
    },
    {
      number: "04",
      title: "Prioritize High-Impact Workflows", 
      description: "Select AI projects addressing core challenges with measurable results",
      metric: "Cross-functional AI council with clear ROI metrics"
    },
    {
      number: "05",
      title: "Expand with Intelligent Agents",
      description: "Move from assistants to advanced AI agents that automate complex tasks",
      metric: "81% expect AI agents integration in next 12-18 months"
    },
    {
      number: "06",
      title: "Measure What Matters",
      description: "Track adoption and business impact using analytics and real-time adjustments", 
      metric: "Combine behavioral and sentiment data for full success picture"
    }
  ];

  const frontierFirmStats = [
    { stat: "71%", description: "of employees say their company is thriving" },
    { stat: "90%", description: "report more opportunities for meaningful work" },
    { stat: "21%", description: "fear AI will take jobs (vs 38% average)" }
  ];

  const caseStudies = [
    {
      company: "Microsoft HR/IT",
      improvement: "18% satisfaction boost",
      description: "Employee Self-Service Agent improved IT satisfaction and HR response speed"
    },
    {
      company: "Michelin", 
      improvement: "20% efficiency gain",
      description: "AI-powered predictive maintenance and supply chain optimization"
    },
    {
      company: "Access Holdings",
      improvement: "15% cost reduction", 
      description: "AI-driven customer service and fraud detection systems"
    }
  ];

  return (
    <div className="py-32 px-6 bg-blue-900">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-extralight mb-8 text-white">
            CIO Guide
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto font-light leading-relaxed mb-12">
            <span className="font-semibold text-white">Strategic CIO's Guide to Generative AI Transformation.</span> Empowering CIOs with a roadmap for harnessing generative AI to drive organization-wide value, agility, and competitive advantage.
          </p>
          <div className="inline-block px-6 py-2 border border-blue-600 text-blue-100 text-sm font-light">
            Microsoft CIO Generative AI Playbook 2025 • 31,000+ Workers Survey
          </div>
        </div>

        <Card className="bg-blue-800 border-blue-600 mb-20 p-8">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-light text-white mb-6">
              <span className="font-semibold text-black">Lead with Vision:</span> The CIO as AI Catalyst
            </CardTitle>
            <p className="text-blue-100 text-lg font-light max-w-3xl mx-auto leading-relaxed">
              By 2026, over 80% of enterprises will have integrated generative AI into production—up from less than 5% in 2023. The CIO's role is pivotal in setting the AI roadmap and ensuring safe, scalable adoption.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {frontierFirmStats.map((item, index) => (
                <div key={index} className="text-center p-6 bg-blue-700/50 rounded">
                  <div className="text-4xl font-extralight text-white mb-3">{item.stat}</div>
                  <p className="text-blue-100 font-light text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mb-20">
          <h3 className="text-4xl font-light text-center text-white mb-12">
            <span className="font-semibold text-black">The AI Success Playbook</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategies.map((strategy, index) => (
              <Card key={index} className="bg-blue-800 border-blue-600 p-6 hover:bg-blue-700/50 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="text-3xl font-extralight text-white mb-4">
                    {strategy.number}
                  </div>
                  <CardTitle className="text-lg font-light text-white leading-tight mb-3">
                    {strategy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100 mb-4 font-light text-sm leading-relaxed">
                    {strategy.description}
                  </p>
                  <div className="text-xs text-blue-200 font-light border-t border-blue-700 pt-3">
                    {strategy.metric}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-white border-0 p-12 mb-16">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl font-light text-blue-600 mb-6">
              <span className="font-semibold text-black">Real-World Success Stories</span>
            </CardTitle>
            <p className="text-gray-600 text-lg font-light">
              Leading organizations achieving measurable AI transformation results
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="text-center p-6 bg-blue-50 rounded">
                  <div className="text-3xl font-extralight text-blue-600 mb-2">{study.improvement}</div>
                  <div className="text-xl font-light text-black mb-3">{study.company}</div>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">{study.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <h3 className="text-3xl font-light text-white mb-8">
            <span className="font-semibold text-black">Is Your Organization Ready for the AI-First Future?</span>
          </h3>
          <p className="text-xl text-blue-100 mb-12 font-light">
            The time to act is now. Partner with us to architect your AI transformation—securely, strategically, and at scale.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button className="bg-white hover:bg-blue-50 text-blue-900 px-8 py-4 text-lg font-light">
              Book Strategy Session
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-light bg-transparent">
              Download Full CIO Playbook
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CIOGuide;
