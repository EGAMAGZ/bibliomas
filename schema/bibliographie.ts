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

export const MORE_TYPE_PUBLICATION = {
  ArticuloRevista: {
    name: "Artículo de Revista",
    value: "ArticuloRevista",
  },
  ArticuloPeriodico: {
    name: "Artículo de Periodico",
    value: "ArticuloPeriodico",
  },
  Peliculas: {
    name: "Películas",
    value: "Peliculas",
  },
  Varios: {
    name: "Varios",
    value: "Varios",
  },
} as const;

export const TypPublicationSchema = z.nativeEnum(
  TYPE_PUBLICATION,
);

export type TypePublication = z.infer<typeof TypPublicationSchema>;

export const TYPE_FORMATS = {
  Apa: "Apa",
  Chicago: "Chicago",
  Mla: "Mla",
  Ieee: "Ieee",
} as const;

export type TypeFormat = keyof typeof TYPE_FORMATS;

const WebSiteBibliographie = z.object({
  pk_id_biblio: z.number({
    invalid_type_error: "Id de bibliografía debe ser un numero",
    required_error: "Id de bibliografía es requerido",
  }).positive({
    message: "Id de bibliografía debe ser un numero positivo",
  }).safe({
    message: "Id de bibliografía debe ser un numero valido",
  }),
  txt_tip_biblio: z.nativeEnum(TYPE_PUBLICATION, {
    invalid_type_error: "Tipo de publicación debe ser una opción válida",
    required_error: "Tipo de publicación es requerido",
  }),
  txt_fmt_biblio: z.nativeEnum(TYPE_FORMATS, {
    invalid_type_error: "Formato de bibliografía debe ser una opción válida",
    required_error: "Formato de bibliografía es requerido",
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
  }).optional(),
  txt_url_biblio: z.string({
    invalid_type_error: "URL debe ser texto plano",
    required_error: "URL es requerido",
  }).url({
    message: "URL invalida",
  }).nonempty({
    message: "URL es requerido",
  }),
  txt_fecha_pub_biblio: z.number({
    required_error: "Fecha de publicacion es requerido",
    invalid_type_error: "Fecha de publicacion debe ser un numero",
  }).min(1000, {
    message: "Fecha de publicacion debe tener como minimo 1000",
  }).max(getActualYear(), {
    message: `Fecha de publicacion debe tener como maximo ${getActualYear()}`,
  }).optional(),
  txt_fecha_acc_biblio: z.coerce.date({
    required_error: "Fecha de acceso es requerido",
    invalid_type_error: "Fecha de acceso debe ser un fecha",
  }).max(new Date(), {
    message: `Fecha de acceso debe tener como maximo ${
      formatDate(new Date(), navigator.language)
    }`,
  }).optional(),
  fk_id_grup: z.number({
    invalid_type_error: "Id de grupo debe ser un numero",
    required_error: "Id de grupo es requerido",
  }).optional(),
  fk_id_carp: z.number({
    invalid_type_error: "Id de carpeta debe ser un numero",
    required_error: "Id de carpeta es requerido",
  }).optional(),
  fk_id_est: z.string({
    invalid_type_error: "Id de estante debe ser un texto",
    required_error: "Id de estante es requerido",
  }).nonempty({
    message: "Id de estante es requerido",
  }).uuid({
    message: "Id de estante invalido",
  }),
});

export const CreateWebSiteBibliographieSchema = WebSiteBibliographie.omit({
  pk_id_biblio: true,
});

export type CreateWebSiteBibliographie = z.infer<
  typeof CreateWebSiteBibliographieSchema
>;

export const UpdateWebSiteBibliographieSchema = WebSiteBibliographie;

export type UpdateWebSiteBibliographie = z.infer<
  typeof UpdateWebSiteBibliographieSchema
>;

