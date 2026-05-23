import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Decorative gradient blur in background */}
      <div className="absolute top-1/4 left-1/4 -z-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 -z-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full bg-emerald-950/30">
          Available for Broadcast & Lan Events
        </span>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight mt-4 text-white leading-tight">
          Bringing the Game <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            To Life.
          </span>
        </h1>
        <p className="mt-6 text-slate-400 text-lg leading-relaxed max-w-lg">
          Professional esports, cricket, and football commentator specializing in high-octane play-by-play analysis, statistical depth, and electrifying crowd engagement.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#contact" className="px-6 py-3 rounded-lg font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-lg shadow-emerald-500/20">
            Book Commentary
          </a>
          <a href="#work" className="px-6 py-3 rounded-lg font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-all border border-slate-700">
            Listen to Reels
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative group">
          {/* Neon Border Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          {/* Replace src with your friend's headshot image */}
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" 
            alt="Commentator Headshot" 
            className="relative rounded-2xl w-80 h-96 object-cover border border-slate-700 bg-slate-900"
          />
        </div>
      </div>
    </section>
  );
}