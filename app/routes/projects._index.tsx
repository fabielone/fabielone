// projects._index.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

const dummyProjects = [
  { id: 1, name: "Project Alpha", tags: ["web", "development"], description: "A web development project." },
  { id: 2, name: "Project Beta", tags: ["marketing"], description: "An online marketing project." },
  { id: 3, name: "Project Gamma", tags: ["AI", "consulting"], description: "An AI consulting project." },
  // Add more dummy projects here
];

export default function ProjectsOverview() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const filteredProjects = dummyProjects.filter(project => 
    (selectedTag === "" || project.tags.includes(selectedTag)) &&
    (searchTerm === "" || project.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">Our Projects</h2>
      <p className="text-lg mb-4">Explore our portfolio of projects.</p>
      
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Search by name..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded-md w-full"
        />
      </div>
      
      <div className="mb-4">
        <select 
          value={selectedTag} 
          onChange={(e) => setSelectedTag(e.target.value)} 
          className="p-2 border rounded-md w-full"
        >
          <option value="">All Tags</option>
          <option value="web">Web Development</option>
          <option value="marketing">Marketing</option>
          <option value="AI">AI</option>
          <option value="consulting">Consulting</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <div key={project.id} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
            <p>{project.description}</p>
            <Link to={`/projects/${project.id}`} className="text-indigo-600 hover:text-indigo-800 mt-2 block">Learn More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
