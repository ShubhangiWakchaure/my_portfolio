import {
  GraduationCap
} from "lucide-react"

import universityLogo from "../assets/university.png"
import beLogo from "../assets/institute.png"
import hscLogo from "../assets/college.png"
import sscLogo from "../assets/school.png"

const educationData = [
  {
    type: "University",
    date: "Sept 2022 - June 2026",
    institute: "Savitribai Phule Pune University",
    logo: universityLogo,
    description:
      "Savitribai Phule Pune University is one of the most prestigious universities in Maharashtra, known for academic excellence and diverse programs across engineering, science, commerce, and arts."
  },
  {
    type: "Bachelor of Engineering",
    date: "Sept 2022 - June 2026",
    institute: "Sir Visvesvaraya Institute of Technology, Nashik",
    logo: beLogo,
    description:
      "Persuing Bachelor of Computer Engineering with strong focus on software development, problem solving, and practical project implementation."
  },
  {
    type: "HSC",
    date: "May 2021 - March 2022",
    institute: "G.M.D Arts,B.W Commerce & Science College ,Sinnar",
    logo: hscLogo,
    description:
      "Higher Secondary education with strong foundation in science and mathematics."
  },
  {
    type: "SSC",
    date: "May 2019 - March 2020",
    institute: "Matoshri C & A Chandak Kanya Vidyalay,Sinnar",
    logo: sscLogo,
    description:
      "Secondary School education building core academic fundamentals."
  }
]

const Education = () => {
  return (
    <section id="education" className="w-full bg-gray-50 py-20 px-6">
      
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Education
        </h2>
        <div className="w-24 h-1 bg-pink-500 mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        
        {/* Vertical Timeline Line (Desktop Only) */}
        <div className="hidden md:block absolute left-1/2 top-0 w-0.5 h-full bg-gray-300 -translate-x-1/2"></div>

        {educationData.map((edu, index) => (
          <div
            key={index}
            className="mb-16 flex flex-col md:flex-row items-center md:items-start relative"
          >
            
            {/* LEFT SIDE */}
            <div className="md:w-1/2 md:pr-12 text-center md:text-right">
              <h3 className="text-xl font-semibold text-gray-800">
                {edu.type}
              </h3>
              <p className="text-gray-500 mt-2">{edu.date}</p>
            </div>

            {/* TIMELINE ICON */}
            <div className="relative z-10 flex items-center justify-center my-6 md:my-0">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center shadow-md">
                <GraduationCap className="text-white" size={20} />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="md:w-1/2 md:pl-12 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <img
                  src={edu.logo}
                  alt="logo"
                  className="w-8 h-8 object-contain"
                />
                <h4 className="text-lg font-semibold text-gray-800">
                  {edu.institute}
                </h4>
              </div>
              <div className="w-16 h-1 bg-gray-300 mb-4 mx-auto md:mx-0"></div>
              <p className="text-gray-600 leading-relaxed">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education