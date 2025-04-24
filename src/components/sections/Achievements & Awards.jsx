import React, { useState } from "react";
import { FaTrophy, FaCertificate, FaProjectDiagram } from "react-icons/fa"; // Adjust the path as necessary
import { assets } from "../../assets/assets";
const achievements = [
  {
    icon: <FaTrophy size={30} />,
    title: "Best Paper Award",
    description:
      "Awarded at Multicon 2025 for research on fraud detection using ML. This recognition highlights my innovative approach to solving financial fraud with AI.",
    image: assets.multiconImage,
    button: "View Details",
    post: "https://www.linkedin.com/posts/mannjadhav2001_multicon2025-bestpaperaward-research-activity-7300846808031793154-EXf_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEI2GDYB3O_VMZOSLomWiSfb7FzRhGQpUeo",
  },
  {
    icon: <FaProjectDiagram size={30} />,
    title: "Project Completion Award",
    description:
      "Recognized in April 2025 for completing a high-impact technical project, delivering a scalable web solution integrated with AI features.",
    image: assets.mindsEyeImage,
    button: "View Details",
    post: "https://www.linkedin.com/posts/mannjadhav2001_ai-fakenewsdetection-truthlense-activity-7316472756257144834-olPN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEI2GDYB3O_VMZOSLomWiSfb7FzRhGQpUeo",
  },
  {
    icon: <FaCertificate size={30} />,
    title: "Hackathon",
    description:
      "Participated in a National level hackathon organized by gujarat government , where I developed a web application that is Smart Health Care Locating System. This project was recognized for its innovative approach and practical application.",
    image: assets.nivhImage,
    button: "View Details",
    post: "https://www.linkedin.com/posts/mannjadhav2001_newindiavibranthackathon-sih-hackathonvictory-activity-7127317553483292673-aTYz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEI2GDYB3O_VMZOSLomWiSfb7FzRhGQpUeo",
  },
];

export const AchievementsAwards = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className="bg-black min-h-screen py-16 px-6 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        Achievements & Awards
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-start mb-16">
        {achievements.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleExpand(index)}
            className={`cursor-pointer bg-[#1e293b] rounded-2xl p-6 text-center shadow-lg transition-all duration-300 ${
              expandedIndex === index ? "scale-105" : "hover:-translate-y-2"
            }`}
          >
            <div className="flex justify-center mb-4 text-[#38bdf8]">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

            {expandedIndex === index && (
              <div className="mt-4 text-left space-y-4">
                <div>
                  <h4 className="text-sm text-gray-400">Your Photo:</h4>
                  <img
                    src={item.image}
                    alt="Your headshot"
                    className="rounded-lg mb-2 w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Award:</h4>
                  <img
                    src={item.certificate}
                    alt={`${item.title} certificate`}
                    className="rounded-lg w-full object-cover"
                  />
                </div>
                <p className="text-sm text-gray-300">{item.description}</p>

                {item.post && (
                  <div className="pt-2">
                    <h4 className="text-sm text-gray-400 mb-1">
                      Related Post:
                    </h4>
                    <a
                      href={item.post}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-full text-sm"
                    >
                      View Social Media Post
                    </a>
                  </div>
                )}
              </div>
            )}

            {expandedIndex !== index && (
              <button className="mt-2 px-4 py-2 bg-[#334155] hover:bg-[#475569] rounded-full text-sm">
                {item.button}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
