
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="w-full section-padding bg-zinc-900/50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-notifyhub-text-heading mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-notifyhub-text-body max-w-2xl mx-auto">
            Scale with confidence. From solo developers to enterprise teams, select the plan that fits your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="gradient-card rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition-colors">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-1">Free</h3>
              <p className="text-notifyhub-text-body text-sm">For developers exploring the platform</p>
            </div>
            
            <div className="flex items-end mb-6">
              <span className="text-4xl font-bold text-white">$0</span>
              <span className="text-notifyhub-text-body ml-1 mb-1">/month</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              {['1,000 notifications/month', 'Email & Push channels', 'Basic templates', 'Community support'].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check size={18} className="text-notifyhub-primary mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-notifyhub-text-body">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button variant="outlineGlow" className="w-full">
              Start Building
            </Button>
          </div>
          
          {/* Pro Plan */}
          <div className="gradient-card rounded-xl p-6 border border-notifyhub-primary/30 shadow-[0_0_20px_rgba(0,255,171,0.1)] relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-notifyhub-primary text-black text-xs font-bold px-3 py-1 rounded-full">
              Most Popular
            </div>
            
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-1">Pro</h3>
              <p className="text-notifyhub-text-body text-sm">For professional developers</p>
            </div>
            
            <div className="flex items-end mb-6">
              <span className="text-4xl font-bold text-white">$12</span>
              <span className="text-notifyhub-text-body ml-1 mb-1">/month</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              {[
                '50,000 notifications/month', 
                'All notification channels', 
                'Advanced templates', 
                'Priority support',
                'Analytics dashboard',
                'API access'
              ].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check size={18} className="text-notifyhub-primary mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-notifyhub-text-body">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button variant="cta" className="w-full">
              Start Free Trial
            </Button>
          </div>
          
          {/* Team Plan */}
          <div className="gradient-card rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition-colors">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-1">Team</h3>
              <p className="text-notifyhub-text-body text-sm">For growing development teams</p>
            </div>
            
            <div className="flex items-end mb-6">
              <span className="text-4xl font-bold text-white">$49</span>
              <span className="text-notifyhub-text-body ml-1 mb-1">/month</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              {[
                'Unlimited notifications', 
                'All notification channels', 
                'Custom templates', 
                'Dedicated support',
                'Advanced analytics',
                'Multiple team seats',
                'SSO authentication'
              ].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check size={18} className="text-notifyhub-primary mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-notifyhub-text-body">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button variant="outlineGlow" className="w-full">
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
