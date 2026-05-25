import React from 'react';
import { motion } from 'framer-motion';

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]">
      {/* Subtle Texture Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Orb 1: Cyan (Top Left) */}
      <motion.div
        style={{ willChange: "transform, opacity" }}
        animate={{
          y: [0, -60, 0],
          x: [0, 40, 0],
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.35, 0.1], // This creates the glow/un-glow effect
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[10%] w-[24rem] h-[24rem] bg-cyan-500 rounded-full blur-[100px]"
      />
      
      {/* Orb 2: Deep Blue (Bottom Right) */}
      <motion.div
        style={{ willChange: "transform, opacity" }}
        animate={{
          y: [0, 80, 0],
          x: [0, -50, 0],
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[5%] right-[10%] w-[28rem] h-[28rem] bg-blue-600 rounded-full blur-[120px]"
      />

      {/* Orb 3: Purple accent (Center moving) */}
      <motion.div
        style={{ willChange: "transform, opacity" }}
        animate={{
          y: [0, -40, 0],
          x: [0, -80, 0],
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.2, 0.05],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-[40%] right-[30%] w-80 h-80 bg-purple-600 rounded-full blur-[100px]"
      />
    </div>
  );
}