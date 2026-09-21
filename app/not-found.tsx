// Página 404 global (App Router): reemplaza el «This page could not be found»
// por una pantalla con la marca TuConfIA, cálida y con salida clara al inicio.
import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { waUrl } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-5 py-16 text-center">
      <BrandMark
        initials="B"
        name="Beto"
        sub="Antes de darle clic, pásemelo"
      />

      <p className="mt-10 text-5xl" aria-hidden>
        🛡️
      </p>
      <p className="mt-4 text-6xl font-bold text-[var(--accent)]">404</p>
      <h1 className="mt-3 text-2xl font-bold sm:text-3xl">
        Esta página no existe
      </h1>
      <p className="mt-3 max-w-[42ch] text-lg text-[var(--ink-soft)]">
        No encontramos lo que buscaba. No se preocupe, aquí está seguro. Volvamos a
        un lugar conocido.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-7 py-3.5 text-lg font-bold text-[var(--accent-ink)] transition-transform active:scale-[0.98]"
        >
          Volver al inicio
        </Link>
        <a
          href={waUrl("Hola Beto, necesito ayuda.")}
          className="inline-flex items-center justify-center rounded-full border-2 border-[var(--line)] px-6 py-3.5 text-lg font-bold text-[var(--ink-soft)] transition-colors hover:border-[var(--accent)] hover:text-[var(--ink)]"
        >
          Escribir por WhatsApp
        </a>
      </div>
    </main>
  );
}
