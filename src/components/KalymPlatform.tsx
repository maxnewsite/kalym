
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const KalymPlatform = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [useCaseTitle, setUseCaseTitle] = useState('');
  const [useCase, setUseCase] = useState('');
  const [industry, setIndustry] = useState('');
  const [targetMarket, setTargetMarket] = useState('');
  const [currentStage, setCurrentStage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phone || !company || !position || !useCaseTitle || !useCase || !industry || !targetMarket || !currentStage) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields."
      });
      return;
    }

    try {
      const { data, error } = await supabase
        .from('ai_use_case_submissions')
        .insert([
          {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
            company_name: company,
            position: position,
            use_case_title: useCaseTitle,
            use_case_description: useCase,
            industry: industry,
            target_market: targetMarket,
            current_stage: currentStage,
          },
        ]);

      if (error) {
        console.error('Error submitting use case:', error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to submit use case. Please try again."
        });
      } else {
        console.log('Use case submitted successfully:', data);
        setSubmitted(true);
        toast({
          title: "Success",
          description: "Your use case has been submitted successfully!",
        });
        // Clear form fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setCompany('');
        setPosition('');
        setUseCaseTitle('');
        setUseCase('');
        setIndustry('');
        setTargetMarket('');
        setCurrentStage('');
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred. Please try again later."
      });
    }
  };

  const coreCapabilities = [
    {
      title: "Scheduling & Optimization",
      description: "Asset and resource planning solutions that maximize operational efficiency"
    },
    {
      title: "Dynamic Pricing", 
      description: "Real-time market adjustments to optimize revenue and competitiveness"
    },
    {
      title: "AI-Driven Personalization",
      description: "Behavior-based experiences that increase engagement and conversion"
    },
    {
      title: "Fraud Detection",
      description: "Pattern recognition technology for enhanced financial protection"
    },
    {
      title: "RFP Generation",
      description: "Automated procurement processes that reduce administrative burden"
    },
    {
      title: "Predictive Maintenance", 
      description: "AI-powered equipment monitoring to prevent costly downtime"
    },
    {
      title: "Supply Chain Intelligence",
      description: "End-to-end logistics optimization for improved efficiency"
    },
    {
      title: "Compliance Automation",
      description: "Regulatory monitoring tailored specifically for GCC markets"
    }
  ];

  const sandboxSolutions = [
    "Secure, locally hosted, sovereign data storage and processing",
    "Proven AI use cases with enterprise-grade models and built-in safeguards", 
    "Continuous monitoring and transparency with explainable outputs",
    "Quantifiable business impact tracking and ROI measurement"
  ];

  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-extralight mb-8 text-black">
            Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            KALYM's 2025-2026 Offering focuses on eight core AI capabilities with quantified ROI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-3xl font-light text-black mb-12">Core AI Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreCapabilities.map((capability, index) => (
                <Card key={index} className="bg-gray-50 border-0 p-6 hover:shadow-md transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white text-sm font-light">{index + 1}</span>
                    </div>
                    <CardTitle className="text-lg font-medium text-black">
                      {capability.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm font-light leading-relaxed">
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-light text-black mb-12">The CIO's AI Adoption Dilemma</h3>
            <Card className="bg-blue-600 border-0 p-8 mb-8">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-light text-white mb-6">
                  KALYM's Sandbox Solution
                </CardTitle>
                <p className="text-blue-100 font-light leading-relaxed">
                  Addressing Critical Barriers Through the Sandbox Framework
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sandboxSolutions.map((solution, index) => (
                    <div key={index} className="flex items-start text-blue-100">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="font-light text-sm leading-relaxed">{solution}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <form onSubmit={handleSubmit} className="space-y-6">
              <h4 className="text-xl font-light text-black mb-6">Submit Your AI Use Case</h4>
              
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border-gray-300 font-light"
                />
                <Input 
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="border-gray-300 font-light"
                />
              </div>
              
              <Input 
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-gray-300 font-light"
              />
              
              <Input 
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border-gray-300 font-light"
              />
              
              <Input 
                type="text"
                placeholder="Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="border-gray-300 font-light"
              />
              
              <Input 
                type="text"
                placeholder="Position/Title"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="border-gray-300 font-light"
              />
              
              <Input 
                type="text"
                placeholder="Use Case Title"
                value={useCaseTitle}
                onChange={(e) => setUseCaseTitle(e.target.value)}
                className="border-gray-300 font-light"
              />
              
              <Textarea
                placeholder="Describe your AI use case in detail"
                rows={4}
                value={useCase}
                onChange={(e) => setUseCase(e.target.value)}
                className="border-gray-300 font-light"
              />
              
              <Select onValueChange={(value) => setIndustry(value)}>
                <SelectTrigger className="border-gray-300 font-light">
                  <SelectValue placeholder="Select Industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Energy">Energy</SelectItem>
                  <SelectItem value="Finance">Finance</SelectItem>
                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                  <SelectItem value="Government">Government</SelectItem>
                  <SelectItem value="Retail">Retail</SelectItem>
                  <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              
              <Select onValueChange={(value) => setTargetMarket(value)}>
                <SelectTrigger className="border-gray-300 font-light">
                  <SelectValue placeholder="Select Target Market" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="UAE">UAE</SelectItem>
                  <SelectItem value="Saudi Arabia">Saudi Arabia</SelectItem>
                  <SelectItem value="Qatar">Qatar</SelectItem>
                  <SelectItem value="Kuwait">Kuwait</SelectItem>
                  <SelectItem value="Bahrain">Bahrain</SelectItem>
                  <SelectItem value="Oman">Oman</SelectItem>
                  <SelectItem value="GCC-wide">GCC-wide</SelectItem>
                  <SelectItem value="MENA">MENA</SelectItem>
                </SelectContent>
              </Select>
              
              <Select onValueChange={(value) => setCurrentStage(value)}>
                <SelectTrigger className="border-gray-300 font-light">
                  <SelectValue placeholder="Current Stage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Ideation">Ideation</SelectItem>
                  <SelectItem value="Planning">Planning</SelectItem>
                  <SelectItem value="Prototype">Prototype</SelectItem>
                  <SelectItem value="Pilot">Pilot</SelectItem>
                  <SelectItem value="Production">Production</SelectItem>
                  <SelectItem value="Scaling">Scaling</SelectItem>
                </SelectContent>
              </Select>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-light py-3">
                Submit Use Case
              </Button>
            </form>
            
            {submitted && (
              <div className="mt-6 p-4 bg-blue-50 text-blue-600 font-light">
                Thank you for your submission!
              </div>
            )}
          </div>
        </div>

        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-50 border-0 p-8">
              <CardHeader>
                <CardTitle className="text-xl font-light text-black mb-4">
                  PUSH Model
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-light">
                  Proactive opportunity development with proven AI use cases
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-50 border-0 p-8">
              <CardHeader>
                <CardTitle className="text-xl font-light text-black mb-4">
                  PULL Model
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-light">
                  Client-driven requirements with tailored AI solutions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KalymPlatform;
