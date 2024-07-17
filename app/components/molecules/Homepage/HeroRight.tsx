import { FaMountain, FaChalkboardTeacher, FaPaintBrush, FaGamepad, FaExternalLinkAlt } from "react-icons/fa";

export default function HeroRight() {
  return (
    <section className="bg-gray-50 py-16 min-h-screen flex items-center border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center h-full">
          <div className="bg-white border rounded-lg overflow-hidden flex flex-col h-full w-full max-w-xl">
            <img className="w-full h-64 object-cover object-center" src="https://fabielone.s3.us-west-1.amazonaws.com/portfolio/heroleft" alt="Profile" />
            <div className="p-6 flex-grow">
              <h2 className="text-2xl font-semibold text-gray-800">Get to Know Me</h2>
              <p className="text-gray-600 mt-4">
                🌟 Hi there! I&apos;m based in the lively city of <span className="text-blue-700">Tijuana, Mexico</span>, nestled in Baja California. With years of experience in development, I love creating detailed and effective solutions. 
                <br /> I am continuously working with clients, hosting webinars, and teaching the new generation of coders.
                <span className="block mt-4">
                  <FaMountain className="inline-block mr-2 text-2xl text-blue-700" /> I enjoy the <span className="text-blue-700">outdoors</span>
                  <a href="https://www.fabiel.one/lifestyle-blog" className="inline-block ml-2">
                    <FaExternalLinkAlt className="inline-block text-2xl text-blue-700" />
                  </a>,
                  <FaChalkboardTeacher className="inline-block mx-2 text-2xl text-blue-700" /> <span className="text-blue-700">teaching</span>
                  <a href="https://www.fabiel.one/classes" className="inline-block ml-2">
                    <FaExternalLinkAlt className="inline-block text-2xl text-blue-700" />
                  </a>, 
                  <FaPaintBrush className="inline-block mx-2 text-2xl text-blue-700" /> <span className="text-blue-700">painting</span>
                  <a href="https://www.fabiel.one/store" className="inline-block ml-2">
                    <FaExternalLinkAlt className="inline-block text-2xl text-blue-700" />
                  </a>, and
                  <FaGamepad className="inline-block mx-2 text-2xl text-blue-700" /> <span className="text-blue-700">gaming</span>
                  <a href="https://www.fabiel.one/gaming" className="inline-block ml-2">
                    <FaExternalLinkAlt className="inline-block text-2xl text-blue-700" />
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
