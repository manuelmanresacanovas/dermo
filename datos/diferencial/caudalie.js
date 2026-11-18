/* «En qué se diferencia» de los productos de Caudalie: una frase para distinguir cada producto de los parecidos
   de su línea o de la marca, pensada para el mostrador.
   Fuente: solo los datos de la ficha oficial ya cargados (paciente, tipo, cuándo, fotoprotección, nota y activos).
   Formato: id de producto → frase. Se muestra en la ficha y en el comparador. */
(function(){
const F = {
/* Vinoclean: limpieza y desmaquillado */
"cau-aceite-tratante": "El desmaquillante más potente: retira incluso el maquillaje waterproof. Solo de noche, como 1.er paso de la doble limpieza.",
"cau-agua-uva-micelar": "Limpia y desmaquilla en un solo gesto, sin aclarado: la opción rápida para mañana y noche.",
"cau-agua-uva": "No limpia: es una bruma calmante para rojeces y sensibilidad, para usar en cualquier momento del día.",
"cau-espuma-limpiadora": "Limpiador diario sin jabón (2.º paso). Si hay imperfecciones, mejor la Gelatina Purificante Vinopure.",
"cau-leche-almendras": "El desmaquillante más nutritivo: para la piel que nota tirantez o con ojos sensibles.",
"cau-locion-tonica": "Tónico sin alcohol: último paso de la limpieza, retira restos de maquillaje y tonifica.",
"cau-mascarilla-detox": "Mascarilla de arcilla rosa 2 veces por semana para poros y exceso de sebo, en cualquier tipo de piel.",
"cau-crema-desincrustante": "El exfoliante intenso (arena volcánica): para piel mixta a grasa. Para seca o sensible, la Crema Exfoliante Suave.",
"cau-crema-suave": "El exfoliante suave (microgránulos de jojoba): el indicado para piel seca o sensible.",
/* Vinohydra: deshidratación y sequedad */
"cau-vh-serum": "Sérum hidratante para cualquier piel deshidratada, también mixta o sensible. Sin contraindicación en embarazo, según Caudalie.",
"cau-vh-crema-intensa": "La crema rica de Vinohydra, con karité: para piel seca o muy seca que nota tirantez.",
"cau-vh-gelcream": "La versión ligera de Vinohydra: gel-crema sin siliconas ni acabado graso, para piel mixta a grasa.",
"cau-vh-gelatina": "Limpiador único (no necesita doble limpieza) para piel seca y sensible; también desmaquilla ojos sensibles.",
"cau-vh-mascarilla": "Mascarilla de rescate 2 veces por semana o toda la noche; se puede usar en el contorno de ojos.",
/* Premier Cru: antiedad global */
"cau-pc-serum": "Sérum antiedad global con efecto tensor; se combina con La Crema o La Crema Riche.",
"cau-pc-ojos": "Contorno antiedad global: arrugas, ojeras y bolsas; vale también para el contorno de labios.",
"cau-pc-crema": "Antiedad global (arrugas, manchas y volumen) en cualquier tipo de piel. Si es muy seca o sensible, La Crema Riche.",
"cau-pc-crema-riche": "La Crema de Premier Cru en textura rica con bioceramidas: para piel seca, muy seca o sensible.",
/* Resveratrol-Lift: arrugas y firmeza */
"cau-rl-serum": "Sérum reafirmante, alternativa al retinol: no fotosensibiliza y es adecuado en embarazo y lactancia.",
"cau-rl-crema-cachemir": "La crema de día reafirmante: solo por la mañana. Por la noche, la Crema Tisana.",
"cau-rl-crema-tisana": "La crema de noche de Resveratrol-Lift; también para piel seca y sensible.",
"cau-rl-ojos": "Contorno reafirmante: el indicado si preocupan las bolsas y los párpados caídos.",
"cau-rl-fluido": "La crema de día de Resveratrol-Lift para piel mixta a grasa: fluido de acabado mate.",
"cau-rl-corporal": "Reafirmante para el cuerpo (brazos, busto, vientre, muslos y glúteos); atenúa el aspecto de la celulitis.",
/* Vinoperfect: manchas */
"cau-vp-serum": "Sérum antimanchas para cualquier origen de mancha, alternativa a la vitamina C. No fotosensibiliza y es adecuado en embarazo.",
"cau-vp-crema": "La crema antimanchas de día (solo por la mañana), con niacinamida; acompañar de un SPF50.",
"cau-vp-noche": "La crema antimanchas de noche: con ácido glicólico, actúa como un peeling suave y mejora la textura. No en el contorno de ojos.",
"cau-vp-ojos": "Contorno para ojeras, vasculares y pigmentarias: ilumina y descongestiona. Para arrugas, Premier Cru o Resveratrol-Lift.",
"cau-vp-espuma": "Limpiador exfoliante diario con ácido mandélico para tez apagada; en piel sensible, solo 1 o 2 veces por semana.",
"cau-vp-esencia": "Primer paso del ritual antimanchas, con ácido glicólico: mejor de noche y nunca antes de exponerse al sol.",
"cau-vp-manos": "Antimanchas específico para las manos; además nutre.",
"cau-vp-mascarilla": "Peeling con ácido glicólico 2 veces por semana para luminosidad y textura. No apto para piel sensible.",
/* Vinopure: acné e imperfecciones */
"cau-vpu-serum": "El tratamiento principal anti-imperfecciones (salicílico y niacinamida). No recomendado en embarazo: en ese caso, Sérum Vinoperfect.",
"cau-vpu-tonico": "Tónico con ácido salicílico para poros y brillos; se puede usar también en el cuerpo.",
"cau-vpu-gelatina": "Limpiador purificante diario para piel grasa con granos; compatible con tratamientos que resecan, consultando al dermatólogo.",
"cau-vpu-fluido": "La hidratante de Vinopure: matifica y controla los brillos sin dejar de hidratar.",
"cau-vpu-stop": "Tratamiento puntual para un grano concreto, no para toda la cara.",
/* Cuidados corporales */
"cau-co-manos": "Crema reparadora para manos secas a muy secas; fortalece también uñas y cutículas.",
"cau-co-manos-the": "La misma Crema Reparadora de Manos y Uñas, con fragancia Thé des Vignes.",
"cau-co-gommage": "Exfoliante corporal 2 veces por semana. Evitar en embarazo: contiene aceites esenciales.",
"cau-co-leche": "Hidratante corporal ligera para toda la familia desde los 3 años, incluso con tendencia atópica; adecuada en embarazo.",
"cau-co-balsamo": "La versión rica: bálsamo con ceramidas para piel muy seca o atópica con picor. Sin alérgenos y adecuado en embarazo.",
"cau-co-labios-color": "Bálsamo labial con color frambuesa: trata y maquilla a la vez.",
"cau-co-labios-karite": "Stick labial con manteca de karité, sin color, para labios secos.",
/* Cuidados capilares */
"cau-ca-champu": "Champú sin sulfatos ni siliconas para falta de volumen y densidad; apto para cabello teñido.",
"cau-ca-serum": "Tratamiento anticaída sin aclarado durante 3 o 4 meses; apto en posparto.",
/* Vinosun: protección solar */
"cau-vs-crema": "Solar facial SPF50+ en crema, con acción antiarrugas, para rostro y escote.",
"cau-vs-fluido": "Solar facial de uso diario, sin perfume, que sirve de base de maquillaje: el indicado para piel sensible.",
"cau-vs-stick": "Para zonas concretas: labios, lunares, cicatrices y tatuajes. Resistente al agua.",
"cau-vs-spray50": "Spray SPF50 para rostro y cuerpo, para toda la familia.",
"cau-vs-aceite": "Aceite SPF50 para rostro, cuerpo y cabello que realza el bronceado; desde los 3 años.",
"cau-vs-agua": "Agua solar SPF50+ de acabado seco, sin efecto graso; también para el cabello.",
"cau-vs-spray30": "La protección media (SPF30) en spray, para rostro y cuerpo; desde los 3 años.",
"cau-vs-aftersun": "No protege: se usa después del sol para calmar y reparar; prolonga el bronceado."
};
D.prods.forEach(p => { if (F[p.id] && p.d) p.d.dif = F[p.id]; });
})();
