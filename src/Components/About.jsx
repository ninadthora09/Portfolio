import React, { useRef, useState, useEffect } from "react";
import { motion as Motion, AnimatePresence, useInView } from "framer-motion";
import Photo from "../assets/Photo.png";
import aiImg from "../assets/Internship.jpg";
import fullstackImg from "../assets/Thynk_Tech.png";
import {
  Code2, Briefcase, GraduationCap, Terminal, ArrowUpRight, ExternalLink,
} from "lucide-react";

/* ── Data ──────────────────────────────────────────────────────────────── */
const SKILLS = [
  "JavaScript","React","Node.js","MongoDB","Express",
  "Tailwind","HTML5","Git","SQL","Python","Three.js",
];
const STATS = [
  { value:"300+", label:"Problems Solved",  accent:"#C8FF57" },
  { value:"10+",  label:"Projects Done",  accent:"#57C8FF" },
  { value:"3+",   label:"Years",     accent:"#FF8C57" },
];
const TABS = [
  { key:"about",  label:"About",      icon:Code2 },
  { key:"edu",    label:"Education",  icon:GraduationCap },
  { key:"exp",    label:"Experience", icon:Briefcase },
  { key:"coding", label:"Platforms",  icon:Terminal },
];
const EXPERIENCE = [
  { num:"01", role:"Machine learning Intern", company:"Edunet Foundation", duration:"2 months", desc: "Built and deployed an e-waste image classification model using Python and Deep Learning — covering end-to-end preprocessing, training, and evaluation — achieving 90%+ model accuracy and improving decision-making efficiency by 30%", accent:"#C8FF57", image:aiImg },
  { num:"02", role:"Frontend Engineer", company:"Thynk Technology India Pvt LTd", duration:"5 Months", desc:"Scalable MERN apps, REST APIs, Vercel & Railway deployments.", accent:"#57C8FF", image:fullstackImg },
];
const EDUCATION = [
  {
    num: "01",
    degree: "B.E. Computer Engineering",
    school: "Nutan Maharashtra Institute of Engineering and Technology",
    duration: "2022–2026",
    grade: "CGPA 8.17",
    accent: "#C8FF57",
    pdf: "/Latest.pdf", 
  },
  {
    num: "02",
    degree: "HSC (STATE)",
    school: "Bytco College Of Nashik",
    duration: "2021–2022",
    grade: "67.4%",
    accent: "#FF8C57",
  },
  {
    num: "03",
    degree: "SSC (CBSE)",
    school: "Kanchan Sudha International School",
    duration: "2019–2020",
    grade: "82.4%",
    accent: "#6dcaee",
  },
];
const PLATFORMS = [
  { name:"LeetCode", handle:"@ninadthorat", stat:"150+ solved", accent:"#FFA116", href:"https://leetcode.com/u/Ninadthorat/", logo:"LC" },
  { name:"HackerRank", handle:"@ninadthorat", stat:"5★ C++ and SQl", rank:"Gold", accent:"#2EC866", href:"https://www.hackerrank.com/profile/ninadthorat4", logo:"HR" },
  { name:"GeeksforGeeks", handle:"@ninadthorat", stat:"Institute Rank 80", rank:"Active", accent:"#2F8D46", href:"https://www.geeksforgeeks.org/profile/ninadthaql8", logo:"GG" },
  { name:"GitHub", handle:"@ninadthora09", stat:"10+ Repos", rank:"Active", accent:"#C8FF57", href:"https://github.com/ninadthora09", logo:"GH" },
];

/* ── Counter ─────────────────────────────────────────────────────────── */
const Counter = ({ target }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true });
  const [val, setVal] = useState("0");
  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(target), suffix = target.replace(/[0-9.]/g,"");
    let start = null;
    const tick = ts => {
      if (!start) start = ts;
      const p = Math.min((ts-start)/1300,1);
      setVal(Math.floor((1-Math.pow(1-p,4))*num)+suffix);
      if (p<1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  },[inView,target]);
  return <span ref={ref}>{val}</span>;
};

/* ── Tab panels ──────────────────────────────────────────────────────── */
const wrap = (key, children) => (
  <Motion.div key={key}
    initial={{ opacity:0, y:10, filter:"blur(4px)" }}
    animate={{ opacity:1, y:0,  filter:"blur(0px)" }}
    exit={{ opacity:0, y:-8, filter:"blur(4px)" }}
    transition={{ duration:.32, ease:[.16,1,.3,1] }}
  >{children}</Motion.div>
);

