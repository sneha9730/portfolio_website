import React from "react";

const Navbar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md z-10 shadow-md">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 text-2xl font-medium text-purple-400">
            <a href="/">Sneha Arumugam</a>
          </div>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => handleScroll("about")}
              className="text-gray-200 hover:text-white transition duration-300 text-lg cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => handleScroll("skills")}
              className="text-gray-300 hover:text-white transition duration-300 text-lg cursor-pointer"
            >
              Skills
            </button>
            <button
              onClick={() => handleScroll("projects")}
              className="text-gray-300 hover:text-white transition duration-300 text-lg cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => handleScroll("experiences")}
              className="text-gray-300 hover:text-white transition duration-300 text-lg cursor-pointer"
            >
              Experiences
            </button>
          </div>
          <div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg shadow-md text-lg hover:scale-105 transform transition duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
