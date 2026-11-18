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
const prodCard=p=>`<li class="cw"><a class="card cbus" href="#prod-${p.id}">${p.img?`<img src="${esc(p.img)}" alt="" loading="lazy" width="136" height="136">`:`<i class="ph"></i>`}<div><strong>${esc(p.name)}</strong><span>${esc(B(p.brand).name)} · ${esc(lineNames(p).join(" / "))}</span></div></a>${cmpBtn(p)}</li>`;
/* Producto con foto y nombre debajo: se usa en el listado de cada línea */
const prodTile=p=>`<li><a class="ptile" href="#prod-${p.id}">${p.img?`<img src="${esc(p.img)}" alt="" loading="lazy" width="400" height="400">`:`<span class="ph"></span>`}<span class="pname">${esc(p.name)}</span></a></li>`;
/* Producto con foto pequeña al lado del nombre: se usa en los desplegables de «Elección de producto» */
const prodMini=p=>`<li class="cw"><a class="card cmini" href="#prod-${p.id}" title="${esc(p.name)}">${p.img?`<img src="${esc(p.img)}" alt="" loading="lazy" width="72" height="72">`:`<i class="ph"></i>`}<div><strong>${esc(p.name)}</strong><span>${esc(B(p.brand).name)} · ${esc(lineNames(p).join(" / "))}</span></div></a>${cmpBtn(p)}</li>`;
/* Ficha del producto: lo primero que se ve es a qué paciente va dirigido */
const prodFicha=d=>`<section class="fpac"><h2>¿A qué paciente va dirigido?</h2><p>${esc(d.paciente)}</p>${d.dif?`<h2 class="fdifh">En qué se diferencia</h2><p class="fdif">${esc(d.dif)}</p>`:""}</section><div class="box fdat"><h2>Tipo de producto</h2><p>${esc(d.tipo)}</p><h2>Necesidad que cubre</h2><p>${esc(d.necesidad)}</p>${variantes(d)}${d.limpieza?`<h2>Papel en la limpieza</h2><p><strong>${esc(d.limpieza)}</strong>${d.limpiezaDet?`<br>${esc(d.limpiezaDet)}`:""}</p>`:""}${d.modo||d.cuando?`<h2>Modo de empleo</h2>${d.cuando?`<p><strong>Cuándo:</strong> ${esc(d.cuando)}</p>`:""}${d.modo?`<p><strong>Cómo:</strong> ${esc(d.modo)}</p>`:""}${d.solar?`<p><strong>Fotoprotección:</strong> ${esc(d.solar)}</p>`:""}`:""}${d.accion?`<h2>Cómo actúa</h2><p>${esc(d.accion.i)}</p>${d.accion.a.length?`<ul class="flist">${d.accion.a.map(x=>`<li><strong>${esc(x[0])}:</strong> ${esc(x[1])}</li>`).join("")}</ul>`:""}`:""}${d.nota?`<h2>A tener en cuenta</h2><p>${esc(d.nota)}</p>`:""}</div>`;
/* Ficha de complemento alimenticio: paciente, necesidad, composición, pauta diaria y restricciones.
   Si la marca no indica una restricción en su web, se dice así (nunca se inventa). */
const lista=a=>a&&a.length?`<ul class="flist">${a.map(c=>`<li>${esc(c)}</li>`).join("")}</ul>`:"";
const fichaSupl=(d,m)=>{const no=`${m} no lo indica en su información oficial.`;return `<section class="fpac"><h2>¿A qué paciente va dirigido?</h2><p>${esc(d.paciente)}</p>${d.dif?`<h2 class="fdifh">En qué se diferencia</h2><p class="fdif">${esc(d.dif)}</p>`:""}</section><div class="box fdat"><h2>Necesidad para la que está formulado</h2><p>${esc(d.necesidad)}</p>${d.claims&&d.claims.length?`<p class="fsub">Lo que declara la marca:</p>${lista(d.claims)}`:""}<h2>Tipo de producto</h2><p>${esc(d.tipo)}</p>${d.composicion&&d.composicion.length?`<h2>${esc(d.compTitulo||"Composición")}</h2>${lista(d.composicion)}`:""}<h2>Pauta diaria</h2><p><strong>Dosis:</strong> ${esc(d.pauta)}</p>${d.toma?`<p><strong>Cómo tomarlo:</strong> ${esc(d.toma)}</p>`:""}${d.envase?`<p><strong>Envase:</strong> ${esc(d.envase)}</p>`:""}</div><section class="box fdat frest"><h2>Restricciones</h2><p><strong>Embarazo:</strong> ${esc(d.embarazo||no)}</p><p><strong>Lactancia:</strong> ${esc(d.lactancia||no)}</p><p><strong>Interacciones con medicamentos u otros complementos:</strong> ${esc(d.interacciones||no)}</p>${d.interCurso&&d.interCurso.length?`<ul class="flist">${[...new Set(d.interCurso.map(x=>x.c))].map(c=>`<li><strong>${esc(c)}:</strong> ${esc(d.interCurso.filter(x=>x.c===c).map(x=>x.t).join(" "))}</li>`).join("")}</ul>`:""}${d.otras?`<p><strong>A tener en cuenta:</strong> ${esc(d.otras)}</p>`:""}</section>`};
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
const DERMO_SEC=[["piel","La piel","Fundamentos, estructura y funciones."],["cosmeticos","Cosméticos","Tipos, usos y cómo elegirlos."],["patologias","Patologías","Enfermedades con afectación en la piel."],["marcas","Productos","Marcas y productos."],["eleccion","Elección de producto","Según la necesidad del cliente."],["todos","Todos los productos","Catálogo completo con filtros por marca, necesidad y tipo de piel."],["rutina","Rutina","Asistente: rutina de mañana y noche según el cliente."]];
const SUPL_SEC=[["smarcas","Por marca"],["snec","Por necesidad"],["stodos","Todos los productos"],["sinter","Interacciones"]];
const NAV_AREA={dermo:"dermo",piel:"dermo",cosmeticos:"dermo",patologias:"dermo",marcas:"dermo",eleccion:"dermo",todos:"dermo",rutina:"dermo",complementos:"supl",smarcas:"supl",snec:"supl",stodos:"supl",sinter:"supl"};
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
   Complementos hace lo mismo con los logos de sus marcas. */
const LOGOS={caudalie:"svg",filorga:"svg",sensilis:"svg",gemaherrerias:"svg",medik8:"svg",svr:"png",nuxe:"svg",lrp:"png",cantabria:"svg",avene:"png",isdin:"png",aderma:"png",ivb:"svg",solgar:"svg",pure:"svg",kobho:"png",finisher:"png"};
/* Marca en la página de marcas: logo a la izquierda, ajustado a la altura de la tarjeta (igual que los productos en el buscador) */
const brandTile=b=>`<li><a class="card cbus cmarca" href="#marca-${b.id}">${LOGOS[b.id]?`<span class="mlogo"><img src="imagenes/logos/${b.id}.${LOGOS[b.id]}" alt="" loading="lazy"></span>`:`<i class="ph"></i>`}<div><strong>${esc(b.name)}</strong><span>${n(D.prods.filter(p=>p.brand===b.id).length,"producto")}</span></div></a></li>`;
const muroLogos=supl=>`<div class="logos${supl?" lsup":""}">${D.brands.filter(b=>LOGOS[b.id]&&(b.area==="supl")===!!supl).map(b=>`<span><img class="l-${b.id}" src="imagenes/logos/${b.id}.${LOGOS[b.id]}" alt="${esc(b.name)}" loading="lazy"></span>`).join("")}</div>`;
/* Carrusel de complementos (imagenes/complementos/<nombre>.webp, fondo blanco). Para añadir fotos, súbelas a esa carpeta y añade el nombre aquí. */
const CARRUSEL=["ivb-creamag","ivb-creatine-essential","ivb-muscleguard","ivb-omega-3-rico-en-dha","ivb-omega-3-rico-en-epa","ivb-proteina-lactea","ivb-vitamina-d3k2","kobho-alpha-lipoic-acid","kobho-astaxanthin-coq10","kobho-biotin-keratin","kobho-curcumin-black-pepper","kobho-kobhocalm","kobho-liposomal-vitamin-c","kobho-omega3","kobho-trans-resveratrol-quercetin","kobho-trimagnesium","kobho-vegan-protein-isolate","kobho-w-balance"];
const barajar=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
/* Cada 2,5 s cambia una de las tres fotos por otra al azar que no esté a la vista */
let giro=null;
const girarCarrusel=()=>{clearInterval(giro);const c=$(".carrusel");if(!c||matchMedia("(prefers-reduced-motion: reduce)").matches)return;let k=0;giro=setInterval(()=>{const imgs=c.querySelectorAll("img");if(!imgs.length||!document.body.contains(c)){clearInterval(giro);return}const vistos=[...imgs].map(i=>i.getAttribute("src")),libres=CARRUSEL.map(f=>`imagenes/complementos/${f}.webp`).filter(s=>!vistos.includes(s)),im=imgs[k++%imgs.length];im.classList.add("fuera");setTimeout(()=>{im.src=libres[Math.floor(Math.random()*libres.length)];im.onload=()=>im.classList.remove("fuera")},400)},2500)};
const acard=(h,t,sub,ilus,extra)=>`<li><a class="acard" href="#${h}"><span class="atit">${esc(t)}${extra||""}</span><span class="asub">${esc(sub)}</span>${ilus}</a></li>`;
const areaCard=(h,k,sub,extra)=>acard(h,AREAS[k].name,sub,muroLogos(k==="supl"),extra);
/* Página intermedia de Complementos: tarjeta «Por necesidad» con las necesidades como etiquetas */
const nubeNec=()=>`<div class="ailus nubes" aria-hidden="true">${needsSupl().map(x=>`<span>${esc(x.name)}</span>`).join("")}</div>`;
const suplEn=x=>D.prods.filter(p=>esSupl(p)&&prodNeeds(p).includes(x.id));
const areaDermo=()=>areaCard("dermo","dermo",n(D.prods.filter(p=>!esSupl(p)).length,"producto")+" de "+n(D.brands.filter(b=>b.area!=="supl").length,"marca"));
/* Solo cuenta las marcas de complementos (no los complementos de marcas dermo, como Heliocare cápsulas) */
const areaSupl=()=>{const bs=D.brands.filter(esMarcaSupl),c=D.prods.filter(p=>bs.some(b=>b.id===p.brand)).length;return areaCard("complementos","supl",c?n(c,"producto")+" de "+n(bs.length,"marca"):"Se irán añadiendo poco a poco.")};
/* TODOS LOS PRODUCTOS (dermofarmacia): listado completo con filtros desplegables a la izquierda.
   Cada opción indica cuántos productos quedarían con los demás filtros puestos; las que dejarían 0 se desactivan.
   Tipo de piel: el de la ficha oficial (sk); «todo tipo de piel» sale en todas las opciones, igual que en Elección. */
