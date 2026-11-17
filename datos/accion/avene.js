/* «Cómo actúa» de los productos de Avène.
   Fuente: activos clave (hasIngredient) y su explicación en la ficha oficial de cada producto (eau-thermale-avene.es),
   completado con los mecanismos de las páginas de teoría (Cosméticos, Patologías, La piel).
   Formato: id de producto → { i: resumen de cómo actúa, a: [[activo, qué hace], …] } */
(function(){
const AT = (t) => ["Agua termal de Avène", t || "Por sus características minerales y biológicas, es calmante, reparadora y reequilibrante."];
const GLI = ["Glicerina de origen vegetal", "Humectante: hidrata."];
const DSENS = ["D-Sensinose™", "Activo posbiótico patentado ultracalmante: alivia sofocos, tirantez y hormigueo."];
const ANGIO = ["Angiopausine™ 6 %", "Activo antienrojecimiento patentado: reduce la hipervascularización, la raíz de las rojeces instaladas."];
const TRIA = ["TriAsorB™", "Filtro patentado por Pierre Fabre: protección de ultraamplio espectro frente a UVB, UVA y luz azul de alta energía."];
const COHE = ["Cohederm", "Complejo hidratante patentado con microrreservas de agua de las que la piel se abastece a demanda: hidratación duradera."];
const SUNS = ["Complejo Sunsitive® Protection", "Sistema patentado con solo 4 filtros para una protección UVB-UVA muy amplia, provitamina E antioxidante y agua termal."];
const ALOE = ["Polisacáridos de aloe", "Derivados del gel de aloe vera: hidratan y mantienen la hidratación de las capas superiores."];
const HAREACT = ["Ácido hialurónico", "Penetra en las capas superiores de la piel y reactiva la síntesis natural de ácido hialurónico."];
const HAALTO = ["Ácido hialurónico de alto peso molecular", "Retiene hasta 1.000 veces su peso en agua; en superficie forma una película que reduce la pérdida de agua."];
const COMEDO = ["Comedoclastin™", "Activo vegetal patentado de cardo mariano: actúa sobre el microcomedón, origen de las imperfecciones, reduce el sebo y limita los nuevos granos."];
const BAYAS = ["Extracto de bayas rojas", "Potenciador de las células de la piel: restaura y refuerza la barrera de forma duradera."];
const DEXTR = ["Sulfato de dextrano", "Descongestionante y vasoconstrictor: calma la irritación y reduce el enrojecimiento."];
const A = {
"av-agua-termal-de-avene-spray": {i: "Spray de agua termal: calma al instante, reequilibra la piel sensible y restaura la barrera.", a: [AT()]},
"av-agua-micelar-desmaquillante": {i: "Agua micelar: desmaquilla y limpia rostro y ojos (incluso partículas de contaminación), hidrata y calma en un solo paso.", a: [
  ["Trehalosa", "De origen vegetal (almidón de yuca); detoxificante."], GLI]},
"av-espuma-limpiadora": {i: "Espuma limpiadora sin jabón: desmaquilla, purifica y elimina el exceso de sebo manteniendo el equilibrio de la piel.", a: [
  AT("Al 72,5 %: calma, fortalece y reequilibra la piel."), GLI]},
"av-leche-limpiadora": {i: "Leche limpiadora para piel seca: desmaquilla, reduce la tirantez, hidrata y calma.", a: [
  AT("Al 59 %: calma, fortalece y reequilibra la piel."), GLI]},
"av-locion-tonica-calmante": {i: "Loción tónica sin alcohol: completa el desmaquillado, calma, hidrata y refresca.", a: [
  AT("Al 98 %: calma, fortalece y reequilibra la piel."), ["Glicerina", "Hidrata y suaviza."]]},
"av-desmaquillante-suave-de-ojos": {i: "Desmaquillante de ojos en aqua-gel: limpiadores suaves e isotónicos retiran el maquillaje sin irritar, y el agua termal calma.", a: [AT()]},
"av-desmaquillante-de-ojos-intenso": {i: "Desmaquillante bifásico: la fase oleosa retira el maquillaje permanente y waterproof, y el agua termal calma los ojos sensibles.", a: [
  ["Fase oleosa", "Elimina suavemente el maquillaje resistente al agua."], AT()]},
"av-gel-exfoliante-suave": {i: "Gel exfoliante de doble acción: microperlas para la exfoliación física y activos que purifican con efecto peeling; alisa y da luminosidad.", a: [
  ["Niacinamida 3 % + ácido salicílico 0,5 %", "Acción exfoliante y purificante (efecto peeling): el salicílico penetra en el poro y la niacinamida calma."],
  ["Microperlas de celulosa y cera de jojoba", "Exfoliación física suave."], AT()]},
"av-mascarilla-calmante-hidratante": {i: "Mascarilla calmante e hidratante: restaura y refuerza la barrera y nutre en profundidad.", a: [
  BAYAS, ["Complejo hidronutritivo", "Activos nutritivos y reparadores."]]},
"av-crema-nutritiva-revitalizante": {i: "Crema nutritiva para piel seca: refuerza la barrera de forma duradera y nutre.", a: [
  BAYAS, ["Complejo nutritivo", "Aceites emolientes nutritivos de rápida absorción."]]},
"av-tratamiento-calmante-para-el-contorno-de-los-ojos": {i: "Contorno calmante: calma la irritación, descongestiona y reduce las rojeces; nutre e hidrata.", a: [DEXTR]},
"av-balsamo-hidratacion-intensa-24h": {i: "Bálsamo labial: hidrata intensamente durante 24 horas y protege de la oxidación.", a: [
  ["Extracto de edelweiss", "Protección antioxidante."], ["Manteca de karité", "Confort intenso y duradero."]]},
"av-tolerance-control-crema-calmante-reparadora-de-cosmetica-esteril-r": {i: "Crema calmante de alta tolerancia (sin perfume ni conservantes, envase estéril) para piel hipersensible o alérgica: calma en 30 segundos, hidrata y restaura la barrera en 48 horas.", a: [
  AT("Calmante y suavizante."), DSENS]},
"av-tolerance-control-balsamo-calmante-reparador-de-cosmetica-esteril-r": {i: "Bálsamo calmante de alta tolerancia para piel hipersensible y seca: calma en 30 segundos, nutre y restaura la barrera.", a: [
  AT("Calmante y suavizante."), DSENS]},
"av-crema-hidratante-tolerance-hydra-10": {i: "Crema hidratante de 10 ingredientes (100 % natural, sin conservantes) para piel seca sensible: hidrata 48 horas y preserva el microbioma.", a: [
  HAALTO, AT("Muy concentrada: frescor y alivio.")]},
"av-tolerance-hydra-10-fluido-hidratante": {i: "Fluido hidratante de 9 ingredientes para piel normal o mixta sensible: hidrata 48 horas y preserva el microbioma.", a: [
  HAALTO, AT("Muy concentrada: frescor y alivio.")]},
"av-tolerance-locion-limpiadora-gelificada": {i: "Loción limpiadora gelificada de alta tolerancia: limpia y desmaquilla rostro, ojos y labios sin irritar.", a: [
  AT("Calmante y suavizante."), DSENS]},
"av-antirougeurs-rosamed-concentrado-para-rojeces-instaladas": {i: "Concentrado para rojeces instaladas: actúa en la raíz de las rojeces (la hipervascularización), reduce su apariencia y su reaparición, calma el ardor e hidrata 24 horas.", a: [ANGIO]},
"av-antirrojeces-rosamed-spf-50-concentrado-hidratante-protector": {i: "Concentrado antirrojeces con SPF 50+: actúa en la raíz de las rojeces y protege de los UV y la luz azul, principales enemigos de la piel con rojeces.", a: [ANGIO, TRIA]},
"av-hydrance-light-crema-hidratante": {i: "Crema hidratante ligera para piel sensible deshidratada normal o mixta: hidratación duradera a demanda.", a: [COHE, AT("Calmante y suavizante.")]},
"av-hydrance-crema-hidratante-rica": {i: "Crema hidratante rica para piel sensible seca o muy seca: hidrata 24 horas y calma.", a: [COHE, AT()]},
"av-hydrance-aqua-gel-crema-hidratante": {i: "Aqua-gel hidratante: hidrata 72 horas, refresca y reactiva la síntesis de ácido hialurónico de la piel.", a: [ALOE, HAREACT]},
"av-hydrance-spf-30-crema-hidratante": {i: "Crema hidratante con SPF 30: hidrata 48 horas, rellena y protege de la radiación y las agresiones externas.", a: [ALOE, HAREACT]},
"av-serum-hidratante-concentrado": {i: "Sérum hidratante concentrado: hidrata intensamente y refuerza la barrera.", a: [
  HAALTO, ["Vitamina B3 (niacinamida)", "Refuerza la barrera cutánea."]]},
"av-hydrance-bb-ligera-emulsion-hidratante-con-color": {i: "Emulsión hidratante con color y SPF 30: unifica la tez, hidrata 24 horas y protege de UV, radicales libres y contaminación.", a: [
  COHE, SUNS, ["Nácares y pigmentos minerales", "Difuminan imperfecciones e iluminan."]]},
"av-hydrance-bb-rica-crema-hidratante-con-color": {i: "Crema hidratante rica con color y SPF 30: unifica la tez, hidrata 24 horas y protege.", a: [
  COHE, SUNS, ["Nácares y pigmentos minerales", "Difuminan imperfecciones e iluminan."]]},
"av-cleanance-agua-micelar": {i: "Agua micelar para piel grasa: desmaquilla, elimina impurezas y contaminación, y matifica.", a: [
  ["Ácido glutámico", "Reequilibra la producción de sebo."], AT()]},
"av-cleanance-gel-limpiador": {i: "Gel limpiador sin jabón para piel grasa: limpia con suavidad, reduce el sebo y calma.", a: [
  ["Agentes limpiadores suaves", "Respetan el pH fisiológico."], COMEDO, AT("Calmante y antiirritante.")]},
"av-cleanance-comedomed-gel-exfoliante": {i: "Gel limpiador exfoliante para imperfecciones persistentes: desobstruye los poros, reduce el sebo y los puntos negros y alisa.", a: [
  ["Ácido láctico 2 % + ácido succínico 3 %", "Dúo de ácidos queratolíticos: exfolian y desobstruyen."],
  ["Comedoclastin™ 0,7 %", "Reduce el sebo y limita los puntos negros."], ["Zinc 0,1 %", "Calmante."], AT("Calmante y antiirritante.")]},
"av-cleanance-hydra-crema-limpiadora-calmante": {i: "Crema limpiadora para piel con acné resecada por tratamientos: limpia, repara la barrera y calma.", a: [
  ["Aceite de cardo mariano", "Activo patentado antisequedad: potencia la síntesis de ceramidas y refuerza la barrera."], DEXTR]},
"av-cleanance-mascarilla-detox": {i: "Mascarilla de arcillas para piel mixta o grasa: absorbe el sebo y las impurezas, purifica y matifica sin resecar.", a: [
  ["Arcilla blanca (caolinita)", "Rica en sílice: absorbe el exceso de grasa sin resecar."],
  ["Arcilla verde", "Purificante y absorbente: retira sebo e impurezas."]]},
"av-cleanance-serum-exfoliante-aha": {i: "Sérum exfoliante: limpia en profundidad renovando la superficie, con efecto piel nueva en 10 días.", a: [
  ["Ácido láctico", "AHA derivado de frutas: exfolia e hidrata sin resecar."], ["Ácido succínico", "Alternativa suave al salicílico."]]},
"av-cleanance-aqua-gel-matificante": {i: "Aqua-gel matificante para piel grasa: reduce el exceso de sebo para una piel mate y con menos brillos.", a: [
  ["Monolaurina", "Seborregulador: reduce el exceso de producción de sebo."]]},
"av-cleanance-comedomed-cuidado-intensivo-anti-imperfecciones": {i: "Cuidado intensivo anti-imperfecciones: actúa sobre el microcomedón, origen del grano, mejora los poros y reduce las marcas postacné.", a: [
  ["Niacinamida", "Mejora la apariencia de los poros y reduce las marcas postacné."], COMEDO]},
"av-comedomed-fluido-intensivo-antiimperfecciones-spf30": {i: "Fluido anti-imperfecciones con SPF 30: actúa sobre el microcomedón, reduce marcas y poros y protege del sol, que oscurece las marcas.", a: [
  ["Niacinamida", "Mejora la apariencia de los poros y reduce las marcas postacné."], COMEDO]},
"av-comedomed-serum-intensivo": {i: "Sérum intensivo anti-imperfecciones: actúa sobre el microcomedón en el origen de las imperfecciones y limita la aparición de nuevos granos.", a: [COMEDO]},
"av-cleanance-comedomed-peeling-crema-intensiva-para-brotes-de-granos": {i: "Crema peeling para brotes de granos: actúa sobre el microcomedón y limita la reaparición de granos.", a: [COMEDO]},
"av-cleanance-hydra-crema-calmante": {i: "Crema calmante para piel con acné resecada por tratamientos: reactiva la síntesis de lípidos contra la sequedad y calma las rojeces.", a: [
  ["Glicol", "Precursor de los lípidos de la piel (ácidos grasos, colesterol, ceramidas): reactiva su síntesis natural."], DEXTR]},
"av-cicalfate-crema-protectora-reparadora": {i: "Crema reparadora con efecto apósito para piel irritada o dañada: acelera la reparación, protege de las bacterias y calma al instante.", a: [
  ["[C+-Restore]™", "Postbiótico patentado del agua termal, rico en flagelinas: acelera 2,5 veces la migración de los queratinocitos, paso clave de la reparación."],
  ["Complejo de cobre/zinc", "Reduce el riesgo de proliferación bacteriana sin alterar el microbioma."], AT("Calma de inmediato.")]},
"av-cicalfate-crema-reparadora-protectora-spf-50": {i: "Crema reparadora con SPF 50+: repara la piel frágil y la protege del sol para limitar hiperpigmentación y cicatrices.", a: [
  ["[C+-Restore]™", "Postbiótico patentado del agua termal: favorece la reparación de la piel."], TRIA]},
"av-cicalfate-gel-limpiador-purificante": {i: "Gel limpiador purificante para piel irritada o dañada: limpia, favorece la reparación y limita las bacterias.", a: [
  ["[C+-Restore]™", "Favorece la reparación de la piel."], ["Complejo de cobre/zinc", "Reduce el riesgo de proliferación bacteriana."]]},
"av-cicalfate-crema-hidratante-reparadora-post-acto-y-post-tattoo": {i: "Crema reparadora posprocedimiento y postatuaje: hidrata, calma y repara la piel sensibilizada, limitando las bacterias.", a: [
  ["[C+-Restore]™", "Favorece la reparación de la piel."], ["Complejo de cobre/zinc", "Reduce el riesgo de proliferación bacteriana."]]},
"av-cicalfate-serum-reparador-intenso": {i: "Sérum reparador intenso para piel sensible o irritada: refuerza la barrera, reduce la reactividad y mejora el umbral de tolerancia.", a: [
  ["Provitamina B5 (pantenol)", "Hidrata, refuerza la película hidrolipídica y repara la barrera."],
  ["TRP-Regulin™", "Activo patentado que actúa sobre la inflamación celular: reduce la reactividad y la incomodidad y ayuda al equilibrio del microbioma."]]},
"av-cicalfate-gel-remodelante-de-cicatrices": {i: "Gel de silicona para cicatrices: protege y mantiene hidratada la cicatriz y favorece la reparación.", a: [
  ["Dimeticona + ácido hialurónico", "Protegen y mantienen la hidratación en la cicatriz."], ["[C+-Restore]™", "Favorece la reparación."]]},
"av-cicalfate-spray-secante-reparador": {i: "Spray secante reparador para lesiones que supuran: seca, favorece la reparación y limita las bacterias.", a: [
  ["[C+-Restore]™", "Favorece la reparación de la piel."], ["Complejo de cobre/zinc", "Reduce el riesgo de proliferación bacteriana."]]},
"av-cicalfate-manos-crema-reparadora-efecto-barrera": {i: "Crema de manos reparadora con efecto barrera: repara las manos dañadas y limita las bacterias.", a: [
  ["Sucralfato", "Favorece la reparación de la piel."], ["Complejo de cobre/zinc", "Reduce el riesgo de proliferación bacteriana."]]},
"av-cicalfate-balsamo-labial-reparador": {i: "Bálsamo labial reparador: repara los labios agrietados y limita las bacterias.", a: [
  ["[C+-Restore]™", "Favorece la reparación."], ["Zinc", "Limita el riesgo de proliferación bacteriana."]]},
"av-xeracalm-ad-aceite-limpiador-relipidizante": {i: "Aceite limpiador relipidizante para piel atópica: limpia sin resecar, reduce el picor y refuerza las defensas de la piel.", a: [
  ["I-modulia®", "Postbiótico patentado del agua termal: reduce el picor, estimula las defensas de la piel y combate las irritaciones."]]},
"av-xeracalm-ad-crema-relipidizante": {i: "Crema relipidizante para piel atópica: repone y estimula las ceramidas de la barrera y actúa en el microbioma para reducir los brotes de sequedad y rascado.", a: [
  ["LIPID:B3", "Complejo patentado rico en ácidos grasos: cubre la necesidad de ceramidas y estimula su síntesis."],
  ["I-MODULIA+", "Actúa en el microbioma para neutralizar el origen de la sequedad y el rascado intenso."]]},
"av-xeracalm-ad-balsamo-relipidizante": {i: "Bálsamo relipidizante para piel atópica muy seca: repone y estimula las ceramidas y actúa en el microbioma para reducir los brotes.", a: [
  ["LIPID:B3", "Complejo patentado rico en ácidos grasos: cubre la necesidad de ceramidas y estimula su síntesis."],
  ["I-MODULIA+", "Actúa en el microbioma para neutralizar el origen de la sequedad y el rascado intenso."]]},
"av-cold-cream-crema": {i: "Crema Cold Cream para piel seca: compensa la falta de lípidos de la película hidrolipídica y protege de la sequedad.", a: [
  ["Cold cream", "Mezcla tradicional de cera, grasas y agua termal que actúa como cemento: compensa el déficit de sebo y protege de la sequedad."], AT()]},
"av-cold-cream-pan-limpiador-ultranutritivo": {i: "Pan limpiador sin jabón para piel seca y sensible: limpia respetando el pH y protege de la sequedad.", a: [
  ["Agentes limpiadores suaves", "Respetan el pH de la piel seca y sensible."],
  ["Cold cream", "Compensa el déficit de sebo de la película hidrolipídica."]]},
"av-cold-cream-crema-de-manos-concentrada": {i: "Crema de manos concentrada: protege de la sequedad, calma y repara.", a: [
  ["Bisabolol", "Calmante y reparador."], ["Cold cream", "Compensa el déficit de sebo y protege de la sequedad."], AT()]},
"av-cold-cream-balsamo-labial-nutricion-intensa": {i: "Bálsamo labial de nutrición intensa: nutre, protege y suaviza los labios secos.", a: [
  ["Manteca de karité", "Rica y nutritiva: protege, suaviza y da flexibilidad."], ["Cold cream", "Compensa el déficit de lípidos."]]},
"av-stick-labial-nutritivo-al-cold-cream": {i: "Stick labial nutritivo: protege los labios de la sequedad y los calma.", a: [
  ["Cold cream", "Compensa el déficit de lípidos y protege de la sequedad."], AT()]},
"av-crema-regeneradora-celular": {i: "Crema antiedad regeneradora: estimula las células y mejora la hidratación y la elasticidad.", a: [
  ["Niacinamida", "Estimula las células y prolonga su vida (in vitro); estimula colágeno y elastina."],
  ["Dúo de ácidos hialurónicos", "Mejoran la hidratación y la elasticidad."]]},
"av-aqua-gel-crema-regeneradora-celular": {i: "Aqua gel-crema antiedad regeneradora: estimula las células y reactiva la síntesis de ácido hialurónico.", a: [
  ["Niacinamida", "Estimula las células y prolonga su vida (in vitro)."], HAREACT]},
"av-crema-de-noche-multi-intensiva": {i: "Crema de noche antiedad: estimula las células y renueva la epidermis con retinal, que induce colágeno, elastina y ácido hialurónico.", a: [
  ["Niacinamida", "Estimula las células y prolonga su vida (in vitro)."],
  ["Retinaldehído", "Precursor directo del ácido retinoico (una sola conversión): favorece la renovación epidérmica e induce colágeno, elastina y ácido hialurónico."]]},
"av-serum-concentrado-voluminizador": {i: "Sérum voluminizador antiedad: estimula las células y reactiva la síntesis de ácido hialurónico para recuperar volumen.", a: [
  ["Niacinamida", "Estimula las células y prolonga su vida (in vitro)."], HAREACT]},
"av-hyaluron-activ-b3-cuidado-de-ojos-triple-correccion": {i: "Contorno de triple corrección: estimula las células y reactiva la síntesis de ácido hialurónico en el contorno.", a: [
  ["Niacinamida", "Estimula las células y prolonga su vida (in vitro)."], HAREACT]},
"av-hyaluron-activ-uv-fluido-triple-eficacia-antiedad-spf50": {i: "Fluido antiedad SPF 50: hidrata y protege de los UVB y UVA, responsables de arrugas y manchas.", a: [
  ["Ácido hialurónico puro", "Penetra en las capas superiores: hidrata y mejora la elasticidad."],
  ["Complejo filtrante con TriAsorB™", "Alta protección frente a UVB y UVA."]]},
"av-serum-lifting-0-1-de-retinal": {i: "Sérum lifting con retinal 0,1 %: aumenta la renovación epidérmica y corrige las arrugas, y repara el daño celular acumulado.", a: [
  ["Retinal", "La forma más eficaz de vitamina A cosmética: según Avène, 3 veces más activo que el retinol y muy bien tolerado. Aumenta la renovación epidérmica."],
  ["Trehalosa", "Ayuda a reparar el daño celular acumulado."]]},
"av-hyaluron-activ-procedure-crema-lifting-0-1-retinal": {i: "Crema lifting con retinal 0,1 %: aumenta la renovación epidérmica, corrige las arrugas e hidrata.", a: [
  ["Retinal", "Según Avène, 3 veces más activo que el retinol y muy bien tolerado: aumenta la renovación epidérmica."],
  ["Ácido hialurónico puro", "Hidrata y mejora la elasticidad."]]},
"av-hyaluron-activ-procedure-crema-micro-lift-ojos-y-labios-0-05-retinal": {i: "Crema micro-lift para ojos y labios con retinal 0,05 %: renueva y corrige las arrugas del contorno.", a: [
  ["Retinal", "Aumenta la renovación epidérmica y corrige las arrugas; muy bien tolerado."], ["Ácido hialurónico puro", "Hidrata y mejora la elasticidad."]]},
"av-hyaluron-activ-procedure-serum-tensor-solucion-de-hexapeptidos-10": {i: "Sérum tensor: reduce las líneas de expresión con un péptido inspirado en las inyecciones de toxina botulínica.", a: [
  ["Niacinamida", "Estimula las células y prolonga su longevidad (in vitro)."],
  ["Solución de hexapéptidos", "Péptido inhibidor inspirado en el mecanismo de la toxina botulínica: reduce las líneas de expresión."]]},
"av-serum-peeling-10-de-acido-glicolico": {i: "Sérum peeling con 10 % de glicólico: exfolia, afina la textura y da luminosidad, y renueva con retinal.", a: [
  ["Ácido glicólico 10 %", "AHA de referencia: estimula la renovación, afina la textura y da luminosidad."],
  ["Retinal", "Aumenta la renovación epidérmica y corrige las arrugas."]]},
"av-crema-de-dia-redensificante": {i: "Crema de día redensificante: estimula colágeno y ácido hialurónico con una alternativa vegetal al retinol bien tolerada.", a: [
  ["Bakuchiol", "Alternativa vegetal al retinol con mejor tolerancia: potencia colágeno y ácido hialurónico y mejora la densidad."]]},
"av-dermabsolu-crema-remodeladora-intensiva-noche": {i: "Crema de noche remodeladora: estimula las células y potencia colágeno y ácido hialurónico para recuperar densidad.", a: [
  ["Niacinamida", "Estimula las células y prolonga su vida (in vitro)."],
  ["Bakuchiol", "Alternativa vegetal al retinol: potencia colágeno y ácido hialurónico."]]},
"av-dermabsolu-serum-concentrado-remodelador": {i: "Sérum remodelador: potencia colágeno y ácido hialurónico para redibujar los volúmenes del rostro.", a: [
  ["Bakuchiol", "Alternativa vegetal al retinol con mejor tolerancia: potencia colágeno y ácido hialurónico."]]},
"av-dermabsolu-contorno-de-ojos-rellenador": {i: "Contorno rellenador: reactiva los lípidos de la piel y potencia colágeno y ácido hialurónico.", a: [
  ["Glicol", "Precursor de los lípidos de la piel: reactiva su síntesis contra la sequedad."],
  ["Bakuchiol", "Alternativa vegetal al retinol: potencia colágeno y ácido hialurónico."]]},
"av-vitamina-activ-cg-serum-luminosidad-corrector": {i: "Sérum de luminosidad: antioxidante, estimula el colágeno y las células, y unifica el tono.", a: [
  ["Provitamina C", "Forma estable de vitamina C: antioxidante y estimula el colágeno."],
  ["Niacinamida", "Estimula las células; unifica el tono."]]},
"av-crema-luminosidad-intensiva": {i: "Crema de luminosidad intensiva: antioxidante, estimula el colágeno y unifica el tono.", a: [
  ["Provitamina C", "Forma estable de vitamina C: antioxidante y estimula el colágeno."],
  ["Niacinamida", "Estimula las células; unifica el tono."]]},
"av-fluido-spf-50": {i: "Fluido solar SPF 50+ para piel sensible: protección de ultraamplio espectro.", a: [TRIA]},
"av-crema-spf-50": {i: "Crema solar SPF 50+ para piel sensible: protección de ultraamplio espectro.", a: [TRIA]},
"av-crema-spf-50-sin-perfume": {i: "Crema solar SPF 50+ sin perfume para piel sensible: protección de ultraamplio espectro.", a: [TRIA]},
"av-crema-con-color-spf-50": {i: "Crema solar con color SPF 50+: protección de ultraamplio espectro y unifica el tono.", a: [TRIA]},
"av-cleanance-solare-spf-50": {i: "Fotoprotector SPF 50+ para piel grasa: protege y reduce el sebo para un acabado mate.", a: [TRIA, ["Monolaurina", "Seborregulador: reduce el exceso de sebo."]]},
"av-ultra-fluido-invisible-spf50": {i: "Ultra fluido invisible SPF 50: protección de ultraamplio espectro con textura ligera.", a: [TRIA]},
"av-ultra-fluido-mat-perfect-spf-50": {i: "Ultra fluido SPF 50+ de acabado mate: protección de ultraamplio espectro, unifica el tono y afina la textura.", a: [TRIA]},
"av-eau-thermale-avene-ultra-fluido-oil-control-spf50": {i: "Ultra fluido SPF 50 para piel grasa: protege y reduce el sebo para un acabado mate.", a: [TRIA, ["Monolaurina", "Seborregulador: reduce el exceso de sebo."]]},
"av-eau-thermal-avene-ultra-fluido-radiance-spf50": {i: "Ultra fluido SPF 50+ con color que ilumina: protección UVB-UVA muy amplia y color que se libera al aplicarlo.", a: [
  ["Pigmentos microencapsulados", "Liberan el color al aplicar."], ["Sistema de filtros estables", "Protección UVB-UVA muy amplia."]]},
"av-eau-thermale-avene-fluido-antiedad-spf50": {i: "Fluido solar antiedad SPF 50: protege de la radiación que causa el fotoenvejecimiento y reactiva el ácido hialurónico de la piel.", a: [TRIA, HAREACT]},
"av-eau-thermale-avene-fluido-antiimperfecciones-spf50": {i: "Fluido solar SPF 50 anti-imperfecciones: protege y reduce las lesiones del acné.", a: [
  TRIA, ["Gluconato de zinc", "Reduce las lesiones del acné; inhibe la 5-alfa reductasa (seborregulador)."]]},
"av-eau-thermale-avene-fluido-antimanchas-spf50": {i: "Fluido solar SPF 50+ antimanchas: protege de la radiación UV y la luz azul, que estimulan la aparición de manchas.", a: [TRIA]},
"av-ultra-serum-spf50-hidratacion-duradera": {i: "Sérum solar SPF 50+ hidratante: protección de ultraamplio espectro con hidratación duradera.", a: [TRIA]},
"av-ultra-serum-spf50-activa-la-luminosidad": {i: "Sérum solar SPF 50+ iluminador: protección de ultraamplio espectro y luminosidad.", a: [TRIA]},
"av-ultra-serum-spf50-rellena-instantaneamente": {i: "Sérum solar SPF 50+ rellenador: protección de ultraamplio espectro con efecto relleno inmediato.", a: [TRIA]},
"av-ultra-stick-spf50": {i: "Stick solar de alta protección, ultrarresistente y práctico para deporte y viajes. Avène no detalla sus activos clave en la ficha.", a: []},
"av-eau-thermale-avene-intense-protect-spf50": {i: "Fluido solar de protección muy alta y ultraamplio espectro para rostro y cuerpo; según Avène protege contra el 95 % del daño celular de la luz azul. No detalla sus activos clave en la ficha.", a: []},
"av-reflexe-solar-50": {i: "Fotoprotector SPF 50+ de bolsillo: protección de ultraamplio espectro y antioxidante.", a: [
  ["Provitamina E", "Antioxidante potente y fotoestable."], TRIA]},
"av-eau-thermale-avene-leche-ninos-spf50": {i: "Leche solar infantil de protección muy alta y resistente: forma una película protectora. Avène no detalla sus activos clave en la ficha.", a: []},
"av-eau-thermale-avene-spray-ninos-spf50": {i: "Spray solar familiar de protección muy alta y resistente. Avène no detalla sus activos clave en la ficha.", a: []},
"av-eau-thermale-avene-leche-solar-spf50": {i: "Leche solar invisible de protección alta, resistente al agua, la arena y el sudor. Avène no detalla sus activos clave en la ficha.", a: []},
"av-eau-thermale-avene-spray-solar-spf50": {i: "Spray solar invisible de protección alta, resistente al agua, la arena y el sudor. Avène no detalla sus activos clave en la ficha.", a: []},
"av-eau-thermale-avene-spray-spf30": {i: "Spray solar de protección alta sin marcas blancas. Avène no detalla sus activos clave en la ficha.", a: []},
"av-eau-thermale-avene-aceite-solar-spf-30": {i: "Aceite solar SPF 30: protección UVB-UVA muy amplia y protección frente al estrés oxidativo.", a: [
  ["Provitamina E + Tialidina", "Activo patentado de Pierre Fabre: forma estable de vitamina E que evita la formación de radicales libres y la oxidación del ADN."],
  ["Sistema de filtros estables", "Protección UVB-UVA muy amplia."]]},
"av-bruma-satinada-spf-30": {i: "Bruma solar satinada SPF 30: protección UVB-UVA muy amplia y protección frente al estrés oxidativo.", a: [
  ["Provitamina E + Tialidina", "Forma estable de vitamina E que evita la formación de radicales libres y la oxidación del ADN."],
  ["Sistema de filtros estables", "Protección UVB-UVA muy amplia."]]},
"av-balsamo-labial-spf-50": {i: "Bálsamo labial SPF 50+: protege los labios de UVB y UVA y de la oxidación.", a: [
  ["Provitamina E + Tialidina", "Forma estable de vitamina E: evita la formación de radicales libres."], ["Sistema de filtros estables", "Protección UVB-UVA muy amplia."]]},
"av-fluido-mineral-spf-50-3282770148671": {i: "Fluido solar 100 % mineral SPF 50+ para piel intolerante: los filtros minerales reflejan y dispersan la radiación.", a: [
  ["Complejo mineral (dióxido de titanio + óxido de zinc)", "Filtros físicos: reflejan y dispersan la radiación UV."], ["Provitamina E", "Antioxidante fotoestable."]]},
"av-fluido-mineral-con-color-spf-50-3282770388381": {i: "Fluido solar 100 % mineral con color SPF 50+ para piel intolerante: protege y unifica el tono.", a: [
  ["Complejo mineral (dióxido de titanio + óxido de zinc)", "Filtros físicos: reflejan y dispersan la radiación UV."], ["Provitamina E", "Antioxidante fotoestable."]]},
"av-crema-mineral-de-muy-alta-proteccion-spf-50": {i: "Crema solar mineral SPF 50+ para piel intolerante: el filtro mineral refleja y dispersa la radiación.", a: [
  ["Filtro mineral (dióxido de titanio)", "Filtro físico: refleja y dispersa la radiación UV."], ["Provitamina E", "Antioxidante fotoestable."]]},
"av-leche-mineral-spf-50": {i: "Leche solar mineral SPF 50+ para piel intolerante: protege con filtro mineral e hidrata.", a: [
  ["Filtro mineral (dióxido de titanio)", "Filtro físico: refleja y dispersa la radiación UV."], ["Provitamina E", "Antioxidante fotoestable."]]},
"av-compacto-con-color-alta-proteccion-spf-50-arena": {i: "Maquillaje compacto con protección mineral SPF 50: protege y unifica el tono.", a: [
  ["Filtro mineral (dióxido de titanio)", "Filtro físico: refleja y dispersa la radiación UV."], ["Provitamina E", "Antioxidante fotoestable."]]},
"av-locion-reparadora-aftersun": {i: "Loción after-sun: hidrata hasta 48 horas, calma y repara la piel tras el sol. Avène no detalla sus activos clave en la ficha.", a: []},
"av-gel-autobronceador-hidratante": {i: "Gel autobronceador: colorea la capa más superficial de la piel (visible desde 1 hora, máximo a las 24 horas) e hidrata; el color desaparece al renovarse el estrato córneo. Avène no detalla sus activos clave.", a: []},
"av-sunsimed-ka": {i: "Producto sanitario SPF 50+ que ayuda a prevenir la queratosis actínica, los cánceres de piel no melanoma y el daño en el ADN por el sol. Avène no detalla sus activos clave en la ficha.", a: []},
"av-sunsimed-pigment": {i: "Producto sanitario SPF 50+ que previene el fotoenvejecimiento y la aparición de manchas. Avène no detalla sus activos clave en la ficha.", a: []},
"av-sunsistick-ka-spf-50": {i: "Stick de protección SPF 50+ para zonas con queratosis actínica: protección muy amplia y estimula la reparación celular.", a: [
  ["Sistema de filtros estables", "Protección UVB-UVA muy amplia."],
  ["Vederine", "Estimula los mecanismos de reparación celular a través de la vía de señalización de la vitamina D."]]},
"av-body-gel-de-ducha-suave": {i: "Gel de ducha suave: limpia protegiendo la película hidrolipídica, hidrata, calma y nutre.", a: [
  ["Glicerina + inulina + oleato de glicerina", "Hidratantes vegetales que protegen la película hidrolipídica."],
  ["Complejo oleoso calmante (karité, camelina y cártamo + agua termal)", "Calma, nutre y protege del estrés oxidativo."]]},
"av-body-balsamo-fundente-hidratante": {i: "Bálsamo corporal fundente: hidrata, calma y nutre.", a: [
  ["Complejo oleoso calmante (karité, camelina y cártamo + agua termal)", "Calma, nutre y protege del estrés oxidativo."], ["Glicerina", "Hidrata y suaviza."]]},
"av-body-desodorante-eficacia-24h": {i: "Desodorante roll-on 24 horas: protege de los olores, absorbe la humedad y calma la piel irritada por afeitado o depilación. Avène no detalla sus activos clave en la ficha.", a: []},
"av-men-espuma-de-afeitar": {i: "Espuma de afeitar para piel sensible: limpia limitando las bacterias, alivia la irritación del afeitado y repara.", a: [
  AT(), ["Complejo purificador y calmante", "El nicidín impide la proliferación bacteriana, el bisabolol alivia la irritación y el sucralfato repara."]]},
"av-men-gel-de-afeitar": {i: "Gel de afeitar para piel sensible: limpia limitando las bacterias, alivia la irritación del afeitado y repara.", a: [
  AT(), ["Complejo purificador y calmante", "El nicidín impide la proliferación bacteriana, el bisabolol alivia la irritación y el sucralfato repara."]]},
"av-balsamo-para-despues-del-afeitado": {i: "Bálsamo after-shave: alivia, refresca y repara la piel tras el afeitado.", a: [
  AT("Muy concentrada: frescor y alivio."), ["Complejo purificador y calmante", "El nicidín impide la proliferación bacteriana, el bisabolol alivia la irritación y el sucralfato repara."]]},
"av-men-cuidado-hidratante-antiedad": {i: "Hidratante antiedad para hombre: reactiva el ácido hialurónico, protege la elasticidad y frena la oxidación.", a: [
  ["Complejo antiedad (HAF + provitamina E)", "El HAF reactiva la síntesis natural de ácido hialurónico y protege la elasticidad; la provitamina E protege del estrés oxidativo."], AT()]},
"av-couvrance-base-de-maquillaje-fluida-correctora-beige": {i: "Base de maquillaje fluida correctora para piel sensible: unifica la tez y protege de los UV (SPF 20).", a: [
  ["Complejo fotocorrector 3D", "Tres tipos de pigmentos para una tez natural, uniforme y radiante."], ["Filtro SPF 20", "Protege de los rayos UV."]]},
"av-couvrance-base-de-maquillaje-en-crema-compacta-1-1-naturel": {i: "Base de maquillaje en crema compacta de alta cobertura con SPF 30: cubre imperfecciones y protege.", a: [
  ["Provitamina E", "Forma estable de vitamina E: evita la formación de radicales libres."], ["Filtro SPF 30", "Protege de los rayos UV."]]},
"av-couvrance-stick-corrector-verde": {i: "Stick corrector: enmascara imperfecciones e hiperpigmentaciones localizadas con alta concentración de pigmentos; protege con SPF 20.", a: [
  ["Pigmentos correctores", "Alta concentración para enmascarar imperfecciones."], ["Filtro SPF 20", "Protege de los rayos UV."]]},
"av-polvos-mosaico-translucido": {i: "Polvos mosaico translúcidos: fijan el maquillaje e iluminan la tez.", a: [["Perlas iluminadoras", "Realzan e iluminan la tez todo el día."]]},
"av-couvrance-balsamo-embellecedor-de-labios-nude": {i: "Bálsamo embellecedor de labios: da color y cuida los labios sensibles.", a: [["Complejo oleonutritivo", "Nutre y da flexibilidad."]]},
"av-couvrance-lapiz-de-cejas-claro": {i: "Lápiz de cejas de alta tolerancia: color intenso y natural.", a: [["Pigmentos", "Alta concentración para un color intenso y natural."]]},
"av-lapiz-de-ojos-negro-de-alta-definicion": {i: "Lápiz de ojos de alta definición para ojos sensibles: color negro intenso y aplicación suave.", a: [
  ["Pigmentos purificados", "Color negro intenso."], ["Ceras y emolientes (girasol, carnauba)", "Textura suave y aplicación cómoda."]]},
"av-couvrance-mascara-de-alta-tolerancia-negro": {i: "Máscara de pestañas de alta tolerancia para ojos sensibles.", a: [["Glicerina", "Aporta flexibilidad y elasticidad a las pestañas."]]},
"av-couvrance-mascara-de-pestanas-de-alta-definicion-negro": {i: "Máscara de pestañas que aporta volumen, separa y define, con 12 horas de duración. Es maquillaje; Avène no detalla activos de tratamiento.", a: []},
"av-concentrado-calmante": {i: "Cuidado SOS localizado para piel atópica: alivia de inmediato el picor localizado (según Avène, -69 % de picor tras aplicarlo). Avène no detalla sus activos clave en la ficha.", a: []},
"av-balsamo-hidratante": {i: "Bálsamo nutritivo de rostro y cuerpo para la sequedad severa: refuerza la barrera, alivia la tirantez y nutre. Avène no detalla sus activos clave en la ficha.", a: []},
"av-leche-hidratante": {i: "Leche hidratante de rostro y cuerpo para piel seca: hidrata, nutre y refuerza la barrera. Avène no detalla sus activos clave en la ficha.", a: []},
"av-xeracalm-nutrition-gel-limpiador": {i: "Gel limpiador sin jabón para piel seca: limpia sin deteriorar la película protectora, para no agravar la sequedad. Avène no detalla sus activos clave en la ficha.", a: []}
};
D.prods.forEach(p => { if (A[p.id]) p.d.accion = A[p.id]; });
})();
