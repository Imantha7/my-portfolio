import Navbar from "../components/navbar";
import { MdOutlineMenuBook } from "react-icons/md";

export default function ResumePage(){
    return(
        <div className=" p-10 space-y-10">
            <div className="flex">
            <h2 className="text-4xl font-bold pt-6 text-yellow-400">Resume</h2>
            <Navbar/>
          </div>
          <div>
          <MdOutlineMenuBook  className="size-10 bg-yellow-400"/>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-yellow-400">React.js</h3>
              <p className="mt-2 text-gray-300">
                A JavaScript library for building user interfaces with components.
              </p>
            </div>
          </div>
        </div>
    )
}