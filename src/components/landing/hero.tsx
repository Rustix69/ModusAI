import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar } from "lucide-react";
import SidebarDashboardMockup from "@/components/ui/sidebar-dashboard-mockup";

const Hero = () => {
  return (
    <section className="w-full min-h-screen section-padding relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,94,61,0.3)_0%,_transparent_60%)] opacity-70" />
      <div className="absolute h-40 w-40 rounded-full bg-[#0e5e3d]/30 blur-[100px] -top-10 -left-10 animate-pulse" />
      <div className="absolute h-60 w-60 rounded-full bg-[#0e5e3d]/20 blur-[120px] -bottom-20 -right-20 animate-pulse" />
      
      {/* Stars/Dots Animation Background */}
      <div className="absolute inset-0 bg-[url('/stars.svg')] opacity-40 animate-twinkle" />
      
      {/* Additional Twinkling Dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(100)].map((_, i) => {
          const size = Math.random() * 5;
          const opacity = 0.3 + Math.random() * 0.7;
          return (
            <div 
              key={i} 
              className="absolute bg-white/30 rounded-full" 
              style={{
                width: `${size}px`, 
                height: `${size}px`, 
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%`,
                opacity: opacity,
                animation: `twinkle ${2 + Math.random() * 4}s infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          );
        })}
      </div>
      
      <div className="container mx-auto flex flex-col items-center text-center z-10 relative container-padding mt-36">
        <div className="animate-fade-in-up mb-6 px-4 py-2 bg-zinc-800/50 rounded-full border border-zinc-700">
          <span className="text-sm font-medium text-white">✨ NEW: Now supporting real-time detection for online and offline threats</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-4xl mb-6 animate-fade-in-up [animation-delay:100ms] font-satoshi tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-400 to-zinc-400">
          Modus AI – Fraud Detection 
          <br />
          Co-Pilot
        </h1>
        
        <p className="text-lg md:text-xl text-notifyhub-text-body mb-10 max-w-2xl animate-fade-in-up [animation-delay:200ms] font-satoshi">
          We help financial institutions piece together fraudsters' modus operandi faster — with AI-powered insights that protect both businesses and individuals.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:300ms]">
          <Button 
            variant="default" 
            className="w-full sm:w-auto flex items-center gap-2 
              bg-[#0e5e3d] 
              text-white 
              font-medium
              px-6 py-6 
              hover:bg-[#0c5035] 
              border-[1px] border-[#1c8e61]
              shadow-md
              rounded-xl"
          >
            Try For Free <ChevronRight size={18} />
          </Button>
          <Button 
            variant="outline" 
            className="w-full sm:w-auto flex items-center gap-2 
              bg-[#0e5e3d] 
              text-white 
              font-medium
              px-6 py-6
              hover:bg-[#0c5035] 
              border-[1px] border-[#1c8e61]
              shadow-md
              rounded-xl"
          >
            Schedule a Demo <Calendar size={18} />
          </Button>
        </div>

        {/* Dashboard Preview */}
        <div className="relative w-full max-w-[1200px] mt-16 animate-fade-in-up [animation-delay:400ms]">
          <div className="absolute inset-0 bg-gradient-to-t from-notifyhub-background via-transparent to-transparent z-20 pointer-events-none h-[120%]" />
          <div className="transform perspective-1200 rotate-x-12 hover:rotate-x-8 transition-transform duration-700">
            <SidebarDashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
