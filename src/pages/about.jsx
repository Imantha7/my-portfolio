import Navbar from "../components/navbar";
import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Davis",
    image: "/avatar-1.png", // Replace with actual image path
    shortText: "Working with you has been a truly fantastic experience. From the very start, your...",
    fullText:
      `Working with you has been a truly fantastic experience. 
      From the very start, your professionalism and attention to 
      detail stood out. The website you developed for my business 
      exceeded all my expectations in terms of both design and 
      functionality. Your ability to translate my vague ideas into 
      a stunning and user-friendly interface was remarkable. You were
       always patient with my numerous revisions and delivered 
       on time without compromising quality. I’ve already recommended 
       your services to several colleagues, and I look forward to 
       collaborating with you on future projects. Thank you for 
       your outstanding work!`,
    date: "14 June, 2021",
  },
  {
    id: 2,
    name: "Sarah Thompson",
    image: "/avatar-2.png", // Replace with actual image path
    shortText: "I’m so impressed with the exceptional service and creativity you brought to my...",
    fullText:
      `I’m so impressed with the exceptional service and creativity you 
      brought to my project. The final product is nothing short of 
      amazing, and it has already received fantastic feedback from my 
      customers. Your clear communication, technical skills, and 
      problem-solving abilities made the entire process seamless and 
      enjoyable. I couldn’t have asked for a better collaborator!`,
    date: "14 June, 2021",
  },
];

const react = {color: "00d9ff"}
const node = {color: "8bc500"}
const wordpress = {color: "0074a2"}
const db = {color: "ffa500"}

export default function AboutPage(){
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
    return(
        <div className="mt-4 ml-6 pt-8 w-[1000px] space-y-10">
        <div>
          <div className="flex">
            <h2 className="text-4xl font-bold pt-6 text-yellow-400">About Me</h2>
            <Navbar/>
          </div>
          <div className="mt-10 text-gray-300 text-[18px] leading-7">
          <p>
          I'm a Fullstack Developer based in Colombo, 
          Sri Lanka, with a strong foundation in Information 
          Technology, holding a degree from the Sri Lanka 
          Institute of Information Technology (SLIIT). I specialize 
          in developing innovative web applications and delivering 
          creative solutions in web development and print media, 
          combining technical expertise with design skills.
          </p>
          <p className="mt-5">As a dedicated IT graduate, I am passionate about 
            exploring the latest technologies in fullstack development. 
            I enjoy acquiring new skills and applying them to real-world 
            challenges, driving impactful results through continuous learning 
            and innovation.</p>
          </div>
        </div>

        {/* What I'm Doing */}
        <div>
          <h2 className="text-3xl text-yellow-400">What I'm Doing</h2>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md flex">
            <FaReact  className="size-10" style={react}/>
              <div className="ml-4">
              <h3 className="text-xl font-semibold text-yellow-400">React.js</h3>
              <p className="mt-2 text-gray-300">
                A JavaScript library for building user interfaces with components.
              </p>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md flex">
            <FaNode   className="size-10" style={node}/>
              <div className="ml-4">
              <h3 className="text-xl font-semibold text-yellow-400">Node.js</h3>
              <p className="mt-2 text-gray-300">
              A JavaScript runtime for server-side applications using asynchronous events..
              </p>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md flex">
            <FaWordpress className="size-10" style={wordpress}/>
              <div className="ml-4">
              <h3 className="text-xl font-semibold text-yellow-400">WordPress</h3>
              <p className="mt-2 text-gray-300">
              A user-friendly platform for creating and managing websites and blogs.
              </p>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md flex">
            <FaDatabase className="size-10" style={db}/>
              <div className="ml-4">
              <h3 className="text-xl font-semibold text-yellow-400">Database Management</h3>
              <p className="mt-2 text-gray-300">
              Storing, organizing, and retrieving data efficiently and securely.
              </p>
              </div>
            </div>
          </div>
        </div>
          <div>
            <h1 className="text-yellow-400 text-3xl">Testimonials</h1>
            <div className="grid grid-cols-2 gap-6 mt-6">
              {testimonials.map((testimonial)=>(
                <div key={testimonial.id} className="bg-gray-800 p-4 rounded-lg 
                shadow-md cursor-pointer"
                onClick={()=> setSelectedTestimonial(testimonial)}
                >
                  <div className="flex">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-15 h-17 rounded-full mb-2"
                  />
                  <div>
                  <h3 className="text-xl font-semibold ml-10 text-white">{testimonial.name}</h3>
                  <p className="text-lg text-gray-400 mt-1 ml-10">{testimonial.shortText}</p>
                  </div>
                  </div>
                </div>
              ))
              }
            </div>
            {/* Full Testimonial */}
            {selectedTestimonial && (
              <div className="fixed top-0 left-0 w-full h-full bg-black 
              bg-opacity-75 flex items-center justify-center">
                <div className="bg-gray-800 w-[60%] p-6 rounded-3xl shadow-md text-white relative">
                <button
                  onClick={()=> setSelectedTestimonial(null)}
                  className="absolute top-4 right-6 bg-gray-900 
                  text-yellow-400 
                  rounded-full text-xl size-10">
                    X
                </button>
                <div className="flex">
                <img src={selectedTestimonial.image}
                alt={selectedTestimonial.name}
                className="size-30 rounded-full mb-4"/>
                <h3 className="ml-80 text-yellow-400 text-2xl">{selectedTestimonial.name}</h3>
                </div>
                <p className="text-sm">{selectedTestimonial.date}</p>
                <p className="mt-3 text-[18px]">{selectedTestimonial.fullText}</p>
                </div>
              </div>
            )}
          </div>
          <div>
            <h1 className="text-yellow-400 text-3xl">Clients</h1>
            <div className="bg-gray-800 space-x-8 p-2 rounded-lg shadow-md flex mt-6">
              <img src="12.png" className="w-60 rounded-3xl "/>
              <img src="14.png" className="rounded-3xl  mt-6 h-[200px] w-[200px]"/>
              <img src="16.png" className="rounded-3xl  mt-6 h-[200px] w-[200px]"/>
              <img src="22.png" className="w-60 rounded-3xl size-70"/>
            </div>
          </div>
        </div>
    )
}

