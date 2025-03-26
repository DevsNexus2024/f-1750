
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Products', href: '#products' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "py-3 glass border-b border-slate-100" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-xl font-semibold tracking-tight">
              <span className="sr-only">Company Name</span>
              <svg 
                className="h-8 w-auto" 
                viewBox="0 0 40 40" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="5" y="5" width="30" height="30" rx="15" fill="currentColor" fillOpacity="0.1" />
                <path d="M20 5C26.0751 5 31.0463 9.20089 32.4726 15H25.9271C24.767 12.5622 22.5313 10.9346 19.9036 10.9346C16.0603 10.9346 12.941 14.0539 12.941 17.8972C12.941 21.7405 16.0603 24.8598 19.9036 24.8598C22.5313 24.8598 24.767 23.2322 25.9271 20.7944H32.4726C31.0463 26.5935 26.0751 30.7944 20 30.7944C12.268 30.7944 6 24.5264 6 16.7944C6 9.06243 12.268 2.79443 20 2.79443V5Z" fill="currentColor" />
              </svg>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-foreground after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button className="rounded-full px-6">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-background z-40 transform transition-all duration-300 ease-in-out pt-20",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href}
              className="text-lg font-medium hover:text-foreground/70 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button className="rounded-full px-6 mt-4">Get Started</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
