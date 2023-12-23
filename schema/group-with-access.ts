import { z } from "zod";

export const SearchInvitationSchema = z.object({
    fk_id_grup: z.coerce.number({
      required_error: "Id de grupo es requerido",
      invalid_type_error: "Id de grupo debe ser un numero",
    }).positive({
      message: "Id de grupo debe ser positivo",
    }),
    fk_id_est: z.string({
      required_error: "Id de estudiante es requerido",
      invalid_type_error: "Id de estudiante debe ser un UUID valido",
    }).uuid({
      message: "Id de estudiante debe ser un UUID valido",
    }),
  });
  
  export type StudentWithAccess = {
    fk_id_est: string;
    fk_id_grup: number;
    txt_user_est: string;
    bool_access_grup: boolean;
  };
  