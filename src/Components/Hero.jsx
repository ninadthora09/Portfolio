import React, { useState, useEffect, useRef } from "react";
import { motion as Motion } from "framer-motion";
import * as THREE from "three";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import RobotImage from "../assets/Robot.png";
import ContactModal from "./ContactModal";

const roles = ["Software Engineer", "Full-Stack Developer", "AI/ML Explorer"];

const RotatingText = ({ phrases }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <span className="text-sky-500 font-bold">
      <Motion.span
        key={phrases[index]}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
      >
        {phrases[index]}
      </Motion.span>
    </span>
  );
};

const Hero = () => {
  const canvasRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // THREE.js Particles
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      canvas: canvasRef.current,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 50;

    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 200;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: 0.8,
      transparent: true,
      opacity: 0.8,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      particles.rotation.x += 0.0008;
      particles.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section  id="hero" className="relative w-full h-screen overflow-hidden flex items-center bg-gray-50" >
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      />

      {/* Left - Robot Image */}
      <div className="hidden md:flex flex-1 justify-center items-center z-10 relative pl-10">
        <div className="absolute w-64 h-64 bg-sky-400/30 rounded-full blur-3xl -z-10 left-1/2 transform -translate-x-1/2"></div>
        <img
          src={RobotImage}
          alt="Robot"
          className="w-64 h-auto animate-bounce-slow z-10"
        />
      </div>

      {/* Right - Text */}
      <div className="relative z-10 flex flex-col justify-center flex-2 px-6 text-left md:text-left"
        style={{ fontFamily: "'Goldman', sans-serif" }}
      >
        <Motion.p
          className="text-2xl sm:text-3xl font-semibold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I’m Ninad Thorat 👋
        </Motion.p>

        <Motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mt-4 leading-tight max-w-4xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 120, damping: 10 }}
          style={{ fontFamily: "'Goldman', sans-serif" }}
        >
          An aspiring <RotatingText phrases={roles} /> passionate about
          building smart, impactful digital solutions.
        </Motion.h1>

        <Motion.p
          className="text-lg sm:text-xl text-gray-700 mt-4 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Final-Year Computer Engineering Student | Web Development, Data Science & AI Enthusiast
        </Motion.p>
      </div>

      {/* Scroll Button */}
      <Motion.div
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer z-20"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Motion.div
          className="w-4 h-4 rounded-full bg-sky-500 mb-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-gray-800 font-bold text-lg" style={{ fontFamily: "'Goldman', sans-serif" }}>Scroll Down</span>
      </Motion.div>

      {/* Right buttons */}
      <div className="absolute bottom-20 right-4 md:right-10 flex flex-col space-y-3 md:space-y-4 z-20">
        <Motion.button
          className="bg-gray-900 text-white px-3 py-2 md:px-5 md:py-2 rounded-full font-medium text-sm md:text-base hover:bg-sky-600 transition duration-300 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ fontFamily: "'Goldman', sans-serif" }}
        >
          Download Resume
        </Motion.button>

        <Motion.button
          onClick={openModal}
          id="contact-btn"
          className="border-2 border-sky-500 text-sky-500 px-3 py-2 md:px-5 md:py-2 rounded-full font-medium text-sm md:text-base hover:bg-sky-100 transition duration-300 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ fontFamily: "'Goldman', sans-serif" }}
        >
          Contact Me
        </Motion.button>
      </div>

      {/* Social Links */}
      <div className="fixed top-1/3 right-4 flex flex-col space-y-6 z-20">
        <a
          href="https://github.com/ninadthora09"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-sky-500 transition-colors duration-300"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/ninadthora09"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-sky-500 transition-colors duration-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-sky-500 transition-colors duration-300"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-sky-500 transition-colors duration-300"
        >
          <FaInstagram size={24} />
        </a>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Hero;
