/* «Cómo actúa» de los productos de La Roche-Posay.
   Fuente: bloque «Ingredientes clave» de la ficha oficial de cada producto (laroche-posay.es),
   completado con los mecanismos de las páginas de teoría (Cosméticos, Patologías, La piel).
   Cuando una ficha repite por error el texto de otro producto, se usa la descripción que la marca da del mismo activo en sus otras fichas.
   Formato: id de producto → { i: resumen de cómo actúa, a: [[activo, qué hace], …] } */
(function(){
const AT = (t) => ["Agua termal de La Roche-Posay", t || "Calma y tiene propiedades antioxidantes."];
const GLI = (t) => ["Glicerina", t || "Humectante: atrae y retiene el agua en la piel."];
const MICELAS = ["Micelas", "Atrapan el maquillaje, las impurezas y la contaminación sin alterar la barrera cutánea."];
const VITE = ["Vitamina E", "Antioxidante: ayuda a proteger la piel de las agresiones externas."];
const KARITE = ["Manteca de karité", "Nutre, hidrata y refuerza la barrera."];
const XL = ["XL-PROTECT", "Tecnología patentada de filtros: muy alta protección UVA/UVB de amplio espectro y ayuda frente a la contaminación y el infrarrojo. Los filtros químicos absorben la radiación UV y la transforman en energía no dañina."];
const MEX400 = ["Mexoryl 400", "Filtro exclusivo que protege de los UVA ultralargos (380-400 nm): son imperceptibles, penetran mucho y suponen el 30 % de la radiación UV que recibimos todo el año."];
const NETLOCK = ["Tecnología Netlock", "Sus microgotas se unen y forman una película de protección homogénea y resistente que no migra, con textura invisible no grasa."];
const AIRL = ["Airlicium™", "Micropartículas matificantes que absorben al instante el exceso de sebo y controlan los brillos (sebo, sudor, humedad)."];
const HA = (t) => ["Ácido hialurónico", t || "Retiene el agua: hidrata, rellena y corrige las arrugas."];
const B5 = (t) => ["Vitamina B5 (pantenol)", t || "Calmante y reparadora: repara la barrera cutánea y reduce la pérdida de agua."];
const NIA = (t) => ["Niacinamida", t];
const SAL = (t) => ["Ácido salicílico", "BHA liposoluble que penetra en el poro: " + t];
const LHA = (t) => ["LHA (lipohidroxiácido)", "Derivado del ácido salicílico de La Roche-Posay: " + t];
const ZINC = (t) => ["Zinc", t || "Reduce el exceso de sebo y purifica."];
const PHYLO = ["Phylobioma", "Actúa sobre la sobreproducción de sebo y reduce el crecimiento de la bacteria C. acnes IA1; según la marca reduce el biofilm, la inflamación y la hiperqueratinización."];
const PROCERAD = ["Procerad", "Ceramida antimarcas patentada: ayuda a prevenir las marcas rojas o marrones que deja el acné."];
const MADE = ["Madecassoside (Centella asiática)", "Calmante; favorece la renovación y la reparación de la piel."];
const TRIBIOMA = ["Tribioma", "Complejo prebiótico (azúcares, extractos vegetales y fermentos) que reequilibra el microbioma para mejorar la calidad de la reparación."];
const AQUAPOSAE = ["Aqua Posae Filiformis", "Reequilibra el microbioma de la piel."];
const A = {
"lrp-agua-micelar-ultra-pieles-reactivas": {i: "Agua micelar para piel reactiva: limpia y desmaquilla sin frotar, hidrata y calma la tirantez y las rojeces.", a: [
  MICELAS, GLI("Al 5 %: hidratante y antitirantez."), AT("Calma y limpia la piel de impurezas.")]},
"lrp-agua-micelar-ultra-piel-sensible": {i: "Agua micelar para piel sensible: limpia y desmaquilla sin alterar la barrera, hidrata y calma.", a: [
  MICELAS, GLI("Hidratante y antitirantez."), AT("Calma y limpia la piel de impurezas.")]},
"lrp-agua-micelar-oil-infused": {i: "Agua micelar bifásica: las micelas capturan las impurezas y su aceite ultrafino disuelve el maquillaje resistente al agua, sin frotar y sin sensación grasa.", a: [
  MICELAS, ["Aceite ultrafino", "Elimina el maquillaje resistente al agua sin dejar sensación grasa."], AT("Calma y reduce la irritación.")]},
"lrp-agua-termal": {i: "Agua termal en spray: calma, suaviza y protege la piel sensible e irritada. Su único ingrediente es el agua termal de La Roche-Posay; la marca no detalla más su composición en la ficha.", a: [
  AT("Calmante y antioxidante; es la base de todas las fórmulas de la marca.")]},
"lrp-anthelios-post-uv-locion-after-sun": {i: "Loción after-sun: calma, nutre y repara la piel tras la exposición solar.", a: [
  AT("Calma."), GLI("Nutre e hidrata."), B5("Repara.")]},
"lrp-posthelios-gel-fondant": {i: "Gel after-sun: hidrata, calma y repara la barrera de la piel tras el sol, y combate los radicales libres que genera la radiación.", a: [
  KARITE, GLI("Hidrata y ayuda a reparar la barrera."), AT("Calmante y antioxidante: combate los radicales libres que generan los rayos UVA y UVB.")]},
"lrp-anthelios-uvair-spf-50-plus": {i: "Fotoprotector facial SPF50+ y PA++++ de textura ligera como el aire (tecnología UVAIR™): protege de UVA y UVB, hidrata y regula el sebo.", a: [
  ["Filtros UVA/UVB de amplio espectro", "SPF50+ y PA++++: absorben la radiación UVA y UVB."],
  HA("Mantiene la piel hidratada."), NIA("Antioxidante y reguladora del sebo.")]},
"lrp-anthelios-uvair-spf-50-plus-serum-con-protector-solar": {i: "Sérum con protección solar SPF50+: protege de UVA y UVB a la vez que hidrata todo el día, es antioxidante y regula el sebo.", a: [
  ["Filtros UVA/UVB de amplio espectro", "Absorben la radiación UVA y UVB."],
  HA("Mantiene niveles altos de hidratación todo el día."), VITE, NIA("Antioxidante y reguladora del sebo.")]},
"lrp-anthelios-uvair-spf-50-plus-serum-con-color": {i: "Sérum con protección solar SPF50+ y color: protege de UVA y UVB, unifica el tono, hidrata y regula el sebo.", a: [
  ["Filtros UVA/UVB de amplio espectro", "Absorben la radiación UVA y UVB."],
  HA("Mantiene niveles altos de hidratación todo el día."), VITE, NIA("Antioxidante y reguladora del sebo."),
  ["Pigmentos (óxidos de hierro y dióxido de titanio)", "Aportan color y unifican el tono."]]},
"lrp-anthelios-uvair-vitamin-sun-stick-spf-50-plus": {i: "Stick solar facial SPF50+ y PA++++: protección de amplio espectro con antioxidante, en formato para reaplicar.", a: [
  ["Filtros UVA/UVB de protección muy alta", "SPF50+ y PA++++: absorben la radiación UVA y UVB."], VITE]},
"lrp-anthelios-uvmune-400-fluido-antimanchas-spf-50-plus": {i: "Fotoprotector despigmentante SPF50+: frena la radiación que estimula las manchas, incluidos los UVA ultralargos, y actúa sobre la hiperpigmentación.", a: [
  MEX400,
  ["Melasyl™", "Activo patentado de La Roche-Posay contra la hiperpigmentación; según la marca, más eficaz que 5 activos de referencia (vitamina C, feniletil resorcinol, niacinamida, ácido kójico y arbutina). La marca no explica su mecanismo."]]},
"lrp-anthelios-uvsport-bruma-invisible-refrescante-spf50-plus": {i: "Bruma solar SPF50+ para deporte: protege de UVA y UVB, hidrata 24 horas y protege la barrera del estrés oxidativo.", a: [
  ["Filtros UVA/UVB", "Absorben la radiación UVA y UVB."], VITE, GLI("Hidrata la piel 24 horas."),
  AT("Protege la barrera y es antioxidante frente al estrés oxidativo.")]},
"lrp-anthelios-uvsport-locion-resistente-al-sudor-y-la-humedad": {i: "Loción solar SPF50+ para deporte, resistente al sudor y la humedad: protege de UVA y UVB, hidrata 24 horas y protege la barrera.", a: [
  ["Filtros UVA/UVB", "Absorben la radiación UVA y UVB."], VITE, GLI("Hidrata la piel 24 horas."),
  AT("Protege la barrera y es antioxidante frente al estrés oxidativo.")]},
"lrp-anthelios-uvsport-pro-resistance-protector-solar-stick-spf50-plus": {i: "Stick solar SPF50+ para deporte: protección de amplio espectro, incluidos los UVA ultralargos.", a: [
  MEX400, ["Sistema Airlicium™ de amplio espectro", "SPF50+ y PA++++."], VITE]},
"lrp-anthelios-100-ka-med": {i: "Producto sanitario de protección solar muy alta para prevenir la queratosis actínica y el cáncer de piel no melanoma: protege incluso de los UVA ultralargos, calma y repara la barrera.", a: [
  ["Mexoryl", "Protege de los UVA ultralargos (380-400 nm), imperceptibles y dañinos: el 30 % de la radiación UV que recibimos todo el año."],
  NIA("Calma la piel irritada y reduce las rojeces."), B5("Calmante y reparador: repara la función barrera.")]},
"lrp-anthelios-uvmune-400-dermo-pediatrics-locion-hidratante-spf-50-plus": {i: "Loción solar infantil SPF50+: protege de UVA y UVB, incluidos los UVA ultralargos, y nutre e hidrata.", a: [
  MEX400, VITE, KARITE]},
"lrp-anthelios-uvmune-400-dermo-pediatrics-fluido-invisible-spf-50-plus": {i: "Fluido solar infantil SPF50+: protege de UVA y UVB, incluidos los UVA ultralargos, y nutre e hidrata.", a: [
  MEX400, VITE, KARITE]},
"lrp-anthelios-uvmune-400-dermo-pediatrics-spray-invisible-spf-50-plus": {i: "Spray solar infantil SPF50+: protege de UVA y UVB, incluidos los UVA ultralargos, y nutre e hidrata.", a: [
  MEX400, VITE, KARITE]},
"lrp-anthelios-dermo-pediatrics-spf-50-leche-bebe": {i: "Leche solar para bebés SPF50+: muy alta protección de amplio espectro, calma y refuerza la barrera.", a: [
  XL, KARITE, AT("Calmante y antioxidante frente a los radicales libres que generan los rayos UVA y UVB.")]},
"lrp-anthelios-dermo-pediatrics-wet-skin-lotion-spf-50-plus-piel-humeda": {i: "Loción solar infantil que se aplica sobre piel mojada: forma una película que repele el agua y protege de UVA y UVB.", a: [
  ["Mexoryl XL", "Filtro patentado de muy alta protección UVA/UVB de amplio espectro."],
  ["Tecnología Wet Skin", "Complejo hidrófobo que crea una película sobre la piel para repeler el agua."], GLI("Hidrata tras la aplicación.")]},
"lrp-anthelios-family-spray-spf-50-plus": {i: "Spray solar corporal SPF50+ para toda la familia: protección muy alta, homogénea y resistente, con textura invisible.", a: [
  NETLOCK, XL, GLI("Hidrata tras la aplicación.")]},
"lrp-anthelios-leche-hidratante-spf-50-plus": {i: "Leche solar corporal SPF50+: protección muy alta, homogénea y resistente que además hidrata.", a: [
  NETLOCK, XL, GLI("Hidrata tras la aplicación.")]},
"lrp-anthelios-invisible-spray-spf50-plus": {i: "Spray solar corporal SPF50+ invisible: protección muy alta, homogénea y resistente, sin sensación grasa.", a: [
  XL, NETLOCK]},
"lrp-anthelios-xl-spf-50-bruma-invisible-ultra-ligera": {i: "Bruma solar corporal SPF50+: protección muy alta de amplio espectro con textura ultraligera, hidrata y calma.", a: [
  XL, GLI("Hidrata tras la aplicación."), AT("Calmante y antioxidante frente a los radicales libres que genera el sol.")]},
"lrp-anthelios-spf-50-bruma-facial-invisible-anti-brillos": {i: "Bruma solar facial SPF50 antibrillos: protege del sol y controla el sebo, el sudor y la humedad; se puede reaplicar sobre el maquillaje.", a: [
  XL, AIRL, GLI("Hidrata la piel.")]},
"lrp-anthelios-age-correct-spf-50-cc-crema": {i: "CC crema con protección solar SPF50: protege del sol, el principal causante del fotoenvejecimiento, y además trata arrugas y manchas.", a: [
  HA("Efecto más profundo que el ácido hialurónico convencional para reducir las arrugas."),
  ["Feniletil resorcinol", "Despigmentante: según la marca, 1.000 veces más eficaz que la vitamina C para reducir manchas."],
  NIA("Calma y reduce la hiperpigmentación (bloquea la transferencia de melanosomas).")]},
"lrp-anthelios-oil-correct": {i: "Fotoprotector diario en gel-crema para piel grasa con imperfecciones: protege del sol, desobstruye los poros, regula el sebo y corrige las imperfecciones.", a: [
  SAL("desobstruye los poros en profundidad."), NIA("Corrige las imperfecciones; antiinflamatoria y seborreguladora."),
  ZINC("Antiinflamatorio y regulador del sebo.")]},
"lrp-anthelios-sensitive-areas-stick-spf-50-plus": {i: "Stick solar SPF50+ para zonas sensibles (labios, nariz, orejas, cicatrices): mezcla de filtros y antioxidantes que va más allá de la protección UVA y UVB.", a: [
  ["XL-PROTECT", "Mezcla potente de filtros UV y antioxidantes."], GLI("Hidrata tras la aplicación."), AT()]},
"lrp-anthelios-uvmune-400-crema-hidratante-spf-50-plus": {i: "Crema solar facial hidratante SPF50+: protección de amplio espectro, incluidos los UVA ultralargos, con una película homogénea y resistente.", a: [
  MEX400, NETLOCK, XL]},
"lrp-anthelios-uvmune-400-crema-hidratante-spf-50-plus-con-color": {i: "Crema solar facial hidratante SPF50+ con color: protección de amplio espectro, incluidos los UVA ultralargos, y unifica el tono.", a: [
  MEX400, NETLOCK, XL]},
"lrp-anthelios-uvmune-400-fluido-invisible-spf-50-plus-sin-perfume": {i: "Fluido solar facial invisible SPF50+: protección de amplio espectro, incluidos los UVA ultralargos, con una película homogénea y resistente.", a: [
  MEX400, NETLOCK]},
"lrp-anthelios-uvmune-400-fluido-spf-50-plus-con-color": {i: "Fluido solar facial SPF50+ con color: protección de amplio espectro, incluidos los UVA ultralargos, y unifica el tono.", a: [
  MEX400, NETLOCK, XL]},
"lrp-anthelios-uvmune-400-oil-control-fluido-spf-50-plus": {i: "Fluido solar matificante SPF50+ para piel grasa: protege incluso de los UVA ultralargos y absorbe el sebo para controlar los brillos día tras día.", a: [
  MEX400, AIRL]},
"lrp-anthelios-uvmune-400-oil-control-fluido-spf-50-plus-con-color": {i: "Fluido solar matificante SPF50+ con color para piel grasa: protege incluso de los UVA ultralargos, absorbe el sebo y unifica el tono.", a: [
  MEX400, AIRL]},
"lrp-anthelios-uvmune-400-oil-control-gel-crema-spf-50-plus-sin-perfume": {i: "Gel-crema solar matificante SPF50+ para piel grasa: protege incluso de los UVA ultralargos y absorbe el sebo para controlar los brillos.", a: [
  MEX400, AIRL]},
"lrp-anthelios-uvmune-400-oil-control-gel-crema-spf-50-plus-con-color": {i: "Gel-crema solar matificante SPF50+ con color: protege incluso de los UVA ultralargos, absorbe el sebo y unifica el tono.", a: [
  MEX400, AIRL]},
"lrp-cicaplast-b5-serum": {i: "Sérum reparador: repara la barrera, acelera la reparación de la epidermis reequilibrando el microbioma y mejora la textura con una exfoliación suave.", a: [
  B5("Al 10 %: repara y protege la barrera de la piel."),
  ["APF", "Acelera la reparación epidérmica y ayuda a reequilibrar el microbioma."],
  ["HEPES", "Exfolia suavemente y mejora la textura."]]},
"lrp-cicaplast-baume-b5-plus": {i: "Bálsamo reparador multiusos: repara la barrera, reequilibra el microbioma para que la reparación sea de calidad y calma.", a: [
  B5("Al 5 %: repara la barrera cutánea."), TRIBIOMA, MADE]},
"lrp-cicaplast-baume-b5-spf-50": {i: "Crema reparadora con SPF50: repara la barrera, reequilibra el microbioma y calma, protegiendo del sol la piel en reparación (para evitar marcas).", a: [
  B5("Al 5 %: repara la barrera cutánea."), TRIBIOMA, MADE]},
"lrp-cicaplast-gel-b5": {i: "Gel de silicona reparador: repara la barrera, favorece la renovación de la epidermis y limita la adhesión de bacterias.", a: [
  B5(), MADE, ["Gluconato de cobre, zinc y manganeso", "Complejo antimicrobiano que disminuye la adhesión de las bacterias."]]},
"lrp-cicaplast-manos": {i: "Crema reparadora de manos: crea una película protectora que mantiene la hidratación y repara la barrera.", a: [
  GLI("Crea una película protectora y mantiene la hidratación."), NIA("Calma y repara la barrera.")]},
"lrp-cicaplast-lavant-b5": {i: "Gel espumoso limpiador de rostro y cuerpo para piel irritada: limpia limitando la proliferación de bacterias, calma y repara.", a: [
  B5(), ["Cobre + zinc + manganeso", "Oligoelementos antibacterianos: limitan la proliferación de bacterias sin alterar el equilibrio natural."], GLI("Hidratante.")]},
"lrp-cicaplast-labios": {i: "Bálsamo reparador de labios: repara y reconstruye la barrera de la piel de los labios.", a: [
  B5(), ["Lípidos MP", "Ayudan a reconstruir la función barrera."]]},
"lrp-effaclar-az-gel-crema": {i: "Gel-crema anti-imperfecciones que combina dos ácidos exfoliantes: reduce el sebo y los brotes, corrige las manchas e hidrata.", a: [
  ["Ácido azelaico", "Antiinflamatorio y despigmentante: exfolia con suavidad, reduce el sebo y corrige la hiperpigmentación."],
  SAL("exfolia las células muertas, estimula la renovación y reduce brotes y manchas."),
  HA("Hidratación intensa: piel más flexible y elástica.")]},
"lrp-effaclar-duo-plus-m-anti-imperfections-triple-corrective-care": {i: "Crema correctora de triple acción: actúa sobre el sebo y la bacteria del acné, corrige las imperfecciones y previene y atenúa las marcas.", a: [
  PHYLO, PROCERAD, NIA("Atenúa las manchas y la pigmentación (bloquea la transferencia de melanosomas).")]},
"lrp-effaclar-duo-plus-m-unifiant": {i: "Crema anti-imperfecciones con color: trata el acné (sebo, bacteria, marcas) y unifica el tono al instante.", a: [
  PHYLO, PROCERAD, NIA("Atenúa las manchas y la pigmentación.")]},
"lrp-effaclar-duo-plus-unifiant": {i: "Crema correctora con pigmentos: reequilibra la piel, previene las marcas del acné y unifica el tono sin obstruir los poros.", a: [
  AQUAPOSAE, PROCERAD, ["Pigmentos purificados", "Cobertura ligera y natural sin obstruir los poros."]]},
"lrp-effaclar-duo-plus-spf-30": {i: "Crema anti-imperfecciones con SPF30: trata las imperfecciones y protege del sol, que oscurece las marcas del acné.", a: [
  ["XL-PROTECT (SPF 30)", "Protección frente a UVA y UVB y la contaminación."],
  NIA("Calma la piel irritada y reduce las rojeces."), PROCERAD]},
"lrp-effaclar-duo-plus-m-parches": {i: "Parches ultrafinos para granos: protegen la lesión de la manipulación y de las bacterias, absorben los fluidos y favorecen su recuperación. La marca no detalla sus activos en la ficha.", a: []},
"lrp-effaclar-mat-plus": {i: "Hidratante matificante: reduce el exceso de sebo, cierra y disimula los poros e hidrata.", a: [
  ["Sebulyse", "Reduce el exceso de sebo para matificar y cerrar los poros."],
  SAL("contribuye a desobstruirlos y hacerlos menos visibles."), GLI("Hidrata y reduce las molestias.")]},
"lrp-effaclar-supramolecular-corrector-de-sebo-y-poros": {i: "Gel hidratante corrector: exfolia con suavidad, desobstruye los poros, regula el sebo e hidrata 48 horas sin pesadez.", a: [
  SAL("suaviza la textura, lo desobstruye y reduce las imperfecciones."),
  NIA("Regula el sebo, calma y regenera."), GLI("Mantiene la hidratación 48 horas.")]},
"lrp-effaclar-ai": {i: "Corrector localizado de granos: exfolia el grano de forma focalizada, combate las bacterias y reduce la rojez.", a: [
  NIA("Alivio intenso: reduce el enrojecimiento."),
  ["Piroctona olamina", "Combate la proliferación de bacterias."],
  LHA("actividad queratolítica focalizada sobre el grano.")]},
"lrp-effaclar-locion-astringente": {i: "Loción astringente: microexfolia sin irritar para afinar la textura, calma e hidrata mientras limpia.", a: [
  SAL("microexfolia sin irritar."), AT("Calmante y antioxidante."), GLI("Hidrata mientras limpia.")]},
"lrp-effaclar-supramolecular-gel-limpiador-para-piel-grasa-y-poros-visibles": {i: "Gel limpiador purificante: limpia, exfolia con suavidad, desobstruye los poros y reduce el sebo.", a: [
  SAL("suaviza la textura, desobstruye y reduce las imperfecciones."), NIA("Regula el sebo, calma y regenera."), ZINC()]},
"lrp-effaclar-h-iso-biome": {i: "Crema hidratante calmante para piel fragilizada por tratamientos del acné: repara e hidrata, reduce el sebo y reequilibra el microbioma.", a: [
  NIA("Repara e hidrata."), ["Extracto de orellana", "Reduce el sebo y la hiperqueratinización; matifica."], AQUAPOSAE]},
"lrp-effaclar-h-iso-biome-crema-limpiadora": {i: "Crema limpiadora suave para piel fragilizada por tratamientos del acné: limpia reparando e hidratando y reequilibrando el microbioma.", a: [
  NIA("Repara e hidrata."), ["Extracto de orellana", "Reduce el sebo y la hiperqueratinización."], AQUAPOSAE]},
"lrp-effaclar-k-plus": {i: "Crema renovadora en aquagel para piel grasa: absorbe el exceso de sebo y previene la oxidación del sebo.", a: [
  ["Vitamina E + carnosina", "Antioxidantes que previenen la oxidación en la piel grasa."], AIRL]},
"lrp-effaclar-agua-micelar": {i: "Agua micelar purificante para piel grasa: limpia, reduce la secreción de sebo, hidrata y calma.", a: [
  AT("Calma y protege."), ["Zinc PCA", "Reduce la secreción de sebo; purificante."], GLI("Hidrata y calma.")]},
"lrp-effaclar-gel-limpiador-purificante-plus-m": {i: "Gel limpiador en espuma: actúa sobre la sobreproducción de sebo en su origen y sobre la bacteria del acné, purifica y calma.", a: [
  PHYLO, ["Zinc PCA", "Reduce el sebo y purifica."], AT("Antiirritante y calmante.")]},
"lrp-effaclar-gel-purificante-micro-exfoliante": {i: "Gel limpiador microexfoliante: desobstruye los poros en profundidad, microexfolia y reduce el sebo.", a: [
  SAL("los desobstruye en profundidad."), LHA("microexfolia con suavidad y reduce el tamaño de los poros."), ZINC("Purifica en profundidad y reduce el sebo.")]},
"lrp-effaclar-ultra-concentrated-serum": {i: "Sérum con tres ácidos dermatológicos: renueva la superficie, desobstruye los poros, afina la textura y atenúa las marcas.", a: [
  ["Ácido glicólico", "AHA: estimula la renovación celular, mejora el tono y es muy eficaz en las marcas."],
  SAL("lo desobstruye en profundidad y previene la acumulación de sebo."), LHA("microexfolia y afina los poros.")]},
"lrp-hyalu-b5-suractivated-crema": {i: "Crema reafirmante antiarrugas: rellena y corrige las arrugas reteniendo la hidratación, y repara la barrera.", a: [
  HA(), B5("Ayuda a reparar la barrera cutánea.")]},
"lrp-hyalu-b5-suractivated-crema-spf30": {i: "Crema antiarrugas con SPF30: rellena y corrige las arrugas, repara la barrera y protege del sol, principal causa del fotoenvejecimiento.", a: [
  HA(), B5("Ayuda a reparar la barrera cutánea.")]},
"lrp-hyalu-b5-suractivated-serum": {i: "Sérum-gel antiarrugas reafirmante: rellena y corrige las arrugas; la tecnología Hyalu-Lock sella el ácido hialurónico en la piel.", a: [
  HA(), B5("Ayuda a reparar la barrera cutánea.")]},
"lrp-hyalu-b5-ampollas": {i: "Ampollas antiedad concentradas: rellenan con efecto lifting, estimulan el colágeno y la elastina, y reparan y calman.", a: [
  ["Blue Copper", "Antioxidante; favorece la regeneración y mejora la producción de colágeno y elastina."],
  ["Tri-ácido hialurónico", "3 pesos moleculares de ácido hialurónico puro que hidratan, rellenan y dan efecto lifting."],
  B5("D-pantenol: repara, calma y protege de las agresiones externas.")]},
"lrp-hyalu-b5-water-gel-spf30": {i: "Aquagel hidratante con SPF30: protege la barrera y mantiene la hidratación, y protege del sol.", a: [
  HA("Protege la barrera y mantiene la hidratación."), B5("Repara y protege la barrera."), ["Filtros UVA/UVB", "Protegen frente a los rayos UVA y UVB."]]},
"lrp-hyalu-b5-crema": {i: "Crema antiarrugas reparadora: rellena las arrugas con ácido hialurónico de dos tamaños, repara y estimula la regeneración celular.", a: [
  HA("Fragmentado y de alto peso molecular para rellenar la piel."),
  B5("Calmante y reparadora: estimula la regeneración y la resistencia de la piel."),
  ["Pro-Xylane™", "Molécula patentada que impulsa la regeneración celular y restaura la estructura de la piel desde dentro."]]},
"lrp-hyalu-b5-serum": {i: "Sérum antiarrugas en aquagel: rellena las arrugas con ácido hialurónico de dos tamaños, calma y repara.", a: [
  HA("Fragmentado y de alto peso molecular para rellenar la piel."), B5("Repara, calma y ayuda a regenerar."), MADE]},
"lrp-hyalu-b5-serum-de-ojos": {i: "Sérum de contorno: hidrata en dos niveles, repara, y trata las ojeras con un complejo descongestionante, antiinflamatorio y antioxidante.", a: [
  ["Ácido hialurónico de alto y bajo peso molecular", "El de alto peso hidrata la superficie y crea una barrera que reduce la pérdida de agua; el de bajo peso penetra en la epidermis con acción antiedad."],
  B5("Reparadora y calmante."),
  ["Complejo para ojeras (10 %)", "Cafeína (descongestionante), vitamina B3 (antiinflamatoria), vitamina Cg (antioxidante) y HEPES (exfoliante suave)."]]},
"lrp-hyalu-b5-ojos": {i: "Crema de contorno antiedad: rellena las arrugas, calma y repara la zona.", a: [
  HA("Rellena las arrugas y la falta de volumen."), B5("Calmante y reparadora: estimula la regeneración."), AT("Calmante, suavizante e hidratante.")]},
"lrp-hydraphase-ha-ligera": {i: "Hidratante en gel-crema: aporta hidratación intensa, calma y refuerza la barrera.", a: [
  HA("Aporta un extra de hidratación intensa."), AT("Calma y refuerza la barrera.")]},
"lrp-hydraphase-ha-rica": {i: "Hidratante nutritiva: aporta hidratación intensa, calma y refuerza la barrera de la piel seca.", a: [
  HA("Aporta un extra de hidratación intensa."), AT("Calma y refuerza la barrera.")]},
"lrp-hydraphase-ha-uv-ligera-piel-sensible": {i: "Hidratante con SPF25 para piel sensible: hidrata, calma y protege del sol.", a: [
  HA("De origen natural, obtenido por fermentación de azúcares vegetales: hidrata."), AT("Calmante."), ["Filtros UVA/UVB", "Protegen de la exposición solar."]]},
"lrp-hydraphase-ha-uv-rica-piel-sensible": {i: "Hidratante rica con SPF25 para piel sensible: hidrata, calma y protege del sol.", a: [
  HA("De origen natural, obtenido por fermentación de azúcares vegetales: hidrata."), AT("Calmante."), ["Filtros UVA/UVB", "Protegen del daño solar."]]},
"lrp-hydraphase-ha-ojos": {i: "Contorno hidratante: impregna de agua la piel del contorno y la calma.", a: [
  HA("De origen natural, obtenido por fermentación de azúcares vegetales: hidrata."), AT("Calmante.")]},
"lrp-kerium-suavidad-extrema": {i: "Champú extrasuave de uso frecuente para cuero cabelludo sensible: limpia sin agredir, calma e hidrata.", a: [
  AT("Calmante y suavizante, rica en selenio antioxidante."), GLI("Hidrata: absorbe su propio peso en agua y deja la piel hidratada durante días.")]},
"lrp-lipikar-baume-ap-plus-max": {i: "Bálsamo para piel atópica (de 0 a 100 años): restaura la barrera con lípidos, calma y rompe el círculo vicioso del picor actuando en la comunicación entre la piel y el cerebro.", a: [
  ["Manteca de karité (20 %)", "Nutre y restaura la barrera de la piel."],
  ["Tecnología Neurobioma", "Conecta el microbioma con la percepción del picor y ayuda a reducir las sensaciones de picor."],
  NIA("Calmante: reduce la irritación y las rojeces.")]},
"lrp-lipikar-baume-light-ap-plus-m": {i: "Bálsamo ligero antipicor para piel atópica: calma el picor, restaura la barrera lipídica y reequilibra el microbioma.", a: [
  NIA("Calma el picor y ayuda a restaurar la barrera lipídica."),
  ["Manteca de karité", "Restaura la película hidrolipídica con lípidos similares a los de la piel."],
  ["Aqua Posae Filiformis", "Actúa sobre los factores de la sequedad extrema y ayuda a preservar el equilibrio de la piel."]]},
"lrp-lipikar-eczema-med": {i: "Crema producto sanitario para el eccema: restaura la barrera y calma. La ficha no destaca ingredientes clave; estos activos figuran en su composición oficial.", a: [
  ["Manteca de karité", "Restaura la película hidrolipídica."], GLI(), NIA("Calmante y antiinflamatoria; mejora la barrera.")]},
"lrp-lipikar-gel-urea-30": {i: "Gel concentrado con urea al 30 % para zonas muy secas y engrosadas: elimina la descamación (queratolítico) e hidrata, calmando la irritación.", a: [
  ["Urea 30 %", "Queratolítico natural con propiedades hidratantes."], NIA("Reduce la irritación; calmante.")]},
"lrp-lipikar-lait-urea-10": {i: "Loción corporal con urea al 10 %: suaviza la piel áspera favoreciendo la renovación, hidrata y nutre.", a: [
  ["Urea 10 %", "Queratolítica: mejora la renovación, suaviza y preserva la hidratación."],
  ["HEPES", "Exfolia y reduce la inflamación."],
  ["Manteca de karité", "Aporta ácidos grasos, hidrata en profundidad y nutre."]]},
"lrp-lipikar-leche": {i: "Leche corporal hidratante: repara y retiene la hidratación, calma el picor y restaura la barrera lipídica.", a: [
  ["Crema fría", "Repara y retiene la hidratación."], NIA("Calma el picor y restaura la barrera lipídica."),
  ["Manteca de karité", "Restaura la película hidrolipídica con lípidos similares a los de la piel."]]},
"lrp-lipikar-aceite-lavante-ap-plus": {i: "Aceite limpiador corporal para piel atópica: limpia sin resecar, calma el picor y restaura la barrera.", a: [
  NIA("Calma el picor y restaura la barrera lipídica."),
  ["Manteca de karité", "Restaura la película hidrolipídica con lípidos similares a los de la piel."],
  ["Aqua Posae Filiformis", "Actúa sobre los factores de la sequedad extrema."]]},
"lrp-lipikar-gel-de-ducha": {i: "Gel de ducha para piel seca y atópica: limpia, calma el picor y ayuda a restaurar la barrera.", a: [
  NIA("Calma el picor y restaura la barrera lipídica."),
  ["Manteca de karité", "Restaura la película hidrolipídica con lípidos similares a los de la piel."]]},
"lrp-lipikar-pain-surgras": {i: "Pastilla limpiadora sobregrasa: limpia sin resecar, calma el picor y ayuda a restaurar la barrera.", a: [
  NIA("Calma el picor y restaura la barrera lipídica."),
  ["Manteca de karité", "Restaura la película hidrolipídica con lípidos similares a los de la piel."]]},
"lrp-lipikar-surgras": {i: "Crema de ducha antisequedad con lípidos: limpia relipidizando, calma el picor y ayuda a restaurar la barrera.", a: [
  NIA("Calma el picor y restaura la barrera lipídica."),
  ["Manteca de karité", "Restaura la película hidrolipídica con lípidos similares a los de la piel."]]},
"lrp-lipikar-syndet-ap-plus": {i: "Crema de ducha syndet ultrasuave para piel atópica: limpia sin jabón, espacia los brotes de sequedad severa, calma el picor y estimula los lípidos de la piel.", a: [
  ["Aqua Posae Filiformis", "Actúa sobre los factores de la piel extremadamente seca y espacia los brotes."],
  ["Manteca de karité", "Restaura la película hidrolipídica."],
  NIA("Antiinflamatoria: calma el picor y estimula la síntesis de lípidos.")]},
"lrp-mela-b3-serum-despigmentante-con-niacinamida": {i: "Sérum antimanchas con dos formas de actuar sobre las manchas: impide que el pigmento llegue a la superficie y ayuda a renovar la piel.", a: [
  ["Melasyl™", "Activo patentado contra la hiperpigmentación; según la marca, más eficaz que 5 activos de referencia (vitamina C, feniletil resorcinol, niacinamida, ácido kójico y arbutina). La marca no explica su mecanismo."],
  ["Niacinamida 10 %", "Bloquea la transferencia de melanosomas a los queratinocitos: el pigmento no llega a las capas superiores. Además calma y refuerza la barrera."],
  ["Derivado del retinol (palmitato de retinilo)", "Retinoide que favorece la renovación celular y ayuda a eliminar el pigmento acumulado."]]},
"lrp-mela-b3-double-dose": {i: "Tratamiento intensivo antimanchas y antiedad: actúa sobre la pigmentación y refuerza la estructura de la piel.", a: [
  ["Melasyl™", "Activo patentado para combatir y prevenir la hiperpigmentación."],
  NIA("Bloquea la transferencia de melanosomas."),
  ["Pro-Xylane™", "Reafirmante: refuerza la estructura de la matriz de la piel."]]},
"lrp-mela-b3-crema-antimanchas-spf30-con-niacinamida": {i: "Crema antimanchas con SPF30: corrige las manchas y protege de la radiación que las estimula, incluidos los UVA ultralargos.", a: [
  ["Melasyl™", "Activo patentado contra la hiperpigmentación; según la marca, más eficaz que 5 activos de referencia."],
  NIA("Bloquea la transferencia de melanosomas; calma y refuerza la barrera."), MEX400]},
"lrp-mela-b3-gel-limpiador-facial-exfoliante-antimanchas": {i: "Gel limpiador exfoliante antimanchas: limpia, exfolia para eliminar el pigmento de la superficie y empieza a tratar las manchas desde el primer paso.", a: [
  ["Melasyl™", "Activo patentado contra la hiperpigmentación."],
  NIA("Bloquea la transferencia de melanosomas; calma y refuerza la barrera."),
  ["Polihidroxiácidos (PHA)", "Micropeeling suave y bien tolerado."]]},
"lrp-mela-b3-ojos": {i: "Tratamiento de ojeras pigmentadas: actúa sobre la hiperpigmentación del contorno, calma y refuerza la barrera.", a: [
  ["Melasyl™", "Actúa sobre la hiperpigmentación."], NIA("Calma y refuerza la barrera.")]},
"lrp-pigmentclar-ojos": {i: "Contorno para ojeras marrones y azules: unifica el tono de las pigmentarias y estimula la microcirculación para las vasculares.", a: [
  ["Ácido ferúlico", "Antioxidante potente."],
  ["Cafeína", "Estimula la microcirculación y ayuda a drenar el contorno."],
  ["Feniletil resorcinol", "Despigmentante: unifica el tono."]]},
"lrp-pigmentclar-uv-spf-30": {i: "Hidratante antimanchas con SPF30: corrige las manchas desde el origen, unifica el tono, mejora la textura y protege del sol.", a: [
  LHA("mejora la textura de la piel."), NIA("Bloquea la transferencia de melanosomas: corrige las manchas."),
  ["Feniletil resorcinol", "Despigmentante: unifica el tono."]]},
"lrp-nutritic-intense": {i: "Crema nutritiva para piel muy seca: reconstruye la película hidrolipídica con lípidos biomiméticos e hidrata en profundidad.", a: [
  ["Lípidos MP", "Activos biomiméticos de la investigación en atopia: ayudan a reconstruir la barrera."],
  ["Manteca de karité", "Relipidizante, reparadora y calmante."], GLI("Hidrata en profundidad.")]},
"lrp-nutritic-intense-rica": {i: "Crema nutritiva rica para piel muy seca: reconstruye la película hidrolipídica con lípidos biomiméticos e hidrata en profundidad.", a: [
  ["Lípidos MP", "Activos biomiméticos de la investigación en atopia: ayudan a reconstruir la barrera."],
  ["Manteca de karité", "Relipidizante, reparadora y calmante."], GLI("Hidrata en profundidad.")]},
"lrp-nutritic-labios": {i: "Bálsamo labial: restablece la barrera de los labios reactivando su síntesis de lípidos y de factor natural de hidratación.", a: [
  ["Lípidos MP", "Triple acción: reactivan la síntesis de lípidos propios y del factor natural de hidratación, y refuerzan la estructura celular de los labios."],
  ["Manteca de karité", "Relipidizante, reparadora y calmante."], ["Ceramida", "Repara y protege la barrera."]]},
"lrp-desmaquillante-de-ojos-waterproof": {i: "Desmaquillante de ojos waterproof: su tensioactivo suave retira el maquillaje resistente al agua y el agua termal calma la zona.", a: [
  ["Poloxámero", "Tensioactivo suave que arrastra el maquillaje."],
  AT("Calmante y antioxidante gracias a su riqueza en selenio.")]},
"lrp-desmaquillante-en-espuma-de-agua-micelar-limpiadora": {i: "Espuma micelar desmaquillante de rostro y ojos: limpia con suavidad, calma e hidrata.", a: [
  AT("Calmante y suavizante, rica en selenio antioxidante."), GLI("Hidrata y combate la sequedad y la descamación.")]},
"lrp-locion-calmante": {i: "Loción tónica calmante: completa la limpieza, calma, suaviza e hidrata la piel sensible.", a: [
  AT("Calmante y suavizante, rica en selenio antioxidante."), GLI("Hidrata y combate la sequedad y la descamación.")]},
"lrp-retinol-b3-serum": {i: "Sérum de retinol con liberación progresiva: el retinol se libera poco a poco para corregir las arrugas profundas respetando la tolerancia, mientras la niacinamida refuerza la barrera.", a: [
  ["Retinol puro + liberación progresiva", "Retinoide (necesita dos conversiones a ácido retinoico): renueva la piel y estimula el colágeno. La liberación gradual mantiene la dosis correctora sin pasar el umbral de tolerancia."],
  ["Vitamina B3 (niacinamida)", "Fortalece la barrera, calma y reduce las rojeces."], GLI("Hidrata y ayuda a proteger la barrera.")]},
"lrp-redermic-retinol-concentrado": {i: "Crema de retinol con liberación progresiva: renueva la piel y corrige las arrugas profundas respetando la tolerancia.", a: [
  ["Retinol puro + liberación progresiva", "Retinoide (necesita dos conversiones a ácido retinoico): renueva la piel y estimula el colágeno. La liberación gradual mantiene la dosis correctora sin pasar el umbral de tolerancia."],
  AT("Calmante, suavizante y antioxidante.")]},
"lrp-redermic-retinol-ojos": {i: "Contorno antiarrugas con retinol de liberación progresiva: corrige las arrugas del contorno y reduce las ojeras.", a: [
  ["Retinol puro + liberación progresiva", "Retinoide que renueva la piel y estimula el colágeno respetando la tolerancia."],
  ["Cafeína", "Estimula la microcirculación: reduce las ojeras y la fatiga."]]},
"lrp-toleriane-sensitive-crema": {i: "Crema hidratante calmante para piel sensible: repara la barrera, hidrata 48 horas y reduce las rojeces.", a: [
  ["Ceramida", "Repara y protege la barrera."], GLI("Hidratación 48 horas."), AT("Calma, reduce rojeces e irritación.")]},
"lrp-toleriane-sensitive-fluido": {i: "Fluido hidratante calmante para piel sensible: hidrata 48 horas y reduce las rojeces y la irritación.", a: [
  GLI("Hidratación 48 horas."), AT("Calma, reduce rojeces e irritación.")]},
"lrp-toleriane-sensitive-rica": {i: "Crema rica calmante para piel sensible y seca: repara la barrera e hidrata 48 horas.", a: [
  ["Ceramida", "Repara y protege la barrera."], GLI("Hidratación 48 horas.")]},
"lrp-toleriane-dermallergo-crema": {i: "Crema para piel hipersensible o alérgica: reequilibra el microbioma, reduce la sensación de incomodidad, el enrojecimiento y la sensibilidad.", a: [
  ["Sphingobioma", "Fracción probiótica que restaura y reequilibra el microbioma."],
  ["Neurosensina", "Disminuye la incomodidad y reduce el enrojecimiento y la sensibilidad."], AT("Calma y reduce las irritaciones.")]},
"lrp-toleriane-dermallergo-fluido": {i: "Fluido ligero para piel hipersensible o alérgica: reequilibra el microbioma, reduce la incomodidad, el enrojecimiento y la sensibilidad.", a: [
  ["Sphingobioma", "Fracción probiótica que restaura y reequilibra el microbioma."],
  ["Neurosensina", "Disminuye la incomodidad y reduce el enrojecimiento y la sensibilidad."], AT("Calma y reduce las irritaciones.")]},
"lrp-toleriane-dermallergo-noche": {i: "Crema de noche para piel hipersensible: reequilibra el microbioma, calma la incomodidad y mejora la barrera.", a: [
  ["Sphingobioma", "Fracción probiótica que restaura y reequilibra el microbioma."],
  ["Neurosensina", "Disminuye la incomodidad y reduce el enrojecimiento y la sensibilidad."],
  NIA("Mejora la barrera y alivia la sensación de dolor.")]},
"lrp-toleriane-dermallergo-ojos": {i: "Contorno reparador para ojos sensibles: reequilibra el microbioma, calma, descongestiona y reduce el picor y la hinchazón.", a: [
  ["Sphingobioma", "Fracción probiótica que restaura y reequilibra el microbioma."],
  ["Neurosensina", "Disminuye la incomodidad y reduce el enrojecimiento y la sensibilidad."],
  NIA("Calma y descongestiona el contorno; reduce picor e hinchazón.")]},
"lrp-toleriane-ultra-dermallergo-serum": {i: "Sérum calmante diario para piel reactiva: reduce la incomodidad, la reactividad y la sensibilidad.", a: [
  ["Neurosensina", "Reduce la incomodidad y la reactividad de la piel."], AT("Calma y reduce la irritación.")]},
"lrp-toleriane-rosaliac-ar-concentrado": {i: "Corrector hidratante antirrojeces: calma actuando sobre el microbioma, reduce las rojeces y la reactividad.", a: [
  ["Sphingobioma", "Calma la piel actuando sobre el microbioma y reduce las rojeces."],
  ["Neurosensina", "Reduce la incomodidad y la reactividad."], AT("Calma y reduce las irritaciones.")]},
"lrp-toleriane-rosaliac-ar-spf-30": {i: "Crema antirrojeces con SPF30: calma actuando sobre el microbioma, reduce rojeces y reactividad, y protege del sol, que empeora las rojeces.", a: [
  ["Sphingobioma", "Calma la piel actuando sobre el microbioma y reduce las rojeces."],
  ["Neurosensina", "Reduce la incomodidad y la reactividad."], AT("Calma y reduce las irritaciones.")]},
"lrp-toleriane-kerium-ds-concentrado": {i: "Crema para dermatitis seborreica facial: reduce el sebo, purifica, calma y refuerza las defensas de la piel.", a: [
  ["Aqua Posae Filiformis (5 %)", "Refuerza el sistema de defensa innato de la piel."],
  ["Piroctona olamina", "Reduce el sebo y calma la piel."], ["Zinc PCA", "Purifica la piel."]]},
"lrp-toleriane-crema-limpiadora": {i: "Crema limpiadora y desmaquillante para piel sensible: limpia sin agredir, calma el picor y la incomodidad y estimula los lípidos de la piel.", a: [
  NIA("Antiinflamatoria: calma el picor y estimula la síntesis de lípidos."), B5("Calma la incomodidad."), AT("Calma y reduce las irritaciones.")]},
"lrp-toleriane-dermolimpiador": {i: "Fluido limpiador y desmaquillante para piel sensible: limpia sin agredir, hidrata y reduce rojeces e irritación.", a: [
  GLI("Hidratante potente: alivia la sequedad y la descamación."), AT("Calma, reduce rojeces e irritación.")]},
"lrp-toleriane-gel-espumoso-doble-limpiador-hidratante-purificante": {i: "Gel espumoso limpiador: limpia en profundidad con tensioactivos suaves que respetan el pH y el equilibrio de la piel, e hidrata.", a: [
  ["Complejo de aminoácidos", "Limpia en profundidad y purifica de impurezas."],
  ["Tensioactivo suave", "Mantiene el equilibrio natural y el pH de la piel."], GLI("Concentrada: hidratación intensa.")]},
"lrp-toleriane-rosaliac-gel-micelar-desmaquillante": {i: "Gel micelar desmaquillante para piel con rojeces: limpia con un tensioactivo suave y calma.", a: [
  ["Poloxámero", "Tensioactivo suave que arrastra maquillaje e impurezas."], AT("Calma y reduce las irritaciones.")]},
"lrp-toleriane-fluido-corrector": {i: "Base de maquillaje de alta cobertura para piel sensible: cubre con pigmentos minerales y calma las rojeces y la incomodidad.", a: [
  ["Pigmentos minerales", "Cobertura natural."], ["Neurosensina", "Reduce las rojeces y calma la incomodidad."]]},
"lrp-toleriane-polvos-compactos": {i: "Polvos compactos minerales: absorben agua y sebo para un efecto mate duradero y alisan la piel.", a: [
  ["Perlita", "Absorbe hasta 3,5 veces su peso en agua y la evapora: efecto mate duradero."],
  ["Pigmentos 100 % minerales purificados", "Se extienden con facilidad, alisan y absorben agua y grasa."]]},
"lrp-toleriane-teint-blush": {i: "Colorete en polvo para piel sensible: color intenso sin irritar.", a: [
  ["Talco", "Absorbe agua y grasa."], ["Pigmentos purificados", "Color de alto impacto sin irritación."]]},
"lrp-toleriane-teint-polvos-fijadores-matificantes": {i: "Polvos fijadores matificantes: absorben la grasa para un efecto mate duradero.", a: [
  ["Talco", "Alta capacidad de absorción de grasa: efecto mate duradero."], ["Pigmentos purificados", "Pigmentación no irritante."]]},
"lrp-toleriane-lapiz-de-cejas": {i: "Lápiz de cejas hipoalergénico: color intenso no irritante y fijación duradera.", a: [
  ["Pigmentos purificados", "Pigmentación no irritante."], ["Cera microcristalina", "Fijación duradera."]]},
"lrp-toleriane-lapiz-de-ojos": {i: "Lápiz de ojos para ojos sensibles: color intenso no irritante que calma tras aplicarlo.", a: [
  ["Pigmentos purificados", "Pigmentación no irritante."], AT("Calma la piel tras maquillarse.")]},
"lrp-toleriane-mascara-volumen": {i: "Máscara de pestañas hipoalergénica: alarga y suaviza las pestañas con color no irritante.", a: [
  ["Goma arábiga natural", "Pestañas más largas y suaves."], ["Pigmentos purificados", "Pigmentación sin irritación."]]},
"lrp-toleriane-mascara-waterproof": {i: "Máscara waterproof para ojos sensibles: pestañas fuertes y resistentes al agua, con color no irritante.", a: [
  ["Cera de arroz", "Pestañas fuertes y resistentes al agua."], ["Pigmentos purificados", "Pigmentación sin irritación."]]},
"lrp-toleriane-silicium-laca-de-unas": {i: "Laca de uñas fortalecedora: repara y refuerza las uñas y lleva filtro frente a los rayos UVA y UVB.", a: [
  ["Silicio", "Repara y refuerza las uñas."], ["Mexoryl", "Protege de los rayos UVA y UVB."]]},
"lrp-pure-vitamin-c12-serum": {i: "Sérum antioxidante y antiedad con 12 % de vitamina C pura: ilumina, alisa arrugas y reduce manchas; el salicílico mejora la textura y la penetración de la vitamina C.", a: [
  ["Vitamina C pura 12 %", "Antioxidante y antiedad: aporta luminosidad, alisa arrugas y puede inhibir la producción de melanina (actúa sobre la tirosinasa) para reducir manchas."],
  SAL("lo desobstruye, reduce el sebo, alisa la superficie y ayuda a que la vitamina C penetre."),
  ["Neurosensina", "Suavizante y calmante."]]},
"lrp-redermic-c-para-piel-normal-a-mixta": {i: "Crema con vitamina C de acabado mate: mejora luminosidad, textura y tono, reduce arrugas, hidrata y calma.", a: [
  ["Vitamina C pura", "Antioxidante: mejora la luminosidad, la textura y el tono y reduce las arrugas."],
  ["Manosa", "Corrige al instante irregularidades y rojeces; hidrata y restablece el sistema de hidratación natural."],
  AT("Calma la piel en profundidad.")]},
"lrp-redermic-c-ojos": {i: "Contorno con vitamina C: mejora luminosidad, textura y tono, reduce arrugas, hidrata y calma.", a: [
  ["Vitamina C pura", "Antioxidante: mejora la luminosidad, la textura y el tono y reduce las arrugas."],
  ["Manosa", "Corrige al instante irregularidades y rojeces; hidratante."], AT("Calma la piel en profundidad.")]}
};
D.prods.forEach(p => { if (A[p.id]) p.d.accion = A[p.id]; });
})();
