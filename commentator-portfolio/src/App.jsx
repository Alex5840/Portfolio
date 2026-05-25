import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import Background from './components/Background';
import CustomCursor from './components/CustomCursor';
import MouseRipples from './components/MouseRipples';

function App() {
  return (
    <div className="relative min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 antialiased overflow-x-hidden md:cursor-none">
      
      {/* Interactive Overlays */}
      <CustomCursor />
      <MouseRipples />
      
      {/* Base Environment */}
      <Background />
      
      {/* Core Application */}
      <div className="relative z-10">
        <Navbar />
        <main className="max-w-6xl mx-auto px-6">
          <Hero />
          <Projects />
          <Terminal />
          <Contact />
        </main>
        
        <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-600 font-mono mt-20 backdrop-blur-sm">
          <p>System initialized. &copy; {new Date().getFullYear()} Software Engineer Portfolio.</p>
        </footer>
      </div>
      
    </div>
  );
}

export default App;