// Botón flotante de WhatsApp: invita a escribir desde cualquier punto del sitio.
// Verde WhatsApp reconocible, objetivo de toque grande (para 50+), etiqueta
// visible en desktop y un pulso suave que llama sin agobiar.
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

import { DICT, type Locale } from "@/lib/i18n";
import { waUrl } from "@/lib/site";

export function FloatingWhatsApp({ locale }: { locale: Locale }) {
  const d = DICT[locale];
  return (
    <a
      href={waUrl(d.waText)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={d.cta.whatsapp}
      title={d.cta.whatsapp}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] py-2.5 pl-2.5 pr-3 font-bold text-white shadow-xl shadow-black/25 ring-1 ring-black/5 transition-transform hover:-translate-y-0.5 active:scale-95 sm:bottom-6 sm:right-6 sm:pr-5"
    >
      <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
        <span
          className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/30 [animation-duration:2.6s]"
          aria-hidden
        />
        <WhatsappLogo size={32} weight="fill" className="relative" aria-hidden />
      </span>
      <span className="hidden pr-0.5 text-[15px] sm:block">{d.cta.whatsapp}</span>
    </a>
  );
}
