//import { Link } from "@remix-run/react";
import Portfolio from "~/components/PortComp";
import type { V2_MetaFunction } from "@remix-run/node";
export const meta: V2_MetaFunction = () => [{ title: "Fabiel" }];

export default function Portafolio() {
  const projects = [
    {
      title: "Blindsbaja.com",
      techStack: "React, Node.js",
      imageUrl: "https://res.cloudinary.com/ddcyltsxi/image/upload/v1694749779/fabielone/xsamhs6uzexua9qihwra.png",
      description: "A website to schedule appointments for blinds installation and repair.",
      githubUrl: "https://github.com/fabielone/",
    },
    {
      title: "Gerencia.Blindsbaja.com",
      techStack: "Vue.js, Express",
      imageUrl: "https://res.cloudinary.com/ddcyltsxi/image/upload/v1694749779/fabielone/cfwusrejqrlstrcmwmxd.png",
      description: "A dashboard to manage appointments for blinds installation",
      githubUrl: "https://github.com/fabielone/",
    },
    {
      title: "GoEnsenada.com",
      techStack: "Angular, Firebase",
      imageUrl: "https://res.cloudinary.com/ddcyltsxi/image/upload/v1694749779/fabielone/zeoww8feb7vij8k761kz.png",
      description: "A website to promote tourism in Ensenada, Baja California, Mexico",
      githubUrl: "https://github.com/fabielone/",
    },
  ];
  return (
    <div>
      <Portfolio projects={projects} />
      {/* <Link to="/portfolio/all">View Full Portfolio</Link> */}
    </div>
  );
}
