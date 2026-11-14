/* INICIO DE SESIÓN DEL PERSONAL
   - Solo pueden entrar los usuarios de datos/usuarios.js (no hay registro). El usuario no distingue mayúsculas; la contraseña sí.
   - La contraseña se comprueba en el navegador: se calcula PBKDF2-SHA256 con la sal del usuario y se compara con el hash guardado.
   - La sesión se guarda en el navegador (localStorage) durante 30 días o hasta pulsar «Cerrar sesión».
   - El catálogo se puede usar igual sin iniciar sesión.
   Aviso: en una web estática esto identifica a quien entra, pero no protege datos (todo lo publicado se puede leer). */
(function(){
const CLAVE = "catalogo-sesion", DIAS = 30, ERROR = "Usuario o contraseña incorrectos";
const caja = document.getElementById("cuenta");
if (!caja || !D.usuarios) return;

const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const visible = u => u.charAt(0).toUpperCase() + u.slice(1);
const hex = buf => Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
const bytes = h => new Uint8Array(h.match(/../g).map(x => parseInt(x, 16)));

function leerSesion(){
  try {
    const s = JSON.parse(localStorage.getItem(CLAVE) || "null");
    if (s && D.usuarios[s.u] && s.exp > Date.now()) return s;
    localStorage.removeItem(CLAVE);
  } catch (e) {}
  return null;
}
function guardarSesion(u){
  const token = hex(crypto.getRandomValues(new Uint8Array(16)));
  const s = {u, token, exp: Date.now() + DIAS * 864e5};
  try { localStorage.setItem(CLAVE, JSON.stringify(s)); } catch (e) {}
  return s;
}
let sesion = leerSesion();

/* Compara en tiempo constante para no dar pistas por el tiempo de respuesta */
const iguales = (a, b) => { if (a.length !== b.length) return false; let d = 0; for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i); return d === 0; };
async function comprobar(usuario, clave){
  const u = usuario.trim().toLowerCase(), reg = D.usuarios[u];
  // Si el usuario no existe se calcula igualmente un hash, para que tarde lo mismo
  const sal = reg ? bytes(reg.s) : new Uint8Array(16);
  const k = await crypto.subtle.importKey("raw", new TextEncoder().encode(clave), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits({name: "PBKDF2", hash: "SHA-256", salt: sal, iterations: D.usuariosIter}, k, 256);
  return reg && iguales(hex(bits), reg.h) ? u : null;
}

function pintar(){
  if (sesion) {
    caja.innerHTML = `<button type="button" class="quien" id="abrirForm" aria-expanded="false" aria-controls="pform" title="Formación y avance de los tests"><span class="punto" aria-hidden="true"></span>${esc(visible(sesion.u))}<span class="flecha" aria-hidden="true">▾</span></button><button type="button" class="bcuenta" id="salir">Cerrar sesión</button>
<div class="login pform" id="pform" hidden></div>`;
    const ab = document.getElementById("abrirForm"), pf = document.getElementById("pform");
    ab.onclick = () => { const v = pf.hidden; if (v && window.FORM) pf.innerHTML = FORM.panel(); pf.hidden = !v; ab.setAttribute("aria-expanded", v); };
    pf.addEventListener("click", ev => { if (ev.target.isConnected && ev.target.closest("a")) { pf.hidden = true; ab.setAttribute("aria-expanded", "false"); } });
    pf.addEventListener("keydown", ev => { if (ev.key === "Escape") { pf.hidden = true; ab.setAttribute("aria-expanded", "false"); ab.focus(); } });
    document.getElementById("salir").onclick = () => { try { localStorage.removeItem(CLAVE); } catch (e) {} sesion = null; pintar(); repintar(); };
    return;
  }
  caja.innerHTML = `<button type="button" class="bcuenta prim" id="abrirLogin" aria-expanded="false" aria-controls="login">Iniciar sesión</button>
<form class="login" id="login" hidden novalidate>
 <h2>Acceso del personal</h2>
 <label for="lu">Usuario</label>
 <input id="lu" name="usuario" autocomplete="username" autocapitalize="none" spellcheck="false" required>
 <label for="lp">Contraseña</label>
 <input id="lp" name="clave" type="password" autocomplete="current-password" required>
 <p class="lerr" id="lerr" role="alert" hidden></p>
 <button type="submit" class="bcuenta prim" id="entrar">Entrar</button>
</form>`;
  const abrir = document.getElementById("abrirLogin"), form = document.getElementById("login"), err = document.getElementById("lerr"), bt = document.getElementById("entrar");
  const mostrar = v => { form.hidden = !v; abrir.setAttribute("aria-expanded", v); if (v) document.getElementById("lu").focus(); };
  abrir.onclick = () => mostrar(form.hidden);
  form.addEventListener("keydown", e => { if (e.key === "Escape") { mostrar(false); abrir.focus(); } });
  form.addEventListener("submit", async e => {
    e.preventDefault(); err.hidden = true;
    const u = form.usuario.value, c = form.clave.value;
    if (!u.trim() || !c) { err.textContent = ERROR; err.hidden = false; return; }
    if (!window.crypto || !crypto.subtle) { err.textContent = "Este navegador no permite iniciar sesión. Abre la web desde su dirección https."; err.hidden = false; return; }
    bt.disabled = true; bt.textContent = "Comprobando…";
    let ok = null; try { ok = await comprobar(u, c); } catch (x) {}
    bt.disabled = false; bt.textContent = "Entrar";
    if (!ok) { err.textContent = ERROR; err.hidden = false; form.clave.value = ""; form.clave.focus(); return; }
    sesion = guardarSesion(ok); pintar();
    if (location.hash && location.hash !== "#" && !/^#test-/.test(location.hash)) location.hash = ""; else { window.scrollTo(0, 0); repintar(); }
  });
}
// Vuelve a pintar la página actual (para mostrar u ocultar los tests al entrar o salir)
function repintar(){ if (typeof window.render === "function") window.render(); }
// Cerrar el formulario o el panel al pulsar fuera
document.addEventListener("click", e => { if (caja.contains(e.target) || !e.target.isConnected) return; ["login", "pform"].forEach(id => { const f = document.getElementById(id); if (f && !f.hidden) { f.hidden = true; const a = document.getElementById(id === "login" ? "abrirLogin" : "abrirForm"); if (a) a.setAttribute("aria-expanded", "false"); } }); });
// Si se entra o sale en otra pestaña, se actualiza aquí también
addEventListener("storage", e => { if (e.key === CLAVE) { sesion = leerSesion(); pintar(); repintar(); } });
// Para el resto de la web (js/formacion.js): quién ha iniciado sesión
window.SESION = {usuario: () => sesion && sesion.u};
pintar();
})();
