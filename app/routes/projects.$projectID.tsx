// // projects.$projectID.tsx

// import { useParams } from 'react-router-dom';

// const dummyProjects = [
//   { id: 1, name: "Project Alpha", tags: ["web", "development"], description: "A web development project." },
//   { id: 2, name: "Project Beta", tags: ["marketing"], description: "An online marketing project." },
//   { id: 3, name: "Project Gamma", tags: ["AI", "consulting"], description: "An AI consulting project." },
//   // Add more dummy projects here
// ];

// export default function ProjectDetails() {
//   const { projectID } = useParams();
//   const project = dummyProjects.find(p => p.id === parseInt(projectID || '', 10));

//   if (!project) {
//     return <div>Project not found</div>;
//   }

//   return (
//     <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
//       <h2 className="text-4xl font-bold mb-4">{project.name}</h2>
//       <p className="text-lg mb-4">{project.description}</p>
//       <div className="flex space-x-2">
//         {project.tags.map(tag => (
//           <span key={tag} className="px-2 py-1 bg-indigo-600 text-white rounded-md">{tag}</span>
//         ))}
//       </div>
//     </div>
//   );
// }
