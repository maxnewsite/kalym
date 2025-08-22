
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, TrendingUp, Wrench, Truck, FileText, Calendar, Target, Brain } from "lucide-react";
import aiMarketplaceImg from "@/assets/ai-marketplace.jpg";

const KalymHome = () => {
  // Force rebuild to clear cache
  const chips = [
    "Proven use cases",
    "Local execution", 
    "Transparent ROI",
    "CIO-ready sandbox"
  ];

  const agenticSolutions = [
    { icon: Shield, label: "Fraud Detection" },
    { icon: TrendingUp, label: "Dynamic Pricing" },
    { icon: Wrench, label: "Maintenance" },
    { icon: Truck, label: "Supply Chain" },
    { icon: FileText, label: "RFP/Compliance" },
    { icon: Calendar, label: "Scheduling" },
    { icon: Target, label: "Personalization" },
    { icon: Brain, label: "AI Analytics" }
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
            We are the GCC's most connected AI agency, linking enterprises with vetted, proven AI solution providers and orchestrating full end-to-end deployments. Our projects consistently unlock 15–20% efficiency and performance gains across operations.
          </p>
          

          {/* Chips */}
          <div className="flex flex-wrap gap-3 justify-center">
            {chips.map((chip, index) => (
              <Badge key={index} variant="secondary" className="bg-brand-100 text-brand-800 px-4 py-2 text-sm font-medium">
                {chip}
              </Badge>
            ))}
          </div>
        </div>

        {/* Business Lines */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-brand-900 mb-12 text-center">
            Business lines
          </h3>
          
          <div className="space-y-12">
            {/* First Business Line - AI Tech Provider Marketplace */}
            <Card className="bg-card border border-border overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-80">
                    <img 
                      src={aiMarketplaceImg} 
                      alt="AI Tech Provider Marketplace"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h4 className="text-2xl font-semibold text-brand-900 mb-4 leading-tight">
                      AI Tech Provider Marketplace (2025-2026)
                    </h4>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed">
                      We source and deliver vetted AI vendors to consulting firms and enterprises. Ready-to-deploy MVPs, CIO sandbox for data sovereignty, security, and transparency.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Second Business Line - Full-Stack Agentic Solutions */}
            <Card className="bg-card border border-border overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 flex items-center justify-center bg-gradient-to-br from-brand-50 to-brand-100">
                    <div className="grid grid-cols-4 gap-6">
                      {agenticSolutions.map((solution, index) => {
                        const Icon = solution.icon;
                        return (
                          <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-brand-200 flex items-center justify-center mb-2">
                              <Icon className="w-6 h-6 text-brand-700" />
                            </div>
                            <span className="text-xs font-medium text-brand-800">{solution.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h4 className="text-2xl font-semibold text-brand-900 mb-4 leading-tight">
                      Full-Stack Agentic Solutions (2026+)
                    </h4>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed">
                      We design, build, and operate autonomous use cases (e.g., fraud, dynamic pricing, maintenance, supply chain, RFP/compliance, scheduling, personalization).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KalymHome;
