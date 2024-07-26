import React from 'react';
import { FiArrowRight } from 'react-icons/fi'; // Example of using React Icons

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonLink: string;
  categories: string[];
}

const ProjectCard: React.FC<CardProps> = ({ imageUrl, title, description, buttonLink, categories }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="/">
        <img className="rounded-t-lg object-cover w-full" src={imageUrl} alt="" />
      </a>
      <div className="p-5">
        <div className="flex mb-2">
          {categories.map((category, index) => (
            <p key={index} className="mr-2 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 px-3 py-1">
              {category}
            </p>
          ))}
        </div>
        <a href="/">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <a
          href={buttonLink}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <FiArrowRight className="ml-1 w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
