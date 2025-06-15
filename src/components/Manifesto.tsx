
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Manifesto = () => {
  const manifestoPoints = [
    "AI without orchestration is waste",
    "Technology without business alignment is irrelevant", 
    "Innovation without implementation is delusion",
    "Investment without outcomes is failure"
  ];

  const handleDownloadManifesto = () => {
    const manifestoText = `KALYM.org Manifesto

Our manifesto is clear:

• AI without orchestration is waste
• Technology without business alignment is irrelevant
• Innovation without implementation is delusion
• Investment without outcomes is failure

AI Orchestration Platform for the GCC Region
Powered by elite data scientists and proven research

Visit KALYM.org for more information.`;

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
    <section id="manifesto" className="py-32 px-6 bg-black">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-extralight mb-12 text-white">
            Manifesto
          </h2>
          <p className="text-xl text-gray-300 font-light mb-16">
            Our manifesto is clear:
          </p>
        </div>

        <div className="space-y-8 mb-20">
          {manifestoPoints.map((point, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="max-w-4xl w-full p-8 border border-gray-800 bg-gray-900/20 hover:bg-gray-900/40 transition-all duration-300">
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-light">{index + 1}</span>
                  </div>
                  <p className="text-xl font-light text-white leading-relaxed">
                    {point}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={handleDownloadManifesto}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-light bg-transparent"
          >
            <Download className="h-5 w-5 mr-3" />
            Download Full Manifesto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
