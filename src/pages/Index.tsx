
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductShowcase from '@/components/ProductShowcase';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Show a welcome toast when the page loads
    setTimeout(() => {
      toast({
        title: "Welcome",
        description: "Explore our beautifully designed website",
        duration: 5000,
      });
    }, 1500);
  }, [toast]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        <ProductShowcase />
        <About />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
