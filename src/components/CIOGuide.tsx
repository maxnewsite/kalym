
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Zap, Target, Database, Bot } from 'lucide-react';

const CIOGuide = () => {
  const strategies = [
    {
      icon: <Target className="h-8 w-8 text-blue-400" />,
      title: "Partner for Cross-Functional AI Adoption",
      description: "Align C-suite and business units on shared AI vision with clear business KPIs",
      metrics: "82% of leaders see 2025 as pivotal for AI operations rethink"
    },
    {
      icon: <Database className="h-8 w-8 text-emerald-400" />,
      title: "Build Solid Data & Governance Foundation", 
      description: "Secure, accessible, governed data with proactive security and compliance",
      metrics: "Essential before deploying tools like Microsoft 365 Copilot"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-400" />,
      title: "Enable All Employees with AI",
      description: "Make AI accessible for everyone through secure, enterprise-ready solutions",
      metrics: "90% report more opportunities for meaningful work at frontier firms"
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-400" />,
      title: "Prioritize High-Impact Workflows",
      description: "Select AI projects addressing core challenges with measurable results",
      metrics: "Cross-functional AI council with clear ROI metrics"
    },
    {
      icon: <Bot className="h-8 w-8 text-cyan-400" />,
      title: "Expand with Intelligent Agents",
      description: "Move from assistants to advanced AI agents that automate complex tasks",
      metrics: "81% expect AI agents integration in next 12-18 months"
    },
    {
      icon: <Shield className="h-8 w-8 text-red-400" />,
      title: "Measure What Matters",
      description: "Track adoption and business impact using analytics and real-time adjustments",
      metrics: "Combine behavioral and sentiment data for full success picture"
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
    <div className="py-32 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Strategic CIO's Guide to
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Generative AI Transformation
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-12">
            Empowering CIOs with a roadmap for harnessing generative AI. Drive organization-wide value, agility, and competitive advantage with proven strategies and Microsoft's latest insights.
          </p>
          <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-6 py-2 text-lg">
            Microsoft CIO Generative AI Playbook 2025 • 31,000+ Workers Survey
          </Badge>
        </div>

        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-blue-500/20 mb-20">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold text-white mb-6">
              Lead with Vision: The CIO as AI Catalyst
            </CardTitle>
            <CardDescription className="text-gray-300 text-lg max-w-3xl mx-auto">
              By 2026, over 80% of enterprises will have integrated generative AI into production—up from less than 5% in 2023. The CIO's role is pivotal in setting the AI roadmap and ensuring safe, scalable adoption.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {frontierFirmStats.map((item, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                  <div className="text-4xl font-bold text-blue-400 mb-3">{item.stat}</div>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center text-white mb-12">The AI Success Playbook</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategies.map((strategy, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mb-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full flex items-center justify-center">
                    {strategy.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-white leading-tight">
                    {strategy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4 leading-relaxed">
                    {strategy.description}
                  </CardDescription>
                  <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-xs">
                    {strategy.metrics}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 shadow-2xl mb-16">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl font-bold text-white mb-6">
              Real-World Success Stories
            </CardTitle>
            <CardDescription className="text-blue-100 text-lg">
              Leading organizations achieving measurable AI transformation results
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white mb-2">{study.improvement}</div>
                  <div className="text-xl font-semibold text-blue-100 mb-3">{study.company}</div>
                  <p className="text-blue-200 text-sm leading-relaxed">{study.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            Is Your Organization Ready for the AI-First Future?
          </h3>
          <p className="text-xl text-gray-400 mb-12">
            The time to act is now. Partner with us to architect your AI transformation—securely, strategically, and at scale.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold rounded-full">
              Book Strategy Session
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-blue-400 px-8 py-4 text-lg rounded-full">
              Download Full CIO Playbook
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CIOGuide;
