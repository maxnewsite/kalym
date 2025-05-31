
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Factory, Search, Rocket, Target, Globe, BarChart3 } from 'lucide-react';
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
      description: "Our team of 80-100 elite data scientists evaluate your AI solution's technical viability, scalability potential, and market readiness through rigorous technical due diligence."
    },
    {
      icon: <Search className="h-8 w-8 text-emerald-600" />,
      title: "Comprehensive KYC & Due Diligence",
      description: "Professional vetting process including business model validation, regulatory compliance assessment, and risk analysis aligned with GCC market standards."
    },
    {
      icon: <Rocket className="h-8 w-8 text-purple-600" />,
      title: "GCC Market Acceleration",
      description: "Leverage our regional expertise and network to position your AI solution across UAE, Saudi Arabia, and Qatar markets with proven go-to-market strategies."
    },
    {
      icon: <Target className="h-8 w-8 text-orange-600" />,
      title: "Strategic Consulting Integration",
      description: "Business transformation consulting to ensure your AI solution delivers measurable ROI and aligns with enterprise requirements across target sectors."
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
      title: "Networking & Distribution",
      description: "Access to our established network of enterprise clients, government entities, and strategic partners throughout the GCC ecosystem."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-cyan-600" />,
      title: "Outcome-Based Results",
      description: "Join the 12% who achieve AI success. Our lighthouse framework has delivered 15-20% operational improvements across multiple industry verticals."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Initial Submission & KYC",
      description: "Submit your AI use case through our comprehensive registration form. Complete KYC verification and preliminary due diligence."
    },
    {
      number: "2",
      title: "Technical Assessment",
      description: "Our AI Factory team conducts deep technical evaluation including scalability analysis, architecture review, and market readiness assessment."
    },
    {
      number: "3",
      title: "Strategic Alignment",
      description: "Business model validation, GCC market fit analysis, and regulatory compliance assessment with regional requirements."
    },
    {
      number: "4",
      title: "Market Activation",
      description: "Approved solutions enter our acceleration program with access to enterprise networks, consulting integration, and go-to-market support."
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
      description: "Your AI use case has been submitted for evaluation. Our team will review your submission and contact you within 48 hours.",
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
    <section className="py-20 px-6 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            KALYM.ai
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 mb-4">AI Orchestration Platform</p>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Submit your AI use case for comprehensive due diligence and GCC market activation
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white shadow-lg border-2 border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-slate-800">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-700 leading-relaxed text-sm">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Timeline */}
        <Card className="bg-gradient-to-r from-slate-50 to-blue-50 border-2 border-slate-200 shadow-xl mb-16">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl font-bold text-slate-800 mb-4">
              KALYM.ai Evaluation Process
            </CardTitle>
            <CardDescription className="text-lg text-slate-700">
              Comprehensive 4-stage assessment and activation framework
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                    {step.number}
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-md border border-slate-100">
                    <h4 className="text-xl font-semibold text-blue-600 mb-2">{step.title}</h4>
                    <p className="text-slate-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Registration Form */}
        <Card className="bg-white shadow-2xl border-0">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl font-bold text-slate-800 mb-4">
              Submit Your AI Use Case
            </CardTitle>
            <CardDescription className="text-lg text-slate-600">
              Complete this registration to begin the KALYM.ai evaluation process. All submissions undergo professional due diligence and KYC verification.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="text-xl font-semibold text-blue-600">Contact Information</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required
                      className="border-2 border-slate-200 focus:border-blue-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      required
                      className="border-2 border-slate-200 focus:border-blue-400"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="border-2 border-slate-200 focus:border-blue-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      className="border-2 border-slate-200 focus:border-blue-400"
                    />
                  </div>
                </div>
              </div>

              {/* Organization Information */}
              <div className="space-y-6">
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="text-xl font-semibold text-blue-600">Organization Information</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company/Organization Name *</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      required
                      className="border-2 border-slate-200 focus:border-blue-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Your Position/Title *</Label>
                    <Input
                      id="position"
                      value={formData.position}
                      onChange={(e) => handleInputChange('position', e.target.value)}
                      required
                      className="border-2 border-slate-200 focus:border-blue-400"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry Sector *</Label>
                  <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                    <SelectTrigger className="border-2 border-slate-200 focus:border-blue-400">
                      <SelectValue placeholder="Select Industry" />
                    </SelectTrigger>
                    <SelectContent>
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
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="text-xl font-semibold text-blue-600">AI Use Case Information</h3>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="useCaseTitle">AI Use Case Title *</Label>
                  <Input
                    id="useCaseTitle"
                    value={formData.useCaseTitle}
                    onChange={(e) => handleInputChange('useCaseTitle', e.target.value)}
                    required
                    placeholder="Brief, descriptive title for your AI solution"
                    className="border-2 border-slate-200 focus:border-blue-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="useCaseDescription">Detailed Use Case Description *</Label>
                  <Textarea
                    id="useCaseDescription"
                    value={formData.useCaseDescription}
                    onChange={(e) => handleInputChange('useCaseDescription', e.target.value)}
                    required
                    placeholder="Describe your AI solution, the problem it solves, target users, and expected business impact"
                    className="border-2 border-slate-200 focus:border-blue-400 min-h-[120px]"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="targetMarket">Target Market *</Label>
                    <Select value={formData.targetMarket} onValueChange={(value) => handleInputChange('targetMarket', value)}>
                      <SelectTrigger className="border-2 border-slate-200 focus:border-blue-400">
                        <SelectValue placeholder="Select Target Market" />
                      </SelectTrigger>
                      <SelectContent>
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
                    <Label htmlFor="currentStage">Current Development Stage *</Label>
                    <Select value={formData.currentStage} onValueChange={(value) => handleInputChange('currentStage', value)}>
                      <SelectTrigger className="border-2 border-slate-200 focus:border-blue-400">
                        <SelectValue placeholder="Select Current Stage" />
                      </SelectTrigger>
                      <SelectContent>
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
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Submit for Evaluation
                </Button>
                <p className="text-sm text-slate-600 mt-4">
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
