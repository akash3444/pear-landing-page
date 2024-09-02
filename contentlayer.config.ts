import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    excerpt: { type: "string", required: true },
    thumbnail: { type: "string", required: true },
    tags: {
      type: "list",
      description: "List of tags for the post",
      of: {
        type: "string",
      },
      required: false,
    },
    author: {
      type: "string", // GitHub handle of the author
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) =>
        `/blog/${post._raw.flattenedPath.split("/").slice(1).join("/")}`,
    },
    slug: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}));

export const Author = defineDocumentType(() => ({
  name: "Author",
  filePathPattern: `authors/**/*.md`,
  contentType: "markdown",
  fields: {
    name: {
      type: "string",
      required: true,
    },
    github: {
      type: "string",
      required: true,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Author],
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node: any) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
    ],
  },
});