/* Casillas: dentro de un mismo filtro basta con cumplir una opción; entre filtros distintos hay que cumplirlos todos */
/* Cada área guarda sus propios filtros; TF apunta a los del área que se está viendo */
const TFV=()=>({b:[],n:[],s:[],f:[],m:[],c:[],e:[]});
const TFA={dermo:TFV(),supl:TFV()},TFO={b:false,n:false,s:false,f:false,m:false,c:false,e:false};let TF=TFA.dermo;
/* FILTROS DERIVADOS DE LA FICHA: formato, momento del día, características y embarazo.
   Se calculan una vez por producto a partir del tipo, el texto de la ficha y los activos (palabras clave). */
const FORMATOS=[["champu","Champú",/champu/],["mascarilla","Mascarilla, parches o discos",/mascarilla|parche|discos/],["exfoliante","Exfoliante o peeling",/exfoliante|peeling/],["polvos","Polvos",/polvos/],["stick","Stick o barra",/stick|barra/],["espuma","Espuma o mousse",/espuma|mousse/],["aceite","Aceite",/aceite|oleo/],["balsamo","Bálsamo o pomada",/balsamo|pomada|cera fundente/],["serum","Sérum, ampolla o concentrado",/serum|ampolla|concentrado|esencia/],["gel","Gel o gel-crema",/gel/],["agua","Agua, tónico, bruma o spray",/agua|tonico|bruma|spray|micelar|toallita/],["fluido","Fluido, leche o loción",/fluido|leche|locion|emulsion/],["crema","Crema",/crema|cream/]];
const MOMENTOS=[["dia","De día"],["noche","De noche"]];
/* Características: si se marcan varias, el producto tiene que cumplirlas todas */
const CARACT=[["sinperf","Sin perfume",t=>/sin perfume|sans parfum|sin fragancia/.test(t)],["color","Con color",t=>/con color|teinte|bb cream|cc cream|cc crema|bb-/.test(t)],["spf","Con protección solar (SPF)",t=>/spf/.test(t)],["mate","Matificante",t=>/matific|acabado mate|ultramate/.test(t)],["nocom","No comedogénico",t=>/no comedog/.test(t)],["mineral","Filtro solar mineral",(t,a)=>/100 % mineral|solo minerales|filtros? (100 % )?minerales?/.test(t+" "+a)],["lentillas","Apto para lentillas",t=>/lentillas|lentes de contacto/.test(t)],["retinoide","Con retinoides",(t,a)=>/retin/.test(a)&&!/retinol-like/.test(a)],["acidos","Con ácidos exfoliantes",(t,a)=>/acido (glicolico|salicilico|lactico|mandelico|azelaico|succinico|lactobionico)|\baha\b|\bbha\b|\bpha\b|gluconolactona|\blha\b/.test(a)],["vitc","Con vitamina C",(t,a)=>/vitamina c|ascorb/.test(a)]];
const EMBARAZO=[["si","Adecuado según la ficha"],["nocontra","Sin aviso en contra en la ficha"]];
const ATRC={};
const atrDe=p=>{if(ATRC[p.id])return ATRC[p.id];const d=p.d||{},tipo=norm(d.tipo||""),cu=norm(d.cuando||""),txt=norm([p.name,d.tipo,d.paciente,d.necesidad,d.nota,d.otras].filter(Boolean).join(" ")),act=norm(activosDe(p).join(" "));
 const fo=FORMATOS.find(x=>x[2].test(tipo)),noche=/solo por la noche|^por la noche/.test(cu)||/de noche|nocturn/.test(tipo),dia=/solo por la manana|^por la manana|^por el dia|^de dia/.test(cu)||/de dia/.test(tipo),e=embCls(p);
 return ATRC[p.id]={f:fo?[fo[0]]:[],m:dia&&!noche?["dia"]:noche&&!dia?["noche"]:["dia","noche"],c:CARACT.filter(x=>x[2](txt,act)).map(x=>x[0]),e:e==="si"?["si","nocontra"]:e==="no"?[]:["nocontra"]}};
const pasaExtra=(p,f)=>["f","m","e"].every(k=>!f[k].length||atrDe(p)[k].some(v=>f[k].includes(v)))&&(!f.c.length||f.c.every(v=>atrDe(p).c.includes(v)));
const dermoProds=()=>D.prods.filter(p=>!esSupl(p));
const pasaFiltro=(p,f)=>(!f.b.length||f.b.includes(p.brand))&&(!f.n.length||prodNeeds(p).some(x=>f.n.includes(x)))&&(!f.s.length||(p.sk||[]).some(t=>t==="todas"||f.s.includes(t)))&&pasaExtra(p,f);
/* Recuento de cada opción en una sola pasada: productos que cumplen los demás filtros, sumando los valores que tiene cada uno.
   «Todo tipo de piel» cuenta en todas las opciones de piel; en Características (todas a la vez) se parte de las ya marcadas. */
