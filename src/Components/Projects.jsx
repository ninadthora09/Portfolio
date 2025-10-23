import React from "react";
import { motion as Motion } from "framer-motion";
import { Code, Globe, Github, Sparkles, Rocket } from "lucide-react";

const projects = [
  {
    title: "AI Powered Quiz App",
    description:
      "An AI-integrated quiz platform that fetches dynamic questions and provides real-time explanations powered by",
    tech: ["React", "Tailwind", "Framer Motion", "OpenAI API"],
    code: "https://github.com/ninadthora09/AI_powered_Quiz_app",
    demo: "https://ai-powered-quiz.vercel.app/",
  },
  {
    title: "Inventory Management",
    description:
      "A smart inventory solution that tracks stock, automates reports, and visualizes data analytics efficiently.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    code: "https://github.com/ninadthora09/Inventory-Management-System",
    demo: "https://inventory-system-demo.vercel.app/",
  },
  {
    title: "AI Resume Builder",
    description:
      "A next-gen resume builder that uses generative AI to craft professional resumes optimized for ATS and job roles.",
    tech: ["React", "Tailwind", "OpenAI", "Firebase"],
    code: "https://github.com/ninadthora09/AI_Resume_Builder",
    demo: "https://ai-resume-builder.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal interactive portfolio with 3D effects, smooth animations, and a professional design that ",
    tech: ["React", "Tailwind", "Framer Motion"],
    code: "https://github.com/ninadthora09/Portfolio",
    demo: "https://ninadthorat.vercel.app/",
  },
  {
    title: "Green Skills & AI Project",
    description:
      "An eco-focused AI project promoting sustainability through data-driven insights and automation.",
    tech: ["Python", "Machine Learning", "TensorFlow"],
    code: "https://github.com/ninadthora09/Green-AI-Project",
    demo: "https://green-ai-project.vercel.app/",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen w-full flex flex-col items-center justify-center text-black px-6 py-20"
      style={{ fontFamily: "'Goldman', sans-serif" }}
    >
      {/* Section Heading */}
      <Motion.h2
        initial={{ opacity: 0, textShadow: "0px 0px 0px #38bdf8", y: -30 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="text-4xl md:text-6xl font-bold text-center mb-16 flex items-center justify-center gap-2 text-sky-400"
        style={{ fontFamily: '"Goldman", sans-serif' }}
      >
        <Sparkles className="text-black-400" size={38} />
        My <span className="text-black">Projects</span>
      </Motion.h2>

      {/* Projects Grid */}
      <div className="flex flex-col items-center gap-12 w-full max-w-6xl">
        {/* Top Row (3 projects) */}
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 w-full">
          {projects.slice(0, 3).map((proj, i) => (
            <Motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
              className="relative bg-white/10 backdrop-blur-lg border border-sky-200/30 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-3 mb-3">
                <Code className="text-sky-400" />
                <h3 className="text-xl font-semibold">{proj.title}</h3>
              </div>

              <p className="text-sm text-gray-800 mb-4">{proj.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((t, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-xs bg-sky-100 text-sky-700 rounded-full font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4">
                <a
                  href={proj.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sky-500 hover:text-sky-700 transition-colors duration-300 font-semibold"
                >
                  <Github size={18} /> View Code
                </a>
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-sky-400 hover:bg-sky-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Rocket size={16} /> Live Demo
                </a>
              </div>
            </Motion.div>
          ))}
        </div>

        {/* Bottom Row (2 projects centered) */}
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 w-4/5">
          {projects.slice(3).map((proj, i) => (
            <Motion.div
              key={i + 3}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
              className="relative bg-white/10 backdrop-blur-lg border border-sky-200/30 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-3 mb-3">
                <Code className="text-sky-400" />
                <h3 className="text-xl font-semibold">{proj.title}</h3>
              </div>

              <p className="text-sm text-gray-800 mb-4">{proj.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((t, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-xs bg-sky-100 text-sky-700 rounded-full font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4">
                <a
                  href={proj.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sky-500 hover:text-sky-700 transition-colors duration-300 font-semibold"
                >
                  <Github size={18} /> View Code
                </a>
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-sky-400 hover:bg-sky-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Rocket size={16} /> Live Demo
                </a>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>

      {/* Background glow orbs */}
      <Motion.div
        className="absolute -z-10 w-80 h-80 bg-sky-300/30 rounded-full blur-3xl top-20 left-20"
        animate={{ y: [0, 40, 0], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.div
        className="absolute -z-10 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl bottom-10 right-10"
        animate={{ y: [0, -40, 0], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default Projects;
