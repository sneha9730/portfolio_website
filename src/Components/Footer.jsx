import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full text-white py-6 px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center mt-10">
      <div className="text-2xl font-semibold text-purple-300 mb-16 md:mb-0 sm:mb-0">
        Sneha Arumugam
      </div>
      <div className="flex gap-6 justify-center md:justify-end">
        <a
          href="https://github.com/sneha9730"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-600 transition-colors duration-300"
        >
          <FaGithub className="text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/snehaarumugam/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-600 transition-colors duration-300"
        >
          <FaLinkedin className="text-2xl" />
        </a>
        <a
          href="mailto:sneha.arumugam@example.com"
          className="text-purple-400 hover:text-purple-600 transition-colors duration-300"
        >
          <FaEnvelope className="text-2xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
