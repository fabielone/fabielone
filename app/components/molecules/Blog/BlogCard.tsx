import React from 'react';
import { FaTag } from 'react-icons/fa';

interface BlogCardProps {
  date: string;
  category: string;
  title: string;
  description: string;
  author: string;
  authorRole: string;
  authorImage: string;
  tags: string[];
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  date,
  category,
  title,
  description,
  author,
  authorRole,
  authorImage,
  tags,
  link,
}) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', { timeZone: 'UTC' });

  return (
    <article className="flex max-w-xl flex-col items-start justify-between bg-white border border-gray-200 rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-x-4 text-xs mb-4">
        <time dateTime={date} className="text-gray-500">{formattedDate}</time>
        <a href="/" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
          {category}
        </a>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <a href={link}>
            <span className="absolute inset-0"></span>
            {title}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{description}</p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <img src={authorImage} alt={author} className="h-10 w-10 rounded-full bg-gray-50" />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <a href="/">
              <span className="absolute inset-0"></span>
              {author}
            </a>
          </p>
          <p className="text-gray-600">{authorRole}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-100 rounded-full">
            <FaTag className="mr-1" />
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default BlogCard;
