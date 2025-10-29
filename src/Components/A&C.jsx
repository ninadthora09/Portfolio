import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

// Import your images
import cert1 from "../assets/Internship.jpg";
import cert2 from "../assets/GenerativeAI.jpg";
import cert3 from "../assets/Hackathon.jpg";
import cert4 from "../assets/JavaScript certification.png";
import cert5 from "../assets/JavaScript certification.png";

const certifications = [
  { title: "AI Internship", organization: "Edunet Foundation", image: cert1 },
  { title: "Green Skills", organization: "Edunet Foundation", image: cert2 },
  { title: "NPTEL DS", organization: "IIT Bombay", image: cert3 },
  { title: "ML Foundations", organization: "Coursera", image: cert4 },
  { title: "React Expert", organization: "Udemy", image: cert5 },
];

export default function CertificationsPage() {
  const [modalImage, setModalImage] = useState(null);

  return (
    <section
      id="certifications"
      className="min-h-screen flex flex-col items-center justify-center scroll-mt-8 px-6 py-10 bg-gray-50"
      style={{ fontFamily: "'Goldman', sans-serif" }}
    >
      {/* Subtle animated background particles */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <Motion.div
          className="absolute w-96 h-96 bg-sky-300/30 rounded-full blur-3xl top-10 left-20"
          animate={{ y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <Motion.div
          className="absolute w-80 h-80 bg-indigo-300/30 rounded-full blur-3xl bottom-10 right-20"
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>

      {/* Modern Heading */}
      <div className="max-w-6xl mx-auto text-center mb-5 relative">
        <Motion.h1
          className="text-5xl font-bold text-gray-900 mb-0 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Certifications
        </Motion.h1>

        {/* Animated underline */}
        <Motion.div
          className="mx-auto h-[4px] w-24 rounded-full bg-gradient-to-r from-sky-400 to-blue-500"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 96, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        />

        <Motion.p
          className="text-gray-600 text-center max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          Every certificate here represents a step in my journey of learning and
          professional growth.
        </Motion.p>
      </div>

      {/* Olympic-style layout */}
      <div className="relative flex justify-center items-center flex-col">
        {/* Top row - 3 cards */}
        <div className="flex gap-10 justify-center flex-wrap">
          {certifications.slice(0, 3).map((cert, index) => (
            <Motion.div
              key={index}
              onClick={() => setModalImage(cert.image)}
              className="relative w-52 sm:w-64 md:w-72 lg:w-80 aspect-square rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
              whileHover={{ rotateY: 10, rotateX: 5, scale: 1.07 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                delay: index * 0.15,
              }}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
              <div className="absolute top-4 left-4 text-white drop-shadow-lg backdrop-blur-sm bg-black/20 px-3 py-1 rounded-lg">
                <h3 className="text-lg font-extrabold tracking-wide">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  {cert.organization}
                </p>
              </div>
            </Motion.div>
          ))}
        </div>

        {/* Bottom row - 2 cards */}
        <div className="flex gap-10 justify-center -mt-20 flex-wrap">
          {certifications.slice(3, 5).map((cert, index) => (
            <Motion.div
              key={index + 3}
              onClick={() => setModalImage(cert.image)}
              className="relative w-52 sm:w-64 md:w-72 lg:w-80 aspect-square rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
              whileHover={{ rotateY: 10, rotateX: 5, scale: 1.07 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                delay: (index + 3) * 0.15,
              }}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
              <div className="absolute top-4 left-4 text-white drop-shadow-lg backdrop-blur-sm bg-black/20 px-3 py-1 rounded-lg">
                <h3 className="text-lg font-extrabold tracking-wide">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  {cert.organization}
                </p>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalImage && (
          <Motion.div
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
          >
            <Motion.img
              src={modalImage}
              alt="Certificate"
              className="max-h-full max-w-full rounded-2xl shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
