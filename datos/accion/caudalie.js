/* «Cómo actúa» de los productos de Caudalie.
   Fuente: «Nuestros ingredientes», «¿Lo sabías?» y la lista completa de ingredientes de cada ficha oficial (caudalie.com/es),
   completado con los mecanismos de las páginas de teoría (Cosméticos, Patologías, La piel).
   Formato: id de producto → { i: resumen de cómo actúa, a: [[activo, qué hace], …] } */
(function(){
const A = {
"cau-aceite-tratante": {i: "Desmaquilla disolviendo el maquillaje y la suciedad grasa con aceites vegetales. Al contacto con el agua se transforma en leche, de modo que se aclara fácilmente sin dejar película grasa.", a: [
  ["Aceite de almendra dulce", "Rico en omega 6, omega 9 y vitaminas. Suaviza e ilumina el cutis apagado y fatigado."],
  ["Aceite de ricino", "Fortalece las pestañas mientras se desmaquillan los ojos."]]},
"cau-agua-uva-micelar": {i: "Agua micelar: sus tensioactivos suaves atrapan el maquillaje y las impurezas, de modo que limpia y desmaquilla en un solo gesto sin necesidad de aclarado.", a: [
  ["Camomila", "Suavizante y calmante."],
  ["Agua de uva", "Ingrediente exclusivo de Caudalie que hidrata y calma la piel."]]},
"cau-agua-uva": {i: "Bruma que hidrata, calma y protege la piel frente a los radicales libres. Según Caudalie, reduce un 61 % la sensibilidad cutánea.", a: [
  ["Agua de uva bio", "Agua de lluvia filtrada por las raíces de la vid, rica en minerales y oligoelementos. Sus polisacáridos hidratan (+127 % de hidratación) y sus polifenoles son antioxidantes: neutralizan los radicales libres (−56 % en laboratorio)."]]},
"cau-ca-champu": {i: "Limpia el cabello con una base lavante sin sulfatos y actúa sobre su crecimiento para dar más densidad y volumen.", a: [
  ["VineOxyl™ fortalecedor", "Activo capilar patentado, obtenido por biotecnología a partir de aceite de pepitas de uva. Estimula el crecimiento del cabello."]]},
"cau-ca-serum": {i: "Actúa en el cuero cabelludo de dos formas: estimula el crecimiento del cabello y lo protege y calma para frenar la caída.", a: [
  ["VineOxyl™ fortalecedor", "Activo capilar patentado, obtenido por biotecnología a partir de aceite de pepitas de uva. Estimula el crecimiento del cabello y refuerza su densidad."],
  ["Péptidos calmantes", "Derivados de semillas de chía y guisantes. Aportan protección antioxidante, calman el cuero cabelludo y tienen acción anticaída."]]},
"cau-co-balsamo": {i: "Repara la barrera cutánea de la piel seca con tendencia atópica: aporta los lípidos que le faltan, limita la pérdida de agua y calma el picor.", a: [
  ["Ceramidas de uva", "De estructura biomimética, idéntica a los lípidos naturales de la piel. Las ceramidas son cerca del 50 % de los lípidos del estrato córneo: refuerzan la barrera y reducen la pérdida de agua."],
  ["Agua de uva bio", "Hidrata y calma."]]},
"cau-co-gommage": {i: "Exfoliante físico: sus partículas eliminan por fricción las células muertas, alisan la piel y favorecen su renovación, mientras los aceites la nutren.", a: [
  ["Polvo de pepitas de uva", "Exfolia, elimina las células muertas y deja la piel más lisa y luminosa."],
  ["Azúcar y aceite de pepitas de uva", "El azúcar es la base exfoliante de la fórmula y el aceite nutre la piel mientras se exfolia."]]},
"cau-co-labios-color": {i: "Nutre y repara los labios secos con mantecas y aceites, los protege de los radicales libres y aporta color.", a: [
  ["Manteca de karité ecológica", "Emoliente, suavizante e hidratante. Tiene actividad antieritema y ayuda a regenerar los tejidos."],
  ["Polifenoles de uva", "Extraídos de las semillas de uva. Son antioxidantes."],
  ["Pigmentos", "Aportan un color modulable para labios y mejillas."]]},
"cau-co-labios-karite": {i: "Nutre, repara y calma los labios secos, y los protege frente a los radicales libres.", a: [
  ["Manteca de karité ecológica", "Emoliente, suavizante e hidratante. Tiene actividad antieritema y ayuda a regenerar los tejidos."],
  ["Polifenoles de uva", "Antioxidantes que, según Caudalie, bloquean el 100 % de los radicales libres."]]},
"cau-co-leche": {i: "Hidrata la piel seca durante 72 horas y la relipidiza: retiene el agua, refuerza la barrera y calma el picor y las rojeces.", a: [
  ["Pantenol (provitamina B5)", "Calmante, hidratante y reparador. Mejora la función barrera y reduce la pérdida de agua."],
  ["Ácido hialurónico de alto peso molecular", "Se queda en la superficie y forma una película que reduce la pérdida de agua y calma la piel."],
  ["Glicerina", "Humectante: atrae agua hacia las capas superficiales de la piel."]]},
"cau-co-manos-the": {i: "Nutre y repara las manos secas con un dúo lipídico que reduce la tirantez y las protege de la deshidratación.", a: [
  ["Aceite de aguacate", "Rico en ácidos grasos y ácido oleico. Nutre la piel."],
  ["Aceite de pepitas de uva", "Junto al aguacate forma un dúo lipídico muy nutritivo que previene la deshidratación."],
  ["Glicerina", "Humectante: atrae agua hacia las capas superficiales de la piel."]]},
"cau-co-manos": {i: "Nutre y repara las manos secas con un dúo lipídico que reduce la tirantez y las protege de la deshidratación. También fortalece uñas y cutículas.", a: [
  ["Aceite de aguacate", "Rico en ácidos grasos y ácido oleico. Nutre la piel."],
  ["Aceite de pepitas de uva", "Junto al aguacate forma un dúo lipídico muy nutritivo que previene la deshidratación."],
  ["Glicerina", "Humectante: atrae agua hacia las capas superficiales de la piel."]]},
"cau-crema-desincrustante": {i: "Exfoliante físico: los microgránulos eliminan por fricción las células muertas y las impurezas, afinan la textura y devuelven la luminosidad.", a: [
  ["Microgránulos de arena volcánica", "De origen mineral (polvo de lava). Limpian y exfolian."],
  ["Agua de uva bio", "Hidrata y calma para que la exfoliación no reseque."],
  ["Mentol bio", "Refrescante."]]},
"cau-crema-suave": {i: "Exfoliante físico suave, apto para piel sensible: elimina las células muertas sin agredir y nutre la piel.", a: [
  ["Microgránulos de jojoba", "Exfolian con suavidad y eliminan las células muertas."],
  ["Aceite de pepitas de uva", "Rico en ácidos grasos insaturados. Nutre y suaviza."],
  ["Miel", "Suavizante."]]},
"cau-espuma-limpiadora": {i: "Limpia con una base lavante sin jabón, muy suave, que respeta incluso la piel sensible, y purifica con extractos vegetales.", a: [
  ["Salvia", "Purificante y astringente."],
  ["Camomila", "Suavizante y calmante."],
  ["Uva", "Hidrata e ilumina el cutis."]]},
"cau-leche-almendras": {i: "Desmaquilla rostro y ojos con aceites y mantecas que disuelven el maquillaje, a la vez que calma la piel y la protege de la sequedad y los radicales libres.", a: [
  ["Aceite de almendra dulce", "Rico en omega 6 y omega 9, ácidos grasos que refuerzan la barrera natural de la piel. Suaviza e ilumina."],
  ["Aceite de jojoba", "Calmante y suavizante. Hidrata sin dejar película grasa."],
  ["Manteca de karité ecológica", "Emoliente e hidratante, con actividad antieritema."],
  ["Agua de aciano", "Descongestiona y calma."],
  ["Polifenoles de uva", "Antioxidantes que neutralizan los radicales libres."],
  ["Aceite de ricino", "Fortalece las pestañas."]]},
"cau-locion-tonica": {i: "Tónico sin alcohol: retira los últimos restos de maquillaje e impurezas, hidrata y matifica, dejando la piel preparada para el tratamiento.", a: [
  ["Vinolevure", "Extraída de la levadura del vino. Hidratante y fortificante."],
  ["Hidrolato de rosa bio", "Matifica y aporta luminosidad."]]},
"cau-mascarilla-detox": {i: "Mascarilla de arcilla: absorbe el exceso de sebo y las impurezas, minimiza los poros y activa la microcirculación para un efecto detox.", a: [
  ["Arcilla rosa (caolín y bentonita)", "Adsorbe el sebo y la suciedad, matifica y mejora la apariencia de los poros."],
  ["Extracto de café", "Antioxidante y antirrojeces. Activa la microcirculación."],
  ["Orujo de uva bio", "Calmante y drenante."]]},
"cau-pc-crema-riche": {i: "Antiedad global para piel seca: aumenta la producción de colágeno, ácido hialurónico y elastina de la propia piel para corregir arrugas, manchas y pérdida de volumen, y repara la barrera cutánea.", a: [
  ["Patente Longevidad (resveratrol)", "Patente de Caudalie con Harvard Medical School. El resveratrol activa las sirtuinas, proteínas relacionadas con la reparación celular; así la piel produce más colágeno, ácido hialurónico y elastina."],
  ["Filler redensificante natural", "Extracto de palo de rosa que estimula los 4 tipos de colágeno, el ácido hialurónico, la elastina y la fibrilina-1, para dar volumen y redefinir el óvalo."],
  ["Bioceramidas", "Similares a los lípidos de la barrera cutánea. La refuerzan, limitan la pérdida de agua y dan confort a la piel seca."]]},
"cau-pc-crema": {i: "Antiedad global: aumenta la producción de colágeno, ácido hialurónico y elastina para corregir arrugas y volumen, y actúa también sobre las manchas.", a: [
  ["Patente Longevidad (resveratrol)", "Patente de Caudalie con Harvard Medical School. El resveratrol activa las sirtuinas, proteínas relacionadas con la reparación celular; así la piel produce más colágeno, ácido hialurónico y elastina."],
  ["Filler redensificante natural", "Extracto de palo de rosa que estimula los 4 tipos de colágeno, el ácido hialurónico, la elastina y la fibrilina-1, para dar volumen y redefinir el óvalo."],
  ["Viniferina", "Activo patentado de la savia de la vid. Inhibe la tirosinasa, la enzima clave en la síntesis de melanina, y así frena la formación de manchas."],
  ["Azúcares tensores", "Efecto tensor visible a los 3 minutos que dura hasta 6 horas."]]},
"cau-pc-ojos": {i: "Antiedad para el contorno de ojos: estimula el colágeno, el ácido hialurónico y la elastina para corregir las arrugas, ilumina al instante y su aplicador descongestiona bolsas y ojeras.", a: [
  ["Patente Longevidad (resveratrol)", "El resveratrol activa las sirtuinas, proteínas relacionadas con la reparación celular; así la piel produce más colágeno, ácido hialurónico y elastina."],
  ["Filler redensificante natural", "Extracto de palo de rosa que estimula los 4 tipos de colágeno, el ácido hialurónico y la elastina."],
  ["Ácido hialurónico", "Alisa e hidrata la superficie de la piel de forma continua."],
  ["Mezcla de nácares", "Iluminan y embellecen el contorno al instante."]]},
"cau-pc-serum": {i: "Sérum antiedad global: estimula la producción de colágeno, ácido hialurónico y elastina, hidrata intensamente, mejora la textura y actúa sobre las manchas.", a: [
  ["Patente Longevidad (resveratrol)", "El resveratrol activa las sirtuinas, proteínas relacionadas con la reparación celular; así la piel produce más colágeno, ácido hialurónico y elastina."],
  ["Viniferina", "Activo patentado de la savia de la vid. Inhibe la tirosinasa, la enzima clave en la síntesis de melanina, y así frena la formación de manchas."],
  ["Niacinamida", "Disminuye los poros dilatados y calma. Además refuerza la barrera cutánea y bloquea la transferencia de melanosomas."],
  ["Ácido hialurónico", "Retiene agua e hidrata de forma inmediata; el sérum lleva 3,5 veces más que La Crema."],
  ["Azúcares tensores", "Efecto tensor visible a los 3 minutos que dura 6 horas."]]},
"cau-rl-corporal": {i: "Reafirmante corporal: estimula el colágeno para mejorar la firmeza y la elasticidad, y atenúa la apariencia de la celulitis.", a: [
  ["Multi-Péptidos de Uva Pro-Colágeno", "Más de 500 péptidos de pepitas de uva que imitan los mecanismos naturales de la piel: actúan como péptidos señal y estimulan 20 tipos de colágeno."],
  ["Iris", "Actúa sobre las 3 capas de la piel y mejora la función barrera y la tonicidad."],
  ["Ácido hialurónico de bajo peso molecular", "Penetra más en la piel: hidrata en profundidad y tiene acción antiarrugas."]]},
"cau-rl-crema-cachemir": {i: "Reafirmante antiarrugas: estimula la producción de colágeno y rellena las arrugas desde dentro, para una piel más firme y redensificada.", a: [
  ["Resveratrol", "Antioxidante natural de la vid. Reafirma y estimula las proteínas de juventud de la piel."],
  ["Multi-Péptidos de Uva Pro-Colágeno", "Más de 500 péptidos biomiméticos que actúan como péptidos señal y estimulan 20 tipos de colágeno."],
  ["Ácidos hialurónicos micro", "De muy bajo peso molecular: penetran en la piel, la hidratan y rellenan las arrugas."]]},
"cau-rl-crema-tisana": {i: "Reafirmante de noche: estimula el colágeno, alisa las arrugas y nutre mientras la piel se repara.", a: [
  ["Resveratrol", "Antioxidante natural de la vid. Reafirma y estimula las proteínas de juventud de la piel."],
  ["Multi-Péptidos de Uva Pro-Colágeno", "Más de 500 péptidos biomiméticos que actúan como péptidos señal y estimulan 20 tipos de colágeno."],
  ["Ácidos hialurónicos micro", "De muy bajo peso molecular: penetran en la piel, la hidratan y rellenan las arrugas."]]},
"cau-rl-fluido": {i: "Versión fluida para piel mixta: hidrata, corrige las arrugas con efecto lifting y deja un acabado mate.", a: [
  ["Colágeno tipo 1 vegano", "Efecto lifting. El colágeno tipo I es el 80 % del colágeno de la dermis."],
  ["Ácido hialurónico", "Alisa e hidrata la superficie de la piel de forma continua."],
  ["Sílice", "Matifica y da el acabado aterciopelado."]]},
"cau-rl-ojos": {i: "Lifting para el contorno de ojos: estimula el colágeno para alisar las arrugas y reafirmar, y reduce las bolsas.", a: [
  ["Resveratrol", "Antioxidante natural de la vid. Reafirma y estimula las proteínas de juventud de la piel."],
  ["Multi-Péptidos de Uva Pro-Colágeno", "Más de 500 péptidos biomiméticos que actúan como péptidos señal y estimulan 20 tipos de colágeno."],
  ["Extracto de quinoa", "Péptidos naturales que reducen las bolsas y la hinchazón y elevan los párpados."]]},
"cau-rl-serum": {i: "Sérum reafirmante: estimula la producción de colágeno, rellena las arrugas e hidrata, para redefinir el óvalo.", a: [
  ["Resveratrol", "Antioxidante natural de la vid. Reafirma y estimula las proteínas de juventud de la piel."],
  ["Multi-Péptidos de Uva Pro-Colágeno", "Más de 500 péptidos biomiméticos que actúan como péptidos señal y estimulan 20 tipos de colágeno."],
  ["Ácidos hialurónicos micro", "De muy bajo peso molecular: penetran en la piel, la hidratan y rellenan las arrugas."]]},
"cau-vh-crema-intensa": {i: "Hidrata y nutre la piel muy seca: aporta agua y lípidos, y calma las rojeces y la tirantez.", a: [
  ["Ácido hialurónico", "Retiene agua; alisa e hidrata la superficie de la piel de forma continua."],
  ["Manteca de karité ecológica", "Emoliente e hidratante, con actividad antieritema y acción sobre la regeneración de los tejidos."],
  ["Agua de uva bio", "Hidrata y calma."]]},
"cau-vh-gelatina": {i: "Limpiador para piel sensible: limpia con suavidad y a la vez hidrata y repara para no alterar la barrera.", a: [
  ["Ácido hialurónico", "Hidrata la superficie de la piel."],
  ["Pantenol (provitamina B5)", "Calmante, hidratante y reparador. Refuerza la barrera cutánea."],
  ["Agua de uva bio", "Hidrata y calma."]]},
"cau-vh-gelcream": {i: "Hidratante ligera sin siliconas: aporta y retiene agua como un parche de hidratación, sin dejar acabado graso.", a: [
  ["Ácido hialurónico", "Retiene agua; alisa e hidrata la superficie de la piel de forma continua."],
  ["Extracto de aloe vera", "Hidrata, calma y retiene el agua en la piel."],
  ["Agua de uva bio", "Hidrata y calma."]]},
"cau-vh-mascarilla": {i: "Mascarilla-crema que hidrata y nutre intensamente, calma y repara la piel seca y sensible.", a: [
  ["Centella asiática bio", "Activo «cica»: calma, repara y es antiinflamatoria."],
  ["Agua de uva bio", "Hidrata y calma."],
  ["Polifenoles de uva", "Antioxidantes que neutralizan los radicales libres."]]},
"cau-vh-serum": {i: "Capta el agua y la libera de forma continua durante el día para restablecer el equilibrio hídrico de la epidermis.", a: [
  ["Ácido hialurónico de muy bajo peso molecular", "Penetra en la piel, la hidrata de manera continua y alisa las primeras líneas de expresión."],
  ["Agua de uva bio", "Hidratante, calmante, antioxidante y prebiótica: ayuda a reforzar la microbiota cutánea."],
  ["Polifenoles de uva", "Antioxidantes que neutralizan los radicales libres."]]},
"cau-vp-crema": {i: "Antimanchas de doble acción: frena la producción de melanina y su llegada a la superficie, y unifica el tono al instante.", a: [
  ["Viniferina", "Activo patentado de la savia de la vid. Inhibe la tirosinasa, la enzima clave en la síntesis de melanina: según Caudalie es 62 veces más eficaz que la vitamina C."],
  ["Niacinamida", "Bloquea la transferencia de melanosomas a los queratinocitos, de modo que el pigmento no llega a las capas superiores. También calma y reduce los poros."],
  ["Nácares naturales", "Aportan resplandor instantáneo y unifican la piel desde la primera aplicación."]]},
"cau-vp-esencia": {i: "Esencia exfoliante: renueva la capa superficial para eliminar el pigmento acumulado y dar luminosidad. Es el primer paso del ritual antimanchas.", a: [
  ["Ácido glicólico", "AHA de molécula muy pequeña que penetra con facilidad. Rompe las uniones entre corneocitos, elimina las células muertas y estimula la renovación celular."],
  ["Peonía blanca", "Aporta resplandor, luminosidad y uniformidad al cutis."],
  ["Agua de uva bio", "Hidrata y calma."]]},
"cau-vp-espuma": {i: "Limpiador con exfoliación química suave (queratolítica): desprende las células muertas de la superficie y estimula la renovación, lo que ayuda a eliminar las manchas superficiales.", a: [
  ["Ácido mandélico", "Exfoliante queratolítico menos irritante que los AHA convencionales. Apto para pieles delicadas."],
  ["AHA", "Estimulan la renovación celular para aumentar la luminosidad."],
  ["Papaína", "Enzima exfoliante, más suave que los ácidos."],
  ["Agua de uva bio", "Hidrata y calma."]]},
"cau-vp-manos": {i: "Antimanchas para manos: frena la formación de manchas y nutre la piel sin acabado graso.", a: [
  ["Viniferina", "Activo patentado de la savia de la vid. Inhibe la tirosinasa, la enzima clave en la síntesis de melanina, y así difumina las manchas y previene otras nuevas."],
  ["Manteca de karité ecológica", "Emoliente, suavizante e hidratante."],
  ["Aceite de aguacate", "Rico en ácidos grasos y ácido oleico. Nutre la piel."]]},
"cau-vp-mascarilla": {i: "Peeling en mascarilla: los ácidos eliminan las células muertas y afinan la textura en 10 minutos, y la viniferina actúa sobre las manchas. No es apta para piel sensible.", a: [
  ["Ácido glicólico", "AHA de molécula pequeña que penetra con facilidad. Rompe las uniones entre corneocitos y elimina las células muertas."],
  ["AHA (láctico, tartárico, cítrico)", "Estimulan la renovación celular y aumentan la luminosidad."],
  ["Viniferina", "Inhibe la tirosinasa, la enzima clave en la síntesis de melanina."]]},
"cau-vp-noche": {i: "Antimanchas de noche que actúa como un peeling suave: renueva la piel para eliminar el pigmento acumulado y frena la formación de nuevas manchas.", a: [
  ["Ácido glicólico", "AHA que rompe las uniones entre corneocitos, elimina las células muertas y estimula la renovación celular."],
  ["Enzima de papaya", "Exfoliante enzimático, natural y suave."],
  ["Viniferina", "Inhibe la tirosinasa, la enzima clave en la síntesis de melanina."]]},
"cau-vp-ojos": {i: "Actúa sobre los dos tipos de ojeras: las pigmentarias (frenando la melanina) y las vasculares (descongestionando), e hidrata e ilumina el contorno.", a: [
  ["Viniferina", "Inhibe la tirosinasa, la enzima clave en la síntesis de melanina, para aclarar las ojeras pigmentarias."],
  ["Niacinamida", "Bloquea la transferencia de melanosomas y calma la piel."],
  ["Cafeína", "Antioxidante, antiojeras y antibolsas."],
  ["Aplicador de cerámica", "Su efecto frío descongestiona y potencia el resultado antiojeras."]]},
"cau-vp-serum": {i: "Antimanchas para todo tipo de manchas y pieles, incluso sensibles: frena la producción de melanina, previene nuevas manchas y da luminosidad.", a: [
  ["Viniferina", "Activo patentado de la savia de la vid. Inhibe la tirosinasa, la enzima clave en la síntesis de melanina: según Caudalie es 62 veces más eficaz que la vitamina C y un 43 % más que la niacinamida al 10 %."],
  ["Escualeno de oliva", "Hidrata y suaviza la piel sin acabado graso."]]},
"cau-vpu-fluido": {i: "Hidratante para piel grasa: matifica los brillos, regula el sebo y reduce las imperfecciones sin engrasar.", a: [
  ["Polvos de sílice", "Matifican y dejan un tacto suave."],
  ["Extracto de té de Java", "Seborregulador."],
  ["Escualano vegetal", "Hidrata y calma."],
  ["Agua de uva bio (6 %)", "Aporta hidratación."],
  ["Polifenoles de uva", "Antioxidantes."]]},
"cau-vpu-gelatina": {i: "Limpiador anti-imperfecciones: limpia, desincrusta los poros y reduce el exceso de sebo sin resecar.", a: [
  ["Ácido salicílico natural", "BHA liposoluble que penetra en el interior del poro: es queratolítico y comedolítico, desincrusta los poros y afina la textura."],
  ["Agua de uva bio", "Hidrata y calma."],
  ["6 aceites esenciales purificantes", "Lavanda, citronela, menta piperita, romero, melisa y geranio."]]},
"cau-vpu-serum": {i: "Sérum anti-imperfecciones que actúa de varias formas: desincrusta el poro, exfolia con suavidad, controla la inflamación y el sebo, sin efecto rebote y respetando la barrera.", a: [
  ["Ácido salicílico natural", "BHA liposoluble que penetra en el interior del poro: es queratolítico y comedolítico, desincrusta los poros y afina la textura."],
  ["Niacinamida", "Antiinflamatoria y seborreguladora. Disminuye los poros dilatados y calma."],
  ["Gluconolactona (PHA)", "Exfoliante suave y muy bien tolerado. Además hidrata."],
  ["Polifenoles de uva", "Antioxidantes."],
  ["6 aceites esenciales purificantes", "Lavanda, citronela, menta piperita, romero, melisa y geranio."]]},
"cau-vpu-stop": {i: "Tratamiento localizado para granos: seca y sanea el grano, reduce la inflamación y atenúa la rojez gracias a su color verde.", a: [
  ["Ácido salicílico natural", "BHA liposoluble que penetra en el poro: queratolítico y comedolítico."],
  ["Niacinamida", "Antiinflamatoria y seborreguladora. Calma la piel."],
  ["Aceite esencial de árbol del té", "Antibacteriano y antiinflamatorio. Ayuda a purificar las imperfecciones."]]},
"cau-vpu-tonico": {i: "Tónico purificante: desincrusta los poros, reduce las imperfecciones y matifica los brillos.", a: [
  ["Ácido salicílico natural", "BHA liposoluble que penetra en el poro: desincrusta y afina la textura."],
  ["Agua de rosa bio", "Ayuda a prevenir la sobreproducción de sebo y aporta luminosidad."],
  ["Agua de uva bio", "Hidrata y calma."],
  ["6 aceites esenciales purificantes", "Lavanda, citronela, menta piperita, romero, melisa y geranio."]]},
"cau-vs-aceite": {i: "Protector solar: sus filtros químicos absorben la radiación UVA y UVB y la transforman en energía no dañina; además protege de la luz azul y los infrarrojos.", a: [
  ["3 filtros orgánicos (químicos)", "DHHB (filtro UVA), EHT (filtro UVB) y BEMT (filtro UVA y UVB): protección de amplio espectro."],
  ["CollagenSkinProtect™", "Complejo antioxidante de pepitas de uva que protege el colágeno de la piel, frente al 100 % de la luz azul y el 98 % de los infrarrojos."]]},
"cau-vs-aftersun": {i: "Después del sol: calma, hidrata y repara la piel irritada, con sensación refrescante inmediata.", a: [
  ["Extracto de aloe vera", "Hidrata, calma, protege y retiene el agua en la piel."],
  ["Aceite de coco", "Hidrata y nutre la piel seca que se pela."]]},
"cau-vs-agua": {i: "Protector solar: sus filtros químicos absorben la radiación UVA y UVB y la transforman en energía no dañina; además protege de la luz azul y los infrarrojos.", a: [
  ["4 filtros orgánicos (químicos)", "DHHB (filtro UVA), EHT y PBSA (filtros UVB) y BEMT (filtro UVA y UVB): protección de amplio espectro."],
  ["CollagenSkinProtect™", "Complejo antioxidante de pepitas de uva que protege el colágeno de la piel, frente al 100 % de la luz azul y el 98 % de los infrarrojos."]]},
"cau-vs-crema": {i: "Protector solar facial con acción antiarrugas: sus filtros químicos absorben la radiación UVA y UVB y la transforman en energía no dañina, y su complejo antioxidante protege el colágeno.", a: [
  ["4 filtros orgánicos (químicos)", "DHHB (filtro UVA), EHT y PBSA (filtros UVB) y BEMT (filtro UVA y UVB): protección de amplio espectro."],
  ["CollagenSkinProtect™", "Complejo antioxidante de pepitas de uva que protege el colágeno de la piel, frente al 100 % de la luz azul y el 98 % de los infrarrojos."]]},
"cau-vs-fluido": {i: "Protector solar facial: sus filtros químicos absorben la radiación UVA y UVB y la transforman en energía no dañina; además protege de la luz azul y los infrarrojos.", a: [
  ["4 filtros orgánicos (químicos)", "DHHB (filtro UVA), EHT y PBSA (filtros UVB) y BEMT (filtro UVA y UVB): protección de amplio espectro."],
  ["CollagenSkinProtect™", "Complejo antioxidante de pepitas de uva que protege el colágeno de la piel, frente al 100 % de la luz azul y el 98 % de los infrarrojos."]]},
"cau-vs-spray30": {i: "Protector solar: sus filtros químicos absorben la radiación UVA y UVB y la transforman en energía no dañina; además protege de la luz azul y los infrarrojos.", a: [
  ["4 filtros orgánicos (químicos)", "DHHB (filtro UVA), EHT y PBSA (filtros UVB) y BEMT (filtro UVA y UVB): protección de amplio espectro."],
  ["CollagenSkinProtect™", "Complejo antioxidante de pepitas de uva que protege el colágeno de la piel, frente al 100 % de la luz azul y el 98 % de los infrarrojos."]]},
"cau-vs-spray50": {i: "Protector solar: sus filtros químicos absorben la radiación UVA y UVB y la transforman en energía no dañina; además protege de la luz azul y los infrarrojos.", a: [
  ["4 filtros orgánicos (químicos)", "DHHB (filtro UVA), EHT y PBSA (filtros UVB) y BEMT (filtro UVA y UVB): protección de amplio espectro."],
  ["CollagenSkinProtect™", "Complejo antioxidante de pepitas de uva que protege el colágeno de la piel, frente al 100 % de la luz azul y el 98 % de los infrarrojos."]]},
"cau-vs-stick": {i: "Protector solar en stick para zonas sensibles: sus filtros químicos absorben la radiación UVA y UVB y la transforman en energía no dañina.", a: [
  ["3 filtros orgánicos (químicos)", "DHHB (filtro UVA), BEMT (filtro UVA y UVB) y EHT (filtro UVB): protección de amplio espectro."],
  ["Aceite de pepitas de uva", "Hace la fórmula nutritiva sin ser grasa."]]}
};
D.prods.forEach(p => { if (A[p.id]) p.d.accion = A[p.id]; });
})();