const valoresDe=(k,p)=>k==="b"?[p.brand]:k==="n"?prodNeeds(p):k==="s"?((p.sk||[]).includes("todas")?SKS.slice(1).map(o=>o[0]):p.sk||[]):atrDe(p)[k];
const cuenta=(k,ps)=>{const f=Object.assign({},TF,{[k]:k==="c"?TF.c:[]}),c={};ps.forEach(p=>{if(pasaFiltro(p,f))new Set(valoresDe(k,p)).forEach(v=>c[v]=(c[v]||0)+1)});return c};
const filtroGrupo=(k,lab,opts,ps)=>{const cnt=cuenta(k,ps);return `<details class="tfg" data-g="${k}"${TFO[k]?" open":""}><summary>${lab}${TF[k].length?` <span class="tfn">${TF[k].length}</span>`:""}<span class="flecha" aria-hidden="true">▾</span></summary><div class="tfops">${opts.map(([v,t])=>{const c=cnt[v]||0,sel=TF[k].includes(v),off=!c&&!sel;return `<label class="tfop${off?" off":""}"><input type="checkbox" data-tf="${k}" value="${esc(v)}"${sel?" checked":""}${off?" disabled":""}><span>${esc(t)}</span><em>${c}</em></label>`}).join("")}</div></details>`};
/* Complementos: mismos filtros salvo el tipo de piel, que no aplica */
function paginaTodos(a){
 const supl=a==="supl";TF=TFA[a];
 const ps=supl?D.prods.filter(esSupl):dermoProds(),r=ps.filter(p=>pasaFiltro(p,TF)),hay=Object.keys(TF).some(k=>TF[k].length);
 const marcas=supl?suplPorMarca().map(x=>x[0]):D.brands.filter(b=>b.area!=="supl"),necs=supl?needsSupl():D.needs.filter(x=>x.area!=="supl");
 const filtros=`<div class="tfil" role="group" aria-label="Filtros">${filtroGrupo("b","Marca",marcas.map(b=>[b.id,b.name]),ps)}${filtroGrupo("n","Necesidad",necs.map(x=>[x.id,x.name]),ps)}${supl?"":filtroGrupo("s","Tipo de piel",SKS.slice(1),ps)+filtroGrupo("f","Formato",FORMATOS.map(x=>[x[0],x[1]]),ps)+filtroGrupo("m","Momento",MOMENTOS,ps)+filtroGrupo("c","Características",CARACT.map(x=>[x[0],x[1]]),ps)}${filtroGrupo("e","Embarazo",EMBARAZO,ps)}${hay?`<button type="button" class="bcuenta" id="tfx">Quitar filtros</button>`:""}</div>`;
 return{t:supl?"Todos los complementos":"Todos los productos",nav:supl?"stodos":"todos",html:`${crumbs(supl?[["Inicio",""],["Complementos","complementos"],["Todos los productos"]]:[["Inicio",""],["Todos los productos"]])}<h1>Todos los productos</h1><div class="tgrid">${filtros}<div><p class="lead" role="status">${n(r.length,"producto")}${hay?` de ${ps.length}`:""}</p>${r.length?`<ul class="grid tlist">${r.map(prodCard).join("")}</ul>`:`<p class="empty">Ningún producto cumple estos filtros.</p>`}</div></div>`};
}
/* COMPARADOR: hasta 3 productos lado a lado para ver en qué se diferencian.
   Se eligen con «+ Comparar» en las tarjetas o en la ficha; la selección dura mientras la pestaña siga abierta.
   Las filas en las que todos coinciden se pueden ocultar; los activos que solo tiene un producto salen resaltados. */
const CMAX=3;let CMP=[],CMPD=false,CMSG="";
try{CMP=(JSON.parse(sessionStorage.getItem("cmp")||"[]")||[]).filter(id=>D.prods.some(p=>p.id===id)).slice(0,CMAX)}catch(e){CMP=[]}
const guardaCmp=()=>{try{sessionStorage.setItem("cmp",JSON.stringify(CMP))}catch(e){}};
const cmpBtn=p=>{const s=CMP.includes(p.id);return `<button type="button" class="cmpb${s?" on":""}" data-cmp="${p.id}" aria-pressed="${s}" aria-label="${s?"Quitar de la comparación":"Añadir a la comparación"}: ${esc(p.name)}">${s?"✓ Comparando":"+ Comparar"}</button>`};
const SKN={todas:"Todo tipo de piel",seca:"Seca",grasa:"Grasa",mixta:"Mixta",imperfecciones:"Con imperfecciones",sensible:"Sensible"};
const textoFicha=p=>p.d?[p.d.paciente,p.d.tipo,p.d.necesidad,p.d.nota,p.d.otras,...(p.d.claims||[])].filter(Boolean).join(" "):"";
const embarazoDe=p=>{const d=p.d||{};if(d.embarazo||d.lactancia)return [d.embarazo&&"Embarazo: "+d.embarazo,d.lactancia&&"Lactancia: "+d.lactancia].filter(Boolean).join(" ");return (textoFicha(p).match(/[^.]*(embaraz|lactan)[^.]*\.?/gi)||[]).map(s=>s.trim()).join(" ")};
const activosDe=p=>p.d&&p.d.accion?p.d.accion.a.map(x=>x[0]):[];
/* RESUMEN DEL COMPARADOR: «si busca X → elige Y», generado a partir de los datos de las fichas.
   De cada producto se sacan rasgos (embarazo, edad, día/noche, tipo de piel, necesidades, zona, textura, SPF, pauta…)
   y solo se usan los que no comparten todos los productos comparados. Los rasgos de texto se detectan por palabras clave. */
const lcFirst=s=>s.charAt(0).toLowerCase()+s.slice(1);
const embCls=p=>{const t=norm(embarazoDe(p));if(!t)return "";if(/sin contraindicacion|se puede usar|adecuad|compatible|apt[oa] (en|para)/.test(t)&&!/no (recomendad|adecuad|apt)/.test(t))return "si";if(/no recomendad|evitar|desaconsejad|no usar|contraindicad|no (adecuad|apt)/.test(t))return "no";return ""};
const PIEL_TXT={seca:"tiene la piel seca",grasa:"tiene la piel grasa",mixta:"tiene la piel mixta",imperfecciones:"tiene imperfecciones",sensible:"tiene la piel sensible"};
const NEC_TXT={limpieza:["z:limp","busca un limpiador"],ojos:["z:ojos","es para el contorno de ojos"],fotoproteccion:["z:sol","busca protección solar"],corporal:["z:cuerpo","es para el cuerpo"]};
/* [expresión, clave, texto, dónde buscar: tipo | cu (cuándo) | t (tipo + necesidad + paciente)] */
const RASGOS_TXT=[
 [/contorno de ojos/,"z:ojos","es para el contorno de ojos","tipo"],[/corporal|cuerpo/,"z:cuerpo","es para el cuerpo","tipo"],[/\bmanos\b/,"z:manos","es para las manos","tipo"],[/labi/,"z:labios","es para los labios","tipo"],[/cabell|capilar|champu/,"z:pelo","es para el cabello","tipo"],
 [/piel adulta/,"e:adulta","es adulto","t"],
 [/acabado mate|matific/,"t:mate","quiere acabado mate","t"],[/textura rica|\brica\b|balsamo/,"t:rica","prefiere una textura rica","tipo"],[/ligera|gel-crema|gelcream|\bfluido\b|sin acabado graso|sin efecto graso|acabado seco/,"t:ligera","prefiere una textura ligera","tipo"],
 [/unific|tono desigual|uniform/,"t:unif","quiere unificar el tono","t"],[/como hidratante/,"t:hidr","lo quiere como hidratante diaria","cu"],
 [/sin perfume/,"t:sinperf","lo prefiere sin perfume","tipo"],[/con color|base de maquillaje|colorete|tratamiento y maquillaje/,"t:color","quiere que además dé color o maquille","tipo"],
 [/efecto tensor|lifting/,"t:tensor","busca efecto tensor","tipo"],[/resistente al agua|waterproof/,"t:agua","necesita que resista el agua","tipo"],
 [/localizad|puntual|zonas concretas/,"t:local","es para una zona concreta o un grano puntual","t"],[/exfoli|peeling/,"t:exf","quiere además exfoliar","tipo"],
 [/veces por semana|cada 10 dias/,"t:sem","busca un tratamiento semanal, no diario","cu"],[/sin aclarado/,"t:sinacl","lo quiere sin aclarado","tipo"],
 [/capsula|comprimido|perla/,"f:caps","prefiere cápsulas o comprimidos","tipo"],[/bebible|en polvo|\bstick|sobre|liquid|ampolla|vial/,"f:beb","prefiere tomarlo disuelto o bebible","tipo"],[/gominola|masticable|gummies/,"f:mast","prefiere masticable","tipo"]
];
function rasgosDe(p){
 const d=p.d||{},r=[],ver={},add=(k,l,o)=>{if(!ver[k]){ver[k]=1;r.push({k,l,o})}};
 const src={tipo:norm(d.tipo||""),cu:norm(d.cuando||""),t:norm([d.tipo,d.necesidad,d.paciente].filter(Boolean).join(" "))};
 if(embCls(p)==="si")add("emb","está embarazada (según la ficha, es adecuado)",0);
 const pa=d.paciente||"",m=pa.match(/(?:desde|a partir de)(?: los)? (\d+) (años|meses)/i);
 if(m)add("edad:"+m[1]+m[2],m[2]==="meses"||+m[1]<10?`es para niños (desde ${m[1]} ${m[2]})`:`es adolescente (desde ${m[1]} años)`,1);else if(/toda la familia/i.test(pa))add("fam","es para toda la familia",1);
 const noche=/solo por la noche|^por la noche/.test(src.cu)||/de noche/.test(src.tipo),dia=/solo por la manana|^por la manana/.test(src.cu)||/de dia/.test(src.tipo);
 if(dia&&!noche)add("m:dia","busca uno de día",2);if(noche&&!dia)add("m:noche","busca uno de noche",2);
 (p.sk||[]).forEach(s=>{if(PIEL_TXT[s])add("sk:"+s,PIEL_TXT[s],3)});
 prodNeeds(p).forEach(id=>{const x=N(id);if(!x||(id==="corporal"&&esSupl(p)))return;const e=NEC_TXT[id];e?add(e[0],e[1],4):add("n:"+id,"quiere tratar "+lcFirst(x.name),4)});
 if(d.limpieza){const l=norm(d.limpieza);if(/1\.er paso/.test(l))add("lp:1","quiere desmaquillar (1.er paso de la limpieza)",5);else if(/2\.. paso/.test(l))add("lp:2","busca el limpiador del 2.º paso",5);else if(/unica/.test(l))add("lp:u","quiere un limpiador único, sin doble limpieza",5);else if(/ultimo paso/.test(l))add("lp:t","busca un tónico para terminar la limpieza",5)}
 RASGOS_TXT.forEach(([re,k,l,w])=>{if(re.test(src[w]))add(k,l,6)});
 const sp=(d.tipo||"").match(/SPF ?(\d+\+?)/i);if(sp)add("spf:"+sp[1],`quiere SPF${sp[1]}`,6);
 return r;
}
const nombres=a=>a.length>1?a.slice(0,-1).join(", ")+" o "+a[a.length-1]:a[0]||"";
const yLista=a=>a.length>1?a.slice(0,-1).join(", ")+" y "+a[a.length-1]:a[0]||"";
/* Junta los tipos de piel en una sola condición («tiene la piel mixta, grasa o sensible») y lo mismo con las necesidades */
const PIEL_W={seca:"seca",grasa:"grasa",mixta:"mixta",sensible:"sensible",imperfecciones:"con imperfecciones"};
const fusiona=(items,ademas,une)=>{const sk=items.filter(x=>/^sk:/.test(x.k)),nn=items.filter(x=>/^n:/.test(x.k)),out=items.filter(x=>!/^(sk|n):/.test(x.k)).map(x=>({o:x.o,l:x.l}));
 if(sk.length)out.push({o:3,l:"tiene la piel "+une(sk.map(x=>PIEL_W[x.k.slice(3)]))});
 if(nn.length)out.push({o:4,l:(ademas?"además ":"")+"quiere tratar "+une(nn.map(x=>lcFirst(x.l.replace(/^quiere tratar /,""))))});
 return out.sort((a,b)=>a.o-b.o).map(x=>x.l)};
