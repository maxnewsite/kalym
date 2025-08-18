
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Globe, Users } from 'lucide-react';

const StateOfAI = () => {
  const globalTrends = [
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      stat: "$15.7T",
      title: "Global GDP Impact by 2030",
      description: "AI expected to contribute $15.7 trillion to global GDP by 2030, representing the largest economic transformation in history.",
      source: "PwC Global AI Study"
    },
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      stat: "80%",
      title: "Enterprise AI Integration",
      description: "By 2026, over 80% of enterprises will have integrated generative AI into production, up from less than 5% in 2023.",
      source: "Gartner AI Hype Cycle"
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
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
      title: "AI-First Culture",
      description: "Organizations with strong AI culture see 3x faster adoption and 2x better outcomes.",
      impact: "3x faster"
    },
    {
      title: "Clear Use Case Focus",
      description: "Companies focusing on specific, measurable use cases achieve 5x better ROI.",
      impact: "5x ROI"
    },
    {
      title: "Agile Implementation",
      description: "Rapid prototyping and iterative development accelerate time-to-value by 60%.",
      impact: "60% faster"
    }
  ];

  const aiUseCases = [
    {
      company: "Amazon",
      description: "GenAI Customer Stories",
      count: "280+",
      url: "https://aws.amazon.com/ai/generative-ai/customers/"
    },
    {
      company: "Capgemini",
      description: "Harnessing GenAI Potential",
      count: "54",
      url: "https://www.capgemini.com/insights/research-library/harnessing-the-value-of-generative-ai/"
    },
    {
      company: "Deloitte",
      description: "GenAI Dossier",
      count: "73",
      url: "https://www2.deloitte.com/us/en/pages/consulting/articles/generative-ai-dossier.html"
    },
    {
      company: "EY",
      description: "AI Use Cases Suite",
      count: "15",
      url: "https://www.ey.com/en_gl/services/ai/use-cases"
    },
    {
      company: "Google",
      description: "GenAI Use Cases",
      count: "601",
      url: "https://cloud.google.com/solutions/generative-ai"
    },
    {
      company: "IBM",
      description: "Most Valuable AI Use Cases",
      count: "27",
      url: "https://www.ibm.com/cloud/learn/ai-use-cases"
    },
    {
      company: "Intel",
      description: "AI Across Industries",
      count: "35",
      url: "https://www.intel.com/content/www/us/en/artificial-intelligence/overview.html"
    },
    {
      company: "McKinsey",
      description: "GenAI in TMT",
      count: "63+",
      url: "https://www.mckinsey.com/featured-insights/artificial-intelligence/"
    },
    {
      company: "Microsoft",
      description: "AI Customer Stories",
      count: "700+",
      url: "https://customers.microsoft.com/en-us/home/story/"
    },
    {
      company: "Oracle",
      description: "GenAI for Enterprise Apps",
      count: "17",
      url: "https://www.oracle.com/artificial-intelligence/"
    },
    {
      company: "PwC",
      description: "Applied AI Compass",
      count: "200+",
      url: "https://www.pwc.com/gx/en/issues/analytics/assets/global-ai-study.pdf"
    },
    {
      company: "SAP",
      description: "AI Use Cases by Department",
      count: "200",
      url: "https://www.sap.com/products/artificial-intelligence/use-cases.html"
    }
  ];

  return (
    <div className="py-32 px-6" style={{ backgroundColor: '#E3C999' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-extralight mb-8 text-brand-900">
            State of AI
          </h2>
          <h3 className="text-4xl font-light text-brand-700 mb-8">
            Global Report 2025
          </h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto font-light leading-relaxed mb-8">
            Comprehensive analysis of AI adoption, challenges, and opportunities across industries and regions. Based on research from leading global institutions and 50,000+ organizations worldwide.
          </p>
          <div className="inline-block px-8 py-3 border border-brand-300 text-brand-700 text-sm font-light rounded-full">
            Global AI Research Coalition • McKinsey • PwC • Gartner • WEF
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {globalTrends.map((trend, index) => (
            <Card key={index} className="bg-white border-brand-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 mx-auto mb-6 bg-brand-500 rounded-full flex items-center justify-center">
                  {trend.icon}
                </div>
                <div className="text-5xl font-extralight mb-4 text-brand-600">
                  {trend.stat}
                </div>
                <CardTitle className="text-lg font-light text-gray-800 leading-tight">
                  {trend.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 font-light leading-relaxed text-center">
                  {trend.description}
                </CardDescription>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-brand-50 text-brand-600 text-xs font-light rounded">
                    {trend.source}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-20">
          <h3 className="text-4xl font-light text-center text-brand-900 mb-12">Top AI Adoption Barriers</h3>
          <p className="text-center text-gray-700 mb-12 font-light">
            Key challenges preventing organizations from achieving AI success
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {adoptionBarriers.map((item, index) => (
              <div key={index} className="flex items-center space-x-6 p-8 bg-white border border-brand-200 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-extralight text-red-500 min-w-[80px]">{item.percentage}</div>
                <div>
                  <h4 className="text-lg font-light text-gray-800 mb-2">{item.barrier}</h4>
                  <p className="text-gray-600 text-sm font-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-4xl font-light text-center text-brand-900 mb-12">Critical Success Factors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successFactors.map((factor, index) => (
              <Card key={index} className="bg-white border-brand-200 hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-lg font-light text-gray-800 leading-tight mb-4">
                    {factor.title}
                  </CardTitle>
                  <div className="text-3xl font-extralight text-green-500">{factor.impact}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 font-light leading-relaxed text-center">
                    {factor.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-4xl font-light text-center text-brand-900 mb-12">Leading AI Use Cases Resources</h3>
          <p className="text-center text-gray-700 mb-12 font-light">
            Comprehensive collections of real-world AI implementations from industry leaders
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiUseCases.map((useCase, index) => (
              <a 
                key={index}
                href={useCase.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-white border border-brand-200 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-light text-gray-800 group-hover:text-brand-600 transition-colors">
                    {useCase.company}
                  </h4>
                  <span className="text-2xl font-extralight text-brand-600">
                    {useCase.count}
                  </span>
                </div>
                <p className="text-gray-600 text-sm font-light mb-3">
                  {useCase.description}
                </p>
                <div className="text-xs text-brand-500 font-light opacity-70 group-hover:opacity-100 transition-opacity">
                  View Collection →
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-light text-brand-900 mb-8">
            Ready to Join the AI Leaders?
          </h3>
          <p className="text-lg text-gray-700 mb-12 font-light">
            Access comprehensive insights and actionable recommendations for AI transformation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StateOfAI;
