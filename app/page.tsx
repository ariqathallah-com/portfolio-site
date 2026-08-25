import Link from 'next/link';

export default function Home() {
  return (
    <div className="py-8 text-[17px] leading-relaxed">
      <h1 className="mb-0 text-xl font-semibold">Muhammad Ariq Athallah</h1>


      <div className="mb-8 flex flex-wrap gap-x-1.5 text-sm">
        <a href="https://instagram.com/ariqathallah" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>

      <p className="prose-story text-sm">
        Currently building <Link href="https://instagram.com/caturcausath">Causath</Link>, a chess education platform for Indonesian chess player to imrpove their ELO. I'm not sure if you want to read about my <Link href="/stories">stories</Link>, but if so then go ahead.
      </p>
    </div>
    
  );
}