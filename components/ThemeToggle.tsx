"use client";

// Toggle manual claro/oscuro. El script del layout ya dejó data-theme puesto;
// aquí solo se alterna y se persiste.
import { useEffect, useState } from "react";
import { Moon, Sun } from "@phosphor-icons/react";

export default function ThemeToggle({ label }: { label: string }) {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("tuconfia-theme", next);
    } catch {
      // sin almacenamiento: el toggle igual funciona en esta visita
    }
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink-soft)] transition-colors hover:border-[var(--accent)] hover:text-[var(--ink)] active:scale-[0.96]"
    >
      {theme === null ? (
        <span className="h-5 w-5 rounded-full bg-[var(--line)]" aria-hidden />
      ) : theme === "dark" ? (
        <Sun size={20} weight="bold" aria-hidden />
      ) : (
        <Moon size={20} weight="bold" aria-hidden />
      )}
    </button>
  );
}
