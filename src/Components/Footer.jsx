export default function Footer() {
  const handleHireMeClick = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }

    // Glow effect on contact button
    const contactBtn = document.getElementById("contact-btn");
    if (contactBtn) {
      contactBtn.classList.add(
        "shadow-[0_0_60px_20px_rgba(56,189,248,1)]", // ultra-bright neon cyan glow
        "animate-pulse"
      );
      setTimeout(() => {
        contactBtn.classList.remove(
          "shadow-[0_0_60px_20px_rgba(56,189,248,1)]", // ultra-bright neon cyan glow
          "animate-pulse"
        );
      }, 5000); // glow for 5 seconds
    }
  };

  return (
    <footer
      className="w-full flex items-center justify-between px-8 md:px-20 py-5 bg-gray-50"
      style={{ fontFamily: "'Goldman', sans-serif" }}
    >
      {/* Centered Footer Text + Hand */}
      <p className="text-gray-900 text-xl md:text-base flex items-center justify-center w-full gap-2 text-center">
        © {new Date().getFullYear()}{" "}
        <span className="font-bold">Ninad Thorat</span> | Built with Passion
        using React & Tailwind CSS
        <span className="ml-3 text-4xl animate-bounce">👉</span>
      </p>

      {/* Hire Me Button (slightly inward) */}
      <button
        id="hire-btn"
        onClick={handleHireMeClick}
        className="
          absolute 
          right-8 md:right-60
          font-bold 
          text-white 
          bg-sky-500 
          rounded-xl
          px-6 py-3 
          mb-4  
          transition-all 
          duration-500 
          hover:bg-black 
          hover:text-sky-400
          hover:scale-105 
          hover:shadow-[0_0_15px_rgba(14,165,233,0.8)]
          cursor-pointer
        "
      >
        Hire Me
      </button>
    </footer>
  );
}
