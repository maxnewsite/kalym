
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
    <div>
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
  );
};

export default UseCaseSubmissionForm;
