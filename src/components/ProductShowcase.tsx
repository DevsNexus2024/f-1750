
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ProductShowcaseProps {
  className?: string;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState(0);
  
  const products = [
    {
      name: "Premium Device",
      description: "Our flagship product combines innovative technology with elegant design.",
      imageUrl: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "Smart Accessory",
      description: "Enhance your experience with perfectly designed complementary products.",
      imageUrl: "https://images.unsplash.com/photo-1546868871-0f936769675e?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "Essential Software",
      description: "Powerful applications that seamlessly integrate with our hardware ecosystem.",
      imageUrl: "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <section id="products" className={cn("section-padding", className)}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary-foreground bg-primary rounded-full">
            Our Products
          </span>
          <h2 className="heading-lg mb-4">Refined to Perfection</h2>
          <p className="text-muted-foreground">
            Discover our thoughtfully crafted products designed to enhance your everyday experience.
          </p>
        </div>

        {/* Product Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full p-1 bg-secondary">
            {products.map((product, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "relative px-6 py-2 text-sm font-medium rounded-full transition-all",
                  activeTab === index 
                    ? "text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {activeTab === index && (
                  <motion.span
                    layoutId="activeTabHighlight"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: "spring", duration: 0.6 }}
                    style={{ zIndex: -1 }}
                  />
                )}
                {product.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Display */}
        <div className="relative min-h-[400px] md:min-h-[600px]">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: activeTab === index ? 1 : 0,
                y: activeTab === index ? 0 : 20,
                zIndex: activeTab === index ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
                <div className={cn(
                  "order-2 md:order-1",
                  index % 2 === 0 ? "" : "md:order-2"
                )}>
                  <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                  <p className="text-muted-foreground mb-6">{product.description}</p>
                  <Button className="rounded-full">Learn More</Button>
                </div>
                <div className={cn(
                  "order-1 md:order-2",
                  index % 2 === 0 ? "" : "md:order-1"
                )}>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-[250px] md:h-[400px] object-cover"
                      style={{ 
                        opacity: activeTab === index ? 1 : 0,
                        transition: "opacity 0.5s ease"
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
