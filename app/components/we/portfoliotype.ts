// src/types.ts
export interface PortfolioItem {
    id: number;
    title: string;
    image: string;
    description: string;
    tags: string[];
  }
  export const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Project 1',
      image: 'https://example.com/project1.jpg',
      description: 'A brief description of Project 1.',
      tags: ['web', 'react'],
    },
    {
        id: 2,
        title: 'Project 2',
        image: 'https://example.com/project1.jpg',
        description: 'A brief description of Project 1.',
        tags: ['web', 'react','vue'],
      },
    // Add more portfolio items as needed
  ]; 