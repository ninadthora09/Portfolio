import React, { useState } from "react";
import { motion as Motion} from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Sparkles, ArrowUpRight, Cpu, Globe, Code2, Zap } from "lucide-react";

const projects = [
  {
    title: "College Website (React)",
    category: "Tech STACK",
    description: "Dynamic question generation with real-time AI explanations.",
    tech: ["React", "Tailwind", "Framer Motion"],
    code: "https://github.com/ninadthora09/NMIET-College-Website",
    demo: "https://nmiet-college-website.vercel.app/",
    icon: Sparkles,
    num: "01",
    accent: "#C8FF57",
  },
  {
    title: "AI-Powered Contract Analysis Platform (MERN Stack)",
    category: "Tech STACK",
    description: "Robust system managing stock and automating reports.",
    tech: ["MongoDB", "Express", "Node.js","OpenAi"],
    code: "https://github.com/ninadthora09/SwiftContract",
    demo: "https://inventory-system-demo.vercel.app/",
    icon: Cpu,
    num: "02",
    accent: "#57C8FF",
  },
  {
    title: "Crowd-Sourced Road Hazard Intelligence System",
    category: "Tech STACK",
    description: "ATS-optimized resume builder that crafts professional profiles.",
    tech: ["React", "Flask","Machine Learning", "OpenAI"],
    code: "https://github.com/ninadthora09/NMIET-College-Website",
    demo: "https://nmiet-college-website.vercel.app/",
    icon: Code2,
    num: "03",
    accent: "#FF8C57",
  },
  {
    title: "Weather Website (API)",
    category: "Tech STACK",
    description: "Interactive 3D portfolio with custom Three.js components.",
    tech: ["HTML/CSS", "JavaScript","Weather API" ],
    code: "https://github.com/ninadthora09/Quiz-App-React",
    demo: "https://weather-site-sigma-eight.vercel.app/",
    icon: Globe,
    num: "04",
    accent: "#C957FF",
  },
  
];

const ProjectCard = ({ project}) => {
  const [hovered, setHovered] = useState(false);
  const Icon = project.icon;

  return (
    <Motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group border-b border-white/5 last:border-0"
    >
      <div className="relative flex items-center gap-8 px-8 py-4 transition-all duration-500 group-hover:bg-white/[0.02]">
        
        {/* BIG PROJECT TITLE */}
        <div className="flex-1 overflow-hidden">
          <Motion.h3
            animate={{ 
              x: hovered ? 10 : 0,
              color: hovered ? project.accent : "#ffffff" 
            }}
            className="proj-display font-bold text-[2rem] md:text-[3.5rem] tracking-tighter leading-none"
          >
            {project.title}
          </Motion.h3>
          <div className="flex items-center gap-4 mt-2">
             <span className="proj-mono text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold">
               {project.category}
             </span>
             <div className="h-px w-12 bg-white/10" />
             <div className="hidden md:flex gap-2">
                {project.tech.map(t => (
                  <span key={t} className="proj-mono text-[15px] text-white/40">{t}</span>
                ))}
             </div>
          </div>
        </div>

        {/* BUTTONS SECTION */}
        <div className="flex items-center gap-4">
          <Motion.a
            href={project.demo}
            target="_blank"
            animate={{ 
                backgroundColor: hovered ? project.accent : "transparent",
                color: hovered ? "#000" : "#fff",
                borderColor: hovered ? project.accent : "rgba(255,255,255,0.1)"
            }}
            className="hidden sm:flex items-center gap-2 px-6 py-3 rounded-full border text-xs font-bold font-mono transition-all"
          >
            PREVIEW <ArrowUpRight size={14} />
          </Motion.a>
          
          <a href={project.code} target="_blank" className="p-4 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white transition-all">
            <FaGithub size={20} />
          </a>
        </div>

        {/* BACKGROUND ACCENT TEXT (01, 02, etc) */}
        <span className="absolute right-8 top-1/2 -translate-y-1/2 proj-display font-black text-[8rem] text-white/[0.02] pointer-events-none group-hover:text-white/[0.05] transition-all">
          {project.num}
        </span>
      </div>
    </Motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects-root h-screen flex flex-col justify-center relative overflow-hidden bg-[#050505]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=JetBrains+Mono:wght@400;700&display=swap');
        .proj-mono { font-family: 'JetBrains Mono', monospace; }
        .proj-display { font-family: 'Syne', sans-serif; }
        
        .projects-root::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, transparent 0%, #050505 100%);
          pointer-events: none;
        }
      `}</style>

      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#C8FF57]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#57C8FF]/10 rounded-full blur-[120px]" />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION - Tightened */}
        <header className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="proj-display text-5xl md:text-7xl font-extrabold text-white leading-none tracking-tighter">
              CRAFTED <span className="text-white/20">WORKS.</span>
            </h2>
          </div>
        </header>

        {/* PROJECTS CONTAINER - High Polish */}
        <div className="border border-white/10 bg-white/[0.01] backdrop-blur-3xl rounded-[2rem] overflow-hidden shadow-2xl">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* FOOTER - Minimal */}
        <footer className="mt-8 flex justify-between items-center opacity-30">
           <span className="proj-mono text-[15px] uppercase tracking-[0.4em] text-white">Interactive Experience</span>
           <div className="h-px flex-1 mx-8 bg-gradient-to-r from-transparent via-white to-transparent" />
           <span className="proj-mono text-[15px] uppercase tracking-[0.4em] text-white">© 2026 Ninad Thorat</span>
        </footer>
      </div>
    </section>
  );
};

export default Projects;