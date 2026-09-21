# Beto — Landing (piloto Guatemala)

Landing de **Beto**, el asistente antifraude por WhatsApp para personas mayores
de 50. Es un **fork de la landing de TuConfIA** (mismo diseño minimalista, Next.js
+ Tailwind), adaptado para Guatemala: textos, **moneda en quetzales**, logo,
nombre y país. Un producto de **TuConsejería AI**.

> Por ahora **solo la landing**. El número de WhatsApp, el backend y demás se
> conectan después.

## Stack
- Next.js 15 (App Router) + Tailwind v4. Imagen Docker `standalone` para Easypanel.
- Sin Supabase ni admin (se removieron: esto es solo la landing).
- La demo del chat usa un **mock** en `app/api/analizar` (heurística simple, sin
  backend real). Cuando se conecte el core, se reemplaza por el proxy real.

## Publicar en Easypanel (beto.tuconsejeria.com)
1. **App desde Git**: repo `ANGELBERRIOS23/beto-landing`, rama `main`,
   Compilación = **Dockerfile**.
2. **Puerto**: `3000`.
3. **Dominios**: agrega `beto.tuconsejeria.com`
   - Destino: **Protocolo HTTP**, **Puerto 3000** (el HTTPS público lo pone
     Easypanel; deja el **toggle HTTPS en ON**).
4. Apunta el DNS de `beto.tuconsejeria.com` al servidor y espera el certificado.

## Conectar el número de WhatsApp (después)
Las variables `NEXT_PUBLIC_*` se incrustan al hacer build. En el servicio de
Easypanel define:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=50212345678   # código país 502, sin "+"
```
y haz **re-deploy con rebuild**. Con eso, todos los botones "Escribir por
WhatsApp" quedan activos. Sin la variable, el botón no rompe (queda inerte).

## Desarrollo local
```bash
npm install
npm run dev     # http://localhost:3000
```
