import { Bibliografias, Grupos } from "@/generated/client/deno/edge.ts";
import { z } from "zod";

const GroupSchema = z.object({
  pk_id_grup: z.number({
    required_error: "Id de grupo es requerido",
    invalid_type_error: "Id de grupo debe ser un numero",
  }),
  txt_nom_grup: z.string({
    required_error: "Nombre de grupo es requerido",
    invalid_type_error: "Nombre de grupo debe ser texto plano",
  }).nonempty({
    message: "Nombre de grupo es requerido",
  }),
  fk_id_est: z.string({
    required_error: "Id de estudiante es requerido",
    invalid_type_error: "Id de estudiante debe ser un UUID valido",
  }).uuid({
    message: "Id de estudiante debe ser un UUID valido",
  }).nonempty({
    message: "Id de estudiante es requerido",
  }),
});

export const CreateGroupSchema = GroupSchema.omit({
  pk_id_grup: true,
});

export type CreateGroup = z.infer<typeof CreateGroupSchema>;

export const UpdateGroupSchema = GroupSchema;

export type UpdateGroup = z.infer<typeof UpdateGroupSchema>;

export type GroupWithBibliographies = Grupos & {
  Bibliografias: Bibliografias[];
};
