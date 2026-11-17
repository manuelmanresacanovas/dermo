/* MÓDULO DE FORMACIÓN (solo con sesión iniciada; preguntas en datos/tests.js)
   - La piel: un único test (#test-piel).
   - Cosméticos y Patologías (porTema): #test-cosmeticos y #test-patologias muestran la lista de temas;
     cada tema tiene su propio test (#test-cosmeticos-antioxidantes, #test-patologias-acne…).
     El test de un tema son las preguntas cuyo campo «s» es ese tema.
   - Preguntas de tres opciones con una sola correcta; al contestar se corrige al momento y se explica.
   - Avance = preguntas acertadas alguna vez / total. Se guarda por usuario en el navegador (localStorage).
   Lo usan js/app.js (páginas, tarjeta «Test» y enlace en cada tema) y js/sesion.js (panel del nombre). */
(function(){
const ORDEN = ["piel", "cosmeticos", "patologias", "marcas"];
const T = D.tests || {};
const usuario = () => window.SESION && SESION.usuario();
const clave = u => "catalogo-formacion-" + u;
const e = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
/* Temas de cada sección. En «marcas» (datos/tests_marcas.js) cada marca de dermofarmacia es un tema. */
const temasDe = s => s === "piel" ? D.piel : s === "cosmeticos" ? D.cosm : s === "marcas" ? D.brands.filter(b => b.area !== "supl") : D.pats;
/* Enlace principal de cada sección en el panel: la teoría, salvo en Marcas, que lleva a la lista de tests de marca */
const enlaceSec = s => s === "marcas" ? "#test-marcas" : "#" + T[s].sec;
const miga = t => t.cname || t.name;
/* Temas con preguntas, en el orden de la página de teoría */
const temas = s => (temasDe(s) || []).filter(x => T[s].q.some(q => q.s === x.id));
const pregs = (s, tema) => tema ? T[s].q.filter(q => q.s === tema) : T[s].q;

function leer(u){ try { return JSON.parse(localStorage.getItem(clave(u)) || "{}") || {}; } catch (x) { return {}; } }
function guardar(u, a){ try { localStorage.setItem(clave(u), JSON.stringify(a)); } catch (x) {} }
function marcar(u, s, id){ const a = leer(u); (a[s] = a[s] || {})[id] = 1; guardar(u, a); }
/* Borra el avance de una sección entera o solo de un tema */
function borrar(u, s, tema){
  const a = leer(u);
  if (!tema) delete a[s];
  else if (a[s]) pregs(s, tema).forEach(q => { delete a[s][q.id]; });
  guardar(u, a);
}
function cuenta(u, s, tema){
  const h = leer(u)[s] || {}, qs = pregs(s, tema), ok = qs.filter(q => h[q.id]).length;
  return {ok, total: qs.length, pct: qs.length ? Math.round(100 * ok / qs.length) : 0};
}
function avance(u){
  const r = {}; let ok = 0, tot = 0;
  ORDEN.forEach(s => { if (!T[s]) return; r[s] = cuenta(u, s); ok += r[s].ok; tot += r[s].total; });
  r.total = {ok, total: tot, pct: tot ? Math.round(100 * ok / tot) : 0};
  return r;
}
const barra = (pct, txt) => `<div class="pbar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}" aria-label="${e(txt)}"><i style="width:${pct}%"></i></div>`;
const nombreTema = (s, tema) => { const x = (temasDe(s) || []).find(t => t.id === tema); return x ? x.name : tema; };

/* Opciones de un test (sección «cosmeticos» o tema «cosmeticos:antioxidantes»): hacerlo o empezar de nuevo */
function opciones(k, confirmar){
  const [s, tema] = k.split(":"), nom = tema ? nombreTema(s, tema) : T[s].name, ruta = "#test-" + s + (tema ? "-" + tema : "");
  return confirmar
    ? `<span class="fconf">¿Borrar tu avance de ${e(nom)}?</span><button type="button" class="bmini peligro" data-reset-ok="${k}">Sí, borrar</button><button type="button" class="bmini" data-reset-no="${k}">Cancelar</button>`
    : `<a class="bmini prim" href="${ruta}">${tema || !T[s].porTema ? "Hacer el test" : "Ver los tests"}</a><button type="button" class="bmini" data-reset="${k}">Empezar de nuevo</button>`;
}

/* Panel del desplegable del nombre */
function panel(){
  const u = usuario(); if (!u) return "";
  const a = avance(u);
  return `<h2>Formación</h2>
<div class="fav"><div class="favt"><strong>Avance total</strong><span>${a.total.pct} %</span></div>${barra(a.total.pct, "Avance total")}<p class="fn">${a.total.ok} de ${a.total.total} preguntas acertadas</p></div>
<ul class="flis">${ORDEN.filter(s => T[s]).map(s => `<li class="fsec"><div class="favt"><a class="fnom" href="${enlaceSec(s)}">${e(s === "marcas" ? "Tests de marca" : T[s].name)}</a><span>${a[s].pct} %</span></div>${barra(a[s].pct, "Avance de " + T[s].name)}<p class="fn">${a[s].ok} de ${a[s].total} preguntas acertadas${T[s].porTema ? " · " + temas(s).length + " tests" : ""}</p><div class="fops">${opciones(s)}</div></li>`).join("")}</ul>
<p class="fnota">El avance se guarda en este dispositivo.</p>`;
}

/* Tarjeta «Test» al final de cada página de teoría (solo con sesión) */
function tile(s){
  const u = usuario(); if (!u || !T[s]) return "";
  const a = cuenta(u, s);
  const sub = T[s].porTema ? `${temas(s).length} tests · ${a.total} preguntas · ${a.pct} % completado` : `${a.total} preguntas · ${a.pct} % completado`;
  return `<li><a class="card ctest" href="#test-${s}"><strong>${s === "marcas" ? "Tests de marca" : (T[s].porTema ? "Tests" : "Test") + ": " + e(T[s].name)}</strong><span>${sub}</span>${barra(a.pct, "Avance")}</a></li>`;
}
/* Enlace al test desde la página de un tema (solo con sesión) */
function enlaceTema(s, tema){
  const u = usuario(); if (!u || !T[s] || !T[s].porTema || !pregs(s, tema).length) return "";
  const a = cuenta(u, s, tema);
  return `<div class="box tenl"><div class="favt"><strong>${s === "marcas" ? "Test de marca" : "Test"}: ${e(nombreTema(s, tema))}</strong><span>${a.pct} %</span></div>${barra(a.pct, "Avance")}<p class="fn">${a.ok} de ${a.total} preguntas acertadas</p><p class="tacc"><a class="bcuenta prim" href="#test-${s}-${tema}">Hacer el test</a></p></div>`;
}

const sinSesion = (c, titulo) => ({html: `${c}<h1>${e(titulo)}</h1><div class="box"><p>Los tests de formación son para el personal de la farmacia.</p><p><button type="button" class="bcuenta prim" onclick="window.scrollTo(0,0);var b=document.getElementById('abrirLogin');if(b)b.click()">Iniciar sesión</button></p></div>`});

/* Lista de temas (Cosméticos y Patologías) */
function lista(s){
  const t = T[s], esM = s === "marcas", c = crumbs([["Inicio",""],[miga(t), t.sec],[esM ? "Tests de marca" : "Tests"]]), u = usuario(), tit = esM ? "Tests de marca" : "Tests de " + t.name;
  if (!u) return Object.assign(sinSesion(c, tit), {t: tit, nav: t.sec});
  const a = cuenta(u, s);
  return {t: tit, nav: t.sec, html: `${c}<h1>${e(tit)}</h1>
<p class="lead">${esM ? "Un test por marca de dermofarmacia: se responden con los productos de la marca, sus activos, cómo se usan y sus restricciones, aplicando la teoría." : "Elige un tema."} Cada test tiene al menos 10 preguntas con una sola respuesta correcta.</p>
<div class="box tavance"><div class="favt"><strong>Tu avance en ${esM ? "los tests de marca" : e(t.name)}</strong><span>${a.pct} %</span></div>${barra(a.pct, "Avance de " + t.name)}<p class="fn">${a.ok} de ${a.total} preguntas acertadas en ${temas(s).length} tests</p></div>
<ul class="grid ttemas">${temas(s).map(x => { const b = cuenta(u, s, x.id); return `<li class="card ttema"><a class="ttit" href="#test-${s}-${x.id}">${esM ? "Test de marca" : "Test"}: ${e(x.name)}</a><span>${b.total} preguntas · ${b.ok} acertadas</span><div class="favt tpc"><span></span><span>${b.pct} %</span></div>${barra(b.pct, "Avance de " + x.name)}<div class="fops">${opciones(s + ":" + x.id)}</div></li>`; }).join("")}</ul>
<p><a class="chip" href="#${t.sec}">← Volver a ${e(miga(t))}</a></p>`};
}

/* Página de un test (sección entera o un tema) */
const PERM = [[0,1,2],[1,0,2],[1,2,0],[2,0,1],[0,2,1],[2,1,0]];
const perm = id => { let h = 0; for (const c of id) h = (h * 31 + c.charCodeAt(0)) >>> 0; return PERM[h % 6]; };
function test(s, tema){
  const t = T[s], esM = s === "marcas", nom = tema ? nombreTema(s, tema) : t.name, tit = (esM ? "Test de marca: " : "Test: ") + nom;
  const cc = [["Inicio",""],[miga(t), t.sec]]; if (t.porTema) cc.push([esM ? "Tests de marca" : "Tests", "test-" + s]); cc.push([tema ? nom : "Test"]);
  const c = crumbs(cc), u = usuario();
  if (!u) return Object.assign(sinSesion(c, tit), {t: tit, nav: t.sec});
  const qs = pregs(s, tema), hechas = leer(u)[s] || {}, a = cuenta(u, s, tema);
  const preg = qs.map((q, i) => {
    const p = perm(q.id), pr = q.r && D.prods.find(y => y.id === q.r);
    const x = pr ? {id: q.r, name: pr.name} : (temasDe(s) || []).find(y => y.id === q.s), pref = pr ? "prod-" : t.pref;
    return `<fieldset class="tq" data-sec="${s}" data-tema="${tema || ""}" data-id="${q.id}"${hechas[q.id] ? ' data-hecha="1"' : ""}>
<legend><span class="tn">${i + 1}.</span> ${e(q.q)}${hechas[q.id] ? ' <span class="tya">Ya acertada</span>' : ""}</legend>
<div class="topts">${p.map(k => `<button type="button" class="topc" data-c="${k === 0 ? 1 : 0}">${e(q.o[k])}</button>`).join("")}</div>
<div class="tfb" hidden><p class="tres" role="status"></p><p>${e(q.e)}</p>${x ? `<p><a href="#${pref}${x.id}">Repasar: ${e(x.name)}</a></p>` : ""}</div>
</fieldset>`;
  }).join("");
  const volver = esM ? `<a class="chip" href="#marca-${tema}">← Volver a ${e(nom)}</a> <a class="chip" href="#test-marcas">Ver todos los tests de marca</a>`
    : t.porTema ? `<a class="chip" href="#test-${s}">← Volver a los tests de ${e(t.name)}</a>` : `<a class="chip" href="#${t.sec}">← Volver a ${e(t.name)}</a>`;
  return {t: tit, nav: t.sec, html: `${c}<h1>${e(tit)}</h1>
<p class="lead">${qs.length} preguntas con una sola respuesta correcta. Al elegir una opción verás si has acertado y por qué.</p>
<div class="box tavance"><div class="favt"><strong>Tu avance en este test</strong><span id="tpct">${a.pct} %</span></div>${barra(a.pct, "Avance del test")}<p class="fn"><span id="tok">${a.ok}</span> de ${a.total} preguntas acertadas · En este intento: <span id="tint">0</span> de ${qs.length} contestadas, <span id="tbien">0</span> bien</p>
<p class="tacc"><button type="button" class="bcuenta" id="tpend">Ver solo las pendientes</button> <button type="button" class="bcuenta" id="trep">Repetir el test</button></p></div>
<div class="tlist">${preg}</div>
<p>${volver}</p>`};
}

/* Router: «piel», «cosmeticos», «cosmeticos-antioxidantes»… */
function page(id){
  const i = id.indexOf("-"), s = i < 0 ? id : id.slice(0, i), tema = i < 0 ? "" : id.slice(i + 1);
  if (!T[s]) return null;
  if (tema) return pregs(s, tema).length ? test(s, tema) : null;
  return T[s].porTema ? lista(s) : test(s);
}

/* Clics (delegación: funciona aunque la página se vuelva a pintar) */
document.addEventListener("click", ev => {
  const r = ev.target.closest && ev.target.closest("[data-reset],[data-reset-ok],[data-reset-no]");
  if (r) {
    const fops = r.closest(".fops"), u = usuario();
    if (r.dataset.reset) { fops.innerHTML = opciones(r.dataset.reset, true); fops.querySelector("[data-reset-no]").focus(); return; }
    if (r.dataset.resetNo) { fops.innerHTML = opciones(r.dataset.resetNo); fops.querySelector("[data-reset]").focus(); return; }
    const [s, tema] = r.dataset.resetOk.split(":");
    if (u) borrar(u, s, tema);
    const pf = document.getElementById("pform"); if (pf && !pf.hidden) pf.innerHTML = panel();
    if (window.render) render();
    return;
  }
  const b = ev.target.closest && ev.target.closest(".topc");
  if (b) {
    const f = b.closest(".tq"); if (!f || f.classList.contains("hecho")) return;
    const ok = b.dataset.c === "1", s = f.dataset.sec, tema = f.dataset.tema || undefined, u = usuario();
    f.classList.add("hecho", ok ? "bien" : "mal"); b.classList.add("elegida");
    f.querySelectorAll(".topc").forEach(x => { x.disabled = true; if (x.dataset.c === "1") x.classList.add("correcta"); });
    const fb = f.querySelector(".tfb"); fb.hidden = false; fb.querySelector(".tres").textContent = ok ? "¡Correcto!" : "No es correcta. La respuesta buena está marcada en verde.";
    if (ok && u) { marcar(u, s, f.dataset.id); f.dataset.hecha = "1"; }
    const lista = document.querySelectorAll(".tq"), a = u ? cuenta(u, s, tema) : null;
    const set = (id, v) => { const x = document.getElementById(id); if (x) x.textContent = v; };
    set("tint", document.querySelectorAll(".tq.hecho").length); set("tbien", document.querySelectorAll(".tq.bien").length);
    if (a) { set("tok", a.ok); set("tpct", a.pct + " %"); const bar = document.querySelector(".tavance .pbar"); if (bar) { bar.setAttribute("aria-valuenow", a.pct); bar.firstElementChild.style.width = a.pct + "%"; } }
    if (document.querySelectorAll(".tq.hecho").length === lista.length) set("tint", lista.length + " (test terminado)");
    return;
  }
  if (ev.target.id === "trep") { window.scrollTo(0, 0); if (window.render) render(); return; }
  if (ev.target.id === "tpend") {
    const on = ev.target.getAttribute("aria-pressed") !== "true";
    ev.target.setAttribute("aria-pressed", on); ev.target.textContent = on ? "Ver todas" : "Ver solo las pendientes";
    document.querySelectorAll(".tq").forEach(f => { f.hidden = on && f.dataset.hecha === "1" && !f.classList.contains("hecho"); });
  }
});

window.FORM = {page, tile, panel, avance, enlaceTema};
})();
