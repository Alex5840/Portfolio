import React, { useState } from 'react';

export default function Web3Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    // PASTE YOUR WEB3FORMS ACCESS KEY HERE
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/50 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-slate-100 mb-4">Let's Build Something</h2>
      <p className="text-slate-400 mb-10">
        Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>

      <form onSubmit={onSubmit} className="space-y-4 text-left">
        <div>
          <label className="block text-sm font-mono text-slate-400 mb-1">Name</label>
          <input 
            type="text" 
            name="name" 
            required 
            className="w-full bg-[#111111] border border-slate-700 focus:border-blue-500 rounded-lg px-4 py-3 text-slate-200 outline-none transition-colors"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-mono text-slate-400 mb-1">Email</label>
          <input 
            type="email" 
            name="email" 
            required 
            className="w-full bg-[#111111] border border-slate-700 focus:border-blue-500 rounded-lg px-4 py-3 text-slate-200 outline-none transition-colors"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-mono text-slate-400 mb-1">Message</label>
          <textarea 
            name="message" 
            required 
            rows="5"
            className="w-full bg-[#111111] border border-slate-700 focus:border-blue-500 rounded-lg px-4 py-3 text-slate-200 outline-none transition-colors resize-none"
            placeholder="What's on your mind?"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full py-3 rounded-lg font-bold bg-slate-100 hover:bg-white text-slate-900 transition-colors shadow-md mt-4"
        >
          Send Message
        </button>
      </form>
      
      {/* Success/Error Message Display */}
      {result && (
        <p className={`mt-4 text-sm font-mono ${result.includes("Successfully") ? "text-green-400" : "text-slate-400"}`}>
          {result}
        </p>
      )}
    </section>
  );
}