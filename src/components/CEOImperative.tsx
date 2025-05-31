
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Target, Zap, Shield, DollarSign, Users, Building2, ArrowRight } from 'lucide-react';

const CEOImperative = () => {
  const keyFindings = [
    {
      stat: "88%",
      description: "of executives believe AI will drive business model innovation",
      icon: <Building2 className="h-6 w-6 text-blue-600" />
    },
    {
      stat: "30%",
      description: "of organizations have successfully harnessed gen AI for hyper-personalization (expected to double by year-end)",
      icon: <Target className="h-6 w-6 text-emerald-600" />
    },
    {
      stat: "63%",
      description: "cite model cost as a top adoption barrier—yet those who optimize see outsized returns",
      icon: <DollarSign className="h-6 w-6 text-orange-600" />
    },
    {
      stat: "74%",
      description: "revenue growth advantage for 'innovation outperformers' leveraging AI ecosystems",
      icon: <TrendingUp className="h-6 w-6 text-purple-600" />
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            IBM CEO Guide to Generative AI - Second Edition (2024)
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Generative AI: The New Imperative for CEOs
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            The urgency is clear: Generative AI is pushing organizations to radically rethink business models and accelerate innovation. 
            CEOs must lead the AI transformation now, aligning use cases with strategic objectives rather than exploring AI applications broadly.
          </p>
        </div>

        {/* Key Findings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyFindings.map((finding, index) => (
            <Card key={index} className="bg-white border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-3">
                  {finding.icon}
                </div>
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  {finding.stat}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-slate-700 text-center leading-relaxed">
                  {finding.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Strategic Themes */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="text-3xl font-bold mb-8 text-center text-slate-800">Strategic AI Implementation Framework</h3>
          
          <Tabs defaultValue="innovation" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-8">
              <TabsTrigger value="innovation">Business Model Innovation</TabsTrigger>
              <TabsTrigger value="focus">Focus & Prioritization</TabsTrigger>
              <TabsTrigger value="operations">AI-Driven Operations</TabsTrigger>
              <TabsTrigger value="governance">Trust & Governance</TabsTrigger>
              <TabsTrigger value="cost">Cost & Scale</TabsTrigger>
              <TabsTrigger value="people">People & Ecosystems</TabsTrigger>
            </TabsList>

            <TabsContent value="innovation" className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-4 text-slate-800">Business Model Innovation</h4>
                  <p className="text-lg text-slate-600 mb-4">
                    How gen AI enables new markets, faster product cycles, and operational reinvention.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-slate-800">New Data Access</h5>
                      <p className="text-slate-600">Gen AI empowers access to previously untapped data sources for competitive advantage</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-slate-800">Rapid Insight Generation</h5>
                      <p className="text-slate-600">Transform raw data into actionable business intelligence at unprecedented speed</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-slate-800">Market Entry Acceleration</h5>
                      <p className="text-slate-600">Enter new markets faster with AI-powered market analysis and customer insights</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-slate-800">Product Development Speed</h5>
                      <p className="text-slate-600">Accelerate product and service development cycles through AI-assisted innovation</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="focus" className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Target className="h-8 w-8 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-4 text-slate-800">Focus & Prioritization</h4>
                  <p className="text-lg text-slate-600 mb-4">
                    Why CEOs must focus AI on their toughest problems, not chase every trend.
                  </p>
                  <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
                    <h5 className="font-semibold mb-3 text-slate-800">Strategic Success Formula</h5>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Success depends on focusing AI on the organization's biggest challenges</li>
                      <li>• Avoid spreading resources too thin across multiple AI initiatives</li>
                      <li>• Select and scale high-value use cases for ROI and competitive differentiation</li>
                      <li>• Align AI investments with core business objectives and strategic priorities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="operations" className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-4 text-slate-800">AI-Driven Operations</h4>
                  <p className="text-lg text-slate-600 mb-4">
                    Unlocking hyper-personalization, rapid ideation, and IT automation at scale.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-slate-800">Hyper-Personalization</h5>
                      <p className="text-slate-600">Deliver individualized experiences at scale through AI-powered customer insights</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-slate-800">Rapid Ideation</h5>
                      <p className="text-slate-600">Accelerate innovation cycles with AI-assisted brainstorming and concept development</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-slate-800">IT Automation</h5>
                      <p className="text-slate-600">Break away from legacy constraints with AI-powered infrastructure and operations</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="governance" className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Shield className="h-8 w-8 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-4 text-slate-800">Trust, Governance & Data</h4>
                  <p className="text-lg text-slate-600 mb-4">
                    Building platforms for responsible AI, ethical governance, and open innovation.
                  </p>
                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h5 className="font-semibold mb-3 text-slate-800">Board-Level Priorities</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-slate-600">
                        <li>• Responsible AI implementation frameworks</li>
                        <li>• Comprehensive data governance policies</li>
                        <li>• Ecosystem collaboration strategies</li>
                      </ul>
                      <ul className="space-y-2 text-slate-600">
                        <li>• Innovation and trust platform development</li>
                        <li>• Internal and external data integration</li>
                        <li>• Ethical AI decision-making processes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cost" className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <DollarSign className="h-8 w-8 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-4 text-slate-800">Cost & Scale Management</h4>
                  <p className="text-lg text-slate-600 mb-4">
                    Managing the compute surge—hybrid cloud, model selection, and FinOps discipline.
                  </p>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h5 className="font-semibold mb-3 text-slate-800">Strategic Cost Optimization</h5>
                    <div className="space-y-3">
                      <p className="text-slate-600">
                        <strong>Compute Cost Management:</strong> CEOs must set cost guardrails and optimize hybrid cloud usage for AI workloads
                      </p>
                      <p className="text-slate-600">
                        <strong>Model Selection Strategy:</strong> Balance large, general AI models with smaller, niche models for agility, cost control, and privacy
                      </p>
                      <p className="text-slate-600">
                        <strong>Infrastructure Investment:</strong> Invest in fit-for-purpose AI models that deliver specific business outcomes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="people" className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-cyan-100 p-3 rounded-full">
                  <Users className="h-8 w-8 text-cyan-600" />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-4 text-slate-800">People & Ecosystems</h4>
                  <p className="text-lg text-slate-600 mb-4">
                    Reskilling teams and leveraging partnerships for transformative results.
                  </p>
                  <div className="bg-cyan-50 p-6 rounded-lg">
                    <h5 className="font-semibold mb-3 text-slate-800">Human-AI Collaboration Framework</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h6 className="font-medium mb-2 text-slate-800">AI as Augmentation Tool</h6>
                        <ul className="space-y-1 text-slate-600">
                          <li>• AI augments, not replaces, human teams</li>
                          <li>• Upskilling and reskilling are essential</li>
                          <li>• Focus on human-AI collaboration models</li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-medium mb-2 text-slate-800">Democratization Strategy</h6>
                        <ul className="space-y-1 text-slate-600">
                          <li>• Democratize access to AI across organization</li>
                          <li>• Enable business and IT collaboration</li>
                          <li>• Foster innovation through accessibility</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Lead Your Industry with Generative AI?</h3>
          <p className="text-xl mb-6 opacity-90">
            Discover how our expertise can accelerate your AI transformation and deliver measurable business outcomes.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-6 text-lg">
            Schedule Strategic Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm mt-4 opacity-75">
            Based on IBM's The CEO's Guide to Generative AI – Second Edition (2024) and proprietary surveys of 10,000+ global C-suite leaders
          </p>
        </div>
      </div>
    </section>
  );
};

export default CEOImperative;
