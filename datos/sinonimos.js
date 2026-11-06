/* SINÓNIMOS DEL BUSCADOR
   Cada línea significa: si alguien busca esta palabra, busca también estas otras.
   Funciona en un solo sentido: para que valga en los dos, escribe las dos líneas.
   Da igual poner acentos o mayúsculas. Usa una sola palabra por término. */
var D = D || {};

D.sinonimos = {
  "rosácea": ["rojeces"],
  "rojeces": ["rosácea", "rojez"],
  "rojez": ["rojeces", "rosácea"],
  "enrojecimiento": ["rojeces", "rosácea"],
  "acné": ["imperfecciones", "granos"],
  "granos": ["acné", "imperfecciones"],
  "imperfecciones": ["acné", "granos"],
  "manchas": ["antimanchas", "hiperpigmentación"],
  "hiperpigmentación": ["manchas", "antimanchas"],
  "sequedad": ["seca", "secas"],
  "antiedad": ["arrugas", "firmeza"],
  "arrugas": ["antiarrugas", "antiedad"],
  "solar": ["fotoprotección", "spf50", "spf30"],
  "fotoprotección": ["solar"],
  "protector": ["solar"],
  "atopia": ["atópica"],
  "limpiador": ["limpiadora", "limpieza"],
  "exfoliante": ["peeling", "gommage"]
};
