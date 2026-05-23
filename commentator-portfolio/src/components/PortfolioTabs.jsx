import React, { useState } from 'react';
import MediaGrid from './MediaGrid';

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState('cricket');

  // Hardcoded mockup data that your future backend/database will dynamically feed
  const portfolioData = {
    cricket: {
      accent: 'border-emerald-500 text-emerald-400 bg-emerald-950/20',
      description: 'Strategic analysis, live test match match-ups, and explosive T20 match calls.',
      clips: [
        { id: 1, title: 'IPL Final 2026 - Last Ball Thriller', duration: '2:15', category: 'Live Play-by-Play' },
        { id: 2, title: 'Deep-Dive: Spin Bowling Tactics Analysis', duration: '5:40', category: 'Studio Show' },
      ]
    },
    football: {
      accent: 'border-amber-500 text-amber-400 bg-amber-950/20',
      description: 'Fast-paced counter-attack commentary, tactical breakdowns, and stadium shoutcasting.',
      clips: [
        { id: 3, title: 'Derby Match - Overtime Goal Call', duration: '1:30', category: 'Live Commentary' },
        { id: 4, title: 'Midfield Transition Patterns Explained', duration: '4:12', category: 'Analysis' },
      ]
    },
    esports: {
      accent: 'border-violet-500 text-violet-400 bg-violet-950/20',
      description: 'Ultra-high-energy casting for FPS clutch moments, MOBAs, and global grand finals.',
      clips: [
        { id: 5, title: 'Valorant Champions - Ace Clutch Cast', duration: '1:10', category: 'Shoutcasting' },
        { id: 6, title: 'PMGC Grand Finals - Final Zone Chaos', duration: '3:45', category: 'Shoutcasting' },
      ]
    }
  };

  return (
    <section id="work" className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800/60">
      <div className="text-center max-w-xl mx-auto mb-12">
        <h2 className="text-3xl font-black text-white tracking-tight">Broadcast Showreels</h2>
        <p className="text-slate-400 mt-2">Filter highlights by sport to hear distinct vocal ranges and commentary styles.</p>
      </div>

      {/* Tabs Controller */}
      <div className="flex justify-center gap-4 mb-8">
        {Object.keys(portfolioData).map((sport) => (
          <button
            key={sport}
            onClick={() => setActiveTab(sport)}
            className={`px-6 py-2 rounded-lg font-bold text-sm uppercase tracking-wider border transition-all ${
              activeTab === sport 
                ? portfolioData[sport].accent
                : 'border-slate-800 text-slate-400 bg-transparent hover:border-slate-700'
            }`}
          >
            {sport}
          </button>
        ))}
      </div>

      <div className="bg-slate-900/40 border border-slate-800/80 p-6 md:p-8 rounded-2xl mb-6">
        <p className="text-sm font-medium text-slate-400 mb-6 italic">
          &ldquo;{portfolioData[activeTab].description}&rdquo;
        </p>
        <MediaGrid clips={portfolioData[activeTab].clips} activeTab={activeTab} />
      </div>
    </section>
  );
}