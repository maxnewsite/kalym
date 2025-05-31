import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Brain, Zap, Target, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const KalymPlatform = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [useCase, setUseCase] = useState('');
  const [industry, setIndustry] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !company || !useCase || !industry) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields."
      });
      return;
    }

    try {
      const { data, error } = await supabase
        .from('use_cases')
        .insert([
          {
            name: name,
            email: email,
            company: company,
            use_case: useCase,
            industry: industry,
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
        setName('');
        setEmail('');
        setCompany('');
        setUseCase('');
        setIndustry('');
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

  return (
    <section id="contact" className="py-32 px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-black">Your AI</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Use Case
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Submit your AI vision and join the 12% who achieve measurable success. KALYM.org transforms your ideas into market-ready solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Platform Showcase */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">AI Visionaries</h3>
                <p className="text-gray-600">Share your transformative AI ideas.</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Elite Data Scientists</h3>
                <p className="text-gray-600">80-100 experts evaluate technical viability.</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">GCC Market Activation</h3>
                <p className="text-gray-600">Solutions aligned with regional demands.</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Measurable Success</h3>
                <p className="text-gray-600">Achieve 15-20% operational improvements.</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Partnership</h3>
                <p className="text-gray-600">Go-to-market strategy and implementation timeline.</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">KYC & Compliance</h3>
                <p className="text-gray-600">Professional vetting with regulatory compliance aligned to GCC standards</p>
              </div>
            </div>
          </div>

          {/* Submission Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input 
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <Input 
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <Input 
                  type="text"
                  placeholder="Company Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Describe your AI use case"
                  rows={4}
                  value={useCase}
                  onChange={(e) => setUseCase(e.target.value)}
                />
              </div>
              <div>
                <Select onValueChange={(value) => setIndustry(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Energy">Energy</SelectItem>
                    <SelectItem value="Finance">Finance</SelectItem>
                    <SelectItem value="Healthcare">Healthcare</SelectItem>
                    <SelectItem value="Government">Government</SelectItem>
                    <SelectItem value="Retail">Retail</SelectItem>
                    <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Submit Use Case
              </Button>
            </form>
            {submitted && (
              <div className="mt-4 text-green-600">
                Thank you for your submission!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KalymPlatform;
