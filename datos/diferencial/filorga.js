/* «En qué se diferencia» de los productos de Filorga (formato y criterio: ver datos/diferencial/caudalie.js) */
(function(){
const F = {
/* NCEF: antiedad global y revitalizante */
"fil-ncef-revitalize-serum": "El sérum de NCEF: piel más lisa, uniforme y luminosa, también en piel sensible.",
"fil-ncef-revitalize-creme": "La crema de NCEF para día y noche: además de revitalizar, reafirma (5 tripéptidos).",
"fil-ncef-revitalize-night": "La crema de noche de NCEF, con niacinamida: para la piel cansada o estresada.",
"fil-ncef-revitalize-eyes": "Contorno de ojos de NCEF sin perfume ni colorantes: signos de la edad, bolsas y ojeras; apto para contorno sensible.",
"fil-ncef-shot": "No es de uso continuo: cura intensiva de 10 días para cambios de estación o épocas de cansancio.",
"fil-ncef-essence": "Loción que se aplica antes del sérum: hidrata, da luz y prepara la piel.",
"fil-ncef-revitalize-mask": "Mascarilla de tela de un solo uso: efecto buena cara en 15 minutos, 1 o 2 veces por semana.",
"fil-meso-mask-ncef": "Mascarilla en crema 2 veces por semana con PHA y niacinamida: además de revitalizar, repara la barrera; apta para piel sensible.",
/* TIME-FILLER: arrugas */
"fil-time-filler-5xp-creme": "La crema antiarrugas de Time-Filler para piel normal a seca.",
"fil-time-filler-5xp-gel-creme": "La versión para piel mixta a grasa: gel-crema antiarrugas que además matifica.",
"fil-time-filler-night-5xp": "La crema de noche antiarrugas de Time-Filler, para todo tipo de piel.",
"fil-time-filler-intensive-5xp": "El sérum antiarrugas intensivo de la línea, con neuropéptido al 4 %, para todo el rostro.",
"fil-time-filler-shot-5xp": "Sérum de aplicación localizada para las primeras líneas de expresión; no es para todo el rostro.",
"fil-time-filler-eyes-5xp": "Contorno antiarrugas que además trata ojeras y párpados caídos.",
"fil-time-filler-essence": "Primer paso de la rutina antiarrugas: loción con un extracto vegetal similar al retinol.",
"fil-time-filler-mask": "Mascarilla de tela con colágeno de un solo uso: piel más lisa en 15 minutos.",
/* LIFT-STRUCTURE: firmeza y efecto lifting */
"fil-lift-structure": "La crema de día ultralifting: redefine volúmenes y reafirma.",
"fil-lift-structure-radiance": "La versión de día que además da luz: fluido ultralifting con efecto iluminador.",
"fil-sleep-and-lift": "La crema de noche de la línea lifting: redensifica y devuelve elasticidad mientras se duerme.",
"fil-lift-mask": "Mascarilla de biocelulosa de un solo uso: efecto lifting visible en 15 minutos.",
/* GLOBAL-REPAIR: piel madura */
"fil-global-repair-advanced-cream": "La crema para piel madura que pierde densidad y nutrición.",
"fil-global-repair-advanced-elixir": "Sérum-aceite para piel madura: corrige los signos de la edad y además nutre.",
"fil-global-repair-intensive": "El sérum de la línea, para piel desvitalizada de cualquier edad: deshidratación, arrugas, firmeza y luminosidad a la vez.",
"fil-global-repair-essence": "Loción nutritiva para piel madura que se aplica antes del sérum o la crema.",
"fil-global-repair-baume": "La textura más rica de la línea: bálsamo muy nutritivo para piel madura y desvitalizada que pide confort.",
"fil-global-repair-advanced-eyes-lips": "Contorno de ojos y labios para piel desvitalizada: firmeza, arrugas, ojeras y bolsas.",
/* HYALU-FILLER: volumen e hidratación */
"fil-hyalu-filler-serum": "Sérum con 5 tipos de ácido hialurónico que rellena arrugas e hidrata; para cualquier edad. Contiene vitamina A.",
"fil-hyalu-filler-creme": "La crema rellenadora de la línea, adecuada para piel sensible. Contiene vitamina A.",
"fil-hydra-hyal-cream-gel": "La versión para piel mixta a grasa: gel-crema con dos ácidos hialurónicos que hidrata y matifica.",
"fil-hydra-aox": "Sérum antioxidante con vitaminas C, E y B3 para los primeros signos de la edad; protege de la contaminación.",
"fil-hyalu-filler-mask": "Mascarilla en crema para piel normal a seca: hidrata y calma, 2 veces por semana.",
"fil-hyalu-filler-flash-mask": "Mascarilla de tela SOS de un solo uso para piel deshidratada: resultado en 15 minutos.",
"fil-hyalu-filler-lips": "Para los labios: bálsamo que da volumen inmediato e hidrata.",
/* OXYGEN-GLOW: luminosidad */
"fil-oxygen-glow": "Crema iluminadora y alisante para la piel apagada.",
"fil-oxygen-glow-cc-creme": "Con color y SPF 30: perfecciona y protege; sustituye a la crema hidratante por la mañana.",
"fil-oxygen-glow-eyes": "Contorno iluminador: alisa y actúa sobre las ojeras.",
"fil-oxygen-peel": "Loción micropeeling de noche con 6 ácidos al 6 %: arrugas, poros y luminosidad.",
/* OPTIM-EYES: contorno de ojos */
"fil-optim-eyes": "Contorno 3 en 1 de mañana y noche para ojeras, bolsas y líneas finas.",
"fil-optim-eyes-cryo": "Efecto frío descongestionante en 60 segundos; sin perfume, apto para lentillas y como retoque durante el día.",
"fil-optim-eyes-mask": "Parches de tela de un solo uso para ojos cansados.",
/* AGE-PURIFY: arrugas + imperfecciones */
"fil-age-purify": "Para el adulto que tiene a la vez arrugas e imperfecciones: fluido no comedogénico para piel mixta a grasa.",
"fil-age-purify-intensive": "La versión sérum de Age-Purify: doble corrección de arrugas e imperfecciones, antes de la crema.",
"fil-age-purify-clean": "El limpiador de Age-Purify: gel que se vuelve espuma, para piel mixta a grasa con imperfecciones.",
/* SKIN-PREP: limpieza */
"fil-perfecting-cleansing-oil": "Aceite desmaquillante, incluso para maquillaje waterproof; también para piel y ojos sensibles.",
"fil-micellar-solution": "Agua micelar 3 en 1: limpia, desmaquilla e hidrata rostro y ojos en un solo gesto.",
"fil-enzymatic-cleansing-foam": "Espuma limpiadora con papaína (2.º paso): unifica la textura sin ácidos; apta para piel sensible.",
"fil-aha-cleansing-gel": "El limpiador con AHA para piel mixta a grasa: reduce brillos y alisa.",
"fil-enzymatic-exfoliating-cream": "Exfoliante doble, enzimático y con arena volcánica, 2 veces por semana para puntos negros y poros.",
/* SKIN-UNIFY */
"fil-skin-unify": "La crema antimanchas de Filorga, con vitamina C: manchas, tono irregular y luminosidad.",
/* PRO-COLLAGEN MICRO-GROWTH FACTOR: firmeza */
"fil-pro-collagen-micro-growth-factor-serum": "Sérum con efecto tensor inmediato (7 % de péptidos) para la falta de firmeza.",
"fil-pro-collagen-micro-growth-factor-cream": "La crema de la línea: reafirma y define el contorno facial.",
"fil-pro-collagen-micro-growth-factor-eyes": "Sérum roll-on para la falta de firmeza del contorno de ojos y los párpados.",
/* UV CELLULAR-PROTECT: solar */
"fil-uv-cellular-protect-face": "Solar facial SPF 50+ con acción antiedad; también para piel sensible.",
"fil-uv-cellular-protect-body": "La versión para rostro y cuerpo, resistente al agua, del solar antiedad SPF 50+.",
"fil-uv-cellular-protect-after-sun": "No protege: gel para después del sol que calma, hidrata y potencia el bronceado.",
/* DAILY */
"fil-daily-peel-wrinkles": "Peeling de noche con 10 % de AHA enfocado a arrugas y textura; para todos los fototipos.",
"fil-daily-peel-dark-spots": "El mismo peeling de noche al 10 % de AHA, enfocado a manchas solares, hormonales y postacné.",
"fil-daily-repair-mineral-uv-50": "Solar diario SPF 50 con filtro 100 % mineral: para piel sensible o con rojeces, refuerza la barrera.",
/* Piel debilitada */
"fil-neocica": "Para piel frágil o dañada, por ejemplo tras un tratamiento estético: repara y calma, de 3 a 6 veces al día.",
"fil-universal-cream": "Crema multiusos para rostro y cuerpo de toda la familia: sequedad e irritación por sol, frío, afeitado o jabones.",
/* Otros tratamientos */
"fil-sleep-and-peel-4-5": "Micropeeling de noche suave (4,5 % de AHA y BHA), en cura de un mes: para quien no está acostumbrado a los ácidos.",
"fil-hand-pigment-protocol": "Antimanchas para las manos con vitamina C. Contiene vitamina A."
};
D.prods.forEach(p => { if (F[p.id] && p.d) p.d.dif = F[p.id]; });
})();
