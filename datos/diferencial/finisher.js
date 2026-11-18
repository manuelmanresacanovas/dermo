/* «En qué se diferencia» de los productos de Finisher (formato y criterio: ver datos/diferencial/caudalie.js) */
(function(){
const F = {
"fin-intensity": "Gel para ANTES del ejercicio: energía rápida, sin cafeína; hasta 3 al día.",
"fin-endurance": "Gel para DURANTE el ejercicio: energía rápida y prolongada (Palatinose™), sin cafeína.",
"fin-caffeine": "El gel con cafeína (100 mg), antes o durante el ejercicio; máximo 2 al día.",
"fin-long-distance": "El gel con más hidratos (30 g) para pruebas largas o muy intensas.",
"fin-magnesium": "Gel de magnesio (250 mg) para la función muscular durante el ejercicio; casi sin hidratos.",
"fin-recovery": "Para DESPUÉS del ejercicio: sobre de recuperación con Pycnogenol® y minerales.",
"fin-creatine": "Creatina pura (Creapure®) en polvo, 3 g al día.",
"fin-bcaa": "Aminoácidos ramificados para mantener la masa muscular, antes y después de entrenar.",
"fin-condrostop": "Fórmula articular completa (colágeno Fortigel®, glucosamina, condroitina) para el cartílago y el dolor articular.",
"fin-collagen": "Colágeno hidrolizado (10 g) con magnesio para huesos, cartílagos y músculo; sin azúcar.",
"fin-vitamina-c": "Vitamina C 1000 mg con bioflavonoides de naranja para defensas y cansancio; solo adultos.",
"fin-triple-magnesium": "Tres formas de magnesio con vitamina B6 para el cansancio, músculos y sistema nervioso; apto para veganos.",
"fin-termogenico": "Para controlar el peso con ejercicio: L-carnitina, sinefrina y forskolina."
};
D.prods.forEach(p => { if (F[p.id] && p.d) p.d.dif = F[p.id]; });
})();
