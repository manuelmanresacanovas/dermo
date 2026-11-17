/* «Cómo actúa» de los productos de Cantabria Labs.
   Fuente: «Composición», descripción y tecnología patentada de la ficha oficial de cada producto (cantabrialabs.es),
   completado con los mecanismos de las páginas de teoría (Cosméticos, Patologías, La piel).
   Formato: id de producto → { i: resumen de cómo actúa, a: [[activo, qué hace], …] } */
(function(){
const FILT = (t) => ["Filtros solares " + (t || "(combinación estable)"), "Los filtros químicos absorben la radiación UV y la transforman en energía no dañina; los físicos o minerales la reflejan y dispersan."];
const FILTMIN = ["Filtros 100 % minerales", "Reflejan y dispersan la radiación: máxima tolerancia en piel sensible."];
const ASPA = ["Aspa-Fernblock®", "Tecnología patentada de origen vegetal rica en polifenoles (helecho Polypodium leucotomos): antioxidante y fotoprotectora, ayuda a prevenir y reparar el daño solar (como el deterioro del colágeno), mejora la funcionalidad de la vitamina D y potencia el factor de protección."];
const FERN = ["Fernblock®", "Tecnología patentada de origen natural (Polypodium leucotomos) que actúa en todos los niveles de la fotoprotección: protege, neutraliza los radicales libres y repara el daño solar."];
const FERNP = ["Fernblock®+", "Versión reforzada de Fernblock®: tecnología natural que protege, neutraliza y repara el daño solar."];
const GLICO = ["Glicosilasa", "Enzima que ayuda a reparar el ADN dañado por el sol."];
const PHYS = ["Physavie", "Uno de los activos reparadores y antioxidantes que acompañan a los filtros."];
const OTZ = ["OTZ-10", "Uno de los activos reparadores y antioxidantes que acompañan a los filtros."];
const MELB = ["Melanina biomimética", "Uno de los activos reparadores y antioxidantes que acompañan a los filtros."];
const ARG = ["Arginina", "Aminoácido hidratante que ayuda a la barrera."];
const VITE = ["Vitamina E", "Antioxidante."];
const TEV = ["Té verde", "Antioxidante."];
const HA = (t) => ["Ácido hialurónico", t || "Retiene el agua: hidrata."];
const NIA = (t) => ["Niacinamida", t];
const SCA = ["SCA® Growth Factor Technology", "Tecnología patentada regeneradora rica en factores de crecimiento: repara y estimula las células envejecidas para que se comporten como células jóvenes."];
const EDAF = ["Edafence® Technology", "Tecnología patentada que refuerza la barrera cutánea frente a agresiones y contaminantes y aumenta la loricrina y la filagrina, proteínas estructurales de la barrera."];
const SOL4 = "Protege frente a las cuatro radiaciones (UVB, UVA, luz visible e infrarrojo) y ayuda a reparar el daño solar";
const A = {
"cl-heliocare-360-age-active-fluid-spf-50": {i: "Fotoprotector antiedad SPF 50+. " + SOL4 + ", incluida la luz azul de las pantallas, con sistema antipolución y triple complejo antiedad; su efecto soft-focus difumina los signos de la edad.", a: [
  FILT(), ASPA, ["Tinosorb A2B + óxido de hierro", "Refuerzan la protección frente a UVA y luz visible."],
  ["Triple complejo antiedad (ácido hialurónico, serina y trehalosa)", "Hidrata y ayuda a prevenir y corregir el fotoenvejecimiento."],
  ["Sistema antipolución", "Protege de la contaminación."]]},
"cl-heliocare-360-sensation": {i: "Fotoprotector facial de uso diario SPF 50+ con experiencia sensorial: " + SOL4 + " y previene el fotoenvejecimiento.", a: [
  FILT("físicos y químicos"), ASPA, ["Extracto de jengibre", "Activo vegetal antioxidante."], VITE, ["Vitamina B5", "Hidrata y repara."]]},
"cl-heliocare-360-water-gel-spf-50": {i: "Fotoprotector en water gel SPF 50+, ligero y no comedogénico: " + SOL4 + " e hidrata de forma prolongada.", a: [
  FILT(), ASPA, GLICO, PHYS, OTZ, MELB, ["Sistema hidratante de larga duración + ácido hialurónico", "Mantiene la piel hidratada desde la aplicación."], ARG]},
"cl-heliocare-360-color-water-gel-spf-50": {i: "Fotoprotector con color en water gel SPF 50+: " + SOL4 + ", unifica el tono e hidrata 48 horas.", a: [
  FILT(), ASPA, GLICO, PHYS, VITE, HA("Reticulado: hidratación intensa y duradera.")]},
"cl-heliocare-360-gel-oil-free-spf-50": {i: "Fotoprotector oil-free en gel para piel mixta o grasa: " + SOL4 + ", y matifica y regula el sebo.", a: [
  FILT(), ASPA, GLICO, PHYS, OTZ, MELB, ["Complejo seborregulador y matificante", "Acabado mate y seco."], ARG]},
"cl-heliocare-360-color-gel-oil-free-spf-50": {i: "Fotoprotector con color oil-free: " + SOL4 + ", regula el sebo y unifica con acabado mate.", a: [
  FILT(), ASPA, GLICO, PHYS, OTZ, MELB, ["Complejo seborregulador y matificante", "Acabado mate dry touch."], ARG]},
"cl-heliocare-360-acnimat": {i: "Fotoprotector SPF 50+ para piel grasa con acné: " + SOL4 + ", reduce las imperfecciones y el sebo y matifica más de 12 horas.", a: [
  FILT(), ASPA, ["Ácido succínico", "Alternativa suave al salicílico: anti-imperfecciones y seborregulador."],
  NIA("Antiinflamatoria y seborreguladora."), ["Pixalia", "Sistema matificante."], GLICO]},
"cl-heliocare-360-pigment-solution-fluid-spf-50": {i: "Fotoprotector despigmentante SPF 50+: " + SOL4 + ", incluida la luz visible que estimula las manchas, y ayuda a corregirlas con pigmentos que unifican.", a: [
  FILT(), ASPA, ["Tinosorb A2B + óxido de hierro", "Refuerzan la protección frente a UVA y luz visible."],
  ["Sistema despigmentante: niacinamida + ácido elágico", "La niacinamida bloquea la transferencia de melanosomas y el ácido elágico ayuda a reducir la pigmentación."],
  ["Sistema antipolución", "Protege de la contaminación."], ["Pigmentos nude", "Unifican el tono."]]},
"cl-heliocare-360-md-a-r-emulsion-spf50": {i: "Fotoprotector SPF 50+ para piel sensible con rojeces: " + SOL4 + ", mitiga y difumina las rojeces.", a: [
  FILT("minerales y organominerales"), ASPA,
  ["Sistema antirrojeces (Physavie, Rosabora y glutatión)", "Mitiga las rojeces."], VITE, ["Complejo unificador del tono", "Difumina las rojeces."]]},
"cl-heliocare-360-mineral-tolerance-fluid-spf-50": {i: "Fotoprotector de alta tolerancia SPF 50 con filtros exclusivamente minerales, para piel sensible, reactiva o intolerante: " + SOL4 + ".", a: [
  FILTMIN, ASPA, GLICO, PHYS, OTZ, MELB]},
"cl-heliocare-360-md-ak-fluid": {i: "Fotoprotector SPF 100+ adyuvante en queratosis actínicas y otros cánceres de piel no melanoma: máxima protección y activación de los tres mecanismos de reparación del ADN.", a: [
  FILT(), FERNP,
  ["GenoRepair® Complex (fotoliasa, glicosilasa y endonucleasa)", "Tres enzimas que activan los tres mecanismos de reparación del ADN dañado por el sol."],
  ["Sulforafano", "Activo reparador frente al daño solar."], PHYS, OTZ, MELB, ARG, ["Vederine", "Activo reparador."]]},
"cl-heliocare-360o-compactos": {i: "Maquillaje compacto oil-free con protección muy alta: protege del sol, unifica el tono y disimula manchas e imperfecciones, con acabado mate.", a: [
  FILT("físicos y químicos"), FERN, TEV]},
"cl-heliocare-pigment-stick-color-solar-despigmentante": {i: "Stick facial con color 3 en 1 con filtros minerales: previene (protege de la luz visible, gran causante de manchas), reduce y camufla las manchas.", a: [
  FILTMIN, ASPA, ["Óxido de hierro", "Refuerza la protección frente a la luz visible y aporta color."], ["Ectoína", "Protege y refuerza la barrera."]]},
"cl-heliocare-color-gelcream-spf-50": {i: "Fotoprotector con color de alta cobertura SPF 50: protege del sol y sirve de base de maquillaje en un solo paso.", a: [
  FILT(), FERN, TEV]},
"cl-heliocare-ultra-90-gel-spf-50": {i: "Fotoprotector SPF 50+ en gel para piel clara o con fotosensibilidad: protege, neutraliza y repara el daño solar.", a: [
  FILT(), FERN, GLICO, TEV]},
"cl-heliocare-360-airgel-spf-50": {i: "Fotoprotector en espuma de aire SPF 50: " + SOL4 + ", con aplicación fácil y dosificada.", a: [
  FILT(), FERNP, GLICO, PHYS, OTZ, MELB]},
"cl-heliocare-360-fluid-spray-spf-50": {i: "Fotoprotector en spray SPF 50 para todo tipo de piel, aplicable sobre piel mojada: " + SOL4 + " e hidrata.", a: [
  FILT(), FERNP, VITE, PHYS]},
"cl-heliocare-360-invisible-spray-spf-50": {i: "Spray corporal transparente SPF 50+, eficaz sobre piel mojada: " + SOL4 + ".", a: [
  FILT(), FERNP, GLICO, PHYS, OTZ]},
"cl-heliocare-360o-body-glow": {i: "Fotoprotector corporal SPF 50+ en oleogel con acabado dorado: protege del sol y previene manchas y fotoenvejecimiento.", a: [
  FILT("físicos y químicos"), FERNP, ["Combinación de 6 micas", "Acabado dorado brillante."]]},
"cl-heliocare-advanced-gel-spf-50-2": {i: "Fotoprotector en gel fresco SPF 50 para toda la familia, aplicable sobre piel húmeda: " + SOL4 + ".", a: [
  FILT(), ASPA, GLICO, VITE]},
"cl-heliocare-advanced-spray-spf-50": {i: "Spray corporal SPF 50: protege, neutraliza y repara el daño solar.", a: [
  FILT(), FERN, GLICO, TEV]},
"cl-heliocare-360-sport-spray-spf-50": {i: "Spray deportivo SPF 50 resistente al agua y al sudor: " + SOL4 + ".", a: [
  FILT(), FERNP, VITE, PHYS]},
"cl-heliocare-360-sport-transparent-stick-spf-50": {i: "Stick deportivo transparente SPF 50+ resistente al agua y al sudor: " + SOL4 + ".", a: [
  FILT(), FERNP, VITE]},
"cl-heliocare-360-pediatrics-lotion-spf-50": {i: "Fotoprotector infantil hipoalergénico SPF 50 para cara y cuerpo: " + SOL4 + ".", a: [
  FILT(), FERNP, GLICO, PHYS, OTZ, MELB, ARG]},
"cl-heliocare-360-pediatrics-mineral-spf-50": {i: "Fotoprotector infantil con filtros minerales (desde 3 meses, piel sensible y atópica): protege del sol, ayuda a reparar el ADN y cuida la barrera.", a: [
  FILTMIN, FERNP, ["Genoprotect Complex (fotoliasa, glicosilasa y endonucleasa)", "Enzimas que ayudan a reparar el ADN dañado por el sol."],
  PHYS, OTZ, MELB, NIA("Cuida la barrera de la piel.")]},
"cl-heliocare-360-pediatrics-stick": {i: "Stick facial infantil SPF 50+: protege del sol e hidrata, sin extender con las manos.", a: [
  FILT(), FERNP, ["Astaxantina", "Antioxidante."]]},
"cl-heliocare-360-pediatrics-transparent-spray-spf-50": {i: "Spray infantil transparente SPF 50+, eficaz sobre piel mojada: " + SOL4 + ".", a: [
  FILT(), FERNP, GLICO, PHYS, OTZ]},
"cl-heliocare-360o-pediatrics-atopic-lotion-spray-spf-50": {i: "Fotoprotector infantil para piel atópica SPF 50: protege del sol e hidrata y cuida la barrera debilitada.", a: [
  FILT(), FERNP, GLICO, PHYS, OTZ, MELB, ["Arginina + glicerina", "Hidratan y cuidan la función barrera."]]},
"cl-heliocare-oral-capsulas": {i: "Fotoprotección oral: aumenta la resistencia de la piel al sol desde la primera toma y protege de forma homogénea, incluso donde no llega la crema. Complementa, no sustituye, al fotoprotector tópico.", a: [
  ["Fernblock® (240 mg)", "Extracto de Polypodium leucotomos que aumenta la resistencia de la piel al daño solar."],
  ["Té verde (50 mg)", "Antioxidante."], ["Betacarotenos (4,8 mg)", "Aceleran el bronceado."]]},
"cl-heliocare-360-capsulas": {i: "Cápsulas de fotoprotección oral que aumentan la resistencia de la piel al sol y ayudan a prevenir el fotoenvejecimiento y las manchas. Complementan al fotoprotector tópico.", a: [
  ["Aspa-Fernblock® (240 mg)", "Antioxidante y fotoprotector: aumenta la resistencia de la piel al sol."],
  ["Cisteína (75 mg)", "Antioxidante."], ["Niacinamida, vitamina C y vitamina E", "Vitaminas antioxidantes."], ["Prebióticos", "Completan la fórmula."]]},
"cl-heliocare-360-d-plus-capsulas": {i: "Cápsulas con alta dosis de Aspa-Fernblock®: aumentan la resistencia de la piel al sol, neutralizan y reparan el daño solar y optimizan la vitamina D. Complementan al fotoprotector tópico.", a: [
  ["Aspa-Fernblock® (360 mg)", "Fotoprotector oral antioxidante."], ["Niacinamida (16 mg)", "Vitamina B3."],
  ["Vitamina D", "Optimiza sus niveles, que pueden bajar con la fotoprotección."], ["Vitamina E", "Antioxidante."]]},
"cl-heliocare-capsulas-ultra-d": {i: "Cápsulas con alta dosis de Aspa-Fernblock®: aumentan la resistencia de la piel al sol, neutralizan y reparan el daño solar. Complementan al fotoprotector tópico.", a: [
  ["Aspa-Fernblock®", "Fotoprotector oral antioxidante."], ["Vitamina D", "Optimiza sus niveles."],
  ["Luteína, licopeno y vitamina E", "Antioxidantes."]]},
"cl-heliocare-oral-capsulas-bronce": {i: "Cápsulas que estimulan la síntesis natural de melanina para acelerar y potenciar el bronceado, y aumentan la resistencia de la piel al sol. Complementan al fotoprotector tópico.", a: [
  ["Fernblock® (120 mg)", "Aumenta la resistencia de la piel al sol."],
  ["Forskolina (50 mg)", "Estimula la síntesis natural de melanina."], ["Betacarotenos (4,8 mg)", "Aceleran el bronceado."]]},
"cl-heliocare-sport-sun-sticks": {i: "Sticks bucodispersables de fotoprotección oral para deportistas: aumentan la resistencia al daño solar y aportan minerales para músculos y huesos. Complementan al fotoprotector tópico.", a: [
  ["Aspa-Fernblock®", "Fotoprotector oral antioxidante."], ["Vitaminas C y D, zinc y magnesio", "El magnesio ayuda a mantener músculos y huesos."]]},
"cl-heliocare-360-junior-oral-sticks": {i: "Sticks de fotoprotección oral para niños: aumentan la resistencia de la piel al sol y reducen el riesgo de quemadura, incluso donde no llega la crema. Complementan al fotoprotector tópico.", a: [
  ["Fernblock®+ (150 mg)", "Aumenta la resistencia de la piel al sol."]]},
"cl-aktuva-ak100-prevent-stick-solar-facial-labial": {i: "Stick de protección muy alta para cara, labios y cuero cabelludo: protege del sol y repara la barrera.", a: [
  FILT("químicos fotoestables"), ASPA, ["Ectoína", "Repara y protege la barrera."]]},
"cl-aktuva-ak100-repair-cream-crema-solar-reparadora": {i: "Crema reparadora y protectora para piel con exposición solar intensa y continuada: protege, activa la reparación del daño solar, hidrata y reduce las rojeces.", a: [
  FILT("químicos y físicos fotoestables"), ASPA, ["Sulforafano", "Activo reparador."],
  ["Enzimas reparadoras", "Ayudan a reparar el ADN dañado por el sol."], ["Vederine", "Activo reparador."], ARG]},
"cl-aktuva-ak-control-capsulas-dano-solar": {i: "Complemento para la piel con exposición solar continuada y contaminación: ayuda a mantener la piel en condiciones normales. Complementa al fotoprotector tópico.", a: [
  ["Aspa-Fernblock® (180 mg)", "Antioxidante y fotoprotector."], ["Nicotinamida (500 mg)", "Vitamina B3 a alta concentración."]]},
"cl-endocare-hydractive-agua-micelar": {i: "Agua micelar: limpia y desmaquilla en profundidad (incluso waterproof), restaura la barrera y respeta el pH.", a: [
  ["Microbiome Recovery Complex", "Restaura la barrera y protege del estrés ambiental."], NIA("Refuerza la barrera y calma."),
  ["Olivino y pepino", "Hidratan y tonifican."]]},
"cl-endocare-aquafoam": {i: "Espuma limpiadora suave para todo tipo de piel, incluso sensible: elimina impurezas, sebo y maquillaje, hidrata y calma.", a: [
  SCA, ["Ácido cítrico", "AHA suave."], ["Extracto de hoja de mimosa", "Activo vegetal calmante."],
  ["Agua del Mar Cantábrico", "Isotónica, rica en minerales y oligoelementos: hidrata, calma y regenera."]]},
"cl-endocare-gelcream": {i: "Gel-crema antiedad reparadora: regenera y repara la piel agredida por el envejecimiento e hidrata.", a: [
  SCA, ["Hygroplex HHG", "Complejo hidratante."], ["Pentavitin", "Hidratante de larga duración."]]},
"cl-endocare-day-spf-30": {i: "Emulsión de día SPF 30: hidrata, regenera y protege del sol.", a: [
  SCA, FILT("UVB-UVA")]},
"cl-endocare-ampollas-1-second-flash": {i: "Ampollas de efecto inmediato contra los signos de fatiga: piel luminosa, firme y tersa al instante.", a: [
  ["Extracto de portulaca", "Activo calmante."], ["Proteínas de soja", "Efecto tensor."], ARG, ["Extracto de pepino", "Descongestiona y refresca."]]},
"cl-endocare-contorno-de-ojos-y-labios": {i: "Loción de contorno de ojos y labios: regenera, descongestiona bolsas y reduce ojeras y primeras arrugas.", a: [
  SCA, ["Hygroplex HHG", "Complejo hidratante."], ["Pentavitin", "Hidratante de larga duración."]]},
"cl-endocare-hyaluboost-age-barrier": {i: "Sérum antiedad que activa y repara la barrera, e hidrata de forma duradera para una piel más resistente y lisa.", a: [
  EDAF, NIA("Barrera activa antiedad."),
  ["Ácido hialurónico de alto y bajo peso molecular", "El de alto peso forma una película que evita la pérdida de agua; el de bajo peso penetra e hidrata en profundidad."]]},
"cl-endocare-age-barrier-niacinal-serum-gel": {i: "Sérum gel con 10 % de niacinamida: refuerza la barrera, hidrata en profundidad y calma.", a: [
  EDAF, ["Niacinamida 10 %", "Refuerza la barrera, calma y unifica el tono."],
  ["Ácido hialurónico en nanovesículas", "Hidratación profunda."], ["Agentes hidratantes", "Completan la hidratación."]]},
"cl-endocare-age-barrier-hyaluboost-gel-cream-crema-funcion-barrera": {i: "Crema de hidratación diaria que protege y refuerza la barrera frente a agresiones externas y retrasa los primeros signos de la edad.", a: [
  HA(), NIA("Refuerza la barrera y calma."),
  ["Edafence®", "Tecnología antipolución patentada que previene y repara el daño de agresores externos (oxidantes, humo de tabaco, metales pesados, contaminación urbana)."]]},
"cl-endocare-age-barrier-hyaluboost-eye-contour-contorno-ojos-funcion-barrera": {i: "Contorno de ojos que hidrata, ilumina y atenúa las líneas finas, reforzando la barrera.", a: [
  NIA("Ilumina y refuerza la barrera."), ["Ácido hialurónico de alto y bajo peso molecular", "Hidrata en superficie y en profundidad."], EDAF]},
"cl-endocare-cellage-crema": {i: "Crema rica antiedad: actúa sobre las células madre de la piel para producir colágeno, elastina y ácido hialurónico, y trata arrugas, pérdida de densidad y textura irregular.", a: [
  ["IFC® CAF Skin Stem Activation", "Tecnología patentada que activa las células madre para producir nuevas células de la piel."],
  ["Wharton Gel Complex®", "Crea un entorno para que las células actúen de forma óptima: efecto relleno y densidad."],
  ["RetinSphere® Technology", "Dos retinoides de alta tolerancia que estimulan la renovación epidérmica."], ["Vitaminas C y E", "Antioxidantes."]]},
"cl-endocare-cellage-gelcream": {i: "Gel-crema antiedad no comedogénico: actúa sobre las células madre de la piel para producir colágeno, elastina y ácido hialurónico.", a: [
  ["IFC® CAF Skin Stem Activation", "Activa las células madre para producir nuevas células de la piel."],
  ["Wharton Gel Complex®", "Efecto relleno y densidad."],
  ["RetinSphere® Technology", "Retinoides de alta tolerancia que estimulan la renovación."], ["Vitaminas C y E", "Antioxidantes."]]},
"cl-endocare-cellage-alta-potencia-serum": {i: "Sérum de reparación dérmica intensiva por triple vía: regeneración, anti-inflammaging y antiglicación.", a: [
  ["IFC® CAF Skin Stem Activation (máxima concentración)", "Activa las células madre: regeneración."],
  ["Wharton Gel Complex®", "Efecto relleno y densidad."],
  ["Maxnolia Dglyage®", "Activo anti-inflammaging y antiglicación."]]},
"cl-endocare-cellage-firming-cream": {i: "Crema rica reafirmante para piel seca: actúa en las distintas etapas de la síntesis de colágeno, con efecto reafirmante inmediato y remodelando el óvalo.", a: [
  SCA, ["Péptidos reafirmantes", "Péptidos señal: estimulan el colágeno."], ["Lakesis y Actifcol", "Activos reafirmantes que favorecen un colágeno de calidad."]]},
"cl-endocare-cellage-firming-day-cream-spf-30": {i: "Crema de día reafirmante con SPF 30: actúa en las etapas de la síntesis de colágeno, reafirma y protege del sol.", a: [
  SCA, ["Péptidos reafirmantes", "Péptidos señal: estimulan el colágeno."], ["Lakesis y Actifcol", "Activos reafirmantes."], FILT("UVB-UVA")]},
"cl-endocare-cellage-cuello-y-escote": {i: "Tratamiento redensificante y reafirmante de cuello y escote: efecto lifting, unifica el tono y actúa sobre la grasa acumulada.", a: [
  SCA, ["Lakesis y Actifcol", "Péptidos reafirmantes con acción lifting."], ["Cafeína", "Activa la movilización de la grasa acumulada."],
  NIA("Unifica el tono."), ["N-acetilglucosamina", "Ayuda a unificar el tono."], ["Sistema hidratante (karité, glicerina, aloe vera)", "Hidrata y nutre."]]},
"cl-endocare-cellage-contorno-de-ojos": {i: "Contorno antiedad: actúa sobre las células madre y corrige y previene bolsas, ojeras y arrugas finas.", a: [
  ["IFC® CAF Skin Stem Activation", "Activa las células madre."], ["Wharton Gel Complex®", "Efecto relleno y densidad."],
  ["Haloxyl™", "Reduce las ojeras."], ["Cafeína", "Descongestiona las bolsas."]]},
"cl-endocare-tensage-cream": {i: "Crema reafirmante ligera: devuelve firmeza y elasticidad con efecto tensor y regenerador, y redefine el óvalo.", a: [
  SCA, ["Tensderm", "Activo de efecto tensor."], VITE]},
"cl-endocare-tensage-serum": {i: "Sérum reafirmante: devuelve firmeza y elasticidad, renueva las estructuras de soporte e ilumina y unifica.", a: [
  SCA, ["Tensderm", "Efecto tensor."], ["Vitamina C", "Antioxidante e iluminadora."], VITE, ["Nicotinamida", "Unifica el tono."]]},
"cl-endocare-tensage-alta-potencia-serum": {i: "Sérum redensificante y reafirmante de triple vía: regeneración, anti-inflammaging y antiglicación.", a: [
  ["IFC® CAF Skin Stem Activation (máxima concentración)", "Activa las células madre."], ["Wharton Gel Complex®", "Efecto relleno y densidad."],
  ["Maxnolia Dglyage®", "Anti-inflammaging y antiglicación."]]},
"cl-endocare-tensage-ampollas": {i: "Ampollas reafirmantes intensivas: efecto tensor y regenerador, relajan las arrugas de expresión e hidratan.", a: [
  SCA, ["Péptidos Tensderm (Argireline y Seriseline)", "Argireline es un péptido inhibidor que relaja las arrugas de expresión; efecto tensor."], HA()]},
"cl-endocare-tensage-nourishing-cream": {i: "Crema rica reafirmante para piel seca: actúa en las etapas de la síntesis de colágeno, reafirma al instante y remodela el óvalo.", a: [
  SCA, ["Péptidos reafirmantes", "Péptidos señal: estimulan el colágeno."], ["Lakesis y Actifcol", "Activos reafirmantes."]]},
"cl-endocare-tensage-firming-cream-crema-reafirmante-facial": {i: "Crema reafirmante ligera: actúa sobre la senescencia celular (las células que envejecen) para devolver firmeza, densidad y elasticidad, y previene el descolgamiento.", a: [
  ["Senesblock®", "Tecnología exclusiva de microalgas que actúa sobre las bases del envejecimiento y la senescencia celular."],
  ["Péptido de colágeno biomimético", "Estimula el colágeno."], ["Complejo redensificante", "Aporta densidad."], ["Sistema hidratante", "Hidrata intensamente."]]},
"cl-endocare-tensage-firming-nourishing-cream-reafirmante-crema-nutritiva": {i: "Crema rica reafirmante: actúa sobre la senescencia celular para devolver firmeza y densidad, combate el descolgamiento y nutre.", a: [
  ["Senesblock®", "Tecnología exclusiva de microalgas que actúa sobre la senescencia celular."],
  ["Péptido de colágeno biomimético", "Estimula el colágeno."], ["Complejo redensificante", "Aporta densidad."], ["Emolientes nutritivos", "Nutren intensamente."]]},
"cl-endocare-tensage-firming-serum-reafirmante": {i: "Sérum redensificante y reafirmante: actúa sobre la senescencia celular, combate flacidez y arrugas y tensa para redefinir el contorno.", a: [
  ["Senesblock®", "Tecnología exclusiva de microalgas que actúa sobre la senescencia celular."],
  ["Péptido de colágeno biomimético", "Estimula el colágeno."], ["Complejo redensificante", "Aporta densidad."], ["Ácido hialurónico en nanovesículas", "Hidrata en profundidad."]]},
"cl-endocare-tensage-cuello-y-escote-crema-reafirmante": {i: "Tratamiento redensificante y reafirmante de cuello y escote: efecto lifting, unifica el tono y actúa sobre la grasa acumulada.", a: [
  SCA, ["Lakesis y Actifcol", "Péptidos reafirmantes con acción lifting."], ["Cafeína", "Activa la movilización de la grasa."],
  NIA("Unifica el tono."), ["N-acetilglucosamina", "Ayuda a unificar el tono."], ["Sistema hidratante (karité, glicerina, aloe vera)", "Hidrata y nutre."]]},
"cl-endocare-tensage-contorno-de-ojos": {i: "Contorno fluido: combate las arrugas superficiales, reduce bolsas y difumina las ojeras con micropigmentos.", a: [
  SCA, ["Tensderm", "Efecto tensor."], ["Eyeseryl®", "Tetrapéptido que mejora la circulación sanguínea y linfática: reduce las bolsas."],
  ["Syn-Coll", "Péptido que estimula el colágeno."], ["Pigmentos coloreados", "Iluminan y difuminan las ojeras."]]},
"cl-endocare-tensage-firming-contour-reafirmante-contorno-ojos": {i: "Contorno reafirmante y antiarrugas: actúa sobre la senescencia celular, suaviza líneas y reduce bolsas y fatiga.", a: [
  ["Senesblock®", "Tecnología de microalgas que actúa sobre la senescencia celular."],
  ["Péptido de colágeno biomimético + tetrapéptido reafirmante", "Estimulan el colágeno y reafirman."],
  ["Eyeseryl®", "Mejora la circulación: reduce las bolsas."], ["Cafeína", "Descongestionante."], ["Manteca de karité y emolientes", "Nutren."]]},
"cl-endocare-radiance-vitamin-c-20-serum-vitamina-pura": {i: "Sérum antioxidante con 20 % de vitamina C (pura y en nanovesículas): unifica el tono, ilumina y da efecto lifting.", a: [
  ["Vitamin C Complex (15 % pura + 5 % en nanovesículas)", "Antioxidante intenso; inhibe la tirosinasa y unifica el tono."],
  ["Edafence®", "Protege de la contaminación y otros agresores externos."], ["Antioxidantes", "Refuerzan la protección."], ["Activo tensor", "Efecto lifting inmediato."]]},
"cl-endocare-radiance-c-ferulic-serum-gel-antipolucion": {i: "Sérum antiedad antipolución: protege de la contaminación y aporta acción antioxidante e iluminadora.", a: [
  ["Edafence®", "Protege de los efectos nocivos de la contaminación."], ["Vitamina C", "Antioxidante e iluminadora."],
  ["Ácido ferúlico", "Antioxidante potente."], ["Antiox Complex", "Completa la protección antioxidante."]]},
"cl-endocare-radiance-c-oil-free-ampollas": {i: "Ampollas oil-free para piel normal o grasa: reducen y previenen los signos de la edad con acción antioxidante, regeneradora e hidratante.", a: [
  SCA, ["Antiox System", "Antioxidantes de alta tolerancia."], ["Aqua Complex", "Hidratante."], ["Vitamina C", "Antioxidante e iluminadora."]]},
"cl-endocare-radiance-c-20-proteoglicanos-ampollas": {i: "Ampollas contra el fotoenvejecimiento: antioxidantes, regeneradoras e hidratantes, con un extra de luminosidad.", a: [
  SCA, ["Vitamina C", "Antioxidante e iluminadora."], ["Proteoglicanos", "Hidratan y apoyan la estructura de la dermis."]]},
"cl-endocare-radiance-c-proteoglicanos-oil-free-ampollas": {i: "Ampollas oil-free: reducen y previenen los signos de la edad con acción antioxidante, regeneradora e hidratante.", a: [
  SCA, ["Vitamina C", "Antioxidante e iluminadora."], ["Proteoglicanos", "Hidratan y apoyan la estructura de la dermis."]]},
"cl-endocare-radiance-peel-mask": {i: "Mascarilla gel exfoliante y antioxidante: renueva la textura, ilumina al instante y mejora la penetración de los tratamientos posteriores.", a: [
  ["Vitamina C 20 %", "Antioxidante e iluminadora."], ["Resveratrol", "Polifenol antioxidante."], ["Pro-retinol", "Precursor de retinoide: renovación."],
  ["Ácido fítico", "Exfoliante suave."], HA()]},
"cl-endocare-radiance-contorno-de-ojos-antiojeras": {i: "Contorno antiojeras: reduce bolsas y arrugas superficiales y difumina las ojeras con micropigmentos.", a: [
  EDAF, ["Dióxido de titanio", "Pigmento que ilumina y difumina."], ["Cafeína", "Descongestiona."],
  ["Ácido tranexámico", "Actúa sobre la pigmentación de la ojera."], ["Antioxidantes", "Protegen la zona."]]},
"cl-endocare-radiance-illuminating-eye-contour-contorno-ojos-iluminador": {i: "Contorno iluminador y antiarrugas de uso diario: descongestiona, corrige el color de la ojera y protege del envejecimiento.", a: [
  ["Vitaminas C y E + ácido ferúlico", "Antioxidantes."], ["Ácido tranexámico", "Actúa sobre la pigmentación."],
  ["Cafeína", "Descongestiona."], ["Eyeseryl®", "Mejora la circulación: reduce las bolsas."], NIA("Unifica e ilumina.")]},
"cl-endocare-renewal-retinol-serum-0-2-retinol": {i: "Sérum de retinol 0,2 % en microesponjas: renueva y retexturiza la piel, reduce líneas y arrugas, con liberación controlada para mejor tolerancia.", a: [
  ["Retinol puro 0,2 % (Retinsphere®)", "Retinoide encapsulado en microesponjas: estimula la renovación epidérmica y el colágeno."],
  HA(), NIA("Calma y refuerza la barrera."), ["Bisabolol", "Calmante."]]},
"cl-endocare-renewal-retinol-intensive-serum-0-5-retinol": {i: "Sérum intensivo de retinol 0,5 % en microesponjas: renovación epidérmica intensiva para líneas, arrugas y textura.", a: [
  ["Retinol puro 0,5 % (Retinsphere®)", "Retinoide encapsulado en microesponjas: estimula la renovación epidérmica y el colágeno."],
  HA(), NIA("Calma y refuerza la barrera.")]},
"cl-endocare-renewal-retinoid-serum-retinoide": {i: "Sérum antiarrugas con dos retinoides y un potenciador: renueva y retexturiza la piel con alta tolerancia.", a: [
  ["RetinDuo® Technology", "Combina retinol puro en microesponjas, retinal en nanovesículas (solo necesita una conversión, más potente) y un booster que potencia su eficacia con alta tolerancia."],
  NIA("Calma y refuerza la barrera."), HA("Reticulado: hidratación duradera.")]},
"cl-endocare-renewal-retinoid-intensive-serum-retinoide-intensivo": {i: "Sérum intensivo con dos retinoides: renovación epidérmica intensiva para los signos de la edad.", a: [
  ["RetinDuo® Technology", "Retinol puro en microesponjas + retinal en nanovesículas + booster: renovación con alta tolerancia."],
  NIA("Calma y refuerza la barrera."), HA("Reticulado: hidratación duradera.")]},
"cl-endocare-renewal-retinoid-eye-contour-contorno-ojos-retinoides": {i: "Contorno con dos retinoides: reduce las arrugas del contorno y aporta luminosidad.", a: [
  ["RetinDuo® Technology", "Retinol puro + retinal + booster: renovación con alta tolerancia."], ["Cafeína", "Descongestiona."], ["Péptidos", "Antiarrugas."]]},
"cl-endocare-renewal-retinol-contorno-de-ojos": {i: "Sérum de contorno con retinol encapsulado: renueva y reduce las arrugas del contorno y del labio superior.", a: [
  ["Retinol puro encapsulado (Retinsphere®)", "Estimula la renovación epidérmica."], ["Cafeína y Haloxyl™", "Descongestionan y reducen las ojeras."]]},
"cl-endocare-renewal-comfort-cream": {i: "Crema calmante y reparadora para acompañar los tratamientos con retinoides: alivia la irritación, repara la barrera y estimula una renovación suave.", a: [
  EDAF, ["Retinsphere® Technology", "Estimula la renovación epidérmica con alta tolerancia."], NIA("Calma y repara la barrera."), HA(), ["Sistema calmante", "Alivia la irritación."]]},
"cl-endocare-renewal-glycoperfect-intensive-serum": {i: "Sérum antiedad exfoliante: el glicólico y el azelaico retexturizan la piel, reducen poros y arrugas y unifican el tono.", a: [
  ["Ácido glicólico (alta concentración)", "AHA: rompe las uniones entre corneocitos y estimula la renovación."],
  ["Azelaic Aox-Tech", "Ácido azelaico en nanovesículas (sistema que multiplica su penetración): antiinflamatorio y despigmentante."],
  ["Ácido cítrico", "AHA suave."], ["Bisabolol y caléndula", "Calmantes."]]},
"cl-endocare-renewal-glycoperfect-creamy-cleanser": {i: "Gel limpiador con 15 % de AHA: limpia, exfolia con suavidad y realza la luminosidad sin tirantez.", a: [
  ["Ácido glicólico", "AHA: exfolia y renueva."], ["Azelaic Aox-Tech", "Ácido azelaico en nanovesículas."],
  ["Ácido cítrico", "AHA suave."], ["Bisabolol y caléndula", "Calmantes."]]},
"cl-biretix-cleanser": {i: "Limpiador diario para piel con acné: regula el exceso de grasa y reduce la proliferación de microorganismos sin resecar.", a: [
  ["BIOPEP-15", "Péptido que reduce la proliferación de microorganismos."], ["Piroctona olamina", "Antimicrobiano."],
  ["Aloe vera y hamamelis", "Suavizan y calman."], ["Própolis y extracto de algas", "Antioxidantes."]]},
"cl-biretix-micropeel": {i: "Exfoliante físico y químico para piel grasa y con acné: elimina células muertas, limpia los poros, normaliza el sebo y calma.", a: [
  ["Microgránulos de semilla de tagua", "Peeling mecánico."], ["Extracto de sauce negro", "Peeling químico de origen natural."],
  ["SebiCalm Complex", "Bardana, zinc, polifenoles, biotina y niacinamida con extractos calmantes: normaliza el sebo y calma."]]},
"cl-biretix-oil-control-solution": {i: "Solución exfoliante y matificante: renueva la epidermis, reduce brillos y poros y atenúa la hiperpigmentación postinflamatoria.", a: [
  ["Ácido glicólico 8 %", "AHA: renueva y antiedad."], ["Ácido mandélico 1,5 %", "AHA suave apto para piel sensible."],
  ["Pore Reductyl", "Afina los poros."], ["Extracto de rosas", "Calmante."]]},
"cl-biretix-duo": {i: "Gel para los primeros signos del acné: renueva la piel, reduce los microorganismos, controla la grasa y mejora la textura.", a: [
  ["Retinsphere® Technology", "Dos retinoides de alta tolerancia que estimulan la renovación y reducen las manchas."],
  ["BIOPEP-15", "Reduce la proliferación de microorganismos."], ["Ácido salicílico", "BHA: desobstruye el poro."], VITE]},
"cl-biretix-tri-active-gel": {i: "Gel de triple acción para acné moderado: reduce granos y marcas renovando la piel, controlando microorganismos y despigmentando.", a: [
  ["Retinsphere® Technology", "Retinoides que estimulan la renovación."], ["BIOPEP-15", "Reduce los microorganismos."],
  ["Ácido salicílico 2 %", "BHA liposoluble: desobstruye el poro."], ["Ácido glicólico 15 %", "AHA: renueva y atenúa marcas."],
  ["Niacinamida 5 %", "Antiinflamatoria y seborreguladora."]]},
"cl-biretix-tri-active-control-gel": {i: "Gel seborregulador para imperfecciones y poros dilatados: renueva la piel y mejora la textura respetando la barrera.", a: [
  ["RetinDuo® Technology", "Retinol + retinal + booster: renovación con alta tolerancia."],
  ["Ácido glicólico 8 %", "AHA: renueva."], ["Ácido salicílico 1 %", "BHA: desobstruye el poro."],
  ["Niacinamida 5 %", "Antiinflamatoria y seborreguladora."], ["Pro-sulforafano", "Activo protector."]]},
"cl-biretix-tri-active-intensive-gel": {i: "Gel intensivo de triple acción (queratolítica y comedolítica) para piel grasa con acné: mejora marcas, imperfecciones y poros.", a: [
  ["RetinDuo® Technology", "Retinol + retinal + booster: renovación con alta tolerancia."],
  ["Ácido glicólico 15 %", "AHA: renueva y atenúa marcas."], ["Ácido salicílico 2 %", "BHA: queratolítico y comedolítico."],
  ["Niacinamida 5 %", "Antiinflamatoria y seborreguladora."], ["Pro-sulforafano", "Activo protector."]]},
"cl-biretix-double-correction-serum": {i: "Sérum para piel adulta con imperfecciones: regula el sebo, combate las imperfecciones y mejora los signos de la edad.", a: [
  ["Retinsphere® Technology", "Retinol encapsulado: renovación epidérmica."], NIA("Antiinflamatoria y seborreguladora."),
  ["Azeloglicina", "Derivado del azelaico: regula el sebo y unifica el tono."]]},
"cl-biretix-hydramat-day-spf-30": {i: "Hidratante de día oil-free con SPF 30 para piel grasa: hidrata y repara la barrera, reduce el sebo y el brillo, renueva y protege del sol.", a: [
  ["Retinsphere® Technology", "Retinoides de alta tolerancia: renovación."],
  ["Complejo hidratante (ácido hialurónico, arginina)", "Hidratación duradera."],
  ["Sistema seborregulador (zinc, niacinamida, vitamina E)", "Reduce el sebo."], ["Skin Smoother", "Matifica."], FILT("químicos UV de amplio espectro (SPF 30)")]},
"cl-biretix-hydramat-day-spf-30-color": {i: "Hidratante con color y SPF 30 para piel grasa: regula el sebo, matifica, difumina imperfecciones y reduce las marcas postinflamatorias.", a: [
  ["Retinsphere® (retinol puro encapsulado)", "Renovación epidérmica."],
  ["Niacinamida, azeloglicina y pigmentos", "Regulan el sebo, unifican el tono y difuminan."], ["Microesferas de sílice", "Matifican."], FILT("de amplio espectro (SPF 30)")]},
"cl-biretix-gel": {i: "Gel reconfortante para mantener los resultados y reducir las recaídas tras los tratamientos del acné: mejora la textura e hidrata.", a: [
  ["Retinsphere® Technology", "Retinoides de alta tolerancia: renovación."], ["Papaína", "Exfoliante enzimático suave."], VITE,
  ["Factores de hidratación natural (R-NMF)", "Retienen el agua."], ["Aloe vera y bisabolol", "Calman."]]},
"cl-biretix-isorepair": {i: "Crema hidratante reparadora para piel resecada por tratamientos del acné: regenera, hidrata de forma duradera y reduce tirantez e irritación.", a: [
  SCA, HA(), ["Ceramidas", "Reparan la barrera y evitan la pérdida de agua."], ["Boswellia serrata", "Calmante."], VITE]},
"cl-biretix-isorepair-creamy-cleanser-limpiador-facial-cremoso": {i: "Limpiador cremoso para piel con acné sensibilizada por tratamientos desecantes: limpia sin comprometer la barrera, calma e hidrata.", a: [
  ["Base limpiadora syndet", "Limpia sin jabón ni agresión."], ["Niacinamida, pantenol y ceramidas veganas", "Calman y reparan la barrera."],
  ["Pentavitin®, glicerina y ácido hialurónico", "Booster de hidratación."]]},
"cl-biretix-isorepair-lip-balm-balsamo-labial": {i: "Bálsamo labial para los labios resecados por retinoides orales: imita la barrera de la piel, forma una capa protectora que reduce la pérdida de agua y mantiene la hidratación hasta 6 horas.", a: [
  ["Complejo de lípidos biomiméticos", "Imita la barrera lipídica: retiene la humedad y repara."], ["Pantenol", "Reparador e hidratante."], ["Bisabolol", "Calmante."]]},
"cl-biretix-tri-active-spray": {i: "Spray corporal para granos y marcas de pecho y espalda: renueva la piel, reduce microorganismos y despigmenta.", a: [
  ["Retinsphere® Technology", "Retinoides que estimulan la renovación."], ["BIOPEP-15", "Reduce los microorganismos."],
  ["Ácido glicólico 15 %", "AHA: renueva y atenúa marcas."], ["Niacinamida 4 %", "Antiinflamatoria y seborreguladora."]]},
"cl-neoretin-cleanser-limpiador-facial-antimanchas": {i: "Limpiador microexfoliante antimanchas de triple exfoliación (química, enzimática y física), con activos que unifican el tono.", a: [
  ["PHA (gluconolactona y ácido lactobiónico)", "Exfoliación química suave y bien tolerada."], ["Enzima de granada", "Exfoliación enzimática."],
  ["Partículas exfoliantes", "Exfoliación física."], ["Ácido tranexámico", "Reduce la pigmentación (regula MITF)."],
  NIA("Bloquea la transferencia de melanosomas."), ["Activo antipolución", "Protege de la contaminación."]]},
"cl-neoretin-serum-booster-fluid": {i: "Sérum despigmentante: actúa en varias fases de la síntesis de melanina y renueva la piel para unificar el tono.", a: [
  ["Pigment Control System", "Seis activos que actúan sobre la formación de la mancha en las fases de la síntesis de melanina."],
  ["Retinsphere® Technology", "Retinoides de alta tolerancia: renovación y retexturización."],
  NIA("Bloquea la transferencia de melanosomas."), ["Ácido salicílico", "Exfolia y favorece la renovación."]]},
"cl-neoretin-gelcream-spf-50": {i: "Gel-crema despigmentante con SPF 50: atenúa las manchas, previene su aparición protegiendo del sol y renueva la piel.", a: [
  ["Pigment Control System", "Activos que actúan sobre las fases de la síntesis de melanina."],
  ["Retinsphere® Technology", "Retinoides: renovación."], FILT("UVB y UVA")]},
"cl-neoretin-pigment-neutralizer-serum": {i: "Sérum unificador e iluminador para piel sensible, de día y noche, todo el año: previene y atenúa las manchas.", a: [
  ["Azelaic Aox-Tech", "Ácido azelaico en sistema que multiplica su penetración: despigmentante y antiinflamatorio."],
  ["Bakuchiol", "Activo vegetal similar a los retinoides sin su irritación: renovador e iluminador."], HA("Hidratación duradera.")]},
"cl-neoretin-discrom-control-concentrate": {i: "Solución concentrada despigmentante para melasma, léntigos, marcas de acné o manchas solares: exfolia con AHA y actúa sobre la pigmentación por varias vías.", a: [
  ["Ácido glicólico", "AHA: exfolia y renueva para eliminar el pigmento superficial."], ["Retinsphere® Technology", "Retinoides: renovación."],
  ["Ácido tranexámico", "Regula MITF y reduce la pigmentación."], NIA("Bloquea la transferencia de melanosomas."),
  ["Derivado del ácido azelaico", "Despigmentante."], ["Ácido elágico", "Despigmentante."]]},
"cl-neoretin-ultra-emulsion": {i: "Emulsión intensiva para hiperpigmentaciones persistentes (discromías, postinflamatoria): corrige el tono y la textura con retinoides y despigmentantes.", a: [
  ["RetinDuo® Technology", "Retinol + retinal + booster: renovación con alta tolerancia."],
  ["Ácido tranexámico", "Regula MITF y reduce la pigmentación."], NIA("Bloquea la transferencia de melanosomas."),
  ["Pool de despigmentantes complementarios", "Actúan sobre la mancha."], EDAF]},
"cl-neoretin-transition-crema": {i: "Crema de alta tolerancia para alternar con tratamientos despigmentantes o como mantenimiento: reduce la pigmentación y protege de la contaminación.", a: [
  ["Retinsphere® Technology", "Retinoides: renovación."], NIA("Reduce la pigmentación."),
  ["Pigment Control System", "Actúa sobre la síntesis de melanina."], EDAF, ["Activos hidratantes y suavizantes", "Mejoran la tolerancia."]]},
"cl-neoretin-peeling-despigmentante": {i: "Peeling domiciliario en discos (20 minutos): renueva la piel con ácidos y enzimas y potencia los despigmentantes posteriores.", a: [
  ["Retinsphere® (retinoide de nueva generación)", "Estimula la renovación epidérmica."],
  ["Ácidos shikímico, glicólico, cítrico y salicílico", "Exfoliación química."], ["McZyme-C Complex", "Exfoliación enzimática."],
  ["Ácido kójico, niacinamida, ácido elágico y vitamina C", "Despigmentantes: el kójico y la vitamina C inhiben la tirosinasa; la niacinamida bloquea la transferencia de melanosomas."]]},
"cl-neoretin-discrom-control-k-contorno-de-ojos": {i: "Contorno despigmentante intensivo: aclara la ojera pigmentada, unifica el tono, alisa líneas y protege de la contaminación.", a: [
  ["Ácido tranexámico", "Despigmentante."], ["Vitamina K óxido liposomada", "Mejora el color de la ojera."],
  ["Retinsphere® Technology", "Retinoides: unifican y alisan."], ["Pigment Control System", "Actúa sobre la síntesis de melanina."], EDAF]},
"cl-retincare": {i: "Producto sanitario para la xerosis, el fotoenvejecimiento (dermatoheliosis) y las alteraciones de la pigmentación: renueva la piel con ácido retinoico y ácido glicólico.", a: [
  ["Ácido retinoico 0,02 %", "La forma activa de la vitamina A (no necesita conversión): renueva la piel y estimula el colágeno."],
  ["Ácido glicólico 4 %", "AHA: exfolia y renueva."], ["Polyvinyl-A", "Componente de la fórmula."]]},
"cl-skin-resist-velvet-cleanser": {i: "Limpiador para piel sensible y reactiva: limpia y desmaquilla con tensioactivos suaves, calma y restaura la barrera.", a: [
  ["Aquammunist® Technology", "Agua termal con hidrobioma rico en algas diatomeas: calmante y protectora, ayuda a controlar la reactividad."],
  NIA("Refuerza la barrera."), ["Cúrcuma", "Antioxidante."], ["Pantenol", "Repara."], ["Tensioactivos syndet", "Limpian sin agredir."]]},
"cl-skin-resist-sensage-serum": {i: "Sérum para piel sensible reactiva: reduce la sensibilidad y la sequedad y actúa sobre el envejecimiento prematuro.", a: [
  ["Aquammunist® Technology", "Calmante y protectora: controla la reactividad."], NIA("Refuerza la barrera."),
  ["Extracto de chirimoya", "Mejora la barrera y reduce la sensibilidad."], ["Polipéptido retinol-like", "Acción antiedad similar al retinol."]]},
"cl-skin-resist-daily-fluid": {i: "Fluido diario para piel sensible reactiva: actúa en todos los componentes de la barrera para mejorar su resistencia, calma al instante y refresca.", a: [
  ["Aquammunist® Technology", "Calmante y protectora: controla la reactividad."], NIA("Refuerza la barrera."),
  ["Extracto de chirimoya", "Mejora la barrera y reduce la sensibilidad."]]},
"cl-skin-resist-daily-cream-crema-piel-sensible": {i: "Crema diaria rica para piel sensible reactiva: refuerza la barrera, hidrata intensamente y restaura el confort.", a: [
  ["Aquammunist® Technology", "Calmante y protectora: controla la reactividad."], NIA("Refuerza la barrera."),
  ["Extracto de chirimoya", "Mejora la barrera y reduce la sensibilidad."], ["Escualano y manteca de karité", "Nutren."]]},
"cl-skin-resist-sensage-eye-contorno-ojos-piel-sensible": {i: "Contorno para piel sensible: mejora la barrera, reduce la sensibilidad y actúa sobre las bolsas.", a: [
  ["Aquammunist® Technology", "Calmante y protectora."], NIA("Refuerza la barrera."),
  ["Extracto de chirimoya", "Reduce la sensibilidad."], ["Tetrapéptido Eyeseryl®", "Mejora la circulación: reduce las bolsas."]]},
"cl-rosacure-gentle-cleansing-gel": {i: "Limpiador calmante para piel con rosácea y capilares dilatados: limpia respetando su equilibrio.", a: [
  ["Metilsulfonilmetano (MSM)", "Calmante."], ["Ácido poliglutámico", "Muy hidratante."], ["Proteína de soja", "Suavizante."]]},
"cl-rosacure-fast": {i: "Gel para la fase aguda de la rosácea: combate el eritema y atenúa el picor y el escozor.", a: [
  ["Ácido poliglutámico", "Hidratante."], ["Dimetil sulfona (MSM)", "Calmante."], ["Butilciclohexanol", "Alivia el picor y el escozor."]]},
"cl-rosacure-intensive-spf-30": {i: "Emulsión de día con SPF 30 para rosácea: combate el eritema intermitente y permanente, atenúa picor y escozor y protege del sol.", a: [
  ["Ácido poliglutámico", "Hidratante."], ["Dimetil sulfona (MSM)", "Calmante."], ["Butilciclohexanol", "Alivia el picor y el escozor."], FILT()]},
"cl-rosacure-intensive-spf30-color": {i: "Emulsión de día con color y SPF 30 para piel con rojeces: calma, cubre las rojeces y protege del sol.", a: [
  ["Ácido poliglutámico", "Hidratante."], ["Dimetil sulfona (MSM)", "Calmante."], ["Butilciclohexanol", "Alivia el picor y el escozor."], FILT()]},
"cl-rosacure-ultra-spf-50": {i: "Crema de día SPF 50+ para rosácea: protección muy alta, contrarresta el eritema y atenúa picor y escozor.", a: [
  ["Magnolol", "Calmante."], ["Metilsulfonilmetano (MSM)", "Calmante."], ["Butilciclohexanol", "Alivia el picor y el escozor."], FILT()]},
"cl-rosacure-combi": {i: "Complemento alimenticio que contribuye al mantenimiento de la piel en condiciones normales, para la piel con rosácea.", a: [
  ["Metilsulfonilmetano (MSM)", "Fuente de azufre orgánico."], ["Cardo mariano (silimarina)", "Extracto vegetal antioxidante."],
  ["Zinc", "Contribuye al mantenimiento de la piel en condiciones normales."]]},
"cl-iraltone-aga": {i: "Complemento alimenticio para un cabello más fuerte: aporta los nutrientes que forman parte de la queratina y protección antioxidante.", a: [
  ["Aceite de semilla de calabaza", "Activo vegetal para el cuidado del cabello."], ["L-cistina", "Aminoácido que forma parte de la queratina."],
  ["Vitaminas del grupo B, C y E", "Mantenimiento del cabello y antioxidantes."], ["Zinc, cobre y selenio", "Mantienen el cabello en condiciones normales."]]},
"cl-iraltone-aga-plus": {i: "Complemento alimenticio reforzado para la caída crónica de origen hormonal: ayuda a regular los procesos hormonales implicados y a recuperar la densidad.", a: [
  ["Serenoa repens + aceite de semilla de calabaza", "Inhibidores naturales que ayudan a regular los procesos hormonales de la caída."],
  ["L-cistina", "Forma parte de la queratina."], ["Vitaminas D, B, C y E", "Mantenimiento del cabello y antioxidantes."], ["Zinc, selenio y cobre", "Mantienen el cabello."]]},
"cl-iraltone-aga-supreme": {i: "Complemento alimenticio con complejo 5α para el cuidado del cabello con caída de origen hormonal.", a: [
  ["Complejo 5α (Serenoa repens, aceite de calabaza, ciruelo africano y hoja de olivo con ácido oleanólico)", "Actúan sobre la vía de la 5-alfa reductasa, implicada en la caída hormonal."],
  ["Equisetum arvense (cola de caballo)", "Fuente de silicio."], ["L-cistina", "Forma parte de la queratina."]]},
"cl-iraltone-forte": {i: "Complemento alimenticio para la caída aguda: fortalece cabello y uñas y los protege del daño oxidativo.", a: [
  ["L-cistina", "Aminoácido clave en la formación de la queratina."], ["Glutatión", "Antioxidante potente."],
  ["Zinc y cobre", "Mantienen el cabello."], ["Vitaminas del grupo B", "Mantenimiento del cabello."]]},
"cl-iraltone-forte-melatonin": {i: "Complemento alimenticio para el cuidado integral del cabello, con queratina, vitaminas, oligoelementos y antioxidantes.", a: [
  ["Complejo Cistione (L-cistina + glutatión)", "Queratina y protección antioxidante."], ["Vitamina B6", "Necesaria para sintetizar cisteína."],
  ["Zinc y cobre", "Mantienen el cabello y su pigmentación."], ["Vitamina D", "Mantenimiento."], ["Melatonina", "Antioxidante."], ["Saffr'Activ® (azafrán)", "Activo vegetal de la fórmula."]]},
"cl-iraltone-hair-efflu-booster-bebible-anticaida": {i: "Complemento bebible para la caída estacional: mejora la estructura del cabello y estimula su crecimiento.", a: [
  ["Comino negro", "Activo vegetal."], ["Anagain Nu® (guisante germinado)", "Estimula el crecimiento."], ["Hydrocur® (cúrcuma)", "Antioxidante."],
  ["Probióticos (L. plantarum HP59)", "Completan la fórmula."], ["Precursores de colágeno (lisina, prolina, glicina)", "Aportan los componentes del colágeno."]]},
"cl-iraltone-hair-resilience-booster-bebible-densidad-capilar": {i: "Complemento bebible que ayuda a prevenir el envejecimiento del cabello y a aumentar su resiliencia.", a: [
  ["METFORHAIR®", "Tecnología exclusiva que potencia la resiliencia capilar frente a los signos del envejecimiento."],
  ["Calabaza, Saw Palmetto y ciruelo africano", "Activos vegetales para el equilibrio capilar."],
  ["Sulforaphan® (brócoli) e Hydrocur® (cúrcuma)", "Antioxidantes."], ["Precursores de colágeno", "Componentes estructurales."]]},
"cl-iraltone-anti-hair-loss-lotion": {i: "Loción anticaída de triple acción: frena la caída aguda y restaura el crecimiento natural del cabello.", a: [
  ["Serenoa repens", "Ayuda a regular la vía hormonal de la caída."], ["Péptidos análogos a IGF-1", "Imitan un factor de crecimiento del folículo."],
  ["Complejo activador de la vía Wnt/β-catenina", "Estimula la vía de crecimiento del folículo."], ["Antioxidantes", "Protegen el folículo."]]},
"cl-iraltone-2in1-lashes-eyebrows-serum-booster": {i: "Sérum potenciador de pestañas y cejas: estimula el crecimiento, refuerza el bulbo y aumenta densidad y grosor.", a: [
  ["Sympeptide XLASH", "Péptido que estimula el crecimiento."], ["Complejo activador de la vía Wnt/β-catenina", "Estimula el folículo."],
  ["Wharton Gel Complex® (ácido hialurónico + factores de crecimiento)", "Regenera el bulbo piloso."], ["D-pantenol", "Fortalece."]]},
"cl-iraltone-champu-fortificante": {i: "Champú fortificante para protocolos anticaída: estimula el folículo, refuerza la queratina e hidrata.", a: [
  ["Cafeína", "Energiza y estimula el folículo."], ["Tricoenergyzer", "Activo energizante."], ["Keratin Pro-Complex", "Refuerza la queratina."]]},
"cl-iraltone-champu-ds": {i: "Champú anticaspa: actúa sobre la descamación, el picor y el enrojecimiento con acción antifúngica, queratolítica y calmante.", a: [
  ["Aquammunist® Technology", "Calmante, antiinflamatoria y antiirritante."], ["Piroctona olamina + climbazol", "Antifúngicos anticaspa."],
  ["Pantenol", "Hidrata."], ["Ácido salicílico", "Queratolítico: despega las escamas."]]},
"cl-iraltone-champu-exfoliante-y-purificante": {i: "Champú exfoliante: elimina la caspa seca y las descamaciones de forma duradera y restaura la hidratación.", a: [
  ["Ácido salicílico 2 %", "Queratolítico: exfolia el cuero cabelludo."], ["Piroctona olamina", "Anticaspa."], ["Plantasil Micro®", "Componente de la fórmula."]]},
"cl-iraltone-champu-seborregulador": {i: "Champú seborregulador: controla la producción de grasa y elimina las impurezas.", a: [
  ["Matmarine (algas)", "Seborregulador."], ["Vitis vinifera", "Antioxidante."], ["Vitamina E", "Antioxidante."]]},
"cl-iraltone-champu-suave-uso-frecuente": {i: "Champú suave de uso frecuente: limpia con tensioactivos suaves y acondiciona el cabello. Cantabria no detalla activos concretos.", a: [
  ["Sistema limpiador", "Tensioactivos suaves en textura cremosa."], ["Sistema acondicionador", "Ingredientes naturales que nutren y protegen el cabello."]]},
"cl-iraltone-hair-scalp-care-barrier-comfort-shampoo-funcion-barrera-champu": {i: "Champú suave que refuerza la barrera del cuero cabelludo, alivia la sequedad y combate el envejecimiento del cabello.", a: [
  ["MetforHair®", "Tecnología patentada que potencia la resiliencia capilar."], NIA("Calmante.")]},
"cl-iraltone-hair-scalp-care-reset-shampoo-champu-purificante": {i: "Champú purificante no agresivo: equilibra la barrera y el microbioma, calma el picor y combate el envejecimiento del cabello.", a: [
  ["MetforHair®", "Tecnología patentada que potencia la resiliencia capilar."], ["Prebióticos", "Equilibran el microbioma."]]},
"cl-iraltone-hair-scalp-care-restore-conditioner-acondicionador-capilar-fibra": {i: "Acondicionador para cabello seco y dañado: refuerza la fibra, repara el daño y sella la cutícula contra el encrespamiento.", a: [
  ["MetforHair®", "Potencia la resiliencia capilar."], ["Queratina vegana", "Refuerza la fibra y repara el daño."]]},
"cl-iraltone-hair-scalp-care-perfect10-leave-in-acondicionador-sin-aclarado": {i: "Acondicionador sin aclarado con 10 beneficios: suaviza, reestructura, refuerza, desenreda, reduce el encrespamiento y protege del calor y del color.", a: [
  ["MetforHair®", "Potencia la resiliencia capilar."], ["Complejo de proteínas hidrolizadas", "Refuerza y reestructura la fibra."]]},
"cl-iraltone-hair-scalp-care-sublime-hair-oil-aceite-capilar": {i: "Aceite capilar: sella las puntas abiertas, aporta brillo y mejora la resistencia tras los tratamientos térmicos.", a: [
  ["MetforHair®", "Potencia la resiliencia capilar."], ["Complejo de aceites vegetales", "Nutre y sella las puntas."]]},
"cl-iraltone-ds-emulsion": {i: "Emulsión para la dermatitis seborreica facial: reduce la descamación, el eritema y el picor y reequilibra el microbioma.", a: [
  ["Microbioma Balance Tech®", "Reequilibra el microbioma cutáneo."], ["Ácido hialurónico 5 %", "Hidratación y confort."],
  ["Piroctona olamina + climbazol", "Antifúngicos."], ["Zinc", "Seborregulador."], ["Ácido glicirretínico", "Calmante."]]}
};
D.prods.forEach(p => { if (A[p.id]) p.d.accion = A[p.id]; });
})();
