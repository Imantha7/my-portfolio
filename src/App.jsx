import React from "react";
import { MdMarkEmailRead } from "react-icons/md";
import "./App.css";

function App() {
  return (
    <div className="flex w-full h-screen bg-gray-900">
      {/* Left Section */}
      <div className="w-[30%] flex flex-col bg-gray-800 py-8">
        <div className="border-4 border-gray-900 rounded-3xl p-7 m-8">
        <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-yellow-500 shadow-lg">
          <img
            src='/my.png' // Path to your image
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="mt-6 text-2xl font-bold text-white items-center">Imantha Piyumal</h1>
        <p className="text-yellow-400 text-sm mt-2">Fullstack Developer</p>
        <div className="m-6 ml-10">
          <div className="m-3">
              <h1 className="text-gray-400 text-[14px]">EMAIL</h1>
              <span className="text-white">imanthapiyumal7@gmail.com</span>
          </div>
          <div className="m-3">
              <h1 className="text-gray-400 text-[14px]">PHONE</h1>
              <span className="text-white">+94 772943337</span>
          </div>
          <div className="m-3">
              <h1 className="text-gray-400 text-[14px]">BIRTHDAY</h1>
              <span className="text-white">March 7, 1999</span>
          </div>
          <div className="m-3">
              <h1 className="text-gray-400 text-[14px]">LOCATION</h1>
              <span className="text-white">Colombo , Sri Lanka</span>
          </div>

        </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-[70%] p-10 space-y-10">
        {/* About Me */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-400">About Me</h2>
          <p className="mt-4 text-gray-300 leading-7">
            A Fullstack developer living and working in Colombo, Sri Lanka. I'm a Creative
            Director and Web Developer, specializing in web development and print media. I'm a
            second-year IT undergraduate at the Institute of Technology, University of Moratuwa. 
            I enjoy exploring new technologies and applying them in real-world projects!
          </p>
        </div>

        {/* What I'm Doing */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-400">What I'm Doing</h2>
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-yellow-400">React.js</h3>
              <p className="mt-2 text-gray-300">
                A JavaScript library for building user interfaces with components.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-yellow-400">Node.js</h3>
              <p className="mt-2 text-gray-300">
                A JavaScript runtime for server-side applications using asynchronous events.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-yellow-400">WordPress</h3>
              <p className="mt-2 text-gray-300">
                A user-friendly platform for creating and managing websites and blogs.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-yellow-400">Database Management</h3>
              <p className="mt-2 text-gray-300">
                Storing, organizing, and retrieving data efficiently and securely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

