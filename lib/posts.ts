import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content", "reviews");

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  sample: boolean;
  rating?: number;
  verdict?: string;
  pros?: string[];
  cons?: string[];
  price?: string;
  content: string;
};

function parseFile(fileName: string): Post {
  const slug = fileName.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(contentDir, fileName), "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? "",
    date: data.date ?? "",
    category: data.category ?? "Reviews",
    sample: data.sample === true,
    rating: data.rating,
    verdict: data.verdict,
    pros: data.pros,
    cons: data.cons,
    price: data.price,
    content,
  };
}

export function getPosts(): Post[] {
  if (!fs.existsSync(contentDir)) return [];
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".md"))
    .map(parseFile)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | null {
  const file = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  return parseFile(`${slug}.md`);
}

export function getSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return [];
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function categorySlug(category: string): string {
  return category
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getCategorySlugs(): string[] {
  const seen = new Set<string>();
  for (const p of getPosts()) seen.add(categorySlug(p.category));
  return [...seen];
}

export function getCategoryName(slug: string): string | null {
  const post = getPosts().find((p) => categorySlug(p.category) === slug);
  return post ? post.category : null;
}

export function getPostsByCategory(slug: string): Post[] {
  return getPosts().filter((p) => categorySlug(p.category) === slug);
}
