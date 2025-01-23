import React from "react";
import Webdev from "../assests/Images/Webdev.png";

const About = () => {
  return (
    <div className="px-16 py-4 flex flex-col items-center pt-20">
      <div className="lg:w-9/10 max-w-[1500px]">
        <h1 className="text-5xl font-bold text-purple-400 mb-12 text-center">About me</h1>
        <div className="grid grid-cols-1 md:grid-cols-[7fr_5fr] items-center gap-16">
          <div className="text-xl text-gray-300 leading-relaxed">
            <div className="ml-4">
              &nbsp;&nbsp;&nbsp;&nbsp;I am a junior at <strong>Chaitanya Bharathi Institute of Technology</strong>, pursuing a degree in <strong>Artificial Intelligence and Data Science</strong>. As a motivated and passionate individual, I thrive on designing and building creative, technology-driven solutions.
            </div>
            <br />
            <div className="ml-4">
              &nbsp;&nbsp;&nbsp;&nbsp;Challenging problems inspire me, and I’m constantly seeking opportunities to learn and grow. My work revolves around <em>AI-driven innovations</em>, designing <em>intuitive user experiences</em>, and developing <em>digital solutions</em> that solve real-world challenges effectively.
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 md:grid-cols-1 items-center">
            <div className="max-h-[110px]  max-w-[300px] border-2 border-purple-400 rounded-xl p-4 flex flex-col items-center text-center">
              <img src={Webdev} alt="Web Development" className="w-16 h-16 rounded-[40px] transform -translate-y-[50px]"/>
              <p className="text-xl text-white font-bold transform -translate-y-[45px]">Web<br/>Development</p>
            </div>

            <div className="max-h-[110px]  max-w-[300px] border-2 border-purple-400 rounded-xl p-4 flex flex-col items-center text-center">
              <img src={Webdev} alt="Artificial Intelligence" className="w-16 h-16 rounded-[40px] transform -translate-y-[50px]"/>
              <p className="text-xl text-white font-bold transform -translate-y-[45px]">Artificial<br/>Intelligence</p>
            </div>

            <div className="max-h-[110px] max-w-[300px] border-2 border-purple-400 rounded-xl p-4 flex flex-col items-center text-center">
              <img src={Webdev} alt="Data Analytics" className="w-16 h-16 rounded-[40px] transform -translate-y-[50px]"/>
              <p className="text-xl text-white font-bold transform -translate-y-[45px]">Data<br/>Analytics</p>
            </div>

            <div className="max-h-[110px] max-w-[300px] border-2 border-purple-400 rounded-xl p-4 flex flex-col items-center text-center">
              <img src={Webdev} alt="Web Development" className="w-16 h-16 rounded-[40px] transform -translate-y-[50px]"/>
              <p className="text-xl text-white font-bold transform -translate-y-[45px]">Web<br/>Development</p>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
