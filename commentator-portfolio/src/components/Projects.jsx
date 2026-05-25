import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
 const projects = [
    {
      id: 1,
      title: "Echo-Meet",
      desc: "A scalable real-time chat application. Features instant messaging, active user presence, and secure data transmission leveraging enterprise-grade Stream Chat infrastructure.",
      tech: ["React", "Node.js", "Stream Chat", "MongoDB"],
      github: "https://github.com/Alex5840/Echo-Meet",
      demo: "https://echo-meet.onrender.com/" // Add your live link here if you have one deployed!
    },
    {
      id: 2,
      title: "AI Resume Analyzer",
      desc: "An intelligent parsing tool that evaluates resumes against industry standards. Built with React and integrated with Puter.js for seamless cloud capabilities and decentralized execution.",
      tech: ["React", "Puter.js", "Python", "FastAPI"],
      github: "https://github.com/Alex5840/AI-Resume-Analyzer",
      demo: "https://ai-resume-analyzer-khaki.vercel.app/"
    },
    {
      id: 3,
      title: "Smart Agriculture Monitor",
      desc: "A telemetry dashboard designed for precision farming. Processes real-time environmental data like soil moisture and temperature to optimize crop yields and water usage.",
      tech: ["IoT", "React", "Node.js", "Firebase"],
      github: "https://github.com/Alex5840/Smart_Agriculte_Monitoring_System",
      demo: ""
    },
    {
      id: 4,
      title: "Cinematic Discovery App",
      desc: "A dynamic movie browsing platform powered by the OMDb API. Features advanced search, responsive layouts, and a secure MongoDB backend to persist custom user watchlists.",
      tech: ["React", "OMDb API", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/Alex5840/Movie-App",
      demo: ""
    }
  ];

  return (
    <section id="projects" className="py-24 border-t border-white/5">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <span className="text-cyan-500 font-mono text-xl">01.</span> Featured Work
        </h2>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="text-cyan-400 font-mono text-[10px] uppercase tracking-wider bg-cyan-950/30 px-2 py-1 rounded">Application</div>
              <div className="flex gap-4 text-slate-400">
                <a href={project.github} className="hover:text-cyan-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href={project.demo} className="hover:text-cyan-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{project.desc}</p>
            
            <div className="flex flex-wrap gap-2 mt-auto font-mono text-[10px] text-slate-500">
              {project.tech.map(tech => (
                <span key={tech} className="bg-white/5 px-2 py-1 rounded">{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}