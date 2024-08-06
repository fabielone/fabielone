import React from 'react';
import { Components } from 'react-markdown';

import RelevantPosts, { RelevantPostsProps } from './RelevantPosts';

// Define the types for the custom components
type CustomComponents = Components & {
  RelevantPosts: React.FC<RelevantPostsProps>;
  Planet: React.FC;
};

// Define all custom components that you want to use in your MDX files
const MDXComponents: CustomComponents = {
  RelevantPosts, Planet() {
    return 'Pluto'
  },
};

export default MDXComponents;
