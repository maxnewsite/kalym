import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Factory, Search, Rocket, Target, Globe, BarChart3, ArrowRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const KalymPlatform = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    position: '',
    industry: '',
    useCaseTitle: '',
    useCaseDescription: '',
    targetMarket: '',
    currentStage: ''
  });

  const { toast } = useToast();

  const features = [
    {
      icon: <Factory className="h-8 w-8 text-blue-600" />,
      title: "AI Factory Assessment",
      description: "Elite data scientists evaluate your AI solution's technical viability, scalability potential, and market readiness."
    },
    {
      icon: <Search className="h-8 w-8 text-green-600" />,
      title: "KYC & Due Diligence",
      description: "Professional vetting process including business model validation and regulatory compliance assessment."
    },
    {
      icon: <Rocket className="h-8 w-8 text-purple-600" />,
      title: "GCC Market Acceleration",
      description: "Leverage regional expertise across UAE, Saudi Arabia, and Qatar markets with proven strategies."
    },
    {
      icon: <Target className="h-8 w-8 text-orange-600" />,
      title: "Strategic Integration",
      description: "Business transformation consulting to ensure measurable ROI and enterprise alignment."
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
      title: "Network & Distribution",
      description: "Access to established enterprise clients, government entities, and strategic partners."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-teal-600" />,
      title: "Outcome-Based Results",
      description: "Join the 12% who achieve AI success with 15-20% operational improvements."
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('KALYM Registration Submission:', formData);
    
    toast({
      title: "Registration Submitted Successfully",
      description: "Your AI use case has been submitted for evaluation. Our team will contact you within 48 hours.",
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      companyName: '',
      position: '',
      industry: '',
      useCaseTitle: '',
      useCaseDescription: '',
      targetMarket: '',
      currentStage: ''
    });
  };

  return (
    <section id="platform" className="py-32 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-black">
              AI Orchestration
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Platform
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Submit your AI use case for comprehensive evaluation and GCC market activation
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold text-black">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Registration Form */}
        <Card id="contact" className="bg-white border-gray-200 shadow-lg">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold text-black mb-4">
              Submit Your AI Use Case
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Begin the KALYM.ai evaluation process with professional due diligence and KYC verification
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-semibold text-blue-600">Contact Information</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-700">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required
                      className="bg-white border-gray-300 text-black focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-700">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      required
                      className="bg-white border-gray-300 text-black focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="bg-white border-gray-300 text-black focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      className="bg-white border-gray-300 text-black focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Organization Information */}
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-semibold text-blue-600">Organization Information</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-gray-700">Company Name *</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      required
                      className="bg-white border-gray-300 text-black focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position" className="text-gray-700">Position/Title *</Label>
                    <Input
                      id="position"
                      value={formData.position}
                      onChange={(e) => handleInputChange('position', e.target.value)}
                      required
                      className="bg-white border-gray-300 text-black focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="industry" className="text-gray-700">Industry Sector *</Label>
                  <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                    <SelectTrigger className="bg-white border-gray-300 text-black focus:border-blue-500">
                      <SelectValue placeholder="Select Industry" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-300">
                      <SelectItem value="energy-utilities">Energy & Utilities</SelectItem>
                      <SelectItem value="financial-services">Financial Services</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="retail-ecommerce">Retail & E-commerce</SelectItem>
                      <SelectItem value="government-public">Government & Public Sector</SelectItem>
                      <SelectItem value="telecommunications">Telecommunications</SelectItem>
                      <SelectItem value="transportation">Transportation & Logistics</SelectItem>
                      <SelectItem value="real-estate">Real Estate</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* AI Use Case Information */}
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-semibold text-blue-600">AI Use Case Information</h3>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="useCaseTitle" className="text-gray-700">AI Use Case Title *</Label>
                  <Input
                    id="useCaseTitle"
                    value={formData.useCaseTitle}
                    onChange={(e) => handleInputChange('useCaseTitle', e.target.value)}
                    required
                    placeholder="Brief, descriptive title for your AI solution"
                    className="bg-white border-gray-300 text-black focus:border-blue-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="useCaseDescription" className="text-gray-700">Detailed Description *</Label>
                  <Textarea
                    id="useCaseDescription"
                    value={formData.useCaseDescription}
                    onChange={(e) => handleInputChange('useCaseDescription', e.target.value)}
                    required
                    placeholder="Describe your AI solution, problem it solves, and expected business impact"
                    className="bg-white border-gray-300 text-black focus:border-blue-500 min-h-[120px]"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="targetMarket" className="text-gray-700">Target Market *</Label>
                    <Select value={formData.targetMarket} onValueChange={(value) => handleInputChange('targetMarket', value)}>
                      <SelectTrigger className="bg-white border-gray-300 text-black focus:border-blue-500">
                        <SelectValue placeholder="Select Target Market" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-gray-300">
                        <SelectItem value="uae">UAE</SelectItem>
                        <SelectItem value="saudi-arabia">Saudi Arabia</SelectItem>
                        <SelectItem value="qatar">Qatar</SelectItem>
                        <SelectItem value="kuwait">Kuwait</SelectItem>
                        <SelectItem value="bahrain">Bahrain</SelectItem>
                        <SelectItem value="oman">Oman</SelectItem>
                        <SelectItem value="gcc-wide">GCC-Wide</SelectItem>
                        <SelectItem value="global">Global with GCC focus</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentStage" className="text-gray-700">Development Stage *</Label>
                    <Select value={formData.currentStage} onValueChange={(value) => handleInputChange('currentStage', value)}>
                      <SelectTrigger className="bg-white border-gray-300 text-black focus:border-blue-500">
                        <SelectValue placeholder="Select Current Stage" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-gray-300">
                        <SelectItem value="concept">Concept/Ideation</SelectItem>
                        <SelectItem value="prototype">Prototype Development</SelectItem>
                        <SelectItem value="mvp">MVP/Beta Testing</SelectItem>
                        <SelectItem value="production">Production Ready</SelectItem>
                        <SelectItem value="deployed">Currently Deployed</SelectItem>
                        <SelectItem value="scaling">Scaling/Expansion</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="text-center pt-8">
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Submit for Evaluation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  Our team will review your submission and contact you within 48 hours
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default KalymPlatform;