const AboutPanel = () => wrap("about",
  <div className="flex flex-col gap-4">
    <p className="ab-sans text-white/90 leading-[1.6]" style={{fontSize:"clamp(1.1rem, 1.4vw, 1.25rem)", fontWeight:450}}>
      Final-year Computer Engineering student focused on building <span className="text-[#C8FF57]">scalable backend logic</span> and intuitive frontend systems.
    </p>
    <p className="ab-sans text-[#7a7a7a] leading-[1.7]" style={{fontSize:"clamp(0.9rem, 1.1vw, 1.05rem)", fontWeight:400}}>
       MERN Stack Developer & AI Integration Specialist. I build high-performance web solutions that solve real problems, not just ship code. The same discipline I bring to the basketball court drives every architecture decision, every clean commit, and every product I deliver.
    </p>
    <div className="h-px w-32" style={{background:"linear-gradient(90deg,#C8FF57,transparent)"}} />
    <div className="flex flex-wrap gap-1.5 mt-2">
      {["Problem Solver","Fast Learner","Team Player"].map(t=>(
        <span key={t} className="ab-mono text-[9px] tracking-[.18em] uppercase px-3 py-1.5 rounded-lg"
          style={{color:"#C8FF57", border:"1px solid rgba(200,255,87,0.1)", background:"rgba(200,255,87,0.03)"}}>{t}</span>
      ))}
    </div>
  </div>
);

const ExpPanel = () => wrap("exp",
  <div className="flex flex-col gap-3">
    {EXPERIENCE.map((e,i)=>(
      <Motion.div key={i} className="group rounded-xl overflow-hidden"
        style={{border:"1px solid #1a1a1a",background:"#0d0d0d"}}
        whileHover={{borderColor:e.accent+"40"}}>
        <div className="flex items-stretch">
          <div className="relative w-24 md:w-28 shrink-0 overflow-hidden">
            <img src={e.image} alt={e.role} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            <div className="absolute inset-0" style={{background:`linear-gradient(to right,transparent 50%,#0d0d0d 100%)`}} />
          </div>
          <div className="flex-1 flex items-center justify-between gap-3 px-5 py-4">
            <div className="flex-1 min-w-0">
              <h4 className="ab-display text-[25px] font-bold text-white/80 group-hover:text-white transition-colors truncate">{e.role}</h4>
              <p className="ab-mono text-[15px] tracking-[.2em] uppercase mt-0.5" style={{color:e.accent+"88"}}>{e.company}</p>
              <p className="ab-sans text-[20px] text-[#555] mt-1 group-hover:text-[#888] line-clamp-1">{e.desc}</p>
            </div>
            <ArrowUpRight size={15} className="text-white/10 group-hover:text-[#C8FF57] transition-colors" />
          </div>
        </div>
      </Motion.div>
    ))}
  </div>
);

