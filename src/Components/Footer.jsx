import React from "react";
import { motion as Motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

const LINKS = [
  { label: "About",        href: "#about" },
  { label: "Projects",     href: "#projects" },
  { label: "Achievements", href: "#achievements" },
];

const SOCIALS = [
  { icon: Github,   href: "https://github.com/ninadthora09",     label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/ninadthorat", label: "LinkedIn" },
  { icon: Mail,     href: "mailto:ninad@example.com",            label: "Email" },
];

const handleHireMe = () => {
  const hero = document.getElementById("hero");
  if (hero) hero.scrollIntoView({ behavior: "smooth" });

  const btn = document.getElementById("contact-btn");
  if (btn) {
    btn.classList.add("shadow-[0_0_60px_20px_rgba(200,255,87,0.6)]", "animate-pulse");
    setTimeout(() =>
      btn.classList.remove("shadow-[0_0_60px_20px_rgba(200,255,87,0.6)]", "animate-pulse"),
    5000);
  }
};

export default function Footer() {
  return (
    <footer className="footer-root relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500&family=Geist:wght@300;400;500;600&display=swap');

        .footer-root {
          background: #0a0a0a;
          font-family: 'Geist', sans-serif;
        }
        .ft-display { font-family: 'Syne', sans-serif; }
        .ft-mono    { font-family: 'JetBrains Mono', monospace; }

        /* Same grid */
        .footer-root::after {
          content: '';
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        /* Same noise */
        .footer-root::before {
          content: '';
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.6;
        }

        @keyframes pulse-dot {
          0%,100%{ opacity:1; transform:scale(1); }
          50%{ opacity:0.3; transform:scale(0.6); }
        }
        .pulse-dot { animation: pulse-dot 2s ease-in-out infinite; }

        /* Hire Me button shimmer */
        @keyframes hire-shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .hire-btn {
          background: linear-gradient(110deg, #C8FF57 0%, #a8d83a 40%, #C8FF57 60%, #a8d83a 100%);
          background-size: 300% auto;
          animation: hire-shimmer 3s linear infinite;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #000;
          border: none;
          padding: 11px 24px;
          border-radius: 12px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.3s;
        }
        .hire-btn:hover {
          transform: scale(1.05) translateY(-1px);
          box-shadow: 0 0 32px rgba(200,255,87,0.35);
        }
        .hire-btn:active { transform: scale(0.97); }

        .nav-link {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.22);
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-link:hover { color: rgba(255,255,255,0.7); }

        .social-btn {
          display: flex; align-items: center; justify-content: center;
          width: 36px; height: 36px; border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.02);
          color: rgba(255,255,255,0.3);
          transition: all 0.22s;
          text-decoration: none;
        }
        .social-btn:hover {
          border-color: rgba(200,255,87,0.35);
          background: rgba(200,255,87,0.07);
          color: #C8FF57;
          transform: translateY(-2px);
        }
      `}</style>

      {/* Glow orb */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(200,255,87,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* ── Top separator ── */}
        <div
          className="h-px"
          style={{ background: "linear-gradient(90deg, transparent, #1e1e1e 20%, #2a2a2a 50%, #1e1e1e 80%, transparent)" }}
        />

        {/* ── Main footer body ── */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

          {/* LEFT — Branding */}
          <Motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {/* Label dot row */}
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF57] pulse-dot block" />
              <div className="w-1 h-1 rounded-full bg-[#3a3a3a]" />
              <div className="w-1 h-1 rounded-full bg-[#2a2a2a]" />
              <span className="ft-mono text-[9px] text-[#3a3a3a] tracking-[0.35em] uppercase">
                Portfolio · 2024
              </span>
            </div>

            <h2
              className="ft-display font-bold text-white leading-tight tracking-tight"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.1rem)" }}
            >
              Ninad<br />
              <span
                style={{
                  background: "linear-gradient(135deg, #C8FF57 0%, #57C8FF 50%, #FF8C57 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Thorat.
              </span>
            </h2>

            <p className="ft-mono text-[10px] text-[#3a3a3a] tracking-wider leading-relaxed max-w-[220px]">
              Full-Stack Developer & AI Enthusiast — turning complex problems into elegant solutions.
            </p>
          </Motion.div>

          {/* CENTER — Nav + Socials */}
          <Motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Nav links */}
            <div className="flex items-center gap-6">
              {LINKS.map((l) => (
                <a key={l.label} href={l.href} className="nav-link">
                  {l.label}
                </a>
              ))}
            </div>

            {/* Thin divider */}
            <div
              className="w-24 h-px"
              style={{ background: "linear-gradient(90deg, transparent, #2a2a2a, transparent)" }}
            />

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-btn" title={label}>
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </Motion.div>

          {/* RIGHT — Hire Me CTA */}
          <Motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-end gap-4"
          >
            <div className="flex flex-col items-end gap-1.5">
              <span className="ft-mono text-[9px] text-[#3a3a3a] tracking-[0.3em] uppercase">
                Open to work
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#28C840] pulse-dot block" />
                <span className="ft-mono text-[9px] text-[#28C840]/60 tracking-widest">Available</span>
              </div>
            </div>

            <button className="hire-btn" onClick={handleHireMe}>
              Hire Me <ArrowUpRight size={12} className="inline ml-1 -mt-0.5" />
            </button>

            <span className="ft-mono text-[9px] text-[#2a2a2a] tracking-wider">
              Built with React & Tailwind
            </span>
          </Motion.div>
        </div>

        {/* ── Bottom strip ── */}
        <div
          className="h-px mb-5"
          style={{ background: "linear-gradient(90deg, #1e1e1e, #2a2a2a 40%, transparent)" }}
        />
        <div className="pb-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="ft-mono text-[10px] text-[#2a2a2a] tracking-wide">
            ✦ more work in progress
          </p>
          <p className="ft-mono text-[10px] text-[#2a2a2a] tracking-widest text-center">
            © {new Date().getFullYear()} Ninad Thorat · All rights reserved
          </p>
          <p className="ft-mono text-[10px] text-[#2a2a2a] tracking-wide">
            ninadthora09
          </p>
        </div>
      </div>
    </footer>
  );
}