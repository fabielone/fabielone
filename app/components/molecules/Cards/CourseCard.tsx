import { Link } from "@remix-run/react";

interface CourseCardProps {
  title: string;
  author: string;
  description: string;
  bookCover: string;
  link: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, author, description, bookCover,link }:CourseCardProps) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={bookCover} alt={title} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-lg text-gray-700 mb-2">by {author}</p>
      <p className="mb-4">{description}</p>
      <div className="flex space-x-4">
        <Link to={link} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Enroll Now</Link>
        <Link to={link} className="text-blue-500 hover:underline">View More</Link>
      </div>
    </div>
  );
};

export default CourseCard;
