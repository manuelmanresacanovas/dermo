/* «En qué se diferencia» de los productos de CeraVe (formato y criterio: ver datos/diferencial/caudalie.js).
   Todos llevan 3 ceramidas: la diferencia está en el tipo de piel, la textura y el activo añadido. */
(function(){
const F = {
/* Limpiadores */
"cv-aceite-limpiador-espumoso": "Limpiador en ACEITE que pasa a espuma, para piel seca o atópica; desde 1 mes de edad.",
"cv-limpiadora-hidratante": "Limpiador CREMOSO suave para piel normal a seca, sin tirantez; rostro y cuerpo.",
"cv-limpiadora-crema-espuma": "Crema que se vuelve ESPUMA y DESMAQUILLA en un paso; piel normal a seca.",
"cv-gel-limpiador-espumoso": "Limpiador en GEL espumoso para piel normal a GRASA; quita el exceso de grasa.",
"cv-limpiador-foam-reequilibrante": "Limpiador en ESPUMA ligera para piel MIXTA: controla el brillo y mantiene hidratadas las zonas secas.",
"cv-limpiador-arcilla-espuma": "Limpiador con ARCILLA y 2 % de salicílico para granos; también como mascarilla o tratamiento localizado.",
"cv-sa-limpiador-anti-rugosidades": "Limpiador con ácido salicílico para piel RUGOSA o con granitos en el cuerpo.",
/* Hidratación rostro */
"cv-locion-hidratante-rostro": "Hidratante facial LIGERA de NOCHE (PM), sin aceites, con niacinamida.",
"cv-serum-acido-hialuronico": "SÉRUM hidratante con ácido hialurónico; va antes de la crema.",
"cv-water-gel-hialuronico": "Hidratante facial en GEL acuoso, también para piel grasa; efecto «plump».",
"cv-contorno-reparador": "Contorno de ojos para BOLSAS y OJERAS, con extractos de algas.",
/* Hidratación cuerpo */
"cv-crema-hidratante": "CREMA rica con vaselina para piel seca a muy seca, irritada o atópica; rostro y cuerpo.",
"cv-locion-hidratacion-intensiva": "Loción corporal con Hydro-Urea para piel MUY seca con PICOR; desde 13 años.",
"cv-sa-crema-anti-rugosidades": "Crema corporal con UREA y salicílico que EXFOLIA la piel rugosa; da fotosensibilidad.",
/* Anti-imperfecciones */
"cv-gel-control-imperfecciones": "Tratamiento de NOCHE con AHA y BHA para granos, poros y puntos negros; da fotosensibilidad.",
"cv-parches-imperfecciones": "PARCHES de hidrocoloide para un grano puntual; desde 13 años.",
"cv-serum-retinol-antimarcas": "RETINOL para las MARCAS post-acné y los poros; empezar en noches alternas.",
/* Antiedad Skin Renewing */
"cv-sr-serum-vitamina-c": "VITAMINA C pura al 10 % para la MAÑANA: luminosidad y tono.",
"cv-sr-serum-retinol": "RETINOL antiedad para la NOCHE: arrugas y textura.",
"cv-sr-crema-peptidos": "Crema con PÉPTIDOS para la FIRMEZA, sobre todo de noche.",
"cv-sr-contorno-reafirmante": "Contorno antiedad con péptidos y CAFEÍNA: arrugas, firmeza e hinchazón.",
/* Protección solar */
"cv-fluido-hidratante-spf50": "Solar FACIAL en fluido ultraligero SPF 50 para piel normal a SECA.",
"cv-fluido-oil-control-spf50": "Solar FACIAL SPF 50+ MATIFICANTE para piel mixta o GRASA.",
"cv-locion-protectora-spf30": "Solar en loción SPF 30 para ROSTRO y CUERPO, resistente al agua.",
"cv-locion-protectora-spf50": "Solar en loción SPF 50+ para ROSTRO y CUERPO, resistente al agua."
};
D.prods.forEach(p => { if (F[p.id] && p.d) p.d.dif = F[p.id]; });
})();
