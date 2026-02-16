import shopperLogo from "../assets/projects/Shopper.png"
import emptrackLogo from "../assets/projects/emptrack.jpg"
import mahayatraLogo from "../assets/projects/mahayatra.png" 
import translylogo from "../assets/projects/Transly.png"
import accidentlogo from "../assets/projects/accident.png"

const projects = [
  {
    logo: shopperLogo,
    title: "Shopper – E-commerce Website",
    description:
      "A full-featured e-commerce platform with product browsing, cart management, and secure checkout functionality.",
    tech: ["React", "MySQL", "HTML", "CSS", "JavaScript"],
    repo: "https://github.com/ShubhangiWakchaure/Ecommerce-website",
    demo:"#"
  },
  {
    logo: emptrackLogo,
    title: "EmpTrack – Employee Management System",
    description:
      "A role-based employee management system where admins manage employees and users securely access their profiles.",
    tech: ["Java", "Servlets", "JSP", "MySQL", "Bootstrap"],
    repo: "https://github.com/ShubhangiWakchaure/Employee-Management-System",
    demo:"#"
  },
  {
    logo: mahayatraLogo,
    title: "MahaYatra – Bus & Train Reservation",
    description:
      "An online reservation system featuring seat selection, route search, and booking management.",
    tech: ["Spring Boot", "Thymeleaf", "MySQL", "REST API"],
    repo: "https://github.com/ShubhangiWakchaure/Reservation-System",
    demo:"#"
  },
   {
    logo:translylogo,
    title: "Transly – AI Language Agent",
    description:
      "An AI-powered assistant capable of translating and understanding multiple languages using NLP models.",
    tech: ["Python", "Google Gemini API", "AI/NLP", "Gradio"],
    repo: "https://github.com/ShubhangiWakchaure/Transly_AI_Agent",
    demo: "#",
  },
  {
    logo:accidentlogo,
    title: "AI-Based Accident Detection System",
    description:
      "A computer vision system that detects road accidents in real-time using deep learning and video processing.",
    tech: ["Python", "OpenCV", "YOLO", "Deep Learning","IOT"],
    repo: "https://github.com/ShubhangiWakchaure",
    demo: "#",
  },
]

const Projects = () => {
  return (
   <section
  id="projects"
  className="w-full py-20 px-6 bg-gray-900"
>
  {/* Title */}
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-white">
      Projects
    </h2>
    <div className="w-24 h-1 bg-purple-600 mx-auto mt-3 rounded-full"></div>
        <p>A showcase of the projects I have worked on across different technologies</p>
  </div>

  {/* Grid */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {projects.map((project, index) => (
      <div
        key={index}
        className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-8 flex flex-col items-center text-center border border-gray-700"
      >
        {/* Logo */}
        <img
          src={project.logo}
          alt={project.title}
          className="w-24 h-24 object-contain mb-6"
        />

        {/* Title */}
        <h3 className="text-lg font-semibold text-white mb-4">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-6">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-purple-700 text-white font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-auto">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-gray-600 text-white text-sm hover:bg-black transition duration-300"
          >
            View Repo
          </a>

          <button
            disabled
            className="px-5 py-2 rounded-full bg-purple-600 text-white text-sm opacity-60 cursor-not-allowed"
          >
            View Demo
          </button>
        </div>
      </div>
    ))}
  </div>
</section>
  )
}

export default Projects