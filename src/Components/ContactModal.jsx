import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPhone, FaRegComment } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // '', 'sending', 'success', 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const templateParams = {
      email,
      phone,
      message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_zhdwilm",
        "template_eaq38gq",
        templateParams,
        "h3j4BQUtyHj2_FhSW"
      )
      .then(
        () => {
          setStatus("success");
          setEmail("");
          setPhone("");
          setMessage("");

          // 🔥 Auto close after success
          setTimeout(() => {
            setStatus("");
            onClose();
          }, 1500);
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          {/* 🔥 Background Blur Overlay */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
          />

          {/* 💎 Modal */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
            className="relative w-11/12 max-w-md p-6 rounded-2xl 
                       bg-white/80 backdrop-blur-lg 
                       border border-white/30 
                       shadow-2xl"
            style={{ fontFamily: "'Goldman', sans-serif" }}
          >
            {/* ❌ Close */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-5 text-gray-900">
              Contact Me
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              {/* Email */}
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 
                              focus-within:ring-2 focus-within:ring-sky-400 transition">
                <FaEnvelope className="text-sky-500 mr-2" />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full outline-none bg-transparent"
                />
              </div>

              {/* Phone */}
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 
                              focus-within:ring-2 focus-within:ring-sky-400 transition">
                <FaPhone className="text-sky-500 mr-2" />
                <input
                  type="text"
                  placeholder="Your Phone"
                  value={phone}
                  required
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full outline-none bg-transparent"
                />
              </div>

              {/* Message */}
              <div className="flex items-start border border-gray-300 rounded-lg px-3 py-2 
                              focus-within:ring-2 focus-within:ring-sky-400 transition">
                <FaRegComment className="text-sky-500 mt-1 mr-2" />
                <textarea
                  placeholder="Your Message"
                  value={message}
                  required
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full outline-none resize-none h-24 bg-transparent"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className="bg-gradient-to-r from-sky-500 to-blue-600 
                           text-white py-2 rounded-lg font-medium 
                           hover:scale-105 active:scale-95 
                           transition duration-200 disabled:opacity-50"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                  ? "Sent ✅"
                  : "Send Message"}
              </button>

              {/* Status */}
              {status === "error" && (
                <p className="text-red-500 text-sm">
                  ❌ Failed to send. Try again.
                </p>
              )}
            </form>
          </Motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;