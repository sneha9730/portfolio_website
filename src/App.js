import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import SkillSet from "./Components/Skills";
import Education from "./Components/Education";
import RecentProjects from "./Components/Projects";
import Experiences from "./Components/Experiences";
import Footer from "./Components/Footer";
import './App.css';

function App() {
  return (
    <div className="bg-gradient-to-br from-black via-[#10001F] to-[#1F003D] w-full min-h-screen overflow-x-hidden">
      <Router>
        <Navbar />
        <Hero />
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <SkillSet />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="projects">
          <RecentProjects />
        </div>
        <div id="experiences">
          <Experiences />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
