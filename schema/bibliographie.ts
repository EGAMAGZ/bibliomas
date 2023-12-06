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
  txt_url_biblio: z.string({
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
  // Libro
  txt_ubic_biblio: z.string({
    required_error: "Ubicacion es requerido",
    invalid_type_error: "Ubicacion debe ser texto plano",
  }).optional(),
  txt_edit_biblio: z.string({
    invalid_type_error: "Editorial debe ser texto plano",
    required_error: "Editorial es requerido",
  }).optional(),
  num_volm_biblio: z.number({
    invalid_type_error: "Volumen debe ser un numero",
    required_error: "Volumen es requerido",
  }).optional(),
  num_edic_biblio: z.number({
    invalid_type_error: "Edicion debe ser un numero",
    required_error: "Edicion es requerido",
  }).optional(),
  num_npag_biblio: z.number({
    invalid_type_error: "Numero de pagina debe ser un numero",
    required_error: "Numero de pagina es requerido",
  }).optional(),
  // More
  bool_online_biblio: z.boolean({
    invalid_type_error: "Fuente online debe ser booleano",
    required_error: "Fuente online es requerido",
  }).optional(),
});

const WebSiteBibliographie = Bibliographie.pick({
  pk_id_biblio: true,
  txt_tip_biblio: true,
  txt_fmt_biblio: true,
  txt_tit_biblio: true,
  txt_aut_biblio: true,
  txt_pag_biblio: true,
  txt_url_biblio: true,
  txt_fecha_pub_biblio: true,
  txt_fecha_acc_biblio: true,
});

export const CreateWebSiteBibliographieSchema = WebSiteBibliographie.omit({
  pk_id_biblio: true,
});

const BookBibliographie = Bibliographie.pick({
  pk_id_biblio: true,
  txt_tip_biblio: true,
  txt_fmt_biblio: true,
  txt_tit_biblio: true,
  txt_aut_biblio: true,
  txt_fecha_pub_biblio: true,
  txt_ubic_biblio: true,
  txt_edit_biblio: true,
  num_volm_biblio: true,
  num_edic_biblio: true,
  num_npag_biblio: true,
  txt_url_biblio: true,
}).partial({
  txt_url_biblio: true,
});

export const CreateBookBibliographieSchema = BookBibliographie.omit({
  pk_id_biblio: true,
});

export const MoreBibliographieSchema = Bibliographie.pick({
  pk_id_biblio: true,
  txt_fmt_biblio: true,
  txt_tip_biblio: true,
  bool_online_biblio: true,
  txt_tit_biblio: true,
  txt_aut_biblio: true,
  txt_fecha_pub_biblio: true,
  txt_edit_biblio: true,
  txt_url_biblio: true,
}).partial({
  txt_url_biblio: true,
  txt_fecha_pub_biblio: true,
});

export const CreateMoreBibliographieSchema = MoreBibliographieSchema.omit({
  pk_id_biblio: true,
});
