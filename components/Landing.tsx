// Landing compartida ES/EN. Lectura de diseño: trust-first para audiencia 50+
// (VARIANCE 4 / MOTION 3 / DENSITY 4), estilo WhatsApp (acento verde, demo
// como conversación). Familias de layout: hero split, pasos verticales,
// filas semánticas, split con lista de iconos, banda de confianza en grid,
// tarjeta de entidades, acordeón FAQ, banda de cierre.
import {
  Bank,
  CaretDown,
  ChatCircleText,
  Image as ImageIcon,
  LinkSimple,
  Microphone,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import ChatDemo from "@/components/ChatDemo";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SiteFooter, SiteNav } from "@/components/SiteChrome";
import { DICT, type Locale } from "@/lib/i18n";
import { WHATSAPP_NUMBER, waUrl } from "@/lib/site";

const FORMAT_ICONS = [ChatCircleText, LinkSimple, ImageIcon, Microphone];

const BAND_PILL = {
  red: "bg-red-600 text-white",
  yellow: "bg-amber-500 text-zinc-950",
  green: "bg-[var(--accent)] text-[var(--accent-ink)]",
} as const;

export default function Landing({ locale }: { locale: Locale }) {
  const d = DICT[locale];
  const wa = waUrl(d.waText);

  return (
    <>
      <SiteNav d={d} locale={locale} />
      <main>
        {/* ── Hero: split asimétrico, demo real a la derecha ────────────── */}
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-10 sm:pt-14 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:pb-20">
          <div className="rise-in">
            <h1 className="text-[2.35rem] font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
              {d.hero.titleA}
              <br />
              <em className="not-italic text-[var(--accent)]">
                {d.hero.titleB}
              </em>
            </h1>
            <p className="mt-5 max-w-[46ch] text-lg text-[var(--ink-soft)]">
              {d.hero.sub}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={wa}
                className="flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3.5 text-lg font-bold text-[var(--accent-ink)] transition-transform hover:-translate-y-px active:scale-[0.98]"
              >
                <WhatsappLogo size={24} weight="fill" aria-hidden />
                {d.cta.whatsapp}
              </a>
              <span className="text-[var(--ink-soft)]">{WHATSAPP_NUMBER ? "+" + WHATSAPP_NUMBER : "Muy pronto por WhatsApp"}</span>
            </div>
            {/* Alianza arriba (menos scroll): tira compacta con los logos sobre
                placa blanca, tamaños equilibrados (≈1:1.3). */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-[var(--ink-soft)]">
                Un producto de
              </span>
              <div className="inline-flex items-center gap-2.5 rounded-lg bg-white px-3 py-1.5 shadow-sm ring-1 ring-black/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/tuconsejeria-logo.png"
                  alt="TuConsejería AI"
                  className="h-4 w-auto object-contain sm:h-[19px]"
                />
              </div>
            </div>
          </div>
          <div className="rise-in-late">
            <ChatDemo d={d} />
          </div>
        </section>

        {/* ── Por qué importa: 3 cifras (datos reales de Colombia) ───────── */}
        <section className="border-y border-[var(--line)] bg-[var(--surface-raised)]">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <div className="grid gap-8 sm:grid-cols-3">
              {d.stats.items.map((s) => (
                <div key={s.label} className="text-center sm:text-left">
                  <p
                    className="text-4xl font-bold text-[var(--accent)] md:text-5xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.n}
                  </p>
                  <p className="mt-1 text-[var(--ink-soft)]">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs text-[var(--ink-soft)]">{d.stats.source}</p>
          </div>
        </section>

        {/* ── Cómo funciona: pasos verticales, verbo directo ────────────── */}
        <section className="border-t border-[var(--line)] bg-[var(--surface-raised)]">
          <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
            <h2 className="text-3xl font-bold md:text-4xl">{d.how.title}</h2>
            <ol className="mt-10 max-w-3xl space-y-8">
              {d.how.steps.map((step, i) => (
                <li key={step.title} className="flex gap-5">
                  <span
                    aria-hidden
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-lg font-bold text-[var(--accent-ink)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="mt-1 max-w-[52ch] text-[var(--ink-soft)]">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Semáforo: filas semánticas ─────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <h2 className="text-3xl font-bold md:text-4xl">{d.bands.title}</h2>
          <div className="mt-10 space-y-4">
            {d.bands.rows.map((band) => (
              <div
                key={band.key}
                className="lift flex flex-col gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surface-raised)] p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6"
              >
                <span
                  className={`${BAND_PILL[band.key as keyof typeof BAND_PILL]} w-fit rounded-full px-4 py-1.5 font-bold sm:w-44 sm:text-center`}
                >
                  {band.name}
                </span>
                <p className="text-[var(--ink-soft)]">{band.copy}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Qué puede reenviar: split con lista de iconos ─────────────── */}
        <section className="border-t border-[var(--line)] bg-[var(--surface-raised)]">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1fr_1.2fr] lg:py-20">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">
                {d.formats.title}
              </h2>
              <p className="mt-4 max-w-[40ch] text-[var(--ink-soft)]">
                {d.formats.sub}
              </p>
            </div>
            <ul className="grid content-center gap-4 sm:grid-cols-2">
              {d.formats.items.map((label, i) => {
                const Icon = FORMAT_ICONS[i];
                return (
                  <li
                    key={label}
                    className="lift flex items-center gap-3 rounded-2xl border border-[var(--line)] px-5 py-4"
                  >
                    <Icon
                      size={26}
                      weight="duotone"
                      className="shrink-0 text-[var(--accent)]"
                      aria-hidden
                    />
                    <span className="font-bold">{label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ── Confianza y privacidad: banda con grid 2×2 ─────────────────── */}
        <section className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <h2 className="text-3xl font-bold md:text-4xl">{d.trust.title}</h2>
          <p className="mt-3 max-w-[50ch] text-[var(--ink-soft)]">
            {d.trust.sub}
          </p>
          <div className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {d.trust.items.map((item) => (
              <div
                key={item.title}
                className="border-l-4 border-[var(--accent)] pl-5"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-1 text-[var(--ink-soft)]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Alianza · Economía Plateada (TuConsejería AI × TuBanc) ─────── */}
        <section className="border-t border-[var(--line)]">
          <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
            <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface-raised)] p-8 md:p-12">
              <p className="inline-block rounded-full bg-[var(--accent)]/12 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
                {d.alliance.badge}
              </p>
              <h2 className="mt-4 max-w-[24ch] text-3xl font-bold md:text-4xl">
                {d.alliance.title}
              </h2>
              <p className="mt-4 max-w-[62ch] text-lg text-[var(--ink-soft)]">
                {d.alliance.body}
              </p>
              <div className="mt-8 flex flex-col items-start gap-5">
                {/* Lockup de alianza sobre placa blanca: mantiene los colores de
                    marca (#0E5284 y turquesa) legibles en modo claro y oscuro, y
                    equilibra los tamaños (≈1:1.3) para que ninguno se vea más que
                    el otro (TuConsejería es solo texto; TuBanc trae ícono). */}
                <div className="inline-flex max-w-full items-center gap-4 rounded-2xl bg-white px-6 py-5 shadow-sm ring-1 ring-black/5 sm:px-8 sm:py-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/tuconsejeria-logo.png"
                    alt="TuConsejería AI"
                    className="h-8 w-auto object-contain sm:h-[46px]"
                  />
                </div>
                <p className="max-w-[60ch] text-sm text-[var(--ink-soft)]">
                  <b className="font-semibold text-[var(--ink)]">TuConsejería AI</b> — {d.alliance.role_tuconsejeria}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Entidades financieras (Colombia) ───────────────────────────── */}
        <section
          id="entidades"
          className="border-t border-[var(--line)] bg-[var(--surface-raised)]"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-7 md:p-12">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
                <div className="flex-1">
                  <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
                    <Bank size={18} weight="fill" aria-hidden />
                    {d.entities.eyebrow}
                  </p>
                  <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                    {d.entities.title}
                  </h2>
                  <p className="mt-4 max-w-[55ch] text-[var(--ink-soft)]">
                    {d.entities.body}
                  </p>
                  <p className="mt-3 max-w-[55ch] font-bold">
                    {d.entities.countries}
                  </p>
                </div>
                <div className="shrink-0">
                  <a
                    href={wa}
                    className="inline-block rounded-full border-2 border-[var(--accent)] px-6 py-3 font-bold text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-[var(--accent-ink)] active:scale-[0.98]"
                  >
                    {d.entities.cta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ: acordeón nativo accesible ─────────────────────────────── */}
        <section className="mx-auto max-w-3xl px-4 py-16 lg:py-20">
          <h2 className="text-3xl font-bold md:text-4xl">{d.faq.title}</h2>
          <div className="mt-8 divide-y divide-[var(--line)] rounded-2xl border border-[var(--line)] bg-[var(--surface-raised)]">
            {d.faq.items.map((item) => (
              <details key={item.q} className="faq px-6">
                <summary className="flex items-center justify-between gap-4 py-5 text-lg font-bold">
                  {item.q}
                  <CaretDown
                    size={20}
                    weight="bold"
                    className="faq-chevron shrink-0 text-[var(--accent)]"
                    aria-hidden
                  />
                </summary>
                <p className="pb-6 text-[var(--ink-soft)]">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── Cierre ─────────────────────────────────────────────────────── */}
        <section className="border-t border-[var(--line)] bg-[var(--surface-raised)]">
          <div className="mx-auto max-w-6xl px-4 py-16 text-center lg:py-20">
            <h2 className="mx-auto max-w-[26ch] text-3xl font-bold md:text-4xl">
              {d.closing.title}
            </h2>
            <a
              href={wa}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-8 py-4 text-lg font-bold text-[var(--accent-ink)] transition-transform hover:-translate-y-px active:scale-[0.98]"
            >
              <WhatsappLogo size={24} weight="fill" aria-hidden />
              {d.cta.whatsapp}
            </a>
          </div>
        </section>
      </main>
      <SiteFooter d={d} />
      <FloatingWhatsApp locale={locale} />
    </>
  );
}
