import Navbar from "../components/navbar";

export default function PortfolioPage(){
    return(
        <div className=" p-10 space-y-10">
            <div className="flex">
            <h2 className="text-4xl font-bold pt-6 text-yellow-400">Portfolio</h2>
            <Navbar/>
          </div>
        </div>
    )
}