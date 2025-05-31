
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Settings, 
  Brain, 
  Target, 
  TrendingUp, 
  ShoppingCart, 
  Heart, 
  Zap, 
  Monitor, 
  DollarSign, 
  Building,
  ChevronRight,
  Factory,
  Stethoscope,
  Cpu,
  Briefcase
} from 'lucide-react';

const StateOfAI = () => {
  const [activeIndustry, setActiveIndustry] = useState('consumer');

  const keyActions = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Invest in Culture and Leadership",
      description: "AI success starts with people, not just technology. High-performing organizations foster cross-team collaboration and invest in change management.",
      stats: "82% of employees believe working with AI enhances job performance and satisfaction",
      challenges: "Most companies don't yet train staff to use AI effectively or redesign jobs for AI-human collaboration."
    },
    {
      icon: <Settings className="h-8 w-8 text-green-600" />,
      title: "Transform Operations",
      description: "Redesign workflows, adopt rigorous MLOps, and implement robust risk/ethics controls to reap AI value.",
      stats: "Only 1/3 of organizations follow operational best practices consistently",
      challenges: "Those that do are more likely to see measurable business results including ROI tracking and bias management."
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      title: "Orchestrate Technology and Talent",
      description: "Blend internal skills with external solutions. Most firms acquire AI through partnerships, then invest in upskilling talent.",
      stats: "Success depends on aligning tech investments with the right people and incentives",
      challenges: "Building unique value requires combining pre-built tools with specialized internal expertise."
    },
    {
      icon: <Target className="h-8 w-8 text-orange-600" />,
      title: "Select Use Cases that Accelerate Value",
      description: "Start with achievable, high-impact projects to build momentum. Focus on industry-specific applications that drive efficiency and revenue.",
      stats: "Winning organizations pick the right use cases first",
      challenges: "Examples include predictive maintenance, AI-enabled personalization, and advanced analytics."
    }
  ];

  const industries = [
    {
      id: 'consumer',
      name: 'Consumer & Retail',
      icon: <ShoppingCart className="h-6 w-6" />,
      applications: ['AI-driven promotions', 'Value chain optimization', 'Customer behavior analytics', 'Inventory management']
    },
    {
      id: 'healthcare',
      name: 'Life Sciences & Healthcare',
      icon: <Heart className="h-6 w-6" />,
      applications: ['AI-assisted diagnosis', 'Patient engagement', 'Drug discovery acceleration', 'Cost reduction initiatives']
    },
    {
      id: 'energy',
      name: 'Energy & Industrials',
      icon: <Zap className="h-6 w-6" />,
      applications: ['Predictive maintenance', 'Safety optimization', 'Process automation', 'Resource allocation']
    },
    {
      id: 'tech',
      name: 'Tech & Media',
      icon: <Monitor className="h-6 w-6" />,
      applications: ['Content analytics', 'Customer insights', 'Personalized recommendations', 'Automated content creation']
    },
    {
      id: 'financial',
      name: 'Financial Services',
      icon: <DollarSign className="h-6 w-6" />,
      applications: ['Targeted marketing', 'Process automation', 'Risk assessment', 'Fraud detection']
    },
    {
      id: 'government',
      name: 'Government/Public Sector',
      icon: <Building className="h-6 w-6" />,
      applications: ['Resource allocation', 'Citizen services', 'Policy optimization', 'Public safety enhancement']
    }
  ];

  const barriers = [
    'Proving business value and ROI',
    'Lack of executive commitment',
    'Skills shortages and talent gaps',
    'Risk management and governance',
    'Data quality and accessibility',
    'Integration with legacy systems'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The State of AI in the Enterprise
          </h1>
          <p className="text-xl text-gray-700 mb-4 max-w-4xl mx-auto">
            AI has moved from hype to value—but only for those who lead with focus, discipline, and purpose.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">94%</div>
                <p className="text-gray-700">of business leaders say AI is critical to their organization's success over the next five years</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">2,620</div>
                <p className="text-gray-700">global leaders surveyed by Deloitte reveal four actions that translate AI investment into measurable value</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Big Picture */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-center">The Big Picture</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg mb-4">
                The "AI race" is no longer about technology adoption—it's about realizing real-world value, revenue, and new opportunities.
              </p>
              <p className="text-base opacity-90">
                A new era of "human-with-machine" collaboration is emerging; those who harness both see the biggest gains.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Four Key Actions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Four Key Actions Driving AI Value
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyActions.map((action, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    {action.icon}
                    <CardTitle className="text-xl">{action.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{action.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-green-800">{action.stats}</p>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <p className="text-sm text-orange-800">{action.challenges}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Industry Snapshots */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Industry Transformation Snapshots
          </h2>
          <Tabs value={activeIndustry} onValueChange={setActiveIndustry} className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
              {industries.map((industry) => (
                <TabsTrigger 
                  key={industry.id} 
                  value={industry.id}
                  className="flex flex-col items-center space-y-1 p-3"
                >
                  {industry.icon}
                  <span className="text-xs text-center">{industry.name.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {industries.map((industry) => (
              <TabsContent key={industry.id} value={industry.id}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      {industry.icon}
                      <span>{industry.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {industry.applications.map((app, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <ChevronRight className="h-4 w-4 text-blue-600" />
                          <span>{app}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Overcoming Challenges */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Overcoming Key Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="col-span-1 md:col-span-2">
              <CardHeader>
                <CardTitle>Biggest Barriers to AI Success</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {barriers.map((barrier, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <span>{barrier}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Success Factors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-full justify-center py-2">
                    Executive Buy-in
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-center py-2">
                    Ongoing Support
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-center py-2">
                    Risk Alignment
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-center py-2">
                    Business Strategy
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Key Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">82%</div>
                <p className="text-gray-700">see enhanced job satisfaction with AI collaboration</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">1/3</div>
                <p className="text-gray-700">of organizations follow AI operational best practices</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">94%</div>
                <p className="text-gray-700">believe AI is critical for future success</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Unlock AI Value?</CardTitle>
              <CardDescription className="text-white/90">
                Unlock the value of AI by leading with people, disciplined operations, and a focus on what really matters.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  Download Full Report
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-600">
                  Schedule Consultation
                </Button>
              </div>
              <p className="text-sm text-white/75 mt-4">
                Based on Deloitte's State of AI in the Enterprise, Fifth Edition (2022) - Survey of 2,620 global business leaders
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StateOfAI;
