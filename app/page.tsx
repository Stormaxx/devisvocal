"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwvnwqnq";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Logo / header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-4 sm:justify-start">
          <span className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            DevisVocal
          </span>
        </div>
      </header>

      {/* Hero — 2 colonnes : texte à gauche, illustration à droite */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl xl:text-6xl">
                DevisVocal — Faites vos devis en parlant
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg text-slate-600 sm:text-xl lg:mx-0">
                L&apos;IA qui transforme votre voix en devis professionnel en 30 secondes.
              </p>
              <div className="mt-10 flex justify-center lg:justify-start">
                <a
                  href="#liste-attente"
                  className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-8 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Rejoindre la liste d&apos;attente
                </a>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-slate-200 shadow-xl ring-1 ring-slate-200/50 aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=640&h=480&fit=crop&q=85"
                  alt="Artisan sur chantier utilisant un smartphone pour enregistrer sa voix et générer un devis"
                  width={640}
                  height={480}
                  className="block h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 1024px) 100vw, 448px"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/70 to-transparent px-4 py-3 text-white">
                  <span className="text-sm font-medium">Voix → Devis en 30 s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problèmes des artisans */}
      <section className="border-t border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Les devis, un vrai casse-tête pour les artisans
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Entre le chantier et le bureau, rédiger des devis prend du temps et de l&apos;énergie.
          </p>
          <ul className="mx-auto mt-12 grid max-w-2xl gap-6 text-left sm:grid-cols-1">
            <li className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50/50 p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                1
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">Temps perdu sur l&apos;administratif</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Rédiger un devis à la main ou sur ordinateur après une journée sur le terrain, c&apos;est la double peine.
                </p>
              </div>
            </li>
            <li className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50/50 p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                2
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">Risque d&apos;erreurs et d&apos;oublis</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Les détails s&apos;oublient, les prix changent. Un devis mal rédigé peut coûter cher en litiges ou en perte de confiance.
                </p>
              </div>
            </li>
            <li className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50/50 p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                3
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">Réponse client trop lente</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Plus vous mettez de temps à envoyer un devis, plus vous risquez de perdre le chantier au profit d&apos;un concurrent plus réactif.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Comment ça marche — icônes Parlez / IA / PDF */}
      <section className="border-t border-slate-200 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Comment ça marche
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Trois étapes pour passer de votre voix à un devis prêt à envoyer.
          </p>
          <div className="mx-auto mt-16 grid max-w-4xl gap-12 sm:grid-cols-3 sm:gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="mt-5 font-semibold text-slate-900">Parlez</h3>
              <p className="mt-2 text-sm text-slate-600">
                Décrivez le chantier, les prestations et les tarifs à voix haute, comme si vous expliquiez à un client.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="mt-5 font-semibold text-slate-900">Génération IA</h3>
              <p className="mt-2 text-sm text-slate-600">
                En quelques secondes, votre enregistrement est transformé en devis structuré et professionnel.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625a1.125 1.125 0 00-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="mt-5 font-semibold text-slate-900">Téléchargement</h3>
              <p className="mt-2 text-sm text-slate-600">
                Relisez, ajustez si besoin et téléchargez ou envoyez le devis à votre client. Terminé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Liste d'attente */}
      <section id="liste-attente" className="border-t border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Rejoignez la liste d&apos;attente
          </h2>
          <p className="mt-4 text-slate-600">
            Soyez parmi les premiers à tester l&apos;outil. Entrez votre email pour être prévenu du lancement.
          </p>
          <form
            method="POST"
            action={FORMSPREE_ENDPOINT}
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <label htmlFor="email-waitlist" className="sr-only">
              Votre adresse email
            </label>
            <input
              id="email-waitlist"
              name="email"
              type="email"
              placeholder="votre@email.fr"
              required
              disabled={submitted}
              className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 disabled:opacity-60 sm:max-w-xs"
            />
            <button
              type="submit"
              disabled={submitting || submitted}
              className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-60"
            >
              {submitting ? "Envoi…" : submitted ? "Inscrit" : "M'inscrire"}
            </button>
          </form>
          {submitted && (
            <p className="mt-4 rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-800" role="alert">
              Merci ! Vous êtes inscrit à la liste d&apos;attente.
            </p>
          )}
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        <p>© 2025 DevisVocal. Tous droits réservés.</p>
      </footer>
    </main>
  );
}
