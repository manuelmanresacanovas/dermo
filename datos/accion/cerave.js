/* «Cómo actúa» de los productos de CeraVe.
   Fuente: «Beneficios», «Características y beneficios» y preguntas frecuentes de la ficha oficial de cada producto (cerave.es),
   completado con los mecanismos de las páginas de teoría (Cosméticos: ceramidas, niacinamida, ácido salicílico, retinol, vitamina C, péptidos).
   Formato: id de producto → { i: resumen de cómo actúa, a: [[activo, qué hace], …] } */
(function(){
const CER = ["3 ceramidas esenciales (NP, AP y EOP)", "Iguales a las de la piel: ayudan a restaurar y mantener la barrera protectora. Según la teoría, las ceramidas son cerca del 50 % de los lípidos del estrato córneo y reducen la pérdida de agua."];
const HA = ["Ácido hialurónico", "Ayuda a retener la humedad natural de la piel."];
const NIA = ["Niacinamida", "Calma la piel; según la teoría, también refuerza la barrera aumentando ceramidas y filagrina."];
const MVE = ["Tecnología MVE", "Sistema de liberación que suelta poco a poco los ingredientes hidratantes para hidratar durante 24 horas."];
const SA = ["Ácido salicílico (BHA)", "Exfoliante liposoluble que penetra en el poro: según la teoría, tiene acción queratolítica, útil en piel grasa, puntos negros y poros dilatados."];
const RET = ["Retinol encapsulado", "Estimula la renovación celular. Según la teoría, mejora arrugas, textura, luminosidad y firmeza; el encapsulado lo libera poco a poco y mejora la tolerancia."];
const FILTROS = ["Filtros solares UVB y UVA", "Protección de amplio espectro frente a la radiación ultravioleta."];
const A = {
/* Limpiadores */
"cv-aceite-limpiador-espumoso": {i: "Limpiador que pasa de aceite a espuma: la parte oleosa disuelve las impurezas grasas (maquillaje, protector solar, sebo) y los tensioactivos, las acuosas; a la vez hidrata y calma.", a: [
 ["Aceite de escualano", "Aporta un confort nutritivo y ayuda a disolver los residuos grasos («lo similar disuelve lo similar»)."], CER, HA, MVE]},
"cv-limpiadora-hidratante": {i: "Limpiador cremoso que limpia sin alterar la barrera: retira la suciedad y la grasa sin dejar la piel tirante ni seca.", a: [CER, HA, MVE]},
"cv-limpiadora-crema-espuma": {i: "Sale como crema y se transforma en espuma: un tensioactivo de aminoácidos retira el maquillaje y la suciedad mientras los aminoácidos y las ceramidas evitan la sequedad.", a: [
 ["Tensioactivo a base de aminoácidos", "Transforma la crema en una espuma suave que elimina con eficacia el maquillaje, la suciedad y la grasa."],
 ["Aminoácidos", "Ayudan a mantener los factores naturales de hidratación (NMF) de la piel, que atraen y retienen la humedad."], CER, HA, MVE]},
"cv-gel-limpiador-espumoso": {i: "Gel que se transforma en espuma para eliminar el exceso de grasa sin alterar la barrera ni dejar tirantez.", a: [CER, HA, NIA]},
"cv-limpiador-foam-reequilibrante": {i: "Espuma ligera que limpia sin fricción: elimina el exceso de grasa de la zona T y mantiene la hidratación de las zonas más secas.", a: [
 ["Tecnología Glycolysine™", "Tecnología de limpieza, pendiente de patente, que ayuda a eliminar el exceso de grasa y a retener la hidratación."],
 ["Alantoína", "Ayuda a suavizar y calmar la piel."], CER, NIA]},
"cv-limpiador-arcilla-espuma": {i: "Limpiador con arcilla y ácido salicílico que se puede usar a diario, como mascarilla o como tratamiento localizado: absorbe el sebo y reduce los granos.", a: [
 ["Arcilla de caolín", "Ayuda a absorber el exceso de sebo."],
 ["Sistema de deposición SA (2 % de ácido salicílico)", "Favorece que el ácido salicílico se absorba en la piel incluso después de aclarar."], SA, NIA, CER]},
"cv-sa-limpiador-anti-rugosidades": {i: "Gel limpiador con ácido salicílico que exfolia químicamente, sin partículas, para alisar la piel rugosa mientras las ceramidas protegen la barrera.", a: [SA, CER, NIA]},
/* Hidratación rostro */
"cv-locion-hidratante-rostro": {i: "Loción ligera sin aceites que hidrata 24 horas y calma mientras restaura la barrera, sin obstruir los poros.", a: [CER, HA, NIA, MVE]},
"cv-serum-acido-hialuronico": {i: "Sérum ligero que capta y retiene agua para hidratar y suavizar, mientras las ceramidas refuerzan la barrera.", a: [HA,
 ["Vitamina B5 (pantenol)", "Contribuye a la hidratación y a la regeneración de la piel."], CER, MVE]},
"cv-water-gel-hialuronico": {i: "Gel acuoso que hidrata al instante con efecto «plump» y sella la hidratación, reparando y reforzando la barrera.", a: [HA,
 ["Tecnología Ceramide Booster", "Ayuda a reforzar («blindar») la barrera cutánea junto con las 3 ceramidas."],
 ["Cobre PCA", "Efecto antioxidante."], CER]},
"cv-contorno-reparador": {i: "Crema ligera de contorno que hidrata y, con extractos de algas y plantas, ilumina y ayuda a reducir bolsas y ojeras.", a: [
 ["Extractos marinos y botánicos", "Ayudan a iluminar el contorno y a reducir la apariencia de bolsas y ojeras."], HA, NIA, CER, MVE]},
/* Hidratación cuerpo */
"cv-crema-hidratante": {i: "Crema rica que retiene la humedad y sella la hidratación con vaselina, ayudando a mantener la barrera de la piel seca.", a: [CER, HA,
 ["Vaselina (petrolato)", "Ingrediente oclusivo: forma una película en la superficie que sella la hidratación."], MVE]},
"cv-locion-hidratacion-intensiva": {i: "Loción que repone los factores naturales de hidratación que le faltan a la piel muy seca y repara la barrera, aliviando el picor por sequedad.", a: [
 ["Hydro-Urea™ (5 %)", "Mezcla de factores naturales de hidratación: aminoácidos (serina, glicina y alanina), PCA de sodio e hidroxietil urea."],
 ["Manteca de karité", "Emoliente: suaviza y alisa la piel seca y descamada."], CER, MVE]},
"cv-sa-crema-anti-rugosidades": {i: "Crema corporal que exfolia suavemente con urea y ácido salicílico para alisar la piel rugosa, mientras hidrata y repara la barrera.", a: [
 ["Urea", "Exfolia suavemente la piel."], SA, CER, HA, MVE]},
/* Anti-imperfecciones */
"cv-gel-control-imperfecciones": {i: "Gel exfoliante que combina BHA y AHA: desobstruye los poros y alisa la piel, mientras las ceramidas y la niacinamida mantienen la barrera y calman.", a: [SA,
 ["AHA (ácidos glicólico y láctico)", "Ayudan a suavizar y alisar la piel."], NIA, CER, HA]},
"cv-parches-imperfecciones": {i: "Parches de hidrocoloide que absorben el exceso de sebo y aíslan el grano, con ceramidas y niacinamida para calmar.", a: [
 ["Tecnología hidrocoloide", "Ayuda a absorber el exceso de sebo; además, el parche evita tocar el grano."], CER, NIA]},
"cv-serum-retinol-antimarcas": {i: "Sérum con retinol encapsulado que acelera la renovación de la piel para atenuar las marcas post-acné y refinar poros y textura.", a: [RET, NIA, HA, CER]},
/* Antiedad Skin Renewing */
"cv-sr-serum-vitamina-c": {i: "Sérum con un 10 % de vitamina C pura que ilumina y protege frente a la oxidación, con ceramidas para no dañar la barrera.", a: [
 ["Vitamina C pura (ácido ascórbico, 10 %)", "Ilumina y aporta beneficios antioxidantes. Según la teoría, también estimula el colágeno y es despigmentante."],
 HA, ["Vitamina B5 (pantenol)", "Ayuda a que la piel se sienta hidratada."], CER]},
"cv-sr-serum-retinol": {i: "Sérum con retinol encapsulado que mejora las arrugas y la textura; las ceramidas y la niacinamida ayudan a tolerarlo.", a: [RET, CER, NIA]},
"cv-sr-crema-peptidos": {i: "Crema con un complejo de péptidos que mejora la firmeza y la elasticidad y aporta una hidratación duradera.", a: [
 ["Complejo de péptidos", "Ayuda a reducir las líneas finas y las arrugas y a mejorar la firmeza. Según la teoría, los péptidos señal estimulan la síntesis de colágeno y elastina."], CER, NIA]},
"cv-sr-contorno-reafirmante": {i: "Crema de contorno con péptidos y cafeína que reafirma y reduce líneas e hinchazón, e hidrata con hialurónico y niacinamida.", a: [
 ["Complejo de péptidos", "Ayuda a reducir las líneas finas y las arrugas y a mejorar la firmeza."],
 ["Cafeína", "Ayuda a reducir la hinchazón del contorno."], HA, NIA, CER]},
/* Protección solar */
"cv-fluido-hidratante-spf50": {i: "Fotoprotector facial que filtra UVB y UVA y aporta hidratación extra; las ceramidas ayudan a reparar la barrera.", a: [FILTROS, CER, NIA]},
"cv-fluido-oil-control-spf50": {i: "Fotoprotector facial que filtra UVB y UVA y matifica, controlando la grasa 12 horas; las ceramidas ayudan a reparar la barrera.", a: [FILTROS, CER, NIA]},
"cv-locion-protectora-spf30": {i: "Loción solar para rostro y cuerpo que filtra UVB y UVA, resiste el agua y el sudor e hidrata reforzando la barrera.", a: [FILTROS, CER]},
"cv-locion-protectora-spf50": {i: "Loción solar para rostro y cuerpo que filtra UVB y UVA, resiste el agua y el sudor e hidrata reforzando la barrera.", a: [FILTROS, CER]}
};
D.prods.forEach(p => { if (A[p.id]) p.d.accion = A[p.id]; });
})();