const BookBibliographie = z.object({
  pk_id_biblio: z.number({
    invalid_type_error: "Id de bibliografía debe ser un numero",
    required_error: "Id de bibliografía es requerido",
  }).positive({
    message: "Id de bibliografía debe ser un numero positivo",
  }).safe({
    message: "Id de bibliografía debe ser un numero valido",
  }),
  txt_tip_biblio: z.nativeEnum(TYPE_PUBLICATION, {
    required_error: "Tipo de publicación es requerido",
    invalid_type_error: "Tipo de publicación debe ser una opción válida",
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
  txt_fecha_pub_biblio: z.number({
    required_error: "Fecha de publicacion es requerido",
    invalid_type_error: "Fecha de publicacion debe ser un numero",
  }).min(1000, {
    message: "Fecha de publicacion debe tener como minimo 1000",
  }).max(getActualYear(), {
    message: `Fecha de publicacion debe tener como maximo ${getActualYear()}`,
  }).optional(),
  txt_ubic_biblio: z.string({
    required_error: "Ubicacion es requerido",
    invalid_type_error: "Ubicacion debe ser texto plano",
  }).optional().nullable(),
  txt_edit_biblio: z.string({
    invalid_type_error: "Editorial debe ser texto plano",
    required_error: "Editorial es requerido",
  }).optional().nullable(),
  num_volm_biblio: z.number({
    invalid_type_error: "Volumen debe ser un numero",
    required_error: "Volumen es requerido",
  }).optional().nullable(),
  num_edic_biblio: z.number({
    invalid_type_error: "Edicion debe ser un numero",
    required_error: "Edicion es requerido",
  }).optional().nullable(),
  num_npag_biblio: z.number({
    invalid_type_error: "Numero de pagina debe ser un numero",
    required_error: "Numero de pagina es requerido",
  }).optional().nullable(),
  txt_url_biblio: z.string({
    invalid_type_error: "Url debe ser texto plano",
    required_error: "Url es requerido",
  }).url({
    message: "Url invalida",
  }).optional().or(z.literal("")),
  fk_id_grup: z.number({
    invalid_type_error: "Id de grupo debe ser un numero",
    required_error: "Id de grupo es requerido",
  }).optional(),
  fk_id_carp: z.number({
    invalid_type_error: "Id de carpeta debe ser un numero",
    required_error: "Id de carpeta es requerido",
  }).optional(),
  fk_id_est: z.string({
    invalid_type_error: "Id de estante debe ser un texto",
    required_error: "Id de estante es requerido",
  }).nonempty({
    message: "Id de estante es requerido",
  }).uuid({
    message: "Id de estante invalido",
  }),
});

export const CreateBookBibliographieSchema = BookBibliographie.omit({
  pk_id_biblio: true,
});

export type CreateBookBibliographie = z.infer<
  typeof CreateBookBibliographieSchema
>;

export const UpdateBookBibliographieSchema = BookBibliographie;

export type UpdateBookBibliographie = z.infer<
  typeof UpdateBookBibliographieSchema
>;

export const MoreBibliographieSchema = z.object({
  pk_id_biblio: z.number({
    invalid_type_error: "Id de bibliografía debe ser un numero",
    required_error: "Id de bibliografía es requerido",
  }).positive({
    message: "Id de bibliografía debe ser un numero positivo",
  }).safe({
    message: "Id de bibliografía debe ser un numero valido",
  }),
  txt_fmt_biblio: z.nativeEnum(TYPE_FORMATS, {
    required_error: "Formato de bibliografía es requerido",
    invalid_type_error: "Formato de bibliografía debe ser una opción válida",
  }),
  txt_tip_biblio: z.nativeEnum(TYPE_PUBLICATION, {
    required_error: "Tipo de publicación es requerido",
    invalid_type_error: "Tipo de publicación debe ser una opción válida",
  }),
  bool_online_biblio: z.boolean({
    invalid_type_error: "Fuente online debe ser booleano",
    required_error: "Fuente online es requerido",
  }).optional(),
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
  txt_fecha_pub_biblio: z.number({
    required_error: "Fecha de publicacion es requerido",
    invalid_type_error: "Fecha de publicacion debe ser un numero",
  }).min(1000, {
    message: "Fecha de publicacion debe tener como minimo 1000",
  }).max(getActualYear(), {
    message: `Fecha de publicacion debe tener como maximo ${getActualYear()}`,
  }).optional(),
  txt_edit_biblio: z.string({
    invalid_type_error: "Editorial debe ser texto plano",
    required_error: "Editorial es requerido",
  }).optional(),
  txt_url_biblio: z.string({
    invalid_type_error: "Url debe ser texto plano",
    required_error: "Url es requerido",
  }).url({
    message: "Url invalida",
  }).optional().or(z.literal("")),
  fk_id_grup: z.number({
    invalid_type_error: "Id de grupo debe ser un numero",
    required_error: "Id de grupo es requerido",
  }).optional(),
  fk_id_carp: z.number({
    invalid_type_error: "Id de carpeta debe ser un numero",
    required_error: "Id de carpeta es requerido",
  }).optional(),
  fk_id_est: z.string({
    invalid_type_error: "Id de estante debe ser un texto",
    required_error: "Id de estante es requerido",
  }).nonempty({
    message: "Id de estante es requerido",
  }).uuid({
    message: "Id de estante invalido",
  }),
});

export const CreateMoreBibliographieSchema = MoreBibliographieSchema.omit({
  pk_id_biblio: true,
});
export type CreateMoreBibliographie = z.infer<
  typeof CreateMoreBibliographieSchema
>;

export const UpdateMoreBibliographieSchema = MoreBibliographieSchema;

export type UpdateMoreBibliographie = z.infer<
  typeof UpdateMoreBibliographieSchema
>;

export const BibliographieSchema = z.object({
  pk_id_biblio: z.number({
    invalid_type_error: "Id de bibliografía debe ser un numero",
    required_error: "Id de bibliografía es requerido",
  }).positive({
    message: "Id de bibliografía debe ser un numero positivo",
  }).safe({
    message: "Id de bibliografía debe ser un numero valido",
  }),
  txt_tip_biblio: z.nativeEnum(TYPE_PUBLICATION, {
    required_error: "Tipo de publicación es requerido",
    invalid_type_error: "Tipo de publicación debe ser una opción válida",
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
  }).optional().nullable(),
  txt_url_biblio: z.string({
    invalid_type_error: "Url debe ser texto plano",
    required_error: "Url es requerido",
  }).url({
    message: "Url invalida",
  }).optional().or(z.literal("")),
  txt_fecha_pub_biblio: z.number({
    required_error: "Fecha de publicacion es requerido",
    invalid_type_error: "Fecha de publicacion debe ser un numero",
  }).min(1000, {
    message: "Fecha de publicacion debe tener como minimo 1000",
  }).max(getActualYear(), {
    message: `Fecha de publicacion debe tener como maximo ${getActualYear()}`,
  }).optional().nullable(),
  txt_fecha_acc_biblio: z.coerce.date({
    required_error: "Fecha de acceso es requerido",
    invalid_type_error: "Fecha de acceso debe ser un fecha",
  }).max(new Date(), {
    message: `Fecha de acceso debe tener como maximo ${
      formatDate(new Date(), navigator.language)
    }`,
  }).optional().nullable(),
  txt_ubic_biblio: z.string({
    required_error: "Ubicacion es requerido",
    invalid_type_error: "Ubicacion debe ser texto plano",
  }).optional().nullable(),
  txt_edit_biblio: z.string({
    invalid_type_error: "Editorial debe ser texto plano",
    required_error: "Editorial es requerido",
  }).optional().nullable(),
  num_volm_biblio: z.number({
    invalid_type_error: "Volumen debe ser un numero",
    required_error: "Volumen es requerido",
  }).optional().nullable(),
  num_edic_biblio: z.number({
    invalid_type_error: "Edicion debe ser un numero",
    required_error: "Edicion es requerido",
  }).optional().nullable(),
  num_npag_biblio: z.number({
    invalid_type_error: "Numero de pagina debe ser un numero",
    required_error: "Numero de pagina es requerido",
  }).optional().nullable(),
  bool_online_biblio: z.boolean({
    invalid_type_error: "Fuente online debe ser booleano",
    required_error: "Fuente online es requerido",
  }).optional().nullable(),
  fk_id_grup: z.number({
    invalid_type_error: "Id de grupo debe ser un numero",
    required_error: "Id de grupo es requerido",
  }).optional().nullable(),
  fk_id_carp: z.number({
    invalid_type_error: "Id de carpeta debe ser un numero",
    required_error: "Id de carpeta es requerido",
  }).optional().nullable(),
  fk_id_est: z.string({
    invalid_type_error: "Id de estante debe ser un texto",
    required_error: "Id de estante es requerido",
  }).nonempty({
    message: "Id de estante es requerido",
  }).uuid({
    message: "Id de estante invalido",
  }),
});

export const CreateBibliographieSchema = BibliographieSchema.omit({
  pk_id_biblio: true,
});

export const UpdateBibliographieSchema = BibliographieSchema;
