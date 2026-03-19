import React, { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Award, Zap } from "lucide-react";

const sections = [
  { id: "hero", icon: Home },
  { id: "about", icon: User },
  { id: "projects", icon: Briefcase},
  { id: "achievements", icon: Award },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      let current = "hero";
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 300) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Syne:wght@800&display=swap');
        .mono { font-family: 'JetBrains Mono', monospace; }
        .syne { font-family: 'Syne', sans-serif; }
        
        .cyber-border {
          background: linear-gradient(180deg, transparent, rgba(200,255,87,0.3), transparent);
          width: 1px;
          height: 100%;
          position: absolute;
          right: 0;
          top: 0;
        }

        .active-glow {
          box-shadow: 0 0 20px rgba(200,255,87,0.15), inset 0 0 10px rgba(200,255,87,0.05);
        }
      `}</style>

      {/* LEFT NAVIGATION DOCK */}
      <nav className="fixed left-0 top-0 h-screen w-[80px] z-[100] bg-[#080808] flex flex-col items-center py-8 border-r border-white/5 hidden lg:flex">
        <div className="cyber-border" />

        {/* Top Logo Component */}
        <div className="relative group cursor-pointer mb-12">
          <div className="w-10 h-10 border border-[#C8FF57]/30 flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-500">
            <span className="syne text-[#C8FF57] -rotate-45 group-hover:-rotate-90 transition-transform text-sm">NT</span>
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-white/10" />
        </div>

        {/* Nav Items Container */}
        <div className="flex-1 flex flex-col justify-center gap-6">
          {sections.map((item) => {
            const isActive = active === item.id;
            return (
              <div key={item.id} className="relative flex items-center group">
                {/* Vertical Label (Hidden by default, reveals on hover) */}
                <span className={`
                  absolute left-20 mono text-[9px] tracking-[0.3em] uppercase whitespace-nowrap transition-all duration-300
                  ${isActive ? "text-[#C8FF57] opacity-100 translate-x-0" : "text-white/20 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-2"}
                `}>
                  {item.name} <span className="opacity-30 ml-2">{item.code}</span>
                </span>

                {/* Main Button */}
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`
                    w-12 h-12 flex items-center justify-center rounded-sm transition-all duration-500 relative
                    ${isActive ? "bg-[#C8FF57]/5 border border-[#C8FF57]/20 text-[#C8FF57] active-glow" : "text-white/20 hover:text-white/60"}
                  `}
                >
                  <item.icon size={18} strokeWidth={1.5} />
                  
                  {/* Active Indicator Dot */}
                  {isActive && (
                    <Motion.div 
                      layoutId="active-dot"
                      className="absolute -right-[41px] w-1.5 h-1.5 bg-[#C8FF57] rotate-45 shadow-[0_0_10px_#C8FF57]"
                    />
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Status / Branding */}
        <div className="mt-auto flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-2">
                <div className="w-[1px] h-12 bg-gradient-to-t from-[#C8FF57] to-transparent" />
                <Zap size={14} className="text-[#C8FF57] animate-pulse" />
            </div>
        </div>
      </nav>

      {/* MOBILE HEADER (Minimalist) */}
      <nav className="lg:hidden fixed top-0 left-0 w-full h-16 px-6 flex items-center justify-between z-[100] bg-[#080808]/80 backdrop-blur-xl border-b border-white/5">
        <span className="syne font-black text-[#C8FF57] tracking-tighter">NT_</span>
        <div className="flex gap-2">
            {sections.map(s => (
                <div 
                    key={s.id} 
                    className={`w-1.5 h-1.5 rotate-45 transition-colors ${active === s.id ? "bg-[#C8FF57]" : "bg-white/10"}`} 
                />
            ))}
        </div>
      </nav>
    </>
  );
}