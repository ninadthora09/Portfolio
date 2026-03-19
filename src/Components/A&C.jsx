import React, { useState, useEffect, useCallback } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft, ChevronRight, ShieldCheck,
  Trophy, X, Camera, ArrowUpRight, Zap,
} from "lucide-react";

// ── Asset Imports ───────────────────────────────────────────────────────
import cert1 from "../assets/Internship.jpg";
import cert2 from "../assets/GenerativeAI.jpg";
import cert3 from "../assets/Sports.jpeg";
import cert4 from "../assets/Data Science.jpeg";
import cert5 from "../assets/ThynkInternship.jpeg";
import cert6 from "../assets/JavaScript certification.png";

const items = [
  {
    type: "cert",
    title: "Machine Learning Internship",
    org: "Edunet Foundation",
    img: cert1,
    date: "2025",
    accent: "#C8FF57",
    label: "Machine Learning",
    desc: "Developed and deployed an e-waste image classification model using Python and deep learning, achieving 90%+ accuracy and improving decision-making efficiency by 30%.",
  },
  {
    type: "sport",
    title: "Inter-College Winner",
    org: "Athletics Meet",
    img: cert3,
    date: "2024 and 2025",
    accent: "#FF8C57",
    label: "Sports",
    desc: "Competed at inter-college level and brought home the trophy. Discipline on the field mirrors the discipline in code.",
  },
  {
    type: "cert",
    title: "Gen AI Expert",
    org: "Edunet Foundation",
    img: cert2,
    date: "2025",
    accent: "#57C8FF",
    label: "Generative AI",
    desc: "Deep-dived into LLM architectures, prompt engineering, and building generative applications from the ground up.",
  },
  {
    type: "cert",
    title: "Data Science and Big Data Analytics",
    org: "Nutan Maharashtra Institue Of Engineering and Technology",
    img: cert4,
    date: "2025",
    accent: "#C957FF",
    label: "Data Science",
    desc: "Rigorous certification from NMIET covering statistical modelling, Python, and advanced data science workflows.",
  },
  {
    type: "sport",
    title: "Associate Software Engineer",
    org: "Thynk Technology India",
    img: cert5,
    date: "2025",
    accent: "#FF5793",
    label: "Working",
    desc: "Working as Software Engineer at Thynk Technology India as a Frontend Intern Building the websites, Which Creates the Impact on Business ",
  },
  {
    type: "cert",
    title: "JavaScript Certification",
    org: "Coursera",
    img: cert6,
    date: "2025",
    accent: "#34D399",
    label: "Frontend",
    desc: "Advanced JavaScript — closures, event loops, async/await, algorithmic thinking and performance patterns.",
  },
];

const mod = (n, m) => ((n % m) + m) % m;

const getCardConfig = (offset) => {
  const abs = Math.abs(offset);
  if (abs > 2) return null;
  return {
    x: offset * 310,
    z: -abs * 150, // Added depth
    rotY: offset * -25,
    scale: 1 - abs * 0.15,
    opacity: abs === 0 ? 1 : abs === 1 ? 0.4 : 0.1,
    zIndex: 20 - abs * 5,
    blur: abs === 0 ? 0 : 4,
  };
};

