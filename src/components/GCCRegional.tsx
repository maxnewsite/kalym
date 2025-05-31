
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Zap, DollarSign, Users, TrendingUp, Globe } from 'lucide-react';

const GCCRegional = () => {
  const stats = [
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      number: "73%",
      description: "of GCC CEOs believe AI will transform value creation in next 3 years"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-emerald-600" />,
      number: "$140B",
      description: "Expected AI investment in energy sector by end of decade"
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      number: "$12B",
      description: "Foreign investment attracted by Singapore's AI initiatives"
    }
  ];

  const sectors = [
    {
      icon: <Building className="h-8 w-8 text-blue-600" />,
      title: "Public Sector",
      applications: [
        "Smart city infrastructure optimization",
        "Automated government service delivery",
        "Citizen engagement platforms",
        "Traffic and urban planning"
      ],
      color: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200"
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      title: "Energy & Utilities",
      applications: [
        "Smart grid optimization with renewables",
        "Predictive maintenance systems",
        "Capital allocation optimization",
        "Customer service automation"
      ],
      color: "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-emerald-600" />,
      title: "Financial Services",
      applications: [
        "Fraud detection and prevention",
        "Regulatory compliance automation",
        "Customer personalization",
        "Risk assessment optimization"
      ],
      color: "bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200"
    }
  ];

  const successFactors = [
    {
      icon: "🚀",
      title: "Speed of Implementation",
      description: "1-month to results, 5-7 week complete transformation cycles"
    },
    {
      icon: "🎯",
      title: "Local Expertise",
      description: "Built in the Middle East, for the Middle East with cultural understanding"
    },
    {
      icon: "📊",
      title: "Measurable ROI",
      description: "Clear outcome focus with proven 15-20% efficiency gains"
    }
  ];

  return (
    <section className="py-20 px-6 min-h-screen">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            GCC AI Leadership & Opportunities
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            The Gulf Cooperation Council is positioning itself as a global leader in AI adoption and implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-white shadow-lg border-2 border-slate-100 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-3">
                  {stat.number}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-white shadow-xl border-0 mb-16">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl font-bold text-slate-800 mb-4">
              Key GCC AI Implementation Areas
            </CardTitle>
            <CardDescription className="text-lg text-slate-600">
              Strategic sectors driving AI transformation across the region
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {sectors.map((sector, index) => (
                <Card key={index} className={`${sector.color} border-2 hover:shadow-lg transition-all duration-300`}>
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      {sector.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-slate-800">
                      {sector.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {sector.applications.map((app, appIndex) => (
                        <li key={appIndex} className="flex items-start text-slate-700">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white border-0 shadow-2xl">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl font-bold mb-4">
              Regional Success Factors
            </CardTitle>
            <CardDescription className="text-blue-100 text-lg">
              What makes AI implementation successful in the GCC region
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {successFactors.map((factor, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{factor.icon}</div>
                  <h4 className="text-xl font-semibold mb-3">{factor.title}</h4>
                  <p className="text-blue-100 leading-relaxed">{factor.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GCCRegional;
