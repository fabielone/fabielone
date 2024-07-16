
import {Avatar, Button} from 'flowbite-react';
import { IoIosCalendar } from "react-icons/io";

import Pills, { PillsProps } from '../../atoms/Pills';

    interface HeroLeftProps {
    heading: string;
    punchline: string;
    pills: PillsProps[];
    }

    export default function HeroLeft({ heading, punchline, pills }: HeroLeftProps) {
    return (
        <div className="relative px-4 pt-16 mx-auto lg:py-16 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
        <div className="max-w-xl mx-auto lg:max-w-screen-xl lg:flex">
            <div className="mb-16 lg:max-w-lg lg:mb-0 lg:ml-8">
            <div className="max-w-xl mb-6">
                <div>
                <div className="flex flex-wrap space-x-2 mb-4">
                    {pills.map((pill) => (
                    <Pills key={pill.text} text={pill.text} color={pill.color} bgColor={pill.bgColor}  />
                    ))}
                </div>
                </div>
                <div className="flex items-start">
                <Avatar img={"https://avatars.githubusercontent.com/u/64607173?v=4"} className='p-2'/>
                
               <div className="flex flex-col"> 
                <p className="p-1 max-w-lg font-semibold font-sans text-lg tracking-tight text-gray-900 sm:text-lg sm:leading-none">
                {heading}
                </p>
                <p className='font-mono p-1'>Software Engineer </p>
                </div>
                </div>
                <h1 className="font-bold p-2 text-2xl text-center "> Fabiel: Expert Web Development and Online Business Solutions in Tijuana </h1>
                <h2 className="font-sans text-xl text-gray-600 mt-2">{punchline}</h2>
            </div>
            <div className="flex items-center mb-6">
            <Button className=" bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                Free Consultation
                <IoIosCalendar  className="ml-2 h-5 w-5" />
            </Button>
                <a
                href="/contact"
                className="inline-flex shadow-md items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                Contact Form
                </a>
            </div>
            <ul className="list-disc pl-5 text-gray-800 space-y-2">
                <li>Web Development</li>
                <li>Online Marking</li>
                <li>AI Solutions</li>
                <li>Automation </li>
                <li>Online payments </li>
            </ul>
            </div>
        </div>
        </div>
    );
    }
