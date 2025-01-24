import Navbar from "../components/navbar";
import { FcApproval } from "react-icons/fc";

export default function PortfolioPage(){
    return(
        <div className=" p-10 space-y-10">
            <div className="flex">
            <h2 className="text-4xl font-bold pt-6 text-yellow-400">Portfolio</h2>
            <Navbar/>
          </div>
          <div>
          <div className="space-y-5">
            <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
            <div className="flex">
            <FcApproval className="size-7"/>
              <h2 className="text-white text-xl ml-4">Cosmetics Managment Ecommerce Website</h2>
            </div>
            <div className="flex-wrap flex">
              <img className="w-[250px] overflow-hidden rounded-xl m-4" 
              src="/cosmeticsSite/cos1.png"/>
              <img className="w-[250px] overflow-hidden rounded-xl m-4" 
              src="/cosmeticsSite/cos2.png"/>
              <img className="w-[250px] overflow-hidden rounded-xl m-4" 
              src="/cosmeticsSite/cos3.png"/>
              <img className="w-[250px] overflow-hidden rounded-xl m-4" 
              src="/cosmeticsSite/cos4.png"/>
            </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
            <div className="flex">
            <FcApproval className="size-7"/>
              <h2 className="text-white text-xl ml-4">My Portfolio Website</h2>
            </div>
            <div className="flex-wrap flex">
              <img className="w-[250px] overflow-hidden rounded-xl m-4" 
              src="/portfoloioimages/1.png"/>
              <img className="w-[250px] overflow-hidden rounded-xl m-4" 
              src="/portfoloioimages/2.png"/>
              <img className="w-[250px] overflow-hidden rounded-xl m-4" 
              src="/portfoloioimages/3.png"/>
            </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
            <div className="flex">
            <FcApproval className="size-7"/>
              <h2 className="text-white text-xl ml-4">Student Management Website</h2>
            </div>
            <div className="flex-wrap flex">
              <img className="w-[250px] overflow-hidden rounded-xl m-4" 
              src="/studentsmanag/1.png"/>
              <img className="w-[250px] overflow-hidden rounded-xl m-4" 
              src="/studentsmanag/2.png"/>
            </div>
            </div>
            
            </div>
          </div>
        </div>
    )
}