import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-accent/50 bg-gradient-warm">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 text-sm text-slate-600 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="space-y-3">
          <p className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-lg font-bold text-transparent">
            Paroisses de France
          </p>
          <p className="flex items-center gap-2 transition-colors hover:text-primary">
            <span className="text-lg">✉️</span>
            <a href="mailto:contact@paroisses.fr" className="hover:underline">
              contact@paroisses.fr
            </a>
          </p>
          <p className="text-xs text-slate-500">
            🇪🇺 Hébergement Europe • 🔒 RGPD • ♿ Accessibilité
          </p>
        </div>
        
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <Link 
            href="#" 
            className="group relative overflow-hidden rounded-lg px-3 py-2 transition-all hover:bg-white/50 hover:shadow-md" 
            aria-label="Mentions légales"
          >
            <span className="relative z-10">Mentions légales</span>
            <div className="absolute inset-0 -z-10 bg-gradient-gold opacity-0 transition-opacity group-hover:opacity-10"></div>
          </Link>
          <Link 
            href="#" 
            className="group relative overflow-hidden rounded-lg px-3 py-2 transition-all hover:bg-white/50 hover:shadow-md" 
            aria-label="Politique de confidentialité"
          >
            <span className="relative z-10">Politique de confidentialité</span>
            <div className="absolute inset-0 -z-10 bg-gradient-gold opacity-0 transition-opacity group-hover:opacity-10"></div>
          </Link>
          <Link 
            href="#contact" 
            className="group relative overflow-hidden rounded-lg px-3 py-2 transition-all hover:bg-white/50 hover:shadow-md" 
            aria-label="Section contact"
          >
            <span className="relative z-10">Contact</span>
            <div className="absolute inset-0 -z-10 bg-gradient-gold opacity-0 transition-opacity group-hover:opacity-10"></div>
          </Link>
        </div>
        
        <p className="text-xs text-slate-500">
          © {currentYear} Paroisses de France. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
