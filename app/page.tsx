import WaitlistForm from '@/components/WaitlistForm';

const highlights = [
  {
    title: 'Des horaires toujours à jour',
    description: 'Publiez messes, annonces et événements exceptionnels en quelques clics.',
  },
  {
    title: 'Une vitrine accueillante',
    description: 'Un site chaleureux, lisible sur mobile et fidèle à l’identité de votre paroisse.',
  },
  {
    title: 'Pensé pour les équipes paroissiales',
    description: "Aucune compétence technique requise : nous vous guidons pas à pas lors du lancement.",
  },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-surface text-text-primary">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-accent via-accent/70 to-transparent"
          aria-hidden="true"
        />
        <div className="absolute -left-40 top-24 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl sm:-left-20" aria-hidden="true" />
        <div className="absolute -right-28 bottom-10 -z-10 h-60 w-60 rounded-full bg-secondary/10 blur-3xl" aria-hidden="true" />

        <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-4 pb-16 pt-24 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-secondary shadow-sm">
            Construit pour les paroisses francophones
          </span>
          <h1 className="mt-8 text-4xl font-semibold leading-tight text-secondary sm:text-5xl">
            Rassemblez votre communauté en ligne.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-text-primary/90 sm:text-lg">
            Centralisez horaires de messes, projets solidaires et nouvelles en un seul espace simple à tenir à jour. Nous
            lançons bientôt la première version et nous ouvrons la liste d’attente.
          </p>

          <div className="mt-10 flex w-full flex-col items-center gap-8">
            <WaitlistForm />
            <p className="max-w-xl text-sm text-text-primary/70">
              Nous limitons les premières ouvertures pour accompagner chaque paroisse de manière personnalisée.
            </p>
          </div>

          <div className="mt-14 grid w-full gap-6 text-left sm:grid-cols-3">
            {highlights.map(({ title, description }) => (
              <article key={title} className="rounded-2xl border border-accent/70 bg-white/80 p-6 shadow-card backdrop-blur-sm">
                <h2 className="text-base font-semibold text-secondary">{title}</h2>
                <p className="mt-3 text-sm text-text-primary/80">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