const EduPanel = () =>
  wrap(
    "edu",
    <div className="flex flex-col gap-3">
      {EDUCATION.map((e, i) => (
        <Motion.div
          key={i}
          className="group flex items-start gap-4 px-6 py-5 rounded-xl"
          style={{ background: "#0d0d0d", border: "1px solid #1a1a1a" }}
          whileHover={{ borderColor: e.accent + "38" }}
        >
          {/* LEFT ICON */}
          <div
            className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
            style={{
              background: e.accent + "18",
              border: `1px solid ${e.accent}28`,
            }}
          >
            <GraduationCap size={20} style={{ color: e.accent }} />
          </div>

          {/* MAIN CONTENT */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              
              <div>
                <h4 className="ab-display text-[25px] font-bold text-white/90 leading-tight">
                  {e.degree}
                </h4>

                <p
                  className="ab-mono text-[11px] tracking-[.2em] uppercase mt-1"
                  style={{ color: e.accent }}
                >
                  {e.school}
                </p>
              </div>

              {/* RIGHT SIDE: GRADE + PDF */}
              <div className="flex items-center gap-3">

                {/* GRADE */}
                <span className="ab-mono text-[13px] font-bold text-[#C8FF57]">
                  {e.grade}
                </span>

                {/* 🔥 PDF ICON BUTTON */}
                {e.pdf && (
                  <a
                    href={e.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-300 group/pdf"
                    style={{
                      borderColor: e.accent + "40",
                      background: "rgba(255,255,255,0.02)",
                    }}
                  >
                    {/* Icon */}
                    <span
                      className="text-xs font-bold"
                      style={{ color: e.accent }}
                    >
                      PDF
                    </span>
                  </a>
                )}

              </div>
            </div>
          </div>
        </Motion.div>
      ))}
    </div>
  );

const CodingPanel = () => wrap("coding",
  <div className="grid grid-cols-2 gap-10">
    {PLATFORMS.map((p,i)=>(
      <Motion.a key={i} href={p.href} target="_blank" rel="noopsener noreferrer"
        className="group flex items-center gap-8 px-4 py-4 rounded-xl border border-[#1a1a1a] bg-[#0d0d0d] no-underline transition-colors hover:border-[#C8FF57]/30">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0"
          style={{background:p.accent+"18",border:`1px solid ${p.accent}28`}}>
          <span className="ab-display font-black text-[16px]" style={{color:p.accent}}>{p.logo}</span>
        </div>
        <div className="flex-1 min-w-0">
          <span className="ab-display text-[20px] font-bold text-white/72 group-hover:text-white truncate block">{p.name}</span>
          <p className="ab-mono text-[15px] text-[#333] tracking-widest uppercase truncate">{p.stat}</p>
        </div>
      </Motion.a>
    ))}
  </div>
);

export default function About() {
  const [tab, setTab] = useState("about");

  return (
    <section id="about" className="about-root relative h-screen w-screen flex items-center overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=JetBrains+Mono:wght@400;500&family=Geist:wght@300;400;500;600&display=swap');
        .about-root { background:#0a0a0a; font-family:'Geist',sans-serif; }
        .ab-display { font-family:'Syne',sans-serif; }
        .ab-mono     { font-family:'JetBrains Mono',monospace; }
        .ab-sans     { font-family:'Geist',sans-serif; }
        
        .proj-display { font-family: 'Syne', sans-serif; }

        .about-root::after {
          content:''; position:absolute; inset:0; pointer-events:none; z-index:0;
          background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.02) 1px, transparent 0);
          background-size: 40px 40px;
        }

        .tab-pill {
          font-family:'JetBrains Mono',monospace;
          font-size:10px; letter-spacing:.22em; text-transform:uppercase;
          padding:8px 16px; border-radius:9px;
          border:1px solid rgba(255,255,255,.07);
          background:transparent; color:rgba(255,255,255,.24);
          cursor:pointer; position:relative;
        }
        .tab-pill.active { color:#000; border-color:transparent; }

        .ticker-track { animation: ticker 40s linear infinite; }
        @keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* ── Heading (Matching Crafted Works style) ── */}
        <Motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
             <span className="w-8 h-[1px] bg-[#C8FF57]" />
             <span className="ab-mono text-[10px] text-[#C8FF57] tracking-[.4em] uppercase">The Engineer</span>
          </div>
          <h2 className="proj-display text-5xl md:text-7xl font-extrabold text-white leading-none tracking-tighter">
            BEHIND THE <span className="text-white/10">CODE.</span>
          </h2>
        </Motion.div>

        {/* ── Main content grid ── */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-16 items-center">
          
          {/* Left — Visuals */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-[#0d0d0d] shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="flex-1" />
              </div>
              <img src={Photo} alt="Ninad" className="w-full aspect-[4/5] object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
              
              <div className="absolute bottom-6 right-6 flex flex-col items-end">
                {STATS.map((s,i)=>(
                  <div key={i} className="flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2 border-l border-[#C8FF57] mb-2 translate-x-4 group-hover:translate-x-0 transition-transform duration-500" style={{transitionDelay: `${i*100}ms`}}>
                    <span className="ab-display font-black text-xl text-white"><Counter target={s.value} /></span>
                    <span className="ab-mono text-[8px] text-white/40 uppercase tracking-widest">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Interactive Tabs */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex items-center gap-2 flex-wrap">
              {TABS.map(({key,label,icon:Icon})=>(
                <button key={key} onClick={()=>setTab(key)} className={`tab-pill ${tab===key?"active":""}`}>
                  {tab===key && <Motion.span layoutId="tab-bg" className="absolute inset-0 rounded-[8px] bg-[#C8FF57] -z-10" />}
                  <span className="flex items-center gap-2 relative z-10"><Icon size={12}/>{label}</span>
                </button>
              ))}
            </div>

            <div className="min-h-[280px]">
              <AnimatePresence mode="wait">
                {tab==="about" && <AboutPanel />}
                {tab==="exp" && <ExpPanel />}
                {tab==="edu" && <EduPanel />}
                {tab==="coding" && <CodingPanel />}
              </AnimatePresence>
            </div>

            {/* Bottom Skill Ticker */}
            <div className="relative overflow-hidden py-6 border-y border-white/5">
                <div className="ticker-track flex gap-16 whitespace-nowrap">
                  {[...SKILLS,...SKILLS].map((s,i)=>(
                    <span key={i} className="ab-mono text-[15px] text-white/20 uppercase tracking-[.4em] hover:text-[#C8FF57] transition-colors cursor-default">
                      {s}
                    </span>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}