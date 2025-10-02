'use client';

import { FormEvent, useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) {
      return;
    }

    const submit = async () => {
      try {
        setStatus('loading');
        setFeedback('');

        const response = await fetch('/api/waitlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        const payload = await response.json();

        if (response.ok && payload.ok) {
          setStatus('success');
          setFeedback(payload.message ?? "Merci ! Nous vous préviendrons dès l'ouverture.");
          setEmail('');
          return;
        }

        setStatus('error');
        setFeedback('Une erreur est survenue. Merci de réessayer.');
      } catch (error) {
        console.error('waitlist submit error', error);
        setStatus('error');
        setFeedback('Impossible de vous inscrire pour le moment. Vérifiez votre connexion.');
      }
    };

    void submit();
  };

  return (
    <div className="relative w-full max-w-lg">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 rounded-2xl border border-accent/60 bg-white/90 p-4 shadow-card backdrop-blur-sm sm:flex-row sm:items-center sm:gap-2"
        aria-label="Inscription à la liste d'attente"
      >
        <label htmlFor="waitlist-email" className="sr-only">
          Email
        </label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="vous@paroisse.fr"
          className="flex-1 rounded-full border border-accent/70 bg-white px-4 py-3 text-sm text-text-primary shadow-none focus:border-secondary"
          disabled={status === 'loading'}
          autoComplete="email"
        />
        <button
          type="submit"
          className="btn btn-primary whitespace-nowrap"
          aria-label="Rejoindre la liste d'attente"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Envoi…' : 'Rejoindre la liste'}
        </button>
      </form>
      <div aria-live="polite" className="mt-3 text-sm font-medium text-secondary">
        {status === 'idle' && 'Inscrivez-vous pour accéder aux premières invitations.'}
        {status === 'loading' && 'Enregistrement en cours…'}
        {status === 'success' && feedback}
        {status === 'error' && feedback}
      </div>
    </div>
  );
}
