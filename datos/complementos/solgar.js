/* SOLGAR (complementos alimenticios)
   Fuente: web oficial solgar.es (fichas guardadas por la farmacia en fuentes/solgar/, con los desplegables abiertos), noviembre de 2026.
   Solo se cargan los 23 productos que vende la farmacia; el envase es el del stock de la farmacia.
   Las líneas son categorías oficiales de la web de Solgar (por tipo de producto; Belleza y Huesos, articulaciones y músculos por necesidad).
   La web de Solgar NO publica la tabla nutricional (cantidades por dosis): en «composición» van las cantidades que la propia web
   cita en el texto y la lista de ingredientes. Donde no hay cantidades, se dice.
   Embarazo y lactancia: casi todas las fichas dicen «Si está embarazada, en período de lactancia, sigue algún tratamiento médico
   o padece alguna enfermedad, consulte con su especialista antes de tomar este producto»; se recoge tal cual.
   Ficha de complemento: ver datos/complementos/ivb.js. */
D.brands.push({
 "id": "solgar", "name": "Solgar", "area": "supl", "web": "https://www.solgar.es",
 "lines": [
  {"id": "sol-vitaminas", "name": "Complejos vitamínicos y vitaminas", "para": "Vitaminas solas o en complejo: C, A, D3, B12, grupo B y folato"},
  {"id": "sol-multi", "name": "Multinutrientes", "para": "Multivitamínicos y minerales para la mujer, el hombre y el día a día"},
  {"id": "sol-minerales", "name": "Minerales", "para": "Magnesio, zinc y selenio"},
  {"id": "sol-omegas", "name": "Ácidos grasos y Omegas", "para": "Omega 3, omega 3-6-9 y aceite de onagra"},
  {"id": "sol-amino", "name": "Aminoácidos", "para": "Aminoácidos esenciales"},
  {"id": "sol-botanicos", "name": "Botánicos", "para": "Extractos de plantas"},
  {"id": "sol-belleza", "name": "Belleza", "para": "Piel, cabello y uñas desde dentro"},
  {"id": "sol-movilidad", "name": "Huesos, articulaciones y músculos", "para": "Movilidad y envejecimiento activo"}
 ]
});
(function(){
const ESP = "Solgar pide consultar con el especialista antes de tomarlo.";
const TRAT = "Si se sigue algún tratamiento médico o se padece alguna enfermedad, Solgar pide consultar con el especialista antes de tomarlo. No especifica medicamentos.";
const TRAG = "Tragar con ayuda de agua u otra bebida.";
D.prods.push(
/* ---------- COMPLEJOS VITAMÍNICOS Y VITAMINAS ---------- */
{"id":"sol-ester-c-plus","name":"Ester-C® Plus 1000 mg Vitamina C","img":"imagenes/solgar/sol-ester-c-plus.webp","brand":"solgar","line":"sol-vitaminas","n":["s-defensas","s-antiox","s-vitaminas"],"d":{
 "paciente":"Adultos que quieren apoyar sus defensas, deportistas que buscan un plus de vitamina C y personas que prefieren una vitamina C no ácida.",
 "tipo":"Complemento alimenticio en comprimidos (vitamina C Ester-C®, no ácida). Apto para veganos.",
 "necesidad":"Defensas con una vitamina C no ácida (pH neutro), mejor tolerada que otras presentaciones de vitamina C.",
 "claims":["1000 mg de vitamina C no ácida por comprimido, con acerola, bioflavonoides cítricos, rutina y escaramujo.","Según Solgar, se concentra en mayor cantidad en las células que una vitamina C estándar a las 24 horas y permanece más tiempo en el organismo.","La vitamina C contribuye al funcionamiento normal del sistema inmunitario, también durante el ejercicio físico intenso y después de este.","Mejora la absorción del hierro, protege las células frente al daño oxidativo y contribuye a la formación normal de colágeno para la piel."],
 "compTitulo":"Composición (la web de Solgar no publica la tabla nutricional)","composicion":["Vitamina C (Ester-C®, L-ascorbato cálcico): 1000 mg por comprimido.","Ingredientes: vitamina C (Ester-C®, L-ascorbato cálcico); complejo de bioflavonoides cítricos; celulosa microcristalina, fosfato dicálcico, hidroxipropilcelulosa; dióxido de silicio, ácido esteárico y estearato magnésico vegetales; rutina (flor de Sophora japonica); goma de celulosa; escaramujo en polvo; extracto de acerola (4:1); hidroxipropilmetilcelulosa y glicerina vegetal."],
 "pauta":"Adultos: 1 comprimido al día.","toma":"Preferentemente con las comidas. "+TRAG,"envase":"60 comprimidos.",
 "embarazo":"No recomendado: Solgar indica que no debe ser consumido por mujeres embarazadas.","lactancia":"No recomendado: Solgar indica que no debe ser consumido durante la lactancia.","interacciones":TRAT,
 "otras":"No debe ser consumido por niños. Si aparecen reacciones adversas, dejar de tomarlo e informar al médico. Sin azúcares ni gluten; sin almidón, levadura, trigo, soja ni lácteos. Apto para veganos."}},
{"id":"sol-ester-c-efervescente","name":"Ester-C® Plus Vitamina C Efervescente","img":"imagenes/solgar/sol-ester-c-efervescente.webp","brand":"solgar","line":"sol-vitaminas","n":["s-defensas","s-energia","s-deporte","s-vitaminas"],"d":{
 "paciente":"Adultos que quieren apoyar sus defensas, personas que hacen deporte y quienes no toleran bien la vitamina C convencional y prefieren tomarla en bebida.",
 "tipo":"Complemento alimenticio en sobres efervescentes para disolver en agua (sabor naranja). Apto para veganos.",
 "necesidad":"Defensas y energía: vitamina C no ácida con vitaminas del grupo B, zinc y magnesio, en bebida.",
 "claims":["1000 mg de vitamina C Ester-C® no ácida por sobre, que minimiza posibles molestias gastrointestinales.","La vitamina C contribuye al funcionamiento normal del sistema inmunitario, también durante y después del ejercicio físico intenso, y ayuda a disminuir el cansancio y la fatiga.","Las vitaminas B1, B2, B6, B12, niacina y ácido pantoténico contribuyen al metabolismo energético normal.","El magnesio contribuye al equilibrio electrolítico; el zinc, a la función cognitiva y al sistema inmunitario."],
 "compTitulo":"Composición (la web de Solgar no publica la tabla nutricional)","composicion":["Vitamina C (Ester-C®, L-ascorbato cálcico): 1000 mg por sobre.","Ingredientes: fructosa; vitamina C (Ester-C®); ácido málico y ácido cítrico; maltodextrina; potasio, sodio, magnesio, calcio y fósforo; aromas de naranja; dióxido de silicio; glucósidos de esteviol (estevia); betacaroteno; vitamina B12; zinc; vitamina B6; niacina; manganeso; ácido pantoténico; vitamina B2; vitamina B1; ácido fólico."],
 "pauta":"Adultos: 1 sobre al día.","toma":"Disolver el sobre en 150 ml de agua, remover y tomarlo con las comidas.","envase":"Cajas de 7 y de 21 sobres (10,6 g).",
 "embarazo":ESP,"lactancia":ESP,"interacciones":TRAT,
 "otras":"Lleva fructosa y edulcorante (estevia). Sin cafeína. Sin gluten, trigo, lácteos, soja ni levadura. Apto para veganos."}},
{"id":"sol-vitamina-c-1000","name":"Vitamina C 1000 mg","img":"imagenes/solgar/sol-vitamina-c-1000.webp","brand":"solgar","line":"sol-vitaminas","n":["s-defensas","s-antiox","s-vitaminas"],"d":{
 "paciente":"Adultos que quieren apoyar sus defensas o buscan un plus de vitamina C.",
 "tipo":"Complemento alimenticio en cápsulas vegetales (ácido L-ascórbico). Apto para veganos.",
 "necesidad":"Defensas y colágeno con la forma de vitamina C más conocida (ácido L-ascórbico).",
 "claims":["1000 mg de vitamina C por cápsula.","Contribuye al mantenimiento del sistema inmunitario en condiciones normales.","Mejora la absorción del hierro y protege las células frente al daño oxidativo.","Contribuye a la formación normal de colágeno para el funcionamiento normal de la piel."],
 "compTitulo":"Composición (la web de Solgar no publica la tabla nutricional)","composicion":["Vitamina C (ácido L-ascórbico): 1000 mg por cápsula.","Ingredientes: vitamina C (ácido L-ascórbico); cápsula vegetal (hidroxipropilmetilcelulosa); estearato magnésico vegetal; etilcelulosa."],
 "pauta":"Adultos: 1 cápsula al día.","toma":"Preferentemente con las comidas. "+TRAG,"envase":"100 cápsulas vegetales.",
 "embarazo":ESP,"lactancia":ESP,"interacciones":TRAT,
 "otras":"Sin azúcares ni gluten; sin levadura, trigo, soja ni lácteos. Apto para veganos."}},
{"id":"sol-vitamina-a","name":"Vitamina A «Seca» 5000 UI","img":"imagenes/solgar/sol-vitamina-a.webp","brand":"solgar","line":"sol-vitaminas","n":["s-defensas","s-vitaminas"],"d":{
 "paciente":"Adultos que quieren apoyar su visión o su sistema inmunitario.",
 "tipo":"Complemento alimenticio en comprimidos (palmitato de retinilo). Apto para veganos.",
 "necesidad":"Vitamina A para defensas, visión, piel y mucosas.",
 "claims":["5000 UI de vitamina A por comprimido, con vitamina C para protegerla de la oxidación.","La vitamina A contribuye al funcionamiento normal del sistema inmunitario.","Contribuye al mantenimiento de la visión, la piel y las mucosas en condiciones normales."],
 "compTitulo":"Composición (la web de Solgar no publica la tabla nutricional)","composicion":["Vitamina A (palmitato de retinilo): 5000 UI por comprimido.","Ingredientes: fosfato dicálcico, celulosa microcristalina, goma arábiga; vitamina C (ácido L-ascórbico); sacarosa; estearato magnésico vegetal, dióxido de silicio; almidón de maíz; vitamina A (palmitato de retinilo); goma de celulosa."],
 "pauta":"Adultos: 1 comprimido al día.","toma":"Preferentemente con las comidas.","envase":"100 comprimidos.",
 "embarazo":"No recomendado: contiene vitamina A. Solgar indica que no debe tomarse si se está embarazada o es probable que se vaya a estar, salvo que lo recomiende el médico.","lactancia":ESP,"interacciones":TRAT,
 "otras":"Lleva sacarosa. Sin gluten; sin levadura, trigo, soja ni lácteos. Apto para veganos."}},
{"id":"sol-d3-4000","name":"Vitamina D3 4000 UI","img":"imagenes/solgar/sol-d3-4000.webp","brand":"solgar","line":"sol-vitaminas","n":["s-vitaminas","s-defensas","s-articular"],"d":{
 "paciente":"Adultos que quieren subir sus niveles de vitamina D de forma más rápida o apoyar su sistema inmunitario.",
 "tipo":"Complemento alimenticio en cápsulas vegetales (colecalciferol de lanolina). Apto para vegetarianos.",
 "necesidad":"Vitamina D a dosis alta (4000 UI) para reponer niveles: defensas, huesos y músculos.",
 "claims":["4000 UI (100 µg) de vitamina D3 por cápsula, la forma de vitamina D que mejor procesa el organismo, según Solgar.","La vitamina D contribuye al funcionamiento normal del sistema inmunitario y de los músculos.","Contribuye al mantenimiento de los huesos y los dientes y a la absorción y utilización normal del calcio."],
 "compTitulo":"Composición (la web de Solgar no publica la tabla nutricional)","composicion":["Vitamina D3 (colecalciferol): 4000 UI (100 µg) por cápsula.","Ingredientes: celulosa microcristalina, maltodextrina, etilcelulosa; cápsula vegetal (hidroxipropilmetilcelulosa); estearato magnésico vegetal; vitamina D3 (colecalciferol)."],
 "pauta":"Adultos: 1 cápsula al día.","toma":"Preferentemente con las comidas. "+TRAG,"envase":"60 cápsulas vegetales.",
 "embarazo":ESP,"lactancia":ESP,"interacciones":TRAT,
 "otras":"La vitamina D3 se obtiene de la lanolina: apta para vegetarianos, no para veganos. Sin gluten; sin almidón, trigo, lácteos, soja ni levadura."}},
{"id":"sol-b12","name":"Metilcobalamina (Vitamina B12) 1000 µg","img":"imagenes/solgar/sol-b12.webp","brand":"solgar","line":"sol-vitaminas","n":["s-energia","s-vitaminas"],"d":{
 "paciente":"Adultos con dieta pobre en vitamina B12 (como la vegana), o que quieren apoyar la formación de glóbulos rojos o su sistema nervioso.",
 "tipo":"Complemento alimenticio en comprimidos sublinguales o masticables (sabor cereza). Apto para veganos.",
 "necesidad":"Vitamina B12 a dosis alta (metilcobalamina) para el cansancio, los glóbulos rojos y la dieta vegana.",
 "claims":["1000 µg de vitamina B12 (metilcobalamina) por comprimido.","Se puede dejar disolver bajo la lengua, masticar o tragar: puede ir bien a quien le cuesta tragar.","La vitamina B12 contribuye al metabolismo energético, a la formación de glóbulos rojos y ayuda a disminuir el cansancio y la fatiga.","Contribuye al funcionamiento normal del sistema inmunitario y del sistema nervioso y a la función psicológica."],
 "compTitulo":"Composición (la web de Solgar no publica la tabla nutricional)","composicion":["Vitamina B12 (metilcobalamina): 1000 µg por comprimido.","Ingredientes: manitol, maltodextrina, goma arábiga; ácido esteárico y estearato magnésico vegetales; goma de celulosa; aroma de cereza; vitamina B12 (metilcobalamina)."],
 "pauta":"Adultos: 1 comprimido al día.","toma":"Preferentemente con las comidas. Dejarlo disolver entre la mejilla y la encía o bajo la lengua; también se puede masticar o tragar entero.","envase":"30 comprimidos.",
 "embarazo":ESP,"lactancia":ESP,"interacciones":TRAT,
 "otras":"Sin gluten; sin almidón, levadura, trigo, soja ni lácteos. Apto para veganos."}},
{"id":"sol-b-complex-c","name":"Vitamina B-Complex con Vitamina C","img":"imagenes/solgar/sol-b-complex-c.webp","brand":"solgar","line":"sol-vitaminas","n":["s-energia","s-vitaminas","s-defensas"],"d":{
 "paciente":"Adultos con un ritmo de vida ajetreado que quieren apoyar sus niveles de energía.",
 "tipo":"Complemento alimenticio en comprimidos. Apto para veganos.",
 "necesidad":"Energía y cansancio: todas las vitaminas del grupo B junto con vitamina C.",
 "claims":["Todas las vitaminas del grupo B con vitamina C añadida.","Las vitaminas B6, B12 y C, el ácido pantoténico, la biotina, la niacina, la riboflavina y la tiamina contribuyen al metabolismo energético normal.","Las vitaminas B6 y B12, la niacina, la riboflavina y el ácido pantoténico ayudan a disminuir el cansancio y la fatiga.","Las vitaminas B6, B12 y C y el ácido fólico contribuyen al funcionamiento normal del sistema inmunitario."],
 "compTitulo":"Ingredientes (la web de Solgar no publica la tabla nutricional ni las cantidades)","composicion":["Vitamina C (ácido L-ascórbico); ácido pantoténico; inositol; niacina; colina; tiamina (B1); vitamina B6; riboflavina (B2); biotina; ácido fólico; vitamina B12 (cianocobalamina).","Mezcla de plantas: kelp, alfalfa, acerola, perejil, escaramujo y berro.","Excipientes: celulosa microcristalina, hidroxipropilmetilcelulosa, estearato magnésico vegetal, dióxido de silicio, ácido esteárico vegetal, goma de celulosa, glicerina vegetal, cera carnaúba y manitol."],
 "pauta":"Adultos: 1 comprimido al día.","toma":"Preferentemente con las comidas. "+TRAG,"envase":"100 comprimidos.",
 "embarazo":ESP,"lactancia":ESP,"interacciones":TRAT,
 "otras":"Lleva kelp (alga). El color y el aspecto pueden variar con el tiempo por sus ingredientes. Sin gluten; sin almidón, levadura, trigo, soja ni lácteos. Apto para veganos."}},
{"id":"sol-folato","name":"Folato 400 µg (Metafolin®)","img":"imagenes/solgar/sol-folato.webp","brand":"solgar","line":"sol-vitaminas","n":["s-mujer","s-vitaminas"],"d":{
 "paciente":"Mujeres en la preconcepción y el embarazo, y adultos que buscan una vitamina B9 lista para que la use el organismo.",
 "tipo":"Complemento alimenticio en comprimidos (L-metilfolato cálcico, Metafolin®). Apto para veganos.",
 "necesidad":"Ácido fólico en su forma activa (folato): preconcepción, embarazo, homocisteína y glóbulos rojos.",
 "claims":["400 µg de folato por comprimido como L-metilfolato: la forma activa de la vitamina B9, lista para que la use el organismo.","Los folatos contribuyen al crecimiento de los tejidos maternos durante el embarazo.","Contribuyen al metabolismo normal de la homocisteína y a la formación normal de células sanguíneas.","Contribuyen a la función psicológica y al sistema inmunitario, y ayudan a disminuir el cansancio y la fatiga."],
 "compTitulo":"Composición (la web de Solgar no publica la tabla nutricional)","composicion":["Folato (L-metilfolato cálcico, Metafolin®): 400 µg por comprimido.","Ingredientes: manitol, celulosa microcristalina; ácido esteárico vegetal, dióxido de silicio, estearato de magnesio vegetal; goma de celulosa reticulada; folato (L-metilfolato cálcico como Metafolin®)."],
 "pauta":"Adultos: 1 comprimido al día.","toma":"Preferentemente con las comidas. "+TRAG,"envase":"50 comprimidos.",
 "embarazo":"Solgar lo indica como apoyo durante la preconcepción y el embarazo; también pide consultar con el especialista antes de tomarlo.","lactancia":ESP,"interacciones":TRAT,
 "otras":"Tomado en exceso puede tener efecto laxante (lleva manitol). Sin gluten ni azúcares; sin trigo, almidón, lácteos, soja ni levadura. Apto para veganos."}},

/* ---------- MULTINUTRIENTES ---------- */
{"id":"sol-female-multiple","name":"Female Múltiple","img":"imagenes/solgar/sol-female-multiple.webp","brand":"solgar","line":"sol-multi","n":["s-vitaminas","s-energia","s-mujer"],"d":{
 "paciente":"Mujeres en edad fértil, con vida activa, que quieren reforzar su energía o cuidar huesos y músculos.",
 "tipo":"Complemento alimenticio en comprimidos (multivitamínico y mineral para la mujer). Apto para veganos.",
 "necesidad":"Multivitamínico de la mujer en edad fértil: energía, cansancio, huesos y músculos, con hierro.",
 "claims":["Más de 20 nutrientes adaptados a la mujer en edad fértil.","Con hierro bisglicinato, formulado para absorberse bien sin irritar el estómago ni estreñir, según Solgar.","El zinc contribuye a la fertilidad y la reproducción normales.","Vitaminas del grupo B, C, hierro y magnesio ayudan a disminuir el cansancio y la fatiga; las vitaminas C, D y K, el magnesio, el manganeso, el calcio y el zinc contribuyen al mantenimiento de los huesos."],
 "compTitulo":"Composición (la web de Solgar no publica la tabla nutricional)","composicion":["Según los beneficios que cita la web: vitaminas B6, B12, C, D, E y K, ácido pantoténico, folatos, biotina, tiamina, niacina, riboflavina, calcio, yodo, cobre, hierro (bisglicinato), magnesio, manganeso, selenio y zinc.","La lista de ingredientes publicada en la web está incompleta (solo cita celulosa microcristalina, hidroxipropilmetilcelulosa, ácido alfa-lipoico y estearato magnésico): no se pueden dar las cantidades."],
 "pauta":"Adultos: 1 comprimido al día.","toma":"Preferentemente con las comidas. "+TRAG,"envase":"60 comprimidos.",
 "embarazo":ESP,"lactancia":ESP,"interacciones":TRAT,
 "otras":"Lleva hierro: la sobredosis accidental de hierro puede ser mortal en niños menores de 6 años; guardarlo fuera de su alcance. El color y el aspecto pueden variar con el tiempo. Sin gluten ni azúcares; sin levadura, trigo ni lácteos. Apto para veganos."}},
{"id":"sol-male-multiple","name":"Male Múltiple","img":"imagenes/solgar/sol-male-multiple.webp","brand":"solgar","line":"sol-multi","n":["s-vitaminas","s-energia"],"d":{
 "paciente":"Hombres con vida activa que buscan un refuerzo para su energía y su bienestar diario.",
 "tipo":"Complemento alimenticio en comprimidos (multivitamínico y mineral para el hombre). Apto para veganos.",
 "necesidad":"Multivitamínico del hombre: energía, sistema nervioso, testosterona y espermatogénesis.",
 "claims":["Más de 20 nutrientes adaptados al hombre.","El zinc contribuye al sistema inmunitario y al mantenimiento de niveles normales de testosterona; el selenio, a la espermatogénesis normal.","Vitaminas del grupo B, C, magnesio, calcio, yodo y cobre contribuyen al metabolismo energético normal.","La vitamina C contribuye al sistema inmunitario durante y después del ejercicio físico intenso; el magnesio, al funcionamiento de los músculos."],
 "compTitulo":"Ingredientes (la web de Solgar no publica la tabla nutricional ni las cantidades)","composicion":["Vitamina D2: 400 UI (ergocalciferol), la única cantidad que da la web.","Minerales: calcio (carbonato, citrato, bisglicinato), magnesio (óxido, citrato, bisglicinato), zinc, selenio (L-selenometionina), cobre, manganeso, yodo y cromo (picolinato).","Vitaminas: C, E, ácido pantoténico, tiamina (B1), riboflavina (B2), niacina (B3), biotina, A (betacaroteno), B6, ácido fólico y B12 (cianocobalamina).","Otros: colina, inositol, bioflavonoides cítricos y mezcla de carotenoides (luteína, zeaxantina)."],
 "pauta":"Adultos: 1 comprimido al día.","toma":"Preferentemente con las comidas. "+TRAG,"envase":"60 comprimidos.",
 "embarazo":ESP,"lactancia":ESP,"interacciones":TRAT,
 "otras":"Sin azúcares ni gluten; sin levadura. Apto para veganos."}},
{"id":"sol-vm-2000","name":"VM-2000®","img":"imagenes/solgar/sol-vm-2000.webp","brand":"solgar","line":"sol-multi","n":["s-energia","s-vitaminas","s-deporte"],"d":{
 "paciente":"Adultos con un ritmo de vida intenso (trabajo, estrés, gimnasio) que quieren mantener la energía y reducir el cansancio.",
 "tipo":"Complemento alimenticio en comprimidos (multivitamínico y multimineral de alta potencia con aminoácidos). Apto para veganos.",
 "necesidad":"Multivitamínico de alta potencia para el cansancio y la fatiga, con hierro, minerales quelados y aminoácidos.",
 "claims":["Fórmula multinutriente de alta potencia con minerales quelados y aminoácidos (ornitina, taurina y glutatión).","Con hierro bisglicinato, que minimiza la irritación gastrointestinal y el estreñimiento de otras formas de hierro, según Solgar.","El hierro y las vitaminas del grupo B ayudan a disminuir el cansancio y la fatiga; el hierro contribuye a la formación de glóbulos rojos y hemoglobina.","La vitamina C contribuye al sistema inmunitario durante y después del ejercicio intenso; las vitaminas C y E, el cobre y el zinc protegen las células del daño oxidativo."],
 "compTitulo":"Ingredientes (la web de Solgar no publica la tabla nutricional ni las cantidades)","composicion":["Minerales: calcio, magnesio, hierro (bisglicinato), zinc, manganeso, cobre, yodo, cromo (picolinato) y selenio.","Vitaminas: C, E, tiamina (B1), ácido pantoténico (B5), niacina (B3), riboflavina (B2), B6, betacaroteno, ácido fólico, B12, biotina y D2.","Otros: proteína de soja aislada, lecitina de soja, colina, inositol, betaína clorhidrato, L-ornitina, taurina, L-glutatión y mezcla de carotenoides."],
 "pauta":"Adultos: 2 comprimidos al día.","toma":"Preferentemente con las comidas. "+TRAG,"envase":"30 comprimidos.",
 "embarazo":"No recomendado: Solgar indica que no debe ser consumido por mujeres embarazadas.","lactancia":"No recomendado: Solgar indica que no debe ser consumido durante la lactancia.","interacciones":TRAT,
 "otras":"No debe ser consumido por niños. Lleva hierro: la sobredosis accidental puede ser mortal en menores de 6 años. Tomado a largo plazo, la vitamina B6 de la dosis diaria puede dar un ligero hormigueo y entumecimiento. Contiene soja. Sin azúcares ni gluten; sin levadura, trigo ni lácteos. Apto para veganos."}},

/* ---------- MINERALES ---------- */
{"id":"sol-magnesio-bisglicinato","name":"Magnesio Bisglicinato","img":"imagenes/solgar/sol-magnesio-bisglicinato.webp","brand":"solgar","line":"sol-minerales","n":["s-sueno","s-energia","s-vitaminas"],"d":{
 "paciente":"Adultos que quieren apoyar su sistema nervioso y su ánimo, con fatiga mental o física, o que buscan un magnesio que les siente bien.",
 "tipo":"Complemento alimenticio en cápsulas vegetales (100 % bisglicinato de magnesio). Apto para veganos.",
 "necesidad":"Magnesio para el sistema nervioso, el equilibrio psicológico y el cansancio, en la sal mejor tolerada.",
 "claims":["240 mg de magnesio por dosis diaria (2 cápsulas), 100 % en forma de bisglicinato.","Según Solgar, alta biodisponibilidad y menos molestias digestivas que otras sales de magnesio.","El magnesio contribuye a la función psicológica normal y al funcionamiento normal del sistema nervioso.","Ayuda a disminuir el cansancio y la fatiga."],
 "compTitulo":"Composición (la web de Solgar no publica la tabla nutricional)","composicion":["Magnesio (bisglicinato de magnesio): 240 mg por 2 cápsulas.","Ingredientes: magnesio (bisglicinato de magnesio); cápsula (hidroxipropilmetilcelulosa); palmitato de L-ascorbilo."],
 "pauta":"Adultos: 2 cápsulas al día.","toma":"Preferentemente con una comida. "+TRAG,"envase":"60 cápsulas vegetales.",
 "embarazo":ESP,"lactancia":ESP,"interacciones":TRAT,
 "otras":"Sin gluten. Apto para veganos."}},
{"id":"sol-magnesio-citrato","name":"Magnesio Citrato en Polvo","img":"imagenes/solgar/sol-magnesio-citrato.webp","brand":"solgar","line":"sol-minerales","n":["s-energia","s-deporte","s-articular","s-vitaminas"],"d":{
 "paciente":"Personas activas y deportistas, o quienes buscan energía diaria y prefieren no tomar comprimidos.",
 "tipo":"Complemento alimenticio en polvo para disolver (citrato de magnesio). Apto para veganos.",
 "necesidad":"Magnesio para la energía y la función muscular, en polvo.",
 "claims":["250 mg de magnesio elemental por cacito raso, en forma de citrato, de alta biodisponibilidad.","El magnesio contribuye al metabolismo energético normal y ayuda a disminuir el cansancio y la fatiga.","Contribuye al funcionamiento normal de los músculos.","Se mezcla con agua o con la bebida que se prefiera."],
 "compTitulo":"Composición (la web de Solgar no publica la tabla nutricional)","composicion":["Magnesio (citrato de magnesio): 250 mg por cacito raso.","Ingredientes: citrato de magnesio."],
 "pauta":"Adultos: 1 cacito raso una vez al día.","toma":"Disolverlo en agua u otra bebida.","envase":"Frasco de vidrio de 108 g.",
 "embarazo":ESP,"lactancia":ESP,"interacciones":TRAT,
 "otras":"Puede contener trazas de apio. Sin gluten, lácteos, soja, trigo, levadura, colorantes ni aromas. Apto para veganos."}},
{"id":"sol-zinc","name":"Zinc Quelado","img":"imagenes/solgar/sol-zinc.webp","brand":"solgar","line":"sol-minerales","n":["s-defensas","s-piel","s-vitaminas"],"d":{
 "paciente":"Adultos que quieren apoyar sus defensas o la salud de la piel, el cabello y las uñas.",
 "tipo":"Complemento alimenticio en comprimidos (bisglicinato de zinc). Apto para veganos.",
 "necesidad":"Zinc de fácil absorción para defensas, piel, cabello y uñas.",
 "claims":["22 mg de zinc elemental por comprimido, quelado con glicina para absorberse mejor que otras sales de zinc, según Solgar.","Contribuye al funcionamiento normal del sistema inmunitario y a la protección de las células frente al daño oxidativo.","Contribuye al mantenimiento de la piel, el cabello, las uñas y los huesos.","Contribuye a la fertilidad y la reproducción normales y a la función cognitiva normal."],
 "compTitulo":"Composición (la web de Solgar no publica la tabla nutricional)","composicion":["Zinc (bisglicinato): 22 mg por comprimido.","Ingredientes: celulosa microcristalina, fosfato dicálcico, ácido cítrico; zinc (bisglicinato); goma de celulosa; dióxido de silicio, estearato de magnesio y ácido esteárico vegetales."],
 "pauta":"Adultos: 1 comprimido al día.","toma":"Preferentemente con las comidas. "+TRAG,"envase":"100 comprimidos.",
 "embarazo":ESP,"lactancia":ESP,"interacciones":TRAT,
 "otras":"Sin azúcares ni gluten; sin trigo, almidón, lácteos, soja ni levadura. Apto para veganos."}},
{"id":"sol-selenio","name":"Selenio 100 µg (sin levadura)","img":"imagenes/solgar/sol-selenio.webp","brand":"solgar","line":"sol-minerales","n":["s-defensas","s-antiox","s-piel"],"d":{
 "paciente":"Adultos que quieren cuidar el cabello y las uñas, la función tiroidea o las defensas; hombres que quieren apoyar la producción de espermatozoides; quien busca un selenio sin levadura.",
 "tipo":"Complemento alimenticio en comprimidos (L-seleniometionina, sin levadura). Apto para veganos.",
 "necesidad":"Selenio orgánico sin levadura: tiroides, cabello y uñas, defensas y protección antioxidante.",
 "claims":["100 µg de selenio por comprimido como seleniometionina, una forma orgánica de alta biodisponibilidad.","Sin levadura: adecuado para quien no quiere levaduras en su dieta.","El selenio contribuye a la función tiroidea normal, al mantenimiento del cabello y las uñas y al sistema inmunitario.","Contribuye a la espermatogénesis normal y a la protección de las células frente al daño oxidativo."],
 "compTitulo":"Composición (la web de Solgar no publica la tabla nutricional)","composicion":["Selenio (L-seleniometionina): 100 µg por comprimido.","Ingredientes: fosfato dicálcico, celulosa microcristalina; L-seleniometionina; estearato magnésico vegetal, dióxido de silicio; goma de celulosa."],
 "pauta":"Adultos: 1 o 2 comprimidos al día.","toma":"Preferentemente con las comidas. "+TRAG,"envase":"100 comprimidos.",
 "embarazo":ESP,"lactancia":ESP,"interacciones":TRAT,
 "otras":"Sin levadura. Sin gluten; sin almidón, trigo, soja ni lácteos. Apto para veganos."}},

/* ---------- ÁCIDOS GRASOS Y OMEGAS ---------- */
{"id":"sol-omega-3-triple","name":"Omega-3 Triple Concentración","img":"imagenes/solgar/sol-omega-3-triple.webp","brand":"solgar","line":"sol-omegas","n":["s-cardio","s-memoria"],"d":{
 "paciente":"Adultos que quieren cuidar el corazón, el cerebro y la vista con un omega 3 más concentrado.",
 "tipo":"Complemento alimenticio en cápsulas blandas (aceite concentrado de pescado de agua fría).",
 "necesidad":"Omega 3 (EPA y DHA) más concentrado: corazón, cerebro y visión.",
 "claims":["Más EPA y DHA por mililitro que otros aceites de pescado, según Solgar.","Destilado molecularmente para eliminar el mercurio y otros metales pesados; cumple la monografía de calidad de GOED.","EPA y DHA contribuyen al funcionamiento normal del corazón (con 250 mg al día de EPA y DHA).","El DHA contribuye al funcionamiento normal del cerebro y al mantenimiento de la visión (con 250 mg al día de DHA)."],
 "compTitulo":"Ingredientes (la web de Solgar no publica la tabla nutricional ni las cantidades de EPA y DHA)","composicion":["Aceite concentrado de pescado de agua fría.","Cápsula blanda: gelatina de bovino y glicerina vegetal.","Antioxidante: mezcla de tocoferoles."],
 "pauta":"Adultos: 2 cápsulas blandas al día.","toma":"Preferentemente con las comidas. "+TRAG,"envase":"50 cápsulas blandas.",
 "embarazo":ESP,"lactancia":ESP,
 "interacciones":"Si se toma medicación anticoagulante, Solgar recomienda consultar con el médico antes de tomarlo. Con otros tratamientos o enfermedades, consultar con el especialista.",
 "otras":"Contiene pescado y gelatina de bovino. Sin gluten; sin almidón, levadura, trigo ni lácteos."}},
{"id":"sol-omega-369","name":"Omega 3-6-9","img":"imagenes/solgar/sol-omega-369.webp","brand":"solgar","line":"sol-omegas","n":["s-cardio","s-memoria"],"d":{
 "paciente":"Adultos que quieren cuidar el corazón, el cerebro y la vista con una mezcla equilibrada de omega 3, 6 y 9.",
 "tipo":"Complemento alimenticio en cápsulas blandas (aceites de pescado, lino y borraja).",
 "necesidad":"Omega 3, 6 y 9 juntos: corazón, cerebro y visión.",
 "claims":["Tres aceites: pescado (EPA y DHA), lino (ácido alfa-linolénico) y borraja (ácido gamma-linolénico); también aporta omega 9.","Aceite destilado molecularmente para eliminar el mercurio y otros metales pesados.","EPA y DHA contribuyen al funcionamiento normal del corazón (con 250 mg al día de EPA y DHA).","El DHA contribuye al funcionamiento normal del cerebro y al mantenimiento de la visión (con 250 mg al día de DHA)."],
 "compTitulo":"Ingredientes (la web de Solgar no publica la tabla nutricional ni las cantidades)","composicion":["Aceite de pescado (anchoa, arenque, caballa y sardina).","Aceite de semillas de lino y aceite de borraja.","Cápsula: gelatina de bovino y glicerina. Antioxidante: mezcla de tocoferoles."],
 "pauta":"Adultos: 3 cápsulas blandas al día.","toma":"Preferentemente con las comidas. "+TRAG,"envase":"60 cápsulas blandas.",
 "embarazo":ESP,"lactancia":ESP,
 "interacciones":"Si se toma medicación anticoagulante, Solgar recomienda consultar con el médico antes de tomarlo. Con otros tratamientos o enfermedades, consultar con el especialista.",
 "otras":"Contiene pescado y gelatina de bovino. Sin gluten ni azúcares; sin almidón, levadura, trigo, soja ni lácteos."}},
{"id":"sol-primula","name":"Aceite de Prímula de Rosa 1300 mg","img":"imagenes/solgar/sol-primula.webp","brand":"solgar","line":"sol-omegas","n":["s-mujer"],"d":{
 "paciente":"Mujeres en edad fértil o en la perimenopausia que quieren aumentar su aporte de GLA.",
 "tipo":"Complemento alimenticio en cápsulas blandas (aceite de onagra prensado en frío).",
 "necesidad":"Aceite de onagra rico en GLA (omega 6), tradicionalmente asociado al bienestar de la mujer.",
 "claims":["1300 mg de aceite de onagra por cápsula: un aporte mayor de GLA (ácido gamma-linolénico) en cada dosis.","Obtenido por prensado en frío de las semillas.","Fuente de ácidos grasos poliinsaturados: ácido linoleico y gamma-linolénico."],
 "compTitulo":"Composición (la web de Solgar no publica la tabla nutricional)","composicion":["Aceite de semilla de onagra (Oenothera biennis): 1300 mg por cápsula.","Cápsula: gelatina de bovino y glicerina."],
 "pauta":"Adultos: 1 o 2 cápsulas blandas al día.","toma":"Preferentemente con las comidas. "+TRAG,"envase":"30 cápsulas blandas.",
 "embarazo":ESP,"lactancia":ESP,"interacciones":TRAT,
 "otras":"Contiene gelatina de bovino. Sin azúcares ni gluten; sin almidón ni levadura."}},

/* ---------- AMINOÁCIDOS ---------- */
{"id":"sol-l-lisina","name":"L-Lisina 1000 mg","img":"imagenes/solgar/sol-l-lisina.webp","brand":"solgar","line":"sol-amino","n":["s-vitaminas"],"d":{
 "paciente":"Adultos que quieren aumentar su ingesta del aminoácido esencial lisina.",
 "tipo":"Complemento alimenticio en comprimidos (L-lisina clorhidrato). Apto para veganos.",
 "necesidad":"Aporte extra de L-lisina, aminoácido esencial que el cuerpo no fabrica.",
 "claims":["1000 mg de L-lisina por comprimido.","Aminoácido esencial necesario para la formación de proteínas; muy presente en la piel (como parte del colágeno) y en el músculo."],
 "compTitulo":"Composición (la web de Solgar no publica la tabla nutricional)","composicion":["L-lisina (clorhidrato): 1000 mg por comprimido.","Ingredientes: L-lisina (clorhidrato); celulosa microcristalina; ácido esteárico vegetal, dióxido de silicio; hidroxipropilcelulosa y glicerina vegetal; goma de celulosa."],
 "pauta":"Adultos: 1 comprimido al día.","toma":"Preferentemente alejado de las comidas. "+TRAG,"envase":"50 comprimidos.",
 "embarazo":ESP,"lactancia":ESP,"interacciones":TRAT,
 "otras":"Sin gluten; sin almidón, levadura, trigo, soja ni lácteos. Apto para veganos."}},

/* ---------- BOTÁNICOS ---------- */
{"id":"sol-ashwagandha","name":"Ashwagandha Shoden®","img":"imagenes/solgar/sol-ashwagandha.webp","brand":"solgar","line":"sol-botanicos","n":["s-sueno"],"d":{
 "paciente":"Adultos que buscan una ashwagandha de alta potencia para el estrés, el descanso y la relajación.",
 "tipo":"Complemento alimenticio en cápsulas (extracto de ashwagandha Shoden®). Apto para veganos.",
 "necesidad":"Estrés: ashwagandha concentrada para el bienestar físico y mental, el descanso y la relajación.",
 "claims":["Extracto Shoden® con hasta un 35 % de glicowitanólidos, uno de los más potentes del mercado según Solgar: actúa a dosis bajas.","Extracto estudiado científicamente y patentado.","La ashwagandha ayuda al cuerpo a lidiar con el estrés y a mantener el bienestar físico y mental."],
 "compTitulo":"Ingredientes (la web de Solgar no publica la cantidad de extracto)","composicion":["Extracto de ashwagandha (Withania somnifera) Shoden®.","Excipientes: celulosa microcristalina, hidroxipropilmetilcelulosa, estearato magnésico y dióxido de silicio."],
 "pauta":"Adultos: 1 cápsula al día.","toma":"Preferentemente con las comidas. "+TRAG,"envase":"30 cápsulas.",
 "embarazo":ESP,"lactancia":ESP,"interacciones":TRAT,
 "otras":"Sin gluten; sin trigo, lácteos, soja, levadura, conservantes, edulcorantes ni aromas. Apto para veganos."}},

/* ---------- BELLEZA ---------- */
{"id":"sol-hialuronico-colageno","name":"Ácido Hialurónico Complex con Colágeno","img":"imagenes/solgar/sol-hialuronico-colageno.webp","brand":"solgar","line":"sol-belleza","n":["s-piel","s-antiox"],"d":{
 "paciente":"Adultos que quieren cuidar la piel desde dentro y favorecer la formación de colágeno.",
 "tipo":"Complemento alimenticio en comprimidos (BioCell Collagen II® con vitamina C).",
 "necesidad":"Piel: colágeno hidrolizado tipo II con ácido hialurónico y condroitina, más vitamina C.",
 "claims":["1200 mg de BioCell Collagen II® (colágeno hidrolizado tipo II, ácido hialurónico y sulfato de condroitina) y 100 mg de vitamina C en un comprimido.","Colágeno de tamaño molecular reducido para absorberse con facilidad, según Solgar.","La vitamina C contribuye a la formación normal de colágeno para el funcionamiento normal de la piel y protege las células frente al daño oxidativo."],
 "compTitulo":"Composición (la web de Solgar no publica la tabla nutricional)","composicion":["BioCell Collagen II®: 1200 mg por comprimido.","Vitamina C (L-ascorbato cálcico): 100 mg por comprimido.","Otros ingredientes: fosfato dicálcico, celulosa microcristalina, colorante rojo de remolacha (AquaPolish F), estearato magnésico vegetal y dióxido de silicio."],
 "pauta":"Adultos: 1 comprimido al día.","toma":"Preferentemente con las comidas. "+TRAG,"envase":"30 comprimidos.",
 "embarazo":ESP,"lactancia":ESP,"interacciones":TRAT,
 "otras":"Sin azúcar ni gluten; sin almidón, trigo, lácteos, soja ni levadura."}},
{"id":"sol-pelo-piel-unas","name":"Pelo, Piel y Uñas con Biotina","img":"imagenes/solgar/sol-pelo-piel-unas.webp","brand":"solgar","line":"sol-belleza","n":["s-piel"],"d":{
 "paciente":"Adultos que quieren cuidar la piel, el cabello y las uñas desde dentro con un complemento diario todo en uno.",
 "tipo":"Complemento alimenticio en comprimidos. 100 % vegano.",
 "necesidad":"Piel, cabello y uñas: biotina, zinc, cobre y vitamina C con OptiMSM®.",
 "claims":["Con OptiMSM®, que Solgar asocia a un cabello con más brillo y volumen y a una piel más firme y elástica.","La biotina contribuye al mantenimiento de la piel y el cabello; el zinc, al de las uñas; el cobre, a la pigmentación normal del cabello y la piel.","La vitamina C contribuye a la formación normal de colágeno para la piel; la vitamina C, el cobre y el zinc protegen las células frente al daño oxidativo."],
 "compTitulo":"Ingredientes (la web de Solgar no publica la tabla nutricional ni las cantidades)","composicion":["MSM (metilsulfonilmetano, OptiMSM®); vitamina C (ácido L-ascórbico); extracto de brotes de bambú; L-lisina; L-prolina; citrato de zinc; bisglicinato de cobre; biotina.","Excipientes: celulosa microcristalina, dióxido de silicio, ácidos grasos y sus sales magnésicas, goma de celulosa, hidroxipropilmetilcelulosa y glicerina."],
 "pauta":"Adultos: 2 comprimidos al día.","toma":"Preferentemente con las comidas. "+TRAG,"envase":"60 comprimidos.",
 "embarazo":ESP,"lactancia":ESP,"interacciones":TRAT,
 "otras":"Sin gluten, lácteos, soja, edulcorantes, aromas ni colorantes. 100 % vegano."}},

/* ---------- HUESOS, ARTICULACIONES Y MÚSCULOS ---------- */
{"id":"sol-golden-prime","name":"Golden Prime Vitality Creatine Complex","img":"imagenes/solgar/sol-golden-prime.webp","brand":"solgar","line":"sol-movilidad","n":["s-articular","s-deporte"],"d":{
 "paciente":"Adultos, sobre todo a partir de los 55 años, que quieren un envejecimiento activo y cuidar músculos, huesos y articulaciones.",
 "tipo":"Complemento alimenticio en sobres monodosis para disolver en agua.",
 "necesidad":"Movilidad con la edad: creatina para la fuerza muscular con calcio, magnesio, vitamina C y colágeno de membrana de huevo.",
 "claims":["Fórmula 5 en 1: creatina Creavitalis®, calcio, magnesio, vitamina C Ester-C® y colágeno de membrana de cáscara de huevo (Ovomet®).","La creatina diaria puede potenciar el efecto del entrenamiento de resistencia sobre la fuerza muscular en mayores de 55 años (con 3 g al día y entrenamiento de resistencia al menos 3 veces por semana).","El calcio y el magnesio son necesarios para el mantenimiento de los huesos; el magnesio reduce el cansancio y la fatiga.","La vitamina C contribuye a la formación normal de colágeno para el funcionamiento de los cartílagos."],
 "compTitulo":"Ingredientes (la web de Solgar no publica la tabla nutricional ni las cantidades)","composicion":["Creavitalis® (monohidrato de creatina).","Citrato malato de calcio y citrato de magnesio.","Membrana de cáscara de huevo Ovomet®.","Vitamina C (L-ascorbato de calcio, Ester-C®)."],
 "pauta":"Adultos: 1 sobre al día.","toma":"Mezclar el sobre con 250 ml de agua.","envase":"21 sobres monodosis.",
 "embarazo":ESP,"lactancia":ESP,"interacciones":TRAT,
 "otras":"Contiene huevo (membrana de cáscara). Sin gluten."}}
);
})();
