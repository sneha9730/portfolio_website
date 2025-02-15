import React from "react";
import { FaGithub } from "react-icons/fa";
import MealMuse from "../assests/Images/MealMuse.jpeg";

const projects = [
  {
    id: 1,
    title: "MealMuse",
    description:
      "A MERN stack project that curates personalized meal options based on individual preferences and requirements.",
    image: MealMuse,
    github: "https://github.com/sneha9730/Meal_Muse.git",
  },
  {
    id: 2,
    title: "MealMuse",
    description:
      "A MERN stack project that curates personalized meal options based on individual preferences and requirements.",
    image: MealMuse,
    github: "https://github.com/sneha9730/Meal_Muse.git",
  },
  {
    id: 3,
    title: "MealMuse",
    description:
      "A MERN stack project that curates personalized meal options based on individual preferences and requirements.",
    image: MealMuse,
    github: "https://github.com/sneha9730/Meal_Muse.git",
  },
];

const Projects = () => {
  return (
    <div className="px-12 py-4 flex flex-col items-center text-white pt-20 lg:px-20">
      <div className="lg:w-9/10 max-w-[1500px]">
        <h1 className="text-5xl font-bold text-purple-400 mb-16 text-center">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-purple-500/20 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105"
              style={{
                backdropFilter: "blur(10px)",
                maxWidth: "550px",
              }}
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-8 right-8 flex items-center justify-center w-10 h-10 bg-purple-900 rounded-full hover:bg-purple-500 transition-colors sm:w-8 sm:h-8"
              >
                <FaGithub className="text-2xl text-white sm:text-lg" />
              </a>
              <img
                src={project.image}
                alt={project.title}
                className="w-auto aspect-w-16 aspect-h-9 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl text-purple-300 font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
