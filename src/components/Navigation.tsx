
import React from 'react';
import { Button } from "@/components/ui/button";
import { Brain } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const navItems = [
    { id: 'research', label: 'Research' },
    { id: 'ceo-imperative', label: 'CEO Guide' },
    { id: 'state-of-ai', label: 'State of AI' },
    { id: 'assessment', label: 'Assessment' },
    { id: 'industries', label: 'Industries' },
    { id: 'trends', label: 'Trends' },
    { id: 'regional', label: 'GCC Focus' },
    { id: 'kalym', label: 'KALYM.ai' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 shadow-sm border-b">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Evolution
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                onClick={() => onSectionChange(item.id)}
                className="text-sm font-medium transition-all duration-200"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
