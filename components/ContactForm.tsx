'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [toast, setToast] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setToast('Merci, on revient vers vous sous 24h.');
    setName('');
    setEmail('');
    setMessage('');

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="space-y-5" aria-label="Formulaire de contact">
        <div>
          <label htmlFor="contact-name">Nom</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" aria-label="Envoyer le message">
          Envoyer
        </button>
      </form>
      <div aria-live="assertive" aria-atomic="true" className="pointer-events-none">
        {toast && (
          <div className="pointer-events-auto fixed inset-x-0 bottom-6 mx-auto flex max-w-xs items-center gap-3 rounded-full bg-primary px-4 py-3 text-sm text-white shadow-lg">
            <svg
              className="h-5 w-5 text-accent"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-12v4m0 2h.01"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{toast}</span>
          </div>
        )}
      </div>
    </div>
  );
}
