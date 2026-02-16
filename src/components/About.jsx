import Tilt from "react-parallax-tilt";
import profilePic from "../assets/Profile.jpeg"; // make sure path is correct

const About = () => {
  return (
    <section id="about" className="w-full bg-slate-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* LEFT SIDE */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-24 h-1 bg-purple-500 mb-6 mx-auto md:mx-0"></div>

          <p className="text-gray-300 leading-relaxed mb-6">
            Hello! I'm <strong className="text-white">Shubhangi Wakchaure</strong>, a dedicated Developer with a strong interest in creating clean, efficient, and user-focused applications. I enjoy turning ideas into real digital experiences and constantly pushing myself to learn and evolve in the tech world.
          </p>

          {/* PERSONAL DETAILS */}
          <div className="text-gray-400 space-y-2 mb-8 text-sm sm:text-base">
            <p><span className="text-white font-medium">Full Name:</span> Shubhangi Nanasaheb Wakchaure</p>
            <p><span className="text-white font-medium">Email:</span> shubhangiwakchaure3@gmail.com</p>
            <p><span className="text-white font-medium">Phone:</span> +91 7350400437</p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full font-medium transition duration-300 shadow-md hover:scale-105"
            >
              Hire Me
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-purple-500 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-full font-medium transition duration-300 hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — PROFILE WITH TILT + ANIMATION */}
        <div className="flex-1 flex justify-center">
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            transitionSpeed={1500}
            scale={1.05}
            gyroscope={true}
            className="w-64 h-64 md:w-80 md:h-80"
          >
            <img
              src={profilePic}
              alt="Shubhangi Wakchaure"
              className="w-full h-full object-cover rounded-full border-4 border-purple-500 shadow-lg transition duration-500 hover:shadow-purple-500/40"
            />
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default About;