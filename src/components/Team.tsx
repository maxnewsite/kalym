
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Team = () => {
  const teamMembers = [
    {
      name: "Massimiliano Masi",
      position: "CEO/Founder",
      company: "KALYM.org",
      location: "United Arab Emirates",
      image: "/placeholder.svg",
      initials: "MM"
    },
    {
      name: "Amira Al-Hassan",
      position: "Chief Technology Officer",
      company: "TechVision Solutions",
      location: "Saudi Arabia",
      image: "/placeholder.svg",
      initials: "AH"
    },
    {
      name: "Omar Khalil",
      position: "VP of Data Science",
      company: "DataCorp Analytics",
      location: "Qatar",
      image: "/placeholder.svg",
      initials: "OK"
    },
    {
      name: "Layla Rahman",
      position: "Head of AI Research",
      company: "Innovation Labs",
      location: "Kuwait",
      image: "/placeholder.svg",
      initials: "LR"
    },
    {
      name: "Hassan Al-Mahmoud",
      position: "Director of Engineering",
      company: "CloudTech Systems",
      location: "Bahrain",
      image: "/placeholder.svg",
      initials: "HM"
    },
    {
      name: "Fatima Al-Zahra",
      position: "Chief Strategy Officer",
      company: "Strategic Ventures",
      location: "Oman",
      image: "/placeholder.svg",
      initials: "FZ"
    },
    {
      name: "Ahmed Mansouri",
      position: "VP of Business Development",
      company: "GrowthPartners",
      location: "United Arab Emirates",
      image: "/placeholder.svg",
      initials: "AM"
    },
    {
      name: "Nadia Al-Rashid",
      position: "Head of Operations",
      company: "OptiFlow Solutions",
      location: "Saudi Arabia",
      image: "/placeholder.svg",
      initials: "NR"
    }
  ];

  return (
    <div className="py-32 px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-extralight mb-8 text-white">
            Meet Our
          </h2>
          <h3 className="text-4xl font-light text-blue-500 mb-8">
            Expert Team
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Leading AI transformation across the GCC region with world-class expertise in data science, technology leadership, and strategic innovation.
          </p>
          <div className="inline-block px-8 py-3 border border-blue-500 text-blue-500 text-sm font-light rounded-full">
            Elite Data Scientists • Technology Leaders • Strategic Advisors
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="bg-gray-700 text-white text-lg font-light">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                <h3 className="text-lg font-light text-white mb-2">
                  {member.name}
                </h3>
                
                <p className="text-blue-400 font-light mb-1 text-sm">
                  {member.position}
                </p>
                
                <p className="text-gray-400 mb-3 text-sm font-light">
                  {member.company}
                </p>
                
                <span className="inline-block px-3 py-1 border border-gray-600 text-gray-400 text-xs font-light rounded">
                  {member.location}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20">
          <h3 className="text-3xl font-light text-white mb-6">
            Ready to Transform Your Organization?
          </h3>
          <p className="text-lg text-gray-300 mb-8 font-light">
            Connect with our team of experts to drive AI excellence in your enterprise
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
