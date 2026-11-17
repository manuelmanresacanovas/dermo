/* «Cómo actúa» de los productos de Nuxe.
   Fuente: apartado «Ingredientes» de la ficha oficial de cada producto (nuxe.com/es),
   completado con los mecanismos de las páginas de teoría (Cosméticos, Patologías, La piel).
   Formato: id de producto → { i: resumen de cómo actúa, a: [[activo, qué hace], …] } */
(function(){
const ACEITES7 = ["7 aceites vegetales (tsubaki, argán, macadamia, borraja, camelia, avellana y almendras dulces)", "Aceites secos con afinidad con la piel: aportan omegas 3, 6 y 9 que nutren y refuerzan la barrera, sin dejar película grasa."];
const NOPERF = "No es un tratamiento: no actúa sobre la piel.";
const MIEL = ["Miel francesa", "Sus azúcares hidratantes retienen el agua en la epidermis: piel flexible y confortable. Nutritiva, ideal para la piel seca."];
const ROSA = ["Extracto de rosa", "Hidratante y calmante."];
const TEV = ["Extracto de té verde", "Obtenido por biotecnología a partir de células vegetales de té: suaviza y cuida la piel."];
const DEO = ["Tecnología desodorante", "Trío de activos que limita la proliferación de las bacterias que causan el mal olor de la transpiración, sin alcohol."];
const CFB = ["Leche vegetal + aceite de almendras dulces", "Velo de suavidad que aporta hidratación inmediata y duradera."];
const ALGA = ["Extracto de alga roja «hyaluronic-like»", "Acción hidratante similar a la del ácido hialurónico: refuerza la hidratación con el tiempo (hasta 48 horas)."];
const ALFA = ["Tecnología Alfa [3R] (alfalfa + ácido hialurónico + hemerocallis)", "Trío antiedad patentado que, según Nuxe, es más eficaz que el retinol en pruebas in vitro: el extracto de semillas de alfalfa, el ácido hialurónico natural y el extracto de Hemerocallis actúan sobre arrugas, firmeza y luminosidad."];
const ALFALFA = ["Extracto de semillas de alfalfa", "Activo antiedad de origen natural de la gama Nuxuriance Ultra."];
const VITC = ["Vitamina C estabilizada", "Antimanchas: inhibe la tirosinasa, la enzima clave de la síntesis de melanina; además es antioxidante."];
const A = {
"nx-prodigious-oil-3": {i: "Aceite seco multiusos para rostro, cuerpo y cabello: nutre, repara y suaviza, y refuerza la barrera con sus omegas sin dejar sensación grasa.", a: [
  ACEITES7, ["Omegas 3, 6 y 9 (25 % del frasco)", "Nutren y refuerzan la función barrera."]]},
"nx-prodigious-oil-o-50-ml": {i: "Aceite seco con nácares dorados: nutre, repara y suaviza rostro, cuerpo y cabello, y aporta un brillo dorado.", a: [
  ACEITES7, ["Partículas nacaradas doradas", "Iluminan la piel al instante."]]},
"nx-huile-prodigieuse-r-florale-30ml": {i: "Aceite seco de fragancia floral: nutre, repara y suaviza rostro, cuerpo y cabello, y refuerza la barrera.", a: [
  ACEITES7, ["Omegas 3, 6 y 9 (25 % del frasco)", "Nutren y refuerzan la función barrera."]]},
"nx-floral-o-floral-o": {i: "Aceite seco con nácares y fragancia floral: nutre, repara y suaviza, y aporta un brillo dorado.", a: [
  ACEITES7, ["Perlizadores naturales", "Iluminan la piel al instante."]]},
"nx-huile-prodigieuse-neroli": {i: "Aceite seco con dos aceites ecológicos: nutre con ácidos grasos esenciales y penetra rápido, con acabado seco.", a: [
  ["Aceite de ciruela de Agen bio", "Extraído en frío: composición excepcional en ácidos grasos que nutren."],
  ["Aceite de sésamo ecológico", "Rico en ácidos grasos esenciales; penetra rápido y deja un acabado seco."]]},
"nx-huile-prodigieuse-riche": {i: "Aceite seco enriquecido para piel seca: nutre más intensamente, repara y suaviza.", a: [
  ACEITES7, ["Aceite de macadamia (más concentrado)", "Más nutrición que la versión clásica."]]},
"nx-prodigieux-leche-corporal-sublimadora-perfumada-400ml": {i: "Leche corporal perfumada: nutre e hidrata la piel con aceites vegetales y la deja con la fragancia de Huile Prodigieuse.", a: [
  ["Aceites vegetales de camelia, argán, almendra dulce, macadamia, avellana y borraja", "Nutren y suavizan la piel."]]},
"nx-nuxe-huile-douche-prodigieuse-100-ml": {i: "Aceite de ducha perfumado: limpia sin resecar dejando la piel suave y con la fragancia de Huile Prodigieuse. Nuxe no detalla sus activos en la ficha.", a: []},
"nx-prodigieux-floral-gel-de-ducha-perfumado": {i: "Gel de ducha perfumado: limpia con suavidad y evita que la piel se reseque.", a: [
  ["Base limpiadora vegetal de coco y trigo", "Limpia suavemente."],
  ["Aceite de almendras dulces + glicerina vegetal", "Evitan que la piel se reseque."]]},
"nx-prodigieux-polvos-bronceadores-multifuncion": {i: "Polvos bronceadores multifunción: dan un efecto bronceado inmediato con pigmentos; no comedogénicos.", a: [
  ["Extracto de flor de jazmín", "Activo vegetal de la fórmula."]]},
"nx-prodigieux-florale-polvos-iluminadores-multifuncion": {i: "Polvos iluminadores multifunción: aportan luz al instante; no comedogénicos.", a: [
  ["Extracto de flor de jazmín", "Activo vegetal de la fórmula."]]},
"nx-prodigieux-the-perfume-3": {i: "Eau de parfum con la fragancia de Huile Prodigieuse. No es fotosensibilizante. " + NOPERF, a: []},
"nx-prodigieux-floral-le-parfum-30ml-fragancia": {i: "Eau de parfum floral. " + NOPERF, a: []},
"nx-sensual-era-bruma-perfumada-cuerpo-y-cabello": {i: "Bruma perfumada para cuerpo y cabello con notas de azahar, magnolia y vainilla. " + NOPERF, a: []},
"nx-sensual-era-gold-bruma-perfumada-cuerpo-y-cabello": {i: "Bruma perfumada con resplandor irisado, con notas de azahar, magnolia y vainilla. Ilumina al instante; no es un tratamiento.", a: []},
"nx-sunset-bliss-bruma-perfumada-cuerpo-y-cabello": {i: "Bruma perfumada para cuerpo y cabello con notas de coco, flor de tiaré y vainilla. " + NOPERF, a: []},
"nx-happy-in-pink-bruma-perfumada-cuerpo-y-cabello": {i: "Bruma perfumada para cuerpo y cabello con notas de rosa, frambuesa y almizcle. " + NOPERF, a: []},
"nx-balsamo-rostro-ultra-reconfortante": {i: "Bálsamo facial para piel seca: nutre y retiene el agua en la piel para darle flexibilidad y confort.", a: [MIEL]},
"nx-gel-limpiador-nutritivo-para-rostro-y-cuerpo-400ml": {i: "Gel limpiador nutritivo para piel seca: limpia sin resecar y ayuda a retener el agua en la piel.", a: [MIEL]},
"nx-gel-limpiador-y-desmaquillante-facial-1": {i: "Gel limpiador y desmaquillante facial de la gama Rêve de Miel, para piel seca y sensible: limpia y desmaquilla sin resecar. Nuxe no detalla sus activos en la ficha.", a: []},
"nx-crema-corporal-nutritiva-ultra-reconfortante-i-48h": {i: "Crema corporal nutritiva para piel seca: nutre y retiene el agua en la piel durante 48 horas.", a: [MIEL]},
"nx-crema-nutritiva-y-reparadora-de-manos-y-unas": {i: "Crema de manos y uñas para piel seca: nutre, repara y retiene el agua en la piel.", a: [MIEL]},
"nx-exfoliante-corporal-goloso-nutritivo-reve-de-miel": {i: "Exfoliante corporal 2 en 1: el azúcar elimina las células muertas por fricción y la miel y los aceites nutren.", a: [
  MIEL, ["Azúcar y aceites", "Exfoliación física suave y nutrición."]]},
"nx-b-lsamo-labial-con-miel": {i: "Bálsamo labial: nutre, repara y alivia la tirantez de los labios secos.", a: [
  ["Miel de lavanda de Provenza", "Nutritiva."],
  ["Propóleo Oleoactif®", "Nutritivo y reparador."],
  ["Manteca de karité", "Calmante y reconfortante: alivia la tirantez."]]},
"nx-tratamiento-labial-con-miel": {i: "Aceite labial brillante: nutre los labios.", a: [
  ["Miel", "Nutritiva."], ["Aceite de camelina bio", "Rico en omegas 3 y 6: nutritivo."]]},
"nx-tratamiento-labial-con-miel-gold": {i: "Aceite labial con nácares dorados: hidrata, nutre y da brillo.", a: [
  ["Miel de origen francés", "Hidratante."], ["Aceites vegetales con camelina bio", "Nutren los labios."],
  ["Partículas nacaradas naturales", "Aportan brillo dorado."]]},
"nx-agua-exquisita-perfumada": {i: "Agua perfumada golosa de la gama Rêve de Miel. " + NOPERF, a: []},
"nx-stick-labios-hidratante": {i: "Stick labial: hidrata, nutre y suaviza los labios.", a: [
  ["Miel", "Rica en azúcares: nutritiva y suavizante."],
  ["Aceite de girasol ecológico", "Rico en omegas 3 y 6 y vitamina E: hidratante, nutritivo y suavizante."],
  ["Aceite de camelina ecológico", "Rico en omegas 3 y 6: nutritivo."]]},
"nx-gel-de-ducha-revitalizante-750ml": {i: "Gel de ducha revitalizante: limpia con suavidad respetando la piel.", a: [
  TEV, ["Base limpiadora vegetal", "Limpia suavemente respetando la piel."]]},
"nx-desodorante-frescor-24-h-reve-de-th-50-ml": {i: "Desodorante fluido 24 horas: previene los olores de la transpiración y suaviza la piel.", a: [
  TEV, DEO]},
"nx-agua-exaltante-perfumada-100ml": {i: "Agua perfumada revitalizante de la gama Rêve de Thé, con extracto de té verde que suaviza la piel. Es sobre todo una fragancia.", a: [TEV]},
"nx-agua-micelar-desmaquillante-calmante-750ml": {i: "Agua micelar calmante: las micelas retiran el maquillaje y las impurezas mientras el extracto de rosa hidrata y calma.", a: [ROSA]},
"nx-aceite-delicado-desmaquillante-150ml": {i: "Aceite desmaquillante: disuelve el maquillaje de rostro, ojos y labios (incluso waterproof) e hidrata.", a: [
  ["Extracto oleoso de rosa", "Hidratante."]]},
"nx-leche-desmaquillante-rica-1": {i: "Leche desmaquillante rica: retira el maquillaje sin resecar la piel seca.", a: [
  ["Agua floral de rosa", "Hidratante y calmante."]]},
"nx-desmaquillante-waterproof-ojos-y-labios-bifasico": {i: "Desmaquillante bifásico: su fase oleosa disuelve el maquillaje waterproof y la acuosa refresca, hidrata y calma.", a: [
  ["Agua floral de rosa", "Hidratante y calmante."]]},
"nx-espuma-ligera-limpiadora-1": {i: "Espuma limpiadora: limpia con suavidad, hidrata y calma.", a: [ROSA]},
"nx-gel-limpiador-calmante": {i: "Gel limpiador calmante: limpia con suavidad, hidrata y calma.", a: [ROSA]},
"nx-locion-tonica-refrescante": {i: "Loción tónica: completa la limpieza, refresca, hidrata y calma.", a: [ROSA]},
"nx-exfoliante-facial-luminosidad": {i: "Exfoliante facial físico: el polvo de hueso de albaricoque elimina con suavidad las células muertas por fricción y aporta luminosidad, mientras la rosa hidrata y calma.", a: [
  ["Polvo de hueso de albaricoque", "Exfoliación física suave."], ROSA]},
"nx-serum-de-labios-voluminizador": {i: "Sérum voluminizador de labios: redensifica e hidrata, con sensación calor/frío que realza el volumen.", a: [
  ["Ácido hialurónico natural", "Redensifica e hidrata los labios."],
  ["Extracto oleoso de rosa", "Hidrata los labios."],
  ["Chile + mentol", "Sensación de calor y frío en los labios."]]},
"nx-b-lsamo-hidratante-de-labios-con-rosa": {i: "Bálsamo de labios: suaviza, alivia la tirantez y protege del viento y el frío.", a: [
  ["Extracto de aceite de rosa", "Suaviza los labios."],
  ["Manteca de karité", "Calma y alivia la tirantez."],
  ["Cera de abejas", "Protege de las agresiones externas (viento, frío)."]]},
"nx-crema-calmante-para-manos-y-unas": {i: "Crema de manos y uñas calmante: hidrata y calma.", a: [ROSA]},
"nx-gel-de-ducha-calmante-750ml": {i: "Gel de ducha suave: limpia y calma.", a: [["Agua floral de rosa", "Calmante."]]},
"nx-desodorante-en-stick-cuerpo-completo-48h": {i: "Desodorante en stick para todo el cuerpo, 48 horas: limita las bacterias del mal olor sin alcohol; apto para piel sensible.", a: [
  ["Tecnología desodorante sin alcohol", "Limita la proliferación de las bacterias responsables del mal olor y deja la piel fresca."]]},
"nx-desodorante-roll-on-frescor-24h": {i: "Desodorante roll-on 24 horas: previene los olores de la transpiración.", a: [DEO]},
"nx-agua-voluptuosa-perfumada": {i: "Agua perfumada de rosa y frutos rojos de la gama Very Rose. " + NOPERF, a: []},
"nx-cr-me-fra-che-de-beaut-3-en-1-crema-hidratante-48-h-leche-desmaquillante-mascarilla-repulpante": {i: "Crema 3 en 1 (hidratante 48 h, leche desmaquillante y mascarilla): hidrata de forma inmediata y duradera y, al masajearla, disuelve el maquillaje. Respeta el microbioma.", a: [
  CFB, ALGA, ["Manteca de karité", "Junto al aceite de almendras, disuelve el maquillaje al masajear."]]},
"nx-crema-repulpante-hidratante-l-48-h-30ml": {i: "Crema hidratante repulpante 48 h: hidrata de forma inmediata y duradera y calma. Respeta el microbioma.", a: [
  CFB, ALGA, ["Azúcares de trigo y de madera", "Activos hidratantes de origen natural."]]},
"nx-crema-rica-hidratante-l-48h-30ml": {i: "Crema hidratante rica 48 h para piel seca: hidrata de forma duradera y nutre sin película grasa. Respeta el microbioma.", a: [
  CFB, ALGA, ["Manteca de karité + manteca de moringa", "Se funden progresivamente con el calor de la piel: nutren sin dejar película grasa."]]},
"nx-fluido-matificante-hidratante-l-48h-cr-me-fra-che-de-beaut": {i: "Fluido hidratante matificante 48 h para piel mixta: hidrata y matifica. Respeta el microbioma.", a: [
  CFB, ALGA, ["Polvo de mandioca", "Polvo vegetal matificante."]]},
"nx-eye-flash-tratamiento-contorno-de-ojos-hidratante-anti-fatiga-con-certificaci-n-bio": {i: "Contorno de ojos bio: hidrata y protege el contorno de las agresiones externas, y reduce los signos de fatiga.", a: [
  ["Cafeína vegetal", "Antifatiga y descongestionante: actúa sobre bolsas y ojeras."],
  ["Extracto de trigo sarraceno", "Activo de origen natural que ayuda a reducir los signos de fatiga."]]},
"nx-super-serum-10-el-concentrado-antiedad-universal-30ml": {i: "Concentrado antiedad universal con la Patente de Longevidad de Nuxe: actúa sobre los mecanismos de juventud de la piel; sus microesferas de aceites se funden al aplicarlo y mejoran la absorción.", a: [
  ["Niacinamida", "Refuerza la barrera, unifica el tono y estimula colágeno y elastina."],
  ["Ácido hialurónico (biotecnología vegetal)", "Retiene el agua: hidrata y rellena."],
  ["Células nativas de edelweiss", "Complejo botánico antiedad."],
  ["Extracto postbiótico marino", "Activo de origen natural del Complejo de Longevidad."],
  ["Microesferas de aceites vegetales fraccionados", "Se funden al aplicar y potencian la absorción de los activos."]]},
"nx-super-serum-10-contorno-de-ojos-el-concentrado-para-el-contorno-de-ojos-antiedad-universal": {i: "Concentrado antiedad para el contorno: hidrata y rellena, descongestiona y alisa.", a: [
  ["Ácido hialurónico natural", "Penetra rápidamente con acción antiedad."],
  ["Niacinamida", "Refuerza la barrera y unifica el tono."],
  ["Células nativas de edelweiss", "Complejo vegetal patentado antiedad."],
  ["Cafeína vegetal", "Descongestiona bolsas y ojeras."],
  ["Péptido biomimético", "Antiedad."],
  ["Microperlas de aceites vegetales", "Se funden al aplicar y nutren."]]},
"nx-la-crema-antiedad-global": {i: "Crema de día antiedad global: actúa sobre arrugas, firmeza, manchas y luminosidad.", a: [ALFA]},
"nx-la-crema-rica-antiedad-global": {i: "Crema de día rica antiedad global para piel seca: actúa sobre arrugas, firmeza, manchas y luminosidad, y nutre.", a: [ALFA]},
"nx-la-crema-antiedad-global-spf30": {i: "Crema antiedad 2 en 1 con SPF30: trata los signos de la edad y protege del sol para prevenir el fotoenvejecimiento.", a: [
  ALFA, ["Filtro solar SPF30", "Protege de la radiación UV, principal causa del fotoenvejecimiento."]]},
"nx-la-crema-de-noche-antiedad-global": {i: "Crema de noche antiedad global: actúa sobre arrugas, firmeza y luminosidad mientras la piel se repara.", a: [ALFA]},
"nx-el-tratamiento-excepcional-dia-y-noche-75ml": {i: "Tratamiento antiedad global de día y noche: actúa sobre arrugas y firmeza, ilumina y unifica.", a: [
  ALFA, ["Niacinamida", "Ilumina y unifica el tono (bloquea la transferencia de melanosomas)."]]},
"nx-el-s-rum-corrector-de-manchas": {i: "Sérum corrector de manchas solares y de la edad: actúa sobre la formación de la mancha y sobre los signos de la edad.", a: [ALFA, VITC]},
"nx-el-tratamiento-espec-fico-para-contorno-de-ojos-y-labios": {i: "Tratamiento antiedad para el contorno de ojos y labios: actúa sobre arrugas y firmeza.", a: [ALFA]},
"nx-crema-antimanchas-antiedad-spf30": {i: "Crema de día antimanchas y antiedad con SPF30: unifica el tono, trata los signos de la edad y protege del sol, que estimula las manchas.", a: [
  ALFA, ["Niacinamida 5 %", "Unifica e ilumina: bloquea la transferencia de melanosomas."],
  ["4 filtros orgánicos (SPF30)", "Absorben la radiación UV y la transforman en energía no dañina."]]},
"nx-la-crema-de-manos-correctora-de-manchas": {i: "Crema de manos antimanchas: actúa sobre las manchas y los signos de la edad de las manos.", a: [ALFALFA, VITC]},
"nx-la-leche-corporal-reafirmante": {i: "Leche corporal reafirmante con efecto tensor.", a: [ALFALFA]},
"nx-el-aceite-s-rum-revitalizante": {i: "Aceite-sérum bio para piel madura y seca: fortalece la piel y la nutre con aceites vegetales.", a: [
  ["Oleoextracto de arroz", "Fortalece la piel."],
  ["Aceites vegetales (aguacate, jojoba, macadamia y sésamo)", "Nutren y suavizan."]]},
"nx-la-crema-aceite-nutri-fortificante": {i: "Crema-aceite nutritiva para piel madura muy seca: nutre y fortalece la piel.", a: [
  ["Células biflorales de azafrán y buganvilla", "Activos antiedad de origen natural."],
  ["Oleoactivo de rosa de porcelana®", "Activo antiedad patentado."],
  ["Complejo nutri-constituyente (jiaogulan y cistus)", "Nutre la piel."],
  ["Aceite de macadamia", "Nutritivo."]]},
"nx-crema-aterciopelada-efecto-lifting": {i: "Crema reafirmante con efecto lifting: fortalece la piel con un activo regenerador de microalga.", a: [
  ["Aceite de microalga Chlorella vulgaris", "Alga de capacidades regenerativas; una gota concentra el poder antiedad de 4.000 millones de células activas."]]},
"nx-crema-en-polvo-efecto-lifting-merveillance-lift-50-ml": {i: "Crema reafirmante de textura polvo con efecto lifting: fortalece la piel con un activo regenerador de microalga.", a: [
  ["Aceite de microalga Chlorella vulgaris", "Alga de capacidades regenerativas; una gota concentra el poder antiedad de 4.000 millones de células activas."]]},
"nx-crema-glow-efecto-lifting": {i: "Crema reafirmante con un toque de color: fortalece la piel y realza la luminosidad.", a: [
  ["Aceite de microalga Chlorella vulgaris", "Concentra el poder de 4.000 millones de células activas para fortalecer la piel."],
  ["Extracto de tomate", "Colorea sutilmente la crema para realzar la luminosidad."]]},
"nx-crema-concentrada-de-noche": {i: "Crema de noche reafirmante: fortalece la piel con un activo regenerador de microalga mientras se repara.", a: [
  ["Aceite de microalga Chlorella vulgaris", "Alga de capacidades regenerativas; una gota concentra el poder antiedad de 4.000 millones de células activas."]]},
"nx-la-crema-excepcional-dia-and-noche-75ml-merveillance-lift": {i: "Crema reafirmante de día y noche: fortalece la piel con un activo regenerador de microalga y niacinamida antiedad.", a: [
  ["Chlorella vulgaris", "Alga de propiedades regenerativas excepcionales."],
  ["Niacinamida", "Antiedad: estimula colágeno y elastina y refuerza la barrera."]]},
"nx-s-rum-en-aceite-activador-de-firmeza": {i: "Sérum en aceite activador de firmeza: fortalece la piel con un activo regenerador de microalga.", a: [
  ["Aceite de microalga Chlorella vulgaris", "Alga de capacidades regenerativas; una gota concentra el poder antiedad de 4.000 millones de células activas."]]},
"nx-crema-reafirmante-contorno-de-ojos": {i: "Contorno reafirmante: fortalece la piel del contorno y descongestiona las bolsas.", a: [
  ["Aceite de microalga Chlorella vulgaris", "Activo regenerador antiedad."],
  ["Péptido biomimético del contorno", "Descongestionante: ayuda a reducir las bolsas."]]},
"nx-gel-crema-alisadora-iluminadora": {i: "Gel-crema hidratante e iluminadora: hidrata en dos niveles (en profundidad y en superficie), alisa las arrugas de deshidratación y aporta luminosidad.", a: [
  ["Ácido hialurónico de bajo peso molecular", "Penetra e hidrata las capas de la epidermis; mejora la elasticidad."],
  ["Ácido poliglutámico de alto peso molecular", "Retiene hasta 5.000 veces su peso en agua y forma una película que previene la deshidratación; refuerza la barrera."],
  ["Extracto fermentado de ginseng", "Mejora la luminosidad."]]},
"nx-crema-repulpante-iluminadora": {i: "Crema repulpante e iluminadora: hidrata en dos niveles, refuerza la barrera, alisa las arrugas de deshidratación y aporta luminosidad.", a: [
  ["Ácido hialurónico de bajo peso molecular", "Penetra e hidrata las capas de la epidermis."],
  ["Ácido poliglutámico de alto peso molecular", "Retiene hasta 5.000 veces su peso en agua y forma una película que previene la deshidratación."],
  ["Extracto fermentado de ginseng", "Mejora la luminosidad."]]},
"nx-serum-iluminador-antimanchas": {i: "Sérum iluminador antimanchas: hidrata en dos niveles, atenúa las manchas y unifica el tono.", a: [
  ["Vitamina C estabilizada 5 %", "Antioxidante: ilumina, atenúa las manchas (inhibe la tirosinasa) y unifica el tono."],
  ["Ácido hialurónico de bajo peso molecular", "Penetra e hidrata las capas de la epidermis."],
  ["Ácido poliglutámico de alto peso molecular", "Retiene hasta 5.000 veces su peso en agua y previene la deshidratación."]]},
"nx-balsamo-aceite-renovador-noche": {i: "Bálsamo-aceite de noche: hidrata en dos niveles, nutre y devuelve la luminosidad mientras la piel se repara.", a: [
  ["Ácido hialurónico de bajo peso molecular", "Penetra e hidrata las capas de la epidermis."],
  ["Ácido poliglutámico de alto peso molecular", "Retiene hasta 5.000 veces su peso en agua y previene la deshidratación."],
  ["Extracto fermentado de ginseng", "Mejora la luminosidad."], ["Aceite de macadamia", "Nutritivo."]]},
"nx-concentrado-iluminador": {i: "Concentrado iluminador: hidrata en dos niveles y da un resplandor rosado inmediato.", a: [
  ["Ácido hialurónico de bajo peso molecular", "Penetra e hidrata las capas de la epidermis."],
  ["Ácido poliglutámico de alto peso molecular", "Retiene hasta 5.000 veces su peso en agua y previene la deshidratación."],
  ["Partículas nacaradas rosadas", "Reflejan la luz: resplandor inmediato."]]},
"nx-stick-antifatiga-para-el-contorno-de-ojos": {i: "Stick antifatiga para el contorno con efecto cubito de hielo: hidrata y descongestiona.", a: [
  ["Ácido hialurónico de bajo peso molecular", "Penetra e hidrata las capas de la epidermis."],
  ["Cafeína vegetal", "Descongestiona bolsas y ojeras."]]},
"nx-gel-b-lsamo-multi-correcci-n-ojos": {i: "Gel-bálsamo de contorno: descongestiona y protege de la oxidación.", a: [
  ["Cafeína vegetal", "Descongestiona bolsas y ojeras."], ["Extracto de jazmín", "Antioxidante."]]},
"nx-serum-iluminador-ojos": {i: "Sérum iluminador de contorno: hidrata, descongestiona, estimula la microcirculación y aporta luz al instante con pigmentos nacarados.", a: [
  ["Chlorella vulgaris", "Alga de propiedades regenerativas."],
  ["Ácido hialurónico natural", "Hidratante."],
  ["Niacinamida", "Refuerza la barrera y unifica el tono."],
  ["Cafeína", "Descongestionante y antifatiga; estimula la microcirculación."],
  ["Pigmentos nacarados rosados", "Iluminan la mirada al instante."]]},
"nx-mascarilla-detox-luminosidad-vitaminada": {i: "Mascarilla detox de luminosidad en 5 minutos: aporta luz a la piel apagada.", a: [
  ["Extracto de cítricos", "Activo vitaminado de la fórmula."]]},
"nx-el-serum-autobronceador": {i: "Sérum autobronceador: da un tono dorado progresivo sin sol y, a la vez, hidrata y redensifica. No protege del sol.", a: [
  ["DHA (dihidroxiacetona) de origen natural", "Autobronceador: reacciona con la capa más superficial de la piel y la colorea; el color aparece en unas horas y desaparece al renovarse el estrato córneo."],
  ["Ácido hialurónico de dos pesos moleculares", "Hidrata y redensifica."]]},
"nx-bb-cream-hidratante-con-color-tono-medio": {i: "BB cream hidratante con color: unifica el tono con pigmentos naturales e hidrata. Sin siliconas.", a: [
  ["Aceite de almendras dulces", "Hidrata y nutre."], ["Pigmentos de origen natural", "Unifican el tono."]]},
"nx-gel-limpiador-purificante-1": {i: "Gel limpiador purificante sin sulfatos para piel con imperfecciones: limpia sin resecar y actúa sobre las imperfecciones.", a: [
  ["Zinc PCA", "Activo anti-imperfecciones; el PCA, componente natural del estrato córneo, mejora la penetración del zinc sin resecar."],
  ["Extracto de lichi", "Rico en taninos y flavonoles: perfecciona la apariencia de la piel."],
  ["Base limpiadora natural", "Limpia sin resecar."]]},
"nx-locion-purificante-anti-imperfecciones": {i: "Loción purificante sin aclarado: actúa sobre las imperfecciones y las marcas.", a: [
  ["Zinc PCA", "Actúa sobre imperfecciones y marcas; el PCA mejora su penetración sin resecar."],
  ["Extracto de lichi", "Rico en taninos y flavonoles: perfecciona la apariencia de la piel."]]},
"nx-serum-anti-imperfecciones": {i: "Sérum anti-imperfecciones no comedogénico: combate las imperfecciones, hidrata y devuelve la luminosidad.", a: [
  ["Zinc PCA", "Combate las imperfecciones; el PCA mejora su penetración sin resecar."],
  ["Extracto de lichi", "Hidratante; devuelve la luminosidad y mejora la apariencia de la piel."]]},
"nx-fluido-matificante-minimizador-de-poros": {i: "Fluido hidratante matificante: actúa sobre las imperfecciones, minimiza los poros y matifica.", a: [
  ["Zinc PCA", "Actúa sobre imperfecciones y marcas; el PCA mejora su penetración sin resecar."],
  ["Extracto de lichi", "Rico en taninos y flavonoles: perfecciona la apariencia de la piel."]]},
"nx-corrector-de-imperfecciones": {i: "Gel parche invisible de acción localizada: combate el grano, renueva la piel sin irritar, regula el sebo y reduce las marcas.", a: [
  ["Zinc PCA", "Combate las imperfecciones."],
  ["Ácido succínico 2 %", "Queratolítico suave (alternativa al salicílico): alisa y renueva sin irritar."],
  ["Niacinamida 5 %", "Reduce las marcas y regula el exceso de sebo."],
  ["Extracto de lichi", "Perfecciona la apariencia de la piel."]]},
"nx-gel-de-ducha-multi-usos-para-rostro-barba-cuerpo-y-cabello-1": {i: "Gel de ducha multiusos para hombre (rostro, barba, cuerpo y cabello): limpia y aporta vitalidad a la piel.", a: [
  ["Oleoextracto de corteza de fresno", "Activo patentado de la gama Nuxe Men para las necesidades de la piel masculina: más resistencia y vitalidad."]]},
"nx-gel-limpiador-matificante": {i: "Gel limpiador matificante para hombre: limpia sin resecar y actúa sobre las imperfecciones. Sin sulfatos.", a: [
  ["Oleoextracto de corteza de fresno", "Activo patentado para la piel masculina."],
  ["Zinc PCA", "Anti-imperfecciones; el PCA mejora su penetración sin resecar."]]},
"nx-serum-multi-accion-juventud-y-energia": {i: "Sérum antiedad multiacción para hombre: da resistencia y vitalidad a la piel y actúa sobre los signos de la edad.", a: [
  ["Oleoextracto de corteza de fresno", "Activo patentado para la piel masculina: más resistencia y vitalidad."], ALFA]},
"nx-fluido-antiedad-revitalizante-global": {i: "Fluido antiedad para hombre: da resistencia y vitalidad y actúa sobre los signos de la edad.", a: [
  ["Oleoextracto de corteza de fresno", "Activo patentado para la piel masculina: más resistencia y vitalidad."], ALFA]},
"nx-gel-hidratante-antifatiga-instantaneo": {i: "Gel hidratante antifatiga para hombre: hidrata, refuerza la barrera y aporta vitalidad.", a: [
  ["Oleoextracto de corteza de fresno", "Activo patentado para la piel masculina."],
  ["Ácido hialurónico", "Retiene el agua: hidrata."], ["Niacinamida", "Refuerza la barrera y calma."]]},
"nx-aceite-multifuncion-para-la-barba": {i: "Aceite multifunción para la barba: nutre el vello y la piel de debajo.", a: [
  ["Oleoextracto de corteza de fresno", "Activo patentado: fortalece el vello y da vitalidad a la piel."],
  ["Aceites de jojoba, girasol y almendra dulce", "Nutren y suavizan."]]},
"nx-espuma-de-afeitar-anti-irritaciones": {i: "Espuma de afeitar antiirritaciones: facilita el afeitado protegiendo la piel.", a: [
  ["Oleoextracto de corteza de fresno", "Activo patentado para la piel masculina."], ["Extracto de nopal", "Activo vegetal de la fórmula."]]},
"nx-balsamo-regenerador-calmante-para-despues-del-afeitado": {i: "Bálsamo after-shave: calma y regenera la piel tras el afeitado.", a: [
  ["Oleoextracto de corteza de fresno", "Activo patentado: más resistencia y vitalidad."], ["Extracto de nopal", "Activo vegetal calmante de la fórmula."]]},
"nx-desodorante-proteccion-24h": {i: "Desodorante 24 h sin marcas: previene los olores de la sudoración.", a: [
  ["Tecnología desodorante con zinc", "Se adapta a cada piel para evitar los olores de la transpiración."]]},
"nx-eau-de-parfum": {i: "Eau de parfum masculina. " + NOPERF, a: []},
"nx-el-champ-brillo-sublime-400ml": {i: "Champú sin siliconas ni sulfatos: limpia con suavidad y nutre el cabello para darle brillo.", a: [
  ["Aceite de camelia rosa fermentado", "La fermentación potencia sus propiedades reparadoras y nutritivas."],
  ["Base limpiadora natural (4 tensioactivos)", "Limpia con eficacia y buena tolerancia."]]},
"nx-acondicionador-brillo-sublime": {i: "Acondicionador sin siliconas: repara, nutre y da brillo.", a: [
  ["Aceite de camelia rosa fermentado", "Reparador y nutritivo."], ["Pantenol (provitamina B5)", "Hidrata y repara."]]},
"nx-mascarilla-capilar-reparacion-intensiva": {i: "Mascarilla capilar de reparación intensiva para cabello dañado.", a: [
  ["Aceite de camelia rosa fermentado", "Reparador y nutritivo."], ["Pantenol (provitamina B5)", "Hidrata y repara."], ["Manteca de karité", "Nutre."]]},
"nx-la-mascarilla-nutrici-n-pre-champ": {i: "Mascarilla pre-champú sin siliconas: nutre el cabello antes del lavado.", a: [
  ["Aceite de camelia rosa fermentado", "Reparador y nutritivo."], ["Aceite de jojoba bio", "Nutre."]]},
"nx-leche-capilar-desenredante-sin-aclarado": {i: "Leche desenredante sin aclarado: nutre, protege y da brillo al cabello.", a: [
  ["Aceite de camelia rosa fermentado", "Reparador y nutritivo."],
  ["Extracto de quinoa", "17 aminoácidos que se unen a la superficie del cabello para protegerlo y darle brillo."]]},
"nx-tratamiento-capilar-nutrici-n-intensa": {i: "Crema de nutrición intensa termoprotectora (hasta 220 °C): nutre y protege el cabello del calor.", a: [
  ["Aceite de camelia rosa fermentado", "Reparador y nutritivo."],
  ["Extracto de quinoa", "17 aminoácidos que se unen a la superficie del cabello para protegerlo y darle brillo."]]},
"nx-serum-hidra-voluminizador-para-cabello-y-cuero-cabelludo": {i: "Sérum para cabello y cuero cabelludo: hidrata la fibra y aporta densidad y volumen.", a: [
  ["Aceite de camelia rosa fermentado", "Reparador y nutritivo."],
  ["Ácido hialurónico", "Hidrata la fibra capilar y realza el brillo."],
  ["Extracto de amla", "Fortalece la densidad, la resistencia y el brillo."]]},
"nx-leche-solar-fundente-muy-alta-proteccion-spf50": {i: "Leche solar SPF50+ para rostro y cuerpo: protege de UVB y UVA cortos y largos y ayuda a prevenir el fotoenvejecimiento.", a: [
  ["Complejo de filtros patentado (3 filtros orgánicos + 2 ésteres)", "Absorben la radiación UVB, UVA corta y UVA larga y la transforman en energía no dañina."],
  ["Extracto de arroz y romero", "Protector celular: ayuda a prevenir el fotoenvejecimiento."]]},
"nx-crema-solar-fundente-muy-alta-protecction-spf50": {i: "Crema solar facial SPF50+: protege de UVB y UVA cortos y largos y ayuda a prevenir el fotoenvejecimiento.", a: [
  ["Complejo de filtros patentado (3 filtros orgánicos + 2 ésteres)", "Absorben la radiación UVB, UVA corta y UVA larga y la transforman en energía no dañina."],
  ["Extracto de arroz y romero", "Protector celular: ayuda a prevenir el fotoenvejecimiento."]]},
"nx-fluido-ligero-alta-protecci-n-spf50": {i: "Fluido solar facial SPF50: protege de UVB y UVA cortos y largos y ayuda a prevenir el fotoenvejecimiento.", a: [
  ["Complejo de filtros patentado (3 filtros orgánicos + 2 ésteres)", "Absorben la radiación UVB, UVA corta y UVA larga."],
  ["Extracto de arroz y romero", "Protector celular: ayuda a prevenir el fotoenvejecimiento."]]},
"nx-spray-solar-delicioso-spf50": {i: "Spray solar SPF50 para rostro y cuerpo: protege de UVB y UVA cortos y largos y ayuda a prevenir el fotoenvejecimiento.", a: [
  ["Complejo de filtros patentado (3 filtros orgánicos + 2 ésteres)", "Absorben la radiación UVB, UVA corta y UVA larga."],
  ["Extracto de arroz y romero", "Protector celular: ayuda a prevenir el fotoenvejecimiento."]]},
"nx-spray-solar-delicioso-protecci-n-alta-spf30": {i: "Spray solar SPF30 para rostro y cuerpo: protege del sol, ayuda a prevenir el fotoenvejecimiento y potencia el bronceado.", a: [
  ["Complejo de filtros patentado (3 filtros orgánicos + 2 ésteres)", "Absorben la radiación UVB, UVA corta y UVA larga."],
  ["Extracto de arroz y romero", "Protector celular: ayuda a prevenir el fotoenvejecimiento."],
  ["Extracto de algarroba", "Potencia el bronceado de forma natural."]]},
"nx-aceite-solar-bronceador-spf50-g7": {i: "Aceite solar SPF50 para rostro y cuerpo: protege de UVB y UVA cortos y largos y ayuda a prevenir el fotoenvejecimiento.", a: [
  ["Complejo de filtros patentado (3 filtros orgánicos + 2 ésteres)", "Absorben la radiación UVB, UVA corta y UVA larga."],
  ["Extracto de arroz y romero", "Protector celular: ayuda a prevenir el fotoenvejecimiento."]]},
"nx-aceite-solare-oro-alta-proteccion-spf50": {i: "Aceite solar SPF50 con acabado dorado: protege del sol, ayuda a prevenir el fotoenvejecimiento e ilumina.", a: [
  ["Complejo de filtros patentado (3 filtros orgánicos + 2 ésteres)", "Absorben la radiación UVB, UVA corta y UVA larga."],
  ["Extracto de arroz y romero", "Protector celular: ayuda a prevenir el fotoenvejecimiento."],
  ["Nácares naturales", "Acabado dorado."]]},
"nx-aceite-solar-oro-alta-proteccion-spf30": {i: "Aceite solar SPF30 con acabado dorado: protege del sol, ayuda a prevenir el fotoenvejecimiento e ilumina.", a: [
  ["Complejo de filtros patentado (3 filtros orgánicos + 2 ésteres)", "Absorben la radiación UVB, UVA corta y UVA larga."],
  ["Extracto de arroz y romero", "Protector celular: ayuda a prevenir el fotoenvejecimiento."],
  ["Nácares naturales", "Acabado dorado."]]},
"nx-crema-solar-fundente-alta-protecci-n-spf30": {i: "Crema solar SPF30: protege de UVB y UVA cortos y largos y ayuda a prevenir el fotoenvejecimiento.", a: [
  ["Complejo de filtros patentado (3 filtros orgánicos + 2 ésteres)", "Absorben la radiación UVB, UVA corta y UVA larga."],
  ["Extracto de arroz y romero", "Protector celular: ayuda a prevenir el fotoenvejecimiento."]]},
"nx-leche-solar-fundente-alta-protecci-n-spf30-rostro-y-cuerpo": {i: "Leche solar SPF30 para rostro y cuerpo: protege del sol, ayuda a prevenir el fotoenvejecimiento y potencia el bronceado.", a: [
  ["Complejo de filtros patentado (3 filtros orgánicos + 2 ésteres)", "Absorben la radiación UVB, UVA corta y UVA larga."],
  ["Extracto de arroz y romero", "Protector celular: ayuda a prevenir el fotoenvejecimiento."],
  ["Extracto de algarroba", "Potencia el bronceado de forma natural."]]},
"nx-bruma-solar-refrescante-spf30": {i: "Bruma solar SPF30 para rostro, cuerpo y cuero cabelludo: protege del sol y ayuda a prevenir el fotoenvejecimiento.", a: [
  ["Complejo de filtros patentado (3 filtros orgánicos + 2 ésteres)", "Absorben la radiación UVB, UVA corta y UVA larga."],
  ["Extracto de arroz y romero", "Protector celular: ayuda a prevenir el fotoenvejecimiento."]]},
"nx-fluido-solar-glow-spf30": {i: "Fluido solar SPF30 sublimador: protege del sol, realza el bronceado e ilumina.", a: [
  ["Complejo de filtros patentado (3 filtros orgánicos + 2 ésteres)", "Absorben la radiación UVB, UVA corta y UVA larga."],
  ["Extracto de arroz y romero", "Protector celular: ayuda a prevenir el fotoenvejecimiento."],
  ["Extracto de algarroba", "Sublima el bronceado."], ["Nácares y pigmentos naturales", "Iluminan."]]},
"nx-serum-en-stick-solar-spf50plus": {i: "Sérum solar en stick SPF50+ invisible: protección de amplio espectro y antioxidante para reaplicar.", a: [
  ["Filtros orgánicos", "Absorben la radiación UV de amplio espectro."],
  ["Extracto de arroz y romero", "Protector celular: ayuda a prevenir el fotoenvejecimiento."],
  ["Vitamina E", "Antioxidante frente al estrés oxidativo del sol."]]},
"nx-aceite-l-cteo-capilar-protector-hidratante": {i: "Aceite lácteo capilar bifásico: protege el cabello del sol, la sal y el cloro y lo hidrata. Es para el cabello, no para la piel.", a: [
  ["2 filtros solares", "Protegen el cabello de los rayos UVB y UVA."],
  ["Aceites de coco y jojoba", "Nutren el cabello."], ["Pantenol", "Hidrata."]]},
"nx-leche-refrescante-after-sun-400ml-original": {i: "Leche after-sun: refresca la piel tras el sol y prolonga el bronceado.", a: [
  ["Extracto de polvo de algarroba", "Prolonga y sublima el bronceado de forma natural."]]},
"nx-champ-y-gel-de-ducha-after-sun-750ml": {i: "Champú y gel de ducha after-sun sin sulfatos: limpia con suavidad cuerpo y cabello tras el sol, la sal y el cloro. Nuxe no detalla sus activos.", a: []},
"nx-espuma-autobronceadora-hidratante": {i: "Espuma autobronceadora para rostro y cuerpo: da color sin sol e hidrata. No contiene filtros solares.", a: [
  ["DHA de origen natural", "Autobronceador: colorea la capa más superficial de la piel; el color desaparece al renovarse el estrato córneo."],
  ["Ácido hialurónico natural", "Hidratante."]]},
"nx-polvos-compactos-bronceadores-multiusos": {i: "Polvos bronceadores multiusos: dan un efecto bronceado inmediato con pigmentos; no comedogénicos.", a: [
  ["Extracto de flor de jazmín", "Activo vegetal de la fórmula."]]},
"nx-agua-deliciosa-perfumada-100ml": {i: "Agua perfumada de la gama Nuxe Sun. " + NOPERF, a: []},
"nx-crema-de-manos-y-u-as-sweet-lemon-50-ml": {i: "Crema de manos y uñas bio: hidrata y nutre.", a: [
  ["Aceite de girasol ecológico", "Nutre."], ["Aloe vera ecológico", "Hidrata y calma."]]},
"nx-b-lsamo-labial-con-fragancia-de-merengue-de-lim-n": {i: "Bálsamo labial bio: nutre y protege los labios.", a: [
  ["Aceite de girasol ecológico", "Nutre los labios."]]}
};
D.prods.forEach(p => { if (A[p.id]) p.d.accion = A[p.id]; });
})();
