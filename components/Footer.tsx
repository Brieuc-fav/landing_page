import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 text-sm text-slate-600 sm:px-6 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="space-y-2">
          <p className="font-semibold text-primary">Paroisses de France</p>
          <p>contact@paroisses.fr</p>
          <p>Hébergement Europe • RGPD • Accessibilité</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <Link href="#" className="hover:text-primary" aria-label="Mentions légales">
            Mentions légales
          </Link>
          <Link href="#" className="hover:text-primary" aria-label="Politique de confidentialité">
            Politique de confidentialité
          </Link>
          <Link href="#contact" className="hover:text-primary" aria-label="Section contact">
            Contact
          </Link>
        </div>
        <p className="text-xs text-slate-500">© {currentYear} Paroisses de France. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
