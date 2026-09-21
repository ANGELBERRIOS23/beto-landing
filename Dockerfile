# Landing estática de Beto servida por nginx. Easypanel: App desde Git (Dockerfile),
# puerto 80. No hay backend todavía (eso se conecta después).
FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html og.png beto-logo.png tuconsejeria-logo.png /usr/share/nginx/html/

EXPOSE 80
