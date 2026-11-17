/* «Cómo actúa» de los productos de Gema Herrerías.
   Fuente: bloque «Ingredientes clave» de la ficha oficial de cada producto (gemaherrerias.com),
   completado con los mecanismos de las páginas de teoría (Cosméticos, Patologías, La piel).
   Formato: id de producto → { i: resumen de cómo actúa, a: [[activo, qué hace], …] } */
(function(){
const INUL = ["Inulina", "Prebiótico: mantiene el equilibrio de la dermobiota y reduce el riesgo de irritación."];
const GLI = ["Glicerina", "Humectante: atrae y retiene la humedad."];
const RAL = (pct) => ["Retinaldehído puro " + pct + " en lipovesículas (LipoVes®)", "A un solo paso del ácido retinoico, actúa más rápido que el retinol; la liberación liposomal mejora su estabilidad y penetración y reduce la irritación."];
const SRH = (pct) => ["Sodium retinoyl hyaluronate " + pct, "Retinoide patentado que une ácido retinoico y ácido hialurónico: penetra mejor; antiacné (reduce sebo, poro y eritema) y antiedad (estimula el colágeno tipo I)."];
const PREPOST = ["Complejo pre/postbiótico", "Azúcares prebióticos y lactobacilos postbióticos que equilibran la dermobiota y refuerzan la barrera."];
const A = {
"gh-aceite-limpiador-desmaquillante": {i: "Aceite limpiador gel-to-milk: disuelve el maquillaje y la suciedad grasa (primer paso de la doble limpieza) mientras nutre y repara la barrera.", a: [
  ["Aceite de argán (primera presión en frío)", "Rico en ácidos grasos esenciales, vitamina E y polifenoles: antioxidante, regenerador y mejora la barrera."],
  ["Aceites de almendras dulces y jojoba", "Nutren, calman, hidratan y suavizan."],
  ["Caprylic/capric triglyceride", "Emoliente: forma una barrera que reduce la pérdida de agua."], ["Glicerina vegetal", "Humectante: hidratación profunda y duradera."]]},
"gh-kire-emulsion-limpiadora-x-cristina-mitre": {i: "Emulsión limpiadora: limpia con tensioactivos suaves de alta tolerancia mientras hidrata, calma e ilumina.", a: [
  ["Extracto de orquídea", "Regenerador e iluminador."], ["Extractos de pepino y aloe vera", "Nutritivos y calmantes."],
  ["Manteca de karité, glicerina y aceite de almendras", "Emolientes e hidratantes."], ["Tensioactivos suaves", "Gran poder limpiador con óptima tolerancia."]]},
"gh-limpiador-espumante-syndet": {i: "Limpiador espumante syndet: limpia sin jabón reforzando la barrera, mantiene la hidratación y equilibra la dermobiota.", a: [
  ["Complejo de aminoácidos biomimético", "En proporciones similares a las del estrato córneo: actúa como factor natural de hidratación, retiene el agua y reduce la descamación."],
  ["Isosorbida", "Humectante que reduce la pérdida de agua y estimula la aquaporina-3; regula la dermobiota frente a C. acnes y Malassezia."]]},
"gh-5-gel-limpiador-syndet": {i: "Gel limpiador syndet para piel grasa: limpia, regula el sebo y exfolia con suavidad respetando la dermobiota.", a: [
  ["Ácido succínico 0,5 %", "Seborregulador y exfoliante: alternativa suave al salicílico."], ["Extracto de malaquita", "Antioxidante."], INUL]},
"gh-limpiador-hidratante-desmaquillante": {i: "Limpiador micelar hidratante: desmaquilla, hidrata, calma y descongestiona.", a: [
  ["Ácido hialurónico", "Hidratante y revitalizante."], ["Extracto de pepino", "Calmante y descongestionante."],
  ["Extracto de manzanilla", "Hidrata y suaviza."], ["Extracto de algodón", "Hidrata y acondiciona."]]},
"gh-sistema-bifase-desmaquillante": {i: "Desmaquillante bifásico de ojos y labios: la fase oleosa disuelve el maquillaje y la acuosa lo arrastra protegiendo la piel de la irritación.", a: [
  ["Fase oleosa (dodecano + caprylic/capric triglyceride)", "Emolientes ligeros y volátiles que atrapan la grasa sin dejar residuo."],
  ["Fase acuosa (maltooligosil glucósido)", "Oligosacárido limpiador que crea una barrera protectora frente a la irritación del arrastre."], GLI]},
"gh-limpiador-en-polvo-enzimatico-uso-diario": {i: "Limpiador en polvo enzimático de uso diario: limpia sin alterar la barrera y exfolia sin fricción con enzimas que se activan al mezclarse con agua.", a: [
  ["Tensioactivos aminoacídicos (lauroil glutamato y cocoil glicinato)", "Limpian con eficacia respetando el pH y la barrera."],
  ["Papaína + bromelaína", "Enzimas que rompen las proteínas que unen los corneocitos: exfoliación suave sin fricción; la glucosa las activa."],
  ["Caolín", "Absorbe las impurezas del poro."]]},
"gh-peeling-8-pha-discos-piel-sensible": {i: "Peeling en discos para piel sensible: renueva y exfolia sin irritar, hidrata y protege el ácido hialurónico de la piel.", a: [
  ["Gluconolactona 8 % (PHA)", "Molécula más grande que los AHA: penetra más despacio y se tolera mejor. Renueva, hidrata y es antiglicación y antioxidante."],
  ["Ácido poliglutámico 0,1 %", "Hidratación duradera; aumenta el factor natural de hidratación e inhibe las hialuronidasas que degradan el ácido hialurónico."], INUL]},
"gh-peeling-10-aha-discos-piel-iniciacion": {i: "Peeling en discos de iniciación con 10 % de AHA: renueva la piel, favorece el colágeno y mejora textura, manchas y arrugas.", a: [
  ["Complejo de AHA 10 % (5 % glicólico, 2,5 % cítrico, 2,5 % málico)", "Rompen las uniones entre corneocitos: renovación celular y formación de colágeno."],
  ["Extractos de papaya, pepino y aloe vera", "Calmantes, antioxidantes e hidratantes."]]},
"gh-peeling-20-aha-discos-intensivos": {i: "Peeling intensivo en discos con 20 % de AHA: renueva, despigmenta y suaviza arrugas; indicado en acné y cicatrices.", a: [
  ["Complejo de AHA 20 % (8 % láctico, 7 % glicólico, 5 % cítrico)", "Renovador celular, despigmentante y antiarrugas."],
  ["Extracto de acerola", "Rico en vitamina C: antioxidante y estimula el colágeno."],
  ["Extracto de corteza de limón", "Antioxidante y despigmentante (quercetina y apigenina)."], ["Extracto de pepino", "Calmante y descongestionante."]]},
"gh-mascarilla-purificante-arcilla-mediterranea": {i: "Mascarilla purificante de arcilla: exfolia con enzimas, absorbe el sebo y las impurezas y limpia el poro.", a: [
  ["Papaína y bromelaína", "Enzimas que debilitan la adhesión de los corneocitos: exfoliación y renovación."],
  ["Caolín", "Regula el sebo, hidrata y limpia el poro."], ["Bentonita", "Absorbe impurezas y sebo."], ["Glucosa", "Humectante; estimula la regeneración."]]},
"gh-esencia-4fnh-x-cristina-mitre-locion-hidratante": {i: "Loción hidratante diaria: hidrata a varias profundidades con cuatro ácidos hialurónicos y restaura el factor natural de hidratación (FNH).", a: [
  ["Ácido hialurónico de alto/medio peso", "Forma un film que evita la pérdida de agua."],
  ["Ácido hialurónico acetilado", "Muy bajo peso: penetra más, resiste las hialuronidasas y repara la barrera."],
  ["Ácido hialurónico hidrolizado", "Bajo peso: hidrata en profundidad y mejora la firmeza."],
  ["Ácido hialurónico catiónico", "Se adhiere más a la piel: hidratación duradera; estimula acuaporinas y filagrina."],
  ["Complejo de sales minerales (2,5 %)", "Lactatos y PCA de manganeso, componentes del FNH: lo restauran."]]},
"gh-5-azelaic-s-x-cristina-mitre-locion-exfoliante": {i: "Loción exfoliante diaria: libera ácido salicílico de forma progresiva (apta incluso para piel sensible) para regular el sebo, limpiar el poro y unificar el tono.", a: [
  ["Tecnología gh SalicycAza-Tech® (2 % salicílico microencapsulado + 3 % azeloglicina)", "El salicílico se libera poco a poco hacia el estrato córneo, evitando picos de irritación; seborregula, limpia el poro e ilumina."],
  ["Extracto de algodón", "Hidrata y acondiciona."]]},
"gh-bruma-universal-dermobiota": {i: "Bruma de defensa diaria: refuerza la barrera y la dermobiota, protege de la contaminación e hidrata.", a: [
  ["Lactobacillus ferment lysate (postbiótico)", "Refuerza la barrera (claudina-1, filagrina, ceramidas) y reduce la pérdida de agua."],
  ["Tecnología Triplobiome™", "Antipolución, estimula colágeno y elastina y equilibra los lípidos."],
  ["Agua de rosa de Damasco", "Antioxidante y venotónica: favorece la microcirculación."], ["Pantenol", "Hidrata, calma y repara la barrera."]]},
"gh-5-cica-e-serum-piel-sensible": {i: "Sérum antioxidante para piel sensible: calma rojeces e inflamación, refuerza la barrera y estimula el colágeno.", a: [
  ["Derivado de vitamina E 5 % (fosfato de tocoferilo)", "Antioxidante muy biodisponible: aumenta las ceramidas, estimula el colágeno y reduce rojeces, ardor e inflamación (incluida la del sol y el acné)."],
  ["Tecnología Dermcom™ (bulbo de azafrán)", "Estimula los factores de crecimiento de los fibroblastos: más colágeno y elastina."],
  ["Centella asiática purificada", "Madecassoside y asiaticoside: reestructura, refuerza la barrera y estimula las ceramidas."]]},
"gh-15-antiox-c-serum-antioxidante": {i: "Sérum antioxidante antiedad con vitamina C liposoluble: protege de los radicales libres, ilumina, despigmenta y estimula el colágeno.", a: [
  ["Ascorbato de tetrahexildecilo 10 %", "Vitamina C estable y liposoluble que penetra bien y se convierte en vitamina C en la piel: antioxidante, inhibe la tirosinasa y estimula el colágeno I y IV."],
  ["Escualano Neossance™ 2 %", "Emoliente que refuerza la barrera y apoya la dermobiota."],
  ["Glucósido de glicerilo (Glycoin®)", "Hidrata, renueva, protege de la luz azul y apoya la dermobiota."], ["Inositol", "Osmolito que protege las células del estrés ambiental."]]},
"gh-12-azelaic-n-serum-imperfecciones": {i: "Sérum para imperfecciones: regula el sebo, despigmenta las marcas y calma las rojeces.", a: [
  ["Azeloglicina® 8 %", "Derivado del ácido azelaico: inhibe la tirosinasa, regula el sebo, hidrata e ilumina."],
  ["Niacinamida 4 %", "Calma rojeces, refuerza la barrera (ceramidas) y despigmenta."], ["Bisabolol", "Calmante y cicatrizante."]]},
"gh-10-nam-td-serum-despigmentante": {i: "Sérum despigmentante: actúa sobre la mancha por varias vías (frena la melanina, su transferencia y la inflamación del sol) y mejora la barrera.", a: [
  ["Ácido tranexámico 2,5 %", "Inhibe la tirosinasa, reduce la vascularización, bloquea la interacción melanocito-queratinocito y frena la vía plasminógeno/plasmina."],
  ["Niacinamida 5 %", "Bloquea la transferencia de melanina a los queratinocitos; antiinflamatoria y antiglicación."],
  ["Análogo de vitamina D3 1 %", "Mejora la barrera para tolerar mejor los despigmentantes; antioxidante y antiinflamatorio."]]},
"gh-600-retinal-r-serum-antiedad": {i: "Sérum antiedad con retinoides para piel sensible: renueva la piel y estimula el colágeno con buena tolerancia, equilibrando la dermobiota.", a: [
  RAL("0,05 %"), SRH("0,01 %"), PREPOST]},
"gh-2000-retinal-r-serum-antiedad": {i: "Sérum antiedad con tres retinoides para arrugas y manchas: renueva, estimula el colágeno y aclara el tono.", a: [
  RAL("0,1 %"),
  ["Retinol puro estabilizado 0,05 %", "Estimula colágeno, elastina y ácido hialurónico, acelera el recambio celular y disminuye la actividad de los melanocitos."],
  SRH("0,05 %")]},
"gh-3000-retinol-np-serum-antiedad": {i: "Sérum antiedad para arrugas y flacidez: renueva con retinol, calma con niacinamida y redensifica con un péptido.", a: [
  ["Retinol puro 0,3 %", "Retinoide (dos conversiones a ácido retinoico): estimula colágeno, elastina y ácido hialurónico, acelera el recambio y aclara manchas."],
  ["Niacinamida 4 %", "Antiinflamatoria: mejora la tolerancia del retinol; bloquea la transferencia de melanina."],
  ["Hexapéptido Serilesine® 1 %", "Estimula la laminina-5 y fortalece la unión dermoepidérmica: redensifica y reafirma."]]},
"gh-1600-retinal-z-serum-imperfecciones": {i: "Sérum para imperfecciones con retinoides: regula el sebo, mejora la textura, aclara las marcas y tiene acción antiedad.", a: [
  RAL("0,05 %"),
  ["Tocoferil retinoato 0,1 %", "Retinoide de cuarta generación (ácido retinoico + vitamina E): seborregulador, despigmentante y antiedad."],
  ["Complejo de hexapéptido de zinc 0,1 %", "Con actividad similar al retinol: regula el sebo y disminuye las imperfecciones."]]},
"gh-25-peptidos-th-serum-antiedad": {i: "Sérum de péptidos para arrugas y flacidez: activa el factor que estimula el colágeno, aumenta la densidad dérmica e hidrata a varias profundidades.", a: [
  ["Palmitoil tripéptido-5 (2,5 %)", "Activa el TGF-β, factor que estimula el colágeno y lo protege de la degradación; previene y revierte el fotoenvejecimiento."],
  ["Tetrapéptidos acetilados 11 y 9 (2 %)", "Estimulan proteoglicanos (lumican, syndecan-1) y el colágeno XVII: más densidad, volumen y menos arrugas."],
  ["Triple ácido hialurónico (0,3 %)", "Alto peso (film que evita la pérdida de agua), acetilado y hidrolizado (penetran e hidratan en profundidad)."]]},
"gh-25-peptidos-th-cremagel-roll-on-para-cuello-y-escote": {i: "Cremagel roll-on de péptidos para cuello y escote: estimula el colágeno, aumenta la densidad y reafirma.", a: [
  ["Palmitoil tripéptido-5 (2,5 %)", "Activa el TGF-β, que estimula el colágeno y lo protege de la degradación."],
  ["Tetrapéptidos acetilados 11 y 9 (2 %)", "Aumentan la densidad dérmica y reafirman."],
  ["Triple ácido hialurónico (0,3 %)", "Hidratación en superficie y en profundidad."]]},
"gh-triple-ceramida-serum-antiedad": {i: "Sérum antiedad para piel seca: repara la barrera con sus propios lípidos (ceramidas, colesterol y ácidos grasos) y estimula el colágeno.", a: [
  ["Triple ceramida liposomada (NP, NG y salicyloyl phytosphingosine)", "Reparan la barrera, hidratan de forma duradera; el derivado de ceramida estimula colágeno y fibrilina."],
  ["Ácidos grasos omega 3, 6, 7 y 9", "Hidratan en profundidad y nutren."],
  ["Colesterol", "Lípido clave de la barrera: la restaura y evita la pérdida de agua. Ceramidas + colesterol + ácidos grasos es la combinación ideal para reparar la barrera."],
  ["Elastina hidrolizada", "Mejora la elasticidad y reduce arrugas."]]},
"gh-10-aza-gz-crema-polvo-imperfecciones": {i: "Crema polvo para piel con acné o manchas: normaliza la queratinización, regula el sebo, reduce la pigmentación y limita los microorganismos, con extractos calmantes.", a: [
  ["Ácido azelaico 10 % micronizado (AzaPowder Complex®)", "Previene comedones, regula el sebo (inhibe la 5α-reductasa), reduce la pigmentación (inhibe la tirosinasa) y limita los microorganismos del acné."],
  ["Extractos de regaliz y jengibre", "Calmantes y antioxidantes: mejoran la tolerancia."]]},
"gh-funcion-barrera-crema-piel-seca": {i: "Crema para piel seca que repara la barrera: hidrata a varias profundidades y repone los lípidos de la piel.", a: [
  ["Tecnología gh BarrierFunction® (triple ácido hialurónico)", "Alto peso (film que evita la pérdida de agua), acetilado (penetra y repara la barrera) e hidrolizado (hidrata en profundidad)."],
  ["Ceramida NP", "Repara y preserva la barrera; antiinflamatoria."], ["Ácidos grasos omega 3, 6 y 9", "Equilibran y nutren la barrera."]]},
"gh-funcion-barrera-cremagel-piel-grasa": {i: "Cremagel ligero para piel grasa que repara la barrera: hidrata sin engrasar y repone los lípidos de la piel.", a: [
  ["Tecnología gh BarrierFunction® (triple ácido hialurónico)", "Hidrata en superficie y en profundidad y repara la barrera."],
  ["Ceramida NP", "Repara y preserva la barrera."], ["Ácidos grasos omega 3, 6 y 9", "Equilibran la barrera."]]},
"gh-funcion-barrera-formula-plus-antiedad-intensiva": {i: "Crema antiedad intensiva de péptidos: renueva el ácido hialurónico de la piel, relaja las arrugas de expresión y estimula colágeno y elastina.", a: [
  ["SYN®-HYCAN", "Tripéptido que activa el TGF-β: potencia el ácido hialurónico propio, el colágeno y los proteoglicanos; mejora la resistencia a la glicación."],
  ["Argireline® Amplified (acetil hexapéptido-8)", "Péptido inhibidor: compite con SNAP-25 y reduce la contracción muscular de las arrugas de expresión; además aumenta colágeno I y elastina."]]},
"gh-calmante-y-reparadora-x-boticaria-garcia-mano-de-santo": {i: "Crema calmante y reparadora para piel agredida: repara la barrera, reduce rojeces e irritación y regenera.", a: [
  ["Pantenol", "Repara la barrera estimulando ácidos grasos, colesterol y esfingolípidos; reduce el eritema."],
  ["Extracto de chirimoya", "Reduce la sensibilidad: activa el receptor cannabinoide tipo 2 y disminuye la inflamación y la rojez."],
  ["Centella asiática", "Reestructura e hidrata; refuerza la barrera."], ["Aceite de baobab", "Antioxidante, emoliente; regenera la barrera."],
  ["Extracto de regaliz", "Antioxidante, purificante y suavizante."]]},
"gh-funcion-barrera-mascarilla-ultrahidratante": {i: "Mascarilla ultrahidratante: hidrata, reestructura y calma la piel seca.", a: [
  ["Manteca de karité", "Hidratante, suavizante y regeneradora."], ["Alga rica en silicio", "Reestructurante y antiinflamatoria."],
  ["Doble ácido hialurónico (0,3 %)", "Hidratación y firmeza."], ["Extractos de granada y manzanilla", "Antioxidante y calmante."],
  ["Aceites de almendras y sésamo", "Hidratan y nutren."]]},
"gh-funcion-barrera-cremagel-corporal": {i: "Cremagel corporal: refuerza la barrera con lípidos, hidrata y equilibra la dermobiota.", a: [
  ["Ceramida NG", "Forma parte de los lípidos cementantes: reduce la pérdida de agua."],
  ["Escualano Neossance™", "Emoliente; refuerza la barrera y apoya la dermobiota."],
  ["Ácido hialurónico de alto peso 0,1 %", "Evita la pérdida de agua e hidrata."], ["Complejo pre/postbiótico", "Equilibra la dermobiota y reduce la incomodidad."]]},
"gh-funcion-barrera-balsamo-multifuncion": {i: "Bálsamo multifunción: restaura la barrera con lípidos y forma una película que retiene la humedad.", a: [
  ["Ceramida NG", "Lípido cementante: reduce la pérdida de agua."], ["Escualano Neossance™", "Emoliente que refuerza la barrera."],
  ["Tecnología HA-Oil", "Ácido hialurónico disperso en aceite: hidrata, mejora barrera y elasticidad; calma y repara."],
  ["Aceites de almendras y jojoba, ceras vegetales, glicerina y karité", "Nutren y forman una barrera que retiene la humedad."]]},
"gh-funcion-barrera-balsamo-labial-copia": {i: "Bálsamo labial: forma una película resistente que evita la pérdida de agua y protege de las agresiones, con alternativas naturales a la vaselina.", a: [
  ["Tecnología gh BioceraTech®", "Sistema lipídico natural oclusivo (sustituto de vaselina y aceite mineral), complejo de ceras y lipocera: protege, retiene el agua y favorece la regeneración."],
  ["Glicerina vegetal", "Humectante: mantiene la hidratación y previene las grietas."]]},
"gh-funcion-global-contorno-de-ojos": {i: "Contorno antiedad global: estimula el colágeno, reafirma, relaja las arrugas de expresión y actúa sobre ojeras y bolsas.", a: [
  ["Eye'fective™ 0,1 %", "Hidrata y mejora arrugas y firmeza estimulando el colágeno."],
  ["Hexapéptido Serilesine® 1 %", "Fortalece la unión dermoepidérmica: redensifica y reafirma."],
  ["Hexapéptido Inyline® 5 %", "Péptido inhibidor: bloquea el complejo agrina/MuSK y reduce la contracción muscular."],
  ["Complejo de flores blancas (espino blanco + jazmín)", "Mejora la microcirculación (ojeras vasculares y bolsas) y es antitirosinasa (ojeras pigmentarias)."],
  ["Té verde", "Xantinas y polifenoles: antioxidante; mejora bolsas y ojeras."], ["Karité y macadamia", "Nutren."]]},
"gh-k-at-serum-contorno-de-ojos": {i: "Sérum de contorno para ojeras y bolsas: reduce el color violáceo de las vasculares, aclara las pigmentarias y descongestiona las bolsas.", a: [
  ["Vitamina K óxido 1 %", "Reduce la coloración violácea de las ojeras vasculares: activa la microcirculación y evita la acumulación de hemosiderina."],
  ["Ácido tranexámico 0,5 %", "Aclara las ojeras pigmentarias (inhibe plasminógeno/plasmina y la tirosinasa) y reduce la vascularización."],
  ["Niosomas con diosmina, forskolina y palmitoil tetrapéptido-7", "Actúan sobre los factores causantes de las bolsas."]]},
"gh-factor-invisible-spf50-amplio-espectro": {i: "Fotoprotector SPF 50 invisible de acabado mate para piel grasa: protección de amplio espectro (UVB, UVA-II y UVA-I larga) y refuerzo de la barrera.", a: [
  ["Filtros orgánicos de última generación", "Absorben la radiación UVB y UVA y la transforman en energía no dañina; alta fotoestabilidad."],
  ["Tecnología gh BarrierSense®", "Lípidos afines a la epidermis que refuerzan la barrera y una matriz polisacárida que da acabado mate y efecto soft-focus."]]},
"gh-factor-fotobioma-spf50-amplio-espectro": {i: "Fotoprotector SPF 50+ de amplio espectro que protege también la dermobiota del daño solar y amplía la protección a luz visible y polución.", a: [
  ["Filtros orgánicos (BEMT, BMDM, EHS, EHT, PBSA)", "Absorben la radiación UVB y UVA (incluida UVA-I larga)."],
  ["Dióxido de titanio", "Filtro mineral: refleja y dispersa la radiación."],
  ["Photobiome™", "Prebiótico que estimula a las bacterias de la piel para que liberen sus propias moléculas de fotodefensa."],
  ["Niacinamida 3 %", "Amplía la protección frente a luz visible, infrarrojo y polución; repara el daño solar crónico."],
  ["Tecnología Energinius™", "Protege del daño de la luz visible (azul)."]]},
"gh-agederm-ceramide-complemento-alimenticio": {i: "Complemento alimenticio para piel con arrugas, flacidez o muy seca: aporta ceramidas, ácido hialurónico y ácidos grasos para la barrera, y niacina para el mantenimiento de la piel.", a: [
  ["Tecnología gh BarrierFunction® (fitoceramidas Ceramosides™, ácido hialurónico y aceites de linaza y onagra)", "Aportan esfingolípidos, ácido hialurónico y ácidos grasos."],
  ["Ashwagandha (KSM-66®)", "Extracto de raíz estandarizado en withanólidos."],
  ["Nicotinamida (niacina)", "Contribuye al mantenimiento de la piel en condiciones normales."], ["Bisglicinato de magnesio", "Aporte de magnesio."]]},
"gh-aoxderm-pigment-complemento-alimenticio": {i: "Complemento alimenticio para la piel con pigmentación: aporta dos precursores del NAD+ y luteína.", a: [
  ["Tecnología gh NAD+ Booster® (nicotinamida 500 mg + nicotinamida ribósido)", "Dos formas de niacina precursoras del NAD+ por rutas distintas; la niacina contribuye al mantenimiento de la piel."],
  ["Luteína microencapsulada", "Carotenoide antioxidante."]]},
"gh-probioderm-balance-complemento-alimenticio": {i: "Complemento alimenticio para piel con imperfecciones: probióticos, polifenoles de olivo, niacina y zinc para el mantenimiento de la piel.", a: [
  ["Tecnología gh Probioderm5® (5 cepas probióticas)", "4,75 x 10⁹ UFC por cápsula."],
  ["Extracto de olivo (oleuropeína e hidroxitirosol)", "Polifenoles antioxidantes."],
  ["Nicotinamida (niacina)", "Contribuye al mantenimiento de la piel."], ["Zinc liposomado", "Contribuye al mantenimiento de piel, cabello y uñas y protege del daño oxidativo."]]},
"gh-magnesio-global-complemento-alimenticio": {i: "Complemento alimenticio de magnesio: tres sales de magnesio con taurina y vitamina B6 activa; ayuda a disminuir el cansancio y la fatiga.", a: [
  ["Tecnología gh MultiMag Synergy® (bisglicinato, Sucrosomial® y malato de magnesio)", "200 mg de magnesio: metabolismo energético, sistema nervioso, músculos y cansancio."],
  ["Taurina", "Aminoácido azufrado."], ["Vitamina B6 activa (piridoxal-5-fosfato)", "Ayuda a disminuir el cansancio y la fatiga."]]},
"gh-omega-1500epa-dha-complemento-alimenticio": {i: "Complemento alimenticio de omega 3 (EPA y DHA) concentrado, con certificación IFOS de pureza.", a: [
  ["Aceite de pescado (1.000 mg EPA + 500 mg DHA)", "Contribuyen al funcionamiento normal del corazón; el DHA, al del cerebro y la visión."],
  ["Vitamina E", "Protege las células del daño oxidativo y estabiliza el aceite."]]}
};
D.prods.forEach(p => { if (A[p.id]) p.d.accion = A[p.id]; });
})();
