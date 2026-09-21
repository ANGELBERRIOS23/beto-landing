# Beto — Landing (piloto Guatemala)

Landing estática de **Beto**, el asistente antifraude por WhatsApp para personas
mayores de 50. Fork de la landing de TuConfIA, adaptada para Guatemala (en
quetzales). Un producto de **TuConsejería AI**.

> Por ahora **solo la landing**. La conexión con el número de WhatsApp, backend y
> demás se conecta después.

## Contenido
- `index.html` — la landing completa (autocontenida; Rubik desde Google Fonts).
- `beto-logo.png` — logo del robot Beto (círculo, transparente).
- `tuconsejeria-logo.png` — logo de la alianza.
- `og.png` — miniatura para compartir (WhatsApp, redes, LinkedIn).
- `Dockerfile` + `nginx.conf` — para publicar como sitio estático.

## Publicar en Easypanel (beto.tuconsejeria.com)
1. **App desde Git**: fuente = este repo, rama `main`, Compilación = **Dockerfile**.
2. **Puerto**: `80`.
3. **Dominios**: agrega `beto.tuconsejeria.com`
   - Destino: **Protocolo HTTP**, **Puerto 80** (el HTTPS público lo pone Easypanel).
   - Deja el **toggle HTTPS en ON** (candado Let's Encrypt).
4. Apunta el DNS de `beto.tuconsejeria.com` al servidor y espera el certificado.

## Conectar el número de WhatsApp (después)
Edita `index.html`, al final, la variable:
```js
const WA_NUMERO = "";   // ej: "50212345678"  (código país 502, sin '+')
```
Con eso, todos los botones "Escribir por WhatsApp" quedan activos. Vuelve a
desplegar (rebuild) para que tome el cambio.

## Ver en local
Abre `index.html` en el navegador, o:
```bash
python3 -m http.server 8000   # y entra a http://localhost:8000
```
