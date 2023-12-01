import { z } from "zod";
import { formatDate, getActualYear } from "@/utils/date.ts";

export const TYPE_PUBLICATION = {
  SitioWeb: "SitioWeb",
  Libro: "Libro",
  ArticuloRevista: "ArticuloRevista",
  ArticuloPeriodico: "ArticuloPeriodico",
  Peliculas: "Peliculas",
  Varios: "Varios",
} as const;

export type TypePublication = keyof typeof TYPE_PUBLICATION;

export const TYPE_FORMATS = {
  Apa: "Apa",
  Chicago: "Chicago",
  Mla: "Mla",
  Ieee: "Ieee",
} as const;

export type TypeFormat = keyof typeof TYPE_FORMATS;

const Bibliographie = z.object({
  pk_id_biblio: z.number({
    invalid_type_error: "Id de bibliografía debe ser un numero",
    required_error: "Id de bibliografía es requerido",
  }).positive({
    message: "Id de bibliografía debe ser un numero positivo",
  }).safe({
    message: "Id de bibliografía debe ser un numero valido",
  }),
  txt_tip_biblio: z.nativeEnum(TYPE_PUBLICATION, {
    required_error: "Tipo de bibliografía es requerido",
    invalid_type_error: "Tipo de bibliografía debe ser una opción válida",
  }),
  txt_fmt_biblio: z.nativeEnum(TYPE_FORMATS, {
    required_error: "Formato de bibliografía es requerido",
    invalid_type_error: "Formato de bibliografía debe ser una opción válida",
  }),
  txt_tit_biblio: z.string({
    invalid_type_error: "Título de bibliografía debe ser texto plano",
    required_error: "Título de bibliografía es requerido",
  }).nonempty({
    message: "Título de bibliografía es requerido",
  }),
  txt_aut_biblio: z.string({
    invalid_type_error: "Autores debe ser texto plano",
    required_error: "Autores es requerido",
  }).nonempty({
    message: "Autores es requerido",
  }),
  txt_pag_biblio: z.string({
    invalid_type_error: "Nombre de la página debe ser texto plano",
    required_error: "Nombre de la página es requerido",
  }).nonempty({
    message: "Nombre de la página es requerido",
  }),
  txt_dir_biblio: z.string({
    invalid_type_error: "URL debe ser texto plano",
    required_error: "URL es requerido",
  }).nonempty({
    message: "URL es requerido",
  }).url({
    message: "URL invalida",
  }),
  txt_fecha_pub_biblio: z.number({
    required_error: "Fecha de publicacion es requerido",
    invalid_type_error: "Fecha de publicacion debe ser un numero",
  }).min(1000, {
    message: "Fecha de publicacion debe tener como minimo 1000",
  }).max(getActualYear(), {
    message: `Fecha de publicacion debe tener como maximo ${getActualYear()}`,
  }),
  txt_fecha_acc_biblio: z.coerce.date({
    required_error: "Fecha de acceso es requerido",
    invalid_type_error: "Fecha de acceso debe ser un fecha",
  }).max(new Date(), {
    message: `Fecha de acceso debe tener como maximo ${
      formatDate(new Date(), navigator.language)
    }`,
  }).optional(),
});

const WebSiteBibliographie = Bibliographie.pick({
  pk_id_biblio: true,
  txt_tip_biblio: true,
  txt_fmt_biblio: true,
  txt_tit_biblio: true,
  txt_aut_biblio: true,
  txt_pag_biblio: true,
  txt_dir_biblio: true,
  txt_fecha_pub_biblio: true,
  txt_fecha_acc_biblio: true,
});

export const CreateWebSiteBibliographieSchema = WebSiteBibliographie.omit({
  pk_id_biblio: true,
});
