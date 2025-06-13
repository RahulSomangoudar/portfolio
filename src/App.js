import React, { useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  // Define refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const achievementsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="app">
      <Navbar refs={{ homeRef, aboutRef, projectsRef, achievementsRef, contactRef }} />
      <div ref={homeRef}>
        <Home projectsRef={projectsRef} />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      
      <div ref={achievementsRef}>
        <Achievements />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default App;
