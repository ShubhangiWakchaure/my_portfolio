import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Code2, Smartphone, Database, Palette, Rocket } from "lucide-react";

const services = [
  {
    icon: <Code2 size={48} className="text-pink-500" />,
    title: "Web Development",
    desc: "Modern responsive websites development.",
  },
  {
    icon: <Smartphone size={48} className="text-pink-500" />,
    title: "Application Development",
    desc: "Full-stack apps with secure backend integration.",
  },
  {
    icon: <Database size={48} className="text-pink-500" />,
    title: "Database Design",
    desc: "Optimized MySQL schema & relationships.",
  },
  {
    icon: <Palette size={48} className="text-pink-500" />,
    title: "UI / UX Design",
    desc: "Clean modern interfaces with smooth experience.",
  },
  {
    icon: <Rocket size={48} className="text-pink-500" />,
    title: "Performance Optimization",
    desc: "Speed, SEO and scalable architecture.",
  },
];

const Services = () => {
  const [slide, setSlide] = useState(0);
  const totalSlides = 2; // 5 services → 2 slides (3 + 2)
  const touchStartX = useRef(null);

  // Arrow key support
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") {
        setSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
      }
      if (e.key === "ArrowLeft") {
        setSlide((prev) => (prev > 0 ? prev - 1 : prev));
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Touch support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX.current - touchEndX > 50) {
      setSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
    }
    if (touchEndX - touchStartX.current > 50) {
      setSlide((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  return (
     <section
    id="services"
    className="relative py-28 px-6 text-white overflow-hidden bg-[#0d0d14]"
  >

      {/* 🔥 Wave Background */}
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 w-full opacity-10"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ec4899"
            fillOpacity="1"
            d="M0,192L80,170.7C160,149,320,107,480,112C640,117,800,171,960,181.3C1120,192,1280,160,1360,144L1440,128V320H0Z"
          ></path>
        </svg>

        <div className="absolute -top-50 -left-50 w-125 h-125 bg-purple-600 opacity-20 blur-[150px] rounded-full"></div>
        <div className="absolute -bottom-50 -right-50 w-125 h-125 bg-pink-600 opacity-20 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            Services
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            What I Can Do For You
          </h2>
          <p className="text-gray-400 text-sm mt-5 max-w-xl mx-auto">
            I help turn ideas into real, working digital products.
          </p>
        </div>

        {/* Slider */}
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            animate={{ x: `-${slide * 100}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex"
          >
            {/* Slide 1 */}
            <div className="min-w-full grid md:grid-cols-3 gap-10 text-center">
              {services.slice(0, 3).map((service, index) => (
                <div key={index}>
                  <div className="flex justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm px-6">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Slide 2 */}
            <div className="min-w-full grid md:grid-cols-2 gap-10 text-center">
              {services.slice(3, 5).map((service, index) => (
                <div key={index}>
                  <div className="flex justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm px-6">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-12 space-x-4">
          {[0, 1].map((dot) => (
            <button
              key={dot}
              onClick={() => setSlide(dot)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                slide === dot
                  ? "bg-pink-500 scale-125"
                  : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;