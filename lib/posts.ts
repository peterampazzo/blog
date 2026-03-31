import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(/*turbopackIgnore: true*/ process.cwd(), "content/posts");

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  content: string;
  tags?: string[];
}

export function getAllPosts(): Post[] {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const entries = fs.readdirSync(postsDirectory, { withFileTypes: true });

  const posts: Post[] = [];

  for (const entry of entries) {
    let filePath: string;
    let slug: string;

    if (entry.isDirectory()) {
      // Folder-based post: content/posts/my-post/index.md(x)
      let indexPath = path.join(postsDirectory, entry.name, "index.mdx");
      if (!fs.existsSync(indexPath)) {
        indexPath = path.join(postsDirectory, entry.name, "index.md");
      }
      if (fs.existsSync(indexPath)) {
        filePath = indexPath;
        slug = sanitizeSlug(entry.name);
        if (!slug) {
          continue;
        }
      } else {
        continue;
      }
    } else if (entry.name.endsWith(".md") || entry.name.endsWith(".mdx")) {
      // File-based post: content/posts/my-post.md(x)
      filePath = path.join(postsDirectory, entry.name);
      slug = sanitizeSlug(entry.name.replace(/\.(md|mdx)$/, ""));
      if (!slug) {
        continue;
      }
    } else {
      continue;
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    posts.push({
      slug,
      title: data.title || slug,
      date: data.date ? formatDate(data.date) : "",
      excerpt: data.excerpt || data.description || "",
      content,
      tags: data.tags || [],
    });
  }

  // Sort by date, newest first
  return posts.sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getPostBySlug(slug: string): Post | null {
  if (!fs.existsSync(postsDirectory)) {
    return null;
  }

  // Try folder-based first: content/posts/my-post/index.md(x)
  let folderPath = path.join(postsDirectory, slug, "index.mdx");
  if (!fs.existsSync(folderPath)) {
    folderPath = path.join(postsDirectory, slug, "index.md");
  }
  if (fs.existsSync(folderPath)) {
    const fileContents = fs.readFileSync(folderPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      date: data.date ? formatDate(data.date) : "",
      excerpt: data.excerpt || data.description || "",
      content,
      tags: data.tags || [],
    };
  }

  // Try file-based: content/posts/my-post.md(x)
  let filePath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(postsDirectory, `${slug}.md`);
  }
  if (fs.existsSync(filePath)) {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      date: data.date ? formatDate(data.date) : "",
      excerpt: data.excerpt || data.description || "",
      content,
      tags: data.tags || [],
    };
  }

  return null;
}

function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toISOString().split("T")[0];
}

// Ensure that slugs derived from filesystem entries are URL-safe.
// This limits characters to lowercase letters, digits, and dashes.
function sanitizeSlug(raw: string): string {
  const normalized = raw.trim().toLowerCase().replace(/\s+/g, "-");
  return normalized.replace(/[^a-z0-9-]/g, "");
}
