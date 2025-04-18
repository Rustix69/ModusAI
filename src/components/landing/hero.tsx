import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar } from "lucide-react";
import SidebarDashboardMockup from "@/components/ui/sidebar-dashboard-mockup";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  return (
    <section className="w-full min-h-screen section-padding relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,94,61,0.3)_0%,_transparent_60%)] opacity-70" />
      <motion.div 
        className="absolute h-40 w-40 rounded-full bg-[#0e5e3d]/30 blur-[100px] -top-10 -left-10" 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 4,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute h-60 w-60 rounded-full bg-[#0e5e3d]/20 blur-[120px] -bottom-20 -right-20" 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 5,
          ease: "easeInOut" 
        }}
      />
      
      {/* Stars/Dots Animation Background */}
      <div className="absolute inset-0 bg-[url('/stars.svg')] opacity-40" />
      
      {/* Additional Twinkling Dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(100)].map((_, i) => {
          const size = Math.random() * 5;
          const opacity = 0.3 + Math.random() * 0.7;
          const duration = 2 + Math.random() * 4;
          const delay = Math.random() * 3;
          
          return (
            <motion.div 
              key={i} 
              className="absolute bg-white/30 rounded-full" 
              style={{
                width: `${size}px`, 
                height: `${size}px`, 
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%`,
              }}
              animate={{ 
                opacity: [opacity, opacity * 0.4, opacity],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: duration,
                delay: delay,
                ease: "easeInOut" 
              }}
            />
          );
        })}
      </div>
      
      <motion.div 
        className="container mx-auto flex flex-col items-center text-center z-10 relative container-padding mt-36"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="mb-6 px-4 py-2 bg-zinc-800/50 rounded-full border border-zinc-700"
          variants={itemVariants}
        >
          <span className="text-sm font-medium text-white">✨ NEW: Now supporting real-time detection for online and offline threats</span>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-4xl mb-6 font-satoshi tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-400 to-zinc-400"
          variants={itemVariants}
        >
          Modus AI – Fraud Detection 
          <br />
          Co-Pilot
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-notifyhub-text-body mb-10 max-w-2xl font-satoshi"
          variants={itemVariants}
        >
          We help financial institutions piece together fraudsters' modus operandi faster — with AI-powered insights that protect both businesses and individuals.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="default" 
              className="w-full sm:w-auto flex items-center gap-2 
                bg-[#0e5e3d] 
                text-white 
                font-medium
                px-6 py-6 
                hover:bg-[#0c5035] 
                border-[1px] border-[#1c8e61]
                shadow-md
                rounded-xl"
            >
              Try For Free <ChevronRight size={18} />
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              className="w-full sm:w-auto flex items-center gap-2 
                bg-[#0e5e3d] 
                text-white 
                font-medium
                px-6 py-6
                hover:bg-[#0c5035] 
                border-[1px] border-[#1c8e61]
                shadow-md
                rounded-xl"
            >
              Schedule a Demo <Calendar size={18} />
            </Button>
          </motion.div>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div 
          className="relative w-full max-w-[1200px] mt-16"
          variants={itemVariants}
          whileInView={{ 
            y: [50, 0],
            opacity: [0, 1]
          }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-notifyhub-background via-transparent to-transparent z-20 pointer-events-none h-[120%]" />
          <motion.div 
            className="transform perspective-1200"
            initial={{ rotateX: 12 }}
            whileHover={{ rotateX: 8 }}
            transition={{ duration: 0.7 }}
          >
            <SidebarDashboardMockup />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
