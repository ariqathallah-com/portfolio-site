import Link from 'next/link';

export default function Header() {
  return (
    <header className="pb-2 pt-10">
      <nav className="flex flex-wrap gap-x-4 gap-y-1 text-[15px]">
        <Link href="/">Home</Link>
        <Link href="/stories">Stories</Link>
        <Link href="/things">Things</Link>
      </nav>
    </header>
  );
}
