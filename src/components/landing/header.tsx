import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Github, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300 ease-in-out
        ${isScrolled 
          ? 'py-2 bg-black/70 backdrop-blur-md border-b border-zinc-800/50 shadow-md' 
          : 'py-6 bg-transparent border-b border-transparent'}
      `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto flex items-center justify-between container-padding">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h2 
            className={`
              text-2xl font-bold 
              bg-gradient-to-r from-white to-notifyhub-text-body 
              bg-clip-text text-transparent
              transition-all duration-300
              ${isScrolled ? 'text-base' : ''}
            `}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Modus AI
          </motion.h2>
        </motion.div>
        
        <motion.div 
          className={`hidden md:flex items-center space-x-6 transition-all duration-300 ${isScrolled ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {['Pricing', 'Resources', 'Community', 'Download'].map((item, index) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-notifyhub-text-body hover:text-white transition-colors duration-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
        
        <motion.div 
          className="flex items-center space-x-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="ghost" 
              className={`
                text-notifyhub-text-body hover:text-white 
                transition-all duration-300
                ${isScrolled ? 'scale-90' : ''}
              `}
            >
              Sign In
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="default" 
              className={`
                hidden md:flex bg-[#0e5e3d] border-[#1c8e61]
                transition-all duration-300
                ${isScrolled ? 'scale-90 px-4 py-2' : ''}
              `}
            >
              Get Started
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="outline" 
              size="icon" 
              className={`
                hidden md:flex
                transition-all duration-300
                ${isScrolled ? 'scale-90' : ''}
              `}
            >
              <Github size={18} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
