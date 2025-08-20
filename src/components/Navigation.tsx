
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Navigation = () => {
  console.log('Navigation component rendering...');
  const [isOpen, setIsOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false); // Close mobile menu when navigating
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close mobile menu when navigating
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-border">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-18">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-2xl font-light text-primary tracking-tight">
              KALYM.me
            </span>
          </Link>
          
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors font-light px-4 py-2">
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground font-light">
                    Research
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-80">
                      <NavigationMenuLink asChild>
                        <button 
                          onClick={() => scrollToSection('ceo-imperative')}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left"
                        >
                          <div className="text-sm font-medium leading-none">CEO Guide</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Strategic AI leadership insights
                          </p>
                        </button>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <button 
                          onClick={() => scrollToSection('cio-guide')}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left"
                        >
                          <div className="text-sm font-medium leading-none">CIO Guide</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Technical implementation strategies
                          </p>
                        </button>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <button 
                          onClick={() => scrollToSection('state-of-ai')}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left"
                        >
                          <div className="text-sm font-medium leading-none">State of AI</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Current AI landscape analysis
                          </p>
                        </button>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <button 
                          onClick={() => scrollToSection('white-papers')}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left"
                        >
                          <div className="text-sm font-medium leading-none">White Papers</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            In-depth research publications
                          </p>
                        </button>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground font-light">
                    Platform
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-80">
                      <NavigationMenuLink asChild>
                        <button 
                          onClick={() => scrollToSection('platform')}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left"
                        >
                          <div className="text-sm font-medium leading-none">Platform Overview</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            AI orchestration capabilities
                          </p>
                        </button>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors font-light px-4 py-2">
                    Blog
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <button 
                    onClick={() => scrollToSection('team')}
                    className="text-muted-foreground hover:text-foreground transition-colors font-light px-4 py-2"
                  >
                    Team
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-4">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary hidden md:inline-flex"
              size="sm"
            >
              Submit Use Case
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden p-2"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <SheetHeader className="p-6 border-b">
                  <SheetTitle className="text-left">Navigation Menu</SheetTitle>
                </SheetHeader>
                
                <div className="flex flex-col py-4">
                  {/* Home */}
                  <Link 
                    to="/" 
                    onClick={handleLinkClick}
                    className="px-6 py-4 text-base font-light text-foreground hover:bg-accent transition-colors"
                  >
                    Home
                  </Link>

                  {/* Research Section */}
                  <Collapsible open={researchOpen} onOpenChange={setResearchOpen}>
                    <CollapsibleTrigger className="flex items-center justify-between px-6 py-4 text-base font-light text-foreground hover:bg-accent transition-colors w-full text-left">
                      Research
                      <ChevronDown className={`h-4 w-4 transition-transform ${researchOpen ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="bg-muted/30">
                      <button 
                        onClick={() => scrollToSection('ceo-imperative')}
                        className="block w-full px-8 py-3 text-left text-sm hover:bg-accent transition-colors"
                      >
                        <div className="font-medium">CEO Guide</div>
                        <p className="text-xs text-muted-foreground mt-1">Strategic AI leadership insights</p>
                      </button>
                      <button 
                        onClick={() => scrollToSection('cio-guide')}
                        className="block w-full px-8 py-3 text-left text-sm hover:bg-accent transition-colors"
                      >
                        <div className="font-medium">CIO Guide</div>
                        <p className="text-xs text-muted-foreground mt-1">Technical implementation strategies</p>
                      </button>
                      <button 
                        onClick={() => scrollToSection('state-of-ai')}
                        className="block w-full px-8 py-3 text-left text-sm hover:bg-accent transition-colors"
                      >
                        <div className="font-medium">State of AI</div>
                        <p className="text-xs text-muted-foreground mt-1">Current AI landscape analysis</p>
                      </button>
                      <button 
                        onClick={() => scrollToSection('white-papers')}
                        className="block w-full px-8 py-3 text-left text-sm hover:bg-accent transition-colors"
                      >
                        <div className="font-medium">White Papers</div>
                        <p className="text-xs text-muted-foreground mt-1">In-depth research publications</p>
                      </button>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Platform Section */}
                  <Collapsible open={platformOpen} onOpenChange={setPlatformOpen}>
                    <CollapsibleTrigger className="flex items-center justify-between px-6 py-4 text-base font-light text-foreground hover:bg-accent transition-colors w-full text-left">
                      Platform
                      <ChevronDown className={`h-4 w-4 transition-transform ${platformOpen ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="bg-muted/30">
                      <button 
                        onClick={() => scrollToSection('platform')}
                        className="block w-full px-8 py-3 text-left text-sm hover:bg-accent transition-colors"
                      >
                        <div className="font-medium">Platform Overview</div>
                        <p className="text-xs text-muted-foreground mt-1">AI orchestration capabilities</p>
                      </button>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Blog */}
                  <Link 
                    to="/blog" 
                    onClick={handleLinkClick}
                    className="px-6 py-4 text-base font-light text-foreground hover:bg-accent transition-colors"
                  >
                    Blog
                  </Link>

                  {/* Team */}
                  <button 
                    onClick={() => scrollToSection('team')}
                    className="px-6 py-4 text-base font-light text-foreground hover:bg-accent transition-colors text-left"
                  >
                    Team
                  </button>

                  {/* Submit Use Case - Mobile */}
                  <div className="px-6 py-4 border-t mt-4">
                    <Button 
                      onClick={() => scrollToSection('contact')}
                      className="btn-primary w-full"
                      size="sm"
                    >
                      Submit Use Case
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
