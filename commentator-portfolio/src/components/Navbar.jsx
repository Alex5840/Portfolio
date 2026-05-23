import React from 'react';

export default function Navbar() {
  // Toggle this true/false to dynamically simulate if he is live right now
  const isCurrentlyLive = true; 

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Live Status Sub-Banner */}
      <div className={`w-full text-center py-2 px-4 text-xs font-bold tracking-wider transition-colors ${
        isCurrentlyLive ? 'bg-rose-600 text-white animate-pulse' : 'bg-slate-900 text-slate-400'
      }`}>
        {isCurrentlyLive ? (
          <div className="flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white block"></span>
            LIVE NOW: CALLING THE LALIGA TOURNAMENT MATCH — TUNE IN ON TWITCH/YOUTUBE
          </div>
        ) : (
          "NEXT BROADCAST: CRICKET REGIONAL FINALS — MAY 28TH, 14:00 UTC"
        )}
      </div>

      {/* Main Glass Navigation Block */}
      <nav className="backdrop-blur-md bg-[#0f172a]/80 border-b border-slate-800/50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            VOICE // PROFILE
          </div>
          <div className="flex gap-8 text-sm font-medium text-slate-300">
            <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="#work" className="hover:text-emerald-400 transition-colors">Showreel</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Book Now</a>
          </div>
        </div>
      </nav>
    </header>
  );
}