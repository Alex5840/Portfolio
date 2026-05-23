import React from 'react';

export default function StatsGrid() {
  const stats = [
    { value: "500+", label: "Matches Commentated", detail: "T20s, Domestic Football, & Pro Esports" },
    { value: "12+", label: "Grand Finals Called", detail: "High-pressure championship deciders" },
    { value: "3", label: "Core Disciplines", detail: "Expertise across Cricket, Football, & FPS/MOBAs" },
    { value: "1M+", label: "Peak Concurrent Viewers", detail: "Massive international tournament stream reach" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-gradient-to-b from-[#131c2e] to-[#0f172a] border border-slate-800/80 p-6 rounded-xl text-center relative overflow-hidden group">
            {/* Subtle glow hover effect */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-4xl font-black text-white tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-sm font-bold text-slate-200 mt-2">{stat.label}</div>
            <div className="text-xs text-slate-500 mt-1">{stat.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
}