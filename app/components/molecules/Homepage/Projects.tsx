import { Link } from '@remix-run/react';
import React from 'react';

import ProjectCard from '../Cards/ProjectCard'; // Ensure this path matches your Card component location
 

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  buttonLink: string;
  categories: string[];
}

interface ProjectCardListProps {
  projects: Project[];
}

const ProjectCardList: React.FC<ProjectCardListProps> = ({ projects }) => {
  return (
    <div className="flex flex-col items-center container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-4">My Work</h2>
      <span className="text-xl font-semibold text-center mb-8">A showcase of my latest projects and achievements.</span>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <div className="mt-6">
                                <Link
                                    to="/projects"
                                    className="text-blue-600 hover:text-blue-800 font-medium"
                                >
                                   View all projects
                                </Link>
                            </div>
    </div>
  );
};

export default ProjectCardList;
