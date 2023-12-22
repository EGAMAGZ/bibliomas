import { z } from "zod";

export const BibliographieFileSchema = z.object({
  fk_id_biblio: z.number({
    invalid_type_error: "Id de bibliografía debe ser un numero",
    required_error: "Id de bibliografía es requerido",
  }),
  txt_url_arch: z.string({
    invalid_type_error: "Path debe ser texto plano",
    required_error: "Path es requerido",
  }),
  pk_id_arch: z.number({
    invalid_type_error: "Id de archivo debe ser un numero",
    required_error: "Id de archivo es requerido",
  }).positive({
    message: "Id de archivo debe ser positivo",
  }),
});

export type BibliographieFile = z.infer<typeof BibliographieFileSchema>;

export const CreateBibliographieFileSchema = BibliographieFileSchema.omit({
  pk_id_arch: true,
});

export const UpdateBibliographieFileSchema = BibliographieFileSchema.omit({
  pk_id_arch: true,
});
