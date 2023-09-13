import { Link } from "@remix-run/react";
import Portfolio from "~/components/PortComp";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Fabiel" }];

export default function Portafolio() {
    const projects = [
        {
          title: 'Project 1',
          techStack: 'React, Node.js',
          imageUrl: 'project1.jpg',
          description: 'Description for Project 1...',
        },
        {
          title: 'Project 2',
          techStack: 'Vue.js, Express',
          imageUrl: 'project2.jpg',
          description: 'Description for Project 2...',
        },
        {
          title: 'Project 3',
          techStack: 'Angular, Firebase',
          imageUrl: 'project3.jpg',
          description: 'Description for Project 3...',
        },
        // Add more project objects as needed
      ];
    return (
        <div>
           <Portfolio projects={projects} />
      <Link to="/portfolio/all">View Full Portfolio</Link>
        </div>
    );
}