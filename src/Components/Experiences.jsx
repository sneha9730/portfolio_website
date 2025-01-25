import React from "react";

const experiences = [
  {
    id: 1,
    role: "Joint Secretary",
    organization: "COSC",
    description: [
      "Organized hackathons and bootcamps to foster innovation",
      "Promoted awareness about the importance of open-source contributions.",
      "Managed and coordinated events to ensure smooth execution."
    ],
    year: "2024-2025",
  },
  {
    id: 2,
    role: "Junior Developer",
    organization: "COSC",
    description: [
      "Assisted in organizing events to promote open source.",
      "Created eye-catching designs to enhance event outreach.",
      "Contributed to marketing and brainstromed for event ideation."
    ],
    year: "2023-2024",
  },
  {
    id: 3,
    role: "Junior Co-ordinator",
    organization: "IEEE CBIT",
    description: [
      "Actively involved as a member of the Computer Society.",
      "Contributed to the Finance Committee for smooth financial planning.",
      "Focused on networking and building connections in the community."
    ],
    year: "2023-2024",
  }  
];

const Experiences = () => {
  return (
    <div className="px-20 py-4 flex flex-col items-center text-white pt-20">
      <div className="lg:w-9/10 max-w-[1500px]">
        <h1 className="text-5xl font-bold text-purple-400 text-center mb-12">Experiences</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="bg-purple-500/20 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              style={{
                backdropFilter: "blur(10px)",
                maxWidth: "550px",
              }}
            >
              <h2 className="text-2xl font-semibold text-purple-300 mb-2">
                {experience.role}
              </h2>
              <h3 className="text-xl text-gray-400 mb-4">{experience.organization}</h3>
              <ul className="text-gray-300 mb-4 list-disc pl-5">
                {experience.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <span className="inline-block bg-purple-600 text-white text-sm px-3 py-1 rounded-full">
                {experience.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
