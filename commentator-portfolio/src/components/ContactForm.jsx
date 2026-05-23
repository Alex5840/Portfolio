import React from 'react';

export default function ContactForm() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-20 border-t border-slate-800/60">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black text-white tracking-tight">Secure the Voice</h2>
        <p className="text-slate-400 mt-2">Inquire about availability for tournaments, studio commentary, or commercial voiceovers.</p>
      </div>

      <form className="space-y-5 bg-[#131c2e] border border-slate-800/80 p-6 md:p-10 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Organizer Name / Agency</label>
            <input type="text" className="w-full bg-[#0f172a] border border-slate-800 focus:border-emerald-500 rounded-lg px-4 py-3 text-sm text-slate-200 outline-none transition-colors" placeholder="e.g. ESL or Star Sports" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Business Email</label>
            <input type="email" className="w-full bg-[#0f172a] border border-slate-800 focus:border-emerald-500 rounded-lg px-4 py-3 text-sm text-slate-200 outline-none transition-colors" placeholder="name@company.com" />
          </div>
        </div>
        
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Event Type & Date</label>
          <input type="text" className="w-full bg-[#0f172a] border border-slate-800 focus:border-emerald-500 rounded-lg px-4 py-3 text-sm text-slate-200 outline-none transition-colors" placeholder="e.g. Regional Football Finals - Oct 2026" />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Brief Project Details</label>
          <textarea rows="4" className="w-full bg-[#0f172a] border border-slate-800 focus:border-emerald-500 rounded-lg px-4 py-3 text-sm text-slate-200 outline-none transition-colors resize-none" placeholder="Provide broadcast scope, budget tier, or location details..."></textarea>
        </div>

        <button type="submit" className="w-full py-3 rounded-lg font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 transition-colors shadow-md">
          Submit Booking Inquiry
        </button>
      </form>
    </section>
  );
}