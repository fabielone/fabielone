/// <reference types="vitest" />
/// <reference types="vite/client" />

import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react";
import { rehypePrettyCode } from "rehype-pretty-code";
// import remarkFrontmatter from "remark-frontmatter";
// import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [ tsconfigPaths(),{enforce:'pre', ...mdx({
    //remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [rehypePrettyCode],
  })},react(),],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./test/setup-test-env.ts"],
  },

});