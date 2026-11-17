/* «Cómo actúa» de los productos de Medik8.
   Fuente: bloque «Ingredientes clave» de la ficha oficial de cada producto (medik8.es),
   completado con los mecanismos de las páginas de teoría (Cosméticos, Patologías, La piel).
   Formato: id de producto → { i: resumen de cómo actúa, a: [[activo, qué hace], …] } */
(function(){
const HA = (t) => ["Ácido hialurónico", t || "Atrae y retiene más de 1.000 veces su peso en agua: hidrata y da flexibilidad."];
const HAMULTI = ["Ácido hialurónico de varios pesos moleculares", "Retiene más de 1.000 veces su peso en agua y la lleva a distintas capas de la piel: hidratación profunda."];
const VITE = ["Vitamina E", "Antioxidante que protege de los radicales libres y potencia la acción de la vitamina C."];
const GLI = ["Glicerina", "Humectante: retiene la humedad en la piel."];
const MORINGA = ["Extracto de moringa", "Antioxidante: forma un escudo frente a la contaminación y los radicales libres."];
const SAL = (t) => ["Ácido salicílico", "BHA liposoluble: " + t];
const MAND = ["Ácido L-mandélico", "AHA de exfoliación suave que actúa en la superficie y dentro del poro; la forma «L» es la más compatible con la piel y la que menos irrita."];
const NIA = (t) => ["Niacinamida", t];
const CTETRA = (pct) => ["Vitamina C estabilizada " + pct + " (ascorbato de tetrahexildecilo)", "Forma de vitamina C liposoluble y poco irritante: protege de los radicales libres, ilumina (inhibe la tirosinasa) y favorece la producción de colágeno."];
const RAL = (t) => ["Retinaldehído (retinal)", "Retinoide que solo necesita una conversión a ácido retinoico: según Medik8, actúa hasta 11 veces más rápido que el retinol. " + t];
const RR = ["Retinil retinoato encapsulado", "Molécula de vitamina A patentada por Medik8; según la marca, 8 veces más potente que el retinol clásico. Estimula la renovación celular y el colágeno."];
const CARNO = ["Carnosina", "Péptido antiglicación: impide que los azúcares se unan al colágeno y lo deterioren; también protege del infrarrojo."];
const FILTROS = ["Filtros UV químicos avanzados", "Absorben la radiación UV y la transforman en energía no dañina; elegidos por su estabilidad bajo el sol y su buena tolerancia."];
const CAFE = ["Cafeína", "Contrae los vasos que hinchan el contorno: reduce bolsas y aspecto cansado."];
const HESP = ["Hesperidina", "Mejora la circulación: combate las ojeras e ilumina."];
const NAG = (t) => ["N-acetilglucosamina (NAG)", t];
const MATRIXYL = ["Matrixyl® 3000", "Péptidos señal que «engañan» a la piel para que produzca más colágeno: reafirman, rellenan y alisan."];
const MINIGF = ["MiniProtein con factores de crecimiento", "Aumenta los niveles de colágeno, elastina y ácido hialurónico; los factores de crecimiento activan la síntesis de proteínas estructurales."];
const SASKA = ["Baya de Saskatoon", "Rica en antocianinas antioxidantes; ayuda a bloquear la enzima que degrada el ácido hialurónico."];
const CERAM = ["Complejo de ceramidas (con fitoesteroles y ácidos grasos)", "Imita la barrera lipídica natural para restaurarla y nutrirla; las ceramidas son cerca del 50 % de los lípidos del estrato córneo."];
const NMF = ["Factores hidratantes naturales (NMF)", "PCA sódico, glicerina, urea, aminoácidos, ácido láctico y otros componentes naturales de la piel que retienen la humedad."];
const ESCUAL = ["Escualeno", "Lípido casi idéntico al de la piel: refuerza la barrera y nutre."];
const A = {
"m8-lipid-balance-cleansing-oil": {i: "Aceite desmaquillante que se transforma en leche: disuelve el maquillaje y la grasa (primer paso de la doble limpieza), nutre y reequilibra los lípidos de la piel.", a: [
  ["Aceite de cártamo prensado en frío", "Rico en ácidos grasos y vitamina E: nutre y refuerza la barrera."],
  ["Omega 6 (ácido linoleico)", "El 70 % del aceite de cártamo: reequilibra los lípidos naturales de la piel."],
  MORINGA, VITE]},
"m8-total-moisture-daily-cleansing-gel": {i: "Gel limpiador que prioriza la hidratación: limpia con tensioactivos ultrasuaves que no alteran la barrera, protege el microbioma y deja la piel hidratada incluso tras aclarar.", a: [
  ["Inulina prebiótica", "Protege el microbioma y reduce las alteraciones que causa la limpieza."],
  ["Extracto de arroz fermentado", "Rico en aminoácidos: hidrata y nutre."],
  ["Sistema inteligente de tensioactivos", "Tensioactivos ultrasuaves que limpian sin resecar ni alterar la barrera."],
  ["Imanes de humedad", "Rehidratan al instante, mantienen la hidratación tras el aclarado y mejoran la barrera con el tiempo."]]},
"m8-micellar-mousse": {i: "Mousse micelar: sus micelas con corazón de aceite atrapan el maquillaje, el exceso de grasa y las impurezas, dejando la piel equilibrada.", a: [
  ["Micelas con aceite de oliva", "Esferas limpiadoras con corazón de aceite nutritivo que eliminan maquillaje, grasa e impurezas."],
  MORINGA, GLI]},
"m8-calmwise-soothing-cleanser": {i: "Limpiador espumoso calmante para piel con rojeces: limpia, calma el enrojecimiento y refuerza la barrera frente a irritantes.", a: [
  ["Teprenona", "Activo patentado que calma el enrojecimiento y refuerza la barrera frente a irritantes."],
  ["Clorofila", "Limpiadora natural antioxidante: purifica y favorece la regeneración."],
  ["Vitamina K2", "Atenúa las rojeces y aumenta la resistencia a la sensibilización."],
  ["Aceite de naranja dulce ecológico", "Suaviza, refresca y es antioxidante."]]},
"m8-surface-radiance-cleanse": {i: "Limpiador exfoliante con AHA y BHA: exfolia en superficie y dentro del poro para afinar la textura, desobstruir y dar luminosidad, hidratando a la vez.", a: [
  MAND, ["Ácido láctico", "AHA suave: exfolia e hidrata."],
  SAL("descongestiona y exfolia desde el interior del poro, descompone la grasa acumulada."), GLI,
  ["Extracto de cáscara de mangostán", "Antioxidante frente a los radicales libres."]]},
"m8-clarifying-foam": {i: "Espuma limpiadora para piel con imperfecciones: exfolia dentro del poro, calma la irritación y combate las bacterias.", a: [
  SAL("descongestiona y exfolia desde el interior del poro: previene imperfecciones, puntos negros y poros dilatados."), MAND,
  NIA("Antiinflamatoria: calma la irritación de las imperfecciones, hidrata y refuerza la barrera."),
  ["Aceite de árbol de té", "Antibacteriano y antiinflamatorio."]]},
"m8-press-glow": {i: "Tónico exfoliante diario con PHA: exfolia con suavidad e hidrata para una piel más lisa, luminosa y uniforme.", a: [
  ["Gluconolactona 5,5 % (PHA)", "Se transforma en ácido glucónico: exfolia suavemente e hidrata; muy bien tolerada."],
  ["Extracto de nopal", "Activador enzimático que potencia la exfoliación natural y la renovación celular."],
  ["Extracto de açaí", "Calma la inflamación y es antioxidante."], ["Aloe vera", "Reduce la irritación y retiene la humedad."]]},
"m8-press-clear": {i: "Tónico diario equilibrante para piel con imperfecciones: exfolia dentro del poro con liberación gradual (apto incluso en piel sensible), unifica el tono y controla las bacterias respetando el microbioma.", a: [
  SAL("al 2 % y encapsulado, se libera poco a poco: descongestiona y exfolia desde el interior del poro."),
  ["Ácido tranexámico 2 %", "Ilumina, uniformiza el tono y ayuda a minimizar las manchas (regula MITF)."],
  ["Extracto de sake", "Rico en aminoácidos: hidrata y refuerza la barrera."],
  ["Polilisina", "Reduce de forma selectiva las bacterias de las imperfecciones respetando el microbioma."]]},
"m8-sleep-glycolic": {i: "Tratamiento exfoliante nocturno: el glicólico encapsulado se libera poco a poco durante la noche para renovar la superficie sin irritar, mientras se refuerza la barrera.", a: [
  ["Ácido glicólico activo 10 % encapsulado", "El AHA de molécula más pequeña: rompe las uniones entre las células muertas para eliminarlas; la cápsula de ciclodextrina lo libera gradualmente."],
  ["Extracto de trébol coreano", "Favorece la reparación e hidratación nocturnas y mantiene la barrera."], GLI]},
"m8-blemish-sos": {i: "Gel localizado para granos: desobstruye el poro, combate las bacterias, calma la rojez y regula la grasa para prevenir nuevos granos.", a: [
  SAL("al 2 %: exfolia y descongestiona desde dentro del poro."),
  NIA("Antiinflamatoria: calma la piel irritada y enrojecida."),
  ["Ácido azelaico", "Antibacteriano: combate las bacterias de las imperfecciones."],
  ["Ácido dioico", "Descongestiona y regula el exceso de grasa."]]},
"m8-c-tetra": {i: "Sérum ligero de vitamina C: protege de los radicales libres, ilumina y favorece el colágeno, con una forma de vitamina C poco irritante.", a: [CTETRA("7 %"), VITE]},
"m8-c-tetra-advanced": {i: "Sérum con 20 % de vitamina C: ilumina, protege de los radicales libres y ayuda a prevenir y reducir el envejecimiento prematuro, reforzando la barrera.", a: [
  CTETRA("20 %"),
  ["Exosomas vegetales", "Transportan proteínas, lípidos y moléculas mensajeras a las células de la piel; junto a la vitamina C ayudan a prevenir el envejecimiento."],
  NAG("Refuerza la barrera, afina la piel, minimiza los poros y aumenta el ácido hialurónico natural.")]},
"m8-c-tetra-luxe": {i: "Sérum con 14 % de vitamina C y aceites nutritivos: protege de los radicales libres, favorece el colágeno e ilumina mientras nutre.", a: [
  CTETRA("14 %"), ESCUAL,
  ["Aceite de maracuyá", "Rico en ácidos grasos: nutre y aporta protección antioxidante."],
  ["Ginseng rojo optimizado", "Potencia la luminosidad y estimula el colágeno."], VITE]},
"m8-super-c-ferulic": {i: "Sérum de vitamina C de alta potencia (30 %) para el daño solar avanzado: actúa sobre arrugas, manchas, tono irregular y firmeza. No recomendado para piel sensible.", a: [
  ["Ácido L-ascórbico etilado 30 %", "Derivado estabilizado de la vitamina C: ilumina, reduce arrugas y es antioxidante; actúa sobre manchas y tono irregular."],
  ["Ácido ferúlico", "Antioxidante vegetal que potencia los efectos de las vitaminas C y E."], VITE,
  ["Extracto de raíz de cúrcuma", "Antioxidante que bloquea la formación de pigmento: reduce manchas."]]},
"m8-c-tetra-cream": {i: "Crema antioxidante con vitamina C: protege de los radicales libres, ilumina, favorece el colágeno e hidrata.", a: [CTETRA("3 %"), VITE, HA()]},
"m8-crystal-retinal": {i: "Sérum nocturno con retinal: acelera la renovación celular y estimula el colágeno para tratar arrugas, manchas, textura y firmeza, con concentraciones progresivas para acostumbrar la piel.", a: [
  RAL("Trata líneas finas, arrugas, hiperpigmentación, textura irregular y pérdida de firmeza."), HA(), VITE, GLI]},
"m8-r-retinoate": {i: "Sérum de día y noche con retinoide de nueva generación: renueva la piel y estimula el colágeno, con vitamina C antioxidante e hidratación.", a: [
  RR, CTETRA("7 %"), HA(), VITE]},
"m8-r-retinoate-intense": {i: "Tratamiento de noche intensivo con dos formas de vitamina A, péptido de cobre y ceramidas: renueva, estimula el colágeno y repara la barrera.", a: [
  RR, RAL("Además es antibacteriano: ayuda a descongestionar la piel."),
  ["Péptido de cobre encapsulado", "Péptido transportador que penetra en la piel y estimula las células productoras de colágeno."],
  CERAM, HA()]},
"m8-bakuchiol-peptides": {i: "Sérum con bakuchiol, alternativa vegetal al retinol: suaviza arrugas estimulando colágeno y elastina, unifica el tono y calma; apto para quien no tolera la vitamina A.", a: [
  ["Bakuchiol 1,25 %", "Activo vegetal similar a los retinoides pero sin su potencial irritante: estimula colágeno y elastina."],
  ["Precursores de péptidos iluminadores", "Ayudan a prevenir la producción de melanina: tono más uniforme."],
  ["Centella asiática", "Antiinflamatoria y calmante."],
  ["Aceite Inka Omega", "Rico en omegas: repone la barrera y evita la pérdida de humedad."]]},
"m8-liquid-peptides-advanced-mp": {i: "Sérum de péptidos avanzado: relaja las líneas de expresión y aumenta colágeno, elastina y ácido hialurónico con un complejo de 13 péptidos.", a: [
  ["MiniProtein de líneas de expresión", "Relaja y suaviza las líneas de expresión dinámicas."], MINIGF,
  ["Complejo multipéptido al 30 % (13 péptidos)", "Incluye péptidos de cobre y Matrixyl 3000™: alisa la piel."]]},
"m8-liquid-peptides": {i: "Sérum con 30 % de péptidos que actúan de formas distintas: estimulan el colágeno, relajan las líneas de expresión y frenan la glicación.", a: [
  MATRIXYL,
  ["Péptido de cobre encapsulado", "Péptido transportador que llega a las células productoras de colágeno."],
  ["Péptido de las líneas de expresión", "Péptido inhibidor: bloquea la vía de la contracción muscular facial."],
  CARNO, HAMULTI]},
"m8-exo-pdrn-prismatic": {i: "Sérum inspirado en los polinucleótidos: favorece la recuperación y regeneración de la piel, calma la irritación y refuerza la barrera.", a: [
  ["PDRN prismático vegano", "Fragmentos de ADN que se absorben y penetran más que el PDRN tradicional: favorecen la recuperación de la piel y calman."],
  ["Complejo de tres exosomas", "Favorece la comunicación entre células, la resistencia y la recuperación; refuerza la barrera."],
  ["GF MiniProtein", "Aumenta colágeno, elastina y ácido hialurónico."],
  ["Precursor de ATP", "Molécula energética que optimiza los procesos de rejuvenecimiento."]]},
"m8-oxy-r-peptides": {i: "Sérum antimanchas profesional que actúa en tres puntos de la pigmentación: frena la tirosinasa, reduce su producción y bloquea el transporte de melanina a las células.", a: [
  ["Oxi-resveratrol 1 %", "De la familia de la morera: bloquea la tirosinasa, la enzima clave de la formación de pigmento."],
  ["Tetrapéptido-30", "Reduce la producción de tirosinasa y el exceso de melanina."],
  ["Acetilglicil-beta-alanina", "Bloquea el transporte de melanina a las células de la piel."], HA()]},
"m8-niacinamide-peptides": {i: "Sérum multiactivo con 10 % de niacinamida: calma, controla el sebo, refuerza la barrera, unifica el tono e ilumina.", a: [
  NIA("10 %: antiinflamatoria, calma la irritación, hidrata y refuerza la barrera."),
  ["Péptido Crystalide™", "Potencia la renovación celular y la α-cristalina: piel más uniforme y luminosa."],
  ["Zinc PCA", "Controla el exceso de sebo."], HA(),
  NAG("Exfolia suavemente y potencia la niacinamida: tono más uniforme.")]},
"m8-clarity-peptides": {i: "Sérum ligero con 10 % de niacinamida para piel con imperfecciones: calma, regula la grasa, favorece la cicatrización y unifica el tono.", a: [
  NIA("10 %: antiinflamatoria, calma la irritación, hidrata y refuerza la barrera."),
  ["Péptido Crystalide™", "Potencia la renovación celular: superficie más uniforme y luminosa."],
  ["Zinc PCA", "Regula la grasa, favorece la cicatrización y reduce la inflamación."], HA(),
  NAG("Ayuda a bloquear la formación de pigmento: tono más uniforme.")]},
"m8-hydr8-b5": {i: "Sérum hidratante sin aceites: lleva humedad a distintas capas de la piel y favorece su regeneración.", a: [
  HAMULTI, ["Vitamina B5 (pantenol)", "Retiene la humedad y favorece la regeneración celular."]]},
"m8-hydr8-b5-intense": {i: "Sérum hidratante potenciado: hidrata a distintas profundidades, repone los factores naturales de hidratación, protege el ácido hialurónico de la piel y estimula que fabrique más.", a: [
  HAMULTI, ["Vitamina B5 (pantenol)", "Retiene la humedad y favorece la regeneración."], NMF, SASKA,
  ["Extracto de soja", "Antioxidante que estimula la producción de ácido hialurónico y colágeno."]]},
"m8-total-moisture-daily-facial-cream": {i: "Crema hidratante multiacción: refuerza la barrera con lípidos iguales a los de la piel, hidrata a distintas profundidades y equilibra el microbioma.", a: [
  ["Péptido prebiótico", "Equilibra el microbioma y refuerza la barrera."], HAMULTI,
  ["Ceramidas y lípidos (escualeno, vitamina F)", "Imitan la barrera lipídica natural: hidratan, nutren y restauran."]]},
"m8-advanced-pro-collagen-peptide-cream": {i: "Crema antiedad con péptidos: aumenta colágeno, elastina y ácido hialurónico, frena la glicación, ayuda a reparar el daño solar y retiene la hidratación.", a: [
  ["Factor de crecimiento MiniProtein™", "Aumenta colágeno, elastina y ácido hialurónico."],
  ["NAD+", "Favorece la longevidad de la piel y preserva su estructura."],
  ["Carnosina (péptido antiglicación)", "Impide que los azúcares se unan al colágeno: previene nuevas arrugas."],
  ["Endonucleasa encapsulada", "Ayuda a proteger del daño solar y a recuperar la piel tras la exposición."],
  ["Ácido poliglutámico", "Junto al ácido hialurónico, nutre, rellena y retiene la hidratación."]]},
"m8-advanced-night-restore": {i: "Crema de noche rica en ceramidas: restaura la barrera, neutraliza los radicales libres y potencia el ácido hialurónico si se usa tras un retinoide.", a: [
  CERAM,
  ["Complejo antioxidante de medianoche (péptido reparador + saskatoon + pitaya)", "Neutraliza los radicales libres y previene el daño en células y proteínas."],
  SASKA, ["Extracto de pitaya", "Antioxidante; reafirma y tonifica."],
  NAG("Junto con el retinol o retinal aplicado antes, estimula la producción de ácido hialurónico.")]},
"m8-balance-moisturiser-glycolic-acid-activator": {i: "Hidratante ligera para piel mixta o grasa con activador de glicólico: equilibra el microbioma, calma, controla las bacterias y la grasa, y exfolia si se añade el activador.", a: [
  ["Prebióticos y postbióticos", "Mantienen el equilibrio del microbioma."],
  NIA("Antiinflamatoria: calma y regenera la piel enrojecida."),
  ["Beta-glucano de avena", "Calma y suaviza."],
  ["Extracto de canela", "Antibacteriano: reduce las bacterias de las imperfecciones y equilibra la grasa."],
  ["Ácido glicólico (activador)", "El AHA más pequeño: rompe las uniones entre las células muertas para eliminarlas."]]},
"m8-crystal-retinal-ceramide-eye": {i: "Crema de noche para el contorno con retinal de liberación ultralenta: actúa sobre arrugas, manchas, textura y firmeza con la suavidad que necesita la zona, nutre y rellena.", a: [
  RAL("La doble encapsulación lo libera muy despacio, para la misma eficacia con suavidad en el contorno."),
  ["Ceramidas", "Imitan la barrera lipídica: hidratan y nutren."],
  ["Esferas de relleno de ácido hialurónico", "Se expanden dentro de la arruga para rellenarla."],
  ["Extracto de manzanilla (bisabolol)", "Antioxidante y antiinflamatorio: calma."]]},
"m8-r-retinoate-day-night-eye-serum": {i: "Sérum de contorno con retinoide de nueva generación (día y noche): renueva y estimula el colágeno, y descongestiona bolsas y ojeras.", a: [
  RR, HESP, CAFE, HAMULTI, GLI]},
"m8-advanced-night-eye": {i: "Crema rejuvenecedora de noche para el contorno: antioxidante, estimula el colágeno y actúa sobre bolsas y ojeras.", a: [
  ["Complejo antioxidante de medianoche", "Neutraliza los radicales libres y previene el daño en células y proteínas."],
  NAG("Junto con la vitamina A aplicada antes, estimula el ácido hialurónico."), HESP, CAFE, MATRIXYL]},
"m8-advanced-day-ultimate-protect": {i: "Hidratante con protección solar SPF 50+ PA++++: protege del sol, ayuda a reparar el daño UV, protege del estrés ambiental y refuerza la barrera.", a: [
  FILTROS,
  ["Fotoliasa encapsulada", "Enzima del plancton que se activa con la luz y ayuda a reparar el ADN dañado por los UV."],
  ["Protección ambiental 360° (arándano, marrubio y carnosina)", "Protege de los factores de estrés ambiental."],
  ESCUAL, HAMULTI]},
"m8-advanced-day-total-protect": {i: "Hidratante ligera con SPF 30: protege del sol, la luz azul y el infrarrojo, frena la glicación e hidrata.", a: [
  FILTROS, MORINGA, CARNO,
  ["Extracto de semilla de cacao", "Protege de la luz azul y los radicales libres."], HAMULTI]},
"m8-daily-radiance-vitamin-c": {i: "Crema de día con 7 % de vitamina C y SPF 30: protege del sol y de los radicales libres, ilumina y favorece el colágeno.", a: [
  CTETRA("7 %"), FILTROS, HA(), VITE]},
"m8-advanced-day-eye-protect": {i: "Protector solar SPF 30 específico para el contorno: protege del sol y la glicación y descongestiona bolsas y ojeras.", a: [
  FILTROS, MORINGA, CARNO, CAFE, HESP]},
"m8-h-e-o-mask": {i: "Mascarilla de tratamiento nocturno en 2 pasos: hidrata en profundidad, repone los factores naturales de hidratación y restaura la barrera lipídica.", a: [
  HAMULTI, NMF, ["Ceramidas", "Imitan la barrera lipídica: hidratan y nutren."], ESCUAL, GLI]}
};
D.prods.forEach(p => { if (A[p.id]) p.d.accion = A[p.id]; });
})();
