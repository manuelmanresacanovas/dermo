/* «Cómo actúa» de los productos de Filorga.
   Fuente: apartado «Formula» de la ficha oficial de cada producto (filorga.com), traducido,
   completado con los mecanismos de las páginas de teoría (Cosméticos, Patologías, La piel).
   Formato: id de producto → { i: resumen de cómo actúa, a: [[activo, qué hace], …] } */
(function(){
const NCEF = ["Complejo NCEF", "Complejo polirrevitalizante exclusivo de Filorga, inspirado en la mesoterapia: ácido hialurónico, vitaminas, aminoácidos, minerales, coenzimas y antioxidantes. Estimula la revitalización celular y mejora la calidad global de la piel."];
const HA = t => ["Ácido hialurónico", t || "Retiene agua (hasta 1.000 veces su peso): hidrata y rellena la piel."];
const MGF = ["Complejo Micro-Growth Factor (péptido FGF)", "Péptido biomimético de factor de crecimiento, microfragmentado para penetrar 10 veces más en la epidermis. Los factores de crecimiento se unen a receptores de las células y activan la síntesis de proteínas estructurales: estimula la producción natural de colágeno y reafirma."];
const FILTROS3 = ["3 filtros orgánicos (químicos) de nueva generación", "Absorben la radiación UVA y UVB y la transforman en energía no dañina: protección de amplio espectro."];
const AP5 = ["5 ácidos micropeeling + zinc + agente multipurificante", "Cóctel seborregulador: los ácidos exfolian y desobstruyen el poro, y el conjunto reduce poros, rojeces, brillos, granos y puntos negros."];
const AHP = ["Ácido hialurónico + péptidos + glicopéptidos", "Activos alisantes, rellenadores y voluminizadores que suavizan las arrugas y los signos de la edad."];
const A = {
"fil-age-purify-clean": {i: "Gel limpiador de doble corrección: limpia y desobstruye los poros de la piel con imperfecciones y, a la vez, aporta activos alisantes antiarrugas.", a: [AHP, AP5]},
"fil-age-purify-intensive": {i: "Sérum de doble corrección para piel con arrugas e imperfecciones: alisa y rellena las arrugas, y regula el sebo para reducir granos, poros y brillos con un efecto equilibrante duradero.", a: [AHP, AP5]},
"fil-age-purify": {i: "Fluido de doble corrección para piel con arrugas e imperfecciones: alisa y rellena las arrugas, regula el sebo y protege de la contaminación.", a: [AHP, AP5,
  ["Polisacárido protector antiadherente", "Forma un escudo que protege la piel de la contaminación."]]},
"fil-aha-cleansing-gel": {i: "Gel limpiador exfoliante: combina ácidos de distinto tamaño para exfoliar en profundidad y alisar la superficie de la piel mientras limpia.", a: [
  ["3 AHA de molécula pequeña (mandélico, cítrico y glicólico)", "Rompen las uniones entre corneocitos, eliminan las células muertas y estimulan la renovación."],
  ["Gluconolactona (PHA)", "Polihidroxiácido de molécula más grande: exfolia con suavidad, se tolera muy bien e hidrata."]]},
"fil-daily-peel-dark-spots": {i: "Peeling diario antimanchas que combina tres formas de actuar: exfolia para eliminar el pigmento de la superficie, impide que la melanina llegue a las capas superiores y regula su producción.", a: [
  ["Advanced Peel Complex al 10 % (ácido láctico, ácido mandélico y piruvato sódico)", "AHA suaves aptos para uso diario: eliminan células muertas y renuevan la superficie."],
  ["Niacinamida", "Bloquea la transferencia de melanosomas a los queratinocitos."],
  ["Ácido tranexámico", "Regula la pigmentación (actúa sobre MITF) y ayuda a reducir las manchas."],
  NCEF]},
"fil-daily-peel-wrinkles": {i: "Peeling diario antiarrugas: exfolia con suavidad para alisar la textura y estimula el colágeno con un activo similar al retinol. Apto incluso para piel sensible.", a: [
  ["Advanced Peel Complex al 10 % (ácido láctico, ácido mandélico y piruvato sódico)", "AHA suaves aptos para uso diario: eliminan células muertas y renuevan la superficie."],
  ["Activo similar al retinol", "Alisa arrugas y líneas finas y estimula la síntesis natural de colágeno."],
  NCEF]},
"fil-daily-repair-mineral-uv-50": {i: "Fotoprotector diario con filtro 100 % mineral que, además, refuerza la barrera cutánea y reduce las rojeces; su tono verde las corrige al instante.", a: [
  ["Filtro mineral", "Refleja y dispersa la radiación UV."],
  ["Amino Acid Restore Complex al 2 %", "Refuerza la barrera cutánea, reduce las rojeces y el riesgo de irritación."],
  ["Ceramidas", "Refuerzan la barrera y previenen la pérdida de agua."],
  ["Centella asiática", "Calmante y reparadora."]]},
"fil-enzymatic-cleansing-foam": {i: "Espuma limpiadora sin sulfatos con exfoliación enzimática: acelera la eliminación natural de las células muertas para una piel más luminosa.", a: [
  ["Papaína estabilizada", "Enzima exfoliante, más suave que los ácidos; ideal para piel sensible."]]},
"fil-enzymatic-exfoliating-cream": {i: "Exfoliante de doble acción, mecánica y enzimática: limpia en profundidad, elimina impurezas y afina los poros respetando la barrera.", a: [
  ["Papaína estabilizada", "Exfoliación enzimática suave."],
  ["Microesferas de arena volcánica", "Exfoliación física: eliminan las células muertas por fricción."],
  ["Niacinamida", "Antioxidante y antiinflamatoria."]]},
"fil-global-repair-advanced-cream": {i: "Antiedad reparador que actúa en profundidad con tres complejos: refuerza la barrera, estimula el colágeno y la elastina, y potencia la regeneración celular.", a: [
  ["Complejo patentado de lípidos biomiméticos", "Lípidos iguales a los de la piel que refuerzan la barrera cutánea."],
  ["Complejo de micropéptidos", "Péptidos señal que estimulan el colágeno y la elastina: más flexibilidad y firmeza."],
  NCEF]},
"fil-global-repair-advanced-elixir": {i: "Aceite-sérum antiedad que nutre en profundidad, refuerza la barrera, estimula el colágeno y potencia la regeneración celular.", a: [
  ["Complejo patentado de lípidos biomiméticos", "Refuerza la barrera cutánea y nutre en profundidad."],
  ["Activos que estimulan el colágeno", "Dan una piel más flexible y firme."],
  ["Aceite de andiroba", "Regenera la epidermis y le devuelve la elasticidad."],
  ["Aceite de camelia", "Rico en omega 6 y 9: nutrición duradera y luminosidad."],
  NCEF]},
"fil-global-repair-advanced-eyes-lips": {i: "Antiedad para contorno de ojos y labios con triple acción: nutre, refuerza la densidad y devuelve la luminosidad.", a: [
  ["Complejo de péptidos", "Actúa sobre las arrugas de ojos y labios, las ojeras y las bolsas; la piel queda más firme."]]},
"fil-global-repair-baume": {i: "Bálsamo nutritivo que actúa sobre 10 signos de la edad: densidad, firmeza, arrugas, luminosidad, elasticidad, rasgos, volumen, tono, uniformidad y nutrición.", a: [
  HA(),
  ["Péptidos redensificantes", "Péptidos señal que estimulan los componentes de la matriz y redensifican la piel."],
  NCEF]},
"fil-global-repair-essence": {i: "Loción nutritiva antiedad: nutre la piel apagada, le devuelve la flexibilidad y actúa sobre todos los signos de la edad.", a: [
  ["Intensive Repairing Factors (3 supernutrientes)", "Nutren la piel apagada y le devuelven flexibilidad y luminosidad."],
  ["Extracto de alga parda", "Relipidizante: refuerza el efecto nutritivo."],
  ["50 mesoingredientes + 4 potenciadores celulares", "Inspirados en la medicina estética, actúan sobre arrugas, firmeza, tono y luminosidad."]]},
"fil-global-repair-intensive": {i: "Sérum nutri-restaurador: nutre la piel desvitalizada y actúa sobre todos los signos de la edad (deshidratación, arrugas, firmeza, rasgos, tono y luminosidad).", a: [
  ["3 supernutrientes", "Devuelven flexibilidad y vitalidad a la piel."],
  ["50 mesoingredientes + 4 potenciadores celulares", "Inspirados en la medicina estética, combaten todos los signos de la edad."]]},
"fil-hand-pigment-protocol": {i: "Crema de manos antimanchas: aclara las manchas, alisa la textura e hidrata en profundidad.", a: [
  ["Vitamina C", "Antioxidante y despigmentante: inhibe la tirosinasa, la enzima clave de la síntesis de melanina."],
  ["Flavonoides", "Efecto renovador que mejora la textura: manos más lisas."],
  ["Ácido hialurónico encapsulado", "Hidratación profunda y duradera."],
  NCEF]},
"fil-hyalu-filler-creme": {i: "Inspirada en las inyecciones de ácido hialurónico (skin boosters y fillers): rellena e hidrata en profundidad las distintas capas de la piel y estimula su propia producción de ácido hialurónico.", a: [
  ["5 tipos de ácido hialurónico", "De alto, medio y bajo peso molecular, reticulado y microfragmentado. El de alto peso forma una película que retiene el agua; los de menor peso penetran más, hidratan en profundidad y mejoran la firmeza."],
  ["Goma de biosacáridos", "Protección adicional frente a la deshidratación."]]},
"fil-hyalu-filler-flash-mask": {i: "Mascarilla de tejido de hidratación exprés: inunda la piel de agua para un efecto rellenador en 15 minutos.", a: [
  HA(),
  ["Complejo tipo NMF (factores naturales de hidratación)", "Imita los humectantes naturales de la piel para retener el agua."],
  ["Aloe vera", "Rico en vitaminas, minerales y oligoelementos: revitaliza y da luminosidad."]]},
"fil-hyalu-filler-lips": {i: "Bálsamo voluminizador inspirado en las inyecciones de ácido hialurónico: hidrata, da volumen inmediato y define el contorno de los labios.", a: [
  ["Ácido hialurónico, konjac y oligopéptido", "Trío voluminizador: hidratación profunda, efecto relleno inmediato y contorno más definido."],
  ["Extracto de Swertia", "Reduce la apariencia de las arrugas y alisa los labios."],
  ["Manteca de karité", "Nutre."],
  ["Mentol", "Sensación de frescor."]]},
"fil-hyalu-filler-mask": {i: "Mascarilla-crema que hidrata en dos niveles, alisa, rellena y calma la sensación de incomodidad al instante.", a: [
  ["Ácido hialurónico de alto peso molecular", "Forma una película no oclusiva en la superficie que reduce la pérdida de agua."],
  ["Ácido hialurónico de peso molecular medio", "Penetra en las capas superiores de la epidermis para retener la hidratación."],
  ["Polisacárido biotecnológico", "Forma una película que mantiene la hidratación 24 horas."],
  ["Complejo NCEF", "Con ácido hialurónico, niacinamida, NAD, vitamina E, antioxidantes, aminoácidos y minerales: aporta luminosidad y unifica la textura."]]},
"fil-hyalu-filler-serum": {i: "Inspirado en las inyecciones de ácido hialurónico (skin boosters y fillers): rellena e hidrata en profundidad, estimula la producción propia de ácido hialurónico y protege de la contaminación.", a: [
  ["5 tipos de ácido hialurónico", "De alto, medio y bajo peso molecular, reticulado y microfragmentado. El de alto peso forma una película que retiene el agua; los de menor peso penetran más, hidratan en profundidad y mejoran la firmeza."],
  ["Alga roja", "Forma una barrera protectora frente a los contaminantes."],
  ["Extracto de flor de Sophora japonica", "Rico en polifenoles antioxidantes: refuerza las defensas de la piel."]]},
"fil-hydra-aox": {i: "Sérum antioxidante preventivo: neutraliza los radicales libres, previene la degradación del colágeno, alisa las líneas finas, afina los poros e ilumina.", a: [
  ["5 antioxidantes (vitamina E, vitamina B3, ergotioneína, vitamina C y astaxantina)", "Neutralizan los radicales libres. Muchos antioxidantes inhiben además las enzimas que degradan el colágeno (MMP)."],
  ["Ergotioneína + vitamina B3 + vitamina E", "Combaten los radicales libres, previenen la degradación del colágeno y absorben la luz azul."],
  HA("Hidratación durante todo el día.")]},
"fil-hydra-hyal-cream-gel": {i: "Gel-crema hidratante antiedad para piel mixta: rellena y devuelve a la piel su nivel ideal de hidratación, afina los poros y matifica de forma duradera.", a: [
  ["Dúo de ácido hialurónico (reticulado + bajo peso molecular)", "El de bajo peso penetra más e hidrata en profundidad; el reticulado aporta efecto relleno."],
  ["Activo astringente vegetal", "Afina los poros y matifica."]]},
"fil-lift-mask": {i: "Mascarilla de biocelulosa con efecto lifting en 15 minutos: tensa los rasgos, rellena y alisa las líneas.", a: [
  ["Plasmatic Lifting Factors (factores celulares + colágeno + ácido hialurónico)", "Las mismas familias de activos que se usan en inyección: tensan, rellenan, reestructuran el volumen y alisan."],
  ["Extracto de Sophora japonica", "Antioxidante que combate el envejecimiento."],
  ["Tejido de biocelulosa", "Se adapta a la piel como una segunda piel y optimiza la difusión de los activos."]]},
"fil-lift-structure-radiance": {i: "Fluido lifting e iluminador: tensa los rasgos, rellena y esculpe el volumen, y además corrige el tono apagado.", a: [
  ["Complejo de colágeno y ácido hialurónico", "Tensa visiblemente los rasgos, rellena la piel y esculpe el volumen del rostro."],
  ["Complejo color-control + minerales/bayas de goji", "Corrige el tono irregular y activa el tono rosado natural de la piel."],
  ["Microperlas de nácar", "Iluminan la piel al instante."]]},
"fil-lift-structure": {i: "Crema ultralifting: tensa los rasgos, rellena y redefine el volumen, y devuelve tono y firmeza.", a: [
  ["Complejo de colágeno y ácido hialurónico", "Tensa visiblemente los rasgos, rellena la piel y redefine el volumen del rostro."],
  ["Extracto de edelweiss + extracto de algas", "Estimulan los componentes principales de la piel para recuperar tono y firmeza."]]},
"fil-meso-mask-ncef": {i: "Mascarilla de triple acción inspirada en las mesoinyecciones: exfolia, refuerza la barrera e hidrata.", a: [
  ["PHA (gluconolactona al 2 %)", "Exfolia con suavidad, elimina las células muertas y aporta luminosidad."],
  ["Niacinamida (4 %)", "Refuerza la barrera cutánea, aclara las manchas (bloquea la transferencia de melanosomas) y afina la textura."],
  HA("Hidrata intensamente reteniendo el agua en la piel."),
  NCEF]},
"fil-micellar-solution": {i: "Agua micelar sin sulfatos: limpia y desmaquilla, y prepara la piel para el resto de la rutina.", a: [
  ["Trehalosa + ramnosa", "Activos calmantes e hidratantes."]]},
"fil-ncef-essence": {i: "Loción hidratante antiedad: hidrata de forma rápida y duradera y protege frente al estrés diario, preparando la piel para la rutina.", a: [
  ["Sensores de agua", "Hidratación rápida y duradera en 30 minutos."],
  NCEF]},
"fil-ncef-revitalize-creme": {i: "Crema polirrevitalizante inspirada en las inyecciones revitalizantes: mejora la producción de colágeno y elastina, refuerza la barrera y la protección antioxidante.", a: [
  ["Complejo NCEF (10 ingredientes esenciales)", "Vitaminas, aminoácidos, coenzimas…: mejora la producción de colágeno y elastina, la protección antioxidante y la barrera cutánea."],
  ["5 tripéptidos", "Péptidos señal que devuelven tono y elasticidad a la piel."]]},
"fil-ncef-revitalize-eyes": {i: "Contorno revitalizante e iluminador: reestructura el contorno, eleva el párpado, reactiva la microcirculación para reducir bolsas y ojeras, e ilumina.", a: [
  ["Albizia julibrissin + Sigesbeckia orientalis", "Dúo vegetal que reestructura el contorno, eleva el párpado y reactiva la microcirculación."],
  ["Péptidos (4 %)", "Alisan el contorno de ojos."],
  HA("Hidratación profunda y duradera."),
  ["Niacinamida (2 %)", "Actúa sobre la pigmentación (bloquea la transferencia de melanosomas): contorno más uniforme y luminoso."],
  NCEF]},
"fil-ncef-revitalize-mask": {i: "Mascarilla de efecto revitalizante inmediato: reactiva los mecanismos celulares de la piel desde dentro.", a: [
  ["Complejo NCEF (10 ingredientes)", "Aminoácido antioxidante, aminoácidos, minerales, vitaminas y coenzimas encapsulados."]]},
"fil-ncef-revitalize-night": {i: "Crema de noche reparadora: potencia la reparación natural de la piel, la protege del estrés oxidativo y unifica el tono.", a: [
  ["Matriquinas", "Péptido antiarrugas que potencia la reparación natural de la piel: más firme y lisa."],
  ["Tephrosia purpurea", "Extracto calmante que modula la hormona del estrés y protege del estrés oxidativo."],
  ["Niacinamida (2 %)", "Unifica el tono, refuerza la barrera y reduce rojeces y manchas de la edad."],
  NCEF]},
"fil-ncef-revitalize-serum": {i: "Sérum polirrevitalizante inspirado en la mesoterapia: mejora la producción de colágeno y elastina, la protección antioxidante y la barrera, con activos encapsulados que penetran mejor.", a: [
  ["Complejo NCEF (10 ingredientes esenciales)", "Vitaminas, aminoácidos, coenzimas…: mejora la producción de colágeno y elastina, la protección antioxidante y la barrera cutánea."],
  ["Encapsulación", "Ayuda a que los activos penetren mejor en la epidermis."]]},
"fil-ncef-shot": {i: "Tratamiento concentrado antiarrugas, reafirmante e iluminador: aporta en una dosis diaria el equivalente a una mesoinyección.", a: [
  ["Complejo NCEF ultraconcentrado", "Ácido hialurónico, vitaminas, aminoácidos, minerales, coenzimas y antioxidantes: revitaliza la piel y mejora su calidad global."]]},
"fil-neocica": {i: "Tratamiento reparador para piel dañada, por ejemplo tras procedimientos estéticos: favorece la regeneración, calma la irritación e hidrata de forma duradera.", a: [
  ["Precursores del colágeno", "Favorecen la regeneración de la epidermis."],
  ["Complejo rico en ramnosa", "Calmante: reduce la sensación de irritación."],
  ["Derivado de la urea + ácido hialurónico encapsulado", "Hidratación duradera."]]},
"fil-optim-eyes-cryo": {i: "Inspirado en la crioterapia: aporta frescor inmediato, descongestiona y alisa; reduce las bolsas e ilumina las ojeras.", a: [
  ["Complejo Cryo Peptide (3 % péptidos, 2 % niacinamida, ácido hialurónico)", "Los péptidos alisan y descongestionan, la niacinamida ilumina las ojeras y el ácido hialurónico hidrata."]]},
"fil-optim-eyes-mask": {i: "Parches para el contorno: acción correctora intensiva sobre ojeras, bolsas y arrugas.", a: [
  ["Péptidos marinos", "Alisan y rejuvenecen el contorno."],
  ["Ácidos hialurónicos", "Hidratan y rellenan."],
  ["Extracto de cúrcuma", "Antioxidante."]]},
"fil-optim-eyes": {i: "Contorno 3 en 1: reduce la apariencia de las ojeras, el volumen de las bolsas y la profundidad y número de arrugas finas.", a: [
  ["Péptidos", "Alisan las arrugas finas y actúan sobre bolsas y ojeras."],
  HA("Hidrata y rellena el contorno."),
  ["Antioxidante", "Protege la piel de los radicales libres."]]},
"fil-oxygen-glow-cc-creme": {i: "CC Cream perfeccionadora: corrige las imperfecciones y unifica, a la vez que protege frente a UV, luz azul y contaminación.", a: [
  ["Extracto de capuchina (potenciador de oxigenación)", "Energizante: devuelve la luminosidad."],
  HA("Rellena e hidrata."),
  ["L-enzima", "Parte del cóctel perfeccionador de la piel."],
  ["Triple protección", "Frente a los rayos UV, la luz azul y la contaminación."]]},
"fil-oxygen-glow-eyes": {i: "Contorno alisante e iluminador: energiza, rellena y desintoxica, y trata además las ojeras.", a: [
  ["Extracto de capuchina (potenciador de oxigenación)", "Energizante e iluminador."],
  HA("Rellena e hidrata."),
  ["L-enzima", "Acción detoxificante."],
  ["Tetrapéptido", "Refuerza la acción contra las ojeras."]]},
"fil-oxygen-glow": {i: "Crema alisante e iluminadora: corrige las imperfecciones en tiempo real y aporta luminosidad inmediata.", a: [
  ["Extracto de capuchina (potenciador de oxigenación)", "Energizante: devuelve la luminosidad."],
  HA("Rellena e hidrata."),
  ["L-enzima", "Parte del cóctel perfeccionador de la piel."]]},
"fil-oxygen-peel": {i: "Loción de micropeeling: exfolia con suavidad para alisar arrugas y poros, hidrata y favorece la oxigenación celular para un tono más fresco.", a: [
  ["6 ácidos al 6 % (glicólico, fítico, cítrico, salicílico, mandélico y gluconolactona)", "Los AHA y la gluconolactona rompen las uniones entre corneocitos y renuevan la superficie; el salicílico, liposoluble, penetra en el poro."],
  HA("Rellena e hidrata."),
  ["Sensores bioactivos de oxígeno", "Favorecen la oxigenación de las células."]]},
"fil-perfecting-cleansing-oil": {i: "Aceite desmaquillante: disuelve el maquillaje y las impurezas grasas mientras hidrata y nutre. No comedogénico.", a: [
  ["Omega 6", "Muy hidratante y emoliente."],
  ["Vitamina E", "Efecto reestructurante y regenerador."]]},
"fil-pro-collagen-micro-growth-factor-cream": {i: "Crema reafirmante inspirada en los tratamientos con factores de crecimiento: estimula la producción natural de colágeno, reafirma y redefine el óvalo.", a: [
  MGF,
  ["Emulsionante de cristal líquido", "Se integra en la barrera cutánea, refuerza su estructura y mantiene la flexibilidad."],
  NCEF]},
"fil-pro-collagen-micro-growth-factor-eyes": {i: "Sérum lifting de ojos: estimula el colágeno a largo plazo y tensa al instante; eleva el párpado y reduce bolsas y ojeras.", a: [
  MGF,
  ["Péptido lifting 360° + tensor vegetal instantáneo", "Efecto tensor inmediato que redefine el contorno y eleva el párpado."],
  ["Ácido hialurónico de bajo peso molecular", "Penetra más: hidrata y rellena el contorno."],
  NCEF]},
"fil-pro-collagen-micro-growth-factor-serum": {i: "Sérum de doble acción: efecto tensor inmediato en superficie y reafirmación duradera al estimular la producción natural de colágeno.", a: [
  MGF,
  ["Polímero tensor", "Efecto lifting inmediato: la piel queda más lisa y tensa desde la primera aplicación."],
  NCEF]},
"fil-skin-unify": {i: "Crema antimanchas iluminadora: reduce las manchas, unifica el tono y aporta luminosidad, con efecto unificador inmediato.", a: [
  ["Vitamina C + glabridina + extracto de algas", "Trío corrector del tono que reduce las manchas. La vitamina C inhibe la tirosinasa, la enzima clave de la síntesis de melanina."],
  HA("Rellena la piel y aporta luminosidad."),
  ["Agentes ópticos difuminadores", "Efecto tono uniforme al instante."]]},
"fil-sleep-and-lift": {i: "Crema de noche ultralifting: tensa los rasgos, rellena y esculpe el volumen, y regenera durante la noche.", a: [
  ["Complejo de colágeno y ácido hialurónico", "Tensa visiblemente los rasgos, rellena la piel y esculpe el volumen."],
  ["Dúo de aminoácidos", "Regenera los componentes principales de la piel para recuperar elasticidad y densidad."]]},
"fil-sleep-and-peel-4-5": {i: "Crema de noche de micropeeling, en tratamiento de un mes: renueva la superficie para mejorar las arrugas finas, la textura y la luminosidad.", a: [
  ["Complejo de hidroxiácidos al 4,5 % (AHA y BHA)", "Los AHA exfolian la superficie y estimulan la renovación; el BHA, liposoluble, penetra en el poro."],
  ["Alga parda", "Calmante."]]},
"fil-time-filler-5xp-creme": {i: "Antiarrugas para todos los tipos de arrugas: relaja las de expresión sin congelar el gesto, rellena las profundas y alisa las superficiales, las de deshidratación y las del cuello.", a: [
  ["Péptido", "Péptido inhibidor que relaja la contracción muscular superficial y suaviza las arrugas de expresión."],
  HA("Rellena las arrugas e hidrata."),
  ["Hinojo marino", "Alisa la superficie."],
  ["Imperata y flor de canguro", "Extractos vegetales del cóctel 5XP contra los distintos tipos de arrugas."]]},
"fil-time-filler-5xp-gel-creme": {i: "Antiarrugas matificante para todos los tipos de arrugas: relaja las de expresión sin congelar el gesto, rellena las profundas y alisa las superficiales y las del cuello.", a: [
  ["Tripéptido", "Péptido inhibidor que relaja la contracción muscular superficial y suaviza las arrugas de expresión."],
  HA("Rellena las arrugas e hidrata."),
  ["Hinojo marino", "Alisa la superficie."],
  ["Extracto vegetal + activo reestructurante", "Completan el cóctel 5XP contra los distintos tipos de arrugas."]]},
"fil-time-filler-essence": {i: "Loción antiarrugas: estimula el colágeno, hidrata 24 horas reforzando la barrera, y aporta luminosidad con una exfoliación suave.", a: [
  ["Extracto vegetal similar al retinol", "Estimula el colágeno y alisa las arrugas."],
  ["Complejo tipo NMF", "Imita la capacidad natural de la piel para retener agua: hidratación 24 horas y barrera reforzada."],
  ["Gluconolactona", "Exfoliante natural y suave que elimina las células muertas."],
  NCEF]},
"fil-time-filler-eyes-5xp": {i: "Contorno antiarrugas y antiojeras: relaja el entrecejo sin congelar el gesto, alisa las patas de gallo, rellena las arrugas bajo el ojo, reafirma el párpado y trata las ojeras.", a: [
  ["Péptidos relajantes", "Péptidos inhibidores que relajan la contracción muscular superficial."],
  ["Células madre vegetales", "Parte del cóctel alisante y reafirmante."],
  NCEF]},
"fil-time-filler-intensive-5xp": {i: "Sérum antiarrugas intensivo: relaja las arrugas de expresión con un neuropéptido de efecto similar a la toxina botulínica, y las corrige de forma inmediata y a largo plazo.", a: [
  ["Neuropéptido de nueva generación (4 %)", "Péptido inhibidor: imita el efecto de la toxina botulínica bloqueando la contracción muscular superficial."],
  ["Activos alisantes instantáneos", "Corrección inmediata de las arrugas."],
  HA("Rellena las arrugas e hidrata.")]},
"fil-time-filler-mask": {i: "Mascarilla de tejido antiarrugas: rellena la piel, alisa los rasgos y estimula la regeneración.", a: [
  ["Colágeno natural + activos tensores", "Rellenan la piel y alisan los rasgos."],
  ["Potenciador celular", "Estimula la regeneración de la piel."],
  ["Tejido de fibra negra", "Se adapta al rostro y favorece la penetración de los activos."]]},
"fil-time-filler-night-5xp": {i: "Crema de noche antiarrugas: alisa a la vez las arrugas profundas, las de sequedad, las de expresión y las superficiales, incluidas las marcas de la almohada.", a: [
  ["Tripéptido alisante", "Péptido inhibidor inspirado en la toxina botulínica que relaja las arrugas de expresión."],
  HA("Rellena las arrugas e hidrata."),
  ["Hinojo marino", "Efecto peeling."],
  ["Imperata (cogongrass)", "Capta el agua."],
  ["Extractos vegetales alisantes", "Completan el cóctel 5XP."]]},
"fil-time-filler-shot-5xp": {i: "Sérum ultraconcentrado (60 % de activos) para las arrugas de expresión: relaja la piel con neuropéptidos, hidrata y reafirma.", a: [
  ["Complejo de neuropéptidos", "Péptidos inhibidores que recrean el efecto dermorrelajante de la toxina botulínica."],
  ["Polisacáridos protectores", "Forman una película en la superficie: hidratación inmediata y duradera, y mejor absorción de los activos."],
  ["Enzima reafirmante biotecnológica", "Mejora el tono muscular y aporta firmeza."]]},
"fil-universal-cream": {i: "Crema multifuncional para rostro y cuerpo que en un solo paso hidrata, protege y repara la piel agredida (sol, cambios de temperatura, agua dura, afeitado, jabones agresivos). Filorga no detalla qué activos lleva su fórmula.", a: []},
"fil-uv-cellular-protect-after-sun": {i: "Gel after-sun: revitaliza y calma la piel tras el sol y estimula la síntesis natural de melanina para potenciar el bronceado. No es autobronceador ni protege del sol.", a: [
  ["Complejo NCEF 2.0", "Revitaliza las células."],
  ["Doble mecanismo activador del bronceado", "Estimula la síntesis natural de melanina."],
  ["Aminoácidos", "Calman la piel."]]},
"fil-uv-cellular-protect-body": {i: "Protector solar antiedad: sus filtros absorben la radiación UVA y UVB, y su 8 % de activos refuerza la reparación de la piel, estimula el colágeno, hidrata y reduce las manchas.", a: [
  FILTROS3,
  ["Péptidos", "Estimulan el colágeno: piel más firme."],
  ["Niacinamida", "Reduce las manchas (bloquea la transferencia de melanosomas)."],
  HA("Hidrata intensamente."),
  ["Complejo NCEF 2.0", "Revitaliza la piel y refuerza su proceso de reparación."]]},
"fil-uv-cellular-protect-face": {i: "Protector solar facial antiedad: sus filtros absorben la radiación UVA y UVB, y su 8 % de activos refuerza la reparación de la piel, estimula el colágeno, hidrata y reduce las manchas.", a: [
  FILTROS3,
  ["Péptidos", "Estimulan el colágeno: piel más firme."],
  ["Niacinamida", "Reduce las manchas (bloquea la transferencia de melanosomas)."],
  HA("Hidrata intensamente."),
  ["Complejo NCEF 2.0", "Revitaliza la piel y refuerza su proceso de reparación."]]}
};
D.prods.forEach(p => { if (A[p.id]) p.d.accion = A[p.id]; });
})();
