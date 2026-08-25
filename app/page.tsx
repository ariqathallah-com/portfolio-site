'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [showCausath, setShowCausath] = useState(false);

  return (
    <div className="py-8 text-[17px] leading-relaxed">
      <h1 className="mb-0 text-xl font-semibold">Muhammad Ariq Athallah</h1>

      <div className="mb-8 flex flex-wrap gap-x-1.5 text-sm">
        <a href="https://instagram.com/ariqathallah" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>

      <p className="prose-story text-sm">
        Currently building{' '}
        <button
          onClick={() => setShowCausath(!showCausath)}
          className="underline decoration-[#B5B5B5] underline-offset-2 hover:decoration-[#111111]"
        >
          Causath
        </button>{' '}
        and learning how to vibe coding. I'm not sure if you want to read about my{' '}
        <Link href="/stories">stories</Link>, but if so then go ahead.
      </p>

      {showCausath && (
        <div className="mb-8 text-sm">
          <p className="text-muted" style={{ color: '#9c9c9c' }}>
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