import React from 'react';

interface Post  {
  id: number;
  title: string;
  content: string;
  tags: string[];
};

const posts: Post[] = [
  {
    id: 1,
    title: 'Post 1',
    content: 'This is the content of post 1.',
    tags: ['react', 'javascript'],
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'This is the content of post 2.',
    tags: ['mdx', 'tailwindcss'],
  },
];

function getRelevantPosts(tags: string[]): Post[] {
  return posts.filter(post => post.tags.some(tag => tags.includes(tag)));
}

export interface RelevantPostsProps {
  tags: string[];
};

const RelevantPosts: React.FC<RelevantPostsProps> = ({ tags }) => {
  const relevantPosts = getRelevantPosts(tags);

  return (
    <div>
      <h2>Relevant Posts</h2>
      <ul>
        {relevantPosts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelevantPosts;
