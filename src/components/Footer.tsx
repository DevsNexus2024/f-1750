
import React from 'react';
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#' },
        { label: 'Resources', href: '#' },
        { label: 'Roadmap', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Careers', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Press', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms', href: '#' },
        { label: 'Privacy', href: '#' },
        { label: 'Cookies', href: '#' },
        { label: 'Licenses', href: '#' }
      ]
    }
  ];

  return (
    <footer className={cn("py-12 md:py-20 bg-background", className)}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Logo & Info */}
          <div className="md:col-span-2">
            <a href="#" className="inline-block text-xl font-semibold tracking-tight mb-4">
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
            <p className="text-muted-foreground mb-6 max-w-md">
              We create intuitive and beautiful products that enhance your life and work. Committed to excellence in every detail.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 5.897C21.257 6.229 20.462 6.452 19.643 6.554C20.489 6.041 21.139 5.241 21.446 4.297C20.65 4.764 19.771 5.102 18.842 5.291C18.084 4.497 17.027 4 15.847 4C13.577 4 11.73 5.846 11.73 8.116C11.73 8.444 11.769 8.763 11.841 9.068C8.395 8.892 5.31 7.264 3.221 4.746C2.857 5.369 2.655 6.041 2.655 6.762C2.655 8.128 3.338 9.34 4.397 10.044C3.713 10.023 3.067 9.832 2.498 9.522C2.498 9.539 2.498 9.558 2.498 9.577C2.498 11.562 3.936 13.203 5.834 13.589C5.482 13.685 5.112 13.736 4.731 13.736C4.457 13.736 4.191 13.708 3.931 13.659C4.473 15.271 5.979 16.444 7.762 16.479C6.364 17.563 4.621 18.214 2.734 18.214C2.393 18.214 2.057 18.194 1.725 18.151C3.532 19.307 5.663 19.981 7.947 19.981C15.837 19.981 20.121 13.805 20.121 8.441C20.121 8.263 20.116 8.086 20.109 7.911C20.918 7.33 21.448 6.621 21.832 5.829L22 5.897Z" fill="currentColor"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Links */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-6">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-muted">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Company Name. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 text-sm text-muted-foreground">
              Designed with perfection in mind.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
