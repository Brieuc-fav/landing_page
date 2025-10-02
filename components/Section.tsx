import { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  background?: 'default' | 'muted';
  className?: string;
  children: ReactNode;
};

export default function Section({
  id,
  title,
  subtitle,
  background = 'default',
  className = '',
  children,
}: SectionProps) {
  const headingId = title ? `${id ?? 'section'}-title` : undefined;
  const baseBackground = background === 'muted' ? 'muted-section' : 'default-section';

  return (
    <section id={id} aria-labelledby={headingId} className={baseBackground}>
      <div className={`mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 ${className}`}>
        {(title || subtitle) && (
          <header className="mb-10 max-w-3xl">
            {title && (
              <h2 id={headingId} className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && <p className="mt-4 text-base text-slate-600">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
