
import React from 'react';

const ClientLogos = () => {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto container-padding">
        <h2 className="text-xl md:text-2xl font-medium text-center text-notifyhub-text-heading mb-10">
          Trusted by leading teams worldwide
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {/* Company logos in white/grayscale */}
          <div className="h-8 w-28 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors">
            <span className="text-white/60 font-medium text-sm">ACME Inc.</span>
          </div>
          <div className="h-8 w-28 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors">
            <span className="text-white/60 font-medium text-sm">Globex</span>
          </div>
          <div className="h-8 w-28 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors">
            <span className="text-white/60 font-medium text-sm">Initech</span>
          </div>
          <div className="h-8 w-28 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors">
            <span className="text-white/60 font-medium text-sm">Hooli</span>
          </div>
          <div className="h-8 w-28 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors">
            <span className="text-white/60 font-medium text-sm">Massive Dyn.</span>
          </div>
          <div className="h-8 w-28 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors">
            <span className="text-white/60 font-medium text-sm">Pied Piper</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
