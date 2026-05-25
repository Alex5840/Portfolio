import React from 'react';

export default function ProjectGrid() {
  // PASTE YOUR PROJECT DETAILS AND LINKS HERE
  const projectsData = [
    {
      id: 1,
      title: "E-Commerce SaaS Platform",
      description: "A full-stack multi-tenant e-commerce dashboard. Features JWT authentication, Stripe payment integration, and real-time inventory tracking.",
      tech: ["Next.js", "Tailwind", "Node.js", "MongoDB"],
      githubLink: "https://github.com/yourusername/project1",
      liveLink: "https://project1-demo.com",
    },
    {
      id: 2,
      title: "Real-time Chat Application",
      description: "Built a highly concurrent chat app using WebSockets. Supports direct messaging, group rooms, and unread message notifications.",
      tech: ["React", "Socket.io", "Express", "Redis"],
      githubLink: "https://github.com/yourusername/project2",
      liveLink: "https://project2-demo.com",
    },
    {
      id: 3,
      title: "Kanban Task Manager",
      description: "A drag-and-drop task management tool with persistent state, offline support, and team collaboration features.",
      tech: ["React", "Redux", "Firebase", "Beautiful-DnD"],
      githubLink: "https://github.com/yourusername/project3",
      liveLink: "https://project3-demo.com",
    }
  ];

  return (
    <section id="projects" className="py-20 border-t border-slate-800/50">
      <h2 className="text-3xl font-bold text-slate-100 mb-10">Featured Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <div key={project.id} className="bg-[#111111] border border-slate-800 rounded-xl p-6 hover:border-slate-600 transition-colors flex flex-col">
            <h3 className="text-xl font-bold text-slate-200">{project.title}</h3>
            <p className="mt-3 text-sm text-slate-400 flex-grow leading-relaxed">
              {project.description}
            </p>
            
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-[10px] font-mono text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-4 pt-4 border-t border-slate-800/80">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">
                Live Demo
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" /><path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" /></svg>
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors flex items-center gap-1">
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}