
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from 'lucide-react';

const KalymHome = () => {
  const chips = [
    "Proven use cases",
    "Local execution", 
    "Transparent ROI",
    "CIO-ready sandbox"
  ];

  const businessLines = [
    {
      number: "BL1",
      title: "AI Tech Provider Marketplace (2025)",
      description: "We source and deliver vetted AI vendors to consulting firms and enterprises. Ready-to-deploy MVPs, CIO sandbox for data sovereignty, security, and transparency."
    },
    {
      number: "BL2", 
      title: "Full-Stack Agentic Solutions (2026+)",
      description: "We design, build, and operate autonomous use cases (e.g., fraud, dynamic pricing, maintenance, supply chain, RFP/compliance, scheduling, personalization)."
    }
  ];

  return (
    <section id="home" className="py-40 px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Outcome-first Hero */}
        <div className="text-center mb-28">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-brand-900 tracking-tight">
            Outcome-first
          </h1>
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-brand-700 tracking-tight leading-tight">
            Make AI deliver, not just demo
          </h2>
          <p className="text-2xl text-foreground max-w-5xl mx-auto font-light leading-relaxed mb-12">
            We connect GCC enterprises with proven solutions and run deployments end-to-end—typically yielding 15–20% operational gains.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button size="lg" className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 text-lg">
              Start a pilot
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-brand-500 text-brand-500 hover:bg-brand-50 px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Book a discovery call
            </Button>
          </div>

          {/* Chips */}
          <div className="flex flex-wrap gap-3 justify-center">
            {chips.map((chip, index) => (
              <Badge key={index} variant="secondary" className="bg-brand-100 text-brand-800 px-4 py-2 text-sm font-medium">
                {chip}
              </Badge>
            ))}
          </div>
        </div>

        {/* Business Lines - Crisp */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-brand-900 mb-12 text-center">
            Business lines — crisp
          </h3>
          
          <div className="space-y-12">
            {businessLines.map((line, index) => (
              <Card key={index} className="bg-card border border-border p-8 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <Badge variant="outline" className="bg-brand-500 text-white border-brand-500 px-3 py-1 text-sm font-semibold shrink-0">
                      {line.number}
                    </Badge>
                    <div>
                      <h4 className="text-2xl font-semibold text-brand-900 mb-4 leading-tight">
                        {line.title}
                      </h4>
                      <p className="text-lg text-muted-foreground font-light leading-relaxed">
                        {line.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KalymHome;
