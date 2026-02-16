import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import heroBg from "../assets/hero_background.jpg"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

        {/* HELLO WORLD */}
        <p className="text-red-500 text-xl md:text-2xl font-semibold tracking-widest mb-4">
          HELLO, WORLD!!
        </p>

        {/* NAME */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          It's Me <br />
          <span className="text-white-400">
            Shubhangi Wakchaure
          </span>
        </h1>

        {/* ROLE */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8">
          FullStack Developer | Java Developer | AI Enthusiast
        </p>

        {/* BUTTON */}
        <a
          href="#about"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 shadow-lg"
        >
          MORE ABOUT ME ↓
        </a>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://www.linkedin.com/in/shubhangi-wakchaure-1752522b2/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="h-8 w-8 md:h-9 md:w-9 hover:scale-110 transition duration-300"
            />
          </a>

          <a
            href="https://github.com/ShubhangiWakchaure"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={github}
              alt="GitHub"
              className="h-8 w-8 md:h-9 md:w-9 hover:scale-110 transition duration-300"
            />
          </a>
        </div>

      </div>
    </section>
  )
}