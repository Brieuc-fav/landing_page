import WaitlistForm from '@/components/WaitlistForm';

const highlights = [
  {
    title: 'Des horaires toujours à jour',
    description: 'Publiez messes, annonces et événements exceptionnels en quelques clics.',
    icon: '📅',
  },
  {
    title: 'Une vitrine accueillante',
    description: "Un site chaleureux, lisible sur mobile et fidèle à l'identité de votre paroisse.",
    icon: '✨',
  },
  {
    title: 'Pensé pour les équipes paroissiales',
    description: "Aucune compétence technique requise : nous vous guidons pas à pas lors du lancement.",
    icon: '🤝',
  },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-surface text-text-primary">
      <section className="relative overflow-hidden">
        {/* Background decorations with enhanced effects */}
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-gradient-to-b from-accent via-accent/70 to-transparent"
          aria-hidden="true"
        />
        <div className="absolute -left-40 top-24 -z-10 h-80 w-80 animate-pulse-slow rounded-full bg-primary/20 blur-3xl sm:-left-20" aria-hidden="true" />
        <div className="absolute -right-28 bottom-10 -z-10 h-72 w-72 animate-pulse-slow rounded-full bg-secondary/10 blur-3xl" aria-hidden="true" />
        <div className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />

        <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-4 pb-16 pt-24 text-center sm:px-6 lg:px-8">
          {/* Badge with animation */}
          <span className="inline-flex animate-slide-down items-center rounded-full bg-white/90 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-secondary shadow-xl-warm backdrop-blur-md ring-1 ring-primary/10">
            ✨ Construit pour les paroisses francophones
          </span>
          
          {/* Main title with gradient effect */}
          <h1 className="mt-8 animate-fade-in bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl lg:text-6xl">
            Rassemblez votre communauté en ligne.
          </h1>
          
          {/* Description */}
          <p className="mt-6 max-w-2xl animate-slide-up text-base text-text-primary/90 sm:text-lg">
            Centralisez horaires de messes, projets solidaires et nouvelles en un seul espace simple à tenir à jour. Nous
            lançons bientôt la première version et nous ouvrons la liste d'attente.
          </p>

          {/* Waitlist form section */}
          <div className="mt-10 flex w-full animate-slide-up flex-col items-center gap-8">
            <WaitlistForm />
            <p className="max-w-xl text-sm text-text-primary/70">
              🔒 Nous limitons les premières ouvertures pour accompagner chaque paroisse de manière personnalisée.
            </p>
          </div>

          {/* Feature cards with enhanced styling */}
          <div className="mt-16 grid w-full gap-6 text-left sm:grid-cols-3">
            {highlights.map(({ title, description, icon }, index) => (
              <article 
                key={title} 
                className="group animate-scale-in rounded-2xl border border-accent/70 bg-white/90 p-6 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-2xl shadow-glow transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {icon}
                </div>
                <h2 className="text-base font-semibold text-secondary transition-colors group-hover:text-primary">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-text-primary/80">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
