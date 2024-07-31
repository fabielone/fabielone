import { Avatar, Button } from 'flowbite-react';
import { IoIosCalendar } from "react-icons/io";

import Pills, { PillsProps } from '../../atoms/Pills';

interface HeroLeftProps {
  heading: string;
  punchline: string;
  pills: PillsProps[];
}

export default function HeroLeft({ heading, punchline, pills }: HeroLeftProps) {
  return (
    <div className="relative h-full px-2 pt-4 mx-auto ">
      <div className="max-w-xl h-full mx-auto lg:flex">
        <div className="mb-16 h-full lg:mb-0">
          <div className="bg-white border rounded-lg p-6 h-full">
            <div className="max-w-xl mb-6">
              <div className="flex items-start mb-4 h-full border-b border-gray-300 pb-4">
                <div className="p-1 rounded-lg border-2 border-gray-500">
                  <Avatar img="https://fabielone.s3.us-west-1.amazonaws.com/portfolio/profile.jpeg" className="rounded-lg" />
                </div>
                <div className="flex flex-col ml-4">
                  <p className="text-lg font-semibold text-gray-900">{heading}</p>
                  <p className="text-md text-gray-700">Software Engineer</p>
                </div>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 text-center mb-4">
                Fabiel: Expert Web Development and Online Business Solutions in Tijuana
              </h1>
              <div className="flex flex-wrap space-x-2 mb-4 justify-center">
                {pills.map((pill) => (
                  <Pills key={pill.text} text={pill.text} color={pill.color} bgColor={pill.bgColor} />
                ))}
              </div>
              <hr className="border-t border-gray-300 my-4" />
              <p className="text-xl text-gray-600 mt-2 mb-4">{punchline}</p>
            </div>
           
            <div className="flex items-center mb-6 space-x-4 justify-center">
            <hr className="border-t border-gray-300 my-4" />
              <Button className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
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