/* ── Individual Carousel Card ── */
const Card = ({ item, offset, onClick }) => {
  const cfg = getCardConfig(offset);
  if (!cfg) return null;
  const isActive = offset === 0;
  const Icon = item.type === "sport" ? Trophy : ShieldCheck;

  return (
    <Motion.div
      onClick={onClick}
      animate={{
        x: cfg.x,
        z: cfg.z,
        scale: cfg.scale,
        opacity: cfg.opacity,
        rotateY: cfg.rotY,
        filter: cfg.blur > 0 ? `blur(${cfg.blur}px)` : "blur(0px)",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      className="absolute cursor-pointer select-none"
      style={{
        width: 340,
        zIndex: cfg.zIndex,
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="relative overflow-hidden bg-[#0c0c0c]"
        style={{
          borderRadius: 24,
          aspectRatio: "3/4",
          border: isActive ? `1px solid ${item.accent}44` : "1px solid rgba(255,255,255,0.05)",
          boxShadow: isActive ? `0 0 60px ${item.accent}15` : "none",
        }}
      >
        <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/40 to-transparent" />
        
        {/* Top Content */}
        <div className="absolute top-5 left-5 right-5 flex justify-between items-center z-10">
          <div className="p-2.5 rounded-xl backdrop-blur-md" style={{ background: `${item.accent}15`, border: `1px solid ${item.accent}30` }}>
            <Icon size={16} style={{ color: item.accent }} />
          </div>
          <span className="ach-mono text-[9px] tracking-widest text-white/40 bg-black/40 px-2 py-1 rounded-full border border-white/5">
            {item.date}
          </span>
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <p className="ach-mono text-[9px] tracking-[0.3em] uppercase mb-1.5" style={{ color: item.accent }}>
            {item.org}
          </p>
          <h3 className="ach-display text-2xl font-bold text-white leading-tight">
            {item.title}
          </h3>
          {isActive && (
            <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 mt-3 opacity-40">
              <Camera size={10} className="text-white" />
              <span className="ach-mono text-[8px] uppercase tracking-tighter text-white">Tap to Inspect</span>
            </Motion.div>
          )}
        </div>
      </div>
    </Motion.div>
  );
};

/* ── Info Panel ── */
const InfoPanel = ({ item, index, total }) => (
  <AnimatePresence mode="wait">
    <Motion.div
      key={index}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col gap-6"
    >
      <div className="flex items-center gap-4">
        <span className="ach-display text-5xl font-black text-white/5">{String(index + 1).padStart(2, "0")}</span>
        <span className="ach-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded border border-white/10 text-white/60">
          {item.label}
        </span>
      </div>

      <div>
        <h2 className="ach-display text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
          {item.title}
        </h2>
        <p className="ach-mono text-xs tracking-widest mt-2 uppercase" style={{ color: item.accent }}>
          {item.org}
        </p>
      </div>

      <p className="ach-sans text-[15px] leading-relaxed text-white/50 font-light">
        {item.desc}
      </p>

      <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10">
          <Zap size={16} style={{ color: item.accent }} />
        </div>
        <div>
          <p className="ach-sans text-sm font-medium text-white/80">
            {item.type === "cert" ? "Official Certification" : "Major Achievement"}
          </p>
          <p className="ach-mono text-[9px] text-white/30 uppercase tracking-widest">
            {item.date} • ninad thorat
          </p>
        </div>
      </div>
    </Motion.div>
  </AnimatePresence>
);

export default function AchievementSlider() {
  const [active, setActive] = useState(0);
  const [modal, setModal] = useState(null);
  const item = items[active];

  const go = useCallback((dir) => setActive((p) => mod(p + dir, items.length)), []);

  useEffect(() => {
    const handle = (e) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "Escape") setModal(null);
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [go]);

  return (
    <section id="achievements" className="ach-root relative min-h-screen flex flex-col overflow-hidden bg-[#050505]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=JetBrains+Mono:wght@400;500&family=Geist:wght@300;400;600&display=swap');
        .ach-display { font-family: 'Syne', sans-serif; }
        .ach-mono { font-family: 'JetBrains Mono', monospace; }
        .ach-sans { font-family: 'Geist', sans-serif; }
        
        .ach-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: radial-gradient(circle at 50% 50%, black, transparent 80%);
        }
      `}</style>

      <div className="ach-grid pointer-events-none" />
      
      {/* Background Glow */}
      <Motion.div 
        animate={{ background: item.accent }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.08] blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full flex flex-col h-full">
        {/* Header Label */}
        <h2 className="proj-display text-5xl md:text-7xl font-extrabold text-white leading-none tracking-tighter">
            BEHIND THE <span className="text-white/10">SCENCE.</span>
          </h2>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Carousel */}
          <div className="relative h-[500px] flex items-center justify-center" style={{ perspective: "1200px" }}>
            {items.map((it, i) => {
              const offset = mod(i - active + Math.floor(items.length / 2), items.length) - Math.floor(items.length / 2);
              return <Card key={i} item={it} offset={offset} onClick={() => offset === 0 ? setModal(it.img) : setActive(i)} />;
            })}
          </div>

          {/* Right: Text */}
          <div className="flex flex-col gap-12">
            <InfoPanel item={item} index={active} total={items.length} />
            
            {/* Nav controls */}
            <div className="flex items-center gap-6">
              <div className="flex gap-2">
                <button onClick={() => go(-1)} className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all active:scale-90">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={() => go(1)} className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all active:scale-90">
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="flex-1 flex flex-col gap-2">
                 <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <Motion.div 
                      animate={{ width: `${((active + 1) / items.length) * 100}%`, background: item.accent }}
                      className="h-full transition-colors"
                    />
                 </div>
                 <div className="flex justify-between ach-mono text-[9px] text-white/20 tracking-tighter">
                    <span>SECTOR_ACHIEVEMENT</span>
                    <span>{active + 1} / {items.length}</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {modal && (
          <Motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-6"
          >
            <button className="absolute top-10 right-10 text-white/50 hover:text-white"><X size={32}/></button>
            <Motion.img 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
              src={modal} className="max-w-5xl w-full h-auto rounded-lg shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}