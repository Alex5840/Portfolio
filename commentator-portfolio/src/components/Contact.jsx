import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Executing send...");
    const formData = new FormData(event.target);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
    const data = await response.json();
    
    if (data.success) {
      setResult("System message: Delivered successfully.");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-white/5 max-w-2xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <span className="text-cyan-500 font-mono text-xl">02.</span> Initialize Contact
        </h2>
        <p className="text-slate-400 mb-10">
          My inbox is always open. Whether you have a question or just want to network, I'll get back to you as soon as possible.
        </p>

        <form onSubmit={onSubmit} className="space-y-4 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input type="text" name="name" required placeholder="Name" className="w-full bg-[#0a0a0a] border border-white/10 focus:border-cyan-500 rounded-lg px-4 py-3 text-slate-200 outline-none transition-colors" />
            </div>
            <div>
              <input type="email" name="email" required placeholder="Email" className="w-full bg-[#0a0a0a] border border-white/10 focus:border-cyan-500 rounded-lg px-4 py-3 text-slate-200 outline-none transition-colors" />
            </div>
          </div>
          <div>
            <textarea name="message" required rows="5" placeholder="Message payload..." className="w-full bg-[#0a0a0a] border border-white/10 focus:border-cyan-500 rounded-lg px-4 py-3 text-slate-200 outline-none transition-colors resize-none"></textarea>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            className="w-full py-4 rounded-lg font-bold bg-white hover:bg-slate-200 text-black transition-colors flex justify-center items-center gap-2"
          >
            {/* Native Send SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            Transmit Data
          </motion.button>
        </form>
        
        {result && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 text-sm font-mono text-cyan-400">
            {result}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}