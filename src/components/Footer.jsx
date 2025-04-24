import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-t border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 font-mono text-sm text-center md:text-left">
            © {new Date().getFullYear()} Mann
            <span className="text-blue-500">Jadhav</span>. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a
              href="https://www.instagram.com/theoptimisticguy__/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors text-lg"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors text-lg"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/mannjadhav2001/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition-colors text-lg"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/MannJadhav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors text-lg"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
