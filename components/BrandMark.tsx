// Marca compacta (monograma + nombre) para la alianza. Como no tenemos los
// logos oficiales en archivo, usamos un monograma tipográfico limpio; se puede
// reemplazar luego por el logo real de cada marca.
export function BrandMark({
  initials,
  name,
  sub,
  tone = "accent",
}: {
  initials: string;
  name: string;
  sub?: string;
  tone?: "accent" | "ink";
}) {
  const tile =
    tone === "accent"
      ? "bg-[var(--accent)] text-[var(--accent-ink)]"
      : "bg-[var(--ink)] text-[var(--surface)]";
  return (
    <div className="flex items-center gap-3">
      <span
        aria-hidden
        className={`flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-bold ${tile}`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {initials}
      </span>
      <span className="leading-tight">
        <span
          className="block font-bold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {name}
        </span>
        {sub && <span className="block text-sm text-[var(--ink-soft)]">{sub}</span>}
      </span>
    </div>
  );
}
