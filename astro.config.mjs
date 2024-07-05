import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkGfm from 'remark-gfm'
import remarkSmartypants from '@silvenon/remark-smartypants';
import tailwind from "@astrojs/tailwind";
import rehypeExternalLinks from 'rehype-external-links'
import nodejs from "@astrojs/node";


// https://astro.build/config
export default defineConfig({
  site: 'https://astro-blog-template.netlify.app',
  integrations: [
     mdx(),
     sitemap(),
     tailwind(),
    ],
    output: "hybrid",
    adapter: nodejs({
    mode: "middleware",
    }),
    remarkPlugins: [remarkGfm, remarkSmartypants],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
        },
      ],
    ],
});