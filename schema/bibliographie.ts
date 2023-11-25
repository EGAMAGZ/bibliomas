export const TYPE_PUBLICATION = {
  SitioWeb: "SitioWeb",
  Libro: "Libro",
  Mas: "Mas",
  ArticuloRevista: "ArticuloRevista",
  ArticuloPeriodico: "ArticuloPeriodico",
  Peliculas: "Peliculas",
  Varios: "Varios"
} as const;

export type TypePublication = keyof typeof TYPE_PUBLICATION;