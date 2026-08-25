import Link from 'next/link';
import { getAllStoriesMeta } from '@/lib/stories';
import Image from 'next/image';

export const metadata = {
  title: 'Stories',
};

export default function StoriesPage() {
  const stories = getAllStoriesMeta();

  return (
    <div className="py-8 text-[17px]">
      
      <div className="min-h-[54px]">
        <Link href="/" className="text-sm text-muted">← Home</Link>

        <h1 className="mb-6 text-xl font-semibold">Stories</h1>
      </div>

      <Image
        src="/images/2.webp"
        width={1200}
        height={600}
        className="my-4 rounded"
        alt="Stories"
      />
      
      <p className="prose-story mb-2 text-sm">
        Stories that I found interesting throughout my life.
      </p>

      {stories.length === 0 ? (
        <p className="text-muted">
          No stories yet — add a markdown file to{' '}
          <code className="text-sm">content/stories/</code> to get started.
        </p>
      ) : (
        <ul className="mt-4 space-y-5">
          {stories.map((story) => (
            <li key={story.slug}>
              <Link href={`/stories/${story.slug}`} className="text-sm font-medium">
                {story.title}
              </Link>
              <div className="text-sm text-muted">
                {story.date} · {story.excerpt}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
