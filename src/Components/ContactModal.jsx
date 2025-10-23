import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
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
      email: email,
      phone: phone,
      message: message,
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
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("success");
          setEmail("");
          setPhone("");
          setMessage("");

          // Auto-hide success message after 3 seconds
          setTimeout(() => setStatus(""), 3000);
        },
        (err) => {
          console.log("FAILED...", err);
          setStatus("error");
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50" style={{ fontFamily: "'Goldman', sans-serif" }}>
      <Motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl p-6 w-11/12 max-w-md shadow-xl relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 text-xl font-bold cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">Contact Me</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-sky-500 transition">
            <FaEnvelope className="text-sky-500 mr-2" />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none"
            />
          </div>

          {/* Phone */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-sky-500 transition">
            <FaPhone className="text-sky-500 mr-2" />
            <input
              type="text"
              placeholder="Your Phone"
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
              className="w-full outline-none"
            />
          </div>

          {/* Message */}
          <div className="flex items-start border border-gray-300 rounded-lg px-3 py-2 focus-within:border-sky-500 transition">
            <FaRegComment className="text-sky-500 mt-1 mr-2" />
            <textarea
              placeholder="Your Message"
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
              className="w-full outline-none resize-none h-24"
            />
          </div>

          <button
            type="submit"
            className={`bg-sky-500 text-white py-2 rounded-lg font-medium hover:bg-sky-600 transition`}
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {/* Status message */}
          {status === "success" && (
            <p className="text-green-500 font-medium mt-2">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 font-medium mt-2">
              Failed to send. Please try again.
            </p>
          )}
        </form>
      </Motion.div>
    </div>
  );
};

export default ContactModal;
