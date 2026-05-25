import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MouseRipples() {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    let lastTime = 0;

    const handleMouseMove = (e) => {
      const now = Date.now();
      
      if (now - lastTime > 80) {
        const newRipple = {
          id: now,
          x: e.clientX,
          y: e.clientY,
        };

        setRipples((prev) => [...prev, newRipple]);
        lastTime = now;

        setTimeout(() => {
          setRipples((prev) => prev.filter((r) => r.id !== now));
        }, 1200);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    // CHANGED: z-[1] ensures it sits exactly between the background (z-0) and the text (z-10)
    <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ 
              top: ripple.y, 
              left: ripple.x, 
              width: 0, 
              height: 0, 
              opacity: 0.8 // Made slightly brighter
            }}
            animate={{
              top: ripple.y - 75,
              left: ripple.x - 75,
              width: 150,
              height: 150,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            // CHANGED: border-cyan-400/60 for better visibility
            className="absolute rounded-full border border-cyan-400/60 mix-blend-screen"
          />
        ))}
      </AnimatePresence>
    </div>
  );
}