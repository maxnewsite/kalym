
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Users, Zap, Shield, Globe } from 'lucide-react';

const ResearchClaims = () => {
  const claims = [
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      stat: "65-80%",
      title: "AI Value Realization Gap",
      description: "Only 35% realize value from AI and only 20% of analytic insights will deliver business outcomes",
      sources: ["KALYM.ai Business Model (Gartner, May 2025)", "WEF Empowering AI Leadership Toolkit (January 2022)"],
      color: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-emerald-600" />,
      stat: "$15.7T",
      title: "Global GDP Impact",
      description: "AI expected to create $15.7 trillion GDP uplift globally by 2030",
      sources: ["WEF Empowering AI Leadership: AI C-Suite Toolkit (January 2022)"],
      color: "bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200"
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      stat: "73%",
      title: "GCC Leadership Vision",
      description: "73% of CEOs in the Middle East believe GenAI will significantly change value creation over the next three years",
      sources: ["Agentic AI - The New Frontier in GenAI Executive Playbook (2024)"],
      color: "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200"
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      stat: "2-5x",
      title: "Decision-Making Acceleration",
      description: "2x more data-driven decisions, 5x faster decision-making, and 3x faster execution with ML adoption",
      sources: ["Google Cloud's AI Adoption Framework (2024)"],
      color: "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200"
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      stat: "72%",
      title: "Cloud Adoption Success",
      description: "72% of 'Top Performers' achieved all-in cloud adoption vs 33% of other companies",
      sources: ["PwC and Microsoft AI Deployment Playbook (2024)"],
      color: "bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200"
    },
    {
      icon: <Users className="h-8 w-8 text-cyan-600" />,
      stat: "94%",
      title: "Responsible AI ROI",
      description: "94% of C-suite executives agree that responsible AI will produce greater ROI for shareholders",
      sources: ["WEF Empowering AI Leadership: AI C-Suite Toolkit (January 2022)"],
      color: "bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Core AI Claims from Leading Research
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Evidence-based insights from top-tier research institutions and global consulting firms
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {claims.map((claim, index) => (
            <Card key={index} className={`${claim.color} border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {claim.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  {claim.stat}
                </div>
                <CardTitle className="text-xl font-semibold text-slate-800 leading-tight">
                  {claim.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-slate-700 mb-6 leading-relaxed text-base">
                  {claim.description}
                </CardDescription>
                <div className="space-y-2">
                  <Badge variant="secondary" className="text-xs font-medium mb-2">
                    Sources:
                  </Badge>
                  {claim.sources.map((source, sourceIndex) => (
                    <p key={sourceIndex} className="text-xs text-slate-600 leading-relaxed">
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

export default ResearchClaims;
