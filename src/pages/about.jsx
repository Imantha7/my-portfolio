import Navbar from "../components/navbar";

export default function AboutPage(){
    return(
        <div className=" p-10 space-y-10">
        <div>
          <div className="flex">
            <h2 className="text-4xl font-bold pt-6 text-yellow-400">About Me</h2>
            <Navbar/>
          </div>
          <p className="mt-8 text-gray-300 leading-7">
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
    )
}