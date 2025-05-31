
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, Layers, TrendingUp, Building, Shield, Users, Eye } from 'lucide-react';

const AITrends = () => {
  const [activeCategory, setActiveCategory] = useState('evolution');

  const categories = [
    { id: 'evolution', label: 'AI Evolution', icon: <Bot className="h-4 w-4" /> },
    { id: 'implementation', label: 'Implementation', icon: <TrendingUp className="h-4 w-4" /> },
    { id: 'technology', label: 'Technology', icon: <Layers className="h-4 w-4" /> },
    { id: 'business', label: 'Business Models', icon: <Building className="h-4 w-4" /> },
    { id: 'governance', label: 'Governance', icon: <Shield className="h-4 w-4" /> },
    { id: 'organizational', label: 'Organizational', icon: <Users className="h-4 w-4" /> },
    { id: 'future', label: 'Future Outlook', icon: <Eye className="h-4 w-4" /> },
  ];

  const trendContent = {
    evolution: {
      title: "AI Evolution & Technological Advancement",
      trends: [
        {
          icon: "🤖",
          title: "From Rule-Based to Agentic AI",
          description: "Evolution from simple automation to autonomous, goal-oriented AI systems capable of independent decision-making and multi-agent collaboration.",
          details: [
            "Autonomous decision-making with limited human intervention",
            "Multi-agent orchestration systems with specialized task distribution",
            "Advanced autonomy with human-like reasoning capabilities",
            "Real-time interactions within ethical AI-controlled environments"
          ],
          impact: "$2.6-4.4 trillion annual contribution to global GDP by 2030",
          sources: "Agentic AI Executive Playbook (2024), WEF AI Leadership Toolkit (2022)"
        },
        {
          icon: "🔄",
          title: "Multimodal Integration Emergence",
          description: "AI systems processing and integrating multiple data types (text, images, audio, sensor data) for comprehensive understanding and decision-making.",
          details: [
            "Text, image, and audio processing in unified frameworks",
            "Enhanced user interactions through multiple input modalities",
            "Cross-modal learning and pattern recognition",
            "Contextual understanding across diverse data sources"
          ],
          impact: "Enhanced user experience and broader AI application scope",
          sources: "Agentic AI Executive Playbook (2024), Google Cloud AI Adoption Framework (2024)"
        }
      ]
    },
    implementation: {
      title: "Implementation & Adoption Patterns",
      trends: [
        {
          icon: "📈",
          title: "Three-Phase Maturity Evolution",
          description: "Organizations progressing through distinct AI maturity phases with specific characteristics and requirements.",
          details: [
            "Tactical (Current majority): Simple use cases, short-term focus, limited strategic alignment",
            "Strategic (Emerging leaders): Sustainable business value, multiple production systems, cross-functional teams",
            "Transformational (Top performers): AI-driven innovation, continuous experimentation, embedded expertise"
          ],
          impact: "Only 20-35% achieve meaningful value realization",
          sources: "Google Cloud AI Adoption Framework (2024), WEF AI Leadership Toolkit (2022), KALYM.ai Framework (2025)"
        }
      ]
    },
    technology: {
      title: "Technology Infrastructure Evolution",
      trends: [
        {
          icon: "☁️",
          title: "Cloud-First AI Architecture",
          description: "Cloud infrastructure becoming essential foundation for successful AI implementation and scaling.",
          details: [
            "72% of top AI performers have 'all-in' cloud adoption",
            "Only 33% of other companies achieve full cloud integration",
            "Serverless, scalable ML services becoming standard",
            "GPU/TPU access on-demand for complex model training"
          ],
          impact: "Cloud models: Public, hybrid, and multi-cloud strategies for different needs",
          sources: "PwC/Microsoft AI Deployment Playbook (2024), Google Cloud AI Adoption Framework (2024)"
        }
      ]
    },
    business: {
      title: "Business Model Innovation",
      trends: [
        {
          icon: "💼",
          title: "Service-as-Software Emergence",
          description: "Shift from traditional software licensing to outcome-based AI services that deliver specific business results.",
          details: [
            "Pay per resolution/outcome rather than user licenses",
            "AI agents handling specialized tasks autonomously",
            "Targeting service profit pools, not software seats",
            "High-touch, personalized delivery models"
          ],
          impact: "Examples: AI customer support, legal analysis, cybersecurity testing",
          sources: "Agentic AI Executive Playbook (2024)"
        }
      ]
    },
    governance: {
      title: "Governance & Responsible AI",
      trends: [
        {
          icon: "⚖️",
          title: "Regulatory Landscape Evolution",
          description: "Rapid development of AI-specific regulations and compliance requirements globally.",
          details: [
            "EU AI Act (2024): First comprehensive AI regulation",
            "Risk-based approach to AI system classification",
            "Transparency and explainability requirements",
            "60% of AI-using organizations already under legal scrutiny"
          ],
          impact: "CEO vs CISO Confidence Gap: 67% of CEOs vs 54% of CISOs confident in compliance",
          sources: "PwC/Microsoft AI Deployment Playbook (2024), WEF AI Leadership Toolkit (2022)"
        }
      ]
    },
    organizational: {
      title: "Organizational Transformation",
      trends: [
        {
          icon: "👥",
          title: "Workforce Evolution & Upskilling",
          description: "Fundamental changes in job roles, skills requirements, and human-AI collaboration models.",
          details: [
            "85 million jobs may be displaced by 2025",
            "97 million new AI-adapted roles may emerge",
            "14% wage premium for AI-skilled workers",
            "5x increase in labor productivity in AI-exposed business sectors"
          ],
          impact: "Focus: Job transformation rather than replacement, with emphasis on human-AI collaboration",
          sources: "WEF AI Leadership Toolkit (2022), Agentic AI Executive Playbook (2024)"
        }
      ]
    },
    future: {
      title: "Future Outlook & Projections",
      trends: [
        {
          icon: "📈",
          title: "Economic Impact Acceleration",
          description: "Exponential growth in AI's economic contribution across global markets and industries.",
          details: [
            "$15.7 trillion total AI economic impact by 2030",
            "$2.6-4.4 trillion annual GenAI contribution by 2030",
            "Companies fully absorbing AI could double cash flow by 2030",
            "Energy sector AI investment: $40B (2023) → $140B (2030)"
          ],
          impact: "Exponential economic transformation across all sectors",
          sources: "WEF AI Leadership Toolkit (2022), Agentic AI Executive Playbook (2024)"
        }
      ]
    }
  };

  return (
    <section className="py-20 px-6 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Trends & Future Directions
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Comprehensive analysis of key AI evolution patterns, implementation requirements, and strategic directions from leading research institutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="flex items-center space-x-2 transition-all duration-200"
              size="sm"
            >
              {category.icon}
              <span>{category.label}</span>
            </Button>
          ))}
        </div>

        <Card className="bg-white shadow-2xl border-0">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-semibold text-slate-800">
              {trendContent[activeCategory as keyof typeof trendContent].title}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {trendContent[activeCategory as keyof typeof trendContent].trends.map((trend, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500 bg-gradient-to-r from-slate-50 to-blue-50">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-blue-600 flex items-center">
                    <span className="text-2xl mr-3">{trend.icon}</span>
                    {trend.title}
                  </CardTitle>
                  <CardDescription className="text-base text-slate-700 leading-relaxed">
                    {trend.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Key Developments:</h4>
                      <ul className="space-y-2">
                        {trend.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start text-slate-700">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-blue-100 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800 mb-1">Economic Impact:</p>
                      <p className="text-blue-700">{trend.impact}</p>
                    </div>
                    
                    <div className="border-t pt-4">
                      <Badge variant="secondary" className="mb-2">Sources:</Badge>
                      <p className="text-sm text-slate-600">{trend.sources}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AITrends;
