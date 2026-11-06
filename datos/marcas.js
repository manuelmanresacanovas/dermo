/* MARCAS Y LÍNEAS
   Cada línea: id único (sin espacios ni acentos), name (nombre visible), para (para qué sirve la línea, en pocas palabras) y n (ids de necesidades.js, opcional). */
var D = D || {};

D.brands = [
  {
    id: "caudalie",
    name: "Caudalie",
    lines: [
      { id: "vinoclean", name: "Vinoclean", para: "Limpieza y desmaquillado", n: ["limpieza"] },
      { id: "vinohydra", name: "Vinohydra", para: "Deshidratación, sequedad y rojeces", n: ["deshidratacion"] },
      { id: "premiercru", name: "Premier Cru", para: "Antiedad global" },
      { id: "resveratrollift", name: "Resveratrol-Lift", para: "Arrugas y firmeza" },
      { id: "vinoperfect", name: "Vinoperfect", para: "Manchas e hiperpigmentaciones" },
      { id: "vinopure", name: "Vinopure", para: "Acné, poros e imperfecciones" },
      { id: "cau-corporal", name: "Cuidados corporales", para: "Firmeza y sequedad del cuerpo" },
      { id: "cau-capilar", name: "Cuidados capilares", para: "Caída y falta de densidad del cabello" },
      { id: "vinosun", name: "Vinosun", para: "Protección solar", n: ["fotoproteccion"] }
    ]
  },

  {
    id: "filorga",
    name: "Filorga",
    lines: [
      { id: "fil-ncef", name: "NCEF", para: "Antiedad global y luminosidad" },
      { id: "fil-timefiller", name: "TIME-FILLER", para: "Arrugas" },
      { id: "fil-liftstructure", name: "LIFT-STRUCTURE", para: "Flacidez y pérdida de volumen" },
      { id: "fil-globalrepair", name: "GLOBAL-REPAIR", para: "Piel madura: densidad y nutrición" },
      { id: "fil-hyalufiller", name: "HYALU-FILLER", para: "Arrugas finas e hidratación" },
      { id: "fil-oxygenglow", name: "OXYGEN-GLOW", para: "Piel apagada y falta de luminosidad" },
      { id: "fil-optimeyes", name: "OPTIM-EYES", para: "Ojeras, bolsas y líneas del contorno" },
      { id: "fil-agepurify", name: "AGE-PURIFY", para: "Arrugas e imperfecciones en piel mixta a grasa" },
      { id: "fil-skinprep", name: "SKIN-PREP", para: "Limpieza y desmaquillado" },
      { id: "fil-skinunify", name: "SKIN-UNIFY", para: "Manchas y tono irregular" },
      { id: "fil-procollagen", name: "PRO-COLLAGEN MICRO-GROWTH FACTOR", para: "Firmeza y efecto tensor" },
      { id: "fil-uv", name: "UV CELLULAR-PROTECT", para: "Protección solar y fotoenvejecimiento" },
      { id: "fil-daily", name: "DAILY", para: "Cuidado diario: textura, tono y luminosidad" },
      { id: "fil-debilitada", name: "Piel debilitada", para: "Piel frágil, seca o irritada" },
      { id: "fil-otros", name: "Otros tratamientos", para: "Líneas finas y manchas de las manos" }
    ]
  },

  {
    id: "sensilis",
    name: "Sensilis",
    lines: [
      { id: "sen-higiene", name: "Higiene", para: "Limpieza y desmaquillado" },
      { id: "sen-upgrade", name: "Upgrade", para: "Firmeza y arrugas" },
      { id: "sen-eternalist", name: "Eternalist A.G.E.", para: "Antiedad e inicio de la retinización" },
      { id: "sen-peptide", name: "Peptide [AR]", para: "Antiedad: firmeza y elasticidad" },
      { id: "sen-originpro", name: "Origin Pro EGF-5", para: "Todos los signos de la edad" },
      { id: "sen-originexo", name: "Origin Exo", para: "Regeneración de la piel con daño acumulado" },
      { id: "sen-supreme", name: "Supreme", para: "Elasticidad, firmeza e hidratación" },
      { id: "sen-skinglow", name: "Skin Glow", para: "Piel apagada y cansada" },
      { id: "sen-dpigment", name: "Skin D-Pigment", para: "Manchas e hiperpigmentaciones" },
      { id: "sen-skinrescue", name: "Skin Rescue", para: "Reparación tras procedimientos y rojeces" },
      { id: "sen-pureage", name: "Pure Age Perfection", para: "Acné adulto y arrugas en piel grasa" },
      { id: "sen-pure", name: "Pure", para: "Acné e imperfecciones" },
      { id: "sen-hyaluronic", name: "Hyaluronic", para: "Hidratación y relleno" },
      { id: "sen-hydraessence", name: "Hydra Essence", para: "Hidratación y calma" },
      { id: "sen-hydraction", name: "Hydraction", para: "Hidratación de labios" },
      { id: "sen-pretratamiento", name: "Pretratamiento", para: "Preparar la piel: renovación y luminosidad" },
      { id: "sen-azelaic", name: "Azelaic [Peel]", para: "Imperfecciones, manchas y rojeces" },
      { id: "sen-photo", name: "Photocorrection", para: "Protección solar con tratamiento" },
      { id: "sen-solares", name: "Solares", para: "Protección solar y bronceado sin sol" },
      { id: "sen-hair", name: "Hair & Scalp", para: "Cabello y cuero cabelludo" },
      { id: "sen-body", name: "Body Treatments", para: "Cuidado corporal y fragancias" },
      { id: "sen-makeup", name: "Maquillaje", para: "Maquillaje" }
    ]
  },

  { id: "isdin", name: "Isdin", lines: [] },

  {
    id: "lrp",
    name: "La Roche Posay",
    lines: [
      { id: "lrp-aguatermal", name: "Agua termal", para: "Limpieza micelar y calma de la piel sensible" },
      { id: "lrp-anthelios", name: "Anthelios", para: "Protección solar" },
      { id: "lrp-cicaplast", name: "Cicaplast", para: "Reparación de la piel irritada o dañada" },
      { id: "lrp-effaclar", name: "Effaclar", para: "Piel grasa con acné e imperfecciones" },
      { id: "lrp-hyalu", name: "Hyalu B5", para: "Arrugas e hidratación" },
      { id: "lrp-hydraphase", name: "Hydraphase", para: "Deshidratación" },
      { id: "lrp-kerium", name: "Kerium", para: "Cuero cabelludo sensible" },
      { id: "lrp-lipikar", name: "Lipikar", para: "Piel seca y atópica" },
      { id: "lrp-mela", name: "Mela B3", para: "Manchas e hiperpigmentaciones" },
      { id: "lrp-nutritic", name: "Nutritic", para: "Sequedad de rostro y labios" },
      { id: "lrp-physiological", name: "Physiological", para: "Limpieza de la piel sensible" },
      { id: "lrp-retinol", name: "Retinol", para: "Arrugas profundas y fotoenvejecimiento" },
      { id: "lrp-toleriane", name: "Toleriane", para: "Piel sensible, alérgica y con rojeces" },
      { id: "lrp-tolmake", name: "Toleriane maquillaje", para: "Maquillaje para piel sensible" },
      { id: "lrp-vitaminc", name: "Vitamin C", para: "Arrugas, luminosidad y tono" }
    ]
  },

  {
    id: "nuxe",
    name: "Nuxe",
    lines: [
      { id: "nx-hp", name: "Huile Prodigieuse®", para: "Nutrición de rostro, cuerpo y cabello" },
      { id: "nx-prodigieux", name: "Prodigieux® cuerpo y fragancia", para: "Cuidado corporal y fragancias" },
      { id: "nx-miel", name: "Rêve de Miel", para: "Piel seca: nutrición y confort" },
      { id: "nx-the", name: "Rêve de Thé", para: "Higiene corporal, desodorante y fragancia" },
      { id: "nx-rose", name: "Very Rose", para: "Limpieza y desmaquillado" },
      { id: "nx-cf", name: "Crème Fraîche de Beauté®", para: "Hidratación" },
      { id: "nx-ss", name: "Super Serum [10]", para: "Signos de la edad" },
      { id: "nx-nu", name: "Nuxuriance Ultra", para: "Antiedad global" },
      { id: "nx-ng", name: "Nuxuriance Gold", para: "Antiedad nutritivo para piel seca" },
      { id: "nx-ml", name: "Merveillance Lift", para: "Arrugas y firmeza" },
      { id: "nx-boost", name: "Prodigieuse Boost", para: "Piel apagada e hidratación" },
      { id: "nx-zinc", name: "Zinc Power", para: "Acné, poros y brillos" },
      { id: "nx-men", name: "Nuxe Men [BOOST]³", para: "Cuidado masculino" },
      { id: "nx-hair", name: "Hair Prodigieux®", para: "Cuidado del cabello" },
      { id: "nx-sun", name: "Nuxe Sun", para: "Protección solar" },
      { id: "nx-lemon", name: "Sweet Lemon", para: "Manos y labios secos" }
    ]
  },

  {
    id: "medik8",
    name: "Medik8",
    lines: [
      { id: "m8-limpiadores", name: "Limpiadores", para: "Limpieza y desmaquillado" },
      { id: "m8-acidos", name: "Ácidos directos", para: "Exfoliación: imperfecciones y luminosidad" },
      { id: "m8-vitc", name: "Sérums de vitamina C", para: "Luminosidad y envejecimiento prematuro" },
      { id: "m8-vita", name: "Vitamina A", para: "Arrugas, manchas y firmeza" },
      { id: "m8-serums", name: "Sérums de péptidos e hidratación", para: "Arrugas e hidratación" },
      { id: "m8-hidratantes", name: "Hidratantes", para: "Hidratación y barrera cutánea" },
      { id: "m8-ojos", name: "Ojos", para: "Arrugas, ojeras e hinchazón del contorno" },
      { id: "m8-solar", name: "Protección solar", para: "Protección solar" },
      { id: "m8-mascarillas", name: "Mascarillas", para: "Hidratación intensa" }
    ]
  },

  { id: "cantabria", name: "Cantabria Labs", lines: [] },

  { id: "uriage", name: "Uriage", lines: [] },

  { id: "avene", name: "Avène", lines: [] },

  {
    id: "gemaherrerias",
    name: "Gema Herrerías",
    lines: [
      { id: "gh-limpieza", name: "Limpieza", para: "Limpieza y desmaquillado" },
      { id: "gh-exfoliacion", name: "Exfoliación", para: "Renovación, manchas e imperfecciones" },
      { id: "gh-lociones", name: "Lociones y brumas", para: "Hidratación y equilibrio de la piel" },
      { id: "gh-antioxidantes", name: "Antioxidantes", para: "Manchas y signos de la edad" },
      { id: "gh-intensiva", name: "Acción intensiva", para: "Arrugas, flacidez, manchas e imperfecciones" },
      { id: "gh-barrera", name: "Hidratantes Función Barrera", para: "Hidratación y función barrera" },
      { id: "gh-ojos", name: "Contorno de ojos", para: "Arrugas, ojeras y bolsas" },
      { id: "gh-solar", name: "Protección solar", para: "Protección solar" },
      { id: "gh-complementos", name: "Complementos alimenticios", para: "Cuidado de la piel desde el interior" }
    ]
  },

  {
    id: "svr",
    name: "SVR",
    lines: [
      { id: "sv-sun", name: "Sun Secure", para: "Protección solar para piel sensible" },
      { id: "sv-ak", name: "AK Secure", para: "Prevención del daño actínico" },
      { id: "sv-sebiaclear", name: "Sebiaclear", para: "Piel mixta a grasa con acné" },
      { id: "sv-sensifine", name: "Sensifine", para: "Piel intolerante y polialérgica" },
      { id: "sv-sensifinear", name: "Sensifine AR", para: "Rojeces y vasos visibles" },
      { id: "sv-topialyse", name: "Topialyse", para: "Piel seca y atópica" },
      { id: "sv-palpebral", name: "Palpebral", para: "Párpados sensibles e irritados" },
      { id: "sv-xerial", name: "Xerial", para: "Piel áspera y seca del cuerpo" },
      { id: "sv-cicavit", name: "Cicavit+", para: "Reparación de la piel irritada o dañada" },
      { id: "sv-densitium", name: "Densitium", para: "Piel madura: arrugas y firmeza" },
      { id: "sv-biotic", name: "Biotic", para: "Arrugas y luminosidad" },
      { id: "sv-ab3c", name: "[A] [B3] [C]", para: "Arrugas, textura e hidratación" },
      { id: "sv-clairial", name: "Clairial", para: "Manchas e hiperpigmentaciones" },
      { id: "sv-hydraliane", name: "Hydraliane", para: "Deshidratación" },
      { id: "sv-physiopure", name: "Physiopure", para: "Limpieza y desmaquillado" },
      { id: "sv-spirial", name: "Spirial", para: "Transpiración" }
    ]
  }
];
