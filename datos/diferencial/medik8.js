/* «En qué se diferencia» de los productos de Medik8 (formato y criterio: ver datos/diferencial/caudalie.js) */
(function(){
const F = {
/* Limpiadores */
"m8-lipid-balance-cleansing-oil": "Aceite desmaquillante (1.er paso) para maquillaje resistente, incluso de ojos, y protector solar.",
"m8-total-moisture-daily-cleansing-gel": "El limpiador que prioriza la hidratación: no altera la barrera.",
"m8-micellar-mousse": "Mousse micelar, alternativa al agua micelar; nutre mientras limpia.",
"m8-calmwise-soothing-cleanser": "El limpiador para piel enrojecida, sensible o recién tratada.",
"m8-surface-radiance-cleanse": "Limpiador con AHA y BHA para piel apagada; en piel sensible o seca, como máximo una vez al día.",
"m8-clarifying-foam": "El limpiador para imperfecciones, con salicílico y niacinamida.",
/* Ácidos directos */
"m8-press-glow": "Tónico exfoliante con PHA, alternativa a los tónicos ácidos que escuecen o resecan.",
"m8-press-clear": "Tónico para imperfecciones con salicílico y tranexámico: poros y manchas postacné.",
"m8-sleep-glycolic": "Exfoliante de noche con glicólico al 10 % encapsulado, 2 o 3 noches por semana, sin irritación.",
"m8-blemish-sos": "Gel localizado para granos puntuales; no es para toda la cara.",
/* Sérums de vitamina C */
"m8-c-tetra": "La vitamina C de iniciación (7 %): ligera y apta para piel sensible.",
"m8-c-tetra-advanced": "La vitamina C más concentrada de la gama C-Tetra (20 %), con exosomas; sobre todo para piel grasa y mixta.",
"m8-c-tetra-luxe": "Vitamina C al 14 % enfocada a arrugas y manchas, sobre todo para piel grasa y mixta.",
"m8-super-c-ferulic": "La de mayor concentración: ácido ascórbico etilado al 30 % con ferúlico, para el fotoenvejecimiento. No en piel sensible.",
"m8-c-tetra-cream": "La vitamina C en crema (3 %) para quien quiere luz e hidratación en un solo paso.",
/* Vitamina A */
"m8-crystal-retinal": "El retinal en 6 concentraciones: desde piel sensible hasta expertos en vitamina A; de noche.",
"m8-r-retinoate": "La vitamina A que se puede usar de día y de noche, con vitamina C.",
"m8-r-retinoate-intense": "La vitamina A más intensa (retinil retinoato + retinal) para signos avanzados; de noche.",
"m8-bakuchiol-peptides": "La alternativa vegetal al retinol, con bakuchiol: apta en embarazo, según Medik8.",
/* Sérums de péptidos e hidratación */
"m8-liquid-peptides-advanced-mp": "Péptidos avanzados para arrugas profundas; complementa los tratamientos inyectables.",
"m8-liquid-peptides": "Péptidos para los primeros signos de la edad y la hidratación.",
"m8-exo-pdrn-prismatic": "Sérum con PDRN, inspirado en los polinucleótidos: rejuvenece y complementa tratamientos profesionales.",
"m8-oxy-r-peptides": "Sérum antimanchas con oxi-resveratrol, para todos los tonos de piel.",
"m8-niacinamide-peptides": "Niacinamida al 10 % para imperfecciones, poros, rojez y barrera.",
"m8-clarity-peptides": "Niacinamida al 10 % en textura ligera, más enfocada a la luminosidad de la piel apagada con imperfecciones.",
"m8-hydr8-b5": "El sérum de ácido hialurónico sin aceites para hidratación diaria.",
"m8-hydr8-b5-intense": "La versión intensa de Hydr8 B5: hidratación en 24 horas que además reafirma.",
/* Hidratantes */
"m8-total-moisture-daily-facial-cream": "La hidratante diaria que refuerza la barrera y sirve de base de maquillaje.",
"m8-advanced-pro-collagen-peptide-cream": "La crema antiedad para arrugas profundas, flacidez y contorno; ideal para piel sensible.",
"m8-advanced-night-restore": "Crema de noche rica en ceramidas que potencia la vitamina A.",
"m8-balance-moisturiser-glycolic-acid-activator": "Hidratante ligera con activador de glicólico para una tez más uniforme.",
/* Ojos */
"m8-crystal-retinal-ceramide-eye": "Contorno de noche con retinal (3 concentraciones) para patas de gallo, hinchazón y ojeras.",
"m8-r-retinoate-day-night-eye-serum": "Contorno con vitamina A que se puede usar de día y de noche, para líneas y arrugas.",
"m8-advanced-night-eye": "Contorno de noche sin retinoides para ojos cansados; potencia la vitamina A.",
/* Protección solar */
"m8-advanced-day-ultimate-protect": "Hidratante y SPF 50+ en uno, con acción antiarrugas.",
"m8-advanced-day-total-protect": "Hidratante ligera con SPF 30 que sirve de base de maquillaje.",
"m8-daily-radiance-vitamin-c": "Crema de día con vitamina C al 7 % y SPF 30: antioxidante y protector en uno.",
"m8-advanced-day-eye-protect": "Protector SPF 30 específico para el contorno de ojos; va antes del protector facial.",
/* Mascarillas */
"m8-h-e-o-mask": "Mascarilla de noche en 2 pasos para hidratación intensa."
};
D.prods.forEach(p => { if (F[p.id] && p.d) p.d.dif = F[p.id]; });
})();
