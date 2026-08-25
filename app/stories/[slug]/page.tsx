import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllStorySlugs, getStoryBySlug } from '@/lib/stories';

export async function generateStaticParams() {
  return getAllStorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const story = await getStoryBySlug(params.slug);
    return { title: `${story.title}` };
  } catch {
    return { title: 'Story not found' };
  }
}

export default async function StoryPage({ params }: { params: { slug: string } }) {
  let story;
  try {
    story = await getStoryBySlug(params.slug);
  } catch {
    notFound();
  }

  return (
    <article className="py-8">
      <Link href="/stories" className="text-sm text-muted">← Stories</Link>

      <h1 className="text-xl font-semibold">{story.title}</h1>
      <p className="mb-5 text-sm text-muted">
        {story.date} · {story.readingTime}
      </p>

      <div className="prose-story text-sm" dangerouslySetInnerHTML={{ __html: story.contentHtml }} />
    </article>
  );
}
