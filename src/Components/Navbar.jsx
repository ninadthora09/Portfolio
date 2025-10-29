import React, { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "hero", name: "Home" },
  { id: "about", name: "About/Skills" },
  { id: "projects", name: "Projects" },
  { id: "certifications", name: "Credentials" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  const scrollToSection = (id) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsOpen(false);
  };

  // Scroll listener to change navbar background & active link
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Check active section
      let current = "hero";
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.getBoundingClientRect().top;
          if (top <= 100) current = section.id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Motion.header
      style={{ fontFamily: "'Goldman', sans-serif" }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-lg bg-white/30 shadow-lg"
          : "bg-white/20 backdrop-blur-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-5">
          {/* Logo */}
          <Motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-3xl md:text-4xl font-bold font-[Pacifico] text-gray-900 hover:text-sky-500 transition-colors duration-300"
            style={{ fontFamily: "'Goldman', sans-serif" }}
          >
            NINAD.T
          </Motion.h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 md:space-x-6 items-center">
            {sections.map((section, i) => (
              <Motion.a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section.id);
                }}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                className={`relative px-4 py-2 text-lg text-gray-800 
                            border-2 border-gray-200 rounded-xl 
                            hover:bg-white hover:text-black
                            transition-all duration-300 shadow-md hover:shadow-lg 
                           }`}
              >
                {section.name}
              </Motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-sky-100/30 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="text-gray-800" size={28} />
            ) : (
              <Menu className="text-gray-800" size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="md:hidden absolute w-full bg-white/90 backdrop-blur-lg shadow-lg"
          >
            {sections.map((section, i) => (
              <Motion.a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section.id);
                }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
                className={`block px-6 py-3 text-lg font-[Dancing+Script] rounded transition-all duration-300 ${
                  active === section.id
                    ? "text-sky-500 font-bold"
                    : "text-gray-800 hover:text-sky-500 hover:bg-sky-100/70"
                }`}
              >
                {section.name}
              </Motion.a>
            ))}
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.header>
  );
};

export default Navbar;