function resumenComparar(ps){
 const tot=ps.length,link=p=>`<a href="#prod-${p.id}"><strong>${esc(p.name)}</strong></a>`,R=ps.map(rasgosDe),todos={};
 R.forEach((rs,i)=>rs.forEach(x=>{(todos[x.k]=todos[x.k]||{l:x.l,o:x.o,ids:[]}).ids.push(i)}));
 const comun=Object.keys(todos).filter(k=>todos[k].ids.length===tot),hayNecComun=comun.some(k=>/^n:/.test(k));
 /* Líneas «si… → …»: rasgos que no tienen todos, agrupados por el conjunto de productos que los tienen */
 const grupos={};Object.keys(todos).filter(k=>todos[k].ids.length<tot).forEach(k=>{const g=todos[k].ids.join(",");(grupos[g]=grupos[g]||[]).push(Object.assign({k},todos[k]))});
 const lineas=Object.keys(grupos).sort((a,b)=>a.split(",").length-b.split(",").length||a.localeCompare(b)).map(g=>{const ids=g.split(",").map(Number),ls=fusiona(grupos[g],hayNecComun,nombres).slice(0,4);return `<li>Si ${esc(nombres(ls))} → ${nombres(ids.map(i=>link(ps[i])))}</li>`});
 const sinRasgo=ps.filter((p,i)=>!Object.keys(grupos).some(g=>g.split(",").map(Number).includes(i)));
 const difs=sinRasgo.filter(p=>p.d&&p.d.dif).map(p=>`<li>${link(p)}: ${esc(p.d.dif)}</li>`);
 /* En común */
 const comunTxt=[];const nc=comun.filter(k=>/^n:/.test(k)).map(k=>todos[k].l.replace(/^quiere tratar /,""));if(nc.length)comunTxt.push(`${tot===2?"Los dos":"Los "+tot} tratan ${esc(yLista(nc))}.`);
 if(comun.includes("emb"))comunTxt.push(`${tot===2?"Los dos son adecuados":"Todos son adecuados"} en embarazo, según la ficha.`);
 const otrosCom=fusiona(comun.filter(k=>!/^n:/.test(k)&&k!=="emb").map(k=>Object.assign({k},todos[k])),false,yLista);if(otrosCom.length)comunTxt.push(`${tot===2?"Los dos sirven":"Todos sirven"} si ${esc(yLista(otrosCom))}.`);
 /* Rutina posible */
 const rut=[],di=ps.filter((p,i)=>R[i].some(x=>x.k==="m:dia")),no=ps.filter((p,i)=>R[i].some(x=>x.k==="m:noche"));
 if(di.length&&no.length)rut.push(`${nombres(di.map(link))} por la mañana + ${nombres(no.map(link))} por la noche.`);
 const tp=p=>norm((p.d&&p.d.tipo)||""),ser=ps.filter(p=>/^(serum|esencia)/.test(tp(p))),cre=ps.filter(p=>/^(crema|fluido|gel-crema|gelcream)/.test(tp(p)));
 if(ser.length&&cre.length)rut.push(`Primero ${nombres(ser.map(link))} (sérum) y después ${nombres(cre.map(link))}.`);
 const lim=ps.filter(p=>p.d&&p.d.limpieza&&!/exfol/i.test(p.d.limpieza)),trat=ps.filter(p=>!(p.d&&p.d.limpieza)&&!prodNeeds(p).some(t=>t==="limpieza"||t==="fotoproteccion"));
 if(lim.length&&trat.length)rut.push(`${nombres(lim.map(link))} para limpiar y, después, ${nombres(trat.map(link))}.`);
 /* A tener en cuenta */
 const av=[];ps.forEach(p=>{if(embCls(p)==="no")av.push(`${link(p)}: no recomendado en embarazo, según la ficha.`);if(/no (adecuad|apt)[oa] para (la )?piel sensible|excepto la sensible/i.test(textoFicha(p)))av.push(`${link(p)}: no apto para piel sensible.`)});
 const act=ps.map(p=>activosDe(p).map(norm).sort().join("|"));
 for(let i=0;i<tot;i++)for(let j=i+1;j<tot;j++)if(act[i]&&act[i]===act[j])av.push(`${link(ps[i])} y ${link(ps[j])} llevan los mismos activos principales.`);
 /* Activos exclusivos: solo si los productos comparten alguno; si no comparten ninguno, se dice una vez */
 if(act.filter(Boolean).length>1){const vc={};ps.forEach(p=>new Set(activosDe(p).map(norm)).forEach(a=>vc[a]=(vc[a]||0)+1));
  if(!Object.keys(vc).some(a=>vc[a]>1))av.push("No comparten ningún activo principal: actúan de forma distinta.");
  else ps.forEach(p=>{const a=activosDe(p),u=a.filter(x=>vc[norm(x)]===1);if(u.length&&u.length<a.length)av.push(`Solo ${link(p)} lleva ${esc(yLista(u.slice(0,4).map(lcFirst)))}${u.length>4?" y otros":""}.`)})}
 const bloque=(t,a)=>a.length?`<h3>${t}</h3><ul>${a.map(x=>x.startsWith("<li")?x:`<li>${x}</li>`).join("")}</ul>`:"";
 const cuerpo=lineas.length?`<ul class="cmpsi">${lineas.join("")}</ul>${difs.length?bloque("Además",difs):""}`:`<p>Según sus fichas, no hay diferencias claras de uso entre estos productos${difs.length?":":". Elige por formato, fragancia o preferencia del cliente."}</p>${difs.length?`<ul>${difs.join("")}</ul>`:""}`;
 return `<section class="box cmpres" aria-labelledby="cmpresh"><h2 id="cmpresh">Resumen: ¿cuál elegir?</h2>${cuerpo}${bloque("En común",comunTxt)}${bloque("Rutina posible",rut)}${bloque("A tener en cuenta",av)}</section>`;
}
function paginaComparar(){
 const ps=CMP.map(id=>D.prods.find(p=>p.id===id)).filter(Boolean),cab=crumbs([["Inicio",""],["Comparar productos"]])+`<h1>Comparar productos</h1>`;
 if(ps.length<2)return{t:"Comparar productos",nav:"",html:`${cab}<p class="empty">Elige al menos 2 productos (máximo ${CMAX}) con el botón <strong>«+ Comparar»</strong> de las tarjetas: en Todos los productos, en Elección de producto o en el buscador.${ps.length?`<br>Ahora tienes: <a href="#prod-${ps[0].id}">${esc(ps[0].name)}</a>.`:""}</p>`};
 const veces={};ps.forEach(p=>new Set(activosDe(p).map(norm)).forEach(a=>veces[a]=(veces[a]||0)+1));
 const d=k=>p=>p.d&&p.d[k]?esc(p.d[k]):"";
 const filas=[
  ["Marca y línea",p=>`${esc(B(p.brand).name)} · ${esc(lineNames(p).join(" / "))}`],
  ["En qué se diferencia",p=>p.d&&p.d.dif?`<strong>${esc(p.d.dif)}</strong>`:""],
  ["¿A qué paciente va dirigido?",d("paciente")],
  ["Tipo de producto",d("tipo")],
  ["Necesidad que cubre",d("necesidad")],
  ["Tipo de piel",p=>esc((p.sk||[]).map(t=>SKN[t]||t).join(", "))],
  ["Necesidades del catálogo",p=>esc(prodNeeds(p).map(t=>N(t)?N(t).name:t).join(" · "))],
  ["Cuándo",d("cuando")],
  ["Papel en la limpieza",p=>p.d&&p.d.limpieza?`<strong>${esc(p.d.limpieza)}</strong>`:""],
  ["Fotoprotección",d("solar")],
  ["Pauta diaria",d("pauta")],
  ["Activos principales",p=>{const a=activosDe(p);return a.length?`<ul class="cmpact">${a.map(x=>{const solo=ps.length>1&&veces[norm(x)]===1;return `<li${solo?' class="solo" title="Solo lo tiene este producto"':""}>${esc(x)}</li>`}).join("")}</ul>`:""}],
  ["Embarazo y lactancia",p=>esc(embarazoDe(p))],
  ["Interacciones",d("interacciones")],
  ["A tener en cuenta",p=>p.d?esc(p.d.nota||p.d.otras||""):""]
 ].map(([l,f])=>[l,ps.map(f)]).filter(([,v])=>v.some(Boolean));
 const igual=v=>v.every(x=>x===v[0]),nIg=filas.filter(([,v])=>igual(v)).length;
 const tabla=`<div class="cmpt"><table><thead><tr><th scope="col"><span class="sr">Característica</span></th>${ps.map(p=>`<th scope="col"><a href="#prod-${p.id}">${p.img?`<img src="${esc(p.img)}" alt="" width="120" height="120">`:""}<strong>${esc(p.name)}</strong></a><button type="button" class="cmpq" data-cmp="${p.id}" aria-label="Quitar ${esc(p.name)} de la comparación">Quitar</button></th>`).join("")}</tr></thead><tbody>${filas.map(([l,v])=>{const ig=igual(v);return ig&&CMPD?"":`<tr${ig?' class="igual"':""}><th scope="row">${l}${ig?`<span class="cmpig">Coincide</span>`:""}</th>${v.map(x=>`<td>${x||'<span class="nd">—</span>'}</td>`).join("")}</tr>`}).join("")}</tbody></table></div>`;
 return{t:"Comparar productos",nav:"",html:`${cab}<div class="cmpctl"><label class="tfop"><input type="checkbox" id="cmpdif"${CMPD?" checked":""}><span>Ocultar lo que coincide${nIg?` (${nIg})`:""}</span></label><button type="button" class="bcuenta" id="cmpclr">Vaciar comparación</button></div><p class="lead cmpley">Los activos <span class="solo">resaltados</span> solo los tiene ese producto. «—»: la ficha oficial no lo indica.</p>${tabla}${resumenComparar(ps)}`};
}
/* Barra inferior con los productos elegidos (no sale en la propia página de comparar) */
function pintaBarra(){
 let b=$("#cmpbar");if(!b){b=document.createElement("div");b.id="cmpbar";b.className="cmpbar";b.setAttribute("role","region");b.setAttribute("aria-label","Comparación");document.body.appendChild(b)}
 const ver=CMP.length>0&&location.hash!=="#comparar";b.hidden=!ver;document.body.classList.toggle("concmp",ver);if(!ver)return;
 b.innerHTML=`<div><span class="cmpths">${CMP.map(id=>{const p=D.prods.find(x=>x.id===id);return p&&p.img?`<img src="${esc(p.img)}" alt="${esc(p.name)}" title="${esc(p.name)}" width="40" height="40">`:""}).join("")}</span><span class="cmptx" role="status">${CMSG?esc(CMSG):CMP.length<2?"Elige otro producto para comparar":`${CMP.length} productos elegidos`}</span>${CMP.length>1?`<a class="bcuenta prim" href="#comparar">Comparar</a>`:""}<button type="button" class="bcuenta" id="cmpclr">Vaciar</button></div>`;
}
document.addEventListener("click",e=>{
 const t=e.target.closest&&e.target.closest("[data-cmp],#cmpclr");if(!t)return;
 if(t.id==="cmpclr")CMP=[];
 else{const id=t.dataset.cmp;if(CMP.includes(id))CMP=CMP.filter(x=>x!==id);else if(CMP.length>=CMAX){CMSG=`Máximo ${CMAX} productos: quita uno para añadir otro`;pintaBarra();setTimeout(()=>{CMSG="";pintaBarra()},3000);return}else CMP.push(id)}
 guardaCmp();
 if(location.hash==="#comparar"){render();return}
 /* En el resto de páginas solo se cambian los botones y la barra, para no cerrar los desplegables abiertos */
 document.querySelectorAll(".cmpb").forEach(b=>{const p=D.prods.find(x=>x.id===b.dataset.cmp);if(p)b.outerHTML=cmpBtn(p)});pintaBarra();
 const f=t.dataset&&t.dataset.cmp&&document.querySelector(`.cmpb[data-cmp="${t.dataset.cmp}"]`);if(f)f.focus();
});
/* PATOLOGÍAS → PRODUCTOS: cada patología enlaza con sus necesidades de «Elección de producto»
   y, cuando tiene expresión (re), lista los productos cuya ficha oficial la menciona, agrupados por marca. */
