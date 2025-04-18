import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black py-16 relative overflow-hidden">
      {/* Background decoration - ASCII-style dot matrix */}
      <div className="absolute inset-0 opacity-5 text-[8px] text-white font-mono overflow-hidden pointer-events-none select-none">
        {Array(20).fill(0).map((_, i) => (
          <div key={i} className="whitespace-nowrap">
            {Array(50).fill(0).map((_, j) => (
              <span key={j}>
                {' • NotifyHub • '}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Logo and Tagline */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-3">Modus AI</h2>
            <p className="text-sm text-zinc-400 mb-6 max-w-xs">
              Protecting financial institutions and individuals with AI-powered fraud detection.
            </p>
          </div>
          
          {/* Links Columns */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'Customers', 'Integrations'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {['About', 'Blog', 'Careers', 'Contact'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Documentation', 'API Reference', 'Status', 'Support'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Modus AI. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
