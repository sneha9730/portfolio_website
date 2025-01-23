import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Artificial Intelligence and Data Science",
      institution: "Chaitanya Bharathi Institute of Technology",
      period: "2022 - 2026",
      marks: "CGPA: 9.4",
    },
    {
      degree: "Intermediate Education in MPC",
      institution: "Narayana Junior College",
      period: "2020 - 2022",
      marks: "Percentage: 97.2%",
    },
    {
      degree: "High School in CBSE Board",
      institution: "Takshasila Public School",
      period: "2010 - 2020",
      marks: "Percentage : 86.7%",
    },
  ];

  return (
    <div className="px-10 py-4 flex flex-col items-center text-white pt-20">
      <div className="lg:w-9/10 max-w-[1500px]">
        <h1 className="text-5xl font-bold text-center mb-8 text-purple-400">
          Education
        </h1>
        <div className="max-w-[1200px] w-full mt-10">
          <div className="relative sm:border-l-4 border-purple-500 ">
            {educationData.map((item, index) => (
              <div
                key={index}
                className="mb-8 sm:pl-6 relative flex flex-col sm:flex-row items-start sm:items-center group"
              >
                {/* Dot */}
                <div className="hidden sm:block absolute w-4 h-4 bg-purple-500 rounded-full -left-[10px] group-hover:bg-purple-300 transition-colors"></div>
                
                <div className="bg-purple-500/20 backdrop-blur-md p-6 rounded-lg shadow-lg w-full border border-purple-500 ">
                  <h3 className="text-2xl font-semibold text-white pb-1">
                    {item.institution}
                  </h3>
                  <p className="text-sm text-purple-200 italic">{item.degree}</p>
                  <span className="text-sm text-purple-400">{item.period}</span>
                  {item.marks && (
                    <p className="text-lg text-white mt-2 font-bold bg-purple-600 rounded-md p-2 text-center shadow-lg">
                      {item.marks}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;