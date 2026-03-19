import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Projects from "./Components/Projects.jsx";
import Certifications from "./Components/A&C.jsx";

import './index.css';


function App() {
  return (
    <div className="font-sans"> 
      <Navbar />
      <Hero/>
      <About/>
      <Projects/>
      <Certifications/>
    </div>
  );
}

export default App;
