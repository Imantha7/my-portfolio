import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-800 absolute right-10 text-white 
    rounded-full shadow-md flex justify-end px-4">
      <div className="flex items-center h-16">
        <ul className="flex space-x-12">
          <li>
            <a
              href="#about"
              className="hover:text-yellow-400 transition duration-300 ml-5"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className="hover:text-yellow-400 transition duration-300"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="hover:text-yellow-400 transition duration-300"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-yellow-400 transition duration-300"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/path-to-your-cv.pdf"
              download
              className="hover:text-yellow-400 transition duration-300 mr-5"
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
