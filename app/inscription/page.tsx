import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Inscription — Paroisses de France',
  description: 'Pré-inscrivez votre paroisse et soyez informé du lancement public.',
};

export default function InscriptionPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
        <span className="rounded-full bg-accent/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
          Bientôt disponible
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-primary sm:text-5xl">Pré-inscrivez votre paroisse</h1>
        <p className="mt-4 max-w-2xl text-center text-base text-slate-600">
          Nous finalisons actuellement l’ouverture au public. Laissez-nous votre email et nous vous préviendrons dès que la
          plateforme sera accessible.
        </p>
        <form className="mt-8 flex w-full max-w-lg flex-col gap-4 sm:flex-row" aria-label="Formulaire de préinscription">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="votre.email@paroisse.fr"
            className="flex-1"
            aria-label="Adresse email"
          />
          <button type="submit" className="btn btn-primary" aria-label="Me tenir informé">
            Me tenir informé
          </button>
        </form>
        <p className="mt-6 text-sm text-slate-500">
          Besoin d’échanger ?{' '}
          <Link href="#contact" className="text-primary hover:text-primary/80">
            Contactez-nous
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
