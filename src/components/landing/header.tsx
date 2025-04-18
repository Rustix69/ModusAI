
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, ChevronRight } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-6 border-b border-zinc-800">
      <div className="container mx-auto flex items-center justify-between container-padding">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-notifyhub-text-body bg-clip-text text-transparent">
            Modus AI
          </h2>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
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
          <Button variant="ghost" className="text-notifyhub-text-body hover:text-white">
            Sign In
          </Button>
          <Button variant="cta" className="hidden md:flex">
            Get Started
          </Button>
          <Button variant="outlineGlow" size="icon" className="hidden md:flex">
            <Github size={18} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
