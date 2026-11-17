/* «Cómo actúa» de los productos de Sensilis.
   Fuente: descripción e «Ingredients» (activos clave) de la ficha oficial de cada producto (sensilis.com),
   completado con los mecanismos de las páginas de teoría (Cosméticos, Patologías, La piel).
   Formato: id de producto → { i: resumen de cómo actúa, a: [[activo, qué hace], …] } */
(function(){
const HA = ["Ácido hialurónico", "Hidrata en profundidad por su gran capacidad para retener agua."];
const PANT = ["Pantenol", "Regenerador y antiinflamatorio. Mejora la función barrera y reduce la pérdida de agua."];
const PREB = ["Prebióticos", "Reequilibran y mantienen la flora cutánea, y reducen la microinflamación."];
const BISA = ["Alfa-bisabolol", "Calmante y antiinflamatorio."];
const KARITE = ["Manteca de karité", "Hidrata, nutre y mantiene la función barrera íntegra. Regeneradora y suavizante."];
const REGALIZ = ["Extracto de regaliz", "Antiinflamatorio y antioxidante."];
const ZINC = ["Zinc PCA", "Ayuda a normalizar la secreción de sebo y refuerza la barrera hidrolipídica."];
const BUCHU = ["Aceite de hojas de buchú", "Seborregulador."];
const LINO = ["Extracto de lino", "Disminuye las rojeces de la piel sensible o irritada y protege de la deshidratación."];
const AVENA_P = ["Polisacáridos de avena", "Efecto lifting inmediato y acción antiarrugas a largo plazo."];
const ARROZ = ["Extracto de arroz rojo", "Aumenta la síntesis de colágeno: mejora la elasticidad, la firmeza y el tono."];
const AZAFRAN = ["Extracto de azafrán de las nieves", "Aporta elasticidad y firmeza y ayuda a unificar el tono."];
const SOJA = ["Extracto de soja", "Mejora la elasticidad y la firmeza y ayuda a unificar el tono."];
const VITE = ["Vitamina E", "Antioxidante potente: previene el fotoenvejecimiento."];
const CHALC = ["CM-Naringenin Chalcone", "Antiinflamatorio: reduce la catelicidina LL37, implicada en la rosácea. Disminuye visiblemente las rojeces y calma la piel sensible."];
const CAFE = ["Cafeína", "Alivia las bolsas y las ojeras."];
const HAMA = ["Extracto de hamamelis", "Descongestiona el contorno y disminuye bolsas y ojeras."];
const MANIL = ["Extracto de Manilkara (complejo antiglicación)", "Evita la degradación del colágeno y la elastina, reafirma y protege del estrés oxidativo. La glicación vuelve rígidas las fibras de colágeno y da un tono amarillento."];
const LUPIN = ["Extracto de Lupinus albus (potenciador de colágeno)", "Aumenta la síntesis de colágeno tipo 1."];
const CAMELIA = ["Aceite de camelia", "Refuerza la barrera hidrolipídica, disminuye la pérdida de agua y mantiene la piel suave."];
const EGF5 = ["5 factores de crecimiento (EGF, A-FGF, B-FGF, IGF y VEGF)", "Se unen a receptores de las células y activan la reparación y la síntesis de proteínas estructurales: regeneran, remodelan, aumentan la densidad de la dermis y reducen las arrugas."];
const RETPAL = ["Palmitato de retinilo liposomado", "Derivado del retinol (retinoide): estimula la renovación celular y el colágeno, y disminuye arrugas y líneas de expresión."];
const NIA = ["Niacinamida", "Antiinflamatoria, calmante y seborreguladora. Mejora la función barrera, es antioxidante y despigmenta al bloquear la transferencia de melanosomas."];
const PEPHD = ["Péptidos de alta definición", "Péptidos señal con acción lifting y antiarrugas: estimulan la síntesis de colágeno y elastina."];
const SALES = ["Sales orgánicas", "Ayudan a la oxigenación celular y a la formación de colágeno y elastina."];
const BAKU = ["Bakuchiol", "Activo vegetal con acción similar a los retinoides pero sin su potencial irritante: aumenta la síntesis de colágeno, reafirma y es antioxidante."];
const PENTA = ["Pentapéptidos", "Acción protectora celular."];
const A = {
"sen-calmin": {i: "Bálsamo de base oleosa para la doble limpieza: se funde, disuelve el maquillaje (incluso waterproof) y las impurezas, y calma la piel sensible.", a: [
  ["Aceite de aguacate", "Regenera y rejuvenece la piel."], BISA, KARITE]},
"sen-mousse": {i: "Espuma limpiadora sin jabón (syndet): limpia respetando el pH, la microbiota y el manto lipídico, mientras hidrata y calma.", a: [
  HA, PANT, ["Betaína", "Nutritiva y protectora."], PREB]},
"sen-purify": {i: "Gel limpiador purificante: elimina impurezas, minimiza los poros y normaliza la secreción de sebo sin efecto rebote.", a: [
  ZINC, BUCHU, LINO, HA, PANT]},
"sen-succinic": {i: "Limpiador en 3 fases (gel, aceite y leche) para piel mixta o grasa: controla el sebo, reduce imperfecciones, hidrata y calma.", a: [
  ["Ácido succínico", "Alternativa suave al salicílico: regula la producción de sebo, estimula el colágeno y unifica el tono."],
  ["Aceite de caléndula", "Calmante y regenerador: reduce la inflamación y mejora la barrera cutánea."],
  ["Aceite de centella asiática", "Estimula el colágeno, favorece la reparación y calma."]]},
"sen-micellar": {i: "Agua micelar: las micelas atrapan maquillaje e impurezas sin necesidad de aclarado, mientras hidrata, calma y restaura la barrera de la piel sensible y con rojeces.", a: [
  HA, REGALIZ, PREB]},
"sen-biphasic": {i: "Desmaquillante bifásico: la fase oleosa disuelve el maquillaje resistente al agua y la acuosa limpia, con máxima tolerancia ocular.", a: [
  ["Alfa-bisabolol + betaína", "Calman, hidratan y protegen la piel."],
  ["Aceite de bambú", "Remineralizante, tonificante y reestructurante."]]},
"sen-palpebral": {i: "Emulsión 2 en 1: desmaquilla y trata los párpados sensibles, irritados o con tendencia a eccema, calmando el picor y reparando la barrera.", a: [
  ["Aceite de babasú", "Hidrata, repara y calma el picor."], BISA, REGALIZ, KARITE,
  ["Aceite de almendras dulces", "Suavizante y nutritivo."]]},
"sen-micropeelfoam": {i: "Espuma limpiadora microexfoliante despigmentante: renueva la superficie y actúa sobre las manchas desde el primer paso de la rutina, respetando la barrera.", a: [
  ["Ácido tranexámico 0,5 %", "Reduce la pigmentación (regula MITF), la inflamación y las rojeces."],
  ["Gluconolactona 0,5 % + enzimas de granada", "Exfoliación suave: elimina células muertas para una piel más luminosa y uniforme."],
  ["Niacinamida", "Bloquea la transferencia de melanosomas: unifica el tono. Refuerza la barrera."]]},
"sen-blackpeel": {i: "Peeling físico: hace una microdermoabrasión suave que elimina por fricción las células muertas, alisa el relieve y aporta luminosidad inmediata.", a: [
  ["Partículas de corindón", "Exfolian por su superficie irregular."],
  ["Carbón vegetal", "Controla el exceso de grasa y elimina suciedad e impurezas."],
  ["Vitamina C", "Antioxidante: protege de los radicales libres y mejora firmeza y elasticidad."],
  KARITE, ["Ceras de jojoba, mimosa y girasol", "Suavizantes."]]},
"sen-toner": {i: "Tónico purificante: minimiza los poros y regula la secreción de sebo sin efecto rebote, a la vez que hidrata.", a: [
  ZINC, BUCHU, LINO, HA, ["Extracto de hamamelis", "Astringente y descongestivo."]]},
"sen-coolrescue": {i: "Bruma calmante: refresca al instante, hidrata y calma incluso la piel más sensible.", a: [
  HA, ["Betaína", "Nutritiva y protectora."], PANT, PREB]},
"sen-upgradeday": {i: "Crema reafirmante de día: efecto tensor inmediato y, a largo plazo, estimula el colágeno para elevar los rasgos y redefinir el óvalo.", a: [
  AVENA_P, ARROZ, AZAFRAN, VITE]},
"sen-upgradear": {i: "Crema sorbete reafirmante para piel sensible: tensa al instante, estimula el colágeno y calma las rojeces.", a: [
  AVENA_P, ARROZ, CHALC, ["Ginkgo biloba", "Calma la piel y es antiinflamatorio; útil en las rojeces."]]},
"sen-upgradefluid": {i: "Fluido reafirmante con acabado mate: alisa las arrugas desde la primera aplicación y estimula el colágeno.", a: [
  AVENA_P, ARROZ]},
"sen-upgradeserum": {i: "Gel-sérum reafirmante: hidrata, reduce la flacidez y suaviza las arrugas estimulando el colágeno.", a: [
  HA, AZAFRAN, SOJA, ARROZ]},
"sen-upgradenight": {i: "Crema reafirmante de noche: estimula el colágeno, remodela y potencia la renovación de la piel mientras duermes.", a: [
  BAKU, ARROZ, VITE, ["Lespedeza capitata", "Antioxidante y detoxificante: tono más homogéneo, luminoso y descansado."]]},
"sen-upgradeeyes": {i: "Contorno reafirmante: reduce la flacidez del contorno y descongestiona bolsas y ojeras.", a: [
  SOJA, AVENA_P, CAFE, HAMA]},
"sen-eternday": {i: "Crema de día antiglicación para piel madura: protege el colágeno y la elastina de la glicación, estimula colágeno nuevo y regenera la dermis.", a: [
  MANIL, LUPIN, EGF5, CAMELIA]},
"sen-eternretinol": {i: "Crema de noche antiedad: renueva y estimula el colágeno con un retinoide suave, frena la glicación e hidrata.", a: [
  RETPAL, MANIL, LUPIN, NIA, HA]},
"sen-eternretinolserum": {i: "Sérum de retinol para piel sensible: corrige y rellena las arrugas, con efecto lifting inmediato.", a: [
  RETPAL, ["Ácido hialurónico de peso molecular medio", "Hidrata capas intermedias y mejora la elasticidad."],
  ["Péptidos miméticos", "Ayudan a prevenir imperfecciones, irregularidades y signos de la edad."]]},
"sen-eternalistretexp": {i: "Tratamiento de noche con retinol puro microencapsulado, apto incluso en rosácea: la fricción rompe la cápsula y libera el retinol poco a poco, que corrige arrugas, flacidez y pérdida de barrera.", a: [
  ["Retinol puro 0,3 % microencapsulado", "Retinoide (necesita dos conversiones a ácido retinoico): renueva la piel y estimula el colágeno. La cápsula lo protege de la oxidación, la luz y el calor."],
  ["Péptido biomimético de colágeno IV", "Aumenta la síntesis de colágeno."], NIA,
  ["Extracto de Citrus reticulata", "Calma, reduce las rojeces y la reactividad."]]},
"sen-eternserumai": {i: "Sérum antiglicación y antiinflamaging: protege el colágeno, regenera la dermis y ayuda a disminuir las rojeces.", a: [
  MANIL, LUPIN, ["Diosmina", "Antiinflamatoria y venotónica: aumenta la resistencia de los capilares y mejora la circulación."], EGF5, CAMELIA]},
"sen-eterneyes": {i: "Bálsamo de contorno: corrige arrugas, difumina bolsas y ojeras y reafirma el párpado; el aplicador metálico descongestiona.", a: [
  MANIL, LUPIN, CAFE, ["Alantoína", "Calma, suaviza y regenera la piel."]]},
"sen-peptidetriserum": {i: "Tri-sérum que actúa sobre el origen del envejecimiento con tres activos: péptidos para las tres dimensiones de la arruga, energía celular y regeneración.", a: [
  ["Péptidos 3 dimensiones", "5 % Argireline (péptido inhibidor: relaja las arrugas de expresión), 3 % Matrixyl (péptido señal: rellena desde dentro) y 2 % Uplevity (mejora la flacidez y el contorno)."],
  ["NAD+", "Coenzima que aporta energía a las células y participa en la reparación del ADN."],
  ["PDRN", "Regenerador: favorece la reparación de los tejidos y estimula el colágeno."]]},
"sen-peptidecream": {i: "Crema sorbete lifting y calmante: tensa al instante, mejora firmeza y elasticidad, hidrata y calma la sensibilidad.", a: [
  PEPHD, CHALC, HA, SALES]},
"sen-peptidebalm": {i: "Bálsamo sorbete ultrarrico lifting y calmante: tensa al instante, mejora firmeza y elasticidad, repara la sequedad y calma la sensibilidad.", a: [
  PEPHD, CHALC, HA, SALES]},
"sen-peptideeyelisss": {i: "Contorno lifting: relaja las arrugas de expresión, eleva el párpado, ilumina e hidrata; el aplicador metálico facilita el masaje.", a: [
  ["Péptido SYN®-AKE (4 %)", "Péptido inhibidor con efecto similar al veneno de serpiente: relaja la contracción muscular superficial y reduce las arrugas de expresión."],
  ["Complejo antioxidante (SOD + ácido ferúlico)", "Neutraliza los radicales libres e ilumina."], HA,
  ["Cafeína y ginkgo biloba", "Atenúan bolsas y ojeras."]]},
"sen-peptideretiv": {i: "Perlas regeneradoras de noche con retinol vegetal: estimulan el colágeno, mejoran su calidad y ayudan a la piel sensible a gestionar el estrés.", a: [
  BAKU, ["Skinarch™ Peptide", "Aumenta las 4 familias de colágeno, evita su degradación y acelera el ensamblaje de sus fibras."],
  ["Turmerina Zen (cúrcuma)", "Neurocosmético: modula la respuesta al estrés y reduce el cortisol en la piel."],
  ["Aceite de Limnanthes alba", "Rico en omega 3: hidratante, suavizante y antioxidante."]]},
"sen-originserum": {i: "Sérum regenerador global: los factores de crecimiento activan la reparación y la densidad de la dermis sobre todos los signos de la edad.", a: [
  EGF5, PENTA, ["Polisacárido", "Antipolución."]]},
"sen-origincream": {i: "Crema rica regeneradora global: los factores de crecimiento activan la reparación y la densidad de la dermis, mientras nutre y calma.", a: [
  EGF5, PENTA, ["Extracto de avena", "Calma, hidrata y protege."]]},
"sen-origineyes": {i: "Contorno regenerador con pigmentos beige que iluminan al instante: los factores de crecimiento activan la reparación de la piel del contorno.", a: [
  EGF5, PENTA, ["Pigmentos beige", "Iluminan y disimulan las ojeras."]]},
"sen-originproexo": {i: "Crema de regeneración avanzada con exosomas: restaura la comunicación entre células y reactiva sus procesos naturales de reparación. Útil tras láser no ablativo.", a: [
  ["Exosomas de células madre de goji", "Calman, favorecen la reparación y revitalizan la piel."],
  ["Exosomas de centella asiática", "Calman y favorecen la reparación."],
  ["Colágeno recombinante", "Mejora firmeza, elasticidad e hidratación."],
  ["NAD+", "Coenzima del metabolismo energético celular que participa en la reparación."]]},
"sen-supremeday": {i: "Crema de día antioxidante con SPF 15: protege las células de las agresiones externas y de los radicales libres, mejora elasticidad y firmeza e hidrata.", a: [
  ["Moringa oleifera", "Protege las células de las agresiones externas."], HA,
  ["Extracto de arroz", "Rico en sirtuinas, proteínas relacionadas con la reparación y la longevidad celular."]]},
"sen-supremenight": {i: "Crema-gel de noche detox: repara la piel de las agresiones del día, activa la renovación celular y estimula el colágeno.", a: [
  ["Tripéptido encapsulado en liposomas", "Activa la renovación celular y mejora la superficie de la piel."], HA,
  ["Extracto de Chondrus crispus (alga)", "Energizante y antioxidante."]]},
"sen-supremebooster": {i: "Sérum antioxidante y antipolución: neutraliza los radicales libres que aceleran el envejecimiento, ilumina y protege la piel sensible.", a: [
  ["Ácido ferúlico", "Antioxidante muy bien tolerado: protege de la radiación UV y la contaminación y unifica el tono."],
  ["Vitamina C", "Antioxidante: protege de los radicales libres y mejora firmeza y elasticidad."], VITE, HA,
  ["Moringa oleifera", "Protege las células de las agresiones externas."]]},
"sen-supremeeyes": {i: "Contorno que rellena y alisa las arrugas, hidrata y atenúa el color de las ojeras.", a: [
  ["Microesferas de ácido hialurónico", "Absorben la humedad de la piel y se expanden para rellenar las arrugas desde dentro."],
  ["Extracto de hibisco", "Descongestionante."],
  ["Tripéptido «botox like»", "Péptido inhibidor: relaja las arrugas de expresión."]]},
"sen-glowserum": {i: "Sérum revitalizante: reactiva la vitalidad celular de la piel apagada, ilumina, hidrata y estimula el colágeno.", a: [
  ["Vitamina C", "Antioxidante: protege de los radicales libres y mejora firmeza y elasticidad."],
  ["Revitalizing Complex (zinc, cobre y magnesio)", "Estimula la autofagia y la vitalidad celular; antioxidante. Potencia la luminosidad, la hidratación y el colágeno."], HA]},
"sen-glowcream": {i: "Crema hidratante de luminosidad inmediata: reactiva la vitalidad de la piel apagada, hidrata y refuerza la barrera.", a: [
  HA, PANT, ["Revitalizing Complex (zinc, cobre y magnesio)", "Estimula la autofagia y la vitalidad celular; antioxidante."], NIA,
  ["Vitamina F", "Rica en ácidos grasos: nutre y mejora la barrera lipídica."]]},
"sen-glowglycolic": {i: "Gel de noche renovador con 8 % de ácido glicólico: exfolia para devolver la luz a la piel apagada, unifica el tono y alisa, con activos calmantes para tolerarlo incluso en piel sensible.", a: [
  ["Ácido glicólico 8 %", "AHA de referencia: rompe las uniones entre corneocitos, exfolia y estimula la renovación celular."],
  ["Revitalizing Complex (zinc, cobre y magnesio)", "Estimula la vitalidad celular; antioxidante."], HA,
  ["Tasmannia pepper 2 %", "Antiinflamatorio y calmante: reduce al instante el picor y las rojeces."]]},
"sen-glowkeyes": {i: "Contorno corrector de ojeras vasculares y pigmentarias: mejora su color, ilumina al instante con pigmentos beige e hidrata.", a: [
  ["Vitamina K óxido liposomada", "Mejora la coloración de las ojeras vasculares."],
  ["Niacinamida", "Despigmenta (bloquea la transferencia de melanosomas) para las ojeras pigmentarias; calmante."],
  ["Revitalizing Complex (zinc, cobre y magnesio)", "Estimula la vitalidad celular; antioxidante."], HA,
  ["Cafeína y ginkgo biloba", "Descongestionan el contorno."]]},
"sen-skinglowhighlighter": {i: "Corrector iluminador: sus perlas nacaradas aportan luz al instante, difuminan las ojeras y dan un efecto lifting visible.", a: [
  HA, ["Vitamina C", "Antioxidante: protege de los radicales libres."]]},
"sen-skinglowbronze": {i: "Gotas bronceadoras: sus pigmentos ultrafinos dan un tono dorado inmediato y modulable, mientras hidratan.", a: [
  HA, VITE]},
"sen-dpigmentserum": {i: "Sérum despigmentante para piel sensible que actúa en varios puntos de la formación de la mancha: reduce la pigmentación, impide que llegue a la superficie y unifica el tono.", a: [
  ["Ácido tranexámico", "Regula MITF y reduce la pigmentación; de elección en el melasma. Disminuye la inflamación y las rojeces."],
  ["Niacinamida", "Bloquea la transferencia de melanosomas a los queratinocitos; calmante y antiinflamatoria."],
  ["Vitamina C", "Antioxidante y despigmentante: inhibe la tirosinasa."],
  ["Azeloglicina", "Derivado del ácido azelaico muy bien tolerado: unifica el tono, ilumina y regula el sebo."]]},
"sen-dpigmentaha10": {i: "Crema despigmentante de noche: renueva la superficie para eliminar el pigmento con ácidos muy bien tolerados y frena la formación de nuevas manchas.", a: [
  ["Ácido maltobiónico y gluconolactona (PHA)", "Polihidroxiácidos de alta tolerancia: exfolian con suavidad, mejoran tono y textura, son antioxidantes y fortalecen la barrera."],
  ["Ácido elágico liposomado", "Unifica el tono e ilumina."],
  ["Alfa-arbutina", "Derivado suave de la hidroquinona: inhibe la tirosinasa y previene las manchas sin irritar."]]},
"sen-dpigmentcolordrops": {i: "Maquillaje fluido anhidro de alta cobertura: oculta las imperfecciones y unifica el tono, con activos que ayudan con las manchas.", a: [
  ["Biofermento de esclarea", "Ayuda a despigmentar las manchas; iluminador, calmante y antioxidante."],
  ["Vitamina C", "Antioxidante: protege de los radicales libres."],
  ["Sílice", "Matifica y regula el sebo."]]},
"sen-rescuebarrier": {i: "Crema reparadora de la barrera: repone los lípidos que le faltan, hidrata intensamente, calma y reduce las rojeces.", a: [
  ["Ceramidas EOP, NS, NP, AS y AP", "Las ceramidas son cerca del 50 % de los lípidos del estrato córneo: reparan la barrera y reducen la pérdida de agua."],
  ["4 tipos de ácido hialurónico (elastómero, peso medio, bajo y acetilado)", "Hidratan a distintas profundidades y ayudan a recuperar la barrera."], PREB, REGALIZ]},
"sen-rescueserum": {i: "Sérum SOS calmante y reparador: reduce el enrojecimiento, restaura la barrera y regenera.", a: [
  CHALC, PANT, NIA, EGF5]},
"sen-skinrescuemistsos": {i: "Bruma calmante de uso diario para piel sensible y con rojeces: alivia la incomodidad y la protege de las microagresiones (temperatura, contaminación, estrés, roce).", a: [
  PREB, NIA, ["Extracto de Citrus reticulata", "Calma, reduce las rojeces y la reactividad."]]},
"sen-pureageserum": {i: "Sérum oil-free de doble corrección para piel grasa y sensible: exfolia y reduce imperfecciones y marcas, y a la vez estimula el colágeno contra las arrugas.", a: [
  ["Ácido mandélico", "AHA de alta tolerancia: exfolia, mejora la textura, reduce imperfecciones, marcas y poros. Antibacteriano y antiinflamatorio."],
  ["Extracto de centella asiática", "Repara, regenera y calma."],
  ["Factor de crecimiento TGF-β2", "Estimula la síntesis de colágeno."], PREB]},
"sen-pureageretinal": {i: "Sérum de noche oil-free con retinal para piel grasa y sensible: acelera la renovación celular, estimula el colágeno y redensifica.", a: [
  ["Retinal encapsulado en nanovesículas", "Retinaldehído: solo necesita una conversión a ácido retinoico, más potente que el retinol y mejor tolerado que la tretinoína. Acelera la renovación, estimula colágeno, elastina y ácido hialurónico, y es antibacteriano."],
  ["Factor de crecimiento TGF-β2", "Estimula la síntesis de colágeno."],
  ["Silicio orgánico", "Evita el deterioro del colágeno y la elastina; aporta firmeza."], PREB]},
"sen-pure15az": {i: "Concentrado anti-imperfecciones para piel sensible con acné: limpia el poro por dentro, regula el sebo, calma la inflamación y repara la barrera.", a: [
  ["Ácido azelaico 15 %", "Antiinflamatorio, despigmentante y apto en embarazo. Elimina células muertas de la superficie y del interior del poro, reduce granos y puntos negros y previene las marcas."],
  ["Ácido salicílico", "BHA liposoluble: penetra en el poro, lo desobstruye y controla el sebo."],
  ["Pantenol y Pantodium", "Reparadores y calmantes: refuerzan la barrera."],
  ["Pre y postbióticos", "Refuerzan el microbioma cutáneo y la barrera."]]},
"sen-pureisorelief": {i: "Gel-crema reparador para piel grasa deshidratada o fragilizada por isotretinoína oral o peróxido de benzoilo: repara la barrera, calma las rojeces e hidrata sin engrasar.", a: [
  ["Pre y postbióticos", "Refuerzan el microbioma cutáneo y la barrera."],
  ["Pantenol y Pantodium", "Reparadores y calmantes: refuerzan la barrera y alivian la incomodidad."], NIA,
  ["Zinc", "Seborregulador, antimicrobiano y calmante."]]},
"sen-pureoilcontrolpads": {i: "Discos de micropeeling seborregulador: exfolian, desobstruyen los poros y reducen los puntos negros, y previenen las manchas postacné.", a: [
  ["Ácido salicílico", "BHA liposoluble: penetra en el poro, lo desobstruye y controla el sebo."],
  ["Ácido mandélico", "AHA de alta tolerancia: exfolia y reduce imperfecciones, marcas y poros. Antibacteriano."],
  ["Niacinamida", "Antiinflamatoria y seborreguladora; unifica el tono."],
  ["Azeloglicina", "Unifica el tono, previene las manchas postacné y regula el sebo."]]},
"sen-hyaluronicfillerserum": {i: "Concentrado rellenador que actúa sobre el ácido hialurónico de la piel en tres frentes: estimula que se fabrique (+89 %), lo protege de la oxidación y evita que se degrade.", a: [
  ["3 tipos de ácido hialurónico (acetilado, peso medio e hidrolizado)", "Hidratan y rellenan a distintas profundidades."],
  ["GABA (ácido aminobutírico)", "Estimula la producción de ácido hialurónico; antiarrugas."],
  ["Superóxido dismutasa y hongo de las nieves", "Antioxidantes que protegen el ácido hialurónico."],
  ["Glicirricinato dipotásico", "Inhibe la hialuronidasa, la enzima que degrada el ácido hialurónico."]]},
"sen-hyaluronicpuffyeyes": {i: "Gel antibolsas: reduce bolsas y ojeras y actúa sobre el ácido hialurónico del contorno (estimula, protege y evita su degradación); el aplicador metálico refresca.", a: [
  ["Puffless Complex", "Combinación específica para reducir las bolsas."],
  ["GABA (ácido aminobutírico)", "Estimula la producción de ácido hialurónico; antiarrugas."],
  ["Extracto de hongo de las nieves", "Antioxidante e hidratante; inhibe la IL-6 y reduce el inflammaging."],
  ["Glicirricinato dipotásico", "Inhibe la hialuronidasa, la enzima que degrada el ácido hialurónico."]]},
"sen-hyaluronicfillerlips": {i: "Tratamiento labial voluminizador: efecto relleno inmediato, nutre y repara; ayuda a recuperar y prolongar los rellenos de labios.", a: [
  ["Hyaluronic Filling Spheres™", "Esferas de ácido hialurónico con efecto relleno inmediato."],
  ["MAXI-LIP™ (péptido voluminizador)", "Aumenta la hidratación, reduce las líneas y mejora la firmeza a largo plazo."],
  ["Extracto de pimienta y jengibre", "Rubefacción suave: mejora la microcirculación y la percepción de volumen."]]},
"sen-hydrasorbet": {i: "Gel-crema ultrahidratante: hidrata, calma y protege la piel sensible y con rojeces con confort inmediato y duradero.", a: [
  HA, ["Centella asiática", "Repara, regenera y calma."],
  ["Extracto acuoso de karité", "Refuerza la barrera hidrolipídica y evita la deshidratación."],
  ["Extracto de granada", "Hidratante: mejora las acuaporinas (canales de agua de la piel)."]]},
"sen-hydracream": {i: "Crema ultrahidratante rica para piel seca: hidrata, nutre, calma y refuerza la barrera de la piel sensible y con rojeces.", a: [
  HA, ["Centella asiática", "Repara, regenera y calma."],
  ["Extracto acuoso de karité", "Refuerza la barrera hidrolipídica y evita la deshidratación."],
  ["Extracto de granada", "Da elasticidad e hidrata: mejora las acuaporinas."],
  ["Aceite de argán", "Hidrata y nutre."]]},
"sen-hydraction": {i: "Stick labial: hidrata, protege y previene el envejecimiento de la fina piel de los labios.", a: [
  VITE, KARITE, ["Schisandra chinensis", "Aumenta la firmeza y la elasticidad; antiedad."]]},
"sen-prepdrops": {i: "Sérum acelerador exfoliante: afina el estrato córneo para que los activos antiedad posteriores (péptidos, factores de crecimiento) penetren mejor, y mantiene la barrera calmada.", a: [
  ["Ácido glicólico 8 %", "AHA de referencia: rompe las uniones entre corneocitos y estimula la renovación."],
  ["Ácido mandélico 5 %", "AHA de alta tolerancia: exfolia, mejora la textura y reduce imperfecciones y poros."],
  ["Péptido biomimético exfoliante", "Refuerza la exfoliación con propiedades regeneradoras."],
  ["Ectoína", "Escudo celular: retiene la hidratación, repara la barrera y reduce inflamación y rojez."],
  ["Tasmannia pepper 2 %", "Calma al instante el picor y las rojeces."]]},
"sen-prep4polish": {i: "Mousse microexfoliante: hace una microdermoabrasión suave con dos tamaños de partícula que eliminan por fricción células muertas e impurezas sin dañar la barrera.", a: [
  ["Microcristales de cuarzo 5 % (200 μm)", "Exfolian con suavidad y renuevan la textura."],
  ["Microfibras de celulosa 10 % (300 μm)", "Potencian la exfoliación mecánica."], KARITE, REGALIZ]},
"sen-azelaic": {i: "Loción retexturizante en gel para piel sensible: regula el sebo, aclara las manchas y reduce las rojeces.", a: [
  ["Azeloglicina", "Derivado del ácido azelaico muy bien tolerado: regula el sebo, unifica el tono e ilumina."],
  ["Ácido tranexámico", "Reduce la pigmentación (regula MITF), la inflamación y las rojeces."], CHALC, PREB]},
"sen-photoha": {i: "Fotoprotector SPF 50+ hidratante y antiarrugas de base acuosa: protege de UVA, UVB y luz azul y reduce el eritema que provoca el sol.", a: [
  ["Provitamina D2 3 %", "Disminuye el eritema inducido por la radiación UV y refuerza la barrera."],
  ["Extracto de Physalis angulata", "Calma, protege y regenera; antiinflamatorio y antioxidante."], HA]},
"sen-photohacolor": {i: "Fotoprotector SPF 50+ con color, hidratante y antiarrugas: protege de UVA, UVB y luz azul, reduce el eritema solar y unifica el tono.", a: [
  ["Provitamina D2 3 %", "Disminuye el eritema inducido por la radiación UV y refuerza la barrera."],
  ["Extracto de Physalis angulata", "Calma, protege y regenera; antiinflamatorio y antioxidante."], HA]},
"sen-photocorrpure50": {i: "Fotoprotector seborregulador y anti-imperfecciones: protege de 6 factores (UVA, UVB, luz azul, infrarrojos, contaminación y oxidación), regula el sebo y disimula marcas y rojeces.", a: [
  ["Azeloglicina", "Regula el sebo y unifica el tono."], PREB,
  ["Ácido lactobiónico", "Hidratante y renovador."],
  ["Pigmento verde de interferencia", "Neutraliza visualmente las rojeces y unifica el tono."]]},
"sen-photopure": {i: "Fotoprotector SPF 50+ matificante para piel grasa y con acné: protege de UVA, UVB y luz azul y controla el sebo.", a: [
  ["Azeloglicina", "Regula el sebo, unifica el tono e ilumina."],
  ["Microesferas de sílice", "Matifican y regulan el sebo."],
  ["Ácido lactobiónico", "Hidratante y renovador."]]},
"sen-photoar": {i: "Fotoprotector SPF 50+ antirrojeces y reafirmante para piel con rosácea o cuperosis: protege de UVA, UVB y luz azul, calma y estimula el colágeno.", a: [
  CHALC, ARROZ, ["Extracto de Physalis angulata", "Calma, reduce las rojeces y refuerza la barrera."], AVENA_P]},
"sen-photodpigment": {i: "Mousse solar SPF 50+ con color: protege de UVA, UVB y luz azul (la luz visible también estimula la melanina) y difumina las manchas. Filtros no nano y no solubles en agua.", a: [
  ["Biofermento de esclarea", "Ayuda a despigmentar las manchas; iluminador, calmante y antioxidante."],
  ["Vitamina C", "Antioxidante: protege de los radicales libres."]]},
"sen-photocorrectionmineral": {i: "Fotoprotector 100 % mineral, sin filtros químicos, para piel reactiva: los filtros minerales reflejan y dispersan la radiación UVA y UVB.", a: [
  BISA, ["Physalis angulata", "Calmante y antioxidante: reduce la inflamación."],
  ["Extracto de caléndula", "Calma y alivia la irritación."], HA]},
"sen-nevermistmespf50": {i: "Bruma solar facial SPF 50: protege de UVA y UVB, es antioxidante y lleva activos antiedad, hidratantes y calmantes. Se puede reaplicar sobre el maquillaje.", a: [
  HA, ["Extracto de hierba sagrada", "Ayuda a reparar el ADN."],
  ["Extracto de Pisum sativum (guisante)", "Antiedad."],
  ["Alantoína", "Calma, suaviza y regenera."]]},
"sen-sticktosport": {i: "Stick solar SPF 50+ resistente al agua y al sudor: protege de UVA y UVB y ayuda a mantener la barrera de la piel.", a: [
  ["Centella asiática", "Repara, regenera y calma."],
  ["Sphingoceryl", "Hidratante y reparador: fortalece la barrera."]]},
"sen-waterfluid": {i: "Fluido solar ultraligero que protege de 6 factores (UVA, UVB, luz azul, infrarrojos, contaminación y oxidación) mientras hidrata.", a: [
  HA, ["Bisabolol", "Reduce la irritación y las rojeces y favorece la reparación."],
  ["Carnosina", "Antioxidante."]]},
"sen-waterfluidcolor": {i: "Fluido solar con color: protege de todo el espectro, da cobertura natural, unifica el tono y deja acabado mate.", a: [
  HA, ["Alantoína", "Calma, suaviza y regenera."],
  ["Schisandra chinensis", "Aumenta firmeza y elasticidad; antiedad."], VITE]},
"sen-oilcontrol": {i: "Fotoprotector de toque seco para piel grasa: protege de 6 factores y controla el sebo y los brillos hasta 7 horas sin resecar.", a: [
  ["Full Spectrum", "Protección frente a UVA, UVB, luz azul e infrarrojos."],
  ["Sílice", "Absorbe el sebo, matifica y minimiza los poros."], HA,
  ["Carnosina", "Antioxidante."], ["Bisabolol", "Reduce la irritación y las rojeces."]]},
"sen-oilcontrollight": {i: "Fotoprotector de toque seco con color (tono claro) para piel grasa: protege de 6 factores, unifica el tono y controla el sebo y los brillos hasta 7 horas.", a: [
  ["Full Spectrum", "Protección frente a UVA, UVB, luz azul e infrarrojos."],
  ["Sílice", "Absorbe el sebo, matifica y minimiza los poros."], HA,
  ["Carnosina", "Antioxidante."], ["Bisabolol", "Reduce la irritación y las rojeces."]]},
"sen-oilcontrolmedium": {i: "Fotoprotector de toque seco con color (tono medio) para piel grasa: protege de 6 factores, unifica el tono y controla el sebo y los brillos hasta 7 horas.", a: [
  ["Full Spectrum", "Protección frente a UVA, UVB, luz azul e infrarrojos."],
  ["Sílice", "Absorbe el sebo, matifica y minimiza los poros."], HA,
  ["Carnosina", "Antioxidante."], ["Bisabolol", "Reduce la irritación y las rojeces."]]},
"sen-mattgel": {i: "Gel solar invisible matificante y antiedad: protege del sol con activos hidratantes, antioxidantes, protectores del ADN y calmantes.", a: [
  HA, ["Alantoína", "Calma, suaviza y regenera."],
  ["Schisandra chinensis", "Aumenta firmeza y elasticidad; antiedad."], VITE]},
"sen-gelcream": {i: "Fotoprotector antiedad en gel-crema: protege del sol, hidrata como una crema y ayuda a reparar el daño del ADN.", a: [
  ["Glicerina", "Humectante: retiene el agua en la capa córnea."],
  ["DNA Save Complex (Eriodictyon californicum + Pisum sativum)", "Repara el ADN, regenera y calma."],
  ["Alantoína", "Calma, suaviza y regenera."], VITE]},
"sen-solarallergy": {i: "Fluido facial de muy alta protección para piel con alergia solar: protege, hidrata y neutraliza el daño solar.", a: [
  HA, BISA, VITE]},
"sen-pediatrics": {i: "Fotoprotector infantil en spray de base acuosa: protege del sol y calma; su color violeta ayuda a ver dónde se ha aplicado.", a: [
  ["Alantoína", "Calma, suaviza y regenera."], VITE, ["Aloe vera", "Hidratante."]]},
"sen-drytouch": {i: "Bruma solar corporal de toque seco: protege del sol, se puede aplicar sobre piel mojada o seca y se seca al instante.", a: [
  HA, VITE]},
"sen-dryoiltanoptim": {i: "Aceite seco corporal SPF 50: protege del sol y, a la vez, estimula la producción natural de melanina para un bronceado más rápido y uniforme.", a: [
  ["Extracto de Persicaria tinctoria", "Estimula 3 veces la melanogénesis; antiinflamatorio y estimula la producción de vitamina D."],
  ["Aceites ultraligeros", "Absorción inmediata sin tacto graso."], VITE,
  ["Moringa oleifera", "Protege las células de las agresiones externas."]]},
"sen-sticktoglow": {i: "Stick solar SPF 50+ con acabado perlado: protege de UVA y UVB, ilumina y ayuda a reducir la hiperpigmentación.", a: [
  ["Bright Oleoactif®", "Reduce la hiperpigmentación."], VITE]},
"sen-sticktosnow": {i: "Stick solar SPF 50+ para la nieve, resistente al agua y al sudor: protege de UVA y UVB con acabado invisible.", a: [VITE]},
"sen-aftersun": {i: "Emulsión after-sun: hidrata, calma y repara la piel sometida al estrés oxidativo del sol, con efecto frío.", a: [
  ["Alfa-bisabolol + alantoína", "Calman, regeneran e hidratan, reduciendo la irritación."],
  ["Extracto de Physalis angulata", "Calma, reduce las rojeces y refuerza la barrera."],
  ["Centella asiática", "Repara, regenera y calma."]]},
"sen-selftannbronze": {i: "Toallitas autobronceadoras (tono bronze): colorean la capa más superficial de la piel sin sol. Según Sensilis, el color aparece en unas 3 horas y se adapta al tono natural; desaparece a medida que se renueva el estrato córneo. Sensilis no detalla sus activos.", a: []},
"sen-selftanngold": {i: "Toallitas autobronceadoras (tono gold): colorean la capa más superficial de la piel sin sol. Según Sensilis, el color aparece en unas 3 horas y se adapta al tono natural; desaparece a medida que se renueva el estrato córneo. Sensilis no detalla sus activos.", a: []},
"sen-hairdsshampoo": {i: "Champú anticaspa sin sulfatos para cuero cabelludo graso y sensible: limita la proliferación de Malassezia, elimina las escamas, controla el sebo y calma el picor.", a: [
  ["Climbazol + ciclopirox olamina", "Antifúngicos: limitan la proliferación de Malassezia."],
  ["Ácido salicílico", "Queratolítico y seborregulador: despega las escamas."],
  ["Alfa-bisabolol", "Calmante y antiinflamatorio."],
  ["Pantenol", "Antipruriginoso y reparador de la barrera."]]},
"sen-hairdscontrol": {i: "Loción sin aclarado para rostro, cuerpo y cuero cabelludo con descamación seborreica: controla la Malassezia, elimina escamas, regula el sebo, calma y reequilibra el microbioma.", a: [
  ["Caprilato de propanodiol / ácido caprílico", "Antifúngicos."],
  ["Ácido salicílico + ácido láctico", "Queratolíticos y seborreguladores."],
  ["Niacinamida + zinc PCA + glicirricinato dipotásico", "Calmantes y antiinflamatorios."],
  ["Alfa-glucano oligosacárido + Lactobacillus ferment", "Equilibran el microbioma."]]},
"sen-hairsuplement": {i: "Nutricosmético bebible con 24 activos: reactiva el crecimiento, nutre el folículo, refuerza la queratina y protege el cabello del envejecimiento.", a: [
  ["Serenoa repens, semillas de calabaza y Prunus africana", "Reactivan el crecimiento."],
  ["Sílice, zinc, hierro, cobre y vitaminas A, B3, B5, B6, B8, B9 y D3", "Nutren el folículo."],
  ["Hoja de olivo, cúrcuma, astaxantina, CoQ10 y vitamina E", "Antioxidantes que protegen la longevidad del cabello."]]},
"sen-prepshampoo": {i: "Champú preparador sin sulfatos: limpia y exfolia el cuero cabelludo para preparar los tratamientos anticaída, refuerza el anclaje del cabello y repara la barrera.", a: [
  ["Ácido glicólico + ácido succínico", "Limpian y exfolian en profundidad."],
  ["Niacinamida + pantenol", "Regulan y reparan la barrera del cuero cabelludo."],
  ["Extracto de Phyllanthus emblica", "Fortalece la fibra, protege del estrés oxidativo y mejora el anclaje."],
  ["Células madre de Olea europaea", "Protegen el folículo del estrés oxidativo."]]},
"sen-hairlotion": {i: "Loción anticaída con exosomas: reactiva los folículos, mantiene el pelo más tiempo en fase de crecimiento, frena su afinamiento y fortalece el anclaje.", a: [
  ["Exosomas de cúrcuma", "Reactivan el crecimiento."],
  ["Péptido de cobre", "Péptido transportador que evita la miniaturización del folículo."],
  ["Extracto de Phyllanthus emblica", "Fortalece la fibra y mejora el anclaje."],
  ["Células madre de Olea europaea", "Protegen el folículo del estrés oxidativo."]]},
"sen-createurdinstants": {i: "Fragancia (eau de toilette) floral y fresca, con notas de bergamota, jazmín y peonía. No es un tratamiento: no actúa sobre la piel.", a: []},
"sen-bodyretinol": {i: "Loción corporal reafirmante con retinol: acelera la renovación celular para reducir arrugas, unificar el tono y aclarar manchas, e hidrata.", a: [
  ["Palmitato de retinilo en liposomas", "Retinoide: estimula la renovación celular y el colágeno; piel más lisa, firme y luminosa."],
  ["Urea", "Hidrata, favorece la barrera y reduce la descamación de la piel seca."], KARITE]},
"sen-glycolicbodytreatment": {i: "Loción corporal exfoliante con tres AHA: renueva la superficie para alisar la textura, mejorar las asperezas y aclarar el tono.", a: [
  ["Ácido glicólico", "AHA de referencia: rompe las uniones entre corneocitos y estimula la renovación."],
  ["Ácido láctico", "Exfolia con suavidad e hidrata."],
  ["Ácido málico", "Exfoliación suave y progresiva; unifica el tono."],
  ["Diosmina", "Venotónica y antiinflamatoria: refuerza los capilares y mejora la circulación."], KARITE]},
"sen-bodyglowcerine": {i: "Loción corporal 3 en 1: hidrata, repara la barrera y retiene el agua, y unifica el tono al instante.", a: [
  ["Glicerina", "Humectante: retiene el agua en la capa córnea."], NIA,
  ["Perlas soft-focus", "Efecto perfeccionador inmediato."]]},
"sen-encoresoir": {i: "Fragancia (eau de toilette) floral amaderada con jazmín, azahar e iris. No es un tratamiento: no actúa sobre la piel.", a: []},
"sen-merveilleusesdifferences": {i: "Fragancia (eau de toilette) floral cítrica con bergamota, limón, naranja, jazmín y rosa búlgara. No es un tratamiento: no actúa sobre la piel.", a: []},
"sen-pureagemakeup": {i: "Maquillaje fluido de alta cobertura para piel grasa: cubre las imperfecciones y, a la vez, regula el sebo, las trata y repara la barrera. Acabado mate.", a: [
  ZINC, NIA, ["Ácido lactobiónico", "Hidratante y renovador."],
  ["Superóxido dismutasa", "Antioxidante muy potente."],
  ["Ceramidas", "Reparan y fortalecen la barrera y evitan la pérdida de agua."]]},
"sen-photomakeup": {i: "Maquillaje en crema despigmentante SPF 50+: disimula manchas e imperfecciones, ayuda a corregirlas y protege de UVA y UVB.", a: [
  ["Biofermento de esclarea", "Ayuda a despigmentar las manchas; iluminador y antioxidante."],
  ["Ácido hialurónico de bajo peso molecular", "Penetra más: hidratación intensa y elasticidad."],
  ["Schisandra chinensis", "Firmeza y elasticidad."], BISA, VITE]},
"sen-glowmakeup": {i: "Maquillaje antioxidante: aporta luminosidad inmediata a la piel apagada y estimula el colágeno.", a: [
  ["Vitamina C", "Antioxidante: protege de los radicales libres."],
  ["Revitalizing Complex (zinc, cobre y magnesio)", "Estimula la vitalidad celular; antioxidante."], HA]},
"sen-upgrademakeup": {i: "Maquillaje en crema con efecto lifting luminoso: cubre (media-alta cobertura), reafirma, ilumina y corrige las arrugas.", a: [
  AVENA_P, ARROZ, SOJA, VITE]},
"sen-coveressencespot": {i: "Corrector en stick de alta cobertura para camuflar manchas e hiperpigmentaciones.", a: [
  ["Aceite de jojoba", "Antioxidante, emoliente y nutritivo."], VITE]},
"sen-coveressencered": {i: "Corrector verde en stick: el verde neutraliza el rojo y disimula rojeces y cicatrices.", a: [
  ["Aceite de jojoba", "Antioxidante, emoliente y nutritivo."],
  ["Aceite de girasol", "Filmógeno: mejora la hidratación."]]},
"sen-velvetskin": {i: "Corrector líquido de alta cobertura que rellena y difumina arrugas y líneas al instante, unifica el tono e ilumina.", a: [
  ["Microesferas de ácido hialurónico", "Absorben la humedad de la piel y se expanden para rellenar las arrugas desde dentro."]]},
"sen-blush": {i: "Colorete en polvo hidratante con acabado aterciopelado.", a: [
  ["Aceite de argán", "Hidrata y nutre."], ["Aceite de albaricoque", "Hidratante, suavizante y antioxidante."], VITE]},
"sen-bonboncreamblush": {i: "Colorete en crema con acabado satinado que da un rubor natural y luminoso.", a: [VITE]},
"sen-terracotta": {i: "Polvos bronceadores iluminadores e hidratantes que dan calidez a la piel con acabado sedoso.", a: [
  ["Manteca de murumuru", "Muy hidratante; da el acabado sedoso."]]},
"sen-invisiblematte": {i: "Polvos translúcidos matificantes: absorben los brillos, fijan el maquillaje y no aportan color.", a: [
  ["Aceite de macadamia", "Refuerza la barrera y protege de la deshidratación y la descamación."]]},
"sen-skinglowpearl": {i: "Iluminador con perlas nacaradas ultrafinas que da luz al instante, con activos que cuidan la piel.", a: [
  NIA, HA, PANT]},
"sen-ownthematte": {i: "Labial mate ultracremoso de color intenso que hidrata sin cuartearse.", a: [HA, VITE]},
"sen-eternallips": {i: "Labial líquido mate que no transfiere y dura 8 horas sin resecar.", a: [
  ["Aceite de aguacate", "Regenera la piel."], ["Vitamina C", "Antioxidante."]]},
"sen-rougefondant": {i: "Barra de labios de cobertura media que nutre y da brillo.", a: [
  HA, ["Aceite de rosa mosqueta", "Rico en ácidos grasos y antioxidantes: nutre y favorece la regeneración."]]},
"sen-lipglowoil": {i: "Gloss de aceites que da brillo y color y repara la barrera de los labios.", a: [
  ["Microesferas de ácido hialurónico", "Absorben agua y se expanden para rellenar las líneas."],
  ["Aceite de semilla de frambuesa", "Nutre, calma las rojeces y protege."], VITE]},
"sen-peptidelipcolo": {i: "Gloss voluminizador «picante»: da volumen inmediato (2-4 horas) activando la microcirculación, y estimula colágeno y ácido hialurónico a largo plazo.", a: [
  ["Palmitoil tripéptido-1", "Péptido señal: estimula el colágeno y el ácido hialurónico y mejora la elasticidad."],
  ["Chili", "Vasodilatador: activa la microcirculación y aumenta el volumen aparente."]]},
"sen-eyeliner": {i: "Delineador líquido negro, waterproof e intransferible, de larga duración. Es maquillaje; Sensilis no detalla activos de tratamiento.", a: []},
"sen-jumbo": {i: "Delineador y sombra en lápiz cremoso, waterproof y de larga duración. Es maquillaje; Sensilis no detalla activos de tratamiento.", a: []},
"sen-infiniteeyes": {i: "Lápiz de ojos automático waterproof de larga duración, apto para la línea de agua.", a: [
  ["Vitamina C y vitamina E", "Antioxidantes."]]},
"sen-lecrayon": {i: "Lápiz kajal ultracremoso de alta intensidad que dura 24 horas.", a: [
  ["Aceite de jojoba", "Antioxidante, emoliente y nutritivo."]]},
"sen-lestylo": {i: "Delineador automático waterproof de punta ultrafina, de color intenso hasta 24 horas.", a: [
  ["Aceite de ricino", "Hidrata la pestaña desde la raíz y ayuda a prevenir su caída."]]},
"sen-sublime": {i: "Máscara curvadora y voluminizadora que además cuida las pestañas.", a: [
  ["Aceite de ricino", "Hidrata la pestaña desde la raíz y ayuda a prevenir su caída."]]},
"sen-endless": {i: "Máscara de longitud: se adhiere a cada pestaña sin apelmazar, y su cepillo cónico alcanza las más pequeñas.", a: [
  ["Pantenol", "Regenerador."], ["Aceite de jojoba", "Emoliente y nutritivo."],
  ["Aceite de girasol", "Filmógeno: mejora la hidratación."]]},
"sen-mascaramegavolumen": {i: "Máscara de volumen extremo que fortalece las pestañas.", a: [
  ["Biotina (vitamina B7)", "Ayuda a mantener la salud del pelo."], ["Pantenol", "Regenerador."],
  ["Aceite de ricino", "Hidrata la pestaña desde la raíz y ayuda a prevenir su caída."]]},
"sen-eyeconicmasc": {i: "Máscara tubing de alta definición: envuelve cada pestaña en una película que dura hasta 24 horas, waterproof y sin manchar. Sensilis no detalla activos de tratamiento.", a: []},
"sen-daymascara": {i: "Máscara de tratamiento en gel para pestañas y cejas: las fortalece, regenera y aporta volumen y longitud natural.", a: [
  ["Arginina", "Penetra en la fibra del pelo y la fortalece."], ["Niacinamida", "Calmante y antioxidante."]]},
"sen-nightmascara": {i: "Máscara de tratamiento de noche para pestañas y cejas: nutre el folículo y las fortalece.", a: [
  ["Aceite de ricino", "Hidrata la pestaña desde la raíz y ayuda a prevenir su caída."], VITE]}
};
D.prods.forEach(p => { if (A[p.id]) p.d.accion = A[p.id]; });
})();