const PAT_REC={acne:{n:["acne","poros"]},atopica:{n:["atopica","seca"],re:/at[oó]pic|eczema|eccema/i},oncologia:{n:["cicatrices","rojeces"],re:/oncol[oó]g/i},pigmentacion:{n:["manchas"]},envejecimiento:{n:["arrugas","flacidez"]},rosacea:{n:["rojeces"],re:/ros[aá]cea|cuperosis/i},seborreica:{re:/seborreic|caspa/i},celulitis:{n:["corporal"],re:/celulitis/i}};
const recPat=x=>{const r=PAT_REC[x.id];if(!r)return "";const ns=(r.n||[]).filter(N);
 const ps=r.re?D.prods.filter(p=>p.d&&r.re.test([p.name,p.d.paciente,p.d.tipo,p.d.necesidad,p.d.nota].filter(Boolean).join(" "))):[],g=D.brands.map(b=>[b,ps.filter(p=>p.brand===b.id)]).filter(a=>a[1].length);
 return `<section class="box prec"><h2>Qué recomendar en el mostrador</h2>${ns.length?`<p>Necesidades relacionadas en Elección de producto:</p><ul class="chips">${ns.map(t=>`<li><a class="chip" href="#nec-${t}">${esc(N(t).name)}</a></li>`).join("")}</ul>`:""}${g.length?`<p>${n(ps.length,"producto")} cuya ficha oficial menciona esta patología:</p>${g.map(a=>`<details class="acc"><summary>${esc(a[0].name)}<span>${n(a[1].length,"producto")}</span></summary><ul class="grid">${a[1].map(prodMini).join("")}</ul></details>`).join("")}`:""}</section>`};
/* DERMO → COMPLEMENTOS: en la ficha de un producto de dermofarmacia se sugieren los complementos alimenticios
   cuya ficha habla de lo mismo (por palabras clave de cada necesidad). Como mucho 6. */
