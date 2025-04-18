import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Github, ChevronRight } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300 ease-in-out
        ${isScrolled 
          ? 'py-2 bg-black/70 backdrop-blur-md border-b border-zinc-800/50 shadow-md' 
          : 'py-6 bg-transparent border-b border-transparent'}
      `}
    >
      <div className="container mx-auto flex items-center justify-between container-padding">
        <div className="flex items-center">
          <h2 
            className={`
              text-2xl font-bold 
              bg-gradient-to-r from-white to-notifyhub-text-body 
              bg-clip-text text-transparent
              transition-all duration-300
              ${isScrolled ? 'text-base' : ''}
            `}
          >
            Modus AI
          </h2>
        </div>
        
        <div className={`hidden md:flex items-center space-x-6 transition-all duration-300 ${isScrolled ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
          <a href="#pricing" className="text-notifyhub-text-body hover:text-white transition-colors duration-200">
            Pricing
          </a>
          <a href="#resources" className="text-notifyhub-text-body hover:text-white transition-colors duration-200">
            Resources
          </a>
          <a href="#community" className="text-notifyhub-text-body hover:text-white transition-colors duration-200">
            Community
          </a>
          <a href="#download" className="text-notifyhub-text-body hover:text-white transition-colors duration-200">
            Download
          </a>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost" 
            className={`
              text-notifyhub-text-body hover:text-white 
              transition-all duration-300
              ${isScrolled ? 'scale-90' : ''}
            `}
          >
            Sign In
          </Button>
          <Button 
            variant="default" 
            className={`
              hidden md:flex bg-[#0e5e3d] border-[#1c8e61]
              transition-all duration-300
              ${isScrolled ? 'scale-90 px-4 py-2' : ''}
            `}
          >
            Get Started
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className={`
              hidden md:flex
              transition-all duration-300
              ${isScrolled ? 'scale-90' : ''}
            `}
          >
            <Github size={18} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
