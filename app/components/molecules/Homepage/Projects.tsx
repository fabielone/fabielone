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
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectCardList;
