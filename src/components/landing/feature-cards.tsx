import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const FeatureCards = () => {
  return (
    <section className="w-full section-padding">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Fraud Pattern Intelligence Card */}
          <div className="feature-card">
            <div className="mb-4 h-10 w-10 bg-notifyhub-primary/20 rounded-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-notifyhub-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-notifyhub-text-heading mb-3">Fraud Pattern Intelligence</h3>
            <p className="text-notifyhub-text-body mb-6">
              Quickly identify fraud behavior across accounts using advanced graph-based AI models.
            </p>
            
            <div className="mb-6 p-4 rounded-lg bg-zinc-800/50 border border-zinc-700">
              <div className="flex flex-col space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-4 w-4 rounded bg-notifyhub-primary/30 mr-3"></div>
                    <span className="text-sm text-white">Email Notifications</span>
                  </div>
                  <div className="h-5 w-10 rounded-full bg-notifyhub-primary"></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-4 w-4 rounded bg-purple-500/30 mr-3"></div>
                    <span className="text-sm text-white">SMS Alerts</span>
                  </div>
                  <div className="h-5 w-10 rounded-full bg-zinc-700"></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-4 w-4 rounded bg-blue-500/30 mr-3"></div>
                    <span className="text-sm text-white">Push Notifications</span>
                  </div>
                  <div className="h-5 w-10 rounded-full bg-notifyhub-primary"></div>
                </div>
              </div>
            </div>
            
            <Button variant="default" className="w-full sm:w-auto bg-[#0e5e3d] border-[#1c8e61]">
              Try For Free <ChevronRight size={16} />
            </Button>
          </div>
          
          {/* Tokenized Security Card */}
          <div className="feature-card">
            <div className="mb-4 h-10 w-10 bg-notifyhub-primary/20 rounded-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-notifyhub-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-notifyhub-text-heading mb-3">Tokenized Security Layers</h3>
            <p className="text-notifyhub-text-body mb-6">
              Enable secure digital authentication with digestible reports and bundled updates sent via email or SMS.
            </p>
            
            <div className="mb-6 p-4 rounded-lg bg-zinc-800/50 border border-zinc-700 overflow-hidden">
              <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 bg-notifyhub-primary/30 rounded flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-notifyhub-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-notifyhub-text-body">Security Token</div>
                    <div className="text-sm font-mono text-notifyhub-text-heading">•••• •••• •••• 1234</div>
                  </div>
                </div>
                <div className="h-4 bg-zinc-700/50 rounded-full overflow-hidden">
                  <div className="h-4 w-1/2 bg-gradient-to-r from-notifyhub-primary to-notifyhub-glow"></div>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-notifyhub-text-body">Token expires in</span>
                  <span className="text-xs font-medium text-notifyhub-primary">12:59</span>
                </div>
              </div>
            </div>
            
            <Button variant="default" className="w-full sm:w-auto bg-[#0e5e3d] border-[#1c8e61]">
              Try For Free <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
