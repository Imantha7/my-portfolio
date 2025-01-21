import Navbar from "../components/navbar";
import { FcReading } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { FcPositiveDynamic } from "react-icons/fc";

export default function ResumePage(){
    return(
        <div className=" p-10 space-y-10">
            <div className="flex">
            <h2 className="text-4xl font-bold pt-6 text-yellow-400">Resume</h2>
            <Navbar/>
          </div>

          <div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex">
              <FcReading  className="size-10"/>
              <h3 className="text-2xl font-semibold text-yellow-400 ml-4">Education</h3>
            </div>
            <div className="mt-4 ml-4">

              <div className="flex ml-5 mt-5">
              <FcOk className="mt-1 size-6"/>
              <div className="ml-4">
              <h1 className="text-white text-[18px]">St'Mary's College - Mathugama</h1>
              <h2 className="mt-[12px] text-yellow-400">2008 - 2018</h2>
              <p className="mt-2 text-white">
              I have been a student of this school for about 10 years for 
              exams including my O/L and A/L exams and sports activities.
              </p>
              </div>
              </div>

              <div className="flex ml-5 mt-6">
              <FcOk className="mt-1 size-6"/>
              <div className="ml-4">
              <h1 className="text-white text-[18px]">Sri Lanka Institute of Information Technology - SLIIT</h1>
              <h2 className="mt-[12px] text-yellow-400">2020 - 2024</h2>
              <p className="mt-2 text-white">
              I joined this university as an IT student .
              </p>
              </div>
              </div>

              <div className="flex ml-5 mt-6">
              <FcOk className="mt-1 size-6"/>
              <div className="ml-4">
              <h1 className="text-white text-[18px]">Aquinas College of Higher Studis - Kalamulla, Kaluthara</h1>
              <h2 className="mt-[12px] text-yellow-400">2008 - 2018</h2>
              <p className="mt-2 text-white">
              I completed a diploma in English here and could improve my English knowledge here.
              </p>
              </div>
              </div>

              <div className="flex ml-5 mt-6">
              <FcOk className="mt-1 size-6"/>
              <div className="ml-4">
              <h1 className="text-white text-[18px]">Esoft Metro Campus - Kaluthara</h1>
              <h2 className="mt-[12px] text-yellow-400">2018 - 2019</h2>
              <p className="mt-2 text-white">
              I completed a diploma in Information Technology here.
              </p>
              </div>
              </div>

            </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md mt-7">
            <div className="flex">
              <FcPositiveDynamic  className="size-10"/>
              <h3 className="text-2xl font-semibold text-yellow-400 ml-4">Experience</h3>
            </div>
            <div className="mt-4 ml-4">

              <div className="flex ml-5 mt-5">
              <FcOk className="mt-1 size-6"/>
              <div className="ml-4">
              <h1 className="text-white text-[18px]">W3Inventor (Pvt.) Ltd</h1>
              <h2 className="mt-[12px] text-yellow-400">2024</h2>
              <p className="mt-2 text-white">
              I worked as a WordPress developer.
              </p>
              </div>
              </div>

              <div className="flex ml-5 mt-6">
              <FcOk className="mt-1 size-6"/>
              <div className="ml-4">
              <h1 className="text-white text-[18px]">Upwork</h1>
              <h2 className="mt-[12px] text-yellow-400">2020 — Present
              </h2>
              <p className="mt-2 text-white">
              Currently, I am working as a freelancer by creating websites in the Upwork platform and providing those websites to customers.
              </p>
              </div>
              </div>

              <div className="flex ml-5 mt-6">
              <FcOk className="mt-1 size-6"/>
              <div className="ml-4">
              <h1 className="text-white text-[18px]">Updating........</h1>
              </div>
              </div>

            </div>
            </div>
          
            </div>
        </div>
    )
}