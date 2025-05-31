
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';

const AIAssessment = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{level: string, description: string, recommendations: string[]} | null>(null);

  const questions = [
    {
      id: 'learn',
      title: 'Learning & Talent Development',
      options: [
        { value: '1', label: 'Ad-hoc self-motivated learning using online resources' },
        { value: '2', label: 'Organized training programs with strategic partners' },
        { value: '3', label: 'Embedded learning with industry expertise and innovation focus' }
      ]
    },
    {
      id: 'lead',
      title: 'Executive Leadership & Sponsorship',
      options: [
        { value: '1', label: 'Individual contributor driven with limited executive support' },
        { value: '2', label: 'Senior executive sponsorship with dedicated C-level budget' },
        { value: '3', label: 'Function-specific teams with domain expertise and research focus' }
      ]
    },
    {
      id: 'access',
      title: 'Data Access & Management',
      options: [
        { value: '1', label: 'Isolated data islands with no asset sharing' },
        { value: '2', label: 'Centralized data lake with unified data model' },
        { value: '3', label: 'Standardized ML feature stores with organization-wide contributions' }
      ]
    },
    {
      id: 'scale',
      title: 'Cloud & Scaling Capabilities',
      options: [
        { value: '1', label: 'Dedicated hardware with limited datasets' },
        { value: '2', label: 'Fully managed serverless ML services for training and prediction' },
        { value: '3', label: 'Integrated ML platform with specialized accelerators (GPUs, TPUs)' }
      ]
    },
    {
      id: 'secure',
      title: 'Security & Governance',
      options: [
        { value: '1', label: 'Basic primitive roles with manual security processes' },
        { value: '2', label: 'Granular roles with AI principles verification' },
        { value: '3', label: 'Comprehensive threat profiles with continuous monitoring' }
      ]
    },
    {
      id: 'automate',
      title: 'Automation & Production',
      options: [
        { value: '1', label: 'Manual processes with ad-hoc model updates' },
        { value: '2', label: 'Automated data pipelines with continuous training' },
        { value: '3', label: 'MLOps with continuous integration, delivery, and monitoring' }
      ]
    }
  ];

  const calculateAssessment = () => {
    const totalScore = Object.values(answers).reduce((sum, value) => sum + parseInt(value), 0);
    const avgScore = totalScore / Object.keys(answers).length;

    let level, description, recommendations;

    if (avgScore <= 1.5) {
      level = "Tactical AI Maturity";
      description = "Your organization is in the early stages of AI adoption with tactical implementations and limited strategic alignment.";
      recommendations = [
        "Establish executive sponsorship and dedicated AI budget",
        "Develop comprehensive data strategy and governance",
        "Invest in cloud infrastructure and ML platforms",
        "Create formal AI training and upskilling programs"
      ];
    } else if (avgScore <= 2.5) {
      level = "Strategic AI Maturity";
      description = "Your organization has made significant progress with strategic AI initiatives and cross-functional collaboration.";
      recommendations = [
        "Scale successful AI use cases across the organization",
        "Implement advanced MLOps and automation practices",
        "Enhance security and compliance frameworks",
        "Build AI centers of excellence"
      ];
    } else {
      level = "Transformational AI Maturity";
      description = "Your organization is an AI leader with embedded expertise, continuous innovation, and transformational capabilities.";
      recommendations = [
        "Focus on breakthrough AI innovations and research",
        "Develop industry-specific AI solutions",
        "Create AI partnership ecosystems",
        "Lead responsible AI practices and standards"
      ];
    }

    setResult({ level, description, recommendations });
  };

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const isComplete = Object.keys(answers).length === questions.length;

  return (
    <section className="py-20 px-6 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Readiness Assessment
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Based on Google Cloud's AI Adoption Framework and WEF guidelines, assess your organization's AI maturity across six critical dimensions.
          </p>
        </div>

        <Card className="bg-white shadow-2xl border-0">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl font-semibold text-slate-800">
              Six-Dimension AI Maturity Framework
            </CardTitle>
            <CardDescription className="text-lg text-slate-600">
              Evaluate your organization across the key pillars of AI success
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {questions.map((question, index) => (
              <Card key={question.id} className="border-2 border-slate-100 hover:border-blue-200 transition-all duration-200">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold text-blue-600 flex items-center">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                      {index + 1}
                    </span>
                    {question.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup 
                    value={answers[question.id] || ''} 
                    onValueChange={(value) => handleAnswerChange(question.id, value)}
                    className="space-y-4"
                  >
                    {question.options.map((option) => (
                      <div key={option.value} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                        <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} className="mt-1" />
                        <Label 
                          htmlFor={`${question.id}-${option.value}`} 
                          className="flex-1 text-slate-700 leading-relaxed cursor-pointer"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>
            ))}

            <div className="text-center pt-8">
              <Button 
                onClick={calculateAssessment}
                disabled={!isComplete}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                {isComplete ? (
                  <>
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Assess My AI Maturity
                  </>
                ) : (
                  <>
                    <AlertCircle className="mr-2 h-5 w-5" />
                    Complete All Questions ({Object.keys(answers).length}/{questions.length})
                  </>
                )}
              </Button>
            </div>

            {result && (
              <Card className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white border-0 shadow-2xl">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <TrendingUp className="h-12 w-12" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{result.level}</CardTitle>
                  <CardDescription className="text-emerald-100 text-lg">
                    {result.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="text-xl font-semibold mb-4">Recommended Next Steps:</h4>
                  <ul className="space-y-3">
                    {result.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-emerald-200" />
                        <span className="text-emerald-50">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AIAssessment;
