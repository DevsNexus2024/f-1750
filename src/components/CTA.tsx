
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAProps {
  className?: string;
}

const CTA: React.FC<CTAProps> = ({ className }) => {
  return (
    <section className={cn("section-padding bg-primary text-primary-foreground overflow-hidden relative", className)}>
      {/* Abstract decorative element */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-tight relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="heading-lg mb-6">Ready to Experience the Difference?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of satisfied customers who have elevated their experience with our premium products and exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="rounded-full px-8 text-primary">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
