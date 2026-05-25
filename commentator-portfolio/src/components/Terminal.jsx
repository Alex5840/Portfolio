import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to DEV_OS v2.0.4' },
    { type: 'system', text: 'Type "help" to see available commands.' }
  ]);
  
  const bottomRef = useRef(null);
  const isFirstRender = useRef(true); // Add this new ref to track the first load

  // Updated auto-scroll logic
  

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, { type: 'user', text: `guest@portfolio:~$ ${input}` }];

      switch (cmd) {
        case 'help':
          newHistory.push({ type: 'output', text: 'Available commands: whoami, skills, clear, sudo' });
          break;
        case 'whoami':
          newHistory.push({ type: 'output', text: 'Alex - A Full Stack Engineer obsessed with clean code, scalable architecture, and building cool things.' });
          break;
        case 'skills':
          newHistory.push({ type: 'output', text: '> Frontend: React, Tailwind, Framer Motion\n> Backend: Node.js, Express, Python\n> Database: PostgreSQL, MongoDB\n> DevOps: AWS, Docker, Vercel' });
          break;
        case 'sudo':
          newHistory.push({ type: 'output', text: 'Nice try! But you don\'t have root privileges here. 😉' });
          break;
        case 'clear':
          setHistory([]);
          setInput('');
          return;
        case '':
          break;
        default:
          newHistory.push({ type: 'output', text: `Command not found: ${cmd}. Type "help" for a list of commands.` });
      }

      setHistory(newHistory);
      setInput('');

      // THE FIX: Scroll only happens exactly when the Enter key is pressed
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);
    }
  };

  return (
    <section className="py-24 border-t border-white/5 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="text-cyan-500 font-mono text-xl">03.</span> Interactive Terminal
        </h2>

        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl font-mono text-sm">
          {/* Terminal Header */}
          <div className="bg-[#111] px-4 py-3 border-b border-white/5 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <span className="ml-2 text-slate-500 text-xs">guest@portfolio ~ /bash</span>
          </div>

          {/* Terminal Body */}
          <div className="p-6 h-80 overflow-y-auto text-slate-300 flex flex-col gap-2 bg-black/50">
            {history.map((line, index) => (
              <div key={index} className={line.type === 'user' ? 'text-cyan-400' : 'text-slate-300 whitespace-pre-wrap'}>
                {line.text}
              </div>
            ))}
            
            {/* Active Input Line */}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-cyan-400">guest@portfolio:~$</span>
              <input 
  type="text" 
  value={input}
  onChange={(e) => setInput(e.target.value)}
  onKeyDown={handleCommand}
  className="bg-transparent border-none outline-none flex-grow text-slate-300 caret-cyan-500"
  spellCheck="false"
/>
            </div>
            <div ref={bottomRef} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}