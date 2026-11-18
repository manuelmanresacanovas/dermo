/* «En qué se diferencia» de los productos de Kobho (formato y criterio: ver datos/diferencial/caudalie.js) */
(function(){
const F = {
/* Protocolos */
"kob-kobhocalm": "Para el estrés diario sin perder concentración: rhodiola y griffonia, con probióticos; 1 cápsula.",
"kob-kobhoglp": "Protocolo de pérdida de peso y grasa con berberina, en cápsulas más vial; lleva algo de cafeína.",
"kob-neuro-sleep": "Protocolo de sueño completo (vial + cápsula) con melatonina 1 mg, GABA, valeriana y pasiflora.",
"kob-trimagnesium": "Tres sales de magnesio (bisglicinato, malato y taurato) con D-ribosa para energía y músculo.",
"kob-kobhohair": "Vial bebible para la caída del cabello, con saw palmetto.",
"kob-w-balance": "Para la menopausia: sofocos, ánimo y energía; contiene jalea real.",
/* Fórmulas esenciales */
"kob-alpha-lipoic-acid": "Ácido R-lipoico: antioxidante que además ayuda a controlar el azúcar en sangre.",
"kob-curcumin-black-pepper": "Cúrcuma con pimienta negra para molestias articulares; también apoya la digestión.",
"kob-biotin-keratin": "La opción en cápsulas para cabello y uñas débiles, con queratina; KobhoHAIR es el vial.",
"kob-astaxanthin-coq10": "Perla antioxidante con astaxantina y CoQ10: piel y energía.",
"kob-magnesium-vitamin-b6": "Vial de magnesio con B6 para calambres y recuperación muscular.",
"kob-pre-post-probiotic": "Prebiótico, 19 cepas probióticas y postbiótico para hinchazón y tránsito irregular.",
"kob-collagen-hyaluronic-acid": "Vial de colágeno VERISOL® con hialurónico para firmeza e hidratación de la piel.",
"kob-omega3": "Omega-3 concentrado (720 mg de EPA y 480 mg de DHA) para corazón, cerebro y vista.",
"kob-trans-resveratrol-quercetin": "Resveratrol y quercetina: antioxidante y envejecimiento saludable, con apoyo cardiovascular.",
"kob-melatonin-l-tryptophan": "Comprimido bicapa con melatonina 1,9 mg y triptófano para dormirse y no despertarse.",
"kob-liposomal-vitamin-c": "Vitamina C liposomada con reishi para defensas, en 1 cápsula.",
"kob-vit-d3-k2": "Vial de vitamina D3 con K2 y magnesio para niveles bajos de vitamina D, huesos y defensas.",
/* Proteínas y deporte */
"kob-whey-protein-isolate": "Proteína de suero aislada (28 g por toma) para masa muscular y saciedad; contiene leche.",
"kob-vegan-protein-isolate": "La versión vegetal: proteína de guisante (26 g por toma), sin leche.",
"kob-creatine-plus": "Creatina (3 g) con arginina y ácido lipoico para fuerza y rendimiento."
};
D.prods.forEach(p => { if (F[p.id] && p.d) p.d.dif = F[p.id]; });
})();
