/* GENERADOR DE HASHES DE CONTRASEÑAS (datos/usuarios.js)
   Usa PBKDF2-SHA256 con una sal aleatoria por usuario y 150.000 iteraciones. Es el equivalente a bcrypt que el
   navegador puede comprobar sin librerías (Web Crypto). Las contraseñas nunca se guardan: solo la sal y el hash.

   Uso (desde la carpeta de la web):
     node herramientas/generar_hashes.js usuario:contraseña [usuario:contraseña ...]
   - Si el usuario ya existe, se cambia su contraseña; si no, se añade.
   - Para quitar un usuario:  node herramientas/generar_hashes.js --borrar usuario
   - El nombre de usuario se guarda en minúsculas (al entrar no distingue mayúsculas); la contraseña sí las distingue.
   Funciona con Node 6 o superior. */
"use strict";
const fs = require("fs"), path = require("path"), crypto = require("crypto");
const ITER = 150000, ARCHIVO = path.join(__dirname, "..", "datos", "usuarios.js");

function leer() {
  if (!fs.existsSync(ARCHIVO)) return {};
  const m = fs.readFileSync(ARCHIVO, "utf8").match(/\/\*JSON\*\/([\s\S]*?)\/\*FIN\*\//);
  return m ? JSON.parse(m[1]) : {};
}
function escribir(u) {
  const js = "/* USUARIOS DEL CATÁLOGO: solo la sal y el hash PBKDF2-SHA256 de cada contraseña (nunca la contraseña).\n" +
    "   NO editar a mano: se genera con  node herramientas/generar_hashes.js usuario:contraseña  */\n" +
    "D.usuariosIter = " + ITER + ";\n" +
    "D.usuarios = /*JSON*/" + JSON.stringify(u, null, 1) + "/*FIN*/;\n";
  fs.writeFileSync(ARCHIVO, js, "utf8");
}

const args = process.argv.slice(2);
if (!args.length) { console.log("Uso: node herramientas/generar_hashes.js usuario:contraseña [...]  |  --borrar usuario"); process.exit(1); }
const u = leer();
if (args[0] === "--borrar") {
  args.slice(1).forEach(n => { n = n.trim().toLowerCase(); if (u[n]) { delete u[n]; console.log("Borrado:", n); } else console.log("No existe:", n); });
} else {
  args.forEach(a => {
    const i = a.indexOf(":");
    if (i < 1 || i === a.length - 1) { console.log("Formato incorrecto (usa usuario:contraseña):", a); process.exit(1); }
    const nombre = a.slice(0, i).trim().toLowerCase(), clave = a.slice(i + 1);
    const sal = crypto.randomBytes(16);
    const hash = crypto.pbkdf2Sync(clave, sal, ITER, 32, "sha256");
    u[nombre] = { s: sal.toString("hex"), h: hash.toString("hex") };
    console.log((u[nombre] ? "Guardado: " : "") + nombre);
  });
}
escribir(u);
console.log("Usuarios en datos/usuarios.js:", Object.keys(u).join(", "));
