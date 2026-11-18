/* INTERACCIONES CON MEDICAMENTOS SEGÚN EL CURSO SARALEGUI 2023 (formación interna de la farmacia)
   Fuente: carpeta «D:\curso saralegui2023» (módulos 1, 2 y 3), revisada en noviembre de 2026.
   Cada interacción va ligada al COMPONENTE que la produce. Se aplica a los complementos cargados que contienen ese componente.
   No es información de la marca: en la ficha se muestra aparte, como «Según el curso Saralegui 2023».
   Criterios:
   - Vitamina E: solo productos con 70 mg o más (el curso trata la vitamina E «sola: 70 mg o más»).
   - Rhodiola: el curso dice que no se han descrito interacciones, pero da precauciones con Sintrom e insulina.
   - Hongos medicinales: el curso lo indica para una mezcla de hongos (reishi, shiitake, maitake, agaricus, poria);
     se aplica a los productos con reishi. El cordyceps de Energy UP no está en esa lista y no se incluye.
   - No se ha usado: la diapositiva de Flexiplus («no consumir con anticoagulantes») porque no dice qué ingrediente lo causa,
     ni la tabla de activos para diabéticos/hipertensos del módulo de pérdida de peso, que no se lee bien. */
(function(){
const I = {
 triptofano: {c:"L-triptófano", t:"No tomarlo con antidepresivos ISRS (citalopram, fluoxetina, paroxetina, sertralina), IRSN (venlafaxina, duloxetina), bupropión, tricíclicos (amitriptilina, nortriptilina) e IMAO (isocarboxazida); con medicamentos para la migraña (carbamazepina, ácido valproico y triptanes como almotriptán o sumatriptán); con analgésicos opioides (tramadol, codeína, fentanilo, oxicodona) y con litio. Riesgo de síndrome serotoninérgico. Las drogas como anfetaminas, LSD, éxtasis o cocaína tienen el mismo riesgo."},
 htp: {c:"5-hidroxitriptófano (5-HTP, de la griffonia)", t:"Las mismas prohibiciones que el triptófano (ISRS, IRSN, bupropión, tricíclicos, IMAO, carbamazepina, ácido valproico, triptanes, opioides y litio, por riesgo de síndrome serotoninérgico) y además las benzodiacepinas."},
 melatonina: {c:"Melatonina", t:"Aumentan su concentración en sangre: fluvoxamina (Dumirox), cimetidina, estrógenos y quinolonas. La disminuyen: carbamazepina y rifampicina. Puede potenciar el efecto de las benzodiacepinas, el zolpidem y la zopiclona. Precaución con antidepresivos ISRS e IMAO."},
 fenilalanina: {c:"DL-fenilalanina", t:"Contraindicada con antipsicóticos y con levodopa (puede interferir en su absorción). Precaución con antidepresivos ISRS e IMAO."},
 ginseng: {c:"Ginseng (Panax ginseng)", t:"Potencia la acción antiagregante de los salicilatos (ácido acetilsalicílico) y de los anticoagulantes, con riesgo de hemorragias. Interacciona con la digoxina y con los IMAO. En diabéticos con insulina puede bajar la glucosa (ajustar la dosis). Suspenderlo 7 días antes de una operación."},
 rhodiola: {c:"Rhodiola rosea", t:"No se han descrito interacciones, pero hay que tener precaución con Sintrom (acenocumarol) y en diabéticos insulinodependientes, y suspenderla 7 días antes de una operación."},
 ashwagandha: {c:"Ashwagandha", t:"Contraindicada con benzodiacepinas (por su efecto GABAérgico)."},
 vitD: {c:"Vitamina D", t:"No recomendarla a pacientes que toman digoxina o Sintrom (acenocumarol)."},
 vitK2: {c:"Vitamina K2", t:"Puede interaccionar con los anticoagulantes."},
 hongos: {c:"Reishi", t:"Contraindicado con medicación inmunosupresora y antirretroviral."},
 cromo: {c:"Cromo", t:"Los antiácidos, los inhibidores de la bomba de protones (omeprazol…), los antihistamínicos H2 (cimetidina, ranitidina), los AINE y los betabloqueantes modifican su absorción. No usar en diabetes tipo 1 ni en personas que se ponen insulina. Con metformina, sin problemas."},
 cafeina: {c:"Cafeína", t:"Interacciona con anfetaminas, efedrina, adenosina, carbamazepina, cimetidina, clozapina, dipiridamol, disulfiram, diuréticos (furosemida, hidroclorotiazida, clorotiazida), estrógenos, etosuximida, felbamato, flutamida, fluvoxamina, litio, agonistas beta-adrenérgicos, IMAO, anticoagulantes y antiplaquetarios, pentobarbital, teofilina, valproato, verapamilo, quinolonas, fluconazol, antidiabéticos, metoxaleno, terbinafina, tiagabina y ticlopidina."},
 teverde: {c:"Té verde", t:"Potencia la hiperexcitabilidad de los IMAO y de los antidepresivos ISRS (fluoxetina, paroxetina, sertralina, fluvoxamina, citalopram). Por la bajada de potasio que puede producir, potencia los efectos y la toxicidad de los digitálicos (digoxina). Precaución con el ácido acetilsalicílico."},
 omega3: {c:"Omega 3 (EPA/DHA)", t:"Usar con precaución en pacientes con anticoagulantes o con trastornos hemorrágicos. No pasar de 5 g al día."},
 vitE: {c:"Vitamina E (dosis alta)", t:"Aumenta el riesgo de sangrado con anticoagulantes o antiplaquetarios. Interacciona con los medicamentos que se metabolizan por el citocromo P450 y con la quimioterapia."},
 coq10: {c:"Coenzima Q10", t:"Las estatinas reducen la producción de coenzima Q10 del propio organismo: es un motivo para recomendarla, no una contraindicación."}
};
const P = {
 triptofano: ["kob-neuro-sleep","kob-w-balance","kob-melatonin-l-tryptophan","pure-cognitive-aminos"],
 htp: ["kob-kobhocalm","kob-neuro-sleep"],
 melatonina: ["kob-neuro-sleep","kob-melatonin-l-tryptophan"],
 fenilalanina: ["pure-cognitive-aminos"],
 ginseng: ["ivb-energy-up","kob-kobhoglp","pure-energy-extra"],
 rhodiola: ["ivb-energy-up","ivb-tyroenergy","kob-kobhocalm","pure-energy-extra","pure-rhodiola-rosea"],
 ashwagandha: ["kob-kobhocalm","kob-neuro-sleep","pure-thyroid-support-salud-hormonal","pure-energy-extra","pure-ashwagandha","sol-ashwagandha"],
 vitD: ["ivb-muscleguard","ivb-fertiup","ivb-gestanatal","ivb-lactanatal","ivb-d3-k2-spray","ivb-vitalnatal-woman","ivb-vitamina-d3k2","kob-w-balance","kob-vit-d3-k2","pure-piel-cabello-unas","pure-all-in-one-multivitaminico","pure-lipid-aktiv","pure-thyroid-support-salud-hormonal","pure-sport","pure-arthro-aktiv","pure-complejo-de-calcio","pure-pure-defense","pure-vitamina-d3","sol-d3-4000","sol-female-multiple","sol-male-multiple","sol-vm-2000"],
 vitK2: ["ivb-muscleguard","ivb-fertiup","ivb-gestanatal","ivb-lactanatal","ivb-d3-k2-spray","ivb-vitalnatal-woman","ivb-vitamina-d3k2","kob-vit-d3-k2"],
 hongos: ["ivb-stress-off","kob-liposomal-vitamin-c"],
 cromo: ["ivb-gestanatal","ivb-lactanatal","ivb-metabolic-max","kob-kobhoglp","pure-all-in-one-multivitaminico","pure-lipid-aktiv","pure-mineral-650a","pure-sport","fin-termogenico","sol-male-multiple","sol-vm-2000"],
 cafeina: ["kob-kobhoglp","kob-creatine-plus","fin-caffeine"],
 teverde: ["kob-kobhoglp","kob-melatonin-l-tryptophan","kob-creatine-plus","pure-piel-cabello-unas"],
 omega3: ["ivb-gestanatal","ivb-lactanatal","ivb-omega-3-dha","ivb-omega-3-epa","ivb-vegan-omega-3","kob-omega3","pure-one-omega","sol-omega-3-triple","sol-omega-369"],
 vitE: ["pure-vision","ivb-vitalnatal-man"],
 coq10: ["ivb-fertiup","ivb-energy-up","ivb-lactanatal","ivb-anti-ox-global","ivb-vitalnatal-man","ivb-tyroenergy","kob-astaxanthin-coq10","kob-collagen-hyaluronic-acid","pure-piel-cabello-unas","pure-all-in-one-multivitaminico","pure-lipid-aktiv","pure-co-q10","pure-sport","pure-ubiquinol","pure-coq10-con-pqq"]
};
const byId = {};
D.prods.forEach(p => { byId[p.id] = p; });
Object.keys(P).forEach(k => P[k].forEach(id => {
  const p = byId[id];
  if (!p || !p.d) { if (window.console) console.warn("interacciones_curso: no existe", id); return; }
  (p.d.interCurso = p.d.interCurso || []).push({c:I[k].c, t:I[k].t, f:"Curso Saralegui 2023"});
}));
})();
