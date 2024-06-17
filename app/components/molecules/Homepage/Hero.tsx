import React, { useState } from 'react';
import { FaBars, FaChevronRight, FaFacebook, FaInstagram, FaWhatsapp, FaUserCircle } from 'react-icons/fa';

const Hero: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-screen bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1552196563-55cd4e45efb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHx5b2dhfGVufDB8MHx8fDE3MTY5NjgwNTN8MA&ixlib=rb-4.0.3&q=80&w=1080')` }}>
      <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-sm">
        <div className="flex-1 flex justify-between items-center mix-blend-screen">
          <a href="/" className="text-4xl text-gray-400 font-extrabold">YOGA</a>
        </div>

          <FaBars className="fill-current text-gray-600" />
        
        <input className="hidden" type="checkbox" id="menu-toggle" checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />

        <div className={`md:flex md:items-center md:w-auto w-full ${menuOpen ? '' : 'hidden'}`} id="menu">
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-600 pt-4 md:pt-0">
              <li><a className="md:p-4 py-3 px-0 block" href="/">Home</a></li>
              <li><a className="md:p-4 py-3 px-0 block" href="/">Services</a></li>
              <li><a className="md:p-4 py-3 px-0 block" href="/">About Us</a></li>
              <li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="/">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="w-[90%] mx-auto h-full flex items-center justify-between py-10">
        <div className="lg:w-fit">
          <div className="sm:text-6xl xs:text-5xl text-left text-white font-serif font-extrabold uppercase">
            <h1>Get</h1>
            <h1>in</h1>
            <h1 className="bg-black/30 text-white rounded-sm px-1 shadow-sm shadow-white/50">Health</h1>
            <h1>Today</h1>
          </div>
          <div className="w-full flex items-center justify-between mt-6 py-1 px-4 uppercase bg-green-500 rounded-sm">
            <h3 className="text-white text-lg font-semibold">join now</h3>
            <div className="w-[40%] flex items-center text-gray-700 text-4xl gap-0">
              <hr className="w-full border border-gray-700 relative -right-3" />
              <FaChevronRight />
            </div>
          </div>
          <p className="text-md text-white bg-black/30 font-semibold mt-1 capitalize rounded-lg p-2">25% Discount on first month</p>
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
