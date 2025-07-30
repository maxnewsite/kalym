
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const UseCaseSubmissionForm = () => {
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

  return (
    <div className="card-elegant p-8">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="text-center mb-8">
          <h4 className="text-2xl font-light text-foreground mb-2">Submit Your AI Use Case</h4>
          <p className="text-muted-foreground">Tell us about your AI vision and we'll help bring it to market</p>
        </div>
        
        {/* Personal Information */}
        <div className="space-y-6">
          <h5 className="text-lg font-medium text-foreground border-b border-border pb-2">Personal Information</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input 
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="h-12"
            />
            <Input 
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="h-12"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input 
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12"
            />
            <Input 
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="h-12"
            />
          </div>
        </div>

        {/* Company Information */}
        <div className="space-y-6">
          <h5 className="text-lg font-medium text-foreground border-b border-border pb-2">Company Information</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input 
              type="text"
              placeholder="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="h-12"
            />
            <Input 
              type="text"
              placeholder="Position/Title"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="h-12"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select onValueChange={(value) => setIndustry(value)}>
              <SelectTrigger className="h-12">
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
              <SelectTrigger className="h-12">
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
          </div>
        </div>

        {/* Use Case Details */}
        <div className="space-y-6">
          <h5 className="text-lg font-medium text-foreground border-b border-border pb-2">Use Case Details</h5>
          <Input 
            type="text"
            placeholder="Use Case Title"
            value={useCaseTitle}
            onChange={(e) => setUseCaseTitle(e.target.value)}
            className="h-12"
          />
          
          <Textarea
            placeholder="Describe your AI use case in detail - include the problem you're solving, expected outcomes, and any technical requirements"
            rows={6}
            value={useCase}
            onChange={(e) => setUseCase(e.target.value)}
          />
          
          <Select onValueChange={(value) => setCurrentStage(value)}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Current Development Stage" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Ideation">Ideation - Just an idea</SelectItem>
              <SelectItem value="Planning">Planning - Developing strategy</SelectItem>
              <SelectItem value="Prototype">Prototype - Building MVP</SelectItem>
              <SelectItem value="Pilot">Pilot - Testing with users</SelectItem>
              <SelectItem value="Production">Production - Live solution</SelectItem>
              <SelectItem value="Scaling">Scaling - Growing user base</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button className="w-full btn-primary h-12 text-lg">
          Submit Use Case
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </form>
      
      {submitted && (
        <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-xl">✓</span>
          </div>
          <h5 className="text-lg font-medium text-foreground mb-2">Thank you for your submission!</h5>
          <p className="text-muted-foreground">We'll review your use case and get back to you within 72 hours.</p>
        </div>
      )}
    </div>
  );
};

export default UseCaseSubmissionForm;
