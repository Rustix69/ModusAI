
import React from 'react';
import { WorldMap } from '@/components/ui/world-map';

const Integrations = () => {
  return (
    <section className="w-full py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(43,175,116,0.08)_0%,_transparent_70%)]" />
      <div className="absolute h-80 w-80 rounded-full bg-notifyhub-primary/5 blur-[150px] top-0 left-1/4 transform -translate-x-1/2" />
      
      <div className="container mx-auto flex flex-col items-center container-padding">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center text-notifyhub-text-heading mb-6">
          Seamless Integrations with Banks & Trading Platforms
        </h2>
        
        <p className="text-lg text-center text-notifyhub-text-body mb-12 max-w-xl">
          Modus AI connects with your core financial systems to unify fraud signals across banking, brokerage, and payment data.
        </p>

        {/* World Map with Financial Centers */}
        <div className="w-full mx-auto mb-16">
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
              {
                start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
                end: { lat: 40.7128, lng: -74.0060 }, // New York
              },
              {
                start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
                end: { lat: 40.7128, lng: -74.0060 }, // New York
              },
              {
                start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
                end: { lat: 40.7128, lng: -74.0060 }, // New York
              },
              {
                start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
                end: { lat: 40.7128, lng: -74.0060 }, // New York
              },
              {
                start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
                end: { lat: 40.7128, lng: -74.0060 }, // New York
              },
              {
                start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
                end: { lat: 40.7128, lng: -74.0060 }, // New York
              },
              
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Integrations;
