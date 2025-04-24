import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const languages = ["JavaScript", "Python", "C", "HTML", "CSS"];
  const frameworks = ["Node.js", "Express.js", "WordPress"];
  const libraries = [
    "React",
    "Tailwind CSS",
    "Bootstrap",
    "TensorFlow",
    "Keras",
    "Numpy",
    "Pandas",
    "Matplotlib",
    "Scikit-learn",
    "Flask",
    "Django",
    "Streamlit",
  ];
  const tools = [
    "Git",
    "GitHub",
    "Postman",
    "Figma",
    "VS Code",
    "Jupyter Notebook",
    "Google Colab",
  ];
  const databases = ["MySQL", "MongoDB", "Firebase", "SQLite"];
  const cloud = ["AWS", "Google cloud", "Netlify", "Vercel"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and ML models with creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Languages */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frameworks*/}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {frameworks.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Libraries*/}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {libraries.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Data Base*/}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Data Base</h3>
                <div className="flex flex-wrap gap-2">
                  {databases.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cloud*/}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Cloud</h3>
                <div className="flex flex-wrap gap-2">
                  {cloud.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education Section */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.E. in Information Technology</strong> - Thakur
                  College of Engineering & Technology, University Mumbai
                  (2022-2026)
                </li>
                <li>
                  Relevant Coursework: Data Security for web dev, Programming
                  Foundations with js, Cybersecurity for everyone, Spoken
                  Tutorial (Java).
                </li>
              </ul>
            </div>

            {/* Work Experience Section */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-bold">
                    ➡️ Front-End Developer Intern (Sep 2024 - Dec 2024)
                  </h4>
                  <p>
                    <strong>Unns</strong>
                  </p>
                  <ul>
                    <li>
                      1. Designed and implemented a dynamic, responsive
                      e-commerce website.
                    </li>
                    <li>
                      2. Built secure authentication and a user-centric product
                      browsing experience.
                    </li>
                    <li>
                      3. Developed modular components like homepage sliders, new
                      collections, and category filters.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">
                    ➡️Full-Stack Developer Intern (Dec 2024 - Jan 2025)
                  </h4>
                  <p>
                    <strong>Devion X Technologies </strong>
                    <ul>
                      <li>
                        1. Contributed to front-end development using React,
                        HTML, and CSS.
                      </li>
                      <li>
                        2. Supported backend API integration and debugging using
                        Node.js and Express.js.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
