// import { S3Client, ListObjectsV2Command, GetObjectCommand } from "@aws-sdk/client-s3";
// import matter from 'gray-matter';

// // Create an S3 client without explicitly passing credentials
// const s3Client = new S3Client();

// export type Frontmatter = {
//     title: string;
//     description: string;
//     published: string; // YYYY-MM-DD
//     featured: boolean;
// };

// export type PostMeta = {
//     slug: string;
//     frontmatter: Frontmatter;
// };

// export const getPosts = async (): Promise<PostMeta[]> => {
//     try {
//         const s3Params = {
//             Bucket: "fabielone",
//             Prefix: "posts/" // Assuming your metadata files are stored in "posts/" folder in S3
//         };
//         const command = new ListObjectsV2Command(s3Params);
//         const s3Objects = await s3Client.send(command);

//         // Check if Contents array is defined
//         if (!s3Objects.Contents) {
//             throw new Error("No metadata files found in S3 bucket.");
//         }

//         // Parse metadata for each object
//         const posts: PostMeta[] = await Promise.all(
//             s3Objects.Contents.map(async (object) => {
//                 // Ensure object.Key is defined
//                 if (!object.Key) {
//                     throw new Error("Object key is undefined.");
//                 }

//                 const fileKey = object.Key;
//                 const getObjectParams = {
//                     Bucket: "fabielone",
//                     Key: fileKey
//                 };
//                 const getCommand = new GetObjectCommand(getObjectParams);
//                 const data = await s3Client.send(getCommand);

//                 // Ensure Body is defined
//                 if (!data.Body) {
//                     throw new Error("Object body is undefined.");
//                 }

//                 // Read the stream
//                 const bodyContents = await streamToString(data.Body);

//                 // Parse frontmatter from MDX file using gray-matter
//                 const { data: frontmatter } = matter(bodyContents);

//                 // Ensure the frontmatter matches the expected structure
//                 const { title, description, published, featured } = frontmatter as Frontmatter;

//                 // Construct slug from fileKey (assuming the fileKey is the slug)
//                 const slug = fileKey.replace("posts/", "").replace(/\.mdx$/, "");

//                 return {
//                     slug,
//                     frontmatter: {
//                         title,
//                         description,
//                         published,
//                         featured
//                     }
//                 };
//             })
//         );

//         return posts;
//     } catch (error) {
//         console.error("Error loading posts:", error);
//         throw error;
//     }
// };

// export const getPostBySlug = async (slug: string): Promise<{ frontmatter: Frontmatter; content: string }> => {
//     try {
//         // Construct the file key for the specific post based on its slug
//         const fileKey = `posts/${slug}.mdx`;

//         // Fetch the content of the MDX file from S3 bucket
//         const getObjectParams = {
//             Bucket: "fabielone",
//             Key: fileKey
//         };
//         const command = new GetObjectCommand(getObjectParams);
//         const data = await s3Client.send(command);

//         // Ensure Body is defined
//         if (!data.Body) {
//             throw new Error("Object body is undefined.");
//         }

//         // Read the stream
//         const bodyContents = await streamToString(data.Body);

//         // Parse frontmatter and content from MDX file using gray-matter
//         const { data: frontmatter, content } = matter(bodyContents);

//         // Ensure the frontmatter matches the expected structure
//         const { title, description, published, featured } = frontmatter as Frontmatter;

//         // Return an object containing the frontmatter and content of the post
//         return {
//             frontmatter: {
//                 title,
//                 description,
//                 published,
//                 featured
//             },
//             content
//         };
//     } catch (error) {
//         console.error(`Error loading post "${slug}":`, error);
//         throw error;
//     }
// };

// // Helper function to convert stream to string
// const streamToString = (stream: any): Promise<string> => {
//     return new Promise((resolve, reject) => {
//         const chunks: any[] = [];
//         stream.on("data", (chunk: any) => chunks.push(chunk));
//         stream.on("error", reject);
//         stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf-8")));
//     });
// };
