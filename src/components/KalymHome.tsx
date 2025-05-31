
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Users, Zap, Shield, Globe } from 'lucide-react';

const KalymHome = () => {
  const claims = [
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      stat: "65-80%",
      title: "AI Value Realization Gap",
      description: "Only 35% realize value from AI and only 20% of analytic insights will deliver business outcomes",
      sources: ["KALYM.ai Business Model (Gartner, May 2025)", "WEF Empowering AI Leadership Toolkit (January 2022)"],
      color: "bg-white border-gray-200 hover:border-blue-200"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
      stat: "$15.7T",
      title: "Global GDP Impact",
      description: "AI expected to create $15.7 trillion GDP uplift globally by 2030",
      sources: ["WEF Empowering AI Leadership: AI C-Suite Toolkit (January 2022)"],
      color: "bg-white border-gray-200 hover:border-green-200"
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      stat: "73%",
      title: "GCC Leadership Vision",
      description: "73% of CEOs in the Middle East believe GenAI will significantly change value creation over the next three years",
      sources: ["Agentic AI - The New Frontier in GenAI Executive Playbook (2024)"],
      color: "bg-white border-gray-200 hover:border-purple-200"
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      stat: "2-5x",
      title: "Decision-Making Acceleration",
      description: "2x more data-driven decisions, 5x faster decision-making, and 3x faster execution with ML adoption",
      sources: ["Google Cloud's AI Adoption Framework (2024)"],
      color: "bg-white border-gray-200 hover:border-orange-200"
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      stat: "72%",
      title: "Cloud Adoption Success",
      description: "72% of 'Top Performers' achieved all-in cloud adoption vs 33% of other companies",
      sources: ["PwC and Microsoft AI Deployment Playbook (2024)"],
      color: "bg-white border-gray-200 hover:border-indigo-200"
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      stat: "94%",
      title: "Responsible AI ROI",
      description: "94% of C-suite executives agree that responsible AI will produce greater ROI for shareholders",
      sources: ["WEF Empowering AI Leadership: AI C-Suite Toolkit (January 2022)"],
      color: "bg-white border-gray-200 hover:border-teal-200"
    }
  ];

  return (
    <section id="home" className="py-32 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-black">
              Research-Backed
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Insights
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evidence-based insights from top-tier research institutions and global consulting firms
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {claims.map((claim, index) => (
            <Card key={index} className={`${claim.color} border-2 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                    {claim.icon}
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-4 text-black">
                  {claim.stat}
                </div>
                <CardTitle className="text-xl font-semibold text-black leading-tight">
                  {claim.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-gray-600 mb-6 leading-relaxed text-base">
                  {claim.description}
                </CardDescription>
                <div className="space-y-3">
                  <Badge variant="secondary" className="text-xs font-medium mb-3 bg-blue-50 text-blue-600 border-blue-200">
                    Research Sources
                  </Badge>
                  {claim.sources.map((source, sourceIndex) => (
                    <p key={sourceIndex} className="text-xs text-gray-500 leading-relaxed">
                      • {source}
                    </p>
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
