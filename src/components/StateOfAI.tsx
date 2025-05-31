
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Globe, Users, Zap, Target, Brain } from 'lucide-react';

const StateOfAI = () => {
  const globalTrends = [
    {
      icon: <TrendingUp className="h-8 w-8 text-emerald-400" />,
      stat: "$15.7T",
      title: "Global GDP Impact by 2030",
      description: "AI expected to contribute $15.7 trillion to global GDP by 2030, representing the largest economic transformation in history.",
      source: "PwC Global AI Study"
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-400" />,
      stat: "80%",
      title: "Enterprise AI Integration",
      description: "By 2026, over 80% of enterprises will have integrated generative AI into production, up from less than 5% in 2023.",
      source: "Gartner AI Hype Cycle"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-400" />,
      stat: "40%",
      title: "Workforce Transformation", 
      description: "40% of working hours could be augmented by AI, fundamentally changing how we work and create value.",
      source: "McKinsey Future of Work Institute"
    }
  ];

  const adoptionBarriers = [
    {
      barrier: "Data Quality & Governance",
      percentage: "68%",
      description: "Organizations struggle with data preparation and governance frameworks"
    },
    {
      barrier: "Skills & Talent Gap",
      percentage: "61%", 
      description: "Lack of AI expertise and change management capabilities"
    },
    {
      barrier: "Integration Complexity",
      percentage: "54%",
      description: "Difficulty integrating AI with existing systems and processes"
    },
    {
      barrier: "ROI Measurement",
      percentage: "47%",
      description: "Challenges in measuring and demonstrating AI business value"
    }
  ];

  const successFactors = [
    {
      icon: <Brain className="h-8 w-8 text-cyan-400" />,
      title: "AI-First Culture",
      description: "Organizations with strong AI culture see 3x faster adoption and 2x better outcomes.",
      impact: "3x faster"
    },
    {
      icon: <Target className="h-8 w-8 text-orange-400" />,
      title: "Clear Use Case Focus",
      description: "Companies focusing on specific, measurable use cases achieve 5x better ROI.",
      impact: "5x ROI"
    },
    {
      icon: <Zap className="h-8 w-8 text-green-400" />,
      title: "Agile Implementation",
      description: "Rapid prototyping and iterative development accelerate time-to-value by 60%.",
      impact: "60% faster"
    }
  ];

  const regionalInsights = [
    { region: "North America", adoption: "72%", leadership: "Enterprise AI deployment" },
    { region: "Europe", adoption: "58%", leadership: "AI governance & ethics" },
    { region: "Asia-Pacific", adoption: "81%", leadership: "Manufacturing & automation" },
    { region: "GCC Region", adoption: "67%", leadership: "Energy & smart cities" }
  ];

  return (
    <div className="py-32 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              State of AI
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Global Report 2025
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-12">
            Comprehensive analysis of AI adoption, challenges, and opportunities across industries and regions. Based on research from leading global institutions and 50,000+ organizations worldwide.
          </p>
          <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 px-6 py-2 text-lg">
            Global AI Research Coalition • McKinsey • PwC • Gartner • WEF
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {globalTrends.map((trend, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full flex items-center justify-center">
                  {trend.icon}
                </div>
                <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {trend.stat}
                </div>
                <CardTitle className="text-xl font-bold text-white leading-tight">
                  {trend.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-4 leading-relaxed">
                  {trend.description}
                </CardDescription>
                <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-xs">
                  {trend.source}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-red-500/20 mb-20">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl font-bold text-white mb-6">
              Top AI Adoption Barriers
            </CardTitle>
            <CardDescription className="text-gray-300 text-lg">
              Key challenges preventing organizations from achieving AI success
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {adoptionBarriers.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl border border-red-500/20">
                  <div className="text-3xl font-bold text-red-400 min-w-[80px]">{item.percentage}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{item.barrier}</h4>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center text-white mb-12">Critical Success Factors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successFactors.map((factor, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full flex items-center justify-center">
                    {factor.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-white leading-tight">
                    {factor.title}
                  </CardTitle>
                  <div className="text-2xl font-bold text-emerald-400 mt-2">{factor.impact}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 leading-relaxed text-center">
                    {factor.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 shadow-2xl mb-16">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl font-bold text-white mb-6">
              Regional AI Leadership
            </CardTitle>
            <CardDescription className="text-blue-100 text-lg">
              AI adoption rates and focus areas by region
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regionalInsights.map((region, index) => (
                <div key={index} className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white mb-2">{region.adoption}</div>
                  <div className="text-xl font-semibold text-blue-100 mb-3">{region.region}</div>
                  <p className="text-blue-200 text-sm">{region.leadership}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            Ready to Join the AI Leaders?
          </h3>
          <p className="text-xl text-gray-400 mb-12">
            Access the complete State of AI report with detailed insights, benchmarks, and actionable recommendations for your organization.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-full">
              Download Full Report
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-purple-400 px-8 py-4 text-lg rounded-full">
              Request Custom Analysis
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateOfAI;
