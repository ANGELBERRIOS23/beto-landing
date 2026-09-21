import Link from "next/link";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import type { Dict, Locale } from "@/lib/i18n";
import { TUCONSEJERIA_URL, waUrl } from "@/lib/site";
import ThemeToggle from "./ThemeToggle";

export function SiteNav({ d, locale }: { d: Dict; locale: Locale }) {
  const home = locale === "en" ? "/en" : "/";
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--surface)]/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4">
        <Link
          href={home}
          className="flex shrink-0 items-center gap-2 font-bold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/beto-logo.png" alt="" aria-hidden className="h-8 w-8 rounded-full" />
          <span className="text-lg">Beto</span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href={`${home}#entidades`}
            className="hidden text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)] lg:block"
          >
            {d.nav.entities}
          </Link>
          <ThemeToggle label={d.nav.themeLabel} />
          <a
            href={waUrl(d.waText)}
            className="flex items-center gap-2 rounded-full bg-[var(--accent)] px-3.5 py-2 font-bold text-[var(--accent-ink)] transition-transform hover:-translate-y-px active:scale-[0.98] sm:px-4"
          >
            <WhatsappLogo size={20} weight="fill" aria-hidden />
            <span className="hidden md:inline">{d.cta.whatsapp}</span>
            <span className="sr-only md:hidden">{d.cta.whatsapp}</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter({ d }: { d: Dict }) {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface-raised)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/beto-logo.png" alt="" aria-hidden className="h-8 w-8 rounded-full" />
            <span className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
              Beto
            </span>
          </div>
          {/* Marca de la alianza sobre placa blanca: los logos (#0E5284 y
              turquesa) se mantienen legibles aunque el footer esté en modo
              oscuro. Tamaños equilibrados (≈1:1.3) igual que en la Home. */}
          <div className="flex flex-col items-start gap-2 sm:items-end">
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--ink-soft)]">
              {d.alliance.badge}
            </span>
            <div className="inline-flex items-center gap-3 rounded-xl bg-white px-3.5 py-2 shadow-sm ring-1 ring-black/5">
              <a href={TUCONSEJERIA_URL || undefined} aria-label="TuConsejería AI">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/tuconsejeria-logo.png"
                  alt="TuConsejería AI"
                  className="h-5 w-auto object-contain sm:h-6"
                />
              </a>
            </div>
          </div>
        </div>
        <p className="max-w-[70ch] text-sm text-[var(--ink-soft)]">
          {d.footer.privacy}
        </p>
      </div>
    </footer>
  );
}
