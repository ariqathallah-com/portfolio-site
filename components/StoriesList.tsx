'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { StoryMeta } from '@/lib/stories';

export default function StoriesList({ stories }: { stories: StoryMeta[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(stories.flatMap((s) => s.tags ?? [])));

  const filteredStories = activeTag
    ? stories.filter((s) => s.tags?.includes(activeTag))
    : stories;

  return (
    <div>
      {allTags.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-x-3 gap-y-1 text-sm">
          <button
            onClick={() => setActiveTag(null)}
            className={
              activeTag === null
                ? 'underline decoration-[#111111] underline-offset-2'
                : 'underline decoration-[#B5B5B5] underline-offset-2 hover:decoration-[#111111]'
            }
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={
                activeTag === tag
                  ? 'underline decoration-[#111111] underline-offset-2'
                  : 'underline decoration-[#B5B5B5] underline-offset-2 hover:decoration-[#111111]'
              }
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <ul className="space-y-5">
        {filteredStories.map((story) => (
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
    </div>
  );
}