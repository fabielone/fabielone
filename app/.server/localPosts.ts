import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type Frontmatter = {
    title: string;
    description: string;
    published: string; // YYYY-MM-DD
    featured: boolean;
};

export type PostMeta = {
    slug: string;
    frontmatter: Frontmatter;
};

// Directory where your MDX posts are stored
const postsDirectory = path.join(process.cwd(), 'app/posts');

export const getLocalPosts = async (): Promise<PostMeta[]> => {
    try {
        const fileNames = fs.readdirSync(postsDirectory);
        const posts: PostMeta[] = await Promise.all(
            fileNames.map(async (fileName) => {
                // Construct full path to the file
                const fullPath = path.join(postsDirectory, fileName);

                // Read file contents
                const fileContents = fs.readFileSync(fullPath, 'utf-8');

                // Parse frontmatter from MDX file using gray-matter
                const { data: frontmatter } = matter(fileContents);

                // Ensure the frontmatter matches the expected structure
                const { title, description, published, featured } = frontmatter as Frontmatter;

                // Construct slug from file name (assuming the file name is the slug)
                const slug = fileName.replace(/\.mdx$/, '');

                return {
                    slug,
                    frontmatter: {
                        title,
                        description,
                        published,
                        featured
                    }
                };
            })
        );

        return posts;
    } catch (error) {
        console.error("Error loading local posts:", error);
        throw error;
    }
};

export const getLocalPostBySlug = async (slug: string): Promise<{ frontmatter: Frontmatter; content: string }> => {
    try {
        // Construct the full path to the specific post based on its slug
        const fullPath = path.join(postsDirectory, `${slug}.mdx`);

        // Read the content of the MDX file from the local directory
        const fileContents = fs.readFileSync(fullPath, 'utf-8');

        // Parse frontmatter and content from MDX file using gray-matter
        const { data: frontmatter, content } = matter(fileContents);

        // Ensure the frontmatter matches the expected structure
        const { title, description, published, featured } = frontmatter as Frontmatter;

        // Return an object containing the frontmatter and content of the post
        return {
            frontmatter: {
                title,
                description,
                published,
                featured
            },
            content
        };
    } catch (error) {
        console.error(`Error loading local post "${slug}":`, error);
        throw error;
    }
};
