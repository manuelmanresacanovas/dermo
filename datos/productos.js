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
   Información de la ficha tomada de la web oficial de cada marca (es.caudalie.com, es.filorga.com, sensilis.com/es, gemaherrerias.com). */
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
  }
];
