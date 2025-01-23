import React from "react";
import Html from "../assests/Images/HTML.svg";
import Css from "../assests/Images/CSS.svg";
import Python from "../assests/Images/Python.png";
import Java from "../assests/Images/Java.svg";
import r from "../assests/Images/R.svg";
import js from "../assests/Images/JavaScript.svg";
import tailwind from "../assests/Images/Tailwind.svg";
import numpy from "../assests/Images/Numpy.svg";
import pandas from "../assests/Images/Pandas.svg";
import matplotlib from "../assests/Images/Matplotlib.svg";
import react from "../assests/Images/React.png";
import sklearn from "../assests/Images/Scikit-learn.svg";
import mongodb from "../assests/Images/MongoDB.svg";
import git from "../assests/Images/Git.png";
import Bs from "../assests/Images/Bootstrap.svg";
import mysql from "../assests/Images/MySQL.png";

const SkillSet = () => {
  return (
    <div className="px-20 sm:px-10 py-4 flex flex-col items-center pt-20">
      <div className="lg:w-5/6 sm:w-full max-w-[1500px]">
        <h1 className="text-5xl font-bold text-center text-purple-400 mb-12">Skill Set</h1>
        <div className="w-full mb-12">
          <div className="flex justify-center flex-wrap gap-14 sm:gap-6 lg:gap-12">
            {[
              { src: Python, alt: "Python" },
              { src: Java, alt: "Java" },
              { src: r, alt: "R" },
              { src: numpy, alt: "Numpy" },
              { src: pandas, alt: "Pandas" },
              { src: matplotlib, alt: " Matplotlib" },
              { src: sklearn, alt: "Scikit-Learn" },
              { src: mysql, alt: "MySQL" },
              { src: Html, alt: "HTML" },
              { src: Css, alt: "CSS" },
              { src: react, alt: "React" },
              { src: js, alt: "JavaScript" },
              { src: tailwind, alt: "Tailwind" },
              { src: mongodb, alt: "MongoDB" },
              { src: Bs, alt: "Bootstrap" },
              { src: git, alt: "Git" },
            ].map((skill, index) => (
              <div
                key={index}
                className="w-20 h-20 flex justify-center items-center relative sm:w-24 sm:h-24"
              >
                <img
                  src={skill.src}
                  alt={skill.alt}
                  className="w-[80%] h-[80%] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
