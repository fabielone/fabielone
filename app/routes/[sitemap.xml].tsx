import { LoaderFunction } from "@remix-run/node";

// import { getPosts } from "~/models/post.server";
// import { getProjects } from "~/models/project.server";

export const loader: LoaderFunction = async () => {
  // These two functions get a list of all the posts and projects, using prisma
  // I will write more blog posts on prisma in the future and explain how it's used
//   const posts = await getPosts();
//   const projects = await getProjects();

//   const lastModifiedBlogDate = posts[posts.length - 1]?.updatedAt.toISOString();
//   const lastModifiedProjectDate = posts[projects.length - 1]?.updatedAt.toISOString();
  
  const content = `
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
      <loc>https://fabiel.one/</loc>
      <lastmod>2024-05-05T16:43:34.833Z</lastmod>
      </url>
    
      `;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8",
    },
  });
  
};