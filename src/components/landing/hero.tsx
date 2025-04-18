
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full section-padding relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(43,175,116,0.15)_0%,_transparent_40%)] opacity-50" />
      <div className="absolute h-40 w-40 rounded-full bg-notifyhub-primary/20 blur-[100px] -top-10 -left-10" />
      <div className="absolute h-60 w-60 rounded-full bg-notifyhub-primary/10 blur-[120px] -bottom-20 -right-20" />
      
      <div className="container mx-auto flex flex-col items-center text-center z-10 relative container-padding">
        <div className="animate-fade-in-up mb-6 px-4 py-2 bg-zinc-800/50 rounded-full border border-zinc-700">
          <span className="text-sm font-medium">✨ Introducing NotifyHub v1.0</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-notifyhub-text-heading max-w-4xl mb-6 animate-fade-in-up [animation-delay:100ms]">
          The Notification Hub for Modern Dev Teams
        </h1>
        
        <p className="text-lg md:text-xl text-notifyhub-text-body mb-10 max-w-2xl animate-fade-in-up [animation-delay:200ms]">
          A centralized platform to manage multi-channel delivery — email, SMS, push, and in-app. Built for developers.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:300ms]">
          <Button variant="cta" size="xl">
            Try For Free <ChevronRight size={18} />
          </Button>
          <Button variant="dark" size="xl">
            Schedule a Demo <Calendar size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
