import { Link, Route, Routes } from 'react-router-dom';
import { MdMarkEmailRead } from "react-icons/md";
import About from './about';
import Resume from './resume';
import AboutPage from './about';
import ResumePage from './resume';
import PortfolioPage from './portfolio';
import ContactPage from './contact';
import { IoLogoLinkedin } from "react-icons/io5";
import { ImFacebook2 } from "react-icons/im";
import { IoLogoGithub } from "react-icons/io5";

export default function HomePage() {
  return (
     <div className="flex w-full h-screen bg-gray-900">
       {/* Left Section */}
       <div className="w-[30%] flex flex-col items-center justify-center bg-gray-800 py-8">
         
         <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-yellow-500 shadow-lg">
           <img
             src='/my.png' // Path to your image
             alt="Profile"
             className="w-full h-full object-cover"
           />
         </div>
         <h1 className="mt-6 text-3xl font-bold text-white items-center ml-[40px]">Imantha Piyumal</h1>
         <p className="text-yellow-400 text-xl mt-2 ml-[40px]">Fullstack Developer</p>
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
         <div className='flex m-2'>
            <Link><ImFacebook2 className='size-7 m-3'/></Link>
            <Link><IoLogoGithub className='size-7 m-3'/></Link>
            <Link to="https://www.linkedin.com/in/imantha-piyumal-9bb3a9253/">
            <IoLogoLinkedin className='size-7 m-3'/></Link>
            
         </div>
         
       </div>

       {/* Main Content Area */}
       <div className="w-[70%] h-screen overflow-y-auto">
         <Routes path="/">
           <Route path="/" element={<AboutPage/>} />
           <Route path="/resume" element={<ResumePage/>} />
           <Route path="/portfolio" element={<PortfolioPage/>} />
           <Route path="/contact" element={<ContactPage/>} />
         </Routes>
       </div>
      
     </div>
    
  );
}


