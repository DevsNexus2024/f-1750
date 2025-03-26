
import React from 'react';
import { Layers, Zap, Shield, RefreshCw } from 'lucide-react';
import { cn } from "@/lib/utils";

interface FeaturesProps {
  className?: string;
}

const Features: React.FC<FeaturesProps> = ({ className }) => {
  const features = [
    {
      icon: <Layers className="h-10 w-10" />,
      title: 'Elegant Design',
      description: 'Meticulously crafted with attention to every detail for a premium experience.'
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: 'Lightning Fast',
      description: 'Optimized performance ensures a smooth and responsive experience every time.'
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: 'Secure & Private',
      description: 'Advanced protection that keeps your data safe without compromising usability.'
    },
    {
      icon: <RefreshCw className="h-10 w-10" />,
      title: 'Seamless Integration',
      description: 'Works flawlessly with your existing ecosystem for a cohesive experience.'
    }
  ];

  return (
    <section id="features" className={cn("section-padding bg-secondary/50", className)}>
      <div className="container-tight">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary-foreground bg-primary rounded-full">
            Why Choose Us
          </span>
          <h2 className="heading-lg mb-4">Designed for Excellence</h2>
          <p className="text-muted-foreground">
            Our dedication to quality and innovation sets us apart, delivering an experience that exceeds expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-background rounded-2xl p-8 shadow-sm border border-border/40 transition-transform hover:translate-y-[-4px]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-5 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
