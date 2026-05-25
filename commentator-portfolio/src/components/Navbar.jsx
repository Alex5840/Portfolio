import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#050505]/50 border-b border-white/5"
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 text-cyan-400 font-mono font-bold text-lg cursor-pointer"
        >
          {/* Native Terminal SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
          <span>ALEX_</span>
        </motion.div>
        
        <div className="flex gap-8 text-sm font-semibold tracking-wide text-slate-300">
          {['Home', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="relative group hover:text-cyan-400 transition-colors py-2"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}