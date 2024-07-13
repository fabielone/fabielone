
import {Avatar} from 'flowbite-react';

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
                <h1 className="p-2 max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                {heading}
                </h1>
                </div>
                <h2 className="text-xl text-gray-600 mt-2">{punchline}</h2>
            </div>
            <div className="flex items-center mb-6">
                <a
                href="/schedule-consultation"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                Schedule Free Consultation
                </a>
                <a
                href="/contact"
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
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
