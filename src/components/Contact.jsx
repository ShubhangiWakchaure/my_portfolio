import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const fullText = "Get in touch with me";
  const [displayText, setDisplayText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

 // Typewriter effect (infinite loop)
useEffect(() => {
  let i = 0;
  let isDeleting = false;

  const typing = setInterval(() => {
    if (!isDeleting) {
      setDisplayText(fullText.substring(0, i + 1));
      i++;

      if (i === fullText.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 1000); // pause before deleting
      }
    } else {
      setDisplayText(fullText.substring(0, i - 1));
      i--;

      if (i === 0) {
        isDeleting = false;
      }
    }
  }, 80);

  return () => clearInterval(typing);
}, []);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setShowModal(true);

    emailjs
      .sendForm(
         "service_t77y8zd",
        "template_2nwx5is",
        form.current,
        "7igHKBY2IgAGtYNfU"
      )
      .then(() => {
        form.current.reset();
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden bg-[#0b0b12] text-white"
    >
      {/* 🔥 Modern Background Structure */}
      <div className="absolute inset-0">
        {/* Glow blobs */}
        <div className="absolute -top-40 -left-40 w-100 h-100 bg-pink-600 opacity-20 blur-[150px] rounded-full"></div>
        <div className="absolute -bottom-40 -right-40 w-100 h-100 bg-purple-600 opacity-20 blur-[150px] rounded-full"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[30px_30px] opacity-20"></div>

        {/* Soft wave */}
        <svg
          className="absolute bottom-0 w-full opacity-10"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ec4899"
            d="M0,160L80,170C160,180,320,200,480,192C640,184,800,148,960,133C1120,117,1280,123,1360,128L1440,133V320H0Z"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Contact Me
        </h2>

        {/* Animated Subtitle */}
        <h3 className="text-2xl md:text-3xl text-pink-500 mt-6 min-h-10 font-semibold">
          {displayText}
          <span className="animate-pulse">...</span>
        </h3>

        <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
          Have a project in mind or just want to say hello?
          I’d love to hear from you — let’s create something amazing together.
        </p>

        {/* Compact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-14 max-w-lg mx-auto space-y-6 bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            required
            className="w-full bg-black/40 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <input
            type="email"
            name="from_email"
            placeholder="Email"
            required
            className="w-full bg-black/40 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full bg-black/40 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            required
            className="w-full bg-black/40 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 transition py-3 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white text-black p-8 rounded-xl text-center max-w-sm">
            <h3 className="text-lg font-semibold mb-2">
              {loading ? "Sending..." : "Message sent successfully"}
            </h3>

            {!loading && (
              <>
                <p className="text-sm mb-4">
                  Thank you for reaching out to me.
                </p>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-pink-600 text-white px-4 py-2 rounded-lg"
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;