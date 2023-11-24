export const TYPE_PUBLICATION = {
  SitioWeb: "SitioWeb",
  Libro: "Libro",
  Mas: "Mas",
} as const;

export type TypePublication = keyof typeof TYPE_PUBLICATION;
// export enum TypePublication {
//   SitioWeb = "SitioWeb",
//   Libro = "Libro",
//   Mas = "Mas",
// }
