const $=s=>document.querySelector(s),M=$("#main"),Q=$("#q");
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const B=id=>D.brands.find(x=>x.id===id),P=id=>D.pats.find(x=>x.id===id);
const L=(b,l)=>(B(b).lines.find(x=>x.id===l)||{}).name||"";
/* Un producto puede pertenecer a una línea (line:"id") o a varias (line:["id1","id2"]) */
const lineIds=p=>[].concat(p.line),inLine=(p,id)=>lineIds(p).includes(id),lineNames=p=>lineIds(p).map(l=>L(p.brand,l));
const norm=s=>s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
const N=id=>D.needs.find(x=>x.id===id),lineNeeds=p=>[...new Set(lineIds(p).reduce((a,id)=>a.concat((B(p.brand).lines.find(l=>l.id===id)||{}).n||[]),[]))];
/* Necesidades de un producto: las suyas (n) o, si no tiene, las de su línea */
const prodNeeds=p=>p.n||lineNeeds(p);
/* Texto de la ficha en el que también busca el buscador. El modo de empleo queda fuera a propósito:
   «aplicar sobre la piel seca» no significa que el producto sea para piel seca */
const fichaText=p=>p.d?[p.d.tipo,p.d.necesidad,p.d.paciente,p.d.limpieza,p.d.limpiezaDet,p.d.nota].filter(Boolean):[];
const prodCard=p=>`<li><a class="card" href="#prod-${p.id}"><strong>${esc(p.name)}</strong><span>${esc(B(p.brand).name)} · ${esc(lineNames(p).join(" / "))}</span></a></li>`;
/* Producto con foto y nombre debajo: se usa en el listado de cada línea */
const prodTile=p=>`<li><a class="ptile" href="#prod-${p.id}">${p.img?`<img src="${esc(p.img)}" alt="" loading="lazy" width="400" height="400">`:`<span class="ph"></span>`}<span class="pname">${esc(p.name)}</span></a></li>`;
/* Producto con foto pequeña al lado del nombre: se usa en los desplegables de «Elección de producto» */
const prodMini=p=>`<li><a class="card cmini" href="#prod-${p.id}" title="${esc(p.name)}">${p.img?`<img src="${esc(p.img)}" alt="" loading="lazy" width="72" height="72">`:`<i class="ph"></i>`}<div><strong>${esc(p.name)}</strong><span>${esc(B(p.brand).name)} · ${esc(lineNames(p).join(" / "))}</span></div></a></li>`;
/* Ficha del producto: lo primero que se ve es a qué paciente va dirigido */
const prodFicha=d=>`<section class="fpac"><h2>¿A qué paciente va dirigido?</h2><p>${esc(d.paciente)}</p></section><div class="box fdat"><h2>Tipo de producto</h2><p>${esc(d.tipo)}</p><h2>Necesidad que cubre</h2><p>${esc(d.necesidad)}</p>${d.limpieza?`<h2>Papel en la limpieza</h2><p><strong>${esc(d.limpieza)}</strong>${d.limpiezaDet?`<br>${esc(d.limpiezaDet)}`:""}</p>`:""}${d.modo||d.cuando?`<h2>Modo de empleo</h2>${d.cuando?`<p><strong>Cuándo:</strong> ${esc(d.cuando)}</p>`:""}${d.modo?`<p><strong>Cómo:</strong> ${esc(d.modo)}</p>`:""}${d.solar?`<p><strong>Fotoprotección:</strong> ${esc(d.solar)}</p>`:""}`:""}${d.nota?`<h2>A tener en cuenta</h2><p>${esc(d.nota)}</p>`:""}</div>`;
const tile=(h,t,s)=>`<li><a class="card" href="#${h}"><strong>${esc(t)}</strong><span>${esc(s)}</span></a></li>`;
const lineTile=(l,s)=>`<li><a class="card" href="#linea-${l.id}"><strong>${esc(l.name)}</strong>${l.para?`<em class="para">${esc(l.para)}</em>`:""}<span>${esc(s)}</span></a></li>`;
const crumbs=a=>`<nav aria-label="Migas de pan"><ol class="crumbs">${a.map((c,i)=>i<a.length-1?`<li><a href="#${c[1]}">${esc(c[0])}</a></li>`:`<li aria-current="page">${esc(c[0])}</li>`).join("")}</ol></nav>`;
const n=(c,w)=>`${c} ${c===1?w:w+"s"}`;
const md=t=>{let o="",u=0;const i=s=>esc(s).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>");for(const l of t.split("\n")){const li=l.startsWith("- ");if(u&&!li){o+="</ul>";u=0}if(li){if(!u){o+="<ul>";u=1}o+=`<li>${i(l.slice(2))}</li>`}else if(l.startsWith("#### "))o+=`<h4>${i(l.slice(5))}</h4>`;else if(l.startsWith("### "))o+=`<h3>${i(l.slice(4))}</h3>`;else if(l.startsWith("## "))o+=`<h2>${i(l.slice(3))}</h2>`;else if(l.trim())o+=`<p>${i(l)}</p>`}return o+(u?"</ul>":"")};
let F="",SK="";const SKS=[["todos","Todos los tipos de piel"],["seca","Piel seca"],["grasa","Piel grasa"],["mixta","Piel mixta"],["imperfecciones","Piel con imperfecciones"],["sensible","Piel sensible"]],ok=p=>SK==="todos"||(SK&&(p.sk||[]).some(t=>t==="todas"||t===SK));
/* BUSCADOR: ignora acentos y palabras vacías, aplica sinónimos (datos/sinonimos.js) y corrige erratas.
   Cada palabra se busca al inicio de una palabra; si no aparece, dentro de una palabra; y si tampoco, la más parecida. */
const VACIAS=new Set(["de","del","la","las","el","los","en","con","para","y","o","a","un","una","por","que","piel","pieles"]);
const palabras=s=>norm(s).split(/[^a-z0-9]+/).filter(Boolean);
const SIN={};Object.keys(D.sinonimos||{}).forEach(k=>{SIN[norm(k)]=D.sinonimos[k].map(norm)});
const distancia=(a,b)=>{let f=Array.from({length:b.length+1},(_,j)=>j);for(let i=1;i<=a.length;i++){let d=f[0];f[0]=i;for(let j=1;j<=b.length;j++){const t=f[j];f[j]=Math.min(f[j]+1,f[j-1]+1,d+(a[i-1]===b[j-1]?0:1));d=t}}return f[b.length]};
function buscar(texto){
 const docs=[...D.brands.map(o=>({k:"b",o,w:palabras(o.name)})),...D.pats.map(o=>({k:"p",o,w:palabras(o.name)})),...D.prods.map(o=>({k:"r",o,w:palabras([o.name,B(o.brand).name,...lineNames(o),...prodNeeds(o).map(t=>N(t).name),...fichaText(o)].join(" ")).concat([o.name,...lineNames(o)].map(x=>palabras(x).join("")))}))];
 const inicio=(w,v)=>w.startsWith(v),dentro=(w,v)=>w.includes(v),hay=(v,f)=>docs.some(d=>d.w.some(w=>f(w,v)));
 const todas=palabras(texto),utiles=todas.filter(t=>!VACIAS.has(t)),fix=[];
 const terminos=(utiles.length?utiles:todas).map(t=>{
  if(SIN[t]||hay(t,inicio))return{v:[t,...(SIN[t]||[])],f:inicio};
  if(hay(t,dentro))return{v:[t],f:dentro};
  const tol=t.length>=9?2:t.length>=5?1:0;let mejor="",dm=tol+1;
  if(tol)new Set(docs.reduce((a,d)=>a.concat(d.w),[])).forEach(w=>{const x=distancia(t,w);if(x<dm){dm=x;mejor=w}});
  if(!mejor)return{v:[t],f:inicio};
  fix.push(mejor);return{v:[mejor,...(SIN[mejor]||[])],f:inicio};
 });
 const res=terminos.length?docs.filter(d=>terminos.every(t=>t.v.some(v=>d.w.some(w=>t.f(w,v))))):[];
 const de=k=>res.filter(d=>d.k===k).map(d=>d.o);
 return{r:de("r"),bs:de("b"),ps:de("p"),fix};
}
function page(h){
 const i=h.indexOf("-"),k=i<0?h:h.slice(0,i),id=i<0?"":h.slice(i+1);
 if(!h)return{t:"Catálogo de dermocosmética",nav:"",html:`<h1>Catálogo de dermocosmética</h1><p class="lead">Accede a los productos por marca o por patología.</p><ul class="grid">${tile("piel","La piel","Fundamentos, estructura y funciones.")}${tile("cosmeticos","Cosméticos","Tipos, usos y cómo elegirlos.")}${tile("patologias","Patologías","Enfermedades con afectación en la piel.")}${tile("marcas","Productos","Marcas y productos.")}${tile("eleccion","Elección de producto","Según la necesidad del cliente.")}</ul>`};
 if(h==="marcas")return{t:"Marcas",nav:"marcas",html:`${crumbs([["Inicio",""],["Productos"]])}<h1>Productos</h1><p class="lead">Elige una marca.</p><ul class="grid">${D.brands.map(b=>tile("marca-"+b.id,b.name,n(D.prods.filter(p=>p.brand===b.id).length,"producto"))).join("")}</ul>`};
 if(h==="patologias")return{t:"Patologías",nav:"patologias",html:`${crumbs([["Inicio",""],["Patologías"]])}<h1>Patologías</h1><ul class="grid">${D.pats.map(x=>tile("pat-"+x.id,x.name,x.d)).join("")}</ul>`};
 if(h==="piel"||(k==="piel"&&D.piel.some(a=>a.id===id))){const x=h==="piel"?null:D.piel.find(a=>a.id===id),pa=x&&x.p?D.piel.find(a=>a.id===x.p):null,kids=D.piel.filter(a=>(a.p||"")===(x?x.id:"")),c=[["Inicio",""],x?["La piel","piel"]:["La piel"]];if(pa)c.push([pa.name,"piel-"+pa.id]);if(x)c.push([x.name]);
  return{t:x?x.name:"La piel",nav:"piel",html:`${crumbs(c)}<h1>${esc(x?x.name:"Fundamentos de la piel")}</h1>${kids.length?`<ul class="grid">${kids.map(a=>tile("piel-"+a.id,a.name,a.d||"")).join("")}</ul>`:`<div class="box th">${md(x.t)}</div>`}`}}
 if(h==="cosmeticos")return{t:"Cosméticos",nav:"cosmeticos",html:`${crumbs([["Inicio",""],["Cosméticos"]])}<h1>Cosméticos</h1><p class="lead">Tipos, usos y cómo elegirlos.</p><ul class="grid">${D.cosm.map(a=>tile("cosm-"+a.id,a.name,a.d)).join("")}</ul>`};
 if(k==="cosm"&&D.cosm.some(a=>a.id===id)){const i=D.cosm.findIndex(a=>a.id===id),x=D.cosm[i],nx=D.cosm[i+1];return{t:x.name,nav:"cosmeticos",html:`${crumbs([["Inicio",""],["Cosméticos","cosmeticos"],[x.name]])}<h1>${esc(x.name)}</h1><div class="box th">${md(x.t)}</div>${nx?`<p><a class="chip" href="#cosm-${nx.id}">Siguiente: ${esc(nx.name)} →</a></p>`:""}`}}
 if(h==="eleccion")return{t:"Elección de producto",nav:"eleccion",html:`${crumbs([["Inicio",""],["Elección de producto"]])}<h1>Elección de producto</h1><p class="lead">Elige la necesidad del cliente.</p><ul class="grid">${D.needs.map(x=>tile("nec-"+x.id,x.name,n(D.prods.filter(p=>prodNeeds(p).includes(x.id)).length,"producto"))).join("")}</ul>`};
 if(k==="nec"&&N(id)){const x=N(id),enLinea=(p,l)=>lineIds(p)[0]===l.id&&prodNeeds(p).includes(id)&&ok(p),g=D.brands.map(b=>[b,b.lines.filter(l=>D.prods.some(p=>enLinea(p,l)))]).filter(a=>a[1].length);return{t:x.name,nav:"eleccion",html:`${crumbs([["Inicio",""],["Elección de producto","eleccion"],[x.name]])}<h1>${esc(x.name)}</h1>${x.c?`<p class="lead"><a href="#cosm-${x.c}">Ver guía</a></p>`:""}<label for="sk">Tu tipo de piel</label><select id="sk"><option value="">Selecciona tu tipo de piel…</option>${SKS.map(o=>`<option value="${o[0]}"${SK===o[0]?" selected":""}>${o[1]}</option>`).join("")}</select><p class="lead" style="margin-top:8px;font-size:.9rem">Se muestran los productos cuyo tipo de piel indica la ficha oficial de cada marca («todo tipo de piel» aparece en todas las opciones).</p>${!SK?`<p class="empty">Elige tu tipo de piel para ver los productos.</p>`:g.length?g.map(a=>`<details class="acc"><summary>${esc(a[0].name)}<span>${n(a[1].length,"línea")}</span></summary>${a[1].map(l=>{const ps=D.prods.filter(p=>enLinea(p,l));return `<h3><a href="#linea-${l.id}">Línea ${esc(l.name)}</a></h3>${ps.length?`<ul class="grid">${ps.map(prodMini).join("")}</ul>`:`<p class="empty">Productos pendientes de cargar.</p>`}`}).join("")}</details>`).join(""):`<p class="empty">Aún no hay productos confirmados para este tipo de piel en esta necesidad.</p>`}`}}
 if(k==="marca"&&B(id)){const b=B(id);return{t:b.name,nav:"marcas",html:`${crumbs([["Inicio",""],["Productos","marcas"],[b.name]])}<h1>${esc(b.name)}</h1><h2>Líneas</h2>${b.lines.length?`<ul class="grid">${b.lines.map(l=>lineTile(l,n(D.prods.filter(p=>inLine(p,l.id)).length,"producto"))).join("")}</ul>`:`<p class="empty">Esta marca aún no tiene líneas cargadas.</p>`}`}}
 if(k==="linea"){const b=D.brands.find(b=>b.lines.some(l=>l.id===id));if(b){const l=b.lines.find(l=>l.id===id);return{t:l.name,nav:"marcas",html:`${crumbs([["Inicio",""],["Productos","marcas"],[b.name,"marca-"+b.id],[l.name]])}<h1>${esc(l.name)}</h1><p class="lead">${esc(b.name)}${l.para?` · ${esc(l.para)}`:""}</p>${D.prods.some(p=>inLine(p,id))?`<ul class="pgrid">${D.prods.filter(p=>inLine(p,id)).map(prodTile).join("")}</ul>`:`<p class="empty">Esta línea aún no tiene productos cargados.</p>`}`}}}
 if(k==="pat"&&P(id)){const i=D.pats.findIndex(a=>a.id===id),x=D.pats[i],nx=D.pats[i+1];return{t:x.name,nav:"patologias",html:`${crumbs([["Inicio",""],["Patologías","patologias"],[x.name]])}<h1>${esc(x.name)}</h1><div class="box th">${md(x.t)}</div>${nx?`<p><a class="chip" href="#pat-${nx.id}">Siguiente: ${esc(nx.name)} →</a></p>`:""}`}}
 if(k==="prod"){const p=D.prods.find(p=>p.id===id);if(p){const b=B(p.brand);return{t:p.name,nav:"marcas",html:`${crumbs([["Inicio",""],["Productos","marcas"],[b.name,"marca-"+b.id],[L(p.brand,lineIds(p)[0]),"linea-"+lineIds(p)[0]],[p.name]])}<h1>${esc(p.name)}</h1><div class="fgrid">${p.img?`<img class="fimg" src="${esc(p.img)}" alt="${esc(p.name)}" width="400" height="400">`:""}<div>${p.d?prodFicha(p.d):`<p class="empty">Ficha pendiente de completar.</p>`}<div class="box"><p><strong>Marca:</strong> <a href="#marca-${b.id}">${esc(b.name)}</a></p><p><strong>${lineIds(p).length>1?"Líneas":"Línea"}:</strong> ${lineIds(p).map(l=>`<a href="#linea-${l}">${esc(L(p.brand,l))}</a>`).join(", ")}</p>${prodNeeds(p).length?`<p><strong>Necesidades:</strong></p><ul class="chips">${prodNeeds(p).map(t=>`<li><a class="chip" href="#nec-${t}">${esc(N(t).name)}</a></li>`).join("")}</ul>`:""}</div></div></div>`}}}
 if(h==="buscar"){const q=Q.value.trim(),{r,bs,ps,fix}=buscar(q);
  return{t:"Búsqueda",nav:"",html:`${crumbs([["Inicio",""],["Búsqueda"]])}<h1>Resultados</h1><p class="lead" role="status">${q?n(r.length+bs.length+ps.length,"resultado"):"Escribe para buscar."}${fix.length?` · Buscando: ${esc(fix.join(", "))}`:""}</p><ul class="grid">${bs.map(b=>tile("marca-"+b.id,b.name,"Marca")).join("")}${ps.map(x=>tile("pat-"+x.id,x.name,"Patología")).join("")}${r.map(prodCard).join("")}</ul>`}}
 return{t:"No encontrado",nav:"",html:`<h1>Página no encontrada</h1><p class="empty">El enlace no existe o el producto fue retirado.<br><a href="#">Volver al inicio</a></p>`};
}
let last="";
function render(){
 const h=location.hash.slice(1);if(h!==last){F="";}
 const p=page(h);M.innerHTML=p.html;document.title=p.t+" · Catálogo Dermo";
 $("#nav").innerHTML=[["","Inicio"],["piel","La piel"],["cosmeticos","Cosméticos"],["patologias","Patologías"],["marcas","Productos"],["eleccion","Elección"]].map(a=>`<a href="#${a[0]}"${(a[0]?a[0]===p.nav:!h)?' aria-current="page"':""}>${a[1]}</a>`).join("");
 const sk=$("#sk");if(sk)sk.onchange=()=>{SK=sk.value;last=h;render();$("#sk").focus()};const f=$("#f");if(f)f.onchange=()=>{F=f.value;last=h;render();f.focus()};
 if(h!==last&&h!=="buscar"){window.scrollTo(0,0);M.focus({preventScroll:true})}
 last=h;
}
Q.addEventListener("input",()=>{location.hash==="#buscar"?render():(location.hash="buscar")});
addEventListener("hashchange",render);render();
