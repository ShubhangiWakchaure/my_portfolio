import Tilt from "react-parallax-tilt"

// Frontend
import html from "../assets/skills/html.png"
import css from "../assets/skills/css.png"
import js from "../assets/skills/javascript.png"
import react from "../assets/skills/react.png"

// Backend
import spring from "../assets/skills/springboot.png"
import mysql from "../assets/skills/mysql.png"

// Languages
import python from "../assets/skills/python.png"
import java from "../assets/skills/java.png"


// Tools
import git from "../assets/skills/git.png"
import github from "../assets/github.png"
import vscode from "../assets/skills/vscode.png"


const SkillItem = ({ icon, name }) => (
  <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-slate-700/60 border border-purple-400/20 hover:bg-purple-600/30 transition duration-300 hover:scale-105">
    <img src={icon} alt={name} className="w-5 h-5 object-contain" />
    <span className="text-sm">{name}</span>
  </div>
)

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full py-20 px-6 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Frontend */}
        <Tilt scale={1.03} glareEnable={true} glareMaxOpacity={0.2}>
          <div className="bg-slate-800/70 backdrop-blur-md p-8 rounded-2xl border border-purple-500/20 shadow-lg hover:shadow-purple-500/20 transition duration-300">
            <h3 className="text-xl font-semibold mb-6 text-center">Frontend</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <SkillItem icon={html} name="HTML" />
              <SkillItem icon={css} name="CSS" />
              <SkillItem icon={js} name="JavaScript" />
              <SkillItem icon={react} name="React" />
            </div>
          </div>
        </Tilt>

        {/* Backend */}
        <Tilt scale={1.03} glareEnable={true} glareMaxOpacity={0.2}>
          <div className="bg-slate-800/70 backdrop-blur-md p-8 rounded-2xl border border-purple-500/20 shadow-lg hover:shadow-purple-500/20 transition duration-300">
            <h3 className="text-xl font-semibold mb-6 text-center">Backend</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <SkillItem icon={spring} name="Spring Boot" />
              <SkillItem icon={mysql} name="MySQL" />
            </div>
          </div>
        </Tilt>

        {/* Programming Languages */}
        <Tilt scale={1.03} glareEnable={true} glareMaxOpacity={0.2}>
          <div className="bg-slate-800/70 backdrop-blur-md p-8 rounded-2xl border border-purple-500/20 shadow-lg hover:shadow-purple-500/20 transition duration-300">
            <h3 className="text-xl font-semibold mb-6 text-center">Programming Languages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <SkillItem icon={java} name="Java" />
              <SkillItem icon={python} name="Python" />
            </div>
          </div>
        </Tilt>

        {/* Tools */}
        <Tilt scale={1.03} glareEnable={true} glareMaxOpacity={0.2}>
          <div className="bg-slate-800/70 backdrop-blur-md p-8 rounded-2xl border border-purple-500/20 shadow-lg hover:shadow-purple-500/20 transition duration-300">
            <h3 className="text-xl font-semibold mb-6 text-center">Tools</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <SkillItem icon={git} name="Git" />
              <SkillItem icon={github} name="GitHub" />
              <SkillItem icon={vscode} name="VS Code" />
            </div>
          </div>
        </Tilt>

      </div>

      {/* Polygon Bottom Shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
        <svg
          className="relative block w-full h-24"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <polygon
            fill="#0f172a"
            points="0,160 240,200 480,180 720,220 960,200 1200,240 1440,200 1440,320 0,320"
          />
        </svg>
      </div>
    </section>
  )
}

export default Skills