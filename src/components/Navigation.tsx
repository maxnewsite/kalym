
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  console.log('Navigation component rendering...');
  const scrollToSection = (id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
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
                      <NavigationMenuLink asChild>
                        <button 
                          onClick={() => scrollToSection('manifesto')}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left"
                        >
                          <div className="text-sm font-medium leading-none">Manifesto</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Our vision and principles
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

          <Button 
            onClick={() => scrollToSection('contact')}
            className="btn-primary hidden md:inline-flex"
            size="sm"
          >
            Submit Use Case
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
