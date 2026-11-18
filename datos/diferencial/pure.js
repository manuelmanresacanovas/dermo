/* «En qué se diferencia» de los productos de Pure Encapsulations (formato y criterio: ver datos/diferencial/caudalie.js) */
(function(){
const F = {
/* Belleza */
"pure-acido-hialuronico": "Solo ácido hialurónico (70 mg) para la piel desde dentro; apto para veganos.",
"pure-resveratrol-extra": "Antioxidante con trans-resveratrol (100 mg) y polifenoles de vino tinto.",
"pure-piel-cabello-unas": "Fórmula completa para piel, cabello y uñas: 10 vitaminas, 5 minerales, biotina y zinc; lleva hierro.",
/* Bienestar diario */
"pure-all-in-one-multivitaminico": "Multivitamínico diario con 12 vitaminas y 8 minerales.",
"pure-b12-liquida": "Vitamina B12 activa en gotas (500 µg), para quien prefiere líquido.",
"pure-bromelina": "Enzima de piña (bromelina) que ayuda a fraccionar las proteínas.",
"pure-l-arginina": "Aminoácido L-arginina (1120 mg) para un aporte extra.",
"pure-selenio": "Selenio (200 µg) en la forma que el cuerpo almacena: defensas, tiroides, cabello y uñas.",
"pure-vitamina-b12": "Vitamina B12 activa (500 µg) en cápsula; la versión líquida es B12 Líquida.",
/* Cardiovascular */
"pure-lipid-aktiv": "Para el colesterol: fitoesteroles (800 mg) con CoQ10.",
"pure-one-omega": "Omega-3 muy concentrado: 1000 mg de EPA y DHA en una sola perla.",
"pure-thyroid-support-salud-hormonal": "Para la función tiroidea: selenio, yodo y plantas ayurvédicas como ashwagandha.",
/* Deporte y energía */
"pure-b-complex": "Todas las vitaminas B en forma activa y a dosis altas para el cansancio.",
"pure-co-q10": "Coenzima Q10 (120 mg, ubiquinona) para la energía celular.",
"pure-energy-extra": "Tónico de plantas para la energía y la vitalidad: ashwagandha, ginseng y rodiola.",
"pure-mineral-650a": "Solo minerales: 10 minerales de amplio espectro, sin vitaminas.",
"pure-sport": "Micronutrientes para deportistas, con CoQ10, vitamina D3 y taurina.",
"pure-ubiquinol": "CoQ10 en su forma reducida y activa (ubiquinol, 100 mg).",
/* Detox */
"pure-detox-nrf2": "Detox con brotes de brócoli (sulforafano), glutatión y resveratrol.",
"pure-same": "SAMe en cápsula gastrorresistente para el detox hepático.",
/* Digestivo */
"pure-betaina-hcl-pepsina": "Para digerir las proteínas: betaína HCl y pepsina (de origen porcino).",
"pure-enzimas-digestivas-plus": "Enzimas para digestiones pesadas, con lactasa para la intolerancia a la lactosa.",
"pure-l-glutamina": "L-glutamina de rápida absorción para intestino y músculo.",
"pure-poly-preflora": "Prebióticos en polvo con granada y arándano.",
"pure-proflora-gi": "Probiótico de 6 cepas (10.000 millones de UFC) para la microbiota.",
/* Estado de ánimo */
"pure-anti-estres": "Para estrés con cansancio: vitaminas B, ginseng siberiano y L-tirosina.",
"pure-ashwagandha": "Ashwagandha sola (1000 mg) para la tensión nerviosa.",
"pure-gaba": "GABA (700 mg) para el sistema nervioso.",
"pure-rhodiola-rosea": "Rodiola sola para el estrés emocional o el esfuerzo físico.",
/* Huesos, músculos y articulaciones */
"pure-arthro-aktiv": "Fórmula articular completa con colágeno UC-II®, glucosamina y cúrcuma; contiene crustáceos.",
"pure-complejo-de-calcio": "Para los huesos: calcio y otros 4 minerales con vitamina D3.",
"pure-curcumina": "Cúrcuma al 95 % con pimienta negra para absorberla mejor.",
"pure-glucosamina-condroitina": "Glucosamina, condroitina y MSM a dosis altas (1200 mg cada una); contiene crustáceos.",
"pure-magnesio-bisglicinato": "Magnesio bisglicinato (240 mg) enfocado a la función muscular.",
"pure-magnesio-citrato": "Magnesio citrato (150 mg) en 1 cápsula al día: cansancio, músculos y huesos.",
/* Mujer */
"pure-aceite-de-onagra": "Aceite de onagra rico en GLA (omega 6) para el bienestar de la mujer.",
"pure-extracto-de-arandanos": "Arándano rojo concentrado (CranMax®).",
"pure-folato-400": "Folato activo (400 µg) para buscar el embarazo y durante el embarazo.",
"pure-hierro-c": "Hierro con vitamina C para absorberlo mejor, para el cansancio por falta de hierro.",
/* Salud ocular */
"pure-vision": "Para la vista, por ejemplo con mucho uso de pantallas: luteína, zeaxantina, vitaminas y zinc.",
"pure-vitamina-carotenoides": "Vitamina A con luteína, zeaxantina y astaxantina para la visión; lleva vitamina A a dosis alta.",
/* Sistema cognitivo */
"pure-cognitive-aminos": "Cinco aminoácidos para la demanda cognitiva; contiene fenilalanina.",
"pure-coq10-con-pqq": "CoQ10 con PQQ para la energía de las células y el cerebro.",
"pure-ginkgo-plus": "Ginkgo con vitaminas B y zinc para la función cognitiva.",
/* Soporte inmune */
"pure-l-lisina": "L-lisina (800 mg), aminoácido esencial.",
"pure-pure-defense": "Defensas completas: EpiCor®, NAC, vitaminas C y D, zinc y saúco; contiene levadura.",
"pure-vitamina-c-1000": "Vitamina C 1000 mg sola para defensas y colágeno.",
"pure-vitamina-d3": "Vitamina D3 en gotas (1000 UI por gota) para huesos y defensas.",
"pure-zinc-15mg": "Zinc picolinato (15 mg) para defensas y protección antioxidante."
};
D.prods.forEach(p => { if (F[p.id] && p.d) p.d.dif = F[p.id]; });
})();
