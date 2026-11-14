/* FINISHER (Kern Pharma) (complementos alimenticios y productos para deportistas)
   Fuente: web oficial finisher.es (listado de productos y fichas guardadas por la farmacia en fuentes/finisher/), noviembre de 2026.
   Solo se cargan los 13 productos que vende la farmacia. Las líneas son las categorías oficiales de la web.
   La web no da advertencias de embarazo, lactancia ni medicamentos: esos campos van vacíos (en la ficha sale «Finisher no lo indica…»).
   Ficha de complemento: ver datos/complementos/ivb.js. */
D.brands.push({
 "id": "finisher", "name": "Finisher", "area": "supl", "web": "https://www.finisher.es",
 "lines": [
  {"id": "fin-rendimiento", "name": "Rendimiento y recuperación", "para": "Geles, sales, creatina y aminoácidos para antes, durante y después del ejercicio"},
  {"id": "fin-articular", "name": "Salud articular", "para": "Colágeno para cartílago, huesos y articulaciones"},
  {"id": "fin-general", "name": "Salud general", "para": "Vitamina C y magnesio para el día a día"},
  {"id": "fin-peso", "name": "Alimentación y control de peso", "para": "Metabolismo de las grasas y control del peso"}
 ]
});
D.prods.push(
/* ---------- RENDIMIENTO Y RECUPERACIÓN ---------- */
{"id":"fin-intensity","name":"Finisher Intensity","img":"imagenes/finisher/fin-intensity.webp","brand":"finisher","line":"fin-rendimiento","n":["s-deporte"],"d":{
 "paciente":"Deportistas que necesitan energía rápida antes del ejercicio.",
 "tipo":"Complemento alimenticio en gel, listo para tomar (sabor fresa)",
 "necesidad":"Rendimiento: energía antes de la actividad física y menos cansancio y fatiga.",
 "claims":["22 g de hidratos de carbono de rápida absorción.","Las vitaminas B6 y B12 contribuyen al metabolismo energético normal y ayudan a disminuir el cansancio y la fatiga.","Con aminoácidos ramificados (BCAA)."],
 "compTitulo":"Composición por gel (50 g)","composicion":["Hidratos de carbono: 22 g (21 g de azúcares); 90 kcal.","Creatina monohidrato: 0,45 g.","Vitamina C: 200 mg (250 % VRN).","Aminoácidos: L-leucina, L-lisina, L-isoleucina y L-valina 50 mg cada uno; L-treonina 20 mg; L-fenilalanina 20 mg; L-metionina 10 mg.","Tiamina (B1): 0,165 mg; vitamina B6: 0,21 mg; vitamina B12: 0,375 µg (15 % VRN cada una)."],
 "pauta":"1 gel antes de la actividad física; máximo 3 geles al día.","toma":"Beber el gel directamente del sobre.","envase":"Caja de 12 geles de 50 g.",
 "embarazo":"","lactancia":"","interacciones":"","otras":"Sin cafeína. Sin gluten, lactosa, soja ni huevo. Apto para veganos."}},
{"id":"fin-endurance","name":"Finisher Endurance","img":"imagenes/finisher/fin-endurance.webp","brand":"finisher","line":"fin-rendimiento","n":["s-deporte"],"d":{
 "paciente":"Deportistas que necesitan energía durante el ejercicio.",
 "tipo":"Complemento alimenticio en gel, listo para tomar (sabor limón)",
 "necesidad":"Rendimiento: energía durante la actividad física y menos cansancio y fatiga.",
 "claims":["21 g de hidratos de carbono de rápida absorción y de efecto prolongado (Palatinose™).","Las vitaminas B6 y B12 contribuyen al metabolismo energético normal y ayudan a disminuir el cansancio y la fatiga."],
 "compTitulo":"Composición por gel (50 g)","composicion":["Hidratos de carbono: 21 g, de ellos 10 g de isomaltulosa (Palatinose™); 84 kcal.","Vitamina C: 200 mg (250 % VRN).","Tiamina (B1): 0,165 mg; vitamina B6: 0,21 mg; vitamina B12: 0,375 µg (15 % VRN cada una)."],
 "pauta":"1 gel durante la actividad física; máximo 4 geles al día.","toma":"Beber el gel directamente del sobre.","envase":"Caja de 12 geles de 50 g.",
 "embarazo":"","lactancia":"","interacciones":"","otras":"Sin cafeína. Sin gluten, lactosa, soja ni huevo. Apto para veganos."}},
{"id":"fin-caffeine","name":"Finisher Caffeine","img":"imagenes/finisher/fin-caffeine.webp","brand":"finisher","line":"fin-rendimiento","n":["s-deporte","s-energia"],"d":{
 "paciente":"Deportistas que quieren un aporte de energía con cafeína antes o durante el ejercicio.",
 "tipo":"Complemento alimenticio en gel con cafeína, listo para tomar (sabor cola)",
 "necesidad":"Rendimiento: energía antes o durante la actividad física y menos cansancio y fatiga.",
 "claims":["22 g de hidratos de carbono de rápida absorción.","Las vitaminas B6 y B12 contribuyen al metabolismo energético normal y ayudan a disminuir el cansancio y la fatiga.","Con aminoácidos ramificados (BCAA)."],
 "compTitulo":"Composición por gel (50 g)","composicion":["Cafeína anhidra: 100 mg.","Hidratos de carbono: 22 g (22 g de azúcares); 91 kcal.","Creatina monohidrato: 0,675 g.","Vitamina C: 300 mg (375 % VRN).","Aminoácidos: L-leucina, L-lisina, L-isoleucina, L-valina y L-treonina 75 mg cada uno; L-fenilalanina 30 mg; L-metionina 15 mg.","Tiamina (B1): 0,25 mg; vitamina B6: 0,315 mg; vitamina B12: 0,56 µg (22,5 % VRN cada una)."],
 "pauta":"1 gel antes o durante la actividad física; máximo 2 geles al día.","toma":"Beber el gel directamente del sobre.","envase":"Caja de 12 geles de 50 g.",
 "embarazo":"","lactancia":"","interacciones":"","otras":"Contiene cafeína (100 mg por gel). Sin gluten, lactosa, soja ni huevo."}},
{"id":"fin-long-distance","name":"Finisher Long Distance","img":"imagenes/finisher/fin-long-distance.webp","brand":"finisher","line":"fin-rendimiento","n":["s-deporte"],"d":{
 "paciente":"Deportistas de larga distancia o de ejercicio de gran intensidad.",
 "tipo":"Complemento alimenticio en gel, listo para tomar (sabor limón)",
 "necesidad":"Rendimiento y recuperación en ejercicio largo o muy intenso, que agota el glucógeno muscular.",
 "claims":["30 g de hidratos de carbono (maltodextrina y fructosa) que contribuyen a la recuperación muscular normal tras un ejercicio de gran intensidad o larga duración.","Las vitaminas B6 y B12 contribuyen al metabolismo energético normal y ayudan a disminuir el cansancio y la fatiga."],
 "compTitulo":"Composición por gel (50 g)","composicion":["Hidratos de carbono (maltodextrina y fructosa): 30 g (14 g de azúcares); 122 kcal.","Vitaminas C, B1, B6 y B12 (la web no da las cantidades)."],
 "pauta":"1 gel durante la actividad física; máximo 4 geles al día.","toma":"Beber el gel directamente del sobre.","envase":"Caja de 12 geles de 50 g.",
 "embarazo":"","lactancia":"","interacciones":"","otras":"Sin cafeína. Sin gluten, lactosa, soja ni huevo. Apto para veganos."}},
{"id":"fin-magnesium","name":"Finisher Magnesium","img":"imagenes/finisher/fin-magnesium.webp","brand":"finisher","line":"fin-rendimiento","n":["s-deporte"],"d":{
 "paciente":"Deportistas que quieren un aporte de magnesio antes o durante el ejercicio.",
 "tipo":"Complemento alimenticio en gel, listo para tomar (sabor limón)",
 "necesidad":"Función muscular y menos cansancio durante el ejercicio.",
 "claims":["El magnesio contribuye al funcionamiento normal de los músculos y huesos y ayuda a disminuir el cansancio y la fatiga.","Contribuye también al equilibrio electrolítico, al metabolismo energético normal, al funcionamiento normal del sistema nervioso y a la síntesis proteica normal."],
 "compTitulo":"Composición por gel (40 g)","composicion":["Magnesio: 250 mg.","Sodio: 50 mg.","Potasio (la web no da la cantidad).","Hidratos de carbono: 2,1 g; 8 kcal."],
 "pauta":"1 gel antes o durante la actividad física.","toma":"Beber el gel directamente del sobre.","envase":"Caja de 12 geles de 40 g.",
 "embarazo":"","lactancia":"","interacciones":"","otras":"Sin gluten, lactosa, soja ni huevo. Apto para veganos."}},
{"id":"fin-recovery","name":"Finisher Recovery","img":"imagenes/finisher/fin-recovery.webp","brand":"finisher","line":"fin-rendimiento","n":["s-deporte"],"d":{
 "paciente":"Deportistas que quieren recuperarse después del ejercicio.",
 "tipo":"Complemento alimenticio en sobres de polvo para disolver en agua (sabor limón)",
 "necesidad":"Recuperación después de la actividad física.",
 "claims":["23 g de hidratos de carbono de rápida absorción.","Las vitaminas B6 y B12 contribuyen al metabolismo energético normal y ayudan a disminuir el cansancio y la fatiga.","El magnesio y el potasio contribuyen al funcionamiento normal de los músculos."],
 "compTitulo":"Composición por sobre (28 g)","composicion":["Extracto de pino marítimo (Pycnogenol®, 65-75 % procianidinas): 50 mg.","Potasio: 150 mg (7,5 % VRN); magnesio: 56,5 mg (15 % VRN); sodio: 234,5 mg.","Aminoácidos ramificados: L-leucina 100 mg, L-isoleucina 50 mg, L-valina 50 mg.","Tiamina (B1): 0,165 mg; vitamina B6: 0,21 mg; vitamina B12: 0,375 µg (15 % VRN cada una).","Hidratos de carbono: 23 g (14 g de azúcares); 91 kcal."],
 "pauta":"1 sobre al terminar la actividad física; máximo 2 sobres al día.","toma":"Disolver el sobre en 500 ml de agua.","envase":"Caja de 12 sobres de 28 g.",
 "embarazo":"","lactancia":"","interacciones":"","otras":"Sin cafeína. Sin gluten, lactosa, soja ni huevo."}},
{"id":"fin-creatine","name":"Finisher Creatine","img":"imagenes/finisher/fin-creatine.webp","brand":"finisher","line":"fin-rendimiento","n":["s-deporte"],"d":{
 "paciente":"Deportistas con un intenso desgaste muscular.",
 "tipo":"Complemento alimenticio para deportistas, en polvo",
 "necesidad":"Rendimiento deportivo: aporte de creatina.",
 "claims":["Monohidrato de creatina en polvo Creapure®.","Adaptado a un intenso desgaste muscular."],
 "compTitulo":"Composición por dosis (3 g, 1 cucharada)","composicion":["Monohidrato de creatina (Creapure®): 3 g."],
 "pauta":"3 g al día (1 cucharada medidora, incluida).","toma":"Directamente en la boca o disuelto en cualquier bebida, agitando hasta que se disuelva.","envase":"Bote de 300 g (unas 100 tomas).",
 "embarazo":"","lactancia":"","interacciones":"","otras":"Sin gluten. Apto para veganos."}},
{"id":"fin-bcaa","name":"Finisher BCAA","img":"imagenes/finisher/fin-bcaa.webp","brand":"finisher","line":"fin-rendimiento","n":["s-deporte"],"d":{
 "paciente":"Deportistas con un intenso desgaste muscular.",
 "tipo":"Producto alimenticio para deportistas, en polvo para disolver en agua (sabor cereza)",
 "necesidad":"Masa muscular: mantenerla y aumentarla con el ejercicio.",
 "claims":["Las proteínas contribuyen a aumentar y a conservar la masa muscular.","Adaptado a un intenso desgaste muscular."],
 "compTitulo":"Composición por dosis (6,6 g, 1 cucharada y media)","composicion":["Leucina: 2,5 g; isoleucina: 1,25 g; valina: 1,25 g.","Vitamina B6: 0,7 mg (50 % VRN); vitamina B12: 1,25 µg (50 % VRN).","Edulcorante: sucralosa. 25 kcal."],
 "pauta":"1 cucharada y media (6,6 g) antes y después del ejercicio.","toma":"Disolver en 300 ml de agua.","envase":"Bote de 300 g (unas 45 tomas).",
 "embarazo":"","lactancia":"","interacciones":"","otras":"Sin gluten, lactosa, soja, huevo ni aceite de palma."}},
/* ---------- SALUD ARTICULAR ---------- */
{"id":"fin-condrostop","name":"CondroStop","img":"imagenes/finisher/fin-condrostop.webp","brand":"finisher","line":"fin-articular","n":["s-articular","s-deporte"],"d":{
 "paciente":"Personas que quieren cuidar el cartílago y la movilidad de las articulaciones.",
 "tipo":"Complemento alimenticio en polvo para disolver (sobres o bote, sabor naranja)",
 "necesidad":"Salud articular: regenerar el cartílago, aliviar el dolor articular y ganar flexibilidad.",
 "claims":["Péptidos de colágeno FORTIGEL® que fomentan la regeneración del cartílago, alivian el dolor en las articulaciones y las hacen más flexibles.","La vitamina C contribuye a la formación normal de colágeno para el funcionamiento normal de los cartílagos.","El magnesio y el zinc contribuyen al mantenimiento de los huesos en condiciones normales."],
 "compTitulo":"Composición por sobre (13 g)","composicion":["Colágeno hidrolizado FORTIGEL®: 5000 mg.","D-glucosamina sulfato: 1470 mg; condroitina sulfato: 540 mg; ácido hialurónico: 18 mg.","Metilsulfonilmetano (MSM): 1000 mg.","Extracto de boswellia: 200 mg (130 mg de ácidos boswélicos).","Extracto de cúrcuma: 340 mg (34 mg de curcuminoides).","Extracto de bambú: 50 mg (35 mg de silicio).","Vitamina C: 80 mg (100 % VRN); magnesio: 67 mg (18 % VRN); zinc: 8 mg (80 % VRN); cobre: 0,6 mg (60 % VRN)."],
 "pauta":"1 sobre (o 1 cucharada de 13 g del bote) al día.","toma":"En un vaso de agua, preferiblemente con una de las comidas principales.","envase":"Caja de 30 sobres de 13 g o bote de 585 g.",
 "embarazo":"","lactancia":"","interacciones":"","otras":"Sin gluten, lactosa ni huevo. Sin cafeína."}},
{"id":"fin-collagen","name":"Finisher Collagen","img":"imagenes/finisher/fin-collagen.webp","brand":"finisher","line":"fin-articular","n":["s-articular"],"d":{
 "paciente":"Personas que quieren cuidar huesos, cartílagos y masa muscular.",
 "tipo":"Complemento alimenticio en polvo para disolver (sabor limón)",
 "necesidad":"Huesos, cartílagos y masa muscular.",
 "claims":["Contiene proteínas que contribuyen a aumentar y conservar la masa muscular y al mantenimiento de los huesos en condiciones normales.","La vitamina C contribuye a la formación normal del colágeno para el funcionamiento normal de los huesos y cartílagos."],
 "compTitulo":"Composición por dosis (12 g, 1 cucharada colmada)","composicion":["Colágeno hidrolizado: 10 g.","Ácido hialurónico (la web no da la cantidad).","Magnesio: 200 mg (53 % VRN).","Vitamina C: 200 mg (250 % VRN).","Tiamina (B1): 1,1 mg; riboflavina (B2): 1,4 mg; vitamina B6: 1,4 mg (100 % VRN cada una)."],
 "pauta":"1 cucharada colmada (12 g) al día.","toma":"Disolver en un vaso de agua (150 ml), agitando hasta que se disuelva del todo.","envase":"Bote de 300 g (unas 25 tomas).",
 "embarazo":"","lactancia":"","interacciones":"","otras":"Sin azúcar. Sin gluten, lactosa, soja ni huevo."}},
/* ---------- SALUD GENERAL ---------- */
{"id":"fin-vitamina-c","name":"Finisher Vitamina C 1000 mg","img":"imagenes/finisher/fin-vitamina-c.webp","brand":"finisher","line":"fin-general","n":["s-defensas","s-antiox","s-vitaminas"],"d":{
 "paciente":"Adultos que quieren reforzar las defensas o reducir el cansancio.",
 "tipo":"Complemento alimenticio en cápsulas",
 "necesidad":"Defensas, cansancio y protección antioxidante.",
 "claims":["La vitamina C contribuye al funcionamiento normal del sistema inmunitario y ayuda a disminuir el cansancio y la fatiga.","La vitamina C, la vitamina E y el zinc contribuyen a la protección de las células frente al daño oxidativo."],
 "compTitulo":"Composición por dosis (2 cápsulas)","composicion":["Vitamina C (ascorbato cálcico): 1000 mg (1250 % VRN).","Extracto de naranja: 200 mg (70 mg de bioflavonoides).","Vitamina E: 12 mg α-TE (100 % VRN).","Zinc: 5 mg (50 % VRN)."],
 "pauta":"2 cápsulas al día.","toma":"Con medio vaso de agua.","envase":"Bote de 60 cápsulas (30 días).",
 "embarazo":"","lactancia":"","interacciones":"","otras":"Solo para adultos. La cápsula lleva gelatina. Sin gluten, lactosa, huevo, soja ni azúcares."}},
{"id":"fin-triple-magnesium","name":"Finisher Triple Magnesium","img":"imagenes/finisher/fin-triple-magnesium.webp","brand":"finisher","line":"fin-general","n":["s-vitaminas","s-energia"],"d":{
 "paciente":"Adultos con cansancio o que quieren cuidar músculos y huesos.",
 "tipo":"Complemento alimenticio en cápsulas",
 "necesidad":"Cansancio y fatiga, músculos, huesos y sistema nervioso.",
 "claims":["Tres fuentes de magnesio: citrato, hidróxido y bisglicinato.","El magnesio y la vitamina B6 contribuyen a disminuir el cansancio y la fatiga, al metabolismo energético normal y al funcionamiento normal del sistema nervioso.","El magnesio contribuye al funcionamiento normal de los músculos, a la síntesis proteica normal y al mantenimiento de los huesos.","La vitamina B6 contribuye a una función psicológica normal."],
 "compTitulo":"Composición por dosis (2 cápsulas)","composicion":["Magnesio (citrato, hidróxido y bisglicinato): 300 mg (80 % VRN).","Vitamina B6: 1,4 mg (100 % VRN)."],
 "pauta":"2 cápsulas al día.","toma":"Con medio vaso de agua.","envase":"Bote de 60 cápsulas (30 días).",
 "embarazo":"","lactancia":"","interacciones":"","otras":"Sin gluten, lactosa, soja, huevo ni azúcares. Apto para veganos."}},
/* ---------- ALIMENTACIÓN Y CONTROL DE PESO ---------- */
{"id":"fin-termogenico","name":"Finisher Termogénico","img":"imagenes/finisher/fin-termogenico.webp","brand":"finisher","line":"fin-peso","n":["s-peso","s-deporte"],"d":{
 "paciente":"Personas que hacen ejercicio y quieren controlar el peso.",
 "tipo":"Complemento alimenticio en cápsulas",
 "necesidad":"Control del peso: regular el metabolismo de las grasas.",
 "claims":["Con Citrus aurantium, Carnipure® (L-carnitina) y Forslean® (Coleus forskohlii), entre otros ingredientes que contribuyen a controlar el peso, regulando el metabolismo de las grasas."],
 "compTitulo":"Composición por dosis (2 cápsulas)","composicion":["L-carnitina L-tartrato (Carnipure®): 372 mg.","Citrus aurantium: 250 mg (15 mg de p-sinefrina).","Coleus forskohlii (Forslean®): 100 mg (10 mg de forskolina).","Colina: 165 mg.","Cromo (Chromax®): 12 µg (30 % VRN); selenio: 55 µg; zinc: 10 mg (100 % VRN cada uno).","Vitamina B2: 1,4 mg; niacina (B3): 16 mg NE; vitamina B6: 1,4 mg (100 % VRN cada una); vitamina C: 200 mg (250 % VRN)."],
 "pauta":"2 cápsulas al día.","toma":"Días con ejercicio: 1 cápsula en el desayuno y 1 cápsula entre 30 y 60 minutos antes del ejercicio. Días sin ejercicio: 2 cápsulas en el desayuno.","envase":"Bote de 120 cápsulas (60 días).",
 "embarazo":"","lactancia":"","interacciones":"","otras":"Contiene p-sinefrina (Citrus aurantium) y forskolina. Sin gluten, lactosa, huevo, soja, azúcar ni cafeína."}}
);
