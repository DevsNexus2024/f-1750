
import React from 'react';
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface TestimonialsProps {
  className?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
  const testimonials = [
    {
      quote: "The attention to detail is remarkable. This is exactly what we've been looking for in a premium product.",
      author: "Alex Johnson",
      title: "Creative Director",
      rating: 5
    },
    {
      quote: "Elegant, intuitive, and exceptionally well-crafted. It has truly transformed how I approach my work.",
      author: "Samantha Lee",
      title: "Product Designer",
      rating: 5
    },
    {
      quote: "The perfect balance of form and function. Every interaction feels intentional and refined.",
      author: "Michael Chen",
      title: "Tech Entrepreneur",
      rating: 5
    }
  ];

  return (
    <section className={cn("section-padding bg-muted/30", className)}>
      <div className="container-tight">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary-foreground bg-primary rounded-full">
            Testimonials
          </span>
          <h2 className="heading-lg mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground">
            Don't just take our word for it — hear from those who have experienced our products firsthand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-background rounded-2xl p-8 shadow-sm border border-border/40 flex flex-col h-full"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-lg mb-6 flex-grow">
                "{testimonial.quote}"
              </blockquote>
              <footer>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-muted-foreground text-sm">{testimonial.title}</div>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
