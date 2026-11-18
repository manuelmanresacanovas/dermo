/* NECESIDADES DE COMPLEMENTOS ALIMENTICIOS
   Se añaden a D.needs con area:"supl" para que no se mezclen con las de dermofarmacia.
   Cada producto de complemento indica sus necesidades en n (ver datos/complementos/<marca>.js).
   d: texto corto que aparece en la tarjeta. */
var D = D || {};

D.needs = (D.needs || []).concat([
  { id: "s-energia", area: "supl", name: "Energía y cansancio", d: "Fatiga, falta de energía, hierro y vitaminas B." },
  { id: "s-sueno", area: "supl", name: "Sueño, estrés y estado de ánimo", d: "Descanso, estrés diario y ánimo." },
  { id: "s-defensas", area: "supl", name: "Defensas", d: "Sistema inmunitario." },
  { id: "s-digestion", area: "supl", name: "Digestión y microbiota", d: "Fibra, probióticos y confort digestivo." },
  { id: "s-articular", area: "supl", name: "Articulaciones, huesos y músculo", d: "Cartílago, huesos y masa muscular." },
  { id: "s-dolor", area: "supl", name: "Dolor y molestias", d: "Alivio del dolor y molestias articulares." },
  { id: "s-deporte", area: "supl", name: "Deporte y rendimiento", d: "Proteína, creatina y recuperación." },
  { id: "s-piel", area: "supl", name: "Piel, cabello y uñas", d: "Nutricosmética." },
  { id: "s-cardio", area: "supl", name: "Corazón, colesterol y circulación", d: "Omega 3, colesterol y piernas cansadas." },
  { id: "s-memoria", area: "supl", name: "Memoria y concentración", d: "Función cognitiva y rendimiento mental." },
  { id: "s-mujer", area: "supl", name: "Fertilidad, embarazo y salud femenina", d: "Búsqueda del embarazo (mujer y hombre), embarazo, lactancia, ciclo y menopausia." },
  { id: "s-peso", area: "supl", name: "Control de peso y metabolismo", d: "Saciedad, glucosa y colesterol." },
  { id: "s-antiox", area: "supl", name: "Antioxidantes y antienvejecimiento", d: "Protección frente al daño oxidativo." },
  { id: "s-vitaminas", area: "supl", name: "Vitaminas y minerales básicos", d: "Multivitamínicos, vitamina D, B12, C, magnesio, zinc…" }
]);
