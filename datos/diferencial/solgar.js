/* «En qué se diferencia» de los productos de Solgar (formato y criterio: ver datos/diferencial/caudalie.js) */
(function(){
const F = {
/* Vitaminas */
"sol-ester-c-plus": "Vitamina C 1000 mg NO ácida (Ester-C®) en comprimido, para estómagos sensibles; no en embarazo, lactancia ni niños.",
"sol-ester-c-efervescente": "Vitamina C no ácida en sobre efervescente de naranja, con vitaminas B, zinc y magnesio: defensas y energía.",
"sol-vitamina-c-1000": "Vitamina C 1000 mg clásica (ácido ascórbico) en cápsula; si sienta mal al estómago, Ester-C® Plus.",
"sol-vitamina-a": "Vitamina A sola (5000 UI) para defensas y vista; no en el embarazo salvo indicación médica.",
"sol-d3-4000": "Vitamina D3 a dosis alta (4000 UI) en 1 cápsula para reponer niveles bajos; vegetariana, no vegana.",
"sol-b12": "Vitamina B12 (metilcobalamina 1000 µg) sublingual o masticable sabor cereza: veganos y quien no traga bien.",
"sol-b-complex-c": "Todas las vitaminas B con vitamina C en 1 comprimido para el cansancio por ritmo de vida ajetreado.",
"sol-folato": "Folato activo (Metafolin®, 400 µg) listo para usar: preconcepción y embarazo.",
/* Multinutrientes */
"sol-female-multiple": "Multivitamínico para la MUJER en edad fértil, con hierro bisglicinato; 1 comprimido.",
"sol-male-multiple": "Multivitamínico para el HOMBRE: zinc para la testosterona y selenio para la espermatogénesis; sin hierro.",
"sol-vm-2000": "Multivitamínico de ALTA potencia con hierro y aminoácidos para el cansancio; contiene soja; no en embarazo ni lactancia.",
/* Minerales */
"sol-magnesio-bisglicinato": "Magnesio bisglicinato (240 mg) enfocado al sistema nervioso y al ánimo; el mejor tolerado.",
"sol-magnesio-citrato": "Magnesio citrato (250 mg) en POLVO, para energía y músculo sin tragar comprimidos.",
"sol-zinc": "Zinc quelado (22 mg) de fácil absorción: defensas, piel, cabello y uñas.",
"sol-selenio": "Selenio 100 µg SIN levadura: tiroides, cabello y uñas, defensas.",
/* Omegas */
"sol-omega-3-triple": "Omega-3 de pescado concentrado (EPA y DHA): corazón, cerebro y vista con 2 perlas.",
"sol-omega-369": "Mezcla de omega 3, 6 y 9 (pescado, lino y borraja); 3 perlas al día.",
"sol-primula": "Aceite de onagra (1300 mg) rico en GLA para el bienestar de la mujer.",
/* Aminoácidos y botánicos */
"sol-l-lisina": "L-lisina sola (1000 mg), aminoácido esencial; tomarla alejada de las comidas.",
"sol-ashwagandha": "Ashwagandha Shoden® de alta potencia en 1 cápsula para estrés, descanso y relajación.",
/* Belleza */
"sol-hialuronico-colageno": "Colágeno tipo II con ácido hialurónico (BioCell Collagen II®) y vitamina C para la piel.",
"sol-pelo-piel-unas": "Para pelo, piel y uñas: biotina, zinc, cobre y vitamina C con MSM; 100 % vegano.",
/* Movilidad */
"sol-golden-prime": "Creatina con calcio, magnesio y colágeno para mayores activos: músculo, huesos y articulaciones; en sobre."
};
D.prods.forEach(p => { if (F[p.id] && p.d) p.d.dif = F[p.id]; });
})();
