import { Avatar, Button } from 'flowbite-react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { IoIosCalendar } from "react-icons/io";

import Pills, { PillsProps } from '../../atoms/Pills';

interface HeroLeftProps {
  heading: string;
  pills: PillsProps[];
}

export default function HeroLeft({ heading, pills }: HeroLeftProps) {
  const punch = [
    "Elevate your online presence with our eCommerce solutions.",
    "Integrate our services gradually or opt for a full solution.",
    "Either way, we are here to maximize your business potential.",
    
  ];
    
  return (
    <div className="relative h-full px-2 pt-4 mx-auto ">
      <div className="max-w-xl h-full mx-auto lg:flex">
        <div className="mb-16 h-full lg:mb-0">
          <div className="bg-colors-background-dark p-6 h-full">
            <div className="max-w-xl mb-6">
              <div className="flex items-start mb-4 h-full border-b border-gray-300 pb-4">
                <div className="p-1 rounded-lg border-2 border-gray-500">
                  <Avatar img="https://fabielone.s3.us-west-1.amazonaws.com/portfolio/profile.jpeg" className="rounded-lg" />
                </div>
                <div className="flex flex-col ml-4">
                  <p className="text-lg font-semibold text-slate-300">{heading}</p>
                  <p className="text-md text-colors-accent-dark ">Software Engineer</p>
                </div>
              </div>
              <h1 className="text-2xl font-bold text-slate-300 text-center mb-4">
                Fabiel: Expert Web Development and Online Business Solutions in Tijuana
              </h1>
              <div className="flex flex-wrap space-x-2 mb-4 justify-center">
                {pills.map((pill) => (
                  <Pills key={pill.text} text={pill.text} color={pill.color} bgColor={pill.bgColor} />
                ))}
              </div>
              <hr className="border-t border-gray-300 my-4" />
              <div className="text-lg text-gray-100 mt-2 mb-4 p-4">
                <ul className="list-none list-inside">
                  {punch.map((point, index) => (
                    <li key={index} className="mb-2">{point}</li>
                  ))}
                </ul>
                <p>Take the next step towards success today.</p>
              </div>
            </div>
            <hr className="border-t border-gray-300 my-4" />
            <div className="flex justify-center space-x-4 mb-6">
              <a href="https://github.com/fabielone" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-100 h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/fabielone" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-gray-100 h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/fabielone" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-gray-100 h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/fabielone" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-gray-100 h-6 w-6" />
              </a>
              <a href="https://www.tiktok.com/@fabiel.one" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="text-gray-100 h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/c/fabielone" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-gray-100 h-6 w-6" />
              </a>
            </div>
          
            <div className="flex items-center mb-6 space-x-4 justify-center">
              <Button className="bg-colors-button-dark text-colors-text-dark">
                Free Consultation
                <IoIosCalendar className="ml-2 h-5 w-5" />
              </Button>
              <a
                href="/contact"
                className="inline-flex items-center font-semibold transition-colors duration-200 text-indigo-600 hover:text-indigo-800"
              >
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
