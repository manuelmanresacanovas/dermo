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
/* Elección de producto: solo cuentan las líneas principales de cada necesidad (lineas en datos/necesidades.js) */
const lineaPrincipal=(p,x)=>lineIds(p).find(l=>(x.lineas||[]).includes(l));
/* Contorno, limpieza y fotoprotección son tipos de producto: el producto de ese tipo también sale en las otras necesidades que cubre */
const tipoDe=(p,x)=>D.needs.find(t=>t.tipo&&t.id!==x.id&&prodNeeds(p).includes(t.id)),enEleccion=(p,x)=>prodNeeds(p).includes(x.id)&&!!(x.tipo||lineaPrincipal(p,x)||tipoDe(p,x));
/* Texto de la ficha en el que también busca el buscador. El modo de empleo queda fuera a propósito:
   «aplicar sobre la piel seca» no significa que el producto sea para piel seca */
const fichaText=p=>p.d?[p.d.tipo,p.d.necesidad,p.d.paciente,p.d.limpieza,p.d.limpiezaDet,p.d.nota,...(p.d.variantes||[]).map(v=>v.join(" ")),...(p.d.claims||[]),...(p.d.composicion||[]),...(p.d.accion?p.d.accion.a.map(x=>x[0]):[])].filter(Boolean):[];
/* Versiones de un mismo producto (concentraciones, intensidades): [nombre, concentración, para quién] */
const variantes=d=>{if(!d.variantes)return "";const tres=d.variantes[0].length>2,cab=tres?["Versión","Concentración","Para quién"]:["Versión","Para qué"];return `<h2>${esc(d.variantesTitulo||"Concentraciones: ¿cuál elegir?")}</h2><div class="vtab"><table><thead><tr>${cab.map(c=>`<th>${c}</th>`).join("")}</tr></thead><tbody>${d.variantes.map(v=>`<tr><td><strong>${esc(v[0])}</strong></td>${v.slice(1).map(x=>`<td>${esc(x)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>${d.variantesNota?`<p>${esc(d.variantesNota)}</p>`:""}`};
/* Producto en los resultados de búsqueda: foto a la izquierda, ajustada a la altura de la tarjeta */
const prodCard=p=>`<li><a class="card cbus" href="#prod-${p.id}">${p.img?`<img src="${esc(p.img)}" alt="" loading="lazy" width="136" height="136">`:`<i class="ph"></i>`}<div><strong>${esc(p.name)}</strong><span>${esc(B(p.brand).name)} · ${esc(lineNames(p).join(" / "))}</span></div></a></li>`;
/* Producto con foto y nombre debajo: se usa en el listado de cada línea */
const prodTile=p=>`<li><a class="ptile" href="#prod-${p.id}">${p.img?`<img src="${esc(p.img)}" alt="" loading="lazy" width="400" height="400">`:`<span class="ph"></span>`}<span class="pname">${esc(p.name)}</span></a></li>`;
/* Producto con foto pequeña al lado del nombre: se usa en los desplegables de «Elección de producto» */
const prodMini=p=>`<li><a class="card cmini" href="#prod-${p.id}" title="${esc(p.name)}">${p.img?`<img src="${esc(p.img)}" alt="" loading="lazy" width="72" height="72">`:`<i class="ph"></i>`}<div><strong>${esc(p.name)}</strong><span>${esc(B(p.brand).name)} · ${esc(lineNames(p).join(" / "))}</span></div></a></li>`;
/* Ficha del producto: lo primero que se ve es a qué paciente va dirigido */
const prodFicha=d=>`<section class="fpac"><h2>¿A qué paciente va dirigido?</h2><p>${esc(d.paciente)}</p></section><div class="box fdat"><h2>Tipo de producto</h2><p>${esc(d.tipo)}</p><h2>Necesidad que cubre</h2><p>${esc(d.necesidad)}</p>${variantes(d)}${d.limpieza?`<h2>Papel en la limpieza</h2><p><strong>${esc(d.limpieza)}</strong>${d.limpiezaDet?`<br>${esc(d.limpiezaDet)}`:""}</p>`:""}${d.modo||d.cuando?`<h2>Modo de empleo</h2>${d.cuando?`<p><strong>Cuándo:</strong> ${esc(d.cuando)}</p>`:""}${d.modo?`<p><strong>Cómo:</strong> ${esc(d.modo)}</p>`:""}${d.solar?`<p><strong>Fotoprotección:</strong> ${esc(d.solar)}</p>`:""}`:""}${d.accion?`<h2>Cómo actúa</h2><p>${esc(d.accion.i)}</p>${d.accion.a.length?`<ul class="flist">${d.accion.a.map(x=>`<li><strong>${esc(x[0])}:</strong> ${esc(x[1])}</li>`).join("")}</ul>`:""}`:""}${d.nota?`<h2>A tener en cuenta</h2><p>${esc(d.nota)}</p>`:""}</div>`;
/* Ficha de complemento alimenticio: paciente, necesidad, composición, pauta diaria y restricciones.
   Si la marca no indica una restricción en su web, se dice así (nunca se inventa). */
const lista=a=>a&&a.length?`<ul class="flist">${a.map(c=>`<li>${esc(c)}</li>`).join("")}</ul>`:"";
const fichaSupl=(d,m)=>{const no=`${m} no lo indica en su información oficial.`;return `<section class="fpac"><h2>¿A qué paciente va dirigido?</h2><p>${esc(d.paciente)}</p></section><div class="box fdat"><h2>Necesidad para la que está formulado</h2><p>${esc(d.necesidad)}</p>${d.claims&&d.claims.length?`<p class="fsub">Lo que declara la marca:</p>${lista(d.claims)}`:""}<h2>Tipo de producto</h2><p>${esc(d.tipo)}</p>${d.composicion&&d.composicion.length?`<h2>${esc(d.compTitulo||"Composición")}</h2>${lista(d.composicion)}`:""}<h2>Pauta diaria</h2><p><strong>Dosis:</strong> ${esc(d.pauta)}</p>${d.toma?`<p><strong>Cómo tomarlo:</strong> ${esc(d.toma)}</p>`:""}${d.envase?`<p><strong>Envase:</strong> ${esc(d.envase)}</p>`:""}</div><section class="box fdat frest"><h2>Restricciones</h2><p><strong>Embarazo:</strong> ${esc(d.embarazo||no)}</p><p><strong>Lactancia:</strong> ${esc(d.lactancia||no)}</p><p><strong>Interacciones con medicamentos u otros complementos:</strong> ${esc(d.interacciones||no)}</p>${d.interCurso&&d.interCurso.length?`<ul class="flist">${[...new Set(d.interCurso.map(x=>x.c))].map(c=>`<li><strong>${esc(c)}:</strong> ${esc(d.interCurso.filter(x=>x.c===c).map(x=>x.t).join(" "))}</li>`).join("")}</ul>`:""}${d.otras?`<p><strong>A tener en cuenta:</strong> ${esc(d.otras)}</p>`:""}</section>`};
/* Tarjeta «Test» de las páginas de teoría: solo aparece con sesión iniciada (js/formacion.js) */
const testTile=s=>window.FORM?FORM.tile(s):"";
const tile=(h,t,s)=>`<li><a class="card" href="#${h}"><strong>${esc(t)}</strong><span>${esc(s)}</span></a></li>`;
const lineTile=(l,s)=>`<li><a class="card" href="#linea-${l.id}"><strong>${esc(l.name)}</strong>${l.para?`<em class="para">${esc(l.para)}</em>`:""}<span>${esc(s)}</span></a></li>`;
/* Las migas de las secciones de dermofarmacia añaden el nivel «Dermofarmacia» detrás de «Inicio» */
const crumbs=a=>{if(a.length>1&&a[0][1]===""&&DERMO_SEC.some(s=>s[1]===a[1][0]))a=[a[0],["Dermofarmacia","dermo"],...a.slice(1)];return crumbsHtml(a)};
const crumbsHtml=a=>`<nav aria-label="Migas de pan"><ol class="crumbs">${a.map((c,i)=>i<a.length-1?`<li><a href="#${c[1]}">${esc(c[0])}</a></li>`:`<li aria-current="page">${esc(c[0])}</li>`).join("")}</ol></nav>`;
const n=(c,w)=>`${c} ${c===1?w:w+"s"}`;
const md=t=>{let o="",u=0;const i=s=>esc(s).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>");for(const l of t.split("\n")){const li=l.startsWith("- ");if(u&&!li){o+="</ul>";u=0}if(li){if(!u){o+="<ul>";u=1}o+=`<li>${i(l.slice(2))}</li>`}else if(l.startsWith("#### "))o+=`<h4>${i(l.slice(5))}</h4>`;else if(l.startsWith("### "))o+=`<h3>${i(l.slice(4))}</h3>`;else if(l.startsWith("## "))o+=`<h2>${i(l.slice(3))}</h2>`;else if(l.trim())o+=`<p>${i(l)}</p>`}return o+(u?"</ul>":"")};
let F="",SK="";const SKS=[["todos","Todos los tipos de piel"],["seca","Piel seca"],["grasa","Piel grasa"],["mixta","Piel mixta"],["imperfecciones","Piel con imperfecciones"],["sensible","Piel sensible"]],ok=p=>SK==="todos"||(SK&&(p.sk||[]).some(t=>t==="todas"||t===SK));
/* BUSCADOR: ignora acentos y palabras vacías, aplica sinónimos (datos/sinonimos.js) y corrige erratas.
   Cada palabra se busca al inicio de una palabra; si no aparece, dentro de una palabra; y si tampoco, la más parecida. */
const VACIAS=new Set(["de","del","la","las","el","los","en","con","para","y","o","a","un","una","por","que","piel","pieles"]);
const palabras=s=>norm(s).split(/[^a-z0-9]+/).filter(Boolean);
const SIN={};Object.keys(D.sinonimos||{}).forEach(k=>{SIN[norm(k)]=D.sinonimos[k].map(norm)});
const distancia=(a,b)=>{let f=Array.from({length:b.length+1},(_,j)=>j);for(let i=1;i<=a.length;i++){let d=f[0];f[0]=i;for(let j=1;j<=b.length;j++){const t=f[j];f[j]=Math.min(f[j]+1,f[j-1]+1,d+(a[i-1]===b[j-1]?0:1));d=t}}return f[b.length]};
/* Búsqueda por código nacional (datos/codigos_nacionales.js): 4 a 7 cifras, o códigos internos tipo 0P1234.
   Excel quita los ceros iniciales, así que el código se completa a 6 cifras; con 7 cifras se ignora el dígito de control.
   Si no hay coincidencia exacta, vale el principio del código. */
/* Código de barras (EAN-8, UPC-12, EAN-13/14; datos/codigos_ean.js). El lector añade «$» delante: se quita.
   Se compara sin ceros iniciales, porque el mismo código puede leerse con 12 o con 13 cifras. */
const sinCeros=x=>x.replace(/^0+/,"");
function buscarEAN(c){
 if(!/^(\d{8}|\d{11,14})$/.test(c))return null;
 const k=sinCeros(c),r=D.prods.filter(p=>p.ean&&p.ean.some(x=>sinCeros(x)===k));
 return r.length?{r,bs:[],ps:[],fix:[]}:null;
}
function buscarCN(texto){
 const c=texto.replace(/[\s.\-$]/g,"").toUpperCase();
 const porEAN=buscarEAN(c);if(porEAN)return porEAN;
 if(!/^(\d{4,7}|0P\d{3,4})$/.test(c))return null;
 const exactos=[/^\d+$/.test(c)&&c.length<6?("000000"+c).slice(-6):c];if(c.length===7)exactos.push(c.slice(0,6));
 const con=D.prods.filter(p=>p.cn);let r=con.filter(p=>p.cn.some(x=>exactos.includes(x)));
 if(!r.length)r=con.filter(p=>p.cn.some(x=>x.startsWith(c)));
 return r.length?{r,bs:[],ps:[],fix:[]}:null;
}
function buscar(texto){
 const porCN=buscarCN(texto);if(porCN)return porCN;
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
/* ÁREAS DEL CATÁLOGO: Dermofarmacia y Complementos alimenticios.
   Un producto es complemento si su marca tiene area:"supl" (marcas.js), si el producto tiene cat:"supl"
   o si su tipo empieza por «Complemento» o dice «Complemento alimenticio» o «Nutricosmético». */
const AREAS={dermo:{name:"Dermofarmacia",lead:"Cuidado de la piel: fundamentos, patologías, marcas y elección de producto."},supl:{name:"Complementos alimenticios",lead:"Suplementación por marcas y necesidades."}};
const DERMO_SEC=[["piel","La piel","Fundamentos, estructura y funciones."],["cosmeticos","Cosméticos","Tipos, usos y cómo elegirlos."],["patologias","Patologías","Enfermedades con afectación en la piel."],["marcas","Productos","Marcas y productos."],["eleccion","Elección de producto","Según la necesidad del cliente."]];
const SUPL_SEC=[["smarcas","Por marca"],["snec","Por necesidad"]];
const NAV_AREA={dermo:"dermo",piel:"dermo",cosmeticos:"dermo",patologias:"dermo",marcas:"dermo",eleccion:"dermo",complementos:"supl",smarcas:"supl",snec:"supl"};
/* Marcas de complementos (area:"supl"): sus páginas cuelgan de Complementos › Por marca */
const esMarcaSupl=b=>b.area==="supl";
const baseMarca=b=>esMarcaSupl(b)?[["Inicio",""],["Complementos","complementos"],["Por marca","smarcas"]]:[["Inicio",""],["Productos","marcas"]];
const navMarca=b=>esMarcaSupl(b)?"smarcas":"marcas";
const needsSupl=()=>D.needs.filter(x=>x.area==="supl");
const esSupl=p=>(B(p.brand)||{}).area==="supl"||p.cat==="supl"||/^complemento|complemento alimenticio|nutricosm/i.test((p.d&&p.d.tipo)||"");
const suplPorMarca=()=>D.brands.map(b=>[b,D.prods.filter(p=>p.brand===b.id&&esSupl(p))]).filter(a=>a[1].length);
const dermoTiles=()=>DERMO_SEC.map(s=>tile(s[0],s[1],s[2])).join("");
/* Inicio: una tarjeta grande por área.
   Dermofarmacia muestra los logos de las marcas (imagenes/logos/<id de marca>.svg o .png; la marca sin logo no sale).
   Complementos muestra una ilustración (imagenes/complementos.svg). */
const LOGOS={caudalie:"svg",filorga:"svg",sensilis:"svg",gemaherrerias:"svg",medik8:"svg",svr:"png",nuxe:"svg",lrp:"png",cantabria:"svg",avene:"png",isdin:"jpg"};
/* Marca en la página de marcas: logo a la izquierda, ajustado a la altura de la tarjeta (igual que los productos en el buscador) */
const brandTile=b=>`<li><a class="card cbus cmarca" href="#marca-${b.id}">${LOGOS[b.id]?`<span class="mlogo"><img src="imagenes/logos/${b.id}.${LOGOS[b.id]}" alt="" loading="lazy"></span>`:`<i class="ph"></i>`}<div><strong>${esc(b.name)}</strong><span>${n(D.prods.filter(p=>p.brand===b.id).length,"producto")}</span></div></a></li>`;
const muroLogos=()=>`<div class="logos">${D.brands.filter(b=>LOGOS[b.id]&&b.area!=="supl").map(b=>`<span><img src="imagenes/logos/${b.id}.${LOGOS[b.id]}" alt="${esc(b.name)}" loading="lazy"></span>`).join("")}</div>`;
/* Carrusel de complementos (imagenes/complementos/<nombre>.webp, fondo blanco). Para añadir fotos, súbelas a esa carpeta y añade el nombre aquí. */
const CARRUSEL=["ivb-creamag","ivb-creatine-essential","ivb-muscleguard","ivb-omega-3-rico-en-dha","ivb-omega-3-rico-en-epa","ivb-proteina-lactea","ivb-vitamina-d3k2","kobho-alpha-lipoic-acid","kobho-astaxanthin-coq10","kobho-biotin-keratin","kobho-curcumin-black-pepper","kobho-kobhocalm","kobho-liposomal-vitamin-c","kobho-omega3","kobho-trans-resveratrol-quercetin","kobho-trimagnesium","kobho-vegan-protein-isolate","kobho-w-balance"];
const barajar=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
/* Ilustración propia de la tarjeta de Complementos (generada como SVG: tarros con cápsulas vistos desde arriba) */
const ilustSupl=()=>`<div class="ailus portada" aria-hidden="true"><img src="imagenes/complementos-portada.svg" alt=""></div>`;
/* Cada 2,5 s cambia una de las tres fotos por otra al azar que no esté a la vista */
let giro=null;
const girarCarrusel=()=>{clearInterval(giro);const c=$(".carrusel");if(!c||matchMedia("(prefers-reduced-motion: reduce)").matches)return;let k=0;giro=setInterval(()=>{const imgs=c.querySelectorAll("img");if(!imgs.length||!document.body.contains(c)){clearInterval(giro);return}const vistos=[...imgs].map(i=>i.getAttribute("src")),libres=CARRUSEL.map(f=>`imagenes/complementos/${f}.webp`).filter(s=>!vistos.includes(s)),im=imgs[k++%imgs.length];im.classList.add("fuera");setTimeout(()=>{im.src=libres[Math.floor(Math.random()*libres.length)];im.onload=()=>im.classList.remove("fuera")},400)},2500)};
const acard=(h,t,sub,ilus,extra)=>`<li><a class="acard" href="#${h}"><span class="atit">${esc(t)}${extra||""}</span><span class="asub">${esc(sub)}</span>${ilus}</a></li>`;
const areaCard=(h,k,sub,extra)=>acard(h,AREAS[k].name,sub,k==="dermo"?muroLogos():ilustSupl(),extra);
/* Página intermedia de Complementos: tarjeta «Por necesidad» con las necesidades como etiquetas */
const nubeNec=()=>`<div class="ailus nubes" aria-hidden="true">${needsSupl().map(x=>`<span>${esc(x.name)}</span>`).join("")}</div>`;
const suplEn=x=>D.prods.filter(p=>esSupl(p)&&prodNeeds(p).includes(x.id));
const areaDermo=()=>areaCard("dermo","dermo",n(D.prods.filter(p=>!esSupl(p)).length,"producto")+" de "+n(D.brands.filter(b=>b.area!=="supl").length,"marca"));
const areaSupl=()=>{const c=suplPorMarca().reduce((s,a)=>s+a[1].length,0);return areaCard("complementos","supl",c?n(c,"producto")+" por ahora":"Se irán añadiendo poco a poco.",` <span class="nuevo">En construcción</span>`)};
function page(h){
 const i=h.indexOf("-"),k=i<0?h:h.slice(0,i),id=i<0?"":h.slice(i+1);
 if(k==="test"&&window.FORM){const r=FORM.page(id);if(r)return r}
 if(!h)return{t:"Catálogo de la farmacia",nav:"",html:`<h1>Catálogo de la farmacia</h1><p class="lead">Elige un área.</p><ul class="agrid">${areaDermo()}${areaSupl()}</ul>`};
 if(h==="dermo")return{t:"Dermofarmacia",nav:"dermo",html:`${crumbs([["Inicio",""],["Dermofarmacia"]])}<h1>Dermofarmacia</h1><p class="lead">${AREAS.dermo.lead}</p><ul class="grid">${dermoTiles()}</ul>`};
 if(h==="complementos"){const bs=D.brands.filter(esMarcaSupl),c=suplPorMarca().reduce((s,a)=>s+a[1].length,0),ns=needsSupl();return{t:"Complementos alimenticios",nav:"complementos",html:`${crumbs([["Inicio",""],["Complementos alimenticios"]])}<h1>Complementos alimenticios</h1><p class="lead">${AREAS.supl.lead}</p><ul class="grid">${tile("smarcas","Por marca","Marcas y productos.")}${tile("snec","Por necesidad","Según la necesidad del cliente.")}</ul>`}}
 if(h==="smarcas"){const bs=D.brands.filter(esMarcaSupl),otros=suplPorMarca().filter(a=>!esMarcaSupl(a[0]));return{t:"Complementos por marca",nav:"smarcas",html:`${crumbs([["Inicio",""],["Complementos","complementos"],["Por marca"]])}<h1>Por marca</h1><p class="lead">Elige una marca.</p>${bs.length?`<ul class="grid">${bs.map(b=>tile("marca-"+b.id,b.name,n(D.prods.filter(p=>p.brand===b.id).length,"producto"))).join("")}</ul>`:`<p class="empty">Aún no hay marcas de complementos cargadas.</p>`}${otros.length?`<h2>Complementos de marcas de dermofarmacia</h2>${otros.map(a=>`<details class="acc"><summary>${esc(a[0].name)}<span>${n(a[1].length,"producto")}</span></summary><ul class="grid">${a[1].map(prodMini).join("")}</ul></details>`).join("")}`:""}`}}
 if(h==="snec")return{t:"Complementos por necesidad",nav:"snec",html:`${crumbs([["Inicio",""],["Complementos","complementos"],["Por necesidad"]])}<h1>Por necesidad</h1><p class="lead">Elige la necesidad del cliente.</p><ul class="grid">${needsSupl().map(x=>tile("nec-"+x.id,x.name,n(suplEn(x).length,"producto"))).join("")}</ul>`};
 if(k==="nec"&&N(id)&&N(id).area==="supl"){const x=N(id),g=D.brands.map(b=>[b,suplEn(x).filter(p=>p.brand===b.id)]).filter(a=>a[1].length),ls=ps=>`<ul class="grid">${ps.map(prodMini).join("")}</ul>`,secciones=(b,ps)=>b.lines.filter(l=>ps.some(p=>lineIds(p)[0]===l.id)).map(l=>`<h3><a href="#linea-${l.id}">${esc(l.name)}</a></h3>${ls(ps.filter(p=>lineIds(p)[0]===l.id))}`).join("");
  return{t:x.name,nav:"snec",html:`${crumbs([["Inicio",""],["Complementos","complementos"],["Por necesidad","snec"],[x.name]])}<h1>${esc(x.name)}</h1><p class="lead">${esc(x.d||"")}</p>${g.length?g.map(a=>`<details class="acc"><summary>${esc(a[0].name)}<span>${n(a[1].length,"producto")}</span></summary>${secciones(a[0],a[1])}</details>`).join(""):`<p class="empty">Aún no hay productos cargados para esta necesidad.</p>`}`}}
 if(h==="marcas")return{t:"Marcas",nav:"marcas",html:`${crumbs([["Inicio",""],["Productos"]])}<h1>Productos</h1><p class="lead">Elige una marca.</p><ul class="grid">${D.brands.filter(b=>b.area!=="supl").map(brandTile).join("")}${testTile("marcas")}</ul>`};
 if(h==="patologias")return{t:"Patologías",nav:"patologias",html:`${crumbs([["Inicio",""],["Patologías"]])}<h1>Patologías</h1><ul class="grid">${D.pats.map(x=>tile("pat-"+x.id,x.name,x.d)).join("")}${testTile("patologias")}</ul>`};
 if(h==="piel"||(k==="piel"&&D.piel.some(a=>a.id===id))){const x=h==="piel"?null:D.piel.find(a=>a.id===id),pa=x&&x.p?D.piel.find(a=>a.id===x.p):null,kids=D.piel.filter(a=>(a.p||"")===(x?x.id:"")),c=[["Inicio",""],x?["La piel","piel"]:["La piel"]];if(pa)c.push([pa.name,"piel-"+pa.id]);if(x)c.push([x.name]);
  return{t:x?x.name:"La piel",nav:"piel",html:`${crumbs(c)}<h1>${esc(x?x.name:"Fundamentos de la piel")}</h1>${kids.length?`<ul class="grid">${kids.map(a=>tile("piel-"+a.id,a.name,a.d||"")).join("")}${x?"":testTile("piel")}</ul>`:`<div class="box th">${md(x.t)}</div>`}`}}
 if(h==="cosmeticos")return{t:"Cosméticos",nav:"cosmeticos",html:`${crumbs([["Inicio",""],["Cosméticos"]])}<h1>Cosméticos</h1><p class="lead">Tipos, usos y cómo elegirlos.</p><ul class="grid">${D.cosm.map(a=>tile("cosm-"+a.id,a.name,a.d)).join("")}${testTile("cosmeticos")}</ul>`};
 if(k==="cosm"&&D.cosm.some(a=>a.id===id)){const i=D.cosm.findIndex(a=>a.id===id),x=D.cosm[i],nx=D.cosm[i+1];return{t:x.name,nav:"cosmeticos",html:`${crumbs([["Inicio",""],["Cosméticos","cosmeticos"],[x.name]])}<h1>${esc(x.name)}</h1><div class="box th">${md(x.t)}</div>${window.FORM?FORM.enlaceTema("cosmeticos",x.id):""}${nx?`<p><a class="chip" href="#cosm-${nx.id}">Siguiente: ${esc(nx.name)} →</a></p>`:""}`}}
 if(h==="eleccion")return{t:"Elección de producto",nav:"eleccion",html:`${crumbs([["Inicio",""],["Elección de producto"]])}<h1>Elección de producto</h1><p class="lead">Elige la necesidad del cliente.</p><ul class="grid">${D.needs.filter(x=>x.area!=="supl").map(x=>tile("nec-"+x.id,x.name,n(D.prods.filter(p=>enEleccion(p,x)).length,"producto"))).join("")}</ul>`};
 if(k==="nec"&&N(id)){const x=N(id),g=D.brands.map(b=>[b,D.prods.filter(p=>p.brand===b.id&&enEleccion(p,x)&&ok(p))]).filter(a=>a[1].length),lista=ps=>`<ul class="grid">${ps.map(prodMini).join("")}</ul>`,secciones=(b,ps)=>x.tipo?lista(ps):b.lines.filter(l=>ps.some(p=>lineaPrincipal(p,x)===l.id)).map(l=>`<h3><a href="#linea-${l.id}">Línea ${esc(l.name)}</a></h3>${lista(ps.filter(p=>lineaPrincipal(p,x)===l.id))}`).join("")+D.needs.filter(t=>t.tipo&&ps.some(p=>!lineaPrincipal(p,x)&&tipoDe(p,x)===t)).map(t=>`<h3><a href="#nec-${t.id}">${esc(t.name)}</a></h3>${lista(ps.filter(p=>!lineaPrincipal(p,x)&&tipoDe(p,x)===t))}`).join("");return{t:x.name,nav:"eleccion",html:`${crumbs([["Inicio",""],["Elección de producto","eleccion"],[x.name]])}<h1>${esc(x.name)}</h1>${x.c?`<p class="lead"><a href="#cosm-${x.c}">Ver guía</a></p>`:""}<label for="sk">Tu tipo de piel</label><select id="sk"><option value="">Selecciona tu tipo de piel…</option>${SKS.map(o=>`<option value="${o[0]}"${SK===o[0]?" selected":""}>${o[1]}</option>`).join("")}</select><p class="lead" style="margin-top:8px;font-size:.9rem">${x.tipo?"Aparecen todos los productos de este tipo de cada marca; cada tarjeta indica su línea.":"Cada marca muestra su línea principal para esta necesidad y, aparte, sus contornos, limpiadores y fotoprotectores indicados para ella."} El tipo de piel es el que indica la ficha oficial de cada marca («todo tipo de piel» aparece en todas las opciones).</p>${!SK?`<p class="empty">Elige tu tipo de piel para ver los productos.</p>`:g.length?g.map(a=>`<details class="acc"><summary>${esc(a[0].name)}<span>${n(a[1].length,"producto")}</span></summary>${secciones(a[0],a[1])}</details>`).join(""):`<p class="empty">Aún no hay productos confirmados para este tipo de piel en esta necesidad.</p>`}`}}
 if(k==="marca"&&B(id)){const b=B(id);return{t:b.name,nav:navMarca(b),html:`${crumbs([...baseMarca(b),[b.name]])}<h1>${esc(b.name)}</h1><h2>Líneas</h2>${b.lines.length?`<ul class="grid">${b.lines.map(l=>lineTile(l,n(D.prods.filter(p=>inLine(p,l.id)).length,"producto"))).join("")}</ul>`:`<p class="empty">Esta marca aún no tiene líneas cargadas.</p>`}${b.area!=="supl"&&window.FORM?FORM.enlaceTema("marcas",b.id):""}`}}
 if(k==="linea"){const b=D.brands.find(b=>b.lines.some(l=>l.id===id));if(b){const l=b.lines.find(l=>l.id===id);return{t:l.name,nav:navMarca(b),html:`${crumbs([...baseMarca(b),[b.name,"marca-"+b.id],[l.name]])}<h1>${esc(l.name)}</h1><p class="lead">${esc(b.name)}${l.para?` · ${esc(l.para)}`:""}</p>${D.prods.some(p=>inLine(p,id))?`<ul class="pgrid">${D.prods.filter(p=>inLine(p,id)).map(prodTile).join("")}</ul>`:`<p class="empty">Esta línea aún no tiene productos cargados.</p>`}`}}}
 if(k==="pat"&&P(id)){const i=D.pats.findIndex(a=>a.id===id),x=D.pats[i],nx=D.pats[i+1];return{t:x.name,nav:"patologias",html:`${crumbs([["Inicio",""],["Patologías","patologias"],[x.name]])}<h1>${esc(x.name)}</h1><div class="box th">${md(x.t)}</div>${window.FORM?FORM.enlaceTema("patologias",x.id):""}${nx?`<p><a class="chip" href="#pat-${nx.id}">Siguiente: ${esc(nx.name)} →</a></p>`:""}`}}
 if(k==="prod"){const p=D.prods.find(p=>p.id===id);if(p){const b=B(p.brand);return{t:p.name,nav:navMarca(b),html:`${crumbs([...baseMarca(b),[b.name,"marca-"+b.id],[L(p.brand,lineIds(p)[0]),"linea-"+lineIds(p)[0]],[p.name]])}<h1>${esc(p.name)}</h1><div class="fgrid">${p.img?`<img class="fimg" src="${esc(p.img)}" alt="${esc(p.name)}" width="400" height="400">`:""}<div>${p.d?(p.d.pauta!==undefined?fichaSupl(p.d,b.name):prodFicha(p.d)):`<p class="empty">Ficha pendiente de completar.</p>`}<div class="box"><p><strong>Marca:</strong> <a href="#marca-${b.id}">${esc(b.name)}</a></p>${p.cn&&p.cn.length?`<p><strong>${p.cn.length>1?"Códigos nacionales":"Código nacional"}:</strong> ${p.cn.map(esc).join(", ")}</p>`:""}${p.ean&&p.ean.length?`<p><strong>${p.ean.length>1?"Códigos de barras":"Código de barras"}:</strong> ${p.ean.map(esc).join(", ")}</p>`:""}<p><strong>${lineIds(p).length>1?"Líneas":"Línea"}:</strong> ${lineIds(p).map(l=>`<a href="#linea-${l}">${esc(L(p.brand,l))}</a>`).join(", ")}</p>${prodNeeds(p).length?`<p><strong>Necesidades:</strong></p><ul class="chips">${prodNeeds(p).map(t=>`<li><a class="chip" href="#nec-${t}">${esc(N(t).name)}</a></li>`).join("")}</ul>`:""}</div></div></div>`}}}
 if(h==="buscar"){const q=Q.value.trim(),{r,bs,ps,fix}=buscar(q);
  return{t:"Búsqueda",nav:"",html:`${crumbs([["Inicio",""],["Búsqueda"]])}<h1>Resultados</h1><p class="lead" role="status">${q?n(r.length+bs.length+ps.length,"resultado"):"Escribe para buscar."}${fix.length?` · Buscando: ${esc(fix.join(", "))}`:""}</p><ul class="grid">${bs.map(b=>tile("marca-"+b.id,b.name,"Marca")).join("")}${ps.map(x=>tile("pat-"+x.id,x.name,"Patología")).join("")}${r.map(prodCard).join("")}</ul>`}}
 return{t:"No encontrado",nav:"",html:`<h1>Página no encontrada</h1><p class="empty">El enlace no existe o el producto fue retirado.<br><a href="#">Volver al inicio</a></p>`};
}
let last="";
function render(){
 const h=location.hash.slice(1);if(h!==last){F="";}
 const p=page(h);M.innerHTML=p.html;document.title=p.t+" · Catálogo Farmacia";
 const area=NAV_AREA[p.nav]||"";
 $("#nav").innerHTML=[["","Inicio",!h],["dermo","Dermofarmacia",area==="dermo"],["complementos","Complementos",area==="supl"]].map(a=>`<a href="#${a[0]}"${a[2]?' aria-current="page"':""}>${a[1]}</a>`).join("");
 const sub=$("#sub"),secs=area==="dermo"?DERMO_SEC.map(s=>[s[0],s[0]==="eleccion"?"Elección":s[1]]):area==="supl"?SUPL_SEC:[];sub.hidden=!secs.length;sub.innerHTML=secs.length?`<div>${secs.map(s=>`<a href="#${s[0]}"${s[0]===p.nav?' aria-current="page"':""}>${s[1]}</a>`).join("")}</div>`:"";
 const sk=$("#sk");if(sk)sk.onchange=()=>{SK=sk.value;last=h;render();$("#sk").focus()};const f=$("#f");if(f)f.onchange=()=>{F=f.value;last=h;render();f.focus()};
 girarCarrusel();
 if(h!==last&&h!=="buscar"){window.scrollTo(0,0);M.focus({preventScroll:true})}
 last=h;
}
Q.addEventListener("input",()=>{location.hash==="#buscar"?render():(location.hash="buscar")});
/* LECTOR DE CÓDIGOS DE BARRAS: el lector «teclea» un «$», las cifras muy seguidas y normalmente Enter.
   Al detectar el «$» se captura todo lo que llega (esté donde esté el cursor, salvo en el formulario de inicio de sesión)
   y se busca el código limpio, sustituyendo lo que hubiera en el buscador. Si solo hay un producto, se abre su ficha. */
(function(){
 let buf=null,t=null;
 const fin=()=>{clearTimeout(t);const c=buf;buf=null;if(!c||!/^\d{8,14}$/.test(c))return;
  Q.value=c;const r=buscar(c).r;
  if(r.length===1)location.hash="prod-"+r[0].id;else if(location.hash==="#buscar")render();else location.hash="buscar";
  Q.blur();};
 document.addEventListener("keydown",e=>{
  if(e.target&&e.target.closest&&e.target.closest("#login,#pform"))return;
  if(buf===null){if(e.key==="$"){buf="";e.preventDefault();clearTimeout(t);t=setTimeout(fin,400);}return;}
  if(/^\d$/.test(e.key)){buf+=e.key;e.preventDefault();clearTimeout(t);t=setTimeout(fin,400);return;}
  if(e.key==="Enter"||e.key==="Tab"){e.preventDefault();fin();return;}
  if(e.key==="Shift")return;
  fin();   // cualquier otra tecla: termina la lectura y deja pasar la tecla
 },true);
})();
addEventListener("hashchange",render);render();
