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
   Información de la ficha tomada de la web oficial de cada marca (es.caudalie.com, es.filorga.com). */
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
  }
];
