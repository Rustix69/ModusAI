import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="w-full section-padding bg-transparent">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-satoshi tracking-tight">
            Flexible Pricing
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="gradient-card rounded-xl p-6 border border-zinc-800/50 hover:border-zinc-700/70 transition-all duration-300 
            relative overflow-hidden
            bg-gradient-to-b from-zinc-800/40 via-zinc-900/70 to-zinc-950/90
            shadow-xl shadow-black/20 
            hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]
            before:absolute before:top-0 before:left-0 before:right-0 before:h-1/2 
            before:bg-gradient-to-b before:from-white/5 before:to-transparent 
            before:pointer-events-none">
            <div className="absolute top-2 right-2 flex gap-1">
              {[...Array(8)].map((_, i) => (
                <span 
                  key={i} 
                  className="w-[3px] h-[3px] bg-white/70 rounded-full 
                  animate-pulse 
                  opacity-70"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '3s'
                  }}
                />
              ))}
            </div>
            <div className="mb-4 relative z-10">
              <h3 className="text-xl font-bold text-white mb-1 font-satoshi">Free</h3>
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold text-white font-satoshi">$0</span>
                <span className="text-notifyhub-text-body ml-1 mb-1">per user / month</span>
              </div>
              <Button 
                variant="outline" 
                className="w-full mb-4 
                  border-zinc-700 
                  text-white 
                  font-satoshi
                  font-medium
                  hover:bg-zinc-800 
                  hover:text-white 
                  transition-colors 
                  duration-300"
              >
                Start Building
              </Button>
              <p className="text-notifyhub-text-body text-sm text-center">Start for free. Essential features, no limits on subscribers.</p>
            </div>
            
            <ul className="space-y-3 mt-6 relative z-10">
              {[
                '10K events/month included',
                'Multi-Channel Support: Email, In-app, SMS, Chat, Push',
                'EU or US Data-residency',
                'Up to 20 Workflows',
                '2 Environments',
                'Activity Feed Retention: 24 hours'
              ].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check size={18} className="text-[#0e5e3d] mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-notifyhub-text-body">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Pro Plan */}
          <div className="gradient-card rounded-xl p-6 relative 
            border border-[#0e5e3d]/30
            bg-gradient-to-b from-[#0e5e3d]/20 via-[#0e5e3d]/10 to-zinc-950/90
            shadow-[0_0_30px_rgba(14,94,61,0.2)] 
            hover:shadow-[0_0_40px_rgba(14,94,61,0.3)] 
            transition-all duration-300
            before:absolute before:top-0 before:left-0 before:right-0 before:h-1/2 
            before:bg-gradient-to-b before:from-white/10 before:to-transparent 
            before:pointer-events-none
            overflow-hidden">

            
            <div className="absolute top-2 right-2 flex gap-1">
              {[...Array(8)].map((_, i) => (
                <span 
                  key={i} 
                  className="w-[3px] h-[3px] bg-white/70 rounded-full 
                  animate-pulse 
                  opacity-70"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '3s'
                  }}
                />
              ))}
            </div>

            <div className="mb-4 relative z-10">
              <h3 className="text-xl font-bold text-white mb-1 font-satoshi">Pro Plan</h3>
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold text-white font-satoshi">$12</span>
                <span className="text-notifyhub-text-body ml-1 mb-1">per user / month</span>
              </div>
              <Button 
                variant="default" 
                className="w-full mb-4 
                  bg-[#0e5e3d] 
                  text-white
                  font-medium
                  hover:bg-[#0c5035] 
                  border-[1px] border-[#1c8e61]
                  shadow-md
                  rounded-xl
                  transition-colors 
                  duration-300"
              >
                Start Free Trial
              </Button>
              <p className="text-notifyhub-text-body text-sm text-center">Start for free. Essential features, no limits on subscribers.</p>
            </div>
            
            <ul className="space-y-3 mt-6 relative z-10">
              {[
                'Everything in Free, plus...',
                '30K events/month included',
                'Activity Feed Retention: 7 days'
              ].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check size={18} className="text-[#0e5e3d] mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-notifyhub-text-body">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Team Plan */}
          <div className="gradient-card rounded-xl p-6 border border-zinc-800/50 hover:border-zinc-700/70 transition-all duration-300 
            relative overflow-hidden
            bg-gradient-to-b from-zinc-800/40 via-zinc-900/70 to-zinc-950/90
            shadow-xl shadow-black/20 
            hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]
            before:absolute before:top-0 before:left-0 before:right-0 before:h-1/2 
            before:bg-gradient-to-b before:from-white/5 before:to-transparent 
            before:pointer-events-none">
            <div className="absolute top-2 right-2 flex gap-1">
              {[...Array(8)].map((_, i) => (
                <span 
                  key={i} 
                  className="w-[3px] h-[3px] bg-white/70 rounded-full 
                  animate-pulse 
                  opacity-70"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '3s'
                  }}
                />
              ))}
            </div>
            <div className="mb-4 relative z-10">
              <h3 className="text-xl font-bold text-white mb-1 font-satoshi">Team</h3>
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold text-white font-satoshi">$12</span>
                <span className="text-notifyhub-text-body ml-1 mb-1">per user / month</span>
              </div>
              <Button 
                variant="outline" 
                className="w-full mb-4 
                  bg-[#0e5e3d] 
                  text-white 
                  font-medium
                  hover:bg-[#0c5035] 
                  border-[1px] border-[#1c8e61]
                  shadow-md
                  rounded-xl
                  transition-colors 
                  duration-300"
              >
                Start Free Trial
              </Button>
              <p className="text-notifyhub-text-body text-sm text-center">Start for free. Essential features, no limits on subscribers.</p>
            </div>
            
            <ul className="space-y-3 mt-6 relative z-10">
              {[
                'Everything in Pro, plus...',
                '250K events/month included',
                'Up to 10 Environments',
                'Activity Feed Retention: 90 days',
                'Unlimited Team Members',
                'Unlimited Workflows'
              ].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check size={18} className="text-[#0e5e3d] mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-notifyhub-text-body">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
