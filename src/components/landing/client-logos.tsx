import React from 'react';

const ClientLogos = () => {
  const logos = [
    { src: '/logos/Google.svg', alt: 'Google' },
    { src: '/logos/Microsoft.svg', alt: 'Microsoft' },
    { src: '/logos/GitHub.svg', alt: 'GitHub' },
    { src: '/logos/Uber.svg', alt: 'Uber' },
    { src: '/logos/Notion.svg', alt: 'Notion' }
  ];

  return (
    <section className="w-full py-24 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col items-center mb-12">
          <h3 className="text-4xl font-medium text-white/70 mb-12 text-center">
            Trusted by Industry Leaders Worldwide
          </h3>
          
          <div className="grid grid-cols-3 md:grid-cols-5 gap-12 items-center justify-center w-full max-w-5xl">
            {logos.map((logo, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center transition-all duration-300 
                  bg-white/5 hover:bg-white/10 
                  rounded-xl p-6 
                  transform hover:-translate-y-2 
                  shadow-sm hover:shadow-xl"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="max-h-10 max-w-[150px] 
                    opacity-50 group-hover:opacity-100 
                    invert brightness-0 contrast-200 
                    transition-all duration-300 
                    hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
