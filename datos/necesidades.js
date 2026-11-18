/* NECESIDADES DEL CLIENTE
   id: identificador, name: nombre, c: id de la guía en cosmeticos.js (opcional),
   lineas: ids de las líneas principales de cada marca para esa necesidad,
   tipo: true si es un tipo de producto (contorno, limpiador, fotoprotector): sale entero en su página, agrupado por marca,
   y en las demás necesidades que cubra cada producto, en un apartado propio. */
var D = D || {};

D.needs = [
  {
    id: "acne",
    name: "Acné, imperfecciones y comedones",
    lineas: ["vinopure", "fil-agepurify", "sen-pure", "sen-pureage", "lrp-effaclar", "nx-zinc", "m8-acidos", "gh-intensiva", "sv-sebiaclear", "isd-acniben", "cl-biretix", "av-cleanance", "cv-imperfecciones"]
  },
  {
    id: "manchas",
    name: "Manchas e hiperpigmentación",
    lineas: ["vinoperfect", "fil-skinunify", "sen-dpigment", "lrp-mela", "nx-nu", "m8-vitc", "gh-antioxidantes", "sv-clairial", "isd-ceutics", "cl-neoretin", "av-vitamin"]
  },
  {
    id: "arrugas",
    name: "Arrugas y líneas de expresión",
    lineas: ["resveratrollift", "fil-timefiller", "sen-eternalist", "lrp-hyalu", "nx-nu", "m8-vita", "gh-intensiva", "sv-biotic", "isd-ceutics", "cl-cellage", "av-hyaluron", "cv-antiedad"]
  },
  {
    id: "flacidez",
    name: "Flacidez y pérdida de firmeza",
    lineas: ["resveratrollift", "fil-liftstructure", "sen-upgrade", "lrp-hyalu", "nx-ml", "m8-hidratantes", "gh-intensiva", "sv-densitium", "isd-ceutics", "cl-tensage", "av-dermabsolu", "cv-antiedad"]
  },
  {
    id: "deshidratacion",
    name: "Deshidratación",
    lineas: ["vinohydra", "fil-hyalufiller", "sen-hydraessence", "lrp-hydraphase", "nx-cf", "m8-hidratantes", "gh-barrera", "sv-hydraliane", "isd-ceutics", "cl-agebarrier", "av-hydrance", "cv-rostro"]
  },
  {
    id: "seca",
    name: "Piel seca y alteración de la barrera cutánea",
    lineas: ["vinohydra", "fil-debilitada", "sen-hydraessence", "lrp-nutritic", "lrp-lipikar", "nx-miel", "m8-hidratantes", "gh-barrera", "sv-topialyse", "isd-acniben", "cl-skinresist", "av-xeracalm", "av-coldcream", "ad-exomega", "cv-cuerpo"]
  },
  {
    id: "rojeces",
    name: "Rojeces, rosácea y piel sensible",
    lineas: ["vinohydra", "fil-debilitada", "sen-skinrescue", "lrp-toleriane", "gh-antioxidantes", "sv-sensifine", "sv-sensifinear", "cl-rosacure", "cl-skinresist", "av-rosamed", "av-tolerance"]
  },
  {
    id: "poros",
    name: "Poros dilatados y exceso de sebo",
    lineas: ["vinopure", "fil-agepurify", "sen-pure", "lrp-effaclar", "nx-zinc", "m8-serums", "gh-lociones", "sv-sebiaclear", "isd-acniben", "cl-biretix", "av-cleanance", "cv-imperfecciones"]
  },
  {
    id: "apagada",
    name: "Piel apagada y tono irregular",
    lineas: ["vinoperfect", "fil-oxygenglow", "sen-skinglow", "lrp-vitaminc", "nx-boost", "m8-vitc", "gh-exfoliacion", "sv-biotic", "isd-ceutics", "cl-radiance", "av-vitamin", "cv-antiedad"]
  },
  {
    id: "ojos",
    name: "Contorno de ojos",
    c: "contorno",
    tipo: true
  },
  {
    id: "limpieza",
    name: "Limpieza facial",
    c: "limpiadores",
    tipo: true
  },
  {
    id: "fotoproteccion",
    name: "Fotoprotección",
    c: "solar",
    tipo: true
  },
  {
    id: "corporal",
    name: "Cuidado corporal y capilar",
    lineas: ["cau-corporal", "cau-capilar", "fil-debilitada", "sen-body", "sen-hair", "lrp-lipikar", "nx-miel", "nx-hair", "gh-barrera", "sv-xerial", "sv-topialyse", "isd-acniben", "cl-iraltone", "av-cuerpo", "av-xeracalm", "ad-exomega", "cv-cuerpo"]
  }
];
