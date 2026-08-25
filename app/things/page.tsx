import Link from 'next/link';

export const metadata = {
  title: 'Things',
};

export default function ThingsPage() {
  return (
    <div className="py-8 text-[17px]">
      <Link href="/" className="text-sm text-muted">← Home</Link>

      <h1 className="mb-6 text-xl font-semibold">Things</h1>

      <p className="prose-story mb-2 text-sm">
        Things I'm building now, and things I've built in the past.
      </p>

      <div className="mt-5 space-y-2 text-sm">
        <details>
          <summary className="cursor-pointer underline decoration-[#B5B5B5] underline-offset-2 hover:decoration-[#111111] font-medium">
            Causath (current)
          </summary>
          <p className="mt-2 text-muted prose-story">
            Chess education platform for Indonesian chess player to imrpove their ELO.
          </p>
          <div className="flex flex-wrap mt-1 mb-4 gap-x-1.5 text-sm">
            <a href="https://causath.com" target="_blank" rel="noopener noreferrer">Website</a>
            <span>/</span>
            <a href="https://instagram.com/caturcausath" target="_blank" rel="noopener noreferrer">Instagram</a>
            <span>/</span>
            <a href="https://www.tiktok.com/@caturcausath" target="_blank" rel="noopener noreferrer">TikTok</a>
            <span>/</span>
            <a href="https://www.youtube.com/@Causath" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </details>

        <details>
          <summary className="cursor-pointer underline decoration-[#B5B5B5] underline-offset-2 hover:decoration-[#111111] font-medium">
            Tentu
          </summary>
          <p className="mt-2 text-muted prose-story">Platform to help highschool students to learn more about university major.</p>
          <div className="flex flex-wrap mt-1 mb-4 gap-x-1.5 text-sm">
            <a href="https://instagram.com/tentu.idn" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </details>

        <details>
          <summary className="cursor-pointer underline decoration-[#B5B5B5] underline-offset-2 hover:decoration-[#111111] font-medium">
            BuildUp!
          </summary>
          <p className="mt-2 text-muted prose-story">Platform to help students developing themselves through collaborations.</p>
          <div className="flex flex-wrap mt-1 mb-4 gap-x-1.5 text-sm">
            <a href="https://instagram.com/buildup.id" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </details>
      </div>
    </div>


  );
}