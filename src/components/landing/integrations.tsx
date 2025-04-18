
import React from 'react';
import { WorldMap } from '@/components/ui/world-map';

const Integrations = () => {
  return (
    <section className="w-full py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(43,175,116,0.08)_0%,_transparent_70%)]" />
      <div className="absolute h-80 w-80 rounded-full bg-notifyhub-primary/5 blur-[150px] top-0 left-1/4 transform -translate-x-1/2" />
      
      <div className="container mx-auto flex flex-col items-center container-padding">
        <div className="relative mb-16 animate-glow-pulse">
          <div className="h-20 w-20 bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-700 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-notifyhub-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
            </svg>
          </div>
          <div className="absolute inset-0 bg-notifyhub-primary opacity-20 blur-xl rounded-full"></div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-center text-notifyhub-text-heading mb-6">
          Seamless Integrations with Banks & Trading Platforms
        </h2>
        
        <p className="text-lg text-center text-notifyhub-text-body mb-12 max-w-xl">
          Modus AI connects with your core financial systems to unify fraud signals across banking, brokerage, and payment data.
        </p>

        {/* World Map with Financial Centers */}
        <div className="w-full max-w-4xl mx-auto mb-16">
          <WorldMap
            lineColor="#2BAF74"
            dots={[
              {
                start: { lat: 40.7128, lng: -74.0060 }, // New York
                end: { lat: 51.5074, lng: -0.1278 }, // London
              },
              {
                start: { lat: 51.5074, lng: -0.1278 }, // London
                end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
              },
              {
                start: { lat: 1.3521, lng: 103.8198 }, // Singapore
                end: { lat: 40.7128, lng: -74.0060 }, // New York
              },
              {
                start: { lat: 22.3964, lng: 114.1095 }, // Hong Kong
                end: { lat: 51.5074, lng: -0.1278 }, // London
              },
              {
                start: { lat: 25.2048, lng: 55.2708 }, // Dubai
                end: { lat: 1.3521, lng: 103.8198 }, // Singapore
              },
            ]}
          />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-16 w-full max-w-4xl mx-auto">
          {/* Integration icons with radial connectors */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="h-16 w-16 bg-zinc-800 rounded-lg flex items-center justify-center border border-zinc-700 hover:border-notifyhub-primary/50 transition-colors relative group">
                <div className="text-xl font-bold text-notifyhub-text-body group-hover:text-notifyhub-primary transition-colors">
                  {['CH', 'HS', 'FD', 'RV', 'IB', 'PL'][i-1]}
                </div>
                <div className="absolute top-full h-8 border-l border-dashed border-zinc-700 group-hover:border-notifyhub-primary/50 transition-colors"></div>
              </div>
              <div className="mt-10 text-center">
                <h4 className="font-medium text-notifyhub-text-heading">
                  {['Chase Bank', 'HSBC', 'Fidelity', 'Revolut', 'Interactive Brokers', 'Plaid'][i-1]}
                </h4>
                <p className="text-xs text-notifyhub-text-body mt-1">Integration</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
