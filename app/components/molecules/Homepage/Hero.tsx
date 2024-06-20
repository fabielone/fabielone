
import { FaChevronRight, FaFacebook, FaInstagram, FaWhatsapp, FaUserCircle } from 'react-icons/fa';

const Hero: React.FC = () => {
  
const background = 'https://fabielone.s3.us-west-1.amazonaws.com/portfolio/Designer.jpeg';
  return (
    <div className="w-full h-screen bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url('${background}')` }}>
  <div className="w-[90%] mx-auto h-full flex items-center justify-between py-10">
    <div className="lg:w-fit">
    <div className="sm:text-6xl xs:text-5xl text-left text-white font-serif font-extrabold uppercase">
        <h1>Your</h1>
        <h1>Digital</h1>
        <h1 className="bg-black/30 text-white rounded-sm px-1 shadow-sm shadow-white/50">Presence</h1>
        <h1>Is About to</h1>
        <h1>Take Off</h1>
      </div>
      <ul className="sm:text-xl xs:text-lg text-left text-white font-serif mt-4 list-disc ml-5">
        <li>Expert Web Development</li>
        <li>Online Marketing</li>
        <li>AI Consulting</li>
      </ul>
      <div className="w-auto flex items-center justify-between mt-6 py-1 px-4 uppercase bg-green-500 rounded-sm">
        <h3 className="text-white text-lg font-semibold">schedule a call</h3>
        <div className="w-[40%] flex items-center text-gray-700 text-4xl gap-0">
          <hr className="w-full border border-gray-700 relative -right-3" />
          <FaChevronRight />
        </div>
      </div>
      <p className="text-md text-white bg-black/30 font-semibold mt-1 capitalize rounded-lg p-2">Let&apos;s Connect and Discuss Your Project</p>
    </div>

    <div>
      <ul className="text-3xl text-white">
        <li className="flex justify-center items-center p-1 bg-black/40 rounded-full">
          <FaFacebook />
        </li>
        <li className="flex justify-center items-center p-1 bg-black/40 rounded-full mt-2">
          <FaInstagram />
        </li>
        <li className="flex justify-center items-center p-1 bg-black/40 rounded-full mt-2">
          <FaWhatsapp />
        </li>
        <li className="flex justify-center items-center p-1 bg-black/40 rounded-full mt-2">
          <FaUserCircle />
        </li>
      </ul>
    </div>
  </div>
</div>

  );
};

export default Hero;
