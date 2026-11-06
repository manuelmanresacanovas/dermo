/* LA PIEL
   id: identificador, name: nombre, d: descripción corta, t: texto completo, p: id de la sección madre (opcional).
   En los textos (entre comillas invertidas `): ## título, ### subtítulo, - lista, **negrita**, *cursiva*. */
var D = D || {};

D.piel = [
  {
    id: "estructura",
    name: "Estructura de la piel",
    d: "Capas, composición y organización de la piel."
  },

  {
    id: "epidermis",
    name: "Epidermis",
    d: "Capa más externa, barrera protectora.",
    p: "estructura",
    t: `La epidermis es la capa más externa de la piel y está formada por cinco estratos: basal, espinoso, granuloso, lúcido y córneo. No contiene vasos sanguíneos ni terminaciones nerviosas. En ella se desarrollan dos procesos esenciales: **la queratinización**, que da lugar a la formación de queratina, y **la melanogénesis**, responsable de la producción de melanina.
Su función principal es proteger al organismo frente a agresiones externas, microorganismos y pérdida de agua.
## Capas internas de la epidermis y células clave
El **estrato basal** es la capa más profunda y está formado por varios tipos de células:
- **Queratinoblastos**: células precursoras de los queratinocitos.
- **Melanocitos**: producen melanina y la transfieren a los queratinocitos.
- **Células de Merkel**: especializadas en la percepción táctil.
Por encima se encuentra el **estrato espinoso**, compuesto por queratinocitos unidos por desmosomas. Aquí también se localizan las **células de Langerhans**, esenciales en la defensa inmunitaria cutánea.
## Queratinocitos
Los queratinocitos son las células más abundantes de la epidermis. Producen **queratina blanda**, una proteína estructural que fortalece la piel. A medida que maduran, ascienden desde el estrato basal hacia la superficie, formando los distintos estratos epidérmicos.
En su etapa final se transforman en **corneocitos**, células sin núcleo que se desprenden de forma natural en un ciclo que dura entre 28 y 45 días.
En sus membranas se encuentran **acuaporinas**, canales que permiten el paso de agua, minerales y vitaminas, contribuyendo al equilibrio hídrico de la piel.
## Melanocitos
Los melanocitos producen **melanina** a partir del aminoácido tirosina mediante la enzima tirosinasa. La melanina se transfiere a los queratinocitos a través de los melanosomas y determina el color de la piel.
Existen dos tipos principales de melanina:
- **Eumelanina**: marrón oscuro o negra.
- **Feomelanina**: amarilla o rojiza.
La actividad melanocítica está influida por factores genéticos, hormonales y ambientales, especialmente la radiación UV y la luz visible.
## Células de Langerhans
Las células de Langerhans forman parte del sistema inmunológico cutáneo. Detectan microorganismos, los capturan y los degradan. Si no pueden eliminarlos, migran a los ganglios linfáticos para presentarlos a los linfocitos T, activando la respuesta inmunitaria.
## Estrato córneo
Es la capa más externa de la epidermis y actúa como una barrera protectora frente a agresiones externas y pérdida de agua. Está formado por:
- **Corneocitos**: células sin núcleo que forman la barrera física.
- **Lípidos cementantes**: ceramidas, colesterol y ácidos grasos.
- **Factor Natural de Hidratación (FNH)**: sustancias higroscópicas que retienen agua.
Esta estructura funciona como una muralla que impide la entrada de agentes externos y mantiene el equilibrio hídrico de la piel.
## Lípidos cementantes
Entre los corneocitos se encuentra un “cemento” lipídico compuesto por ceramidas, colesterol y ácidos grasos saturados y poliinsaturados. Su función es impermeabilizar la piel y regular la **pérdida de agua transepidérmica (TEWL)**.
## Factor Natural de Hidratación (FNH)
El FNH está formado por aminoácidos, sales minerales, urea, lactatos y componentes del sudor. Su función es atraer y retener agua dentro del estrato córneo, manteniendo la hidratación y evitando la descamación.
## Manto hidrolipídico
En la superficie del estrato córneo se encuentra el **manto hidrolipídico**, una película protectora ligeramente ácida formada por sebo, sudor y productos de la queratinización. Mantiene el equilibrio de la microbiota cutánea y contribuye a definir el tipo de piel.`
  },

  {
    id: "dermis",
    name: "Dermis",
    d: "Soporte estructural, colágeno y elastina.",
    p: "estructura",
    t: `La dermis es la capa situada justo debajo de la epidermis. Su función principal es dar soporte estructural a la piel, aportar nutrientes y mantener su firmeza y elasticidad. Para estudiarla mejor se divide en dos zonas: **papilar** (más superficial) y **reticular** (más profunda).
## Composición de la dermis
La dermis está formada por una red compleja de células, fibras y sustancias que conforman la matriz extracelular. Incluye:
- **Fibroblastos**
- **Mastocitos**
- **Vasos sanguíneos**
- **Terminaciones nerviosas**
- **Corpúsculos sensoriales**
- **Anejos cutáneos** (folículos, glándulas)
En su interior se encuentra la **matriz extracelular**, compuesta por fibras de colágeno, elastina, fibras reticulares y una sustancia gelatinosa llamada **sustancia fundamental**.
## Fibroblastos: los arquitectos de la dermis
Los fibroblastos son las células más abundantes de la dermis. Se encargan de producir:
- **Colágeno** y **elastina**, responsables de la firmeza y elasticidad.
- **Sustancia fundamental**, formada por:
- GAGs sulfatados: dermatán-sulfato, condroitín-6-sulfato, heparán-sulfato.
- GAGs no sulfatados: como el **ácido hialurónico**, clave para la hidratación.
- **Proteoglicanos**, capaces de retener hasta un 40 % de su peso en agua.
## Remodelación dérmica
En la dermis se encuentran las **metaloproteinasas de la matriz extracelular (MMPs)**, enzimas encargadas de remodelar la matriz dérmica. Pueden degradar proteínas como el colágeno y la elastina, por lo que su equilibrio es esencial para mantener la estructura cutánea.
## Defensa inmunológica
Los **mastocitos** participan en la respuesta alérgica y forman parte de la segunda línea de defensa inmunitaria, junto con las células de Langerhans de la epidermis.`
  },

  {
    id: "hipodermis",
    name: "Hipodermis",
    d: "Reserva energética y aislamiento térmico.",
    p: "estructura",
    t: `La hipodermis, también llamada **tejido celular subcutáneo**, es la capa más profunda y gruesa de la piel. Se sitúa por debajo de la dermis y está formada por tejido conectivo laxo, fibras de colágeno y elastina, y una gran cantidad de **adipocitos**, las células encargadas de almacenar grasa.
Esta capa es altamente vascularizada, lo que contribuye a la nutrición de la piel y a la regulación térmica del organismo. Su grosor varía según la zona del cuerpo, el sexo, la genética y el estado nutricional.
## Funciones de la hipodermis
La hipodermis cumple funciones esenciales para el equilibrio del cuerpo:
- **Reserva energética**: los adipocitos almacenan triglicéridos que sirven como fuente de energía.
- **Aislamiento térmico**: ayuda a mantener la temperatura corporal estable.
- **Amortiguación mecánica**: protege frente a golpes, presiones y traumatismos.
- **Soporte estructural**: une la piel a los tejidos subyacentes sin limitar el movimiento.
- **Vascularización abundante**: facilita el intercambio de nutrientes y la regulación térmica.
Además, la hipodermis participa en procesos metabólicos y hormonales relacionados con el tejido adiposo, y su estado influye en la apariencia externa de la piel, especialmente en condiciones como la celulitis.`
  },

  {
    id: "anejos",
    name: "Anejos cutáneos",
    d: "Pelo, uñas y glándulas.",
    p: "estructura",
    t: `Los anejos cutáneos son estructuras derivadas de la piel que cumplen funciones específicas y esenciales. Están formados por una porción dérmica, que regula su desarrollo, y una porción epidérmica, que produce el producto final (queratina, sebo o sudor).
Se dividen en dos grandes grupos: **queratinizados** (cabello y uñas) y **glandulares** (glándulas sebáceas y sudoríparas). Cada uno participa en la protección, regulación y mantenimiento del equilibrio cutáneo.
## Anejos queratinizados
### Cabello
El cabello se forma en el **folículo piloso**, una estructura compleja que se extiende desde la epidermis hasta la dermis. Su función principal es proteger, regular la temperatura y participar en la sensibilidad táctil.
El tallo piloso está compuesto por queratina dura y su crecimiento depende de factores hormonales, genéticos y nutricionales.
### Uñas
Las uñas están formadas por queratina dura compactada. Protegen las falanges, facilitan la manipulación de objetos y actúan como indicador del estado nutricional y de salud general.
## Anejos glandulares
### Glándulas sebáceas
Producen **sebo**, una mezcla lipídica que forma parte del manto hidrolipídico. Su función es lubricar la piel y el cabello, prevenir la deshidratación y mantener el equilibrio de la microbiota cutánea.
Su actividad aumenta en la pubertad por influencia hormonal y puede contribuir a patologías como el acné.
### Glándulas sudoríparas
Producen **sudor**, esencial para la termorregulación. Existen dos tipos:
- **Ecrinas**: distribuidas por casi toda la piel; regulan la temperatura corporal.
- **Apocrinas**: localizadas en axilas, ingles y areolas; su secreción se asocia al olor corporal.
Ambas participan en la eliminación de sustancias y en el mantenimiento del equilibrio hídrico y ácido de la piel.`
  },

  {
    id: "barrera",
    name: "Función barrera",
    d: "Cómo protege la piel frente a agresiones externas.",
    t: `La función barrera es una de las funciones más importantes de la piel. Su misión es proteger al organismo frente a agresiones externas, evitar la pérdida excesiva de agua y mantener el equilibrio inmunológico. Esta barrera se localiza principalmente en el **estrato córneo**, la capa más externa de la epidermis.
Cuando la barrera está íntegra, la piel se mantiene hidratada, flexible y resistente. Cuando se altera, aumenta la permeabilidad, se pierde agua con facilidad y la piel se vuelve más vulnerable a irritantes, alérgenos, microorganismos y agresiones ambientales.
## Componentes de la función barrera
La barrera cutánea se compone de cuatro elementos fundamentales:
### 1. Microbiota
Conjunto de microorganismos beneficiosos que viven en la superficie de la piel: bacterias, virus, hongos y ácaros. Predominan géneros como *Staphylococcus*, *Cutibacterium* y *Corynebacterium*. Mantienen el equilibrio cutáneo, compiten con patógenos y modulan la inmunidad.
### 2. Componente químico
Incluye el **Factor Natural de Hidratación (FNH)** y el **manto ácido**. Ambos mantienen el pH adecuado, retienen agua y evitan la proliferación de microorganismos dañinos.
### 3. Componente físico
Formado por corneocitos y queratinocitos. Los queratinocitos producen proteínas como la filagrina y lípidos como triglicéridos y colesterol, esenciales para la cohesión del estrato córneo.
### 4. Componente inmunológico
Incluye células presentadoras de antígeno, células linfoides innatas y células del sistema inmune adaptativo. Detectan y neutralizan microorganismos y sustancias potencialmente dañinas.
## Cuando la barrera se altera
Una barrera dañada aumenta la **pérdida de agua transepidérmica (TEWL)** y permite que sustancias irritantes penetren más profundamente. Esto puede desencadenar inflamación, enrojecimiento, descamación y sensibilidad.
Este fenómeno se conoce como **sensibilización transcutánea** y puede dar lugar a dermatitis de contacto irritativa o alérgica.
Patologías como la dermatitis atópica, psoriasis, rosácea o ictiosis presentan una barrera alterada de forma crónica.
## Cómo mantener y reparar la función barrera
Para restaurar la barrera cutánea se recomiendan cosméticos que combinen:
- **Emolientes**: ceramidas, ácidos grasos y colesterol.
- **Humectantes**: ácido hialurónico, glicerina, lactatos.
Estos ingredientes ayudan a prevenir la entrada de alérgenos, mantener el equilibrio hídrico y lipídico, y reducir la inflamación asociada a la barrera dañada.`
  },

  {
    id: "tipos",
    name: "Tipos de piel",
    d: "Normal, seca, grasa, mixta y sensible.",
    t: `El tipo de piel viene determinado genéticamente, pero su estado puede variar según factores internos, externos y ambientales. Para elegir los cosméticos adecuados es necesario conocer tanto el tipo como el estado actual de la piel.
## Clasificación según Baumann
La piel del rostro puede clasificarse en 16 subtipos combinando cuatro parámetros:
- Grasa o seca
- Pigmentada o no pigmentada
- Arrugada o tersa
- Sensible o resistente
Esta clasificación permite identificar con precisión las características individuales y adaptar los cuidados de forma personalizada.
## Piel seca
Presenta alteraciones en la bicapa lipídica del estrato córneo, con menor cantidad de ceramidas y mayor pérdida de agua. Esto provoca descamación, tirantez, irritación y textura áspera.
Características:
- Tirantez, enrojecimiento y descamación.
- Poros poco visibles.
- Mayor predisposición a arrugas prematuras.
- Mala tolerancia a jabones agresivos.
Necesidades:
- Limpieza suave.
- Reposición de lípidos (ceramidas, ácidos grasos).
- Hidratación profunda.
- Protección solar diaria.
## Piel deshidratada
Estado temporal caracterizado por falta de agua. Puede afectar a cualquier tipo de piel, incluso grasa. Se asocia a disminución del FNH, menor actividad de acuaporinas y alteración del cemento intercelular.
Características:
- Pérdida de luminosidad.
- Líneas finas de deshidratación.
- Poros alargados y descamación.
- Sensación de tirantez.
Necesidades:
- Hidratación con humectantes.
- Reparación de la barrera.
- Evitar exfoliantes fuertes y retinoides mientras esté deshidratada.
## Piel grasa
Se caracteriza por una producción elevada de sebo. Puede ser resistente o sensible si presenta acné.
Características:
- Brillos y textura gruesa.
- Poros visibles.
- Tendencia a imperfecciones.
Necesidades:
- Limpieza adecuada.
- Control del sebo.
- Texturas ligeras.
- Evitar oclusión de poros.
## Piel sensible
Presenta una barrera alterada, mayor permeabilidad y menor tolerancia a estímulos. Puede ser reactiva, alérgica o asociada a patologías como acné, rosácea, dermatitis seborreica o dermatitis atópica.
Características:
- Ardor, escozor o picor.
- Enrojecimiento frecuente.
- Reacciones a cosméticos comunes.
Necesidades:
- Evitar irritantes.
- Reparar la barrera.
- Uso de ingredientes calmantes.
## Piel resistente
Tiene un estrato córneo grueso y tolera bien los cosméticos. Requiere concentraciones más altas de activos para obtener resultados.
Características:
- Baja reactividad.
- Buena tolerancia a exfoliantes y retinoides.
Necesidades:
- Activos más potentes.
- Rutinas más intensivas.`
  },

  {
    id: "factores",
    name: "Factores que afectan a la piel",
    d: "Ambiente, genética, hábitos y más.",
    t: `La piel está expuesta a múltiples factores que pueden alterar su equilibrio, su función barrera y su apariencia. Estos factores pueden ser intrínsecos (propios del organismo) o extrínsecos (procedentes del entorno). Conocerlos permite comprender mejor las necesidades de cada tipo de piel.
## Factores intrínsecos
Son aquellos determinados por la genética y los procesos fisiológicos internos del organismo.
#### Genética
La genética influye en el tipo de piel, la producción de sebo, la sensibilidad, la pigmentación y la tendencia a desarrollar ciertas alteraciones cutáneas.
#### Edad
Con el paso del tiempo disminuye la producción de colágeno, elastina y ácido hialurónico. La piel se vuelve más fina, seca y menos elástica.
#### Hormonas
Las variaciones hormonales influyen en la producción de sebo, la hidratación y la sensibilidad. Pubertad, embarazo, menopausia y ciclos menstruales pueden modificar el estado de la piel.
#### Estrés
El estrés aumenta la liberación de cortisol, lo que puede alterar la barrera cutánea, aumentar la sensibilidad y favorecer brotes de imperfecciones.
#### Alimentación
Una dieta equilibrada favorece la salud cutánea. Déficits nutricionales pueden afectar la hidratación, la regeneración y la luminosidad.
#### Descanso
Durante el sueño se activan procesos de reparación celular. La falta de descanso puede provocar piel apagada, ojeras y mayor sensibilidad.
## Factores extrínsecos
Son factores externos que influyen directamente en la salud y apariencia de la piel.
#### Radiación ultravioleta (UV)
Es uno de los factores más dañinos. La exposición solar excesiva provoca fotoenvejecimiento, manchas, pérdida de elasticidad y daño celular.
#### Contaminación
Las partículas contaminantes generan radicales libres que dañan la barrera cutánea, favorecen la inflamación y aceleran el envejecimiento.
#### Clima
El frío, el viento, la baja humedad o el calor extremo pueden alterar la hidratación y la función barrera.
#### Tabaco
El tabaco reduce la oxigenación de la piel, acelera la degradación del colágeno y favorece la aparición de arrugas.
#### Alcohol
El consumo excesivo de alcohol deshidrata la piel y puede aumentar la inflamación y el enrojecimiento.
#### Cosméticos inadecuados
El uso de productos demasiado agresivos o no adecuados para el tipo de piel puede alterar la barrera cutánea y provocar irritación.
## Cómo proteger la piel frente a estos factores
La protección de la piel se basa en mantener la función barrera y reducir la exposición a factores dañinos. Algunas estrategias generales incluyen:
- Uso diario de fotoprotector.
- Rutina cosmética adecuada al tipo de piel.
- Hidratación suficiente.
- Evitar tabaco y alcohol en exceso.
- Alimentación equilibrada.
- Descanso adecuado.`
  }
];
