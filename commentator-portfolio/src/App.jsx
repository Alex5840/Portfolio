import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsGrid from './components/StatsGrid';
import Soundboard from './components/Soundboard';
import PortfolioTabs from './components/PortfolioTabs';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="bg-[#0f172a] text-slate-100 min-h-screen font-sans selection:bg-emerald-500 selection:text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <StatsGrid />
        <Soundboard />
        <PortfolioTabs />
        <ContactForm />
      </main>
      <footer className="bg-[#0b0f19] text-center py-6 text-sm text-slate-500 border-t border-slate-800">
        <p>&copy; {new Date().getFullYear()} Professional Commentator Portfolio. Built from scratch.</p>
      </footer>
    </div>
  );
}

export default App;