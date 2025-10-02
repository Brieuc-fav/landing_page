import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-accent/50 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Accueil Paroisses de France">
          <Image src="/logo.svg" alt="Logo Paroisses de France" width={40} height={40} priority />
          <span className="text-base font-semibold text-secondary sm:text-lg">Paroisses de France</span>
        </Link>
      </div>
    </header>
  );
}
