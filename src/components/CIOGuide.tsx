
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Brain, TrendingUp, Users, Shield, Zap, Target, CheckCircle } from 'lucide-react';

const CIOGuide = () => {
  const [activePlaybook, setActivePlaybook] = useState('vision');

  const playbookSections = [
    { id: 'vision', label: 'Lead with Vision', icon: Brain },
    { id: 'foundation', label: 'Build Foundation', icon: Shield },
    { id: 'enable', label: 'Enable Employees', icon: Users },
    { id: 'prioritize', label: 'Prioritize Use Cases', icon: Target },
    { id: 'agents', label: 'Expand with Agents', icon: Zap },
    { id: 'measure', label: 'Measure Impact', icon: TrendingUp },
  ];

  const frontierFirmStats = [
    { stat: '71%', label: 'of employees say their company is thriving' },
    { stat: '90%', label: 'report more opportunities for meaningful work' },
    { stat: '21%', label: 'fear AI will take their jobs (vs 38% average)' },
  ];

  const keyStats = [
    { stat: '80%', label: 'of enterprises will integrate AI by 2026', sublabel: 'up from <5% in 2023' },
    { stat: '82%', label: 'see 2025 as pivotal for AI transformation' },
    { stat: '81%', label: 'expect AI agents integrated in 12-18 months' },
    { stat: '18%', label: 'boost in IT satisfaction with AI agents' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 text-sm px-4 py-2">Microsoft CIO Playbook 2025</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            The Strategic CIO's Guide to 
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Generative AI Transformation
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
            Empower your organization with actionable strategies, leadership imperatives, and Microsoft's latest insights 
            to drive organization-wide value, agility, and competitive advantage with AI.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyStats.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">{item.stat}</div>
                <div className="font-medium text-slate-700 mb-1">{item.label}</div>
                {item.sublabel && (
                  <div className="text-sm text-slate-500">{item.sublabel}</div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI as Business Imperative */}
        <Card className="mb-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Lead with Vision: The CIO as AI Catalyst</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Generative AI is now a business imperative, not just an emerging technology. 
                The role of the CIO is pivotal in setting the AI roadmap and driving innovation across functions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {frontierFirmStats.map((item, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-lg rounded-lg p-6">
                  <div className="text-4xl font-bold mb-2">{item.stat}</div>
                  <div className="text-sm opacity-90">{item.label}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Badge variant="secondary" className="text-blue-600 bg-white">
                Frontier Firms: Early AI leaders seeing real business impact
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* The Playbook Navigation */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            The CIO AI Transformation Playbook
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {playbookSections.map((section) => {
              const Icon = section.icon;
              return (
                <Button
                  key={section.id}
                  variant={activePlaybook === section.id ? "default" : "outline"}
                  onClick={() => setActivePlaybook(section.id)}
                  className="flex items-center gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {section.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Playbook Content */}
        <div className="mb-16">
          {activePlaybook === 'vision' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-6 w-6 text-blue-600" />
                  Partner for Cross-Functional AI Adoption
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-3">Strategic Alignment</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        Align C-suite and business unit leaders on shared AI vision
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        Act as advisor and co-creator for AI-powered solutions
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        Link every AI investment to clear business KPIs
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-3">Value Measurement</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Revenue generation and growth</li>
                      <li>• Cost savings and efficiency gains</li>
                      <li>• Risk mitigation and compliance</li>
                      <li>• Employee productivity and satisfaction</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activePlaybook === 'foundation' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  Build a Solid Data & Governance Foundation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-3">Data Readiness</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Ensure data is secure, accessible, and governed</li>
                      <li>• Clean up content and audit access permissions</li>
                      <li>• Implement robust data quality controls</li>
                      <li>• Prepare for tools like Microsoft 365 Copilot</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-3">Security & Compliance</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Integrate security teams from day one</li>
                      <li>• Address ethical risks proactively</li>
                      <li>• Ensure regulatory compliance</li>
                      <li>• Implement continuous monitoring</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 font-medium">
                    Security and compliance are non-negotiable: Data must always be protected, 
                    usage audited, and regulatory requirements met.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {activePlaybook === 'enable' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-blue-600" />
                  Enable All Employees with AI
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 mb-4">
                  Make AI accessible and practical for everyone—not just tech teams.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">Accessibility</h4>
                    <p className="text-sm text-blue-600">Use Microsoft Copilot Chat as secure, enterprise-ready entry points</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-2">Upskilling</h4>
                    <p className="text-sm text-green-600">Provide structured AI training and experimentation opportunities</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-700 mb-2">Feedback</h4>
                    <p className="text-sm text-purple-600">Encourage ongoing feedback to optimize adoption and impact</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activePlaybook === 'prioritize' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-blue-600" />
                  Prioritize High-Impact Workflows and Use Cases
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-3">Selection Criteria</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Address core business challenges</li>
                      <li>• Deliver measurable results</li>
                      <li>• Start with achievable, high-impact projects</li>
                      <li>• Build momentum for larger initiatives</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-3">Focus Areas</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Automate routine processes</li>
                      <li>• Enhance decision-making</li>
                      <li>• Drive innovation in daily workflows</li>
                      <li>• Implement cross-functional AI council</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activePlaybook === 'agents' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-6 w-6 text-blue-600" />
                  Expand with Intelligent Agents
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 mb-4">
                  Move from simple assistants to advanced "AI agents" that automate, reason, and perform complex tasks.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-700 mb-3">Microsoft Success Case</h4>
                  <p className="text-slate-600 mb-2">
                    <strong>Employee Self-Service Agent:</strong>
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">18%</div>
                      <div className="text-sm text-slate-600">Boost in IT satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">Faster</div>
                      <div className="text-sm text-slate-600">HR response speed</div>
                    </div>
                  </div>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-slate-600 italic">
                    Begin with controlled, well-defined deployments and scale as governance, data, and adoption mature.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {activePlaybook === 'measure' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                  Measure What Matters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-3">Analytics Approach</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Track AI adoption using tools like Copilot's AI Adoption Score</li>
                      <li>• Monitor business impact metrics</li>
                      <li>• Combine behavioral and sentiment data</li>
                      <li>• Get full picture of success</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-3">Continuous Improvement</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Adjust strategy in real time</li>
                      <li>• Implement feedback loops</li>
                      <li>• Optimize for better outcomes</li>
                      <li>• Scale successful initiatives</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Future Vision */}
        <Card className="mb-16 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">The Frontier Firm: The Next Era of Work</h2>
            <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
              The future belongs to organizations that are "AI-first"—with hybrid teams of humans and agents, 
              rapid innovation, and continuous value generation.
            </p>
            <Badge variant="secondary" className="text-blue-600 bg-white">
              The CIO is the architect: Success requires vision, agility, and decisive leadership
            </Badge>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-4">
              Is your organization ready for the AI-first future?
            </h2>
            <p className="text-xl opacity-90 mb-6">
              The time to act is now. Partner with us to architect your AI transformation—securely, strategically, and at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-blue-600">
                Book a Strategy Session
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Download CIO AI Playbook
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              Based on Microsoft "CIO Generative AI Playbook" (2025) - Global survey of 31,000+ workers across 31 countries
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CIOGuide;
