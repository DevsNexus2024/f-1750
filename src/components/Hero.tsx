
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section 
      className={cn(
        "relative pt-32 pb-20 md:pt-40 md:pb-28",
        className
      )}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-4000"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-primary-foreground bg-primary rounded-full animate-fade-down">
            Discover Innovation
          </span>
          
          <h1 className="heading-xl mb-6 animate-fade-up" style={{animationDelay: "200ms"}}>
            Experience Brilliance in Every Detail
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{animationDelay: "400ms"}}>
            Elevate your experience with intuitive design and cutting-edge technology that fits seamlessly into your everyday life.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{animationDelay: "600ms"}}>
            <Button size="lg" className="rounded-full px-8">
              Explore Now
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
