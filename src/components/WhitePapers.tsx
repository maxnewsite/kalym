
import React from 'react';
import { ExternalLink, FileText } from 'lucide-react';

const WhitePapers = () => {
  const whitePapers = [
    {
      title: "Accenture – The Art of AI Maturity",
      url: "https://lnkd.in/g4kyWCNd"
    },
    {
      title: "Amazon – AI/ML/GenAI Cloud Framework",
      url: "https://lnkd.in/gbmUAgQT"
    },
    {
      title: "Bain – Transforming CX with AI",
      url: "https://lnkd.in/gqq-66ST"
    },
    {
      title: "Bain – Winning with AI",
      url: "https://lnkd.in/gWk84MjS"
    },
    {
      title: "Booz Allen – Securing AI",
      url: "https://lnkd.in/gceVreFG"
    },
    {
      title: "BCG – Transforming with AI",
      url: "https://lnkd.in/gWtqJFuB"
    },
    {
      title: "Deloitte – AI Transformation",
      url: "https://lnkd.in/gGNURxzq"
    },
    {
      title: "Google – AI Adoption Framework",
      url: "https://lnkd.in/gCj2S6uF"
    },
    {
      title: "IBM – CEO's Guide to GenAI",
      url: "https://lnkd.in/gqDam-yS"
    },
    {
      title: "McKinsey – The Executive's AI Playbook",
      url: "https://lnkd.in/gFRqm2MW"
    },
    {
      title: "Microsoft – CIO's GenAI Playbook",
      url: "https://lnkd.in/gbJ4vwVE"
    },
    {
      title: "PMI – DS/AI Project Playbook",
      url: "https://lnkd.in/g7_wQbRs"
    },
    {
      title: "PwC – Agentic AI Playbook",
      url: "https://lnkd.in/gSicWfeV"
    },
    {
      title: "PwC & Microsoft – Deploying AI at Scale",
      url: "https://lnkd.in/gwg-CBBb"
    },
    {
      title: "Scaled Agile – AI-Augmented Workforce",
      url: "https://lnkd.in/gunGGgWJ"
    },
    {
      title: "World Economic Forum – AI C‑Suite Toolkit",
      url: "https://lnkd.in/gh-FQT72"
    }
  ];

  return (
    <section id="white-papers" className="py-32 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-extralight mb-8 text-black">
            White Papers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Essential research and frameworks from leading consulting firms and technology companies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whitePapers.map((paper, index) => (
            <a
              key={index}
              href={paper.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all duration-300 p-6 block"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-light text-gray-900 group-hover:text-blue-600 transition-colors mb-3 leading-relaxed">
                    {paper.title}
                  </h3>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                    <span className="text-sm font-light">Read More</span>
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhitePapers;
