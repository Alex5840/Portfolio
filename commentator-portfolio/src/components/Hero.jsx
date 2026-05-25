import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const techStack = ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"];

  return (
    <section id="home" className="min-h-[90vh] flex items-center pt-24 pb-12 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        
        {/* LEFT COLUMN: Text & Buttons */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block mb-6">
            <span className="font-mono text-xs text-cyan-400 bg-cyan-950/30 border border-cyan-500/20 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              System Online - Available for hire
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Architecting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Digital Experiences.
            </span>
          </h1>
          
          <p className="mt-6 text-lg text-slate-400 max-w-xl leading-relaxed">
            Full Stack Software Engineer specializing in building scalable, high-performance web applications. I turn complex logic into elegant code.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                style={{ willChange: "transform" }}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                className="flex items-center gap-1.5 px-3 py-1 border border-white/10 rounded-lg bg-white/5 text-slate-300 text-xs font-mono backdrop-blur-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                {tech}
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex gap-4">
            <motion.a 
              href="#projects" 
              animate={{ boxShadow: ["0px 0px 0px rgba(6,182,212,0)", "0px 0px 20px rgba(6,182,212,0.4)", "0px 0px 0px rgba(6,182,212,0)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="group flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-white text-black hover:bg-cyan-50 transition-colors"
            >
              Deployments
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </motion.a>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf" 
              target="_blank" 
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-transparent border border-slate-700 text-slate-300 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              View Resume
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Profile Picture */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex justify-center lg:justify-end items-center mt-12 lg:mt-0"
        >
          {/* Anchor Wrapper: This guarantees perfect center alignment */}
          <div className="relative flex justify-center items-center w-64 h-64 md:w-80 md:h-80">
            
            {/* Animated decorative rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full border border-dashed border-cyan-500/30"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[320px] h-[320px] md:w-[410px] md:h-[410px] rounded-full border border-white/5"
            />

            {/* Picture Container */}
            <motion.div 
              style={{ willChange: "transform" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-500/30 bg-[#0a0a0a] shadow-[0_0_40px_rgba(6,182,212,0.15)] group z-10"
            >
              {/* The Image Overlay */}
              <div className="absolute inset-0 bg-cyan-500/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
              
              <img 
                src="/profile.jpg" 
                alt="Software Engineer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}