import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    const footerObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          const timer = setTimeout(() => {
            // Scroll to Hero section
            const heroSection = document.getElementById("hero");
            if (heroSection) {
              heroSection.scrollIntoView({ behavior: "smooth" });
            }

            // Glow effect on contact button
            const contactBtn = document.getElementById("contact-btn");
            if (contactBtn) {
              contactBtn.classList.add("animate-glow");
              setTimeout(() => {
                contactBtn.classList.remove("animate-glow");
              }, 5000); // stop glowing after 4 sec
            }
          }, 3000); // 3 sec delay

          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of footer is visible
    );

    const footerElement = document.querySelector("footer");
    if (footerElement) {
      footerObserver.observe(footerElement);
    }

    return () => footerObserver.disconnect();
  }, []);

  return (
    <footer
      className="w-full py-4"
      style={{ fontFamily: "'Goldman', sans-serif" }}
    >
      <p className="text-center text-gray-500 text-sm mt-4">
        © {new Date().getFullYear()} Ninad Thorat | Built with ❤️ using React &
        Tailwind CSS.
      </p>
    </footer>
  );
}
