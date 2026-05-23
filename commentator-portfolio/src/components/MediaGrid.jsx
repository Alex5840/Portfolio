import React from 'react';

export default function MediaGrid({ clips, activeTab }) {
  // Color configuration depending on active tab
  const iconColors = {
    cricket: 'text-emerald-400 bg-emerald-500/10',
    football: 'text-amber-400 bg-amber-500/10',
    esports: 'text-violet-400 bg-violet-500/10'
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {clips.map((clip) => (
        <div 
          key={clip.id} 
          className="group flex flex-col justify-between bg-[#131c2e] border border-slate-800/80 hover:border-slate-700 p-5 rounded-xl transition-all hover:-translate-y-1 shadow-md"
        >
          <div>
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                {clip.category}
              </span>
              <span className="text-xs text-slate-500 font-mono">{clip.duration}</span>
            </div>
            <h3 className="text-lg font-bold text-white mt-3 group-hover:text-emerald-400 transition-colors">
              {clip.title}
            </h3>
          </div>
          
          <div className="mt-6 flex items-center justify-between border-t border-slate-800/60 pt-4">
            <span className="text-xs text-slate-400 font-medium">Click to play track</span>
            <button className={`p-2 rounded-full transition-transform group-hover:scale-110 ${iconColors[activeTab]}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}