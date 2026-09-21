"use client";

// Demo REAL del agente con look de WhatsApp. Ahora con los MISMOS guardrails
// que el bot (el core entiende la intención: charlar / menú / revisar) y acepta
// imagen (pantallazo) y audio (nota de voz), no solo texto.
import { useRef, useState } from "react";
import { Checks, Paperclip, PaperPlaneRight, ShieldCheck } from "@phosphor-icons/react";
import type { Dict } from "@/lib/i18n";
import { waUrl } from "@/lib/site";

type Verdict = { verdict: "red" | "yellow" | "green"; one_line_reason: string; next_step: string };

const BAND_CHIP = {
  red: "bg-red-600 text-white",
  yellow: "bg-amber-500 text-zinc-950",
  green: "bg-[var(--accent)] text-[var(--accent-ink)]",
} as const;

function now(): string {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function readAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result));
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}

export default function ChatDemo({ d }: { d: Dict }) {
  const c = d.chat;
  const [text, setText] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<
    | { kind: "idle" }
    | { kind: "loading"; asked: string }
    | { kind: "verdict"; asked: string; verdict: Verdict }
    | { kind: "chat"; asked: string; reply: string }
    | { kind: "unavailable"; asked: string }
    | { kind: "error"; message: string }
  >({ kind: "idle" });

  async function send(payload: { text?: string; image_b64?: string; audio_b64?: string; mime?: string }, asked: string) {
    setState({ kind: "loading", asked });
    try {
      const resp = await fetch("/api/analizar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await resp.json();
      if (!resp.ok) {
        setState({ kind: "error", message: data.error ?? c.errorNet });
        return;
      }
      if (data.unavailable) {
        setState({ kind: "unavailable", asked });
        return;
      }
      if (data.kind === "verdict") {
        setState({ kind: "verdict", asked, verdict: data as Verdict });
      } else {
        // chat o menú: respuesta conversacional
        setState({ kind: "chat", asked, reply: data.reply ?? "" });
      }
    } catch {
      setState({ kind: "error", message: c.errorNet });
    }
  }

  async function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const b64 = await readAsBase64(file);
    const isAudio = file.type.startsWith("audio");
    await send(
      isAudio
        ? { audio_b64: b64, mime: file.type }
        : { image_b64: b64, mime: file.type },
      isAudio ? c.sentAudio : c.sentImage
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--line)] shadow-xl shadow-black/10">
      <div className="flex items-center gap-3 bg-[var(--accent)] px-4 py-3 text-[var(--accent-ink)]">
        <span aria-hidden className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
          <ShieldCheck size={24} weight="fill" />
        </span>
        <div className="min-w-0">
          <p className="truncate font-bold leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            {c.name}
          </p>
          <p className="text-sm leading-tight opacity-90">{c.status}</p>
        </div>
      </div>

      <div className="chat-surface min-h-64 space-y-3 px-4 py-4" aria-live="polite">
        <p className="text-center text-xs text-[var(--ink-soft)]">{c.hint}</p>

        {state.kind === "idle" && (
          <>
            <BubbleIn>{c.welcome}</BubbleIn>
            <button
              type="button"
              onClick={() => {
                setText(c.example);
                void send({ text: c.example }, c.example);
              }}
              className="mx-auto block rounded-full border border-[var(--accent)] bg-[var(--surface-raised)] px-4 py-2 text-sm font-bold text-[var(--accent)] transition-transform hover:-translate-y-px active:scale-[0.98]"
            >
              {c.tryExample}
            </button>
          </>
        )}

        {state.kind !== "idle" && state.kind !== "error" && (
          <BubbleOut time={now()}>{state.asked}</BubbleOut>
        )}

        {state.kind === "loading" && (
          <div className="w-4/5 space-y-2 rounded-xl rounded-tl-none bg-[var(--bubble-in)] p-4 shadow-sm" role="status" aria-label={c.checking}>
            <div className="h-3 w-24 animate-pulse rounded bg-[var(--line)]" />
            <div className="h-3 w-full animate-pulse rounded bg-[var(--line)]" />
            <div className="h-3 w-2/3 animate-pulse rounded bg-[var(--line)]" />
          </div>
        )}

        {state.kind === "verdict" && (
          <BubbleIn>
            <span className={`mb-1 inline-block rounded-full px-3 py-0.5 text-sm font-bold ${BAND_CHIP[state.verdict.verdict]}`}>
              {c.bands[state.verdict.verdict]}
            </span>
            <span className="block">{state.verdict.one_line_reason}</span>
            <span className="mt-1 block text-[var(--ink-soft)]">{state.verdict.next_step}</span>
            {c.note && <span className="mt-2 block text-xs text-[var(--ink-soft)]">{c.note}</span>}
          </BubbleIn>
        )}

        {state.kind === "chat" && <BubbleIn>{state.reply}</BubbleIn>}

        {state.kind === "unavailable" && (
          <BubbleIn>
            {c.unavailable}{" "}
            <a href={waUrl(d.waText)} className="font-bold text-[var(--accent)] underline decoration-2 underline-offset-2">
              {d.cta.whatsapp}
            </a>
          </BubbleIn>
        )}

        {state.kind === "error" && (
          <p role="alert" className="mx-auto w-fit rounded-full bg-[var(--surface-raised)] px-4 py-1.5 text-sm text-red-700 dark:text-red-400">
            {state.message}
          </p>
        )}
      </div>

      <form
        className="flex items-end gap-2 border-t border-[var(--line)] bg-[var(--surface-raised)] p-2.5"
        onSubmit={(e) => {
          e.preventDefault();
          if (text.trim()) void send({ text }, text);
        }}
      >
        <input
          ref={fileRef}
          type="file"
          accept="image/*,audio/*"
          className="hidden"
          onChange={onFile}
        />
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          disabled={state.kind === "loading"}
          className="flex h-12 w-11 shrink-0 items-center justify-center rounded-full text-[var(--ink-soft)] transition-colors hover:text-[var(--accent)] disabled:opacity-40"
          aria-label={c.attach}
          title={c.attach}
        >
          <Paperclip size={22} />
        </button>
        <label htmlFor="demo-text" className="sr-only">{c.placeholder}</label>
        <textarea
          id="demo-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={2}
          placeholder={c.placeholder}
          className="min-h-12 flex-1 resize-none rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-4 py-2.5 text-[var(--ink)] placeholder:text-[var(--ink-soft)] focus:border-[var(--accent)] focus:outline-none"
        />
        <button
          type="submit"
          disabled={state.kind === "loading" || !text.trim()}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)] transition-transform active:scale-[0.96] disabled:opacity-40"
          aria-label={c.send}
        >
          <PaperPlaneRight size={22} weight="fill" />
        </button>
      </form>
    </div>
  );
}

function BubbleIn({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-fit max-w-[88%] rounded-xl rounded-tl-none bg-[var(--bubble-in)] px-3.5 py-2.5 text-[var(--bubble-in-ink)] shadow-sm">
      {children}
    </div>
  );
}

function BubbleOut({ time, children }: { time: string; children: React.ReactNode }) {
  return (
    <div className="ml-auto w-fit max-w-[88%] rounded-xl rounded-tr-none bg-[var(--bubble-out)] px-3.5 py-2 text-[var(--bubble-out-ink)] shadow-sm">
      <span className="block break-words">{children}</span>
      <span className="mt-0.5 flex items-center justify-end gap-1 text-[11px] opacity-70">
        {time}
        <Checks size={16} className="text-[var(--tick)]" aria-hidden />
      </span>
    </div>
  );
}
