import { z } from "zod";

export const StudentSchema = z.object({
  _id: z.coerce.number({
    required_error: "Id de estudiante es requerido",
    invalid_type_error: "Id de estudiante debe ser un numero",
  }).positive({
    message: "Id de estudiante debe ser un numero positivo",
  }).safe({
    message: "Id de estudiante debe ser un número valido",
  }),
  username: z.string({
    required_error: "Usuario es requerido",
    invalid_type_error: "Usuario debe ser texto plano",
  }).nonempty({
    message: "Usuario es requerido",
  }),
  email: z.string({
    required_error: "Correo electrónico es requerido",
    invalid_type_error: "Correo electrónico debe ser texto plano",
  }).email({
    message: "Correo electrónico invalido",
  }).nonempty({
    message: "Correo electrónico es requerido",
  }),
  password: z.string({
    required_error: "Contraseña es requerida",
    invalid_type_error: "Contraseña debe ser texto plano",
  }).min(8, {
    message: "Contraseña debe tener al menos 8 caracteres",
  }).max(128, {
    message: "Contraseña debe tener como maximo 128 caracteres",
  }),
  subscription: z.coerce.number({
    required_error: "Tipo de subscripción es requerido",
    invalid_type_error: "Tipo de subscripción debe ser un numero",
  }).min(1, {
    message: "Tipo de subscripción debe ser un número mayor a 1",
  }).max(3, {
    message: "Tipo de subscripción debe ser un numero menor a 3",
  }),
});

export const NewStudentSchema = StudentSchema.omit({
  subscription: true,
  _id: true,
}).merge(
  z.object({
    confirmPassword: z.string({
      invalid_type_error: "Confirmar contraseña debe ser texto plano",
      required_error: "Confirmar contraseña es requerida",
    }).min(8, {
      message: "Confirmar contraseña debe tener al menos 8 caracteres",
    }).max(128, {
      message: "Confirmar contraseña debe tener como maximo 128 caracteres",
    }),
  }),
).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});
