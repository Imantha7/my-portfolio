import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white rounded-lg shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section */}
          {/* <div className="flex items-center">
            <h1 className="text-2xl font-bold text-yellow-400">My Portfolio</h1>
          </div> */}

          {/* Right Section (Navigation Links) */}
          <div>
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#about"
                  className="hover:text-yellow-400 transition duration-300"
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
                  className="hover:text-yellow-400 transition duration-300"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
