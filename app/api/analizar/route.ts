// Mock de la demo del chat de la landing (SIN backend real todavía). Devuelve un
// veredicto simulado por heurística simple para que "Probar con un ejemplo" y el
// input funcionen. Cuando se conecte el core real, se reemplaza por el proxy.
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: { text?: string; image_b64?: string; audio_b64?: string } = {};
  try {
    body = await req.json();
  } catch {
    /* body vacío */
  }
  const text = (body.text || "").toString();
  const t = text.toLowerCase();

  if (body.image_b64 || body.audio_b64) {
    return NextResponse.json({
      kind: "chat",
      reply:
        "En WhatsApp reviso también fotos y notas de voz. Aquí en la demo, pégueme el texto o el enlace y le digo si es seguro.",
    });
  }
  if (!t.trim()) {
    return NextResponse.json({
      kind: "chat",
      reply: "Pégueme el mensaje o el enlace que le generó duda y le digo si es seguro.",
    });
  }

  const sospechoso =
    /(\.top|\.xyz|\.click|bit\.ly|tinyurl|verifi|bloque|premio|urgente|gana|clic aqu|reclam|http:\/\/)/i.test(
      text,
    );
  const tieneEnlace = /https?:\/\//i.test(text);

  if (sospechoso) {
    return NextResponse.json({
      kind: "verdict",
      verdict: "red",
      one_line_reason:
        "Ese enlace no es de su banco: es un engaño para robarle sus datos.",
      next_step:
        "No lo abra ni ponga sus claves. Verifique por la app oficial o la línea de su banco.",
    });
  }
  if (tieneEnlace) {
    return NextResponse.json({
      kind: "verdict",
      verdict: "yellow",
      one_line_reason: "No puedo confirmar que este enlace sea seguro.",
      next_step:
        "Mejor no lo abra. Verifique por el canal oficial de su banco antes de continuar.",
    });
  }
  if (/(hola|buenos|buenas|gracias|ayuda)/i.test(t)) {
    return NextResponse.json({
      kind: "chat",
      reply: "¡Hola! Con gusto le ayudo. Pégueme el mensaje o el enlace que le generó duda.",
    });
  }
  return NextResponse.json({
    kind: "chat",
    reply:
      "Gracias por escribir. Si le llegó un mensaje o enlace dudoso, pégamelo y le digo si es seguro.",
  });
}
