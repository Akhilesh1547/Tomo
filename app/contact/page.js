"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-white mb-6">
          Get in Touch with <span className="text-yellow-300">Tomo</span> 💬
        </h1>
        <p className="text-gray-300 text-center mb-10">
          We’d love to hear from you! Whether you have a question, feedback, or
          just want to say hi, fill out the form below, and we’ll get back to
          you soon.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex-1">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Type your message here..."
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-yellow-300 text-purple-900 font-bold rounded-lg shadow-md hover:bg-yellow-400 transition duration-200"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Message 🚀"}
            </button>
          </div>
        </form>

        {status === "success" && (
          <p className="text-green-400 text-center mt-4">Message sent successfully! 🎉</p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-center mt-4">Oops! Something went wrong. Please try again.</p>
        )}
      </div>
    </div>
  );
}
