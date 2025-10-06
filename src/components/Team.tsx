
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User, Brain, Database, Lightbulb, Settings, Target, TrendingUp, Cog, Linkedin } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Massimiliano Masi",
      position: "CEO/Founder",
      company: "KALYM.me",
      location: "United Arab Emirates",
      image: "/lovable-uploads/b7e41af5-8cfb-4cae-9326-42ec28ff0aa6.png",
      initials: "MM",
      icon: User,
      linkedin: "https://linkedin.com/in/massimiliano-masi-4265ab"
    },
    {
      name: "Amira Al-Hassan",
      position: "Chief Technology Officer",
      company: "TechVision Solutions",
      location: "Saudi Arabia",
      image: null,
      initials: "AH",
      icon: Settings
    },
    {
      name: "Omar Khalil",
      position: "VP of Data Science",
      company: "DataCorp Analytics",
      location: "Qatar",
      image: null,
      initials: "OK",
      icon: Database
    },
    {
      name: "Layla Rahman",
      position: "Head of AI Research",
      company: "Innovation Labs",
      location: "Kuwait",
      image: null,
      initials: "LR",
      icon: Brain
    }
  ];

  return (
    <div className="py-32 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <div className="inline-block bg-brand-500 text-white px-12 py-6 rounded-full text-3xl font-bold mb-12">
            Coming Soon
          </div>
          <h2 className="text-6xl md:text-7xl font-extralight mb-8 text-brand-900">
            Meet Our
          </h2>
          <h3 className="text-4xl font-light text-brand-700 mb-8">
            Expert Team
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Leading AI transformation across the GCC region with world-class expertise in data science, technology leadership, and strategic innovation.
          </p>
          <div className="inline-block px-8 py-3 border border-brand-500 text-brand-700 text-sm font-light rounded-full">
            Elite Data Scientists • Technology Leaders • Strategic Advisors
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-white border-gray-200 hover:bg-gray-50 transition-all duration-300 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  {member.image ? (
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      <AvatarImage src={member.image} alt={member.name} className="object-cover object-center" />
                      <AvatarFallback className="bg-gray-100 text-gray-700 text-lg font-light">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                  ) : (
                    <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                      <member.icon className="w-10 h-10 text-brand-500" />
                    </div>
                  )}
                  {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute top-2 right-2 bg-brand-500 hover:bg-brand-700 p-1.5 rounded-full transition-colors duration-200"
                    >
                      <Linkedin className="w-3 h-3 text-white" />
                    </a>
                  )}
                </div>
                
                <h3 className="text-lg font-light text-brand-900 mb-2">
                  {member.name}
                </h3>
                
                <p className="text-brand-500 font-light mb-1 text-sm">
                  {member.position}
                </p>
                
                <p className="text-gray-600 mb-3 text-sm font-light">
                  {member.company}
                </p>
                
                <span className="inline-block px-3 py-1 border border-gray-300 text-gray-600 text-xs font-light rounded">
                  {member.location}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20">
          <h3 className="text-3xl font-light text-brand-900 mb-6">
            Ready to Transform Your Organization?
          </h3>
          <p className="text-lg text-gray-700 mb-8 font-light">
            Connect with our team of experts to drive AI excellence in your enterprise
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
