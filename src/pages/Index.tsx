
import React from 'react';
import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import FeatureHighlight from '@/components/landing/feature-highlight';
import ClientLogos from '@/components/landing/client-logos';
import FeatureCards from '@/components/landing/feature-cards';
import Integrations from '@/components/landing/integrations';
import Pricing from '@/components/landing/pricing';
import Footer from '@/components/landing/footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-notifyhub-background flex flex-col">
      <Header />
      <main>
        <Hero />
        <FeatureHighlight />
        <ClientLogos />
        <FeatureCards />
        <Integrations />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
