import { z } from "zod";

export const StudentSchema = z.object({
  pk_id_est: z.string({
    invalid_type_error: "Id de estudiante debe ser texto plano",
    required_error: "Id de estudiante es requerido",
  }).uuid({
    message: "Id de estudiante debe ser un UUID valido",
  }),
  txt_user_est: z.string({
    invalid_type_error: "Usuario debe ser texto plano",
    required_error: "Usuario es requerido",
  }).nonempty({
    message: "Usuario es requerido",
  }),
  txt_email_est: z.string({
    invalid_type_error: "Correo electrónico debe ser texto plano",
    required_error: "Correo electrónico es requerido",
  }).email({
    message: "Correo electrónico invalido",
  }),
  txt_pass_est: z.string({
    invalid_type_error: "Contraseña debe ser texto plano",
    required_error: "Contraseña es requerido",
  }).min(8, {
    message: "Contraseña debe tener al menos 8 caracteres",
  }).max(128, {
    message: "Contraseña debe tener como maximo 128 caracteres",
  }),
  num_sub_est: z.number({
    invalid_type_error: "Tipo de suscripción debe ser un numero",
    required_error: "Tipo de suscripción es requerido",
  }).min(1, {
    message: "Tipo de suscripción debe ser un numero positivo",
  }).max(3, {
    message: "Tipo de suscripción debe ser un número valido",
  }),
});

export const NewStudentSchema = StudentSchema.omit({
  pk_id_est: true,
  num_sub_est: true,
}).merge(
  z.object({
    txt_pass_conf_est: z.string({
      invalid_type_error: "Confirmar contraseña debe ser texto plano",
      required_error: "Confirmar contraseña es requerida",
    }).min(8, {
      message: "Confirmar contraseña debe tener al menos 8 caracteres",
    }).max(128, {
      message: "Confirmar contraseña debe tener como maximo 128 caracteres",
    }),
  }),
).refine((data) => data.txt_pass_est === data.txt_pass_conf_est, {
  message: "Las contraseñas no coinciden",
  path: ["txt_pass_conf_est"],
});

export const LoginStudentSchema = StudentSchema.pick({
  txt_user_est: true,
  txt_pass_est: true,
});
