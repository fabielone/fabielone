import { useLoaderData } from '@remix-run/react';
import React from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { getPostBySlug } from '../.server/posts';
import MDXComponents from '../posts/MDXexample'; // Import the custom components

// Define loader function
export const loader = async () => {
  try {
    const post = await getPostBySlug("example");
    console.log("mypost: "+post.content);
    return post;
  } catch (error) {
    console.error("Error loading posts:", error);
    throw error;
  }
};



const MD: React.FC = () => {
  const post = useLoaderData<typeof loader>();

  // Destructure frontmatter and content from post
  const { frontmatter, content } = post;
 
 
  return (
    <article className="prose">
      {frontmatter.title}
      <br></br>
      {frontmatter.description}
      {/* Render the parsed MDX content */}
      <ReactMarkdown  
        components={MDXComponents} //
        remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  );
};

export default MD;
