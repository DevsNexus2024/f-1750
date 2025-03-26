
import React from 'react';
import { cn } from "@/lib/utils";

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <section id="about" className={cn("section-padding", className)}>
      <div className="container-tight">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary-foreground bg-primary rounded-full">
              Our Story
            </span>
            <h2 className="heading-lg mb-6">Crafting Excellence Through Simplicity</h2>
            <p className="text-muted-foreground mb-6">
              We believe that great design is as little design as possible. Our mission is to create products that are intuitive, beautiful, and improve people's lives through thoughtful innovation.
            </p>
            <p className="text-muted-foreground mb-6">
              Founded on the principles of functional minimalism, we strive to eliminate the unnecessary, making room for the essential to shine. Every detail is considered with care, ensuring that our products deliver an unparalleled experience.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5M+</div>
                <div className="text-muted-foreground">Satisfied Customers</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop"
                alt="Our team at work"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-2/3 aspect-video rounded-xl overflow-hidden shadow-lg border-4 border-background">
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=500&auto=format&fit=crop"
                alt="Team collaboration"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
