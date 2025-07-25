
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
    <section id="manifesto" className="py-32 px-6 bg-blue-900">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-extralight mb-12 text-white">
            Manifesto
          </h2>
          <p className="text-xl text-blue-100 font-light mb-16">
            <span className="font-semibold text-white">Our manifesto is clear:</span>
          </p>
        </div>

        <div className="space-y-8 mb-20">
          {manifestoPoints.map((point, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="max-w-4xl w-full p-8 border border-blue-700 bg-blue-800/20 hover:bg-blue-800/40 transition-all duration-300">
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

      </div>
    </section>
  );
};

export default Manifesto;
