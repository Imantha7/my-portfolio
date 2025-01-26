import Navbar from "../components/navbar";

export default function ResumePage(){

    return(
        <div className=" p-10 space-y-10">
            <div className="flex">
            <h2 className="text-4xl font-bold pt-6 text-yellow-400">Contact Me</h2>
            <Navbar/>
          </div>

          <div>
          {/* Contact Information */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">
          G.A. Imantha Piyumal Kumara
        </h1>
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="text-gray-400 font-semibold w-28">Email:</span>
            <a
              href="mailto:imanthapiyumal7@gmail.com"
              className="text-white hover:text-yellow-400"
            >
              imanthapiyumal7@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <span className="text-gray-400 font-semibold w-28">Whatsapp:</span>
            <a
              href="https://wa.me/94772943337"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400"
            >
              +94 772943337
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl mx-auto mt-3">
        <h3 className="text-2xl font-bold text-yellow-400 mb-6">
          Send a Message
        </h3>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-yellow-500 text-white"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-yellow-500 text-white"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-yellow-500 text-white"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-gray-900 font-bold py-3 rounded-md hover:bg-yellow-400 transition"
          >
            Send Message
          </button>
        </form>
      </div>
          
            </div>
        </div>
    )
}