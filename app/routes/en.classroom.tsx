import {Link} from "@remix-run/react";

import CourseCard from "../components/molecules/Cards/CourseCard";

export default function ClassroomIndex() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Classroom</h1>
        <p className="mb-6">Explore our programming tracks and courses designed to take you from beginner to professional.</p>
        
        <h2 className="text-2xl font-bold mb-4">Tracks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add Track Cards here */}
          <div className="border p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Full Stack Development</h3>
            <p className="mb-4">Learn full stack development with our comprehensive tracks.</p>
          </div>
          {/* More tracks can be added here */}
        </div>

        <h2 className="text-2xl font-bold mb-4 mt-8">Live Classes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Live Class Cards */}
          <div className="border p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Live Q&A Session</h3>
            <p className="mb-4">Join our live Q&A session to get your questions answered in real-time.</p>
            <p className="text-gray-500">Date: August 25, 2024</p>
            <Link to="/live/qa-session" className="text-blue-500 hover:underline">Join Now</Link>
          </div>
          <div className="border p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Live Coding Session</h3>
            <p className="mb-4">Watch and learn as we build a project from scratch in a live coding session.</p>
            <p className="text-gray-500">Date: September 1, 2024</p>
            <Link to="/live/coding-session" className="text-blue-500 hover:underline">Join Now</Link>
          </div>
          {/* More live classes can be added here */}
        </div>
  
        <h2 className="text-2xl font-bold mb-4 mt-8">Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <CourseCard 
            title="Zero to Deployment with Remix.run"
            author="Fabiel Ramirez"
            description="Learn how to go from zero to deploying a full-fledged web application using Remix.run, Tailwind CSS, and AWS."
            bookCover="URL_to_book_cover_image"
            link="/classroom/zerotodeployment"
          />
          <CourseCard 
            title="Introduction to Programming"
            author="Fabiel Ramirez"
            description="Start your programming journey with this introductory course covering the basics of coding and software development."
            bookCover="URL_to_book_cover_image"
            link="/classroom/intro-to-programming"
          />
          {/* More courses can be added here */}
        </div>
  
       
      </div>
    );
  }