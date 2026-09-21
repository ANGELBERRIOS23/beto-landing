import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Outfit } from "next/font/google";
import "./globals.css";

// Atkinson Hyperlegible: diseñada para máxima legibilidad (Braille Institute).
// Elección deliberada para una audiencia mayor de 50 años.
const atkinson = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-atkinson",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://beto.tuconsejeria.com"),
  title: "Beto",
  description:
    "Reenvíe ese mensaje o enlace dudoso a Beto por WhatsApp y sepa en segundos si es seguro. Un producto de TuConsejería AI para Guatemala.",
  alternates: { languages: { es: "/" } },
  icons: { icon: "/beto-logo.png" },
  openGraph: {
    title: "Beto",
    description:
      "Antes de darle clic, pásemelo. Su escudo contra el fraude, por WhatsApp. Guatemala.",
    url: "/",
    siteName: "Beto",
    locale: "es_GT",
    type: "website",
    images: [
      { url: "/og.png", width: 1200, height: 630,
        alt: "Beto — su escudo contra el fraude" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beto",
    description: "Antes de darle clic, pásemelo. Su escudo contra el fraude.",
    images: ["/og.png"],
  },
};

// Resuelve el tema ANTES de pintar (localStorage → sistema) para evitar flash.
const THEME_SCRIPT = `(function(){try{var s=localStorage.getItem("tuconfia-theme");var t=s==="light"||s==="dark"?s:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme="light";}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${atkinson.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        {children}
      </body>
    </html>
  );
}
