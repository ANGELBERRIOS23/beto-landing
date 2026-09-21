// Constantes del sitio. El número de WhatsApp del piloto de Guatemala se conecta
// DESPUÉS: se define en NEXT_PUBLIC_WHATSAPP_NUMBER (código país 502, sin "+").
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

export function waUrl(prefill: string): string {
  if (!WHATSAPP_NUMBER) return "#"; // aún sin número → el botón no rompe
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(prefill)}`;
}

// Sitio de la marca.
export const TUCONSEJERIA_URL = "https://tuconsejeria.com";
