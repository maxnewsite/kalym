
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Factory, Heart, DollarSign, ShoppingCart, Zap, Users } from 'lucide-react';

const IndustryShowcase = () => {
  const industries = [
    {
      icon: <Factory className="h-8 w-8 text-blue-600" />,
      title: "Manufacturing",
      stat: "20% Cost Reduction",
      company: "Siemens",
      description: "Predictive maintenance reducing costs by 20%, increasing production uptime by 15% through AI-powered sensor data analysis.",
      color: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200"
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Healthcare",
      stat: "30% Faster Diagnostics",
      company: "Mayo Clinic",
      description: "AI-assisted radiology reducing diagnostic times by 30% and unnecessary procedures by 15% through multimodal analysis.",
      color: "bg-gradient-to-br from-red-50 to-red-100 border-red-200"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-emerald-600" />,
      title: "Financial Services",
      stat: "360K Hours Saved",
      company: "JPMorgan Chase",
      description: "Contract Intelligence platform saving 360,000 hours annually in manual legal document review.",
      color: "bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200"
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-purple-600" />,
      title: "Retail & E-commerce",
      stat: "35% Sales Increase",
      company: "Amazon",
      description: "AI-driven personalization increasing sales by 35% and customer loyalty by 20% through recommendation systems.",
      color: "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200"
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      title: "Energy & Utilities",
      stat: "20% Cost Reduction",
      company: "BP",
      description: "AI analysis of seismic data reducing exploration costs by 20% and increasing successful drilling by 15%.",
      color: "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200"
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: "Human Resources",
      stat: "$1M Annual Savings",
      company: "Unilever",
      description: "AI-powered recruitment saving over $1 million annually and reducing hiring time by 75%.",
      color: "bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200"
    }
  ];

  const successMetrics = [
    { label: "Cost Reduction", value: "15-20% average" },
    { label: "Efficiency Gains", value: "15-30% improvement" },
    { label: "Time Savings", value: "25-75% reduction" },
    { label: "ROI Achievement", value: "276% maximum reported" }
  ];

  return (
    <section className="py-20 px-6 min-h-screen">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Industry Transformation Impact
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real-world results from leading organizations implementing AI across various sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <Card key={index} className={`${industry.color} border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {industry.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-slate-800 mb-2">
                  {industry.title}
                </CardTitle>
                <div className="text-3xl font-bold mb-3 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  {industry.stat}
                </div>
                <Badge variant="secondary" className="font-medium">
                  {industry.company}
                </Badge>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-slate-700 leading-relaxed text-base">
                  {industry.description}
                </CardDescription>
                <p className="text-xs text-slate-600 mt-4 italic">
                  Source: Agentic AI Executive Playbook (2024)
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-slate-50 to-blue-50 border-2 border-slate-200 shadow-xl">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl font-bold text-slate-800 mb-4">
              Cross-Industry Success Pattern
            </CardTitle>
            <CardDescription className="text-lg text-slate-700">
              Consistent 15-20% operational improvements across all sectors implementing comprehensive AI strategies.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {successMetrics.map((metric, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md border border-slate-100">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-slate-700 font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default IndustryShowcase;
