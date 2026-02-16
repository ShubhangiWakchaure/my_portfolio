import { useState } from "react"
import {motion , AnimatePresence } from "framer-motion"

// Import your assets (adjust paths if needed)
import logo from "../assets/logo.png"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Education", id: "education" },
  { name: "Projects", id: "projects" },
  { name: "Services", id: "services" },
  { name: "Contact", id: "contact" },
]

  return (
    <>
      {/* NAVBAR */}
        <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 w-full z-50 bg-linear-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] shadow-[0_2px_10px_rgba(0,0,0,0.4)] text-white"
        >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LEFT - LOGO */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* CENTER - NAV LINKS (Desktop Only) */}
    <ul className="hidden md:flex gap-10 text-base lg:text-lg font-semibold">
  {navLinks.map((link) => (
    <li key={link.id}>
      <a
        href={`#${link.id}`}
        className="cursor-pointer hover:text-purple-400 transition duration-300"
      >
        {link.name}
      </a>
    </li>
  ))}
</ul>

          {/* RIGHT - SOCIAL ICONS (Desktop Only) */}
          <div className="hidden md:flex items-center gap-5">
            <a
            href="https://www.linkedin.com/in/shubhangi-wakchaure-1752522b2/"
            target="_blank"
            rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="h-8 w-8 hover:scale-110 transition duration-300"
              />
            </a>
               <a
                href="https://github.com/ShubhangiWakchaure"
                target="_blank"
                rel="noopener noreferrer"
                >
              <img
                src={github}
                alt="GitHub"
                className="h-8 w-8 hover:scale-110 transition duration-300"
              />
            </a>
          </div>

          {/* MOBILE - HAMBURGER */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)}>
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-72 bg-slate-950 z-50 p-8 shadow-2xl"
            >
              <button
                className="mb-8 text-white text-right w-full"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
                <ul className="flex flex-col gap-7 text-xl font-semibold">
                {navLinks.map((link) => (
                    <li key={link.id}>
                    <a
                        href={`#${link.id}`}
                        onClick={() => setIsOpen(false)}
                        className="cursor-pointer hover:text-purple-400 transition"
                    >
                        {link.name}
                    </a>
                            </li>
                        ))}
                        </ul>

              {/* Resume Button */}
              <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer"className="mt-8 inline-block bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center">
                Download Resume
             </a>

              {/* Social Icons */}
              <div className="flex gap-6 mt-8">
                <a
                href="https://www.linkedin.com/in/shubhangi-wakchaure-1752522b2/"
                target="_blank">
                <img src={linkedin} alt="LinkedIn" className="h-8 w-8" />
                </a>
                  <a href="https://github.com/ShubhangiWakchaure" target="_blank">
                <img src={github} alt="GitHub" className="h-8 w-8" />
                </a>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar