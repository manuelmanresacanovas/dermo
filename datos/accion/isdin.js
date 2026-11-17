/* «Cómo actúa» de los productos de Isdin.
   Fuente: bloque de ingredientes clave de la ficha oficial de cada producto (isdin.com/es),
   completado con los mecanismos de las páginas de teoría (Cosméticos, Patologías, La piel).
   Formato: id de producto → { i: resumen de cómo actúa, a: [[activo, qué hace], …] } */
(function(){
const ZINC = ["Zinc PCA", "Seborregulador: reduce el exceso de grasa y los brillos, matifica y refuerza la barrera."];
const NIA = ["Niacinamida", "Antiinflamatoria y seborreguladora: regula el sebo y disminuye las rojeces."];
const HA = ["Ácido hialurónico", "Retiene agua: hidrata y da elasticidad."];
const TRIM = ["Tri-Moisture Complex", "Ácido hialurónico de peso molecular medio y bajo (hidratan capas intermedias y profundas), provitamina B5 y polímeros hidratantes."];
const MULTI = ["Multi Protection Complex (vitamina E, Exo-P y VitA Tech)", "Protección antioxidante, antipolución y antiedad."];
const RAL = t => ["Retinaldehído", "Retinoide que solo necesita una conversión para pasar a ácido retinoico: más potente que el retinol y mejor tolerado que la tretinoína. " + t];
const MELA = ["Melatonina", "Antioxidante indirecto: estimula las defensas antioxidantes y repara durante la noche."];
const BAKU = ["Bakuchiol", "Activo vegetal «retinol-like» sin el potencial irritante de los retinoides: restaura elasticidad y firmeza."];
const CALMO = ["Calmoactive®", "Alivia el eritema (rojez) y el picor."];
const GLI = (pct, libre) => ["Ácido glicólico " + pct + " (" + libre + " de glicólico libre)", "AHA de molécula muy pequeña: rompe las uniones entre corneocitos, suaviza la textura, estimula la renovación celular y la síntesis de colágeno. Parcialmente neutralizado para que sea más tolerable."];
const A = {
"isd-isdinceutics-essential-cleansing": {i: "Aceite limpiador oil-to-milk: disuelve el maquillaje, el fotoprotector y las partículas contaminantes, y al añadir agua se convierte en leche y se aclara. Primer paso de la doble limpieza.", a: [
  ["Aceite de oliva mediterráneo", "Antioxidante: arrastra la contaminación y los restos oleosos como el maquillaje o el fotoprotector."],
  ["Aceite de semillas de girasol", "Rico en omega 6 y 9: nutre, hidrata, calma y refuerza la barrera."],
  ["Esclareólida (Salvia sclarea)", "Calmante y antioxidante; ayuda a proteger de la pigmentación causada por el sol."]]},
"isd-isdinceutics-essential-purifier": {i: "Espuma limpiadora extradensa: limpia e hidrata reforzando la barrera, con extractos calmantes y antioxidantes.", a: [
  ["Extracto de hoja de olivo", "Calmante y antioxidante: protege del daño oxidativo."],
  ["Isomerato de sacárido", "Hidratación inmediata y duradera; refuerza la barrera y previene la deshidratación."],
  ["Extracto de lavanda", "Calmante y antioxidante."]]},
"isd-essential-scrub-mini-icon-15-g": {i: "Gel limpiador exfoliante físico: sus partículas eliminan por fricción las células muertas, mientras hidrata y calma.", a: [
  ["Partículas de semilla de oliva", "Exfoliación suave: eliminan las células muertas."],
  ["Extracto de salvia", "Hidrata y mejora la función barrera."],
  ["Extracto de lavanda", "Calmante y antioxidante."]]},
"isd-hyaluronic-concentrate": {i: "Sérum aqua-gel que hidrata, rellena y redensifica la piel, mejora el tono y la elasticidad y reduce la apariencia del poro.", a: [
  ["Ácido hialurónico puro", "Retiene agua: ultrahidratante, aporta elasticidad."],
  ["BioMarine", "Componente marino que mantiene la piel firme y tersa con efecto relleno."],
  ["Matriquinas", "Péptidos señal que mejoran el tono y la elasticidad y reducen las arrugas."],
  ["PoreReducer", "Disminuye la apariencia del poro y aporta luminosidad."]]},
"isd-isdinceutics-hyaluronic-moisture-normal": {i: "Hidratante para piel normal a seca: hidrata a distintas profundidades, protege de la oxidación y la contaminación y ayuda con los primeros signos de la edad.", a: [
  TRIM, MULTI, ["Extracto de Camellia japonica", "Antioxidante y antipolución."]]},
"isd-hyaluronic-moisture-oily": {i: "Hidratante matificante para piel mixta o grasa: hidrata, protege de la oxidación, regula la grasa y reduce la apariencia del poro.", a: [
  TRIM, MULTI, ["Matte-Complex (azúcares naturales + Lens esculenta)", "Reequilibra la flora cutánea, regula la grasa, reduce poros e imperfecciones."]]},
"isd-hyaluronic-moisture-sensitive-skin": {i: "Hidratante para piel sensible: hidrata, protege de la oxidación y alivia el enrojecimiento y la irritación.", a: [
  TRIM, MULTI, ["Redness Relief Complex (niacinamida)", "Alivia el enrojecimiento y reduce la aparición de rojeces e irritación."]]},
"isd-flavo-c": {i: "Sérum antioxidante: neutraliza los radicales libres que provoca el sol y la contaminación, estimula el colágeno y devuelve la luminosidad.", a: [
  ["Vitamina C (8 %)", "Antioxidante potente: protege del daño de los radicales libres, estimula el colágeno, inhibe las MMP que lo degradan y aporta luminosidad."],
  ["Ginkgo biloba", "Antioxidante: neutraliza los radicales libres y protege del daño solar."]]},
"isd-flavo-c-forte": {i: "Sérum de vitamina C pura que se activa al mezclar sus dos fases (polvo y líquido), para que llegue fresca y estable: estimula el colágeno, ilumina y protege de los radicales libres y la contaminación.", a: [
  ["Vitamina C pura 15 %", "Estimula la síntesis de colágeno, ilumina y protege de los radicales libres."],
  ["Vitamina E", "Potencia la acción antioxidante de la vitamina C."], HA,
  ["Sistema Pollution-Defense", "Protege de la contaminación y los alérgenos."]]},
"isd-flavo-c-intense": {i: "Sérum bifásico antioxidante con tres formas de vitamina C que llegan a distintas profundidades de la piel, reforzadas con potenciadores antioxidantes.", a: [
  ["Ácido L-ascórbico", "Vitamina C pura: actúa en la superficie neutralizando radicales libres."],
  ["Ácido 3-O-etil ascórbico", "Derivado que penetra en capas profundas del estrato córneo; antiedad y reduce poros."],
  ["Tetraisopalmitato de ascorbilo", "Derivado liposoluble que llega hasta el estrato granuloso: aclara, mejora la textura e hidrata."],
  ["Hinokitiol", "Neutraliza radicales libres y ayuda a reciclar la vitamina C."],
  ["Ácido levulínico", "Mejora la distribución de los activos en la epidermis."],
  ["Tocoferol (vitamina E)", "Refuerza la acción antioxidante junto a la vitamina C."]]},
"isd-isdinceutics-flavo-c-ultraglican": {i: "Ampollas antioxidantes y reafirmantes: protegen de los radicales libres, estimulan el colágeno y refuerzan las estructuras de sostén de la piel.", a: [
  ["Vitamina C pura", "Antioxidante: estimula el colágeno y devuelve la luminosidad."],
  ["Ultraglicanos", "Proteoglicanos y preproteoglicanos que refuerzan las estructuras de sostén: firmeza, elasticidad e hidratación."],
  ["Ácido hialurónico", "Retiene agua y atenúa las arrugas."]]},
"isd-isdinceutics-instant-flash": {i: "Ampolla de efecto lifting inmediato (hasta 8 horas): tensa la piel y borra los signos de fatiga en un instante.", a: [
  ["LiftFirm", "Efecto lifting inmediato y prolongado: atenúa arrugas y líneas."],
  ["Peptide Q10", "Energiza la piel y reduce los signos de fatiga y estrés."],
  ["ContourBoost", "Atenúa los signos del envejecimiento."]]},
"isd-age-reverse-day": {i: "Crema de día antiedad: protege el colágeno y la elastina de la oxidación y la glicación, estimula que se fabriquen más e hidrata hasta 12 horas.", a: [
  ["Alteromonas ferment extract", "Antipolución: forma una barrera protectora frente a la oxidación y la deshidratación."],
  ["Carnosina", "Antiglicación: reduce la unión de los azúcares a las proteínas y mantiene el colágeno y la elastina funcionales."],
  ["Syn-Hycan (tripéptido)", "Péptido señal: estimula los fibroblastos para producir más colágeno y elastina; remodela el óvalo."],
  ["Ácido hialurónico reticulado", "Hidratación duradera, hasta 12 horas."]]},
"isd-age-reverse-night": {i: "Crema de noche reparadora: combate el daño oxidativo del día, frena la glicación del colágeno y aporta bienestar a la piel.", a: [
  MELA,
  ["Carnosina", "Antiglicación: evita que los azúcares deterioren el colágeno y la elastina."],
  ["Helichrysum italicum", "Aumenta las β-endorfinas de la epidermis: sensación de bienestar y alivio."]]},
"isd-retinal-intense": {i: "Sérum bifásico de noche con retinal: acelera la renovación celular para reducir arrugas, con activos que lo hacen más tolerable.", a: [
  RAL("Mejora mucho las arrugas con menos impacto sobre la piel."), BAKU,
  ["Vit-A-Tech", "Complejo «retinol-like» que estimula la renovación celular de la epidermis."], MELA,
  ["Niacinamida", "Hidrata y alivia el enrojecimiento."]]},
"isd-retinal-smooth": {i: "Sérum bifásico de noche con retinal suave, para iniciarse: renueva la piel y previene las primeras líneas. Las dos fases se mezclan al aplicarlo para conservar el retinal estable.", a: [
  RAL("Renueva la piel y previene las primeras líneas de expresión."),
  ["Matriquinas", "Pequeños péptidos que favorecen la microcirculación y la renovación; dan luminosidad."], MELA,
  ["Niacinamida", "Hidrata y alivia el enrojecimiento."]]},
"isd-retinal-eyes": {i: "Sérum bifásico de noche para el contorno con retinal: regenera colágeno y elastina para mejorar las arrugas, con efecto lifting inmediato.", a: [
  RAL("Favorece la regeneración de colágeno y elastina con buena tolerancia."), BAKU,
  ["LiftExtract", "Efecto lifting instantáneo; suaviza las líneas."], MELA,
  ["Niacinamida", "Hidrata y calma."]]},
"isd-vital-eyes": {i: "Contorno reparador de noche: combate el estrés oxidativo del día y tensa al instante.", a: [
  MELA, ["LiftFirm", "Efecto lifting inmediato que suaviza líneas y arrugas."],
  ["Cafeína", "Detoxificante y antioxidante."],
  ["Extracto de arroz", "Aumenta la protección frente al envejecimiento prematuro."]]},
"isd-k-ox-eyes": {i: "Contorno que actúa sobre el color de las ojeras (moradas o pigmentadas) y sobre las bolsas, e hidrata.", a: [
  ["Vitamina K óxido", "Disminuye el color morado o pigmentado de las ojeras."],
  ["Eyeliss™", "Hesperidina, dipéptidos y palmitoil tetrapéptido-7: previene y combate las bolsas."],
  ["Haloxyl™", "Ilumina la mirada y reduce las ojeras."], HA]},
"isd-hyaluronic-eyes": {i: "Contorno en gel-sorbete: hidrata en profundidad al instante, energiza, descongestiona y da un aspecto descansado.", a: [
  ["Hydrating Complex (ácido hialurónico, hialuronato sódico y betaína)", "Hidratación profunda e inmediata."],
  ["Algae Complex (tres algas de agua fría)", "Energizante: mantiene la estructura, mejora el tono y descongestiona."],
  ["Andrographis paniculata", "Confort, aspecto descansado y mirada luminosa."]]},
"isd-isdinceutics-melaclear": {i: "Sérum antimanchas de doble acción: tres despigmentantes actúan sobre distintos pasos de la formación de la mancha, y un complejo de ácidos exfolia para eliminar el pigmento de la superficie.", a: [
  ["Ácido tranexámico", "Regula MITF y reduce la pigmentación."],
  ["Niacinamida", "Bloquea la transferencia de melanosomas a los queratinocitos."],
  ["4-n-butilresorcinol", "Despigmentante que reduce la pigmentación y las manchas solares."],
  ["Complejo de hidroxiácidos (salicílico, mandélico, fítico y gluconolactona)", "Exfolian y renuevan la piel: mejoran tono y textura."]]},
"isd-isdinceutics-salicylic-renewal": {i: "Sérum exfoliante con 12 % de ácidos (AHA, BHA y PHA): desobstruye y minimiza los poros, reduce imperfecciones e hidrata.", a: [
  ["Ácido salicílico", "BHA liposoluble: penetra en el poro, lo desobstruye y exfolia."],
  ["Ácido glicólico", "AHA: exfolia y estimula la producción de colágeno."],
  ["Ácido láctico", "AHA suave: retiene la humedad e hidrata."],
  ["Gluconolactona", "PHA: exfoliación respetuosa con la barrera."],
  ["Ceratonia siliqua + hialuronato sódico", "Refuerzan la hidratación natural de la piel."],
  ["Ácido hialurónico de bajo peso molecular", "Aumenta la producción propia de ácido hialurónico y rellena las arrugas."]]},
"isd-glicoisdin-8-soft": {i: "Crema exfoliante suave para piel seca: renueva la superficie y reduce las líneas, protegiendo la barrera mientras exfolia.", a: [
  GLI("8 %", "3,2 %"),
  ["Ceramida y aceite de borraja", "Hacen que la renovación respete la barrera; aportan flexibilidad e hidratación."],
  ["Vitamina E", "Antioxidante."]]},
"isd-glicoisdin-15-moderate": {i: "Gel exfoliante de intensidad moderada: renueva la superficie, suaviza la textura y estimula el colágeno, con efecto calmante.", a: [
  GLI("15 %", "6,1 %"), ["Aloe vera", "Hace la exfoliación más respetuosa con la piel."]]},
"isd-isdinceutics-glicoisdin-25": {i: "Gel exfoliante intenso: renueva la superficie, suaviza la textura y estimula el colágeno, calmando e hidratando.", a: [
  GLI("25 %", "9,5 %"), ["Aloe vera", "Hace la exfoliación más respetuosa con la piel."]]},
"isd-auriderm": {i: "Crema con vitamina K óxido de fórmula patentada: disminuye la apariencia de moratones y rojeces y estimula el colágeno con antioxidantes.", a: [
  ["Vitamina K óxido", "Disminuye la apariencia de moratones y rojeces."],
  ["Vitamina E", "Antioxidante potente."],
  ["Vitamina C", "Antioxidante que estimula la producción de colágeno."]]},
"isd-micellar-cleanser": {i: "Limpiador micelar para piel grasa: las micelas atrapan sebo, impurezas y maquillaje, y el zinc matifica sin resecar.", a: [
  ["Tecnología micelar", "Las micelas atrapan en su núcleo la grasa y la suciedad, y su parte externa se mezcla con el agua para retirarlas."],
  ZINC, ["Glicerina", "Humectante: limpia sin dañar la barrera."]]},
"isd-acniben-limpiador-purificante": {i: "Espuma limpiadora para piel grasa: limpia con suavidad y regula el exceso de sebo.", a: [
  ["Zinc PCA", "Disminuye el exceso de sebo y limpia con suavidad."], NIA]},
"isd-acniben-limpiador-matificante": {i: "Gel limpiador matificante: desobstruye los poros, elimina impurezas y reduce el sebo sin resecar.", a: [
  ["Zinc PCA", "Matifica, reduce los brillos y la visibilidad de los poros."],
  ["Ácido salicílico", "BHA liposoluble que penetra en el poro y lo desobstruye."],
  ["Glicerina", "Humectante: mantiene la piel hidratada."]]},
"isd-exfoliante-suave": {i: "Gel exfoliante físico suave para piel grasa: las micropartículas eliminan las células muertas y los activos regulan el sebo y calman.", a: [
  ["Micropartículas de celulosa", "Exfolian con suavidad y eliminan las células muertas."],
  ["Niacinamida", "Reduce el sebo y la visibilidad de los poros."],
  ["Zinc PCA", "Seborregulador que reduce los brillos."],
  ["Betaína", "Reduce el enrojecimiento."]]},
"isd-acniben-mascarilla-purificante": {i: "Mascarilla de arcilla para piel grasa: absorbe el exceso de sebo, elimina impurezas y matifica.", a: [
  ["Arcilla de Tanakura", "Arcilla marina porosa rica en minerales: absorbe la grasa y las impurezas."], NIA,
  ["Zinc PCA", "Reduce granos e imperfecciones, matifica y minimiza los poros."]]},
"isd-acniben-pore-minimizer-pads-30u": {i: "Discos exfoliantes de triple acción para piel grasa: mantienen los poros limpios, controlan el exceso de sebo y mejoran la textura. Tienen dos caras con texturas distintas para cada zona del rostro. Isdin no detalla sus activos.", a: []},
"isd-acniben-control-de-brillos-y-granos": {i: "Gel-crema hidratante matificante: regula el exceso de grasa, reduce los brillos y los granos, e hidrata.", a: [
  ["Zinc PCA", "Seborregulador."], NIA, HA]},
"isd-acniben-night-concentrate": {i: "Sérum de noche anti-imperfecciones: renueva la piel con retinal, regula el sebo y reduce granos, puntos negros y marcas.", a: [
  RAL("Reduce los comedones y mejora la textura de la piel con acné."),
  ["Niacinamida", "Reduce las imperfecciones y las rojeces y fortalece la barrera."],
  ["Betaína", "Calmante e hidratante."], ["Zinc PCA", "Seborregulador."],
  ["Extracto de semilla de Bixa orellana", "Disminuye el sebo y los brillos."],
  ["Flor de Opuntia ficus-indica", "Reduce las marcas residuales y unifica el tono."]]},
"isd-on-the-spot": {i: "Gel secante localizado: exfolia y libera el poro para reducir el volumen del grano y evita las marcas.", a: [
  ["Niacinamida", "Interrumpe la evolución de la imperfección y reduce el volumen del grano."],
  ["Ácido salicílico", "BHA liposoluble: exfolia y libera el poro."],
  ["Ácido mandélico", "Ayuda a evitar las marcas residuales y alisa la piel."]]},
"isd-acniben-cc-cream-bronze-spf30-40ml": {i: "Crema con color SPF 30 para piel grasa en emulsión inversa: la fase externa actúa primero (cobertura, control de brillos y protección) y los activos de tratamiento se liberan poco a poco.", a: [
  ["Filtros minerales", "Reflejan y dispersan la radiación UVA, UVB y la luz azul (SPF 30)."],
  ["Zinc PCA", "Regula el sebo y reduce imperfecciones."],
  ["Niacinamida", "Refuerza la barrera, regula el sebo y minimiza los poros."], HA,
  ["Centella asiática", "Mejora rojeces y marcas."],
  ["Flor de Opuntia ficus-indica", "Favorece la renovación y la uniformidad."],
  ["Oil Control System", "Absorbe el sebo al instante sin obstruir el poro."],
  ["Long-Lasting Color Tech", "Pigmentos que se funden con la piel para una cobertura natural y duradera."]]},
"isd-acniben-body-spray": {i: "Spray corporal exfoliante: renueva la superficie de la piel para reducir granos e imperfecciones de espalda y pecho y regular el sebo.", a: [
  ["Ácido salicílico", "BHA: mejora los granos, regula el sebo y suaviza la textura."],
  ["Ácido glicólico", "AHA: promueve la renovación celular y mejora las imperfecciones."]]},
"isd-acniben-repair-limpiador": {i: "Emulsión limpiadora para piel fragilizada por tratamientos del acné: limpia sin aclarado (evitando el efecto secante del agua dura o clorada), hidrata y calma.", a: [CALMO]},
"isd-gel-crema": {i: "Gel-crema reparador para piel fragilizada por los tratamientos antiacné: hidrata intensamente, calma la rojez y el picor y ayuda a reparar.", a: [
  ["Calmoactive®", "Alivia las rojeces y el picor."],
  ["Betaína", "Hidrata y ayuda a reparar."], ["Glicerina", "Humectante."]]},
"isd-acniben-repair-renovador-labial": {i: "Bálsamo labial reparador para labios agredidos por tratamientos dermatológicos: protege, repara e hidrata de forma intensa y prolongada.", a: [
  CALMO, ["Ácido hialurónico", "Hidrata y ayuda a reparar las fisuras."],
  ["Pantenol", "Regenera e hidrata las capas externas."],
  ["Manteca de karité", "Emoliente."]]}
};
D.prods.forEach(p => { if (A[p.id]) p.d.accion = A[p.id]; });
})();
