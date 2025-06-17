
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PlatformModelsSection = () => {
  return (
    <div className="text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="bg-gray-50 border-0 p-8">
          <CardHeader>
            <CardTitle className="text-xl font-light text-black mb-4">
              PUSH Model
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 font-light">
              Proactive opportunity development with proven AI use cases
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-50 border-0 p-8">
          <CardHeader>
            <CardTitle className="text-xl font-light text-black mb-4">
              PULL Model
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 font-light">
              Client-driven requirements with tailored AI solutions
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlatformModelsSection;
