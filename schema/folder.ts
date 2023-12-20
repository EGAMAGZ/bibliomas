import { z } from "zod";
import { Bibliografias } from "@/generated/client/deno/edge.ts";
import { Carpetas } from "@/generated/client/deno/edge.ts";

const FolderSchema = z.object({
  pk_id_carp: z.number({
    required_error: "Id de carpeta es requerido",
    invalid_type_error: "Id de carpeta debe ser un numero",
  }),
  txt_nom_carp: z.string({
    required_error: "Nombre de carpeta es requerido",
    invalid_type_error: "Nombre de carpeta debe ser texto plano",
  }).nonempty({
    message: "Nombre de carpeta es requerido",
  }),
  fk_id_est: z.string({
    required_error: "Id de estudiante es requerido",
    invalid_type_error: "Id de estudiante debe ser un UUID valido",
  }).nonempty({
    message: "Id de estudiante es requerido",
  }),
  fk_id_grup: z.number({
    required_error: "Id de grupo es requerido",
    invalid_type_error: "Id de grupo debe ser un numero",
  }).optional(),
});

export const CreateFolderSchema = FolderSchema.omit({
  pk_id_carp: true,
});

export type CreateFolder = z.infer<typeof CreateFolderSchema>;

export const UpdateFolderSchema = FolderSchema;

export type UpdateFolder = z.infer<typeof UpdateFolderSchema>;

export type FolderWithBibliographies = Carpetas & {
  Bibliografias: Bibliografias[];
};
