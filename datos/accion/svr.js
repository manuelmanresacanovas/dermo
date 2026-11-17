/* «Cómo actúa» de los productos de SVR.
   Fuente: apartado «Ingredientes» de la ficha oficial de cada producto (es.svr.com),
   completado con los mecanismos de las páginas de teoría (Cosméticos, Patologías, La piel).
   Formato: id de producto → { i: resumen de cómo actúa, a: [[activo, qué hace], …] } */
(function(){
const F4 = ["4 filtros orgánicos fotoestables (combinación patentada)", "Etilhexil triazona y dietilhexil butamido triazona (UVB), DHHB (UVA) y BEMT (UVA y UVB): absorben la radiación y la transforman en energía no dañina; muy alta protección UVA, que ayuda a prevenir manchas y melasma."];
const VISIR = ["Complejo antioxidante (extracto de berro + vitamina E) + niacinamida", "Protección reforzada frente al estrés oxidativo de la luz visible (incluida la azul) y el infrarrojo, que aceleran el envejecimiento."];
const SOL = "Protege de UVB, UVA y UVA largos y refuerza la protección frente a la luz visible y el infrarrojo";
const NIA4 = ["Niacinamida 4 %", "Calma la irritación del acné, reduce imperfecciones, previene las marcas de hiperpigmentación y limita la proliferación bacteriana."];
const PANT = ["Pantenol", "Calma e hidrata."];
const CER = ["Ceramidas", "Restauran la barrera; hidratación inmediata y duradera; reducen aspereza y descamación."];
const HA = ["Ácido hialurónico", "Hidrata en profundidad y en superficie; aporta volumen."];
const NIAB = ["Niacinamida", "Calma la piel sensible y refuerza y restaura la barrera."];
const REGALIZ = ["Extracto de regaliz", "Calma y descongestiona."];
const ENDO = ["Endothelyol®", "Reduce el enrojecimiento, mejora la microcirculación y la visibilidad de los vasos."];
const CAROTA = ["Sensia carota", "Corrige las rojeces, calma, hidrata y respeta la microbiota."];
const A = {
"sv-sun-secure-lait": {i: "Leche solar SPF 50+. " + SOL + ".", a: [F4, VISIR]},
"sv-sun-secure-lait-spf50-sin-perfume": {i: "Leche solar SPF 50+ sin perfume: protección muy alta UVA y UVB con filtros orgánicos fotoestables.", a: [F4]},
"sv-sun-secure-lait-crepitant-spf50": {i: "Leche solar crepitante SPF 50+. " + SOL + ".", a: [F4, VISIR]},
"sv-sun-secure-spray-spf50-1": {i: "Spray solar SPF 50+. " + SOL + ".", a: [F4, VISIR]},
"sv-sun-secure-spray-pocket-spf50": {i: "Spray solar de bolsillo SPF 50+. " + SOL + ".", a: [F4, VISIR]},
"sv-sun-secure-brume-spf50-1": {i: "Bruma solar SPF 50. " + SOL + ".", a: [F4, VISIR]},
"sv-sun-secure-eau-solaire-spf50": {i: "Agua solar SPF 50+. " + SOL + ".", a: [F4, VISIR]},
"sv-sun-secure-eau-solaire-glow-spf50": {i: "Agua solar SPF 50+ con efecto satinado. " + SOL + "; ayuda a prevenir queratosis actínicas, cánceres de piel no melanoma y daño en el ADN.", a: [
  F4, VISIR, ["Nácares de oro y bronce naturales", "Efecto satinado inmediato."]]},
"sv-sun-secure-huile-spf50": {i: "Aceite solar SPF 50. " + SOL + ".", a: [F4, VISIR]},
"sv-sun-secure-fluide-spf50-1": {i: "Fluido solar SPF 50+. " + SOL + ".", a: [F4, VISIR]},
"sv-sun-secure-creme-spf50-1": {i: "Crema solar SPF 50+. " + SOL + ".", a: [F4, VISIR]},
"sv-sun-secure-aqua-fluide-spf50": {i: "Aqua fluido solar SPF 50+. " + SOL + ".", a: [F4, VISIR]},
"sv-sun-secure-extreme-spf50": {i: "Fotoprotector SPF 50+ resistente para condiciones extremas. " + SOL + ".", a: [F4, VISIR]},
"sv-sun-secure-fluide-photo-age-spf50": {i: "Fluido solar antiedad SPF 50+. " + SOL + "; ayuda a prevenir el fotoenvejecimiento y el daño en el ADN, e hidrata.", a: [F4, VISIR, HA]},
"sv-sun-secure-blur-spf50-23": {i: "Crema solar con efecto blur SPF 50+. " + SOL + ".", a: [F4, VISIR]},
"sv-sun-secure-blur-sin-perfume-spf50": {i: "Crema solar con efecto blur sin perfume SPF 50+. " + SOL + ".", a: [F4, VISIR]},
"sv-sun-secure-blur-con-color-spf50": {i: "Crema solar con color y efecto blur SPF 50+. " + SOL + ".", a: [F4, VISIR]},
"sv-sun-secure-easy-stick-spf50": {i: "Stick solar SPF 50+. " + SOL + "; ayuda a prevenir queratosis actínicas, cánceres de piel no melanoma y daño en el ADN.", a: [F4, VISIR]},
"sv-sun-secure-gouttes-teintees": {i: "Gotas con color que dan un tono bronceado inmediato e hidratan.", a: [
  ["Nácares bronceadores naturales", "Tono bronceado inmediato sin marcas."],
  ["Ácido poliglutámico", "Retiene hasta 5 veces más agua que el ácido hialurónico y refuerza la barrera."],
  ["Antioxidantes", "Refuerzan las defensas frente a la contaminación."], ["Derivado de suculenta", "Resalta la luminosidad."]]},
"sv-sun-secure-mousse-autobronzante": {i: "Espuma autobronceadora: bronceado natural, gradual y uniforme sin sol, e hidrata.", a: [
  ["DHA de origen natural", "Colorea la capa más superficial de la piel; el color desaparece al renovarse el estrato córneo."],
  ["Acuaporinas", "Refuerzan la hidratación y potencian la glicerina."], ["Extracto de berro + vitamina E", "Protegen de los radicales libres."]]},
"sv-sun-secure-apres-soleil-1": {i: "After-sun: calma, hidrata y repara el daño celular causado por el sol.", a: [
  ["Aloe vera", "Calma e hidrata."], ["Extracto de berro + vitamina E + niacinamida", "Complejo antioxidante que repara el daño celular del sol."],
  ["Fermentos microbióticos", "Hidratan, reparan y refuerzan la barrera."]]},
"sv-sun-secure-spray-apres-soleil": {i: "Spray after-sun: calma, hidrata y repara el daño celular causado por el sol.", a: [
  ["Aloe vera", "Calma e hidrata."], ["Extracto de berro + vitamina E + niacinamida", "Complejo antioxidante que repara el daño celular del sol."],
  ["Fermentos microbióticos", "Hidratan, reparan y refuerzan la barrera."]]},
"sv-ak-secure-dm-protect": {i: "Protección muy alta UVA y UVB (producto sanitario) que ayuda a prevenir los cánceres de piel no melanoma, las queratosis actínicas, el fotoenvejecimiento y el daño en el ADN. SVR no detalla más activos en la ficha.", a: [
  ["Filtros de muy alta protección UVA y UVB", "Absorben la radiación UV."]]},
"sv-sebiaclear-gel-moussant-23": {i: "Gel limpiador sin jabón para piel con imperfecciones: limpia, desobstruye los poros, regula el sebo y exfolia.", a: [
  ["Gluconolactona 4 %", "PHA que purifica y desobstruye los poros."],
  ["Ácido salicílico", "BHA: exfolia, cierra los poros, regula el sebo y reduce imperfecciones."], ["Base limpiadora suave sin jabón", "Limpia sin dañar la piel."]]},
"sv-sebiaclear-creme-lavante": {i: "Crema limpiadora para piel con acné sensibilizada: limpia con suavidad, hidrata y equilibra la barrera.", a: [
  ["Base limpiadora suave", "Limpieza apta para piel muy sensible."], ["Niacinamida + glicerina", "Hidratan y equilibran la barrera."],
  ["Zinc", "Protege del estrés oxidativo."]]},
"sv-sebiaclear-eau-micellaire": {i: "Agua micelar para piel grasa: limpia, desmaquilla y desobstruye los poros.", a: [
  ["Gluconolactona", "Purifica y desobstruye los poros."], ["Micelas", "Limpian y desmaquillan."]]},
"sv-sebiaclear-micro-peel": {i: "Micropeeling para imperfecciones: afina la textura, regula el sebo, calma y previene marcas.", a: [
  NIA4, ["Zinc 1 %", "Regula el exceso de sebo."], ["Ácido lactobiónico + ácido salicílico", "Afinan y alisan la textura, reducen y limitan nuevas imperfecciones."]]},
"sv-sebiaclear-active-gel": {i: "Gel anti-imperfecciones: exfolia con suavidad, desobstruye los poros, regula el sebo, equilibra el microbioma y matifica.", a: [
  NIA4, ["Complejo patentado de ácidos suaves", "Exfolia, alisa y desobstruye los poros con eficacia comparable al salicílico 0,5 %."],
  ["Quora Noni™", "Reduce las imperfecciones causadas por un desequilibrio del microbioma."], ["Extracto de flor de fénix", "Regula el sebo y matifica de forma duradera."]]},
"sv-sebiaclear-active": {i: "Tratamiento con color para imperfecciones: reduce los granos, regula el sebo y unifica el tono.", a: [
  NIA4, ["Ácido salicílico", "BHA: exfolia, cierra los poros y regula el sebo."]]},
"sv-sebiaclear-serum": {i: "Sérum para piel adulta con imperfecciones: afina la textura, libera los poros, calma y trata los signos de la edad.", a: [
  ["Niacinamida 4 %", "Protege y calma."], ["Gluconolactona 14 %", "PHA tan eficaz como los AHA para la textura, pero mejor tolerado: libera los poros."],
  ["Retinol-like + ácido hialurónico", "Rellenan y alisan líneas y arrugas."]]},
"sv-sebiaclear_ampoule_flash": {i: "Ampolla flash para imperfecciones: reduce granos e inflamación, regula el sebo, limita las bacterias y previene las marcas.", a: [
  ["Ácido azelaico 15 %", "Reduce imperfecciones, sebo e inflamación y previene marcas rojas y oscuras."],
  ["Ácido salicílico", "Purifica y alisa la textura."], ["Zinc 2 %", "Limita la proliferación bacteriana y regula el sebo."],
  ["Niacinamida 2 %", "Refuerza y restaura la barrera."]]},
"sv-sebiaclear-gel-flash-4h": {i: "Gel flash para granos: reduce las imperfecciones, el sebo y las rojeces y previene las marcas.", a: [
  ["Ácido azelaico 5 %", "Reduce imperfecciones, sebo y rojeces; previene marcas rojas y marrones."],
  ["Niacinamida 5 %", "Calma la irritación, previene marcas y limita las bacterias."]]},
"sv-sebiaclear-mat-pores-1": {i: "Hidratante matificante para piel grasa: regula el sebo, desobstruye los poros, matifica e hidrata.", a: [
  NIA4, ["Mat SR 2 %", "Matificante y seborregulador."], ["Gluconolactona 4 % + ácido salicílico", "Purifican y desobstruyen los poros."], ["Azúcares hidrófilos", "Mantienen la hidratación."]]},
"sv-sebiaclear-hydra-23": {i: "Crema reparadora para piel con acné resecada por tratamientos: calma, restaura la barrera e hidrata.", a: [
  ["Niacinamida 5 %", "Calma la irritación y previene marcas."],
  ["Azúcares prebióticos (lirio de los valles japonés)", "Calman, restauran la barrera, hidratan y mantienen la microbiota; limitan el picor."], CER, HA]},
"sv-novedad-sebiaclear-creme-spf50": {i: "Crema anti-imperfecciones SPF 50+: regula el sebo, reduce imperfecciones y protege de UVB, UVA, luz visible e infrarrojo (que marcan las lesiones).", a: [
  ["Niacinamida 4 % + ácido salicílico", "Regulan el sebo, limitan las bacterias, reducen imperfecciones y alisan."],
  ["Combinación de filtros patentada", "Protección muy alta UVB + UVA + visible + infrarrojo."]]},
"sv-sebiaclear-spray-corps": {i: "Spray corporal para imperfecciones: alisa la textura, reduce imperfecciones y refuerza la barrera.", a: [
  ["Gluconolactona 8 %", "Retexturizante suave."], ["Niacinamida 5 %", "Refuerza y restaura la barrera."],
  ["Ácido lactobiónico 2 %", "Afina la textura y limita nuevas imperfecciones."], ["Zinc 1 %", "Protege del estrés oxidativo."]]},
"sv-sensifine-baume-demaquillant": {i: "Bálsamo desmaquillante para piel sensible: se funde, disuelve el maquillaje con agentes suaves y nutre manteniendo la barrera.", a: [
  ["Aceite de coco", "Hidrata."], ["Triglicéridos C10-18 + cocoato de glicerilo PEG-7", "Agente limpiador suave."],
  ["Manteca de karité", "Nutre y mantiene la barrera."], ["Cera de girasol y aceite vegetal", "Película protectora."]]},
"sv-sensifine-dermo-nettoyant": {i: "Leche limpiadora minimalista para piel sensible: limpia sin agredir y refuerza la barrera.", a: [
  NIAB, ["Humectantes (propanodiol, pentilenglicol, caprililglicol)", "Hidratan y dan confort."], ["Estearato de hexildecilo", "Emoliente."]]},
"sv-sensifine-extreme": {i: "Crema para piel intolerante y agredida: protege, calma y repara la barrera con una fórmula mínima.", a: [
  ["Agua ionizada patentada", "Rica en minerales e iones negativos: protege, calma y repara la barrera; 100 % biocompatible."],
  ["Aceite de jojoba", "Afín a la piel: regula el sebo, calma y cicatriza."], ["Octildodecanol", "Emoliente."]]},
"sv-sensifine-hydra-creme": {i: "Crema hidratante de solo 10 ingredientes para piel sensible: calma e hidrata intensamente con tolerancia óptima.", a: [
  ["Pantenol 5 %", "Calma e hidrata intensamente."], ["Aceites de semilla de uva y girasol", "Protectores."], ["Estearato de hexildecilo", "Emoliente: hidratación y confort."]]},
"sv-sensifine-aqua-gel": {i: "Aqua-gel hidratante para piel sensible: calma e hidrata de forma duradera.", a: [
  PANT, ["Aloe vera", "Calma e hidrata."], ["Glicerina", "Hidrata de forma duradera."]]},
"sv-sensifine-nutri-baume": {i: "Bálsamo nutritivo para piel sensible seca: calma, nutre e hidrata.", a: [PANT, ["Manteca de karité + escualeno", "Nutren, protegen e hidratan."]]},
"sv-sensifine-huile-de-nuit": {i: "Aceite de noche para piel sensible: nutre, calma y activa la reparación mientras duermes.", a: [
  ["Aceite de coco", "Rico en lípidos: activa la reparación."], ["Aceites de colza, cáñamo y almendras", "Ricos en omegas: nutren y calman."],
  ["Aceite de jojoba", "Afín a la piel: calma y cicatriza."], ["Aceite de pepitas de uva", "Protector."]]},
"sv-sensifine-masque-sos": {i: "Mascarilla SOS para piel sensible: calma, hidrata y protege.", a: [
  PANT, ["Aceite de babasú", "Suaviza y calma la piel seca."], ["Vitamina B12 (cianocobalamina)", "Calma y protege; da color rosa a la fórmula."], ["Glicerina", "Retiene el agua."]]},
"sv-sensifine-ar-eau-micellaire": {i: "Agua micelar para piel con rojeces: limpia con suavidad, calma y refuerza la barrera.", a: [
  NIAB, ["Tensioactivos ultrasuaves", "Lavado suave."], ["Agentes hidratantes", "Hidratan."]]},
"sv-sensifine-ar-creme": {i: "Crema antirrojeces: corrige las rojeces, calma, restaura la barrera y previene las marcas de cicatrización.", a: [
  ["Postbióticos marinos", "Corrigen y previenen las marcas marrones de la cicatrización."], CER, CAROTA]},
"sv-sensifine-ar-creme-riche": {i: "Crema rica antirrojeces: corrige las rojeces, calma y restaura la barrera de la piel seca.", a: [REGALIZ, CAROTA, CER]},
"sv-sensifine-ar-creme-teinte-nuevo": {i: "Crema antirrojeces con color: reduce el enrojecimiento y la visibilidad de los vasos, calma y unifica.", a: [
  ["Endothelyol® 1,25 %", "Reduce el enrojecimiento, mejora la microcirculación y la visibilidad de los vasos."],
  ["Escualeno vegetal", "Hidrata con bioafinidad."], REGALIZ, ["Pigmentos naturales", "Unifican sin efecto máscara."]]},
"sv-sensifine-ar-creme-spf50-1": {i: "Crema antirrojeces SPF 50+: protege de UVB, UVA, luz visible e infrarrojo y reduce el enrojecimiento.", a: [
  ["Combinación patentada de filtros no ecotóxicos", "Protección fotoestable UVB + UVA + visible + infrarrojo."], ENDO, REGALIZ]},
"sv-topialyse-gel-lavant-1": {i: "Gel limpiador para piel seca y atópica: limpia con suavidad e hidrata.", a: [
  ["Tensioactivos suaves", "Limpian suavizando la piel."], ["Glicerina", "Atrae y retiene el agua."]]},
"sv-topialyse-huile-micellaire-nuevo": {i: "Aceite lavante para piel muy seca y atópica: limpia relipidizando y restaura la barrera.", a: [
  ["35 % de activos relipidizantes", "Hidratan, restauran y preservan la barrera."], ["Tensioactivos suaves", "Limpian sin agredir."], NIAB]},
"sv-topialyse-baume-lavant": {i: "Bálsamo lavante para piel muy seca y atópica: limpia, hidrata 24 horas y restaura la barrera.", a: [
  ["35 % de activos hidratantes y relipidizantes", "Hidratan 24 horas y restauran la barrera."], NIAB, ["Tensioactivos suaves", "Limpian sin agredir."]]},
"sv-topialyse-concentre-lavant": {i: "Concentrado lavante para piel seca y atópica: limpia sin resecar, nutre y refuerza la barrera.", a: [
  ["Vitamina D3", "Ayuda a mantener la piel en condiciones normales."], ["Fase emoliente 16 % (coco y borraja)", "Nutre y previene la deshidratación."],
  ["Glicerina", "Hidrata."], NIAB, ["Tres tensioactivos suaves", "Limpian sin irritar."]]},
"sv-topialyse-creme-1": {i: "Crema para piel seca y atópica: nutre con lípidos e hidrata de forma inmediata y duradera.", a: [
  ["Fase emoliente 27 % (babasú, karité, borraja y coco)", "Nutre y repone lípidos."],
  ["Hidratantes (glicerina, glucósido de glicerilo, BioEcolia)", "Hidratación inmediata y duradera."]]},
"sv-topialyse-baume-protect": {i: "Bálsamo protector para piel atópica: aporta los lípidos que faltan, limita la pérdida de agua 48 horas y protege de los ácaros.", a: [
  ["AD Ceramides Patent + azúcares prebióticos", "Protegen de la rotura de la barrera por ácaros; aportan lípidos."],
  ["Fase grasa 46 % (coco y babasú)", "Nutre y suaviza."]]},
"sv-topialyse-barriere": {i: "Crema barrera: protege sin ocluir, hidrata en profundidad y calma el picor.", a: [
  ["Aceite de crambe + fitoesteroles", "Protegen sin ocluir."], ["Ácido hialurónico de bajo peso", "Hidrata en profundidad y alisa líneas."],
  ["Omega 3-6-9, péptido regulador y ácido glicirrícico", "Calmantes y antipicor."]]},
"sv-topialyse-mains": {i: "Crema de manos muy seca: reestructura y restaura la barrera y nutre.", a: [
  ["Fase grasa 27 % con omega 3-6-9", "Reestructura y restaura la barrera."], ["Manteca de karité 7 %", "Nutritiva y calmante."]]},
"sv-topialyse-stick-levres": {i: "Stick labial: forma una película protectora, repara y nutre los labios.", a: [
  ["Cera de carnauba 11 %", "Película protectora."], ["Manteca de karité 5 %", "Repara y regenera."],
  ["Aceites vegetales 84 % (girasol, ricino, camelina)", "Nutren, calman e hidratan."], ["Vitamina E", "Antioxidante."]]},
"sv-palpebral-by-topialyse-demaquillant": {i: "Desmaquillante de párpados sensibles: retira el maquillaje y calma, manteniendo la barrera.", a: [
  ["Niacinamida + agente hidratante", "Calman y mantienen la barrera."]]},
"sv-palpebral-by-topialyse-creme-nueva-formula": {i: "Crema para párpados irritados: hidrata, calma el picor y restaura la barrera del contorno.", a: [
  ["Complejo nutritivo calmante y antipicor 20 % (algodón, babasú, karité)", "Fuente de omega 3-6-9: hidrata y restaura la barrera."]]},
"sv-palpebral-baume": {i: "Bálsamo para párpados con tendencia atópica: repone lípidos, restaura la barrera, calma el picor y protege de los ácaros.", a: [
  ["Fase grasa 27,8 % (aceite de borraja, mantecas y ácido hialurónico)", "Reconstituyente lipídico: nutre, previene la deshidratación y repara la barrera."],
  ["Azúcares prebióticos", "Calman, hidratan, restauran la barrera, mantienen la microbiota y alivian el picor."],
  ["Ceramidas patentadas", "Protegen de los ácaros, aportan los lípidos que faltan y limitan la pérdida de agua."]]},
"sv-palpebral-by-topialyse-mascara-protect": {i: "Máscara de pestañas para ojos sensibles, sin perfume: envuelve las pestañas con un negro intenso de 8 horas.", a: [
  ["Ácido hialurónico + aceite de jojoba", "Envuelven y recubren las pestañas."], ["Pigmentos negros de carbón vegetal", "Acabado ultranegro."]]},
"sv-xerial-10-lait-corps-new": {i: "Leche corporal con urea para piel seca y rugosa: exfolia, alisa las zonas engrosadas, hidrata y calma.", a: [
  ["Urea pura 15 % (patente SVR)", "Con aminoácidos naturales de la piel: exfolia (queratolítica) e hidrata intensamente."],
  ["Pantenol", "Calma e hidrata."], ["Centella asiática", "Reparadora y calmante."], ["Prebióticos", "Reequilibran la microbiota."]]},
"sv-xerial-30-gel-creme": {i: "Gel-crema con 30 % de urea para piel granulosa y áspera (queratosis pilaris): exfolia e hidrata intensamente.", a: [
  ["Urea pura 30 % (patente SVR)", "Exfolia (queratolítica) e hidrata: elimina el aspecto granuloso y las zonas ásperas."],
  ["Pantenol", "Calma e hidrata."], ["Acuaporinas", "Refuerzan la hidratación y potencian la glicerina."]]},
"sv-xerial-gel-peeling": {i: "Gel limpiador peeling corporal: exfolia en superficie y en profundidad, alisa y aclara marcas, manteniendo la hidratación.", a: [
  ["AHA 5 %", "Moléculas pequeñas que exfolian, alisan e iluminan."], ["PHA + ácido succínico", "Purifican y afinan en superficie."],
  ["Ácido poliglutámico", "Retiene hasta 5 veces más agua que el hialurónico y refuerza la barrera."], ["Acuaporinas", "Estimulan los canales de agua de la piel."]]},
"sv-xerial-gommage": {i: "Exfoliante corporal físico: elimina las asperezas por fricción con partículas de dos tamaños.", a: [
  ["Hueso de oliva", "Partícula grande: exfolia las asperezas."], ["Semillas de uva (dos tamaños)", "Exfoliación intensa y suave."]]},
"sv-xerial-dm-psoriasis": {i: "Tratamiento para piel con psoriasis: reduce las placas engrosadas y la descamación, hidrata, calma y protege.", a: [
  ["Complejo querato-reparador con urea pura 15 %", "Queratolítico: trata las placas gruesas y reduce la descamación."],
  ["Exopolisacárido de alga roja", "Reduce la descamación e hidrata."], ["Karité y camelina", "Emolientes que calman y protegen."]]},
"sv-xerial-30-creme-pieds": {i: "Crema de pies con 30 % de urea y salicílico: exfolia las durezas y zonas ásperas e hidrata intensamente.", a: [
  ["Urea pura 30 % + ácido salicílico 1 % (patente SVR)", "Exfoliación e hidratación; el salicílico refuerza la acción queratolítica."],
  ["Alantoína + pantenol", "Alivian la tensión y las molestias."]]},
"sv-xerial-50-extreme-creme-pieds": {i: "Crema de pies con 50 % de urea para durezas extremas: exfolia intensamente e hidrata.", a: [
  ["Urea pura 50 % (patente SVR)", "Queratolítica: exfolia e hidrata intensamente."], ["Ácido salicílico", "Refuerza la exfoliación."]]},
"sv-xerial-fissures-crevasses-23": {i: "Tratamiento de fisuras y grietas: alisa las zonas engrosadas, repara e hidrata.", a: [
  ["Urea pura 15 % (patente SVR)", "Exfolia las zonas engrosadas alrededor de las grietas e hidrata."],
  ["Centella asiática", "Reparadora y calmante en talones agrietados."], ["Pantenol", "Calma e hidrata."], ["Prebióticos", "Reequilibran la microbiota."]]},
"sv-xerial-peel": {i: "Mascarilla peeling intensa para pies: exfolia en profundidad, compensada con activos hidratantes.", a: [
  ["Complejo peeling (ácido láctico + glicólico + urea 15 %)", "Exfoliación intensa."],
  ["Extractos de alga, cola de caballo, clemátide, té verde y hiedra", "Emolientes e hidratantes."]]},
"sv-xerial-40-ongles": {i: "Tratamiento de uñas engrosadas o alteradas: exfolia e hidrata y limpia la microbiota fúngica.", a: [
  ["Urea pura 40 % (patente SVR)", "Queratolítica: suaviza y exfolia."], ["Piroctona olamina", "Limpia la microbiota fúngica."]]},
"sv-cicavit-creme-hppi": {i: "Crema reparadora posprocedimiento: repara y regenera, calma la rojez, favorece la reepitelización y previene marcas.", a: [
  ["Derivado de la cúrcuma", "Repara, regenera, calma y reduce marcas rojas."], ["Ácido hialurónico", "Hidrata y favorece la reepitelización."],
  ["Postbióticos marinos", "Previenen las marcas marrones de la cicatrización."], ["Niacinamida", "Fortalece la barrera."],
  ["Polisacáridos", "Barrera protectora; equilibran la microbiota para una buena reparación."]]},
"sv-cicavit-pommade": {i: "Pomada reparadora: forma una barrera protectora y optimiza la reparación equilibrando la microbiota.", a: [
  ["Aceites y mantecas vegetales", "Protegen y nutren."], ["Derivado de la cúrcuma", "Repara, regenera y calma."],
  ["Azúcares prebióticos", "Estimulan la flora beneficiosa: mejoran el tiempo y la calidad de la reparación."], ["Polisacáridos", "Barrera protectora."]]},
"sv-cicavit-sos-grattage": {i: "SOS antirrascado: calma el picor, repara sin marcas e impide la adhesión de bacterias.", a: [
  ["Complejo antiirritación 15 %", "Frena las ganas de rascarse."], ["Centella asiática + provitamina B5", "Alivian y favorecen la reparación sin marcas."],
  ["Activo antibacteriano selectivo", "Película que impide que las bacterias patógenas se adhieran."]]},
"sv-cicavit-dm-cicatrices": {i: "Gel de silicona para cicatrices: mantiene un entorno húmedo semioclusivo que favorece la cicatrización.", a: [
  ["Complejo de silicona semioclusivo", "Mantiene la humedad propicia para cicatrizar."]]},
"sv-creme-mains-cicavit": {i: "Crema de manos reparadora: efecto segunda piel que protege, nutre y optimiza la reparación.", a: [
  ["Azúcares prebióticos", "Reequilibran la microbiota y mejoran la reparación."], ["Aceite y manteca vegetal", "Escudo protector; nutren y refuerzan la barrera."]]},
"sv-cicavit-levres": {i: "Bálsamo labial reparador: película protectora frente al frío, nutre y equilibra la microbiota.", a: [
  ["Aceites de ricino, almendra y coco + karité y cera de abejas", "Película protectora; nutren y suavizan."],
  ["Azúcar prebiótico", "Reequilibra la microbiota."], ["Polisacárido rico en ramnosa", "Impide la adhesión de bacterias patógenas."]]},
"sv-cicavit-creme-spf50": {i: "Crema reparadora SPF 50+: protege la piel en reparación del sol, acelera la reparación y previene marcas.", a: [
  ["Tecnología Integral Segura", "Filtra UVA y UVB; antioxidante frente a luz visible e infrarrojo."],
  ["Polisacárido rico en ramnosa", "Impide la adhesión de bacterias y reduce rojez e irritación por calor."],
  ["Azúcares prebióticos", "Mejoran el tiempo y la calidad de la reparación."], ["Complejo reparador", "Acelera la reparación; calmante y antimarcas."]]},
"sv-densitium-creme-refill": {i: "Crema antiedad redensificante: reafirma y rellena las arrugas, refuerza la epidermis y unifica el tono.", a: [
  ["Ácido hialurónico ultrafragmentado", "Reafirma, hidrata y rellena las arrugas."], ["Biocalcio", "Reestructura, redensifica y refuerza la epidermis."],
  ["Dúo de aminoácidos", "Unifica el tono y reduce manchas y tono amarillento."], ["Péptidos", "Alisan y relajan los rasgos."]]},
"sv-densitium-creme-riche-copy": {i: "Crema rica antiedad redensificante para piel seca: reafirma, rellena las arrugas y fortalece los tejidos de soporte.", a: [
  ["Ácido hialurónico ultrafragmentado", "Reafirma, hidrata y rellena las arrugas."], ["Biocalcio", "Reestructura y fortalece los tejidos de soporte."],
  ["Dúo de aminoácidos", "Unifica el tono."], ["Péptidos", "Alisan y relajan los rasgos."]]},
"sv-densitium-creme-spf30-refill": {i: "Crema antiedad SPF 30: redensifica y rellena las arrugas y protege del fotoenvejecimiento (UV, luz azul e infrarrojo).", a: [
  ["4 filtros orgánicos fotoestables", "Alta protección UVA y UVB."], ["Ácido hialurónico ultrafragmentado", "Reafirma y rellena las arrugas."],
  ["Biocalcio", "Redensifica la epidermis."], ["Niacinamida, microorganismos marinos y antioxidantes", "Protección frente a luz azul e infrarrojo."]]},
"sv-densitium-rose-eclat-refill": {i: "Crema antiedad iluminadora: redensifica, rellena las arrugas y combate el tono amarillento de la glicación.", a: [
  ["Biocalcio", "Reestructura la epidermis."], ["Ácido hialurónico ultrafragmentado", "Reafirma y rellena las arrugas."],
  ["Ciruela japonesa e isodon", "Reducen y previenen el tono amarillento por glicación."], ["Postbiótico", "Ayuda con ojeras y bolsas."]]},
"sv-densitium-bi-serum-refill": {i: "Bi-sérum antiedad: rellena las arrugas y estimula el colágeno contra la flacidez.", a: [
  ["Ácido hialurónico ultrafragmentado", "Reafirma, hidrata y rellena las arrugas."], ["Dúo de activos antigravedad", "Estimulan el colágeno: efecto antiflacidez."]]},
"sv-densitium-baume-nuit-refill": {i: "Bálsamo de noche antiedad: redensifica, rellena las arrugas y unifica el tono mientras duermes.", a: [
  ["Ácido hialurónico ultrafragmentado", "Reafirma y rellena las arrugas."], ["Biocalcio", "Fortalece los tejidos de soporte."], ["Dúo de aminoácidos", "Unifica el tono."]]},
"sv-densitium-contour-des-yeux-nuevo": {i: "Contorno antiedad: rellena y alisa las arrugas, armoniza el volumen del surco lagrimal y redensifica.", a: [
  ["Tetrapéptidos", "Activos antiedad del contorno."], ["Ácido hialurónico ultrafragmentado", "Reafirma y rellena las arrugas."],
  ["Baya de goji", "Armoniza los volúmenes del valle de lágrimas."], ["Biocalcio", "Redensifica la epidermis."]]},
"sv-ceramides-biotic": {i: "Bálsamo nutritivo para piel seca, con poca flexibilidad y arrugas: nutre, mejora la elasticidad y alisa. SVR no detalla sus activos en el apartado de ingredientes de la ficha.", a: []},
"sv-c20biotic-new": {i: "Crema antioxidante con 20 % de vitamina C: protege de los radicales libres, ilumina, unifica, reafirma y refuerza la microbiota.", a: [
  ["Vitamina C optimizada 20 %", "Antioxidante (eficacia equivalente al 17 % de vitamina C pura): unifica, reafirma e ilumina."],
  ["Probióticos", "Refuerzan la microbiota e hidratan."], ["Ácido hialurónico de bajo peso", "Hidrata en profundidad y alisa líneas."]]},
"sv-c20-fluide": {i: "Fluido antioxidante con 20 % de vitamina C: ilumina, unifica, alisa las líneas y restaura la barrera.", a: [
  ["Vitamina C optimizada 20 %", "Antioxidante: unifica, reafirma e ilumina."], ["Ácido hialurónico de bajo peso", "Rellena e hidrata."],
  ["Potenciador de acuaporinas", "Refuerza la hidratación natural y restaura la barrera."], ["Probióticos pasteurizados", "Refuerzan la microbiota."]]},
"sv-new-peptibiotic": {i: "Sérum con péptidos: alisa irregularidades, controla el brillo, hidrata y aporta luminosidad.", a: [
  ["Ácido hialurónico de bajo peso", "Hidrata en profundidad y alisa."], ["Péptidos", "Suavizan irregularidades y controlan el brillo."],
  ["Vitamina C optimizada", "Antioxidante: ilumina y unifica."]]},
"sv-new-hyalubiotic": {i: "Sérum hidratante con ácidos hialurónicos y probióticos: hidrata en superficie y profundidad, rellena y alisa.", a: [
  ["Dúo de ácidos hialurónicos", "Hidratan en profundidad y en superficie; rellenan y alisan."],
  ["Probióticos pasteurizados", "Refuerzan la microbiota."], ["Vitamina C optimizada", "Antioxidante: ilumina."]]},
"sv-new-collagen-biotic": {i: "Sérum reafirmante con colágeno vegetal: reestructura y devuelve firmeza y elasticidad.", a: [
  ["Colágeno vegetal 2 %", "Biotecnológico, idéntico al humano: reestructura y da firmeza."], ["Probióticos pasteurizados", "Refuerzan la microbiota."],
  ["Vitamina C optimizada", "Antioxidante: ilumina."]]},
"sv-c-eye-biotic": {i: "Contorno con vitamina C: aclara las ojeras pigmentadas y vasculares, reduce la hinchazón y suaviza las arrugas.", a: [
  ["Vitamina C optimizada 5 %", "Antioxidante: reduce las ojeras pigmentadas e ilumina."],
  ["Extracto de genciana", "Reduce las ojeras vasculares y la hinchazón; rellena el surco lagrimal."], ["Péptido", "Suaviza las patas de gallo."],
  ["Ácido hialurónico de bajo peso", "Hidrata."], ["Probióticos pasteurizados", "Refuerzan la microbiota."]]},
"sv-filler-biotic": {i: "Sérum rellenador: rellena las arrugas de deshidratación, relaja los rasgos e hidrata en profundidad.", a: [
  ["Ácido hialurónico de bajo peso", "Hidrata en profundidad y alisa."], ["Péptidos", "Rellenan las arrugas y relajan los rasgos."],
  ["Probióticos pasteurizados", "Refuerzan la microbiota."], ["Vitamina C optimizada", "Antioxidante: ilumina."]]},
"sv-a-ampoule-lift-2": {i: "Ampolla de retinol puro 0,3 %: afina la textura, corrige imperfecciones, alisa arrugas y unifica el tono, protegiendo la barrera.", a: [
  ["Retinol puro 0,3 %", "Retinoide (dos conversiones a ácido retinoico) al máximo permitido en Europa: renueva y estimula el colágeno."],
  ["Novoretin™ 2 %", "Limita la degradación del ácido retinoico en la piel y potencia el retinol."], ["Niacinamida + ceramidas", "Protegen y fortalecen la barrera."]]},
"sv-b3-ampoule-hydra": {i: "Ampolla hidratante con niacinamida: refuerza la barrera e hidrata en superficie y en profundidad.", a: [
  ["Niacinamida", "Refuerza y restaura la barrera."], ["3 ácidos hialurónicos (medio, alto y muy alto peso)", "Hidratan en superficie y estimulan el colágeno."]]},
"sv-c-ampoule-anti-ox": {i: "Ampolla antioxidante con 20 % de vitamina C: protege de los radicales libres, unifica, reafirma e ilumina.", a: [
  ["Vitamina C optimizada 20 %", "Antioxidante con eficacia equivalente al 17 % de vitamina C pura; inhibe la tirosinasa y estimula el colágeno."]]},
"sv-b3-essence-hydra": {i: "Esencia hidratante: refuerza la barrera e hidrata en superficie y en profundidad.", a: [
  ["Niacinamida 2 %", "Refuerza y restaura la barrera."], ["2 ácidos hialurónicos (medio y alto peso)", "Hidratan y estimulan el colágeno."]]},
"sv-b3-masque-hydra-intensif": {i: "Mascarilla hidratante intensiva: refuerza la barrera e hidrata.", a: [
  ["Niacinamida", "Refuerza y restaura la barrera."], ["Ácido hialurónico", "Mantiene la epidermis hidratada."]]},
"sv-ampoule-refresh": {i: "Ampolla de contorno: despierta la mirada, reduce las ojeras y alisa los rasgos.", a: [
  ["Péptidos", "Alisan y relajan los rasgos."], ["Extracto de algas", "Reduce el color y el tamaño de las ojeras."], ["Cafeína", "Despierta y tonifica."]]},
"sv-ampoule-relax": {i: "Ampolla de contorno relajante: reduce ojeras y bolsas y alisa las arrugas.", a: [
  ["Postbiótico", "Reduce el color de las ojeras y las bolsas."], ["GABA 0,3 %", "Alisa las arrugas y relaja la piel."]]},
"sv-novedad-clairial-ampoule": {i: "Ampolla antimanchas: actúa en todas las fases de producción de melanina, protege de la contaminación y limita la reaparición de manchas.", a: [
  ["Complejo despigmentante 14 %", "Inspirado en la claridad de palmas y plantas: actúa en todas las fases de la melanina."],
  ["Vitamina C optimizada 2 %", "Ilumina y unifica."], ["Algas pardas y verdes", "Anticontaminación: limitan la inflamación que empeora las manchas."],
  ["Microorganismo marino", "Previene la reaparición de manchas."]]},
"sv-clairial-day": {i: "Crema de día antimanchas SPF 30: reduce la producción de melanina y protege de los UV, la luz azul y la contaminación que estimulan las manchas.", a: [
  ["2 filtros orgánicos fotoestables (SPF 30)", "Alta protección UVA y UVB."], ["Levadura del cactus saguaro", "Impide que la contaminación se adhiera a la piel."],
  ["Filtros + pigmentos minerales", "Barrera frente a la luz azul, que aumenta la melanina."],
  ["Complejo despigmentante (Dúo Blanco, derivado ferulado, microorganismo marino)", "Reduce la producción de melanina y aviva la luminosidad."]]},
"sv-clairial-creme-spf50-nueva-formula": {i: "Crema antimanchas SPF 50+: corrige las manchas (incluidas las de luz azul), evita que reaparezcan y protege de todo el espectro.", a: [
  ["Complejo despigmentante + niacinamida", "Corrige y reduce las manchas; la niacinamida bloquea la transferencia de melanosomas."],
  ["4 filtros orgánicos (patente)", "Muy alta protección UVA y UVB: previene manchas y melasma."],
  ["Niacinamida, microorganismos marinos y antioxidantes", "Protección frente a luz azul e infrarrojo."]]},
"sv-clairial-night-peel": {i: "Peeling de noche antimanchas: exfolia con suavidad para acelerar la despigmentación y refuerza la barrera.", a: [
  ["Enzima de papaya", "Exfoliante enzimático suave: acelera la despigmentación."], ["Niacinamida + levadura antiestrés", "Refuerzan la recuperación de la barrera."]]},
"sv-hydraliane-creme-legere": {i: "Crema hidratante ligera: hidrata, nutre y calma.", a: [
  ["Ácido hialurónico", "Hidrata en profundidad y en superficie."], ["Glicerina", "Retiene el agua."],
  ["Aceite de girasol ecológico", "Rico en omega 6 y 9: nutre."], ["Manzanilla", "Calma."]]},
"sv-hydraliane-creme": {i: "Crema hidratante: hidrata, nutre y protege de la oxidación.", a: [
  ["Ácido hialurónico", "Hidrata en profundidad y en superficie."], ["Glicerina", "Retiene el agua."],
  ["Aceites de girasol y oliva", "Nutren; el de oliva es antioxidante."]]},
"sv-hydraliane-creme-riche": {i: "Crema hidratante rica para piel seca: hidrata y nutre intensamente.", a: [
  ["Fase grasa 38 % (manteca de almendras, girasol y oliva)", "Nutre, suaviza y da flexibilidad."], ["Ácido hialurónico", "Hidrata."], ["Glicerina", "Retiene el agua."]]},
"sv-physiopure-huile-demaquillante": {i: "Aceite desmaquillante: los aceites vegetales disuelven el maquillaje y las impurezas sin dañar la piel.", a: [
  ["Aceites de almendra, morera, mirabel y semilla de manzana", "Desmaquillan con suavidad e hidratan."], ["Vitamina E", "Antioxidante."]]},
"sv-physiopure-eau-micellaire": {i: "Agua micelar: limpia y desmaquilla, hidrata y reoxigena la piel.", a: [
  ["Complejo hidratante", "Confort y flexibilidad, sin tirantez."], ["Magnesio oxigenante", "Energiza, reoxigena y detoxifica."]]},
"sv-physiopure-gelee-moussante-23": {i: "Gel limpiador sin jabón: limpia sin dañar la piel y la reoxigena.", a: [
  ["Tensioactivos suaves", "Limpian sin agredir."], ["Magnesio oxigenante", "Energiza, reoxigena y detoxifica."]]},
"sv-physiopure-tonique": {i: "Tónico: completa la limpieza, hidrata y reoxigena la piel.", a: [
  ["Complejo hidratante", "Confort y flexibilidad."], ["Magnesio oxigenante", "Energiza, reoxigena y detoxifica."]]},
"sv-spirial-roll-on-2": {i: "Antitranspirante roll-on: regula el sudor, absorbe la humedad y reduce el mal olor respetando la microbiota.", a: [
  ["Agentes reguladores del sudor", "Acción antitranspirante duradera."], ["Probiótico antiolor", "Reduce las bacterias del mal olor preservando las buenas."],
  ["Tierra de diatomeas", "5 veces más absorbente que el caolín o el talco."], ["Alantoína", "Alivia y evita la irritación."]]},
"sv-spirial-roll-on-vegetal": {i: "Desodorante roll-on vegetal: absorbe la humedad y reduce el mal olor respetando la microbiota.", a: [
  ["Probiótico antiolor", "Reduce las bacterias del mal olor preservando las buenas."], ["Tierra de diatomeas", "Absorbe la humedad."]]},
"sv-spirial-spray-vegetal-1": {i: "Desodorante en spray vegetal: regula la transpiración y frena las bacterias del olor, calmando la piel.", a: [
  ["Caléndula", "Calma la irritación y refuerza la barrera."], ["Cola de caballo", "Rica en silicio: regula la transpiración."],
  ["Extracto de salvia", "Antibacteriano y antifúngico: acción desodorante."]]},
"sv-spirial-spray-anti-transpirant": {i: "Spray antitranspirante: regula la transpiración, absorbe la humedad e inhibe los olores.", a: [
  ["Clorhidrato de aluminio", "Sal de aluminio mejor tolerada: regula la transpiración."], ["Citrato de trietilo", "Inhibe la formación de olores."],
  ["Extracto de salvia", "Antibacteriano: acción desodorante."]]},
"sv-copie-de-spirial-creme": {i: "Desodorante en crema antitranspirante: regula el sudor, absorbe la humedad y reduce el olor.", a: [
  ["Agentes reguladores del sudor", "Acción antitranspirante duradera."], ["Probiótico antiolor", "Reduce las bacterias del olor."],
  ["Tierra de diatomeas", "Absorbe la humedad."], ["Alantoína", "Evita la irritación."]]},
"sv-spirial-extreme": {i: "Antitranspirante para sudoración intensa: controla la transpiración de forma duradera y neutraliza el olor, calmando la piel.", a: [
  ["Complejo sudorregulador 20 % (cloruro + sesquiclorhidrato de aluminio)", "Controla de forma duradera la transpiración intensa."],
  ["Agente antibacteriano 38 %", "Neutraliza los olores."], ["Niacinamida 4 %", "Protege y calma la piel."]]},
"sv-spirial-deo-douche-1": {i: "Gel de ducha desodorante: limpia con suavidad y reduce las bacterias del olor respetando la microbiota.", a: [
  ["Base limpiadora suave", "Limpieza suave."], ["Probiótico antiolor", "Reduce las bacterias del mal olor preservando las buenas."]]}
};
D.prods.forEach(p => { if (A[p.id]) p.d.accion = A[p.id]; });
})();
