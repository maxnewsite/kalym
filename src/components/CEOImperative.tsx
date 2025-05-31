
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Zap, Target, Shield, Globe } from 'lucide-react';

const CEOImperative = () => {
  const imperatives = [
    {
      icon: <TrendingUp className="h-8 w-8 text-emerald-400" />,
      title: "AI-First Strategy",
      description: "Transform from AI-curious to AI-native. 73% of GCC CEOs believe GenAI will significantly change value creation in the next three years.",
      actions: ["Define AI vision and strategy", "Allocate dedicated AI budget", "Form AI governance committee"]
    },
    {
      icon: <Users className="h-8 w-8 text-cyan-400" />,
      title: "Workforce Evolution",
      description: "Prepare your workforce for the AI-augmented future. 90% of frontier firms report more opportunities for meaningful work.",
      actions: ["Implement AI training programs", "Redesign job roles", "Foster AI collaboration culture"]
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-400" />,
      title: "Operational Excellence",
      description: "Achieve 15-20% operational improvements through systematic AI deployment across core business processes.",
      actions: ["Identify high-impact use cases", "Pilot AI solutions", "Scale successful implementations"]
    }
  ];

  const successMetrics = [
    { metric: "94%", description: "of C-suite executives agree responsible AI produces greater ROI" },
    { metric: "71%", description: "of employees at frontier firms say their company is thriving" },
    { metric: "15-20%", description: "operational improvements achieved by AI leaders" }
  ];

  return (
    <div className="py-32 px-6 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-white">
              The CEO's AI
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Imperative
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Executive leadership in the age of AI transformation. Research-backed strategies for driving organization-wide AI adoption and competitive advantage.
          </p>
          <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-6 py-2 text-lg">
            WEF AI Leadership Toolkit • Fortune 500 Case Studies
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {imperatives.map((imperative, index) => (
            <Card key={index} className="bg-gray-900 border-gray-700 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full flex items-center justify-center">
                  {imperative.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-white mb-4">
                  {imperative.title}
                </CardTitle>
                <CardDescription className="text-gray-300 leading-relaxed text-base">
                  {imperative.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="text-emerald-400 font-semibold mb-4">Key Actions:</h4>
                  {imperative.actions.map((action, actionIndex) => (
                    <div key={actionIndex} className="flex items-start text-gray-300">
                      <span className="text-emerald-400 mr-3 mt-1">•</span>
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-emerald-600 to-cyan-600 border-0 shadow-2xl mb-16">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl font-bold text-white mb-6">
              AI Leadership Success Metrics
            </CardTitle>
            <CardDescription className="text-emerald-100 text-lg">
              Evidence from global research and frontier firms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successMetrics.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-white mb-4">{item.metric}</div>
                  <p className="text-emerald-100 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-8">Ready to Lead the AI Revolution?</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold rounded-full">
              Schedule CEO Strategy Session
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-emerald-400 px-8 py-4 text-lg rounded-full">
              Download Executive Playbook
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEOImperative;
