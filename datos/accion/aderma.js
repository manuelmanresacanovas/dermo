/* «Cómo actúa» de los productos de A-Derma.
   Fuente: activo principal y apartados «Beneficios» e «Ingredientes» de la ficha oficial de cada producto (aderma.es),
   completado con los mecanismos de las páginas de teoría (Cosméticos: niacinamida, emolientes, humectantes).
   Formato: id de producto → { i: resumen de cómo actúa, a: [[activo, qué hace], …] } */
(function(){
const AVENA = ["Extracto de plántulas de avena Rhealba®", "Activo de todos los productos A-Derma: reequilibra, calma y repara la piel frágil. A-Derma indica que actúa sobre las proteínas de defensa, de señalización y de cicatrización de la piel."];
const AVENA_EMO = ["Extracto de plántulas de avena Rhealba® (con BIOVECT)", "Reforzado con BIOVECT, un vector de origen natural: calma el picor, reduce las rojeces, espacia los brotes de irritación y ayuda a reequilibrar el microbioma."];
const B3 = ["Vitamina B3 (niacinamida)", "Refuerza la barrera cutánea: según la teoría, aumenta las ceramidas y la filagrina."];
const FIL = ["Filaxerina", "Junto con la vitamina B3 y el núcleo emoliente de la fórmula, reduce la sequedad y refuerza la barrera cutánea."];
const EMOL = ["Núcleo emoliente", "Suaviza y aporta lípidos a la piel seca (emolientes, según la teoría)."];
const A = {
"ad-exomega-aceite-limpiador": {i: "Aceite limpiador sin jabón: limpia la piel seca atópica sin tirantez ni sequedad y calma el picor, con los mismos activos que los emolientes Exomega Control.", a: [AVENA,
 ["Base limpiadora sin jabón", "Limpia con suavidad y protege de la tirantez y la sequedad; no pica en los ojos, según A-Derma."]]},
"ad-exomega-gel-2en1": {i: "Gel limpiador sin jabón y de pH fisiológico: limpia cuerpo, cara y cabello en un paso y calma el picor de la piel seca atópica.", a: [AVENA,
 ["Base limpiadora suave sin jabón (pH fisiológico)", "Limpia sin provocar escozor en los ojos; se puede usar en la costra láctea."]]},
"ad-exomega-bano": {i: "Tratamiento para el agua del baño: no limpia, sino que suaviza la piel y calma la irritación y el picor antes de dormir, y la prepara para el emoliente.", a: [AVENA,
 ["Filaxerina, vitamina B3 y glicerina", "Activos suaves e hidratantes que, con la avena, calman e hidratan la piel."]]},
"ad-exomega-leche": {i: "Emoliente de triple acción calmante con una aplicación al día: calma el picor y las rojeces, nutre y refuerza la barrera, y ayuda a reequilibrar el microbioma.", a: [AVENA_EMO, FIL, B3, EMOL]},
"ad-exomega-crema": {i: "Emoliente de triple acción calmante con una aplicación al día: calma el picor y las rojeces, nutre y refuerza la barrera, y ayuda a reequilibrar el microbioma.", a: [AVENA_EMO, FIL, B3, EMOL]},
"ad-exomega-balsamo": {i: "Emoliente de triple acción calmante con una aplicación al día, en bálsamo de textura ultrarrica: calma el picor y las rojeces, nutre y refuerza la barrera, y ayuda a reequilibrar el microbioma.", a: [AVENA_EMO, FIL, B3, EMOL]},
"ad-exomega-crema-noche": {i: "Emoliente de noche: suma a la avena Rhealba® un extracto de helicriso que actúa sobre las moléculas responsables del picor nocturno, para dormir mejor mientras se repara la barrera.", a: [AVENA,
 ["Extracto de helicriso (Helichrysum gymnocephalum)", "Planta de Madagascar con eficacia antipruriginosa: según A-Derma, actúa sobre las moléculas responsables de los picores nocturnos."],
 B3]},
"ad-epitheliale-ultra-repair": {i: "Crema reparadora con el complejo patentado Cicahyalumide®: hidrata y acelera la reparación de la piel debilitada, ayuda a reducir la apariencia de las marcas y calma las molestias.", a: [
 ["Cicahyalumide® (complejo patentado)", "Combina extracto de plántulas de avena Rhealba®, un dipéptido (alanil glutamina) y ácido hialurónico 16 veces más concentrado que en la crema anterior."],
 ["Ácido hialurónico", "Mantiene un nivel de humedad que favorece la reparación de la piel y reduce la aparición de marcas."],
 AVENA]}
};
D.prods.forEach(p => { if (A[p.id]) p.d.accion = A[p.id]; });
})();
