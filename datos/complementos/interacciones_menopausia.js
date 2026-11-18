/* INTERACCIONES CON MEDICAMENTOS SEGÚN EL CURSO DE MENOPAUSIA (Postgradum, Especialización en Salud Hormonal y Menopausia, 2025-2026)
   Fuente: carpeta «D:\menopausia» (temas M1-M8, masterclass y Guía Profesional de Suplementación en Menopausia), revisada en noviembre de 2026.
   Temas de donde sale cada interacción: M2.T2 (sueño), M2.T3 (ánimo), M3.T1 (osteoporosis), M3.T2 (síndrome metabólico),
   M5.T4 (rutinas «in»), M5.T5 (interacciones y precauciones), M6.T1 (sexualidad) y la Guía Profesional de Suplementación.
   Igual que interacciones_curso.js: va por COMPONENTE y se aplica a los complementos cargados que lo contienen.
   No incluido: vitamina E (el curso da riesgo por encima de 400 UI/día y ningún producto llega) y las precauciones que no son
   con medicamentos (hipotensión, insuficiencia renal, hipertiroidismo…). */
(function(){
const F = "Curso de menopausia Postgradum";
const I = {
 melatonina: {c:"Melatonina", t:"No combinarla con benzodiacepinas ni con antidepresivos ISRS sin supervisión."},
 triptofano: {c:"L-triptófano", t:"Combinado con antidepresivos ISRS o IRSN hay riesgo de síndrome serotoninérgico (agitación, temblores, taquicardia, sudoración)."},
 htp: {c:"5-hidroxitriptófano (5-HTP, de la griffonia)", t:"Evitarlo con antidepresivos ISRS o IMAO por riesgo de síndrome serotoninérgico."},
 azafran: {c:"Azafrán", t:"Posible interacción con antidepresivos ISRS o IRSN: como planta serotoninérgica, junto a ellos puede dar síndrome serotoninérgico."},
 pasiflora: {c:"Pasiflora", t:"Potencia el efecto de los sedantes."},
 melisa: {c:"Melisa", t:"Posible interacción con sedantes."},
 reishi: {c:"Reishi", t:"Puede bajar la tensión arterial; evitarlo si se toman anticoagulantes."},
 magnesio: {c:"Magnesio", t:"Precaución si se toman fármacos sedantes. Reduce la absorción de las tetraciclinas (antibióticos)."},
 calcio: {c:"Calcio", t:"Los inhibidores de la bomba de protones (omeprazol…) reducen su absorción; en esos pacientes es preferible el citrato de calcio."},
 curcuma: {c:"Cúrcuma", t:"Con anticoagulantes aumenta el riesgo de sangrado."},
 probiotico: {c:"Probióticos", t:"Con antibióticos, separar las tomas 2-3 horas."},
 isoflavonas: {c:"Isoflavonas de soja", t:"Posible antagonismo con el tamoxifeno y precaución con los inhibidores de la aromatasa; evitarlas si hay antecedentes de cáncer de mama, útero u ovario salvo que lo autorice el oncólogo. La soja puede reducir la absorción de la levotiroxina: separar al menos 4 horas y controlar la TSH."},
 sojaProt: {c:"Soja", t:"La soja (alimento o suplemento) puede reducir la absorción de la levotiroxina: separar al menos 4 horas y controlar la TSH."},
 cimicifuga: {c:"Cimicífuga", t:"Precaución si se toma tamoxifeno o inhibidores de la aromatasa; evitarla con antecedentes de cáncer de mama, útero u ovario salvo que lo autorice el oncólogo."},
 omega3: {c:"Omega 3 (EPA/DHA)", t:"Por encima de 3 g/día de EPA+DHA tiene efecto antiagregante: riesgo de sangrado con warfarina, heparina, aspirina o clopidogrel. No pasar de 1000 mg/día sin consultar al médico y suspenderlo antes de una cirugía."},
 vitD: {c:"Vitamina D", t:"Con diuréticos tiazídicos, riesgo de hipercalcemia. Los antiepilépticos (fenitoína, carbamazepina) aceleran su metabolismo y bajan sus niveles."},
 vitK2: {c:"Vitamina K2", t:"No combinarla con anticoagulantes tipo warfarina; si se toma, vigilar el INR y evitar cambios bruscos en la dosis."},
 cromo: {c:"Cromo", t:"Con antidiabéticos (hipoglucemiantes) puede potenciar su efecto."},
 ginseng: {c:"Ginseng (Panax ginseng)", t:"Potencia el efecto hipoglucemiante de la metformina. Posible interacción con anticoagulantes y ansiolíticos: no combinarlo con psicofármacos, antiepilépticos o anticoagulantes sin supervisión. Precaución en diabetes e hipertensión."},
 coq10: {c:"Coenzima Q10", t:"Puede bajar ligeramente la tensión: vigilar si se toman antihipertensivos. A dosis altas puede disminuir el efecto de la warfarina."}
};
const P = {
 melatonina: ["kob-neuro-sleep","kob-melatonin-l-tryptophan"],
 triptofano: ["kob-neuro-sleep","kob-w-balance","kob-melatonin-l-tryptophan","pure-cognitive-aminos"],
 htp: ["kob-kobhocalm","kob-neuro-sleep"],
 azafran: ["ivb-satisens","ivb-menomaster"],
 pasiflora: ["ivb-somnilove","kob-neuro-sleep"],
 melisa: ["ivb-somnilove","kob-neuro-sleep"],
 reishi: ["ivb-stress-off","kob-liposomal-vitamin-c"],
 magnesio: ["ivb-creamag","ivb-magnesio-total","kob-neuro-sleep","kob-trimagnesium","kob-magnesium-vitamin-b6","kob-vit-d3-k2","pure-all-in-one-multivitaminico","pure-mineral-650a","pure-sport","pure-anti-estres","pure-complejo-de-calcio","pure-magnesio-bisglicinato","pure-magnesio-citrato","fin-magnesium","fin-recovery","fin-condrostop","fin-collagen","fin-triple-magnesium","sol-magnesio-bisglicinato","sol-magnesio-citrato","sol-ester-c-efervescente","sol-golden-prime","sol-female-multiple","sol-male-multiple","sol-vm-2000"],
 calcio: ["pure-all-in-one-multivitaminico","pure-mineral-650a","pure-complejo-de-calcio","sol-golden-prime","sol-female-multiple","sol-male-multiple","sol-vm-2000"],
 curcuma: ["ivb-femmebalance","kob-curcumin-black-pepper","pure-thyroid-support-salud-hormonal","pure-arthro-aktiv","pure-curcumina","fin-condrostop"],
 probiotico: ["kob-kobhocalm","kob-pre-post-probiotic","pure-proflora-gi"],
 isoflavonas: ["ivb-menomaster"],
 sojaProt: ["ivb-proteina-vegana"],
 cimicifuga: ["kob-w-balance"],
 omega3: ["ivb-gestanatal","ivb-lactanatal","ivb-omega-3-dha","ivb-omega-3-epa","ivb-vegan-omega-3","kob-omega3","pure-one-omega","sol-omega-3-triple","sol-omega-369"],
 vitD: ["ivb-muscleguard","ivb-fertiup","ivb-gestanatal","ivb-lactanatal","ivb-d3-k2-spray","ivb-vitalnatal-woman","ivb-vitamina-d3k2","kob-w-balance","kob-vit-d3-k2","pure-piel-cabello-unas","pure-all-in-one-multivitaminico","pure-lipid-aktiv","pure-thyroid-support-salud-hormonal","pure-sport","pure-arthro-aktiv","pure-complejo-de-calcio","pure-pure-defense","pure-vitamina-d3","sol-d3-4000","sol-female-multiple","sol-male-multiple","sol-vm-2000"],
 vitK2: ["ivb-muscleguard","ivb-fertiup","ivb-gestanatal","ivb-lactanatal","ivb-d3-k2-spray","ivb-vitalnatal-woman","ivb-vitamina-d3k2","kob-vit-d3-k2"],
 cromo: ["ivb-gestanatal","ivb-lactanatal","ivb-metabolic-max","kob-kobhoglp","pure-all-in-one-multivitaminico","pure-lipid-aktiv","pure-mineral-650a","pure-sport","fin-termogenico","sol-male-multiple","sol-vm-2000"],
 ginseng: ["ivb-energy-up","kob-kobhoglp","pure-energy-extra"],
 coq10: ["ivb-fertiup","ivb-energy-up","ivb-lactanatal","ivb-anti-ox-global","ivb-vitalnatal-man","ivb-tyroenergy","kob-astaxanthin-coq10","kob-collagen-hyaluronic-acid","pure-piel-cabello-unas","pure-all-in-one-multivitaminico","pure-lipid-aktiv","pure-co-q10","pure-sport","pure-ubiquinol","pure-coq10-con-pqq"]
};
const byId = {};
D.prods.forEach(p => { byId[p.id] = p; });
Object.keys(P).forEach(k => P[k].forEach(id => {
  const p = byId[id];
  if (!p || !p.d) { if (window.console) console.warn("interacciones_menopausia: no existe", id); return; }
  (p.d.interCurso = p.d.interCurso || []).push({c:I[k].c, t:I[k].t, f:F});
}));
})();