const SUPL_POR_NEC={manchas:/mancha|melasma|pigmentacion/,arrugas:/arruga|envejecimiento de la piel|piel.{0,40}colageno|colageno.{0,40}piel/,flacidez:/flacidez|firmeza de la piel|piel.{0,40}colageno|colageno.{0,40}piel/,acne:/acne|imperfecc|granos/,cabello:/cabello|caida|capilar|alopecia/,fotoproteccion:/solar|fotoprot|dano solar|bronceado/,seca:/piel seca|ceramid|hidratacion de la piel/,deshidratacion:/hidratacion de la piel|ceramid/,atopica:/piel atopica|ceramid/,rojeces:/rosacea|rojec/,apagada:/luminosidad de la piel|piel apagada/};
/* Ordena por número de necesidades en común; los complementos capilares solo salen si el producto es para el cabello */
const suplDe=p=>{if(esSupl(p))return [];const ns=prodNeeds(p),res=ns.map(t=>SUPL_POR_NEC[t]).filter(Boolean);if(!res.length)return [];const pelo=ns.includes("cabello");
 return D.prods.filter(esSupl).map(q=>{const t=q.d?norm([q.name,q.d.paciente,q.d.necesidad,q.d.tipo,...(q.d.claims||[])].filter(Boolean).join(" ")).replace(/sin manchas/g,""):"";return [q,!pelo&&/cabello|capilar|caida/.test(t)?0:res.filter(re=>re.test(t)).length]}).filter(a=>a[1]).sort((a,b)=>b[1]-a[1]).slice(0,6).map(a=>a[0])};
const complementosDe=p=>{const s=suplDe(p);return s.length?`<section class="box prec"><h2>Desde dentro: complementos relacionados</h2><p>Complementos alimenticios cuya ficha trata la misma necesidad. Consulta sus restricciones antes de recomendarlos.</p><ul class="grid">${s.map(prodMini).join("")}</ul></section>`:""};
/* ASISTENTE DE RUTINA (#rutina): con la necesidad, el tipo de piel, embarazo y marca propone una rutina
   de mañana y de noche (limpieza, sérum, contorno, crema y fotoprotección), con hasta 3 productos por paso.
   Prioriza la línea principal de la marca para esa necesidad, el tipo de piel concreto y el momento del día.
   En embarazo descarta lo que la ficha no recomienda y los retinoides. */
const RUT={n:"",s:"",e:"",b:""};
const RUT_NEC=()=>D.needs.filter(x=>x.area!=="supl"&&!x.tipo||x.id==="atopica");
function rutina(){
 const x=N(RUT.n),emb=RUT.e==="si",esp=RUT.s&&RUT.s!=="todos";
 const base=dermoProds().filter(p=>p.d&&(!RUT.b||p.brand===RUT.b)&&(!RUT.s||RUT.s==="todos"||(p.sk||[]).some(t=>t==="todas"||t===RUT.s))&&(!emb||(embCls(p)!=="no"&&!atrDe(p).c.includes("retinoide"))));
 const nota=p=>(prodNeeds(p).includes(RUT.n)?4:0)+(x&&!x.tipo&&lineaPrincipal(p,x)?3:0)+(esp&&(p.sk||[]).includes(RUT.s)?1:0)+(emb&&embCls(p)==="si"?2:0);
 const top=(f,m,extra)=>base.filter(p=>f(p)&&(!m||atrDe(p).m.includes(m))).map(p=>[p,nota(p)+(extra?extra(p):0)]).sort((a,b)=>b[1]-a[1]).slice(0,3).map(a=>a[0]);
 const tp=p=>norm(p.d.tipo||""),fo=p=>atrDe(p).f[0]||"";
 /* Pasos faciales: fuera lo de manos, labios, cabello, cuerpo y los tratamientos localizados */
 const facial=p=>!prodNeeds(p).some(t=>["manos","labios","cabello","maquillaje","autobronceado","fragancias"].includes(t))&&(!/corporal|cuerpo/.test(tp(p))||/rostro|cara|facial/.test(tp(p)))&&!/localizad|puntual|parche/.test(tp(p));
 const trata=p=>facial(p)&&prodNeeds(p).includes(RUT.n)&&!prodNeeds(p).some(t=>["limpieza","fotoproteccion","ojos"].includes(t));
 const pasos=m=>[
  ["Limpieza",top(p=>prodNeeds(p).includes("limpieza")&&!/exfol/i.test(p.d.limpieza||"")&&facial(p),m)],
  ["Sérum o tratamiento",top(p=>trata(p)&&fo(p)==="serum",m)],
  ["Contorno de ojos",top(p=>prodNeeds(p).includes("ojos")&&prodNeeds(p).includes(RUT.n),m)],
  ["Crema",top(p=>trata(p)&&["crema","gel","fluido","balsamo"].includes(fo(p))&&!/locion|tonico|esencia/.test(tp(p))&&!atrDe(p).c.includes("spf"),m)],
  ...(m==="dia"?[["Fotoprotección (último paso)",top(p=>prodNeeds(p).includes("fotoproteccion")&&facial(p)&&!/after|despues del sol|stick|autobronce/.test(tp(p)+" "+norm(p.name)),m,p=>/facial|rostro/.test(tp(p))&&!/cuerpo/.test(tp(p))?1:0)]]:[])
 ].filter(a=>a[1].length);
 const bloque=(t,m)=>{const ps=pasos(m);return `<section class="box rut"><h2>${t}</h2>${ps.length?`<ol class="rutpasos">${ps.map(([l,arr],i)=>`<li><h3>${i+1}. ${l}</h3><ul class="grid">${arr.map(prodMini).join("")}</ul></li>`).join("")}</ol>`:`<p class="empty">No hay productos que cumplan todo lo elegido.</p>`}</section>`};
 return `${bloque("Mañana","dia")}${bloque("Noche","noche")}<p class="lead rutnota">Cada paso muestra hasta 3 opciones, ordenadas por: producto de la línea principal para esta necesidad, tipo de piel concreto${emb?" y adecuado en embarazo según la ficha":""}. ${emb?"Se han quitado los productos que la ficha no recomienda en embarazo y los que llevan retinoides. ":""}Usa «+ Comparar» para decidir entre ellos.</p><p class="noprint"><button type="button" class="bcuenta prim" onclick="window.print()">Imprimir rutina</button></p>`;
}
function paginaRutina(){
 const sel=(id,lab,ph,opts,v)=>`<div class="rutq"><label for="${id}">${lab}</label><select id="${id}" data-rut="${id.slice(2)}"><option value="">${ph}</option>${opts.map(o=>`<option value="${esc(o[0])}"${v===o[0]?" selected":""}>${esc(o[1])}</option>`).join("")}</select></div>`;
 const form=`<div class="rutform">${sel("r-n","1. ¿Qué le preocupa?","Elige la necesidad…",RUT_NEC().map(x=>[x.id,x.name]),RUT.n)}${sel("r-s","2. Tipo de piel","Elige el tipo de piel…",SKS,RUT.s)}${sel("r-e","3. ¿Embarazo o lactancia?","No",[["si","Sí"]],RUT.e)}${sel("r-b","4. Marca (opcional)","Cualquier marca",D.brands.filter(b=>b.area!=="supl").map(b=>[b.id,b.name]),RUT.b)}</div>`;
 return{t:"Rutina",nav:"rutina",html:`${crumbs([["Inicio",""],["Rutina"]])}<h1>Asistente de rutina</h1><p class="lead">Responde a las preguntas y te propone una rutina de mañana y noche con productos del catálogo.</p>${form}${RUT.n&&RUT.s?rutina():`<p class="empty">Elige la necesidad y el tipo de piel para ver la rutina.</p>`}`};
}
/* INTERACCIONES CON MEDICAMENTOS (Complementos › Interacciones).
   No añade información: busca, en los textos de interacciones de cada ficha (lo que indica la marca y d.interCurso),
   las frases que nombran el grupo de medicamentos elegido (datos/medicamentos.js) o, si no hay grupo, el texto escrito. */
