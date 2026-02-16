import About from "./components/About.jsx"
import Coding from "./components/Coding.jsx"
import Contact from "./components/Contact.jsx"
import Education from "./components/Education.jsx"
import Footer from "./components/Footer.jsx"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects.jsx"
import Services from "./components/Services.jsx"
import Skills from "./components/Skills.jsx"

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
       <Navbar/>
       <Hero/>
       <About/>
       <Skills/>
       <Education/>
       <Projects/>    
       <Services/>
       <Coding/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default App