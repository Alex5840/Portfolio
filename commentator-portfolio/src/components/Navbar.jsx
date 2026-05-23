import React, { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isCurrentlyLive = true; 

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Live Status Sub-Banner */}
      <div className={`w-full text-center py-2 px-4 text-[10px] sm:text-xs font-bold tracking-wider transition-colors ${
        isCurrentlyLive ? 'bg-rose-600 text-white animate-pulse' : 'bg-slate-900 text-slate-400'
      }`}>
        {isCurrentlyLive ? (
          <div className="flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white block"></span>
            LIVE NOW: CALLING THE LALIGA MATCH — TUNE IN ON TWITCH
          </div>
        ) : (
          "NEXT BROADCAST: CRICKET REGIONAL FINALS — MAY 28TH"
        )}
      </div>

      {/* Main Glass Navigation Block */}
      <nav className="backdrop-blur-md bg-[#0f172a]/80 border-b border-slate-800/50 px-6 py-4 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent z-50">
            VOICE // PROFILE
          </div>
          
          {/* Desktop Menu (Hidden on Mobile) */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="#work" className="hover:text-emerald-400 transition-colors">Showreel</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Book Now</a>
          </div>

          {/* Mobile Hamburger Button (Hidden on Desktop) */}
          <button 
            className="md:hidden text-slate-300 hover:text-emerald-400 focus:outline-none z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0f172a] border-b border-slate-800 shadow-2xl md:hidden flex flex-col py-4 px-6 gap-4">
            <a 
              href="#home" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-300 hover:text-emerald-400"
            >
              Home
            </a>
            <a 
              href="#work" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-300 hover:text-emerald-400"
            >
              Showreel
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-300 hover:text-emerald-400"
            >
              Book Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}