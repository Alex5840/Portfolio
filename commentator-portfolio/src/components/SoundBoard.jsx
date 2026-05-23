import React, { useState, useRef } from 'react';

export default function Soundboard() {
  const [playingId, setPlayingId] = useState(null);
  const audioRef = useRef(null);

  const soundbites = [
    { id: 'cricket-six', title: "T20 Match-Winning SIX", sport: "Cricket", file: "/audio/cricket_six.mp3" },
    { id: 'football-goal', title: "90th Minute Equalizer Goal", sport: "Football", file: "/audio/football_goal.mp3" },
    { id: 'esports-clutch', title: "1v3 Grand Finals Clutch Call", sport: "Esports", file: "/audio/esports_clutch.mp3" },
    { id: 'cricket-wicket', title: "Clean Bowled - Hat-trick Moment", sport: "Cricket", file: "/audio/cricket_wicket.mp3" },
  ];

  const handlePlay = (sound) => {
    if (playingId === sound.id) {
      audioRef.current.pause();
      setPlayingId(null);
    } else {
      setPlayingId(sound.id);
      // In production, uncomment the lines below when you add real media files
      // audioRef.current.src = sound.file;
      // audioRef.current.play();
      console.log(`Simulating playing soundbite: ${sound.title}`);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-800/60">
      <div className="mb-10">
        <h2 className="text-3xl font-black text-white tracking-tight">Instant Voice Audition</h2>
        <p className="text-slate-400 mt-1">Click any snippet below to immediately hear his vocal range, projection, and signature hype calls.</p>
      </div>

      {/* Audio Element Hidden Node */}
      <audio ref={audioRef} onEnded={() => setPlayingId(null)} className="hidden" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {soundbites.map((sound) => (
          <button
            key={sound.id}
            onClick={() => handlePlay(sound)}
            className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all ${
              playingId === sound.id
                ? 'bg-emerald-950/40 border-emerald-500 text-emerald-400 shadow-lg shadow-emerald-500/10'
                : 'bg-[#131c2e] border-slate-800 hover:border-slate-700 text-slate-300'
            }`}
          >
            <div>
              <span className="text-[10px] uppercase tracking-wider font-bold block opacity-60 mb-1">{sound.sport}</span>
              <span className="text-sm font-bold block leading-tight">{sound.title}</span>
            </div>
            <div className={`p-2 rounded-full shrink-0 ml-3 ${playingId === sound.id ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
              {playingId === sound.id ? (
                /* Animated Equalizer Waves */
                <div className="flex gap-0.5 items-end h-4 w-4 justify-center">
                  <div className="w-0.5 bg-current animate-bounce h-3"></div>
                  <div className="w-0.5 bg-current animate-bounce h-4 [animation-delay:0.2s]"></div>
                  <div className="w-0.5 bg-current animate-bounce h-2 [animation-delay:0.4s]"></div>
                </div>
              ) : (
                /* Play Symbol */
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}