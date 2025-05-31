
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Team = () => {
  const teamMembers = [
    {
      name: "Massimiliano Masi",
      position: "CEO/Founder",
      company: "KALYM.dev",
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
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-white">
              Meet Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Expert Team
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Leading AI transformation across the GCC region with world-class expertise in data science, technology leadership, and strategic innovation.
          </p>
          <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-6 py-2 text-lg">
            Elite Data Scientists • Technology Leaders • Strategic Advisors
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-gray-900 border-gray-700 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-emerald-500/20 group-hover:ring-emerald-500/40 transition-all duration-300">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-lg font-bold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                  {member.name}
                </h3>
                
                <p className="text-emerald-400 font-semibold mb-1">
                  {member.position}
                </p>
                
                <p className="text-gray-300 mb-3">
                  {member.company}
                </p>
                
                <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                  {member.location}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Organization?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Connect with our team of experts to drive AI excellence in your enterprise
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
