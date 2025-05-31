
import React from 'react';
import { Target, Zap, Lightbulb, TrendingUp, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Manifesto = () => {
  const manifestoPoints = [
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      text: "AI without orchestration is waste"
    },
    {
      icon: <Target className="h-8 w-8 text-purple-600" />,
      text: "Technology without business alignment is irrelevant"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-green-600" />,
      text: "Innovation without implementation is delusion"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
      text: "Investment without outcomes is failure"
    }
  ];

  const handleDownloadManifesto = () => {
    // Create a simple text version of the manifesto
    const manifestoText = `KALYM.dev Manifesto

Our manifesto is clear:

• AI without orchestration is waste
• Technology without business alignment is irrelevant
• Innovation without implementation is delusion
• Investment without outcomes is failure

AI Orchestration Platform for the GCC Region
Powered by elite data scientists and proven research

Visit KALYM.dev for more information.`;

    const blob = new Blob([manifestoText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'KALYM-Manifesto.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="manifesto" className="py-32 px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-black">Our</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Manifesto
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Our manifesto is clear:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {manifestoPoints.map((point, index) => (
            <div key={index} className="flex items-center space-x-6 bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                  {point.icon}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-lg font-semibold text-gray-900">
                  {point.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={handleDownloadManifesto}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
          >
            <Download className="h-5 w-5 mr-2" />
            Download Full Manifesto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
