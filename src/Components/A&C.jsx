import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

// Import your images from assets
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
      className="min-h-screen py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white via-blue-50 to-white bg-#064b74-400"
      id="certifications"
      style={{ fontFamily: "'Goldman', sans-serif"}}
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        {/* Clean, stable heading */}
        <Motion.h1
          className="text-6xl font-extrabold mb-4"
          style={{ color: "#00A6F4" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Certifications
        </Motion.h1>

        <p className="text-gray-600 text-lg">
          Explore all my professional certifications in one place.
        </p>
      </div>

      {/* Olympic-style layout */}
      <div className="relative flex justify-center items-center flex-col">
        {/* Top row - 3 cards */}
        <div className="flex gap-8 justify-center flex-wrap">
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
        <div className="flex gap-8 justify-center -mt-20 flex-wrap">
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
