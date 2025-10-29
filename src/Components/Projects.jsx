import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Code,
  Github,
  Rocket,
  Sparkles,
  Zap,
  Server,
  Monitor,
} from "lucide-react"; // Added Zap, Server, Monitor

// Define the project data array
const projects = [
  {
    title: "AI Powered Quiz App",
    description:
      "An AI-integrated quiz platform that generates dynamic questions and delivers real-time explanations powered by OpenAI.",
    tech: ["React", "Tailwind", "Framer Motion", "OpenAI API"],
    code: "https://github.com/ninadthora09/AI_powered_Quiz_app",
    demo: "https://ai-powered-quiz.vercel.app/",
    icon: Sparkles,
  },
  {
    title: "Inventory Management",
    description:
      "A robust, full-stack inventory system that manages stock, automates reports, and visualizes data analytics efficiently.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    code: "https://github.com/ninadthora09/Inventory-Management-System",
    demo: "https://inventory-system-demo.vercel.app/",
    icon: Server,
  },
  {
    title: "AI Resume Builder",
    description:
      "A next-gen AI-driven resume builder that crafts professional, ATS-optimized resumes in seconds.",
    tech: ["React", "Tailwind", "OpenAI", "Firebase"],
    code: "https://github.com/ninadthora09/AI_Resume_Builder",
    demo: "https://ai-resume-builder.vercel.app/",
    icon: Code,
  },
  {
    title: "Portfolio Website (Current)",
    description:
      "My personal interactive portfolio built with React and Framer Motion, featuring smooth animations and a clean, responsive design.",
    tech: ["React", "Tailwind", "Framer Motion","Three.js"],
    code: "https://github.com/ninadthora09/Portfolio",
    demo: "https://ninadthorat.vercel.app/",
    icon: Monitor,
  },
  {
    title: "Green Skills & AI Project",
    description:
      "An eco-focused AI project that promotes sustainability through data insights, automated reporting, and machine learning models.",
    tech: ["Python", "Machine Learning", "TensorFlow"],
    code: "https://github.com/ninadthora09/Green-AI-Project",
    demo: "https://green-ai-project.vercel.app/",
    icon: Zap,
  },
  {
    // New 6th Card
    title: "Interactive 3D Core Viewer",
    description:
      "A highly engaging, custom 3D component built with Three.js and React, featuring parallax mouse movement and event-driven pulsing feedback.",
    tech: ["React", "Three.js", "Tailwind", "WebGL"],
    code: "#", // Placeholder code link
    demo: "#", // Placeholder demo link
    icon: Server, // Reusing icon for simplicity
  },
];

// Framer Motion variant for staggered reveal
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const Projects = () => {
  return (
    <section
      id="projects"
      // Increased bottom padding to pb-96 for maximum scrolling clearance
      className="relative min-h-screen w-full flex flex-col items-center pt-20 pb-10 text-white px-6 bg-gradient-to-br from-black via-gray-950 to-black"
      style={{ fontFamily: "'Goldman', sans-serif" }}
    >
      {/* NEW WRAPPER to constrain content width and align title left */}
      <div className="max-w-7xl w-full">
        {/* --- Section Title (Left Aligned) --- */}
        <Motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          // Aligned left, reduced mb-16 to mb-12
          className="text-4xl md:text-6xl font-bold mb-12 flex items-center gap-3 relative z-10 text-left"
        >
          <Sparkles className="text-teal-400 w-10 h-10" />
          <span className="text-white">My</span>{" "}
          <span className="text-teal-400">Projects</span>
          <p className="text-gray-300 text-lg text-center max-w-2xl mx-auto mb-1 mt-2">
            A showcase of my favorite projects — blending creativity with technology to build clean, responsive, and impactful digital experiences 😊🚀.
          </p>
        </Motion.h2>

        {/* --- Projects Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
          {projects.map((proj, i) => {
            const Icon = proj.icon; // Get the lucide icon component
            return (
              <Motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                // Reduced card padding from p-6 to p-5
                className="group relative bg-gray-900/80 backdrop-blur-sm border border-white/5 rounded-xl p-5 shadow-xl 
                          hover:border-teal-500/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                {/* --- Card Border Glow Effect --- */}
                <div
                  className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl opacity-0 
                              group-hover:opacity-40 transition-opacity duration-500 blur-sm"
                ></div>

                {/* --- Content Container --- */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Title and Icon */}
                  <div className="flex items-start gap-3 mb-3">
                    {/* Reduced icon size from 28 to 24 */}
                    <Icon
                      className="text-teal-400 mt-1 flex-shrink-0"
                      size={24}
                    />
                    {/* Reduced title font from 2xl to xl */}
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {proj.title}
                    </h3>
                  </div>

                  {/* Description */}
                  {/* Reduced font size to sm and margin from mb-6 to mb-4 */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                    {proj.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4 pt-2 border-t border-white/5">
                    {proj.tech.map((t, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 text-xs font-medium bg-teal-500/10 text-teal-300 border border-teal-500/30 rounded-full hover:bg-teal-500/20 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-between items-center mt-auto">
                    <a
                      href={proj.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition-colors duration-300 text-sm font-medium"
                    >
                      <Github size={18} /> Code
                    </a>
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-lg shadow-teal-500/20 transform hover:scale-105"
                    >
                      <Rocket size={16} /> Live Demo
                    </a>
                  </div>
                </div>
              </Motion.div>
            );
          })}
        </div>
      </div>

      {/* --- Subtle Animated Background Blurs (Enhanced) --- */}
      <Motion.div
        className="absolute -z-10 w-[400px] h-[400px] bg-teal-400/15 rounded-full blur-[180px] top-10 left-[-5%]"
        animate={{ x: [0, 40, 0], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.div
        className="absolute -z-10 w-[550px] h-[550px] bg-blue-500/10 rounded-full blur-[200px] bottom-[-5%] right-0"
        animate={{ x: [0, -50, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

// Main App Component (Kept for running the immersive)
const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Projects />
    </div>
  );
};

export default App;
