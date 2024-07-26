// import { useSpring, animated } from '@react-spring/web'
import type {  MetaFunction } from "@remix-run/node"

//import { Link} from "@remix-run/react";
import BlogSection from '~/components/molecules/Homepage/BlogSection';
//import ContactSection from '~/components/molecules/Homepage/Contact';
//import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import Hero from "~/components/molecules/Homepage/Hero";
//import Methodology from '~/components/molecules/Homepage/Methodology';
import ProjectCardList from '~/components/molecules/Homepage/Projects';
import MyServices from "~/components/sections/MyServices";
//import ServicesSection from "~/components/molecules/Homepage/Services";
//import { useOptionalUser } from "~/utils";


//import { getPosts, PostMeta } from "../.server/posts"; // Import getPosts function and PostMeta type


export const meta: MetaFunction = () => [{ title: "Fabiel Ramirez: Full Stack Web Developer, AI Consulting, and Coding Instructor" },
  { name: "description", content: "Explore the portfolio of Fabiel Ramirez, a Full Stack Web Developer specializing in AI consulting and coding instruction. Discover projects, online classes, and insightful blog posts on the latest in technology and development." },
  { name: "keywords", content: "Fabiel Ramirez, Full Stack Web Developer, AI Consulting, Coding Instructor, Online Classes, Web Development, JavaScript, React, Node.js, DynamoDB, AWS, Portfolio, Tech Blog, Projects" },
  { name: "author", content: "Fabiel Ramirez" },
  { name: "robots", content: "index, follow" },
  { property: "og:title", content: "Fabiel Ramirez: Full Stack Web Developer, AI Consulting, and Coding Instructor" },
  { property: "og:description", content: "Explore the portfolio of Fabiel Ramirez, a Full Stack Web Developer specializing in AI consulting and coding instruction. Discover projects, online classes, and insightful blog posts on the latest in technology and development." },
  { property: "og:image", content: "URL_to_your_image" },
  { property: "og:url", content: "https://www.fabiel.one" },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Fabiel Ramirez: Full Stack Web Developer, AI Consulting, and Coding Instructor" },
  { name: "twitter:description", content: "Explore the portfolio of Fabiel Ramirez, a Full Stack Web Developer specializing in AI consulting and coding instruction. Discover projects, online classes, and insightful blog posts on the latest in technology and development." },
  { name: "twitter:image", content: "URL_to_your_image" }];

// export const loader: LoaderFunction = async () => {
//   try {
//     const posts: PostMeta[] = await getPosts(); // Fetch posts using getPosts function
//     return posts;
//   } catch (error) {
//     console.error("Error loading posts:", error);
//     throw error;
//   }
// };

export default function Index() {
  // const user = useOptionalUser();
  // // const data = useLoaderData<typeof loader>();
  // const springs = useSpring({
  //   from: { x: 0 },
  //   to: { x: 100 },
  // })



  // const steps = [
  //   {
  //     title: 'Gathering Requirements',
  //     description: 'Understanding the project needs and requirements.',
  //     icon: '📝',
  //   },
  //   {
  //     title: 'Development',
  //     description: 'Writing clean, efficient, and maintainable code.',
  //     icon: '💻',
  //   },
  //   {
  //     title: 'Testing',
  //     description: 'Ensuring the product is free of bugs and issues.',
  //     icon: '🔍',
  //   },
  //   {
  //     title: 'Deployment',
  //     description: 'Deploying the product to a live environment.',
  //     icon: '🚀',
  //   },
  //   {
  //     title: 'Maintenance',
  //     description: 'Ongoing support and maintenance of the product.',
  //     icon: '🔧',
  //   },
  // ];
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of Project 1',
      imageUrl: 'https://kitwind.io/assets/kometa/full-browser.png',
      buttonLink: '/project1',
      categories: ['Web Development', 'Design'],
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of Project 2',
      imageUrl: 'https://kitwind.io/assets/kometa/full-browser.png',
      buttonLink: '/project2',
      categories: ['Mobile App', 'UX/UI'],
    },
    // Add more projects as needed
  ];
  const blogData = [
    {
      date: '2020-03-16',
      category: 'Marketing',
      title: 'Boost your conversion rate',
      description: 'Illo sint voluptas. Error voluptates culpa eligendi...',
      author: 'Michael Foster',
      authorRole: 'Co-Founder / CTO',
      authorImage: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      tags: ['conversion', 'marketing', 'strategy'],
      link: '#',
    },
    // Add more blog objects here
  ];
  
  return (
    <>
    
   
    <Hero />
    
<MyServices/>
  

 <ProjectCardList projects={projects} />
 <BlogSection blogs={blogData} />

    {/* <div className="container mx-auto px-4 py-8">
      
      <h1 className="text-3xl font-bold">My Posts</h1>
      <ul className="mt-4 space-y-4">
        {data.map((post:PostMeta) => (
          <li key={post.slug}>
            <Link to={`/posts/${post.slug}`} className="text-blue-500 hover:underline">
              {post.frontmatter.title}
            </Link>
            <p>{post.frontmatter.description}</p>
            <p>{post.frontmatter.published}</p>
            <p>{post.frontmatter.featured}</p>
          </li>
        ))}
      </ul>
    </div> */}

<div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
          <div className="mt-6 flex flex-wrap justify-center gap-8">
            {[
              {
                src: "https://user-images.githubusercontent.com/1500684/157991167-651c8fc5-2f72-4afa-94d8-2520ecbc5ebc.svg",
                alt: "AWS",
                href: "https://aws.com",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157991935-26c0d587-b866-49f5-af34-8f04be1c9df2.svg",
                alt: "DynamoDB",
                href: "https://aws.amazon.com/dynamodb/",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157990874-31f015c3-2af7-4669-9d61-519e5ecfdea6.svg",
                alt: "Architect",
                href: "https://arc.codes",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157764276-a516a239-e377-4a20-b44a-0ac7b65c8c14.svg",
                alt: "Tailwind",
                href: "https://tailwindcss.com",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157764454-48ac8c71-a2a9-4b5e-b19c-edef8b8953d6.svg",
                alt: "Cypress",
                href: "https://www.cypress.io",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157772386-75444196-0604-4340-af28-53b236faa182.svg",
                alt: "MSW",
                href: "https://mswjs.io",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157772447-00fccdce-9d12-46a3-8bb4-fac612cdc949.svg",
                alt: "Vitest",
                href: "https://vitest.dev",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157772662-92b0dd3a-453f-4d18-b8be-9fa6efde52cf.png",
                alt: "Testing Library",
                href: "https://testing-library.com",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157772934-ce0a943d-e9d0-40f8-97f3-f464c0811643.svg",
                alt: "Prettier",
                href: "https://prettier.io",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157772990-3968ff7c-b551-4c55-a25c-046a32709a8e.svg",
                alt: "ESLint",
                href: "https://eslint.org",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157773063-20a0ed64-b9f8-4e0b-9d1e-0b65a3d4a6db.svg",
                alt: "TypeScript",
                href: "https://typescriptlang.org",
              },
            ].map((img) => (
              <a
                key={img.href}
                href={img.href}
                className="flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"
              >
                <img alt={img.alt} src={img.src} className="object-contain" />
              </a>
            ))}
          </div>
        </div>
  </>
  );
}
