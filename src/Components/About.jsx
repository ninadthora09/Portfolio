import React, { useRef } from "react";
import Photo from "../assets/Photo.png"
import { Typewriter } from "react-simple-typewriter";
import { motion as Motion, useInView } from "framer-motion";
import {
  Target,
  Award,
  Brain,
  Code,
  Combine,
  Server,
  Database,
  Zap,
  Palette,
  Brackets,
  GitBranch,
  Package,
} from "lucide-react";

const SKY_BLUE_ACCENT = "text-sky-500";

const DRIVE_POINTS = [
  {
    icon: Target,
    title: "Focused Goals",
    description:
      "Striving to achieve excellence in full-stack development, AI & ML, and complex problem solving.",
    static: true,
  },
  {
    icon: Award,
    title: "Continuous Learner",
    description:
      "Always upskilling in latest technologies and frameworks to stay ahead in the tech world.",
    static: true,
  },
  {
    icon: Brain,
    title: "Problem Solver",
    description:
      "Solved 200+ coding problems on LeetCode, CodeChef, GeeksForGeeks, HackerRank.",
    static: true,
  },
];

const SKILLS = [
  { name: "JavaScript", icon: Code },
  { name: "React", icon: Combine },
  { name: "Node.js", icon: Server },
  { name: "MongoDB", icon: Database },
  { name: "Express.js", icon: Zap },
  { name: "CSS3/ Tailwind", icon: Palette },
  { name: "HTML5", icon: Brackets },
  { name: "Git & GitHub", icon: GitBranch },
  { name: "SQL", icon: Package },
];

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 overflow-hidden"
      style={{ fontFamily: "'Goldman', sans-serif" }}
    >
      {/* --- Blue Animated Background Circles --- */}
      <div className="absolute inset-0 -z-20">
        <Motion.div
          className="w-96 h-96 rounded-full bg-black-400/30 blur-[120px] absolute top-10 left-1/4"
          animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <Motion.div
          className="w-72 h-72 rounded-full bg-black-/30 blur-[150px] absolute bottom-10 right-1/3"
          animate={{ y: [0, -30, 0], x: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <Motion.div
          className="w-80 h-80 rounded-full bg-black-600/20 blur-[100px] absolute top-1/2 left-2/3"
          animate={{ y: [0, 50, 0], x: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <Motion.div
          className="w-64 h-64 rounded-full bg-black-400/25 blur-[120px] absolute bottom-1/4 left-1/4"
          animate={{ y: [0, -20, 0], x: [0, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* --- Styles --- */}
      <style>{`
        @keyframes pulse-slow {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-pulse-slow { animation: pulse-slow 6s infinite ease-in-out; }
        .delay-500 { animation-delay: 3s; }

        @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        .marquee { display: flex; gap: 2rem; animation: marquee 15s linear infinite; }
        .marquee-reverse { display: flex; gap: 2rem; animation: marquee 15s linear infinite reverse; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* --- About Description --- */}
      <div
        id="about"
        className="scroll-mt-24 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-4 md:py-6"
      >
        {/* Left Section */}
        <Motion.div
          className="md:w-1/2 text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-sky-600"
            style={{ fontFamily: "'Goldman', sans-serif" }}
          >
            About Me
          </h2>

          <p
            className="text-black text-base md:text-lg leading-relaxed font-medium tracking-wide"
            style={{ fontFamily: "'Goldman', sans-serif", lineHeight: "1.8" }}
          >
            I’m a passionate{" "}
            <span className="font-semibold text-sky-500">
              Computer Engineering student
            </span>{" "}
            who loves solving real-world problems through technology. My
            interests span across{" "}
            <span className="font-semibold text-sky-500">
              Full-Stack Development
            </span>
            ,{" "}
            <span className="font-semibold text-sky-500">
              Artificial Intelligence
            </span>
            , and{" "}
            <span className="font-semibold text-sky-500">
              modern Web Technologies
            </span>
            . I aim to craft clean, efficient, and visually appealing digital
            solutions that truly make a difference.
          </p>
        </Motion.div>

        {/* Right Section */}
        <Motion.div
          className="md:w-1/2 flex justify-center mt-8 md:mt-0"
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img
            src={Photo}
            alt="Profile"
            className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-lg object-cover border-4 border-sky-500"
          />
        </Motion.div>
      </div>

      {/* --- Professional Drive Cards with faint blue background --- */}
      <div className="flex gap-6 mb-12 w-full max-w-6xl justify-center overflow-hidden">
        {DRIVE_POINTS.map((point, idx) => (
          <div
            key={idx}
            className="min-w-[260px]  border border-white/30 backdrop-blur-lg p-6 rounded-2xl shadow-md flex flex-col items-start"
          >
            <point.icon className="w-8 h-8 text-sky-500 mb-3" />
            <h4 className="font-semibold text-black text-lg mb-1">
              {point.title}
            </h4>
            <p className="text-gray-700 text-base leading-snug">
              {point.description}
            </p>
          </div>
        ))}
      </div>

      {/* --- Skills Slider --- */}
      <div className="w-full overflow-hidden mb-8">
        <div className="marquee">
          {SKILLS.concat(SKILLS).map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center min-w-[120px] p-4 bg-white/10 border border-white/30 backdrop-blur-lg rounded-2xl shadow-md hover:scale-[1.05] transition-transform duration-300"
              >
                <Icon className="w-10 h-10 text-sky-500 mb-2" />
                <span className="text-black font-medium text-center">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
