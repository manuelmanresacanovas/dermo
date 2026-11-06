/* PATOLOGÍAS
   id: identificador, name: nombre, d: descripción corta, t: texto completo.
   En los textos (entre comillas invertidas `): ## título, ### subtítulo, - lista, **negrita**, *cursiva*. */
var D = D || {};

D.pats = [
  {
    id: "acne",
    name: "Acné",
    d: "Comedones, inflamación, seborrea y cicatrices.",
    t: `## ¿Qué es el acné?
El acné es una alteración de la unidad pilosebácea en la que se produce una obstrucción del folículo y, en muchos casos, inflamación. Afecta sobre todo a zonas ricas en glándulas sebáceas como la cara, el pecho y la parte alta de la espalda. Aunque es muy frecuente en adolescentes, también aparece en mujeres adultas y durante el embarazo. Su impacto psicológico puede ser importante.
## Por qué aparece
El origen del acné es multifactorial, pero destacan cuatro mecanismos principales:
- **Exceso de sebo:** la piel produce más grasa por influencia de los andrógenos, incluso aunque los análisis hormonales sean normales.
- **Hiperqueratinización:** las células del folículo se acumulan y forman un tapón que bloquea la salida del sebo.
- **Proliferación bacteriana:** *Cutibacterium acnes* crece en el ambiente sin oxígeno del folículo obstruido, generando inflamación.
- **Inflamación:** la liberación de mediadores inflamatorios favorece la aparición de lesiones dolorosas.
Otros factores que pueden empeorar el acné son la genética, el tabaco, el estrés y una dieta con alta carga glucémica.
## Tipos de lesiones
- **Comedón cerrado:** bulto blanquecino por acumulación de sebo y células.
- **Comedón abierto:** “punto negro” por oxidación del contenido del poro.
- **Pápula:** lesión roja e inflamada, sin pus.
- **Pústula:** lesión con contenido purulento.
- **Nódulo:** lesión profunda, dura y dolorosa.
- **Quiste:** lesión profunda con contenido espeso y riesgo de cicatriz.
## Cicatrices de acné
Tras la inflamación pueden aparecer alteraciones del color o del volumen:
- **Hiperpigmentación:** manchas oscuras tras la lesión, más frecuentes en fototipos altos.
- **Eritema:** marcas rosadas o rojizas.
- **Cicatrices atróficas:** tipo picahielos, en furgón u onduladas.
- **Cicatrices hipertróficas o queloides:** exceso de tejido cicatricial.
## Tipos de acné según la edad
- **Neonatal y del lactante:** relacionado con hormonas maternas.
- **Infantil:** puede deberse a sustancias comedogénicas o medicamentos.
- **Adolescente:** el más frecuente, con seborrea y lesiones en zona T, pecho y espalda.
- **Mujer adulta:** lesiones inflamatorias en mandíbula y cuello, de origen hormonal aunque la analítica sea normal.
## Otros tipos de acné
- **Acné por cosméticos:** causado por productos comedogénicos o aceites capilares.
- **Acné profesional:** por contacto con sustancias químicas.
- **Acné actínico:** brotes tras exposición intensa a radiación UVA.
- **Acné por medicamentos:** lesiones inflamatorias monomorfas sin comedones.
- **Acné mecánico:** por roce u oclusión (mochilas, cascos, mascarillas).
## Grados de gravedad
- **Leve:** comedones y seborrea.
- **Moderado:** pápulas y pústulas (grado 1 y 2).
- **Grave:** nódulos y quistes, con alto riesgo de cicatriz.
En casos moderados sin mejoría o en acné grave, es necesaria la valoración dermatológica.
## Cuidados cosméticos recomendados
El tratamiento cosmético es clave en el acné leve y complementa al tratamiento médico en casos moderados o graves. Los objetivos principales son regular la grasa, evitar la obstrucción del poro, reducir la inflamación y mejorar la tolerancia a los tratamientos.
### Ingredientes útiles
- **Ácido salicílico:** exfoliante, queratolítico y comedolítico.
- **Ácido succínico:** alternativa suave al salicílico.
- **Niacinamida:** antiinflamatoria y seborreguladora.
- **Gluconato de zinc:** inhibe la 5-alfa reductasa.
- **Retinoides:** reducen comedones y mejoran textura.
- **Ácido azelaico:** antiinflamatorio, despigmentante y apto en embarazo.
- **AHA (glicólico, láctico...):** exfoliación suave y mejora de cicatrices.
- **Antibacterianos:** extracto de regaliz, jengibre, bakuchiol, árbol del té.
- **Matificantes:** arcillas, carbón activado, sílice.
## Rutina recomendada
### Mañana
- Limpieza suave con gel syndet.
- Tratamiento seborregulador o antiinflamatorio.
- Hidratante ligera no comedogénica.
- Protector solar SPF 50 oil-free.
### Noche
- Doble limpieza.
- Exfoliante diario con ácido salicílico (según tolerancia).
- Retinoide o ácido azelaico.
- Hidratante reparadora para mantener la barrera cutánea.
Es normal un empeoramiento inicial (“efecto purga”) al comenzar retinoides o salicílico. No debe suspenderse salvo irritación intensa.
## Protección solar y acné
La exposición solar no mejora el acné; de hecho, puede empeorarlo al aumentar la producción de sebo, favorecer la inflamación y oscurecer las marcas. Es imprescindible usar protector solar adecuado para piel grasa, con textura gel o toque seco.
## Errores frecuentes
- Manipular las lesiones, lo que aumenta el riesgo de cicatrices.
- Evitar hidratantes por miedo a “engrasar” la piel.
- Usar jabones alcalinos que irritan y empeoran el acné.
- Aplicar productos solo sobre los granos visibles.
- Exfoliar en exceso o usar scrubs en piel inflamada.`
  },

  {
    id: "atopica",
    name: "Dermatitis Atópica",
    d: "Sequedad, picor, brotes y barrera alterada.",
    t: `## ¿Qué es la dermatitis atópica?
La dermatitis atópica (DA) es una enfermedad inflamatoria crónica de la piel que cursa con brotes y periodos de mejoría. Se caracteriza por sequedad intensa, picor persistente, enrojecimiento y descamación. Su origen es inmunológico y está muy influido por factores genéticos, ambientales y emocionales.
La piel atópica presenta una barrera cutánea debilitada, lo que provoca pérdida de agua y mayor sensibilidad a irritantes como cloro, jabones agresivos, sudor o cambios de temperatura. Además, existe una disminución de filagrina, una proteína esencial para mantener la estructura y la hidratación de la piel.
Suele comenzar en los primeros meses de vida y, aunque muchos casos mejoran en la adolescencia, puede persistir en la edad adulta. Es frecuente que las personas con DA también presenten rinitis, asma o dermatitis de contacto.
## Características y tipos de lesiones
La dermatitis atópica se manifiesta con piel seca, picor intenso y lesiones que pueden variar según la fase y la edad. Las formas más habituales son:
- **Eccema:** zonas rojas con vesículas, exudado y costras.
- **Prurigo:** pequeñas pápulas que desaparecen por rascado, dejando costras.
- **Liquenificación:** placas engrosadas y rugosas por rascado crónico.
La distribución de las lesiones cambia con la edad:
- **Lactantes:** mejillas, frente, cuero cabelludo, tronco y superficies de extensión. Lesiones muy exudativas.
- **Infancia:** pliegues de codos y rodillas, nuca, párpados, manos y pies. Lesiones secas y descamativas.
- **Adolescentes y adultos:** rostro, cuello, pliegues, manos, pezones y párpados. Predomina la liquenificación.
La piel atópica es más vulnerable a infecciones por *Staphylococcus aureus*, virus (herpes, molusco contagioso) y hongos como *Candida* o *Malassezia*.
## Soluciones cosméticas recomendadas
El cuidado cosmético es fundamental para reducir la sequedad, aliviar el picor y espaciar los brotes. La elección del producto depende del tipo de lesión y del estado de la piel.
- **Baño coloidal:** útil en brotes agudos.
- **Lociones:** recomendadas en lesiones exudativas y cuero cabelludo.
- **Aceites:** ideales para piel muy seca, aplicados sobre la piel o en el agua del baño.
- **Cremas, leches y bálsamos:** para mantenimiento entre brotes.
- **Pomadas:** indicadas en zonas engrosadas y liquenificadas.
## Ingredientes útiles en piel atópica
### Reparadores de la barrera cutánea
Refuerzan la función protectora de la piel y reducen la pérdida de agua transepidérmica.
### Calmantes y antipruriginosos
- Aloe vera
- Aceite de rosa mosqueta y caléndula
- Agua termal rica en minerales
- Extracto de avena
- Centella asiática (CICA)
- Niacinamida
- Alantoína
- Beta-sitosterol
- Palmidrol
- Derivados de ramnosa
- Dipotassium glycyrrhizate (regaliz)
### Antibacterianos
- Gluconato de zinc
- Sulfato de cobre
- Micropartículas de plata
- Aceites vegetales ozonizados (oliva y girasol)
## Rutina recomendada
El objetivo es hidratar, calmar, reforzar la barrera cutánea y evitar brotes. No existe cura definitiva, pero una rutina adecuada mejora notablemente la calidad de vida.
### Limpieza
- Usar limpiadores suaves, preferiblemente oleogeles o aceites.
- Evitar tónicos astringentes y jabones agresivos.
- Duchas cortas (menos de 10 minutos), 2–3 veces por semana, con agua tibia.
- Secar con toalla suave sin frotar.
- No usar exfoliantes, esponjas ni manoplas.
### Hidratación
- Aplicar crema emoliente en los primeros 5 minutos tras la ducha.
- Usar productos ricos en lípidos para reforzar la barrera cutánea.
- En brotes, aplicar primero el tratamiento médico y esperar 15–30 minutos antes del cosmético.
### Cuidados adicionales
- Evitar retinoides, AHAs y despigmentantes irritantes.
- Para tratar manchas o arrugas, preferir niacinamida, ácido tranexámico o bakuchiol.
- Aplicar mascarillas hidratantes 2 noches por semana.
- Evitar ropa de lana o fibras sintéticas, sudoración excesiva y cambios bruscos de temperatura.
## Protección solar
El uso de protector solar FPS 50+ es esencial. Las texturas más adecuadas son las cremas con ingredientes hidratantes y calmantes. Se recomiendan filtros minerales o filtros químicos testados en piel atópica.
Existen cremas barrera con protección solar que forman un film resistente al agua, arena y cloro, muy útiles para proteger la piel atópica en piscina o playa. Aun así, durante un brote es mejor evitar piscinas con cloro.`
  },

  {
    id: "oncologia",
    name: "Oncología",
    d: "Cuidado de la piel durante tratamientos oncológicos.",
    t: `## Cambios en la piel durante el tratamiento oncológico
Muchos tratamientos oncológicos —como quimioterapia, radioterapia o terapias dirigidas— producen alteraciones en la piel, el cabello y las uñas. Aunque suelen ser efectos temporales, pueden resultar molestos y afectar a la calidad de vida.
La manifestación más frecuente es la **sequedad extrema** acompañada de picor, descamación, grietas o incluso pequeñas úlceras. Por ello, el cuidado cosmético recomendado es muy similar al de la piel atópica, utilizando productos para pieles sensibles, sin necesidad de que indiquen “para pacientes oncológicos”.
## Reacciones cutáneas habituales
Entre los efectos secundarios más comunes se encuentran:
- Xerosis (sequedad intensa)
- Queratosis pilar
- Prurito
- Fisuras y grietas
- Radiodermitis
- Erupciones cutáneas, incluso acneiformes
- Rubor o enrojecimiento
- Alteraciones pigmentarias
- Paroniquias e infecciones en uñas
- Fotosensibilidad
Estas reacciones suelen ser reversibles una vez finalizado el tratamiento.
## Cuidados en zonas irradiadas
En radioterapia, la piel de la zona tratada se vuelve especialmente sensible. Los ingredientes más recomendados son:
- Sucralfato
- Centella asiática
- Sulfato de zinc
- Aloe vera puro
Se aplican dos veces al día, pero **nunca** en las cuatro horas previas a la sesión de radioterapia.
## Depilación y cuidados generales
Durante el tratamiento, la piel está más frágil y reactiva, por lo que deben evitarse métodos de depilación agresivos como cera, cuchilla o cremas depilatorias. Si es necesario, se recomienda utilizar una maquinilla eléctrica.
## Cuidado del cabello
- Lavar el cabello según necesidad con un champú suave.
- Secar al aire, evitando el calor.
- No teñir el cabello hasta finalizar la quimioterapia y recuperar su fortaleza.
- No usar tratamientos anticaída sin indicación médica.
- Las cejas y pestañas pueden maquillarse diariamente si es necesario.
## Cuidado de las uñas
Las uñas pueden volverse frágiles, estriadas o separarse parcialmente del lecho ungueal (onicolisis). También es más frecuente la inflamación de los laterales o la aparición de hongos.
## Cuidado facial durante el tratamiento
La piel del rostro suele volverse tirante, apagada y más sensible. Pueden aparecer arañas vasculares, poros dilatados, manchas y flacidez.
Se recomienda:
- Higiene suave con limpiadores syndet.
- Evitar exfoliantes y limpiezas faciales profesionales.
- No usar retinoides, AHAs ni despigmentantes irritantes.
- Hidratar mañana y noche con productos reparadores y de alta tolerancia.
- Aplicar mascarillas hidratantes dos noches por semana.
- Usar reparador labial a diario.
## Protección solar
Muchos tratamientos oncológicos producen **fotosensibilidad**, especialmente a la radiación UVA. Por ello, es fundamental evitar la exposición solar y utilizar a diario un protector solar FPS 50+ de amplio espectro, formulado para pieles sensibles.
El maquillaje puede utilizarse para corregir alteraciones como manchas o enrojecimiento, siempre que sea no comedogénico y apto para piel sensible.`
  },

  {
    id: "pigmentacion",
    name: "Pigmentación",
    d: "Melasma, léntigos, hiperpigmentación postinflamatoria.",
    t: `## ¿Qué es la pigmentación?
La pigmentación de la piel, el cabello y los ojos depende de la melanina, un pigmento producido por los melanocitos mediante un proceso llamado melanogénesis. La cantidad y distribución de melanina determinan el color de la piel y también la aparición de manchas.
La melanina puede aumentar por estímulos hormonales, radiación UV, luz visible, inflamación o ciertos medicamentos. La enzima clave en este proceso es la **tirosinasa**, que puede activarse o inhibirse, dando lugar a mayor o menor pigmentación.
Ante cualquier mancha nueva o que cambie en la edad adulta, es imprescindible consultar al dermatólogo para descartar malignidad.
## Factores que favorecen la hiperpigmentación
- **Desequilibrios hormonales:** embarazo, anticonceptivos, alteraciones de MSH, estrógenos o progesterona.
- **Radiación UV y luz visible:** especialmente UVA-I y luz azul.
- **Medicamentos:** fármacos fotosensibilizantes, capecitabina, antiinflamatorios, antihistamínicos, perfumes.
- **Genética:** predisposición familiar, pubertad precoz, lesiones inflamatorias previas.
- **Inflamación:** acné, dermatitis, quemaduras, láser, peelings agresivos, rascado.
## Tipos de hiperpigmentación
### Léntigos solares o seniles
Manchas planas, marrones o negras, bien delimitadas, que aparecen en zonas expuestas al sol como rostro, escote y manos. Se deben a la acumulación de melanosomas en los queratinocitos. Aumentan con la edad y la exposición solar crónica.
### Léntigos simples
Manchas benignas, uniformes y bien delimitadas, no relacionadas con el sol. No cambian con las estaciones y pueden aparecer en cualquier zona del cuerpo.
### Efélides (pecas)
Manchas pequeñas y marrones que aparecen en la infancia, típicas de pieles claras y fototipo I. Se intensifican con el sol y suelen atenuarse con la edad.
### Melasma
Hiperpigmentación adquirida, de origen hormonal y agravada por el sol. Es más frecuente en mujeres y en fototipos altos. Se presenta como manchas marrones difusas en frente, mejillas, labio superior o mandíbula.
La luz visible y la contaminación también empeoran el melasma. Cuando la melanina se deposita en la dermis, el color se vuelve grisáceo y los cosméticos tienen menor eficacia.
### Hiperpigmentación postinflamatoria (HPI)
Aparece tras un proceso inflamatorio como acné, dermatitis, quemaduras, láser o rascado. Es más frecuente en pieles oscuras y puede tardar meses en desaparecer.
## Soluciones cosméticas para la pigmentación
Los despigmentantes están indicados en pecas, melasma y HPI. Su eficacia depende de la profundidad del pigmento: cuanto más superficial, mejores resultados.
En lentigos solares o simples, los cosméticos tienen un efecto limitado, siendo más importante la fotoprotección.
Es fundamental evitar la exposición solar y utilizar protectores solares de muy alta protección, preferiblemente con color para bloquear la luz visible.
## Ingredientes despigmentantes
- Niacinamida
- Ácido tranexámico
- Ácido azelaico
- Azeloglicina
- Retinoides (ROL 0.3 %, RAL 0.1 %)
- Alfahidroxiácidos (AHA): glicólico, láctico…
- Vitamina C y antioxidantes
Para mejorar la eficacia, se recomienda realizar un peeling químico con AHA dos noches por semana.
En manchas por lipofuscina (manchas de la edad), son útiles ingredientes que activan el proteosoma, como **Delentigo™**.
## Protocolo de tratamiento
El tratamiento debe ser constante y adaptado a la tolerancia de la piel. Si funciona, se mantiene una pauta de mantenimiento 2–3 veces por semana.
### Recomendaciones generales
- Evitar exposición solar, medicamentos fotosensibilizantes y depilación con cera.
- Usar protector solar FPS 50+ a diario, renovándolo durante el día.
- Utilizar maquillaje o protector solar con color para camuflar y proteger.
- Aplicar antioxidantes e hidratantes para reforzar la barrera cutánea.
### Rutina nocturna
- Aplicar despigmentantes de forma progresiva según tolerancia.
- Evitar iniciar tratamientos irritantes en verano.
- Si la piel está irritada, suspender temporalmente para evitar HPI.
- Mantener tratamiento suave en meses de sol para evitar recaídas.`
  },

  {
    id: "envejecimiento",
    name: "Envejecimiento",
    d: "Arrugas, flacidez, fotoenvejecimiento y prevención.",
    t: `## ¿Qué es el envejecimiento?
El envejecimiento cutáneo es un proceso biológico inevitable influido por factores genéticos y ambientales. Con el paso del tiempo, la piel pierde estructura, elasticidad y capacidad de regeneración. Este proceso se divide en dos grandes componentes:
- **Crono-envejecimiento:** cambios internos relacionados con la edad y la genética.
- **Fotoenvejecimiento:** daño acumulado por factores externos como radiación UV, tabaco, estrés, contaminación, falta de sueño o mala alimentación.
La radiación UVA y la luz infrarroja (IR-A) son especialmente dañinas, ya que estimulan enzimas que degradan colágeno y elastina. Además, el estrés oxidativo y el acortamiento de los telómeros reducen la capacidad regenerativa de la piel.
Por ello, la prevención es clave: fotoprotección diaria, antioxidantes y un estilo de vida saludable.
## Características del envejecimiento
### A nivel de la epidermis
- Líneas finas y textura irregular
- Pérdida de luminosidad
- Manchas y alteraciones de pigmentación
- Piel más seca y sensible
- Fragilidad y alteración del microbioma
### A nivel de la dermis
- Arrugas profundas
- Flacidez y pérdida de elasticidad
- Disminución de fibroblastos
- Pérdida de colágeno y fibras elásticas
- Deshidratación
### Tipos de arrugas
- **Dinámicas:** visibles al gesticular.
- **Estáticas:** visibles incluso en reposo.
- **Fotoinducidas:** causadas por radiación UV.
- **Metabólicas:** relacionadas con oxidación y glicación.
### Flacidez
Se debe a la pérdida de firmeza del colágeno, elastina y tejido adiposo. Puede afectar al óvalo facial, cuello y escote.
### Alteraciones vasculares
Con el tiempo, los capilares se vuelven más frágiles, apareciendo cuperosis, arañas vasculares y ojeras azuladas.
### Lesiones malignas
El envejecimiento aumenta el riesgo de queratosis actínicas, carcinomas y melanoma. Cualquier lesión nueva o cambiante debe ser valorada por un dermatólogo.
## Clasificación del envejecimiento (Glogau)
- **Grupo 1 – Leve (20–30 años):** líneas finas, sin arrugas profundas.
- **Grupo 2 – Moderado (30–45 años):** arrugas en movimiento, cambios pigmentarios.
- **Grupo 3 – Avanzado (45–60 años):** arrugas visibles en reposo, flacidez.
- **Grupo 4 – Severo (+60 años):** arrugas generalizadas, manchas, piel amarillenta.
## Soluciones cosméticas para el envejecimiento
El objetivo es prevenir la degradación de colágeno, elastina y ácido hialurónico, y estimular su síntesis. Para ello se emplean ingredientes con evidencia clínica y rutinas adaptadas a cada tipo de piel.
### La pirámide del proaging
#### 1. Protección (base)
- Protector solar amplio espectro (UVB, UVA, VIS, IR-A)
- Antioxidantes
- Antipolución
#### 2. Renovación (zona media)
- Retinoides de nueva generación (hidroxipinacolona retinoato, retinol microencapsulado)
- Exfoliación con AHAs o PHAs
#### 3. Activación y regeneración (cúspide)
- Péptidos
- Factores de crecimiento
- Células madre vegetales
## Ingredientes cosméticos recomendados
### Renovadores
- AHAs y PHAs
- Retinoides
- Niacinamida
- Ácido tranexámico
- Ácido azelaico
- Extracto de regaliz
### Reparadores de la barrera
- Ceramidas
- Ácido hialurónico
- Ácido poliglutámico
### Antiedad intensivos
- Péptidos
- Factores de crecimiento
- Ácido hialurónico hidrolizado
- Carnosina (antiglicación)
- Extracto de magnolia (anti-inflammaging)
### Antioxidantes
- Vitamina C
- Vitamina E
- Ácido ferúlico
- Resveratrol
- Superóxido dismutasa
## Protocolo de tratamiento
La rutina debe adaptarse al grado de envejecimiento y a la tolerancia de la piel. Se recomienda seguir el método de transiciones para introducir activos de forma progresiva.
### Mañana
- **Grupo 1:** antioxidantes, hidratación y FPS 30+.
- **Grupo 2:** antioxidantes, hidratación y activos proaging.
- **Grupo 3:** antioxidantes, hidratación, proaging y FPS 50.
- **Grupo 4:** antioxidantes, hidratación, proaging y FPS 50.
### Noche
- **Grupo 1:** hidratación; retinoides o AHAs según necesidades.
- **Grupo 2:** retinoides 3 noches/semana + intensivos + AHAs.
- **Grupo 3:** retinoides frecuentes + intensivos + AHAs.
- **Grupo 4:** retinoides más potentes + AHAs o PHAs.
Por la mañana, la piel necesita protección y antioxidantes. Por la noche, se centra en regenerarse, por lo que los retinoides y exfoliantes son más eficaces.`
  },

  {
    id: "rosacea",
    name: "Rosácea",
    d: "Eritema, sensibilidad, brotes y cuidados específicos.",
    t: `## ¿Qué es la rosácea?
La rosácea es una enfermedad crónica de la piel, a veces también ocular, que cursa con brotes y periodos de mejoría. Se caracteriza por enrojecimiento persistente, sensibilidad, telangiectasias visibles y, en algunos casos, pápulas y pústulas que pueden confundirse con acné.
Predomina en mujeres de piel clara y suele desencadenarse por cambios de temperatura, estrés, alcohol, comidas picantes o exposición solar. También es frecuente la sensación de calor, ardor o rubor súbito (flushing).
## Factores predisponentes y desencadenantes
Aunque su origen exacto se desconoce, sí se conocen factores que aumentan el riesgo o desencadenan brotes:
### Predisponentes
- Alteración de la función barrera y aumento de la pérdida de agua
- Fragilidad de los vasos sanguíneos
- Desequilibrio del microbioma (Demodex folliculorum)
- Posible relación con Helicobacter pylori
- Predisposición genética
- Alteración del sistema inmunológico
### Desencadenantes
- Temperaturas extremas, viento o humedad elevada
- Exposición solar
- Alcohol y tabaco
- Estrés y ejercicio intenso
- Embarazo o menopausia
- Uso prolongado de corticoides tópicos
- Alimentos como queso, chocolate, picantes, salsa de soja, vainilla, lácteos o hígado
- Bebidas calientes o con alcohol
## Características y tipos de lesiones
Las lesiones suelen localizarse en la zona centrofacial: mejillas, nariz, frente y mentón, respetando el contorno de ojos. En casos poco frecuentes pueden aparecer en cuello, escote o cuero cabelludo.
### Lesiones primarias
- Eritema persistente
- Tendencia al rubor
- Telangiectasias
- Pápulas y pústulas
### Lesiones secundarias
- Ardor, quemazón y sensibilidad
- Edema
- Lesiones oculares
- Engrosamiento de la piel (fimas)
## Subtipos de rosácea
### Rosácea eritemato-telangiectásica (RET)
Predomina el enrojecimiento persistente, flushing y telangiectasias. Puede acompañarse de ardor, picor y descamación.
### Rosácea pápulo-pustular (RPP)
Además del eritema, aparecen pápulas y pústulas en la zona centrofacial. No suele dejar cicatrices ni presenta comedones, a diferencia del acné.
### Rosácea fimatosa
Engrosamiento progresivo de la piel por hipertrofia de glándulas sebáceas. Es más frecuente en la nariz (rinofima), pero también puede afectar a párpados o mentón.
### Rosácea ocular
Enrojecimiento ocular, sensación de arenilla, quemazón o inflamación de párpados. Puede afectar a la conjuntiva o córnea.
## Soluciones cosméticas para la rosácea
El objetivo principal es reducir la inflamación, calmar la piel y mejorar la función barrera. También es importante disminuir la reactividad vascular y el enrojecimiento.
### Ingredientes recomendados
- Alantoína
- Niacinamida
- Bisabolol
- Aloe vera
- Extractos vegetales calmantes (ginkgo, té verde, manzanilla, avena, centella, caléndula, pepino, malva, vid, árnica, ruscus…)
- Sulfato de dextrano
- Azuleno
- Dexpantenol
- Licochalcone A y enoxolona
- Ramnosa
- Antioxidantes (vitamina E, té verde, ginkgo…)
### Para pápulas y pústulas
El **ácido azelaico** es uno de los ingredientes más eficaces y mejor tolerados. También puede utilizarse **RAL** (retinaldehído) de forma progresiva.
### Alternativas suaves
La **gluconolactona** es una excelente opción para renovar la piel sin irritarla. Aporta hidratación, efecto antioxidante y mejora la textura.
## Protocolo de tratamiento
La rosácea no tiene cura definitiva, pero puede controlarse con una rutina adecuada y evitando los desencadenantes.
### Higiene
- Limpiadores suaves sin tensioactivos irritantes
- Evitar dispositivos de limpieza o exfoliantes agresivos
- Si no se tolera el agua, usar solución micelar o emulsión limpiadora
- Brumas calmantes (agua termal) aplicadas en frío
### Hidratación y tratamiento
- Lociones hidratantes en piel seca o deshidratada
- En piel grasa sin brote, ácido salicílico en zonas específicas
- Antioxidantes como vitamina E o niacinamida
- Ácido azelaico, RAL o gluconolactona según tolerancia
- Mascarillas calmantes 1–2 veces por semana
- Evitar fragancias y alcohol
### Protección solar
Es indispensable usar protector solar de amplio espectro (FPS 30 o superior). Se recomiendan fórmulas con siliconas y filtros físicos como dióxido de titanio u óxido de zinc.
### Maquillaje correctivo
Muy útil para mejorar la autoestima. Se recomienda aplicar primero correctores verdes para neutralizar rojeces y después maquillaje apto para piel sensible con filtros UV.`
  },

  {
    id: "seborreica",
    name: "Dermatitis Seborreica",
    d: "Descamación, eritema y control del Malassezia.",
    t: `## ¿Qué es la dermatitis seborreica?
La dermatitis seborreica (DS) es una enfermedad inflamatoria crónica que se manifiesta con enrojecimiento, descamación grasa amarillenta y picor variable. Afecta a zonas ricas en glándulas sebáceas como el cuero cabelludo, el rostro y los pliegues corporales.
Aunque muchas personas creen tener la piel seca por la presencia de escamas, en realidad se trata de un exceso de sebo combinado con inflamación.
Es una patología recurrente que aparece tanto en lactantes (costra láctea) como en adultos, con mayor incidencia en hombres y en personas inmunodeprimidas.
## Causas y factores que influyen
La DS está relacionada con múltiples factores:
- Alteraciones neurológicas, hormonales o nutricionales
- Estrés y factores emocionales
- Clima frío o factores ambientales inmunosupresores
- Mayor actividad de la glándula sebácea
- Desequilibrio del microbioma, especialmente por *Malassezia*
Los hongos del género *Malassezia* proliferan en presencia de sebo y generan ácidos grasos irritantes que desencadenan inflamación, descamación y picor.
## Localización de las lesiones
### Cuero cabelludo
Inflamación, enrojecimiento y descamación grasa amarillenta. Puede acompañarse de picor y vasos dilatados visibles.
### Rostro
Afecta a cejas, entrecejo, pliegues nasogenianos, aletas nasales, pabellones auriculares y borde de la frente. Es típica la descamación fina en cejas y la blefaritis marginal.
### Región central del cuerpo
Puede aparecer en tórax, axilas, ingles, pliegues submamarios y zona interglútea.
## Manifestaciones según la edad
### Dermatitis seborreica infantil (costra láctea)
Placas amarillentas y grasas en la fontanela y parte superior del cráneo. Rara vez se extiende a otras zonas.
### Dermatitis seborreica del adulto
Patología crónica con brotes. Puede variar desde eritema leve hasta lesiones papulosas o exudativas. El picor es frecuente, sobre todo en el cuero cabelludo.
## Soluciones cosméticas para la dermatitis seborreica
El tratamiento cosmético busca controlar los síntomas, reducir la descamación y mantener a raya la proliferación de *Malassezia*. No cura la enfermedad, pero mejora notablemente los brotes.
### Ingredientes recomendados
#### Antifúngicos
- Climbazol
- Piroctona olamina
- Ciclopirox olamina
- Piritionato de zinc
- Sulfuro de selenio
- Undecyl alcohol
- Decylene glycol
#### Seborreguladores
- Zinc
- Vitamina B6
- Própolis
- Ácido azelaico
#### Calmantes y antiinflamatorios
- Enoxolona
- Extracto de algas pardas
- Zanthalene
- Aceite de borraja
- Pantenol
- Keluamida (también queratolítica)
#### Queratolíticos
- Ácido salicílico
- Urea
- Ichthyol
- Enebro
- Ácido glicólico
## Protocolo de tratamiento
La DS requiere un tratamiento continuo o repetido en cada brote. En invierno suelen empeorar las lesiones faciales y del cuero cabelludo; en verano, las de los pliegues.
### Recomendaciones generales
- Limpiadores con pH ácido o syndets suaves
- Lociones exfoliantes diarias con ácido salicílico en zonas seborreicas
- Evitar cosméticos grasos u oclusivos
- Preferir texturas gel o cremagel
- Evitar alcohol en las formulaciones
- Protección solar diaria oil-free
- Exfoliación semanal (química, enzimática o mecánica según tolerancia)
- Mascarillas seborreguladoras e hidratantes
## Dermatitis seborreica del cuero cabelludo
El champú de tratamiento debe aplicarse en dos pasos para mejorar su eficacia:
- 1. Humedecer el cabello, aplicar champú, masajear suavemente y aclarar.
- 2. Repetir la aplicación y dejar actuar unos minutos antes de aclarar.
La frecuencia habitual es cada 2–3 días. Los champús antifúngicos reducen la población de *Malassezia* y mejoran los síntomas.
Tras el lavado, se pueden usar acondicionadores en medios y puntas para evitar deshidratación del cabello.
Las lociones sin aclarado con ingredientes calmantes ayudan a reducir el picor y evitar el rascado, que puede dañar el cabello.
### Mantenimiento
Debido a la rápida recolonización por *Malassezia*, se recomienda usar un champú antifúngico de mantenimiento dos veces por semana, alternándolo con un champú suave.`
  },

  {
    id: "celulitis",
    name: "Celulitis",
    d: "Fibrosis, retención de líquidos y piel de naranja.",
    t: `## ¿Qué es la celulitis?
La celulitis es una alteración del tejido celular subcutáneo (hipodermis) que provoca el característico aspecto de “piel de naranja”. Se debe a problemas en la microcirculación sanguínea y linfática, acompañados o no de retención de líquidos y cambios en las fibras de colágeno.
En mujeres suele localizarse en muslos, glúteos, caderas, abdomen inferior y brazos. En hombres es menos frecuente y aparece en zonas más altas del cuerpo debido a la mayor firmeza de su piel.
Su origen es multifactorial: genética, hormonas, estilo de vida sedentario, estrés, alimentación rica en grasas y carbohidratos, alcohol, y ciertos medicamentos.
## Grados de celulitis
- **Grado 1:** piel de naranja visible solo al pellizcar. Hay retención de líquidos y alteración de adipocitos.
- **Grado 2:** piel de naranja visible de pie. Menor elasticidad y problemas circulatorios.
- **Grado 3:** piel de naranja visible en cualquier posición, con ondulaciones marcadas y posible dolor.
- **Grado 4:** nódulos visibles, palpables y dolorosos. Requiere valoración médica.
## Tipos de celulitis
### Celulitis edematosa o acuosa
Afecta principalmente a piernas y rodillas. Produce pesadez, dolor y retención de líquidos. La piel es fina y presenta signo de Godet positivo.
### Celulitis compacta o dura
Piel firme con piel de naranja visible solo al pellizcar. Frecuente en jóvenes con buena tonicidad muscular. Suele localizarse en muslos externos y rodillas internas.
### Celulitis blanda o flácida
Piel de naranja visible a simple vista, asociada a flacidez, varices y retención de líquidos. Común en mujeres mayores de 30–40 años o tras cambios bruscos de peso.
### Celulitis mixta
Es habitual presentar distintos tipos en diferentes zonas del cuerpo.
## Soluciones cosméticas para la celulitis
Los cosméticos anticelulíticos combinan ingredientes que actúan sobre el tejido adiposo, la circulación y la elasticidad de la piel. Su eficacia es limitada, pero mejoran la apariencia, la textura y el contorno corporal si se usan de forma constante.
### Ingredientes recomendados
#### Acción lipolítica (reducen grasa localizada)
- Cafeína, teobromina, teofilina
- Extractos de cola, guaraná y té verde
- Extractos de algas
- Coenzima A
- L-carnitina
- Prolina vectorizada
- Extracto de crisantelo
- Piruvato sódico
- Quercetina
- Lipodualenzym®
- Extracto de pimienta de Sichuan
#### Inhibidores de la lipogénesis
- Slimming Factor Karkade
- UCPeptide™
- Glaucina y genisteína
- Extracto de quinoa o loto
- Extracto de garcinia o mirto
#### Mejora de la circulación
- Ginkgo biloba
- Castaño de indias
- Ruscus
- Hiedra
- Trigo sarraceno
- Meliloto
- Vid roja
- Hamamelis
- Escina
#### Rubefacientes (activan la microcirculación)
- Nicotinato de metilo
- Salicilato de metilo
- Mentol
- Alcanfor
- Aceites esenciales
#### Reestructurantes
- Mucopolisacaridasa
- Extractos de algas (fucus)
- Oligoelementos (manganeso, cobre, zinc, silicio…)
- AHAs
- Retinoides
- Papaína y bromelaína
## Protocolo de tratamiento
La constancia es clave. Los anticelulíticos deben aplicarse con masaje para mejorar la circulación y favorecer la penetración del producto.
### Recomendaciones generales
- Aplicar el producto 2 veces al día durante 3 meses, luego 1 vez al día todo el año.
- Realizar masaje ascendente desde rodilla a muslo.
- Exfoliar la piel 1–2 veces por semana para mejorar la absorción.
- Aplicar tras la ducha para mayor eficacia.
- Combinar con hábitos saludables y complementos alimenticios.
### Según el tipo de celulitis
- **Edematosa:** anticelulíticos drenantes y tonificantes.
- **Compacta:** productos lipolíticos 1–2 veces al día.
- **Blanda o mixta:** reafirmante por la mañana y lipolítico por la noche.
### Tratamientos médico-estéticos complementarios
- **Edematosa:** presoterapia, drenaje linfático, mesoterapia.
- **Compacta:** láser lipolítico, ultracavitación, presoterapia.
- **Blanda:** radiofrecuencia.`
  }
];
