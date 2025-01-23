import React from "react";
import Bg from "../assests/Images/Bg.svg";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{
      backgroundImage: `url(${Bg})`,
      backgroundSize: "1300px", 
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="text-center lg:w-9/10 max-w-4xl px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Transforming Ideas into <br />
          <span className="text-purple-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Impactful Solutions
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Hello! I'm <strong>Sneha Arumugam</strong>, and I specialize in crafting innovative solutions that turn ideas into reality and leave a lasting impact.
        </p>
      </div>
    </div>
  );
};

export default Hero;
