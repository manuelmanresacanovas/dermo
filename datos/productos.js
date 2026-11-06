/* PRODUCTOS
   brand: id de la marca, line: id de la línea (ver marcas.js).
   Si un producto está en varias líneas, se escribe una sola vez con line: ["linea1", "linea2"].
   img: ruta de la foto (carpeta imagenes/). Sin img, se muestra un recuadro vacío.
   n: necesidades que cubre (ids de necesidades.js). Decide dónde aparece en «Elección de producto».
   sk: tipos de piel (todas, seca, grasa, mixta, imperfecciones, sensible). Sin sk no aparece en «Elección de producto».
   d: ficha del producto.
      paciente: a quién va dirigido (tipo de piel o patología). Es lo más destacado de la ficha.
      tipo: qué tipo de producto es.
      necesidad: qué necesidad cubre.
      limpieza: papel en la limpieza (doble limpieza 1.er o 2.º paso, limpieza única, exfoliante). Opcional.
      limpiezaDet: aclaración sobre ese papel. Opcional.
      cuando: cuándo y con qué frecuencia se usa.
      modo: cómo se aplica.
      solar: qué indica la marca sobre fotoprotección (opcional; solo si la marca lo dice).
      nota: advertencias o aclaraciones (opcional).
   Información de la ficha tomada de la web oficial de cada marca (es.caudalie.com, es.filorga.com, sensilis.com/es, gemaherrerias.com, es.medik8.com, es.svr.com, es.nuxe.com, laroche-posay.es). */
var D = D || {};

D.prods = [
  /* ---------- Caudalie · Vinoclean ---------- */
  {
    id: "cau-aceite-tratante",
    name: "Aceite Tratante Desmaquillante",
    img: "imagenes/caudalie/cau-aceite-tratante.webp",
    brand: "caudalie",
    line: "vinoclean",
    n: ["limpieza"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluida la piel grasa.",
      tipo: "Aceite desmaquillante para rostro y ojos.",
      necesidad: "Desmaquillado y limpieza, incluido el maquillaje waterproof.",
      limpieza: "Doble limpieza · 1.er paso",
      limpiezaDet: "Desmaquilla. Caudalie indica continuar con un limpiador, como la Gelatina Purificante Vinopure o la Espuma Micropeeling Vinoperfect.",
      cuando: "Por la noche.",
      modo: "Calentar 3 dosis en las manos y masajear sobre la piel seca, con los ojos cerrados. Emulsionar con un poco de agua y aclarar abundantemente."
    }
  },

  {
    id: "cau-agua-uva-micelar",
    name: "Agua Uva Micelar",
    img: "imagenes/caudalie/cau-agua-uva-micelar.webp",
    brand: "caudalie",
    line: "vinoclean",
    n: ["limpieza"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluida la sensible.",
      tipo: "Agua micelar desmaquillante para rostro y ojos.",
      necesidad: "Limpieza y desmaquillado en un solo gesto; hidrata y calma.",
      limpieza: "Rutina de limpieza · 1.er paso",
      limpiezaDet: "Desmaquillante sin aclarado. Para perfeccionar la limpieza, Caudalie aconseja seguir con la Loción Tónica Hidratante.",
      cuando: "Mañana y noche, todos los días.",
      modo: "Aplicar con un algodón en rostro y cuello, y repetir si es necesario. Sin aclarado. Para los ojos, dejar el algodón unos segundos y deslizarlo hacia abajo y hacia fuera.",
      nota: "Si la piel suele notar tirantez, Caudalie aconseja una textura más rica, como la Leche de Almendras."
    }
  },

  {
    id: "cau-agua-uva",
    name: "Agua Uva",
    img: "imagenes/caudalie/cau-agua-uva.webp",
    brand: "caudalie",
    line: "vinoclean",
    n: ["rojeces"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel; formulada para las pieles más sensibles.",
      tipo: "Bruma calmante e hidratante.",
      necesidad: "Rojeces, sensibilidad e irritación.",
      cuando: "En cualquier momento del día.",
      modo: "Vaporizar sobre el rostro, sin frotar. También sirve como tónico al despertar o tras desmaquillarse, y para refrescar la piel con calor o tras hacer deporte."
    }
  },

  {
    id: "cau-espuma-limpiadora",
    name: "Espuma Limpiadora",
    img: "imagenes/caudalie/cau-espuma-limpiadora.webp",
    brand: "caudalie",
    line: "vinoclean",
    n: ["limpieza"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluidas la sensible y la grasa.",
      tipo: "Espuma limpiadora facial sin jabón.",
      necesidad: "Limpieza diaria: limpia, suaviza y purifica.",
      limpieza: "Doble limpieza · 2.º paso",
      limpiezaDet: "Después de la Leche de Almendras Desmaquillante. También es adecuada para la limpieza diaria.",
      cuando: "Mañana y noche, todos los días.",
      modo: "Aplicar sobre la piel húmeda de rostro y cuello, con los ojos cerrados, y masajear con movimientos circulares. Aclarar con agua abundante.",
      nota: "Si hay imperfecciones, Caudalie aconseja la Gelatina Limpiadora Purificante Vinopure."
    }
  },

  {
    id: "cau-leche-almendras",
    name: "Leche de Almendras Desmaquillante",
    img: "imagenes/caudalie/cau-leche-almendras.webp",
    brand: "caudalie",
    line: "vinoclean",
    n: ["limpieza"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluso con ojos sensibles.",
      tipo: "Leche desmaquillante para rostro y ojos.",
      necesidad: "Desmaquillado y limpieza suave; protege de la sequedad.",
      limpieza: "Doble limpieza · 1.er paso",
      limpiezaDet: "Continuar con la Espuma Limpiadora, o bien retirar con un algodón con Loción Tónica Hidratante.",
      cuando: "Mañana y noche, todos los días.",
      modo: "Aplicar sobre la piel seca de rostro y cuello, con los ojos cerrados, y masajear con movimientos circulares. Retirar el exceso con un algodón y aclarar con un algodón con Loción Tónica."
    }
  },

  {
    id: "cau-locion-tonica",
    name: "Loción Tónica Hidratante",
    img: "imagenes/caudalie/cau-locion-tonica.webp",
    brand: "caudalie",
    line: "vinoclean",
    n: ["limpieza"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluidas la seca y la sensible.",
      tipo: "Loción tónica sin alcohol.",
      necesidad: "Último paso de la limpieza: elimina restos de impurezas y maquillaje, y tonifica.",
      limpieza: "Rutina de limpieza · último paso",
      limpiezaDet: "Elimina los últimos restos de maquillaje y prepara la piel para el resto de la rutina.",
      cuando: "Mañana y noche, todos los días.",
      modo: "Aplicar con un algodón sobre la piel limpia de rostro y cuello. No aclarar."
    }
  },

  {
    id: "cau-mascarilla-detox",
    name: "Mascarilla Instant Detox",
    img: "imagenes/caudalie/cau-mascarilla-detox.webp",
    brand: "caudalie",
    line: "vinoclean",
    n: ["acne", "poros"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Mascarilla purificante de arcilla rosa, 2 veces por semana.",
      necesidad: "Impurezas, exceso de sebo y poros dilatados.",
      cuando: "2 veces por semana.",
      modo: "Aplicar en capa fina sobre la piel limpia. Dejar actuar de 5 a 10 minutos y aclarar con agua."
    }
  },

  {
    id: "cau-crema-desincrustante",
    name: "Crema Exfoliante Desincrustante",
    img: "imagenes/caudalie/cau-crema-desincrustante.webp",
    brand: "caudalie",
    line: "vinoclean",
    n: ["limpieza"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, especialmente mixta a grasa.",
      tipo: "Exfoliante facial con microgránulos de arena volcánica, 1 o 2 veces por semana.",
      necesidad: "Purifica y afina la textura de la piel.",
      limpieza: "Exfoliante",
      limpiezaDet: "Se puede mezclar con la Espuma Limpiadora para limpiar y desincrustar en un solo gesto.",
      cuando: "1 o 2 veces por semana.",
      modo: "Aplicar sobre la piel húmeda. Masajear con movimientos circulares, insistiendo en la zona T y evitando el contorno de ojos. Aclarar con agua tibia.",
      nota: "Para piel seca y sensible, Caudalie prefiere la Crema Exfoliante Suave."
    }
  },

  {
    id: "cau-crema-suave",
    name: "Crema Exfoliante Suave",
    img: "imagenes/caudalie/cau-crema-suave.webp",
    brand: "caudalie",
    line: "vinoclean",
    n: ["limpieza"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluida la sensible.",
      tipo: "Exfoliante facial suave con microgránulos de jojoba.",
      necesidad: "Elimina células muertas y purifica el rostro con suavidad.",
      limpieza: "Exfoliante",
      limpiezaDet: "Exfolia pero no limpia. Se puede mezclar con la Espuma Limpiadora para limpiar y exfoliar en un solo gesto.",
      cuando: "Piel normal, mixta o grasa: 1 o 2 veces por semana. Piel seca: cada 10 días.",
      modo: "Aplicar sobre la piel húmeda. Masajear con movimientos circulares, insistiendo en la zona T y evitando el contorno de ojos. Aclarar con agua tibia."
    }
  },

  /* ---------- Caudalie · VinoHydra ---------- */
  {
    id: "cau-vh-serum",
    name: "Sérum Ácido Hialurónico",
    img: "imagenes/caudalie/cau-vh-serum.webp",
    brand: "caudalie",
    line: "vinohydra",
    n: ["deshidratacion", "rojeces"],
    sk: ["todas"],
    d: {
      paciente: "Piel deshidratada de cualquier tipo, incluidas la sensible y la mixta.",
      tipo: "Sérum hidratante con ácido hialurónico.",
      necesidad: "Deshidratación: restablece el equilibrio hídrico y calma la piel.",
      cuando: "Mañana y noche, antes de la crema.",
      modo: "Aplicar antes de la crema.",
      nota: "Sin contraindicación en embarazo o lactancia, según Caudalie; consultar siempre con el médico."
    }
  },

  {
    id: "cau-vh-crema-intensa",
    name: "Crema Hidratación Intensa Ácido Hialurónico + Manteca de Karité",
    img: "imagenes/caudalie/cau-vh-crema-intensa.webp",
    brand: "caudalie",
    line: "vinohydra",
    n: ["seca", "rojeces"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Piel seca o muy seca, también sensible.",
      tipo: "Crema hidratante rica, en tarro o tubo.",
      necesidad: "Sequedad, rojeces y tirantez: hidrata intensamente y nutre.",
      cuando: "Mañana y noche, después del sérum.",
      modo: "Aplicar sobre rostro y cuello."
    }
  },

  {
    id: "cau-vh-gelcream",
    name: "Gelcream Hidratante Ácido Hialurónico + Aloe Vera",
    img: "imagenes/caudalie/cau-vh-gelcream.webp",
    brand: "caudalie",
    line: "vinohydra",
    n: ["deshidratacion", "rojeces"],
    sk: ["mixta", "grasa", "sensible"],
    d: {
      paciente: "Piel mixta a grasa, incluso sensible.",
      tipo: "Gel-crema hidratante sin siliconas y sin acabado graso.",
      necesidad: "Hidratación y frescor de la piel.",
      cuando: "Mañana y noche, solo o después del sérum.",
      modo: "Aplicar sobre rostro y cuello."
    }
  },

  {
    id: "cau-vh-gelatina",
    name: "Gelatina Limpiadora Hidratante",
    img: "imagenes/caudalie/cau-vh-gelatina.webp",
    brand: "caudalie",
    line: "vinohydra",
    n: ["limpieza", "rojeces"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Piel seca, deshidratada y sensible.",
      tipo: "Gelatina limpiadora y desmaquillante, sin sulfatos ni jabón.",
      necesidad: "Limpieza que previene la deshidratación y preserva la barrera cutánea.",
      limpieza: "Limpieza única",
      limpiezaDet: "Desmaquilla y limpia en un solo gesto. Para maquillaje waterproof, Caudalie prefiere el Aceite Tratante Desmaquillante.",
      cuando: "Mañana y noche, todos los días.",
      modo: "Aplicar sobre la piel húmeda. Masajear rostro y ojos hasta formar una espuma fina. Aclarar con agua.",
      nota: "Apta para ojos sensibles."
    }
  },

  {
    id: "cau-vh-mascarilla",
    name: "Mascarilla-Crema Hidratante con Centella Asiática",
    img: "imagenes/caudalie/cau-vh-mascarilla.webp",
    brand: "caudalie",
    line: "vinohydra",
    n: ["deshidratacion", "seca", "rojeces"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, especialmente seca o deshidratada, incluso la más sensible.",
      tipo: "Mascarilla-crema hidratante con centella asiática, 2 veces por semana.",
      necesidad: "Deshidratación y sequedad: hidrata, nutre y calma.",
      cuando: "2 veces por semana. También se puede dejar toda la noche como tratamiento reparador.",
      modo: "Aplicar sobre la piel limpia. Dejar actuar 10 minutos y retirar el resto sin aclarar.",
      nota: "Se puede usar en contorno de ojos y párpados; tolerada por usuarios de lentillas."
    }
  },

  /* ---------- Caudalie · Premier Cru ---------- */
  {
    id: "cau-pc-serum",
    name: "El Sérum",
    img: "imagenes/caudalie/cau-pc-serum.webp",
    brand: "caudalie",
    line: "premiercru",
    n: ["arrugas", "flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel con signos de envejecimiento.",
      tipo: "Sérum antiedad con efecto tensor.",
      necesidad: "Antiedad global: hidrata, tensa y mejora la textura de la piel.",
      cuando: "Mañana y noche, antes de la crema.",
      modo: "Aplicar sobre rostro, cuello y escote."
    }
  },

  {
    id: "cau-pc-ojos",
    name: "El Contorno de Ojos",
    img: "imagenes/caudalie/cau-pc-ojos.webp",
    brand: "caudalie",
    line: "premiercru",
    n: ["ojos", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel; tolerado por ojos sensibles.",
      tipo: "Contorno de ojos antiedad sin perfume, con aplicador descongestionante.",
      necesidad: "Arrugas del contorno de ojos y labios, ojeras y bolsas.",
      cuando: "Mañana y noche, todos los días.",
      modo: "Aplicar en el contorno de ojos y labios con la cánula masajeadora. Por la mañana, usarla como un pincel y terminar con toquecitos. Por la noche, masajear desde el ángulo externo hacia el interno."
    }
  },

  {
    id: "cau-pc-crema",
    name: "La Crema con Patente Longevidad + Filler Redensificante Natural",
    img: "imagenes/caudalie/cau-pc-crema.webp",
    brand: "caudalie",
    line: "premiercru",
    n: ["arrugas", "flacidez", "manchas"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel con signos de envejecimiento.",
      tipo: "Crema antiedad, disponible en recarga.",
      necesidad: "Antiedad global: arrugas, manchas y pérdida de volumen.",
      cuando: "Mañana y noche, sola o después del sérum.",
      modo: "Aplicar sobre rostro y cuello, desde el centro hacia los lados. Terminar de abajo hacia arriba en escote y cuello.",
      nota: "Si la piel es muy seca o sensible, Caudalie aconseja La Crema Riche."
    }
  },

  {
    id: "cau-pc-crema-riche",
    name: "La Crema Riche",
    img: "imagenes/caudalie/cau-pc-crema-riche.webp",
    brand: "caudalie",
    line: "premiercru",
    n: ["arrugas", "flacidez", "manchas", "seca"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Piel seca, muy seca o sensible con signos de envejecimiento.",
      tipo: "Crema antiedad de textura rica con bioceramidas, disponible en recarga.",
      necesidad: "Antiedad global (arrugas, manchas y volumen); ayuda a reparar la barrera cutánea.",
      cuando: "Mañana y noche, sola o después del sérum.",
      modo: "Aplicar sobre rostro y cuello, desde el centro hacia los lados. Terminar de abajo hacia arriba en escote y cuello."
    }
  },

  /* ---------- Caudalie · Resveratrol-Lift ---------- */
  {
    id: "cau-rl-serum",
    name: "Sérum Lifting Firmeza",
    img: "imagenes/caudalie/cau-rl-serum.webp",
    brand: "caudalie",
    line: "resveratrollift",
    n: ["arrugas", "flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluida la sensible.",
      tipo: "Sérum reafirmante con resveratrol, alternativa al retinol.",
      necesidad: "Arrugas, firmeza y definición del óvalo facial.",
      cuando: "Mañana y noche, antes de la crema.",
      modo: "Aplicar sobre rostro, cuello y escote, tras la limpieza y la loción.",
      solar: "No fotosensibiliza. Por la mañana, terminar la rutina con protección solar.",
      nota: "Adecuado en embarazo y lactancia."
    }
  },

  {
    id: "cau-rl-crema-cachemir",
    name: "Crema Cachemir Redensificante",
    img: "imagenes/caudalie/cau-rl-crema-cachemir.webp",
    brand: "caudalie",
    line: "resveratrollift",
    n: ["arrugas", "flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluida la sensible.",
      tipo: "Crema de día reafirmante y nutritiva.",
      necesidad: "Arrugas y pérdida de firmeza.",
      cuando: "Solo por la mañana, sola o después del sérum. Por la noche, Caudalie aconseja la Crema Tisana de Noche.",
      modo: "Aplicar sobre la piel limpia de rostro y cuello.",
      solar: "Por la mañana, completar la rutina con protección solar.",
      nota: "Adecuado en embarazo y lactancia: no contiene retinol ni retinoides."
    }
  },

  {
    id: "cau-rl-crema-tisana",
    name: "Crema Tisana de Noche",
    img: "imagenes/caudalie/cau-rl-crema-tisana.webp",
    brand: "caudalie",
    line: "resveratrollift",
    n: ["arrugas", "flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluidas la sensible y la seca.",
      tipo: "Crema de noche reafirmante y nutritiva.",
      necesidad: "Arrugas y pérdida de densidad y firmeza.",
      cuando: "Solo por la noche, sola o después del sérum.",
      modo: "Aplicar sobre rostro y cuello.",
      nota: "Compatible con embarazo y lactancia."
    }
  },

  {
    id: "cau-rl-ojos",
    name: "Tratamiento Lifting Ojos",
    img: "imagenes/caudalie/cau-rl-ojos.webp",
    brand: "caudalie",
    line: "resveratrollift",
    n: ["ojos", "arrugas", "flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel; tolerado por ojos sensibles.",
      tipo: "Gel-crema para contorno de ojos y labios, sin perfume, con aplicador masajeador.",
      necesidad: "Arrugas, bolsas y párpados caídos.",
      cuando: "Mañana y noche, todos los días.",
      modo: "Aplicar sobre el contorno de ojos limpio con el aplicador masajeador, con movimientos circulares.",
      nota: "Adecuado en embarazo y lactancia: no contiene retinol ni retinoides."
    }
  },

  {
    id: "cau-rl-fluido",
    name: "Fluido Cachemir Redensificante con Resveratrol, Alternativa al Retinol",
    img: "imagenes/caudalie/cau-rl-fluido.webp",
    brand: "caudalie",
    line: "resveratrollift",
    n: ["arrugas", "flacidez"],
    sk: ["mixta", "grasa", "sensible"],
    d: {
      paciente: "Piel mixta a grasa, también sensible.",
      tipo: "Fluido de día reafirmante con acabado mate.",
      necesidad: "Arrugas e hidratación, con efecto buena cara.",
      cuando: "Solo por la mañana, solo o después del sérum.",
      modo: "Aplicar sobre rostro y cuello.",
      nota: "Adecuado en embarazo y lactancia."
    }
  },

  {
    id: "cau-rl-corporal",
    name: "Crema Corporal Cachemir Redensificante",
    img: "imagenes/caudalie/cau-rl-corporal.webp",
    brand: "caudalie",
    line: ["resveratrollift", "cau-corporal"],
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluidas la sensible y la más seca.",
      tipo: "Crema corporal reafirmante.",
      necesidad: "Firmeza de brazos, busto, vientre, muslos y glúteos; atenúa la apariencia de la celulitis.",
      cuando: "Por la mañana y/o por la noche.",
      modo: "Aplicar sobre la piel limpia y seca. Calentar entre las manos y masajear con movimientos circulares, insistiendo en brazos, busto, vientre, muslos y glúteos."
    }
  },

  /* ---------- Caudalie · Vinoperfect ---------- */
  {
    id: "cau-vp-serum",
    name: "Sérum Resplandor Antimanchas con Viniferine, Alternativa a la Vitamina C",
    img: "imagenes/caudalie/cau-vp-serum.webp",
    brand: "caudalie",
    line: "vinoperfect",
    n: ["manchas", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluso la más sensible.",
      tipo: "Sérum antimanchas con viniferina.",
      necesidad: "Manchas de cualquier origen (sol, acné, embarazo, edad) y falta de luminosidad.",
      cuando: "Mañana y noche, antes de la crema.",
      modo: "Aplicar sobre rostro, cuello y escote. Dejar que penetre antes de la crema.",
      solar: "No fotosensibilizante. Llevar protección solar todo el día, incluso nublado, y repetir cada 2 horas en exposición prolongada. Aplicar el sérum antes de la crema solar.",
      nota: "Adecuado en embarazo."
    }
  },

  {
    id: "cau-vp-crema",
    name: "Crema Antimanchas Niacinamida",
    img: "imagenes/caudalie/cau-vp-crema.webp",
    brand: "caudalie",
    line: "vinoperfect",
    n: ["manchas"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluida la sensible.",
      tipo: "Crema de día antimanchas con niacinamida, disponible en recarga.",
      necesidad: "Prevenir y atenuar manchas por sol, edad, acné, embarazo o luz azul.",
      cuando: "Solo por la mañana, sola o después del sérum.",
      modo: "Aplicar sobre rostro y cuello, evitando el contorno de ojos.",
      solar: "Se puede combinar con una crema solar SPF50: esta impide la aparición de nuevas manchas.",
      nota: "Para el contorno de ojos, Caudalie prefiere el Tratamiento de Ojos Iluminador."
    }
  },

  {
    id: "cau-vp-noche",
    name: "Crema Noche con Ácido Glicólico Antimanchas",
    img: "imagenes/caudalie/cau-vp-noche.webp",
    brand: "caudalie",
    line: "vinoperfect",
    n: ["manchas", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluida la sensible.",
      tipo: "Crema de noche antimanchas con ácido glicólico; actúa como un peeling suave. Disponible en recarga.",
      necesidad: "Manchas oscuras, textura irregular y tono desigual.",
      cuando: "Solo por la noche, después del sérum.",
      modo: "Aplicar sobre rostro y cuello, evitando el contorno de ojos.",
      solar: "Para prevenir nuevas manchas por melasma del embarazo, Caudalie aconseja un solar SPF50 a diario.",
      nota: "Desaconsejada en contorno de ojos. Se puede usar en embarazo y lactancia, consultando con el médico."
    }
  },

  {
    id: "cau-vp-ojos",
    name: "Tratamiento de Ojos Iluminador Niacinamida + Cafeína",
    img: "imagenes/caudalie/cau-vp-ojos.webp",
    brand: "caudalie",
    line: "vinoperfect",
    n: ["ojos"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel; adecuado para ojos sensibles.",
      tipo: "Tratamiento de contorno de ojos sin perfume, con aplicador de cerámica.",
      necesidad: "Ojeras vasculares y pigmentarias; hidrata e ilumina.",
      cuando: "Mañana y noche, todos los días.",
      modo: "Aplicar sobre el contorno de ojos con el aplicador de cerámica, masajeando de dentro hacia fuera hasta su absorción."
    }
  },

  {
    id: "cau-vp-espuma",
    name: "Espuma Micropeeling Luminosidad con Ácido Mandélico (AHA)",
    img: "imagenes/caudalie/cau-vp-espuma.webp",
    brand: "caudalie",
    line: "vinoperfect",
    n: ["limpieza", "apagada", "manchas"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Espuma limpiadora y exfoliante de uso diario con ácido mandélico.",
      necesidad: "Tez apagada y poco uniforme: limpia en profundidad y elimina células muertas.",
      limpieza: "Doble limpieza · 2.º paso",
      limpiezaDet: "Limpia y exfolia, pero no desmaquilla. Para desmaquillar, Caudalie indica usar antes el Aceite Tratante Desmaquillante.",
      cuando: "A diario. Piel más sensible: 1 o 2 veces por semana.",
      modo: "Aplicar sobre la piel seca y masajear con movimientos circulares por todo el rostro. Dejar actuar 30 segundos y aclarar con agua abundante. Evitar el contorno de ojos."
    }
  },

  {
    id: "cau-vp-esencia",
    name: "Esencia con Ácido Glicólico Luminosidad",
    img: "imagenes/caudalie/cau-vp-esencia.webp",
    brand: "caudalie",
    line: "vinoperfect",
    n: ["manchas", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluida la sensible.",
      tipo: "Esencia exfoliante con ácido glicólico, primer paso del ritual antimanchas.",
      necesidad: "Prevenir y atenuar manchas por sol, acné, edad o embarazo; cutis apagado.",
      cuando: "Mañana y noche, antes del sérum; mejor por la noche si va a haber exposición al sol.",
      modo: "Aplicar sobre la piel limpia de rostro y cuello, con un algodón o con los dedos. Evitar el contorno de ojos.",
      solar: "No usar antes de exponerse al sol, porque contiene ácido glicólico. Si se aplica por la mañana, proteger la piel con una crema solar SPF50."
    }
  },

  {
    id: "cau-vp-manos",
    name: "Crema Antimanchas para Manos",
    img: "imagenes/caudalie/cau-vp-manos.webp",
    brand: "caudalie",
    line: "vinoperfect",
    n: ["manchas"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Crema de manos antimanchas.",
      necesidad: "Manchas oscuras de las manos; también nutre.",
      cuando: "Tantas veces como sea necesario, de día y de noche.",
      modo: "Masajear para que penetre bien.",
      solar: "En caso de exposición al sol, aplicar una crema solar SPF30-50 en las manos."
    }
  },

  {
    id: "cau-vp-mascarilla",
    name: "Mascarilla Peeling con Ácido Glicólico",
    img: "imagenes/caudalie/cau-vp-mascarilla.webp",
    brand: "caudalie",
    line: "vinoperfect",
    n: ["apagada", "manchas"],
    sk: ["seca", "grasa", "mixta", "imperfecciones"],
    d: {
      paciente: "Todo tipo de piel, excepto la sensible.",
      tipo: "Mascarilla exfoliante con ácido glicólico, 2 veces por semana.",
      necesidad: "Falta de luminosidad y textura irregular.",
      limpieza: "Exfoliante",
      limpiezaDet: "Mascarilla exfoliante: elimina células muertas y afina la textura de la piel.",
      cuando: "2 veces por semana.",
      modo: "Aplicar sobre la piel seca, evitando el contorno de ojos. Dejar actuar 10 minutos y aclarar con agua tibia.",
      nota: "No adecuada para piel sensible, porque contiene AHA."
    }
  },

  /* ---------- Caudalie · Vinopure ---------- */
  {
    id: "cau-vpu-serum",
    name: "Sérum con Ácido Salicílico Anti-imperfecciones",
    img: "imagenes/caudalie/cau-vpu-serum.webp",
    brand: "caudalie",
    line: "vinopure",
    n: ["acne", "poros"],
    sk: ["mixta", "grasa", "imperfecciones"],
    d: {
      paciente: "Piel mixta a grasa con tendencia acneica.",
      tipo: "Sérum con ácido salicílico natural.",
      necesidad: "Granos, poros y puntos negros, sin efecto rebote.",
      cuando: "Mañana y noche, antes de la crema. Si hay tirantez, solo una vez al día.",
      modo: "Aplicar sobre la piel limpia y seca, evitando el contorno de ojos. Dejar que penetre antes de la crema. También se puede aplicar en la espalda o localmente.",
      nota: "No recomendado en el embarazo, por precaución. En embarazo o lactancia, Caudalie prefiere el Sérum Vinoperfect para las marcas de acné."
    }
  },

  {
    id: "cau-vpu-tonico",
    name: "Tónico Purificante con Ácido Salicílico",
    img: "imagenes/caudalie/cau-vpu-tonico.webp",
    brand: "caudalie",
    line: "vinopure",
    n: ["acne", "poros"],
    sk: ["mixta", "grasa", "imperfecciones"],
    d: {
      paciente: "Piel mixta a grasa con tendencia acneica.",
      tipo: "Tónico purificante para rostro y cuerpo.",
      necesidad: "Poros dilatados, imperfecciones y brillos.",
      cuando: "Mañana y noche, todos los días.",
      modo: "Aplicar sobre la piel limpia de rostro o cuerpo. No aclarar. En el rostro, pulverizar con los ojos cerrados.",
      solar: "No fotosensibilizante. Si hay exposición al sol, usar protección solar SPF50 no comedogénica.",
      nota: "No recomendado en el embarazo, por precaución. En embarazo o lactancia, Caudalie prefiere el Sérum Vinoperfect para las marcas de acné."
    }
  },

  {
    id: "cau-vpu-gelatina",
    name: "Gelatina Limpiadora Purificante con Ácido Salicílico",
    img: "imagenes/caudalie/cau-vpu-gelatina.webp",
    brand: "caudalie",
    line: "vinopure",
    n: ["limpieza", "acne", "poros"],
    sk: ["mixta", "grasa", "imperfecciones"],
    d: {
      paciente: "Piel mixta a grasa con tendencia acneica.",
      tipo: "Gelatina limpiadora purificante, primer paso de la rutina anti-imperfecciones.",
      necesidad: "Limpia, minimiza los poros y reduce el exceso de sebo sin resecar.",
      limpieza: "Doble limpieza · 2.º paso",
      limpiezaDet: "Limpia pero no desmaquilla. Si hay maquillaje, Caudalie indica usar antes el Aceite Tratante Desmaquillante.",
      cuando: "Mañana y noche, todos los días.",
      modo: "Masajear sobre la piel húmeda, evitando el contorno de ojos, hasta formar una espuma fina. Aclarar con agua.",
      nota: "Con un tratamiento dermatológico que reseca se puede usar, consultando con el dermatólogo. No recomendado en el embarazo, por precaución. En embarazo o lactancia, Caudalie prefiere el Sérum Vinoperfect para las marcas de acné."
    }
  },

  {
    id: "cau-vpu-fluido",
    name: "Fluido Matificante Hidratante",
    img: "imagenes/caudalie/cau-vpu-fluido.webp",
    brand: "caudalie",
    line: "vinopure",
    n: ["acne", "poros"],
    sk: ["mixta", "grasa", "imperfecciones"],
    d: {
      paciente: "Piel mixta a grasa con tendencia acneica.",
      tipo: "Fluido hidratante matificante.",
      necesidad: "Hidratación, brillos, granos y puntos negros.",
      cuando: "Mañana y noche, solo o después del sérum.",
      modo: "Aplicar sobre la piel limpia y tonificada, evitando el contorno de ojos.",
      nota: "No recomendado en el embarazo, por precaución. En embarazo o lactancia, Caudalie prefiere el Sérum Vinoperfect para las marcas de acné."
    }
  },

  {
    id: "cau-vpu-stop",
    name: "Stop Granos con Ácido Salicílico",
    img: "imagenes/caudalie/cau-vpu-stop.webp",
    brand: "caudalie",
    line: "vinopure",
    n: ["acne"],
    sk: ["mixta", "grasa", "imperfecciones"],
    d: {
      paciente: "Piel mixta a grasa con imperfecciones.",
      tipo: "Tratamiento localizado para granos.",
      necesidad: "Granos localizados: los sanea y atenúa la rojez.",
      cuando: "Tantas veces como sea necesario.",
      modo: "Aplicar directamente sobre el grano y dejar secar 5 minutos, sin tocar ni frotar. Se puede usar como base correctora antes del maquillaje.",
      solar: "No fotosensibilizante. Si hay exposición al sol, aplicar después un protector solar Vinosun SPF50.",
      nota: "No recomendado en el embarazo, por precaución. En embarazo o lactancia, Caudalie prefiere el Sérum Vinoperfect para las marcas de acné."
    }
  },

  /* ---------- Caudalie · Cuidados corporales ---------- */
  {
    id: "cau-co-manos",
    name: "Crema Reparadora para Manos y Uñas",
    img: "imagenes/caudalie/cau-co-manos.webp",
    brand: "caudalie",
    line: "cau-corporal",
    n: ["corporal"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Piel seca a muy seca, apta para piel sensible.",
      tipo: "Crema de manos y uñas.",
      necesidad: "Manos secas: nutre, repara y fortalece uñas y cutículas.",
      cuando: "Tantas veces como sea necesario: tras lavarse las manos, antes de acostarse o al notarlas secas.",
      modo: "Aplicar sin olvidar uñas y cutículas."
    }
  },

  {
    id: "cau-co-manos-the",
    name: "Thé des Vignes Crema Reparadora para Manos y Uñas",
    img: "imagenes/caudalie/cau-co-manos-the.webp",
    brand: "caudalie",
    line: "cau-corporal",
    n: ["corporal"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Piel seca a muy seca, apta para piel sensible.",
      tipo: "Crema de manos y uñas con fragancia Thé des Vignes.",
      necesidad: "Manos secas: nutre, repara y fortalece uñas y cutículas.",
      cuando: "Tantas veces como sea necesario: tras lavarse las manos, antes de acostarse o al notarlas secas.",
      modo: "Aplicar sin olvidar uñas y cutículas."
    }
  },

  {
    id: "cau-co-gommage",
    name: "Gommage Crushed Cabernet",
    img: "imagenes/caudalie/cau-co-gommage.webp",
    brand: "caudalie",
    line: "cau-corporal",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Exfoliante corporal con pepitas de uva y azúcar moreno, 2 veces por semana.",
      necesidad: "Asperezas, renovación de la piel y firmeza.",
      limpieza: "Exfoliante corporal",
      limpiezaDet: "Primer paso de la rutina corporal; prepara la piel para la Leche Corporal o el Bálsamo Reparador.",
      cuando: "2 veces por semana.",
      modo: "Aplicar sobre la piel húmeda. Masajear con movimientos circulares por todo el cuerpo, insistiendo en rodillas y codos. Aclarar en la ducha.",
      nota: "Evitar en el embarazo, por precaución: contiene aceites esenciales."
    }
  },

  {
    id: "cau-co-leche",
    name: "Leche Corporal Hidratación 72h",
    img: "imagenes/caudalie/cau-co-leche.webp",
    brand: "caudalie",
    line: "cau-corporal",
    n: ["corporal", "seca"],
    sk: ["todas"],
    d: {
      paciente: "Piel seca a muy seca, sensible y con tendencia atópica. Toda la familia, desde los 3 años.",
      tipo: "Leche corporal hidratante 72 h de textura ligera.",
      necesidad: "Sequedad, tirantez, picor y rojeces.",
      cuando: "Mañana y noche, todos los días.",
      modo: "Aplicar sobre la piel limpia y seca. Calentar entre las manos y masajear todo el cuerpo con movimientos circulares ascendentes.",
      nota: "Adecuada en embarazo."
    }
  },

  {
    id: "cau-co-balsamo",
    name: "Bálsamo Corporal Reparador Ceramidas",
    img: "imagenes/caudalie/cau-co-balsamo.webp",
    brand: "caudalie",
    line: "cau-corporal",
    n: ["corporal", "seca"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Piel seca a muy seca, sensible y con tendencia atópica.",
      tipo: "Bálsamo corporal rico con ceramidas de uva, disponible en recarga.",
      necesidad: "Sequedad y picor: nutre 72 h y repara la barrera cutánea.",
      cuando: "Mañana y noche, todos los días.",
      modo: "Aplicar sobre la piel limpia y seca. Calentar entre las manos y masajear de abajo arriba, insistiendo en las zonas rugosas o con picor.",
      nota: "Adecuado en embarazo. Sin alérgenos."
    }
  },

  {
    id: "cau-co-labios-color",
    name: "Tratamiento para Labios con Color",
    img: "imagenes/caudalie/cau-co-labios-color.webp",
    brand: "caudalie",
    line: "cau-corporal",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Labios secos; adecuado para todos los tonos de piel.",
      tipo: "Bálsamo labial con color frambuesa: tratamiento y maquillaje.",
      necesidad: "Labios secos: nutre y repara.",
      cuando: "Tantas veces como sea necesario, de día y de noche.",
      modo: "Aplicar en labios y mejillas. En las mejillas, difuminar con los dedos. Una capa da un efecto natural; varias, un acabado más intenso."
    }
  },

  {
    id: "cau-co-labios-karite",
    name: "Tratamiento para Labios con Manteca de Karité",
    img: "imagenes/caudalie/cau-co-labios-karite.webp",
    brand: "caudalie",
    line: "cau-corporal",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Labios secos; todo tipo de piel.",
      tipo: "Stick labial con manteca de karité.",
      necesidad: "Labios secos: protege, calma e hidrata.",
      cuando: "Tantas veces como sea necesario, de día y de noche.",
      modo: "Aplicar sobre los labios."
    }
  },

  /* ---------- Caudalie · Cuidados capilares ---------- */
  {
    id: "cau-ca-champu",
    name: "Champú Densidad & Volumen",
    img: "imagenes/caudalie/cau-ca-champu.webp",
    brand: "caudalie",
    line: "cau-capilar",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de cabello, incluido el teñido.",
      tipo: "Champú sin sulfatos ni siliconas, con VineOxyl™.",
      necesidad: "Falta de volumen y densidad del cabello.",
      cuando: "Es apto para uso diario, aunque Caudalie recomienda lavar el cabello cada 2 días.",
      modo: "Aplicar sobre el cabello mojado, emulsionar y aclarar abundantemente. Repetir si es necesario. Evitar el contorno de ojos.",
      nota: "Al dejar siliconas y sulfatos puede hacer falta adaptarse unas semanas."
    }
  },

  {
    id: "cau-ca-serum",
    name: "Sérum Capilar Anticaída",
    img: "imagenes/caudalie/cau-ca-serum.webp",
    brand: "caudalie",
    line: "cau-capilar",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Cabello debilitado o con caída.",
      tipo: "Sérum capilar sin aclarado, con VineOxyl™.",
      necesidad: "Caída del cabello por estrés, cambio de estación, posparto o edad; refuerza la densidad.",
      cuando: "A diario durante 3 o 4 meses; después, 2 veces por semana para mantener los resultados.",
      modo: "Aplicar 3 o 4 pipetas por secciones sobre el cuero cabelludo, seco o húmedo. Masajear con las yemas y no aclarar. Evitar el contacto con los ojos.",
      nota: "Apto para mujeres en posparto."
    }
  },

  /* ---------- Caudalie · Vinosun (en la web oficial: «Cuidado solar») ---------- */
  {
    id: "cau-vs-crema",
    name: "Crema de Muy Alta Protección SPF50+",
    img: "imagenes/caudalie/cau-vs-crema.webp",
    brand: "caudalie",
    line: "vinosun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluso la más sensible. Toda la familia.",
      tipo: "Crema solar SPF50+ para rostro y escote.",
      necesidad: "Protección UVA/UVB con acción antiarrugas.",
      cuando: "Durante la exposición al sol, repetir cada 2 horas.",
      modo: "Aplicar en rostro y escote.",
      solar: "Evitar el sol entre las 12 h y las 16 h y llevar camiseta, gafas de sol y sombrero. No exponer directamente al sol a bebés ni a niños pequeños.",
      nota: "En bebés, desde los 6 meses y solo si la exposición solar es inevitable."
    }
  },

  {
    id: "cau-vs-fluido",
    name: "Fluido de Muy Alta Protección SPF50+",
    img: "imagenes/caudalie/cau-vs-fluido.webp",
    brand: "caudalie",
    line: "vinosun",
    n: ["fotoproteccion"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible. Toda la familia.",
      tipo: "Fluido solar SPF50+ para rostro y escote, sin perfume; sirve de base de maquillaje.",
      necesidad: "Protección diaria frente a UVA/UVB, luz azul e infrarrojos.",
      cuando: "Por la mañana, a diario. Durante la exposición al sol, repetir cada 2 horas.",
      modo: "Agitar y aplicar después de la rutina de belleza y antes del maquillaje, evitando el contorno de ojos.",
      solar: "Evitar el sol entre las 12 h y las 16 h y llevar camiseta, gafas de sol y sombrero. No exponer directamente al sol a bebés ni a niños pequeños.",
      nota: "En bebés, desde los 6 meses y solo si la exposición solar es inevitable."
    }
  },

  {
    id: "cau-vs-stick",
    name: "Stick Solar Invisible de Alta Protección SPF50",
    img: "imagenes/caudalie/cau-vs-stick.webp",
    brand: "caudalie",
    line: "vinosun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel. Toda la familia.",
      tipo: "Stick solar SPF50, sin perfume y resistente al agua.",
      necesidad: "Protección localizada de rostro, labios, lunares, cicatrices y tatuajes.",
      cuando: "Antes de cada exposición al sol. Durante la exposición al sol, repetir cada 2 horas.",
      modo: "Girar la rueda inferior y aplicar generosamente en rostro, labios, lunares, cicatrices y tatuajes.",
      solar: "Evitar el sol entre las 12 h y las 16 h y llevar camiseta, gafas de sol y sombrero. No exponer directamente al sol a bebés ni a niños pequeños.",
      nota: "En bebés, desde los 6 meses y solo si la exposición solar es inevitable."
    }
  },

  {
    id: "cau-vs-spray50",
    name: "Spray Invisible de Alta Protección SPF50",
    img: "imagenes/caudalie/cau-vs-spray50.webp",
    brand: "caudalie",
    line: "vinosun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluso la más sensible. Toda la familia.",
      tipo: "Spray solar SPF50 para rostro y cuerpo.",
      necesidad: "Protección UVA/UVB, luz azul e infrarrojos.",
      cuando: "Antes de cada exposición al sol. Durante la exposición al sol, repetir cada 2 horas.",
      modo: "Pulverizar generosamente sobre rostro y cuerpo, evitando el contorno de ojos.",
      solar: "Evitar el sol entre las 12 h y las 16 h y llevar camiseta, gafas de sol y sombrero. No exponer directamente al sol a bebés ni a niños pequeños.",
      nota: "En bebés, desde los 6 meses y solo si la exposición solar es inevitable."
    }
  },

  {
    id: "cau-vs-aceite",
    name: "Aceite Solar Embellecedor de Alta Protección SPF50",
    img: "imagenes/caudalie/cau-vs-aceite.webp",
    brand: "caudalie",
    line: "vinosun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluida la sensible. Adultos y niños desde los 3 años.",
      tipo: "Aceite solar SPF50 para rostro, cuerpo y cabello.",
      necesidad: "Protección UVA/UVB; realza el bronceado.",
      cuando: "Antes de cada exposición al sol. Durante la exposición al sol, repetir cada 2 horas.",
      modo: "Vaporizar generosamente sobre rostro, cuerpo y cabello, evitando el contorno de ojos.",
      solar: "Evitar el sol entre las 12 h y las 16 h y llevar camiseta, gafas de sol y sombrero. No exponer directamente al sol a bebés ni a niños pequeños."
    }
  },

  {
    id: "cau-vs-agua",
    name: "Agua Solar de Muy Alta Protección SPF50+",
    img: "imagenes/caudalie/cau-vs-agua.webp",
    brand: "caudalie",
    line: "vinosun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel. Toda la familia.",
      tipo: "Agua solar SPF50+ para rostro, cuerpo y cabello, con acabado seco.",
      necesidad: "Protección UVA/UVB sin efecto graso.",
      cuando: "Antes de cada exposición al sol. Durante la exposición al sol, repetir cada 2 horas.",
      modo: "Agitar para mezclar las dos fases y pulverizar generosamente sobre rostro, cuerpo y cabello, evitando el contorno de ojos.",
      solar: "Evitar el sol entre las 12 h y las 16 h y llevar camiseta, gafas de sol y sombrero. No exponer directamente al sol a bebés ni a niños pequeños.",
      nota: "En bebés, desde los 6 meses y solo si la exposición solar es inevitable."
    }
  },

  {
    id: "cau-vs-spray30",
    name: "Spray Invisible de Alta Protección SPF30",
    img: "imagenes/caudalie/cau-vs-spray30.webp",
    brand: "caudalie",
    line: "vinosun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluida la sensible. Adultos y niños desde los 3 años.",
      tipo: "Spray solar SPF30 para rostro y cuerpo.",
      necesidad: "Protección UVA/UVB, luz azul e infrarrojos.",
      cuando: "Antes de cada exposición al sol. Durante la exposición al sol, repetir cada 2 horas.",
      modo: "Vaporizar generosamente sobre rostro y cuerpo, evitando el contorno de ojos.",
      solar: "Evitar el sol entre las 12 h y las 16 h y llevar camiseta, gafas de sol y sombrero. No exponer directamente al sol a bebés ni a niños pequeños."
    }
  },

  {
    id: "cau-vs-aftersun",
    name: "Leche Reparadora After-Sun",
    img: "imagenes/caudalie/cau-vs-aftersun.webp",
    brand: "caudalie",
    line: "vinosun",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Leche after-sun para rostro y cuerpo.",
      necesidad: "Piel irritada tras el sol: nutre, repara y calma; prolonga el bronceado.",
      cuando: "Después de la exposición al sol. Se puede seguir usando todo el año para mantener el bronceado o hidratar la piel.",
      modo: "Aplicar sobre la piel limpia y seca."
    }
  },

  /* ---------- Filorga · NCEF ---------- */
  {
    id: "fil-ncef-revitalize-serum",
    name: "NCEF-REVITALIZE SERUM",
    img: "imagenes/filorga/fil-ncef-revitalize-serum.webp",
    brand: "filorga",
    line: "fil-ncef",
    n: ["arrugas", "flacidez", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluida la sensible.",
      tipo: "Sérum antiedad polirrevitalizante.",
      necesidad: "Piel más lisa, uniforme y luminosa.",
      cuando: "Mañana y noche, después de la limpieza.",
      modo: "Aplicar sobre rostro y cuello. Su acción aumenta si se combina con NCEF-REVITALIZE CREAM."
    }
  },

  {
    id: "fil-ncef-revitalize-creme",
    name: "NCEF-REVITALIZE CREAM",
    img: "imagenes/filorga/fil-ncef-revitalize-creme.webp",
    brand: "filorga",
    line: "fil-ncef",
    n: ["arrugas", "flacidez", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluida la sensible.",
      tipo: "Crema antiedad revitalizante y reafirmante.",
      necesidad: "Arrugas, pérdida de firmeza, de tono y de luminosidad.",
      cuando: "Mañana y noche, después de la limpieza.",
      modo: "Aplicar sobre rostro, cuello y escote. Su acción aumenta si antes se aplica NCEF-REVITALIZE SERUM."
    }
  },

  {
    id: "fil-ncef-revitalize-night",
    name: "NCEF-REVITALIZE NIGHT",
    img: "imagenes/filorga/fil-ncef-revitalize-night.webp",
    brand: "filorga",
    line: "fil-ncef",
    n: ["apagada", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, especialmente cansada o estresada.",
      tipo: "Crema de noche antiedad reparadora.",
      necesidad: "Regeneración nocturna de la piel: más juventud, luminosidad y vitalidad.",
      cuando: "Solo por la noche.",
      modo: "Aplicar sobre rostro y cuello limpios."
    }
  },

  {
    id: "fil-ncef-revitalize-eyes",
    name: "NCEF-REVITALIZE EYES",
    img: "imagenes/filorga/fil-ncef-revitalize-eyes.webp",
    brand: "filorga",
    line: "fil-ncef",
    n: ["ojos", "arrugas", "flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel; adecuado para el contorno de ojos sensible.",
      tipo: "Crema de contorno de ojos sin perfume ni colorantes.",
      necesidad: "Signos de la edad en el contorno de ojos, bolsas y ojeras.",
      cuando: "Por la mañana y/o por la noche.",
      modo: "Dar toquecitos por todo el contorno, incluido el párpado superior. Para más efecto, alisar del ángulo interno al externo."
    }
  },

  {
    id: "fil-ncef-shot",
    name: "NCEF-SHOT",
    img: "imagenes/filorga/fil-ncef-shot.webp",
    brand: "filorga",
    line: "fil-ncef",
    n: ["arrugas", "flacidez", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, especialmente cansada o desvitalizada.",
      tipo: "Sérum antiedad ultraconcentrado, en cura de 10 días.",
      necesidad: "Calidad de la piel y signos del envejecimiento.",
      cuando: "Mañana y noche durante 10 días, en cambios de estación o épocas de estrés o cansancio.",
      modo: "Agitar antes de usar. Cargar la pipeta hasta la marca, calentar en las manos y extender sobre rostro, cuello y escote, antes del sérum o la crema."
    }
  },

  {
    id: "fil-ncef-essence",
    name: "NCEF-ESSENCE",
    img: "imagenes/filorga/fil-ncef-essence.webp",
    brand: "filorga",
    line: "fil-ncef",
    n: ["deshidratacion", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Loción hidratante antiedad.",
      necesidad: "Hidrata, aporta luminosidad y prepara la piel para el resto de la rutina.",
      cuando: "Por la mañana y/o por la noche, antes del sérum o la crema.",
      modo: "Verter en la palma y aplicar con toquecitos sobre la piel limpia hasta su absorción. No aclarar."
    }
  },

  {
    id: "fil-ncef-revitalize-mask",
    name: "NCEF-REVITALIZE MASK",
    img: "imagenes/filorga/fil-ncef-revitalize-mask.webp",
    brand: "filorga",
    line: "fil-ncef",
    n: ["apagada"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Mascarilla de tela revitalizante de un solo uso.",
      necesidad: "Piel apagada: aporta volumen y luminosidad en 15 minutos.",
      cuando: "1 o 2 veces por semana.",
      modo: "Colocar sobre el rostro limpio y dejar 15 minutos. Retirar y masajear el sobrante. No aclarar."
    }
  },

  {
    id: "fil-meso-mask-ncef",
    name: "MESO-MASK NCEF",
    img: "imagenes/filorga/fil-meso-mask-ncef.webp",
    brand: "filorga",
    line: "fil-ncef",
    n: ["apagada", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluida la sensible.",
      tipo: "Mascarilla en crema de triple acción con PHA y niacinamida.",
      necesidad: "Revitaliza, repara la barrera cutánea y aporta luminosidad.",
      cuando: "2 veces por semana.",
      modo: "Aplicar una capa generosa en todo el rostro y el contorno de ojos. Dejar 20 minutos y retirar con un algodón húmedo."
    }
  },

  /* ---------- Filorga · TIME-FILLER ---------- */
  {
    id: "fil-time-filler-5xp-creme",
    name: "TIME-FILLER 5XP CREAM",
    img: "imagenes/filorga/fil-time-filler-5xp-creme.webp",
    brand: "filorga",
    line: "fil-timefiller",
    n: ["arrugas"],
    sk: ["seca"],
    d: {
      paciente: "Piel normal a seca.",
      tipo: "Crema antiarrugas facial.",
      necesidad: "Alisa 5 tipos de arrugas.",
      cuando: "Mañana y noche, todos los días.",
      modo: "Aplicar sobre rostro y cuello. Para más eficacia, pellizcar suavemente las arrugas con el pulgar y el índice."
    }
  },

  {
    id: "fil-time-filler-5xp-gel-creme",
    name: "TIME-FILLER 5XP GEL-CREAM",
    img: "imagenes/filorga/fil-time-filler-5xp-gel-creme.webp",
    brand: "filorga",
    line: "fil-timefiller",
    n: ["arrugas"],
    sk: ["mixta", "grasa"],
    d: {
      paciente: "Piel mixta a grasa.",
      tipo: "Gel-crema antiarrugas matificante.",
      necesidad: "Alisa 5 tipos de arrugas y matifica.",
      cuando: "Mañana y noche, todos los días.",
      modo: "Aplicar sobre rostro y cuello. Para más eficacia, pellizcar suavemente las arrugas con el pulgar y el índice."
    }
  },

  {
    id: "fil-time-filler-night-5xp",
    name: "TIME-FILLER NIGHT 5XP",
    img: "imagenes/filorga/fil-time-filler-night-5xp.webp",
    brand: "filorga",
    line: "fil-timefiller",
    n: ["arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Crema de noche antiarrugas.",
      necesidad: "5 tipos de arrugas: frente, entrecejo, patas de gallo, surcos nasolabiales y arrugas del sueño.",
      cuando: "Solo por la noche.",
      modo: "Aplicar sobre rostro, cuello y escote. Para más eficacia, pellizcar suavemente las arrugas con el pulgar y el índice."
    }
  },

  {
    id: "fil-time-filler-intensive-5xp",
    name: "TIME-FILLER INTENSIVE 5XP",
    img: "imagenes/filorga/fil-time-filler-intensive-5xp.webp",
    brand: "filorga",
    line: "fil-timefiller",
    n: ["arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Sérum antiarrugas intensivo.",
      necesidad: "Alisa 5 tipos de arrugas y líneas finas.",
      cuando: "Mañana y noche, todos los días.",
      modo: "Aplicar sobre rostro y cuello."
    }
  },

  {
    id: "fil-time-filler-shot-5xp",
    name: "TIME-FILLER SHOT 5XP",
    img: "imagenes/filorga/fil-time-filler-shot-5xp.webp",
    brand: "filorga",
    line: "fil-timefiller",
    n: ["arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel con primeras líneas de expresión.",
      tipo: "Sérum concentrado de aplicación localizada.",
      necesidad: "Líneas de expresión.",
      cuando: "Mañana y noche.",
      modo: "Aplicar localmente en frente, entrecejo, patas de gallo, labio superior y líneas de marioneta. Masajear hasta su absorción."
    }
  },

  {
    id: "fil-time-filler-eyes-5xp",
    name: "TIME-FILLER EYES 5XP",
    img: "imagenes/filorga/fil-time-filler-eyes-5xp.webp",
    brand: "filorga",
    line: "fil-timefiller",
    n: ["ojos", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Crema antiarrugas y antiojeras para contorno de ojos.",
      necesidad: "Patas de gallo, arrugas bajo el ojo, entrecejo, párpados caídos y ojeras.",
      cuando: "Mañana y noche.",
      modo: "Aplicar sobre el contorno de ojos."
    }
  },

  {
    id: "fil-time-filler-essence",
    name: "TIME-FILLER ESSENCE",
    img: "imagenes/filorga/fil-time-filler-essence.webp",
    brand: "filorga",
    line: "fil-timefiller",
    n: ["arrugas", "deshidratacion"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Loción antiarrugas, primer paso de la rutina de tratamiento.",
      necesidad: "Alisa, rehidrata y prepara la piel para los siguientes productos.",
      cuando: "Mañana y noche, como primer paso de la rutina.",
      modo: "Verter unas gotas en la palma y aplicar por rostro y cuello. No aclarar."
    }
  },

  {
    id: "fil-time-filler-mask",
    name: "TIME-FILLER MASK",
    img: "imagenes/filorga/fil-time-filler-mask.webp",
    brand: "filorga",
    line: "fil-timefiller",
    n: ["arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Mascarilla de tela antiedad con colágeno, de un solo uso.",
      necesidad: "Piel más lisa en 15 minutos.",
      cuando: "1 o 2 veces por semana.",
      modo: "Colocar sobre el rostro limpio y dejar 15 minutos. Masajear el sobrante desde el cuello hacia arriba. No aclarar."
    }
  },

  /* ---------- Filorga · LIFT-STRUCTURE ---------- */
  {
    id: "fil-lift-structure",
    name: "LIFT-STRUCTURE",
    img: "imagenes/filorga/fil-lift-structure.webp",
    brand: "filorga",
    line: "fil-liftstructure",
    n: ["flacidez", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Crema de día ultralifting y reafirmante.",
      necesidad: "Alisa los rasgos, redefine volúmenes y reafirma.",
      cuando: "Por la mañana, sola o con un sérum.",
      modo: "Aplicar con un masaje."
    }
  },

  {
    id: "fil-lift-structure-radiance",
    name: "LIFT-STRUCTURE RADIANCE",
    img: "imagenes/filorga/fil-lift-structure-radiance.webp",
    brand: "filorga",
    line: "fil-liftstructure",
    n: ["flacidez", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Fluido facial ultralifting e iluminador.",
      necesidad: "Alisa los rasgos, remodela volúmenes y aporta luminosidad.",
      cuando: "Por la mañana, después del sérum o de la crema.",
      modo: "Aplicar por todo el rostro."
    }
  },

  {
    id: "fil-sleep-and-lift",
    name: "SLEEP & LIFT",
    img: "imagenes/filorga/fil-sleep-and-lift.webp",
    brand: "filorga",
    line: "fil-liftstructure",
    n: ["flacidez", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Crema de noche ultralifting y reafirmante.",
      necesidad: "Redensifica la piel y recupera elasticidad durante la noche.",
      cuando: "Por la noche, sola o con un sérum.",
      modo: "Aplicar con un masaje."
    }
  },

  {
    id: "fil-lift-mask",
    name: "LIFT-MASK",
    img: "imagenes/filorga/fil-lift-mask.webp",
    brand: "filorga",
    line: "fil-liftstructure",
    n: ["flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Mascarilla de biocelulosa de un solo uso, efecto lifting.",
      necesidad: "Efecto lifting visible en 15 minutos.",
      cuando: "1 a 3 veces por semana.",
      modo: "Abrir, retirar las protecciones y adaptar al rostro. Dejar 15 minutos y masajear el sobrante hacia arriba por escote, cuello y rostro."
    }
  },

  /* ---------- Filorga · GLOBAL-REPAIR ---------- */
  {
    id: "fil-global-repair-advanced-cream",
    name: "GLOBAL-REPAIR ADVANCED CREAM",
    img: "imagenes/filorga/fil-global-repair-advanced-cream.webp",
    brand: "filorga",
    line: "fil-globalrepair",
    n: ["arrugas", "flacidez", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Piel madura.",
      tipo: "Crema facial antiedad reparadora.",
      necesidad: "Falta de densidad, de nutrición y de luminosidad.",
      cuando: "Mañana y noche, a diario.",
      modo: "Aplicar sobre rostro, cuello y escote. Por la mañana, capa fina con masaje. Por la noche, capa gruesa como mascarilla, sin retirar."
    }
  },

  {
    id: "fil-global-repair-advanced-elixir",
    name: "GLOBAL-REPAIR ADVANCED ELIXIR",
    img: "imagenes/filorga/fil-global-repair-advanced-elixir.webp",
    brand: "filorga",
    line: "fil-globalrepair",
    n: ["arrugas", "flacidez", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Piel madura.",
      tipo: "Sérum-aceite facial antiedad.",
      necesidad: "Corrección global de los signos del envejecimiento; nutre.",
      cuando: "Por la mañana y/o por la noche.",
      modo: "Calentar 3 o 4 gotas en la palma y extender del centro del rostro hacia fuera, incluido el cuello."
    }
  },

  {
    id: "fil-global-repair-intensive",
    name: "GLOBAL-REPAIR INTENSIVE",
    img: "imagenes/filorga/fil-global-repair-intensive.webp",
    brand: "filorga",
    line: "fil-globalrepair",
    n: ["arrugas", "flacidez", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, especialmente desvitalizada.",
      tipo: "Sérum antiedad multirrevitalizante.",
      necesidad: "Deshidratación, arrugas, pérdida de firmeza, rasgos caídos y falta de luminosidad.",
      cuando: "Por la mañana y/o por la noche.",
      modo: "Aplicar sobre rostro y cuello, evitando el contorno de ojos. Por la noche se puede mezclar con la crema GLOBAL-REPAIR y aplicar en capa gruesa, como mascarilla."
    }
  },

  {
    id: "fil-global-repair-essence",
    name: "GLOBAL-REPAIR ESSENCE",
    img: "imagenes/filorga/fil-global-repair-essence.webp",
    brand: "filorga",
    line: "fil-globalrepair",
    n: ["arrugas", "flacidez", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Piel madura.",
      tipo: "Loción facial antiedad nutritiva.",
      necesidad: "Revitaliza la piel y la prepara para el resto de la rutina.",
      cuando: "Por la mañana y/o por la noche, antes del sérum o la crema.",
      modo: "Agitar. Por la mañana, aplicar unas gotas con toquecitos. Por la noche, empapar algodones y dejarlos unos minutos sobre el rostro."
    }
  },

  {
    id: "fil-global-repair-baume",
    name: "GLOBAL-REPAIR BALM",
    img: "imagenes/filorga/fil-global-repair-baume.webp",
    brand: "filorga",
    line: "fil-globalrepair",
    n: ["arrugas", "flacidez", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Piel madura y desvitalizada.",
      tipo: "Bálsamo facial antiedad muy nutritivo.",
      necesidad: "Signos del envejecimiento y falta de nutrición y confort.",
      cuando: "Por la mañana y/o por la noche.",
      modo: "Calentar entre las manos y alisar del centro hacia fuera por rostro, cuello y escote. Terminar envolviendo el rostro con las palmas."
    }
  },

  {
    id: "fil-global-repair-advanced-eyes-lips",
    name: "GLOBAL-REPAIR ADVANCED EYES & LIPS",
    img: "imagenes/filorga/fil-global-repair-advanced-eyes-lips.webp",
    brand: "filorga",
    line: "fil-globalrepair",
    n: ["ojos", "arrugas", "flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Piel desvitalizada.",
      tipo: "Crema antiedad para contorno de ojos y labios.",
      necesidad: "Pérdida de firmeza, líneas finas y arrugas, ojeras y bolsas, falta de nutrición y luminosidad.",
      cuando: "A diario, por la mañana y/o por la noche.",
      modo: "Aplicar sobre las zonas que lo necesiten."
    }
  },

  /* ---------- Filorga · HYALU-FILLER ---------- */
  {
    id: "fil-hyalu-filler-serum",
    name: "HYALU-FILLER SERUM",
    img: "imagenes/filorga/fil-hyalu-filler-serum.webp",
    brand: "filorga",
    line: "fil-hyalufiller",
    n: ["deshidratacion", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel y todas las edades.",
      tipo: "Sérum voluminizador e hidratante con ácido hialurónico.",
      necesidad: "Rellena arrugas y líneas finas e hidrata intensamente.",
      cuando: "Mañana y noche.",
      modo: "Aplicar 2 o 3 gotas con la pipeta y alisar por rostro y cuello.",
      nota: "Contiene vitamina A: Filorga aconseja tener en cuenta la ingesta diaria antes de usarlo."
    }
  },

  {
    id: "fil-hyalu-filler-creme",
    name: "HYALU-FILLER CREAM",
    img: "imagenes/filorga/fil-hyalu-filler-creme.webp",
    brand: "filorga",
    line: "fil-hyalufiller",
    n: ["deshidratacion", "arrugas"],
    sk: ["sensible"],
    d: {
      paciente: "Adecuada para piel sensible.",
      tipo: "Crema voluminizadora e hidratante con ácido hialurónico.",
      necesidad: "Rellena arrugas y líneas finas e hidrata intensamente.",
      cuando: "Mañana y noche, sola o después del sérum.",
      modo: "Aplicar por rostro y cuello.",
      nota: "Contiene vitamina A: Filorga aconseja tener en cuenta la ingesta diaria antes de usarlo."
    }
  },

  {
    id: "fil-hydra-hyal-cream-gel",
    name: "HYDRA-HYAL GEL-CREAM",
    img: "imagenes/filorga/fil-hydra-hyal-cream-gel.webp",
    brand: "filorga",
    line: "fil-hyalufiller",
    n: ["deshidratacion"],
    sk: ["mixta", "grasa"],
    d: {
      paciente: "Piel mixta a grasa.",
      tipo: "Gel-crema matificante con dos ácidos hialurónicos.",
      necesidad: "Hidratación intensa, volumen y matificación.",
      cuando: "Mañana y noche, sola o después del sérum.",
      modo: "Aplicar por rostro y cuello."
    }
  },

  {
    id: "fil-hydra-aox",
    name: "HYDRA-AOX [5]",
    img: "imagenes/filorga/fil-hydra-aox.webp",
    brand: "filorga",
    line: "fil-hyalufiller",
    n: ["arrugas", "poros", "apagada", "deshidratacion"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, con primeros signos de la edad.",
      tipo: "Sérum antioxidante intensivo con vitaminas E, B3 y C.",
      necesidad: "Líneas finas, textura irregular, poros, tono apagado y deshidratación; protege de contaminación y luz azul.",
      cuando: "Mañana y noche, antes de la crema.",
      modo: "Aplicar por rostro y cuello."
    }
  },

  {
    id: "fil-hyalu-filler-mask",
    name: "HYALU-FILLER MASK",
    img: "imagenes/filorga/fil-hyalu-filler-mask.webp",
    brand: "filorga",
    line: "fil-hyalufiller",
    n: ["deshidratacion"],
    sk: ["seca"],
    d: {
      paciente: "Piel normal a seca.",
      tipo: "Mascarilla en crema calmante y voluminizadora.",
      necesidad: "Hidrata intensamente y calma las molestias.",
      cuando: "2 veces por semana.",
      modo: "Aplicar una capa gruesa sobre el rostro seco. Dejar 10 minutos y retirar el exceso con un algodón húmedo.",
      nota: "Contiene vitamina A: Filorga aconseja tener en cuenta la ingesta diaria antes de usarlo."
    }
  },

  {
    id: "fil-hyalu-filler-flash-mask",
    name: "HYALU-FILLER FLASH MASK",
    img: "imagenes/filorga/fil-hyalu-filler-flash-mask.webp",
    brand: "filorga",
    line: "fil-hyalufiller",
    n: ["deshidratacion", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, sobre todo deshidratada.",
      tipo: "Mascarilla de tela SOS de un solo uso.",
      necesidad: "Hidrata, aporta volumen y alisa en 15 minutos.",
      cuando: "1 o 2 veces por semana.",
      modo: "Colocar sobre el rostro limpio y dejar 15 minutos. Masajear el sobrante. No aclarar."
    }
  },

  {
    id: "fil-hyalu-filler-lips",
    name: "HYALU-FILLER LIPS",
    img: "imagenes/filorga/fil-hyalu-filler-lips.webp",
    brand: "filorga",
    line: "fil-hyalufiller",
    n: ["corporal"],
    sk: ["sensible"],
    d: {
      paciente: "Labios; adecuado para piel sensible.",
      tipo: "Bálsamo labial voluminizador.",
      necesidad: "Volumen inmediato e hidratación de los labios.",
      cuando: "A diario.",
      modo: "Aplicar sobre los labios.",
      nota: "Contiene vitamina A."
    }
  },

  /* ---------- Filorga · OXYGEN-GLOW ---------- */
  {
    id: "fil-oxygen-glow",
    name: "OXYGEN-GLOW",
    img: "imagenes/filorga/fil-oxygen-glow.webp",
    brand: "filorga",
    line: "fil-oxygenglow",
    n: ["apagada"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Crema facial iluminadora y alisante.",
      necesidad: "Alisa, unifica y aporta volumen y luminosidad.",
      cuando: "Mañana y noche.",
      modo: "Aplicar sobre la piel limpia."
    }
  },

  {
    id: "fil-oxygen-glow-cc-creme",
    name: "OXYGEN-GLOW CC CREAM",
    img: "imagenes/filorga/fil-oxygen-glow-cc-creme.webp",
    brand: "filorga",
    line: "fil-oxygenglow",
    n: ["apagada", "fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluida la más sensible.",
      tipo: "CC cream con color y SPF 30+.",
      necesidad: "Perfecciona y protege frente a UV, luz azul y contaminación.",
      cuando: "Por la mañana, en lugar de la crema hidratante.",
      modo: "Aplicar con toquecitos por rostro y cuello y alisar desde el centro, de abajo hacia arriba."
    }
  },

  {
    id: "fil-oxygen-glow-eyes",
    name: "OXYGEN-GLOW [EYES]",
    img: "imagenes/filorga/fil-oxygen-glow-eyes.webp",
    brand: "filorga",
    line: "fil-oxygenglow",
    n: ["ojos", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Crema de contorno de ojos alisante e iluminadora.",
      necesidad: "Alisa, aporta luminosidad y actúa sobre las ojeras.",
      cuando: "Mañana y noche.",
      modo: "Aplicar con toquecitos en el contorno de ojos, hasta los pómulos para un ligero efecto iluminador."
    }
  },

  {
    id: "fil-oxygen-peel",
    name: "OXYGEN-PEEL",
    img: "imagenes/filorga/fil-oxygen-peel.webp",
    brand: "filorga",
    line: "fil-oxygenglow",
    n: ["apagada", "arrugas", "poros"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Loción micropeeling con 6 ácidos.",
      necesidad: "Alisa arrugas y poros, hidrata y unifica la luminosidad.",
      limpieza: "Exfoliante",
      limpiezaDet: "Loción exfoliante sin aclarado, tras la limpieza.",
      cuando: "Por la noche.",
      modo: "Aplicar con un algodón sobre la piel limpia y desmaquillada, evitando el contorno de ojos. No aclarar."
    }
  },

  /* ---------- Filorga · OPTIM-EYES ---------- */
  {
    id: "fil-optim-eyes",
    name: "OPTIM-EYES",
    img: "imagenes/filorga/fil-optim-eyes.webp",
    brand: "filorga",
    line: "fil-optimeyes",
    n: ["ojos"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Crema de contorno de ojos revitalizante 3 en 1.",
      necesidad: "Ojeras, bolsas y líneas finas.",
      cuando: "Mañana y noche.",
      modo: "Alisar del ángulo interno al externo, incluido el párpado superior, y dar toquecitos. Después, en las patas de gallo, en forma de ocho. Se puede guardar en la nevera."
    }
  },

  {
    id: "fil-optim-eyes-cryo",
    name: "OPTIM-EYES CRYO",
    img: "imagenes/filorga/fil-optim-eyes-cryo.webp",
    brand: "filorga",
    line: "fil-optimeyes",
    n: ["ojos"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluidos ojos sensibles y usuarios de lentillas.",
      tipo: "Fluido descongestionante para contorno de ojos, sin perfume.",
      necesidad: "Bolsas, ojeras y líneas finas; mirada descansada en 60 segundos.",
      cuando: "Mañana y noche, o como retoque durante el día.",
      modo: "Girar la parte superior hasta oír un clic. Aplicar con toquecitos en el contorno de ojos."
    }
  },

  {
    id: "fil-optim-eyes-mask",
    name: "OPTIM-EYES MASK",
    img: "imagenes/filorga/fil-optim-eyes-mask.webp",
    brand: "filorga",
    line: "fil-optimeyes",
    n: ["ojos"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluida la sensible.",
      tipo: "Mascarilla de tela para contorno de ojos, de un solo uso.",
      necesidad: "Ojos cansados: ojeras, bolsas y arrugas.",
      cuando: "Filorga no indica la frecuencia.",
      modo: "Colocar sobre la piel limpia y dejar 15 minutos. Retirar y masajear la esencia sobrante. No aclarar."
    }
  },

  /* ---------- Filorga · AGE-PURIFY ---------- */
  {
    id: "fil-age-purify",
    name: "AGE-PURIFY",
    img: "imagenes/filorga/fil-age-purify.webp",
    brand: "filorga",
    line: "fil-agepurify",
    n: ["acne", "arrugas", "poros"],
    sk: ["mixta", "grasa", "imperfecciones"],
    d: {
      paciente: "Piel mixta a grasa con imperfecciones.",
      tipo: "Fluido facial de doble corrección, no comedogénico.",
      necesidad: "Arrugas e imperfecciones: poros, rojeces, brillos, granos y puntos negros.",
      cuando: "Mañana y noche.",
      modo: "Aplicar por todo el rostro."
    }
  },

  {
    id: "fil-age-purify-intensive",
    name: "AGE-PURIFY INTENSIVE",
    img: "imagenes/filorga/fil-age-purify-intensive.webp",
    brand: "filorga",
    line: "fil-agepurify",
    n: ["acne", "arrugas", "poros"],
    sk: ["mixta", "grasa", "imperfecciones"],
    d: {
      paciente: "Piel mixta a grasa con imperfecciones.",
      tipo: "Sérum de doble corrección, no comedogénico.",
      necesidad: "Arrugas e imperfecciones: poros, rojeces, brillos, granos y puntos negros.",
      cuando: "Mañana y noche.",
      modo: "Aplicar por todo el rostro."
    }
  },

  {
    id: "fil-age-purify-clean",
    name: "AGE-PURIFY CLEAN",
    img: "imagenes/filorga/fil-age-purify-clean.webp",
    brand: "filorga",
    line: "fil-agepurify",
    n: ["limpieza", "acne", "arrugas", "poros"],
    sk: ["mixta", "grasa", "imperfecciones"],
    d: {
      paciente: "Piel mixta a grasa con imperfecciones.",
      tipo: "Gel limpiador facial que se transforma en espuma fina.",
      necesidad: "Limpieza con acción sobre arrugas e imperfecciones.",
      limpieza: "Limpiador (sin paso indicado)",
      limpiezaDet: "Su ficha no lo sitúa en una rutina de varios pasos.",
      cuando: "Mañana y noche.",
      modo: "Aplicar sobre la piel húmeda y masajear hasta que forme una espuma fina. Aclarar."
    }
  },

  /* ---------- Filorga · SKIN-PREP ---------- */
  {
    id: "fil-perfecting-cleansing-oil",
    name: "SKIN-PREP PERFECTING CLEANSING OIL",
    img: "imagenes/filorga/fil-perfecting-cleansing-oil.webp",
    brand: "filorga",
    line: "fil-skinprep",
    n: ["limpieza"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, especialmente sensible, y ojos sensibles.",
      tipo: "Aceite desmaquillante y limpiador, incluso para maquillaje waterproof.",
      necesidad: "Desmaquilla, limpia y elimina el exceso de sebo; nutre y calma.",
      limpieza: "Doble limpieza · 1.er paso",
      limpiezaDet: "Inicio de la rutina SKIN-PREP. Continuar con la Enzymatic Cleansing Foam o el AHA Cleansing Gel.",
      cuando: "Filorga no indica el momento del día.",
      modo: "Masajear sobre la piel seca, emulsionar y aclarar con agua."
    }
  },

  {
    id: "fil-micellar-solution",
    name: "SKIN-PREP MICELLAR SOLUTION",
    img: "imagenes/filorga/fil-micellar-solution.webp",
    brand: "filorga",
    line: "fil-skinprep",
    n: ["limpieza"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Agua micelar 3 en 1 para rostro y ojos.",
      necesidad: "Limpia, desmaquilla e hidrata.",
      limpieza: "Doble limpieza · 1.er paso",
      limpiezaDet: "Inicio de la rutina SKIN-PREP. Continuar con el AHA Cleansing Gel o la Enzymatic Cleansing Foam.",
      cuando: "Mañana y noche, todos los días.",
      modo: "Aplicar con un algodón hasta que este quede limpio."
    }
  },

  {
    id: "fil-enzymatic-cleansing-foam",
    name: "SKIN-PREP ENZYMATIC CLEANSING FOAM",
    img: "imagenes/filorga/fil-enzymatic-cleansing-foam.webp",
    brand: "filorga",
    line: "fil-skinprep",
    n: ["limpieza", "poros"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, especialmente sensible, y ojos sensibles.",
      tipo: "Espuma limpiadora enzimática con papaína.",
      necesidad: "Elimina maquillaje y contaminación, cierra los poros y unifica la textura.",
      limpieza: "Doble limpieza · 2.º paso",
      limpiezaDet: "Después del Perfecting Cleansing Oil o la Micellar Solution, y antes de la crema exfoliante.",
      cuando: "Filorga no indica el momento del día.",
      modo: "Aplicar sobre la piel húmeda, masajear 30 segundos y aclarar."
    }
  },

  {
    id: "fil-aha-cleansing-gel",
    name: "SKIN PREP AHA CLEANSING GEL",
    img: "imagenes/filorga/fil-aha-cleansing-gel.webp",
    brand: "filorga",
    line: "fil-skinprep",
    n: ["limpieza", "poros"],
    sk: ["mixta", "grasa"],
    d: {
      paciente: "Piel mixta a grasa.",
      tipo: "Gel limpiador micropeeling con AHA.",
      necesidad: "Elimina impurezas, reduce los brillos y alisa la piel.",
      limpieza: "Doble limpieza · 2.º paso",
      limpiezaDet: "Después de la Micellar Solution o el Perfecting Cleansing Oil, y antes de la crema exfoliante.",
      cuando: "Filorga no indica el momento del día.",
      modo: "Aplicar sobre la piel húmeda y masajear 30 segundos. Cuando forme espuma, aclarar."
    }
  },

  {
    id: "fil-enzymatic-exfoliating-cream",
    name: "SKIN-PREP ENZYMATIC EXFOLIATING CREAM",
    img: "imagenes/filorga/fil-enzymatic-exfoliating-cream.webp",
    brand: "filorga",
    line: "fil-skinprep",
    n: ["limpieza", "poros"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Crema exfoliante enzimática y mecánica con arena volcánica.",
      necesidad: "Puntos negros y poros; efecto piel nueva.",
      limpieza: "Exfoliante",
      limpiezaDet: "Último paso de la rutina SKIN-PREP, después del aceite y la espuma.",
      cuando: "2 veces por semana.",
      modo: "Aplicar sobre el rostro húmedo y dejar 2 minutos. Masajear en círculos y aclarar, evitando el contorno de ojos."
    }
  },

  /* ---------- Filorga · SKIN-UNIFY ---------- */
  {
    id: "fil-skin-unify",
    name: "SKIN-UNIFY",
    img: "imagenes/filorga/fil-skin-unify.webp",
    brand: "filorga",
    line: "fil-skinunify",
    n: ["manchas", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Crema iluminadora antimanchas con vitamina C.",
      necesidad: "Manchas, tono irregular y falta de luminosidad.",
      cuando: "Mañana y noche.",
      modo: "Aplicar por rostro, cuello y escote."
    }
  },

  /* ---------- Filorga · PRO-COLLAGEN MICRO-GROWTH FACTOR ---------- */
  {
    id: "fil-pro-collagen-micro-growth-factor-serum",
    name: "PRO-COLLAGEN MICRO-GROWTH FACTOR SERUM",
    img: "imagenes/filorga/fil-pro-collagen-micro-growth-factor-serum.webp",
    brand: "filorga",
    line: "fil-procollagen",
    n: ["flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Sérum tensor y lifting con 7 % de complejo de péptidos.",
      necesidad: "Falta de firmeza; efecto tensor inmediato.",
      cuando: "Mañana y noche, antes de la crema hidratante.",
      modo: "Aplicar por rostro y cuello."
    }
  },

  {
    id: "fil-pro-collagen-micro-growth-factor-cream",
    name: "PRO-COLLAGEN MICRO-GROWTH FACTOR CREAM",
    img: "imagenes/filorga/fil-pro-collagen-micro-growth-factor-cream.webp",
    brand: "filorga",
    line: "fil-procollagen",
    n: ["flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Crema lifting y reafirmante con 5 % de complejo de péptidos.",
      necesidad: "Falta de firmeza y contornos poco definidos.",
      cuando: "Mañana y noche, después del sérum.",
      modo: "Aplicar por rostro y cuello."
    }
  },

  {
    id: "fil-pro-collagen-micro-growth-factor-eyes",
    name: "PRO-COLLAGEN MICRO-GROWTH FACTOR EYES",
    img: "imagenes/filorga/fil-pro-collagen-micro-growth-factor-eyes.webp",
    brand: "filorga",
    line: "fil-procollagen",
    n: ["ojos", "flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Sérum lifting para contorno de ojos, con aplicador roll-on.",
      necesidad: "Falta de firmeza en contorno de ojos y párpados.",
      cuando: "Mañana y noche, después del sérum y antes de la crema.",
      modo: "Alisar por todo el contorno y los párpados con el aplicador y dar toquecitos para favorecer la absorción."
    }
  },

  /* ---------- Filorga · UV CELLULAR-PROTECT ---------- */
  {
    id: "fil-uv-cellular-protect-face",
    name: "UV CELLULAR-PROTECT FACE",
    img: "imagenes/filorga/fil-uv-cellular-protect-face.webp",
    brand: "filorga",
    line: "fil-uv",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluida la sensible.",
      tipo: "Protector solar facial antiedad SPF 50+.",
      necesidad: "Protección UVA/UVB y signos del fotoenvejecimiento.",
      cuando: "Antes de la exposición al sol. Reaplicar con frecuencia, sobre todo tras sudar, bañarse o secarse.",
      modo: "Aplicar de forma generosa y uniforme por el rostro.",
      solar: "Aunque la piel esté protegida, evitar el sol en las horas centrales. No exponer a bebés ni a niños pequeños directamente al sol."
    }
  },

  {
    id: "fil-uv-cellular-protect-body",
    name: "UV CELLULAR-PROTECT FACE & BODY",
    img: "imagenes/filorga/fil-uv-cellular-protect-body.webp",
    brand: "filorga",
    line: "fil-uv",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluida la sensible.",
      tipo: "Protector solar antiedad SPF 50+ resistente al agua, para rostro y cuerpo.",
      necesidad: "Protección UVA/UVB y signos del fotoenvejecimiento.",
      cuando: "Antes de la exposición al sol. Reaplicar con frecuencia, sobre todo tras sudar, bañarse o secarse.",
      modo: "Aplicar de forma generosa y uniforme.",
      solar: "Aunque la piel esté protegida, evitar el sol en las horas centrales. No exponer a bebés ni a niños pequeños directamente al sol."
    }
  },

  {
    id: "fil-uv-cellular-protect-after-sun",
    name: "UV CELLULAR-PROTECT AFTER SUN",
    img: "imagenes/filorga/fil-uv-cellular-protect-after-sun.webp",
    brand: "filorga",
    line: "fil-uv",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Gel after-sun potenciador del bronceado.",
      necesidad: "Calma e hidrata tras el sol y potencia el bronceado.",
      cuando: "Después de la exposición al sol.",
      modo: "Aplicar por rostro y cuerpo sobre la piel limpia.",
      solar: "No contiene filtros UV ni protege de las quemaduras solares."
    }
  },

  /* ---------- Filorga · DAILY ---------- */
  {
    id: "fil-daily-peel-wrinkles",
    name: "DAILY PEEL – WRINKLES",
    img: "imagenes/filorga/fil-daily-peel-wrinkles.webp",
    brand: "filorga",
    line: "fil-daily",
    n: ["arrugas", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Todos los fototipos y tipos de piel, incluida la sensible.",
      tipo: "Peeling de noche antiarrugas con 10 % de AHA.",
      necesidad: "Arrugas, textura de la piel y falta de luminosidad.",
      limpieza: "Exfoliante",
      limpiezaDet: "Peeling de noche sin aclarado, tras la limpieza.",
      cuando: "Todas las noches.",
      modo: "Aplicar 1 o 2 pipetas sobre la piel limpia y seca de rostro, cuello y escote, evitando el contorno de ojos. No aclarar.",
      solar: "Contiene AHA: aplicar protector solar a diario y limitar la exposición al sol durante el uso y los 7 días siguientes."
    }
  },

  {
    id: "fil-daily-peel-dark-spots",
    name: "DAILY PEEL – DARK SPOTS",
    img: "imagenes/filorga/fil-daily-peel-dark-spots.webp",
    brand: "filorga",
    line: "fil-daily",
    n: ["manchas", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Todos los fototipos y tipos de piel, incluida la sensible.",
      tipo: "Peeling de noche antimanchas con 10 % de AHA.",
      necesidad: "Manchas solares, hormonales y postacné; tono y luminosidad.",
      limpieza: "Exfoliante",
      limpiezaDet: "Peeling de noche sin aclarado, tras la limpieza.",
      cuando: "Todas las noches.",
      modo: "Aplicar 1 o 2 pipetas sobre la piel limpia y seca de rostro, cuello y escote, evitando el contorno de ojos. No aclarar.",
      solar: "Contiene AHA: aplicar protector solar a diario y limitar la exposición al sol durante el uso y los 7 días siguientes."
    }
  },

  {
    id: "fil-daily-repair-mineral-uv-50",
    name: "DAILY REPAIR MINERAL UV 50",
    img: "imagenes/filorga/fil-daily-repair-mineral-uv-50.webp",
    brand: "filorga",
    line: "fil-daily",
    n: ["fotoproteccion", "rojeces"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, especialmente sensible o con rojeces.",
      tipo: "Fluido solar diario SPF 50 con filtro 100 % mineral.",
      necesidad: "Protección UV, refuerzo de la barrera cutánea y reducción de las rojeces.",
      cuando: "Todas las mañanas. Reaplicar si hay exposición al sol.",
      modo: "Aplicar por rostro y cuello como último paso de la rutina, antes del maquillaje.",
      solar: "Aunque la piel esté protegida, evitar el sol en las horas centrales. No exponer a bebés ni a niños pequeños directamente al sol."
    }
  },

  /* ---------- Filorga · Piel debilitada ---------- */
  {
    id: "fil-neocica",
    name: "NEOCICA",
    img: "imagenes/filorga/fil-neocica.webp",
    brand: "filorga",
    line: "fil-debilitada",
    n: ["rojeces", "seca"],
    sk: ["sensible"],
    d: {
      paciente: "Piel frágil o dañada, por ejemplo tras un procedimiento estético.",
      tipo: "Tratamiento reparador e hidratante.",
      necesidad: "Repara y calma la irritación.",
      cuando: "3 a 6 veces al día.",
      modo: "Aplicar en la zona afectada con toquecitos muy suaves."
    }
  },

  {
    id: "fil-universal-cream",
    name: "UNIVERSAL CREAM",
    img: "imagenes/filorga/fil-universal-cream.webp",
    brand: "filorga",
    line: "fil-debilitada",
    n: ["seca", "corporal"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel y toda la familia.",
      tipo: "Crema multifuncional para rostro y cuerpo.",
      necesidad: "Sequedad, tirantez e irritación por sol, cambios de temperatura, afeitado o jabones.",
      cuando: "Por la mañana y/o por la noche.",
      modo: "Aplicar en rostro y/o cuerpo. Es ideal después del sol, del afeitado o de otras agresiones."
    }
  },

  /* ---------- Filorga · Otros tratamientos ---------- */
  {
    id: "fil-sleep-and-peel-4-5",
    name: "SLEEP & PEEL 4.5",
    img: "imagenes/filorga/fil-sleep-and-peel-4-5.webp",
    brand: "filorga",
    line: "fil-otros",
    n: ["arrugas", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluida la sensible y la no acostumbrada a los ácidos.",
      tipo: "Crema de noche micropeeling con 4,5 % de AHA y BHA, en cura de un mes.",
      necesidad: "Líneas finas, textura de la piel y luminosidad.",
      limpieza: "Exfoliante",
      limpiezaDet: "Crema de noche exfoliante, no es un limpiador.",
      cuando: "Por la noche.",
      modo: "Aplicar por rostro, cuello y escote, evitando el contorno de ojos. Se puede usar en los labios, una noche sí y otra no.",
      solar: "Evitar la exposición prolongada al sol después de aplicarla y usar protección solar si hay exposición."
    }
  },

  {
    id: "fil-hand-pigment-protocol",
    name: "HAND PIGMENT PROTOCOL",
    img: "imagenes/filorga/fil-hand-pigment-protocol.webp",
    brand: "filorga",
    line: "fil-otros",
    n: ["manchas"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluida la sensible.",
      tipo: "Crema de manos antimanchas con vitamina C.",
      necesidad: "Manchas de las manos, tono irregular e hidratación.",
      cuando: "Mañana y noche. Se puede intensificar después de la exposición al sol.",
      modo: "Aplicar sobre las manos.",
      solar: "Terminar con el solar UV CELLULAR-PROTECT para proteger las manos y prevenir nuevas manchas.",
      nota: "Contiene vitamina A: Filorga aconseja tener en cuenta la ingesta diaria antes de usarlo."
    }
  },

  /* ---------- Sensilis · Higiene ---------- */
  {
    id: "sen-calmin",
    name: "Calm In Balm",
    img: "imagenes/sensilis/sen-calmin.webp",
    brand: "sensilis",
    line: "sen-higiene",
    n: ["limpieza", "rojeces"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible y reactiva; también antes y después de tratamientos médico-estéticos.",
      tipo: "Bálsamo limpiador en textura de cera fundente.",
      necesidad: "Limpieza profunda, incluso del maquillaje waterproof; calma la piel.",
      limpieza: "Doble limpieza · 1.er paso",
      limpiezaDet: "Sensilis lo indica como primer paso por su base de aceite.",
      cuando: "Mañana y noche.",
      modo: "Masajear una pequeña cantidad sobre el rostro con ayuda de la espátula. Retirar con un paño o algodón empapado en agua tibia."
    }
  },

  {
    id: "sen-mousse",
    name: "Gentle Cleansing Mousse",
    img: "imagenes/sensilis/sen-mousse.webp",
    brand: "sensilis",
    line: "sen-higiene",
    n: ["limpieza"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Piel seca, sensible y reactiva; también para preparar la piel antes de un tratamiento médico-estético.",
      tipo: "Espuma limpiadora sin jabón (syndet).",
      necesidad: "Limpia, hidrata y calma respetando microbiota, pH y manto lipídico.",
      limpieza: "Doble limpieza · 2.º paso",
      limpiezaDet: "Sensilis la indica como segundo paso por su base de agua.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Humedecer el rostro, masajear suavemente y retirar con abundante agua."
    }
  },

  {
    id: "sen-purify",
    name: "Purify Essential Cleanser",
    img: "imagenes/sensilis/sen-purify.webp",
    brand: "sensilis",
    line: "sen-higiene",
    n: ["limpieza", "acne", "poros"],
    sk: ["grasa", "imperfecciones"],
    d: {
      paciente: "Piel normal, grasa o propensa al acné.",
      tipo: "Gel limpiador purificante.",
      necesidad: "Elimina impurezas, minimiza poros y normaliza el sebo sin efecto rebote.",
      limpieza: "Doble limpieza · 2.º paso",
      limpiezaDet: "Sensilis lo indica como segundo paso por su base de agua.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Aplicar sobre el rostro ligeramente húmedo y masajear en círculos hasta emulsionar. Retirar con agua."
    }
  },

  {
    id: "sen-succinic",
    name: "Succinic Jelly Oil Cleanser",
    img: "imagenes/sensilis/sen-succinic.webp",
    brand: "sensilis",
    line: "sen-higiene",
    n: ["limpieza", "acne"],
    sk: ["mixta", "grasa", "imperfecciones"],
    d: {
      paciente: "Piel mixta o grasa, con tendencia a imperfecciones.",
      tipo: "Limpiador facial en 3 fases: gel, aceite y leche.",
      necesidad: "Reduce imperfecciones, controla el sebo, hidrata y calma.",
      limpieza: "Limpiador (sin paso indicado)",
      limpiezaDet: "Su ficha no lo sitúa en una rutina de varios pasos.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Sensilis no detalla cómo aplicarlo."
    }
  },

  {
    id: "sen-micellar",
    name: "Micellar Water AR",
    img: "imagenes/sensilis/sen-micellar.webp",
    brand: "sensilis",
    line: "sen-higiene",
    n: ["limpieza", "rojeces"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, especialmente sensible y con rojeces.",
      tipo: "Agua micelar sin aclarado.",
      necesidad: "Desmaquilla rostro y ojos; hidrata, calma y restaura la barrera.",
      limpieza: "Desmaquillante (sin paso indicado)",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Humedecer un algodón y limpiar la piel hasta eliminar todo el maquillaje. No es necesario aclarar."
    }
  },

  {
    id: "sen-biphasic",
    name: "Bi-Phasic Make-Up Remover",
    img: "imagenes/sensilis/sen-biphasic.webp",
    brand: "sensilis",
    line: "sen-higiene",
    n: ["limpieza"],
    sk: ["sensible"],
    d: {
      paciente: "Todo tipo de contorno de ojos, incluso sensible y reactivo.",
      tipo: "Desmaquillante bifásico para ojos y labios.",
      necesidad: "Elimina todo tipo de maquillaje, incluido el resistente al agua.",
      limpieza: "Desmaquillante de ojos y labios",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Agitar. Aplicar con un algodón y deslizar del interior al exterior del ojo."
    }
  },

  {
    id: "sen-palpebral",
    name: "Palpebral Relief ECZ",
    img: "imagenes/sensilis/sen-palpebral.webp",
    brand: "sensilis",
    line: "sen-higiene",
    n: ["limpieza", "ojos"],
    sk: ["sensible"],
    d: {
      paciente: "Párpados y contorno secos, reactivos y sensibles; párpados irritados con tendencia a eczema.",
      tipo: "Emulsión 2 en 1: desmaquillante y tratamiento de párpados.",
      necesidad: "Desmaquilla, incluso waterproof, y trata párpados irritados.",
      limpieza: "Desmaquillante y tratamiento",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "A diario como tratamiento, o para desmaquillar.",
      modo: "Para desmaquillar: aplicar con un algodón sobre el ojo cerrado, esperar unos minutos y arrastrar hacia las sienes sin frotar. Como tratamiento: aplicar sobre el párpado limpio y seco, sin retirar."
    }
  },

  {
    id: "sen-micropeelfoam",
    name: "Micro-Peeling Foam ATX B3",
    img: "imagenes/sensilis/sen-micropeelfoam.webp",
    brand: "sensilis",
    line: "sen-higiene",
    n: ["limpieza", "manchas"],
    sk: ["sensible"],
    d: {
      paciente: "Melasma, manchas solares o marcas postinflamatorias, en pieles sensibles.",
      tipo: "Espuma limpiadora microexfoliante despigmentante.",
      necesidad: "Limpia, exfolia suavemente y ayuda a reducir las manchas.",
      limpieza: "Limpiador microexfoliante",
      limpiezaDet: "Sensilis lo llama primer paso de la rutina despigmentante.",
      cuando: "Mañana y noche.",
      modo: "Masajear sobre la piel húmeda 30 segundos, evitando el contorno de ojos. Aclarar y secar sin frotar. Continuar con el sérum despigmentante.",
      solar: "Finalizar la rutina de día con un fotoprotector de amplio espectro."
    }
  },

  {
    id: "sen-blackpeel",
    name: "Resurfacing Black Peel",
    img: "imagenes/sensilis/sen-blackpeel.webp",
    brand: "sensilis",
    line: "sen-higiene",
    n: ["apagada"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, especialmente con textura irregular, apagada o estresada; también antes de un tratamiento cosmético.",
      tipo: "Peeling físico con carbón vegetal.",
      necesidad: "Elimina células muertas, aporta luminosidad y alisa el relieve.",
      limpieza: "Exfoliante",
      limpiezaDet: "Peeling físico de microdermoabrasión suave.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Sensilis no detalla cómo aplicarlo."
    }
  },

  {
    id: "sen-toner",
    name: "Purify Balancing Toner",
    img: "imagenes/sensilis/sen-toner.webp",
    brand: "sensilis",
    line: "sen-higiene",
    n: ["acne", "poros"],
    sk: ["grasa", "imperfecciones"],
    d: {
      paciente: "Piel normal, grasa o propensa al acné, con poros visibles o brillos.",
      tipo: "Tónico purificante.",
      necesidad: "Minimiza poros y regula el sebo sin efecto rebote; hidrata.",
      limpieza: "Tónico, después de la limpieza",
      limpiezaDet: "Se aplica sobre el rostro ya limpio.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Tras la limpieza, aplicar con un algodón o con los dedos a pequeños toques. Esperar un minuto antes del tratamiento."
    }
  },

  {
    id: "sen-coolrescue",
    name: "The Cool Rescue",
    img: "imagenes/sensilis/sen-coolrescue.webp",
    brand: "sensilis",
    line: "sen-higiene",
    n: ["rojeces"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible, reactiva, irritada o con rojeces; también tras un procedimiento médico-estético.",
      tipo: "Bruma calmante e hidratante.",
      necesidad: "Calma y refresca de forma inmediata.",
      cuando: "Durante el día, a demanda, o como tónico en la rutina diaria.",
      modo: "Pulverizar sobre el rostro a unos 10-15 cm."
    }
  },

  /* ---------- Sensilis · Upgrade ---------- */
  {
    id: "sen-upgradeday",
    name: "Upgrade Day Cream",
    img: "imagenes/sensilis/sen-upgradeday.webp",
    brand: "sensilis",
    line: "sen-upgrade",
    n: ["flacidez", "arrugas"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Piel sensible con tendencia a la sequedad y envejecimiento moderado.",
      tipo: "Crema reafirmante de día.",
      necesidad: "Firmeza, arrugas y redefinición del óvalo facial.",
      cuando: "Por el día.",
      modo: "Aplicar de medio rostro hasta el mentón, de dentro hacia fuera; después en la frente, de abajo hacia arriba, y terminar en el cuello con movimientos ascendentes."
    }
  },

  {
    id: "sen-upgradear",
    name: "Upgrade AR",
    img: "imagenes/sensilis/sen-upgradear.webp",
    brand: "sensilis",
    line: "sen-upgrade",
    n: ["flacidez", "arrugas", "rojeces"],
    sk: ["sensible"],
    d: {
      paciente: "Piel enrojecida, con ardor o picor, en retinización o tras tratamientos que sensibilizan (peelings, láser no ablativo...).",
      tipo: "Crema sorbete reafirmante y calmante.",
      necesidad: "Arrugas, firmeza y rojeces.",
      cuando: "Día y noche.",
      modo: "Aplicar de medio rostro hasta el mentón, de dentro hacia fuera; después en la frente, de abajo hacia arriba, y terminar en el cuello con movimientos ascendentes."
    }
  },

  {
    id: "sen-upgradefluid",
    name: "Upgrade Fluid",
    img: "imagenes/sensilis/sen-upgradefluid.webp",
    brand: "sensilis",
    line: "sen-upgrade",
    n: ["flacidez", "arrugas"],
    sk: ["grasa", "sensible"],
    d: {
      paciente: "Piel grasa y, especialmente, sensible.",
      tipo: "Fluido reafirmante con acabado mate.",
      necesidad: "Arrugas, líneas de expresión y óvalo facial.",
      cuando: "Por el día.",
      modo: "Aplicar unas gotas de medio rostro hasta el mentón, de dentro hacia fuera, y en la frente, de abajo hacia arriba. Añadir una gota para el cuello y masajear hacia arriba."
    }
  },

  {
    id: "sen-upgradeserum",
    name: "Upgrade High Potency Serum",
    img: "imagenes/sensilis/sen-upgradeserum.webp",
    brand: "sensilis",
    line: "sen-upgrade",
    n: ["flacidez", "arrugas", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, especialmente deshidratada o flácida.",
      tipo: "Gel-sérum reafirmante concentrado.",
      necesidad: "Arrugas, flacidez y tono apagado.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Aplicar unas gotas de medio rostro hasta el mentón, de dentro hacia fuera, y en la frente, de abajo hacia arriba. Añadir una gota para el cuello y masajear hacia arriba."
    }
  },

  {
    id: "sen-upgradenight",
    name: "Upgrade Night Cream",
    img: "imagenes/sensilis/sen-upgradenight.webp",
    brand: "sensilis",
    line: "sen-upgrade",
    n: ["flacidez", "arrugas"],
    sk: ["seca"],
    d: {
      paciente: "Piel propensa a la sequedad con pérdida de firmeza, o que busca un descanso del retinol.",
      tipo: "Tratamiento reafirmante de noche.",
      necesidad: "Reafirma, remodela, reduce arrugas y renueva la piel.",
      cuando: "Por la noche.",
      modo: "Aplicar de medio rostro hasta el mentón, de dentro hacia fuera; después en la frente, de abajo hacia arriba, y terminar en el cuello con movimientos ascendentes.",
      nota: "Sensilis la considera ideal en embarazo y lactancia."
    }
  },

  {
    id: "sen-upgradeeyes",
    name: "Upgrade Eyes",
    img: "imagenes/sensilis/sen-upgradeeyes.webp",
    brand: "sensilis",
    line: "sen-upgrade",
    n: ["ojos", "flacidez"],
    sk: ["grasa"],
    d: {
      paciente: "Piel normal o grasa que busca reafirmar el contorno de ojos; indicado para el párpado superior.",
      tipo: "Emulsión restauradora para contorno de ojos.",
      necesidad: "Flacidez del contorno, bolsas y ojeras.",
      cuando: "Día y noche.",
      modo: "Aplicar con las yemas por todo el contorno, del ángulo interno al externo, con un ligero masaje."
    }
  },

  /* ---------- Sensilis · Eternalist A.G.E. ---------- */
  {
    id: "sen-eternday",
    name: "Eternalist A.G.E. Day Cream",
    img: "imagenes/sensilis/sen-eternday.webp",
    brand: "sensilis",
    line: "sen-eternalist",
    n: ["arrugas", "flacidez", "seca"],
    sk: ["seca"],
    d: {
      paciente: "Piel con tendencia a la sequedad, edad aparente mayor de 45 años, arrugas en reposo y pérdida de firmeza; también en perimenopausia.",
      tipo: "Crema de día antiglicación.",
      necesidad: "Redensifica, retexturiza e ilumina.",
      cuando: "Por el día.",
      modo: "Aplicar con las yemas sobre pómulos y mentón con masajes ascendentes; después la frente, del centro a los extremos."
    }
  },

  {
    id: "sen-eternretinol",
    name: "Eternalist A.G.E. Retinol",
    img: "imagenes/sensilis/sen-eternretinol.webp",
    brand: "sensilis",
    line: "sen-eternalist",
    n: ["arrugas", "flacidez", "rojeces"],
    sk: ["sensible"],
    d: {
      paciente: "Quien quiere iniciar la retinización o descansar del retinol puro; también piel con rojeces o tendencia a rosácea o cuperosis.",
      tipo: "Crema de noche antiedad con retinyl palmitate liposomado.",
      necesidad: "Redensifica, retexturiza e ilumina.",
      cuando: "Por la noche: empezar en noches alternas y aumentar según tolerancia.",
      modo: "Aplicar con las yemas sobre pómulos, mentón y frente. Evitar el contorno de ojos, excepto la pata de gallo.",
      nota: "Sensilis indica en la ficha de Peptide Reti-V que el retinol está contraindicado en embarazo y lactancia."
    }
  },

  {
    id: "sen-eternretinolserum",
    name: "Eternalist A.G.E. Retinol Serum",
    img: "imagenes/sensilis/sen-eternretinolserum.webp",
    brand: "sensilis",
    line: "sen-eternalist",
    n: ["arrugas"],
    sk: ["grasa", "sensible"],
    d: {
      paciente: "Piel grasa que quiere iniciar la retinización o descansar del retinol puro.",
      tipo: "Sérum de retinol rellenador con efecto lifting.",
      necesidad: "Rellena y corrige arrugas.",
      cuando: "Por la noche: empezar en noches alternas y aumentar según tolerancia.",
      modo: "Aplicar con las yemas sobre pómulos, mentón y frente. Evitar el contorno de ojos, excepto la pata de gallo.",
      nota: "Sensilis indica en la ficha de Peptide Reti-V que el retinol está contraindicado en embarazo y lactancia."
    }
  },

  {
    id: "sen-eternalistretexp",
    name: "Eternalist A.G.E. Retinol Expert",
    img: "imagenes/sensilis/sen-eternalistretexp.webp",
    brand: "sensilis",
    line: "sen-eternalist",
    n: ["arrugas", "flacidez", "rojeces"],
    sk: ["sensible"],
    d: {
      paciente: "Personas ya habituadas al retinol que quieren subir la concentración; actúa en pieles con rosácea.",
      tipo: "Tratamiento de noche con 0,3 % de retinol puro microencapsulado.",
      necesidad: "Arrugas, flacidez y pérdida de función barrera por glicación.",
      cuando: "Por la noche: empezar en noches alternas y aumentar según tolerancia.",
      modo: "Aplicar en rostro y escote. Evitar el contorno de ojos, excepto las patas de gallo.",
      nota: "Sensilis indica en la ficha de Peptide Reti-V que el retinol está contraindicado en embarazo y lactancia."
    }
  },

  {
    id: "sen-eternserumai",
    name: "Eternalist A.G.E. Serum AI",
    img: "imagenes/sensilis/sen-eternserumai.webp",
    brand: "sensilis",
    line: "sen-eternalist",
    n: ["arrugas", "flacidez", "rojeces"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, edad aparente de 45 años o más, con arrugas en reposo; también perimenopausia y rojeces.",
      tipo: "Sérum redensificante antiglicación.",
      necesidad: "Mejora la condición global de la piel y disminuye el enrojecimiento.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Tomar 3 cantidades del tamaño de un guisante. Masajear pómulos y mentón hacia arriba, y la frente del centro a los extremos."
    }
  },

  {
    id: "sen-eterneyes",
    name: "Eternalist A.G.E. Eyes",
    img: "imagenes/sensilis/sen-eterneyes.webp",
    brand: "sensilis",
    line: "sen-eternalist",
    n: ["ojos", "arrugas", "flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Quien busca mejorar arrugas y flacidez en el contorno de ojos.",
      tipo: "Crema bálsamo para contorno de ojos con aplicador metálico.",
      necesidad: "Arrugas, bolsas, ojeras y párpado caído.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Aplicar con el aplicador metálico en círculos por el contorno exterior y terminar con toquecitos."
    }
  },

  /* ---------- Sensilis · Peptide [AR] ---------- */
  {
    id: "sen-peptidetriserum",
    name: "Peptide Nad+ PDRN",
    img: "imagenes/sensilis/sen-peptidetriserum.webp",
    brand: "sensilis",
    line: "sen-peptide",
    n: ["arrugas", "flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Quien busca un sérum 'todo en uno' antiedad.",
      tipo: "Tri-sérum rejuvenecedor con 3 texturas.",
      necesidad: "Revierte los signos del envejecimiento; no necesita crema a continuación.",
      cuando: "Día y noche.",
      modo: "Una pulsación. Aplicar sobre la piel limpia y seca, de dentro hacia fuera y de abajo arriba. Si se usa crema, va antes de ella.",
      solar: "No contiene filtros ni sensibiliza al sol. Por la mañana, terminar siempre con protección solar.",
      nota: "Embarazo y lactancia: Sensilis indica que no hay estudios de incompatibilidad, pero recomienda consultar con el dermatólogo."
    }
  },

  {
    id: "sen-peptidecream",
    name: "Peptide AR Cream",
    img: "imagenes/sensilis/sen-peptidecream.webp",
    brand: "sensilis",
    line: "sen-peptide",
    n: ["flacidez", "rojeces"],
    sk: ["grasa"],
    d: {
      paciente: "Piel normal o con tendencia grasa que busca firmeza y calma.",
      tipo: "Crema sorbete lifting y calmante.",
      necesidad: "Firmeza, elasticidad, sequedad y sensibilidad.",
      cuando: "Día y noche.",
      modo: "Aplicar de medio rostro hasta el mentón, de dentro hacia fuera; después en la frente, de abajo hacia arriba, y terminar en el cuello con movimientos ascendentes."
    }
  },

  {
    id: "sen-peptidebalm",
    name: "Peptide AR Balm",
    img: "imagenes/sensilis/sen-peptidebalm.webp",
    brand: "sensilis",
    line: "sen-peptide",
    n: ["flacidez", "seca", "rojeces"],
    sk: ["seca"],
    d: {
      paciente: "Piel normal o seca que busca firmeza y calma.",
      tipo: "Bálsamo sorbete lifting y calmante.",
      necesidad: "Firmeza, elasticidad, sequedad y sensibilidad.",
      cuando: "Día y noche.",
      modo: "Aplicar de medio rostro hasta el mentón, de dentro hacia fuera; después en la frente, de abajo hacia arriba, y terminar en el cuello con movimientos ascendentes."
    }
  },

  {
    id: "sen-peptideeyelisss",
    name: "Peptide Eye Lisss",
    img: "imagenes/sensilis/sen-peptideeyelisss.webp",
    brand: "sensilis",
    line: "sen-peptide",
    n: ["ojos", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Preocupación por las arrugas del contorno y la caída del párpado.",
      tipo: "Contorno de ojos lifting con aplicador metálico.",
      necesidad: "Alisa arrugas, eleva el párpado superior e ilumina.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Aplicar el tamaño de una lenteja sobre la piel limpia y seca, antes del tratamiento, con el aplicador hacia el contorno y el párpado superior."
    }
  },

  {
    id: "sen-peptideretiv",
    name: "Peptide Reti-V",
    img: "imagenes/sensilis/sen-peptideretiv.webp",
    brand: "sensilis",
    line: "sen-peptide",
    n: ["arrugas"],
    sk: ["sensible"],
    d: {
      paciente: "Quien no tolera o no puede usar retinol, incluidas embarazadas y lactantes.",
      tipo: "Perlas regeneradoras nocturnas con bakuchiol.",
      necesidad: "Corrige 10 signos del envejecimiento de la piel sensible.",
      cuando: "Todas las noches, como último paso y en lugar de la crema. No necesita retinización.",
      modo: "Aplicar con la espátula incluida.",
      solar: "Puede sensibilizar ligeramente la piel al día siguiente. Siempre es recomendable usar protector solar.",
      nota: "Segura en embarazo y lactancia, según Sensilis, aunque aconseja consultar con el dermatólogo o ginecólogo."
    }
  },

  /* ---------- Sensilis · Origin Pro EGF-5 ---------- */
  {
    id: "sen-originserum",
    name: "Origin Pro EGF-5 Serum",
    img: "imagenes/sensilis/sen-originserum.webp",
    brand: "sensilis",
    line: "sen-originpro",
    n: ["arrugas", "flacidez"],
    sk: ["mixta", "grasa"],
    d: {
      paciente: "Piel mixta o con tendencia grasa, en retinización, o que busca una rutina minimalista.",
      tipo: "Sérum rejuvenecedor con 5 factores de crecimiento.",
      necesidad: "Todos los signos de la edad.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Aplicar unas gotas de medio rostro hasta el mentón, de dentro hacia fuera, y en la frente, de abajo hacia arriba. Añadir una gota para el cuello y masajear hacia arriba."
    }
  },

  {
    id: "sen-origincream",
    name: "Origin Pro EGF-5 Cream",
    img: "imagenes/sensilis/sen-origincream.webp",
    brand: "sensilis",
    line: "sen-originpro",
    n: ["arrugas", "flacidez"],
    sk: ["seca"],
    d: {
      paciente: "Piel normal o con tendencia a la sequedad, en retinización, o que busca una rutina minimalista.",
      tipo: "Crema rica rejuvenecedora y regeneradora.",
      necesidad: "Todos los signos de la edad.",
      cuando: "Día y noche.",
      modo: "Aplicar de medio rostro hasta el mentón, de dentro hacia fuera; después en la frente, de abajo hacia arriba, y terminar en el cuello con movimientos ascendentes."
    }
  },

  {
    id: "sen-origineyes",
    name: "Origin Pro EGF-5 Eyes",
    img: "imagenes/sensilis/sen-origineyes.webp",
    brand: "sensilis",
    line: "sen-originpro",
    n: ["ojos"],
    sk: ["todas"],
    d: {
      paciente: "Hinchazón, ojeras vasculares e hiperpigmentadas y signos de la edad en el contorno.",
      tipo: "Contorno de ojos con pigmentos beige iluminadores.",
      necesidad: "Bolsas, ojeras y envejecimiento del contorno.",
      cuando: "Día y noche.",
      modo: "Aplicar con el aplicador del ángulo interno al externo. Presionar en círculos alrededor del ojo."
    }
  },

  /* ---------- Sensilis · Origin Exo ---------- */
  {
    id: "sen-originproexo",
    name: "Origin Exo Energy",
    img: "imagenes/sensilis/sen-originproexo.webp",
    brand: "sensilis",
    line: "sen-originexo",
    n: ["arrugas", "flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Piel con signos de daño acumulado y poca capacidad de recuperación; también tras láser fraccionado no ablativo.",
      tipo: "Crema de regeneración avanzada con exosomas.",
      necesidad: "Refuerza la regeneración y la estructura cutánea.",
      cuando: "Mañana y/o noche, a diario.",
      modo: "Aplicar sobre la piel limpia y seca."
    }
  },

  /* ---------- Sensilis · Supreme ---------- */
  {
    id: "sen-supremeday",
    name: "Supreme Day Cream SPF15",
    img: "imagenes/sensilis/sen-supremeday.webp",
    brand: "sensilis",
    line: "sen-supreme",
    n: ["arrugas", "flacidez"],
    sk: ["seca"],
    d: {
      paciente: "Piel normal o con tendencia a la sequedad, con líneas de expresión; también afectada por la contaminación.",
      tipo: "Crema de día antioxidante con SPF 15.",
      necesidad: "Elasticidad, firmeza e hidratación.",
      cuando: "Por el día.",
      modo: "Aplicar de medio rostro hasta el mentón, de dentro hacia fuera; después en la frente, de abajo hacia arriba, y terminar en el cuello con movimientos ascendentes."
    }
  },

  {
    id: "sen-supremenight",
    name: "Supreme Night Cream",
    img: "imagenes/sensilis/sen-supremenight.webp",
    brand: "sensilis",
    line: "sen-supreme",
    n: ["arrugas", "flacidez", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel con arrugas de expresión, flacidez incipiente y falta de brillo.",
      tipo: "Crema-gel de noche detox y reparadora.",
      necesidad: "Repara las agresiones durante la noche.",
      cuando: "Por la noche.",
      modo: "Aplicar de medio rostro hasta el mentón, de dentro hacia fuera; después en la frente, de abajo hacia arriba, y terminar en el cuello con movimientos ascendentes."
    }
  },

  {
    id: "sen-supremebooster",
    name: "Supreme Booster FeCE",
    img: "imagenes/sensilis/sen-supremebooster.webp",
    brand: "sensilis",
    line: "sen-supreme",
    n: ["apagada"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, para prevenir el envejecimiento prematuro y ganar luminosidad.",
      tipo: "Sérum antioxidante y antipolución.",
      necesidad: "Protege de agentes externos y aporta luminosidad.",
      cuando: "En la rutina diaria.",
      modo: "Aplicar unas gotas de medio rostro al mentón, o mezclarlas con el tratamiento habitual. Añadir una gota para el cuello."
    }
  },

  {
    id: "sen-supremeeyes",
    name: "Supreme Eyes",
    img: "imagenes/sensilis/sen-supremeeyes.webp",
    brand: "sensilis",
    line: "sen-supreme",
    n: ["ojos", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Primeras arrugas de expresión, contorno deshidratado u ojeras pigmentadas.",
      tipo: "Emulsión fluida para contorno de ojos.",
      necesidad: "Alisa arrugas, hidrata y reduce la coloración de las ojeras.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Aplicar de la parte externa a la interna del ojo, a toquecitos, hasta su absorción."
    }
  },

  /* ---------- Sensilis · Skin Glow ---------- */
  {
    id: "sen-glowserum",
    name: "Skin Glow Beyond C Serum",
    img: "imagenes/sensilis/sen-glowserum.webp",
    brand: "sensilis",
    line: "sen-skinglow",
    n: ["apagada"],
    sk: ["todas"],
    d: {
      paciente: "Piel cansada, estresada o fatigada, sin luminosidad ni hidratación, con envejecimiento prematuro.",
      tipo: "Sérum revitalizante iluminador.",
      necesidad: "Reactiva la luminosidad e hidrata.",
      cuando: "Día y noche, justo después de la limpieza.",
      modo: "Probar antes en el antebrazo y, si no irrita, incluir en la rutina.",
      solar: "Complementar la rutina de día con fotoprotector solar por las mañanas."
    }
  },

  {
    id: "sen-glowcream",
    name: "Skin Glow Juicy Cream",
    img: "imagenes/sensilis/sen-glowcream.webp",
    brand: "sensilis",
    line: "sen-skinglow",
    n: ["apagada", "seca"],
    sk: ["seca"],
    d: {
      paciente: "Piel normal a seca que necesita luminosidad; cansada, estresada o fatigada.",
      tipo: "Crema hidratante de luminosidad inmediata.",
      necesidad: "Reactiva la luz de las pieles apagadas e hidrata.",
      cuando: "Día y noche.",
      modo: "Aplicar de medio rostro hasta el mentón, de dentro hacia fuera; después en la frente, de abajo hacia arriba, y terminar en el cuello con movimientos ascendentes."
    }
  },

  {
    id: "sen-glowglycolic",
    name: "Skin Glow Glycolic",
    img: "imagenes/sensilis/sen-glowglycolic.webp",
    brand: "sensilis",
    line: "sen-skinglow",
    n: ["apagada", "manchas"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible que quiere usar ácido glicólico sin irritarse.",
      tipo: "Gel de noche con 8 % de ácido glicólico.",
      necesidad: "Renueva, ilumina, hidrata y unifica el tono.",
      cuando: "Por la noche, en días alternos hasta lograr tolerancia.",
      modo: "Aplicar un pump sobre la piel limpia y seca y dejar toda la noche. Por la mañana, limpiar la cara.",
      solar: "A la mañana siguiente, aplicar protección solar alta o muy alta."
    }
  },

  {
    id: "sen-glowkeyes",
    name: "Skin Glow K Eyes",
    img: "imagenes/sensilis/sen-glowkeyes.webp",
    brand: "sensilis",
    line: "sen-skinglow",
    n: ["ojos"],
    sk: ["todas"],
    d: {
      paciente: "Fatiga del contorno, ojeras vasculares y pigmentadas y envejecimiento prematuro.",
      tipo: "Emulsión correctora de ojeras con pigmentos iluminadores.",
      necesidad: "Ojeras, bolsas, luminosidad e hidratación.",
      cuando: "Mañana y noche.",
      modo: "Aplicar el tamaño de un grano de arroz, del ángulo interno al externo. Presionar en círculos alrededor del ojo."
    }
  },

  {
    id: "sen-skinglowhighlighter",
    name: "Skin Glow Highlighter",
    img: "imagenes/sensilis/sen-skinglowhighlighter.webp",
    brand: "sensilis",
    line: "sen-skinglow",
    n: ["apagada"],
    sk: ["todas"],
    d: {
      paciente: "Quien busca iluminar, definir y esculpir el rostro.",
      tipo: "Corrector iluminador fluido.",
      necesidad: "Efecto lifting visible; difumina líneas y ojeras.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Aplicar en arco de la ceja, pómulo, arco de cupido, centro de la frente, canto interno del ojo, puente de la nariz y barbilla."
    }
  },

  {
    id: "sen-skinglowbronze",
    name: "Skin Glow Bronze",
    img: "imagenes/sensilis/sen-skinglowbronze.webp",
    brand: "sensilis",
    line: "sen-skinglow",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Quien busca un bronceado natural sin exponerse al sol.",
      tipo: "Gotas bronceadoras iluminadoras para el rostro.",
      necesidad: "Tono dorado modulable.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Añadir unas gotas a la crema o la base, o aplicar solas. También en escote, brazos o piernas."
    }
  },

  /* ---------- Sensilis · Skin D-Pigment ---------- */
  {
    id: "sen-dpigmentserum",
    name: "Skin D-Pigment Serum ATX B3",
    img: "imagenes/sensilis/sen-dpigmentserum.webp",
    brand: "sensilis",
    line: "sen-dpigment",
    n: ["manchas"],
    sk: ["todas"],
    d: {
      paciente: "Piel hiperpigmentada, incluidos fototipos oscuros, con melasma, cloasma o lentigos; también junto a procedimientos médico-estéticos.",
      tipo: "Sérum corrector con ácido tranexámico y niacinamida.",
      necesidad: "Reduce y previene las manchas oscuras.",
      cuando: "Por la mañana y, en noches alternas, alternando con AHA 10 Overnight.",
      modo: "Aplicar sobre la piel limpia y seca de cara, cuello y escote con un suave masaje. No usar en el contorno de ojos."
    }
  },

  {
    id: "sen-dpigmentaha10",
    name: "Skin D-Pigment AHA 10 Overnight",
    img: "imagenes/sensilis/sen-dpigmentaha10.webp",
    brand: "sensilis",
    line: "sen-dpigment",
    n: ["manchas", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Piel hiperpigmentada, incluidos fototipos oscuros, con melasma, cloasma o lentigos; también junto a procedimientos médico-estéticos.",
      tipo: "Crema despigmentante de noche.",
      necesidad: "Reduce las manchas y aporta luminosidad.",
      cuando: "Por la noche, en días alternos, alternando con el Serum ATX B3.",
      modo: "Aplicar una cantidad abundante sobre la piel limpia y seca, como una mascarilla fina, y dejar toda la noche.",
      solar: "Por la mañana, terminar la rutina con Photocorrection D-Pigment 50+."
    }
  },

  {
    id: "sen-dpigmentcolordrops",
    name: "Skin D-Pigment Color Drops",
    img: "imagenes/sensilis/sen-dpigmentcolordrops.webp",
    brand: "sensilis",
    line: "sen-dpigment",
    n: ["manchas"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible con hiperpigmentación o manchas (melasma, lentigos).",
      tipo: "Maquillaje dermatológico fluido de alta cobertura.",
      necesidad: "Oculta imperfecciones y unifica el tono.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Sensilis no detalla cómo aplicarlo."
    }
  },

  /* ---------- Sensilis · Skin Rescue ---------- */
  {
    id: "sen-rescuebarrier",
    name: "Skin Rescue Barrier",
    img: "imagenes/sensilis/sen-rescuebarrier.webp",
    brand: "sensilis",
    line: "sen-skinrescue",
    n: ["rojeces", "seca"],
    sk: ["sensible"],
    d: {
      paciente: "Tras un procedimiento médico-estético o retinización; también piel con rojeces o propensa a rosácea o cuperosis.",
      tipo: "Crema ligera reparadora de la barrera cutánea.",
      necesidad: "Repara la barrera, hidrata, calma y reduce rojeces.",
      cuando: "Día y noche.",
      modo: "Aplicar de medio rostro hasta el mentón, de dentro hacia fuera; después en la frente, de abajo hacia arriba, y terminar en el cuello con movimientos ascendentes."
    }
  },

  {
    id: "sen-rescueserum",
    name: "Skin Rescue Serum S.O.S",
    img: "imagenes/sensilis/sen-rescueserum.webp",
    brand: "sensilis",
    line: "sen-skinrescue",
    n: ["rojeces"],
    sk: ["sensible"],
    d: {
      paciente: "Tras un procedimiento médico-estético, retinización, depilación o quemaduras solares; también piel con rojeces.",
      tipo: "Sérum calmante y reparador ultraligero.",
      necesidad: "Calma y repara la piel, reduce el enrojecimiento.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Tomar 3 cantidades del tamaño de un guisante. Masajear pómulos y mentón hacia arriba, y la frente del centro a los extremos.",
      nota: "No aplicar en heridas abiertas."
    }
  },

  {
    id: "sen-skinrescuemistsos",
    name: "Skin Rescue S.O.S. 24 7",
    img: "imagenes/sensilis/sen-skinrescuemistsos.webp",
    brand: "sensilis",
    line: "sen-skinrescue",
    n: ["rojeces"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible y con tendencia a la rojez; previene brotes de sensibilidad.",
      tipo: "Bruma calmante de uso diario.",
      necesidad: "Confort inmediato frente a cambios de temperatura, contaminación, estrés o fricción.",
      cuando: "En cualquier momento del día.",
      modo: "Pulverizar sobre el rostro. Se puede aplicar encima del maquillaje."
    }
  },

  /* ---------- Sensilis · Pure Age Perfection ---------- */
  {
    id: "sen-pureageserum",
    name: "Pure Age Perfection Cicakn Serum",
    img: "imagenes/sensilis/sen-pureageserum.webp",
    brand: "sensilis",
    line: "sen-pureage",
    n: ["acne", "arrugas"],
    sk: ["grasa", "imperfecciones", "sensible"],
    d: {
      paciente: "Piel sensible, grasa, con tendencia al acné o con acné adulto; también junto a procedimientos médico-estéticos.",
      tipo: "Sérum oil-free de doble corrección.",
      necesidad: "Imperfecciones y arrugas.",
      cuando: "Mañana y noche.",
      modo: "Aplicar 3-4 gotas sobre la piel limpia y seca de cara, cuello y escote con un suave masaje. También localmente sobre imperfecciones."
    }
  },

  {
    id: "sen-pureageretinal",
    name: "Pure Age Perfection Retinal",
    img: "imagenes/sensilis/sen-pureageretinal.webp",
    brand: "sensilis",
    line: "sen-pureage",
    n: ["acne", "arrugas", "flacidez"],
    sk: ["grasa", "imperfecciones", "sensible"],
    d: {
      paciente: "Piel grasa con edad aparente de más de 40 años, sensible o con imperfecciones; también tras procedimientos médico-estéticos.",
      tipo: "Sérum de noche oil-free redensificante.",
      necesidad: "Redensifica y perfecciona la piel grasa.",
      cuando: "Por la noche.",
      modo: "Aplicar 3-4 gotas sobre la piel limpia y seca de cara, cuello y escote con un suave masaje."
    }
  },

  /* ---------- Sensilis · Pure ---------- */
  {
    id: "sen-pure15az",
    name: "Pure 15AZ",
    img: "imagenes/sensilis/sen-pure15az.webp",
    brand: "sensilis",
    line: "sen-pure",
    n: ["acne", "manchas"],
    sk: ["grasa", "imperfecciones", "sensible"],
    d: {
      paciente: "Piel sensible con acné comedogénico, inflamatorio o hiperpigmentación postinflamatoria.",
      tipo: "Sérum con 15 % de ácido azelaico.",
      necesidad: "Imperfecciones, exceso de sebo, inflamación y marcas postacné.",
      cuando: "Mañana y/o noche. Si la piel es muy sensible, empezar de forma gradual.",
      modo: "Aplicar una cantidad del tamaño de un guisante sobre la piel limpia y seca.",
      solar: "Usar siempre con fotoprotección por la mañana.",
      nota: "Al principio puede notarse picor o cosquilleo. Si la irritación persiste, espaciar las aplicaciones."
    }
  },

  {
    id: "sen-pureisorelief",
    name: "Pure Iso-Relief",
    img: "imagenes/sensilis/sen-pureisorelief.webp",
    brand: "sensilis",
    line: "sen-pure",
    n: ["seca", "rojeces", "acne"],
    sk: ["grasa", "sensible"],
    d: {
      paciente: "Piel fragilizada por tratamientos para el acné, como isotretinoína o peróxido de benzoilo.",
      tipo: "Gel-crema reparador y calmante, no comedogénico.",
      necesidad: "Repara la barrera, calma el enrojecimiento e hidrata.",
      cuando: "Mañana y noche.",
      modo: "Extender una cantidad generosa sobre la piel limpia y seca."
    }
  },

  {
    id: "sen-pureoilcontrolpads",
    name: "Pure Oil Control Pads",
    img: "imagenes/sensilis/sen-pureoilcontrolpads.webp",
    brand: "sensilis",
    line: "sen-pure",
    n: ["acne", "poros"],
    sk: ["mixta", "grasa", "imperfecciones"],
    d: {
      paciente: "Piel grasa con tendencia acneica, puntos negros y poros visibles.",
      tipo: "Discos seborreguladores de micropeeling.",
      necesidad: "Sebo, poros, puntos negros y prevención de manchas postacné.",
      limpieza: "Exfoliante",
      limpiezaDet: "Micropeeling sin aclarado con ácido salicílico y mandélico.",
      cuando: "Mañana y/o noche.",
      modo: "Deslizar el disco en círculos sobre la piel limpia y seca, insistiendo en la zona T. No aclarar. Desechar tras cada uso.",
      solar: "No fotosensibilizante, según su ficha."
    }
  },

  /* ---------- Sensilis · Hyaluronic ---------- */
  {
    id: "sen-hyaluronicfillerserum",
    name: "Hyaluronic Filler Serum",
    img: "imagenes/sensilis/sen-hyaluronicfillerserum.webp",
    brand: "sensilis",
    line: "sen-hyaluronic",
    n: ["deshidratacion", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel y edad, incluso mixta y grasa.",
      tipo: "Concentrado rellenador con 3 tipos de ácido hialurónico.",
      necesidad: "Rellena e hidrata, con acción antiarrugas.",
      cuando: "Día y noche.",
      modo: "Aplicar un pump sobre la piel limpia y seca. Las pieles más secas pueden añadir sérum o crema.",
      solar: "Continuar con Photocorrection HA 50+."
    }
  },

  {
    id: "sen-hyaluronicpuffyeyes",
    name: "Hyaluronic Puffy Eyes",
    img: "imagenes/sensilis/sen-hyaluronicpuffyeyes.webp",
    brand: "sensilis",
    line: "sen-hyaluronic",
    n: ["ojos"],
    sk: ["todas"],
    d: {
      paciente: "Bolsas y mirada cansada.",
      tipo: "Gel refrescante antibolsas con aplicador metálico.",
      necesidad: "Bolsas, ojeras e hidratación del contorno.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Sensilis no detalla cómo aplicarlo."
    }
  },

  {
    id: "sen-hyaluronicfillerlips",
    name: "Hyaluronic Filler Lips",
    img: "imagenes/sensilis/sen-hyaluronicfillerlips.webp",
    brand: "sensilis",
    line: "sen-hyaluronic",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Labios que buscan volumen, hidratación y reparación; especialmente tras medicina estética.",
      tipo: "Tratamiento labial voluminizador.",
      necesidad: "Volumen, definición e hidratación de los labios.",
      cuando: "Tantas veces como se desee. También de noche, como mascarilla.",
      modo: "Deslizar el aplicador biselado sobre los labios."
    }
  },

  /* ---------- Sensilis · Hydra Essence ---------- */
  {
    id: "sen-hydrasorbet",
    name: "Hydra Essence Sorbet Gel",
    img: "imagenes/sensilis/sen-hydrasorbet.webp",
    brand: "sensilis",
    line: "sen-hydraessence",
    n: ["deshidratacion", "rojeces"],
    sk: ["mixta", "grasa", "sensible"],
    d: {
      paciente: "Piel normal a grasa que necesita hidratación o alivio; sensible y con rojeces.",
      tipo: "Gel-crema ultrahidratante.",
      necesidad: "Hidrata, calma y protege.",
      cuando: "Día y noche.",
      modo: "Sensilis no detalla cómo aplicarlo."
    }
  },

  {
    id: "sen-hydracream",
    name: "Hydra Essence Cream",
    img: "imagenes/sensilis/sen-hydracream.webp",
    brand: "sensilis",
    line: "sen-hydraessence",
    n: ["seca", "deshidratacion", "rojeces"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Piel seca que necesita hidratación o alivio; sensible y con rojeces.",
      tipo: "Crema ultrahidratante rica, no grasa.",
      necesidad: "Hidrata, calma y protege.",
      cuando: "Día y noche.",
      modo: "Sensilis no detalla cómo aplicarlo."
    }
  },

  /* ---------- Sensilis · Hydraction ---------- */
  {
    id: "sen-hydraction",
    name: "Hydraction Balm",
    img: "imagenes/sensilis/sen-hydraction.webp",
    brand: "sensilis",
    line: "sen-hydraction",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Todos los labios, incluso sensibles.",
      tipo: "Stick labial hidratante y protector.",
      necesidad: "Hidrata, protege y repara los labios.",
      cuando: "Tantas veces como sea necesario.",
      modo: "Aplicar sobre los labios."
    }
  },

  /* ---------- Sensilis · Pretratamiento ---------- */
  {
    id: "sen-prepdrops",
    name: "Prep4+ Drops",
    img: "imagenes/sensilis/sen-prepdrops.webp",
    brand: "sensilis",
    line: "sen-pretratamiento",
    n: ["arrugas", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Quien quiere potenciar su rutina antiedad preparando la piel.",
      tipo: "Sérum exfoliante con 13 % de ácidos (glicólico y mandélico).",
      necesidad: "Acelera la renovación, mejora la luminosidad y el sebo.",
      limpieza: "Exfoliante",
      limpiezaDet: "Pretratamiento exfoliante químico.",
      cuando: "Cada noche.",
      modo: "Sensilis no detalla cómo aplicarlo."
    }
  },

  {
    id: "sen-prep4polish",
    name: "Prep4+ Polish",
    img: "imagenes/sensilis/sen-prep4polish.webp",
    brand: "sensilis",
    line: "sen-pretratamiento",
    n: ["apagada", "poros"],
    sk: ["mixta", "grasa"],
    d: {
      paciente: "Piel con tendencia a rosácea, grasa o mixta, opaca o con el estrato córneo engrosado; también si no tolera exfoliantes químicos.",
      tipo: "Mousse microexfoliante con cristales de cuarzo.",
      necesidad: "Elimina células muertas y afina la textura.",
      limpieza: "Exfoliante",
      limpiezaDet: "Pretratamiento exfoliante mecánico.",
      cuando: "1 a 3 veces por semana, por la mañana. También de noche, en lugar de Drops.",
      modo: "Masajear en círculos sobre la cara limpia y ligeramente seca. En piel muy sensible, se puede usar con el limpiador habitual.",
      nota: "No se recomienda con hiperpigmentación postinflamatoria."
    }
  },

  /* ---------- Sensilis · Azelaic [Peel] ---------- */
  {
    id: "sen-azelaic",
    name: "Azelaic Peel",
    img: "imagenes/sensilis/sen-azelaic.webp",
    brand: "sensilis",
    line: "sen-azelaic",
    n: ["acne", "manchas", "rojeces"],
    sk: ["grasa", "imperfecciones", "sensible"],
    d: {
      paciente: "Piel sensible, grasa, con tendencia acneica o a rosácea, e hiperpigmentada.",
      tipo: "Loción retexturizante en gel.",
      necesidad: "Seborregula, aclara manchas y reduce rojeces.",
      limpieza: "Pretratamiento",
      limpiezaDet: "Se aplica después de la limpieza y antes de la rutina.",
      cuando: "Día y noche.",
      modo: "Tras la limpieza, aplicar un pump a toques sobre la piel limpia y seca, con las manos o un algodón. Continuar con la rutina."
    }
  },

  /* ---------- Sensilis · Photocorrection ---------- */
  {
    id: "sen-photoha",
    name: "Photocorrection HA 50+",
    img: "imagenes/sensilis/sen-photoha.webp",
    brand: "sensilis",
    line: "sen-photo",
    n: ["fotoproteccion", "arrugas", "deshidratacion"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible con signos de envejecimiento y falta de hidratación.",
      tipo: "Fluido solar SPF 50+ hidratante y antiarrugas.",
      necesidad: "Protección UVA, UVB y luz azul.",
      cuando: "Por la mañana, como último paso de la rutina, 30 minutos antes de la exposición al sol.",
      modo: "Aplicar una línea en el índice y otra en el corazón para rostro y cuello. Después se puede maquillar."
    }
  },

  {
    id: "sen-photohacolor",
    name: "Photocorrection HA 50+ Color",
    img: "imagenes/sensilis/sen-photohacolor.webp",
    brand: "sensilis",
    line: "sen-photo",
    n: ["fotoproteccion", "arrugas", "deshidratacion"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible con signos de envejecimiento y falta de hidratación.",
      tipo: "Fluido solar SPF 50+ con color, hidratante y antiarrugas.",
      necesidad: "Protección UVA, UVB y luz azul.",
      cuando: "Por la mañana, como último paso de la rutina, 30 minutos antes de la exposición al sol.",
      modo: "Aplicar una línea en el índice y otra en el corazón para rostro y cuello. Después se puede maquillar."
    }
  },

  {
    id: "sen-photocorrpure50",
    name: "Photocorrection Pure 50",
    img: "imagenes/sensilis/sen-photocorrpure50.webp",
    brand: "sensilis",
    line: "sen-photo",
    n: ["fotoproteccion", "acne"],
    sk: ["grasa", "imperfecciones", "sensible"],
    d: {
      paciente: "Piel sensible, grasa y con tendencia a imperfecciones.",
      tipo: "Fluido solar seborregulador de alta protección.",
      necesidad: "Protege de UVA, UVB, luz visible, IR-A, polución y oxidación.",
      cuando: "Cada mañana. Reaplicar cada 2 horas.",
      modo: "Aplicar una pequeña cantidad en el rostro."
    }
  },

  {
    id: "sen-photopure",
    name: "Photocorrection Pure Age Perfection 50+",
    img: "imagenes/sensilis/sen-photopure.webp",
    brand: "sensilis",
    line: "sen-photo",
    n: ["fotoproteccion", "acne"],
    sk: ["grasa", "imperfecciones", "sensible"],
    d: {
      paciente: "Piel sensible, grasa o con tendencia al acné.",
      tipo: "Fluido solar SPF 50+ matificante.",
      necesidad: "Protección UVA, UVB y luz azul; controla el sebo.",
      cuando: "Por la mañana, como último paso de la rutina, 30 minutos antes de la exposición al sol.",
      modo: "Aplicar una línea en el índice y otra en el corazón para rostro y cuello. Después se puede maquillar."
    }
  },

  {
    id: "sen-photoar",
    name: "Photocorrection AR 50+",
    img: "imagenes/sensilis/sen-photoar.webp",
    brand: "sensilis",
    line: "sen-photo",
    n: ["fotoproteccion", "rojeces", "flacidez"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible, con tendencia a la rosácea o cuperosis.",
      tipo: "Fluido solar SPF 50+ reafirmante y antirojeces.",
      necesidad: "Protección UVA, UVB y luz azul; calma las rojeces.",
      cuando: "Por la mañana, como último paso de la rutina, 30 minutos antes de la exposición al sol.",
      modo: "Aplicar una línea en el índice y otra en el corazón para rostro y cuello. Después se puede maquillar."
    }
  },

  {
    id: "sen-photodpigment",
    name: "Photocorrection D-Pigment 50+",
    img: "imagenes/sensilis/sen-photodpigment.webp",
    brand: "sensilis",
    line: "sen-photo",
    n: ["fotoproteccion", "manchas"],
    sk: ["todas"],
    d: {
      paciente: "Piel hiperpigmentada de cualquier edad, también de fototipo oscuro.",
      tipo: "Mousse solar SPF 50+ con color y despigmentante.",
      necesidad: "Protección UVA, UVB y luz azul; difumina las manchas.",
      cuando: "Por la mañana, como último paso de la rutina, 30 minutos antes de la exposición al sol.",
      modo: "Aplicar una línea en el índice y otra en el corazón para rostro y cuello. Después se puede maquillar."
    }
  },

  {
    id: "sen-photocorrectionmineral",
    name: "Photocorrection Mineral 30",
    img: "imagenes/sensilis/sen-photocorrectionmineral.webp",
    brand: "sensilis",
    line: "sen-photo",
    n: ["fotoproteccion"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible y reactiva a los filtros químicos.",
      tipo: "Fluido solar mineral SPF 30.",
      necesidad: "Protección diaria frente a UVA, UVB y luz azul.",
      cuando: "A diario. Sensilis no detalla más pautas.",
      modo: "Sensilis no detalla cómo aplicarlo."
    }
  },

  {
    id: "sen-nevermistmespf50",
    name: "Never Mist Me SPF50",
    img: "imagenes/sensilis/sen-nevermistmespf50.webp",
    brand: "sensilis",
    line: "sen-photo",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, para reaplicar incluso con maquillaje.",
      tipo: "Bruma facial solar SPF 50, invisible y fijadora.",
      necesidad: "Reaplicación de la protección solar.",
      cuando: "Para reaplicar. Sensilis no indica la frecuencia.",
      modo: "Sensilis no detalla cómo aplicarlo."
    }
  },

  {
    id: "sen-sticktosport",
    name: "Stick To Sport SPF50+",
    img: "imagenes/sensilis/sen-sticktosport.webp",
    brand: "sensilis",
    line: "sen-photo",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluso para deporte al aire libre.",
      tipo: "Stick solar SPF 50+ resistente al agua y al sudor.",
      necesidad: "Reaplicación precisa de la protección.",
      cuando: "Para reaplicar. Sensilis no indica la frecuencia.",
      modo: "Sensilis no detalla cómo aplicarlo."
    }
  },

  /* ---------- Sensilis · Solares ---------- */
  {
    id: "sen-waterfluid",
    name: "Water Fluid 50+",
    img: "imagenes/sensilis/sen-waterfluid.webp",
    brand: "sensilis",
    line: "sen-solares",
    n: ["fotoproteccion", "deshidratacion"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible que busca un protector ligero e hidratante.",
      tipo: "Fluido solar facial ultraligero SPF 50+.",
      necesidad: "Protege de UVA, UVB, luz visible, IR-A, polución y oxidación.",
      cuando: "30 minutos antes de ir a la playa o la piscina. Reaplicar en exposición prolongada, con sudoración intensa o después de mojarse o secarse.",
      modo: "Aplicar una línea en el índice y otra en el corazón para el rostro, sin olvidar las orejas."
    }
  },

  {
    id: "sen-waterfluidcolor",
    name: "Water Fluid 50+ Color",
    img: "imagenes/sensilis/sen-waterfluidcolor.webp",
    brand: "sensilis",
    line: "sen-solares",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, especialmente fototipos II y III.",
      tipo: "Fluido solar facial con color SPF 50+.",
      necesidad: "Protección con cobertura natural y tono unificado.",
      cuando: "30 minutos antes de ir a la playa o la piscina. Reaplicar en exposición prolongada, con sudoración intensa o después de mojarse o secarse.",
      modo: "Aplicar una línea en el índice y otra en el corazón para el rostro, sin olvidar las orejas."
    }
  },

  {
    id: "sen-oilcontrol",
    name: "Oil Control 50+",
    img: "imagenes/sensilis/sen-oilcontrol.webp",
    brand: "sensilis",
    line: "sen-solares",
    n: ["fotoproteccion", "poros"],
    sk: ["mixta", "grasa", "imperfecciones"],
    d: {
      paciente: "Quien necesita controlar los brillos sin resecar.",
      tipo: "Fotoprotector SPF 50+ de toque seco, invisible.",
      necesidad: "Efecto mate hasta 7 horas; absorbe sebo y minimiza poros.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Sensilis no detalla cómo aplicarlo."
    }
  },

  {
    id: "sen-oilcontrollight",
    name: "Oil Control 50+ Light",
    img: "imagenes/sensilis/sen-oilcontrollight.webp",
    brand: "sensilis",
    line: "sen-solares",
    n: ["fotoproteccion", "poros"],
    sk: ["mixta", "grasa", "imperfecciones"],
    d: {
      paciente: "Quien necesita controlar los brillos sin resecar.",
      tipo: "Fotoprotector SPF 50+ de toque seco con color, tono claro.",
      necesidad: "Efecto mate hasta 7 horas; absorbe sebo y minimiza poros.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Sensilis no detalla cómo aplicarlo."
    }
  },

  {
    id: "sen-oilcontrolmedium",
    name: "Oil Control 50+ Medium",
    img: "imagenes/sensilis/sen-oilcontrolmedium.webp",
    brand: "sensilis",
    line: "sen-solares",
    n: ["fotoproteccion", "poros"],
    sk: ["mixta", "grasa", "imperfecciones"],
    d: {
      paciente: "Quien necesita controlar los brillos sin resecar.",
      tipo: "Fotoprotector SPF 50+ de toque seco con color, tono medio.",
      necesidad: "Efecto mate hasta 7 horas; absorbe sebo y minimiza poros.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Sensilis no detalla cómo aplicarlo."
    }
  },

  {
    id: "sen-mattgel",
    name: "Matt Gel 50 Invisible",
    img: "imagenes/sensilis/sen-mattgel.webp",
    brand: "sensilis",
    line: "sen-solares",
    n: ["fotoproteccion"],
    sk: ["grasa", "todas"],
    d: {
      paciente: "Todo tipo de piel y fototipo; perfecto para piel grasa.",
      tipo: "Gel solar invisible matificante y antiedad.",
      necesidad: "Alta protección con acción hidratante y antioxidante.",
      cuando: "30 minutos antes de ir a la playa o la piscina. Reaplicar en exposición prolongada, con sudoración intensa o después de mojarse o secarse.",
      modo: "Aplicar una línea en el índice y otra en el corazón para el rostro, sin olvidar las orejas."
    }
  },

  {
    id: "sen-gelcream",
    name: "Gel Cream 50+",
    img: "imagenes/sensilis/sen-gelcream.webp",
    brand: "sensilis",
    line: "sen-solares",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo y fototipo de piel.",
      tipo: "Fotoprotector antiedad en gel-crema.",
      necesidad: "Protege, hidrata y refresca.",
      cuando: "30 minutos antes de ir a la playa o la piscina. Reaplicar en exposición prolongada, con sudoración intensa o después de mojarse o secarse.",
      modo: "Aplicar una línea en el índice y otra en el corazón para el rostro, sin olvidar las orejas."
    }
  },

  {
    id: "sen-solarallergy",
    name: "Fluid 100 Solar Allergy",
    img: "imagenes/sensilis/sen-solarallergy.webp",
    brand: "sensilis",
    line: "sen-solares",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, especialmente clara, sensible, reactiva o fotosensible.",
      tipo: "Fluido facial de muy alta protección.",
      necesidad: "Protege, hidrata y neutraliza el daño solar.",
      cuando: "30 minutos antes de ir a la playa o la piscina. Reaplicar en exposición prolongada, con sudoración intensa o después de mojarse o secarse.",
      modo: "Aplicar una línea en el índice y otra en el corazón para el rostro, sin olvidar las orejas."
    }
  },

  {
    id: "sen-pediatrics",
    name: "Lotion Spray 50+ Pediatrics",
    img: "imagenes/sensilis/sen-pediatrics.webp",
    brand: "sensilis",
    line: "sen-solares",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Niños desde 3 años; todo tipo de piel, especialmente con tendencia atópica.",
      tipo: "Fotoprotector infantil en loción spray.",
      necesidad: "Muy alta protección con sensación calmante.",
      cuando: "30 minutos antes de ir a la playa o la piscina. Reaplicar en exposición prolongada, con sudoración intensa o después de mojarse o secarse.",
      modo: "Aplicar una línea en el índice y otra en el corazón para el rostro, sin olvidar las orejas."
    }
  },

  {
    id: "sen-drytouch",
    name: "Body Spray 50 Dry Touch",
    img: "imagenes/sensilis/sen-drytouch.webp",
    brand: "sensilis",
    line: "sen-solares",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, especialmente fototipos II y III.",
      tipo: "Bruma solar corporal de toque seco.",
      necesidad: "Alta protección; se aplica sobre piel seca o mojada.",
      cuando: "30 minutos antes de ir a la playa o la piscina. Reaplicar en exposición prolongada, con sudoración intensa o después de mojarse o secarse.",
      modo: "Aplicar una línea en el índice y otra en el corazón para el rostro, sin olvidar las orejas."
    }
  },

  {
    id: "sen-dryoiltanoptim",
    name: "Dry Oil Spf50",
    img: "imagenes/sensilis/sen-dryoiltanoptim.webp",
    brand: "sensilis",
    line: "sen-solares",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Quien busca broncearse más rápido sin renunciar a alta protección.",
      tipo: "Aceite seco corporal SPF 50.",
      necesidad: "Protección UVA/UVB y bronceado más uniforme.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Sensilis no detalla cómo aplicarlo."
    }
  },

  {
    id: "sen-sticktoglow",
    name: "Stick To Glow",
    img: "imagenes/sensilis/sen-sticktoglow.webp",
    brand: "sensilis",
    line: "sen-solares",
    n: ["fotoproteccion", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel que quiere reaplicar con efecto luminoso.",
      tipo: "Stick solar SPF 50+ con acabado perlado.",
      necesidad: "Reaplicación con efecto glow.",
      cuando: "Para reaplicar. Sensilis no indica la frecuencia.",
      modo: "Sensilis no detalla cómo aplicarlo."
    }
  },

  {
    id: "sen-sticktosnow",
    name: "Stick To Snow",
    img: "imagenes/sensilis/sen-sticktosnow.webp",
    brand: "sensilis",
    line: "sen-solares",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, para actividades de invierno.",
      tipo: "Stick solar SPF 50+ resistente al agua y al sudor.",
      necesidad: "Reaplicación en actividades de invierno.",
      cuando: "Al menos 30 minutos antes de la exposición solar.",
      modo: "Aplicar sobre las zonas deseadas, sin extender con las manos."
    }
  },

  {
    id: "sen-aftersun",
    name: "After Sun Repair",
    img: "imagenes/sensilis/sen-aftersun.webp",
    brand: "sensilis",
    line: "sen-solares",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Emulsión after-sun calmante y reparadora.",
      necesidad: "Hidrata y calma la piel tras el sol.",
      cuando: "Después del sol. Tantas veces como sea necesario.",
      modo: "Aplicar generosamente sobre la piel limpia y masajear hasta su absorción."
    }
  },

  {
    id: "sen-selftannbronze",
    name: "Sss Self Tanning Toallitas - Bronze",
    img: "imagenes/sensilis/sen-selftannbronze.webp",
    brand: "sensilis",
    line: "sen-solares",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Quien busca un bronceado natural sin exponerse al sol.",
      tipo: "Toallitas autobronceadoras faciales, tono bronze.",
      necesidad: "Bronceado uniforme e hidratación.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Exfoliar antes. Aplicar sobre el rostro en círculos, sin dejar zonas. Hidratar para prolongar el bronceado."
    }
  },

  {
    id: "sen-selftanngold",
    name: "Sss Self Tanning Toallitas - Gold",
    img: "imagenes/sensilis/sen-selftanngold.webp",
    brand: "sensilis",
    line: "sen-solares",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Quien busca un bronceado natural sin exponerse al sol.",
      tipo: "Toallitas autobronceadoras faciales, tono gold.",
      necesidad: "Bronceado uniforme e hidratación.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Exfoliar antes. Aplicar sobre el rostro en círculos, sin dejar zonas. Hidratar para prolongar el bronceado."
    }
  },

  /* ---------- Sensilis · Hair & Scalp ---------- */
  {
    id: "sen-hairdsshampoo",
    name: "DS Shampoo",
    img: "imagenes/sensilis/sen-hairdsshampoo.webp",
    brand: "sensilis",
    line: "sen-hair",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Cuero cabelludo graso y sensible con caspa, descamación, exceso de sebo o picor.",
      tipo: "Champú anticaspa con climbazol y ciclopirox olamina.",
      necesidad: "Controla el sebo, limita Malassezia, elimina escamas y calma el picor.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Aplicar sobre el cuero cabelludo mojado, masajear, dejar actuar unos minutos y aclarar."
    }
  },

  {
    id: "sen-hairdscontrol",
    name: "DS Control Rescue Lotion",
    img: "imagenes/sensilis/sen-hairdscontrol.webp",
    brand: "sensilis",
    line: "sen-hair",
    n: ["corporal", "rojeces"],
    sk: ["todas"],
    d: {
      paciente: "Rostro, cuero cabelludo o cuerpo con descamación seborreica, sebo, enrojecimiento o picor.",
      tipo: "Loción intensiva sin aclarado.",
      necesidad: "Controla Malassezia, elimina escamas y calma picor y enrojecimiento.",
      cuando: "Hasta 2 veces al día.",
      modo: "Aplicar sobre la zona y dejar actuar sin aclarar."
    }
  },

  {
    id: "sen-hairsuplement",
    name: "Hair Supplement 30 Sticks",
    img: "imagenes/sensilis/sen-hairsuplement.webp",
    brand: "sensilis",
    line: "sen-hair",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Mujeres con envejecimiento capilar: pelo más fino y con menos cantidad y volumen.",
      tipo: "Nutricosmético bebible con 24 activos.",
      necesidad: "Estimula el crecimiento y refuerza el cabello.",
      cuando: "Un stick al día, por la mañana, durante 3 meses.",
      modo: "Mezclar con agua o zumo. No superar un stick al día.",
      nota: "No recomendado en embarazo ni lactancia."
    }
  },

  {
    id: "sen-prepshampoo",
    name: "Hair Prep Shampoo",
    img: "imagenes/sensilis/sen-prepshampoo.webp",
    brand: "sensilis",
    line: "sen-hair",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Mujeres con envejecimiento capilar: pelo más fino y con menos cantidad y volumen; cuero cabelludo sensible.",
      tipo: "Champú preparador sin sulfatos con ácido glicólico y succínico.",
      necesidad: "Limpia, exfolia y prepara el cuero cabelludo para tratamientos anticaída.",
      cuando: "Se puede usar a diario y combinar con el champú habitual.",
      modo: "Aplicar 2 o 3 pulsaciones en la raíz del cabello mojado. Masajear un minuto, dejar actuar 1 o 2 minutos y aclarar abundantemente.",
      nota: "No contraindicado en embarazo ni lactancia, según Sensilis. Apto para cabello teñido o con queratina."
    }
  },

  {
    id: "sen-hairlotion",
    name: "Exosome Hair Lotion",
    img: "imagenes/sensilis/sen-hairlotion.webp",
    brand: "sensilis",
    line: "sen-hair",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Mujeres con envejecimiento capilar: pelo más fino y con menos cantidad y volumen.",
      tipo: "Loción capilar ultraligera con exosomas, sin aclarado.",
      necesidad: "Frena la caída y mejora la densidad desde la raíz.",
      cuando: "5 a 7 veces por semana durante 12 semanas.",
      modo: "Mejor sobre el cabello seco. Dividir el cabello en secciones, aplicar sobre la raíz y masajear en círculos. No aclarar.",
      nota: "No contraindicada en embarazo ni lactancia, según Sensilis."
    }
  },

  /* ---------- Sensilis · Body Treatments ---------- */
  {
    id: "sen-createurdinstants",
    name: "Créateur D'instants",
    img: "imagenes/sensilis/sen-createurdinstants.webp",
    brand: "sensilis",
    line: "sen-body",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Personas con piel sensible que buscan una fragancia.",
      tipo: "Eau de toilette floral y fresca.",
      necesidad: "Fragancia de uso diario.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Pulverizar ligeramente en cuello, muñecas o detrás de las orejas."
    }
  },

  {
    id: "sen-bodyretinol",
    name: "Retinol Body Treatment",
    img: "imagenes/sensilis/sen-bodyretinol.webp",
    brand: "sensilis",
    line: "sen-body",
    n: ["corporal", "flacidez", "manchas"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible que busca un tratamiento corporal rejuvenecedor con retinol.",
      tipo: "Loción corporal reafirmante con retinol.",
      necesidad: "Reafirma, hidrata, unifica el tono, aclara manchas y reduce arrugas en piernas, glúteos, vientre, brazos, cuello y escote.",
      cuando: "Por la noche, en días alternos hasta que la piel se acostumbre.",
      modo: "Aplicar sobre la piel limpia y seca con un suave masaje.",
      solar: "Al día siguiente, usar protector solar en las zonas expuestas del cuerpo.",
      nota: "Sensilis indica en la ficha de Peptide Reti-V que el retinol está contraindicado en embarazo y lactancia."
    }
  },

  {
    id: "sen-glycolicbodytreatment",
    name: "Glycolic Body Treatment",
    img: "imagenes/sensilis/sen-glycolicbodytreatment.webp",
    brand: "sensilis",
    line: "sen-body",
    n: ["corporal", "apagada"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible que busca un tratamiento corporal retexturizante.",
      tipo: "Loción corporal con ácido glicólico, láctico y málico.",
      necesidad: "Alisa, ilumina, mejora rugosidades, hidrata y unifica el tono.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Sensilis no detalla cómo aplicarlo."
    }
  },

  {
    id: "sen-bodyglowcerine",
    name: "Glowcerine Body Treatment",
    img: "imagenes/sensilis/sen-bodyglowcerine.webp",
    brand: "sensilis",
    line: "sen-body",
    n: ["corporal", "deshidratacion"],
    sk: ["todas"],
    d: {
      paciente: "Piel deshidratada que necesita hidratación y uniformidad.",
      tipo: "Loción corporal reparadora y perfeccionadora.",
      necesidad: "Hidrata, repara la barrera y unifica el tono de forma inmediata.",
      cuando: "1 o 2 veces al día, o cuando sea necesario.",
      modo: "Aplicar sobre la piel limpia y seca con un suave masaje hasta su absorción."
    }
  },

  {
    id: "sen-encoresoir",
    name: "Encore Un Soir",
    img: "imagenes/sensilis/sen-encoresoir.webp",
    brand: "sensilis",
    line: "sen-body",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Sensilis no indica un tipo de piel concreto.",
      tipo: "Eau de toilette floral y amaderada.",
      necesidad: "Fragancia.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Sensilis no detalla cómo aplicarlo."
    }
  },

  {
    id: "sen-merveilleusesdifferences",
    name: "Merveilleuses Différences",
    img: "imagenes/sensilis/sen-merveilleusesdifferences.webp",
    brand: "sensilis",
    line: "sen-body",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Sensilis no indica un tipo de piel concreto.",
      tipo: "Eau de toilette floral y cítrica.",
      necesidad: "Fragancia.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Sensilis no detalla cómo aplicarlo."
    }
  },

  /* ---------- Sensilis · Maquillaje ---------- */
  {
    id: "sen-pureagemakeup",
    name: "Pure Age Perfection Fluid",
    img: "imagenes/sensilis/sen-pureagemakeup.webp",
    brand: "sensilis",
    line: "sen-makeup",
    n: ["acne"],
    sk: ["mixta", "grasa", "imperfecciones"],
    d: {
      paciente: "Piel grasa o propensa al acné.",
      tipo: "Maquillaje dermatológico fluido de alta cobertura.",
      necesidad: "Controla el sebo y cubre imperfecciones.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Aplicar con las manos, difuminando del centro hacia fuera. Sellar con polvos."
    }
  },

  {
    id: "sen-photomakeup",
    name: "Photocorrection D-Pigment Make-Up 50+",
    img: "imagenes/sensilis/sen-photomakeup.webp",
    brand: "sensilis",
    line: "sen-makeup",
    n: ["manchas", "fotoproteccion"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible con imperfecciones que necesita protección diaria.",
      tipo: "Maquillaje en crema despigmentante SPF 50+.",
      necesidad: "Corrige manchas, disimula imperfecciones y protege de UVA y UVB.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Aplicar generosamente de manera uniforme."
    }
  },

  {
    id: "sen-glowmakeup",
    name: "Skin Glow Make-Up",
    img: "imagenes/sensilis/sen-glowmakeup.webp",
    brand: "sensilis",
    line: "sen-makeup",
    n: ["apagada"],
    sk: ["todas"],
    d: {
      paciente: "Piel cansada, estresada o fatigada, sin luminosidad.",
      tipo: "Maquillaje dermatológico antioxidante.",
      necesidad: "Luminosidad inmediata e hidratación.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Aplicar con brocha plana o con los dedos desde el centro del rostro."
    }
  },

  {
    id: "sen-upgrademakeup",
    name: "Upgrade Make-Up",
    img: "imagenes/sensilis/sen-upgrademakeup.webp",
    brand: "sensilis",
    line: "sen-makeup",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, especialmente con rojeces.",
      tipo: "Maquillaje dermatológico con efecto lifting.",
      necesidad: "Reafirma, ilumina y corrige arrugas; cobertura media-alta.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Depositar en frente, nariz y barbilla y difuminar del centro hacia fuera."
    }
  },

  {
    id: "sen-coveressencespot",
    name: "Coveressence Concealer Antispot",
    img: "imagenes/sensilis/sen-coveressencespot.webp",
    brand: "sensilis",
    line: "sen-makeup",
    n: ["manchas"],
    sk: ["todas"],
    d: {
      paciente: "Quien quiere camuflar manchas, ojeras, zonas oscuras o manchas del embarazo.",
      tipo: "Corrector en stick antimanchas.",
      necesidad: "Camufla hiperpigmentaciones.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Sensilis no detalla cómo aplicarlo."
    }
  },

  {
    id: "sen-coveressencered",
    name: "Coveressence Concealer Antiredness",
    img: "imagenes/sensilis/sen-coveressencered.webp",
    brand: "sensilis",
    line: "sen-makeup",
    n: ["rojeces"],
    sk: ["todas"],
    d: {
      paciente: "Quien quiere neutralizar rojeces o marcas de acné.",
      tipo: "Corrector verde en stick.",
      necesidad: "Neutraliza rojeces, venitas y marcas de acné.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Aplicar una pequeña cantidad en la zona, después de la base."
    }
  },

  {
    id: "sen-velvetskin",
    name: "Velvet Skin",
    img: "imagenes/sensilis/sen-velvetskin.webp",
    brand: "sensilis",
    line: "sen-makeup",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Piel sensible que busca un corrector de alta cobertura; ideal para ojeras.",
      tipo: "Corrector líquido.",
      necesidad: "Difumina arrugas, unifica el tono y cubre.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Sensilis no detalla cómo aplicarlo."
    }
  },

  {
    id: "sen-blush",
    name: "Velvet Blush",
    img: "imagenes/sensilis/sen-blush.webp",
    brand: "sensilis",
    line: "sen-makeup",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Piel sensible que quiere dar color a las mejillas.",
      tipo: "Colorete hidratante en polvo.",
      necesidad: "Rubor luminoso y natural.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Tomar con brocha, retirar el exceso y aplicar en mejillas."
    }
  },

  {
    id: "sen-bonboncreamblush",
    name: "Bonbon Cream Blush",
    img: "imagenes/sensilis/sen-bonboncreamblush.webp",
    brand: "sensilis",
    line: "sen-makeup",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, para un toque de color luminoso.",
      tipo: "Colorete en crema.",
      necesidad: "Color modulable y aspecto natural.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Aplicar en mejillas y difuminar con los dedos o con brocha."
    }
  },

  {
    id: "sen-terracotta",
    name: "Velvet Terracotta",
    img: "imagenes/sensilis/sen-terracotta.webp",
    brand: "sensilis",
    line: "sen-makeup",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Piel sensible que quiere un efecto bronceado y esculpir el rostro.",
      tipo: "Polvos bronceadores iluminadores.",
      necesidad: "Calidez y luminosidad.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Tomar con brocha, retirar el exceso y aplicar."
    }
  },

  {
    id: "sen-invisiblematte",
    name: "Invisible Matt",
    img: "imagenes/sensilis/sen-invisiblematte.webp",
    brand: "sensilis",
    line: "sen-makeup",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Quien quiere matificar brillos y sellar el maquillaje.",
      tipo: "Polvos compactos matificantes.",
      necesidad: "Fija el maquillaje y matifica.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Tomar con brocha, retirar el exceso y extender sobre la zona."
    }
  },

  {
    id: "sen-skinglowpearl",
    name: "Skin Glow Pearl",
    img: "imagenes/sensilis/sen-skinglowpearl.webp",
    brand: "sensilis",
    line: "sen-makeup",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Piel sensible que busca luminosidad.",
      tipo: "Iluminador con perlas ultrafinas.",
      necesidad: "Acabado luminoso y uniforme.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Aplicar antes del maquillaje, para un toque sutil, o después, para más efecto."
    }
  },

  {
    id: "sen-ownthematte",
    name: "Own The Matte",
    img: "imagenes/sensilis/sen-ownthematte.webp",
    brand: "sensilis",
    line: "sen-makeup",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Quien busca un labial mate de larga duración.",
      tipo: "Labial ultracremoso mate.",
      necesidad: "Color intenso hasta 8 horas.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Deslizar definiendo el contorno y aplicar capas para intensificar."
    }
  },

  {
    id: "sen-eternallips",
    name: "Eternal Lips",
    img: "imagenes/sensilis/sen-eternallips.webp",
    brand: "sensilis",
    line: "sen-makeup",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de labios, especialmente secos y sensibles.",
      tipo: "Labial líquido mate que no transfiere.",
      necesidad: "Color duradero 8 horas sin resecar.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Aplicar con el aplicador definiendo la forma."
    }
  },

  {
    id: "sen-rougefondant",
    name: "Rouge Fondant",
    img: "imagenes/sensilis/sen-rougefondant.webp",
    brand: "sensilis",
    line: "sen-makeup",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Sensilis no indica un perfil concreto.",
      tipo: "Barra de labios de cobertura media.",
      necesidad: "Nutre y aporta acabado brillante.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Aplicar en el labio definiendo la forma."
    }
  },

  {
    id: "sen-lipglowoil",
    name: "Lip Glow Oil Repair",
    img: "imagenes/sensilis/sen-lipglowoil.webp",
    brand: "sensilis",
    line: "sen-makeup",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de labios, especialmente secos y sensibles.",
      tipo: "Gloss labial con aceites.",
      necesidad: "Brillo, color y reparación de los labios.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Aplicar con el aplicador definiendo la forma."
    }
  },

  {
    id: "sen-peptidelipcolo",
    name: "Peptide Lip Color",
    img: "imagenes/sensilis/sen-peptidelipcolo.webp",
    brand: "sensilis",
    line: "sen-makeup",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Labios que quieren volumen, color y brillo.",
      tipo: "Labial gloss voluminizador con péptidos.",
      necesidad: "Volumen inmediato y color.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Sensilis no detalla cómo aplicarlo."
    }
  },

  {
    id: "sen-eyeliner",
    name: "Eternalist Eyeliner",
    img: "imagenes/sensilis/sen-eyeliner.webp",
    brand: "sensilis",
    line: "sen-makeup",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Quien busca un delineador líquido fácil de usar.",
      tipo: "Delineador líquido negro.",
      necesidad: "Trazos precisos en una sola pasada.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Retirar el exceso en un pañuelo y trazar la línea."
    }
  },

  {
    id: "sen-jumbo",
    name: "Jumbo Eyes 3 In 1",
    img: "imagenes/sensilis/sen-jumbo.webp",
    brand: "sensilis",
    line: "sen-makeup",
    n: [],
    sk: ["sensible"],
    d: {
      paciente: "Todo tipo de ojos, incluso sensibles.",
      tipo: "Delineador y sombra waterproof.",
      necesidad: "Alta cobertura y larga duración.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Delinear la línea de los ojos o aplicar sobre el párpado y difuminar."
    }
  },

  {
    id: "sen-infiniteeyes",
    name: "Infinite Eyes",
    img: "imagenes/sensilis/sen-infiniteeyes.webp",
    brand: "sensilis",
    line: "sen-makeup",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Quien quiere enmarcar y definir la mirada.",
      tipo: "Lápiz de ojos automático waterproof.",
      necesidad: "Trazos firmes de larga duración.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Dibujar sobre la línea de las pestañas, de dentro hacia fuera."
    }
  },

  {
    id: "sen-lecrayon",
    name: "Le Crayon",
    img: "imagenes/sensilis/sen-lecrayon.webp",
    brand: "sensilis",
    line: "sen-makeup",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Quien busca una mirada intensa.",
      tipo: "Lápiz kajal ultracremoso.",
      necesidad: "Alta intensidad durante 24 horas.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Aplicar en la línea de agua o por fuera. Retirar con Bi-Phasic Make-Up Remover."
    }
  },

  {
    id: "sen-lestylo",
    name: "Le Stylo",
    img: "imagenes/sensilis/sen-lestylo.webp",
    brand: "sensilis",
    line: "sen-makeup",
    n: [],
    sk: ["sensible"],
    d: {
      paciente: "Ojos sensibles que quieren intensificar la mirada.",
      tipo: "Delineador automático de punta ultrafina.",
      necesidad: "Trazo preciso y de larga duración.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Aplicar dentro y fuera de la línea de agua. Retirar con Bi-Phasic Make-Up Remover."
    }
  },

  {
    id: "sen-sublime",
    name: "Sublime Lashes",
    img: "imagenes/sensilis/sen-sublime.webp",
    brand: "sensilis",
    line: "sen-makeup",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Quien busca efecto de pestañas postizas.",
      tipo: "Máscara curva y voluminizadora.",
      necesidad: "Volumen e intensidad; cuida las pestañas.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Retirar el exceso en un pañuelo y aplicar."
    }
  },

  {
    id: "sen-endless",
    name: "Endless Mascara",
    img: "imagenes/sensilis/sen-endless.webp",
    brand: "sensilis",
    line: "sen-makeup",
    n: [],
    sk: ["sensible"],
    d: {
      paciente: "Todo tipo de ojos, incluso sensibles.",
      tipo: "Máscara de longitud.",
      necesidad: "Longitud y larga duración.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Retirar el exceso en un pañuelo y aplicar."
    }
  },

  {
    id: "sen-mascaramegavolumen",
    name: "Unbelievable Lashes",
    img: "imagenes/sensilis/sen-mascaramegavolumen.webp",
    brand: "sensilis",
    line: "sen-makeup",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Quien busca un efecto de volumen extremo.",
      tipo: "Máscara de volumen con biotina y pantenol.",
      necesidad: "Volumen extremo y fortalecimiento.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Aplicar desde la raíz en zigzag hasta el extremo."
    }
  },

  {
    id: "sen-eyeconicmasc",
    name: "Eye-Conic HD Mascara",
    img: "imagenes/sensilis/sen-eyeconicmasc.webp",
    brand: "sensilis",
    line: "sen-makeup",
    n: [],
    sk: ["sensible"],
    d: {
      paciente: "Ojos sensibles que quieren definición a prueba de manchas.",
      tipo: "Máscara tubing de alta definición.",
      necesidad: "Larga duración hasta 24 horas.",
      cuando: "Sensilis no indica la frecuencia.",
      modo: "Aplicar desde la raíz en zigzag. Retirar con agua tibia."
    }
  },

  {
    id: "sen-daymascara",
    name: "Day Treatment Mascara",
    img: "imagenes/sensilis/sen-daymascara.webp",
    brand: "sensilis",
    line: "sen-makeup",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Pestañas y cejas, especialmente debilitadas.",
      tipo: "Máscara de tratamiento en gel.",
      necesidad: "Fortalece y aporta volumen y longitud.",
      cuando: "Por la mañana.",
      modo: "Aplicar sobre pestañas y cejas, de la raíz a las puntas."
    }
  },

  {
    id: "sen-nightmascara",
    name: "Night Treatment Mascara",
    img: "imagenes/sensilis/sen-nightmascara.webp",
    brand: "sensilis",
    line: "sen-makeup",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Pestañas y cejas, especialmente debilitadas.",
      tipo: "Máscara de tratamiento nocturno.",
      necesidad: "Fortalece y regenera.",
      cuando: "Por la noche.",
      modo: "Aplicar sobre pestañas y cejas, de la raíz a las puntas."
    }
  },

  /* ---------- Gema Herrerías · Limpieza ---------- */
  {
    id: "gh-aceite-limpiador-desmaquillante",
    name: "ACEITE LIMPIADOR Desmaquillante gel-to-milk",
    img: "imagenes/gemaherrerias/gh-aceite-limpiador-desmaquillante.webp",
    brand: "gemaherrerias",
    line: "gh-limpieza",
    n: ["limpieza"],
    sk: ["grasa", "seca"],
    d: {
      paciente: "Código Piel grasa y seca.",
      tipo: "Aceite limpiador desmaquillante de uso diario, no comedogénico.",
      necesidad: "Limpia y desmaquilla rostro y ojos sin residuo graso.",
      limpieza: "Desmaquillante (sin paso indicado)",
      limpiezaDet: "Sin paso indicado en su ficha.",
      cuando: "Uso diario.",
      modo: "Aplicar 2 pulsaciones sobre la piel seca, masajear unos segundos, emulsionar con agua y aclarar abundantemente."
    }
  },

  {
    id: "gh-kire-emulsion-limpiadora-x-cristina-mitre",
    name: "きれい KIRĒ x Cristina Mitre Emulsión limpiadora japonesa",
    img: "imagenes/gemaherrerias/gh-kire-emulsion-limpiadora-x-cristina-mitre.webp",
    brand: "gemaherrerias",
    line: "gh-limpieza",
    n: ["limpieza"],
    sk: ["todas"],
    d: {
      paciente: "Todos los Código Piel.",
      tipo: "Emulsión limpiadora hidratante de uso diario.",
      necesidad: "Elimina impurezas oleosas, polución, maquillaje y protector solar.",
      limpieza: "Limpiador (sin paso indicado)",
      limpiezaDet: "Sin paso indicado en su ficha.",
      cuando: "Mañana y/o noche.",
      modo: "Aplicar sobre el rostro humedecido, masajear en círculos hasta formar espuma y aclarar."
    }
  },

  {
    id: "gh-limpiador-espumante-syndet",
    name: "LIMPIADOR ESPUMANTE Syndet complejo aminoácidos",
    img: "imagenes/gemaherrerias/gh-limpiador-espumante-syndet.webp",
    brand: "gemaherrerias",
    line: "gh-limpieza",
    n: ["limpieza"],
    sk: ["todas"],
    d: {
      paciente: "Todos los Código Piel.",
      tipo: "Espuma limpiadora facial de uso diario con cepillo aplicador.",
      necesidad: "Limpieza en profundidad respetando la función barrera.",
      limpieza: "Limpiador (sin paso indicado)",
      limpiezaDet: "Sin paso indicado en su ficha.",
      cuando: "Uso diario.",
      modo: "Aplicar 2 pulsaciones sobre la piel humedecida, masajear con el cepillo y aclarar. Limpiar el cepillo con agua tras cada uso."
    }
  },

  {
    id: "gh-5-gel-limpiador-syndet",
    name: "5 GEL LIMPIADOR Syndet piel grasa",
    img: "imagenes/gemaherrerias/gh-5-gel-limpiador-syndet.webp",
    brand: "gemaherrerias",
    line: "gh-limpieza",
    n: ["limpieza", "acne"],
    sk: ["grasa", "imperfecciones"],
    d: {
      paciente: "Código Piel grasa con imperfecciones.",
      tipo: "Gel limpiador facial con ácido succínico e inulina.",
      necesidad: "Limpieza suave y seborreguladora, con efecto prebiótico.",
      limpieza: "Limpiador (sin paso indicado)",
      limpiezaDet: "Sin paso indicado en su ficha.",
      cuando: "Gema Herrerías no indica la frecuencia.",
      modo: "Aplicar una pequeña cantidad sobre el rostro humedecido, masajear hasta formar espuma y aclarar."
    }
  },

  {
    id: "gh-limpiador-hidratante-desmaquillante",
    name: "LIMPIADOR HIDRATANTE Desmaquillante micelar",
    img: "imagenes/gemaherrerias/gh-limpiador-hidratante-desmaquillante.webp",
    brand: "gemaherrerias",
    line: "gh-limpieza",
    n: ["limpieza"],
    sk: ["todas"],
    d: {
      paciente: "Todos los Código Piel.",
      tipo: "Limpiador híbrido entre solución micelar y tónico.",
      necesidad: "Limpia, hidrata, calma y revitaliza.",
      limpieza: "Desmaquillante (sin paso indicado)",
      limpiezaDet: "Sin paso indicado en su ficha.",
      cuando: "Mañana y/o noche.",
      modo: "Aplicar con un disco sobre la piel seca. No requiere aclarado."
    }
  },

  {
    id: "gh-sistema-bifase-desmaquillante",
    name: "SISTEMA BIFASE Desmaquillante de ojos y labios",
    img: "imagenes/gemaherrerias/gh-sistema-bifase-desmaquillante.webp",
    brand: "gemaherrerias",
    line: "gh-limpieza",
    n: ["limpieza"],
    sk: ["todas"],
    d: {
      paciente: "Todos los Código Piel.",
      tipo: "Desmaquillante bifásico para ojos y labios.",
      necesidad: "Desmaquilla sin dejar residuo graso.",
      limpieza: "Desmaquillante de ojos y labios",
      limpiezaDet: "Sin paso indicado en su ficha.",
      cuando: "Gema Herrerías no indica la frecuencia.",
      modo: "Agitar. Aplicar sobre un disco y deslizar por párpados, pestañas y labios. Sin aclarado."
    }
  },

  {
    id: "gh-limpiador-en-polvo-enzimatico-uso-diario",
    name: "LIMPIADOR EN POLVO Enzimático uso diario",
    img: "imagenes/gemaherrerias/gh-limpiador-en-polvo-enzimatico-uso-diario.webp",
    brand: "gemaherrerias",
    line: "gh-limpieza",
    n: ["limpieza", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Todos los Código Piel.",
      tipo: "Limpiador en polvo con arcilla blanca, papaína y bromelaína.",
      necesidad: "Limpia y exfolia delicadamente, eliminando impurezas y células muertas.",
      limpieza: "Limpiador y exfoliante",
      limpiezaDet: "Limpia y exfolia. Sin paso indicado en su ficha.",
      cuando: "Uso diario.",
      modo: "Poner un poco de polvo en la palma, añadir agua y emulsionar. Aplicar en círculos y aclarar con agua tibia.",
      solar: "Es recomendable usar protector solar de amplio espectro durante el tratamiento."
    }
  },

  /* ---------- Gema Herrerías · Exfoliación ---------- */
  {
    id: "gh-peeling-8-pha-discos-piel-sensible",
    name: "PEELING 8 PHA Piel sensible",
    img: "imagenes/gemaherrerias/gh-peeling-8-pha-discos-piel-sensible.webp",
    brand: "gemaherrerias",
    line: "gh-exfoliacion",
    n: ["apagada", "deshidratacion"],
    sk: ["sensible"],
    d: {
      paciente: "Código Piel sensible.",
      tipo: "Peeling químico con 8 % de PHA, no comedogénico.",
      necesidad: "Exfoliación suave, hidratación y renovación.",
      limpieza: "Exfoliante",
      limpiezaDet: "Peeling químico suave.",
      cuando: "2 noches a la semana, en días no consecutivos.",
      modo: "Aplicar sobre el rostro limpio y seco, evitando contorno de ojos y labios. Dejar toda la noche.",
      solar: "Es recomendable usar protector solar de amplio espectro durante el tratamiento."
    }
  },

  {
    id: "gh-peeling-10-aha-discos-piel-iniciacion",
    name: "PEELING 10 AHA Piel resistente [Iniciación]",
    img: "imagenes/gemaherrerias/gh-peeling-10-aha-discos-piel-iniciacion.webp",
    brand: "gemaherrerias",
    line: "gh-exfoliacion",
    n: ["arrugas", "manchas", "acne", "apagada"],
    sk: ["seca", "grasa", "mixta", "imperfecciones"],
    d: {
      paciente: "Código Piel resistente.",
      tipo: "Peeling químico de iniciación con 10 % de AHA.",
      necesidad: "Antiedad, exfoliante y despigmentante; reduce imperfecciones.",
      limpieza: "Exfoliante",
      limpiezaDet: "Peeling químico de iniciación.",
      cuando: "2 noches a la semana, en días no consecutivos.",
      modo: "Aplicar sobre el rostro limpio y seco, evitando contorno de ojos y labios. Dejar de 15 minutos a toda la noche, según tolerancia. Aclarado opcional.",
      solar: "Es recomendable usar protector solar de amplio espectro durante el tratamiento.",
      nota: "Es habitual un ligero escozor pasajero. Si persiste, aclarar con agua."
    }
  },

  {
    id: "gh-peeling-20-aha-discos-intensivos",
    name: "PEELING 20 AHA Piel resistente [Intensivo]",
    img: "imagenes/gemaherrerias/gh-peeling-20-aha-discos-intensivos.webp",
    brand: "gemaherrerias",
    line: "gh-exfoliacion",
    n: ["arrugas", "manchas", "acne", "apagada"],
    sk: ["seca", "grasa", "mixta", "imperfecciones"],
    d: {
      paciente: "Código Piel resistente. No apto en piel sensible.",
      tipo: "Peeling químico intensivo con 20 % de AHA.",
      necesidad: "Antiedad, exfoliante y despigmentante; reduce imperfecciones.",
      limpieza: "Exfoliante",
      limpiezaDet: "Peeling químico intensivo.",
      cuando: "2 noches a la semana, en días no consecutivos.",
      modo: "Aplicar sobre el rostro limpio y seco, evitando contorno de ojos y labios. Dejar de 15 minutos a toda la noche, según tolerancia. Aclarado opcional.",
      solar: "Es recomendable usar protector solar de amplio espectro durante el tratamiento.",
      nota: "No apto en piel sensible. Es habitual un ligero escozor pasajero; si persiste, aclarar con agua."
    }
  },

  {
    id: "gh-mascarilla-purificante-arcilla-mediterranea",
    name: "MASCARILLA PURIFICANTE Arcilla mediterránea",
    img: "imagenes/gemaherrerias/gh-mascarilla-purificante-arcilla-mediterranea.webp",
    brand: "gemaherrerias",
    line: "gh-exfoliacion",
    n: ["acne", "poros"],
    sk: ["grasa", "imperfecciones"],
    d: {
      paciente: "Código Piel grasa con imperfecciones.",
      tipo: "Mascarilla y peeling enzimático en polvo 2 en 1.",
      necesidad: "Seborregula, purifica, exfolia y limpia el poro.",
      limpieza: "Exfoliante",
      limpiezaDet: "Mascarilla con peeling enzimático.",
      cuando: "2 veces por semana, por la noche.",
      modo: "Mezclar 2 cucharadas con 2 pulsaciones de 5 AZELAIC-S. Aplicar evitando contorno de ojos y labios, dejar secar 10 minutos y aclarar con agua tibia."
    }
  },

  /* ---------- Gema Herrerías · Lociones y brumas ---------- */
  {
    id: "gh-esencia-4fnh-x-cristina-mitre-locion-hidratante",
    name: "ESENCIA 4FNH x Cristina Mitre Loción hidratante diaria",
    img: "imagenes/gemaherrerias/gh-esencia-4fnh-x-cristina-mitre-locion-hidratante.webp",
    brand: "gemaherrerias",
    line: "gh-lociones",
    n: ["deshidratacion"],
    sk: ["todas"],
    d: {
      paciente: "Todos los Código Piel.",
      tipo: "Loción hidratante con 4 ácidos hialurónicos y sales minerales.",
      necesidad: "Restablece el factor natural de hidratación y preserva la barrera.",
      cuando: "1 o 2 veces al día, antes del tratamiento diario.",
      modo: "Aplicar con las palmas sobre la piel limpia y seca."
    }
  },

  {
    id: "gh-5-azelaic-s-x-cristina-mitre-locion-exfoliante",
    name: "5 AZELAIC-S x Cristina Mitre Loción exfoliante diaria",
    img: "imagenes/gemaherrerias/gh-5-azelaic-s-x-cristina-mitre-locion-exfoliante.webp",
    brand: "gemaherrerias",
    line: "gh-lociones",
    n: ["poros", "apagada", "acne"],
    sk: ["todas"],
    d: {
      paciente: "Todos los Código Piel.",
      tipo: "Loción exfoliante con 2 % de ácido salicílico y azeloglicina.",
      necesidad: "Elimina células muertas, minimiza poros, seborregula y aporta luminosidad.",
      limpieza: "Exfoliante",
      limpiezaDet: "Loción exfoliante diaria sin aclarado.",
      cuando: "1 o 2 veces al día, antes del tratamiento diario.",
      modo: "Impregnar un disco y deslizar sobre el rostro limpio y seco, evitando el contorno de ojos. Sin aclarado."
    }
  },

  {
    id: "gh-bruma-universal-dermobiota",
    name: "BRUMA UNIVERSAL Dermobiota defensa diaria",
    img: "imagenes/gemaherrerias/gh-bruma-universal-dermobiota.webp",
    brand: "gemaherrerias",
    line: "gh-lociones",
    n: ["deshidratacion", "rojeces"],
    sk: ["todas"],
    d: {
      paciente: "Todos los Código Piel, incluidas las más sensibles con tendencia a rojeces.",
      tipo: "Bruma facial hidratante y reparadora.",
      necesidad: "Hidrata, refuerza la barrera y equilibra la dermobiota.",
      cuando: "Mañana y noche; se puede renovar durante el día.",
      modo: "Vaporizar a 15 cm sobre rostro, cuello y escote limpios y secos, con ojos y labios cerrados."
    }
  },

  /* ---------- Gema Herrerías · Antioxidantes ---------- */
  {
    id: "gh-5-cica-e-serum-piel-sensible",
    name: "5 CICA-E Sérum antioxidante piel sensible",
    img: "imagenes/gemaherrerias/gh-5-cica-e-serum-piel-sensible.webp",
    brand: "gemaherrerias",
    line: "gh-antioxidantes",
    n: ["rojeces"],
    sk: ["sensible"],
    d: {
      paciente: "Código Piel sensible con rojeces y pérdida de función barrera.",
      tipo: "Sérum antioxidante con vitamina E y centella asiática.",
      necesidad: "Antioxidante; piel sensible y con rojeces.",
      cuando: "Gema Herrerías no indica la frecuencia.",
      modo: "Aplicar sobre el rostro limpio y seco hasta su total penetración."
    }
  },

  {
    id: "gh-15-antiox-c-serum-antioxidante",
    name: "15 ANTIOX-C Sérum antioxidante antiedad",
    img: "imagenes/gemaherrerias/gh-15-antiox-c-serum-antioxidante.webp",
    brand: "gemaherrerias",
    line: "gh-antioxidantes",
    n: ["arrugas", "flacidez", "manchas"],
    sk: ["seca", "grasa", "mixta", "imperfecciones"],
    d: {
      paciente: "Código Piel resistente con arrugas, flacidez y pigmentación. No apto en piel sensible.",
      tipo: "Sérum con 10 % de vitamina C estabilizada.",
      necesidad: "Antioxidante y despigmentante; signos del envejecimiento.",
      cuando: "Por la mañana.",
      modo: "Aplicar sobre el rostro limpio y seco hasta su total penetración. Evitar el cuello.",
      nota: "No apto en piel sensible."
    }
  },

  {
    id: "gh-12-azelaic-n-serum-imperfecciones",
    name: "12 AZELAIC-N Sérum antioxidante imperfecciones",
    img: "imagenes/gemaherrerias/gh-12-azelaic-n-serum-imperfecciones.webp",
    brand: "gemaherrerias",
    line: "gh-antioxidantes",
    n: ["acne", "manchas"],
    sk: ["grasa", "imperfecciones"],
    d: {
      paciente: "Código Piel grasa con imperfecciones.",
      tipo: "Sérum con 8 % de azeloglicina y 4 % de niacinamida.",
      necesidad: "Seborregula, despigmenta y reduce imperfecciones.",
      cuando: "Gema Herrerías no indica la frecuencia.",
      modo: "Aplicar sobre el rostro limpio y seco hasta su total penetración."
    }
  },

  {
    id: "gh-10-nam-td-serum-despigmentante",
    name: "10 NAM-TD Sérum antioxidante despigmentante",
    img: "imagenes/gemaherrerias/gh-10-nam-td-serum-despigmentante.webp",
    brand: "gemaherrerias",
    line: "gh-antioxidantes",
    n: ["manchas", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Código Piel con alteraciones de la pigmentación.",
      tipo: "Sérum con niacinamida y 2,5 % de ácido tranexámico.",
      necesidad: "Manchas y signos del envejecimiento.",
      cuando: "Gema Herrerías no indica la frecuencia.",
      modo: "Aplicar sobre el rostro limpio y seco hasta su total penetración.",
      solar: "Es recomendable el uso diario de protección solar de amplio espectro durante el tratamiento."
    }
  },

  /* ---------- Gema Herrerías · Acción intensiva ---------- */
  {
    id: "gh-600-retinal-r-serum-antiedad",
    name: "600 RETINAL-R Sérum antiedad piel sensible",
    img: "imagenes/gemaherrerias/gh-600-retinal-r-serum-antiedad.webp",
    brand: "gemaherrerias",
    line: "gh-intensiva",
    n: ["arrugas", "flacidez", "manchas"],
    sk: ["sensible"],
    d: {
      paciente: "Código Piel sensible con arrugas, flacidez, pigmentación y textura irregular.",
      tipo: "Multirretinoide con retinaldehído en lipovesículas.",
      necesidad: "Despigmenta y reduce los signos del envejecimiento.",
      cuando: "Por la noche, de forma progresiva según tolerancia.",
      modo: "Aplicar sobre el rostro limpio y seco hasta su total penetración.",
      solar: "Es recomendable el uso diario de protección solar de amplio espectro durante el tratamiento.",
      nota: "No apto en embarazo o lactancia."
    }
  },

  {
    id: "gh-2000-retinal-r-serum-antiedad",
    name: "2000 RETINAL-R Sérum antiedad arrugas y manchas",
    img: "imagenes/gemaherrerias/gh-2000-retinal-r-serum-antiedad.webp",
    brand: "gemaherrerias",
    line: "gh-intensiva",
    n: ["arrugas", "manchas"],
    sk: ["seca", "grasa", "mixta", "imperfecciones"],
    d: {
      paciente: "Piel con arrugas y manchas.",
      tipo: "Triple retinoide con retinal, retinol y activo de exosomas.",
      necesidad: "Arrugas y manchas.",
      cuando: "Por la noche, de forma progresiva según tolerancia.",
      modo: "Aplicar sobre el rostro limpio y seco hasta su total penetración.",
      solar: "Es recomendable el uso diario de protección solar de amplio espectro durante el tratamiento.",
      nota: "No apto en embarazo o lactancia. Contiene vitamina A: tener en cuenta la ingesta diaria."
    }
  },

  {
    id: "gh-3000-retinol-np-serum-antiedad",
    name: "3000 RETINOL-NP Sérum antiedad arrugas y flacidez",
    img: "imagenes/gemaherrerias/gh-3000-retinol-np-serum-antiedad.webp",
    brand: "gemaherrerias",
    line: "gh-intensiva",
    n: ["arrugas", "flacidez", "manchas"],
    sk: ["seca", "grasa", "mixta", "imperfecciones"],
    d: {
      paciente: "Código Piel resistente con arrugas, flacidez, pigmentación y textura irregular.",
      tipo: "Sérum con 0,3 % de retinol puro, niacinamida y hexapéptido.",
      necesidad: "Antioxidante, antiglicación y despigmentante; arrugas y flacidez.",
      cuando: "Por la noche, de forma progresiva según tolerancia.",
      modo: "Aplicar sobre el rostro limpio y seco hasta su total penetración.",
      solar: "Es recomendable el uso diario de protección solar de amplio espectro durante el tratamiento.",
      nota: "No apto en embarazo o lactancia. Contiene vitamina A: tener en cuenta la ingesta diaria."
    }
  },

  {
    id: "gh-1600-retinal-z-serum-imperfecciones",
    name: "1600 RETINAL-Z Sérum imperfecciones",
    img: "imagenes/gemaherrerias/gh-1600-retinal-z-serum-imperfecciones.webp",
    brand: "gemaherrerias",
    line: "gh-intensiva",
    n: ["acne", "poros"],
    sk: ["grasa", "imperfecciones"],
    d: {
      paciente: "Código Piel grasa con imperfecciones.",
      tipo: "Multirretinoide con retinaldehído y hexapéptido de zinc, no comedogénico.",
      necesidad: "Seborregula, reduce imperfecciones e hiperqueratinización y mejora los poros.",
      cuando: "Por la noche, de forma progresiva según tolerancia.",
      modo: "Aplicar sobre el rostro limpio y seco hasta su total penetración.",
      solar: "Es recomendable el uso diario de protección solar de amplio espectro durante el tratamiento.",
      nota: "No apto en embarazo o lactancia."
    }
  },

  {
    id: "gh-25-peptidos-th-serum-antiedad",
    name: "25 PÉPTIDOS-TH Sérum antiedad arrugas y flacidez",
    img: "imagenes/gemaherrerias/gh-25-peptidos-th-serum-antiedad.webp",
    brand: "gemaherrerias",
    line: "gh-intensiva",
    n: ["arrugas", "flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Código Piel con arrugas y flacidez.",
      tipo: "Sérum de multipéptidos señal con ácido hialurónico.",
      necesidad: "Reafirma, reduce arrugas y estimula el colágeno.",
      cuando: "Gema Herrerías no indica la frecuencia.",
      modo: "Aplicar sobre el rostro limpio y seco hasta su total penetración."
    }
  },

  {
    id: "gh-25-peptidos-th-cremagel-roll-on-para-cuello-y-escote",
    name: "25 PÉPTIDOS-TH Cremagel roll-on para cuello y escote",
    img: "imagenes/gemaherrerias/gh-25-peptidos-th-cremagel-roll-on-para-cuello-y-escote.webp",
    brand: "gemaherrerias",
    line: "gh-intensiva",
    n: ["arrugas", "flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Código Piel con arrugas y flacidez en cuello y escote.",
      tipo: "Cremagel reafirmante de multipéptidos con roll-on.",
      necesidad: "Firmeza y arrugas de cuello y escote.",
      cuando: "2 veces al día.",
      modo: "Desbloquear el cierre y deslizar el roll-on con movimientos ascendentes por cuello y escote hasta su penetración."
    }
  },

  {
    id: "gh-triple-ceramida-serum-antiedad",
    name: "TRIPLE CERAMIDA Sérum antiedad piel seca",
    img: "imagenes/gemaherrerias/gh-triple-ceramida-serum-antiedad.webp",
    brand: "gemaherrerias",
    line: "gh-intensiva",
    n: ["seca", "arrugas", "deshidratacion"],
    sk: ["seca"],
    d: {
      paciente: "Código Piel seca a muy seca con signos de envejecimiento.",
      tipo: "Sérum con triple ceramida, omegas y colesterol.",
      necesidad: "Repara, hidrata y nutre; reduce arrugas.",
      cuando: "Mañana y/o noche.",
      modo: "Aplicar sobre el rostro limpio y seco hasta su total penetración."
    }
  },

  {
    id: "gh-10-aza-gz-crema-polvo-imperfecciones",
    name: "10 AZA-GZ Crema polvo imperfecciones",
    img: "imagenes/gemaherrerias/gh-10-aza-gz-crema-polvo-imperfecciones.webp",
    brand: "gemaherrerias",
    line: "gh-intensiva",
    n: ["acne", "manchas"],
    sk: ["grasa", "imperfecciones"],
    d: {
      paciente: "Código Piel grasa con imperfecciones.",
      tipo: "Tratamiento con 10 % de ácido azelaico, no comedogénico.",
      necesidad: "Seborregula, despigmenta y mejora imperfecciones.",
      cuando: "Preferentemente por la noche.",
      modo: "Aplicar una pulsación sobre el rostro, evitando el contorno de ojos.",
      solar: "Es recomendable el uso diario de protección solar de amplio espectro durante el tratamiento."
    }
  },

  /* ---------- Gema Herrerías · Hidratantes Función Barrera ---------- */
  {
    id: "gh-funcion-barrera-crema-piel-seca",
    name: "FUNCIÓN BARRERA Crema piel seca",
    img: "imagenes/gemaherrerias/gh-funcion-barrera-crema-piel-seca.webp",
    brand: "gemaherrerias",
    line: "gh-barrera",
    n: ["seca", "arrugas"],
    sk: ["seca"],
    d: {
      paciente: "Código Piel seca.",
      tipo: "Hidratante antiedad reparadora de la barrera.",
      necesidad: "Hidrata, refuerza la barrera, mejora la firmeza y minimiza arrugas.",
      cuando: "Mañana y/o noche.",
      modo: "Aplicar 1 o 2 pulsaciones sobre rostro y cuello, con presiones lineales del centro hacia fuera."
    }
  },

  {
    id: "gh-funcion-barrera-cremagel-piel-grasa",
    name: "FUNCIÓN BARRERA Cremagel piel grasa",
    img: "imagenes/gemaherrerias/gh-funcion-barrera-cremagel-piel-grasa.webp",
    brand: "gemaherrerias",
    line: "gh-barrera",
    n: ["deshidratacion", "arrugas"],
    sk: ["grasa"],
    d: {
      paciente: "Código Piel grasa.",
      tipo: "Hidratante antiedad reparadora, no comedogénica.",
      necesidad: "Hidrata, refuerza la barrera, mejora la firmeza y minimiza arrugas.",
      cuando: "Mañana y/o noche.",
      modo: "Aplicar 1 o 2 pulsaciones sobre rostro y cuello, con presiones lineales del centro hacia fuera."
    }
  },

  {
    id: "gh-funcion-barrera-formula-plus-antiedad-intensiva",
    name: "FUNCIÓN BARRERA Fórmula plus antiedad intensiva",
    img: "imagenes/gemaherrerias/gh-funcion-barrera-formula-plus-antiedad-intensiva.webp",
    brand: "gemaherrerias",
    line: "gh-barrera",
    n: ["arrugas", "flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Piel con signos del envejecimiento y barrera alterada.",
      tipo: "Fórmula antiedad intensiva con 5 ácidos hialurónicos y péptidos.",
      necesidad: "Todos los signos del envejecimiento; efecto tensor en 30 minutos.",
      cuando: "Mañana y/o noche.",
      modo: "Aplicar una pulsación sobre rostro y cuello, con presiones lineales del centro hacia fuera."
    }
  },

  {
    id: "gh-calmante-y-reparadora-x-boticaria-garcia-mano-de-santo",
    name: "CALMANTE REPARADORA x Boticaria García \"Mano de Santo\"",
    img: "imagenes/gemaherrerias/gh-calmante-y-reparadora-x-boticaria-garcia-mano-de-santo.webp",
    brand: "gemaherrerias",
    line: "gh-barrera",
    n: ["rojeces", "seca"],
    sk: ["sensible"],
    d: {
      paciente: "Código Piel sensible; pieles agredidas y con picor.",
      tipo: "Crema calmante con pantenol y centella, no comedogénica.",
      necesidad: "Calma y repara la función barrera.",
      cuando: "Mañana y/o noche; se puede renovar durante el día.",
      modo: "Aplicar sobre el rostro limpio y seco hasta su total penetración."
    }
  },

  {
    id: "gh-funcion-barrera-mascarilla-ultrahidratante",
    name: "FUNCIÓN BARRERA Mascarilla ultrahidratante",
    img: "imagenes/gemaherrerias/gh-funcion-barrera-mascarilla-ultrahidratante.webp",
    brand: "gemaherrerias",
    line: "gh-barrera",
    n: ["deshidratacion", "seca"],
    sk: ["todas"],
    d: {
      paciente: "Todos los Código Piel.",
      tipo: "Mascarilla de noche con doble ácido hialurónico, no comedogénica.",
      necesidad: "Hidrata, regenera y repara la barrera.",
      cuando: "2 veces por semana, durante toda la noche.",
      modo: "Extender una capa gruesa sobre rostro y cuello limpios, incluido el contorno de ojos, y masajear."
    }
  },

  {
    id: "gh-funcion-barrera-cremagel-corporal",
    name: "FUNCIÓN BARRERA Cremagel corporal",
    img: "imagenes/gemaherrerias/gh-funcion-barrera-cremagel-corporal.webp",
    brand: "gemaherrerias",
    line: "gh-barrera",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Todos los Código Piel.",
      tipo: "Cremagel corporal con ceramida NG.",
      necesidad: "Repara la barrera, hidrata y mantiene la dermobiota.",
      cuando: "Mañana y/o noche.",
      modo: "Aplicar sobre la piel del cuerpo limpia y seca."
    }
  },

  {
    id: "gh-funcion-barrera-balsamo-multifuncion",
    name: "FUNCIÓN BARRERA Bálsamo multifunción",
    img: "imagenes/gemaherrerias/gh-funcion-barrera-balsamo-multifuncion.webp",
    brand: "gemaherrerias",
    line: "gh-barrera",
    n: ["seca"],
    sk: ["todas"],
    d: {
      paciente: "Todos los Código Piel; labios, cejas, cutículas y zonas secas.",
      tipo: "Bálsamo multiusos con ceramida NG.",
      necesidad: "Nutre, repara y protege zonas secas.",
      cuando: "Según necesidad, a lo largo del día.",
      modo: "Aplicar sobre la piel limpia y seca."
    }
  },

  {
    id: "gh-funcion-barrera-balsamo-labial-copia",
    name: "FUNCIÓN BARRERA Bálsamo labial",
    img: "imagenes/gemaherrerias/gh-funcion-barrera-balsamo-labial-copia.webp",
    brand: "gemaherrerias",
    line: "gh-barrera",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Labios de todos los Código Piel.",
      tipo: "Bálsamo labial no pegajoso (edición limitada con charm de regalo).",
      necesidad: "Hidrata, repara y protege de la sequedad.",
      cuando: "Según necesidad, a lo largo del día.",
      modo: "Aplicar una pequeña cantidad sobre los labios limpios y secos."
    }
  },

  /* ---------- Gema Herrerías · Contorno de ojos ---------- */
  {
    id: "gh-funcion-global-contorno-de-ojos",
    name: "FUNCIÓN GLOBAL Contorno de ojos antiedad",
    img: "imagenes/gemaherrerias/gh-funcion-global-contorno-de-ojos.webp",
    brand: "gemaherrerias",
    line: "gh-ojos",
    n: ["ojos", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Contorno de ojos y labios de todos los Código Piel.",
      tipo: "Cremagel antiedad con hexapéptidos y ácido hialurónico.",
      necesidad: "Arrugas, firmeza, hidratación, ojeras y bolsas.",
      cuando: "2 veces al día.",
      modo: "Aplicar sobre el hueso de la órbita y el labio superior y masajear hasta su penetración."
    }
  },

  {
    id: "gh-k-at-serum-contorno-de-ojos",
    name: "K-AT SÉRUM Contorno de ojos para ojeras y bolsas",
    img: "imagenes/gemaherrerias/gh-k-at-serum-contorno-de-ojos.webp",
    brand: "gemaherrerias",
    line: "gh-ojos",
    n: ["ojos"],
    sk: ["seca", "grasa", "mixta", "imperfecciones"],
    d: {
      paciente: "Código Piel resistente con ojeras y bolsas. No apto en piel sensible.",
      tipo: "Sérum con vitamina K óxido, ácido tranexámico y tri roll-on.",
      necesidad: "Ojeras pigmentarias y vasculares y bolsas persistentes.",
      cuando: "2 veces al día.",
      modo: "Deslizar el roll-on sobre ojera y bolsa y masajear hasta su penetración.",
      nota: "No apto en piel sensible."
    }
  },

  /* ---------- Gema Herrerías · Protección solar ---------- */
  {
    id: "gh-factor-invisible-spf50-amplio-espectro",
    name: "FACTOR INVISIBLE SPF50 Amplio espectro",
    img: "imagenes/gemaherrerias/gh-factor-invisible-spf50-amplio-espectro.webp",
    brand: "gemaherrerias",
    line: "gh-solar",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Todos los Código Piel, incluidas las grasas con imperfecciones.",
      tipo: "Protector solar incoloro en gel invisible.",
      necesidad: "Protección UVB, UVA, luz azul e IR-A.",
      cuando: "Cada mañana, antes de la exposición. Renovar a lo largo del día.",
      modo: "Aplicar en cantidad suficiente y uniforme sobre el rostro, evitando el contorno de ojos.",
      solar: "Un exceso de exposición es perjudicial incluso con protección. Una aplicación insuficiente reduce mucho la protección."
    }
  },

  {
    id: "gh-factor-fotobioma-spf50-amplio-espectro",
    name: "FACTOR FOTOBIOMA SPF50+ Amplio espectro",
    img: "imagenes/gemaherrerias/gh-factor-fotobioma-spf50-amplio-espectro.webp",
    brand: "gemaherrerias",
    line: "gh-solar",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Todos los Código Piel, incluidas las sensibles.",
      tipo: "Protector solar incoloro de textura ligera con niacinamida.",
      necesidad: "Protección UVB, UVA, luz azul e IR-A.",
      cuando: "Cada mañana, antes de la exposición. Renovar a lo largo del día.",
      modo: "Aplicar en cantidad suficiente y uniforme sobre el rostro, evitando el contorno de ojos.",
      solar: "Una aplicación insuficiente reduce mucho la protección."
    }
  },

  /* ---------- Gema Herrerías · Complementos alimenticios ---------- */
  {
    id: "gh-agederm-ceramide-complemento-alimenticio",
    name: "AGEDERM CERAMIDE Complemento alimenticio",
    img: "imagenes/gemaherrerias/gh-agederm-ceramide-complemento-alimenticio.webp",
    brand: "gemaherrerias",
    line: "gh-complementos",
    n: ["arrugas", "flacidez", "seca"],
    sk: ["todas"],
    d: {
      paciente: "Código Piel con arrugas y/o flacidez o piel muy seca.",
      tipo: "Complemento con fitoceramidas, ácido hialurónico y niacina.",
      necesidad: "Cuidado de la piel desde el interior.",
      cuando: "2 cápsulas al día, preferiblemente con una comida principal.",
      modo: "Tomar con un vaso de agua. No superar la dosis diaria."
    }
  },

  {
    id: "gh-aoxderm-pigment-complemento-alimenticio",
    name: "AOXDERM PIGMENT Complemento alimenticio",
    img: "imagenes/gemaherrerias/gh-aoxderm-pigment-complemento-alimenticio.webp",
    brand: "gemaherrerias",
    line: "gh-complementos",
    n: ["manchas"],
    sk: ["todas"],
    d: {
      paciente: "Código Piel con pigmentación.",
      tipo: "Complemento con 500 mg de nicotinamida y luteína.",
      necesidad: "Cuidado de la piel desde el interior.",
      cuando: "2 cápsulas al día, preferiblemente con una comida principal.",
      modo: "Tomar enteras con un vaso de agua. No superar la dosis diaria.",
      nota: "No recomendado en embarazo ni lactancia. Consultar con un profesional en caso de enfermedad hepática o tratamiento farmacológico."
    }
  },

  {
    id: "gh-probioderm-balance-complemento-alimenticio",
    name: "PROBIODERM BALANCE Complemento alimenticio",
    img: "imagenes/gemaherrerias/gh-probioderm-balance-complemento-alimenticio.webp",
    brand: "gemaherrerias",
    line: "gh-complementos",
    n: ["acne"],
    sk: ["todas"],
    d: {
      paciente: "Código Piel con imperfecciones, a partir de 12 años.",
      tipo: "Complemento con 5 cepas probióticas, nicotinamida y zinc.",
      necesidad: "Cuidado de la piel desde el interior.",
      cuando: "1 cápsula al día, preferiblemente en ayunas.",
      modo: "Tomar con un vaso de agua. No superar la dosis diaria.",
      nota: "Consultar con un profesional en caso de embarazo, lactancia o inmunodepresión."
    }
  },

  {
    id: "gh-magnesio-global-complemento-alimenticio",
    name: "MAGNESIO GLOBAL Complemento alimenticio",
    img: "imagenes/gemaherrerias/gh-magnesio-global-complemento-alimenticio.webp",
    brand: "gemaherrerias",
    line: "gh-complementos",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Sin perfil de piel: ayuda a disminuir el cansancio y la fatiga.",
      tipo: "Complemento con 3 fuentes de magnesio, taurina y vitamina B6.",
      necesidad: "Cansancio y fatiga.",
      cuando: "2 cápsulas al día, preferiblemente con una comida principal.",
      modo: "Tomar con un vaso de agua. No superar la dosis diaria."
    }
  },

  {
    id: "gh-omega-1500epa-dha-complemento-alimenticio",
    name: "OMEGA 1500 EPA/DHA Complemento alimenticio",
    img: "imagenes/gemaherrerias/gh-omega-1500epa-dha-complemento-alimenticio.webp",
    brand: "gemaherrerias",
    line: "gh-complementos",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Sin perfil de piel: aporte de omega-3.",
      tipo: "Complemento de aceite de pescado con EPA, DHA y vitamina E.",
      necesidad: "Aporte de ácidos grasos omega-3.",
      cuando: "2 cápsulas al día, preferiblemente con una comida principal.",
      modo: "Tomar con un vaso de agua. No superar la dosis diaria."
    }
  },

  /* ---------- Medik8 · Limpiadores ---------- */
  {
    id: "m8-lipid-balance-cleansing-oil",
    name: "Lipid-Balance Cleansing Oil™",
    img: "imagenes/medik8/m8-lipid-balance-cleansing-oil.webp",
    brand: "medik8",
    line: "m8-limpiadores",
    n: ["limpieza"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Aceite desmaquillante que pasa a textura lechosa.",
      necesidad: "Elimina maquillaje resistente, incluso en ojos, protector solar e impurezas.",
      limpieza: "Doble limpieza · 1.er paso",
      limpiezaDet: "Medik8 lo recomienda como primer paso ideal de una doble limpieza.",
      cuando: "Medik8 no indica la frecuencia.",
      modo: "Masajear sobre la piel seca, emulsionar con agua tibia, aclarar y secar a toques.",
      nota: "Según Medik8, no contiene ingredientes que recomiende evitar en el embarazo, salvo indicación médica."
    }
  },

  {
    id: "m8-total-moisture-daily-cleansing-gel",
    name: "Total Moisture Daily Cleansing Gel",
    img: "imagenes/medik8/m8-total-moisture-daily-cleansing-gel.webp",
    brand: "medik8",
    line: "m8-limpiadores",
    n: ["limpieza", "deshidratacion"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel.",
      tipo: "Gel limpiador que prioriza la hidratación.",
      necesidad: "Elimina impurezas sin alterar el equilibrio ni la barrera cutánea.",
      limpieza: "Limpiador (sin paso indicado)",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "Mañana y noche.",
      modo: "Aplicar 2 pulsaciones en la palma, hacer espuma y masajear sobre rostro y cuello húmedos. Aclarar y secar a toques."
    }
  },

  {
    id: "m8-micellar-mousse",
    name: "Micellar Mousse™",
    img: "imagenes/medik8/m8-micellar-mousse.webp",
    brand: "medik8",
    line: "m8-limpiadores",
    n: ["limpieza"],
    sk: ["todas"],
    d: {
      paciente: "Quien busca una alternativa al agua micelar.",
      tipo: "Mousse limpiadora micelar.",
      necesidad: "Limpieza suave; piel nutrida y equilibrada.",
      limpieza: "Limpiador (sin paso indicado)",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "Mañana y noche.",
      modo: "Masajear un poco sobre rostro y cuello húmedos. Aclarar y secar a toques.",
      nota: "Según Medik8, no contiene ingredientes que recomiende evitar en el embarazo, salvo indicación médica."
    }
  },

  {
    id: "m8-calmwise-soothing-cleanser",
    name: "Calmwise™ Soothing Cleanser",
    img: "imagenes/medik8/m8-calmwise-soothing-cleanser.webp",
    brand: "medik8",
    line: "m8-limpiadores",
    n: ["limpieza", "rojeces"],
    sk: ["sensible"],
    d: {
      paciente: "Piel enrojecida, sensible o recién sometida a un tratamiento.",
      tipo: "Limpiador espumoso calmante con clorofila.",
      necesidad: "Limpieza ultrasuave, reduce el enrojecimiento y apoya la barrera.",
      limpieza: "Limpiador (sin paso indicado)",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "Mañana y/o noche.",
      modo: "Masajear una pequeña cantidad sobre rostro y cuello húmedos. Aclarar con agua tibia y secar a toques.",
      nota: "Embarazo o lactancia: Medik8 no asesora y recomienda consultar los ingredientes con el médico."
    }
  },

  {
    id: "m8-surface-radiance-cleanse",
    name: "Surface Radiance Cleanse™",
    img: "imagenes/medik8/m8-surface-radiance-cleanse.webp",
    brand: "medik8",
    line: "m8-limpiadores",
    n: ["limpieza", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, especialmente apagada.",
      tipo: "Limpiador con AHA y BHA.",
      necesidad: "Limpia, suaviza e ilumina sin tirantez.",
      limpieza: "Limpiador (sin paso indicado)",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "Mañana y noche. Piel sensible o seca: como máximo una vez al día.",
      modo: "Masajear sobre rostro y cuello húmedos. Aclarar y secar a toques.",
      nota: "Según Medik8, no contiene ingredientes que recomiende evitar en el embarazo, salvo indicación médica."
    }
  },

  {
    id: "m8-clarifying-foam",
    name: "Clarifying Foam™",
    img: "imagenes/medik8/m8-clarifying-foam.webp",
    brand: "medik8",
    line: "m8-limpiadores",
    n: ["limpieza", "acne"],
    sk: ["mixta", "grasa", "imperfecciones"],
    d: {
      paciente: "Piel con tendencia a imperfecciones.",
      tipo: "Espuma limpiadora con AHA y BHA.",
      necesidad: "Exfolia suavemente, elimina impurezas y reduce y previene imperfecciones.",
      limpieza: "Limpiador (sin paso indicado)",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "Mañana y/o noche.",
      modo: "Masajear un poco sobre rostro y cuello húmedos. Aclarar con agua tibia y secar a toques.",
      nota: "Embarazo o lactancia: Medik8 no asesora y recomienda consultar los ingredientes con el médico."
    }
  },

  /* ---------- Medik8 · Ácidos directos ---------- */
  {
    id: "m8-press-glow",
    name: "Press & Glow™",
    img: "imagenes/medik8/m8-press-glow.webp",
    brand: "medik8",
    line: "m8-acidos",
    n: ["apagada", "deshidratacion"],
    sk: ["todas"],
    d: {
      paciente: "Quien quiere una alternativa a los tónicos ácidos que escuecen o resecan.",
      tipo: "Tónico exfoliante diario.",
      necesidad: "Elimina células muertas; piel hidratada y luminosa.",
      limpieza: "Exfoliante",
      limpiezaDet: "Tónico de uso diario, después de limpiar.",
      cuando: "Empezar una vez al día y subir hasta 2 veces al día.",
      modo: "Desbloquear la bomba, presionar un disco 3-4 veces y pasarlo por el rostro limpio.",
      nota: "Según Medik8, no contiene ingredientes que recomiende evitar en el embarazo, salvo indicación médica."
    }
  },

  {
    id: "m8-press-clear",
    name: "Press & Clear™",
    img: "imagenes/medik8/m8-press-clear.webp",
    brand: "medik8",
    line: "m8-acidos",
    n: ["acne", "poros", "manchas"],
    sk: ["mixta", "grasa", "imperfecciones"],
    d: {
      paciente: "Piel con tendencia a imperfecciones.",
      tipo: "Tónico diario equilibrante, respetuoso con el microbioma.",
      necesidad: "Imperfecciones, poros y manchas posacné.",
      limpieza: "Exfoliante",
      limpiezaDet: "Tónico de uso diario, después de limpiar.",
      cuando: "Empezar una vez al día y subir hasta 2 veces al día.",
      modo: "Desbloquear la bomba, presionar un disco 3-4 veces y pasarlo por el rostro limpio, evitando el contorno de ojos.",
      nota: "Según Medik8, no contiene ingredientes que recomiende evitar en el embarazo, salvo indicación médica."
    }
  },

  {
    id: "m8-sleep-glycolic",
    name: "Sleep Glycolic™",
    img: "imagenes/medik8/m8-sleep-glycolic.webp",
    brand: "medik8",
    line: "m8-acidos",
    n: ["apagada", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Quien busca una exfoliación nocturna sin enrojecimiento ni irritación.",
      tipo: "Tratamiento exfoliante nocturno con AHA.",
      necesidad: "Piel más luminosa, suave y uniforme.",
      limpieza: "Exfoliante",
      limpiezaDet: "Tratamiento de noche sin aclarado.",
      cuando: "Probar una vez y después 2 o 3 noches por semana.",
      modo: "Tras limpiar, aplicar un guisante en rostro, cuello y escote, evitando los ojos. Es normal un ligero cosquilleo. Seguir con sérums e hidratante.",
      nota: "Embarazo o lactancia: Medik8 no asesora y recomienda consultar los ingredientes con el médico."
    }
  },

  {
    id: "m8-blemish-sos",
    name: "Blemish SOS™",
    img: "imagenes/medik8/m8-blemish-sos.webp",
    brand: "medik8",
    line: "m8-acidos",
    n: ["acne", "rojeces"],
    sk: ["mixta", "grasa", "imperfecciones"],
    d: {
      paciente: "Piel con imperfecciones puntuales.",
      tipo: "Gel localizado con 2 % de ácido salicílico.",
      necesidad: "Reduce imperfecciones y calma el enrojecimiento.",
      cuando: "Mañana y/o noche, según sea necesario.",
      modo: "Aplicar con un dedo limpio tras la limpieza y dejar secar. Es normal un ligero cosquilleo. Se puede usar bajo o sobre el maquillaje.",
      nota: "Embarazo o lactancia: Medik8 no asesora y recomienda consultar los ingredientes con el médico."
    }
  },

  /* ---------- Medik8 · Sérums de vitamina C ---------- */
  {
    id: "m8-c-tetra",
    name: "C-Tetra®",
    img: "imagenes/medik8/m8-c-tetra.webp",
    brand: "medik8",
    line: "m8-vitc",
    n: ["apagada"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluida la sensible.",
      tipo: "Sérum ligero con 7 % de vitamina C estabilizada.",
      necesidad: "Ilumina y unifica el tono.",
      cuando: "Por la mañana.",
      modo: "Aplicar 4 gotas con masaje suave en rostro, cuello y escote. Dejar absorber.",
      solar: "Por la mañana, terminar con protección solar.",
      nota: "Embarazo o lactancia: Medik8 no asesora y recomienda consultar los ingredientes con el médico."
    }
  },

  {
    id: "m8-c-tetra-advanced",
    name: "C-Tetra Advanced",
    img: "imagenes/medik8/m8-c-tetra-advanced.webp",
    brand: "medik8",
    line: "m8-vitc",
    n: ["apagada", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, especialmente grasa y mixta.",
      tipo: "Sérum con 20 % de vitamina C.",
      necesidad: "Envejecimiento prematuro, luminosidad y barrera.",
      cuando: "Por la mañana.",
      modo: "Extender 2 o 3 pulsaciones por rostro, cuello y escote. Después, hidratar.",
      solar: "Terminar siempre con protección solar.",
      nota: "Embarazo o lactancia: Medik8 no asesora y recomienda consultar los ingredientes con el médico."
    }
  },

  {
    id: "m8-c-tetra-luxe",
    name: "C-Tetra Luxe",
    img: "imagenes/medik8/m8-c-tetra-luxe.webp",
    brand: "medik8",
    line: "m8-vitc",
    n: ["apagada", "arrugas", "manchas"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, especialmente grasa y mixta.",
      tipo: "Sérum con 14 % de vitamina C.",
      necesidad: "Arrugas, hiperpigmentación y luminosidad.",
      cuando: "Por la mañana.",
      modo: "Aplicar 6 gotas con masaje suave en rostro, cuello y escote. Dejar absorber.",
      solar: "Por la mañana, terminar con protección solar.",
      nota: "Según Medik8, no contiene ingredientes que recomiende evitar en el embarazo, salvo indicación médica."
    }
  },

  {
    id: "m8-super-c-ferulic",
    name: "Super C Ferulic™",
    img: "imagenes/medik8/m8-super-c-ferulic.webp",
    brand: "medik8",
    line: "m8-vitc",
    n: ["arrugas", "manchas", "flacidez"],
    sk: ["seca", "grasa", "mixta", "imperfecciones"],
    d: {
      paciente: "Todo tipo de piel, especialmente grasa y mixta. No recomendado en piel sensible.",
      tipo: "Sérum de vitamina C de alta potencia.",
      necesidad: "Arrugas, manchas, tono desigual y firmeza por envejecimiento solar.",
      cuando: "Por la mañana.",
      modo: "Aplicar 4 gotas con masaje en rostro, cuello y escote. Es normal un ligero cosquilleo.",
      solar: "Por la mañana, terminar con protección solar.",
      nota: "No recomendado en piel sensible. Embarazo o lactancia: Medik8 no asesora y recomienda consultar los ingredientes con el médico."
    }
  },

  {
    id: "m8-c-tetra-cream",
    name: "C-Tetra® Cream",
    img: "imagenes/medik8/m8-c-tetra-cream.webp",
    brand: "medik8",
    line: "m8-vitc",
    n: ["apagada"],
    sk: ["todas"],
    d: {
      paciente: "Quien busca una piel luminosa e hidratada.",
      tipo: "Crema antioxidante con vitamina C.",
      necesidad: "Recupera la luminosidad y unifica el tono.",
      cuando: "Por la mañana.",
      modo: "Extender por rostro, cuello y escote con movimientos ascendentes.",
      solar: "Dejar absorber y aplicar protector solar.",
      nota: "Embarazo o lactancia: Medik8 no asesora y recomienda consultar los ingredientes con el médico."
    }
  },

  /* ---------- Medik8 · Vitamina A ---------- */
  {
    id: "m8-crystal-retinal",
    name: "Crystal Retinal®",
    img: "imagenes/medik8/m8-crystal-retinal.webp",
    brand: "medik8",
    line: "m8-vita",
    n: ["arrugas", "manchas", "flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Quien quiere usar vitamina A; se elige la fuerza adecuada (6 versiones).",
      tipo: "Sérum nocturno con retinal.",
      necesidad: "Arrugas, manchas, congestión y firmeza.",
      cuando: "Introducir poco a poco: 2 veces por semana las 2 primeras semanas, cada 2 noches las 2 siguientes y luego todas las noches.",
      modo: "Tras limpiar, aplicar 2 pulsaciones en rostro y cuello. Dejar absorber e hidratar.",
      solar: "Usar siempre protector solar por la mañana mientras se use vitamina A. Medik8 recomienda Advanced Day Ultimate Protect.",
      nota: "Embarazo o lactancia: Medik8 no asesora y recomienda consultar los ingredientes con el médico."
    }
  },

  {
    id: "m8-r-retinoate",
    name: "r-Retinoate® Day & Night",
    img: "imagenes/medik8/m8-r-retinoate.webp",
    brand: "medik8",
    line: "m8-vita",
    n: ["arrugas", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Quien busca vitamina A para día y noche.",
      tipo: "Sérum con retinil retinoato, vitamina C y ácido hialurónico.",
      necesidad: "Arrugas, luminosidad e hidratación.",
      cuando: "Introducir poco a poco: 2 veces por semana las 2 primeras semanas, cada 2 días las 2 siguientes y luego a diario.",
      modo: "Tras limpiar, aplicar 2 pulsaciones en rostro, cuello y escote.",
      solar: "Usar siempre protector solar por la mañana mientras se use vitamina A. Medik8 recomienda Advanced Day Ultimate Protect.",
      nota: "Embarazo o lactancia: Medik8 no asesora y recomienda consultar los ingredientes con el médico."
    }
  },

  {
    id: "m8-r-retinoate-intense",
    name: "r-Retinoate® Intense",
    img: "imagenes/medik8/m8-r-retinoate-intense.webp",
    brand: "medik8",
    line: "m8-vita",
    n: ["arrugas", "manchas", "flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Piel con signos avanzados de envejecimiento.",
      tipo: "Tratamiento de noche con retinil retinoato.",
      necesidad: "Arrugas, manchas y firmeza.",
      cuando: "Introducir poco a poco: 2 veces por semana las 2 primeras semanas, cada 2 noches las 2 siguientes y luego todas las noches.",
      modo: "Tras limpiar, aplicar 2 pulsaciones en rostro, cuello y escote.",
      solar: "Usar siempre protector solar por la mañana mientras se use vitamina A. Medik8 recomienda Advanced Day Ultimate Protect.",
      nota: "Embarazo o lactancia: Medik8 no asesora y recomienda consultar los ingredientes con el médico."
    }
  },

  {
    id: "m8-bakuchiol-peptides",
    name: "Bakuchiol Peptides™",
    img: "imagenes/medik8/m8-bakuchiol-peptides.webp",
    brand: "medik8",
    line: "m8-vita",
    n: ["arrugas", "rojeces"],
    sk: ["todas"],
    d: {
      paciente: "Quien no puede usar retinol. Apto para embarazadas, según Medik8.",
      tipo: "Sérum con 1,25 % de bakuchiol, alternativa vegetal al retinol.",
      necesidad: "Líneas, arrugas, textura, tono y enrojecimiento.",
      cuando: "Mañana y noche.",
      modo: "Aplicar 6 gotas con masaje en rostro, cuello y escote. Después, hidratante.",
      solar: "Por la mañana, aplicar después protector solar."
    }
  },

  /* ---------- Medik8 · Sérums de péptidos e hidratación ---------- */
  {
    id: "m8-liquid-peptides-advanced-mp",
    name: "Liquid Peptides Advanced MP",
    img: "imagenes/medik8/m8-liquid-peptides-advanced-mp.webp",
    brand: "medik8",
    line: "m8-serums",
    n: ["arrugas", "flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Quien busca reducir arrugas; complemento de tratamientos inyectables.",
      tipo: "Sérum con Dual MiniProteins.",
      necesidad: "Líneas de expresión y arrugas profundas.",
      cuando: "Mañana y/o noche.",
      modo: "Tras limpiar, aplicar con movimientos ascendentes en rostro, cuello y escote.",
      nota: "Embarazo o lactancia: Medik8 no asesora y recomienda consultar los ingredientes con el médico."
    }
  },

  {
    id: "m8-liquid-peptides",
    name: "Liquid Peptides™",
    img: "imagenes/medik8/m8-liquid-peptides.webp",
    brand: "medik8",
    line: "m8-serums",
    n: ["arrugas", "deshidratacion"],
    sk: ["todas"],
    d: {
      paciente: "Quien tiene los primeros signos de envejecimiento.",
      tipo: "Sérum con 30 % de mezcla de 10 péptidos.",
      necesidad: "Líneas de expresión e hidratación.",
      cuando: "Mañana y noche.",
      modo: "Aplicar 6 gotas con masaje en rostro, cuello y escote. Después, hidratante.",
      nota: "Según Medik8, no contiene ingredientes que recomiende evitar en el embarazo, salvo indicación médica."
    }
  },

  {
    id: "m8-exo-pdrn-prismatic",
    name: "Exo-PDRN Prismatic+",
    img: "imagenes/medik8/m8-exo-pdrn-prismatic.webp",
    brand: "medik8",
    line: "m8-serums",
    n: ["arrugas", "flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Quien busca rejuvenecimiento; complemento de tratamientos profesionales.",
      tipo: "Sérum inspirado en polinucleótidos, con PDRN.",
      necesidad: "Rejuvenecimiento, tono y textura.",
      cuando: "Mañana y noche.",
      modo: "Tras limpiar, aplicar 1 o 2 pulsaciones en rostro, cuello y escote con movimientos ascendentes."
    }
  },

  {
    id: "m8-oxy-r-peptides",
    name: "Oxy-R Peptides™",
    img: "imagenes/medik8/m8-oxy-r-peptides.webp",
    brand: "medik8",
    line: "m8-serums",
    n: ["manchas"],
    sk: ["todas"],
    d: {
      paciente: "Manchas oscuras en todos los tonos de piel.",
      tipo: "Sérum con 1 % de oxi-resveratrol, en 2 frascos.",
      necesidad: "Manchas oscuras y decoloraciones.",
      cuando: "Medik8 no indica la frecuencia.",
      modo: "Activar pulsando la tapa y agitando 30 segundos. Cada frasco dura 6 semanas tras abrirlo.",
      nota: "Embarazo o lactancia: Medik8 no asesora y recomienda consultar los ingredientes con el médico."
    }
  },

  {
    id: "m8-niacinamide-peptides",
    name: "Niacinamide Peptides™",
    img: "imagenes/medik8/m8-niacinamide-peptides.webp",
    brand: "medik8",
    line: "m8-serums",
    n: ["acne", "poros", "rojeces", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Piel con imperfecciones y poros visibles.",
      tipo: "Sérum multiactivo con 10 % de niacinamida.",
      necesidad: "Imperfecciones, poros, enrojecimiento y barrera.",
      cuando: "Mañana y/o noche.",
      modo: "Tras limpiar, aplicar por rostro, cuello y escote.",
      nota: "Embarazo o lactancia: Medik8 no asesora y recomienda consultar los ingredientes con el médico."
    }
  },

  {
    id: "m8-clarity-peptides",
    name: "Clarity Peptides™",
    img: "imagenes/medik8/m8-clarity-peptides.webp",
    brand: "medik8",
    line: "m8-serums",
    n: ["apagada", "acne"],
    sk: ["todas"],
    d: {
      paciente: "Piel apagada y propensa a imperfecciones.",
      tipo: "Sérum ligero con 10 % de niacinamida.",
      necesidad: "Luminosidad, tono e imperfecciones; calma e hidrata.",
      cuando: "Mañana y noche.",
      modo: "Tras limpiar, aplicar en rostro, cuello y escote.",
      nota: "Embarazo o lactancia: Medik8 no asesora y recomienda consultar los ingredientes con el médico."
    }
  },

  {
    id: "m8-hydr8-b5",
    name: "Hydr8 B5™",
    img: "imagenes/medik8/m8-hydr8-b5.webp",
    brand: "medik8",
    line: "m8-serums",
    n: ["deshidratacion"],
    sk: ["todas"],
    d: {
      paciente: "Piel que necesita hidratación.",
      tipo: "Sérum de ácido hialurónico sin aceites.",
      necesidad: "Hidratación duradera; piel más tersa.",
      cuando: "Mañana y noche.",
      modo: "Aplicar 6 gotas con masaje en rostro, cuello y escote antes del hidratante.",
      nota: "Embarazo o lactancia: Medik8 no asesora y recomienda consultar los ingredientes con el médico."
    }
  },

  {
    id: "m8-hydr8-b5-intense",
    name: "Hydr8 B5™ Intense",
    img: "imagenes/medik8/m8-hydr8-b5-intense.webp",
    brand: "medik8",
    line: "m8-serums",
    n: ["deshidratacion", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Piel que necesita hidratación intensa.",
      tipo: "Sérum de ácido hialurónico potenciado.",
      necesidad: "Repone la hidratación en 24 horas; suaviza y reafirma.",
      cuando: "Mañana y noche.",
      modo: "Aplicar 6 gotas con masaje en rostro, cuello y escote antes del hidratante.",
      nota: "Según Medik8, no contiene ingredientes que recomiende evitar en el embarazo, salvo indicación médica."
    }
  },

  /* ---------- Medik8 · Hidratantes ---------- */
  {
    id: "m8-total-moisture-daily-facial-cream",
    name: "Total Moisture Daily Facial Cream™",
    img: "imagenes/medik8/m8-total-moisture-daily-facial-cream.webp",
    brand: "medik8",
    line: "m8-hidratantes",
    n: ["deshidratacion", "seca"],
    sk: ["todas"],
    d: {
      paciente: "Quien busca hidratación diaria y refuerzo de la barrera.",
      tipo: "Crema hidratante multiacción, con recambio.",
      necesidad: "100 horas de hidratación; barrera y base de maquillaje.",
      cuando: "Mañana y/o noche.",
      modo: "Tras limpiar, aplicar en rostro, cuello y escote con movimientos ascendentes.",
      solar: "Tras la aplicación de la mañana, usar protección solar."
    }
  },

  {
    id: "m8-advanced-pro-collagen-peptide-cream",
    name: "Advanced Pro-Collagen+ Peptide Cream",
    img: "imagenes/medik8/m8-advanced-pro-collagen-peptide-cream.webp",
    brand: "medik8",
    line: "m8-hidratantes",
    n: ["arrugas", "flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, ideal para sensible.",
      tipo: "Crema con péptidos pro-colágeno, con recambio.",
      necesidad: "Arrugas profundas, flacidez y contorno facial.",
      cuando: "Mañana y noche.",
      modo: "Tras limpiar, aplicar con movimientos ascendentes en rostro, cuello y escote.",
      solar: "Tras la aplicación de la mañana, usar protector solar.",
      nota: "Según Medik8, no contiene ingredientes que recomiende evitar en el embarazo, salvo indicación médica."
    }
  },

  {
    id: "m8-advanced-night-restore",
    name: "Advanced Night Restore™",
    img: "imagenes/medik8/m8-advanced-night-restore.webp",
    brand: "medik8",
    line: "m8-hidratantes",
    n: ["arrugas", "flacidez", "seca"],
    sk: ["todas"],
    d: {
      paciente: "Quien busca firmeza y nutrición nocturna.",
      tipo: "Crema de noche rica en ceramidas.",
      necesidad: "Arrugas y firmeza; potencia la vitamina A.",
      cuando: "Por la noche.",
      modo: "Tras limpiar y aplicar sérums, usar en rostro, cuello y escote con movimientos ascendentes.",
      nota: "Según Medik8, no contiene ingredientes que recomiende evitar en el embarazo, salvo indicación médica."
    }
  },

  {
    id: "m8-balance-moisturiser-glycolic-acid-activator",
    name: "Balance Moisturiser™ & Glycolic Acid Activator™",
    img: "imagenes/medik8/m8-balance-moisturiser-glycolic-acid-activator.webp",
    brand: "medik8",
    line: "m8-hidratantes",
    n: ["apagada", "deshidratacion"],
    sk: ["todas"],
    d: {
      paciente: "Quien busca una hidratación ligera y una tez más perfecta.",
      tipo: "Hidratante ligera con activador de ácido glicólico.",
      necesidad: "Tez uniforme, hidratación y equilibrio del microbioma.",
      cuando: "Mañana y noche.",
      modo: "Tras limpiar, aplicar por rostro, cuello y escote.",
      solar: "Por la mañana, dejar absorber y aplicar protector solar."
    }
  },

  /* ---------- Medik8 · Ojos ---------- */
  {
    id: "m8-crystal-retinal-ceramide-eye",
    name: "Crystal Retinal® Ceramide Eye",
    img: "imagenes/medik8/m8-crystal-retinal-ceramide-eye.webp",
    brand: "medik8",
    line: "m8-ojos",
    n: ["ojos", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Quien quiere vitamina A para el contorno de ojos (3 fuerzas).",
      tipo: "Crema de noche con retinal para el contorno.",
      necesidad: "Patas de gallo, hinchazón y ojeras.",
      cuando: "Introducir poco a poco: 2 veces por semana las 2 primeras semanas, cada 2 noches las 2 siguientes y luego todas las noches.",
      modo: "Tras limpiar, aplicar en el contorno de ojos, evitando los párpados.",
      solar: "Usar siempre protector solar por la mañana mientras se use vitamina A. Medik8 recomienda Advanced Day Ultimate Protect.",
      nota: "Embarazo o lactancia: Medik8 no asesora y recomienda consultar los ingredientes con el médico."
    }
  },

  {
    id: "m8-r-retinoate-day-night-eye-serum",
    name: "r-Retinoate® Day & Night Eye Serum",
    img: "imagenes/medik8/m8-r-retinoate-day-night-eye-serum.webp",
    brand: "medik8",
    line: "m8-ojos",
    n: ["ojos", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Quien tiene líneas y arrugas alrededor de los ojos.",
      tipo: "Sérum de contorno con retinil retinoato.",
      necesidad: "Líneas y arrugas del contorno.",
      cuando: "Introducir poco a poco: 2 veces por semana las 2 primeras semanas, cada 2 días las 2 siguientes y luego a diario.",
      modo: "Tras limpiar, aplicar en el contorno de ojos, evitando los párpados.",
      solar: "Usar siempre protector solar por la mañana mientras se use vitamina A. Medik8 recomienda Advanced Day Ultimate Protect.",
      nota: "Embarazo o lactancia: Medik8 no asesora y recomienda consultar los ingredientes con el médico."
    }
  },

  {
    id: "m8-advanced-night-eye",
    name: "Advanced Night Eye™",
    img: "imagenes/medik8/m8-advanced-night-eye.webp",
    brand: "medik8",
    line: "m8-ojos",
    n: ["ojos", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Ojos cansados.",
      tipo: "Crema rejuvenecedora de noche.",
      necesidad: "Líneas de expresión y ojeras; potencia la vitamina A.",
      cuando: "Por la noche.",
      modo: "Tras limpiar, aplicar en el contorno de ojos, evitando los párpados. Después, hidratante de noche.",
      nota: "Embarazo o lactancia: Medik8 no asesora y recomienda consultar los ingredientes con el médico."
    }
  },

  /* ---------- Medik8 · Protección solar ---------- */
  {
    id: "m8-advanced-day-ultimate-protect",
    name: "Advanced Day Ultimate Protect™",
    img: "imagenes/medik8/m8-advanced-day-ultimate-protect.webp",
    brand: "medik8",
    line: "m8-solar",
    n: ["fotoproteccion", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Quien busca hidratante y protector en uno.",
      tipo: "Crema hidratante y protector solar SPF 50+ PA++++.",
      necesidad: "Protección UV, líneas y arrugas, hidratación.",
      cuando: "Último paso de la mañana. Reaplicar según sea necesario y cada 2 horas al sol directo.",
      modo: "Aplicar 5 pulsaciones en el rostro, evitando los ojos, y 5 más en cuello y escote."
    }
  },

  {
    id: "m8-advanced-day-total-protect",
    name: "Advanced Day Total Protect™",
    img: "imagenes/medik8/m8-advanced-day-total-protect.webp",
    brand: "medik8",
    line: "m8-solar",
    n: ["fotoproteccion", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Quien busca hidratante y protector en uno.",
      tipo: "Crema hidratante ligera y protector solar SPF 30.",
      necesidad: "Protección UV e hidratación; base de maquillaje.",
      cuando: "Último paso de la mañana. Reaplicar según sea necesario y cada 2 horas al sol directo.",
      modo: "Aplicar 5 pulsaciones en el rostro, evitando los ojos, y 5 más en cuello y escote."
    }
  },

  {
    id: "m8-daily-radiance-vitamin-c",
    name: "Daily Radiance Vitamin C™",
    img: "imagenes/medik8/m8-daily-radiance-vitamin-c.webp",
    brand: "medik8",
    line: "m8-solar",
    n: ["fotoproteccion", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Quien quiere vitamina C y protector en uno.",
      tipo: "Crema de día con 7 % de vitamina C y SPF 30.",
      necesidad: "Protección antioxidante y solar; luminosidad.",
      cuando: "Por la mañana. Reaplicar según sea necesario.",
      modo: "Tras limpiar, extender una cantidad generosa en rostro, cuello y escote.",
      nota: "Según Medik8, no contiene ingredientes que recomiende evitar en el embarazo, salvo indicación médica."
    }
  },

  {
    id: "m8-advanced-day-eye-protect",
    name: "Advanced Day Eye Protect",
    img: "imagenes/medik8/m8-advanced-day-eye-protect.webp",
    brand: "medik8",
    line: "m8-solar",
    n: ["fotoproteccion", "ojos"],
    sk: ["todas"],
    d: {
      paciente: "Quien quiere proteger la zona del contorno de ojos.",
      tipo: "Protector solar SPF 30 específico para los ojos.",
      necesidad: "Protege, hidrata y suaviza el contorno.",
      cuando: "Por la mañana, antes del protector facial. Reaplicar según sea necesario y cada 2 horas al sol.",
      modo: "Aplicar una cantidad generosa alrededor de los ojos, evitando los párpados."
    }
  },

  /* ---------- Medik8 · Mascarillas ---------- */
  {
    id: "m8-h-e-o-mask",
    name: "H.E.O.® Mask",
    img: "imagenes/medik8/m8-h-e-o-mask.webp",
    brand: "medik8",
    line: "m8-mascarillas",
    n: ["deshidratacion", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Piel que necesita hidratación intensa.",
      tipo: "Mascarilla de tratamiento nocturno en 2 pasos.",
      necesidad: "Hidratación, líneas y arrugas.",
      cuando: "Por la noche, como último paso. Medik8 no indica cuántas veces por semana.",
      modo: "Aplicar una almendra del paso 1 en rostro, cuello y escote, dejar absorber y repetir con el paso 2."
    }
  },

  /* ---------- SVR · Sun Secure ---------- */
  {
    id: "sv-sun-secure-lait",
    name: "SUN SECURE Lait SPF50+",
    img: "imagenes/svr/sv-sun-secure-lait.webp",
    brand: "svr",
    line: "sv-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Pieles sensibles e hipersensibles al sol. Bebés, niños y adultos.",
      tipo: "Leche fluida SPF 50+ para cara y cuerpo.",
      necesidad: "Protección solar de amplio espectro.",
      cuando: "Por la mañana, antes de la exposición. Reaplicar con frecuencia y en exposiciones prolongadas.",
      modo: "Aplicar en cara y cuerpo; en el rostro, pulverizar antes sobre las manos. Evitar los ojos.",
      solar: "Aplicar generosa y uniformemente: reducir la cantidad disminuye mucho la protección.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-sun-secure-lait-spf50-sin-perfume",
    name: "SUN SECURE Lait SPF50+ Sans Parfum",
    img: "imagenes/svr/sv-sun-secure-lait-spf50-sin-perfume.webp",
    brand: "svr",
    line: "sv-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Pieles sensibles e hipersensibles al sol. Desde el nacimiento, en formato familiar.",
      tipo: "Leche fluida SPF 50+ sin perfume para cara y cuerpo.",
      necesidad: "Protección solar de amplio espectro.",
      cuando: "Por la mañana, antes de la exposición. Reaplicar con frecuencia y en exposiciones prolongadas.",
      modo: "Aplicar una dosis suficiente sobre la piel seca o húmeda.",
      solar: "Aplicar generosa y uniformemente: reducir la cantidad disminuye mucho la protección. Evitar la exposición en las horas centrales.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-sun-secure-lait-crepitant-spf50",
    name: "SUN SECURE Lait Crépitant SPF50+",
    img: "imagenes/svr/sv-sun-secure-lait-crepitant-spf50.webp",
    brand: "svr",
    line: "sv-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Pieles sensibles e hipersensibles al sol. Bebés, niños y adultos.",
      tipo: "Bruma de leche SPF 50+ para cara y cuerpo.",
      necesidad: "Protección solar de amplio espectro.",
      cuando: "Por la mañana, antes de la exposición. Reaplicar con frecuencia y en exposiciones prolongadas.",
      modo: "Agitar y aplicar; en el rostro, pulverizar antes sobre las manos. Evitar los ojos.",
      solar: "Aplicar generosa y uniformemente: reducir la cantidad disminuye mucho la protección."
    }
  },

  {
    id: "sv-sun-secure-spray-spf50-1",
    name: "SUN SECURE Spray SPF50+",
    img: "imagenes/svr/sv-sun-secure-spray-spf50-1.webp",
    brand: "svr",
    line: "sv-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Pieles sensibles e hipersensibles al sol. Niños desde 3 años y adultos.",
      tipo: "Spray lechoso SPF 50+ muy resistente, de acabado seco.",
      necesidad: "Protección solar de amplio espectro.",
      cuando: "Por la mañana, antes de la exposición. Reaplicar con frecuencia y en exposiciones prolongadas.",
      modo: "Aplicar en cara y cuerpo; en el rostro, pulverizar antes sobre las manos. Evitar los ojos.",
      solar: "Aplicar generosa y uniformemente: reducir la cantidad disminuye mucho la protección.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-sun-secure-spray-pocket-spf50",
    name: "SUN SECURE Spray Pocket SPF50+",
    img: "imagenes/svr/sv-sun-secure-spray-pocket-spf50.webp",
    brand: "svr",
    line: "sv-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Pieles sensibles e hipersensibles al sol. Bebés, niños y adultos.",
      tipo: "Spray SPF 50+ en formato de bolsillo.",
      necesidad: "Protección solar de amplio espectro.",
      cuando: "Por la mañana, antes de la exposición. Reaplicar con frecuencia y en exposiciones prolongadas.",
      modo: "Aplicar en cara y cuerpo; en el rostro, pulverizar antes sobre las manos. Evitar los ojos.",
      solar: "Aplicar generosa y uniformemente: reducir la cantidad disminuye mucho la protección."
    }
  },

  {
    id: "sv-sun-secure-brume-spf50-1",
    name: "SUN SECURE Brume SPF50",
    img: "imagenes/svr/sv-sun-secure-brume-spf50-1.webp",
    brand: "svr",
    line: "sv-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Pieles sensibles e hipersensibles al sol. Niños desde 3 años y adultos.",
      tipo: "Bruma ligera e invisible SPF 50.",
      necesidad: "Protección solar de amplio espectro.",
      cuando: "Por la mañana, antes de la exposición. Reaplicar con frecuencia y en exposiciones prolongadas.",
      modo: "Aplicar en cara y cuerpo; en el rostro, pulverizar antes sobre las manos. Evitar los ojos.",
      solar: "Aplicar generosa y uniformemente: reducir la cantidad disminuye mucho la protección.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-sun-secure-eau-solaire-spf50",
    name: "SUN SECURE Eau Solaire SPF50+",
    img: "imagenes/svr/sv-sun-secure-eau-solaire-spf50.webp",
    brand: "svr",
    line: "sv-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Pieles sensibles e hipersensibles al sol. Niños desde 3 años y adultos.",
      tipo: "Agua solar bifásica SPF 50+, no comedogénica.",
      necesidad: "Protección solar de amplio espectro.",
      cuando: "Por la mañana, antes de la exposición. Reaplicar con frecuencia y en exposiciones prolongadas.",
      modo: "Agitar y aplicar en cara y cuerpo; en el rostro, pulverizar antes sobre las manos. Evitar los ojos.",
      solar: "Aplicar generosa y uniformemente: reducir la cantidad disminuye mucho la protección.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-sun-secure-eau-solaire-glow-spf50",
    name: "SUN SECURE Eau Solaire Glow SPF50+",
    img: "imagenes/svr/sv-sun-secure-eau-solaire-glow-spf50.webp",
    brand: "svr",
    line: "sv-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Pieles sensibles e hipersensibles al sol. Adolescentes y adultos.",
      tipo: "Agua solar bifásica SPF 50+ con efecto luminoso.",
      necesidad: "Protección solar de amplio espectro.",
      cuando: "Por la mañana, antes de la exposición. Reaplicar con frecuencia y en exposiciones prolongadas.",
      modo: "Agitar y aplicar en cara y cuerpo; en el rostro, pulverizar antes sobre las manos. Evitar los ojos.",
      solar: "Aplicar generosa y uniformemente: reducir la cantidad disminuye mucho la protección.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-sun-secure-huile-spf50",
    name: "SUN SECURE Huile SPF50",
    img: "imagenes/svr/sv-sun-secure-huile-spf50.webp",
    brand: "svr",
    line: "sv-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Pieles sensibles e hipersensibles al sol.",
      tipo: "Aceite seco nutritivo SPF 50, acabado satinado.",
      necesidad: "Protección solar de amplio espectro.",
      cuando: "Por la mañana, antes de la exposición. Reaplicar con frecuencia y en exposiciones prolongadas.",
      modo: "Aplicar en cara y cuerpo; en el rostro, pulverizar antes sobre las manos. Evitar los ojos.",
      solar: "Aplicar generosa y uniformemente: reducir la cantidad disminuye mucho la protección."
    }
  },

  {
    id: "sv-sun-secure-fluide-spf50-1",
    name: "SUN SECURE Fluide SPF50+",
    img: "imagenes/svr/sv-sun-secure-fluide-spf50-1.webp",
    brand: "svr",
    line: "sv-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Pieles sensibles e hipersensibles al sol. Bebés, niños y adultos.",
      tipo: "Fluido facial SPF 50+, no comedogénico.",
      necesidad: "Protección solar de amplio espectro.",
      cuando: "Por la mañana, antes de la exposición. Reaplicar con frecuencia y en exposiciones prolongadas.",
      modo: "Extender uniformemente por el rostro, evitando los ojos.",
      solar: "Aplicar generosa y uniformemente: reducir la cantidad disminuye mucho la protección.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-sun-secure-creme-spf50-1",
    name: "SUN SECURE Creme SPF50+",
    img: "imagenes/svr/sv-sun-secure-creme-spf50-1.webp",
    brand: "svr",
    line: "sv-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Pieles sensibles e hipersensibles al sol. Bebés, niños y adultos.",
      tipo: "Crema facial SPF 50+, acabado aterciopelado.",
      necesidad: "Protección solar de amplio espectro.",
      cuando: "Por la mañana, antes de la exposición. Reaplicar con frecuencia y en exposiciones prolongadas.",
      modo: "Extender uniformemente por el rostro, evitando los ojos.",
      solar: "Aplicar generosa y uniformemente: reducir la cantidad disminuye mucho la protección.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-sun-secure-aqua-fluide-spf50",
    name: "SUN SECURE Aqua Fluide SPF50+",
    img: "imagenes/svr/sv-sun-secure-aqua-fluide-spf50.webp",
    brand: "svr",
    line: "sv-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Pieles sensibles e hipersensibles al sol. Niños desde 3 años y adultos.",
      tipo: "Ultrafluido facial SPF 50+, no comedogénico.",
      necesidad: "Protección solar de amplio espectro.",
      cuando: "Por la mañana, antes de la exposición. Reaplicar con frecuencia y en exposiciones prolongadas.",
      modo: "Agitar y distribuir por rostro y cuello, evitando los ojos.",
      solar: "Aplicar generosa y uniformemente: reducir la cantidad disminuye mucho la protección.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-sun-secure-extreme-spf50",
    name: "SUN SECURE Extreme SPF50+",
    img: "imagenes/svr/sv-sun-secure-extreme-spf50.webp",
    brand: "svr",
    line: "sv-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Pieles sensibles e hipersensibles al sol. Niños desde 3 años y adultos.",
      tipo: "Gel ultramate multirresistente SPF 50+.",
      necesidad: "Protección solar de amplio espectro.",
      cuando: "Por la mañana, antes de la exposición. Reaplicar con frecuencia y en exposiciones prolongadas.",
      modo: "Extender uniformemente por el rostro, evitando los ojos.",
      solar: "Aplicar generosa y uniformemente: reducir la cantidad disminuye mucho la protección.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-sun-secure-fluide-photo-age-spf50",
    name: "SUN SECURE Fluide Photo-Age SPF50+",
    img: "imagenes/svr/sv-sun-secure-fluide-photo-age-spf50.webp",
    brand: "svr",
    line: "sv-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Pieles sensibles e hipersensibles al sol.",
      tipo: "Fluido facial SPF 50+ con acción antifotoenvejecimiento.",
      necesidad: "Protección solar de amplio espectro.",
      cuando: "Por la mañana, antes de la exposición. Reaplicar con frecuencia y en exposiciones prolongadas.",
      modo: "Extender uniformemente por el rostro.",
      solar: "Aplicar generosa y uniformemente: reducir la cantidad disminuye mucho la protección.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-sun-secure-blur-spf50-23",
    name: "SUN SECURE Blur SPF50+",
    img: "imagenes/svr/sv-sun-secure-blur-spf50-23.webp",
    brand: "svr",
    line: "sv-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Pieles sensibles e hipersensibles al sol. Adolescentes y adultos.",
      tipo: "Mousse facial SPF 50+ con efecto difuminador.",
      necesidad: "Protección solar de amplio espectro.",
      cuando: "Por la mañana, antes de la exposición. Reaplicar con frecuencia y en exposiciones prolongadas.",
      modo: "Extender por el rostro como una base de maquillaje, evitando los ojos.",
      solar: "Aplicar generosa y uniformemente: reducir la cantidad disminuye mucho la protección."
    }
  },

  {
    id: "sv-sun-secure-blur-sin-perfume-spf50",
    name: "SUN SECURE Blur Sans Parfum SPF50+",
    img: "imagenes/svr/sv-sun-secure-blur-sin-perfume-spf50.webp",
    brand: "svr",
    line: "sv-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Pieles sensibles e hipersensibles al sol. Adolescentes y adultos.",
      tipo: "Mousse facial SPF 50+ sin perfume.",
      necesidad: "Protección solar de amplio espectro.",
      cuando: "Por la mañana, antes de la exposición. Reaplicar con frecuencia y en exposiciones prolongadas.",
      modo: "Extender por el rostro como una base de maquillaje, evitando los ojos.",
      solar: "Aplicar generosa y uniformemente: reducir la cantidad disminuye mucho la protección."
    }
  },

  {
    id: "sv-sun-secure-blur-con-color-spf50",
    name: "SUN SECURE Blur Teinté SPF50+",
    img: "imagenes/svr/sv-sun-secure-blur-con-color-spf50.webp",
    brand: "svr",
    line: "sv-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Pieles sensibles e hipersensibles al sol. Adolescentes y adultos.",
      tipo: "Mousse facial SPF 50+ con color.",
      necesidad: "Protección solar de amplio espectro.",
      cuando: "Por la mañana, antes de la exposición. Reaplicar con frecuencia y en exposiciones prolongadas.",
      modo: "Extender por el rostro como una base de maquillaje, evitando los ojos.",
      solar: "Aplicar generosa y uniformemente: reducir la cantidad disminuye mucho la protección."
    }
  },

  {
    id: "sv-sun-secure-easy-stick-spf50",
    name: "SUN SECURE Easy Stick SPF50+",
    img: "imagenes/svr/sv-sun-secure-easy-stick-spf50.webp",
    brand: "svr",
    line: "sv-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Pieles sensibles e hipersensibles al sol. Bebés, niños y adultos.",
      tipo: "Stick SPF 50+ sin fragancia.",
      necesidad: "Protección solar de amplio espectro.",
      cuando: "Por la mañana, antes de la exposición. Reaplicar con frecuencia y en exposiciones prolongadas.",
      modo: "Aplicar en cara, labios y zonas sensibles (orejas, nariz, manos, tatuajes curados, cicatrices). Fácil de reaplicar durante el día.",
      solar: "Aplicar generosa y uniformemente: reducir la cantidad disminuye mucho la protección.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-sun-secure-gouttes-teintees",
    name: "SUN SECURE Gouttes Teintées",
    img: "imagenes/svr/sv-sun-secure-gouttes-teintees.webp",
    brand: "svr",
    line: "sv-sun",
    n: ["apagada"],
    sk: ["todas"],
    d: {
      paciente: "Pieles sensibles e hipersensibles al sol, con tez apagada.",
      tipo: "Concentrado iluminador con color, sin DHA ni autobronceador.",
      necesidad: "Efecto buena cara inmediato, que se elimina al desmaquillar.",
      cuando: "SVR no indica la frecuencia.",
      modo: "Mezclar con la crema de día o el protector y aplicar por rostro y cuello.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-sun-secure-mousse-autobronzante",
    name: "SUN SECURE Mousse Autobronzante",
    img: "imagenes/svr/sv-sun-secure-mousse-autobronzante.webp",
    brand: "svr",
    line: "sv-sun",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Todas las pieles sensibles. Adolescentes y adultos.",
      tipo: "Mousse autobronceadora para cara y cuerpo.",
      necesidad: "Bronceado sin exposición al sol.",
      cuando: "A diario hasta lograr el tono; luego 2-3 veces por semana.",
      modo: "Aplicar sobre la piel limpia y seca. Exfoliar 24 horas antes y lavar bien las manos tras aplicar.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-sun-secure-apres-soleil-1",
    name: "SUN SECURE Après-Soleil",
    img: "imagenes/svr/sv-sun-secure-apres-soleil-1.webp",
    brand: "svr",
    line: "sv-sun",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Pieles sensibles, sobrecalentadas e hipersensibles. Bebés, niños y adultos.",
      tipo: "Leche after-sun hidratante y calmante.",
      necesidad: "Hidrata, calma y repara tras el sol; prolonga el bronceado.",
      cuando: "Después de la exposición al sol.",
      modo: "Aplicar generosamente sobre la piel limpia y seca de cara y cuerpo."
    }
  },

  {
    id: "sv-sun-secure-spray-apres-soleil",
    name: "SUN SECURE Spray Après-Soleil",
    img: "imagenes/svr/sv-sun-secure-spray-apres-soleil.webp",
    brand: "svr",
    line: "sv-sun",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Pieles sensibles, sobrecalentadas e hipersensibles. Bebés, niños y adultos.",
      tipo: "Bruma after-sun refrescante.",
      necesidad: "Calma e hidrata tras el sol.",
      cuando: "Después de la exposición al sol.",
      modo: "Agitar y aplicar sobre la piel limpia y seca; en el rostro, pulverizar antes sobre las manos."
    }
  },

  /* ---------- SVR · AK Secure ---------- */
  {
    id: "sv-ak-secure-dm-protect",
    name: "AK SECURE DM Protect",
    img: "imagenes/svr/sv-ak-secure-dm-protect.webp",
    brand: "svr",
    line: "sv-ak",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Pieles hipersensibles al sol o de riesgo (fototipos I y II, inmunodeprimidos), cánceres de piel no melanoma y queratosis actínica.",
      tipo: "Producto sanitario de muy alta protección, resistente al agua.",
      necesidad: "Prevención de lesiones por daño actínico.",
      cuando: "Cada mañana. Reaplicar tras el agua o con sudoración intensa.",
      modo: "Aplicar uniformemente en las zonas afectadas y todas las zonas expuestas (rostro, orejas, escote, cuero cabelludo, manos)."
    }
  },

  /* ---------- SVR · Sebiaclear ---------- */
  {
    id: "sv-sebiaclear-gel-moussant-23",
    name: "SEBIACLEAR Gel Moussant",
    img: "imagenes/svr/sv-sebiaclear-gel-moussant-23.webp",
    brand: "svr",
    line: "sv-sebiaclear",
    n: ["limpieza", "acne"],
    sk: ["mixta", "grasa", "imperfecciones", "sensible"],
    d: {
      paciente: "Piel mixta a grasa, sensible y con tendencia al acné. Adolescentes y adultos.",
      tipo: "Limpiador facial y corporal sin jabón.",
      necesidad: "Limpia y purifica la piel con tendencia al acné.",
      limpieza: "Limpiador (sin paso indicado)",
      limpiezaDet: "SVR propone combinarlo con Sebiaclear Eau Micellaire para desmaquillar por la noche.",
      cuando: "Mañana y/o noche.",
      modo: "Aplicar sobre la piel húmeda, hacer espuma y aclarar."
    }
  },

  {
    id: "sv-sebiaclear-creme-lavante",
    name: "SEBIACLEAR Creme Lavante",
    img: "imagenes/svr/sv-sebiaclear-creme-lavante.webp",
    brand: "svr",
    line: "sv-sebiaclear",
    n: ["limpieza", "acne", "deshidratacion"],
    sk: ["mixta", "grasa", "imperfecciones", "sensible"],
    d: {
      paciente: "Piel con tendencia al acné, deshidratada o debilitada por tratamientos secantes. Adolescentes y adultos.",
      tipo: "Crema limpiadora facial y corporal.",
      necesidad: "Limpieza suave de la piel fragilizada.",
      limpieza: "Limpiador (sin paso indicado)",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "Mañana y/o noche.",
      modo: "Masajear suavemente en cara y/o cuerpo y aclarar."
    }
  },

  {
    id: "sv-sebiaclear-eau-micellaire",
    name: "SEBIACLEAR Eau Micellaire",
    img: "imagenes/svr/sv-sebiaclear-eau-micellaire.webp",
    brand: "svr",
    line: "sv-sebiaclear",
    n: ["limpieza", "acne"],
    sk: ["mixta", "grasa", "imperfecciones", "sensible"],
    d: {
      paciente: "Pieles sensibles mixtas o grasas con tendencia al acné.",
      tipo: "Agua limpiadora purificante y matificante.",
      necesidad: "Limpia y desmaquilla rostro y ojos.",
      limpieza: "Desmaquillante (sin paso indicado)",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "Mañana y/o noche.",
      modo: "Aplicar con un algodón. No requiere aclarado."
    }
  },

  {
    id: "sv-sebiaclear-micro-peel",
    name: "SEBIACLEAR Micro-Peel",
    img: "imagenes/svr/sv-sebiaclear-micro-peel.webp",
    brand: "svr",
    line: "sv-sebiaclear",
    n: ["acne", "poros"],
    sk: ["mixta", "grasa", "imperfecciones", "sensible"],
    d: {
      paciente: "Pieles sensibles mixtas o grasas con tendencia al acné.",
      tipo: "Loción suavizante y exfoliante.",
      necesidad: "Prepara la piel y actúa sobre las imperfecciones.",
      limpieza: "Exfoliante",
      limpiezaDet: "Loción que prepara la piel tras la limpieza.",
      cuando: "Mañana y/o noche.",
      modo: "Aplicar con un algodón o con la mano por todo el rostro, insistiendo en las imperfecciones."
    }
  },

  {
    id: "sv-sebiaclear-active-gel",
    name: "SEBIACLEAR Active Gel",
    img: "imagenes/svr/sv-sebiaclear-active-gel.webp",
    brand: "svr",
    line: "sv-sebiaclear",
    n: ["acne"],
    sk: ["mixta", "grasa", "imperfecciones", "sensible"],
    d: {
      paciente: "Piel propensa al acné, incluso sensible; imperfecciones de leves a graves. Desde 10 años.",
      tipo: "Cuidado corrector hidratante diario, no comedogénico.",
      necesidad: "Imperfecciones, con acción rápida y duradera.",
      cuando: "Mañana y/o noche.",
      modo: "Aplicar por todo el rostro limpio y seco. Sirve de base de maquillaje.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-sebiaclear-active",
    name: "SEBIACLEAR Active Teinté",
    img: "imagenes/svr/sv-sebiaclear-active.webp",
    brand: "svr",
    line: "sv-sebiaclear",
    n: ["acne"],
    sk: ["mixta", "grasa", "imperfecciones", "sensible"],
    d: {
      paciente: "Piel mixta a grasa con tendencia al acné, incluso sensible.",
      tipo: "Tratamiento unificador con color.",
      necesidad: "Corrige imperfecciones y unifica.",
      cuando: "Por la mañana.",
      modo: "Aplicar uniformemente sobre la piel limpia. Por la noche, SVR aconseja Sebiaclear Active Gel."
    }
  },

  {
    id: "sv-sebiaclear-serum",
    name: "SEBIACLEAR Sérum",
    img: "imagenes/svr/sv-sebiaclear-serum.webp",
    brand: "svr",
    line: "sv-sebiaclear",
    n: ["acne", "arrugas"],
    sk: ["mixta", "grasa", "imperfecciones", "sensible"],
    d: {
      paciente: "Piel grasa adulta con tendencia al acné, incluso sensible.",
      tipo: "Sérum para acné adulto, no comedogénico.",
      necesidad: "Imperfecciones y signos del acné adulto.",
      cuando: "Mañana y/o noche.",
      modo: "Aplicar por rostro, cuello y escote."
    }
  },

  {
    id: "sv-sebiaclear_ampoule_flash",
    name: "SEBIACLEAR Ampoule Flash",
    img: "imagenes/svr/sv-sebiaclear_ampoule_flash.webp",
    brand: "svr",
    line: "sv-sebiaclear",
    n: ["acne", "rojeces"],
    sk: ["mixta", "grasa", "imperfecciones", "sensible"],
    d: {
      paciente: "Pieles sensibles con tendencia al acné; granos, enrojecimiento y marcas. Desde 10 años.",
      tipo: "Concentrado contra imperfecciones y enrojecimiento.",
      necesidad: "Imperfecciones, enrojecimiento y marcas.",
      cuando: "Mañana y noche.",
      modo: "Agitar y aplicar sobre el rostro limpio y seco."
    }
  },

  {
    id: "sv-sebiaclear-gel-flash-4h",
    name: "SEBIACLEAR Gel Flash 4H",
    img: "imagenes/svr/sv-sebiaclear-gel-flash-4h.webp",
    brand: "svr",
    line: "sv-sebiaclear",
    n: ["acne"],
    sk: ["mixta", "grasa", "imperfecciones", "sensible"],
    d: {
      paciente: "Imperfecciones localizadas, incluso en piel sensible; acné de leve a severo. Desde 10 años.",
      tipo: "Gel invisible efecto parche con 5 % de ácido azelaico.",
      necesidad: "Imperfecciones localizadas.",
      cuando: "2 veces al día.",
      modo: "Aplicar sobre la piel limpia y seca. Compatible con maquillaje.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-sebiaclear-mat-pores-1",
    name: "SEBIACLEAR Mat+Pores",
    img: "imagenes/svr/sv-sebiaclear-mat-pores-1.webp",
    brand: "svr",
    line: "sv-sebiaclear",
    n: ["poros", "acne"],
    sk: ["mixta", "grasa", "imperfecciones", "sensible"],
    d: {
      paciente: "Piel mixta a grasa con tendencia al acné, incluso sensible.",
      tipo: "Matificante hidratante seborregulador, no comedogénico.",
      necesidad: "Poros dilatados y exceso de sebo.",
      cuando: "Mañana y/o noche.",
      modo: "Aplicar en toda la cara. Excelente base de maquillaje."
    }
  },

  {
    id: "sv-sebiaclear-hydra-23",
    name: "SEBIACLEAR Hydra",
    img: "imagenes/svr/sv-sebiaclear-hydra-23.webp",
    brand: "svr",
    line: "sv-sebiaclear",
    n: ["deshidratacion", "acne"],
    sk: ["mixta", "grasa", "imperfecciones", "sensible"],
    d: {
      paciente: "Piel con tendencia al acné, deshidratada o sometida a tratamientos desecantes.",
      tipo: "Crema hidratante reparadora, no comedogénica.",
      necesidad: "Confort duradero en piel fragilizada.",
      cuando: "Mañana y/o noche.",
      modo: "Aplicar sobre la piel limpia."
    }
  },

  {
    id: "sv-novedad-sebiaclear-creme-spf50",
    name: "SEBIACLEAR Creme SPF50+",
    img: "imagenes/svr/sv-novedad-sebiaclear-creme-spf50.webp",
    brand: "svr",
    line: "sv-sebiaclear",
    n: ["fotoproteccion", "acne"],
    sk: ["mixta", "grasa", "imperfecciones", "sensible"],
    d: {
      paciente: "Pieles sensibles mixtas o grasas con tendencia al acné, expuestas a UV.",
      tipo: "Crema 2 en 1: cuidado y protección solar SPF 50+.",
      necesidad: "Imperfecciones y marcas; protección solar diaria.",
      cuando: "Por la mañana y durante el día. Reaplicar con frecuencia.",
      modo: "Aplicar uniformemente sobre el rostro."
    }
  },

  {
    id: "sv-sebiaclear-spray-corps",
    name: "SEBIACLEAR Spray Corps",
    img: "imagenes/svr/sv-sebiaclear-spray-corps.webp",
    brand: "svr",
    line: "sv-sebiaclear",
    n: ["acne", "corporal"],
    sk: ["mixta", "grasa", "imperfecciones"],
    d: {
      paciente: "Piel con tendencia al acné en espalda, hombros y escote. Desde 10 años.",
      tipo: "Spray corporal antiimperfecciones.",
      necesidad: "Imperfecciones de espalda, hombros y escote.",
      cuando: "Mañana y noche.",
      modo: "Pulverizar a 5-10 cm sobre la piel limpia y seca y dejar secar."
    }
  },

  /* ---------- SVR · Sensifine ---------- */
  {
    id: "sv-sensifine-baume-demaquillant",
    name: "SENSIFINE Baume Démaquillant",
    img: "imagenes/svr/sv-sensifine-baume-demaquillant.webp",
    brand: "svr",
    line: "sv-sensifine",
    n: ["limpieza"],
    sk: ["sensible"],
    d: {
      paciente: "Las pieles más sensibles, intolerantes y polialérgicas. Desde 10 años.",
      tipo: "Bálsamo desmaquillante con 9 ingredientes.",
      necesidad: "Desmaquilla cara, ojos y labios.",
      limpieza: "Desmaquillante (sin paso indicado)",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "Uso diario.",
      modo: "Masajear sobre la piel seca, emulsionar con agua y aclarar.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-sensifine-dermo-nettoyant",
    name: "SENSIFINE Dermo-Nettoyant",
    img: "imagenes/svr/sv-sensifine-dermo-nettoyant.webp",
    brand: "svr",
    line: "sv-sensifine",
    n: ["limpieza"],
    sk: ["sensible"],
    d: {
      paciente: "Las pieles más sensibles, intolerantes y polialérgicas. Desde 10 años.",
      tipo: "Limpiador con 9 ingredientes.",
      necesidad: "Elimina todo rastro de maquillaje en cara, ojos y labios.",
      limpieza: "Limpiador (sin paso indicado)",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "Uso diario.",
      modo: "Aplicar con las yemas masajeando; pasar un algodón sin frotar. Aclarar si es necesario."
    }
  },

  {
    id: "sv-sensifine-extreme",
    name: "SENSIFINE Extrême",
    img: "imagenes/svr/sv-sensifine-extreme.webp",
    brand: "svr",
    line: "sv-sensifine",
    n: ["rojeces"],
    sk: ["sensible"],
    d: {
      paciente: "Pieles intolerantes y polialérgicas que no toleran nada. Desde 3 años.",
      tipo: "Crema calmante con solo 6 ingredientes.",
      necesidad: "Hidrata, repara y calma.",
      cuando: "Mañana y noche.",
      modo: "Sobre la piel limpia y seca.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-sensifine-hydra-creme",
    name: "SENSIFINE Hydra-Creme",
    img: "imagenes/svr/sv-sensifine-hydra-creme.webp",
    brand: "svr",
    line: "sv-sensifine",
    n: ["deshidratacion", "rojeces"],
    sk: ["sensible"],
    d: {
      paciente: "Pieles hipersensibles, intolerantes y alérgicas. Desde 3 años.",
      tipo: "Crema minimalista con 10 ingredientes.",
      necesidad: "Hidrata la piel hipersensible.",
      cuando: "Mañana y/o noche.",
      modo: "Sobre la piel limpia y seca. Sola o con la rutina diaria.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-sensifine-aqua-gel",
    name: "SENSIFINE Aqua-Gel",
    img: "imagenes/svr/sv-sensifine-aqua-gel.webp",
    brand: "svr",
    line: "sv-sensifine",
    n: ["deshidratacion", "rojeces"],
    sk: ["mixta", "grasa", "sensible"],
    d: {
      paciente: "Pieles mixtas a grasas, irritadas y muy sensibles. Desde 10 años.",
      tipo: "Gel con 8 ingredientes.",
      necesidad: "Frescor e hidratación.",
      cuando: "Mañana y/o noche.",
      modo: "Aplicar sobre rostro y cuello limpios y secos. Excelente base de maquillaje.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-sensifine-nutri-baume",
    name: "SENSIFINE Nutri-Baume",
    img: "imagenes/svr/sv-sensifine-nutri-baume.webp",
    brand: "svr",
    line: "sv-sensifine",
    n: ["seca", "rojeces"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Pieles secas a muy secas, sensibles, intolerantes y polialérgicas. Desde 10 años.",
      tipo: "Bálsamo con 10 ingredientes.",
      necesidad: "Nutre y aporta bienestar.",
      cuando: "Mañana y noche.",
      modo: "Aplicar sobre rostro y cuello limpios y secos.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-sensifine-huile-de-nuit",
    name: "SENSIFINE Huile de Nuit",
    img: "imagenes/svr/sv-sensifine-huile-de-nuit.webp",
    brand: "svr",
    line: "sv-sensifine",
    n: ["seca", "rojeces"],
    sk: ["sensible"],
    d: {
      paciente: "Pieles muy sensibles, intolerantes y polialérgicas. Desde 10 años.",
      tipo: "Aceite de noche con 10 ingredientes.",
      necesidad: "Nutre la piel durante la noche.",
      cuando: "Por la noche.",
      modo: "Aplicar 3-4 gotas en rostro y cuello limpios y secos y masajear.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-sensifine-masque-sos",
    name: "SENSIFINE Masque SOS",
    img: "imagenes/svr/sv-sensifine-masque-sos.webp",
    brand: "svr",
    line: "sv-sensifine",
    n: ["rojeces"],
    sk: ["sensible"],
    d: {
      paciente: "Pieles sensibles, intolerantes y polialérgicas; piel irritada. Desde 10 años.",
      tipo: "Mascarilla calmante sin aclarado, con 10 ingredientes.",
      necesidad: "Calma la piel reactiva y lesionada.",
      cuando: "Como SOS cuando se necesite, o por la noche.",
      modo: "SOS: capa gruesa 5-10 minutos y retirar el exceso. Noche: capa fina sobre la piel limpia y seca.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  /* ---------- SVR · Sensifine AR ---------- */
  {
    id: "sv-sensifine-ar-eau-micellaire",
    name: "SENSIFINE AR Eau Micellaire",
    img: "imagenes/svr/sv-sensifine-ar-eau-micellaire.webp",
    brand: "svr",
    line: "sv-sensifinear",
    n: ["limpieza", "rojeces"],
    sk: ["sensible"],
    d: {
      paciente: "Piel reactiva con tendencia al enrojecimiento. Desde 10 años.",
      tipo: "Agua micelar fresca, apta para lentillas.",
      necesidad: "Desmaquilla y refresca rostro, ojos y labios.",
      limpieza: "Desmaquillante (sin paso indicado)",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "Uso diario.",
      modo: "Empapar un algodón, dejar unos segundos en las zonas con rojeces y extender.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-sensifine-ar-creme",
    name: "SENSIFINE AR Creme",
    img: "imagenes/svr/sv-sensifine-ar-creme.webp",
    brand: "svr",
    line: "sv-sensifinear",
    n: ["rojeces"],
    sk: ["sensible"],
    d: {
      paciente: "Piel reactiva con tendencia a rojeces y vasos visibles. Desde 3 años.",
      tipo: "Gel cremoso antirrojeces.",
      necesidad: "Enrojecimiento y vasos visibles.",
      cuando: "Mañana y noche.",
      modo: "Aplicar con ligeros toques sobre la piel limpia y seca. Excelente base de maquillaje."
    }
  },

  {
    id: "sv-sensifine-ar-creme-riche",
    name: "SENSIFINE AR Creme Riche",
    img: "imagenes/svr/sv-sensifine-ar-creme-riche.webp",
    brand: "svr",
    line: "sv-sensifinear",
    n: ["rojeces", "seca"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Piel reactiva con tendencia a rojeces y vasos visibles. Desde 3 años.",
      tipo: "Crema nutritiva antirrojeces.",
      necesidad: "Enrojecimiento y sequedad.",
      cuando: "Mañana y noche.",
      modo: "Aplicar con ligeros toques sobre la piel limpia y seca."
    }
  },

  {
    id: "sv-sensifine-ar-creme-teinte-nuevo",
    name: "SENSIFINE AR Creme Teinté",
    img: "imagenes/svr/sv-sensifine-ar-creme-teinte-nuevo.webp",
    brand: "svr",
    line: "sv-sensifinear",
    n: ["rojeces"],
    sk: ["sensible"],
    d: {
      paciente: "Piel reactiva con tendencia a rojeces y vasos visibles. Desde 10 años.",
      tipo: "Crema antirrojeces con color.",
      necesidad: "Disimula y trata el enrojecimiento.",
      cuando: "Por la mañana.",
      modo: "Aplicar sobre la piel limpia y seca, ajustando la dosis según las rojeces.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-sensifine-ar-creme-spf50-1",
    name: "SENSIFINE AR Creme SPF50+",
    img: "imagenes/svr/sv-sensifine-ar-creme-spf50-1.webp",
    brand: "svr",
    line: "sv-sensifinear",
    n: ["rojeces", "fotoproteccion"],
    sk: ["sensible"],
    d: {
      paciente: "Piel reactiva con rojeces y vasos visibles al sol. Desde 10 años.",
      tipo: "Crema antirrojeces con SPF 50+.",
      necesidad: "Enrojecimiento y protección solar.",
      cuando: "Por la mañana, antes del sol. Reaplicar con frecuencia.",
      modo: "Aplicar una dosis generosa por el rostro limpio y seco.",
      solar: "Evitar el sol de 12 a 16 h; si no, usar ropa protectora.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  /* ---------- SVR · Topialyse ---------- */
  {
    id: "sv-topialyse-gel-lavant-1",
    name: "TOPIALYSE Gel Lavant",
    img: "imagenes/svr/sv-topialyse-gel-lavant-1.webp",
    brand: "svr",
    line: "sv-topialyse",
    n: ["limpieza", "corporal", "seca"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Pieles secas y sensibles de toda la familia, desde recién nacidos.",
      tipo: "Gel limpiador ultrasuave.",
      necesidad: "Higiene corporal, facial, capilar e íntima.",
      limpieza: "Limpiador corporal y facial",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "Uso diario.",
      modo: "Aplicar sobre la piel húmeda, formar espuma, aclarar y secar sin frotar.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-topialyse-huile-micellaire-nuevo",
    name: "TOPIALYSE Huile Lavante",
    img: "imagenes/svr/sv-topialyse-huile-micellaire-nuevo.webp",
    brand: "svr",
    line: "sv-topialyse",
    n: ["limpieza", "corporal", "seca"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Pieles secas o muy secas con tendencia atópica, de toda la familia desde recién nacidos.",
      tipo: "Aceite limpiador para cuerpo y cara.",
      necesidad: "Limpieza suave sin tirantez.",
      limpieza: "Limpiador corporal y facial",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "Uso diario.",
      modo: "Aplicar sobre la piel húmeda, formar espuma, aclarar y secar sin frotar. En el baño: 3 dosis.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-topialyse-baume-lavant",
    name: "TOPIALYSE Baume Lavant",
    img: "imagenes/svr/sv-topialyse-baume-lavant.webp",
    brand: "svr",
    line: "sv-topialyse",
    n: ["limpieza", "corporal", "seca"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Pieles muy secas con tendencia atópica, de toda la familia desde recién nacidos.",
      tipo: "Bálsamo limpiador sin perfume.",
      necesidad: "Calma y protege durante la higiene.",
      limpieza: "Limpiador corporal y facial",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "SVR no indica la frecuencia.",
      modo: "SVR no detalla cómo aplicarlo.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-topialyse-concentre-lavant",
    name: "TOPIALYSE Concentré Lavant",
    img: "imagenes/svr/sv-topialyse-concentre-lavant.webp",
    brand: "svr",
    line: "sv-topialyse",
    n: ["limpieza", "corporal"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Pieles secas y sensibles de toda la familia.",
      tipo: "Limpiador concentrado sin agua ni jabón.",
      necesidad: "Higiene corporal, facial e íntima.",
      limpieza: "Limpiador corporal y facial",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "Uso diario.",
      modo: "Humedecer la piel, aplicar con 2 dedos, formar espuma entre las manos y aclarar.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-topialyse-creme-1",
    name: "TOPIALYSE Creme",
    img: "imagenes/svr/sv-topialyse-creme-1.webp",
    brand: "svr",
    line: "sv-topialyse",
    n: ["seca", "corporal"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Pieles secas y sensibles, con tirantez. Toda la familia, desde recién nacidos.",
      tipo: "Crema reconfortante para cuerpo y cara.",
      necesidad: "Hidrata y aporta confort.",
      cuando: "Mañana y noche.",
      modo: "Aplicar sobre el cuerpo limpio, insistiendo en las zonas secas. También en la cara.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-topialyse-baume-protect",
    name: "TOPIALYSE Baume Protect+",
    img: "imagenes/svr/sv-topialyse-baume-protect.webp",
    brand: "svr",
    line: "sv-topialyse",
    n: ["seca", "corporal"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Pieles secas, muy secas, con tendencia atópica o xerosis senil. Toda la familia.",
      tipo: "Bálsamo con ceramidas, sin irritar.",
      necesidad: "Sequedad y barrera cutánea.",
      cuando: "Mañana y noche.",
      modo: "Aplicar sobre rostro o cuerpo limpios, insistiendo en las zonas muy secas.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-topialyse-barriere",
    name: "TOPIALYSE Barrière",
    img: "imagenes/svr/sv-topialyse-barriere.webp",
    brand: "svr",
    line: "sv-topialyse",
    n: ["rojeces", "seca"],
    sk: ["sensible"],
    d: {
      paciente: "Zonas reactivas e irritadas; piel sensible con tendencia atópica. Desde 3 años.",
      tipo: "Crema barrera resistente al agua.",
      necesidad: "Repara y protege de agresiones en manos, cara, cuerpo y pliegues.",
      cuando: "Tantas veces como sea necesario.",
      modo: "Aplicar en las zonas localizadas.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-topialyse-mains",
    name: "TOPIALYSE Mains",
    img: "imagenes/svr/sv-topialyse-mains.webp",
    brand: "svr",
    line: "sv-topialyse",
    n: ["corporal"],
    sk: ["seca"],
    d: {
      paciente: "Manos ultrasecas y estropeadas. Desde 3 años.",
      tipo: "Crema de manos no pegajosa.",
      necesidad: "Hidrata y repara las manos.",
      cuando: "Varias veces al día.",
      modo: "Aplicar en el dorso y masajear con movimientos circulares.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-topialyse-stick-levres",
    name: "TOPIALYSE Stick Lèvres",
    img: "imagenes/svr/sv-topialyse-stick-levres.webp",
    brand: "svr",
    line: "sv-topialyse",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Labios secos y sensibles. Desde 3 años.",
      tipo: "Stick labial con acabado invisible.",
      necesidad: "Labios sensibles y dañados.",
      cuando: "Tantas veces como sea necesario.",
      modo: "Aplicar en los labios.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  /* ---------- SVR · Palpebral ---------- */
  {
    id: "sv-palpebral-by-topialyse-demaquillant",
    name: "PALPEBRAL Démaquillant",
    img: "imagenes/svr/sv-palpebral-by-topialyse-demaquillant.webp",
    brand: "svr",
    line: "sv-palpebral",
    n: ["limpieza", "ojos"],
    sk: ["sensible"],
    d: {
      paciente: "Párpados sensibles, irritados y secos; usuarios de lentillas. Desde 10 años.",
      tipo: "Desmaquillante de ojos en gel.",
      necesidad: "Desmaquilla y alivia al momento.",
      limpieza: "Desmaquillante de ojos",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "Uso diario.",
      modo: "Poner gel en un algodón, aplicar sobre el ojo cerrado unos segundos y arrastrar hacia las sienes sin frotar.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-palpebral-by-topialyse-creme-nueva-formula",
    name: "PALPEBRAL Creme",
    img: "imagenes/svr/sv-palpebral-by-topialyse-creme-nueva-formula.webp",
    brand: "svr",
    line: "sv-palpebral",
    n: ["ojos"],
    sk: ["sensible"],
    d: {
      paciente: "Párpados y contorno sensibles, secos, irritados y con tendencia atópica. Desde 3 años.",
      tipo: "Crema calmante para párpados y contorno.",
      necesidad: "Sequedad e irritación del contorno.",
      cuando: "Mañana y/o noche.",
      modo: "Aplicar sobre la piel limpia y seca del contorno y los párpados.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-palpebral-baume",
    name: "PALPEBRAL Baume",
    img: "imagenes/svr/sv-palpebral-baume.webp",
    brand: "svr",
    line: "sv-palpebral",
    n: ["ojos", "seca"],
    sk: ["sensible"],
    d: {
      paciente: "Rostro, contorno y párpados secos con tendencia a eccema atópico. Toda la familia, desde recién nacidos.",
      tipo: "Bálsamo reparador de la barrera.",
      necesidad: "Enrojecimiento, irritación y picor.",
      cuando: "Mañana y noche.",
      modo: "Aplicar a toques en contorno y párpado y en zonas con eccema atópico. En brotes, capa gruesa.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-palpebral-by-topialyse-mascara-protect",
    name: "PALPEBRAL Máscara Protect",
    img: "imagenes/svr/sv-palpebral-by-topialyse-mascara-protect.webp",
    brand: "svr",
    line: "sv-palpebral",
    n: [],
    sk: ["sensible"],
    d: {
      paciente: "Ojos hipersensibles y usuarios de lentillas. Desde 10 años.",
      tipo: "Máscara de pestañas hipoalergénica.",
      necesidad: "Alarga y riza; se retira con facilidad.",
      cuando: "Uso diario.",
      modo: "Aplicar a ras de pestañas en zigzag. Retirar con agua o desmaquillante suave.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  /* ---------- SVR · Xerial ---------- */
  {
    id: "sv-xerial-10-lait-corps-new",
    name: "XERIAL 10 Lait Corps",
    img: "imagenes/svr/sv-xerial-10-lait-corps-new.webp",
    brand: "svr",
    line: "sv-xerial",
    n: ["corporal", "seca"],
    sk: ["seca"],
    d: {
      paciente: "Piel seca, áspera, escamosa, de cocodrilo o agrietada. Desde 3 años.",
      tipo: "Leche corporal con 10 % de urea.",
      necesidad: "Sequedad, tirantez y picor.",
      cuando: "Mañana y/o noche.",
      modo: "Aplicar en el cuerpo sobre la piel limpia y seca.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-xerial-30-gel-creme",
    name: "XERIAL 30 Gel-Creme",
    img: "imagenes/svr/sv-xerial-30-gel-creme.webp",
    brand: "svr",
    line: "sv-xerial",
    n: ["corporal"],
    sk: ["seca"],
    d: {
      paciente: "Zonas ásperas y escamosas; vellos encarnados, tendencia a queratosis pilar y/o psoriasis. Desde 3 años.",
      tipo: "Gel-crema corporal queratorreguladora.",
      necesidad: "Rugosidades localizadas y descamación.",
      cuando: "1 o 2 veces al día hasta lograr el efecto.",
      modo: "Aplicar sobre codos, rodillas, manos y brazos.",
      nota: "Por consejo profesional, puede complementar un tratamiento de la sequedad. Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-xerial-gel-peeling",
    name: "XERIAL Gel Lavant Peeling",
    img: "imagenes/svr/sv-xerial-gel-peeling.webp",
    brand: "svr",
    line: "sv-xerial",
    n: ["corporal", "apagada", "manchas"],
    sk: ["todas"],
    d: {
      paciente: "Pieles apagadas, secas con descamación, con marcas, pigmentación en zonas de fricción o tendencia a queratosis pilaris. Desde 10 años.",
      tipo: "Gel de ducha exfoliante con AHA y PHA.",
      necesidad: "Rugosidades, textura y tono.",
      limpieza: "Exfoliante corporal",
      limpiezaDet: "Gel de ducha con ácidos.",
      cuando: "Una vez al día en la ducha.",
      modo: "Hacer espuma sobre la piel húmeda, masajear 30 segundos y aclarar. Después, hidratar con Xerial 10.",
      solar: "Antes de exponerse al sol, proteger las zonas tratadas con AHA con un fotoprotector.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-xerial-gommage",
    name: "XERIAL Gommage",
    img: "imagenes/svr/sv-xerial-gommage.webp",
    brand: "svr",
    line: "sv-xerial",
    n: ["corporal"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Piel engrosada, áspera, con pelos encarnados y tendencia a queratosis pilar; también sensible. Desde 10 años.",
      tipo: "Exfoliante dermatológico en granos, sin agua.",
      necesidad: "Elimina células muertas y asperezas.",
      limpieza: "Exfoliante corporal",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "1 o 2 veces por semana, en la ducha.",
      modo: "Masajear sobre la piel húmeda con movimientos circulares y aclarar.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-xerial-dm-psoriasis",
    name: "XERIAL DM Psoriasis",
    img: "imagenes/svr/sv-xerial-dm-psoriasis.webp",
    brand: "svr",
    line: "sv-xerial",
    n: ["corporal", "rojeces"],
    sk: ["todas"],
    d: {
      paciente: "Pacientes con síntomas de psoriasis en placas: placas, escamas, picor y enrojecimiento.",
      tipo: "Producto sanitario, no graso.",
      necesidad: "Síntomas de la psoriasis.",
      cuando: "2 veces al día durante un máximo de 30 días.",
      modo: "Aplicar una capa gruesa sobre las lesiones limpias y secas y masajear.",
      nota: "No usar más de 30 días. SVR indica que puede sustituir a los dermocorticoides."
    }
  },

  {
    id: "sv-xerial-30-creme-pieds",
    name: "XERIAL 30 Creme Pieds",
    img: "imagenes/svr/sv-xerial-30-creme-pieds.webp",
    brand: "svr",
    line: "sv-xerial",
    n: ["corporal"],
    sk: ["seca"],
    d: {
      paciente: "Pies secos, muy secos y estropeados. Desde 3 años.",
      tipo: "Crema de pies de uso diario.",
      necesidad: "Mantiene los pies suaves.",
      cuando: "Mañana y/o noche.",
      modo: "Masajear en círculos por todo el pie.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-xerial-50-extreme-creme-pieds",
    name: "XERIAL 50 Extreme Creme Pieds",
    img: "imagenes/svr/sv-xerial-50-extreme-creme-pieds.webp",
    brand: "svr",
    line: "sv-xerial",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Callos, durezas y pies muy ásperos. Desde 3 años.",
      tipo: "Tratamiento queratolítico con urea y ácido salicílico.",
      necesidad: "Callos y durezas.",
      cuando: "2 veces al día hasta lograr el efecto.",
      modo: "Masajear en círculos sobre las zonas afectadas. También en manos y codos."
    }
  },

  {
    id: "sv-xerial-fissures-crevasses-23",
    name: "XERIAL Fisuras y Grietas",
    img: "imagenes/svr/sv-xerial-fissures-crevasses-23.webp",
    brand: "svr",
    line: "sv-xerial",
    n: ["corporal"],
    sk: ["seca"],
    d: {
      paciente: "Pies muy secos y agrietados; personas de pie mucho tiempo o que corren. Desde 10 años.",
      tipo: "Crema protectora 24 h.",
      necesidad: "Alisa y repara grietas y fisuras.",
      cuando: "1 o 2 veces al día hasta lograr el efecto; luego 2-3 veces por semana.",
      modo: "Aplicar sobre los pies o la zona afectada. No usar en heridas abiertas o infectadas.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-xerial-peel",
    name: "XERIAL Peel",
    img: "imagenes/svr/sv-xerial-peel.webp",
    brand: "svr",
    line: "sv-xerial",
    n: ["corporal"],
    sk: ["seca"],
    d: {
      paciente: "Pies muy secos, engrosados y con callosidades.",
      tipo: "Mascarilla exfoliante en calcetín, de un solo uso.",
      necesidad: "Elimina piel muerta en unos días.",
      limpieza: "Exfoliante de pies",
      limpiezaDet: "Mascarilla en calcetín.",
      cuando: "Un solo uso.",
      modo: "Dejar 1 hora y aclarar. A los 4-5 días la piel empieza a desprenderse."
    }
  },

  {
    id: "sv-xerial-40-ongles",
    name: "XERIAL 40 Ongles",
    img: "imagenes/svr/sv-xerial-40-ongles.webp",
    brand: "svr",
    line: "sv-xerial",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Uñas de pies o manos dañadas, estriadas, engrosadas y quebradizas. Desde 3 años.",
      tipo: "Gel para uñas con tubo aplicador.",
      necesidad: "Uñas dañadas o partidas.",
      cuando: "2 veces al día durante 3 meses.",
      modo: "Aplicar en las uñas con el tubo.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  /* ---------- SVR · Cicavit+ ---------- */
  {
    id: "sv-cicavit-creme-hppi",
    name: "CICAVIT+ Crème HPPI",
    img: "imagenes/svr/sv-cicavit-creme-hppi.webp",
    brand: "svr",
    line: "sv-cicavit",
    n: ["rojeces"],
    sk: ["todas"],
    d: {
      paciente: "Irritaciones, arañazos, rojeces del pañal o tras láser/descamación. Desde el nacimiento.",
      tipo: "Crema reparadora, no comedogénica.",
      necesidad: "Repara la piel irritada y dañada.",
      cuando: "2 veces al día hasta repararla.",
      modo: "Aplicar una capa fina o gruesa sobre la piel limpia y seca. Se puede usar como mascarilla SOS.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-cicavit-pommade",
    name: "CICAVIT+ Pommade",
    img: "imagenes/svr/sv-cicavit-pommade.webp",
    brand: "svr",
    line: "sv-cicavit",
    n: ["seca", "rojeces"],
    sk: ["seca"],
    d: {
      paciente: "Piel seca a muy seca e irritación por fricción. Toda la familia.",
      tipo: "Pomada multiusos de efecto vendaje.",
      necesidad: "Nutre y protege rostro, cuerpo, labios, nariz, manos, talones y codos.",
      cuando: "Tantas veces como sea necesario.",
      modo: "Aplicar sobre zonas limpias y secas. Como mascarilla, capa gruesa.",
      nota: "Solo uso externo. Si las molestias persisten, consultar a un profesional sanitario. Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-cicavit-sos-grattage",
    name: "CICAVIT+ SOS Grattage",
    img: "imagenes/svr/sv-cicavit-sos-grattage.webp",
    brand: "svr",
    line: "sv-cicavit",
    n: ["rojeces"],
    sk: ["sensible"],
    d: {
      paciente: "Pieles sensibles con picor temporal o regular. Desde el nacimiento.",
      tipo: "Spray de efecto frío, sin aclarado.",
      necesidad: "Alivia el picor de inmediato.",
      cuando: "Tantas veces como sea necesario.",
      modo: "Pulverizar a 15 cm y dejar penetrar. En el rostro, aplicar antes en la palma.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-cicavit-dm-cicatrices",
    name: "CICAVIT DM+ Cicatrices",
    img: "imagenes/svr/sv-cicavit-dm-cicatrices.webp",
    brand: "svr",
    line: "sv-cicavit",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Cicatrices tras intervenciones dermatológicas o quirúrgicas (heridas cerradas) o quemaduras superficiales.",
      tipo: "Producto sanitario con gel de silicona.",
      necesidad: "Tratamiento de cicatrices.",
      cuando: "2 veces al día.",
      modo: "Aplicar sobre la piel limpia y seca, en heridas cerradas y cicatrices.",
      nota: "Uso externo. Si el problema persiste, interrumpir y consultar."
    }
  },

  {
    id: "sv-creme-mains-cicavit",
    name: "CICAVIT+ Crème Mains",
    img: "imagenes/svr/sv-creme-mains-cicavit.webp",
    brand: "svr",
    line: "sv-cicavit",
    n: ["corporal"],
    sk: ["seca"],
    d: {
      paciente: "Manos estropeadas, con descamación y grietas; uñas y cutículas.",
      tipo: "Crema de manos reparadora.",
      necesidad: "Nutre y repara.",
      cuando: "Tantas veces como sea necesario.",
      modo: "Aplicar en manos, uñas y cutículas.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-cicavit-levres",
    name: "CICAVIT+ Lèvres",
    img: "imagenes/svr/sv-cicavit-levres.webp",
    brand: "svr",
    line: "sv-cicavit",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Labios secos, dañados y agrietados.",
      tipo: "Cuidado labial reparador.",
      necesidad: "Labios secos a muy secos.",
      cuando: "Tantas veces como sea necesario.",
      modo: "Aplicar en los labios.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-cicavit-creme-spf50",
    name: "CICAVIT+ Crème SPF50+",
    img: "imagenes/svr/sv-cicavit-creme-spf50.webp",
    brand: "svr",
    line: "sv-cicavit",
    n: ["fotoproteccion", "manchas", "rojeces"],
    sk: ["todas"],
    d: {
      paciente: "Pieles expuestas al sol, dañadas e irritadas, incluso sensibles. Desde el nacimiento.",
      tipo: "Crema reparadora con SPF 50+.",
      necesidad: "Repara y previene manchas en piel dañada.",
      cuando: "Antes del sol. Reaplicar con frecuencia, sobre todo tras sudar, nadar o secarse.",
      modo: "Aplicar generosa y uniformemente sobre zonas limpias y secas.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  /* ---------- SVR · Densitium ---------- */
  {
    id: "sv-densitium-creme-refill",
    name: "DENSITIUM Crème",
    img: "imagenes/svr/sv-densitium-creme-refill.webp",
    brand: "svr",
    line: "sv-densitium",
    n: ["arrugas", "flacidez", "manchas"],
    sk: ["seca"],
    d: {
      paciente: "Pieles maduras normales a secas, con arrugas, pérdida de firmeza y manchas.",
      tipo: "Tratamiento antiedad nutritivo, con recarga.",
      necesidad: "Arrugas, firmeza y manchas.",
      cuando: "Mañana y noche.",
      modo: "Aplicar sobre cara y cuello limpios.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-densitium-creme-riche-copy",
    name: "DENSITIUM Crème Riche",
    img: "imagenes/svr/sv-densitium-creme-riche-copy.webp",
    brand: "svr",
    line: "sv-densitium",
    n: ["arrugas", "flacidez", "manchas", "seca"],
    sk: ["seca"],
    d: {
      paciente: "Piel madura de seca a muy seca, con arrugas, pérdida de firmeza y manchas.",
      tipo: "Crema antiedad rica, con recarga.",
      necesidad: "Arrugas, firmeza, manchas y sequedad.",
      cuando: "Mañana y noche.",
      modo: "Aplicar sobre cara y cuello limpios.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-densitium-creme-spf30-refill",
    name: "DENSITIUM Crème SPF30",
    img: "imagenes/svr/sv-densitium-creme-spf30-refill.webp",
    brand: "svr",
    line: "sv-densitium",
    n: ["arrugas", "flacidez", "fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Pieles maduras con arrugas, pérdida de firmeza o manchas que buscan protección solar y antiedad.",
      tipo: "Crema antiedad con SPF 30, con recarga.",
      necesidad: "Arrugas, firmeza y protección solar.",
      cuando: "Por la mañana.",
      modo: "Aplicar en cara, cuello y escote. No usar sobre piel dañada.",
      solar: "Si hay exposición al sol, usar una crema solar adecuada.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-densitium-rose-eclat-refill",
    name: "DENSITIUM Rose Éclat",
    img: "imagenes/svr/sv-densitium-rose-eclat-refill.webp",
    brand: "svr",
    line: "sv-densitium",
    n: ["apagada", "arrugas", "flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Piel madura, opaca y desigual, flácida, con arrugas y manchas.",
      tipo: "Tratamiento antiedad con pigmentos rosados, con recarga.",
      necesidad: "Tono, luminosidad y signos de la edad.",
      cuando: "Por la mañana.",
      modo: "Aplicar en cara y cuello, solo o con la rutina.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-densitium-bi-serum-refill",
    name: "DENSITIUM Bi-Sérum",
    img: "imagenes/svr/sv-densitium-bi-serum-refill.webp",
    brand: "svr",
    line: "sv-densitium",
    n: ["arrugas", "flacidez", "seca"],
    sk: ["todas"],
    d: {
      paciente: "Pieles maduras con arrugas marcadas, pérdida de densidad, sequedad avanzada o papada.",
      tipo: "Sérum de doble textura, con recarga.",
      necesidad: "Redensifica y reafirma.",
      cuando: "Mañana y noche.",
      modo: "Calentar entre las manos y aplicar en cara y cuello limpios, del centro hacia fuera.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-densitium-baume-nuit-refill",
    name: "DENSITIUM Baume Nuit",
    img: "imagenes/svr/sv-densitium-baume-nuit-refill.webp",
    brand: "svr",
    line: "sv-densitium",
    n: ["arrugas", "flacidez", "manchas"],
    sk: ["todas"],
    d: {
      paciente: "Pieles maduras con arrugas, pérdida de firmeza o manchas.",
      tipo: "Bálsamo antiedad de noche, con recarga.",
      necesidad: "Nutre y trata los signos de la edad.",
      cuando: "Por la noche.",
      modo: "Aplicar sobre cara y cuello limpios.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-densitium-contour-des-yeux-nuevo",
    name: "DENSITIUM Contour des Yeux",
    img: "imagenes/svr/sv-densitium-contour-des-yeux-nuevo.webp",
    brand: "svr",
    line: "sv-densitium",
    n: ["ojos", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Pieles maduras con arrugas marcadas, ojeras y bolsas.",
      tipo: "Contorno de ojos antiedad.",
      necesidad: "Arrugas, ojeras y bolsas.",
      cuando: "Mañana y noche.",
      modo: "Dar toques desde el ángulo interno hacia fuera, insistiendo en las patas de gallo.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  /* ---------- SVR · Biotic ---------- */
  {
    id: "sv-ceramides-biotic",
    name: "[CERAMIDES] Biotic",
    img: "imagenes/svr/sv-ceramides-biotic.webp",
    brand: "svr",
    line: "sv-biotic",
    n: ["seca", "arrugas"],
    sk: ["seca"],
    d: {
      paciente: "Piel seca e incómoda, sin flexibilidad, con arrugas y líneas finas.",
      tipo: "Bálsamo nutritivo, con recarga.",
      necesidad: "Sequedad, elasticidad y arrugas.",
      cuando: "Mañana y noche.",
      modo: "Sobre la piel limpia y seca. Solo o con la rutina.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-c20biotic-new",
    name: "[C20] Biotic",
    img: "imagenes/svr/sv-c20biotic-new.webp",
    brand: "svr",
    line: "sv-biotic",
    n: ["apagada", "arrugas"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible con cutis apagado, cansado y desigual, con líneas o arrugas.",
      tipo: "Crema con vitamina C.",
      necesidad: "Luminosidad y arrugas.",
      cuando: "Mañana y/o noche; empezar de forma gradual.",
      modo: "Primera vez: una pequeña cantidad de noche y esperar 48 horas. Si hay hormigueo o rojeces, interrumpir.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-c20-fluide",
    name: "[C20] Fluide Biotic",
    img: "imagenes/svr/sv-c20-fluide.webp",
    brand: "svr",
    line: "sv-biotic",
    n: ["apagada", "manchas", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Tez apagada, fatiga, manchas, arrugas y líneas finas.",
      tipo: "Fluido con vitamina C y ácido hialurónico.",
      necesidad: "Luminosidad, tono y arrugas.",
      cuando: "Mañana y noche.",
      modo: "Aplicar sobre la piel limpia y seca, evitando el contorno de ojos. Primera vez: esperar 48 horas antes de repetir.",
      nota: "No recomendado para pieles reactivas. Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-new-peptibiotic",
    name: "[PEPTI] Biotic",
    img: "imagenes/svr/sv-new-peptibiotic.webp",
    brand: "svr",
    line: "sv-biotic",
    n: ["acne", "poros", "arrugas"],
    sk: ["mixta", "grasa", "imperfecciones", "sensible"],
    d: {
      paciente: "Piel sensible con imperfecciones, poros visibles y arrugas.",
      tipo: "Gel matificante con péptidos.",
      necesidad: "Imperfecciones, poros y textura.",
      cuando: "Mañana y noche.",
      modo: "Sobre la piel limpia y seca. Buena base de maquillaje.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-new-hyalubiotic",
    name: "[HYALU] Biotic",
    img: "imagenes/svr/sv-new-hyalubiotic.webp",
    brand: "svr",
    line: "sv-biotic",
    n: ["deshidratacion", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Piel deshidratada con tirantez y arrugas por deshidratación.",
      tipo: "Gel fresco con ácido hialurónico.",
      necesidad: "Deshidratación y arrugas.",
      cuando: "Mañana y noche.",
      modo: "Sobre la piel limpia y seca. Buena base de maquillaje.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-new-collagen-biotic",
    name: "[COLLAGEN] Biotic",
    img: "imagenes/svr/sv-new-collagen-biotic.webp",
    brand: "svr",
    line: "sv-biotic",
    n: ["flacidez", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Pieles con pérdida de elasticidad, líneas de expresión y arrugas.",
      tipo: "Crema con colágeno vegetal.",
      necesidad: "Elasticidad y arrugas.",
      cuando: "Mañana y noche.",
      modo: "Sobre la piel limpia y seca. Buena base de maquillaje.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-c-eye-biotic",
    name: "[C-EYE] Biotic",
    img: "imagenes/svr/sv-c-eye-biotic.webp",
    brand: "svr",
    line: "sv-biotic",
    n: ["ojos", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Cansancio, ojeras pigmentadas y vasculares, hinchazón y arrugas del contorno.",
      tipo: "Contorno de ojos con vitamina C y micropigmentos.",
      necesidad: "Revitaliza, ilumina y suaviza.",
      cuando: "Mañana y noche.",
      modo: "Dar toques de dentro hacia fuera y extender hacia las patas de gallo.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-filler-biotic",
    name: "[FILLER] Biotic",
    img: "imagenes/svr/sv-filler-biotic.webp",
    brand: "svr",
    line: "sv-biotic",
    n: ["ojos", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Arrugas y líneas de deshidratación en ojos y labios; patas de gallo.",
      tipo: "Contorno de ojos y labios con ácido hialurónico.",
      necesidad: "Rellena los signos de expresión.",
      cuando: "Mañana y noche.",
      modo: "Aplicar sobre la piel limpia con un ligero masaje hacia fuera. Admite maquillaje."
    }
  },

  /* ---------- SVR · [A] [B3] [C] ---------- */
  {
    id: "sv-a-ampoule-lift-2",
    name: "[A] Ampoule Lift",
    img: "imagenes/svr/sv-a-ampoule-lift-2.webp",
    brand: "svr",
    line: "sv-ab3c",
    n: ["arrugas", "poros", "manchas"],
    sk: ["todas"],
    d: {
      paciente: "Piel con textura irregular, arrugas, poros dilatados, marcas y manchas.",
      tipo: "Ampolla de noche con retinol.",
      necesidad: "Textura, arrugas y marcas.",
      cuando: "Por la noche: empezar cada 3 días, luego cada 2 y después a diario si se tolera.",
      modo: "Aplicar 2-3 gotas antes del tratamiento diario, evitando los ojos."
    }
  },

  {
    id: "sv-b3-ampoule-hydra",
    name: "[B3] Ampoule Hydra",
    img: "imagenes/svr/sv-b3-ampoule-hydra.webp",
    brand: "svr",
    line: "sv-ab3c",
    n: ["deshidratacion", "rojeces"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Pieles deshidratadas, sensibles, normales a secas, con primeras arrugas o marcadas.",
      tipo: "Sérum con niacinamida y ácido hialurónico.",
      necesidad: "Tirantez, enrojecimiento y elasticidad.",
      cuando: "Mañana y noche.",
      modo: "Aplicar sobre la piel limpia y seca antes del tratamiento.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-c-ampoule-anti-ox",
    name: "[C] Ampoule Anti-Ox",
    img: "imagenes/svr/sv-c-ampoule-anti-ox.webp",
    brand: "svr",
    line: "sv-ab3c",
    n: ["apagada", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Piel sin luminosidad, con tez apagada y fatiga; primeras arrugas o marcadas.",
      tipo: "Sérum con alta concentración de vitamina C.",
      necesidad: "Luminosidad y unificación.",
      cuando: "Mañana y noche.",
      modo: "Aplicar 2-3 gotas sobre la piel limpia y seca antes del tratamiento.",
      nota: "No combinar directamente con otro producto de vitamina C muy concentrada. Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-b3-essence-hydra",
    name: "[B3] Essence Hydra",
    img: "imagenes/svr/sv-b3-essence-hydra.webp",
    brand: "svr",
    line: "sv-ab3c",
    n: ["deshidratacion", "rojeces"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible y deshidratada, con molestias, tirantez y arrugas.",
      tipo: "Esencia con niacinamida.",
      necesidad: "Hidrata y calma.",
      cuando: "Mañana y noche.",
      modo: "Aplicar con algodón o con la palma sobre la piel limpia, antes del sérum.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-b3-masque-hydra-intensif",
    name: "[B3] Masque Hydra Intensif",
    img: "imagenes/svr/sv-b3-masque-hydra-intensif.webp",
    brand: "svr",
    line: "sv-ab3c",
    n: ["deshidratacion"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible, deshidratada, con líneas de deshidratación.",
      tipo: "Mascarilla de biocelulosa.",
      necesidad: "Frescor e hidratación.",
      cuando: "1 o 2 veces por semana.",
      modo: "Colocar sobre la piel limpia 15 minutos y retirar. Masajear el exceso. No aclarar."
    }
  },

  {
    id: "sv-ampoule-refresh",
    name: "Ampoule Refresh",
    img: "imagenes/svr/sv-ampoule-refresh.webp",
    brand: "svr",
    line: "sv-ab3c",
    n: ["ojos"],
    sk: ["todas"],
    d: {
      paciente: "Contornos de ojos, incluso sensibles, con ojeras, bolsas y arrugas. Apta para lentillas.",
      tipo: "Sérum de contorno de día con punta metálica.",
      necesidad: "Ojeras, bolsas y arrugas.",
      cuando: "Por la mañana.",
      modo: "Aplicar una pequeña cantidad y masajear con la punta metálica. No aplicar en los ojos.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-ampoule-relax",
    name: "Ampoule Relax",
    img: "imagenes/svr/sv-ampoule-relax.webp",
    brand: "svr",
    line: "sv-ab3c",
    n: ["ojos", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Contorno de ojos desde los primeros signos, incluso sensible. Apta para lentillas.",
      tipo: "Sérum de contorno de noche.",
      necesidad: "Ojeras, arrugas y deshidratación.",
      cuando: "Por la noche.",
      modo: "Aplicar sobre la piel limpia y seca y masajear con la punta. No aplicar en los ojos.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  /* ---------- SVR · Clairial ---------- */
  {
    id: "sv-novedad-clairial-ampoule",
    name: "CLAIRIAL Ampoule",
    img: "imagenes/svr/sv-novedad-clairial-ampoule.webp",
    brand: "svr",
    line: "sv-clairial",
    n: ["manchas"],
    sk: ["sensible"],
    d: {
      paciente: "Manchas por sol, edad o embarazo y tono desigual, en pieles sensibles claras a oscuras. Adultos.",
      tipo: "Ampolla antimanchas.",
      necesidad: "Manchas y tono desigual.",
      cuando: "Mañana y noche.",
      modo: "Aplicar en rostro, escote y manos antes del tratamiento diario, evitando los ojos."
    }
  },

  {
    id: "sv-clairial-day",
    name: "CLAIRIAL Day",
    img: "imagenes/svr/sv-clairial-day.webp",
    brand: "svr",
    line: "sv-clairial",
    n: ["manchas", "fotoproteccion"],
    sk: ["sensible"],
    d: {
      paciente: "Pieles sensibles con manchas por edad, sol o embarazo. Adultos.",
      tipo: "Cuidado de día antimanchas con SPF 30.",
      necesidad: "Reduce manchas y unifica la tez.",
      cuando: "Por la mañana, después de Clairial Ampoule.",
      modo: "Agitar y aplicar en cara, cuello y escote. No usar sobre piel dañada.",
      solar: "Si hay exposición al sol, usar una crema solar adecuada."
    }
  },

  {
    id: "sv-clairial-creme-spf50-nueva-formula",
    name: "CLAIRIAL Crème SPF50+",
    img: "imagenes/svr/sv-clairial-creme-spf50-nueva-formula.webp",
    brand: "svr",
    line: "sv-clairial",
    n: ["manchas", "fotoproteccion"],
    sk: ["sensible"],
    d: {
      paciente: "Pieles sensibles con manchas por sol, edad o embarazo. Adultos.",
      tipo: "Crema antimanchas SPF 50+.",
      necesidad: "Manchas y protección solar.",
      cuando: "Por la mañana. Reaplicar con frecuencia.",
      modo: "Aplicar en rostro, escote y manos.",
      solar: "SVR aconseja SPF 50+ en periodos de exposición y Clairial Day el resto del tiempo."
    }
  },

  {
    id: "sv-clairial-night-peel",
    name: "CLAIRIAL Night Peel",
    img: "imagenes/svr/sv-clairial-night-peel.webp",
    brand: "svr",
    line: "sv-clairial",
    n: ["manchas"],
    sk: ["sensible"],
    d: {
      paciente: "Pieles sensibles con manchas por edad, sol o embarazo. Adultos.",
      tipo: "Peeling de noche con aplicador de pincel.",
      necesidad: "Corrección suave de manchas.",
      limpieza: "Exfoliante",
      limpiezaDet: "Peeling de noche sin aclarado.",
      cuando: "Por la noche.",
      modo: "Girar el pincel y aplicar una pasada fina, evitando los ojos. Si hay molestias, espaciar las aplicaciones."
    }
  },

  /* ---------- SVR · Hydraliane ---------- */
  {
    id: "sv-hydraliane-creme-legere",
    name: "HYDRALIANE Légère",
    img: "imagenes/svr/sv-hydraliane-creme-legere.webp",
    brand: "svr",
    line: "sv-hydraliane",
    n: ["deshidratacion"],
    sk: ["mixta", "sensible"],
    d: {
      paciente: "Piel deshidratada, irritada y con tirantez; sensible a mixta.",
      tipo: "Crema hidratante ligera, no comedogénica.",
      necesidad: "Deshidratación y tirantez.",
      cuando: "Mañana y/o noche.",
      modo: "Sobre la piel limpia y seca. Buena base de maquillaje."
    }
  },

  {
    id: "sv-hydraliane-creme",
    name: "HYDRALIANE Crème",
    img: "imagenes/svr/sv-hydraliane-creme.webp",
    brand: "svr",
    line: "sv-hydraliane",
    n: ["deshidratacion"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Piel normal a seca, deshidratada y con tirantez; apta para sensible.",
      tipo: "Crema hidratante, no comedogénica.",
      necesidad: "Deshidratación y tirantez.",
      cuando: "Mañana y/o noche.",
      modo: "Sobre la piel limpia y seca. Buena base de maquillaje."
    }
  },

  {
    id: "sv-hydraliane-creme-riche",
    name: "HYDRALIANE Riche",
    img: "imagenes/svr/sv-hydraliane-creme-riche.webp",
    brand: "svr",
    line: "sv-hydraliane",
    n: ["deshidratacion", "seca"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Piel seca a muy seca, deshidratada y con tirantez; apta para sensible.",
      tipo: "Crema hidratante rica, no comedogénica.",
      necesidad: "Deshidratación y sequedad.",
      cuando: "Mañana y/o noche.",
      modo: "Sobre la piel limpia y seca. Buena base de maquillaje."
    }
  },

  /* ---------- SVR · Physiopure ---------- */
  {
    id: "sv-physiopure-huile-demaquillante",
    name: "PHYSIOPURE Huile Démaquillante",
    img: "imagenes/svr/sv-physiopure-huile-demaquillante.webp",
    brand: "svr",
    line: "sv-physiopure",
    n: ["limpieza"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluso la más sensible.",
      tipo: "Aceite desmaquillante de cara, ojos y labios.",
      necesidad: "Desmaquilla de forma eficaz.",
      limpieza: "Desmaquillante (sin paso indicado)",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "Por la noche.",
      modo: "Masajear insistiendo en las zonas maquilladas, aclarar bien y secar sin frotar."
    }
  },

  {
    id: "sv-physiopure-eau-micellaire",
    name: "PHYSIOPURE Eau Micellaire",
    img: "imagenes/svr/sv-physiopure-eau-micellaire.webp",
    brand: "svr",
    line: "sv-physiopure",
    n: ["limpieza"],
    sk: ["sensible"],
    d: {
      paciente: "Todo tipo de piel sensible.",
      tipo: "Agua micelar oxigenante.",
      necesidad: "Limpia y desmaquilla la cara.",
      limpieza: "Desmaquillante (sin paso indicado)",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "Mañana y/o noche.",
      modo: "Aplicar con un algodón. No requiere aclarado."
    }
  },

  {
    id: "sv-physiopure-gelee-moussante-23",
    name: "PHYSIOPURE Gel Moussant",
    img: "imagenes/svr/sv-physiopure-gelee-moussante-23.webp",
    brand: "svr",
    line: "sv-physiopure",
    n: ["limpieza"],
    sk: ["sensible"],
    d: {
      paciente: "Todo tipo de piel sensible.",
      tipo: "Gel espumoso de pH fisiológico.",
      necesidad: "Purifica y limpia la cara.",
      limpieza: "Limpiador (sin paso indicado)",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "Mañana y/o noche.",
      modo: "Aplicar en la cara mojada, aclarar bien y secar sin frotar."
    }
  },

  {
    id: "sv-physiopure-tonique",
    name: "PHYSIOPURE Tonique",
    img: "imagenes/svr/sv-physiopure-tonique.webp",
    brand: "svr",
    line: "sv-physiopure",
    n: ["limpieza"],
    sk: ["sensible"],
    d: {
      paciente: "Todo tipo de piel sensible.",
      tipo: "Tónico oxigenante sin aclarado.",
      necesidad: "Último paso de la rutina de limpieza.",
      limpieza: "Rutina de limpieza · último paso",
      limpiezaDet: "SVR lo presenta como último paso de la limpieza.",
      cuando: "Mañana y/o noche.",
      modo: "Aplicar con un algodón, solo o después de la limpieza. No aclarar."
    }
  },

  /* ---------- SVR · Spirial ---------- */
  {
    id: "sv-spirial-roll-on-2",
    name: "SPIRIAL Roll-On",
    img: "imagenes/svr/sv-spirial-roll-on-2.webp",
    brand: "svr",
    line: "sv-spirial",
    n: [],
    sk: ["sensible"],
    d: {
      paciente: "Axilas con transpiración normal a excesiva; piel sensible. Desde 10 años.",
      tipo: "Desodorante roll-on regulador.",
      necesidad: "Regula la transpiración.",
      cuando: "A diario.",
      modo: "Aplicar sobre la piel limpia y seca.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-spirial-roll-on-vegetal",
    name: "SPIRIAL Roll-On Végétal",
    img: "imagenes/svr/sv-spirial-roll-on-vegetal.webp",
    brand: "svr",
    line: "sv-spirial",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Transpiración ligera a moderada; incluso piel muy sensible. Desde 10 años.",
      tipo: "Desodorante roll-on sin sales de aluminio.",
      necesidad: "Regula la transpiración leve.",
      cuando: "A diario.",
      modo: "Aplicar sobre la piel limpia y seca."
    }
  },

  {
    id: "sv-spirial-spray-vegetal-1",
    name: "SPIRIAL Spray Végétal",
    img: "imagenes/svr/sv-spirial-spray-vegetal-1.webp",
    brand: "svr",
    line: "sv-spirial",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Transpiración normal en manos, pies o axilas; pieles sensibles, afeitadas o depiladas. Desde 10 años.",
      tipo: "Desodorante en spray sin aluminio.",
      necesidad: "Antihumedad y antiolor.",
      cuando: "A diario.",
      modo: "Aplicar sobre la piel limpia y seca.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-spirial-spray-anti-transpirant",
    name: "SPIRIAL Spray Anti-Transpirant",
    img: "imagenes/svr/sv-spirial-spray-anti-transpirant.webp",
    brand: "svr",
    line: "sv-spirial",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Sudoración normal a excesiva en manos, pies o axilas. Desde 10 años.",
      tipo: "Antitranspirante en spray 48 horas.",
      necesidad: "Regula la sudoración.",
      cuando: "A diario.",
      modo: "Aplicar sobre la piel limpia y seca.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-copie-de-spirial-creme",
    name: "SPIRIAL Déo-Crème",
    img: "imagenes/svr/sv-copie-de-spirial-creme.webp",
    brand: "svr",
    line: "sv-spirial",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Transpiración normal a excesiva en manos, pies, axilas, pliegues o cara. Desde 3 años, en niños bajo supervisión médica.",
      tipo: "Crema antitranspirante para todo el cuerpo.",
      necesidad: "Regula la sudoración.",
      cuando: "A diario.",
      modo: "Aplicar en las zonas propensas a la transpiración.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  {
    id: "sv-spirial-extreme",
    name: "SPIRIAL Extrême",
    img: "imagenes/svr/sv-spirial-extreme.webp",
    brand: "svr",
    line: "sv-spirial",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Sudoración excesiva o extrema, incluso en piel sensible. Desde 12 años, por consejo médico en adolescentes.",
      tipo: "Antitranspirante intensivo.",
      necesidad: "Sudoración excesiva.",
      cuando: "3 días seguidos al inicio; luego 2 o 3 veces por semana.",
      modo: "Aplicar 1 o 2 veces sobre la zona limpia y seca, por la mañana o la noche. Esperar antes de vestirse."
    }
  },

  {
    id: "sv-spirial-deo-douche-1",
    name: "SPIRIAL Déo-Douche",
    img: "imagenes/svr/sv-spirial-deo-douche-1.webp",
    brand: "svr",
    line: "sv-spirial",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel, incluso sensible. Desde 10 años.",
      tipo: "Gel de ducha 2 en 1 con acción desodorante.",
      necesidad: "Limpieza de cuerpo, cara, cabello e higiene íntima.",
      cuando: "SVR no indica la frecuencia.",
      modo: "Aplicar sobre la piel húmeda, hacer espuma y aclarar.",
      nota: "Apto en embarazo y lactancia, según SVR."
    }
  },

  /* ---------- Nuxe · Huile Prodigieuse® ---------- */
  {
    id: "nx-prodigious-oil-3",
    name: "Huile Prodigieuse®",
    img: "imagenes/nuxe/nx-prodigious-oil-3.webp",
    brand: "nuxe",
    line: "nx-hp",
    n: ["seca", "corporal"],
    sk: ["todas"],
    d: {
      paciente: "Todos los tipos y tonos de piel.",
      tipo: "Aceite seco con 7 aceites vegetales para rostro, cuerpo y cabello.",
      necesidad: "Nutre, repara y aporta brillo satinado.",
      cuando: "Todo el año.",
      modo: "Rostro: 1 spray solo o unas gotas con la crema. Cuerpo y cabello: vaporizar y masajear."
    }
  },

  {
    id: "nx-prodigious-oil-o-50-ml",
    name: "Huile Prodigieuse® Or",
    img: "imagenes/nuxe/nx-prodigious-oil-o-50-ml.webp",
    brand: "nuxe",
    line: "nx-hp",
    n: ["apagada", "corporal"],
    sk: ["todas"],
    d: {
      paciente: "Todos los tipos y tonos de piel.",
      tipo: "Aceite seco con nácares dorados.",
      necesidad: "Hidrata, satina e ilumina rostro, cuerpo y cabello.",
      cuando: "Todo el año.",
      modo: "Agitar. En el rostro, aplicar a toques en los puntos de luz. Vaporizar en cuerpo y cabello."
    }
  },

  {
    id: "nx-huile-prodigieuse-r-florale-30ml",
    name: "Huile Prodigieuse® Florale",
    img: "imagenes/nuxe/nx-huile-prodigieuse-r-florale-30ml.webp",
    brand: "nuxe",
    line: "nx-hp",
    n: ["seca", "corporal"],
    sk: ["todas"],
    d: {
      paciente: "Todos los tipos de piel.",
      tipo: "Aceite seco de fragancia floral.",
      necesidad: "Nutre, repara y sublima rostro, cuerpo y cabello.",
      cuando: "Todo el año.",
      modo: "Rostro: 1 spray solo o unas gotas con la crema. Cuerpo y cabello: vaporizar y masajear."
    }
  },

  {
    id: "nx-floral-o-floral-o",
    name: "Huile Prodigieuse® Or Florale",
    img: "imagenes/nuxe/nx-floral-o-floral-o.webp",
    brand: "nuxe",
    line: "nx-hp",
    n: ["apagada", "corporal"],
    sk: ["todas"],
    d: {
      paciente: "Todos los tipos de piel.",
      tipo: "Aceite seco con nácares y fragancia floral.",
      necesidad: "Hidrata, satina e ilumina.",
      cuando: "Todo el año.",
      modo: "Agitar. En el rostro, aplicar a toques en los puntos de luz. Vaporizar en cuerpo y cabello."
    }
  },

  {
    id: "nx-huile-prodigieuse-neroli",
    name: "Huile Prodigieuse® Néroli",
    img: "imagenes/nuxe/nx-huile-prodigieuse-neroli.webp",
    brand: "nuxe",
    line: "nx-hp",
    n: ["seca", "corporal"],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un tipo de piel concreto.",
      tipo: "Aceite seco con ciruela y sésamo bio.",
      necesidad: "Nutre, repara y aporta brillo satinado.",
      cuando: "Todo el año.",
      modo: "Rostro: 1 spray solo o unas gotas con la crema. Cuerpo y cabello: vaporizar y masajear."
    }
  },

  {
    id: "nx-huile-prodigieuse-riche",
    name: "Huile Prodigieuse® Riche",
    img: "imagenes/nuxe/nx-huile-prodigieuse-riche.webp",
    brand: "nuxe",
    line: "nx-hp",
    n: ["seca", "corporal"],
    sk: ["seca"],
    d: {
      paciente: "Piel seca a muy seca.",
      tipo: "Aceite seco enriquecido.",
      necesidad: "Nutre intensamente y sublima.",
      cuando: "Todo el año en piel muy seca, o en invierno.",
      modo: "Rostro: 1 spray solo o unas gotas con la crema. Cuerpo y cabello: vaporizar y masajear."
    }
  },

  /* ---------- Nuxe · Prodigieux® cuerpo y fragancia ---------- */
  {
    id: "nx-prodigieux-leche-corporal-sublimadora-perfumada-400ml",
    name: "Prodigieux® Leche Corporal Sublimadora",
    img: "imagenes/nuxe/nx-prodigieux-leche-corporal-sublimadora-perfumada-400ml.webp",
    brand: "nuxe",
    line: "nx-prodigieux",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un tipo de piel concreto.",
      tipo: "Leche corporal perfumada.",
      necesidad: "Hidrata y sublima el cuerpo.",
      cuando: "A diario.",
      modo: "Aplicar 6 dosis para todo el cuerpo con movimientos ascendentes."
    }
  },

  {
    id: "nx-nuxe-huile-douche-prodigieuse-100-ml",
    name: "Prodigieux® Huile de Douche",
    img: "imagenes/nuxe/nx-nuxe-huile-douche-prodigieuse-100-ml.webp",
    brand: "nuxe",
    line: "nx-prodigieux",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un tipo de piel concreto.",
      tipo: "Aceite de ducha perfumado.",
      necesidad: "Limpieza corporal.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Nuxe no detalla cómo aplicarlo."
    }
  },

  {
    id: "nx-prodigieux-floral-gel-de-ducha-perfumado",
    name: "Prodigieux® Floral Gel de Ducha",
    img: "imagenes/nuxe/nx-prodigieux-floral-gel-de-ducha-perfumado.webp",
    brand: "nuxe",
    line: "nx-prodigieux",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un tipo de piel concreto.",
      tipo: "Gel de ducha perfumado con almendra dulce.",
      necesidad: "Limpia con delicadeza.",
      cuando: "Mañana y/o noche.",
      modo: "Masajear sobre la piel mojada y aclarar."
    }
  },

  {
    id: "nx-prodigieux-polvos-bronceadores-multifuncion",
    name: "Prodigieux® Polvos Bronceadores",
    img: "imagenes/nuxe/nx-prodigieux-polvos-bronceadores-multifuncion.webp",
    brand: "nuxe",
    line: "nx-prodigieux",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un tipo de piel concreto.",
      tipo: "Polvos bronceadores multifunción.",
      necesidad: "Tono bronceado todo el año.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Aplicar con una brocha grande en rostro o cuerpo."
    }
  },

  {
    id: "nx-prodigieux-florale-polvos-iluminadores-multifuncion",
    name: "Prodigieux® Florale Polvos Iluminadores",
    img: "imagenes/nuxe/nx-prodigieux-florale-polvos-iluminadores-multifuncion.webp",
    brand: "nuxe",
    line: "nx-prodigieux",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un tipo de piel concreto.",
      tipo: "Polvos iluminadores multifunción.",
      necesidad: "Luminosidad natural.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Aplicar con los dedos o brocha en pómulos, nariz y escote."
    }
  },

  {
    id: "nx-prodigieux-the-perfume-3",
    name: "Prodigieux® Le Parfum",
    img: "imagenes/nuxe/nx-prodigieux-the-perfume-3.webp",
    brand: "nuxe",
    line: "nx-prodigieux",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Sin perfil de piel: es una fragancia.",
      tipo: "Eau de parfum.",
      necesidad: "Fragancia.",
      cuando: "Tantas veces como sea necesario.",
      modo: "Vaporizar a unos centímetros de la piel, en cuello y muñecas, o sobre el cepillo."
    }
  },

  {
    id: "nx-prodigieux-floral-le-parfum-30ml-fragancia",
    name: "Prodigieux® Floral Le Parfum",
    img: "imagenes/nuxe/nx-prodigieux-floral-le-parfum-30ml-fragancia.webp",
    brand: "nuxe",
    line: "nx-prodigieux",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Sin perfil de piel: es una fragancia.",
      tipo: "Eau de parfum floral.",
      necesidad: "Fragancia.",
      cuando: "Tantas veces como sea necesario.",
      modo: "Vaporizar a unos centímetros de la piel, en cuello y muñecas, o sobre el cepillo."
    }
  },

  {
    id: "nx-sensual-era-bruma-perfumada-cuerpo-y-cabello",
    name: "Sensual Era Bruma Perfumada",
    img: "imagenes/nuxe/nx-sensual-era-bruma-perfumada-cuerpo-y-cabello.webp",
    brand: "nuxe",
    line: "nx-prodigieux",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Sin perfil de piel: es una fragancia.",
      tipo: "Bruma para cuerpo y cabello.",
      necesidad: "Fragancia.",
      cuando: "En cualquier momento.",
      modo: "Vaporizar sobre cuerpo y cabello, o sobre el cepillo. No aplicar en las axilas."
    }
  },

  {
    id: "nx-sensual-era-gold-bruma-perfumada-cuerpo-y-cabello",
    name: "Sensual Era Gold Bruma Perfumada",
    img: "imagenes/nuxe/nx-sensual-era-gold-bruma-perfumada-cuerpo-y-cabello.webp",
    brand: "nuxe",
    line: "nx-prodigieux",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Sin perfil de piel: es una fragancia.",
      tipo: "Bruma con resplandor irisado.",
      necesidad: "Fragancia.",
      cuando: "En cualquier momento.",
      modo: "Vaporizar sobre cuerpo y cabello, o sobre el cepillo. No aplicar en las axilas."
    }
  },

  {
    id: "nx-sunset-bliss-bruma-perfumada-cuerpo-y-cabello",
    name: "Sunset Bliss Bruma Perfumada",
    img: "imagenes/nuxe/nx-sunset-bliss-bruma-perfumada-cuerpo-y-cabello.webp",
    brand: "nuxe",
    line: "nx-prodigieux",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Sin perfil de piel: es una fragancia.",
      tipo: "Bruma para cuerpo y cabello.",
      necesidad: "Fragancia.",
      cuando: "En cualquier momento.",
      modo: "Vaporizar sobre cuerpo y cabello, o sobre el cepillo. No aplicar en las axilas."
    }
  },

  {
    id: "nx-happy-in-pink-bruma-perfumada-cuerpo-y-cabello",
    name: "Happy In Pink Bruma Perfumada",
    img: "imagenes/nuxe/nx-happy-in-pink-bruma-perfumada-cuerpo-y-cabello.webp",
    brand: "nuxe",
    line: "nx-prodigieux",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Sin perfil de piel: es una fragancia.",
      tipo: "Bruma para cuerpo y cabello.",
      necesidad: "Fragancia.",
      cuando: "En cualquier momento.",
      modo: "Vaporizar sobre cuerpo y cabello, o sobre el cepillo. No aplicar en las axilas."
    }
  },

  /* ---------- Nuxe · Rêve de Miel ---------- */
  {
    id: "nx-balsamo-rostro-ultra-reconfortante",
    name: "Rêve de Miel Bálsamo Rostro Ultra Reconfortante",
    img: "imagenes/nuxe/nx-balsamo-rostro-ultra-reconfortante.webp",
    brand: "nuxe",
    line: "nx-miel",
    n: ["seca"],
    sk: ["seca"],
    d: {
      paciente: "Piel seca.",
      tipo: "Bálsamo facial con miel francesa.",
      necesidad: "Nutre intensamente y reconforta.",
      cuando: "Nuxe no indica la frecuencia; por la mañana termina con toques.",
      modo: "Calentar entre las manos y aplicar del centro hacia fuera en rostro, cuello y escote, evitando el contorno de ojos."
    }
  },

  {
    id: "nx-gel-limpiador-nutritivo-para-rostro-y-cuerpo-400ml",
    name: "Rêve de Miel Gel Limpiador Nutritivo",
    img: "imagenes/nuxe/nx-gel-limpiador-nutritivo-para-rostro-y-cuerpo-400ml.webp",
    brand: "nuxe",
    line: "nx-miel",
    n: ["limpieza", "corporal", "seca"],
    sk: ["seca"],
    d: {
      paciente: "Piel seca.",
      tipo: "Gel limpiador con miel para rostro y cuerpo.",
      necesidad: "Limpieza suave y calmante.",
      limpieza: "Limpiador (sin paso indicado)",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "A diario, mañana y/o noche.",
      modo: "Masajear sobre la piel húmeda y aclarar. Evitar el contorno de ojos."
    }
  },

  {
    id: "nx-gel-limpiador-y-desmaquillante-facial-1",
    name: "Rêve de Miel Gel Limpiador y Desmaquillante",
    img: "imagenes/nuxe/nx-gel-limpiador-y-desmaquillante-facial-1.webp",
    brand: "nuxe",
    line: "nx-miel",
    n: ["limpieza"],
    sk: ["seca"],
    d: {
      paciente: "Piel seca.",
      tipo: "Gel limpiador y desmaquillante facial.",
      necesidad: "Retira impurezas con delicadeza.",
      limpieza: "Limpiador (sin paso indicado)",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "Mañana y/o noche.",
      modo: "Masajear sobre el rostro húmedo, evitando los ojos, y aclarar."
    }
  },

  {
    id: "nx-crema-corporal-nutritiva-ultra-reconfortante-i-48h",
    name: "Rêve de Miel Crema Corporal Nutritiva 48h",
    img: "imagenes/nuxe/nx-crema-corporal-nutritiva-ultra-reconfortante-i-48h.webp",
    brand: "nuxe",
    line: "nx-miel",
    n: ["corporal", "seca"],
    sk: ["seca"],
    d: {
      paciente: "Piel seca.",
      tipo: "Crema corporal con miel.",
      necesidad: "Nutre e hidrata 48 horas.",
      cuando: "A diario.",
      modo: "Aplicar 6 dosis para todo el cuerpo con movimientos ascendentes."
    }
  },

  {
    id: "nx-crema-nutritiva-y-reparadora-de-manos-y-unas",
    name: "Rêve de Miel Crema de Manos y Uñas",
    img: "imagenes/nuxe/nx-crema-nutritiva-y-reparadora-de-manos-y-unas.webp",
    brand: "nuxe",
    line: "nx-miel",
    n: ["corporal"],
    sk: ["seca"],
    d: {
      paciente: "Manos secas.",
      tipo: "Crema de manos con miel.",
      necesidad: "Nutre y repara.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Aplicar en el dorso, frotar y masajear los dedos."
    }
  },

  {
    id: "nx-exfoliante-corporal-goloso-nutritivo-reve-de-miel",
    name: "Rêve de Miel Exfoliante Corporal",
    img: "imagenes/nuxe/nx-exfoliante-corporal-goloso-nutritivo-reve-de-miel.webp",
    brand: "nuxe",
    line: "nx-miel",
    n: ["corporal"],
    sk: ["seca"],
    d: {
      paciente: "Piel seca.",
      tipo: "Exfoliante 2 en 1 con miel, azúcar y aceites.",
      necesidad: "Elimina células muertas y nutre.",
      limpieza: "Exfoliante corporal",
      limpiezaDet: "Se aplica después de la limpieza.",
      cuando: "1 o 2 veces por semana.",
      modo: "Masajear en círculos sobre la piel húmeda tras la limpieza y aclarar."
    }
  },

  {
    id: "nx-b-lsamo-labial-con-miel",
    name: "Rêve de Miel Bálsamo Labial",
    img: "imagenes/nuxe/nx-b-lsamo-labial-con-miel.webp",
    brand: "nuxe",
    line: "nx-miel",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Labios muy secos y dañados.",
      tipo: "Bálsamo labial con miel y própolis.",
      necesidad: "Repara y suaviza los labios.",
      cuando: "Tantas veces como sea necesario.",
      modo: "Aplicar con el dedo en labios y contorno. También como mascarilla de noche."
    }
  },

  {
    id: "nx-tratamiento-labial-con-miel",
    name: "Rêve de Miel Tratamiento Labial",
    img: "imagenes/nuxe/nx-tratamiento-labial-con-miel.webp",
    brand: "nuxe",
    line: "nx-miel",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un perfil concreto.",
      tipo: "Aceite labial brillante con miel.",
      necesidad: "Brillo y confort de los labios.",
      cuando: "Tantas veces como sea necesario.",
      modo: "Aplicar con el aplicador."
    }
  },

  {
    id: "nx-tratamiento-labial-con-miel-gold",
    name: "Rêve de Miel Tratamiento Labial Gold",
    img: "imagenes/nuxe/nx-tratamiento-labial-con-miel-gold.webp",
    brand: "nuxe",
    line: "nx-miel",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un perfil concreto.",
      tipo: "Aceite labial con nácares dorados.",
      necesidad: "Brillo y confort de los labios.",
      cuando: "Tantas veces como sea necesario.",
      modo: "Aplicar con el aplicador."
    }
  },

  {
    id: "nx-agua-exquisita-perfumada",
    name: "Rêve de Miel Agua Exquisita Perfumada",
    img: "imagenes/nuxe/nx-agua-exquisita-perfumada.webp",
    brand: "nuxe",
    line: "nx-miel",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Sin perfil de piel: es una fragancia.",
      tipo: "Agua perfumada golosa.",
      necesidad: "Fragancia.",
      cuando: "Tantas veces como sea necesario.",
      modo: "Vaporizar a unos centímetros de la piel, en cuello y muñecas, o sobre el cepillo."
    }
  },

  {
    id: "nx-stick-labios-hidratante",
    name: "Stick Labios Hidratante",
    img: "imagenes/nuxe/nx-stick-labios-hidratante.webp",
    brand: "nuxe",
    line: "nx-miel",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Labios secos.",
      tipo: "Stick labial.",
      necesidad: "Calma, suaviza y protege.",
      cuando: "Tantas veces como sea necesario.",
      modo: "Aplicar en labios y contorno."
    }
  },

  /* ---------- Nuxe · Rêve de Thé ---------- */
  {
    id: "nx-gel-de-ducha-revitalizante-750ml",
    name: "Rêve de Thé Gel de Ducha Revitalizante",
    img: "imagenes/nuxe/nx-gel-de-ducha-revitalizante-750ml.webp",
    brand: "nuxe",
    line: "nx-the",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un tipo de piel concreto.",
      tipo: "Gel de ducha de base vegetal.",
      necesidad: "Limpia con delicadeza.",
      cuando: "Mañana y/o noche.",
      modo: "Masajear sobre la piel húmeda y aclarar."
    }
  },

  {
    id: "nx-desodorante-frescor-24-h-reve-de-th-50-ml",
    name: "Rêve de Thé Desodorante Frescor 24 h",
    img: "imagenes/nuxe/nx-desodorante-frescor-24-h-reve-de-th-50-ml.webp",
    brand: "nuxe",
    line: "nx-the",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un tipo de piel concreto.",
      tipo: "Desodorante fluido.",
      necesidad: "Protección 24 horas sin marcas.",
      cuando: "Por la mañana; reaplicar si es necesario.",
      modo: "Aplicar sobre la piel limpia y seca."
    }
  },

  {
    id: "nx-agua-exaltante-perfumada-100ml",
    name: "Rêve de Thé Agua Exaltante Perfumada",
    img: "imagenes/nuxe/nx-agua-exaltante-perfumada-100ml.webp",
    brand: "nuxe",
    line: "nx-the",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Sin perfil de piel: es una fragancia.",
      tipo: "Agua perfumada revitalizante.",
      necesidad: "Fragancia.",
      cuando: "Tantas veces como sea necesario.",
      modo: "Vaporizar a unos centímetros de la piel, en cuello y muñecas, o sobre el cepillo."
    }
  },

  /* ---------- Nuxe · Very Rose ---------- */
  {
    id: "nx-agua-micelar-desmaquillante-calmante-750ml",
    name: "Very Rose Agua Micelar Calmante",
    img: "imagenes/nuxe/nx-agua-micelar-desmaquillante-calmante-750ml.webp",
    brand: "nuxe",
    line: "nx-rose",
    n: ["limpieza"],
    sk: ["todas"],
    d: {
      paciente: "Todos los tipos de piel.",
      tipo: "Agua micelar con extracto de rosa.",
      necesidad: "Desmaquilla y limpia rostro y ojos.",
      limpieza: "Desmaquillante (sin paso indicado)",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "Por la noche como desmaquillante; también por la mañana.",
      modo: "Aplicar con un algodón hasta que quede limpio. No aclarar."
    }
  },

  {
    id: "nx-aceite-delicado-desmaquillante-150ml",
    name: "Very Rose Aceite Delicado Desmaquillante",
    img: "imagenes/nuxe/nx-aceite-delicado-desmaquillante-150ml.webp",
    brand: "nuxe",
    line: "nx-rose",
    n: ["limpieza"],
    sk: ["todas"],
    d: {
      paciente: "Todos los tipos de piel, incluso sensible.",
      tipo: "Aceite desmaquillante para rostro, ojos y labios.",
      necesidad: "Elimina maquillaje persistente y waterproof.",
      limpieza: "Desmaquillante (sin paso indicado)",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Calentar 2-3 dosis y masajear sobre la piel seca. Aclarar con agua."
    }
  },

  {
    id: "nx-leche-desmaquillante-rica-1",
    name: "Very Rose Leche Desmaquillante Rica",
    img: "imagenes/nuxe/nx-leche-desmaquillante-rica-1.webp",
    brand: "nuxe",
    line: "nx-rose",
    n: ["limpieza"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de pieles.",
      tipo: "Leche desmaquillante.",
      necesidad: "Desmaquilla, hidrata y calma.",
      limpieza: "Desmaquillante (sin paso indicado)",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Masajear sobre la piel seca y aclarar con agua."
    }
  },

  {
    id: "nx-desmaquillante-waterproof-ojos-y-labios-bifasico",
    name: "Very Rose Desmaquillante Bifásico Ojos y Labios",
    img: "imagenes/nuxe/nx-desmaquillante-waterproof-ojos-y-labios-bifasico.webp",
    brand: "nuxe",
    line: "nx-rose",
    n: ["limpieza"],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un perfil concreto.",
      tipo: "Desmaquillante bifásico waterproof.",
      necesidad: "Elimina maquillaje muy resistente.",
      limpieza: "Desmaquillante de ojos y labios",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Agitar, impregnar un disco y masajear sobre párpados, pestañas y labios. Aclarar o dejar."
    }
  },

  {
    id: "nx-espuma-ligera-limpiadora-1",
    name: "Very Rose Espuma Ligera Limpiadora",
    img: "imagenes/nuxe/nx-espuma-ligera-limpiadora-1.webp",
    brand: "nuxe",
    line: "nx-rose",
    n: ["limpieza"],
    sk: ["todas"],
    d: {
      paciente: "Todos los tipos de piel, incluso sensible.",
      tipo: "Espuma limpiadora untuosa.",
      necesidad: "Limpia y calma sin sequedad.",
      limpieza: "Limpiador (sin paso indicado)",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "Mañana y noche.",
      modo: "Masajear 1-2 dosis sobre la piel húmeda, evitando los ojos, y aclarar."
    }
  },

  {
    id: "nx-gel-limpiador-calmante",
    name: "Very Rose Gel Limpiador Calmante",
    img: "imagenes/nuxe/nx-gel-limpiador-calmante.webp",
    brand: "nuxe",
    line: "nx-rose",
    n: ["limpieza"],
    sk: ["todas"],
    d: {
      paciente: "Todos los tipos de piel.",
      tipo: "Gel limpiador suave.",
      necesidad: "Limpia y calma.",
      limpieza: "Limpiador (sin paso indicado)",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "Mañana y noche.",
      modo: "Masajear sobre la piel húmeda en círculos, evitando los ojos, y aclarar."
    }
  },

  {
    id: "nx-locion-tonica-refrescante",
    name: "Very Rose Loción Tónica Refrescante",
    img: "imagenes/nuxe/nx-locion-tonica-refrescante.webp",
    brand: "nuxe",
    line: "nx-rose",
    n: ["limpieza"],
    sk: ["todas"],
    d: {
      paciente: "Todos los tipos de piel.",
      tipo: "Loción tónica.",
      necesidad: "Hidrata, calma y perfecciona el desmaquillado.",
      limpieza: "Tónico, después de la limpieza",
      limpiezaDet: "Perfecciona el desmaquillado.",
      cuando: "Mañana y noche, tras la limpieza.",
      modo: "Aplicar con un algodón en rostro y cuello, evitando los ojos."
    }
  },

  {
    id: "nx-exfoliante-facial-luminosidad",
    name: "Very Rose Exfoliante Facial Luminosidad",
    img: "imagenes/nuxe/nx-exfoliante-facial-luminosidad.webp",
    brand: "nuxe",
    line: "nx-rose",
    n: ["apagada", "limpieza"],
    sk: ["todas"],
    d: {
      paciente: "Todos los tipos de piel, incluso sensible.",
      tipo: "Exfoliante en crema con hueso de albaricoque.",
      necesidad: "Elimina impurezas sin tirantez.",
      limpieza: "Exfoliante",
      limpiezaDet: "Se aplica sobre la piel limpia.",
      cuando: "1 o 2 veces por semana.",
      modo: "Masajear sobre la piel limpia y húmeda, insistiendo en la zona T. Aclarar con agua tibia."
    }
  },

  {
    id: "nx-serum-de-labios-voluminizador",
    name: "Very Rose Sérum Voluminizador de Labios",
    img: "imagenes/nuxe/nx-serum-de-labios-voluminizador.webp",
    brand: "nuxe",
    line: "nx-rose",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un perfil concreto.",
      tipo: "Sérum de labios con ácido hialurónico.",
      necesidad: "Volumen instantáneo e hidratación 24 horas.",
      cuando: "Tantas veces como sea necesario.",
      modo: "Aplicar con el aplicador."
    }
  },

  {
    id: "nx-b-lsamo-hidratante-de-labios-con-rosa",
    name: "Very Rose Bálsamo de Labios",
    img: "imagenes/nuxe/nx-b-lsamo-hidratante-de-labios-con-rosa.webp",
    brand: "nuxe",
    line: "nx-rose",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Labios secos a muy secos.",
      tipo: "Bálsamo hidratante con rosa.",
      necesidad: "Suaviza e ilumina los labios.",
      cuando: "Tantas veces como sea necesario.",
      modo: "Aplicar en labios y contorno. También como mascarilla de noche."
    }
  },

  {
    id: "nx-crema-calmante-para-manos-y-unas",
    name: "Very Rose Crema de Manos y Uñas",
    img: "imagenes/nuxe/nx-crema-calmante-para-manos-y-unas.webp",
    brand: "nuxe",
    line: "nx-rose",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Todos los tipos de piel, incluso sensible.",
      tipo: "Crema calmante de manos.",
      necesidad: "Hidrata, calma y protege.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Aplicar en el dorso, frotar e insistir entre los dedos."
    }
  },

  {
    id: "nx-gel-de-ducha-calmante-750ml",
    name: "Very Rose Gel de Ducha Calmante",
    img: "imagenes/nuxe/nx-gel-de-ducha-calmante-750ml.webp",
    brand: "nuxe",
    line: "nx-rose",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Todos los tipos de piel, incluso sensible.",
      tipo: "Gel de ducha suave.",
      necesidad: "Limpia sin resecar.",
      cuando: "Mañana y/o noche.",
      modo: "Masajear sobre la piel mojada y aclarar."
    }
  },

  {
    id: "nx-desodorante-en-stick-cuerpo-completo-48h",
    name: "Very Rose Desodorante Stick 48H",
    img: "imagenes/nuxe/nx-desodorante-en-stick-cuerpo-completo-48h.webp",
    brand: "nuxe",
    line: "nx-rose",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un perfil concreto.",
      tipo: "Desodorante en stick para todo el cuerpo.",
      necesidad: "Sin marcas y antifricción.",
      cuando: "Al menos una vez al día; reaplicar si es necesario.",
      modo: "Aplicar sobre la piel limpia y seca en axilas, espalda, muslos, pecho o pliegues."
    }
  },

  {
    id: "nx-desodorante-roll-on-frescor-24h",
    name: "Very Rose Desodorante Roll-On 24H",
    img: "imagenes/nuxe/nx-desodorante-roll-on-frescor-24h.webp",
    brand: "nuxe",
    line: "nx-rose",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un perfil concreto.",
      tipo: "Desodorante roll-on.",
      necesidad: "Frescor y sin marcas.",
      cuando: "Reaplicar si es necesario.",
      modo: "Aplicar sobre la piel limpia y seca."
    }
  },

  {
    id: "nx-agua-voluptuosa-perfumada",
    name: "Very Rose Agua Voluptuosa Perfumada",
    img: "imagenes/nuxe/nx-agua-voluptuosa-perfumada.webp",
    brand: "nuxe",
    line: "nx-rose",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Sin perfil de piel: es una fragancia.",
      tipo: "Agua perfumada de rosa.",
      necesidad: "Fragancia.",
      cuando: "Tantas veces como sea necesario.",
      modo: "Vaporizar a unos centímetros de la piel, en cuello y muñecas, o sobre el cepillo."
    }
  },

  /* ---------- Nuxe · Crème Fraîche de Beauté® ---------- */
  {
    id: "nx-cr-me-fra-che-de-beaut-3-en-1-crema-hidratante-48-h-leche-desmaquillante-mascarilla-repulpante",
    name: "Crème Fraîche de Beauté® 3 en 1",
    img: "imagenes/nuxe/nx-cr-me-fra-che-de-beaut-3-en-1-crema-hidratante-48-h-leche-desmaquillante-mascarilla-repulpante.webp",
    brand: "nuxe",
    line: "nx-cf",
    n: ["deshidratacion", "limpieza"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de pieles.",
      tipo: "Crema hidratante 48 h, leche limpiadora y mascarilla.",
      necesidad: "Hidrata, limpia y repulpa.",
      cuando: "Como crema, mañana y/o noche.",
      modo: "Crema: media avellana en rostro y contorno. Leche: 2 almendras, masajear y retirar con algodón. También como mascarilla."
    }
  },

  {
    id: "nx-crema-repulpante-hidratante-l-48-h-30ml",
    name: "Crème Fraîche de Beauté® Crema Repulpante 48h",
    img: "imagenes/nuxe/nx-crema-repulpante-hidratante-l-48-h-30ml.webp",
    brand: "nuxe",
    line: "nx-cf",
    n: ["deshidratacion"],
    sk: ["todas"],
    d: {
      paciente: "Pieles normales.",
      tipo: "Crema hidratante calmante.",
      necesidad: "Hidrata 48 horas y reduce la tirantez.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Calentar entre las manos y aplicar del centro hacia fuera en rostro, cuello y escote, evitando el contorno de ojos."
    }
  },

  {
    id: "nx-crema-rica-hidratante-l-48h-30ml",
    name: "Crème Fraîche de Beauté® Crema Rica 48h",
    img: "imagenes/nuxe/nx-crema-rica-hidratante-l-48h-30ml.webp",
    brand: "nuxe",
    line: "nx-cf",
    n: ["seca", "deshidratacion"],
    sk: ["seca"],
    d: {
      paciente: "Piel seca.",
      tipo: "Crema hidratante rica.",
      necesidad: "Hidrata 48 horas y nutre sin efecto graso.",
      cuando: "Por el día.",
      modo: "Calentar entre las manos y aplicar del centro hacia fuera en rostro, cuello y escote, evitando el contorno de ojos."
    }
  },

  {
    id: "nx-fluido-matificante-hidratante-l-48h-cr-me-fra-che-de-beaut",
    name: "Crème Fraîche de Beauté® Fluido Matificante 48h",
    img: "imagenes/nuxe/nx-fluido-matificante-hidratante-l-48h-cr-me-fra-che-de-beaut.webp",
    brand: "nuxe",
    line: "nx-cf",
    n: ["deshidratacion", "poros"],
    sk: ["mixta", "grasa"],
    d: {
      paciente: "Piel mixta.",
      tipo: "Fluido hidratante ultraligero.",
      necesidad: "Hidrata 48 horas y matifica.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Calentar entre las manos y aplicar del centro hacia fuera en rostro, cuello y escote, evitando el contorno de ojos."
    }
  },

  {
    id: "nx-eye-flash-tratamiento-contorno-de-ojos-hidratante-anti-fatiga-con-certificaci-n-bio",
    name: "Eye Flash Contorno de Ojos Antifatiga",
    img: "imagenes/nuxe/nx-eye-flash-tratamiento-contorno-de-ojos-hidratante-anti-fatiga-con-certificaci-n-bio.webp",
    brand: "nuxe",
    line: "nx-cf",
    n: ["ojos"],
    sk: ["todas"],
    d: {
      paciente: "Todos los tipos de piel.",
      tipo: "Contorno de ojos hidratante bio.",
      necesidad: "Ojeras, bolsas y líneas.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Aplicar 2 granos de arroz a toques bajo los ojos y alisar de dentro hacia fuera."
    }
  },

  /* ---------- Nuxe · Super Serum [10] ---------- */
  {
    id: "nx-super-serum-10-el-concentrado-antiedad-universal-30ml",
    name: "Super Serum [10]",
    img: "imagenes/nuxe/nx-super-serum-10-el-concentrado-antiedad-universal-30ml.webp",
    brand: "nuxe",
    line: "nx-ss",
    n: ["arrugas", "flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Todos los tipos de piel.",
      tipo: "Concentrado antiedad con complejo de longevidad.",
      necesidad: "Corrige los signos de la edad y ayuda a retrasar su aparición.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Aplicar del centro hacia fuera en rostro, cuello y escote, evitando el contorno de ojos. Dejar penetrar 30 segundos."
    }
  },

  {
    id: "nx-super-serum-10-contorno-de-ojos-el-concentrado-para-el-contorno-de-ojos-antiedad-universal",
    name: "Super Serum [10] Contorno de Ojos",
    img: "imagenes/nuxe/nx-super-serum-10-contorno-de-ojos-el-concentrado-para-el-contorno-de-ojos-antiedad-universal.webp",
    brand: "nuxe",
    line: "nx-ss",
    n: ["ojos", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Todos los tipos de piel.",
      tipo: "Sérum de contorno con ácido hialurónico y cafeína.",
      necesidad: "Arrugas, ojeras, bolsas y cansancio.",
      cuando: "Mañana y noche, antes de la crema.",
      modo: "Aplicar una gota a toques bajo los ojos, alisar y repetir en el párpado superior, evitando la zona móvil."
    }
  },

  /* ---------- Nuxe · Nuxuriance Ultra ---------- */
  {
    id: "nx-la-crema-antiedad-global",
    name: "Nuxuriance Ultra La Crema Antiedad Global",
    img: "imagenes/nuxe/nx-la-crema-antiedad-global.webp",
    brand: "nuxe",
    line: "nx-nu",
    n: ["arrugas", "flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Todos los tipos de piel.",
      tipo: "Crema de día con tecnología Alfa [3R].",
      necesidad: "Principales signos de la edad.",
      cuando: "Por el día.",
      modo: "Calentar entre las manos y aplicar del centro hacia fuera en rostro, cuello y escote, evitando el contorno de ojos."
    }
  },

  {
    id: "nx-la-crema-rica-antiedad-global",
    name: "Nuxuriance Ultra La Crema Rica",
    img: "imagenes/nuxe/nx-la-crema-rica-antiedad-global.webp",
    brand: "nuxe",
    line: "nx-nu",
    n: ["arrugas", "flacidez", "seca"],
    sk: ["seca"],
    d: {
      paciente: "Piel seca a muy seca.",
      tipo: "Crema rica de día con tecnología Alfa [3R].",
      necesidad: "Signos de la edad y nutrición.",
      cuando: "Por el día.",
      modo: "Calentar entre las manos y aplicar del centro hacia fuera en rostro, cuello y escote, evitando el contorno de ojos."
    }
  },

  {
    id: "nx-la-crema-antiedad-global-spf30",
    name: "Nuxuriance Ultra La Crema SPF30",
    img: "imagenes/nuxe/nx-la-crema-antiedad-global-spf30.webp",
    brand: "nuxe",
    line: "nx-nu",
    n: ["arrugas", "fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Todos los tipos de piel.",
      tipo: "Crema 2 en 1 con SPF 30.",
      necesidad: "Signos de la edad y fotoenvejecimiento.",
      cuando: "Por el día.",
      modo: "Calentar entre las manos y aplicar del centro hacia fuera en rostro, cuello y escote, evitando el contorno de ojos."
    }
  },

  {
    id: "nx-la-crema-de-noche-antiedad-global",
    name: "Nuxuriance Ultra La Crema de Noche",
    img: "imagenes/nuxe/nx-la-crema-de-noche-antiedad-global.webp",
    brand: "nuxe",
    line: "nx-nu",
    n: ["arrugas", "flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Todos los tipos de piel.",
      tipo: "Crema de noche con tecnología Alfa [3R].",
      necesidad: "Signos de la edad; nutre durante la noche.",
      cuando: "Por la noche.",
      modo: "Calentar entre las manos y aplicar del centro hacia fuera en rostro, cuello y escote, evitando el contorno de ojos."
    }
  },

  {
    id: "nx-el-tratamiento-excepcional-dia-y-noche-75ml",
    name: "Nuxuriance Ultra Tratamiento Excepcional Día y Noche",
    img: "imagenes/nuxe/nx-el-tratamiento-excepcional-dia-y-noche-75ml.webp",
    brand: "nuxe",
    line: "nx-nu",
    n: ["arrugas", "flacidez", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un tipo de piel concreto.",
      tipo: "Tratamiento antiedad global de 75 ml.",
      necesidad: "Signos de la edad y luminosidad.",
      cuando: "Día y noche.",
      modo: "Calentar entre las manos y aplicar del centro hacia fuera en rostro, cuello y escote, evitando el contorno de ojos."
    }
  },

  {
    id: "nx-el-s-rum-corrector-de-manchas",
    name: "Nuxuriance Ultra El Sérum Corrector de Manchas",
    img: "imagenes/nuxe/nx-el-s-rum-corrector-de-manchas.webp",
    brand: "nuxe",
    line: "nx-nu",
    n: ["manchas", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un tipo de piel concreto.",
      tipo: "Sérum con Alfa [3R] y vitamina C.",
      necesidad: "Manchas y signos de la edad.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Aplicar del centro hacia fuera en rostro, cuello y escote."
    }
  },

  {
    id: "nx-el-tratamiento-espec-fico-para-contorno-de-ojos-y-labios",
    name: "Nuxuriance Ultra Contorno de Ojos y Labios",
    img: "imagenes/nuxe/nx-el-tratamiento-espec-fico-para-contorno-de-ojos-y-labios.webp",
    brand: "nuxe",
    line: "nx-nu",
    n: ["ojos", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Todos los tipos de piel.",
      tipo: "Tratamiento de contorno con Alfa [3R].",
      necesidad: "Líneas, ojeras y bolsas.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Alisar los párpados de dentro hacia fuera con los dedos corazón y presionar en las sienes."
    }
  },

  {
    id: "nx-crema-antimanchas-antiedad-spf30",
    name: "Nuxuriance Ultra Crema Antimanchas + Antiedad SPF30",
    img: "imagenes/nuxe/nx-crema-antimanchas-antiedad-spf30.webp",
    brand: "nuxe",
    line: "nx-nu",
    n: ["manchas", "arrugas", "fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un tipo de piel concreto.",
      tipo: "Crema de día con SPF 30.",
      necesidad: "Manchas y principales signos de la edad.",
      cuando: "Por el día.",
      modo: "Calentar entre las manos y aplicar del centro hacia fuera en rostro, cuello y escote, evitando el contorno de ojos."
    }
  },

  {
    id: "nx-la-crema-de-manos-correctora-de-manchas",
    name: "Nuxuriance Ultra Crema de Manos Correctora de Manchas",
    img: "imagenes/nuxe/nx-la-crema-de-manos-correctora-de-manchas.webp",
    brand: "nuxe",
    line: "nx-nu",
    n: ["manchas", "corporal"],
    sk: ["todas"],
    d: {
      paciente: "Manos con manchas y sequedad.",
      tipo: "Crema de manos.",
      necesidad: "Manchas y sequedad.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Aplicar en el dorso, frotar e insistir entre los dedos."
    }
  },

  {
    id: "nx-la-leche-corporal-reafirmante",
    name: "Nuxuriance Ultra Leche Corporal Reafirmante",
    img: "imagenes/nuxe/nx-la-leche-corporal-reafirmante.webp",
    brand: "nuxe",
    line: "nx-nu",
    n: ["corporal", "flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Zonas con flacidez: brazos, escote, vientre, glúteos y piernas.",
      tipo: "Leche corporal de efecto tensor.",
      necesidad: "Firmeza y remodelado.",
      cuando: "Mañana y/o noche.",
      modo: "Calentar y aplicar de abajo arriba, con movimientos en ocho."
    }
  },

  /* ---------- Nuxe · Nuxuriance Gold ---------- */
  {
    id: "nx-el-aceite-s-rum-revitalizante",
    name: "Nuxuriance Gold El Aceite-Sérum",
    img: "imagenes/nuxe/nx-el-aceite-s-rum-revitalizante.webp",
    brand: "nuxe",
    line: "nx-ng",
    n: ["seca", "arrugas"],
    sk: ["seca"],
    d: {
      paciente: "Piel seca.",
      tipo: "Aceite-sérum bio con extracto de arroz.",
      necesidad: "Nutre y regenera; flexibilidad y luminosidad.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Aplicar media pipeta del centro hacia fuera, evitando el contorno de ojos."
    }
  },

  {
    id: "nx-la-crema-aceite-nutri-fortificante",
    name: "Nuxuriance Gold La Crema-Aceite",
    img: "imagenes/nuxe/nx-la-crema-aceite-nutri-fortificante.webp",
    brand: "nuxe",
    line: "nx-ng",
    n: ["seca", "flacidez", "arrugas"],
    sk: ["seca"],
    d: {
      paciente: "Piel que necesita nutrición antiedad.",
      tipo: "Crema-aceite nutritiva.",
      necesidad: "Confort, firmeza y redensificación.",
      cuando: "Por el día.",
      modo: "Calentar entre las manos y aplicar del centro hacia fuera en rostro, cuello y escote, evitando el contorno de ojos."
    }
  },

  /* ---------- Nuxe · Merveillance Lift ---------- */
  {
    id: "nx-crema-aterciopelada-efecto-lifting",
    name: "Merveillance Lift Crema Aterciopelada",
    img: "imagenes/nuxe/nx-crema-aterciopelada-efecto-lifting.webp",
    brand: "nuxe",
    line: "nx-ml",
    n: ["arrugas", "flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Piel normal a seca.",
      tipo: "Crema con aceite de micro-alga.",
      necesidad: "Alisa arrugas y reafirma.",
      cuando: "Por el día.",
      modo: "Calentar entre las manos y aplicar del centro hacia fuera en rostro, cuello y escote, evitando el contorno de ojos."
    }
  },

  {
    id: "nx-crema-en-polvo-efecto-lifting-merveillance-lift-50-ml",
    name: "Merveillance Lift Crema en Polvo",
    img: "imagenes/nuxe/nx-crema-en-polvo-efecto-lifting-merveillance-lift-50-ml.webp",
    brand: "nuxe",
    line: "nx-ml",
    n: ["arrugas", "flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un tipo de piel concreto.",
      tipo: "Crema de textura rellenadora.",
      necesidad: "Antiedad instantáneo.",
      cuando: "Por el día.",
      modo: "Calentar entre las manos y aplicar del centro hacia fuera en rostro, cuello y escote, evitando el contorno de ojos."
    }
  },

  {
    id: "nx-crema-glow-efecto-lifting",
    name: "Merveillance Lift Crema Glow",
    img: "imagenes/nuxe/nx-crema-glow-efecto-lifting.webp",
    brand: "nuxe",
    line: "nx-ml",
    n: ["flacidez", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Todos los tonos y tipos de piel.",
      tipo: "Crema reafirmante con sutil color.",
      necesidad: "Efecto tensor y buena cara.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Calentar entre las manos y aplicar del centro hacia fuera en rostro, cuello y escote, evitando el contorno de ojos."
    }
  },

  {
    id: "nx-crema-concentrada-de-noche",
    name: "Merveillance Lift Crema de Noche",
    img: "imagenes/nuxe/nx-crema-concentrada-de-noche.webp",
    brand: "nuxe",
    line: "nx-ml",
    n: ["arrugas", "flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un tipo de piel concreto.",
      tipo: "Crema concentrada de noche.",
      necesidad: "Corrige arrugas durante la noche.",
      cuando: "Por la noche.",
      modo: "Calentar entre las manos y aplicar del centro hacia fuera en rostro, cuello y escote, evitando el contorno de ojos."
    }
  },

  {
    id: "nx-la-crema-excepcional-dia-and-noche-75ml-merveillance-lift",
    name: "Merveillance Lift Crema Excepcional Día y Noche",
    img: "imagenes/nuxe/nx-la-crema-excepcional-dia-and-noche-75ml-merveillance-lift.webp",
    brand: "nuxe",
    line: "nx-ml",
    n: ["arrugas", "flacidez", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un tipo de piel concreto.",
      tipo: "Crema de día y noche de 75 ml.",
      necesidad: "Arrugas, firmeza y luminosidad.",
      cuando: "Día y noche.",
      modo: "Calentar entre las manos y aplicar del centro hacia fuera en rostro, cuello y escote, evitando el contorno de ojos."
    }
  },

  {
    id: "nx-s-rum-en-aceite-activador-de-firmeza",
    name: "Merveillance Lift Sérum en Aceite",
    img: "imagenes/nuxe/nx-s-rum-en-aceite-activador-de-firmeza.webp",
    brand: "nuxe",
    line: "nx-ml",
    n: ["flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Todos los tipos de piel.",
      tipo: "Sérum en aceite antiedad.",
      necesidad: "Firmeza; bastan 3 gotas.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Extender del centro hacia fuera, evitando el contorno de ojos."
    }
  },

  {
    id: "nx-crema-reafirmante-contorno-de-ojos",
    name: "Merveillance Lift Contorno de Ojos",
    img: "imagenes/nuxe/nx-crema-reafirmante-contorno-de-ojos.webp",
    brand: "nuxe",
    line: "nx-ml",
    n: ["ojos", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un tipo de piel concreto.",
      tipo: "Crema reafirmante de contorno.",
      necesidad: "Arrugas y párpados.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Aplicar 2 granos de arroz a toques bajo los ojos y alisar de dentro hacia fuera."
    }
  },

  /* ---------- Nuxe · Prodigieuse Boost ---------- */
  {
    id: "nx-gel-crema-alisadora-iluminadora",
    name: "Prodigieuse Boost Gel-Crema Alisadora",
    img: "imagenes/nuxe/nx-gel-crema-alisadora-iluminadora.webp",
    brand: "nuxe",
    line: "nx-boost",
    n: ["deshidratacion", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Piel normal a mixta.",
      tipo: "Gel-crema fresca iluminadora.",
      necesidad: "Hidrata, alisa y aporta luminosidad.",
      cuando: "Después del sérum.",
      modo: "Calentar entre las manos y aplicar del centro hacia fuera en rostro, cuello y escote, evitando el contorno de ojos."
    }
  },

  {
    id: "nx-crema-repulpante-iluminadora",
    name: "Prodigieuse Boost Crema Repulpante",
    img: "imagenes/nuxe/nx-crema-repulpante-iluminadora.webp",
    brand: "nuxe",
    line: "nx-boost",
    n: ["deshidratacion", "apagada"],
    sk: ["seca"],
    d: {
      paciente: "Piel normal a seca.",
      tipo: "Crema envolvente iluminadora.",
      necesidad: "Repulpa, ilumina y da confort.",
      cuando: "Después del sérum.",
      modo: "Calentar entre las manos y aplicar del centro hacia fuera en rostro, cuello y escote, evitando el contorno de ojos."
    }
  },

  {
    id: "nx-serum-iluminador-antimanchas",
    name: "Prodigieuse Boost Sérum Iluminador Antimanchas",
    img: "imagenes/nuxe/nx-serum-iluminador-antimanchas.webp",
    brand: "nuxe",
    line: "nx-boost",
    n: ["manchas", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un tipo de piel concreto.",
      tipo: "Sérum potenciador de luminosidad.",
      necesidad: "Intensidad, número y tamaño de las manchas.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Aplicar media pipeta del centro hacia fuera en rostro, cuello y escote."
    }
  },

  {
    id: "nx-balsamo-aceite-renovador-noche",
    name: "Prodigieuse Boost Bálsamo-Aceite Noche",
    img: "imagenes/nuxe/nx-balsamo-aceite-renovador-noche.webp",
    brand: "nuxe",
    line: "nx-boost",
    n: ["deshidratacion"],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un tipo de piel concreto.",
      tipo: "Bálsamo renovador de noche.",
      necesidad: "Hidrata, repulpa y refuerza la barrera.",
      cuando: "Por la noche, después del sérum.",
      modo: "Calentar entre las manos y aplicar del centro hacia fuera en rostro, cuello y escote, evitando el contorno de ojos."
    }
  },

  {
    id: "nx-concentrado-iluminador",
    name: "Prodigieuse Boost Concentrado Iluminador",
    img: "imagenes/nuxe/nx-concentrado-iluminador.webp",
    brand: "nuxe",
    line: "nx-boost",
    n: ["apagada"],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un tipo de piel concreto.",
      tipo: "Concentrado con partículas nacaradas.",
      necesidad: "Luminosidad inmediata y repulpa.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Como sérum antes de la crema, mezclado con ella, o como iluminador."
    }
  },

  {
    id: "nx-stick-antifatiga-para-el-contorno-de-ojos",
    name: "Prodigieuse Boost Stick Antifatiga Ojos",
    img: "imagenes/nuxe/nx-stick-antifatiga-para-el-contorno-de-ojos.webp",
    brand: "nuxe",
    line: "nx-boost",
    n: ["ojos"],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un tipo de piel concreto.",
      tipo: "Stick efecto cubito de hielo con cafeína.",
      necesidad: "Bolsas, ojeras y líneas.",
      cuando: "Mañana y noche.",
      modo: "Aplicar bajo el párpado inferior y sobre el superior, de dentro hacia fuera. Se puede guardar en la nevera."
    }
  },

  {
    id: "nx-gel-b-lsamo-multi-correcci-n-ojos",
    name: "Prodigieuse Boost Gel-Bálsamo Ojos",
    img: "imagenes/nuxe/nx-gel-b-lsamo-multi-correcci-n-ojos.webp",
    brand: "nuxe",
    line: "nx-boost",
    n: ["ojos"],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un tipo de piel concreto.",
      tipo: "Contorno de ojos con jazmín.",
      necesidad: "Bolsas, ojeras y luminosidad.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Aplicar 2 granos de arroz a toques bajo los ojos y alisar de dentro hacia fuera."
    }
  },

  {
    id: "nx-serum-iluminador-ojos",
    name: "Prodigieuse Boost Sérum Iluminador Ojos",
    img: "imagenes/nuxe/nx-serum-iluminador-ojos.webp",
    brand: "nuxe",
    line: "nx-boost",
    n: ["ojos", "apagada"],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un tipo de piel concreto.",
      tipo: "Sérum híbrido con pigmentos nacarados.",
      necesidad: "Ilumina y rejuvenece la mirada.",
      cuando: "Mañana y/o noche; retocar durante el día.",
      modo: "Agitar, aplicar con el aplicador de espuma y difuminar con toques."
    }
  },

  {
    id: "nx-mascarilla-detox-luminosidad-vitaminada",
    name: "Prodigieuse Boost Mascarilla Detox",
    img: "imagenes/nuxe/nx-mascarilla-detox-luminosidad-vitaminada.webp",
    brand: "nuxe",
    line: "nx-boost",
    n: ["apagada"],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un tipo de piel concreto.",
      tipo: "Mascarilla de luminosidad en 5 minutos.",
      necesidad: "Purifica y afina la textura.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Aplicar sobre la piel seca, evitando los ojos, y dejar actuar 5 minutos."
    }
  },

  {
    id: "nx-el-serum-autobronceador",
    name: "Prodigieuse Boost El Sérum Autobronceador",
    img: "imagenes/nuxe/nx-el-serum-autobronceador.webp",
    brand: "nuxe",
    line: "nx-boost",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Quien busca un bronceado sin sol todo el año.",
      tipo: "Sérum autobronceador con ácido hialurónico.",
      necesidad: "Tono bronceado e hidratación.",
      cuando: "Por la mañana.",
      modo: "Una pipeta como sérum en rostro y cuello, antes de la crema, o gotas mezcladas con ella. Evitar el contorno de ojos."
    }
  },

  {
    id: "nx-bb-cream-hidratante-con-color-tono-medio",
    name: "BB Cream Hidratante con Color",
    img: "imagenes/nuxe/nx-bb-cream-hidratante-con-color-tono-medio.webp",
    brand: "nuxe",
    line: "nx-boost",
    n: ["apagada"],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un tipo de piel concreto (3 tonos).",
      tipo: "Tratamiento perfeccionador con color.",
      necesidad: "Unifica e hidrata 24 horas.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Repartir a toques en frente, nariz y mentón y extender hacia fuera y el cuello."
    }
  },

  /* ---------- Nuxe · Zinc Power ---------- */
  {
    id: "nx-gel-limpiador-purificante-1",
    name: "Zinc Power Gel Limpiador Purificante",
    img: "imagenes/nuxe/nx-gel-limpiador-purificante-1.webp",
    brand: "nuxe",
    line: "nx-zinc",
    n: ["limpieza", "acne", "poros"],
    sk: ["mixta", "grasa", "imperfecciones"],
    d: {
      paciente: "Piel mixta a grasa con tendencia acneica.",
      tipo: "Gel no comedogénico para rostro y cuerpo.",
      necesidad: "Limpia, matifica y cierra los poros.",
      limpieza: "Limpiador, 1.er paso de la rutina",
      limpiezaDet: "Nuxe lo llama primer paso de la rutina antiimperfecciones.",
      cuando: "Mañana y noche.",
      modo: "Masajear en círculos, evitando los ojos, y aclarar."
    }
  },

  {
    id: "nx-locion-purificante-anti-imperfecciones",
    name: "Zinc Power Loción Purificante",
    img: "imagenes/nuxe/nx-locion-purificante-anti-imperfecciones.webp",
    brand: "nuxe",
    line: "nx-zinc",
    n: ["acne", "poros"],
    sk: ["mixta", "grasa", "imperfecciones"],
    d: {
      paciente: "Piel mixta con tendencia acneica.",
      tipo: "Loción purificante sin aclarado.",
      necesidad: "Minimiza poros, matifica y reduce imperfecciones.",
      limpieza: "Rutina de limpieza · 2.º paso",
      limpiezaDet: "Nuxe la llama segundo paso de limpieza de la rutina.",
      cuando: "Mañana y/o noche.",
      modo: "Aplicar con un algodón sobre la piel limpia, evitando los ojos."
    }
  },

  {
    id: "nx-serum-anti-imperfecciones",
    name: "Zinc Power Sérum Anti-Imperfecciones",
    img: "imagenes/nuxe/nx-serum-anti-imperfecciones.webp",
    brand: "nuxe",
    line: "nx-zinc",
    n: ["acne", "poros"],
    sk: ["mixta", "grasa", "imperfecciones"],
    d: {
      paciente: "Piel con tendencia acneica.",
      tipo: "Sérum no comedogénico con zinc PCA y lichi.",
      necesidad: "Granitos, puntos negros y poros.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Aplicar del centro hacia fuera y dejar penetrar 30 segundos antes de la crema."
    }
  },

  {
    id: "nx-fluido-matificante-minimizador-de-poros",
    name: "Zinc Power Fluido Matificante",
    img: "imagenes/nuxe/nx-fluido-matificante-minimizador-de-poros.webp",
    brand: "nuxe",
    line: "nx-zinc",
    n: ["poros", "acne"],
    sk: ["mixta", "grasa", "imperfecciones"],
    d: {
      paciente: "Piel mixta a grasa con tendencia acneica.",
      tipo: "Fluido hidratante matificante.",
      necesidad: "Brillos y poros visibles.",
      cuando: "Mañana y/o noche.",
      modo: "Aplicar en todo el rostro."
    }
  },

  {
    id: "nx-corrector-de-imperfecciones",
    name: "Zinc Power Corrector de Imperfecciones",
    img: "imagenes/nuxe/nx-corrector-de-imperfecciones.webp",
    brand: "nuxe",
    line: "nx-zinc",
    n: ["acne"],
    sk: ["mixta", "grasa", "imperfecciones"],
    d: {
      paciente: "Piel con granos localizados.",
      tipo: "Gel parche invisible de acción localizada.",
      necesidad: "Tamaño y color de los granos; marcas.",
      cuando: "Mañana y noche.",
      modo: "Mañana: tras la crema y antes del maquillaje. Noche: como último paso, sobre la piel limpia."
    }
  },

  /* ---------- Nuxe · Nuxe Men [BOOST]³ ---------- */
  {
    id: "nx-gel-de-ducha-multi-usos-para-rostro-barba-cuerpo-y-cabello-1",
    name: "Nuxe Men [BOOST]³ Gel de Ducha Multiusos",
    img: "imagenes/nuxe/nx-gel-de-ducha-multi-usos-para-rostro-barba-cuerpo-y-cabello-1.webp",
    brand: "nuxe",
    line: "nx-men",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Hombres; Nuxe no indica un tipo de piel concreto.",
      tipo: "Gel para rostro, barba, cuerpo y cabello.",
      necesidad: "Limpieza completa.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Masajear sobre la zona húmeda y aclarar."
    }
  },

  {
    id: "nx-gel-limpiador-matificante",
    name: "Nuxe Men [BOOST]³ Gel Limpiador Matificante",
    img: "imagenes/nuxe/nx-gel-limpiador-matificante.webp",
    brand: "nuxe",
    line: "nx-men",
    n: ["limpieza", "poros"],
    sk: ["todas"],
    d: {
      paciente: "Hombres; Nuxe no indica un tipo de piel concreto.",
      tipo: "Gel limpiador facial.",
      necesidad: "Elimina impurezas y matifica.",
      limpieza: "Limpiador (sin paso indicado)",
      limpiezaDet: "Su ficha no le asigna un paso concreto de la rutina.",
      cuando: "Mañana y/o noche.",
      modo: "Aplicar sobre la piel húmeda, evitando los ojos, masajear y aclarar."
    }
  },

  {
    id: "nx-serum-multi-accion-juventud-y-energia",
    name: "Nuxe Men [BOOST]³ Sérum Multiacción",
    img: "imagenes/nuxe/nx-serum-multi-accion-juventud-y-energia.webp",
    brand: "nuxe",
    line: "nx-men",
    n: ["arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Hombres.",
      tipo: "Sérum con Alfa [3R].",
      necesidad: "Potencia y fortalece la piel.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Aplicar unas gotas sobre el rostro limpio y seco y masajear."
    }
  },

  {
    id: "nx-fluido-antiedad-revitalizante-global",
    name: "Nuxe Men [BOOST]³ Fluido Antiedad",
    img: "imagenes/nuxe/nx-fluido-antiedad-revitalizante-global.webp",
    brand: "nuxe",
    line: "nx-men",
    n: ["arrugas", "deshidratacion"],
    sk: ["todas"],
    d: {
      paciente: "Hombres.",
      tipo: "Fluido antiedad con Alfa [3R].",
      necesidad: "Hidrata y alisa.",
      cuando: "Mañana y/o noche.",
      modo: "Aplicar sobre la piel limpia y seca del centro hacia fuera."
    }
  },

  {
    id: "nx-gel-hidratante-antifatiga-instantaneo",
    name: "Nuxe Men [BOOST]³ Gel Hidratante Antifatiga",
    img: "imagenes/nuxe/nx-gel-hidratante-antifatiga-instantaneo.webp",
    brand: "nuxe",
    line: "nx-men",
    n: ["deshidratacion"],
    sk: ["todas"],
    d: {
      paciente: "Hombres.",
      tipo: "Gel ultrafresco.",
      necesidad: "Hidrata y da energía.",
      cuando: "Mañana y/o noche.",
      modo: "Aplicar sobre la piel limpia y seca del centro hacia fuera."
    }
  },

  {
    id: "nx-aceite-multifuncion-para-la-barba",
    name: "Nuxe Men [BOOST]³ Aceite para la Barba",
    img: "imagenes/nuxe/nx-aceite-multifuncion-para-la-barba.webp",
    brand: "nuxe",
    line: "nx-men",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Hombres con barba.",
      tipo: "Aceite multifunción.",
      necesidad: "Barba suave y zonas secas.",
      cuando: "Mañana y/o noche.",
      modo: "Calentar en las palmas y masajear la barba."
    }
  },

  {
    id: "nx-espuma-de-afeitar-anti-irritaciones",
    name: "Nuxe Men [BOOST]³ Espuma de Afeitar",
    img: "imagenes/nuxe/nx-espuma-de-afeitar-anti-irritaciones.webp",
    brand: "nuxe",
    line: "nx-men",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Hombres.",
      tipo: "Espuma de afeitar.",
      necesidad: "Afeitado cómodo.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Agitar, aplicar sobre el rostro húmedo, afeitar y aclarar."
    }
  },

  {
    id: "nx-balsamo-regenerador-calmante-para-despues-del-afeitado",
    name: "Nuxe Men [BOOST]³ Bálsamo After-Shave",
    img: "imagenes/nuxe/nx-balsamo-regenerador-calmante-para-despues-del-afeitado.webp",
    brand: "nuxe",
    line: "nx-men",
    n: ["rojeces"],
    sk: ["todas"],
    d: {
      paciente: "Hombres.",
      tipo: "Bálsamo calmante con nopal.",
      necesidad: "Calma y regenera tras el afeitado.",
      cuando: "Después del afeitado.",
      modo: "Masajear sobre rostro y cuello limpios y secos."
    }
  },

  {
    id: "nx-desodorante-proteccion-24h",
    name: "Nuxe Men [BOOST]³ Desodorante 24h",
    img: "imagenes/nuxe/nx-desodorante-proteccion-24h.webp",
    brand: "nuxe",
    line: "nx-men",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Hombres.",
      tipo: "Desodorante sin marcas.",
      necesidad: "Protección 24 horas.",
      cuando: "Reaplicar si es necesario.",
      modo: "Aplicar sobre la piel limpia y seca."
    }
  },

  {
    id: "nx-eau-de-parfum",
    name: "Nuxe Men Eau de Parfum",
    img: "imagenes/nuxe/nx-eau-de-parfum.webp",
    brand: "nuxe",
    line: "nx-men",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Sin perfil de piel: es una fragancia.",
      tipo: "Eau de parfum.",
      necesidad: "Fragancia.",
      cuando: "Tantas veces como sea necesario.",
      modo: "Vaporizar a unos centímetros de la piel, en cuello y muñecas, o sobre el cepillo."
    }
  },

  /* ---------- Nuxe · Hair Prodigieux® ---------- */
  {
    id: "nx-el-champ-brillo-sublime-400ml",
    name: "Hair Prodigieux® Champú Brillo Sublime",
    img: "imagenes/nuxe/nx-el-champ-brillo-sublime-400ml.webp",
    brand: "nuxe",
    line: "nx-hair",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un tipo de cabello concreto.",
      tipo: "Champú sin siliconas ni sulfatos.",
      necesidad: "Limpia y nutre sin apelmazar.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Aplicar sobre el cabello mojado, masajear y aclarar."
    }
  },

  {
    id: "nx-acondicionador-brillo-sublime",
    name: "Hair Prodigieux® Acondicionador",
    img: "imagenes/nuxe/nx-acondicionador-brillo-sublime.webp",
    brand: "nuxe",
    line: "nx-hair",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un tipo de cabello concreto.",
      tipo: "Acondicionador sin siliconas.",
      necesidad: "Desenreda y nutre.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Aplicar en largos y puntas sobre el cabello escurrido, dejar 1 minuto y aclarar."
    }
  },

  {
    id: "nx-mascarilla-capilar-reparacion-intensiva",
    name: "Hair Prodigieux® Mascarilla Reparación Intensiva",
    img: "imagenes/nuxe/nx-mascarilla-capilar-reparacion-intensiva.webp",
    brand: "nuxe",
    line: "nx-hair",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Cabello que necesita reparación.",
      tipo: "Mascarilla capilar.",
      necesidad: "Repara y nutre.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Aplicar en largos y puntas, dejar 3 minutos y aclarar."
    }
  },

  {
    id: "nx-la-mascarilla-nutrici-n-pre-champ",
    name: "Hair Prodigieux® Mascarilla Pre-Champú",
    img: "imagenes/nuxe/nx-la-mascarilla-nutrici-n-pre-champ.webp",
    brand: "nuxe",
    line: "nx-hair",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Cabello que necesita nutrición.",
      tipo: "Tratamiento sin siliconas.",
      necesidad: "Nutre y repara la fibra.",
      cuando: "Antes del champú.",
      modo: "Aplicar sobre el cabello seco 10 minutos, o 30 para reparación intensa, y aclarar."
    }
  },

  {
    id: "nx-leche-capilar-desenredante-sin-aclarado",
    name: "Hair Prodigieux® Leche Desenredante",
    img: "imagenes/nuxe/nx-leche-capilar-desenredante-sin-aclarado.webp",
    brand: "nuxe",
    line: "nx-hair",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un tipo de cabello concreto.",
      tipo: "Leche capilar sin aclarado.",
      necesidad: "Desenreda e hidrata.",
      cuando: "A diario.",
      modo: "Vaporizar sobre largos y puntas del cabello escurrido. No aclarar."
    }
  },

  {
    id: "nx-tratamiento-capilar-nutrici-n-intensa",
    name: "Hair Prodigieux® Tratamiento Nutrición Intensa",
    img: "imagenes/nuxe/nx-tratamiento-capilar-nutrici-n-intensa.webp",
    brand: "nuxe",
    line: "nx-hair",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Nuxe no indica un tipo de cabello concreto.",
      tipo: "Crema termoprotectora hasta 220 °C.",
      necesidad: "Nutre, repara y facilita el peinado.",
      cuando: "A diario.",
      modo: "Aplicar en largos y puntas, en seco o escurrido. No aclarar."
    }
  },

  {
    id: "nx-serum-hidra-voluminizador-para-cabello-y-cuero-cabelludo",
    name: "Hair Prodigieux® Sérum Hidra-Voluminizador",
    img: "imagenes/nuxe/nx-serum-hidra-voluminizador-para-cabello-y-cuero-cabelludo.webp",
    brand: "nuxe",
    line: "nx-hair",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Cabello y cuero cabelludo.",
      tipo: "Sérum con ácido hialurónico y amla.",
      necesidad: "Revitaliza el cuero cabelludo y aporta volumen.",
      cuando: "A diario.",
      modo: "Aplicar de 2 a 4 pipetas sobre el cabello seco o secado con toalla."
    }
  },

  /* ---------- Nuxe · Nuxe Sun ---------- */
  {
    id: "nx-leche-solar-fundente-muy-alta-proteccion-spf50",
    name: "Nuxe Sun Leche Solar SPF50+",
    img: "imagenes/nuxe/nx-leche-solar-fundente-muy-alta-proteccion-spf50.webp",
    brand: "nuxe",
    line: "nx-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Rostro y/o cuerpo; Nuxe no indica un tipo de piel concreto.",
      tipo: "Leche rostro y cuerpo SPF 50+.",
      necesidad: "Protección UVA/UVB y prevención del fotoenvejecimiento.",
      cuando: "Antes de la exposición. Repetir con frecuencia, sobre todo tras nadar o secarse.",
      modo: "Aplicar generosamente. En el rostro, poner antes en las manos y evitar el contorno de ojos.",
      solar: "Una cantidad insuficiente reduce la protección. Una exposición excesiva es peligrosa."
    }
  },

  {
    id: "nx-crema-solar-fundente-muy-alta-protecction-spf50",
    name: "Nuxe Sun Crema Solar SPF50+",
    img: "imagenes/nuxe/nx-crema-solar-fundente-muy-alta-protecction-spf50.webp",
    brand: "nuxe",
    line: "nx-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Rostro y/o cuerpo; Nuxe no indica un tipo de piel concreto.",
      tipo: "Crema facial SPF 50+.",
      necesidad: "Protección UVA/UVB y prevención del fotoenvejecimiento.",
      cuando: "Antes de la exposición. Repetir con frecuencia, sobre todo tras nadar o secarse.",
      modo: "Aplicar generosamente. En el rostro, poner antes en las manos y evitar el contorno de ojos.",
      solar: "Una cantidad insuficiente reduce la protección. Una exposición excesiva es peligrosa."
    }
  },

  {
    id: "nx-fluido-ligero-alta-protecci-n-spf50",
    name: "Nuxe Sun Fluido Ligero SPF50",
    img: "imagenes/nuxe/nx-fluido-ligero-alta-protecci-n-spf50.webp",
    brand: "nuxe",
    line: "nx-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Rostro y/o cuerpo; Nuxe no indica un tipo de piel concreto.",
      tipo: "Fluido facial SPF 50 de bolsillo.",
      necesidad: "Protección UVA/UVB y prevención del fotoenvejecimiento.",
      cuando: "Antes de la exposición. Repetir con frecuencia, sobre todo tras nadar o secarse.",
      modo: "Agitar y aplicar en todo el rostro, evitando el contorno de ojos.",
      solar: "Una cantidad insuficiente reduce la protección. Una exposición excesiva es peligrosa."
    }
  },

  {
    id: "nx-spray-solar-delicioso-spf50",
    name: "Nuxe Sun Spray Solar SPF50",
    img: "imagenes/nuxe/nx-spray-solar-delicioso-spf50.webp",
    brand: "nuxe",
    line: "nx-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Rostro y/o cuerpo; Nuxe no indica un tipo de piel concreto.",
      tipo: "Spray rostro y cuerpo SPF 50.",
      necesidad: "Protección UVA/UVB y prevención del fotoenvejecimiento.",
      cuando: "Antes de la exposición. Repetir con frecuencia, sobre todo tras nadar o secarse.",
      modo: "Aplicar generosamente. En el rostro, poner antes en las manos y evitar el contorno de ojos.",
      solar: "Una cantidad insuficiente reduce la protección. Una exposición excesiva es peligrosa."
    }
  },

  {
    id: "nx-spray-solar-delicioso-protecci-n-alta-spf30",
    name: "Nuxe Sun Spray Solar SPF30",
    img: "imagenes/nuxe/nx-spray-solar-delicioso-protecci-n-alta-spf30.webp",
    brand: "nuxe",
    line: "nx-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Rostro y/o cuerpo; Nuxe no indica un tipo de piel concreto.",
      tipo: "Spray rostro y cuerpo SPF 30.",
      necesidad: "Protección UVA/UVB y prevención del fotoenvejecimiento.",
      cuando: "Antes de la exposición. Repetir con frecuencia, sobre todo tras nadar o secarse.",
      modo: "Aplicar generosamente. En el rostro, poner antes en las manos y evitar el contorno de ojos.",
      solar: "Una cantidad insuficiente reduce la protección. Una exposición excesiva es peligrosa."
    }
  },

  {
    id: "nx-aceite-solar-bronceador-spf50-g7",
    name: "Nuxe Sun Aceite Bronceador SPF50",
    img: "imagenes/nuxe/nx-aceite-solar-bronceador-spf50-g7.webp",
    brand: "nuxe",
    line: "nx-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Rostro y/o cuerpo; Nuxe no indica un tipo de piel concreto.",
      tipo: "Aceite rostro y cuerpo SPF 50.",
      necesidad: "Protección UVA/UVB y prevención del fotoenvejecimiento.",
      cuando: "Antes de la exposición. Repetir con frecuencia, sobre todo tras nadar o secarse.",
      modo: "Aplicar generosamente. En el rostro, poner antes en las manos y evitar el contorno de ojos.",
      solar: "Una cantidad insuficiente reduce la protección. Una exposición excesiva es peligrosa."
    }
  },

  {
    id: "nx-aceite-solare-oro-alta-proteccion-spf50",
    name: "Nuxe Sun Aceite Oro SPF50",
    img: "imagenes/nuxe/nx-aceite-solare-oro-alta-proteccion-spf50.webp",
    brand: "nuxe",
    line: "nx-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Rostro y/o cuerpo; Nuxe no indica un tipo de piel concreto.",
      tipo: "Aceite con acabado dorado SPF 50.",
      necesidad: "Protección UVA/UVB y prevención del fotoenvejecimiento.",
      cuando: "Antes de la exposición. Repetir con frecuencia, sobre todo tras nadar o secarse.",
      modo: "Agitar y aplicar generosamente. En el rostro, poner antes en las manos.",
      solar: "Una cantidad insuficiente reduce la protección. Una exposición excesiva es peligrosa."
    }
  },

  {
    id: "nx-aceite-solar-oro-alta-proteccion-spf30",
    name: "Nuxe Sun Aceite Oro SPF30",
    img: "imagenes/nuxe/nx-aceite-solar-oro-alta-proteccion-spf30.webp",
    brand: "nuxe",
    line: "nx-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Rostro y/o cuerpo; Nuxe no indica un tipo de piel concreto.",
      tipo: "Aceite con acabado dorado SPF 30.",
      necesidad: "Protección UVA/UVB y prevención del fotoenvejecimiento.",
      cuando: "Antes de la exposición. Repetir con frecuencia, sobre todo tras nadar o secarse.",
      modo: "Agitar y aplicar generosamente. En el rostro, poner antes en las manos.",
      solar: "Una cantidad insuficiente reduce la protección. Una exposición excesiva es peligrosa."
    }
  },

  {
    id: "nx-crema-solar-fundente-alta-protecci-n-spf30",
    name: "Nuxe Sun Crema Solar SPF30",
    img: "imagenes/nuxe/nx-crema-solar-fundente-alta-protecci-n-spf30.webp",
    brand: "nuxe",
    line: "nx-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Rostro y/o cuerpo; Nuxe no indica un tipo de piel concreto.",
      tipo: "Crema SPF 30 que sublima el bronceado.",
      necesidad: "Protección UVA/UVB y prevención del fotoenvejecimiento.",
      cuando: "Antes de la exposición. Repetir con frecuencia, sobre todo tras nadar o secarse.",
      modo: "Aplicar generosamente. En el rostro, poner antes en las manos y evitar el contorno de ojos.",
      solar: "Una cantidad insuficiente reduce la protección. Una exposición excesiva es peligrosa."
    }
  },

  {
    id: "nx-leche-solar-fundente-alta-protecci-n-spf30-rostro-y-cuerpo",
    name: "Nuxe Sun Leche Solar SPF30",
    img: "imagenes/nuxe/nx-leche-solar-fundente-alta-protecci-n-spf30-rostro-y-cuerpo.webp",
    brand: "nuxe",
    line: "nx-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Rostro y/o cuerpo; Nuxe no indica un tipo de piel concreto.",
      tipo: "Leche rostro y cuerpo SPF 30.",
      necesidad: "Protección UVA/UVB y prevención del fotoenvejecimiento.",
      cuando: "Antes de la exposición. Repetir con frecuencia, sobre todo tras nadar o secarse.",
      modo: "Aplicar generosamente. En el rostro, poner antes en las manos y evitar el contorno de ojos.",
      solar: "Una cantidad insuficiente reduce la protección. Una exposición excesiva es peligrosa."
    }
  },

  {
    id: "nx-bruma-solar-refrescante-spf30",
    name: "Nuxe Sun Bruma Refrescante SPF30",
    img: "imagenes/nuxe/nx-bruma-solar-refrescante-spf30.webp",
    brand: "nuxe",
    line: "nx-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Rostro y/o cuerpo; Nuxe no indica un tipo de piel concreto.",
      tipo: "Bruma para rostro, cuerpo y cuero cabelludo SPF 30.",
      necesidad: "Protección UVA/UVB y prevención del fotoenvejecimiento.",
      cuando: "Antes de la exposición. Repetir con frecuencia, sobre todo tras nadar o secarse.",
      modo: "Aplicar generosamente. En el rostro, poner antes en las manos y evitar el contorno de ojos.",
      solar: "Una cantidad insuficiente reduce la protección. Una exposición excesiva es peligrosa."
    }
  },

  {
    id: "nx-fluido-solar-glow-spf30",
    name: "Nuxe Sun Fluido Glow SPF30",
    img: "imagenes/nuxe/nx-fluido-solar-glow-spf30.webp",
    brand: "nuxe",
    line: "nx-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Rostro y/o cuerpo; Nuxe no indica un tipo de piel concreto.",
      tipo: "Fluido sublimador SPF 30.",
      necesidad: "Protección UVA/UVB y prevención del fotoenvejecimiento.",
      cuando: "Antes de la exposición. Repetir con frecuencia, sobre todo tras nadar o secarse.",
      modo: "Aplicar generosamente. En el rostro, poner antes en las manos y evitar el contorno de ojos.",
      solar: "Una cantidad insuficiente reduce la protección. Una exposición excesiva es peligrosa."
    }
  },

  {
    id: "nx-serum-en-stick-solar-spf50plus",
    name: "Nuxe Sun Sérum en Stick SPF50+",
    img: "imagenes/nuxe/nx-serum-en-stick-solar-spf50plus.webp",
    brand: "nuxe",
    line: "nx-sun",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Rostro y/o cuerpo; Nuxe no indica un tipo de piel concreto.",
      tipo: "Stick invisible antimanchas SPF 50+.",
      necesidad: "Protección UVA/UVB y prevención del fotoenvejecimiento.",
      cuando: "Antes de la exposición. Repetir con frecuencia, sobre todo tras nadar o secarse.",
      modo: "Aplicar en rostro y zonas expuestas (nariz, orejas, manos). No aplicar en los labios.",
      solar: "Una cantidad insuficiente reduce la protección. Una exposición excesiva es peligrosa."
    }
  },

  {
    id: "nx-aceite-l-cteo-capilar-protector-hidratante",
    name: "Nuxe Sun Aceite Lácteo Capilar",
    img: "imagenes/nuxe/nx-aceite-l-cteo-capilar-protector-hidratante.webp",
    brand: "nuxe",
    line: "nx-sun",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Cabello expuesto al sol, la sal y el cloro.",
      tipo: "Aceite lácteo bifásico capilar.",
      necesidad: "Protege e hidrata el cabello.",
      cuando: "Antes y durante el baño.",
      modo: "Agitar y vaporizar a 20 cm sobre el cabello seco o mojado.",
      solar: "No usar como protección solar de rostro y cuerpo."
    }
  },

  {
    id: "nx-leche-refrescante-after-sun-400ml-original",
    name: "Nuxe Sun Leche After-Sun",
    img: "imagenes/nuxe/nx-leche-refrescante-after-sun-400ml-original.webp",
    brand: "nuxe",
    line: "nx-sun",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Piel irritada tras la exposición solar.",
      tipo: "Leche after-sun para rostro y cuerpo.",
      necesidad: "Calma, repara, hidrata y prolonga el bronceado.",
      cuando: "Cada noche tras el sol. También todo el año.",
      modo: "Aplicar de forma generosa."
    }
  },

  {
    id: "nx-champ-y-gel-de-ducha-after-sun-750ml",
    name: "Nuxe Sun Champú y Gel de Ducha After-Sun",
    img: "imagenes/nuxe/nx-champ-y-gel-de-ducha-after-sun-750ml.webp",
    brand: "nuxe",
    line: "nx-sun",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Piel y cabello tras playa o piscina.",
      tipo: "Limpiador de cuerpo y cabello.",
      necesidad: "Elimina filtros, sal, cloro y arena.",
      cuando: "Después de la playa o la piscina.",
      modo: "Aplicar sobre piel y cabello mojados, hacer espuma y aclarar."
    }
  },

  {
    id: "nx-espuma-autobronceadora-hidratante",
    name: "Nuxe Sun Espuma Autobronceadora",
    img: "imagenes/nuxe/nx-espuma-autobronceadora-hidratante.webp",
    brand: "nuxe",
    line: "nx-sun",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Quien busca un bronceado sin sol.",
      tipo: "Espuma autobronceadora para rostro y cuerpo.",
      necesidad: "Bronceado sin marcas hasta una semana.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Exfoliar el día anterior. Agitar y aplicar una dosis por zona."
    }
  },

  {
    id: "nx-polvos-compactos-bronceadores-multiusos",
    name: "Nuxe Sun Polvos Bronceadores",
    img: "imagenes/nuxe/nx-polvos-compactos-bronceadores-multiusos.webp",
    brand: "nuxe",
    line: "nx-sun",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Todos los tonos de piel.",
      tipo: "Polvos multiusos.",
      necesidad: "Intensifica el color y sublima el bronceado.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Aplicar con una brocha grande en las zonas deseadas."
    }
  },

  {
    id: "nx-agua-deliciosa-perfumada-100ml",
    name: "Nuxe Sun Agua Deliciosa Perfumada",
    img: "imagenes/nuxe/nx-agua-deliciosa-perfumada-100ml.webp",
    brand: "nuxe",
    line: "nx-sun",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "Sin perfil de piel: es una fragancia.",
      tipo: "Agua perfumada.",
      necesidad: "Fragancia.",
      cuando: "Tantas veces como sea necesario.",
      modo: "Vaporizar a unos centímetros de la piel, en cuello y muñecas, o sobre el cepillo."
    }
  },

  /* ---------- Nuxe · Sweet Lemon ---------- */
  {
    id: "nx-crema-de-manos-y-u-as-sweet-lemon-50-ml",
    name: "Sweet Lemon Crema de Manos y Uñas",
    img: "imagenes/nuxe/nx-crema-de-manos-y-u-as-sweet-lemon-50-ml.webp",
    brand: "nuxe",
    line: "nx-lemon",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Manos secas.",
      tipo: "Crema bio y vegana.",
      necesidad: "Suaviza y protege de agresiones.",
      cuando: "Nuxe no indica la frecuencia.",
      modo: "Aplicar en el dorso, frotar y masajear los dedos."
    }
  },

  {
    id: "nx-b-lsamo-labial-con-fragancia-de-merengue-de-lim-n",
    name: "Sweet Lemon Bálsamo Labial",
    img: "imagenes/nuxe/nx-b-lsamo-labial-con-fragancia-de-merengue-de-lim-n.webp",
    brand: "nuxe",
    line: "nx-lemon",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Labios secos o fragilizados.",
      tipo: "Bálsamo bio y vegano.",
      necesidad: "Nutre, suaviza y calma.",
      cuando: "Tantas veces como sea necesario.",
      modo: "Aplicar en labios y contorno. También como mascarilla de noche."
    }
  },

  /* ---------- La Roche Posay · Agua termal ---------- */
  {
    id: "lrp-agua-micelar-ultra-pieles-reactivas",
    name: "Agua micelar piel reactiva",
    img: "imagenes/lrp/lrp-agua-micelar-ultra-pieles-reactivas.webp",
    brand: "lrp",
    line: "lrp-aguatermal",
    n: ["limpieza", "rojeces"],
    sk: ["sensible"],
    d: {
      paciente: "Piel reactiva.",
      tipo: "Agua micelar desmaquillante.",
      necesidad: "Retira maquillaje, impurezas y contaminación; hidrata y calma con efecto antitiranteces y antienrojecimiento.",
      limpieza: "Desmaquillante (sin paso indicado)",
      limpiezaDet: "Limpia y desmaquilla con disco de algodón. La marca no indica en qué paso usarla.",
      cuando: "Mañana y noche, especialmente para eliminar el maquillaje.",
      modo: "Empapar un disco de algodón y aplicar sobre el rostro. Presionar ligeramente unos segundos contra la piel antes de retirarlo con suavidad, para no frotar."
    }
  },

  {
    id: "lrp-agua-micelar-ultra-piel-sensible",
    name: "Agua micelar piel sensible",
    img: "imagenes/lrp/lrp-agua-micelar-ultra-piel-sensible.webp",
    brand: "lrp",
    line: "lrp-aguatermal",
    n: ["limpieza"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible.",
      tipo: "Agua micelar desmaquillante.",
      necesidad: "Retira maquillaje, impurezas y contaminación, y calma dejando sensación de confort y frescor.",
      limpieza: "Desmaquillante (sin paso indicado)",
      limpiezaDet: "Limpia y desmaquilla con disco de algodón. La marca no indica en qué paso usarla.",
      cuando: "Mañana y noche, especialmente para eliminar el maquillaje.",
      modo: "Empapar un disco de algodón y aplicar sobre el rostro. Presionar ligeramente unos segundos contra la piel antes de retirarlo con suavidad, para no frotar."
    }
  },

  {
    id: "lrp-agua-micelar-oil-infused",
    name: "Agua micelar oil infused",
    img: "imagenes/lrp/lrp-agua-micelar-oil-infused.webp",
    brand: "lrp",
    line: "lrp-aguatermal",
    n: ["limpieza"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible; quien usa maquillaje resistente al agua.",
      tipo: "Agua micelar con fase oleosa, desmaquillante.",
      necesidad: "Elimina incluso el maquillaje waterproof respetando el equilibrio de la piel; limita la adhesión de partículas de polución.",
      limpieza: "Desmaquillante (sin paso indicado)",
      limpiezaDet: "Limpia y desmaquilla con disco de algodón. La marca no indica en qué paso usarla.",
      cuando: "Mañana y noche, especialmente para eliminar el maquillaje.",
      modo: "Empapar un disco de algodón y aplicar sobre el rostro. Presionar ligeramente unos segundos contra la piel antes de retirarlo con suavidad, para no frotar."
    }
  },

  {
    id: "lrp-agua-termal",
    name: "Agua termal",
    img: "imagenes/lrp/lrp-agua-termal.webp",
    brand: "lrp",
    line: "lrp-aguatermal",
    n: ["rojeces"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible.",
      tipo: "Agua termal en spray.",
      necesidad: "Calma y reduce la irritación, con propiedades antioxidantes.",
      cuando: "Tantas veces como sea necesario.",
      modo: "Vaporizar sobre todo el rostro, dejar actuar 3 minutos y secar a toques. Se puede conservar en el frigorífico para un efecto refrescante."
    }
  },

  /* ---------- La Roche Posay · Anthelios ---------- */
  {
    id: "lrp-anthelios-post-uv-locion-after-sun",
    name: "Anthelios Post-UV loción after-sun",
    img: "imagenes/lrp/lrp-anthelios-post-uv-locion-after-sun.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion", "corporal"],
    sk: ["sensible", "seca"],
    d: {
      paciente: "Piel sensible, seca o deshidratada tras la exposición solar.",
      tipo: "Loción after-sun corporal.",
      necesidad: "Reduce la sensación de calor, repara la sequedad provocada por el sol y refuerza la barrera.",
      cuando: "Después del baño o la ducha.",
      modo: "Aplicar una pequeña cantidad en cada zona por todo el cuerpo y masajear con cuidado. Evitar el contorno de ojos y el contacto con tejidos."
    }
  },

  {
    id: "lrp-posthelios-gel-fondant",
    name: "Posthelios gel fondant",
    img: "imagenes/lrp/lrp-posthelios-gel-fondant.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion", "corporal"],
    sk: ["todas"],
    d: {
      paciente: "Piel caliente e inflamada tras la exposición al sol. La Roche-Posay no especifica un tipo de piel.",
      tipo: "Gel after-sun corporal.",
      necesidad: "Refresca al instante, calma y ayuda a la recuperación de la piel tras el sol.",
      cuando: "La noche posterior a la exposición.",
      modo: "Aplicar una avellana por zona en el cuerpo, después de la ducha o el baño, con un masaje suave."
    }
  },

  {
    id: "lrp-anthelios-uvair-spf-50-plus",
    name: "Anthelios UVAIR SPF50+",
    img: "imagenes/lrp/lrp-anthelios-uvair-spf-50-plus.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Todo tipo de piel; quien busca un acabado invisible y matificante.",
      tipo: "Fotoprotector facial SPF50+.",
      necesidad: "Alta protección UVA/UVB con textura ligera, 24 horas de hidratación y efecto matificante que controla la grasa.",
      cuando: "A diario y antes de la exposición al sol; reaplicar con frecuencia a lo largo del día.",
      modo: "Aplicar el equivalente a dos dedos sobre el rostro y extender uniformemente, antes del maquillaje."
    }
  },

  {
    id: "lrp-anthelios-uvair-spf-50-plus-serum-con-protector-solar",
    name: "Anthelios UVAIR SPF50+ sérum solar",
    img: "imagenes/lrp/lrp-anthelios-uvair-spf-50-plus-serum-con-protector-solar.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Uso diario. La Roche-Posay no especifica un tipo de piel.",
      tipo: "Sérum con protector solar SPF50+.",
      necesidad: "Protege frente a los rayos UV con acabado invisible, hidrata 24 horas y ayuda frente al estrés oxidativo.",
      cuando: "Cada mañana y antes de la exposición solar; reaplicar cada 2 horas.",
      modo: "Dos dedos de producto en rostro, cuello y escote, extendido uniformemente. Es el último paso de la rutina de la mañana y se integra bajo el maquillaje."
    }
  },

  {
    id: "lrp-anthelios-uvair-spf-50-plus-serum-con-color",
    name: "Anthelios UVAIR SPF50+ sérum solar con color",
    img: "imagenes/lrp/lrp-anthelios-uvair-spf-50-plus-serum-con-color.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Uso diario. La Roche-Posay no especifica un tipo de piel.",
      tipo: "Sérum con protector solar SPF50+ con color.",
      necesidad: "Protege frente a los rayos UV, hidrata 24 horas y ayuda frente al estrés oxidativo.",
      cuando: "Cada mañana y antes de la exposición solar; reaplicar cada 2 horas.",
      modo: "Dos dedos de producto en rostro, cuello y escote, extendido uniformemente. Es el último paso de la rutina de la mañana y se integra bajo el maquillaje."
    }
  },

  {
    id: "lrp-anthelios-uvair-vitamin-sun-stick-spf-50-plus",
    name: "Anthelios UVAIR Vitamin Sun stick SPF50+",
    img: "imagenes/lrp/lrp-anthelios-uvair-vitamin-sun-stick-spf-50-plus.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible y con alergia solar.",
      tipo: "Protector solar facial en stick SPF50+.",
      necesidad: "Protección UVA/UVB muy alta, invisible y resistente al sudor y al agua; facilita la reaplicación.",
      cuando: "En cualquier momento del día, incluso sobre el maquillaje; reaplicar cada 2 horas.",
      modo: "Aplicar generosamente sobre el rostro."
    }
  },

  {
    id: "lrp-anthelios-uvmune-400-fluido-antimanchas-spf-50-plus",
    name: "Anthelios UVMUNE 400+ fluido antimanchas SPF50+",
    img: "imagenes/lrp/lrp-anthelios-uvmune-400-fluido-antimanchas-spf-50-plus.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion", "manchas"],
    sk: ["sensible"],
    d: {
      paciente: "Piel con manchas o tendencia a la hiperpigmentación; apto para piel sensible.",
      tipo: "Fotoprotector despigmentante SPF50+.",
      necesidad: "Previene y corrige las manchas y protege frente a UVA ultralargos y la pigmentación provocada por la luz visible de alta energía.",
      cuando: "La Roche-Posay no indica la frecuencia.",
      modo: "La Roche-Posay no detalla cómo aplicarlo."
    }
  },

  {
    id: "lrp-anthelios-uvsport-bruma-invisible-refrescante-spf50-plus",
    name: "Anthelios UVSport bruma invisible refrescante SPF50+",
    img: "imagenes/lrp/lrp-anthelios-uvsport-bruma-invisible-refrescante-spf50-plus.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion"],
    sk: ["sensible"],
    d: {
      paciente: "Deportistas; piel sensible y con alergia solar.",
      tipo: "Bruma solar SPF50+ para deporte.",
      necesidad: "Protección muy alta resistente al sudor y al agua, aplicable sobre piel mojada; refresca y no deja marcas.",
      cuando: "Durante la práctica deportiva; reaplicar cada 2 horas.",
      modo: "Aplicar en rostro y cuerpo una cantidad suficiente hasta formar una película protectora."
    }
  },

  {
    id: "lrp-anthelios-uvsport-locion-resistente-al-sudor-y-la-humedad",
    name: "Anthelios UVSport loción resistente al sudor y la humedad",
    img: "imagenes/lrp/lrp-anthelios-uvsport-locion-resistente-al-sudor-y-la-humedad.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion", "corporal"],
    sk: ["sensible"],
    d: {
      paciente: "Deportistas; piel sensible y reactiva.",
      tipo: "Loción solar corporal SPF50+ para deporte.",
      necesidad: "Protección muy alta con 24 horas de hidratación y 80 minutos de resistencia al agua y al sudor.",
      cuando: "Durante la práctica deportiva, incluso sobre piel sudada o mojada; reaplicar cada 2 horas.",
      modo: "Aplicar por todo el cuerpo una cantidad suficiente hasta formar una película protectora."
    }
  },

  {
    id: "lrp-anthelios-uvsport-pro-resistance-protector-solar-stick-spf50-plus",
    name: "Anthelios UVSport Pro-Resistance stick SPF50+",
    img: "imagenes/lrp/lrp-anthelios-uvsport-pro-resistance-protector-solar-stick-spf50-plus.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion"],
    sk: ["sensible"],
    d: {
      paciente: "Deportistas al aire libre; piel sensible y con alergia solar.",
      tipo: "Protector solar en stick SPF50+ para deporte.",
      necesidad: "Protección muy alta que resiste sudor intenso y calor, invisible y sin migración.",
      cuando: "Durante la práctica deportiva; reaplicar cada 2 horas.",
      modo: "Aplicar por todo el rostro y zonas sensibles: labios, orejas, nariz, tatuajes, cicatrices e imperfecciones."
    }
  },

  {
    id: "lrp-anthelios-100-ka-med",
    name: "Anthelios 100KA+ MED",
    img: "imagenes/lrp/lrp-anthelios-100-ka-med.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Prevención de queratosis actínica y cáncer de piel no melanoma, según la marca. La Roche-Posay no especifica un tipo de piel.",
      tipo: "Producto sanitario con protección solar muy alta.",
      necesidad: "Muy alta protección UVA y UVB de amplio espectro; protege la barrera y promueve la reparación del daño del ADN por radiación UV.",
      cuando: "Cada mañana antes de la exposición al sol; reaplicar cuando sea necesario, máximo 5 veces al día si se aplica en todas las zonas.",
      modo: "Uso tópico (2 mg/cm²). Presiones por zona: cuero cabelludo 5, rostro 5, cuello 3, escote 7 y manos 8."
    }
  },

  {
    id: "lrp-anthelios-uvmune-400-dermo-pediatrics-locion-hidratante-spf-50-plus",
    name: "Anthelios UVMUNE 400 Dermo-Pediatrics loción hidratante SPF50+",
    img: "imagenes/lrp/lrp-anthelios-uvmune-400-dermo-pediatrics-locion-hidratante-spf-50-plus.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion", "corporal"],
    sk: ["sensible", "seca"],
    d: {
      paciente: "Niños, especialmente con piel seca; piel delicada.",
      tipo: "Loción solar infantil SPF50+.",
      necesidad: "Muy alta protección UVB/UVA y UVA ultralarga (filtro Mexoryl 400), con hidratación y muy resistente al agua.",
      cuando: "Justo antes de la exposición al sol; reaplicar con frecuencia, sobre todo tras nadar, sudar o secarse con toalla.",
      modo: "Aplicar una pequeña cantidad en cada zona del cuerpo."
    }
  },

  {
    id: "lrp-anthelios-uvmune-400-dermo-pediatrics-fluido-invisible-spf-50-plus",
    name: "Anthelios UVMUNE 400 Dermo-Pediatrics fluido invisible SPF50+",
    img: "imagenes/lrp/lrp-anthelios-uvmune-400-dermo-pediatrics-fluido-invisible-spf-50-plus.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion"],
    sk: ["sensible"],
    d: {
      paciente: "Niños con piel sensible o reactiva.",
      tipo: "Fluido solar infantil SPF50+.",
      necesidad: "Muy alta protección UVB/UVA y UVA ultralarga (filtro Mexoryl 400); muy resistente al agua.",
      cuando: "Justo antes de la exposición al sol; reaplicar con frecuencia, sobre todo tras nadar, sudar o secarse con toalla.",
      modo: "Una perla por zona en rostro, cuello, escote y zonas expuestas."
    }
  },

  {
    id: "lrp-anthelios-uvmune-400-dermo-pediatrics-spray-invisible-spf-50-plus",
    name: "Anthelios UVMUNE 400 Dermo-Pediatrics spray invisible SPF50+",
    img: "imagenes/lrp/lrp-anthelios-uvmune-400-dermo-pediatrics-spray-invisible-spf-50-plus.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion", "corporal"],
    sk: ["sensible"],
    d: {
      paciente: "Niños; piel infantil.",
      tipo: "Spray solar infantil SPF50+.",
      necesidad: "Muy alta protección UVB/UVA y UVA ultralarga (filtro Mexoryl 400), con aplicación rápida y práctica.",
      cuando: "Justo antes de la exposición al sol; reaplicar cada dos horas.",
      modo: "Utilizar una pequeña cantidad por zona y extender con la mano. No pulverizar directamente sobre el rostro: hacerlo en las palmas antes de aplicar y evitar los ojos."
    }
  },

  {
    id: "lrp-anthelios-dermo-pediatrics-spf-50-leche-bebe",
    name: "Anthelios Dermo-Pediatrics loción para bebés SPF50+",
    img: "imagenes/lrp/lrp-anthelios-dermo-pediatrics-spf-50-leche-bebe.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion", "corporal"],
    sk: ["sensible"],
    d: {
      paciente: "Bebés a partir de 6 meses; piel delicada y sensible.",
      tipo: "Leche solar para bebés SPF50+.",
      necesidad: "Protección muy alta frente a UVB, UVA y UVA ultralargos; hidrata durante la exposición.",
      cuando: "Justo antes de la exposición al sol; reaplicar cada dos horas, sobre todo tras nadar, transpirar o secarse con toalla.",
      modo: "Aplicar generosamente sobre todo el cuerpo."
    }
  },

  {
    id: "lrp-anthelios-dermo-pediatrics-wet-skin-lotion-spf-50-plus-piel-humeda",
    name: "Anthelios Dermo-Pediatrics loción Wet Skin SPF50+",
    img: "imagenes/lrp/lrp-anthelios-dermo-pediatrics-wet-skin-lotion-spf-50-plus-piel-humeda.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion", "corporal"],
    sk: ["todas"],
    d: {
      paciente: "Niños; aplicación sobre piel húmeda tras el baño.",
      tipo: "Loción solar infantil SPF50+ para piel mojada.",
      necesidad: "Protección UVA/UVB muy alta y muy resistente al agua; ayuda frente al estrés oxidativo.",
      cuando: "Antes de la exposición al sol; reaplicar con frecuencia, sobre todo tras sudar o secarse.",
      modo: "Agitar antes de usar y aplicar una perla por zona del cuerpo. No hace falta secar la piel."
    }
  },

  {
    id: "lrp-anthelios-family-spray-spf-50-plus",
    name: "Anthelios Family spray SPF50+",
    img: "imagenes/lrp/lrp-anthelios-family-spray-spf-50-plus.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion", "corporal"],
    sk: ["sensible"],
    d: {
      paciente: "Familias: niños y adultos con piel sensible o reactiva.",
      tipo: "Spray solar corporal SPF50+.",
      necesidad: "Protección UVA/UVB muy alta, ultrarresistente al agua, sudor y arena; hidrata y no pica en los ojos.",
      cuando: "20 minutos antes de la exposición; reaplicar con frecuencia, sobre todo tras transpirar o secarse con toalla.",
      modo: "Una perla por zona del cuerpo, sin pulverizar en el rostro."
    }
  },

  {
    id: "lrp-anthelios-leche-hidratante-spf-50-plus",
    name: "Anthelios leche hidratante SPF50+",
    img: "imagenes/lrp/lrp-anthelios-leche-hidratante-spf-50-plus.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion", "corporal"],
    sk: ["sensible"],
    d: {
      paciente: "Piel reactiva con tendencia a la intolerancia solar.",
      tipo: "Leche solar corporal SPF50+.",
      necesidad: "Protección muy alta con textura no grasa ni pegajosa y sin marcas blancas; resistente al agua.",
      cuando: "20 minutos antes de la exposición; reaplicar con frecuencia, sobre todo tras transpirar o secarse con toalla.",
      modo: "Una perla por zona del cuerpo, sin pulverizar en el rostro."
    }
  },

  {
    id: "lrp-anthelios-invisible-spray-spf50-plus",
    name: "Anthelios spray invisible SPF50+",
    img: "imagenes/lrp/lrp-anthelios-invisible-spray-spf50-plus.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion", "corporal"],
    sk: ["todas"],
    d: {
      paciente: "Uso corporal. La Roche-Posay no especifica un tipo de piel.",
      tipo: "Spray solar corporal SPF50+.",
      necesidad: "Protección muy alta, ultrarresistente al agua, sudor y arena, sin marcas blancas.",
      cuando: "20 minutos antes de la exposición; reaplicar con frecuencia, sobre todo tras transpirar o secarse con toalla.",
      modo: "Una perla por zona del cuerpo y extender con la mano. No pulverizar en el rostro."
    }
  },

  {
    id: "lrp-anthelios-xl-spf-50-bruma-invisible-ultra-ligera",
    name: "Anthelios bruma invisible SPF50+ cuerpo",
    img: "imagenes/lrp/lrp-anthelios-xl-spf-50-bruma-invisible-ultra-ligera.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion", "corporal"],
    sk: ["todas"],
    d: {
      paciente: "Uso corporal. La Roche-Posay no especifica un tipo de piel.",
      tipo: "Bruma solar corporal SPF50+.",
      necesidad: "Protección muy alta de rápida absorción y acabado no graso, sin marcas blancas y resistente al agua.",
      cuando: "20 minutos antes de la exposición; reaplicar con frecuencia, sobre todo tras transpirar o secarse con toalla.",
      modo: "Una perla por zona del cuerpo, sin pulverizar en el rostro."
    }
  },

  {
    id: "lrp-anthelios-spf-50-bruma-facial-invisible-anti-brillos",
    name: "Anthelios bruma invisible anti-brillos SPF50 rostro",
    img: "imagenes/lrp/lrp-anthelios-spf-50-bruma-facial-invisible-anti-brillos.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion"],
    sk: ["sensible", "grasa"],
    d: {
      paciente: "Piel sensible o reactiva, con tendencia alérgica; quien quiere controlar los brillos.",
      tipo: "Bruma solar facial SPF50.",
      necesidad: "Protección UVA/UVB muy alta que controla los brillos y sirve para reaplicar sobre el maquillaje; la marca la plantea como complemento de otro protector.",
      cuando: "20 minutos antes de la exposición, como último paso de la rutina.",
      modo: "Agitar antes de usar y pulverizar sobre cada zona del rostro, cuello, escote y áreas expuestas."
    }
  },

  {
    id: "lrp-anthelios-age-correct-spf-50-cc-crema",
    name: "Anthelios Age Correct con color SPF50",
    img: "imagenes/lrp/lrp-anthelios-age-correct-spf-50-cc-crema.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion", "arrugas", "manchas"],
    sk: ["todas"],
    d: {
      paciente: "Signos de la edad y manchas. La Roche-Posay no especifica un tipo de piel.",
      tipo: "CC crema con protección solar SPF50.",
      necesidad: "Protección muy alta que unifica el tono y ayuda a reducir arrugas y manchas del fotoenvejecimiento.",
      cuando: "20 minutos antes de la exposición, como último paso de la rutina.",
      modo: "Limpiar la piel y aplicar una perla en rostro, cuello, escote y áreas expuestas."
    }
  },

  {
    id: "lrp-anthelios-oil-correct",
    name: "Anthelios Oil Correct SPF50+",
    img: "imagenes/lrp/lrp-anthelios-oil-correct.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion", "acne"],
    sk: ["imperfecciones"],
    d: {
      paciente: "Piel con imperfecciones.",
      tipo: "Fotoprotector diario en gel-crema SPF50+.",
      necesidad: "Protege del fotoenvejecimiento y ayuda a corregir las imperfecciones, con acabado matificante 12 horas.",
      cuando: "20 minutos antes de la exposición, como último paso de la rutina.",
      modo: "Limpiar la piel y aplicar una perla en rostro, cuello, escote y áreas expuestas."
    }
  },

  {
    id: "lrp-anthelios-sensitive-areas-stick-spf-50-plus",
    name: "Anthelios stick para zonas sensibles SPF50+",
    img: "imagenes/lrp/lrp-anthelios-sensitive-areas-stick-spf-50-plus.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion"],
    sk: ["sensible"],
    d: {
      paciente: "Zonas sensibles o sobreexpuestas: labios, nariz, pómulos, cicatrices y contorno de ojos.",
      tipo: "Protector solar en stick SPF50+.",
      necesidad: "Protección muy alta localizada, hidratante, sin marcas blancas y resistente al agua.",
      cuando: "Renovar con frecuencia, sobre todo tras sudar o secarse; también sobre el maquillaje.",
      modo: "Aplicar generosamente en las zonas sensibles."
    }
  },

  {
    id: "lrp-anthelios-uvmune-400-crema-hidratante-spf-50-plus",
    name: "Anthelios UVMUNE 400 crema hidratante SPF50+ sin perfume",
    img: "imagenes/lrp/lrp-anthelios-uvmune-400-crema-hidratante-spf-50-plus.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Piel normal a seca, sensible o reactiva, con tendencia alérgica, especialmente al sol.",
      tipo: "Crema solar facial hidratante SPF50+.",
      necesidad: "Muy alta protección UVB/UVA y UVA ultralarga (filtro Mexoryl 400); aporta confort y evita la tirantez. Puede sustituir a la hidratante de la mañana.",
      cuando: "20 minutos antes de la exposición, como último paso de la rutina.",
      modo: "Una cantidad del tamaño de una perla por zona en rostro, cuello, escote y todas las áreas expuestas. Masajear hasta su absorción."
    }
  },

  {
    id: "lrp-anthelios-uvmune-400-crema-hidratante-spf-50-plus-con-color",
    name: "Anthelios UVMUNE 400 crema hidratante SPF50+ con color",
    img: "imagenes/lrp/lrp-anthelios-uvmune-400-crema-hidratante-spf-50-plus-con-color.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Piel normal a seca, sensible o reactiva, con tendencia alérgica, especialmente al sol.",
      tipo: "Crema solar facial hidratante SPF50+ con color.",
      necesidad: "Muy alta protección UVB/UVA y UVA ultralarga (filtro Mexoryl 400), con hidratación duradera y acabado confortable.",
      cuando: "20 minutos antes de la exposición, como último paso de la rutina.",
      modo: "Agitar antes de usar. Una cantidad del tamaño de una perla por zona en rostro, cuello, escote y todas las áreas expuestas. "
    }
  },

  {
    id: "lrp-anthelios-uvmune-400-fluido-invisible-spf-50-plus-sin-perfume",
    name: "Anthelios UVMUNE 400 fluido invisible SPF50+ sin perfume",
    img: "imagenes/lrp/lrp-anthelios-uvmune-400-fluido-invisible-spf-50-plus-sin-perfume.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion"],
    sk: ["todas", "sensible"],
    d: {
      paciente: "Todo tipo de pieles, incluidas las sensibles.",
      tipo: "Fluido solar facial SPF50+.",
      necesidad: "Muy alta protección UVB/UVA y UVA ultralarga (filtro Mexoryl 400), ultrarresistente e invisible.",
      cuando: "20 minutos antes de la exposición, como último paso de la rutina.",
      modo: "Una cantidad del tamaño de una perla por zona en rostro, cuello, escote y todas las áreas expuestas. Masajear hasta su absorción."
    }
  },

  {
    id: "lrp-anthelios-uvmune-400-fluido-spf-50-plus-con-color",
    name: "Anthelios UVMUNE 400 fluido invisible SPF50+ con color",
    img: "imagenes/lrp/lrp-anthelios-uvmune-400-fluido-spf-50-plus-con-color.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion"],
    sk: ["todas"],
    d: {
      paciente: "Uso diario. La Roche-Posay no especifica un tipo de piel.",
      tipo: "Fluido solar facial SPF50+ con color.",
      necesidad: "Muy alta protección UVB/UVA y UVA ultralarga (filtro Mexoryl 400), con acabado natural que unifica el tono.",
      cuando: "20 minutos antes de la exposición, como último paso de la rutina.",
      modo: "Una cantidad del tamaño de una perla por zona en rostro, cuello, escote y todas las áreas expuestas. Masajear hasta su absorción."
    }
  },

  {
    id: "lrp-anthelios-uvmune-400-oil-control-fluido-spf-50-plus",
    name: "Anthelios UVMUNE 400 Oil Control fluido SPF50+",
    img: "imagenes/lrp/lrp-anthelios-uvmune-400-oil-control-fluido-spf-50-plus.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion"],
    sk: ["grasa"],
    d: {
      paciente: "Piel grasa.",
      tipo: "Fluido solar facial matificante SPF50+.",
      necesidad: "Muy alta protección UVB/UVA y UVA ultralarga (filtro Mexoryl 400); controla los brillos con acabado mate.",
      cuando: "Justo antes de la exposición al sol; reaplicar con frecuencia, sobre todo tras nadar, sudar o secarse con toalla.",
      modo: "Aplicar una perla por zona."
    }
  },

  {
    id: "lrp-anthelios-uvmune-400-oil-control-fluido-spf-50-plus-con-color",
    name: "Anthelios UVMUNE 400 Oil Control fluido SPF50+ con color",
    img: "imagenes/lrp/lrp-anthelios-uvmune-400-oil-control-fluido-spf-50-plus-con-color.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion"],
    sk: ["grasa", "mixta"],
    d: {
      paciente: "Piel mixta a grasa.",
      tipo: "Fluido solar facial matificante SPF50+ con color.",
      necesidad: "Muy alta protección UVB/UVA y UVA ultralarga (filtro Mexoryl 400); controla los brillos y unifica el tono.",
      cuando: "Justo antes de la exposición al sol; reaplicar con frecuencia, sobre todo tras nadar, sudar o secarse con toalla.",
      modo: "Aplicar una perla por zona."
    }
  },

  {
    id: "lrp-anthelios-uvmune-400-oil-control-gel-crema-spf-50-plus-sin-perfume",
    name: "Anthelios UVMUNE 400 Oil Control gel-crema SPF50+ sin perfume",
    img: "imagenes/lrp/lrp-anthelios-uvmune-400-oil-control-gel-crema-spf-50-plus-sin-perfume.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion", "acne"],
    sk: ["grasa", "imperfecciones", "sensible"],
    d: {
      paciente: "Piel grasa con tendencia acneica o imperfecciones; también sensible o reactiva.",
      tipo: "Gel-crema solar facial matificante SPF50+.",
      necesidad: "Muy alta protección UVB/UVA y UVA ultralarga (filtro Mexoryl 400); regula el brillo con acabado mate y no obstruye los poros.",
      cuando: "Justo antes de la exposición al sol; reaplicar con frecuencia, sobre todo tras nadar, sudar o secarse con toalla.",
      modo: "Aplicar una perla por zona."
    }
  },

  {
    id: "lrp-anthelios-uvmune-400-oil-control-gel-crema-spf-50-plus-con-color",
    name: "Anthelios UVMUNE 400 Oil Control gel-crema SPF50+ con color",
    img: "imagenes/lrp/lrp-anthelios-uvmune-400-oil-control-gel-crema-spf-50-plus-con-color.webp",
    brand: "lrp",
    line: "lrp-anthelios",
    n: ["fotoproteccion", "acne"],
    sk: ["grasa", "mixta", "imperfecciones"],
    d: {
      paciente: "Piel mixta a grasa, incluida la de tendencia acneica.",
      tipo: "Gel-crema solar facial matificante SPF50+ con color.",
      necesidad: "Muy alta protección UVB/UVA y UVA ultralarga (filtro Mexoryl 400); controla el brillo, unifica el tono y no obstruye los poros.",
      cuando: "Justo antes de la exposición al sol; reaplicar con frecuencia, sobre todo tras nadar, sudar o secarse con toalla.",
      modo: "Aplicar una perla por zona."
    }
  },

  /* ---------- La Roche Posay · Cicaplast ---------- */
  {
    id: "lrp-cicaplast-b5-serum",
    name: "Cicaplast B5 sérum",
    img: "imagenes/lrp/lrp-cicaplast-b5-serum.webp",
    brand: "lrp",
    line: "lrp-cicaplast",
    n: ["deshidratacion", "rojeces"],
    sk: ["sensible"],
    d: {
      paciente: "Piel deshidratada o irritada, con la barrera fragilizada.",
      tipo: "Sérum reparador con 10 % de vitamina B5.",
      necesidad: "Repara la barrera cutánea, la protege de agresiones diarias e hidrata 24 horas.",
      cuando: "Mañana y noche.",
      modo: "1 a 2 gotas en rostro y cuello. Esperar 1 minuto antes de aplicar otros productos."
    }
  },

  {
    id: "lrp-cicaplast-baume-b5-plus",
    name: "Cicaplast Baume B5+",
    img: "imagenes/lrp/lrp-cicaplast-baume-b5-plus.webp",
    brand: "lrp",
    line: "lrp-cicaplast",
    n: ["seca", "rojeces", "corporal"],
    sk: ["todas", "sensible"],
    d: {
      paciente: "Piel irritada de adultos, bebés y niños.",
      tipo: "Bálsamo reparador multiusos.",
      necesidad: "Calma, nutre y protege la piel irritada, y acelera la reparación de la barrera.",
      cuando: "1 a 2 veces al día.",
      modo: "Capa gruesa sobre piel limpia y seca en cuerpo, cara, labios y zonas íntimas. Evitar el contorno de ojos. No aplicar sobre heridas abiertas."
    }
  },

  {
    id: "lrp-cicaplast-baume-b5-spf-50",
    name: "Cicaplast Baume B5+ SPF50",
    img: "imagenes/lrp/lrp-cicaplast-baume-b5-spf-50.webp",
    brand: "lrp",
    line: "lrp-cicaplast",
    n: ["seca", "manchas", "corporal"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Piel seca e irritada; marcas y tatuajes.",
      tipo: "Crema reparadora de rostro y cuerpo con SPF50.",
      necesidad: "Repara la barrera y mejora la apariencia de las marcas; ayuda a conservar el color del tatuaje.",
      cuando: "Al final de la rutina.",
      modo: "Capa gruesa sobre piel limpia y seca en cuerpo y rostro. Evitar el contorno de ojos. No aplicar sobre heridas abiertas.",
      solar: "La marca indica que no es un producto de protección solar: en exposición intensa o prolongada, usar un protector solar adaptado."
    }
  },

  {
    id: "lrp-cicaplast-gel-b5",
    name: "Cicaplast Gel B5",
    img: "imagenes/lrp/lrp-cicaplast-gel-b5.webp",
    brand: "lrp",
    line: "lrp-cicaplast",
    n: ["corporal"],
    sk: ["todas"],
    d: {
      paciente: "Piel cicatrizada y marcas, en niños y adultos.",
      tipo: "Gel de silicona reparador.",
      necesidad: "Favorece la recuperación epidérmica y mejora el aspecto de las marcas, con efecto de apósito invisible.",
      cuando: "1 a 2 veces al día, mañana y noche.",
      modo: "Una perla en cada zona que lo necesite. Solo sobre piel cicatrizada, nunca sobre heridas abiertas o sangrantes. Evitar el contorno de ojos."
    }
  },

  {
    id: "lrp-cicaplast-manos",
    name: "Cicaplast Manos",
    img: "imagenes/lrp/lrp-cicaplast-manos.webp",
    brand: "lrp",
    line: "lrp-cicaplast",
    n: ["seca", "corporal"],
    sk: ["sensible", "seca"],
    d: {
      paciente: "Manos excesivamente trabajadas, con enrojecimiento y asperezas; piel sensible y con tendencia atópica.",
      tipo: "Crema reparadora de manos.",
      necesidad: "Calma, nutre y restaura la barrera; reduce el enrojecimiento y las asperezas.",
      cuando: "Tantas veces como sea necesario, sobre todo tras lavarse las manos.",
      modo: "Aplicar generosamente en las manos. Se pueden retomar las actividades de inmediato."
    }
  },

  {
    id: "lrp-cicaplast-lavant-b5",
    name: "Cicaplast Lavant B5",
    img: "imagenes/lrp/lrp-cicaplast-lavant-b5.webp",
    brand: "lrp",
    line: "lrp-cicaplast",
    n: ["limpieza", "corporal"],
    sk: ["todas"],
    d: {
      paciente: "Piel que necesita una limpieza suave sin resecar. La Roche-Posay no especifica un tipo de piel.",
      tipo: "Gel espumoso limpiador de rostro y cuerpo.",
      necesidad: "Limpia sin alterar el equilibrio natural de la piel y calma con pantenol.",
      limpieza: "Limpiador (sin paso indicado)",
      limpiezaDet: "La marca no indica paso.",
      cuando: "1 a 2 veces al día, mañana y noche.",
      modo: "Una dosis mezclada con agua en la palma, aplicar sobre la zona, aclarar abundantemente y secar sin frotar."
    }
  },

  {
    id: "lrp-cicaplast-labios",
    name: "Cicaplast Labios",
    img: "imagenes/lrp/lrp-cicaplast-labios.webp",
    brand: "lrp",
    line: "lrp-cicaplast",
    n: ["seca"],
    sk: ["todas"],
    d: {
      paciente: "Labios secos, agrietados o fragilizados, en niños y adultos.",
      tipo: "Bálsamo reparador de labios.",
      necesidad: "Repara, alivia la tirantez y ayuda a restaurar la barrera y la hidratación.",
      cuando: "Tantas veces como sea necesario.",
      modo: "Aplicar generosamente en los labios. No ingerir."
    }
  },

  /* ---------- La Roche Posay · Effaclar ---------- */
  {
    id: "lrp-effaclar-az-gel-crema",
    name: "Effaclar A.Z. gel-crema",
    img: "imagenes/lrp/lrp-effaclar-az-gel-crema.webp",
    brand: "lrp",
    line: "lrp-effaclar",
    n: ["acne", "arrugas"],
    sk: ["imperfecciones", "sensible"],
    d: {
      paciente: "Piel adulta con acné, marcas y arrugas; apto para piel sensible.",
      tipo: "Gel-crema con ácido azelaico, salicílico y hialurónico.",
      necesidad: "Reduce imperfecciones, marcas de acné y arrugas.",
      cuando: "Mañana y noche.",
      modo: "Una dosis en el rostro, después del limpiador y el sérum, y antes del maquillaje. Evitar el contorno de ojos.",
      solar: "Aplicar SPF a continuación durante el día."
    }
  },

  {
    id: "lrp-effaclar-duo-plus-m-anti-imperfections-triple-corrective-care",
    name: "Effaclar Duo+M",
    img: "imagenes/lrp/lrp-effaclar-duo-plus-m-anti-imperfections-triple-corrective-care.webp",
    brand: "lrp",
    line: "lrp-effaclar",
    n: ["acne"],
    sk: ["grasa", "imperfecciones"],
    d: {
      paciente: "Piel grasa con tendencia acneica, a partir de 10 años.",
      tipo: "Crema correctora antiimperfecciones.",
      necesidad: "Corrige puntos negros, imperfecciones y marcas persistentes de acné.",
      cuando: "Mañana y/o noche.",
      modo: "Una pequeña cantidad en todo el rostro después de limpiar con Effaclar gel limpiador y antes de maquillarse. Evitar el contorno de ojos."
    }
  },

  {
    id: "lrp-effaclar-duo-plus-m-unifiant",
    name: "Effaclar Duo+M Unifiant",
    img: "imagenes/lrp/lrp-effaclar-duo-plus-m-unifiant.webp",
    brand: "lrp",
    line: "lrp-effaclar",
    n: ["acne"],
    sk: ["imperfecciones"],
    d: {
      paciente: "Piel con tendencia acneica.",
      tipo: "Crema antiimperfecciones unificadora.",
      necesidad: "Reduce imperfecciones y marcas de acné, dejando una piel más uniforme.",
      cuando: "A diario como hidratante.",
      modo: "Una pequeña cantidad en todo el rostro tras Effaclar gel limpiador purificante +M, extendiendo hasta difuminar. Evitar el contorno de ojos."
    }
  },

  {
    id: "lrp-effaclar-duo-plus-unifiant",
    name: "Effaclar Duo (+) Unifiant",
    img: "imagenes/lrp/lrp-effaclar-duo-plus-unifiant.webp",
    brand: "lrp",
    line: "lrp-effaclar",
    n: ["acne", "rojeces"],
    sk: ["grasa", "imperfecciones"],
    d: {
      paciente: "Piel grasa o mixta con imperfecciones y marcas rojas.",
      tipo: "Crema correctora unificadora con pigmentos.",
      necesidad: "Reduce imperfecciones y marcas y disimula las rojeces al instante; hidrata 24 horas.",
      cuando: "Por la mañana, al final de la rutina; se puede reaplicar durante el día.",
      modo: "Una avellana con las yemas de los dedos en la cara, evitando los ojos. No apretar los granos."
    }
  },

  {
    id: "lrp-effaclar-duo-plus-spf-30",
    name: "Effaclar Duo+M SPF30",
    img: "imagenes/lrp/lrp-effaclar-duo-plus-spf-30.webp",
    brand: "lrp",
    line: "lrp-effaclar",
    n: ["acne", "fotoproteccion"],
    sk: ["grasa", "imperfecciones"],
    d: {
      paciente: "Piel grasa con tendencia acneica.",
      tipo: "Crema antiimperfecciones en gel con SPF30.",
      necesidad: "Reduce granos, marcas e imperfecciones, desobstruye poros y controla el brillo con protección solar.",
      cuando: "Por la mañana. El modo de empleo dice «mañana y/o noche», pero las preguntas frecuentes de la marca desaconsejan la noche por sus filtros solares.",
      modo: "Una avellana en el rostro, calentándola para facilitar su absorción. Evitar el contorno de ojos.",
      solar: "Suficiente para el día a día en ciudad; en exposición intensa, un SPF50+ específico encima cada 2 horas."
    }
  },

  {
    id: "lrp-effaclar-duo-plus-m-parches",
    name: "Effaclar Duo+M parches anti-granos",
    img: "imagenes/lrp/lrp-effaclar-duo-plus-m-parches.webp",
    brand: "lrp",
    line: "lrp-effaclar",
    n: ["acne"],
    sk: ["imperfecciones"],
    d: {
      paciente: "Granos e imperfecciones localizados; bien tolerados por piel sensible.",
      tipo: "Parches ultrafinos de un solo uso.",
      necesidad: "Protegen de la manipulación y las bacterias, absorben fluidos y favorecen la recuperación de la lesión.",
      cuando: "Mañana y/o noche.",
      modo: "Despegar y aplicar sobre piel limpia, después de la crema Effaclar Duo+M. Se pueden poner varios a la vez y maquillar encima."
    }
  },

  {
    id: "lrp-effaclar-mat-plus",
    name: "Effaclar Mat+",
    img: "imagenes/lrp/lrp-effaclar-mat-plus.webp",
    brand: "lrp",
    line: "lrp-effaclar",
    n: ["poros", "acne"],
    sk: ["grasa", "sensible"],
    d: {
      paciente: "Piel grasa con brillos y poros dilatados; apta para piel sensible.",
      tipo: "Crema hidratante matificante.",
      necesidad: "Matifica de forma duradera, reduce la apariencia de los poros e hidrata 24 horas.",
      cuando: "Mañana y/o noche.",
      modo: "Una avellana en todo el rostro limpio, evitando el contorno de ojos. Sirve como prebase de maquillaje."
    }
  },

  {
    id: "lrp-effaclar-supramolecular-corrector-de-sebo-y-poros",
    name: "Effaclar Supramolecular corrector de sebo y poros",
    img: "imagenes/lrp/lrp-effaclar-supramolecular-corrector-de-sebo-y-poros.webp",
    brand: "lrp",
    line: "lrp-effaclar",
    n: ["poros"],
    sk: ["grasa"],
    d: {
      paciente: "Piel grasa con poros visibles.",
      tipo: "Gel hidratante corrector.",
      necesidad: "Reduce el exceso de sebo y los poros visibles, y deja la piel suave y matificada.",
      cuando: "Mañana y/o noche.",
      modo: "3 a 4 gotas en rostro, cuello y escote, tras limpiar con el gel limpiador Effaclar Supramolecular."
    }
  },

  {
    id: "lrp-effaclar-ai",
    name: "Effaclar A.I.",
    img: "imagenes/lrp/lrp-effaclar-ai.webp",
    brand: "lrp",
    line: "lrp-effaclar",
    n: ["acne"],
    sk: ["grasa", "imperfecciones"],
    d: {
      paciente: "Piel grasa con tendencia acneica e imperfecciones localizadas.",
      tipo: "Corrector localizado de imperfecciones.",
      necesidad: "Corrige y disimula los granos más rebeldes; se combina con Effaclar Duo+M en todo el rostro.",
      cuando: "Mañana y/o noche, hasta que desaparezcan; se puede reaplicar de día.",
      modo: "Una pequeña gota en cada imperfección. Se puede maquillar encima."
    }
  },

  {
    id: "lrp-effaclar-locion-astringente",
    name: "Effaclar loción astringente",
    img: "imagenes/lrp/lrp-effaclar-locion-astringente.webp",
    brand: "lrp",
    line: "lrp-effaclar",
    n: ["poros"],
    sk: ["grasa", "sensible"],
    d: {
      paciente: "Piel grasa con poros obstruidos; tolerancia comprobada en piel sensible.",
      tipo: "Loción astringente con LHA.",
      necesidad: "Reduce el tamaño de los poros y los desobstruye, con efecto calmante y antioxidante.",
      cuando: "Mañana y/o noche.",
      modo: "Unas gotas en un algodón húmedo, pasar con suavidad por el rostro. Evitar el contorno de ojos."
    }
  },

  {
    id: "lrp-effaclar-supramolecular-gel-limpiador-para-piel-grasa-y-poros-visibles",
    name: "Effaclar Supramolecular gel limpiador",
    img: "imagenes/lrp/lrp-effaclar-supramolecular-gel-limpiador-para-piel-grasa-y-poros-visibles.webp",
    brand: "lrp",
    line: "lrp-effaclar",
    n: ["limpieza", "poros"],
    sk: ["grasa", "sensible"],
    d: {
      paciente: "Piel grasa con poros visibles; apto para piel sensible.",
      tipo: "Gel limpiador purificante.",
      necesidad: "Elimina el exceso de sebo, impurezas y restos de contaminación, y reduce los brillos.",
      limpieza: "Limpiador (sin paso indicado)",
      limpiezaDet: "La marca no indica paso.",
      cuando: "Mañana y/o noche.",
      modo: "3 a 4 gotas sobre piel húmeda de rostro y cuello, masajear y aclarar."
    }
  },

  {
    id: "lrp-effaclar-h-iso-biome",
    name: "Effaclar H ISO-Biome",
    img: "imagenes/lrp/lrp-effaclar-h-iso-biome.webp",
    brand: "lrp",
    line: "lrp-effaclar",
    n: ["deshidratacion", "acne"],
    sk: ["sensible", "imperfecciones"],
    d: {
      paciente: "Piel fragilizada por tratamientos antiacné.",
      tipo: "Crema hidratante calmante.",
      necesidad: "Hidrata, calma, refuerza la barrera y alivia la sensación de sequedad.",
      cuando: "Mañana y/o noche.",
      modo: "Una avellana sobre el rostro limpio."
    }
  },

  {
    id: "lrp-effaclar-h-iso-biome-crema-limpiadora",
    name: "Effaclar H ISO-Biome crema limpiadora",
    img: "imagenes/lrp/lrp-effaclar-h-iso-biome-crema-limpiadora.webp",
    brand: "lrp",
    line: "lrp-effaclar",
    n: ["limpieza", "acne"],
    sk: ["sensible", "imperfecciones"],
    d: {
      paciente: "Piel con tendencia acneica, muy sensible o reseca por tratamientos como la isotretinoína.",
      tipo: "Crema limpiadora suave.",
      necesidad: "Limpia, purifica y calma; reduce el secado excesivo que causan los tratamientos.",
      limpieza: "Limpiador (sin paso indicado)",
      limpiezaDet: "La marca no indica paso.",
      cuando: "Mañana y/o noche.",
      modo: "Una avellana en el rostro evitando los ojos. Aclarar con agua y secar con una toalla."
    }
  },

  {
    id: "lrp-effaclar-k-plus",
    name: "Effaclar K (+)",
    img: "imagenes/lrp/lrp-effaclar-k-plus.webp",
    brand: "lrp",
    line: "lrp-effaclar",
    n: ["poros", "acne"],
    sk: ["grasa"],
    d: {
      paciente: "Piel grasa con puntos negros recurrentes y textura irregular.",
      tipo: "Crema renovadora en aquagel.",
      necesidad: "Alisa la textura, desobstruye los poros y controla los brillos.",
      cuando: "Mañana y/o noche.",
      modo: "Una avellana sobre el rostro limpio, evitando los ojos. Sirve como prebase de maquillaje."
    }
  },

  {
    id: "lrp-effaclar-agua-micelar",
    name: "Effaclar agua micelar",
    img: "imagenes/lrp/lrp-effaclar-agua-micelar.webp",
    brand: "lrp",
    line: "lrp-effaclar",
    n: ["limpieza"],
    sk: ["grasa", "sensible"],
    d: {
      paciente: "Piel grasa; tolerancia testada en piel sensible.",
      tipo: "Agua micelar purificante.",
      necesidad: "Elimina maquillaje, impurezas y suciedad; deja la piel limpia y con menos brillos.",
      limpieza: "Doble limpieza · 1.er paso",
      limpiezaDet: "Para un desmaquillado completo, la marca recomienda usarla primero y seguir con Effaclar gel limpiador purificante +M.",
      cuando: "Mañana y/o noche.",
      modo: "Impregnar un algodón con unas gotas y pasar por el rostro, sin aclarado."
    }
  },

  {
    id: "lrp-effaclar-gel-limpiador-purificante-plus-m",
    name: "Effaclar gel limpiador purificante +M",
    img: "imagenes/lrp/lrp-effaclar-gel-limpiador-purificante-plus-m.webp",
    brand: "lrp",
    line: "lrp-effaclar",
    n: ["limpieza", "acne"],
    sk: ["grasa", "imperfecciones"],
    d: {
      paciente: "Piel grasa con tendencia acneica.",
      tipo: "Gel limpiador en espuma.",
      necesidad: "Elimina impurezas y purifica sin resecar; reduce imperfecciones y puntos negros.",
      limpieza: "Doble limpieza · 2.º paso",
      limpiezaDet: "Basta para la limpieza diaria; para desmaquillar por completo, la marca lo pone después de Effaclar agua micelar.",
      cuando: "Mañana y/o noche.",
      modo: "Una pequeña cantidad con agua templada, masajear en círculos hasta hacer espuma y aclarar. También apto para el cuerpo."
    }
  },

  {
    id: "lrp-effaclar-gel-purificante-micro-exfoliante",
    name: "Effaclar gel purificante micro-exfoliante",
    img: "imagenes/lrp/lrp-effaclar-gel-purificante-micro-exfoliante.webp",
    brand: "lrp",
    line: "lrp-effaclar",
    n: ["limpieza", "acne", "poros"],
    sk: ["grasa", "imperfecciones"],
    d: {
      paciente: "Piel grasa con tendencia acneica e imperfecciones recurrentes.",
      tipo: "Gel limpiador micro-exfoliante.",
      necesidad: "Limpia, elimina células muertas sin irritar, desobstruye poros y controla los brillos.",
      limpieza: "Exfoliante",
      limpiezaDet: "Limpiador con micro-exfoliación diaria.",
      cuando: "Mañana y/o noche, de uso diario. Con piel muy sensible, se puede empezar en días alternos.",
      modo: "Una avellana en el rostro con movimientos circulares suaves y agua tibia. Puede usarse en el cuerpo. No hace falta otro exfoliante: podría irritar."
    }
  },

  {
    id: "lrp-effaclar-ultra-concentrated-serum",
    name: "Effaclar sérum",
    img: "imagenes/lrp/lrp-effaclar-ultra-concentrated-serum.webp",
    brand: "lrp",
    line: "lrp-effaclar",
    n: ["acne", "poros"],
    sk: ["imperfecciones", "sensible"],
    d: {
      paciente: "Piel con imperfecciones, marcas y poros visibles; apto para piel sensible.",
      tipo: "Sérum concentrado con ácidos dermatológicos.",
      necesidad: "Microexfolia, alisa la superficie, desobstruye los poros y reduce la acumulación de sebo.",
      cuando: "Por la noche. Empezar en días alternos antes de pasar a diario.",
      modo: "3 gotas en todo el rostro con un masaje suave. Evitar el contorno de ojos.",
      solar: "Imprescindible SPF30 o superior cada mañana: los ácidos vuelven la piel más sensible al sol."
    }
  },

  /* ---------- La Roche Posay · Hyalu B5 ---------- */
  {
    id: "lrp-hyalu-b5-suractivated-crema",
    name: "Hyalu B5 Suractivated crema reafirmante antiarrugas",
    img: "imagenes/lrp/lrp-hyalu-b5-suractivated-crema.webp",
    brand: "lrp",
    line: "lrp-hyalu",
    n: ["arrugas", "flacidez"],
    sk: ["todas"],
    d: {
      paciente: "Arrugas y pérdida de firmeza. La Roche-Posay no especifica un tipo de piel.",
      tipo: "Crema reafirmante antiarrugas.",
      necesidad: "Rellena, mejora la firmeza e hidrata intensamente con acabado ligero.",
      cuando: "Mañana y noche, todo el año.",
      modo: "Una avellana en rostro, cuello y escote con las yemas de los dedos, sola o tras un sérum.",
      solar: "A continuación, aplicar SPF."
    }
  },

  {
    id: "lrp-hyalu-b5-suractivated-crema-spf30",
    name: "Hyalu B5 Suractivated crema SPF30",
    img: "imagenes/lrp/lrp-hyalu-b5-suractivated-crema-spf30.webp",
    brand: "lrp",
    line: "lrp-hyalu",
    n: ["arrugas", "deshidratacion"],
    sk: ["todas"],
    d: {
      paciente: "Arrugas y barrera dañada. La Roche-Posay no especifica un tipo de piel.",
      tipo: "Crema hidratante antiarrugas con SPF30.",
      necesidad: "Hidrata, rellena las arrugas, repara la barrera y protege del sol.",
      cuando: "Mañana y noche.",
      modo: "Una avellana en rostro, cuello y escote con las yemas de los dedos, sola o tras un sérum."
    }
  },

  {
    id: "lrp-hyalu-b5-suractivated-serum",
    name: "Hyalu B5 Suractivated sérum antiarrugas reafirmante",
    img: "imagenes/lrp/lrp-hyalu-b5-suractivated-serum.webp",
    brand: "lrp",
    line: "lrp-hyalu",
    n: ["arrugas", "flacidez", "deshidratacion"],
    sk: ["todas", "sensible"],
    d: {
      paciente: "Todos los tipos y tonos de piel, incluida la sensible.",
      tipo: "Sérum antiarrugas reafirmante.",
      necesidad: "Hidrata intensamente, mejora la elasticidad, refuerza la barrera y corrige las arrugas.",
      cuando: "Mañana y noche, todo el año.",
      modo: "3 a 4 gotas en rostro y cuello, con masajes suaves desde el centro del rostro hacia abajo."
    }
  },

  {
    id: "lrp-hyalu-b5-ampollas",
    name: "Hyalu B5 ampollas",
    img: "imagenes/lrp/lrp-hyalu-b5-ampollas.webp",
    brand: "lrp",
    line: "lrp-hyalu",
    n: ["arrugas", "deshidratacion"],
    sk: ["todas"],
    d: {
      paciente: "Arrugas; probado en piel después de procedimientos estéticos.",
      tipo: "Ampollas concentradas antiedad.",
      necesidad: "Rellenan y reparan la piel, con piel más hidratada y reducción de arrugas.",
      cuando: "Mañana y noche.",
      modo: "Romper la parte superior de la ampolla, añadir el aplicador y poner 3 gotas en la cara, evitando el contorno de ojos."
    }
  },

  {
    id: "lrp-hyalu-b5-water-gel-spf30",
    name: "Hyalu B5 Water Gel SPF30",
    img: "imagenes/lrp/lrp-hyalu-b5-water-gel-spf30.webp",
    brand: "lrp",
    line: "lrp-hyalu",
    n: ["arrugas", "deshidratacion"],
    sk: ["mixta", "grasa"],
    d: {
      paciente: "Piel mixta o grasa que busca hidratación y protección sin efecto graso.",
      tipo: "Aquagel hidratante con SPF30.",
      necesidad: "Rellena, repara y protege frente a la radiación UV y la polución; refresca.",
      cuando: "Todo el día.",
      modo: "3 a 4 gotas en rostro y cuello sobre piel limpia y seca. Sirve como prebase de maquillaje."
    }
  },

  {
    id: "lrp-hyalu-b5-crema",
    name: "Hyalu B5 crema",
    img: "imagenes/lrp/lrp-hyalu-b5-crema.webp",
    brand: "lrp",
    line: "lrp-hyalu",
    n: ["arrugas", "deshidratacion"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible con arrugas.",
      tipo: "Crema antiarrugas reparadora.",
      necesidad: "Repara y rellena, hidrata profundamente y mejora la elasticidad.",
      cuando: "Mañana y noche.",
      modo: "Una avellana sobre el rostro limpio, cuello y escote."
    }
  },

  {
    id: "lrp-hyalu-b5-serum",
    name: "Hyalu B5 sérum",
    img: "imagenes/lrp/lrp-hyalu-b5-serum.webp",
    brand: "lrp",
    line: "lrp-hyalu",
    n: ["arrugas", "deshidratacion"],
    sk: ["sensible"],
    d: {
      paciente: "Ideal para piel sensible.",
      tipo: "Sérum antiarrugas en aquagel.",
      necesidad: "Rellena y reduce las arrugas con una textura fresca y fundente.",
      cuando: "Mañana y noche.",
      modo: "3 a 4 gotas sobre el rostro limpio, cuello y escote."
    }
  },

  {
    id: "lrp-hyalu-b5-serum-de-ojos",
    name: "Hyalu B5 sérum de ojos",
    img: "imagenes/lrp/lrp-hyalu-b5-serum-de-ojos.webp",
    brand: "lrp",
    line: "lrp-hyalu",
    n: ["ojos", "arrugas"],
    sk: ["sensible"],
    d: {
      paciente: "Contorno con ojeras y arrugas; ojos sensibles y usuarios de lentes de contacto.",
      tipo: "Sérum de contorno de ojos.",
      necesidad: "Hidrata al instante y en 2 semanas reduce arrugas, líneas de expresión y ojeras.",
      cuando: "Mañana y noche.",
      modo: "Una gota, extendiendo con movimientos ascendentes y masajeando el contorno con el aplicador; terminar con la yema de los dedos."
    }
  },

  {
    id: "lrp-hyalu-b5-ojos",
    name: "Hyalu B5 ojos",
    img: "imagenes/lrp/lrp-hyalu-b5-ojos.webp",
    brand: "lrp",
    line: "lrp-hyalu",
    n: ["ojos", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Contorno de ojos con arrugas y líneas de expresión. La Roche-Posay no especifica un tipo de piel.",
      tipo: "Crema de contorno de ojos.",
      necesidad: "Redensifica, repara la barrera y reduce arrugas y líneas de expresión.",
      cuando: "Mañana y noche.",
      modo: "Aplicar en el contorno de ojos, sin acercarse demasiado al ojo: por debajo de los huesos y por encima de los ojos."
    }
  },

  /* ---------- La Roche Posay · Hydraphase ---------- */
  {
    id: "lrp-hydraphase-ha-ligera",
    name: "Hydraphase HA ligera",
    img: "imagenes/lrp/lrp-hydraphase-ha-ligera.webp",
    brand: "lrp",
    line: "lrp-hydraphase",
    n: ["deshidratacion"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Piel normal a seca y sensible.",
      tipo: "Crema hidratante en gel-crema.",
      necesidad: "Hidrata hasta 72 horas, reduce los signos de deshidratación y aporta luminosidad.",
      cuando: "Mañana y noche.",
      modo: "Una avellana en el rostro limpio."
    }
  },

  {
    id: "lrp-hydraphase-ha-rica",
    name: "Hydraphase HA rica",
    img: "imagenes/lrp/lrp-hydraphase-ha-rica.webp",
    brand: "lrp",
    line: "lrp-hydraphase",
    n: ["deshidratacion", "seca"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Piel seca y sensible.",
      tipo: "Crema hidratante nutritiva.",
      necesidad: "Hidrata 72 horas, redensifica y reduce los signos de deshidratación.",
      cuando: "Mañana y noche.",
      modo: "Una avellana en el rostro limpio."
    }
  },

  {
    id: "lrp-hydraphase-ha-uv-ligera-piel-sensible",
    name: "Hydraphase HA UV SPF25 ligera",
    img: "imagenes/lrp/lrp-hydraphase-ha-uv-ligera-piel-sensible.webp",
    brand: "lrp",
    line: "lrp-hydraphase",
    n: ["deshidratacion"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible y deshidratada.",
      tipo: "Crema hidratante con SPF25.",
      necesidad: "Hidrata 72 horas e ilumina, con protección de amplio espectro anti-UVA y UVB.",
      cuando: "Por la mañana.",
      modo: "Una avellana en rostro, cuello y escote limpios."
    }
  },

  {
    id: "lrp-hydraphase-ha-uv-rica-piel-sensible",
    name: "Hydraphase HA UV SPF25 rica",
    img: "imagenes/lrp/lrp-hydraphase-ha-uv-rica-piel-sensible.webp",
    brand: "lrp",
    line: "lrp-hydraphase",
    n: ["deshidratacion", "seca"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Piel sensible y seca.",
      tipo: "Crema hidratante rica con SPF25.",
      necesidad: "Hidrata 72 horas e ilumina, con protección de amplio espectro anti-UVA y UVB.",
      cuando: "Por la mañana.",
      modo: "Una avellana en rostro, cuello y escote limpios."
    }
  },

  {
    id: "lrp-hydraphase-ha-ojos",
    name: "Hydraphase HA ojos",
    img: "imagenes/lrp/lrp-hydraphase-ha-ojos.webp",
    brand: "lrp",
    line: "lrp-hydraphase",
    n: ["ojos", "deshidratacion"],
    sk: ["sensible"],
    d: {
      paciente: "Contorno de ojos deshidratado o con bolsas; tolerancia comprobada en piel sensible.",
      tipo: "Contorno de ojos hidratante con ácido hialurónico.",
      necesidad: "Rehidrata intensamente el contorno y reduce visiblemente la hinchazón.",
      cuando: "Mañana y noche.",
      modo: "Una avellana en el contorno de ojos y terminar con una ligera presión en la sien."
    }
  },

  /* ---------- La Roche Posay · Kerium ---------- */
  {
    id: "lrp-kerium-suavidad-extrema",
    name: "Kerium extra suave",
    img: "imagenes/lrp/lrp-kerium-suavidad-extrema.webp",
    brand: "lrp",
    line: "lrp-kerium",
    n: [],
    sk: ["sensible"],
    d: {
      paciente: "Cuero cabelludo sensible.",
      tipo: "Champú suave.",
      necesidad: "Alivia el cuero cabelludo de forma duradera y aporta ligereza y suavidad al cabello.",
      cuando: "Ideal para uso diario.",
      modo: "Una avellana sobre el cabello y el cuero cabelludo. Si entra en los ojos, enjuagar con abundante agua."
    }
  },

  /* ---------- La Roche Posay · Lipikar ---------- */
  {
    id: "lrp-lipikar-baume-ap-plus-max",
    name: "Lipikar Baume AP+Max",
    img: "imagenes/lrp/lrp-lipikar-baume-ap-plus-max.webp",
    brand: "lrp",
    line: "lrp-lipikar",
    n: ["seca", "rojeces", "corporal"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Piel atópica o de seca a muy seca, con tendencia al eczema; bebés desde 3 meses, niños y adultos.",
      tipo: "Bálsamo para piel atópica de rostro y cuerpo.",
      necesidad: "Ayuda a controlar el picor 24 horas, reduce irritación y rojeces y alivia la sequedad.",
      cuando: "Una vez al día, por la mañana o por la noche.",
      modo: "Aplicar en todo el cuerpo y el rostro con un masaje suave. La marca lo combina con Lipikar Syndet AP+."
    }
  },

  {
    id: "lrp-lipikar-baume-light-ap-plus-m",
    name: "Lipikar Baume Light AP+M",
    img: "imagenes/lrp/lrp-lipikar-baume-light-ap-plus-m.webp",
    brand: "lrp",
    line: "lrp-lipikar",
    n: ["seca", "rojeces", "corporal"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Piel con tendencia atópica en recién nacidos, bebés, niños y adultos.",
      tipo: "Bálsamo ligero antipicor de rostro y cuerpo.",
      necesidad: "Calma de inmediato, con eficacia antipicor y antirreaparición; reequilibra el microbioma.",
      cuando: "Por la mañana y/o por la noche.",
      modo: "Una pulsación por zona en rostro y cuerpo. La marca recomienda limpiar con Lipikar Syndet AP+ o el aceite lavante AP+."
    }
  },

  {
    id: "lrp-lipikar-eczema-med",
    name: "Lipikar Eczema Med",
    img: "imagenes/lrp/lrp-lipikar-eczema-med.webp",
    brand: "lrp",
    line: "lrp-lipikar",
    n: ["rojeces", "corporal"],
    sk: ["sensible"],
    d: {
      paciente: "Piel con eczema.",
      tipo: "Crema, producto sanitario.",
      necesidad: "Alivia inflamación, irritación, picor y enrojecimiento del eczema, e hidrata cuidando el microbioma.",
      cuando: "Dos o tres veces al día.",
      modo: "Una pulsación por zona, alrededor y en la zona del eczema, sin capa gruesa. Dejar secar 5 minutos antes de otros productos. Se conserva mejor en frío.",
      nota: "Dispositivo médico: leer las instrucciones de uso."
    }
  },

  {
    id: "lrp-lipikar-gel-urea-30",
    name: "Lipikar gel urea 30%",
    img: "imagenes/lrp/lrp-lipikar-gel-urea-30.webp",
    brand: "lrp",
    line: "lrp-lipikar",
    n: ["seca", "corporal"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Piel muy seca, áspera o con tendencia a queratosis, en zonas localizadas; apto para piel sensible.",
      tipo: "Gel concentrado con urea 30 %.",
      necesidad: "Suaviza la piel, calma e hidrata las zonas secas y con durezas.",
      cuando: "Una o dos veces al día, de forma local.",
      modo: "Una avellana en cada zona: cuerpo, manos, pies y cuero cabelludo. Evitar el contorno de ojos y labios. No es un hidratante corporal general."
    }
  },

  {
    id: "lrp-lipikar-lait-urea-10",
    name: "Lipikar Lait urea 10%",
    img: "imagenes/lrp/lrp-lipikar-lait-urea-10.webp",
    brand: "lrp",
    line: "lrp-lipikar",
    n: ["seca", "corporal"],
    sk: ["seca"],
    d: {
      paciente: "Piel muy seca, áspera o con descamación.",
      tipo: "Loción corporal con urea 10 %.",
      necesidad: "Reduce rugosidad, descamación, tirantez y picor, y restaura la elasticidad.",
      cuando: "Una o dos veces al día.",
      modo: "Una avellana por parte del cuerpo, después de limpiar. Solo en el cuerpo: no aplicar en el rostro."
    }
  },

  {
    id: "lrp-lipikar-leche",
    name: "Lipikar leche hidratante",
    img: "imagenes/lrp/lrp-lipikar-leche.webp",
    brand: "lrp",
    line: "lrp-lipikar",
    n: ["seca", "corporal"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Piel seca y sensible de bebés, niños, adultos y personas mayores.",
      tipo: "Leche corporal hidratante.",
      necesidad: "Hidrata 48 horas, calma y protege, con una textura de rápida absorción.",
      cuando: "Una o dos veces al día, por la mañana y por la noche.",
      modo: "Una avellana por parte del cuerpo, después de limpiar."
    }
  },

  {
    id: "lrp-lipikar-aceite-lavante-ap-plus",
    name: "Lipikar aceite lavante AP+",
    img: "imagenes/lrp/lrp-lipikar-aceite-lavante-ap-plus.webp",
    brand: "lrp",
    line: "lrp-lipikar",
    n: ["limpieza", "seca", "corporal"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Piel muy seca, sensible o con tendencia atópica, para toda la familia.",
      tipo: "Aceite limpiador corporal.",
      necesidad: "Limpia sin frotar, hidrata, reduce la irritación y protege del agua dura.",
      limpieza: "Limpiador (sin paso indicado)",
      limpiezaDet: "La marca no indica paso.",
      cuando: "Por la mañana y/o por la noche.",
      modo: "Una avellana por cada parte del cuerpo, con un masaje suave. No pica en los ojos. Sobre piel húmeda; aclarar."
    }
  },

  {
    id: "lrp-lipikar-gel-de-ducha",
    name: "Lipikar Gel Lavant",
    img: "imagenes/lrp/lrp-lipikar-gel-de-ducha.webp",
    brand: "lrp",
    line: "lrp-lipikar",
    n: ["limpieza", "corporal"],
    sk: ["sensible", "seca"],
    d: {
      paciente: "Piel sensible y normal a seca, para toda la familia, incluidos bebés.",
      tipo: "Gel de ducha espumoso.",
      necesidad: "Limpia con suavidad respetando la barrera; calma y nutre desde la ducha.",
      limpieza: "Limpiador (sin paso indicado)",
      limpiezaDet: "La marca no indica paso.",
      cuando: "Por la mañana y/o por la noche.",
      modo: "Una avellana por cada parte del cuerpo, con un masaje suave. No pica en los ojos. Apto para cuerpo, rostro y cuero cabelludo."
    }
  },

  {
    id: "lrp-lipikar-pain-surgras",
    name: "Lipikar Pain Surgras",
    img: "imagenes/lrp/lrp-lipikar-pain-surgras.webp",
    brand: "lrp",
    line: "lrp-lipikar",
    n: ["limpieza", "corporal"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Piel seca y sensible de toda la familia, incluidos niños y adultos.",
      tipo: "Pastilla limpiadora sólida.",
      necesidad: "Limpia sin resecar, aporta lípidos esenciales y alivia la irritación.",
      limpieza: "Limpiador (sin paso indicado)",
      limpiezaDet: "La marca no indica paso.",
      cuando: "Por la mañana y/o por la noche.",
      modo: "Frotar la pastilla sobre la piel y masajear con suavidad. No pica en los ojos."
    }
  },

  {
    id: "lrp-lipikar-surgras",
    name: "Lipikar Surgras",
    img: "imagenes/lrp/lrp-lipikar-surgras.webp",
    brand: "lrp",
    line: "lrp-lipikar",
    n: ["limpieza", "seca", "corporal"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Piel seca, muy seca y sensible.",
      tipo: "Crema de ducha antisequedad con lípidos.",
      necesidad: "Limpia con suavidad, aporta lípidos y protege de la sequedad del agua dura.",
      limpieza: "Limpiador (sin paso indicado)",
      limpiezaDet: "La marca no indica paso.",
      cuando: "Por la mañana y/o por la noche.",
      modo: "Una avellana por cada parte del cuerpo, con un masaje suave. No pica en los ojos. Apta para rostro y cuerpo."
    }
  },

  {
    id: "lrp-lipikar-syndet-ap-plus",
    name: "Lipikar Syndet AP+",
    img: "imagenes/lrp/lrp-lipikar-syndet-ap-plus.webp",
    brand: "lrp",
    line: "lrp-lipikar",
    n: ["limpieza", "seca", "corporal"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Piel propensa al eczema atópico o de seca a muy seca; incluso bebés con costra láctea.",
      tipo: "Crema de ducha ultrasuave tipo syndet.",
      necesidad: "Calma de inmediato, reduce la sequedad severa y alivia el picor desde la ducha.",
      limpieza: "Limpiador (sin paso indicado)",
      limpiezaDet: "La marca no indica paso.",
      cuando: "Por la mañana y/o por la noche.",
      modo: "Una avellana por cada parte del cuerpo, con un masaje suave. No pica en los ojos. Apta para rostro, cuerpo y cuero cabelludo."
    }
  },

  /* ---------- La Roche Posay · Mela B3 ---------- */
  {
    id: "lrp-mela-b3-serum-despigmentante-con-niacinamida",
    name: "Mela B3 sérum despigmentante con niacinamida",
    img: "imagenes/lrp/lrp-mela-b3-serum-despigmentante-con-niacinamida.webp",
    brand: "lrp",
    line: "lrp-mela",
    n: ["manchas"],
    sk: ["todas", "sensible"],
    d: {
      paciente: "Piel con manchas, incluso persistentes; tolerancia comprobada en piel sensible.",
      tipo: "Sérum despigmentante.",
      necesidad: "Corrige las manchas, unifica el tono y mejora la luminosidad, con eficacia antirreaparición.",
      cuando: "Mañana y/o noche.",
      modo: "2 a 3 gotas en rostro, cuello, escote y manos, después de la limpieza; solo o antes de la hidratante."
    }
  },

  {
    id: "lrp-mela-b3-double-dose",
    name: "Mela B3 Double Dose",
    img: "imagenes/lrp/lrp-mela-b3-double-dose.webp",
    brand: "lrp",
    line: "lrp-mela",
    n: ["manchas", "arrugas"],
    sk: ["todas", "sensible"],
    d: {
      paciente: "Todos los tipos de piel, incluida la sensible, con manchas solares, de la edad o marcas de acné.",
      tipo: "Tratamiento intensivo antimanchas y antiedad.",
      necesidad: "Reduce manchas oscuras, solares, de la edad y marcas de acné, y los signos de la edad.",
      cuando: "Mañana y noche.",
      modo: "3 a 4 presiones sobre piel limpia en rostro, cuello, escote y manos.",
      solar: "Por la mañana, aplicar siempre después un protector de amplio espectro; la marca propone Anthelios UVMUNE SPF50+."
    }
  },

  {
    id: "lrp-mela-b3-crema-antimanchas-spf30-con-niacinamida",
    name: "Mela B3 crema antimanchas SPF30 con niacinamida",
    img: "imagenes/lrp/lrp-mela-b3-crema-antimanchas-spf30-con-niacinamida.webp",
    brand: "lrp",
    line: "lrp-mela",
    n: ["manchas"],
    sk: ["todas"],
    d: {
      paciente: "Piel con manchas, incluso persistentes. La Roche-Posay no especifica un tipo de piel.",
      tipo: "Crema antimanchas con SPF30.",
      necesidad: "Corrige las manchas, unifica el tono y protege con SPF30 y UVA.",
      cuando: "Por la mañana.",
      modo: "Una almendra en rostro, cuello, escote y manos limpios, después del sérum, como último paso."
    }
  },

  {
    id: "lrp-mela-b3-gel-limpiador-facial-exfoliante-antimanchas",
    name: "Mela B3 gel limpiador facial exfoliante antimanchas",
    img: "imagenes/lrp/lrp-mela-b3-gel-limpiador-facial-exfoliante-antimanchas.webp",
    brand: "lrp",
    line: "lrp-mela",
    n: ["limpieza", "manchas"],
    sk: ["sensible"],
    d: {
      paciente: "Piel con manchas; apto para piel sensible.",
      tipo: "Gel limpiador exfoliante.",
      necesidad: "Purifica, renueva, corrige las manchas y unifica el tono.",
      limpieza: "Exfoliante",
      limpiezaDet: "Limpiador microexfoliante de uso diario, primer paso de la rutina antimanchas según la marca.",
      cuando: "Mañana y noche.",
      modo: "Una pequeña cantidad sobre piel húmeda, masajear en círculos evitando los ojos, aclarar y secar suavemente. Va antes del sérum."
    }
  },

  {
    id: "lrp-mela-b3-ojos",
    name: "Mela B3 ojos",
    img: "imagenes/lrp/lrp-mela-b3-ojos.webp",
    brand: "lrp",
    line: "lrp-mela",
    n: ["ojos", "manchas"],
    sk: ["sensible"],
    d: {
      paciente: "Ojeras azuladas y marrones; apto para contorno de ojos sensible.",
      tipo: "Tratamiento para ojeras.",
      necesidad: "Corrige la hiperpigmentación de las ojeras, ilumina la mirada y reduce líneas de expresión.",
      cuando: "Mañana y noche.",
      modo: "Una pequeña cantidad sobre el contorno limpio, masajeando con el aplicador de efecto frío."
    }
  },

  {
    id: "lrp-pigmentclar-ojos",
    name: "Pigmentclar ojos",
    img: "imagenes/lrp/lrp-pigmentclar-ojos.webp",
    brand: "lrp",
    line: "lrp-mela",
    n: ["ojos", "manchas"],
    sk: ["todas"],
    d: {
      paciente: "Ojeras marrones y azules. La Roche-Posay no especifica un tipo de piel.",
      tipo: "Contorno de ojos para ojeras.",
      necesidad: "Reduce las ojeras azules y marrones, e ilumina y unifica el contorno.",
      cuando: "Mañana y/o noche.",
      modo: "Un grano de arroz en el contorno, alisando con la punta metálica desde el ángulo interno al externo."
    }
  },

  {
    id: "lrp-pigmentclar-uv-spf-30",
    name: "Pigmentclar UV SPF30",
    img: "imagenes/lrp/lrp-pigmentclar-uv-spf-30.webp",
    brand: "lrp",
    line: "lrp-mela",
    n: ["manchas"],
    sk: ["todas"],
    d: {
      paciente: "Piel con manchas oscuras. La Roche-Posay no especifica un tipo de piel.",
      tipo: "Crema hidratante antimanchas con SPF30.",
      necesidad: "Corrige las manchas y previene su reaparición.",
      cuando: "Por la mañana.",
      modo: "Una avellana en rostro, cuello y escote; también en el dorso de las manos."
    }
  },

  /* ---------- La Roche Posay · Nutritic ---------- */
  {
    id: "lrp-nutritic-intense",
    name: "Nutritic Intense",
    img: "imagenes/lrp/lrp-nutritic-intense.webp",
    brand: "lrp",
    line: "lrp-nutritic",
    n: ["seca"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Zonas más secas del rostro; tolerancia comprobada en piel sensible.",
      tipo: "Crema nutritiva.",
      necesidad: "Nutre en profundidad, calma y reduce irritación, picor y hormigueo.",
      cuando: "Mañana y noche.",
      modo: "Una pequeña avellana sobre el rostro limpio, cuello y escote."
    }
  },

  {
    id: "lrp-nutritic-intense-rica",
    name: "Nutritic Intense rica",
    img: "imagenes/lrp/lrp-nutritic-intense-rica.webp",
    brand: "lrp",
    line: "lrp-nutritic",
    n: ["seca"],
    sk: ["seca"],
    d: {
      paciente: "Zonas más secas del rostro.",
      tipo: "Crema nutritiva rica en tarro.",
      necesidad: "Nutre en profundidad, calma y aporta confort y protección.",
      cuando: "Mañana y noche.",
      modo: "Una pequeña avellana sobre el rostro limpio, cuello y escote."
    }
  },

  {
    id: "lrp-nutritic-labios",
    name: "Nutritic labios",
    img: "imagenes/lrp/lrp-nutritic-labios.webp",
    brand: "lrp",
    line: "lrp-nutritic",
    n: ["seca"],
    sk: ["seca"],
    d: {
      paciente: "Labios secos.",
      tipo: "Bálsamo labial en stick.",
      necesidad: "Nutre en profundidad y reconstituye la barrera protectora de los labios.",
      cuando: "Tantas veces como sea necesario durante el día.",
      modo: "Una fina capa sobre los labios."
    }
  },

  /* ---------- La Roche Posay · Physiological ---------- */
  {
    id: "lrp-desmaquillante-de-ojos-waterproof",
    name: "Desmaquillante de ojos waterproof",
    img: "imagenes/lrp/lrp-desmaquillante-de-ojos-waterproof.webp",
    brand: "lrp",
    line: "lrp-physiological",
    n: ["limpieza"],
    sk: ["sensible"],
    d: {
      paciente: "Ojos sensibles.",
      tipo: "Desmaquillante de ojos.",
      necesidad: "Elimina el maquillaje resistente al agua.",
      limpieza: "Desmaquillante (sin paso indicado)",
      limpiezaDet: "Específico de ojos. La marca no indica paso.",
      cuando: "Por la noche y/o por la mañana.",
      modo: "Unas gotas en un algodón, colocarlo sobre el ojo unos segundos y retirar sin frotar."
    }
  },

  {
    id: "lrp-desmaquillante-en-espuma-de-agua-micelar-limpiadora",
    name: "Espuma micelar",
    img: "imagenes/lrp/lrp-desmaquillante-en-espuma-de-agua-micelar-limpiadora.webp",
    brand: "lrp",
    line: "lrp-physiological",
    n: ["limpieza"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible.",
      tipo: "Espuma de agua micelar desmaquillante, para rostro y ojos.",
      necesidad: "Limpia las impurezas, desmaquilla y suaviza respetando el equilibrio de la piel.",
      limpieza: "Desmaquillante (sin paso indicado)",
      limpiezaDet: "Se aclara con agua. La marca no indica paso.",
      cuando: "Por la mañana y por la noche.",
      modo: "2 o 3 pulsaciones sobre piel húmeda de rostro y cuello, masajear con movimientos circulares y aclarar con agua tibia."
    }
  },

  {
    id: "lrp-locion-calmante",
    name: "Loción calmante",
    img: "imagenes/lrp/lrp-locion-calmante.webp",
    brand: "lrp",
    line: "lrp-physiological",
    n: ["limpieza", "rojeces"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible.",
      tipo: "Loción tónica calmante.",
      necesidad: "Calma, tonifica y purifica respetando el equilibrio de la piel.",
      limpieza: "Rutina de limpieza · último paso",
      limpiezaDet: "Se aplica después de desmaquillar o limpiar.",
      cuando: "Por la mañana y por la noche.",
      modo: "Empapar un disco de algodón y pasar por rostro y cuello, después de desmaquillar o limpiar."
    }
  },

  /* ---------- La Roche Posay · Retinol ---------- */
  {
    id: "lrp-retinol-b3-serum",
    name: "Retinol B3 sérum",
    img: "imagenes/lrp/lrp-retinol-b3-serum.webp",
    brand: "lrp",
    line: "lrp-retinol",
    n: ["arrugas", "manchas"],
    sk: ["sensible"],
    d: {
      paciente: "Signos profundos del fotoenvejecimiento; piel sensible incluida.",
      tipo: "Sérum con retinol y vitamina B3.",
      necesidad: "Reduce arrugas profundas y líneas de expresión, unifica el tono y atenúa las manchas.",
      cuando: "Por la noche; introducir de forma progresiva.",
      modo: "3 o 4 gotas en cara, cuello y escote, sobre el rostro limpio y seco, antes de la hidratante.",
      solar: "Usar siempre con protección SPF>30 por la mañana."
    }
  },

  {
    id: "lrp-redermic-retinol-concentrado",
    name: "Redermic Retinol crema",
    img: "imagenes/lrp/lrp-redermic-retinol-concentrado.webp",
    brand: "lrp",
    line: "lrp-retinol",
    n: ["arrugas", "manchas"],
    sk: ["sensible"],
    d: {
      paciente: "Arrugas profundas y manchas de la edad; tolerancia en piel sensible.",
      tipo: "Crema con retinol de liberación gradual.",
      necesidad: "Reduce arrugas profundas, mejora la textura, unifica el tono y atenúa las manchas.",
      cuando: "Por la noche.",
      modo: "Una avellana en cara, cuello y escote limpios.",
      solar: "Usar siempre con protección SPF>30 por la mañana."
    }
  },

  {
    id: "lrp-redermic-retinol-ojos",
    name: "Redermic Retinol ojos",
    img: "imagenes/lrp/lrp-redermic-retinol-ojos.webp",
    brand: "lrp",
    line: "lrp-retinol",
    n: ["ojos", "arrugas"],
    sk: ["sensible"],
    d: {
      paciente: "Contorno con arrugas, ojeras y signos de fatiga; testado en ojos sensibles.",
      tipo: "Contorno de ojos antiarrugas con retinol.",
      necesidad: "Reduce las arrugas profundas, alisa y disminuye ojeras y signos de fatiga.",
      cuando: "Por la noche.",
      modo: "Un grano de arroz en el contorno limpio, desde el interior hacia el exterior, sin tocar el ojo.",
      solar: "Usar siempre con protección SPF>30 por la mañana."
    }
  },

  /* ---------- La Roche Posay · Toleriane ---------- */
  {
    id: "lrp-toleriane-sensitive-crema",
    name: "Toleriane Sensitive crema",
    img: "imagenes/lrp/lrp-toleriane-sensitive-crema.webp",
    brand: "lrp",
    line: "lrp-toleriane",
    n: ["rojeces", "deshidratacion"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible.",
      tipo: "Crema hidratante calmante.",
      necesidad: "Calma, repara la barrera y reduce tirantez, picor y ardor.",
      cuando: "Mañana y/o noche.",
      modo: "Aplicar uniformemente sobre el rostro limpio, cuello y escote."
    }
  },

  {
    id: "lrp-toleriane-sensitive-fluido",
    name: "Toleriane Sensitive fluido",
    img: "imagenes/lrp/lrp-toleriane-sensitive-fluido.webp",
    brand: "lrp",
    line: "lrp-toleriane",
    n: ["rojeces", "deshidratacion"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible.",
      tipo: "Fluido hidratante calmante.",
      necesidad: "Hidrata 48 horas, repara y refuerza la barrera y calma.",
      cuando: "Mañana y/o noche.",
      modo: "Una avellana sobre el rostro limpio, cuello y escote."
    }
  },

  {
    id: "lrp-toleriane-sensitive-rica",
    name: "Toleriane Sensitive rica",
    img: "imagenes/lrp/lrp-toleriane-sensitive-rica.webp",
    brand: "lrp",
    line: "lrp-toleriane",
    n: ["rojeces", "seca"],
    sk: ["sensible", "seca"],
    d: {
      paciente: "Piel seca y sensible.",
      tipo: "Crema rica calmante.",
      necesidad: "Repara la barrera, calma y alivia la tirantez.",
      cuando: "Mañana y/o noche.",
      modo: "Una avellana sobre el rostro limpio, cuello y escote."
    }
  },

  {
    id: "lrp-toleriane-dermallergo-crema",
    name: "Toleriane Dermallergo crema",
    img: "imagenes/lrp/lrp-toleriane-dermallergo-crema.webp",
    brand: "lrp",
    line: "lrp-toleriane",
    n: ["rojeces", "deshidratacion"],
    sk: ["sensible"],
    d: {
      paciente: "Piel alérgica o con tendencia a las alergias.",
      tipo: "Crema hidratante diaria.",
      necesidad: "Hidrata y calma las irritaciones, con eficacia antirrojeces y antirreaparición.",
      cuando: "Mañana y/o noche.",
      modo: "Una avellana sobre el rostro limpio, cuello y escote."
    }
  },

  {
    id: "lrp-toleriane-dermallergo-fluido",
    name: "Toleriane Dermallergo fluido",
    img: "imagenes/lrp/lrp-toleriane-dermallergo-fluido.webp",
    brand: "lrp",
    line: "lrp-toleriane",
    n: ["rojeces", "deshidratacion"],
    sk: ["sensible"],
    d: {
      paciente: "Piel con tendencia a las alergias.",
      tipo: "Fluido hidratante ligero.",
      necesidad: "Hidrata y calma las irritaciones, con eficacia antirrojeces y antirreaparición.",
      cuando: "Mañana y/o noche.",
      modo: "Una avellana sobre el rostro limpio, cuello y escote."
    }
  },

  {
    id: "lrp-toleriane-dermallergo-noche",
    name: "Toleriane Dermallergo noche",
    img: "imagenes/lrp/lrp-toleriane-dermallergo-noche.webp",
    brand: "lrp",
    line: "lrp-toleriane",
    n: ["rojeces", "seca"],
    sk: ["sensible", "seca"],
    d: {
      paciente: "Piel sensible y seca con molestias nocturnas.",
      tipo: "Crema de noche.",
      necesidad: "Reduce rojeces y molestias, y refuerza la barrera durante la noche.",
      cuando: "Por la noche.",
      modo: "Una avellana sobre el rostro limpio, cuello y escote."
    }
  },

  {
    id: "lrp-toleriane-dermallergo-ojos",
    name: "Toleriane Dermallergo ojos",
    img: "imagenes/lrp/lrp-toleriane-dermallergo-ojos.webp",
    brand: "lrp",
    line: "lrp-toleriane",
    n: ["ojos", "rojeces"],
    sk: ["sensible"],
    d: {
      paciente: "Contorno de ojos irritado o sensible.",
      tipo: "Crema reparadora de contorno de ojos.",
      necesidad: "Hidrata 48 horas y calma, con eficacia antipicor, antirrojeces y antirreaparición.",
      cuando: "Mañana y/o noche.",
      modo: "Un grano de arroz sobre el contorno de ojos limpio."
    }
  },

  {
    id: "lrp-toleriane-ultra-dermallergo-serum",
    name: "Toleriane Ultra Dermallergo sérum",
    img: "imagenes/lrp/lrp-toleriane-ultra-dermallergo-serum.webp",
    brand: "lrp",
    line: "lrp-toleriane",
    n: ["rojeces", "deshidratacion"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible.",
      tipo: "Sérum calmante diario.",
      necesidad: "Calma de inmediato, repara la barrera e hidrata hasta 48 horas.",
      cuando: "Por la mañana y/o por la noche.",
      modo: "3 a 4 gotas sobre el rostro limpio, cuello y escote."
    }
  },

  {
    id: "lrp-toleriane-rosaliac-ar-concentrado",
    name: "Toleriane Rosaliac AR concentrado",
    img: "imagenes/lrp/lrp-toleriane-rosaliac-ar-concentrado.webp",
    brand: "lrp",
    line: "lrp-toleriane",
    n: ["rojeces"],
    sk: ["sensible"],
    d: {
      paciente: "Piel con rosácea e irritaciones, con tendencia a las rojeces.",
      tipo: "Corrector hidratante antirrojeces.",
      necesidad: "Minimiza las rojeces, reduce la reactividad y previene nuevos brotes.",
      cuando: "Mañana y/o noche.",
      modo: "Una pequeña cantidad sobre el rostro limpio, cuello y escote."
    }
  },

  {
    id: "lrp-toleriane-rosaliac-ar-spf-30",
    name: "Toleriane Rosaliac AR SPF30",
    img: "imagenes/lrp/lrp-toleriane-rosaliac-ar-spf-30.webp",
    brand: "lrp",
    line: "lrp-toleriane",
    n: ["rojeces"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible con tendencia a enrojecerse.",
      tipo: "Crema antirrojeces con SPF30.",
      necesidad: "Reduce las rojeces, calma el ardor y refuerza la barrera, con protección solar SPF30.",
      cuando: "Mañana y/o noche, a diario; reaplicar según sea necesario.",
      modo: "Una pequeña cantidad sobre el rostro limpio, cuello y escote."
    }
  },

  {
    id: "lrp-toleriane-kerium-ds-concentrado",
    name: "Toleriane Kerium DS concentrado",
    img: "imagenes/lrp/lrp-toleriane-kerium-ds-concentrado.webp",
    brand: "lrp",
    line: "lrp-toleriane",
    n: ["rojeces"],
    sk: ["sensible", "seca"],
    d: {
      paciente: "Zonas resecas con tendencia al enrojecimiento, picor y descamación.",
      tipo: "Crema seborreguladora y calmante.",
      necesidad: "Reduce enrojecimiento, picor y descamación; purifica, hidrata y calma.",
      cuando: "Por la mañana y por la noche.",
      modo: "Una pequeña cantidad sobre el rostro limpio."
    }
  },

  {
    id: "lrp-toleriane-crema-limpiadora",
    name: "Toleriane crema limpiadora",
    img: "imagenes/lrp/lrp-toleriane-crema-limpiadora.webp",
    brand: "lrp",
    line: "lrp-toleriane",
    n: ["limpieza"],
    sk: ["seca", "sensible"],
    d: {
      paciente: "Piel normal, seca o sensible.",
      tipo: "Crema limpiadora desmaquillante.",
      necesidad: "Elimina el maquillaje, incluso resistente al agua, respeta la barrera y calma.",
      limpieza: "Limpiador (sin paso indicado)",
      limpiezaDet: "Limpia y desmaquilla. La marca no indica paso.",
      cuando: "Mañana y/o noche.",
      modo: "Hacer espuma con una pequeña cantidad, masajear rostro, cuello y escote, aclarar y secar sin frotar. Evitar el contorno de ojos."
    }
  },

  {
    id: "lrp-toleriane-dermolimpiador",
    name: "Toleriane Dermolimpiador",
    img: "imagenes/lrp/lrp-toleriane-dermolimpiador.webp",
    brand: "lrp",
    line: "lrp-toleriane",
    n: ["limpieza"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible o reactiva.",
      tipo: "Fluido cremoso limpiador y desmaquillante.",
      necesidad: "Limpia y desmaquilla en un solo paso, con glicerina para hidratar.",
      limpieza: "Limpieza única",
      limpiezaDet: "La marca lo presenta como un solo paso para limpiar y desmaquillar.",
      cuando: "Mañana y/o noche.",
      modo: "Una avellana en rostro, ojos, cuello y escote, masajear en círculos y secar sin frotar. Aclarado opcional."
    }
  },

  {
    id: "lrp-toleriane-gel-espumoso-doble-limpiador-hidratante-purificante",
    name: "Toleriane gel espumoso doble limpiador hidratante purificante",
    img: "imagenes/lrp/lrp-toleriane-gel-espumoso-doble-limpiador-hidratante-purificante.webp",
    brand: "lrp",
    line: "lrp-toleriane",
    n: ["limpieza"],
    sk: ["sensible"],
    d: {
      paciente: "Piel reactiva y sensible.",
      tipo: "Gel limpiador espumoso.",
      necesidad: "Elimina maquillaje, suciedad, grasa y polución manteniendo la piel hidratada.",
      limpieza: "Limpiador (sin paso indicado)",
      limpiezaDet: "La marca lo llama doble limpiador porque su sistema retira maquillaje y suciedad en un solo gel; no indica paso.",
      cuando: "Dos veces al día, antes del tratamiento.",
      modo: "Hacer espuma con una pequeña cantidad, aplicar sobre piel húmeda de rostro, cuello y escote, masajear y aclarar bien."
    }
  },

  {
    id: "lrp-toleriane-rosaliac-gel-micelar-desmaquillante",
    name: "Toleriane Rosaliac gel micelar desmaquillante",
    img: "imagenes/lrp/lrp-toleriane-rosaliac-gel-micelar-desmaquillante.webp",
    brand: "lrp",
    line: "lrp-toleriane",
    n: ["limpieza", "rojeces"],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible, fina y reactiva con tendencia al enrojecimiento.",
      tipo: "Gel micelar desmaquillante.",
      necesidad: "Limpia las impurezas y elimina el maquillaje; refresca y calma.",
      limpieza: "Desmaquillante (sin paso indicado)",
      limpiezaDet: "No se aclara. La marca no indica paso.",
      cuando: "Mañana y/o noche.",
      modo: "2 o 3 pulsaciones con un disco de algodón o con los dedos en rostro, cuello y escote; retirar con cuidado. Sin aclarado."
    }
  },

  /* ---------- La Roche Posay · Toleriane maquillaje ---------- */
  {
    id: "lrp-toleriane-fluido-corrector",
    name: "Toleriane base de maquillaje fluida correctora",
    img: "imagenes/lrp/lrp-toleriane-fluido-corrector.webp",
    brand: "lrp",
    line: "lrp-tolmake",
    n: [],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible; todo tipo de pieles.",
      tipo: "Base de maquillaje de alta cobertura.",
      necesidad: "16 horas de cobertura y corrección inmediata; calma y reduce las rojeces con pigmentos y Neurosensina.",
      cuando: "Por la mañana.",
      modo: "Con las yemas de los dedos o una brocha limpia, desde el centro del rostro hacia afuera, por capas según la cobertura deseada."
    }
  },

  {
    id: "lrp-toleriane-polvos-compactos",
    name: "Toleriane compacto mineral",
    img: "imagenes/lrp/lrp-toleriane-polvos-compactos.webp",
    brand: "lrp",
    line: "lrp-tolmake",
    n: [],
    sk: ["sensible", "imperfecciones"],
    d: {
      paciente: "Piel sensible con imperfecciones.",
      tipo: "Polvos compactos.",
      necesidad: "Cubren las imperfecciones sin obstruir los poros, unifican el tono y matifican.",
      cuando: "Por la mañana.",
      modo: "Una pequeña cantidad con la esponja en cara y cuello, sin excederse."
    }
  },

  {
    id: "lrp-toleriane-teint-blush",
    name: "Toleriane Teint Blush",
    img: "imagenes/lrp/lrp-toleriane-teint-blush.webp",
    brand: "lrp",
    line: "lrp-tolmake",
    n: [],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible.",
      tipo: "Colorete en polvo.",
      necesidad: "Maquillaje de alta tolerancia. Aporta color natural y confort duradero.",
      cuando: "Al final de la rutina de maquillaje.",
      modo: "Con la esponjilla a toquecitos en las mejillas y difuminar con movimientos circulares ascendentes."
    }
  },

  {
    id: "lrp-toleriane-teint-polvos-fijadores-matificantes",
    name: "Toleriane Teint polvos fijadores matificantes",
    img: "imagenes/lrp/lrp-toleriane-teint-polvos-fijadores-matificantes.webp",
    brand: "lrp",
    line: "lrp-tolmake",
    n: [],
    sk: ["sensible"],
    d: {
      paciente: "Piel sensible.",
      tipo: "Polvos fijadores matificantes.",
      necesidad: "Efecto matificante duradero con alta absorción de grasa.",
      cuando: "Al final de la rutina de maquillaje.",
      modo: "Con una brocha suave, mezclar los tres colores y aplicar en frente, nariz y barbilla, y terminar en los pómulos."
    }
  },

  {
    id: "lrp-toleriane-lapiz-de-cejas",
    name: "Toleriane lápiz de cejas",
    img: "imagenes/lrp/lrp-toleriane-lapiz-de-cejas.webp",
    brand: "lrp",
    line: "lrp-tolmake",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "La Roche-Posay no especifica un tipo de piel.",
      tipo: "Lápiz de cejas hipoalergénico.",
      necesidad: "Define, colorea y rellena las zonas poco pobladas.",
      cuando: "Por la mañana.",
      modo: "Sacar punta y seguir la dirección del crecimiento del pelo."
    }
  },

  {
    id: "lrp-toleriane-lapiz-de-ojos",
    name: "Toleriane lápiz de ojos",
    img: "imagenes/lrp/lrp-toleriane-lapiz-de-ojos.webp",
    brand: "lrp",
    line: "lrp-tolmake",
    n: [],
    sk: ["sensible"],
    d: {
      paciente: "Ojos sensibles.",
      tipo: "Lápiz de ojos.",
      necesidad: "Define la mirada con un trazo suave, intenso y duradero.",
      cuando: "Por la mañana.",
      modo: "Trazar una línea a lo largo de la base de las pestañas superiores o inferiores."
    }
  },

  {
    id: "lrp-toleriane-mascara-volumen",
    name: "Toleriane máscara volumen",
    img: "imagenes/lrp/lrp-toleriane-mascara-volumen.webp",
    brand: "lrp",
    line: "lrp-tolmake",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "La Roche-Posay no especifica un tipo de piel.",
      tipo: "Máscara de pestañas hipoalergénica.",
      necesidad: "Aporta volumen, refuerza y estructura las pestañas.",
      cuando: "Por la mañana y/o por la noche.",
      modo: "Colocar el cepillo en la raíz y deslizar hacia las puntas girándolo suavemente, en una sola pasada."
    }
  },

  {
    id: "lrp-toleriane-mascara-waterproof",
    name: "Toleriane máscara de pestañas waterproof",
    img: "imagenes/lrp/lrp-toleriane-mascara-waterproof.webp",
    brand: "lrp",
    line: "lrp-tolmake",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "La Roche-Posay no especifica un tipo de piel.",
      tipo: "Máscara de pestañas resistente al agua.",
      necesidad: "Aporta volumen resistente al agua, refuerza y alisa las pestañas.",
      cuando: "Por la mañana y/o por la noche.",
      modo: "Colocar el cepillo en la raíz y deslizar hacia las puntas girándolo suavemente, en una sola pasada."
    }
  },

  {
    id: "lrp-toleriane-silicium-laca-de-unas",
    name: "Toleriane laca de uñas Silicium",
    img: "imagenes/lrp/lrp-toleriane-silicium-laca-de-unas.webp",
    brand: "lrp",
    line: "lrp-tolmake",
    n: [],
    sk: ["todas"],
    d: {
      paciente: "La Roche-Posay no especifica un tipo de piel.",
      tipo: "Laca de uñas fortalecedora con silicio.",
      necesidad: "Repara y refuerza las uñas y las protege de los rayos UVA-UVB con filtro Mexoryl XL.",
      cuando: "Siempre que se quiera.",
      modo: "Una capa de base, dos de color y una de top coat, en toda la uña."
    }
  },

  /* ---------- La Roche Posay · Vitamin C ---------- */
  {
    id: "lrp-pure-vitamin-c12-serum",
    name: "Sérum Pure Vitamin C12",
    img: "imagenes/lrp/lrp-pure-vitamin-c12-serum.webp",
    brand: "lrp",
    line: "lrp-vitaminc",
    n: ["arrugas", "apagada", "manchas"],
    sk: ["sensible"],
    d: {
      paciente: "Arrugas, falta de luminosidad y tono irregular; probado en piel sensible.",
      tipo: "Sérum con 12 % de vitamina C pura.",
      necesidad: "Corrige arrugas, renueva, mejora la luminosidad y unifica el tono.",
      cuando: "Por la mañana.",
      modo: "2 a 3 gotas en rostro, cuello y escote después de la limpieza; solo o bajo una hidratante."
    }
  },

  {
    id: "lrp-redermic-c-para-piel-normal-a-mixta",
    name: "Pure Vitamin C crema ligera",
    img: "imagenes/lrp/lrp-redermic-c-para-piel-normal-a-mixta.webp",
    brand: "lrp",
    line: "lrp-vitaminc",
    n: ["arrugas", "flacidez", "apagada"],
    sk: ["mixta"],
    d: {
      paciente: "Piel normal a mixta.",
      tipo: "Crema con vitamina C, de acabado mate.",
      necesidad: "Reduce arrugas, mejora la firmeza y la luminosidad, y unifica el tono.",
      cuando: "Por la mañana.",
      modo: "Una avellana en cara, cuello y escote limpios."
    }
  },

  {
    id: "lrp-redermic-c-ojos",
    name: "Pure Vitamin C ojos",
    img: "imagenes/lrp/lrp-redermic-c-ojos.webp",
    brand: "lrp",
    line: "lrp-vitaminc",
    n: ["ojos", "arrugas"],
    sk: ["todas"],
    d: {
      paciente: "Contorno de ojos con arrugas. La Roche-Posay no especifica un tipo de piel.",
      tipo: "Contorno de ojos con vitamina C.",
      necesidad: "Reduce arrugas, mejora la firmeza, unifica el tono e ilumina la mirada.",
      cuando: "Por la mañana.",
      modo: "Un grano de arroz en el contorno, desde el borde interior al exterior."
    }
  }
];
