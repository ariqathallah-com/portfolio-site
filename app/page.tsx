'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [showCausath, setShowCausath] = useState(false);

  return (
    <div className="py-8 text-[17px]">
      <div className="min-h-[54px]">
        <h1 className="text-xl font-semibold">Muhammad Ariq Athallah</h1>

        <div className="mb-6 flex flex-wrap gap-x-1.5 text-sm">
          <a href="https://instagram.com/ariqathallah" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>

      <Image
        src="/images/1.webp"
        width={1200}
        height={600}
        className="my-4 rounded"
      />

      <p className="prose-story text-sm">
        Currently building{' '}
        <button
          onClick={() => setShowCausath(!showCausath)}
          className="underline decoration-[#B5B5B5] underline-offset-2 hover:decoration-[#111111]"
        >
          Causath
        </button>{' '}
        and teaching myself vibe coding while I'm at it. I don't know if my{' '}
        <Link href="/stories">stories</Link> are worth your time, but they're here if you want them.
      </p>

      {showCausath && (
        <div className="mb-8 mt-2 text-sm">
          <p className="text-muted prose-story" style={{ color: '#9c9c9c' }}>
            Chess education platform for Indonesian chess players to improve their ELO.
          </p>
          <div className="flex flex-wrap mt-1 gap-x-1.5 text-sm" style={{ color: '#9c9c9c' }}>
            <a href="https://causath.com" target="_blank" rel="noopener noreferrer">Website</a>
            <span>/</span>
            <a href="https://instagram.com/caturcausath" target="_blank" rel="noopener noreferrer">Instagram</a>
            <span>/</span>
            <a href="https://www.tiktok.com/@caturcausath" target="_blank" rel="noopener noreferrer">TikTok</a>
            <span>/</span>
            <a href="https://www.youtube.com/@Causath" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
      )}
    </div>
  );
}