import { FaMountain, FaChalkboardTeacher, FaPaintBrush } from "react-icons/fa";

export default function HeroRight() {
  return (
    <section className="bg-gray-50 py-16 min-h-screen flex items-center border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center h-full">
          <div className="bg-white border rounded-lg overflow-hidden flex flex-col h-full w-full max-w-xl">
            <img className="w-full h-64 object-cover object-center" src="https://fabielone.s3.us-west-1.amazonaws.com/portfolio/heroleft" alt="Profile" />
            <div className="p-6 flex-grow">
              <h2 className="text-2xl font-semibold text-gray-800">Your Name</h2>
              <p className="text-gray-600 mt-4">
                🌟 Based in <span className="text-yellow-300">Tijuana, Mexico</span>, a vibrant city in Baja California, I have
                years of experience in development and a passion for crafting detailed solutions. 
                <span className="block mt-4">
                  <FaMountain className="inline-block mr-2 text-2xl text-yellow-300" /> I enjoy the <span className="text-yellow-300">outdoors</span>,
                  <FaChalkboardTeacher className="inline-block mx-2 text-2xl text-yellow-300" /> <span className="text-yellow-300">teaching</span>, and
                  <FaPaintBrush className="inline-block mx-2 text-2xl text-yellow-300" /> <span className="text-yellow-300">painting</span>.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
