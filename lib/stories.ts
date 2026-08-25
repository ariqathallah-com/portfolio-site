import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import readingTime from 'reading-time';

const storiesDirectory = path.join(process.cwd(), 'content/stories');

export type StoryMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover?: string;
  tags?: string[];
  readingTime: string;
};

export type Story = StoryMeta & {
  contentHtml: string;
};

// Every story is one markdown file in /content/stories.
// Add a new one by dropping a .md file there - no code changes needed.
function getStoryFilenames(): string[] {
  if (!fs.existsSync(storiesDirectory)) return [];
  return fs.readdirSync(storiesDirectory).filter((f) => f.endsWith('.md'));
}

export function getAllStoriesMeta(): StoryMeta[] {
  const filenames = getStoryFilenames();

  const stories = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const fullPath = path.join(storiesDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? '',
      excerpt: data.excerpt ?? '',
      cover: data.cover ?? undefined,
      tags: data.tags ?? [],
      readingTime: readingTime(content).text,
    };
  });

  return stories.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllStorySlugs(): string[] {
  return getStoryFilenames().map((f) => f.replace(/\.md$/, ''));
}

export async function getStoryBySlug(slug: string): Promise<Story> {
  const fullPath = path.join(storiesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(remarkHtml).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? '',
    excerpt: data.excerpt ?? '',
    cover: data.cover ?? undefined,
    tags: data.tags ?? [],
    readingTime: readingTime(content).text,
    contentHtml,
  };
}
