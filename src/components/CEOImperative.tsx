
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CEOImperative = () => {
  const imperatives = [
    {
      number: "01",
      title: "AI-First Strategy",
      description: "73% of GCC CEOs believe GenAI will significantly change value creation in the next three years",
      actions: ["Define AI vision and strategy", "Allocate dedicated AI budget", "Form AI governance committee"]
    },
    {
      number: "02", 
      title: "Workforce Evolution",
      description: "90% of frontier firms report more opportunities for meaningful work with AI integration",
      actions: ["Implement AI training programs", "Redesign job roles", "Foster AI collaboration culture"]
    },
    {
      number: "03",
      title: "Operational Excellence", 
      description: "Achieve 15-20% operational improvements through systematic AI deployment",
      actions: ["Identify high-impact use cases", "Pilot AI solutions", "Scale successful implementations"]
    }
  ];

  const successMetrics = [
    { metric: "94%", description: "of C-suite executives agree responsible AI produces greater ROI" },
    { metric: "71%", description: "of employees at frontier firms say their company is thriving" },
    { metric: "15-20%", description: "operational improvements achieved by AI leaders" }
  ];

  return (
    <div className="py-32 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-extralight mb-8 text-black">
            CEO Guide
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Executive leadership in the age of AI transformation. Research-backed strategies for driving organization-wide AI adoption and competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {imperatives.map((imperative, index) => (
            <Card key={index} className="bg-gray-50 border-0 p-8 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="text-4xl font-extralight text-black mb-6">
                  {imperative.number}
                </div>
                <CardTitle className="text-2xl font-light text-black mb-4">
                  {imperative.title}
                </CardTitle>
                <p className="text-gray-600 font-light leading-relaxed">
                  {imperative.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 pt-4">
                  {imperative.actions.map((action, actionIndex) => (
                    <div key={actionIndex} className="flex items-start text-gray-700">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="font-light text-sm">{action}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-black border-0 p-12 mb-16">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl font-light text-white mb-6">
              AI Leadership Success Metrics
            </CardTitle>
            <p className="text-gray-300 text-lg font-light">
              Evidence from global research and frontier firms
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successMetrics.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-extralight text-white mb-4">{item.metric}</div>
                  <p className="text-gray-300 font-light leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <h3 className="text-3xl font-light text-black mb-8">Ready to Lead the AI Revolution?</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-light">
              Schedule CEO Strategy Session
            </Button>
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-light">
              Download Executive Playbook
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEOImperative;
