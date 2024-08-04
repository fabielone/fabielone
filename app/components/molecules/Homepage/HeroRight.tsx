import {FaGamepad, FaExternalLinkAlt } from "react-icons/fa";

export default function HeroRight() {
  return (
    <section className="pt-4 min-h-screen flex items-center ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center h-full">
          <div className="bg-colors-background-dark lg overflow-hidden flex flex-col h-full w-full max-w-xl">
            <img className="w-full h-64 object-cover rounded-md object-center" src="https://fabielone.s3.us-west-1.amazonaws.com/portfolio/heroleft" alt="Profile" />
            <div className="p-6 flex-grow">
              <h2 className="text-2xl font-semibold text-slate-200 ">Get to Know Me</h2>
              <p className="text-gray-200 mt-4">
                🌟 Hi there! I&apos;m based in the lively city of <span className="text-yellow-300">Tijuana, Mexico</span>, nestled in Baja California. With years of experience in development, I love creating detailed and effective solutions. 
                <br /> I am continuously working with clients, hosting webinars, and teaching the new generation of coders.
                <span className="block mt-4">
                🌟 I enjoy the <span className="text-yellow-300 ">outdoors</span>
                  <a href="https://www.fabiel.one/lifestyle-blog" className="inline-block ml-2">
                    <FaExternalLinkAlt className="inline-block text-sm text-yellow-300" />
                  </a>,
                   <span className="text-yellow-300">teaching</span>
                  <a href="https://www.fabiel.one/classes" className="inline-block ml-2">
                    <FaExternalLinkAlt className="inline-block text-sm text-yellow-300" />
                  </a>, 
                   <span className="text-yellow-300">painting</span>
                  <a href="https://www.fabiel.one/store" className="inline-block ml-2">
                    <FaExternalLinkAlt className="inline-block text-sm text-yellow-300" />
                  </a>, and
                  <FaGamepad className="inline-block mx-2 text-2xl text-yellow-300" /> <span className="text-yellow-300">gaming</span>
                  <a href="https://www.fabiel.one/gaming" className="inline-block ml-2">
                    <FaExternalLinkAlt className="inline-block text-sm text-yellow-300" />
                  </a>.
                </span>
              </p>
              <div className="mt-6">
                <a href="https://www.fabiel.one/profile" className="inline-block px-6 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition">
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}