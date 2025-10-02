import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-accent/50 bg-white/95 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-4 sm:px-6 lg:px-8">
        <Link 
          href="/" 
          className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105" 
          aria-label="Accueil Paroisses de France"
        >
          <div className="relative transition-transform duration-300 group-hover:rotate-12">
            <Image 
              src="/logo.svg" 
              alt="Logo Paroisses de France" 
              width={40} 
              height={40} 
              priority 
              className="drop-shadow-md"
            />
          </div>
          <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-base font-bold text-transparent transition-all duration-300 group-hover:from-primary group-hover:to-secondary sm:text-lg">
            Paroisses de France
          </span>
        </Link>
      </div>
    </header>
  );
}
