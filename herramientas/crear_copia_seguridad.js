/* COPIA DE SEGURIDAD EN UN SOLO ARCHIVO
   Genera copia-seguridad/Catálogo Farmacia (copia AAAA-MM-DD).html con TODO dentro:
   el HTML, los estilos, los scripts y datos (datos/*.js, js/*.js) y las imágenes de imagenes/ (incrustadas).
   Se puede abrir con doble clic en cualquier ordenador, sin conexión ni otras carpetas
   (solo la tipografía Poppins se descarga de internet; sin conexión se usa la del sistema).
   No incluye fuentes/ (material de trabajo).
   Uso, desde la carpeta de la web:  node herramientas/crear_copia_seguridad.js
   Borra las copias anteriores de la carpeta copia-seguridad/ y deja solo la nueva. */
"use strict";
const fs = require("fs"), path = require("path");
const RAIZ = path.join(__dirname, ".."), DEST = path.join(RAIZ, "copia-seguridad");
const leer = f => fs.readFileSync(path.join(RAIZ, f), "utf8").replace(/^﻿/, "");
const MIME = {".webp": "image/webp", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".svg": "image/svg+xml", ".gif": "image/gif"};

let html = leer("index.html");
// Estilos
html = html.replace(/<link rel="stylesheet" href="([^"]+)">/g, (m, f) => "<style>\n" + leer(f) + "\n</style>");
// Scripts (se escapa «</script» para que no corte el bloque)
let nScripts = 0;
html = html.replace(/<script src="([^"]+)"><\/script>/g, (m, f) => { nScripts++; return "<script>/* " + f + " */\n" + leer(f).replace(/<\/script/gi, "<\\/script") + "\n</script>"; });

// Imágenes: mapa ruta -> data URI. Un observador cambia el src de cada <img> que apunte a imagenes/… por su versión incrustada.
const img = {};
let nImg = 0, bytes = 0;
(function recorrer(dir){
  fs.readdirSync(path.join(RAIZ, dir)).forEach(n => {
    const rel = dir + "/" + n, abs = path.join(RAIZ, rel);
    if (fs.statSync(abs).isDirectory()) return recorrer(rel);
    const t = MIME[path.extname(n).toLowerCase()]; if (!t) return;
    const b = fs.readFileSync(abs); img[rel] = "data:" + t + ";base64," + b.toString("base64"); nImg++; bytes += b.length;
  });
})("imagenes");
const cargador = `<script>/* Imágenes incrustadas (copia de seguridad) */
window.__IMG=${JSON.stringify(img)};
(function(){function fix(el){var s=el.getAttribute&&el.getAttribute("src");if(s&&window.__IMG[s])el.setAttribute("src",window.__IMG[s]);}
function scan(n){if(n.nodeType!==1)return;if(n.tagName==="IMG")fix(n);var l=n.querySelectorAll?n.querySelectorAll("img"):[];for(var i=0;i<l.length;i++)fix(l[i]);}
new MutationObserver(function(ms){ms.forEach(function(m){if(m.type==="attributes")fix(m.target);else m.addedNodes.forEach(scan);});}).observe(document.documentElement,{childList:true,subtree:true,attributes:true,attributeFilter:["src"]});})();
</script>`;
html = html.replace("<body>", "<body>\n" + cargador);

// Aviso visible en el título de la pestaña
const hoy = new Date().toISOString().slice(0, 10);
html = html.replace(/<title>([^<]*)<\/title>/, `<title>$1 (copia ${hoy})</title>`);
html = html.replace("<head>", `<head>\n<!-- COPIA DE SEGURIDAD generada el ${hoy} con herramientas/crear_copia_seguridad.js. Archivo autónomo: no editar; la web de verdad está en index.html, css/, js/, datos/ e imagenes/. -->`);

if (!fs.existsSync(DEST)) fs.mkdirSync(DEST);
const viejos = fs.readdirSync(DEST).filter(n => /\.html$/i.test(n));
const nombre = `Catálogo Farmacia (copia ${hoy}).html`;
fs.writeFileSync(path.join(DEST, nombre), html, "utf8");
viejos.filter(n => n !== nombre).forEach(n => fs.unlinkSync(path.join(DEST, n)));
console.log("Copia creada: copia-seguridad/" + nombre);
console.log("Scripts incluidos:", nScripts, "| imágenes:", nImg, "(" + Math.round(bytes / 1024) + " KB) | tamaño total:", Math.round(Buffer.byteLength(html) / 1024) + " KB");
console.log("Copias anteriores borradas:", viejos.filter(n => n !== nombre).join(", ") || "ninguna");