let MEDQ="";
const MEDG=(D.meds||[]).map(g=>Object.assign({rx:new RegExp(g.re,"i")},g));
const medGrupos=q=>{q=norm(q.trim());if(q.length<3)return[];return MEDG.filter(g=>[g.name].concat(g.alias).some(a=>{a=norm(a);return a.startsWith(q)||a.split(/\s+/).some(w=>w.startsWith(q))||(q.length>=5&&a.length>=4&&q.startsWith(a+" "))}))};
const frases=t=>t.split(/\.\s+(?=[A-ZÁÉÍÓÚÑ¿])/).map(s=>s.trim().replace(/\.?$/,"."));
const sevDe=s=>/no es una contraindicaci|motivo para recomendar|sin problemas/i.test(s)?"nota":/^no se han descrito/i.test(s)?"prec":/^no |\bno (tomar|combinar|recomendar|usar)|contraindicad|evitar|prohibici|no debe/i.test(s)?"evitar":"prec";
const SEVT={evitar:"Evitar",prec:"Precaución",nota:"Nota"};
const fuentesInter=p=>{const d=p.d||{},o=(d.interCurso||[]).map(x=>[x.c,x.t]);if(d.interacciones)o.push(["Lo que indica "+B(p.brand).name,d.interacciones]);return o};
const avisosMed=gs=>D.prods.map(p=>{const it=[],vis=new Set();fuentesInter(p).forEach(a=>frases(a[1]).forEach(s=>{if(!vis.has(s)&&gs.some(g=>g.rx.test(s))){vis.add(s);it.push({c:a[0],s,v:sevDe(s)})}}));return it.length?{p,it,v:it.some(x=>x.v==="evitar")?0:it.some(x=>x.v==="prec")?1:2}:null}).filter(Boolean).sort((a,b)=>a.v-b.v||a.p.name.localeCompare(b.p.name,"es"));
function paginaInter(id){
 const q=MEDQ.trim(),g0=MEDG.find(g=>g.id===id),gs=q?medGrupos(q):g0?[g0]:[];
 let res="";
 if(gs.length||(q&&norm(q).length>=4)){
  const libre=!gs.length,a=avisosMed(libre?[{rx:{test:s=>norm(s).includes(norm(q))}}]:gs);
  res=`<h2>${libre?`Textos que mencionan «${esc(q)}»`:gs.map(g=>esc(g.name)).join(" · ")}</h2>${libre?`<p class="medej">No es un grupo conocido: se busca la palabra tal cual.</p>`:`<p class="medej">${gs.map(g=>esc(g.ej)).join(" · ")}</p>`}`+
   (a.length?`<p class="lead" role="status">${n(a.length,"complemento")} con aviso.</p><ul class="medres">${a.map(x=>`<li class="box"><a class="medp" href="#prod-${x.p.id}">${x.p.img?`<img src="${esc(x.p.img)}" alt="" loading="lazy" width="64" height="64">`:`<i class="ph"></i>`}<span><strong>${esc(x.p.name)}</strong><span>${esc(B(x.p.brand).name)}</span></span></a><ul class="medav">${x.it.map(i=>`<li><span class="sev ${i.v}">${SEVT[i.v]}</span> <strong>${esc(i.c)}:</strong> ${esc(i.s)}</li>`).join("")}</ul></li>`).join("")}</ul>`
   :`<p class="empty" role="status">Ningún complemento del catálogo tiene descrita una interacción con este medicamento. Eso no garantiza que sea seguro: revisa la ficha del producto.</p>`);
 }else if(q)res=`<p class="empty" role="status">Escribe al menos 3 letras del medicamento o elige un grupo.</p>`;
 return{t:"Interacciones con medicamentos",nav:"sinter",html:`${crumbs([["Inicio",""],["Complementos","complementos"],["Interacciones"]])}<h1>Interacciones con medicamentos</h1><p class="lead">Escribe el medicamento que toma el paciente (marca o principio activo) o elige un grupo: verás qué complementos del catálogo evitar o vigilar, y por qué.</p><label class="medlab" for="med">Medicamento</label><input type="search" id="med" value="${esc(MEDQ)}" placeholder="Ej.: Sintrom, omeprazol, sertralina…" autocomplete="off">${res}<h2 class="medh">${gs.length?"Otros grupos":"Grupos de medicamentos"}</h2><ul class="chips medchips">${MEDG.map(g=>`<li><a class="chip" href="#sinter-${g.id}"${gs.includes(g)?' aria-current="true"':""}>${esc(g.name)}</a></li>`).join("")}</ul><p class="lead mednota">Solo aparecen los complementos cuya ficha describe una interacción con ese medicamento. Que un complemento no aparezca no garantiza que sea seguro; ante la duda, consultar con el médico.</p>`};
}
function page(h){
 if(h==="rutina")return paginaRutina();
 if(h==="sinter"||h.startsWith("sinter-"))return paginaInter(h.slice(7));
 if(h==="comparar")return paginaComparar();
 const i=h.indexOf("-"),k=i<0?h:h.slice(0,i),id=i<0?"":h.slice(i+1);
 if(k==="test"&&window.FORM){const r=FORM.page(id);if(r)return r}
 if(!h)return{t:"Catálogo de la farmacia",nav:"",html:`<h1>Catálogo de la farmacia</h1><p class="lead">Elige un área.</p><ul class="agrid">${areaDermo()}${areaSupl()}</ul>`};
 if(h==="dermo")return{t:"Dermofarmacia",nav:"dermo",html:`${crumbs([["Inicio",""],["Dermofarmacia"]])}<h1>Dermofarmacia</h1><p class="lead">${AREAS.dermo.lead}</p><ul class="grid">${dermoTiles()}</ul>`};
 if(h==="complementos"){const bs=D.brands.filter(esMarcaSupl),c=suplPorMarca().reduce((s,a)=>s+a[1].length,0),ns=needsSupl();return{t:"Complementos alimenticios",nav:"complementos",html:`${crumbs([["Inicio",""],["Complementos alimenticios"]])}<h1>Complementos alimenticios</h1><p class="lead">${AREAS.supl.lead}</p><ul class="grid">${tile("smarcas","Por marca","Marcas y productos.")}${tile("snec","Por necesidad","Según la necesidad del cliente.")}${tile("stodos","Todos los productos","Catálogo completo con filtros por marca y necesidad.")}${tile("sinter","Interacciones","Qué complementos evitar o vigilar según el medicamento que toma el paciente.")}</ul>`}}
 if(h==="smarcas"){const bs=D.brands.filter(esMarcaSupl),otros=suplPorMarca().filter(a=>!esMarcaSupl(a[0]));return{t:"Complementos por marca",nav:"smarcas",html:`${crumbs([["Inicio",""],["Complementos","complementos"],["Por marca"]])}<h1>Por marca</h1><p class="lead">Elige una marca.</p>${bs.length?`<ul class="grid">${bs.map(brandTile).join("")}</ul>`:`<p class="empty">Aún no hay marcas de complementos cargadas.</p>`}${otros.length?`<h2>Complementos de marcas de dermofarmacia</h2>${otros.map(a=>`<details class="acc"><summary>${esc(a[0].name)}<span>${n(a[1].length,"producto")}</span></summary><ul class="grid">${a[1].map(prodMini).join("")}</ul></details>`).join("")}`:""}`}}
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
 if(h==="todos")return paginaTodos("dermo");
 if(h==="stodos")return paginaTodos("supl");
 if(k==="nec"&&N(id)){const x=N(id),g=D.brands.map(b=>[b,D.prods.filter(p=>p.brand===b.id&&enEleccion(p,x)&&(x.sinPiel||ok(p)))]).filter(a=>a[1].length),lista=ps=>`<ul class="grid">${ps.map(prodMini).join("")}</ul>`,secciones=(b,ps)=>x.tipo?lista(ps):b.lines.filter(l=>ps.some(p=>lineaPrincipal(p,x)===l.id)).map(l=>`<h3><a href="#linea-${l.id}">Línea ${esc(l.name)}</a></h3>${lista(ps.filter(p=>lineaPrincipal(p,x)===l.id))}`).join("")+D.needs.filter(t=>t.tipo&&ps.some(p=>!lineaPrincipal(p,x)&&tipoDe(p,x)===t)).map(t=>`<h3><a href="#nec-${t.id}">${esc(t.name)}</a></h3>${lista(ps.filter(p=>!lineaPrincipal(p,x)&&tipoDe(p,x)===t))}`).join("");return{t:x.name,nav:"eleccion",html:`${crumbs([["Inicio",""],["Elección de producto","eleccion"],[x.name]])}<h1>${esc(x.name)}</h1>${x.c?`<p class="lead"><a href="#cosm-${x.c}">Ver guía</a></p>`:""}${x.sinPiel?"":`<label for="sk">Tu tipo de piel</label><select id="sk"><option value="">Selecciona tu tipo de piel…</option>${SKS.map(o=>`<option value="${o[0]}"${SK===o[0]?" selected":""}>${o[1]}</option>`).join("")}</select>`}<p class="lead" style="margin-top:8px;font-size:.9rem">${x.tipo?"Aparecen todos los productos de este tipo de cada marca; cada tarjeta indica su línea.":"Cada marca muestra su línea principal para esta necesidad y, aparte, sus contornos, limpiadores y fotoprotectores indicados para ella."}${x.sinPiel?"":" El tipo de piel es el que indica la ficha oficial de cada marca («todo tipo de piel» aparece en todas las opciones)."}</p>${!SK&&!x.sinPiel?`<p class="empty">Elige tu tipo de piel para ver los productos.</p>`:g.length?g.map(a=>`<details class="acc"><summary>${esc(a[0].name)}<span>${n(a[1].length,"producto")}</span></summary>${secciones(a[0],a[1])}</details>`).join(""):`<p class="empty">Aún no hay productos confirmados para este tipo de piel en esta necesidad.</p>`}`}}
 if(k==="marca"&&B(id)){const b=B(id);return{t:b.name,nav:navMarca(b),html:`${crumbs([...baseMarca(b),[b.name]])}<h1>${esc(b.name)}</h1><h2>Líneas</h2>${b.lines.length?`<ul class="grid">${b.lines.map(l=>lineTile(l,n(D.prods.filter(p=>inLine(p,l.id)).length,"producto"))).join("")}</ul>`:`<p class="empty">Esta marca aún no tiene líneas cargadas.</p>`}${b.area!=="supl"&&window.FORM?FORM.enlaceTema("marcas",b.id):""}`}}
 if(k==="linea"){const b=D.brands.find(b=>b.lines.some(l=>l.id===id));if(b){const l=b.lines.find(l=>l.id===id);return{t:l.name,nav:navMarca(b),html:`${crumbs([...baseMarca(b),[b.name,"marca-"+b.id],[l.name]])}<h1>${esc(l.name)}</h1><p class="lead">${esc(b.name)}${l.para?` · ${esc(l.para)}`:""}</p>${D.prods.some(p=>inLine(p,id))?`<ul class="pgrid">${D.prods.filter(p=>inLine(p,id)).map(prodTile).join("")}</ul>`:`<p class="empty">Esta línea aún no tiene productos cargados.</p>`}`}}}
 if(k==="pat"&&P(id)){const i=D.pats.findIndex(a=>a.id===id),x=D.pats[i],nx=D.pats[i+1];return{t:x.name,nav:"patologias",html:`${crumbs([["Inicio",""],["Patologías","patologias"],[x.name]])}<h1>${esc(x.name)}</h1><div class="box th">${md(x.t)}</div>${recPat(x)}${window.FORM?FORM.enlaceTema("patologias",x.id):""}${nx?`<p><a class="chip" href="#pat-${nx.id}">Siguiente: ${esc(nx.name)} →</a></p>`:""}`}}
 if(k==="prod"){const p=D.prods.find(p=>p.id===id);if(p){const b=B(p.brand);return{t:p.name,nav:navMarca(b),html:`${crumbs([...baseMarca(b),[b.name,"marca-"+b.id],[L(p.brand,lineIds(p)[0]),"linea-"+lineIds(p)[0]],[p.name]])}<h1>${esc(p.name)}</h1><p class="fcmp">${cmpBtn(p)}</p><div class="fgrid">${p.img?`<img class="fimg" src="${esc(p.img)}" alt="${esc(p.name)}" width="400" height="400">`:""}<div>${p.d?(p.d.pauta!==undefined?fichaSupl(p.d,b.name):prodFicha(p.d)):`<p class="empty">Ficha pendiente de completar.</p>`}<div class="box"><p><strong>Marca:</strong> <a href="#marca-${b.id}">${esc(b.name)}</a></p>${p.cn&&p.cn.length?`<p><strong>${p.cn.length>1?"Códigos nacionales":"Código nacional"}:</strong> ${p.cn.map(esc).join(", ")}</p>`:""}${p.ean&&p.ean.length?`<p><strong>${p.ean.length>1?"Códigos de barras":"Código de barras"}:</strong> ${p.ean.map(esc).join(", ")}</p>`:""}<p><strong>${lineIds(p).length>1?"Líneas":"Línea"}:</strong> ${lineIds(p).map(l=>`<a href="#linea-${l}">${esc(L(p.brand,l))}</a>`).join(", ")}</p>${prodNeeds(p).length?`<p><strong>Necesidades:</strong></p><ul class="chips">${prodNeeds(p).map(t=>`<li><a class="chip" href="#nec-${t}">${esc(N(t).name)}</a></li>`).join("")}</ul>`:""}</div></div></div>${complementosDe(p)}`}}}
 if(h==="buscar"){const q=Q.value.trim(),{r,bs,ps,fix}=buscar(q);
  /* Si lo buscado es un medicamento, enlace a sus interacciones con complementos */
  let mg=norm(q).length>=5?medGrupos(q):[];if(mg.length>3)mg=[];
  return{t:"Búsqueda",nav:"",html:`${crumbs([["Inicio",""],["Búsqueda"]])}<h1>Resultados</h1><p class="lead" role="status">${q?n(r.length+bs.length+ps.length+mg.length,"resultado"):"Escribe para buscar."}${fix.length?` · Buscando: ${esc(fix.join(", "))}`:""}</p><ul class="grid">${mg.map(g=>tile("sinter-"+g.id,"Interacciones: "+g.name,"Complementos a evitar o vigilar con este medicamento")).join("")}${bs.map(b=>tile("marca-"+b.id,b.name,"Marca")).join("")}${ps.map(x=>tile("pat-"+x.id,x.name,"Patología")).join("")}${r.map(prodCard).join("")}</ul>`}}
 return{t:"No encontrado",nav:"",html:`<h1>Página no encontrada</h1><p class="empty">El enlace no existe o el producto fue retirado.<br><a href="#">Volver al inicio</a></p>`};
}
let last="";
function render(){
 const h=location.hash.slice(1);if(h!==last){F="";if(h.startsWith("sinter-"))MEDQ=""}
 const p=page(h);M.innerHTML=p.html;document.title=p.t+" · Catálogo Farmacia";
 const area=NAV_AREA[p.nav]||"";
 $("#nav").innerHTML=[["","Inicio",!h],["dermo","Dermofarmacia",area==="dermo"],["complementos","Complementos",area==="supl"]].map(a=>`<a href="#${a[0]}"${a[2]?' aria-current="page"':""}>${a[1]}</a>`).join("");
 const sub=$("#sub"),secs=area==="dermo"?DERMO_SEC.map(s=>[s[0],s[0]==="eleccion"?"Elección":s[1]]):area==="supl"?SUPL_SEC:[];sub.hidden=!secs.length;sub.innerHTML=secs.length?`<div>${secs.map(s=>`<a href="#${s[0]}"${s[0]===p.nav?' aria-current="page"':""}>${s[1]}</a>`).join("")}</div>`:"";
 const sk=$("#sk");if(sk)sk.onchange=()=>{SK=sk.value;last=h;render();$("#sk").focus()};const f=$("#f");if(f)f.onchange=()=>{F=f.value;last=h;render();f.focus()};
 /* Al marcar una casilla se repinta la página conservando el scroll de cada lista y el foco en la casilla */
 /* Solo un desplegable abierto a la vez */
 document.querySelectorAll(".tfg").forEach(d=>d.ontoggle=()=>{TFO[d.dataset.g]=d.open;if(d.open)document.querySelectorAll(".tfg[open]").forEach(o=>{if(o!==d)o.open=false})});
 document.querySelectorAll("[data-tf]").forEach(c=>c.onchange=()=>{const k=c.dataset.tf,v=c.value;TF[k]=c.checked?TF[k].concat(v):TF[k].filter(x=>x!==v);
  const sc={};document.querySelectorAll(".tfg").forEach(d=>sc[d.dataset.g]=d.querySelector(".tfops").scrollTop);last=h;render();
  document.querySelectorAll(".tfg").forEach(d=>d.querySelector(".tfops").scrollTop=sc[d.dataset.g]||0);
  const nc=[...document.querySelectorAll("[data-tf]")].find(x=>x.dataset.tf===k&&x.value===v);if(nc)nc.focus()});
 const tfx=$("#tfx");if(tfx)tfx.onclick=()=>{Object.keys(TF).forEach(k=>TF[k]=[]);last=h;render();const c=$("[data-tf]");if(c)c.focus()};
 document.querySelectorAll("[data-rut]").forEach(s=>s.onchange=()=>{RUT[s.dataset.rut]=s.value;last=h;render();$("#"+s.id).focus()});
 const med=$("#med");if(med)med.oninput=()=>{MEDQ=med.value;last=h;render();const m=$("#med");m.focus();m.setSelectionRange(m.value.length,m.value.length)};
 const cd=$("#cmpdif");if(cd)cd.onchange=()=>{CMPD=cd.checked;last=h;render();$("#cmpdif").focus()};
 pintaBarra();
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
/* Desplegables de filtros: se cierran al pulsar fuera o con Escape */
const cerrarFiltros=()=>document.querySelectorAll(".tfg[open]").forEach(d=>d.open=false);
document.addEventListener("click",e=>{if(e.target.isConnected&&!e.target.closest(".tfg"))cerrarFiltros()});
document.addEventListener("keydown",e=>{const d=e.target.closest&&e.target.closest(".tfg[open]");if(e.key==="Escape"&&d){d.open=false;d.querySelector("summary").focus()}});
addEventListener("hashchange",()=>{Object.keys(TFO).forEach(k=>TFO[k]=false);render()});render();
