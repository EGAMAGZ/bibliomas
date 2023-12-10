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
});

export type BibliographieFile = z.infer<typeof BibliographieFileSchema>;
