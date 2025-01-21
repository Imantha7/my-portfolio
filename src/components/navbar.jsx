import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="bg-gray-800 absolute right-12 text-white 
    rounded-full shadow-md flex justify-end px-4"
    >
      <div className="flex items-center h-16">
        <ul className="flex space-x-12">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold transition duration-300 ml-5"
                  : "hover:text-yellow-400 transition duration-300 ml-5"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold transition duration-300"
                  : "hover:text-yellow-400 transition duration-300"
              }
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold transition duration-300"
                  : "hover:text-yellow-400 transition duration-300"
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold transition duration-300"
                  : "hover:text-yellow-400 transition duration-300"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <a
              href="/G.A.I.P.Kumara.pdf"
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

