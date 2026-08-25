import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="py-8">
      <h1 className="mb-3 text-xl font-semibold">This story doesn't exist yet</h1>
      <p className="mb-6 text-muted">It may have been moved, renamed, or not written yet.</p>
      <Link href="/stories">← Back to all stories</Link>
    </div>
  );
}
