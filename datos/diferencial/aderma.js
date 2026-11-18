/* «En qué se diferencia» de los productos de A-Derma (formato y criterio: ver datos/diferencial/caudalie.js) */
(function(){
const F = {
/* Exomega: higiene */
"ad-exomega-aceite-limpiador": "Limpiador en ACEITE sin jabón para la piel atópica de toda la familia; no pica en los ojos.",
"ad-exomega-gel-2en1": "Limpiador en GEL 2 en 1: cuerpo, cara y cabello en un paso; sirve para la costra láctea.",
"ad-exomega-bano": "No limpia: se echa al agua del baño por la noche para calmar el picor antes del emoliente.",
/* Exomega: emolientes (misma fórmula base, cambia la textura) */
"ad-exomega-leche": "Emoliente antipicor en LECHE (loción); sin perfume.",
"ad-exomega-crema": "Emoliente antipicor en CREMA no grasa y de rápida absorción, para vestirse enseguida; sin perfume.",
"ad-exomega-balsamo": "Emoliente antipicor en BÁLSAMO de textura ultrarrica y no pegajosa; sin perfume.",
"ad-exomega-crema-noche": "Emoliente de NOCHE con helicriso, para el picor que no deja dormir; sin perfume.",
/* Epitheliale */
"ad-epitheliale-ultra-repair": "Repara la piel dañada y ayuda a evitar marcas tras peeling, láser, heridas superficiales o tatuajes."
};
D.prods.forEach(p => { if (F[p.id] && p.d) p.d.dif = F[p.id]; });
})();
