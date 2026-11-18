/* «En qué se diferencia» de los productos de Gema Herrerías (formato y criterio: ver datos/diferencial/caudalie.js).
   La marca habla de «Código Piel»: resistente (tolera activos fuertes), sensible, grasa, seca… */
(function(){
const F = {
/* Limpieza */
"gh-aceite-limpiador-desmaquillante": "Aceite desmaquillante que pasa a leche, no comedogénico: rostro y ojos sin residuo graso, en piel grasa o seca.",
"gh-kire-emulsion-limpiadora-x-cristina-mitre": "Emulsión limpiadora japonesa que retira grasa, maquillaje y protector solar mientras hidrata.",
"gh-limpiador-espumante-syndet": "Espuma limpiadora con cepillo aplicador: limpieza profunda que respeta la barrera, para cualquier piel.",
"gh-5-gel-limpiador-syndet": "El limpiador para piel grasa con imperfecciones: seborregula con ácido succínico.",
"gh-limpiador-hidratante-desmaquillante": "Híbrido de micelar y tónico: limpia, desmaquilla, hidrata y calma en un paso.",
"gh-sistema-bifase-desmaquillante": "Bifásico solo para ojos y labios, sin residuo graso.",
"gh-limpiador-en-polvo-enzimatico-uso-diario": "Limpiador en polvo que además exfolia con enzimas a diario.",
/* Exfoliación */
"gh-peeling-8-pha-discos-piel-sensible": "El peeling para piel sensible: discos con 8 % de PHA, 2 noches por semana.",
"gh-peeling-10-aha-discos-piel-iniciacion": "El peeling de iniciación con 10 % de AHA para piel resistente: antiedad, manchas e imperfecciones.",
"gh-peeling-20-aha-discos-intensivos": "El peeling intensivo con 20 % de AHA, para quien ya tolera el de iniciación. No apto en piel sensible.",
"gh-mascarilla-purificante-arcilla-mediterranea": "Mascarilla de arcilla y peeling enzimático 2 en 1 para piel grasa con imperfecciones, 2 noches por semana.",
/* Lociones y brumas */
"gh-esencia-4fnh-x-cristina-mitre-locion-hidratante": "Loción hidratante con 4 ácidos hialurónicos que va antes del tratamiento diario.",
"gh-5-azelaic-s-x-cristina-mitre-locion-exfoliante": "Loción exfoliante diaria con ácido salicílico y azeloglicina: poros, sebo y luminosidad.",
"gh-bruma-universal-dermobiota": "Bruma con postbióticos que se puede renovar durante el día, incluso en piel muy sensible con rojeces.",
/* Antioxidantes */
"gh-5-cica-e-serum-piel-sensible": "El antioxidante para piel sensible con rojeces: vitamina E y centella en lugar de vitamina C.",
"gh-15-antiox-c-serum-antioxidante": "El antioxidante con 10 % de vitamina C, de mañana, para piel resistente con arrugas y manchas. No apto en piel sensible.",
"gh-12-azelaic-n-serum-imperfecciones": "Sérum con azeloglicina y niacinamida para piel grasa: seborregula, despigmenta e imperfecciones.",
"gh-10-nam-td-serum-despigmentante": "El sérum antimanchas, con ácido tranexámico y niacinamida, para cualquier piel.",
/* Acción intensiva */
"gh-600-retinal-r-serum-antiedad": "El retinoide para piel sensible: retinal al 0,05 % en lipovesículas. No en embarazo ni lactancia.",
"gh-2000-retinal-r-serum-antiedad": "Triple retinoide (retinal 0,1 %, retinol y exosomas) para arrugas y manchas. No en embarazo ni lactancia.",
"gh-3000-retinol-np-serum-antiedad": "Retinol puro al 0,3 % con niacinamida para arrugas y flacidez en piel resistente. No en embarazo ni lactancia.",
"gh-1600-retinal-z-serum-imperfecciones": "El retinoide para piel grasa con imperfecciones: seborregula y mejora los poros. No en embarazo ni lactancia.",
"gh-25-peptidos-th-serum-antiedad": "Sérum de péptidos sin retinoides para arrugas y flacidez.",
"gh-25-peptidos-th-cremagel-roll-on-para-cuello-y-escote": "Los mismos péptidos en roll-on, para cuello y escote.",
"gh-triple-ceramida-serum-antiedad": "El sérum antiedad para piel seca o muy seca: repara y nutre con ceramidas.",
"gh-10-aza-gz-crema-polvo-imperfecciones": "Ácido azelaico al 10 % de noche para piel grasa con imperfecciones y marcas.",
/* Hidratantes Función Barrera */
"gh-funcion-barrera-crema-piel-seca": "La hidratante antiedad para piel seca.",
"gh-funcion-barrera-cremagel-piel-grasa": "La misma hidratante en cremagel no comedogénico, para piel grasa.",
"gh-funcion-barrera-formula-plus-antiedad-intensiva": "La versión antiedad intensiva: efecto tensor en 30 minutos.",
"gh-calmante-y-reparadora-x-boticaria-garcia-mano-de-santo": "Crema calmante para piel sensible, agredida o con picor; se puede reaplicar durante el día.",
"gh-funcion-barrera-mascarilla-ultrahidratante": "Mascarilla para dejar toda la noche, 2 veces por semana.",
"gh-funcion-barrera-cremagel-corporal": "La versión para el cuerpo: repara la barrera e hidrata.",
"gh-funcion-barrera-balsamo-multifuncion": "Bálsamo multiusos para labios, cejas, cutículas y zonas secas.",
"gh-funcion-barrera-balsamo-labial-copia": "Bálsamo solo para labios, no pegajoso.",
/* Contorno de ojos */
"gh-funcion-global-contorno-de-ojos": "Contorno antiedad para cualquier piel: arrugas, firmeza, ojeras y bolsas, también en labios.",
"gh-k-at-serum-contorno-de-ojos": "Específico para ojeras y bolsas persistentes, con vitamina K y tri roll-on. No apto en piel sensible.",
/* Protección solar */
"gh-factor-invisible-spf50-amplio-espectro": "Solar SPF 50 en gel invisible, incluida la piel grasa con imperfecciones.",
"gh-factor-fotobioma-spf50-amplio-espectro": "Solar SPF 50+ ligero con niacinamida, también para piel sensible.",
/* Complementos alimenticios */
"gh-agederm-ceramide-complemento-alimenticio": "Complemento para arrugas, flacidez o piel muy seca: fitoceramidas y ácido hialurónico.",
"gh-aoxderm-pigment-complemento-alimenticio": "Complemento para las manchas, con nicotinamida y luteína. No en embarazo ni lactancia.",
"gh-probioderm-balance-complemento-alimenticio": "Complemento con probióticos para imperfecciones, desde los 12 años; se toma en ayunas.",
"gh-magnesio-global-complemento-alimenticio": "No es para la piel: magnesio para el cansancio y la fatiga.",
"gh-omega-1500epa-dha-complemento-alimenticio": "No es para la piel: aporte de omega-3 (EPA y DHA)."
};
D.prods.forEach(p => { if (F[p.id] && p.d) p.d.dif = F[p.id]; });
})();
